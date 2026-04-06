import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";

import type { PremiumEntitlementState } from "@/lib/constants/premium";
import { loadStoredPremiumState, saveStoredPremiumState } from "@/lib/storage/premium";
import {
  canUseRevenueCat,
  configurePurchases,
  getCurrentCustomerInfo,
  getCurrentOfferings,
  getRevenueCatConfig,
  hasPremiumEntitlement,
  purchaseLifetimePackage,
  resolveLifetimePackage,
  restoreRevenueCatPurchases
} from "@/features/premium/lib/purchases";
import { toPremiumError, type PremiumError } from "@/features/premium/lib/premium-errors";
import Purchases, { type CustomerInfo, type PurchasesOffering, type PurchasesPackage } from "react-native-purchases";

type PremiumContextValue = {
  entitlementState: PremiumEntitlementState;
  isPremiumUnlocked: boolean;
  isReady: boolean;
  isUsingRealPremium: boolean;
  isPurchaseInFlight: boolean;
  isRestoreInFlight: boolean;
  availableOffering: PurchasesOffering | null;
  availablePackage: PurchasesPackage | null;
  priceLabel: string | null;
  lastError: PremiumError | null;
  setEntitlementState: (state: PremiumEntitlementState) => Promise<void>;
  toggleMockPremium: () => Promise<void>;
  purchasePremium: () => Promise<void>;
  restorePurchases: () => Promise<void>;
  refreshCustomerInfo: () => Promise<void>;
};

const PremiumContext = createContext<PremiumContextValue | null>(null);

export function PremiumProvider({ children }: PropsWithChildren) {
  const [entitlementState, setEntitlementStateLocal] = useState<PremiumEntitlementState>("preview");
  const [isReady, setIsReady] = useState(false);
  const [isUsingRealPremium, setIsUsingRealPremium] = useState(false);
  const [availableOffering, setAvailableOffering] = useState<PurchasesOffering | null>(null);
  const [availablePackage, setAvailablePackage] = useState<PurchasesPackage | null>(null);
  const [isPurchaseInFlight, setIsPurchaseInFlight] = useState(false);
  const [isRestoreInFlight, setIsRestoreInFlight] = useState(false);
  const [lastError, setLastError] = useState<PremiumError | null>(null);

  useEffect(() => {
    let isMounted = true;
    let listener: ((info: CustomerInfo) => void) | undefined;

    const applyCustomerInfo = (customerInfo: CustomerInfo) => {
      if (!isMounted) {
        return;
      }

      setEntitlementStateLocal(hasPremiumEntitlement(customerInfo) ? "unlocked" : "preview");
    };

    async function bootstrap() {
      const stored = await loadStoredPremiumState();

      if (!isMounted) {
        return;
      }

      setEntitlementStateLocal(stored);

      const config = getRevenueCatConfig();

      if (!canUseRevenueCat(config)) {
        setIsUsingRealPremium(false);
        setIsReady(true);
        return;
      }

      try {
        const configured = await configurePurchases(config);

        if (!configured || !isMounted) {
          setIsUsingRealPremium(false);
          setIsReady(true);
          return;
        }

        listener = (customerInfo) => {
          applyCustomerInfo(customerInfo);
        };

        Purchases.addCustomerInfoUpdateListener(listener);

        const [customerInfo, offerings] = await Promise.all([getCurrentCustomerInfo(), getCurrentOfferings()]);

        if (!isMounted) {
          return;
        }

        setIsUsingRealPremium(true);
        applyCustomerInfo(customerInfo);
        setAvailableOffering(offerings.current);
        setAvailablePackage(resolveLifetimePackage(offerings.current));
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setLastError(toPremiumError(error));
        setIsUsingRealPremium(false);
        setEntitlementStateLocal("preview");
      } finally {
        if (isMounted) {
          setIsReady(true);
        }
      }
    }

    void bootstrap();

    return () => {
      isMounted = false;

      if (listener) {
        Purchases.removeCustomerInfoUpdateListener(listener);
      }
    };
  }, []);

  const value = useMemo<PremiumContextValue>(() => {
    return {
      entitlementState,
      isPremiumUnlocked: entitlementState === "unlocked",
      isReady,
      isUsingRealPremium,
      isPurchaseInFlight,
      isRestoreInFlight,
      availableOffering,
      availablePackage,
      priceLabel: availablePackage?.product.priceString ?? null,
      lastError,
      setEntitlementState: async (state) => {
        setEntitlementStateLocal(state);
        if (!isUsingRealPremium) {
          await saveStoredPremiumState(state);
        }
      },
      toggleMockPremium: async () => {
        if (isUsingRealPremium) {
          return;
        }

        const nextState: PremiumEntitlementState = entitlementState === "unlocked" ? "preview" : "unlocked";
        setEntitlementStateLocal(nextState);
        await saveStoredPremiumState(nextState);
      },
      purchasePremium: async () => {
        if (!isUsingRealPremium) {
          const nextState: PremiumEntitlementState = entitlementState === "unlocked" ? "preview" : "unlocked";
          setEntitlementStateLocal(nextState);
          await saveStoredPremiumState(nextState);
          return;
        }

        if (!availablePackage) {
          setLastError({
            code: "missing-package",
            message: "Premium is not ready to purchase yet."
          });
          return;
        }

        setIsPurchaseInFlight(true);
        setLastError(null);

        try {
          const result = await purchaseLifetimePackage(availablePackage);
          setEntitlementStateLocal(hasPremiumEntitlement(result.customerInfo) ? "unlocked" : "preview");
        } catch (error) {
          setLastError(toPremiumError(error, "purchase-failed"));
        } finally {
          setIsPurchaseInFlight(false);
        }
      },
      restorePurchases: async () => {
        if (!isUsingRealPremium) {
          return;
        }

        setIsRestoreInFlight(true);
        setLastError(null);

        try {
          const customerInfo = await restoreRevenueCatPurchases();
          setEntitlementStateLocal(hasPremiumEntitlement(customerInfo) ? "unlocked" : "preview");
        } catch (error) {
          setLastError(toPremiumError(error, "restore-failed"));
        } finally {
          setIsRestoreInFlight(false);
        }
      },
      refreshCustomerInfo: async () => {
        if (!isUsingRealPremium) {
          return;
        }

        setLastError(null);

        try {
          const [customerInfo, offerings] = await Promise.all([getCurrentCustomerInfo(), getCurrentOfferings()]);
          setEntitlementStateLocal(hasPremiumEntitlement(customerInfo) ? "unlocked" : "preview");
          setAvailableOffering(offerings.current);
          setAvailablePackage(resolveLifetimePackage(offerings.current));
        } catch (error) {
          setLastError(toPremiumError(error));
        }
      }
    };
  }, [
    availableOffering,
    availablePackage,
    entitlementState,
    isPurchaseInFlight,
    isReady,
    isRestoreInFlight,
    isUsingRealPremium,
    lastError
  ]);

  return <PremiumContext.Provider value={value}>{children}</PremiumContext.Provider>;
}

export function usePremiumContext() {
  const context = useContext(PremiumContext);

  if (!context) {
    throw new Error("usePremiumContext must be used within PremiumProvider");
  }

  return context;
}

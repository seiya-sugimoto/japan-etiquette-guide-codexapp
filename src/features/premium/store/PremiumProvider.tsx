import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";

import type { PremiumEntitlementState } from "@/lib/constants/premium";
import { loadStoredPremiumState, saveStoredPremiumState } from "@/lib/storage/premium";

type PremiumContextValue = {
  entitlementState: PremiumEntitlementState;
  isPremiumUnlocked: boolean;
  isReady: boolean;
  setEntitlementState: (state: PremiumEntitlementState) => Promise<void>;
  toggleMockPremium: () => Promise<void>;
};

const PremiumContext = createContext<PremiumContextValue | null>(null);

export function PremiumProvider({ children }: PropsWithChildren) {
  const [entitlementState, setEntitlementStateLocal] = useState<PremiumEntitlementState>("preview");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadStoredPremiumState()
      .then((stored) => {
        setEntitlementStateLocal(stored);
      })
      .finally(() => setIsReady(true));
  }, []);

  const value = useMemo<PremiumContextValue>(() => {
    return {
      entitlementState,
      isPremiumUnlocked: entitlementState === "unlocked",
      isReady,
      setEntitlementState: async (state) => {
        setEntitlementStateLocal(state);
        await saveStoredPremiumState(state);
      },
      toggleMockPremium: async () => {
        const nextState: PremiumEntitlementState = entitlementState === "unlocked" ? "preview" : "unlocked";
        setEntitlementStateLocal(nextState);
        await saveStoredPremiumState(nextState);
      }
    };
  }, [entitlementState, isReady]);

  return <PremiumContext.Provider value={value}>{children}</PremiumContext.Provider>;
}

export function usePremiumContext() {
  const context = useContext(PremiumContext);

  if (!context) {
    throw new Error("usePremiumContext must be used within PremiumProvider");
  }

  return context;
}

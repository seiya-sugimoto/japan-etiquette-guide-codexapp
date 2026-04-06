import Constants, { ExecutionEnvironment } from "expo-constants";
import { Platform } from "react-native";
import Purchases, {
  type CustomerInfo,
  type PurchasesOffering,
  type PurchasesPackage,
  LOG_LEVEL
} from "react-native-purchases";

export type RevenueCatConfig = {
  iosApiKey: string;
  entitlementId: string;
  offeringId: string;
  packageType: "lifetime";
};

const defaultRevenueCatConfig: RevenueCatConfig = {
  iosApiKey: "",
  entitlementId: "premium",
  offeringId: "default",
  packageType: "lifetime"
};

export function getRevenueCatConfig(): RevenueCatConfig {
  const config = Constants.expoConfig?.extra?.revenueCat as Partial<RevenueCatConfig> | undefined;

  return {
    iosApiKey: config?.iosApiKey ?? defaultRevenueCatConfig.iosApiKey,
    entitlementId: config?.entitlementId ?? defaultRevenueCatConfig.entitlementId,
    offeringId: config?.offeringId ?? defaultRevenueCatConfig.offeringId,
    packageType: config?.packageType ?? defaultRevenueCatConfig.packageType
  };
}

export function canUseRevenueCat(config = getRevenueCatConfig()) {
  if (Platform.OS !== "ios") {
    return false;
  }

  if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
    return false;
  }

  return config.iosApiKey.trim().length > 0;
}

export async function configurePurchases(config = getRevenueCatConfig()) {
  if (!canUseRevenueCat(config)) {
    return false;
  }

  if (!(await Purchases.isConfigured())) {
    Purchases.setLogLevel(LOG_LEVEL.INFO);
    Purchases.configure({ apiKey: config.iosApiKey });
  }

  return true;
}

export async function getCurrentOfferings() {
  return Purchases.getOfferings();
}

export async function getCurrentCustomerInfo() {
  return Purchases.getCustomerInfo();
}

export function getActiveEntitlement(customerInfo: CustomerInfo, entitlementId = getRevenueCatConfig().entitlementId) {
  return customerInfo.entitlements.active[entitlementId] ?? null;
}

export function hasPremiumEntitlement(customerInfo: CustomerInfo, entitlementId = getRevenueCatConfig().entitlementId) {
  return Boolean(getActiveEntitlement(customerInfo, entitlementId)?.isActive);
}

export function resolveLifetimePackage(offering: PurchasesOffering | null) {
  if (!offering) {
    return null;
  }

  return (
    offering.lifetime ??
    offering.availablePackages.find((candidate) => candidate.packageType === Purchases.PACKAGE_TYPE.LIFETIME) ??
    offering.availablePackages[0] ??
    null
  );
}

export async function purchaseLifetimePackage(aPackage: PurchasesPackage) {
  return Purchases.purchasePackage(aPackage);
}

export async function restoreRevenueCatPurchases() {
  return Purchases.restorePurchases();
}

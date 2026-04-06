import type { ExpoConfig } from "expo/config";

const revenueCatIosApiKey = process.env.EXPO_PUBLIC_REVENUECAT_IOS_API_KEY ?? "";
const revenueCatEntitlementId = process.env.EXPO_PUBLIC_REVENUECAT_ENTITLEMENT_ID ?? "premium";
const revenueCatOfferingId = process.env.EXPO_PUBLIC_REVENUECAT_OFFERING_ID ?? "default";
const revenueCatPackageType = process.env.EXPO_PUBLIC_REVENUECAT_PACKAGE_TYPE ?? "lifetime";

const config: ExpoConfig = {
  name: "Japan Etiquette Guide",
  slug: "japan-etiquette-guide",
  scheme: "japan-etiquette-guide",
  version: "1.0.0",
  description: "A calm etiquette guide that helps first-time visitors to Japan avoid common mistakes and understand everyday situations.",
  orientation: "portrait",
  userInterfaceStyle: "light",
  primaryColor: "#500C07",
  ios: {
    supportsTablet: false
  },
  extra: {
    revenueCat: {
      iosApiKey: revenueCatIosApiKey,
      entitlementId: revenueCatEntitlementId,
      offeringId: revenueCatOfferingId,
      packageType: revenueCatPackageType
    }
  },
  plugins: ["expo-router", "expo-localization"],
  experiments: {
    typedRoutes: true
  }
};

export default config;

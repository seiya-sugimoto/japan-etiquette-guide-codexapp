import AsyncStorage from "@react-native-async-storage/async-storage";

import type { PremiumEntitlementState } from "@/lib/constants/premium";

const PREMIUM_STATE_KEY = "premium.entitlementState";

export function normalizeStoredPremiumState(value: string | null | undefined): PremiumEntitlementState {
  return value === "unlocked" ? "unlocked" : "preview";
}

export async function loadStoredPremiumState() {
  const stored = await AsyncStorage.getItem(PREMIUM_STATE_KEY);
  return normalizeStoredPremiumState(stored);
}

export async function saveStoredPremiumState(state: PremiumEntitlementState) {
  await AsyncStorage.setItem(PREMIUM_STATE_KEY, state);
}

import { usePremiumStore } from "@/features/premium/store/premiumStore";

export function usePremium() {
  return usePremiumStore();
}

import { usePremiumContext } from "@/features/premium/store/PremiumProvider";

export function usePremium() {
  return usePremiumContext();
}

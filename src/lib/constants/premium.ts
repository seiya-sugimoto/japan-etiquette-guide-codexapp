import type { CategoryId, PremiumContentTier } from "@/types/category";

export type PremiumEntitlementState = "preview" | "unlocked";

export const previewCategoryIds: CategoryId[] = [
  "onsen",
  "shrine",
  "temple",
  "bicycle"
];

export const premiumOnlyCategoryIds: CategoryId[] = [
  "ryokan",
  "visiting-home",
  "residential-private",
  "hostel-dorm",
  "all-you-can-drink",
  "karaoke",
  "live-concert",
  "sports-event",
  "theme-park",
  "rental-car"
];

export function getCategoryPremiumTier(categoryId: CategoryId): PremiumContentTier {
  if (premiumOnlyCategoryIds.includes(categoryId)) {
    return "premium-only";
  }

  if (previewCategoryIds.includes(categoryId)) {
    return "preview";
  }

  return "free";
}

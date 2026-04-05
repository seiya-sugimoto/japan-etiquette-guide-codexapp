import type { CategoryId, PremiumContentTier } from "@/types/category";

export type PremiumEntitlementState = "preview" | "unlocked";

export const previewCategoryIds: CategoryId[] = [
  "onsen",
  "shrine",
  "temple",
  "ryokan",
  "visiting-home",
  "residential-private",
  "bicycle"
];

export const premiumOnlyCategoryIds: CategoryId[] = [];

export function getCategoryPremiumTier(categoryId: CategoryId): PremiumContentTier {
  if (premiumOnlyCategoryIds.includes(categoryId)) {
    return "premium-only";
  }

  if (previewCategoryIds.includes(categoryId)) {
    return "preview";
  }

  return "free";
}

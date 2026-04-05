import type { CategoryId, PremiumContentTier } from "@/types/category";

export type PremiumEntitlementState = "preview" | "unlocked";
export type PremiumPackId = "special-stays" | "social-nightlife" | "events-crowds" | "independent-travel";

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

export const premiumPacks: {
  id: PremiumPackId;
  categoryIds: CategoryId[];
}[] = [
  {
    id: "special-stays",
    categoryIds: ["ryokan", "visiting-home", "residential-private", "hostel-dorm"]
  },
  {
    id: "social-nightlife",
    categoryIds: ["all-you-can-drink", "karaoke"]
  },
  {
    id: "events-crowds",
    categoryIds: ["live-concert", "sports-event", "theme-park"]
  },
  {
    id: "independent-travel",
    categoryIds: ["rental-car"]
  }
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

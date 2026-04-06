import type { CategoryId, PremiumDeepDive } from "@/types/category";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

// Thai currently falls back to the English premium deep dives via getLocalizedPremiumDeepDive.
// We keep this file explicit so locale wiring remains stable while native Thai copy is added in batches.
export const thaiPremiumDeepDive: PremiumDeepDiveMap = {};

import { getCategories } from "@/data/categories";
import { getCategoryPremiumTier } from "@/lib/constants/premium";
import type { PremiumContentTier } from "@/types/category";
import type { AppLanguage } from "@/types/language";

export function filterCategories(
  language: AppLanguage = "en",
  access?: "free" | "premium",
  premiumTier?: PremiumContentTier
) {
  const categories = getCategories(language);

  if (premiumTier) {
    return categories.filter((item) => getCategoryPremiumTier(item.id) === premiumTier);
  }

  return access ? categories.filter((item) => item.access === access) : categories;
}

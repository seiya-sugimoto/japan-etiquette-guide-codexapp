import { getCategories } from "@/data/categories";
import type { AppLanguage } from "@/types/language";

export function getCategoryBySlug(slug: string, language: AppLanguage = "en") {
  return getCategories(language).find((category) => category.slug === slug);
}

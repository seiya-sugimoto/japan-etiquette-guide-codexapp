import { getCategories } from "@/data/categories";
import type { AppLanguage } from "@/types/language";

export function searchCategories(query: string, language: AppLanguage = "en") {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return getCategories(language);
  }

  return getCategories(language).filter((category) => {
    return [category.title, category.shortDescription, ...category.tags]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  });
}

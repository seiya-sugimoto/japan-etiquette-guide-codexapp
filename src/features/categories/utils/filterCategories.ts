import { getCategories } from "@/data/categories";
import type { AppLanguage } from "@/types/language";

export function filterCategories(language: AppLanguage = "en", access?: "free" | "premium") {
  return access ? getCategories(language).filter((item) => item.access === access) : getCategories(language);
}

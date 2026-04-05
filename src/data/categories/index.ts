import { englishCategories } from "@/data/categories/en";
import { spanishCategoryContent } from "@/data/categories/es";
import { frenchCategoryContent } from "@/data/categories/fr";
import { additionalJapaneseCategoryContent } from "@/data/categories/ja-additional";
import { japaneseCategoryContent } from "@/data/categories/ja";
import { additionalKoreanCategoryContent } from "@/data/categories/ko-additional";
import { koreanCategoryContent } from "@/data/categories/ko";
import { thaiCategoryContent } from "@/data/categories/th";
import { vietnameseCategoryContent } from "@/data/categories/vi";
import { additionalTraditionalChineseCategoryContent } from "@/data/categories/zh-Hant-additional";
import { traditionalChineseCategoryContent } from "@/data/categories/zh-Hant";
import { additionalSimplifiedChineseCategoryContent } from "@/data/categories/zh-Hans-additional";
import { simplifiedChineseCategoryContent } from "@/data/categories/zh-Hans";
import { getCategoryPremiumTier } from "@/lib/constants/premium";
import { localizedCategoryCopy } from "@/lib/i18n/translations";
import type { Category, CategoryAccess, CategoryContent, CategoryId } from "@/types/category";
import type { AppLanguage } from "@/types/language";

const japaneseContent = { ...japaneseCategoryContent, ...additionalJapaneseCategoryContent };
const koreanContent = { ...koreanCategoryContent, ...additionalKoreanCategoryContent };
const traditionalChineseContent = {
  ...traditionalChineseCategoryContent,
  ...additionalTraditionalChineseCategoryContent
};
const simplifiedChineseContent = {
  ...simplifiedChineseCategoryContent,
  ...additionalSimplifiedChineseCategoryContent
};
const thaiContent = { ...thaiCategoryContent };
const frenchContent = { ...frenchCategoryContent };
const spanishContent = { ...spanishCategoryContent };
const vietnameseContent = { ...vietnameseCategoryContent };

function getLocalizedContent(language: AppLanguage, categoryId: CategoryId, fallback: CategoryContent) {
  switch (language) {
    case "ja":
      return japaneseContent[categoryId] ?? fallback;
    case "ko":
      return koreanContent[categoryId] ?? fallback;
    case "zh-Hant":
      return traditionalChineseContent[categoryId] ?? fallback;
    case "zh-Hans":
      return simplifiedChineseContent[categoryId] ?? fallback;
    case "th":
      return thaiContent[categoryId] ?? fallback;
    case "fr":
      return frenchContent[categoryId] ?? fallback;
    case "es":
      return spanishContent[categoryId] ?? fallback;
    case "vi":
      return vietnameseContent[categoryId] ?? fallback;
    default:
      return fallback;
  }
}

export function getCategories(language: AppLanguage = "en"): Category[] {
  return englishCategories.map((category) => {
    const copy = localizedCategoryCopy[language][category.id];
    const premiumTier = getCategoryPremiumTier(category.id);
    const access: CategoryAccess = premiumTier === "free" ? "free" : "premium";

    return {
      ...category,
      access,
      premiumTier,
      title: copy?.title ?? category.title,
      shortDescription: copy?.shortDescription ?? category.shortDescription,
      content: getLocalizedContent(language, category.id, category.content)
    };
  });
}

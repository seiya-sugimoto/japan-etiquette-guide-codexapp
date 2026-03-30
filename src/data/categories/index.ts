import { englishCategories } from "@/data/categories/en";
import { additionalJapaneseCategoryContent } from "@/data/categories/ja-additional";
import { japaneseCategoryContent } from "@/data/categories/ja";
import { additionalKoreanCategoryContent } from "@/data/categories/ko-additional";
import { koreanCategoryContent } from "@/data/categories/ko";
import { additionalTraditionalChineseCategoryContent } from "@/data/categories/zh-Hant-additional";
import { traditionalChineseCategoryContent } from "@/data/categories/zh-Hant";
import { additionalSimplifiedChineseCategoryContent } from "@/data/categories/zh-Hans-additional";
import { simplifiedChineseCategoryContent } from "@/data/categories/zh-Hans";
import { localizedCategoryCopy } from "@/lib/i18n/translations";
import type { CategoryContent, CategoryId } from "@/types/category";
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
    default:
      return fallback;
  }
}

export function getCategories(language: AppLanguage = "en") {
  return englishCategories.map((category) => {
    const copy = localizedCategoryCopy[language][category.id];

    return {
      ...category,
      title: copy?.title ?? category.title,
      shortDescription: copy?.shortDescription ?? category.shortDescription,
      content: getLocalizedContent(language, category.id, category.content)
    };
  });
}

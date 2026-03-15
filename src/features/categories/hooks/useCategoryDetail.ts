import { useMemo } from "react";

import { getCategoryBySlug } from "@/features/categories/utils/getCategoryBySlug";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";

export function useCategoryDetail(slug: string) {
  const { currentLanguage } = useAppLanguage();

  return useMemo(() => getCategoryBySlug(slug, currentLanguage), [currentLanguage, slug]);
}

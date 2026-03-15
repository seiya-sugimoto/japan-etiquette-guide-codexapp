import { useMemo } from "react";

import { getCategories } from "@/data/categories";
import { useAppLanguage } from "@/features/localization/hooks/useAppLanguage";

export function useCategories() {
  const { currentLanguage } = useAppLanguage();

  return useMemo(() => getCategories(currentLanguage), [currentLanguage]);
}

import { useState } from "react";

import type { AppLanguage } from "@/types/language";

export function useLanguageStore() {
  const [currentLanguage] = useState<AppLanguage>("en");

  return { currentLanguage };
}

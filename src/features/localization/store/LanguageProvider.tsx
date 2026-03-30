import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { getLocales } from "expo-localization";

import {
  getLanguageLabel,
  localizedCategoryCopy,
  localizedRecentSearches,
  localizedSuggestedTopics,
  type SuggestedTopic,
  supportedLanguages,
  translations
} from "@/lib/i18n/translations";
import { loadStoredLanguage, saveStoredLanguage } from "@/lib/storage/settings";
import type { AppLanguage } from "@/types/language";

type LanguageContextValue = {
  currentLanguage: AppLanguage;
  isReady: boolean;
  setLanguage: (language: AppLanguage) => Promise<void>;
  t: (typeof translations)["en"];
  supportedLanguages: typeof supportedLanguages;
  suggestedTopics: SuggestedTopic[];
  recentSearches: string[];
  getCategoryCopy: (categoryId: string) => { title: string; shortDescription: string } | undefined;
  getLanguageLabel: (language: AppLanguage) => string;
  deviceSuggestedLanguage: AppLanguage;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolveDeviceLanguage(): AppLanguage {
  const locale = getLocales()[0];
  const code = locale?.languageTag ?? locale?.languageCode ?? "en";

  if (code.startsWith("ja")) return "ja";
  if (code.startsWith("ko")) return "ko";
  if (code.startsWith("zh-Hant") || code.toLowerCase().includes("tw")) return "zh-Hant";
  if (code.startsWith("zh")) return "zh-Hans";
  if (code.startsWith("th")) return "th";
  if (code.startsWith("fr")) return "fr";
  if (code.startsWith("es")) return "es";
  if (code.startsWith("vi")) return "vi";
  return "en";
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [currentLanguage, setCurrentLanguage] = useState<AppLanguage>("en");
  const [isReady, setIsReady] = useState(false);
  const deviceSuggestedLanguage = resolveDeviceLanguage();

  useEffect(() => {
    loadStoredLanguage()
      .then((stored) => {
        setCurrentLanguage(stored ?? deviceSuggestedLanguage);
      })
      .finally(() => setIsReady(true));
  }, [deviceSuggestedLanguage]);

  const value = useMemo<LanguageContextValue>(() => {
    return {
      currentLanguage,
      isReady,
      setLanguage: async (language) => {
        setCurrentLanguage(language);
        await saveStoredLanguage(language);
      },
      t: translations[currentLanguage],
      supportedLanguages,
      suggestedTopics: localizedSuggestedTopics[currentLanguage],
      recentSearches: localizedRecentSearches[currentLanguage],
      getCategoryCopy: (categoryId: string) => localizedCategoryCopy[currentLanguage][categoryId],
      getLanguageLabel,
      deviceSuggestedLanguage
    };
  }, [currentLanguage, deviceSuggestedLanguage, isReady]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguageContext must be used within LanguageProvider");
  }

  return context;
}

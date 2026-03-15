import { useLanguageContext } from "@/features/localization/store/LanguageProvider";

export function useAppLanguage() {
  return useLanguageContext();
}

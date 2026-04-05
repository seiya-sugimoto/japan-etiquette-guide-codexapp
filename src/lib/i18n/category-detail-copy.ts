import type { AppLanguage } from "@/types/language";

const moreNotesHeadingByLanguage: Record<AppLanguage, string> = {
  en: "Good to know",
  ja: "補足メモ",
  ko: "알아두면 좋아요",
  "zh-Hant": "補充提醒",
  "zh-Hans": "补充提醒",
  th: "เกร็ดที่ควรรู้",
  fr: "Bon a savoir",
  es: "Bueno saberlo",
  vi: "Dieu nen biet"
};

export function getCategoryDetailCopy(language: AppLanguage) {
  return {
    moreNotesHeading: moreNotesHeadingByLanguage[language]
  };
}

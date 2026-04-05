import type { AppLanguage } from "@/types/language";

const premiumDeepDiveCopyByLanguage: Record<
  AppLanguage,
  {
    badge: string;
    title: string;
    body: string;
    culturalNotesHeading: string;
    phraseCardsHeading: string;
    checklistHeading: string;
    useWhenLabel: string;
  }
> = {
  en: {
    badge: "Premium deep dive",
    title: "Go one layer deeper",
    body: "These notes are meant for moments where the basic rule is not enough and tone matters more than memorizing a script.",
    culturalNotesHeading: "Why this feels respectful",
    phraseCardsHeading: "Useful ways to ask",
    checklistHeading: "Quick check before you act",
    useWhenLabel: "Helpful when"
  },
  ja: {
    badge: "プレミアムガイド",
    title: "もう一歩深くわかる内容",
    body: "基本ルールだけでは迷いやすい場面で、空気感や聞き方までつかみやすくするための補足です。",
    culturalNotesHeading: "この気づきが役立つ理由",
    phraseCardsHeading: "使いやすいひとこと",
    checklistHeading: "行動前のチェック",
    useWhenLabel: "こんなときに便利"
  },
  ko: {
    badge: "Premium deep dive",
    title: "Go one layer deeper",
    body: "These notes help when the basic rule is not enough and tone matters more than perfect wording.",
    culturalNotesHeading: "Why this feels respectful",
    phraseCardsHeading: "Useful ways to ask",
    checklistHeading: "Quick check before you act",
    useWhenLabel: "Helpful when"
  },
  "zh-Hant": {
    badge: "Premium deep dive",
    title: "Go one layer deeper",
    body: "These notes help when the basic rule is not enough and tone matters more than perfect wording.",
    culturalNotesHeading: "Why this feels respectful",
    phraseCardsHeading: "Useful ways to ask",
    checklistHeading: "Quick check before you act",
    useWhenLabel: "Helpful when"
  },
  "zh-Hans": {
    badge: "Premium deep dive",
    title: "Go one layer deeper",
    body: "These notes help when the basic rule is not enough and tone matters more than perfect wording.",
    culturalNotesHeading: "Why this feels respectful",
    phraseCardsHeading: "Useful ways to ask",
    checklistHeading: "Quick check before you act",
    useWhenLabel: "Helpful when"
  },
  th: {
    badge: "Premium deep dive",
    title: "Go one layer deeper",
    body: "These notes help when the basic rule is not enough and tone matters more than perfect wording.",
    culturalNotesHeading: "Why this feels respectful",
    phraseCardsHeading: "Useful ways to ask",
    checklistHeading: "Quick check before you act",
    useWhenLabel: "Helpful when"
  },
  fr: {
    badge: "Guide premium",
    title: "Aller un peu plus loin",
    body: "Ces notes aident quand la règle de base ne suffit pas et que le ton compte plus qu'une formule parfaite.",
    culturalNotesHeading: "Pourquoi cela paraît respectueux",
    phraseCardsHeading: "Phrases utiles",
    checklistHeading: "Vérification rapide",
    useWhenLabel: "Utile quand"
  },
  es: {
    badge: "Guía premium",
    title: "Ir un paso más allá",
    body: "Estas notas ayudan cuando la regla básica no basta y el tono importa más que una frase perfecta.",
    culturalNotesHeading: "Por qué esto se siente respetuoso",
    phraseCardsHeading: "Frases útiles",
    checklistHeading: "Chequeo rápido",
    useWhenLabel: "Útil cuando"
  },
  vi: {
    badge: "Giai thich premium",
    title: "Di sau hon mot tang",
    body: "Nhung ghi chu nay giup trong nhung luc quy tac co ban chua du va cach noi quan trong hon viec thuoc long.",
    culturalNotesHeading: "Vi sao dieu nay duoc xem la tinh te",
    phraseCardsHeading: "Cau noi de dung",
    checklistHeading: "Kiem tra nhanh truoc khi lam",
    useWhenLabel: "Huu ich khi"
  }
};

export function getPremiumDeepDiveCopy(language: AppLanguage) {
  return premiumDeepDiveCopyByLanguage[language];
}

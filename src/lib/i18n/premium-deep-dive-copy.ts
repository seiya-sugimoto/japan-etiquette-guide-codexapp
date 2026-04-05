import type { AppLanguage } from "@/types/language";

const premiumDeepDiveCopyByLanguage: Record<
  AppLanguage,
  {
    badge: string;
    title: string;
    body: string;
    culturalNotesHeading: string;
    situationsHeading: string;
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
    situationsHeading: "Awkward moments to avoid",
    phraseCardsHeading: "Useful ways to ask",
    checklistHeading: "Quick check before you act",
    useWhenLabel: "Helpful when"
  },
  ja: {
    badge: "プレミアムガイド",
    title: "もう一歩深くわかる内容",
    body: "基本ルールだけでは迷いやすい場面で、空気感や聞き方までつかみやすくするための補足です。",
    culturalNotesHeading: "この気づきが役立つ理由",
    situationsHeading: "気まずくなりやすい場面",
    phraseCardsHeading: "使いやすいひとこと",
    checklistHeading: "行動前のチェック",
    useWhenLabel: "こんなときに便利"
  },
  ko: {
    badge: "프리미엄 가이드",
    title: "한 단계 더 깊게 이해하기",
    body: "기본 규칙만으로는 충분하지 않고, 딱 맞는 표현보다 분위기와 톤이 더 중요한 순간을 위한 메모입니다.",
    culturalNotesHeading: "왜 이렇게 하면 자연스러운가",
    situationsHeading: "어색해지기 쉬운 순간",
    phraseCardsHeading: "바로 쓰기 좋은 말",
    checklistHeading: "행동 전 빠른 체크",
    useWhenLabel: "이럴 때 유용해요"
  },
  "zh-Hant": {
    badge: "Premium 深入指南",
    title: "再多懂一層",
    body: "這些內容是給那種基本規則不一定夠、比起完美句子更需要拿捏語氣和氣氛的時候看的。",
    culturalNotesHeading: "為什麼這樣會更自然",
    situationsHeading: "容易變尷尬的時刻",
    phraseCardsHeading: "好用的詢問方式",
    checklistHeading: "行動前快速確認",
    useWhenLabel: "適合這種情況"
  },
  "zh-Hans": {
    badge: "Premium 深入指南",
    title: "再多懂一层",
    body: "这些内容是给那种基本规则不一定够、比起完美句子更需要拿捏语气和氛围的时候看的。",
    culturalNotesHeading: "为什么这样会更自然",
    situationsHeading: "容易变尴尬的时刻",
    phraseCardsHeading: "好用的询问方式",
    checklistHeading: "行动前快速确认",
    useWhenLabel: "适合这种情况"
  },
  th: {
    badge: "Premium deep dive",
    title: "Go one layer deeper",
    body: "These notes help when the basic rule is not enough and tone matters more than perfect wording.",
    culturalNotesHeading: "Why this feels respectful",
    situationsHeading: "Awkward moments to avoid",
    phraseCardsHeading: "Useful ways to ask",
    checklistHeading: "Quick check before you act",
    useWhenLabel: "Helpful when"
  },
  fr: {
    badge: "Guide premium",
    title: "Aller un peu plus loin",
    body: "Ces notes aident quand la règle de base ne suffit pas et que le ton compte plus qu'une formule parfaite.",
    culturalNotesHeading: "Pourquoi cela paraît respectueux",
    situationsHeading: "Moments faciles à rater",
    phraseCardsHeading: "Phrases utiles",
    checklistHeading: "Vérification rapide",
    useWhenLabel: "Utile quand"
  },
  es: {
    badge: "Guía premium",
    title: "Ir un paso más allá",
    body: "Estas notas ayudan cuando la regla básica no basta y el tono importa más que una frase perfecta.",
    culturalNotesHeading: "Por qué esto se siente respetuoso",
    situationsHeading: "Momentos fáciles de arruinar",
    phraseCardsHeading: "Frases útiles",
    checklistHeading: "Chequeo rápido",
    useWhenLabel: "Útil cuando"
  },
  vi: {
    badge: "Giai thich premium",
    title: "Di sau hon mot tang",
    body: "Nhung ghi chu nay giup trong nhung luc quy tac co ban chua du va cach noi quan trong hon viec thuoc long.",
    culturalNotesHeading: "Vi sao dieu nay duoc xem la tinh te",
    situationsHeading: "Nhung luc de tro nen nguong",
    phraseCardsHeading: "Cau noi de dung",
    checklistHeading: "Kiem tra nhanh truoc khi lam",
    useWhenLabel: "Huu ich khi"
  }
};

export function getPremiumDeepDiveCopy(language: AppLanguage) {
  return premiumDeepDiveCopyByLanguage[language];
}

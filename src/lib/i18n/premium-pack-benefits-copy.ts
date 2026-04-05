import type { PremiumPackId } from "@/lib/constants/premium";
import type { AppLanguage } from "@/types/language";

type PackBenefits = {
  highlights: string[];
};

type PremiumPackBenefitsCopy = {
  extrasLabel: string;
  deepGuidesLabel: string;
  phraseTipsLabel: string;
  scenariosLabel: string;
  packs: Record<PremiumPackId, PackBenefits>;
};

const englishCopy: PremiumPackBenefitsCopy = {
  extrasLabel: "What opens in this pack",
  deepGuidesLabel: "Deep guides",
  phraseTipsLabel: "Phrase tips",
  scenariosLabel: "Real-world scenarios",
  packs: {
    "special-stays": {
      highlights: [
        "Spot the quiet moments that feel more private than a standard hotel stay.",
        "Get short phrases for asking before you assume.",
        "Check the small room habits that help staff and hosts feel at ease."
      ]
    },
    "social-nightlife": {
      highlights: [
        "Read the group atmosphere before you set your own pace.",
        "Handle shared rounds, karaoke turns, and exits more smoothly.",
        "Use short phrases when you want to check, decline, or step away politely."
      ]
    },
    "events-crowds": {
      highlights: [
        "See the pressure points that make crowds feel tense or easy.",
        "Know when to hold your spot and when to give the flow back.",
        "Get quick examples for lines, photo spots, cheering, and exits."
      ]
    },
    "independent-travel": {
      highlights: [
        "Handle parking, timing, and return expectations with less guesswork.",
        "See the practical checks that matter before you commit to the next stop.",
        "Use short phrases when you need help with routes, parking, or procedures."
      ]
    }
  }
};

const japaneseCopy: PremiumPackBenefitsCopy = {
  extrasLabel: "このパックで増える内容",
  deepGuidesLabel: "深掘りガイド",
  phraseTipsLabel: "使いやすいひとこと",
  scenariosLabel: "迷いやすい場面例",
  packs: {
    "special-stays": {
      highlights: [
        "普通のホテルよりも気を配った方が自然な場面をつかめます。",
        "決めつけずに確認したいときの短い言い方が分かります。",
        "部屋の使い方や片づけ方など、小さな気配りの判断がしやすくなります。"
      ]
    },
    "social-nightlife": {
      highlights: [
        "自分のペースより先に、その場の空気を読むポイントが分かります。",
        "飲み放題やカラオケで気まずくなりやすい流れを避けやすくなります。",
        "確認したい、断りたい、少し抜けたいときの短い言い方が使えます。"
      ]
    },
    "events-crowds": {
      highlights: [
        "混雑の中で、どこが空気を悪くしやすいポイントか見えてきます。",
        "自分の場所を保つべき場面と、流れを譲るべき場面の違いが分かります。",
        "列、写真、応援、退場などで迷いやすい場面を先にイメージできます。"
      ]
    },
    "independent-travel": {
      highlights: [
        "駐車、時間配分、返却まわりで迷いやすい点を減らせます。",
        "次の移動を決める前に見ておきたい実用チェックが分かります。",
        "ルートや駐車場所、手続きで助けを求めるときの短い言い方が使えます。"
      ]
    }
  }
};

const premiumPackBenefitsCopy: Partial<Record<AppLanguage, PremiumPackBenefitsCopy>> = {
  en: englishCopy,
  ja: japaneseCopy
};

export function getPremiumPackBenefitsCopy(language: AppLanguage) {
  return premiumPackBenefitsCopy[language] ?? englishCopy;
}

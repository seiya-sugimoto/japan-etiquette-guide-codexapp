import type { AppLanguage } from "@/types/language";

type FeedbackCard = {
  title: string;
  body: string;
};

type FeedbackScreenCopy = {
  headerTitle: string;
  eyebrow: string;
  title: string;
  body: string;
  cards: [FeedbackCard, FeedbackCard, FeedbackCard];
  checklistTitle: string;
  checklistBody: string;
  checklistPoints: [string, string, string, string];
  templateTitle: string;
  templateBody: string;
  templateLines: [string, string, string, string];
  statusTitle: string;
  statusBody: string;
  nextTitle: string;
  nextBody: string;
  browseCta: string;
  premiumCta: string;
};

const englishCopy: FeedbackScreenCopy = {
  headerTitle: "Feedback",
  eyebrow: "Help us improve",
  title: "What kind of feedback is most useful right now",
  body: "The send flow is not live yet, but this screen now shows the fastest kinds of notes we can actually act on when we review the app.",
  cards: [
    {
      title: "Unclear wording",
      body: "Tell us where the guide feels too strict, too vague, or harder to scan than it should be on mobile."
    },
    {
      title: "Missing situation",
      body: "Call out a real travel moment that still feels uncovered, especially if it caused hesitation during a trip."
    },
    {
      title: "Language polish",
      body: "Tell us when a translation sounds literal, stiff, or a little unnatural for the situation."
    }
  ],
  checklistTitle: "What helps us fix things quickly",
  checklistBody: "The more concrete the note is, the easier it is to turn into a real app improvement.",
  checklistPoints: [
    "Which screen, scene, or category you opened",
    "Which language you were using",
    "What felt unclear, awkward, or incomplete",
    "What wording or UI would have helped in that moment"
  ],
  templateTitle: "Simple note format",
  templateBody: "If you keep notes while testing, this format is enough. Short is fine.",
  templateLines: [
    "Screen: Premium / Shrine / Search",
    "Language: Japanese",
    "Issue: The wording feels too formal and hard to scan",
    "Would help if: The main point came first in one short sentence"
  ],
  statusTitle: "Current status",
  statusBody: "There is still no send form inside the app. For now, this screen is here to make the feedback we collect later much higher quality.",
  nextTitle: "What we will likely add next",
  nextBody: "A simple feedback path, then screenshot-friendly reporting, then faster issue tagging for wording, translation, and missing scenarios.",
  browseCta: "Browse guides again",
  premiumCta: "See Premium preview"
};

const japaneseCopy: FeedbackScreenCopy = {
  headerTitle: "フィードバック",
  eyebrow: "改善のために",
  title: "いま集めたいフィードバックの形",
  body: "送信フォームはまだアプリ内にありませんが、この画面では、あとで見返したときに改善につながりやすいメモの残し方をまとめています。",
  cards: [
    {
      title: "言い回しがわかりにくい",
      body: "厳しすぎる、ぼんやりしている、スマホで読み流しにくい、という箇所があれば教えてほしいです。"
    },
    {
      title: "足りない場面がある",
      body: "実際の旅行で迷ったのに、まだガイドが弱い・無いと感じた場面があれば優先して見たいです。"
    },
    {
      title: "翻訳の自然さを見直したい",
      body: "直訳っぽい、不自然、場面に対して少し硬い、と感じる翻訳も改善対象にしたいです。"
    }
  ],
  checklistTitle: "改善につながりやすいメモ",
  checklistBody: "短くても大丈夫ですが、次の4つがあるとかなり直しやすくなります。",
  checklistPoints: [
    "どの画面・カテゴリ・シーンを見ていたか",
    "どの言語で見ていたか",
    "どこが分かりにくかったか、違和感があったか",
    "その場でどんな文やUIなら助かったか"
  ],
  templateTitle: "メモの形はこれで十分",
  templateBody: "テスト中に残すメモは、このくらい短い形で大丈夫です。",
  templateLines: [
    "画面: Premium / 神社 / Search",
    "言語: 日本語",
    "気になった点: 少し硬くて流し読みしづらい",
    "こうだと助かる: 最初に結論を1文で出してほしい"
  ],
  statusTitle: "現在の状態",
  statusBody: "まだアプリ内送信フォームはありません。いまは、あとで集めるフィードバックの質を上げるための整理画面として置いています。",
  nextTitle: "この先に追加したいもの",
  nextBody: "まずはシンプルな送信導線、その次にスクリーンショット付き報告、さらに文言・翻訳・不足シーンを分けて扱える導線へ進めたいです。",
  browseCta: "ガイドを見直す",
  premiumCta: "Premium を見る"
};

const feedbackCopyByLanguage: Partial<Record<AppLanguage, FeedbackScreenCopy>> = {
  en: englishCopy,
  ja: japaneseCopy
};

export function getFeedbackCopy(language: AppLanguage): FeedbackScreenCopy {
  return feedbackCopyByLanguage[language] ?? englishCopy;
}

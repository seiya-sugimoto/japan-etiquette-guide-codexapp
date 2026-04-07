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
  statusBodyReady: string;
  statusBodyMissing: string;
  browserNote: string;
  nextTitle: string;
  nextBody: string;
  openFormCta: string;
  openFormPendingCta: string;
  browseCta: string;
  premiumCta: string;
  unavailableTitle: string;
  unavailableBody: string;
};

const englishCopy: FeedbackScreenCopy = {
  headerTitle: "Feedback",
  eyebrow: "Help us improve",
  title: "Share the details that help us improve fastest",
  body: "We are using a lightweight Google Form first so we can collect practical notes quickly without adding a full backend yet.",
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
  statusTitle: "Current setup",
  statusBodyReady: "The feedback button opens a Google Form in your browser. That lets us collect structured notes quickly while the app stays lightweight.",
  statusBodyMissing: "The app is ready for a Google Form flow, but the live form URL has not been connected yet.",
  browserNote: "The form opens outside the app.",
  nextTitle: "What we will likely add next",
  nextBody: "A screenshot-friendly path, faster issue tagging for wording and translation, and a smoother in-app handoff if feedback starts coming in regularly.",
  openFormCta: "Open feedback form",
  openFormPendingCta: "Form link coming soon",
  browseCta: "Browse guides again",
  premiumCta: "See Premium preview",
  unavailableTitle: "Feedback form not connected yet",
  unavailableBody: "Add the Google Form URL in the app config first, then this button will open it."
};

const japaneseCopy: FeedbackScreenCopy = {
  headerTitle: "フィードバック",
  eyebrow: "改善のために",
  title: "いま一番助かるフィードバックの形",
  body: "まずは軽く始めるために、アプリ内フォームではなく Googleフォームで集める前提にしています。実際に直しやすい内容を短く送ってもらう想定です。",
  cards: [
    {
      title: "言い回しがわかりにくい",
      body: "厳しすぎる、ぼんやりしている、スマホで読み流しにくい、と感じた箇所があれば見直したいです。"
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
  statusTitle: "現在の導線",
  statusBodyReady: "フィードバックボタンを押すと、ブラウザで Googleフォームが開く想定です。まずはこの形で、必要な情報を揃えて集めやすくしています。",
  statusBodyMissing: "Googleフォーム前提の画面まではできていますが、まだ本番のフォームURLはつながっていません。",
  browserNote: "フォームはアプリの外で開きます。",
  nextTitle: "この先に追加したいもの",
  nextBody: "スクリーンショットを添えやすい導線や、文言・翻訳・不足シーンを分けて見返しやすくする仕組みは、フィードバックが回り始めてから強化したいです。",
  openFormCta: "Googleフォームを開く",
  openFormPendingCta: "フォームURLを準備中",
  browseCta: "ガイドを見直す",
  premiumCta: "Premium を見る",
  unavailableTitle: "フォームURLがまだつながっていません",
  unavailableBody: "GoogleフォームのURLを設定すれば、このボタンからそのまま開けるようになります。"
};

const feedbackCopyByLanguage: Partial<Record<AppLanguage, FeedbackScreenCopy>> = {
  en: englishCopy,
  ja: japaneseCopy
};

export function getFeedbackCopy(language: AppLanguage): FeedbackScreenCopy {
  return feedbackCopyByLanguage[language] ?? englishCopy;
}

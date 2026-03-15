export type CategoryId =
  | "train"
  | "restaurant"
  | "shrine"
  | "onsen"
  | "temple"
  | "ryokan"
  | "shoes-indoors"
  | "trash-public"
  | "payments-tipping"
  | "chopsticks"
  | "visiting-home"
  | "convenience-store"
  | "queue-escalator"
  | "photo-video"
  | "smoking"
  | "large-luggage"
  | "residential-private"
  | "toilet"
  | "bicycle";

export type CategoryAccess = "free" | "premium";

export type CategoryContent = {
  quickView: string[];
  dos: string[];
  donts: string[];
  whyItMatters: string[];
  commonMistakes: string[];
  readMore: string[];
};

export type Category = {
  id: CategoryId;
  slug: string;
  title: string;
  shortDescription: string;
  access: CategoryAccess;
  imageUrl: string;
  badge?: "essential" | "high-risk" | "premium";
  tags: string[];
  content: CategoryContent;
};

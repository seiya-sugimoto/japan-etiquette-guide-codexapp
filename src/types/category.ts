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
  | "bicycle"
  | "airport-arrival"
  | "immigration-customs"
  | "airport-transfer"
  | "airport-limousine-bus"
  | "local-bus"
  | "night-bus"
  | "taxi"
  | "ride-hailing"
  | "ferry"
  | "ropeway-cablecar"
  | "hotel-checkin"
  | "hotel-lobby"
  | "hotel-breakfast"
  | "hotel-elevator"
  | "shared-lounge"
  | "coin-laundry"
  | "capsule-hotel"
  | "hostel-dorm"
  | "checkout-room"
  | "luggage-storage"
  | "cafe"
  | "bakery"
  | "fast-food"
  | "food-court"
  | "izakaya"
  | "bar"
  | "all-you-can-drink"
  | "karaoke"
  | "food-stalls"
  | "vending-machine"
  | "supermarket"
  | "drugstore"
  | "department-store"
  | "duty-free"
  | "fitting-room"
  | "secondhand-shop"
  | "market-shopping-street"
  | "shopping-bags-packaging"
  | "delivery-service"
  | "atm"
  | "museum-gallery"
  | "castle-garden"
  | "observatory-night-view"
  | "live-concert"
  | "sports-event"
  | "theme-park"
  | "festival-fireworks"
  | "seasonal-scenic-spot"
  | "rental-car"
  | "service-area";

export type CategoryAccess = "free" | "premium";
export type PremiumContentTier = "free" | "preview" | "premium-only";

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
  premiumTier: PremiumContentTier;
  imageUrl: string;
  badge?: "essential" | "high-risk" | "premium";
  tags: string[];
  content: CategoryContent;
};

export type CategorySeed = Omit<Category, "premiumTier">;

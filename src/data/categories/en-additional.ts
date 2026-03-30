import type { Category } from "@/types/category";

const transportImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvf0R7-J215zxndN4nPR_cHU9H_hrBMo7bEXWWfvmo4OHxvyExFZ15hNAQQu6oZXCvDFRuBWJUlbYrWRTRY7jb3ims_RvKWB5UghnK3qWTAdXAzSZjZxnnca6S_2Fj4Le12npnJZlprgRf0Th20O3o49-Rdfm8ixhvT5H4_L7ZzmVAYp-esFQnnIr6gUKR4V2o41VTGfEI2_6CJb1HXxI2-3WY9zJPHkFl0fyrmPGKnUJAYWcGj9F4XXMYYzaPsYttuE9hra6pXo-W";
const diningImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbVmeI3tkpHKHQdKPJbhH7ulUUlkXZOt-LnA9sAqynDlmUZjIQW9l3gtj3j4-4Tjz92TDbW-iksdQKdfQthK1YCUKT2CtEtBn24PNsY_Oq15odw9aINjjDXiE99E2bY4EfjcxhSM-8yGxcLHaqb7bql7H3kmhZIQ0aMsAdchFEm89XiiP-ya7_0xtqSgDW5z0LvITE6Z6_L6NkOTiYRxt8B1beifvuYc0-hctayR_kx-IQHZSqZcTeQYqG_D37yFt18q_t9WDzsIy";
const cultureImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCGr5Jav_9YULL6NpQa5Wq0SgCsgXrcvqN49shvBe7AJ-hNBYZBV8VIJKw5FSJU09wKFwJ_Gd5Oq_aSIPJ0YFhCZfAq4wXFyrhhyx90y0rk-CnyAHsTM1RJNLTC3w0_fVsI1pZg92mpgxCDD71_lN8ntnqqjYWB-yXDADHRxZBWcJ9fqKLVPjaWYzbeho-WmMiymFaQzjHNlxcfso5d5MeCKe8UmQFV9Trs9Umy0a5wBwsuDDVrXzSDFE14CdFFKW46bTDxU4ZNcfuT";
const lodgingImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXiYqH3rXSzqe9K5h3wHsbpPe3X6bn-GTqhLM7Q-tbm1Ugc5u-7Yl-PuuymETTtwlQDd7xaZ1xrCn7_X7ZkW94J0XIUUsuPhclFg-av7kcIDGltDqR2Uoh9MTfkEUAGR3qoB6EgXPTGxJAhnXTucN-ZiEz6XMatESE5GFeDm6GSrcHQTtJ2egxyvZWvFp02-vDyr0WqOszk1otw8oHpRfkSHfqsXR0NNDSirSKobH-ccE3565yf74XH01qS7PpVufPprMjmBaPczyf";
const publicImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfmLWBNLM_bradzi3uk-lpF9asqjEzZ0NXnclzkJuOyge_UUC3zd2Nx5b3F0SGMPvn7BK_gLfnlPEcTuSU-rzBmAqNKdnJylkeUsRa-qBgHkWkTUmc4THrzcc7uGVI-k3huYb3emYGWrdimlVwU5wp927CFwAMXbQQtsbu7sthQE8qvvGIhjt4HVR-Qt9fN5i259Mpt_1ngJmBlumW06H4Gyn7KMs8VcHqaG1Dzcv1iDYRncCuzaEcczNDZuj4K4agSWjcMVBE3A2v";

export const additionalEnglishCategories: Category[] = [
  {
    id: "airport-arrival",
    slug: "airport-arrival",
    title: "Arriving at the Airport",
    shortDescription: "How to move calmly through the first busy moments after landing.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["airport", "arrival"],
    content: {
      quickView: ["Follow signs first.", "Keep documents ready.", "Step aside before checking your phone."],
      dos: ["Keep your passport and arrival documents easy to reach.", "Step to the side if you need time to check directions."],
      donts: ["Do not stop suddenly in busy walkways.", "Do not block other travelers while checking your phone."],
      whyItMatters: ["Arrival areas become crowded very quickly, so small pauses affect many people at once."],
      commonMistakes: ["Stopping directly in front of a sign.", "Looking for documents only after reaching the checkpoint."],
      readMore: ["If you feel lost, step aside, check signs, then rejoin the flow."]
    }
  },
  {
    id: "immigration-customs",
    slug: "immigration-customs",
    title: "Immigration and Customs",
    shortDescription: "Be ready, stay in line, and wait for instructions.",
    access: "free",
    imageUrl: transportImage,
    badge: "high-risk",
    tags: ["airport", "immigration"],
    content: {
      quickView: ["Prepare documents in advance.", "Follow the marked line.", "Wait calmly for instructions."],
      dos: ["Prepare your passport and forms before reaching the desk.", "Listen for instructions before moving forward."],
      donts: ["Do not use your phone where signs prohibit it.", "Do not take photos in controlled areas."],
      whyItMatters: ["These areas depend on quiet order and security."],
      commonMistakes: ["Looking for forms at the counter.", "Moving to the next desk before being called."],
      readMore: ["If you are unsure which line to join, checking the sign is better than guessing."]
    }
  },
  {
    id: "airport-transfer",
    slug: "airport-transfer",
    title: "Airport Transfers",
    shortDescription: "Check your route first, then move with purpose.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["airport", "transfer"],
    content: {
      quickView: ["Know your next step.", "Keep luggage close.", "Do not join a line before checking it."],
      dos: ["Confirm the train line, bus stop, or ticket method before going to the platform.", "Watch for English signs and symbols."],
      donts: ["Do not block ticket machines while deciding your route.", "Do not rush into the first queue without checking where it goes."],
      whyItMatters: ["Transfer areas feel fast, but a short pause prevents most confusion."],
      commonMistakes: ["Joining the wrong line.", "Repacking luggage in the middle of the station."],
      readMore: ["Decide your destination, transport type, and payment method before joining the flow."]
    }
  },
  {
    id: "airport-limousine-bus",
    slug: "airport-limousine-bus",
    title: "Airport Limousine Buses",
    shortDescription: "Board on time, confirm the stop, and follow the luggage process.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["airport", "bus"],
    content: {
      quickView: ["Arrive a few minutes early.", "Check the destination carefully.", "Follow staff directions for bags."],
      dos: ["Confirm the destination and platform number.", "Follow staff instructions for storing large luggage."],
      donts: ["Do not assume you can board at the last second.", "Do not stand loosely around the boarding area."],
      whyItMatters: ["Airport buses often run on a tight schedule."],
      commonMistakes: ["Waiting near the wrong stop.", "Missing the luggage tag process."],
      readMore: ["Some buses stop at several hotels or stations with similar names, so check carefully."]
    }
  },
  {
    id: "local-bus",
    slug: "local-bus",
    title: "Local Buses",
    shortDescription: "Watch how boarding and payment work before you move.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["bus", "fare"],
    content: {
      quickView: ["Check where to board.", "Know when to pay.", "Press the stop button early enough."],
      dos: ["Watch how local passengers board and pay.", "Keep your fare or IC card ready."],
      donts: ["Do not assume all buses use the same system.", "Do not block the door while figuring out the fare."],
      whyItMatters: ["Guessing the system can slow down everyone behind you."],
      commonMistakes: ["Trying to pay at the wrong time.", "Missing the stop button."],
      readMore: ["Watching the passengers ahead of you often explains the system fastest."]
    }
  },
  {
    id: "night-bus",
    slug: "night-bus",
    title: "Night Buses",
    shortDescription: "Treat the bus like a shared sleeping space, not a social one.",
    access: "free",
    imageUrl: transportImage,
    badge: "high-risk",
    tags: ["night bus", "quiet"],
    content: {
      quickView: ["Use silent mode.", "Keep light and sound low.", "Prepare what you need before lights go off."],
      dos: ["Keep conversations very short and quiet.", "Prepare what you need before the bus settles for the night."],
      donts: ["Do not make calls.", "Do not use bright screens carelessly."],
      whyItMatters: ["Even small sounds or light can affect many people on a night bus."],
      commonMistakes: ["Repacking bags after lights are off.", "Watching videos without thinking about screen brightness."],
      readMore: ["If you need something, move slowly and keep light and sound low."]
    }
  },
  {
    id: "taxi",
    slug: "taxi",
    title: "Taxis",
    shortDescription: "Show the destination clearly and keep the ride simple.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["taxi", "address"],
    content: {
      quickView: ["Let the driver handle the door if it opens automatically.", "Show the destination clearly.", "Keep the ride calm."],
      dos: ["Show the address or destination clearly, ideally in Japanese text.", "Keep luggage compact and your tone calm."],
      donts: ["Do not force the door open unless necessary.", "Do not assume the driver will understand a rough pronunciation guess."],
      whyItMatters: ["Taxi rides feel smoother when the destination is shown clearly."],
      commonMistakes: ["Pulling an automatic door.", "Giving only a vague English place name."],
      readMore: ["A map or written address often works better than verbal explanation."]
    }
  },
  {
    id: "ride-hailing",
    slug: "ride-hailing",
    title: "Ride-Hailing Pickups",
    shortDescription: "Find the pickup point first, then wait without blocking anyone.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["pickup", "app"],
    content: {
      quickView: ["Know the pickup point.", "Stand where the car can see you.", "Do not block the queue."],
      dos: ["Check the exact pickup location before calling the car.", "Follow the order of the taxi stand if there is one."],
      donts: ["Do not assume the car can stop anywhere.", "Do not stand in the roadway while checking the app."],
      whyItMatters: ["Small pickup mistakes create confusion for drivers, staff, and other passengers."],
      commonMistakes: ["Requesting the ride before finding the right pickup area.", "Waiting in the wrong lane."],
      readMore: ["In busy hubs, find the pickup point first and request the car second."]
    }
  },
  {
    id: "ferry",
    slug: "ferry",
    title: "Ferries and Boats",
    shortDescription: "Move carefully, keep your things tidy, and respect shared space.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["ferry", "boat"],
    content: {
      quickView: ["Board carefully.", "Keep aisles clear.", "Check the rules for decks and seating."],
      dos: ["Store bags neatly.", "Watch for signs about shoes, seating areas, and deck access."],
      donts: ["Do not spread belongings across shared seating.", "Do not block narrow passages."],
      whyItMatters: ["Shared ship spaces can become crowded or unstable, so tidy movement matters."],
      commonMistakes: ["Leaving luggage in an aisle.", "Walking carelessly while the vessel is moving."],
      readMore: ["On longer ferry rides, checking lounge and deck rules makes the trip easier."]
    }
  },
  {
    id: "ropeway-cablecar",
    slug: "ropeway-cablecar",
    title: "Ropeways and Cable Cars",
    shortDescription: "Board quickly, share the view, and do not hold the best spot too long.",
    access: "free",
    imageUrl: transportImage,
    badge: "essential",
    tags: ["ropeway", "cable car"],
    content: {
      quickView: ["Board quickly.", "Share the window view.", "Keep bags out of the standing space."],
      dos: ["Move into the cabin promptly.", "Make room for others near the doors."],
      donts: ["Do not rush for the best window spot.", "Do not hold a photo position for the whole ride."],
      whyItMatters: ["Everyone wants the same view, so natural sharing makes a big difference."],
      commonMistakes: ["Taking over the front window for the whole ride.", "Stopping in the exit path for one last photo."],
      readMore: ["Board quickly, look briefly, share naturally, and exit smoothly."]
    }
  }
];

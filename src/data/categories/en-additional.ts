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
  },
  {
    id: "hotel-checkin",
    slug: "hotel-checkin",
    title: "Hotel Check-In",
    shortDescription: "Have your booking ready and listen to the hotel explanation.",
    access: "free",
    imageUrl: lodgingImage,
    badge: "essential",
    tags: ["hotel", "check-in"],
    content: {
      quickView: ["Prepare your reservation and passport.", "Listen before asking many questions.", "Keep the counter clear."],
      dos: ["Prepare your reservation name, passport, and payment method before reaching the desk.", "Listen to the explanation about keys, breakfast, or bath rules."],
      donts: ["Do not spread your luggage around the front desk.", "Do not assume every hotel uses the same check-in flow."],
      whyItMatters: ["A calm check-in helps staff serve many arriving guests smoothly."],
      commonMistakes: ["Searching for documents at the counter.", "Ignoring details about breakfast, baths, or checkout times."],
      readMore: ["Even short explanations often contain useful details, so listening first usually saves time later."]
    }
  },
  {
    id: "hotel-lobby",
    slug: "hotel-lobby",
    title: "Hotel Lobby",
    shortDescription: "Use the lobby as a shared waiting space, not a personal base.",
    access: "free",
    imageUrl: lodgingImage,
    badge: "essential",
    tags: ["hotel", "lobby"],
    content: {
      quickView: ["Keep luggage compact.", "Use side areas if you need time.", "Avoid loud group conversations."],
      dos: ["Choose a side area if you need to reorganize bags or check plans.", "Keep your belongings close to your seat."],
      donts: ["Do not occupy major walkways with luggage.", "Do not use the middle of the lobby as a planning zone."],
      whyItMatters: ["Lobbies are shared by arriving guests, departing guests, and staff at the same time."],
      commonMistakes: ["Spreading suitcases into walking paths.", "Speaking loudly because the space feels open."],
      readMore: ["If you need a few minutes, moving to a side seating area is usually the best choice."]
    }
  },
  {
    id: "hotel-breakfast",
    slug: "hotel-breakfast",
    title: "Hotel Breakfast",
    shortDescription: "Follow the seating flow, take food lightly, and keep the line moving.",
    access: "free",
    imageUrl: diningImage,
    badge: "essential",
    tags: ["hotel", "breakfast", "buffet"],
    content: {
      quickView: ["Wait to be seated if needed.", "Take small portions first.", "Return trays or dishes where instructed."],
      dos: ["Watch whether staff are seating guests before choosing a table.", "Take food in smaller rounds if the buffet is busy."],
      donts: ["Do not cut into the buffet line.", "Do not reserve large tables with luggage or bags alone."],
      whyItMatters: ["Breakfast rooms often look relaxed, but the flow is usually fast and structured."],
      commonMistakes: ["Taking too much food at once.", "Standing in front of dishes while deciding what to take."],
      readMore: ["At crowded times, shorter stays and smaller plate trips usually feel smoother for everyone."]
    }
  },
  {
    id: "hotel-elevator",
    slug: "hotel-elevator",
    title: "Hotel Elevators",
    shortDescription: "Let people out first and keep the ride quiet and short.",
    access: "free",
    imageUrl: lodgingImage,
    badge: "essential",
    tags: ["hotel", "elevator"],
    content: {
      quickView: ["Let people exit first.", "Move inside quickly.", "Keep luggage out of the way."],
      dos: ["Wait until other passengers step out before entering.", "Hold the door briefly if someone is clearly approaching."],
      donts: ["Do not stand in the doorway.", "Do not talk loudly in a full elevator."],
      whyItMatters: ["Elevators are small, shared spaces where courtesy becomes very visible."],
      commonMistakes: ["Trying to enter before people exit.", "Leaving a suitcase in the center of the floor."],
      readMore: ["Simple elevator manners make a stronger impression than many travelers expect."]
    }
  },
  {
    id: "shared-lounge",
    slug: "shared-lounge",
    title: "Shared Lounges",
    shortDescription: "Use the room lightly and match the quietest tone in the space.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["lounge", "shared space"],
    content: {
      quickView: ["Use only the space you need.", "Check whether calls are okay.", "Leave the area tidy."],
      dos: ["Choose one seat area and keep your belongings compact.", "Check whether drinks, food, or phone calls are allowed."],
      donts: ["Do not spread bags across multiple seats.", "Do not use a quiet room for a loud call."],
      whyItMatters: ["Shared comfort depends on everyone using the room with a light footprint."],
      commonMistakes: ["Turning a quiet lounge into a work desk with cables and bags everywhere.", "Leaving cups or trash behind."],
      readMore: ["If the atmosphere is unclear, matching the quietest people in the room is usually the safest choice."]
    }
  },
  {
    id: "coin-laundry",
    slug: "coin-laundry",
    title: "Coin Laundry",
    shortDescription: "Use machines efficiently and pick up finished laundry on time.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["laundry", "shared facility"],
    content: {
      quickView: ["Read the machine first.", "Set a timer if needed.", "Come back when the cycle ends."],
      dos: ["Check the machine type and instructions before starting.", "Return promptly when your wash or dry cycle finishes."],
      donts: ["Do not leave completed laundry in the machine for a long time.", "Do not spread personal items over folding counters."],
      whyItMatters: ["Laundry rooms work best when people respect both time and space."],
      commonMistakes: ["Forgetting the finish time.", "Using shared counters as personal storage."],
      readMore: ["In a busy laundry room, quick pickup matters almost as much as using the machine correctly."]
    }
  },
  {
    id: "capsule-hotel",
    slug: "capsule-hotel",
    title: "Capsule Hotels",
    shortDescription: "Think quiet, compact, and considerate in the sleeping area.",
    access: "premium",
    imageUrl: lodgingImage,
    badge: "premium",
    tags: ["capsule hotel", "sleep"],
    content: {
      quickView: ["Finish noisy tasks before entering the capsule area.", "Use silent mode.", "Move gently at night."],
      dos: ["Prepare what you need before going into the sleeping area.", "Keep your phone fully silent."],
      donts: ["Do not make calls near the capsules.", "Do not unzip bags loudly for a long time late at night."],
      whyItMatters: ["Sound travels easily in capsule hotels, even when you feel you are being quiet."],
      commonMistakes: ["Repacking luggage after midnight.", "Watching videos near sleeping capsules."],
      readMore: ["The simplest rule is: do noisy things before entering the area where people are trying to sleep."]
    }
  },
  {
    id: "hostel-dorm",
    slug: "hostel-dorm",
    title: "Hostels and Dorm Rooms",
    shortDescription: "Shared rooms work best when everyone reduces noise, light, and clutter.",
    access: "premium",
    imageUrl: lodgingImage,
    badge: "premium",
    tags: ["hostel", "dorm"],
    content: {
      quickView: ["Use common areas for calls and repacking.", "Keep your bed area tidy.", "Use small light at night."],
      dos: ["Move long conversations and bag repacking to a lounge or common space.", "Keep your belongings close to your bed area."],
      donts: ["Do not turn on bright lights late at night unless necessary.", "Do not use the floor as extra storage."],
      whyItMatters: ["Dorm rooms can feel social, but they are still shared rest spaces."],
      commonMistakes: ["Having a full conversation at the bedside while others rest.", "Leaving bags and chargers across the floor."],
      readMore: ["If you want to chat, eat, or organize luggage, common areas are usually the better place."]
    }
  },
  {
    id: "checkout-room",
    slug: "checkout-room",
    title: "Leaving the Room at Checkout",
    shortDescription: "Leave the room reasonably tidy and get out on time.",
    access: "free",
    imageUrl: lodgingImage,
    badge: "essential",
    tags: ["checkout", "hotel room"],
    content: {
      quickView: ["Check for forgotten items.", "Leave the room reasonably tidy.", "Do not assume a late exit is fine."],
      dos: ["Check outlets, bathroom shelves, and under the bed before leaving.", "Follow any simple trash or key return instructions."],
      donts: ["Do not leave the room heavily scattered.", "Do not stay past checkout time without asking."],
      whyItMatters: ["Checkout timing affects cleaning and the next guest's arrival."],
      commonMistakes: ["Leaving chargers or passports behind.", "Packing in a rush and leaving the room in chaos."],
      readMore: ["The goal is not perfection. Basic tidiness and being on time are usually enough."]
    }
  },
  {
    id: "luggage-storage",
    slug: "luggage-storage",
    title: "Luggage Storage and Lockers",
    shortDescription: "Choose the right space quickly and do your sorting away from the lockers.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["locker", "storage", "luggage"],
    content: {
      quickView: ["Choose the right locker size first.", "Do not repack in front of the lockers.", "Take note of where you stored your bag."],
      dos: ["Prepare payment and decide roughly what size locker you need before using the machine.", "Step aside if you need extra time to sort your luggage."],
      donts: ["Do not block a whole row of lockers while repacking.", "Do not force oversized bags into the wrong locker."],
      whyItMatters: ["Locker areas are usually narrow, busy, and meant for quick use."],
      commonMistakes: ["Opening multiple lockers while others wait.", "Forgetting which locker bank you used."],
      readMore: ["Taking a quick photo of the locker number or nearby sign can save time later in large stations."]
    }
  },
  {
    id: "cafe",
    slug: "cafe",
    title: "Cafes",
    shortDescription: "Check the flow first, then choose your seat and pace.",
    access: "free",
    imageUrl: diningImage,
    badge: "essential",
    tags: ["cafe", "seating"],
    content: {
      quickView: ["See whether it is seat first or order first.", "Keep your stay light at busy times.", "Do not block the pickup counter."],
      dos: ["Watch the entrance signs or other customers for a moment before sitting down.", "Choose a smaller table if you are alone during a rush."],
      donts: ["Do not assume every cafe welcomes a very long stay with one drink.", "Do not spread devices and shopping bags across the table."],
      whyItMatters: ["Many cafes in Japan are small, and the pace can shift quickly when the shop gets busy."],
      commonMistakes: ["Sitting first in a counter-order cafe.", "Staying too long in a crowded shop without noticing the flow."],
      readMore: ["If you are unsure how long to stay, the busiest periods usually call for shorter visits and lighter use of space."]
    }
  },
  {
    id: "bakery",
    slug: "bakery",
    title: "Bakeries",
    shortDescription: "Use the tray and tongs, and handle display food gently.",
    access: "free",
    imageUrl: diningImage,
    badge: "essential",
    tags: ["bakery", "self-service"],
    content: {
      quickView: ["Take a tray if that is the system.", "Use tongs carefully.", "Keep the line moving."],
      dos: ["Use the tray and tongs when the shop provides them.", "Move along the display without stopping too long in one spot."],
      donts: ["Do not touch bread directly unless it is clearly allowed.", "Do not lean over the display with open bags or sleeves."],
      whyItMatters: ["Bakery displays are open, so both hygiene and smooth movement matter."],
      commonMistakes: ["Touching more than one item while deciding.", "Blocking the front of the display for too long."],
      readMore: ["Even when the bakery feels casual, moving like a quiet line usually matches the local rhythm best."]
    }
  },
  {
    id: "fast-food",
    slug: "fast-food",
    title: "Fast Food",
    shortDescription: "Order efficiently, clear your table, and keep the seating turning over.",
    access: "free",
    imageUrl: diningImage,
    badge: "essential",
    tags: ["fast food", "self-service"],
    content: {
      quickView: ["Know your order before the counter.", "Return trays if the shop expects it.", "Leave the table reasonably clean."],
      dos: ["Prepare your order before reaching the counter when possible.", "Return trays and trash after eating if the system asks for it."],
      donts: ["Do not leave wrappers and trays on the table and walk away.", "Do not block the condiment or pickup area."],
      whyItMatters: ["Fast-food spaces are built for quick turnover, so small delays are very visible."],
      commonMistakes: ["Not noticing the tray return station.", "Staying long after finishing during a busy period."],
      readMore: ["Watching one or two local customers usually shows you the cleanup flow faster than reading every sign."]
    }
  },
  {
    id: "food-court",
    slug: "food-court",
    title: "Food Courts",
    shortDescription: "Share seats fairly and follow the self-service rhythm.",
    access: "free",
    imageUrl: diningImage,
    badge: "essential",
    tags: ["food court", "shared seating"],
    content: {
      quickView: ["Use only the seats you need.", "Carry your tray carefully.", "Return dishes or trash where instructed."],
      dos: ["Use only the number of seats your group actually needs.", "Return trays, dishes, or trash to the right station after eating."],
      donts: ["Do not reserve a large area with bags alone.", "Do not leave finished trays on the table when a return station is available."],
      whyItMatters: ["Food courts depend on many people sharing the same seats for short periods."],
      commonMistakes: ["Saving too many seats too early.", "Treating a shared table area like a private dining room."],
      readMore: ["At busy times, the most appreciated rhythm is simple: eat, clear, and make room naturally."]
    }
  },
  {
    id: "izakaya",
    slug: "izakaya",
    title: "Izakaya",
    shortDescription: "Expect house rules, a different pace, and a few local customs.",
    access: "premium",
    imageUrl: diningImage,
    badge: "premium",
    tags: ["izakaya", "drinks"],
    content: {
      quickView: ["Wait to be seated.", "Check the house rules first.", "Order with the pace of the room."],
      dos: ["Check whether there is a cover charge, one-drink rule, or time limit.", "Watch the room before treating it like a casual pub."],
      donts: ["Do not assume everything placed on the table is free or optional.", "Do not bring large luggage into a very small seating area."],
      whyItMatters: ["Many travelers get confused by small local customs in izakaya, especially at the start of the meal."],
      commonMistakes: ["Being surprised by a cover charge or otoshi.", "Taking too long to order in a tiny place."],
      readMore: ["A quick look at the menu, seating size, and cover information usually tells you what kind of place it is."]
    }
  },
  {
    id: "bar",
    slug: "bar",
    title: "Bars",
    shortDescription: "Read the mood first, then match your voice and pace to the room.",
    access: "premium",
    imageUrl: diningImage,
    badge: "premium",
    tags: ["bar", "nightlife"],
    content: {
      quickView: ["Notice the mood before speaking loudly.", "Order clearly and simply.", "Check before taking photos."],
      dos: ["Take a moment to see whether the bar feels quiet, social, formal, or casual.", "Keep your voice close to the room's current level."],
      donts: ["Do not assume every bar welcomes loud group energy.", "Do not use flash or film staff without checking."],
      whyItMatters: ["Many bars in Japan depend heavily on atmosphere, and reading the room matters as much as knowing the menu."],
      commonMistakes: ["Speaking too loudly in a quiet cocktail bar.", "Blocking the counter while deciding what to order."],
      readMore: ["One minute of observation when you arrive often works better than one minute of questions."]
    }
  },
  {
    id: "all-you-can-drink",
    slug: "all-you-can-drink",
    title: "All-You-Can-Drink Plans",
    shortDescription: "Drink plans still come with time limits, last orders, and waste rules.",
    access: "premium",
    imageUrl: diningImage,
    badge: "premium",
    tags: ["nomihodai", "drinks"],
    content: {
      quickView: ["Check the time limit.", "Notice the last order time.", "Order only what your table can finish."],
      dos: ["Confirm the time limit and last order time before settling in.", "Order at a pace your group can actually enjoy."],
      donts: ["Do not treat the plan like a challenge.", "Do not leave many unfinished drinks on the table."],
      whyItMatters: ["These plans are structured around fairness, timing, and efficient service."],
      commonMistakes: ["Ordering too much too quickly.", "Missing the last order because no one checked the time."],
      readMore: ["It usually feels better to pace the table than to keep adding drinks no one really wants."]
    }
  },
  {
    id: "karaoke",
    slug: "karaoke",
    title: "Karaoke",
    shortDescription: "Check the time plan, room rules, and order flow at the start.",
    access: "premium",
    imageUrl: publicImage,
    badge: "premium",
    tags: ["karaoke", "nightlife"],
    content: {
      quickView: ["Confirm the time limit first.", "Follow the room-use rules.", "Leave the room in good condition."],
      dos: ["Check the fee system, time limit, and any minimum order rules when you arrive.", "Use microphones and room equipment carefully."],
      donts: ["Do not assume the room has no rules just because it feels private.", "Do not stay past your time without checking for an extension."],
      whyItMatters: ["Karaoke in Japan is fun but system-driven, so understanding the plan early prevents confusion later."],
      commonMistakes: ["Not understanding the time plan.", "Leaving the room messy or treating the equipment roughly."],
      readMore: ["A quick check of the order method and extension rules at the start prevents most problems later on."]
    }
  },
  {
    id: "food-stalls",
    slug: "food-stalls",
    title: "Food Stalls and Street Food Areas",
    shortDescription: "Follow the flow, eat where it makes sense, and manage your trash.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["street food", "festival"],
    content: {
      quickView: ["Check whether to eat nearby or move on.", "Step out of the path if you stop.", "Keep your trash with you."],
      dos: ["See whether the stall expects you to eat nearby or continue walking.", "Move to the side if you stop to eat or take photos."],
      donts: ["Do not stop in the narrowest part of a crowd.", "Do not drip or scatter food while walking through a busy area."],
      whyItMatters: ["These areas can feel casual, but movement and shared space matter a lot when crowds are tight."],
      commonMistakes: ["Eating in the middle of a moving crowd.", "Leaving skewers, cups, or wrappers in the wrong place."],
      readMore: ["Some areas are more relaxed about eating while walking, but stopping neatly is usually the safer choice."]
    }
  },
  {
    id: "vending-machine",
    slug: "vending-machine",
    title: "Vending Machines",
    shortDescription: "Buy quickly, step aside, and recycle drink containers correctly later.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["vending machine", "recycling"],
    content: {
      quickView: ["Choose quickly.", "Step away after buying.", "Use the correct recycling bin if there is one."],
      dos: ["Decide on your drink before standing in front of the machine for too long.", "Step away once you buy so the next person can use it."],
      donts: ["Do not leave bottles or cans beside the machine if no bin is there.", "Do not assume every nearby bin accepts general trash."],
      whyItMatters: ["Vending machines are convenient because people keep the area neat and moving."],
      commonMistakes: ["Using a drink recycling bin for unrelated garbage.", "Standing in front of the machine while sorting coins and bags."],
      readMore: ["Bins beside vending machines often accept only drink containers, not food wrappers or general trash."]
    }
  },
  {
    id: "supermarket",
    slug: "supermarket",
    title: "Supermarkets",
    shortDescription: "Follow the aisle flow, then bag your items where the store expects.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["shopping", "groceries"],
    content: {
      quickView: ["Keep aisles clear.", "Pay first, then bag if that is the system.", "Handle products carefully."],
      dos: ["Use a basket when you need one and move aside if you stop to compare products.", "Move to the packing counter after payment when the store separates checkout and bagging."],
      donts: ["Do not block narrow aisles with your basket or cart.", "Do not leave chilled or frozen items on random shelves if you change your mind."],
      whyItMatters: ["Supermarkets are everyday local spaces, so smooth movement matters more than visitors sometimes expect."],
      commonMistakes: ["Trying to bag groceries right at the cashier when the store uses a separate packing area.", "Leaving unwanted products in the wrong place."],
      readMore: ["If you decide not to buy something, returning it to the correct section is usually the most helpful choice."]
    }
  },
  {
    id: "drugstore",
    slug: "drugstore",
    title: "Drugstores",
    shortDescription: "Know which items are simple shopping and which ones need extra guidance.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["shopping", "medicine"],
    content: {
      quickView: ["Check whether it is medicine or cosmetics.", "Ask briefly if you are unsure.", "Follow usage notes for health products."],
      dos: ["Ask staff a short question if you need help finding the right product.", "Follow any explanation the staff gives for medicine with restrictions."],
      donts: ["Do not assume every medicine can be chosen as casually as snacks or shampoo.", "Do not open products unless they are clearly marked as testers."],
      whyItMatters: ["Drugstores mix everyday shopping with health items, so some products come with stricter handling or sales rules."],
      commonMistakes: ["Confusing testers with sealed products.", "Buying medicine without understanding what it is for."],
      readMore: ["If medicine labels feel unclear, asking staff one short question is much safer than guessing."]
    }
  },
  {
    id: "department-store",
    slug: "department-store",
    title: "Department Stores",
    shortDescription: "Move calmly, handle displays carefully, and follow the room's pace.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["shopping", "department store"],
    content: {
      quickView: ["Slow down a little.", "Treat displays gently.", "Keep luggage from becoming the focus."],
      dos: ["Handle products carefully and follow staff guidance if service feels formal.", "Keep your voice and movement calm, especially near display counters."],
      donts: ["Do not treat the floor like a noisy public square.", "Do not open packaging or take close-up counter photos without checking."],
      whyItMatters: ["Department stores in Japan often put a lot of care into atmosphere, presentation, and service."],
      commonMistakes: ["Speaking loudly with a group near a quiet counter.", "Using the store mainly as a place to sit with large luggage."],
      readMore: ["The more refined a floor feels, the more helpful it is to slow down and match the space."]
    }
  },
  {
    id: "duty-free",
    slug: "duty-free",
    title: "Duty-Free Shopping",
    shortDescription: "Bring the right documents and expect a process, not just a discount.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["shopping", "tax-free"],
    content: {
      quickView: ["Keep your passport ready.", "Check whether the purchase qualifies.", "Follow sealing or packaging rules."],
      dos: ["Prepare your passport before reaching the counter if tax-free processing is required.", "Confirm that the store and item are eligible before assuming you can do tax-free checkout."],
      donts: ["Do not assume every branch or every item is tax-free.", "Do not open sealed packaging if the rules say to keep it closed."],
      whyItMatters: ["Duty-free shopping depends on documentation and store-specific rules, not just the price."],
      commonMistakes: ["Reaching the counter without a passport.", "Assuming a phone photo of a passport will be enough."],
      readMore: ["It is usually easiest to decide before paying whether you want normal checkout or tax-free processing."]
    }
  },
  {
    id: "fitting-room",
    slug: "fitting-room",
    title: "Fitting Rooms",
    shortDescription: "Wait your turn, follow the store rules, and help keep the clothes clean.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["shopping", "clothing"],
    content: {
      quickView: ["Follow the fitting room rules.", "Keep clothes clean.", "Do not assume photos are always fine."],
      dos: ["Ask or check signs before entering, especially if the store limits the number of items.", "Use the face cover or shoe rules the store provides."],
      donts: ["Do not walk in with shoes if the fitting room area requires them off.", "Do not leave unwanted clothes scattered around the room."],
      whyItMatters: ["Fitting rooms are controlled spaces because the store is protecting both cleanliness and product condition."],
      commonMistakes: ["Bringing in too many items without checking.", "Taking mirror photos in a store that does not allow it."],
      readMore: ["If the fitting room system feels strict, it is usually about cleanliness, queue order, and care for the clothes."]
    }
  },
  {
    id: "secondhand-shop",
    slug: "secondhand-shop",
    title: "Secondhand and Reuse Shops",
    shortDescription: "Look closely, handle gently, and ask before opening or testing things.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["shopping", "reuse"],
    content: {
      quickView: ["Check items carefully.", "Handle them gently.", "Ask before opening, testing, or inspecting deeply."],
      dos: ["Examine items with care and ask if you want to test electronics or open packaging.", "Follow staff guidance for higher-value items or display cases."],
      donts: ["Do not treat secondhand goods like rough bargain bins unless the store clearly works that way.", "Do not open sealed goods without permission."],
      whyItMatters: ["Many reuse shops in Japan are highly organized, and product condition is a big part of the trust."],
      commonMistakes: ["Handling goods too roughly because they are secondhand.", "Treating a premium resale shop like a flea market."],
      readMore: ["The more carefully items are displayed, the more carefully customers are usually expected to handle them."]
    }
  },
  {
    id: "market-shopping-street",
    slug: "market-shopping-street",
    title: "Markets and Shopping Streets",
    shortDescription: "Keep moving, leave room for locals, and respect shop fronts as working space.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["shopping street", "market"],
    content: {
      quickView: ["Walk with the flow.", "Step aside before stopping.", "Check before photographing workers or stalls."],
      dos: ["Move to one side when possible and step away from the center if you stop to look.", "Treat shop entrances and display space as part of a working area."],
      donts: ["Do not block a shop front while deciding what to do next.", "Do not touch produce or goods unless that is clearly part of the system."],
      whyItMatters: ["Markets and shopping streets are not just sightseeing spots. They are also everyday shopping and working spaces."],
      commonMistakes: ["Stopping in front of a stall to discuss plans.", "Photographing workers without asking."],
      readMore: ["Enjoy the street, but remember that for many people it is still a place to work or shop quickly."]
    }
  },
  {
    id: "shopping-bags-packaging",
    slug: "shopping-bags-packaging",
    title: "Shopping Bags and Packaging",
    shortDescription: "Listen for the bag question and answer simply so the checkout can keep moving.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["checkout", "shopping bag"],
    content: {
      quickView: ["You may be asked about a bag.", "Gift wrapping is often a separate choice.", "Decide before the line slows down."],
      dos: ["Listen for short questions about bags or wrapping and answer briefly.", "If you want special wrapping, mention it before the purchase finishes when possible."],
      donts: ["Do not assume a plastic bag is automatic or always free.", "Do not hold up the line while deciding something non-essential."],
      whyItMatters: ["A short bag or wrapping question often affects speed, cost, and waste reduction all at once."],
      commonMistakes: ["Feeling confused by a simple bag question.", "Asking for elaborate wrapping only after the checkout is already done."],
      readMore: ["Even if you miss the spoken question, staff often point to the bag or options, so a short reply is usually enough."]
    }
  },
  {
    id: "delivery-service",
    slug: "delivery-service",
    title: "Delivery Services",
    shortDescription: "Check the address carefully and follow the form one step at a time.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["delivery", "shipping"],
    content: {
      quickView: ["Confirm the address first.", "Ask for help with the form if needed.", "Make sure the destination can receive it."],
      dos: ["Check the full destination name, address, and delivery timing before sending anything.", "Ask staff for help if the form or service options feel unclear."],
      donts: ["Do not guess the address or hotel name.", "Do not assume every hotel will accept every package without notice."],
      whyItMatters: ["Japan's delivery services are reliable, but they depend on very clear recipient information."],
      commonMistakes: ["Using an incomplete hotel name.", "Trying to figure everything out only after reaching a busy counter."],
      readMore: ["If you are sending something to a hotel, confirming the hotel's receiving policy first is usually the safest step."]
    }
  },
  {
    id: "atm",
    slug: "atm",
    title: "Using an ATM",
    shortDescription: "Use the machine efficiently, then step aside before sorting your cash or wallet.",
    access: "free",
    imageUrl: publicImage,
    badge: "essential",
    tags: ["atm", "cash"],
    content: {
      quickView: ["Prepare your card first.", "Move aside after the transaction.", "Do not sort everything at the machine."],
      dos: ["Have your card ready before you step up to the ATM.", "Move away before counting cash, checking receipts, or repacking your wallet."],
      donts: ["Do not assume every ATM accepts foreign cards.", "Do not leave receipts behind."],
      whyItMatters: ["ATM corners are usually small and meant for quick, private use."],
      commonMistakes: ["Taking too long to decide the language or network options.", "Standing at the machine while reorganizing a full wallet."],
      readMore: ["Convenience store ATMs are often the easiest option for foreign cards, but it is still wise to check before relying on one machine."]
    }
  }
];

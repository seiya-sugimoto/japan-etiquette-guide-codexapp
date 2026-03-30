import type { Category } from "@/types/category";
import { additionalEnglishCategories } from "@/data/categories/en-additional";

export const englishCategories: Category[] = [
  {
    id: "train",
    slug: "train",
    title: "Train Etiquette",
    shortDescription: "Quiet, orderly habits for stations and trains.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvf0R7-J215zxndN4nPR_cHU9H_hrBMo7bEXWWfvmo4OHxvyExFZ15hNAQQu6oZXCvDFRuBWJUlbYrWRTRY7jb3ims_RvKWB5UghnK3qWTAdXAzSZjZxnnca6S_2Fj4Le12npnJZlprgRf0Th20O3o49-Rdfm8ixhvT5H4_L7ZzmVAYp-esFQnnIr6gUKR4V2o41VTGfEI2_6CJb1HXxI2-3WY9zJPHkFl0fyrmPGKnUJAYWcGj9F4XXMYYzaPsYttuE9hra6pXo-W",
    badge: "premium",
    tags: ["transport", "silence", "priority seats"],
    content: {
      quickView: ["Keep your voice low.", "Queue before boarding.", "Set your phone to silent mode."],
      dos: ["Let people exit before you board.", "Offer priority seats if someone seems to need them.", "On crowded trains, carry backpacks in front of you."],
      donts: ["Try not to take calls in the carriage.", "Avoid blocking the doors with your body or luggage.", "Eating is often fine on long-distance trains, but less common on commuter trains."],
      whyItMatters: ["Trains in Japan often feel quiet and orderly. Small actions can make shared space easier for everyone."],
      commonMistakes: ["Talking at full volume with friends.", "Stopping near the doors with large luggage.", "Missing carriage signs about priority seats or special rules."],
      readMore: ["Rules can vary by train type, so signs about women-only cars, reserved seats, and luggage are worth checking."]
    }
  },
  {
    id: "restaurant",
    slug: "restaurant",
    title: "Restaurant Basics",
    shortDescription: "Simple dining habits that help service run smoothly.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbVmeI3tkpHKHQdKPJbhH7ulUUlkXZOt-LnA9sAqynDlmUZjIQW9l3gtj3j4-4Tjz92TDbW-iksdQKdfQthK1YCUKT2CtEtBn24PNsY_Oq15odw9aINjjDXiE99E2bY4EfjcxhSM-8yGxcLHaqb7bql7H3kmhZIQ0aMsAdchFEm89XiiP-ya7_0xtqSgDW5z0LvITE6Z6_L6NkOTiYRxt8B1beifvuYc0-hctayR_kx-IQHZSqZcTeQYqG_D37yFt18q_t9WDzsIy",
    badge: "essential",
    tags: ["dining", "ordering", "table manners"],
    content: {
      quickView: ["Wait to be seated if staff are guiding guests.", "Keep requests simple and clear.", "Check house rules on ordering and payment."],
      dos: ["Use a call button if the table has one.", "Keep bags compact, especially in small places.", "If you need separate bills, ask politely because some places cannot do it."],
      donts: ["Do not assume every place splits the bill.", "Try not to leave a large mess behind.", "If the space is tight, check before bringing in large luggage."],
      whyItMatters: ["Many restaurants are small and run on a smooth, quiet flow. A little awareness usually helps a lot."],
      commonMistakes: ["Waiting without noticing a host stand or sign.", "Speaking over a staff explanation instead of listening first.", "Assuming payment works the same way in every restaurant."],
      readMore: ["Useful things to check: call buttons, one-drink minimums, cash-only payment, and whether the bill is paid at the table or register."]
    }
  },
  {
    id: "shrine",
    slug: "shrine",
    title: "Shrine Visits",
    shortDescription: "Respectful behavior around shrine grounds and rituals.",
    access: "premium",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGr5Jav_9YULL6NpQa5Wq0SgCsgXrcvqN49shvBe7AJ-hNBYZBV8VIJKw5FSJU09wKFwJ_Gd5Oq_aSIPJ0YFhCZfAq4wXFyrhhyx90y0rk-CnyAHsTM1RJNLTC3w0_fVsI1pZg92mpgxCDD71_lN8ntnqqjYWB-yXDADHRxZBWcJ9fqKLVPjaWYzbeho-WmMiymFaQzjHNlxcfso5d5MeCKe8UmQFV9Trs9Umy0a5wBwsuDDVrXzSDFE14CdFFKW46bTDxU4ZNcfuT",
    badge: "essential",
    tags: ["culture", "worship", "ritual"],
    content: {
      quickView: ["Stay calm and observant.", "If in doubt, follow signs and the local flow.", "Quiet, respectful behavior is usually enough."],
      dos: ["At some shrines, people avoid the center of the main approach, so watch local signs and patterns.", "If you want to try a ritual, it is fine to observe first.", "Keep voices, phone use, and photos modest."],
      donts: ["Avoid treating the space like a photo set if people are worshipping nearby.", "Do not block worship areas for pictures.", "Do not touch ritual objects unless it is clearly invited."],
      whyItMatters: ["Shrines are often both cultural landmarks and active places of worship."],
      commonMistakes: ["Walking straight through the middle path without noticing local custom.", "Taking photos where worshippers need space.", "Trying to copy rituals too quickly without checking the flow."],
      readMore: ["You do not need perfect ritual knowledge. In many places, being quiet, patient, and observant is enough."]
    }
  },
  {
    id: "onsen",
    slug: "onsen",
    title: "Onsen and Sento",
    shortDescription: "Bathing etiquette for shared hot spring and public bath spaces.",
    access: "premium",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuChn-lNCtZrAe5F_W_BqB2w38mGFEd-wPg2X-3jJSnL5SFbUwqHZloKfBrvMN4Sy3mVZIF5QbXxWqAPSBY6CTbES2aO6_fJmexZsQp3gCoFRzNj7qFRp5mPTZxdTo64Wlfw3r71jGAG-UZN_VLiGc5QNhcJcrniDrhY6sFRCLy4IRMTa3UO2SmzrSCsZmrqXbj5DjNKujzZHeCUF1ipwkL6No3Za1Tun5zF9wnt4UxFHdtLNAG7I-CFLsDxl-BSJkJ-lKtFaI8amQL1",
    badge: "high-risk",
    tags: ["bath", "hygiene", "shared spaces"],
    content: {
      quickView: ["Wash before entering the bath.", "Keep towels out of the water.", "Stay quiet and relaxed."],
      dos: ["Rinse and wash fully at the shower station first.", "Tie up long hair if needed.", "Keep your locker and washing area tidy."],
      donts: ["Do not get into the bath before washing.", "Avoid swimming, splashing, or loud conversation.", "Keep your large towel out of the bath water."],
      whyItMatters: ["Onsen and sento are shared spaces built around cleanliness, calm, and consideration."],
      commonMistakes: ["Treating the bath like a pool.", "Leaving soap or water spread around the washing area.", "Assuming tattoo rules are the same everywhere."],
      readMore: ["Tattoo, photography, and private bath rules vary a lot by facility, so signs and staff guidance matter."]
    }
  },
  {
    id: "temple",
    slug: "temple",
    title: "Temple Visits",
    shortDescription: "Quiet, attentive behavior in Buddhist temple spaces.",
    access: "premium",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGr5Jav_9YULL6NpQa5Wq0SgCsgXrcvqN49shvBe7AJ-hNBYZBV8VIJKw5FSJU09wKFwJ_Gd5Oq_aSIPJ0YFhCZfAq4wXFyrhhyx90y0rk-CnyAHsTM1RJNLTC3w0_fVsI1pZg92mpgxCDD71_lN8ntnqqjYWB-yXDADHRxZBWcJ9fqKLVPjaWYzbeho-WmMiymFaQzjHNlxcfso5d5MeCKe8UmQFV9Trs9Umy0a5wBwsuDDVrXzSDFE14CdFFKW46bTDxU4ZNcfuT",
    badge: "essential",
    tags: ["culture", "religion", "quiet"],
    content: {
      quickView: ["Move slowly.", "Keep your voice down.", "Check signs before entering halls."],
      dos: ["Read posted guidance before going inside.", "Remove shoes when asked.", "Keep phone use discreet and photos limited."],
      donts: ["Do not enter restricted areas.", "Do not assume photography is allowed everywhere.", "Avoid interrupting prayer or ceremonies."],
      whyItMatters: ["Temples can be places of prayer, memorial, and active practice, not only sightseeing."],
      commonMistakes: ["Talking loudly indoors.", "Missing a shoe-removal area.", "Taking photos without checking first."],
      readMore: ["Rules can vary by temple, especially around interior halls, memorial spaces, and photography."]
    }
  },
  {
    id: "ryokan",
    slug: "ryokan-hotel",
    title: "Ryokan Etiquette",
    shortDescription: "How to follow the flow of a traditional inn without stress.",
    access: "premium",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1tJjDnfI9teWFS0Ysd-b7qSBXrfvrczdJ8L8VNtCDid-vrUIBSOLH0z5kP6ez46qG_kuxd8eCPdxkEo-muneoXBvMYMaFCMM1q7ZdoPvTbO6h6xdJYgdmYfnV_IezMm6UHDOfP0M1NvXL3zc8Uxg44dkpX9Jx-ckmUrH8FDmoLiljpEnxO0v5PEYQzVvqmjTrM7IkOe8U4aHO9HaxZ3Hrkfy7kcJA9sG9flWMaTmQRbLKpHRb4WynRX_-xU7FcstgRMiQPEPbmn_X",
    badge: "premium",
    tags: ["lodging", "shoes", "service"],
    content: {
      quickView: ["Listen to the check-in explanation.", "Follow meal and bath timing.", "Keep the room calm and tidy."],
      dos: ["Check meal times, bath times, and any house rules at arrival.", "Use slippers only in the areas where they belong.", "Ask before moving bedding, furniture, or room items."],
      donts: ["Do not wear outdoor shoes inside.", "Do not assume a ryokan works exactly like a hotel.", "Try not to miss the check-in explanation, because many details are given there."],
      whyItMatters: ["Ryokan often have a clearer house rhythm than hotels, especially around meals, baths, and room use."],
      commonMistakes: ["Missing meal or bath timing.", "Using toilet slippers in the wrong area.", "Leaving wet items where staff need to prepare the room."],
      readMore: ["If you are unsure, the safest option is to ask staff. Expectations can vary by inn."]
    }
  },
  {
    id: "shoes-indoors",
    slug: "shoes-indoors",
    title: "Shoes Indoors",
    shortDescription: "When to remove shoes and how indoor footwear usually works.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXiYqH3rXSzqe9K5h3wHsbpPe3X6bn-GTqhLM7Q-tbm1Ugc5u-7Yl-PuuymETTtwlQDd7xaZ1xrCn7_X7ZkW94J0XIUUsuPhclFg-av7kcIDGltDqR2Uoh9MTfkEUAGR3qoB6EgXPTGxJAhnXTucN-ZiEz6XMatESE5GFeDm6GSrcHQTtJ2egxyvZWvFp02-vDyr0WqOszk1otw8oHpRfkSHfqsXR0NNDSirSKobH-ccE3565yf74XH01qS7PpVufPprMjmBaPczyf",
    badge: "essential",
    tags: ["entryway", "home", "cleanliness"],
    content: {
      quickView: ["Watch for a step, mat, or shoe area.", "Remove shoes when the space changes to an indoor floor.", "Use indoor slippers only where they belong."],
      dos: ["Look for a genkan, shoe shelf, slippers, or a sign.", "If slippers are provided, use them in the usual indoor areas.", "Be extra careful around tatami rooms and fitting rooms."],
      donts: ["Do not step onto indoor flooring with outdoor shoes.", "Do not wear toilet slippers outside that area.", "Do not assume every place follows exactly the same pattern."],
      whyItMatters: ["Shoe-removal helps keep indoor spaces clean and comfortable. It comes up in more places than many visitors expect."],
      commonMistakes: ["Missing the small step at an entrance.", "Walking onto tatami with slippers or shoes.", "Mixing up bathroom slippers and regular indoor slippers."],
      readMore: ["This comes up in homes, temples, some restaurants, fitting rooms, clinics, and traditional accommodation."]
    }
  },
  {
    id: "trash-public",
    slug: "trash-public-manners",
    title: "Trash and Public Manners",
    shortDescription: "How to carry waste and stay considerate in shared public space.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfmLWBNLM_bradzi3uk-lpF9asqjEzZ0NXnclzkJuOyge_UUC3zd2Nx5b3F0SGMPvn7BK_gLfnlPEcTuSU-rzBmAqNKdnJylkeUsRa-qBgHkWkTUmc4THrzcc7uGVI-k3huYb3emYGWrdimlVwU5wp927CFwAMXbQQtsbu7sthQE8qvvGIhjt4HVR-Qt9fN5i259Mpt_1ngJmBlumW06H4Gyn7KMs8VcHqaG1Dzcv1iDYRncCuzaEcczNDZuj4K4agSWjcMVBE3A2v",
    badge: "high-risk",
    tags: ["cleanliness", "public space", "waste"],
    content: {
      quickView: ["Carry your trash if needed.", "Keep walkways and shared space clear.", "If you eat while moving, be extra mindful of mess and crowding."],
      dos: ["Bring a small bag for your own trash.", "Use sorting labels when bins are clearly marked.", "Step aside before checking maps, photos, or messages."],
      donts: ["Do not litter or leave cups and packaging behind.", "Avoid stopping suddenly in a busy walkway.", "Try not to eat in a way that creates mess, strong smells, or crowding."],
      whyItMatters: ["Public bins can be limited, so people often manage their own trash and try to keep shared space comfortable."],
      commonMistakes: ["Expecting bins to be easy to find everywhere.", "Blocking pedestrian flow while checking directions.", "Leaving store packaging in places that are not meant for trash."],
      readMore: ["Eating while walking is not always a problem, but in crowded areas it can feel awkward. Carrying your trash until you find the right bin is usually the safest choice."]
    }
  },
  {
    id: "payments-tipping",
    slug: "payments-tipping",
    title: "Payments and Tipping",
    shortDescription: "Why tipping is uncommon and how payment flow often works in Japan.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbVmeI3tkpHKHQdKPJbhH7ulUUlkXZOt-LnA9sAqynDlmUZjIQW9l3gtj3j4-4Tjz92TDbW-iksdQKdfQthK1YCUKT2CtEtBn24PNsY_Oq15odw9aINjjDXiE99E2bY4EfjcxhSM-8yGxcLHaqb7bql7H3kmhZIQ0aMsAdchFEm89XiiP-ya7_0xtqSgDW5z0LvITE6Z6_L6NkOTiYRxt8B1beifvuYc0-hctayR_kx-IQHZSqZcTeQYqG_D37yFt18q_t9WDzsIy",
    badge: "high-risk",
    tags: ["payment", "cash", "tipping"],
    content: {
      quickView: ["Tipping is usually not expected.", "Check where payment happens.", "Cash is still useful in some places."],
      dos: ["Look for a register, ticket machine, self-checkout, or bill tray.", "If there is a cash tray, using it is usually the smoothest option.", "In smaller places, it can help to check card acceptance before ordering."],
      donts: ["Do not assume tipping is part of the service.", "Do not assume payment always happens at the table.", "Do not assume separate bills are always available."],
      whyItMatters: ["Payment in Japan is often simple, but the flow may feel different if you expect tipping or table payment."],
      commonMistakes: ["Leaving coins behind as a tip.", "Waiting too long for staff to take payment at the table.", "Assuming every place accepts international cards."],
      readMore: ["Useful things to watch for: cash-only signs, ticket machines, self-checkout, and whether payment happens at the register."]
    }
  },
  {
    id: "chopsticks",
    slug: "chopsticks",
    title: "Chopsticks",
    shortDescription: "Small dining rules that surprise many first-time visitors.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbVmeI3tkpHKHQdKPJbhH7ulUUlkXZOt-LnA9sAqynDlmUZjIQW9l3gtj3j4-4Tjz92TDbW-iksdQKdfQthK1YCUKT2CtEtBn24PNsY_Oq15odw9aINjjDXiE99E2bY4EfjcxhSM-8yGxcLHaqb7bql7H3kmhZIQ0aMsAdchFEm89XiiP-ya7_0xtqSgDW5z0LvITE6Z6_L6NkOTiYRxt8B1beifvuYc0-hctayR_kx-IQHZSqZcTeQYqG_D37yFt18q_t9WDzsIy",
    badge: "essential",
    tags: ["dining", "chopsticks", "surprising"],
    content: {
      quickView: ["Do not stick chopsticks upright in rice.", "Do not pass food from chopsticks to chopsticks.", "Use a rest or holder when you pause."],
      dos: ["Place chopsticks neatly on the holder when possible.", "If a shared dish has serving chopsticks, use them.", "If you need a fork, it is completely fine to ask."],
      donts: ["Do not spear food casually.", "Do not wave chopsticks while talking.", "Do not point at people or dishes with them."],
      whyItMatters: ["A few chopstick gestures have strong funeral associations, and others simply feel rough in a shared meal."],
      commonMistakes: ["Resting chopsticks across bowls for a long time.", "Passing food directly from one pair of chopsticks to another.", "Using chopsticks to drag dishes closer."],
      readMore: ["You do not need perfect technique. Calm, careful handling matters more than looking expert."]
    }
  },
  {
    id: "visiting-home",
    slug: "visiting-a-home",
    title: "Visiting a Home",
    shortDescription: "Indoor slippers, small gifts, and other things guests often overlook.",
    access: "premium",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXiYqH3rXSzqe9K5h3wHsbpPe3X6bn-GTqhLM7Q-tbm1Ugc5u-7Yl-PuuymETTtwlQDd7xaZ1xrCn7_X7ZkW94J0XIUUsuPhclFg-av7kcIDGltDqR2Uoh9MTfkEUAGR3qoB6EgXPTGxJAhnXTucN-ZiEz6XMatESE5GFeDm6GSrcHQTtJ2egxyvZWvFp02-vDyr0WqOszk1otw8oHpRfkSHfqsXR0NNDSirSKobH-ccE3565yf74XH01qS7PpVufPprMjmBaPczyf",
    badge: "premium",
    tags: ["home", "guest", "slippers"],
    content: {
      quickView: ["Take off shoes at the entrance.", "Watch how slippers are used.", "A small gift is often appreciated, but not always necessary."],
      dos: ["Follow your host's lead at the entrance.", "Ask where to put your coat or bag if you are unsure.", "In apartments, keeping your voice calm is often appreciated."],
      donts: ["Do not wear toilet slippers outside that area.", "Do not assume every room uses the same slippers.", "Try not to arrive much earlier than the agreed time unless your host suggests it."],
      whyItMatters: ["Home visits can feel a little more formal than some travelers expect, especially around entrances and shared household space."],
      commonMistakes: ["Stepping onto tatami with slippers.", "Missing the switch from outdoor shoes to indoor slippers.", "Bringing a large wet bag or luggage into a small entryway without checking."],
      readMore: ["You do not need to be overly formal. Watching your host and copying the general flow is usually enough."]
    }
  },
  {
    id: "convenience-store",
    slug: "convenience-store",
    title: "Convenience Stores",
    shortDescription: "Quiet checkout habits, tray use, and small routines that can feel unfamiliar.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfmLWBNLM_bradzi3uk-lpF9asqjEzZ0NXnclzkJuOyge_UUC3zd2Nx5b3F0SGMPvn7BK_gLfnlPEcTuSU-rzBmAqNKdnJylkeUsRa-qBgHkWkTUmc4THrzcc7uGVI-k3huYb3emYGWrdimlVwU5wp927CFwAMXbQQtsbu7sthQE8qvvGIhjt4HVR-Qt9fN5i259Mpt_1ngJmBlumW06H4Gyn7KMs8VcHqaG1Dzcv1iDYRncCuzaEcczNDZuj4K4agSWjcMVBE3A2v",
    badge: "essential",
    tags: ["store", "payment", "daily life"],
    content: {
      quickView: ["Use the payment tray if there is one.", "Have cash or card ready.", "Step aside if you need time to sort your items."],
      dos: ["Watch the counter flow before paying.", "Keep your payment method ready.", "After checkout, move a little aside if you need to repack or sort things."],
      donts: ["Try not to block the counter while reorganizing everything.", "Do not assume every store bags items in the same way.", "If you miss a cashier question, it is fine to pause and ask politely."],
      whyItMatters: ["Convenience stores are designed to move quickly, so a little awareness helps the whole line."],
      commonMistakes: ["Missing the payment tray.", "Sorting receipts and change while blocking the next customer.", "Not noticing a separate microwave, pickup, or self-bag area."],
      readMore: ["Conbini are a good place to learn the small rhythms of daily life in Japan."]
    }
  },
  {
    id: "queue-escalator",
    slug: "queues-and-escalators",
    title: "Queues and Escalators",
    shortDescription: "Where to stand, how to line up, and why crowd flow matters so much.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvf0R7-J215zxndN4nPR_cHU9H_hrBMo7bEXWWfvmo4OHxvyExFZ15hNAQQu6oZXCvDFRuBWJUlbYrWRTRY7jb3ims_RvKWB5UghnK3qWTAdXAzSZjZxnnca6S_2Fj4Le12npnJZlprgRf0Th20O3o49-Rdfm8ixhvT5H4_L7ZzmVAYp-esFQnnIr6gUKR4V2o41VTGfEI2_6CJb1HXxI2-3WY9zJPHkFl0fyrmPGKnUJAYWcGj9F4XXMYYzaPsYttuE9hra6pXo-W",
    badge: "high-risk",
    tags: ["queue", "escalator", "public space"],
    content: {
      quickView: ["Follow marked lines when you see them.", "Check signs and the local flow.", "In busy spaces, avoid sudden stops."],
      dos: ["Look at floor markings before lining up.", "Keep luggage close to your body.", "Move to the side before checking maps or messages."],
      donts: ["Do not start a new line if there is already an organized queue nearby.", "Do not spread bags into walkways.", "Do not assume escalator standing patterns are the same in every city."],
      whyItMatters: ["Stations, shops, and event spaces in Japan often depend on smooth crowd flow."],
      commonMistakes: ["Missing a queue because it was formed quietly.", "Standing where you block people on an escalator or platform.", "Stopping in a narrow walkway to decide where to go next."],
      readMore: ["For escalators, the safest guide is signs, staff instructions, and the local flow. In some places, safety campaigns ask people not to walk on escalators at all."]
    }
  },
  {
    id: "photo-video",
    slug: "photo-video",
    title: "Photos and Video",
    shortDescription: "How to film respectfully without blocking people or breaking local rules.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGr5Jav_9YULL6NpQa5Wq0SgCsgXrcvqN49shvBe7AJ-hNBYZBV8VIJKw5FSJU09wKFwJ_Gd5Oq_aSIPJ0YFhCZfAq4wXFyrhhyx90y0rk-CnyAHsTM1RJNLTC3w0_fVsI1pZg92mpgxCDD71_lN8ntnqqjYWB-yXDADHRxZBWcJ9fqKLVPjaWYzbeho-WmMiymFaQzjHNlxcfso5d5MeCKe8UmQFV9Trs9Umy0a5wBwsuDDVrXzSDFE14CdFFKW46bTDxU4ZNcfuT",
    badge: "high-risk",
    tags: ["photos", "video", "privacy", "rules"],
    content: {
      quickView: ["Check filming rules first.", "Do not block walkways or worship space.", "Be careful when people are in the frame."],
      dos: ["Look for signs before filming in shops, temples, shrines, exhibitions, and private property.", "Keep a little distance if you are photographing people or staff.", "Step aside before stopping for photos or video."],
      donts: ["Do not assume a beautiful place means filming is always allowed.", "Avoid filming people closely without permission.", "Do not use flash or video in places where signs ask you not to."],
      whyItMatters: ["Photo rules in Japan often depend on privacy, safety, worship, and business needs rather than only whether a place looks public."],
      commonMistakes: ["Blocking a narrow path for a photo.", "Filming inside a shop without noticing a sign.", "Taking large close-up shots of strangers without asking."],
      readMore: ["If rules are unclear, the safest option is to check signs or ask staff. Restrictions can change by place and event."]
    }
  },
  {
    id: "smoking",
    slug: "smoking",
    title: "Smoking",
    shortDescription: "Where smoking is allowed can be more limited than many visitors expect.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfmLWBNLM_bradzi3uk-lpF9asqjEzZ0NXnclzkJuOyge_UUC3zd2Nx5b3F0SGMPvn7BK_gLfnlPEcTuSU-rzBmAqNKdnJylkeUsRa-qBgHkWkTUmc4THrzcc7uGVI-k3huYb3emYGWrdimlVwU5wp927CFwAMXbQQtsbu7sthQE8qvvGIhjt4HVR-Qt9fN5i259Mpt_1ngJmBlumW06H4Gyn7KMs8VcHqaG1Dzcv1iDYRncCuzaEcczNDZuj4K4agSWjcMVBE3A2v",
    badge: "high-risk",
    tags: ["smoking", "street", "rules", "designated areas"],
    content: {
      quickView: ["Look for a designated smoking area.", "Do not assume outdoor space is always okay.", "Check each venue's rule."],
      dos: ["Use marked smoking areas when they are provided.", "Check signs around stations, streets, restaurants, and buildings.", "Keep cigarettes and ash inside the smoking area."],
      donts: ["Do not smoke where there is no ashtray or clear permission.", "Do not assume smoking rules are the same in every restaurant or bar.", "Avoid thinking that outside automatically means smoking is allowed."],
      whyItMatters: ["Street-smoking rules can be strict in some areas, and smoke is treated as a comfort and safety issue in many shared spaces."],
      commonMistakes: ["Lighting a cigarette near a station exit without checking the area.", "Looking for a smoking spot only after stepping away from an ashtray.", "Assuming a restaurant follows the same smoking policy as the last one."],
      readMore: ["Smoking rules vary by city, building, and venue. Signs and designated areas are the best guide."]
    }
  },
  {
    id: "large-luggage",
    slug: "large-luggage",
    title: "Large Luggage",
    shortDescription: "How to handle suitcases without slowing crowded stations and trains.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvf0R7-J215zxndN4nPR_cHU9H_hrBMo7bEXWWfvmo4OHxvyExFZ15hNAQQu6oZXCvDFRuBWJUlbYrWRTRY7jb3ims_RvKWB5UghnK3qWTAdXAzSZjZxnnca6S_2Fj4Le12npnJZlprgRf0Th20O3o49-Rdfm8ixhvT5H4_L7ZzmVAYp-esFQnnIr6gUKR4V2o41VTGfEI2_6CJb1HXxI2-3WY9zJPHkFl0fyrmPGKnUJAYWcGj9F4XXMYYzaPsYttuE9hra6pXo-W",
    badge: "high-risk",
    tags: ["luggage", "suitcase", "shinkansen", "crowds"],
    content: {
      quickView: ["Keep bags out of walkways.", "Watch your luggage in crowded spaces.", "Check train rules for oversized bags."],
      dos: ["Move large suitcases close to your body in stations and queues.", "Use coin lockers or luggage delivery if carrying everything feels difficult.", "Check oversized luggage rules before long-distance train travel."],
      donts: ["Do not spread bags across doorways, aisles, or platforms.", "Do not stop in a narrow passage to reorganize luggage.", "Avoid leaving a large suitcase where other people need to pass."],
      whyItMatters: ["Crowded stations and trains depend on steady people flow, so luggage position matters more than many travelers expect."],
      commonMistakes: ["Opening a suitcase in a busy station corridor.", "Leaving a bag by the train door during a crowded ride.", "Missing oversized luggage guidance on some shinkansen services."],
      readMore: ["If you are carrying a lot, lockers and luggage forwarding can make the day much easier. Rules vary by train and route."]
    }
  },
  {
    id: "residential-private",
    slug: "residential-private-stays",
    title: "Residential Areas and Private Stays",
    shortDescription: "Quiet, respectful habits around homes, apartments, and private property.",
    access: "premium",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXiYqH3rXSzqe9K5h3wHsbpPe3X6bn-GTqhLM7Q-tbm1Ugc5u-7Yl-PuuymETTtwlQDd7xaZ1xrCn7_X7ZkW94J0XIUUsuPhclFg-av7kcIDGltDqR2Uoh9MTfkEUAGR3qoB6EgXPTGxJAhnXTucN-ZiEz6XMatESE5GFeDm6GSrcHQTtJ2egxyvZWvFp02-vDyr0WqOszk1otw8oHpRfkSHfqsXR0NNDSirSKobH-ccE3565yf74XH01qS7PpVufPprMjmBaPczyf",
    badge: "premium",
    tags: ["apartment", "airbnb", "private property", "noise"],
    content: {
      quickView: ["Keep voices low in residential streets.", "Do not enter resident-only areas.", "Follow trash and building rules closely."],
      dos: ["Read house rules carefully if you stay in a rental apartment or private lodging.", "Use only the parts of the building that guests are allowed to use.", "Be extra quiet late at night and early in the morning."],
      donts: ["Do not treat apartment corridors, entrances, or parking spaces like sightseeing spots.", "Do not leave trash anywhere except the approved place and time.", "Avoid gathering noisily outside a building at night."],
      whyItMatters: ["Homes and small apartment buildings are daily living spaces, so noise and shared-space rules can matter a lot."],
      commonMistakes: ["Talking loudly outside a rental at night.", "Entering a resident-only area to take photos or look around.", "Putting trash out in the wrong place or on the wrong day."],
      readMore: ["Private stays can have stricter local rules than hotels. If in doubt, follow the host's instructions and building signs."]
    }
  },
  {
    id: "toilet",
    slug: "toilet",
    title: "Toilets",
    shortDescription: "How to use unfamiliar toilets calmly and keep the space clean for the next person.",
    access: "free",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXiYqH3rXSzqe9K5h3wHsbpPe3X6bn-GTqhLM7Q-tbm1Ugc5u-7Yl-PuuymETTtwlQDd7xaZ1xrCn7_X7ZkW94J0XIUUsuPhclFg-av7kcIDGltDqR2Uoh9MTfkEUAGR3qoB6EgXPTGxJAhnXTucN-ZiEz6XMatESE5GFeDm6GSrcHQTtJ2egxyvZWvFp02-vDyr0WqOszk1otw8oHpRfkSHfqsXR0NNDSirSKobH-ccE3565yf74XH01qS7PpVufPprMjmBaPczyf",
    badge: "essential",
    tags: ["toilet", "washroom", "buttons", "cleanliness"],
    content: {
      quickView: ["Flush toilet paper unless signs say otherwise.", "Do not panic if there are many buttons.", "Leave the space clean."],
      dos: ["Check wall signs if the toilet style or controls feel unfamiliar.", "Use the normal flush button if you are unsure which control to press.", "Take a moment to leave the floor and seat area tidy for the next person."],
      donts: ["Do not press the emergency call button unless you really need help.", "Do not assume every toilet works the same way.", "Avoid leaving water, paper, or luggage spread around a small stall."],
      whyItMatters: ["Toilets in Japan often feel very clean, and many places expect shared facilities to stay that way."],
      commonMistakes: ["Pressing a call button by accident.", "Freezing because the control panel looks complicated.", "Leaving a stall messy in a small public restroom."],
      readMore: ["Japanese and western-style toilets both exist. If you feel unsure, signs in the stall usually make the safest next step clear."]
    }
  },
  {
    id: "bicycle",
    slug: "bicycles-and-rental-cycles",
    title: "Bicycles and Rental Cycles",
    shortDescription: "Small riding habits that help you stay safe and avoid parking trouble.",
    access: "premium",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvf0R7-J215zxndN4nPR_cHU9H_hrBMo7bEXWWfvmo4OHxvyExFZ15hNAQQu6oZXCvDFRuBWJUlbYrWRTRY7jb3ims_RvKWB5UghnK3qWTAdXAzSZjZxnnca6S_2Fj4Le12npnJZlprgRf0Th20O3o49-Rdfm8ixhvT5H4_L7ZzmVAYp-esFQnnIr6gUKR4V2o41VTGfEI2_6CJb1HXxI2-3WY9zJPHkFl0fyrmPGKnUJAYWcGj9F4XXMYYzaPsYttuE9hra6pXo-W",
    badge: "premium",
    tags: ["bicycle", "rental cycle", "parking", "safety"],
    content: {
      quickView: ["Check local bike rules first.", "Do not block pedestrians.", "Park only where bicycles are allowed."],
      dos: ["Read the rental instructions and local signs before riding off.", "Slow down in busy sightseeing areas and near pedestrians.", "Look for marked bicycle parking before you leave the bike."],
      donts: ["Do not assume bicycle rules match the country you came from.", "Do not leave a bike outside a station or shop if parking is not clearly allowed.", "Avoid riding fast through crowded pedestrian space."],
      whyItMatters: ["Bicycle rules, parking enforcement, and shared-path expectations can feel different from place to place."],
      commonMistakes: ["Leaving a rental bike where it blocks foot traffic.", "Riding too quickly through a crowded tourist street.", "Skipping parking signs because the stop feels short."],
      readMore: ["Rental cycles are convenient, but parking and riding rules can be strict. Signs and rental instructions are the safest guide."]
    }
  },
  ...additionalEnglishCategories
];

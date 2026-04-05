import type { CategoryId, PremiumDeepDive } from "@/types/category";
import type { AppLanguage } from "@/types/language";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

export const premiumDeepDiveByLanguage: Partial<Record<AppLanguage, PremiumDeepDiveMap>> = {
  en: {
    onsen: {
      culturalNotes: [
        "Bathing etiquette in Japan is less about memorizing a ritual and more about protecting the calm and cleanliness of a shared bath.",
        "People notice preparation and pace more than perfection, so washing fully and moving gently matter more than looking experienced."
      ],
      situationCards: [
        {
          title: "You feel rushed because others seem to know the flow",
          body: "Trying to copy people too quickly often creates more awkwardness than simply slowing down and checking the signs. Onsen spaces reward calm more than speed."
        },
        {
          title: "Your belongings start spreading around the washing area",
          body: "Even when the bath itself feels spacious, the washing station is still shared personal space. Small clutter there feels more noticeable than travelers expect."
        }
      ],
      phraseCards: [
        {
          phrase: "タオルはどこに置けばいいですか？",
          pronunciation: "Taoru wa doko ni okeba ii desu ka?",
          explanation: "A simple way to check where your towel should go.",
          useWhen: "Helpful if the layout feels unfamiliar and you do not want to guess."
        },
        {
          phrase: "こちらのお風呂を使って大丈夫ですか？",
          pronunciation: "Kochira no ofuro o tsukatte daijoubu desu ka?",
          explanation: "A polite way to confirm that this bath is available to you.",
          useWhen: "Useful when there are several baths, private areas, or posted restrictions."
        }
      ],
      checklist: [
        "Check tattoo, photography, and time rules before you settle in.",
        "Wash fully before entering and keep your towel out of the bath.",
        "Leave your washing spot clean enough that the next person can sit down immediately."
      ]
    },
    shrine: {
      culturalNotes: [
        "Shrine etiquette often feels subtle because it is built around atmosphere, boundaries, and worship happening alongside tourism.",
        "You usually do not need to perform every ritual perfectly. What matters more is moving with patience and not turning worship space into your own scene."
      ],
      situationCards: [
        {
          title: "You want a good photo near the main worship area",
          body: "The most beautiful angle is often also the most active worship space. Waiting a little and leaving a clear path usually feels better than claiming the spot quickly."
        },
        {
          title: "You are unsure whether to copy the ritual",
          body: "Watching one or two people first is often the most respectful choice. Copying too fast can feel more careless than simply pausing."
        }
      ],
      phraseCards: [
        {
          phrase: "写真はここで大丈夫ですか？",
          pronunciation: "Shashin wa koko de daijoubu desu ka?",
          explanation: "A natural way to check whether photos are okay in that spot.",
          useWhen: "Helpful near worship areas, gates, purification basins, or quieter corners."
        },
        {
          phrase: "こちらでお参りしてもいいですか？",
          pronunciation: "Kochira de omairi shitemo ii desu ka?",
          explanation: "A gentle way to confirm whether this is the right place to worship.",
          useWhen: "Useful when there are several structures and the route is not obvious."
        }
      ],
      checklist: [
        "Look for photo restrictions before raising your camera.",
        "Slow down near the main approach, basin, and offering area.",
        "If you are unsure, observe first and keep the worship path open."
      ]
    },
    temple: {
      culturalNotes: [
        "Temple etiquette often feels quieter and more interior-facing than shrine etiquette, especially around halls, memorial spaces, and prayer.",
        "The respectful move is usually to read the room before you read the ritual. Silence and careful distance matter more than confidence."
      ],
      situationCards: [
        {
          title: "You enter a hall that looks open to visitors",
          body: "A hall may still have boundaries around prayer, shoes, and photography even if the doorway is open. Treat open access as an invitation to look carefully, not as total freedom."
        },
        {
          title: "You want to take time in front of an altar or memorial object",
          body: "Even if no one stops you, these spaces often hold private meaning for worshippers. Giving them quiet space matters more than taking your full viewing time at the center."
        }
      ],
      phraseCards: [
        {
          phrase: "ここは入っても大丈夫ですか？",
          pronunciation: "Koko wa haitte mo daijoubu desu ka?",
          explanation: "A calm way to ask whether you may enter.",
          useWhen: "Helpful at interior halls, side buildings, or rope-marked boundaries."
        },
        {
          phrase: "靴はここで脱ぎますか？",
          pronunciation: "Kutsu wa koko de nugimasu ka?",
          explanation: "A direct way to confirm shoe removal.",
          useWhen: "Useful when the entry flow feels subtle and you do not want to step too far."
        }
      ],
      checklist: [
        "Check shoe, photo, and interior-entry rules before crossing a threshold.",
        "Keep your voice especially low indoors.",
        "If people are praying, give them the center of the space."
      ]
    },
    bicycle: {
      culturalNotes: [
        "Bicycle etiquette in Japan is often less about bold road behavior and more about not becoming friction for pedestrians, stations, or parking areas.",
        "Small assumptions, especially around where a bike may be left, cause more trouble than the ride itself."
      ],
      situationCards: [
        {
          title: "A quiet corner near the station looks fine for parking",
          body: "In many areas, that is exactly where removal or enforcement happens. The lack of obvious activity does not mean the spot is acceptable."
        },
        {
          title: "You need to pass through a crowded sightseeing street",
          body: "Even slow riding can feel uncomfortable for pedestrians in tight areas. Getting off and walking for a short stretch often looks more natural."
        }
      ],
      phraseCards: [
        {
          phrase: "自転車はどこに停めればいいですか？",
          pronunciation: "Jitensha wa doko ni tomereba ii desu ka?",
          explanation: "A clear way to ask where bicycle parking is allowed.",
          useWhen: "Useful near stations, markets, parks, and sightseeing areas."
        },
        {
          phrase: "この道は自転車で通れますか？",
          pronunciation: "Kono michi wa jitensha de tooremasu ka?",
          explanation: "A polite way to ask if riding through is okay.",
          useWhen: "Helpful when the path feels more pedestrian than road-like."
        }
      ],
      checklist: [
        "Check parking before you stop, not after.",
        "Slow down early where pedestrians are dense.",
        "When the space feels too shared, walking the bike is often the best choice."
      ]
    },
    ryokan: {
      culturalNotes: [
        "Ryokan service often feels anticipatory rather than reactive. Staff explain things early because the day runs on shared timing.",
        "A room may shift from lounge to dining to sleeping space, so leaving it orderly is part of the experience rather than a separate hotel rule."
      ],
      situationCards: [
        {
          title: "You want to go out right after check-in",
          body: "If meal time, bath hours, or room access details were just explained, rushing off without checking them can create small problems later. It is usually worth pausing for one careful minute first."
        },
        {
          title: "Staff may enter while you are settling in",
          body: "In a ryokan, bedding, meal service, or room preparation can involve staff entering more than once. Open luggage, wet towels, and chargers across the floor feel much more disruptive here than in a standard hotel."
        }
      ],
      phraseCards: [
        {
          phrase: "夕食は何時ですか？",
          pronunciation: "Yuushoku wa nanji desu ka?",
          explanation: "A simple, polite way to confirm dinner time.",
          useWhen: "Helpful if the meal explanation felt fast or you arrived tired."
        },
        {
          phrase: "こちらで待てばいいですか？",
          pronunciation: "Kochira de mateba ii desu ka?",
          explanation: "A calm way to ask where you should wait.",
          useWhen: "Useful during check-in, room guidance, or meal preparation."
        }
      ],
      checklist: [
        "Confirm meal, bath, and checkout timing before you fully settle in.",
        "Use the right slippers in the right places, especially near toilets and tatami.",
        "Keep wet items, open luggage, and cables compact when staff may enter."
      ]
    },
    "visiting-home": {
      culturalNotes: [
        "Being a good guest is usually more about matching the host's pace than performing formal etiquette.",
        "Hosts may say 'it's fine' out of kindness, so a little restraint often feels more natural than taking every offer literally."
      ],
      situationCards: [
        {
          title: "You are told to relax and make yourself at home",
          body: "That usually means you should stop being stiff, not that you should treat the home like a hotel or close friend's apartment. It is still better to move lightly and wait for cues."
        },
        {
          title: "You are unsure whether to help",
          body: "Doing too much can feel intrusive, but doing nothing at all can feel distant. A small offer once or twice is usually enough; after that, follow the host's answer."
        }
      ],
      phraseCards: [
        {
          phrase: "何かお手伝いしましょうか？",
          pronunciation: "Nanika otetsudai shimashou ka?",
          explanation: "A gentle offer to help without sounding pushy.",
          useWhen: "Good when food is being set out, cleared away, or your host looks busy."
        },
        {
          phrase: "どこに置けばいいですか？",
          pronunciation: "Doko ni okeba ii desu ka?",
          explanation: "A polite way to ask where something should go.",
          useWhen: "Helpful for coats, bags, gifts, or shoes when the setup is not obvious."
        }
      ],
      checklist: [
        "Watch the entrance carefully before stepping in or changing slippers.",
        "Keep gifts small, easy to receive, and simple to hand over.",
        "Avoid wandering into other rooms until your host clearly guides you."
      ]
    },
    "residential-private": {
      culturalNotes: [
        "Apartment rules are often about neighbors hearing or seeing things that a short-term guest barely notices.",
        "Trash timing in Japan can be precise, so 'close enough' can still create real trouble for hosts or residents."
      ],
      situationCards: [
        {
          title: "Late-night arrival feels harmless",
          body: "Rolling a suitcase, talking outside the building, or checking your phone with speaker audio can be much more noticeable in a quiet residential lane than it feels to you."
        },
        {
          title: "The building layout is confusing",
          body: "Residents may have separate doors, mail areas, storage spaces, and parking lanes. Entering the wrong area can feel more intrusive in a home building than in a hotel."
        }
      ],
      phraseCards: [
        {
          phrase: "ごみはどこに出せばいいですか？",
          pronunciation: "Gomi wa doko ni daseba ii desu ka?",
          explanation: "A direct, polite way to ask about trash disposal.",
          useWhen: "Useful in private stays where trash rules are stricter than in hotels."
        },
        {
          phrase: "この入口で合っていますか？",
          pronunciation: "Kono iriguchi de atteimasu ka?",
          explanation: "A careful way to check whether you are using the right entrance.",
          useWhen: "Helpful in apartment buildings with resident-only doors or similar-looking access points."
        }
      ],
      checklist: [
        "Never block or prop open a building door while moving luggage.",
        "Keep wheels, voices, and phone audio especially low at night.",
        "Follow trash, laundry, and shared-space rules exactly, not approximately."
      ]
    },
    "hostel-dorm": {
      culturalNotes: [
        "Hostel dorms in Japan often feel quieter than backpacker hostels in some other countries.",
        "Common areas usually hold the social energy, while the dorm itself is treated more like a shared bedroom."
      ],
      situationCards: [
        {
          title: "You arrive late and only need two minutes",
          body: "Those two minutes often become ten once bags, chargers, and toiletries come out. In a dorm, preparing first and entering quietly matters more than intention."
        },
        {
          title: "The room feels social, so conversation starts at the bedside",
          body: "A quick greeting is fine, but once a real conversation starts, moving it to the lounge is usually the more considerate choice."
        }
      ],
      phraseCards: [
        {
          phrase: "ここで電話しても大丈夫ですか？",
          pronunciation: "Koko de denwa shitemo daijoubu desu ka?",
          explanation: "A useful way to check whether a space is okay for calls.",
          useWhen: "Good when you are unsure whether a lounge or corridor is quiet enough for speaking."
        },
        {
          phrase: "ライトをつけてもいいですか？",
          pronunciation: "Raito o tsukete mo ii desu ka?",
          explanation: "A soft way to ask before turning on a light.",
          useWhen: "Helpful when arriving late, packing early, or sharing a small room."
        }
      ],
      checklist: [
        "Prepare toiletries, clothes, and chargers before moving into sleep mode.",
        "Use headphones, small lights, and the quietest zip or bag routine you can.",
        "Move eating, calls, and full repacking to the common area when possible."
      ]
    },
    "all-you-can-drink": {
      culturalNotes: [
        "All-you-can-drink plans may feel casual, but they still run on shared timing and a group pace.",
        "The awkward moments are usually about over-ordering, missing the last order, or moving out of sync with the table rather than about drinking itself."
      ],
      situationCards: [
        {
          title: "You want one more drink just before time runs out",
          body: "If the group has already slowed down, pushing one last extra round can feel like it drags the table rhythm out for your sake alone."
        },
        {
          title: "Everyone orders separately at different times",
          body: "That can confuse the flow and make the table feel disorganized. In many places, ordering in a more shared rhythm feels smoother."
        }
      ],
      phraseCards: [
        {
          phrase: "ラストオーダーは何時ですか？",
          pronunciation: "Rasuto oodaa wa nanji desu ka?",
          explanation: "A direct way to confirm the last order timing.",
          useWhen: "Helpful when you want to pace the table without rushing later."
        },
        {
          phrase: "次は一緒に頼みますか？",
          pronunciation: "Tsugi wa issho ni tanomimasu ka?",
          explanation: "A soft way to check whether the table wants to order together.",
          useWhen: "Useful when drinks are low and you do not want to create uneven flow."
        }
      ],
      checklist: [
        "Check the time limit and last order early, not at the final minute.",
        "Keep pace with the table instead of creating constant mini-orders.",
        "If you stop drinking earlier, let the group rhythm stay easy."
      ]
    },
    karaoke: {
      culturalNotes: [
        "Karaoke in Japan often feels more like shared turn-taking than a performance contest.",
        "Being fun to share a room with usually matters more than singing well."
      ],
      situationCards: [
        {
          title: "You know the room well, so you keep choosing songs quickly",
          body: "Even if no one complains, taking the room rhythm too strongly can make quieter people disappear from the flow."
        },
        {
          title: "You want to make the room lively right away",
          body: "Starting with a song everyone can enjoy together often works better than opening with your most personal or most intense choice."
        }
      ],
      phraseCards: [
        {
          phrase: "次どうぞ",
          pronunciation: "Tsugi douzo",
          explanation: "A natural way to pass the next turn to someone else.",
          useWhen: "Useful when you want to keep the room moving without taking too much space."
        },
        {
          phrase: "みんなで歌える曲にしますね",
          pronunciation: "Minna de utaeru kyoku ni shimasu ne",
          explanation: "A friendly way to signal that you are choosing something the room can enjoy together.",
          useWhen: "Helpful when you want to keep the mood inclusive."
        }
      ],
      checklist: [
        "Start with a song that suits the room instead of the longest or heaviest pick.",
        "Pass the next turn naturally and notice if someone has not sung yet.",
        "Use controls, tambourines, and food orders without turning the room into your personal stage."
      ]
    },
    "live-concert": {
      culturalNotes: [
        "Concert and theater etiquette often centers on protecting the shared concentration of the room.",
        "What feels strict is usually less about formality and more about preventing one person's light, movement, or voice from breaking the experience for many others."
      ],
      situationCards: [
        {
          title: "You arrive just after the performance starts",
          body: "Even if your seat is near, entering fast and squeezing through people under your own timing can feel much more disruptive than waiting for staff guidance."
        },
        {
          title: "You are unsure whether a quick photo is okay",
          body: "In venues where filming rules are strict, 'just one quick shot' often feels like breaking trust rather than bending a small rule."
        }
      ],
      phraseCards: [
        {
          phrase: "写真は大丈夫ですか？",
          pronunciation: "Shashin wa daijoubu desu ka?",
          explanation: "A quick, polite way to confirm whether photos are okay.",
          useWhen: "Helpful before the show, during intermission, or when rules feel unclear."
        },
        {
          phrase: "この席で合っていますか？",
          pronunciation: "Kono seki de atteimasu ka?",
          explanation: "A simple way to confirm that you are in the right seat or area.",
          useWhen: "Useful when the section layout is crowded or you arrive close to start time."
        }
      ],
      checklist: [
        "Check seat, timing, and filming rules before the performance begins.",
        "Silence your phone completely, including vibration in quiet venues.",
        "If you arrive late, move carefully and follow staff guidance instead of improvising."
      ]
    },
    "sports-event": {
      culturalNotes: [
        "Sports crowds can be loud, but each section often still has an internal rhythm about standing, cheering, and moving.",
        "The most respectful approach is usually to enjoy the energy while matching the people around you instead of forcing your own style onto the section."
      ],
      situationCards: [
        {
          title: "You are excited and want to stand often",
          body: "In some blocks that feels natural, but in others it breaks sightlines quickly. Looking around first usually tells you what the section expects."
        },
        {
          title: "Food, drinks, and cheering goods pile up",
          body: "The mood may be casual, but steps, knees, and under-seat space are still shared. Once your things spread out, the block feels tighter for everyone."
        }
      ],
      phraseCards: [
        {
          phrase: "ここは立って応援する感じですか？",
          pronunciation: "Koko wa tatte ouen suru kanji desu ka?",
          explanation: "A natural way to ask whether this section tends to stand and cheer.",
          useWhen: "Helpful when the atmosphere feels more organized than you expected."
        },
        {
          phrase: "この席で合っていますか？",
          pronunciation: "Kono seki de atteimasu ka?",
          explanation: "A calm way to confirm your seat before settling in.",
          useWhen: "Useful when blocks and rows feel similar and you do not want to interrupt people twice."
        }
      ],
      checklist: [
        "Notice early whether your section is seated, standing, quiet, or highly active.",
        "Keep food, bags, and cheering goods inside your own seat space.",
        "When play restarts, return your focus and body position quickly."
      ]
    },
    "theme-park": {
      culturalNotes: [
        "Theme parks in Japan often feel playful on the surface but highly structured underneath.",
        "The friction usually comes from how people use lines, waiting space, and show-viewing areas rather than from the rides themselves."
      ],
      situationCards: [
        {
          title: "Your group stops in the middle to decide the next move",
          body: "That can happen naturally, but in a busy park it quickly turns your group into a moving obstacle. Even a few steps to the side changes the whole feeling."
        },
        {
          title: "You think you are holding space for friends",
          body: "At parades, shows, and queues, claiming more space than the people actually present often feels unfair faster than travelers expect."
        }
      ],
      phraseCards: [
        {
          phrase: "ここで待てばいいですか？",
          pronunciation: "Koko de mateba ii desu ka?",
          explanation: "A useful way to confirm whether you are waiting in the right place.",
          useWhen: "Helpful when systems split into standby, timed entry, or return windows."
        },
        {
          phrase: "今ここで止まっても大丈夫ですか？",
          pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
          explanation: "A soft way to check whether stopping here is okay.",
          useWhen: "Useful before checking maps, fixing bags, or gathering your group in a busy walkway."
        }
      ],
      checklist: [
        "Confirm whether this is the actual queue or just the entry to it.",
        "Do not spread the group across the walkway while deciding the next move.",
        "Treat parade, show, and photo spots as shared viewing space."
      ]
    },
    "rental-car": {
      culturalNotes: [
        "Rental-car etiquette in Japan is less about style and more about avoiding avoidable friction: parking, narrow roads, fuel rules, and return timing.",
        "The stressful part is often not the driving itself, but all the small assumptions around pickup, tolls, and where the car may be left."
      ],
      situationCards: [
        {
          title: "A short stop looks harmless",
          body: "In many places, 'just a minute' parking can still block a narrow street, store access, or local traffic. Roads that feel quiet may still be tightly managed."
        },
        {
          title: "Return time feels flexible",
          body: "Rental returns often work on a tighter handover rhythm than travelers expect. Being a little late can affect staff, cleaning, and the next booking."
        }
      ],
      phraseCards: [
        {
          phrase: "この近くに駐車しても大丈夫ですか？",
          pronunciation: "Kono chikaku ni chuusha shitemo daijoubu desu ka?",
          explanation: "A careful way to ask whether parking nearby is acceptable.",
          useWhen: "Useful when signs are unclear or the space feels ambiguous."
        },
        {
          phrase: "返却前に給油が必要ですか？",
          pronunciation: "Henkyaku mae ni kyuuyu ga hitsuyou desu ka?",
          explanation: "A direct way to confirm the refueling rule before return.",
          useWhen: "Helpful before the last day, especially if the pickup explanation was rushed."
        }
      ],
      checklist: [
        "Confirm license validity, toll method, fuel rule, and return time before leaving the lot.",
        "Treat parking as something to verify clearly, not something to improvise.",
        "Leave extra time for refueling, navigation, and the final handover."
      ]
    }
  },
  ja: {
    onsen: {
      culturalNotes: [
        "温泉のマナーは、儀式を完璧にこなすことより、共有の湯船の清潔さと落ち着きを守ることに近いです。",
        "慣れているように見せることより、しっかり洗って、静かに動くことの方がずっと大切に見られます。"
      ],
      situationCards: [
        {
          title: "周りが慣れていて、急いで合わせたくなる",
          body: "見よう見まねで急ぐより、いったん表示を見たり、流れを一度観察したりする方が自然です。温泉は速さより落ち着きの方が合います。"
        },
        {
          title: "洗い場に自分の物が広がっていく",
          body: "湯船が広くても、洗い場は個人の小さな共有スペースです。そこが散らかると、旅行者が思う以上に目立ちます。"
        }
      ],
      phraseCards: [
        {
          phrase: "タオルはどこに置けばいいですか？",
          pronunciation: "Taoru wa doko ni okeba ii desu ka?",
          explanation: "タオルの置き方や置き場所を、短く確認できます。",
          useWhen: "浴場のつくりに少し迷ったとき、自己判断で動きたくない場面に便利です。"
        },
        {
          phrase: "こちらのお風呂を使って大丈夫ですか？",
          pronunciation: "Kochira no ofuro o tsukatte daijoubu desu ka?",
          explanation: "このお風呂を使ってよいかを、ていねいに確認できます。",
          useWhen: "複数の湯船や貸切風呂、制限がありそうな表示があるときに使いやすいです。"
        }
      ],
      checklist: [
        "タトゥー、撮影、利用時間のルールを先に確認する。",
        "入る前にしっかり洗い、タオルは湯船に入れない。",
        "洗い場は次の人がそのまま座れるくらいに整えて出る。"
      ]
    },
    shrine: {
      culturalNotes: [
        "神社のマナーは、細かい型そのものより、空気、境界、参拝の流れを壊さないことにあります。",
        "作法を完璧にこなす必要はなく、急がず、参拝する人の動線をじゃましないことの方が大切です。"
      ],
      situationCards: [
        {
          title: "本殿の前で良い写真を撮りたくなる",
          body: "いちばんきれいな場所は、参拝の中心でもあることが多いです。すぐに場所を取るより、少し待って道を空ける方が、その場には自然です。"
        },
        {
          title: "作法をすぐ真似したくなる",
          body: "急いで合わせるより、一度か二度見てから動く方が、結果として落ち着いて見えます。分からないなら観察するのも十分に自然です。"
        }
      ],
      phraseCards: [
        {
          phrase: "写真はここで大丈夫ですか？",
          pronunciation: "Shashin wa koko de daijoubu desu ka?",
          explanation: "その場所で写真を撮ってよいかを、自然に確認できます。",
          useWhen: "参拝エリア、鳥居まわり、手水舎、静かな境内で迷ったときに便利です。"
        },
        {
          phrase: "こちらでお参りしてもいいですか？",
          pronunciation: "Kochira de omairi shitemo ii desu ka?",
          explanation: "ここで参拝してよいかを、やわらかく確認する言い方です。",
          useWhen: "建物が複数あるときや、どこが中心の参拝場所か分かりにくいときに使いやすいです。"
        }
      ],
      checklist: [
        "カメラを向ける前に撮影ルールを見る。",
        "参道、手水舎、賽銭箱の前では特に動きをゆるめる。",
        "迷ったら、まず見て、参拝の流れをふさがない。"
      ]
    },
    temple: {
      culturalNotes: [
        "お寺のマナーは、神社よりも屋内や祈りの空気に近く、静けさや距離感がより大きく見られることがあります。",
        "作法を知っているように振る舞うことより、場の空気を読んで静かに動くことの方が自然です。"
      ],
      situationCards: [
        {
          title: "開いて見えるお堂にそのまま入る",
          body: "入口が開いていても、靴、撮影、立ち入り範囲にルールがあることがあります。開いていることと、自由に入ってよいことは同じではありません。"
        },
        {
          title: "仏像や位牌の前でゆっくり見たくなる",
          body: "観光の対象でもありますが、同時に誰かにとっては祈りや供養の場です。中央を長く占めるより、少し距離を取る方がその場には合います。"
        }
      ],
      phraseCards: [
        {
          phrase: "ここは入っても大丈夫ですか？",
          pronunciation: "Koko wa haitte mo daijoubu desu ka?",
          explanation: "この場所に入ってよいかを、落ち着いて確認できます。",
          useWhen: "お堂の中、脇の建物、ロープや段差がある場所で便利です。"
        },
        {
          phrase: "靴はここで脱ぎますか？",
          pronunciation: "Kutsu wa koko de nugimasu ka?",
          explanation: "靴を脱ぐ位置を、短く確認できます。",
          useWhen: "入口の流れが控えめで、踏み込みすぎたくないときに使いやすいです。"
        }
      ],
      checklist: [
        "敷居をまたぐ前に、靴・撮影・立ち入りのルールを確認する。",
        "屋内では特に声を小さくする。",
        "祈っている人がいるときは、その人の前の空間を優先する。"
      ]
    },
    bicycle: {
      culturalNotes: [
        "自転車のマナーは、車道をどう走るかよりも、歩行者、駅前、駐輪場所に余計な摩擦を作らないことにあります。",
        "問題になりやすいのは走っている最中より、どこに停めるか、どこをそのまま進むかという小さな判断です。"
      ],
      situationCards: [
        {
          title: "駅前の静かな端なら停めてよさそうに見える",
          body: "人が少なくても、そこが放置自転車の対象エリアであることは珍しくありません。静かに見えることと、停めてよいことは別です。"
        },
        {
          title: "観光地の細い道をそのまま乗って通りたくなる",
          body: "ゆっくりでも、歩行者が多い場所では自転車があるだけで圧になります。少しだけ降りて押す方が、ずっと自然に見える場面があります。"
        }
      ],
      phraseCards: [
        {
          phrase: "自転車はどこに停めればいいですか？",
          pronunciation: "Jitensha wa doko ni tomereba ii desu ka?",
          explanation: "駐輪してよい場所を、はっきり確認できます。",
          useWhen: "駅前、商店街、公園、観光地で停める前に便利です。"
        },
        {
          phrase: "この道は自転車で通れますか？",
          pronunciation: "Kono michi wa jitensha de tooremasu ka?",
          explanation: "この道を自転車で進んでよいかを、やわらかく聞けます。",
          useWhen: "道が歩行者中心に見えて、そのまま乗るか迷うときに使いやすいです。"
        }
      ],
      checklist: [
        "停めたあとではなく、停める前に駐輪場所を確認する。",
        "人が増えそうな場所では早めに速度を落とす。",
        "共有感が強い道では、降りて押す判断を選べるようにする。"
      ]
    },
    ryokan: {
      culturalNotes: [
        "旅館は、お願いしてから動くというより、先回りして案内してくれる宿です。最初の説明に一通り入っているのは、その日の流れが全体で決まっていることが多いからです。",
        "和室は、くつろぐ場、食事の場、寝る場へと役割が切り替わります。部屋を整えておくこと自体が、宿の流れを助ける配慮になります。"
      ],
      situationCards: [
        {
          title: "到着後すぐ外へ出たくなる",
          body: "夕食やお風呂の時間、部屋の使い方などを聞き流したまま出てしまうと、あとで小さなズレが重なりやすいです。最初に一度だけ落ち着いて確認するとかなり違います。"
        },
        {
          title: "落ち着いている途中にスタッフが入ることがある",
          body: "旅館では、布団、食事、部屋の整え直しでスタッフが複数回入ることがあります。荷物を大きく広げたままだと、ホテル以上に気まずくなりやすいです。"
        }
      ],
      phraseCards: [
        {
          phrase: "夕食は何時ですか？",
          pronunciation: "Yuushoku wa nanji desu ka?",
          explanation: "夕食の時間を、短くていねいに確認できる言い方です。",
          useWhen: "説明が早く感じたときや、到着後にもう一度確認したいときに便利です。"
        },
        {
          phrase: "こちらで待てばいいですか？",
          pronunciation: "Kochira de mateba ii desu ka?",
          explanation: "どこで待てばよいか分からないときに、やわらかく聞ける一言です。",
          useWhen: "チェックイン中、食事の準備中、案内を待つ場面で使いやすいです。"
        }
      ],
      checklist: [
        "食事、入浴、チェックアウトの時間を、落ち着く前に確認する。",
        "スリッパは場所ごとに使い分け、特にトイレ用と畳まわりを混同しない。",
        "ぬれた物、開いた荷物、充電ケーブルを広げすぎず、スタッフが入りやすい状態にしておく。"
      ]
    },
    "visiting-home": {
      culturalNotes: [
        "家に招かれたときは、完璧な作法よりも、相手のペースに合わせることの方が大切です。",
        "ホストが『大丈夫ですよ』と言ってくれる場面でも、少し遠慮を置くほうが、かえって自然で心地よく見えることがあります。"
      ],
      situationCards: [
        {
          title: "『くつろいでください』と言われる",
          body: "それは緊張しすぎなくていいという意味であって、ホテルの部屋のように自由に振る舞ってよいという意味ではないことが多いです。少し軽く構えるくらいがちょうど自然です。"
        },
        {
          title: "手伝うべきか迷う",
          body: "やりすぎると相手の段取りに入りすぎますが、何もしないと距離があるようにも見えます。まず一度か二度、やわらかく申し出れば十分なことが多いです。"
        }
      ],
      phraseCards: [
        {
          phrase: "何かお手伝いしましょうか？",
          pronunciation: "Nanika otetsudai shimashou ka?",
          explanation: "押しつけがましくなく、手伝えることがあれば申し出る言い方です。",
          useWhen: "食事の準備や片付けの前後、相手が動いているときに使いやすいです。"
        },
        {
          phrase: "どこに置けばいいですか？",
          pronunciation: "Doko ni okeba ii desu ka?",
          explanation: "荷物や上着、手土産の置き場を自然に確認できます。",
          useWhen: "玄関やリビングで、どこまで入ってよいか迷うときに便利です。"
        }
      ],
      checklist: [
        "玄関の段差、スリッパ、畳の扱いを最初によく見る。",
        "手土産は大げさすぎず、受け取りやすいものにする。",
        "案内される前に別の部屋へ入らないようにする。"
      ]
    },
    "residential-private": {
      culturalNotes: [
        "住宅やアパートのルールは、旅行者には気づきにくい音や視線の問題を防ぐために細かくなっていることがあります。",
        "ごみ出しは『だいたい合っている』では足りないことがあり、少しのずれでもホストや住人の負担になりやすいです。"
      ],
      situationCards: [
        {
          title: "夜の到着は少し気をつけるだけで十分だと思う",
          body: "キャスター音、建物前での会話、スマホの音などは、住宅地では思ったより響きます。自分では短時間でも、住んでいる人には強く残ることがあります。"
        },
        {
          title: "建物のつくりが分かりにくい",
          body: "住民用の入口、ポスト、ゴミ置き場、駐輪場などが近くに並んでいることがあります。ホテル感覚で歩き回ると、私的な空間に入ってしまいやすいです。"
        }
      ],
      phraseCards: [
        {
          phrase: "ごみはどこに出せばいいですか？",
          pronunciation: "Gomi wa doko ni daseba ii desu ka?",
          explanation: "ごみ置き場や出し方を、短くはっきり確認できます。",
          useWhen: "民泊やアパート滞在で、ホテルと違うルールがありそうなときに役立ちます。"
        },
        {
          phrase: "この入口で合っていますか？",
          pronunciation: "Kono iriguchi de atteimasu ka?",
          explanation: "建物の入口や使ってよい動線を、ていねいに確認する言い方です。",
          useWhen: "住民用入口や似た扉が並んでいて迷うときに使いやすいです。"
        }
      ],
      checklist: [
        "荷物の出し入れ中でも、建物の扉を開け放しにしない。",
        "夜はキャスター音、話し声、動画や通話の音を特に抑える。",
        "ごみ、洗濯、共用部のルールは自己判断せず、その通りに守る。"
      ]
    },
    "hostel-dorm": {
      culturalNotes: [
        "日本のドミトリーは、海外のバックパッカーホステルより静かな空気を大切にしていることがよくあります。",
        "交流の雰囲気はラウンジ側にあり、寝室そのものは『共有の寝室』として扱うほうが自然です。"
      ],
      situationCards: [
        {
          title: "夜遅くに着いて、2分で済むと思う",
          body: "荷物を開ける、充電する、洗面道具を出す、を始めると意外と長くなります。意図よりも、入る前の準備のほうが大事になりやすい場面です。"
        },
        {
          title: "ベッド横で会話が始まる",
          body: "軽い挨拶なら自然ですが、会話として続き始めたらラウンジへ移したほうが、部屋全体にはずっとやさしいです。"
        }
      ],
      phraseCards: [
        {
          phrase: "ここで電話しても大丈夫ですか？",
          pronunciation: "Koko de denwa shitemo daijoubu desu ka?",
          explanation: "この場所で通話してよいかを、やわらかく確認できます。",
          useWhen: "ラウンジ、廊下、寝室の近くで、どこまで音を出してよいか迷うときに便利です。"
        },
        {
          phrase: "ライトをつけてもいいですか？",
          pronunciation: "Raito o tsukete mo ii desu ka?",
          explanation: "照明をつける前に一言添えることで、気まずさを減らせます。",
          useWhen: "夜遅くの到着、朝の支度、共有部屋での荷造り前に使いやすいです。"
        }
      ],
      checklist: [
        "洗面道具や着替えは、寝る前に手元へまとめておく。",
        "ヘッドホン、小さめの灯り、できるだけ静かな荷物の開け閉めを意識する。",
        "食事、通話、しっかりした荷造りは、できるだけ共用部へ移す。"
      ]
    },
    "all-you-can-drink": {
      culturalNotes: [
        "飲み放題は気軽に見えても、実際には時間制とテーブル全体の流れの中で動いています。",
        "気まずくなりやすいのは、お酒を飲むこと自体よりも、注文のばらつきやラストオーダーの見落とし、周りとの温度差です。"
      ],
      situationCards: [
        {
          title: "終わり際にもう一杯いきたくなる",
          body: "テーブル全体が落ち着いているところで自分だけ最後の一杯を強く回すと、場の流れを自分の都合で引っぱる感じになりやすいです。"
        },
        {
          title: "みんなが別々のタイミングで注文する",
          body: "一人ひとりが細かく動くと、注文の流れが散ってテーブルが落ち着かなくなります。飲み放題では、少しまとめるほうが自然なことが多いです。"
        }
      ],
      phraseCards: [
        {
          phrase: "ラストオーダーは何時ですか？",
          pronunciation: "Rasuto oodaa wa nanji desu ka?",
          explanation: "ラストオーダーの時間を、短くはっきり確認できる言い方です。",
          useWhen: "席について落ち着いたあと、後半に慌てないよう先に確認しておきたいときに便利です。"
        },
        {
          phrase: "次は一緒に頼みますか？",
          pronunciation: "Tsugi wa issho ni tanomimasu ka?",
          explanation: "次の注文をテーブルでそろえるか、やわらかく確認できます。",
          useWhen: "飲み物が減ってきたときに、自分だけ先に動かず、場の流れを合わせたいときに使いやすいです。"
        }
      ],
      checklist: [
        "制限時間とラストオーダーを、終盤ではなく早めに確認する。",
        "数分おきに個別注文を重ねるより、テーブル全体の流れに合わせる。",
        "自分はもう飲まなくても、そのことを重くせず場の空気を止めない。"
      ]
    },
    karaoke: {
      culturalNotes: [
        "日本のカラオケは、歌のうまさを競う場というより、順番を回しながら部屋全体で楽しむ空気に近いことが多いです。",
        "うまく歌うことよりも、一緒にいて気楽な人でいることのほうが、場の印象を大きく左右します。"
      ],
      situationCards: [
        {
          title: "選曲が早いので、どんどん自分で入れてしまう",
          body: "誰も何も言わなくても、流れを一人で握る形になると、静かな人が入りにくくなります。上手い下手より、この偏りの方が空気に残りやすいです。"
        },
        {
          title: "最初から一気に盛り上げたい",
          body: "自分の一番好きな重い曲や長い曲より、みんなが入りやすい一曲から始める方が、部屋全体では成功しやすいです。"
        }
      ],
      phraseCards: [
        {
          phrase: "次どうぞ",
          pronunciation: "Tsugi douzo",
          explanation: "次の人へ自然に順番を渡せる、とても使いやすい一言です。",
          useWhen: "自分ばかり続けず、部屋の流れを軽く回したいときに便利です。"
        },
        {
          phrase: "みんなで歌える曲にしますね",
          pronunciation: "Minna de utaeru kyoku ni shimasu ne",
          explanation: "みんなが入りやすい曲を選ぶことを、やわらかく伝えられます。",
          useWhen: "空気を和らげたいときや、初対面が多い場で緊張を下げたいときに使いやすいです。"
        }
      ],
      checklist: [
        "最初の一曲は、長すぎたり重すぎたりしない、部屋になじみやすいものにする。",
        "まだ歌っていない人がいないかを見て、自然に順番を回す。",
        "リモコン、タンバリン、注文なども含めて、自分だけのステージにしない。"
      ]
    },
    "live-concert": {
      culturalNotes: [
        "ライブや劇場では、その場にいる全員の集中を守ることが、いちばん大きなマナーになりやすいです。",
        "厳しめに感じるルールも、形式のためというより、一人の光や音や動きで多くの人の体験が切れてしまうのを防ぐためと考えると分かりやすいです。"
      ],
      situationCards: [
        {
          title: "開演後に少し遅れて入る",
          body: "自分では席が近いと思っていても、自己判断で急いで入ると、人を立たせたり視界を切ったりしやすいです。こういう場面ではスタッフの案内に乗る方が自然です。"
        },
        {
          title: "『一枚だけなら』と写真を撮りたくなる",
          body: "撮影ルールが厳しい会場では、『少しくらい』が信頼を壊す行動に見えやすいです。写真の一枚そのものより、その判断の軽さが目立ちます。"
        }
      ],
      phraseCards: [
        {
          phrase: "写真は大丈夫ですか？",
          pronunciation: "Shashin wa daijoubu desu ka?",
          explanation: "写真を撮ってよいかを、短く自然に確認できる言い方です。",
          useWhen: "開演前や休憩中、会場ルールが少し分かりにくいときに便利です。"
        },
        {
          phrase: "この席で合っていますか？",
          pronunciation: "Kono seki de atteimasu ka?",
          explanation: "自分の席やエリアが合っているかを、落ち着いて確認できます。",
          useWhen: "席が詰まっていて入りにくいときや、開演直前で急ぎたくないときに使いやすいです。"
        }
      ],
      checklist: [
        "開演前に、席・時間・撮影ルールを確認しておく。",
        "静かな会場ではバイブも含めてスマホを完全に止める。",
        "遅れて入るときは自己判断で急がず、スタッフの案内に従う。"
      ]
    },
    "sports-event": {
      culturalNotes: [
        "スポーツ観戦はにぎやかでも、席のブロックごとに立つタイミングや応援の熱量にリズムがあることが多いです。",
        "自分の楽しみ方を押し出すより、周りの人の応援のしかたに自然に合わせるほうが、その場では気持ちよく見えます。"
      ],
      situationCards: [
        {
          title: "盛り上がって何度も立ちたくなる",
          body: "そのブロックでは自然でも、別のブロックでは視界をふさぎやすいです。少し見回すだけで、その席の空気はかなり読みやすくなります。"
        },
        {
          title: "飲み物や応援グッズが足元に増えていく",
          body: "カジュアルに見えても、足元、ひざまわり、通路は共有です。荷物が少し広がるだけで、隣の人には急に窮屈になります。"
        }
      ],
      phraseCards: [
        {
          phrase: "ここは立って応援する感じですか？",
          pronunciation: "Koko wa tatte ouen suru kanji desu ka?",
          explanation: "このエリアの応援の雰囲気を、やわらかく確認できます。",
          useWhen: "思ったよりルールや一体感がありそうだと感じたときに便利です。"
        },
        {
          phrase: "この席で合っていますか？",
          pronunciation: "Kono seki de atteimasu ka?",
          explanation: "自分の席を、着席前に落ち着いて確認する言い方です。",
          useWhen: "列や番号が似ていて、何度も人を立たせたくないときに使いやすいです。"
        }
      ],
      checklist: [
        "自分のブロックが座って見る雰囲気か、立って盛り上がる雰囲気かを早めに見る。",
        "荷物、飲み物、応援グッズは自分の席の範囲に収める。",
        "プレーが始まる場面では、体の向きや立ち位置をすぐ整えて人の視界をふさがない。"
      ]
    },
    "theme-park": {
      culturalNotes: [
        "テーマパークは楽しい空気が前面にありますが、実際には列、待機場所、鑑賞エリアがかなり細かく設計されています。",
        "気まずくなりやすいのはアトラクションそのものより、待つ場所、立ち止まる場所、場所取りのしかたです。"
      ],
      situationCards: [
        {
          title: "次を決めるために通路の真ん中で止まる",
          body: "本人たちには自然でも、混んでいる園内では一瞬で『動く障害物』になります。数歩だけ横へ寄るだけで、空気はかなり変わります。"
        },
        {
          title: "仲間のぶんまで場所を取っておく",
          body: "パレードやショー、列では、実際にその場にいる人数以上のスペースを確保すると、不公平さがすぐに目立ちます。"
        }
      ],
      phraseCards: [
        {
          phrase: "ここで待てばいいですか？",
          pronunciation: "Koko de mateba ii desu ka?",
          explanation: "今いる場所が正しい待機位置かどうかを確認できます。",
          useWhen: "通常列、時間指定、再集合などで導線が分かれていて迷うときに便利です。"
        },
        {
          phrase: "今ここで止まっても大丈夫ですか？",
          pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
          explanation: "その場で立ち止まってよいかを、やわらかく聞けます。",
          useWhen: "地図を見る、荷物を直す、グループをまとめる前に確認したいときに使いやすいです。"
        }
      ],
      checklist: [
        "今いる場所が『列そのもの』なのか、『列の入口』なのかをまず確認する。",
        "次を決めるあいだ、グループで通路いっぱいに広がらない。",
        "パレードやショーの場所は、自分たちの専有スペースではなく共有の観覧エリアとして扱う。"
      ]
    },
    "rental-car": {
      culturalNotes: [
        "レンタカーのマナーは、見た目の礼儀よりも、駐車、細い道、給油、返却時刻などの小さな思い込みを減らすことにあります。",
        "難しくなりやすいのは運転そのものより、受け取り後の判断や『少しだけなら大丈夫』という感覚のほうです。"
      ],
      situationCards: [
        {
          title: "短時間ならここに停めてよさそうに見える",
          body: "少しの駐車でも、細い道や店舗前では十分に邪魔になります。静かな道でも、生活動線として厳しく見られることがあります。"
        },
        {
          title: "返却時間は少し遅れても大丈夫そうに感じる",
          body: "返却は清掃や次の予約とつながっていることが多く、数分の遅れでもスタッフ側の流れには響きやすいです。"
        }
      ],
      phraseCards: [
        {
          phrase: "この近くに駐車しても大丈夫ですか？",
          pronunciation: "Kono chikaku ni chuusha shitemo daijoubu desu ka?",
          explanation: "近くに停めてよいかを、慎重に確認する言い方です。",
          useWhen: "標識が分かりにくいときや、停めてよいか微妙な場所で役立ちます。"
        },
        {
          phrase: "返却前に給油が必要ですか？",
          pronunciation: "Henkyaku mae ni kyuuyu ga hitsuyou desu ka?",
          explanation: "返却前の給油ルールを、短く確認できます。",
          useWhen: "出発前や最終日の前に、説明をもう一度はっきりさせたいときに便利です。"
        }
      ],
      checklist: [
        "免許条件、ETC、給油ルール、返却時間を出発前に確認する。",
        "駐車は自己判断で済ませず、はっきり確認できる場所を使う。",
        "給油、移動、返却手続きまで見込んで、最後は余裕を持って動く。"
      ]
    }
  }
};

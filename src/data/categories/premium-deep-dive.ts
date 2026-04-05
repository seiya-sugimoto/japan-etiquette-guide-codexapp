import type { CategoryId, PremiumDeepDive } from "@/types/category";
import type { AppLanguage } from "@/types/language";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

export const premiumDeepDiveByLanguage: Partial<Record<AppLanguage, PremiumDeepDiveMap>> = {
  en: {
    ryokan: {
      culturalNotes: [
        "Ryokan service often feels anticipatory rather than reactive. Staff may explain everything up front because the day runs on shared timing.",
        "A room can shift from lounge to dining to sleeping space, so keeping it orderly helps the inn reset the space smoothly."
      ],
      phraseCards: [
        {
          phrase: "夕食は何時ですか？",
          pronunciation: "Yuushoku wa nanji desu ka?",
          explanation: "A simple, polite way to confirm dinner time.",
          useWhen: "Useful if the meal explanation felt fast or you arrived a little tired."
        },
        {
          phrase: "こちらで待てばいいですか？",
          pronunciation: "Kochira de mateba ii desu ka?",
          explanation: "A calm way to ask whether you should stay where you are.",
          useWhen: "Helpful during check-in, room guidance, or before a meal is prepared."
        }
      ],
      checklist: [
        "Confirm meal, bath, and checkout timing before you fully settle in.",
        "Use the right slippers in the right places, especially near toilets and tatami.",
        "Keep wet towels, open luggage, and charging cables compact when staff may enter."
      ]
    },
    "visiting-home": {
      culturalNotes: [
        "Being a good guest is usually more about matching the host's pace than performing formal etiquette.",
        "Hosts may say \"it's fine\" out of kindness, so a little self-restraint often reads as thoughtful rather than distant."
      ],
      phraseCards: [
        {
          phrase: "何かお手伝いしましょうか？",
          pronunciation: "Nanika otetsudai shimashou ka?",
          explanation: "A gentle offer to help without sounding pushy.",
          useWhen: "Good when food is being set out, cleared away, or when your host looks busy."
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
        "Apartment rules are often about neighbors hearing or seeing things you may not notice as a short-term guest.",
        "Trash timing in Japan can be precise, so \"close enough\" can still create real trouble for hosts or residents."
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
        "All-you-can-drink plans usually feel relaxed, but they still run on shared timing and a group pace.",
        "The awkward moments are often not about drinking itself, but about leaving others behind, over-ordering, or missing the final call."
      ],
      phraseCards: [
        {
          phrase: "ラストオーダーは何時ですか？",
          pronunciation: "Rasuto oodaa wa nanji desu ka?",
          explanation: "A direct way to confirm the last order timing.",
          useWhen: "Helpful when the group is settling in and you want to pace drinks without rushing later."
        },
        {
          phrase: "次は一緒に頼みますか？",
          pronunciation: "Tsugi wa issho ni tanomimasu ka?",
          explanation: "A soft way to check whether the table wants to order together.",
          useWhen: "Useful when drinks are low and you do not want to create an uneven flow at the table."
        }
      ],
      checklist: [
        "Check the time limit and last order early, not when the staff are already making the rounds.",
        "Keep pace with the table instead of creating separate mini-orders every few minutes.",
        "If you stop drinking earlier, let the group rhythm stay easy instead of making it a big moment."
      ]
    },
    karaoke: {
      culturalNotes: [
        "Karaoke in Japan often feels more like shared turn-taking than a performance contest.",
        "Being fun to share a room with usually matters more than singing well."
      ],
      phraseCards: [
        {
          phrase: "次どうぞ",
          pronunciation: "Tsugi douzo",
          explanation: "A very natural way to pass the next turn to someone else.",
          useWhen: "Useful when you want to keep the room moving without taking too much space."
        },
        {
          phrase: "みんなで歌える曲にしますね",
          pronunciation: "Minna de utaeru kyoku ni shimasu ne",
          explanation: "A friendly way to signal that you are choosing something the room can enjoy together.",
          useWhen: "Helpful when you want to lower pressure and keep the mood inclusive."
        }
      ],
      checklist: [
        "Keep your first song easy for the room instead of using the longest or most intense pick right away.",
        "Pass the next turn naturally and notice if someone has not had a chance yet.",
        "Use the room controls, tambourines, and food orders without turning the whole room into your personal stage."
      ]
    },
    "live-concert": {
      culturalNotes: [
        "Concert and theater etiquette often centers on protecting the shared concentration of the room.",
        "What feels strict is usually less about formality and more about preventing one person's movement, light, or voice from breaking the experience for many others."
      ],
      phraseCards: [
        {
          phrase: "写真は大丈夫ですか？",
          pronunciation: "Shashin wa daijoubu desu ka?",
          explanation: "A quick, polite way to confirm whether photos are okay.",
          useWhen: "Helpful before the show, during intermission, or whenever the venue rules feel unclear."
        },
        {
          phrase: "この席で合っていますか？",
          pronunciation: "Kono seki de atteimasu ka?",
          explanation: "A simple way to confirm that you are in the right seat or area.",
          useWhen: "Useful when the section layout is crowded or you arrive close to the start time."
        }
      ],
      checklist: [
        "Check seat, timing, and filming rules before the performance begins.",
        "Silence your phone completely, including vibration if the room is very quiet.",
        "If you arrive late, move carefully and follow staff guidance instead of improvising."
      ]
    },
    "sports-event": {
      culturalNotes: [
        "Sports crowds can be loud, but each section often still has an internal rhythm about standing, cheering, and moving.",
        "The most respectful approach is usually to enjoy the energy while matching the people around you instead of forcing your own style onto the section."
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
        "When play restarts, return your focus and body position quickly so you do not block others."
      ]
    },
    "theme-park": {
      culturalNotes: [
        "Theme parks in Japan often feel playful on the surface but highly structured underneath.",
        "The friction usually comes from how people use lines, waiting space, and show-viewing areas rather than from the rides themselves."
      ],
      phraseCards: [
        {
          phrase: "ここで待てばいいですか？",
          pronunciation: "Koko de mateba ii desu ka?",
          explanation: "A useful way to confirm whether you are waiting in the right place.",
          useWhen: "Helpful when queue systems split into standby, timed entry, or return windows."
        },
        {
          phrase: "今ここで止まっても大丈夫ですか？",
          pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
          explanation: "A soft way to check whether stopping here is okay.",
          useWhen: "Useful before checking maps, fixing bags, or gathering your group in a busy walkway."
        }
      ],
      checklist: [
        "Confirm whether this is the actual queue or just the entry to the queue.",
        "Do not spread the group across the walkway while deciding the next move.",
        "Treat parade, show, and photo spots as shared viewing space, not claimed territory."
      ]
    }
  },
  ja: {
    ryokan: {
      culturalNotes: [
        "旅館は、お願いしてから動くというより、先回りして案内してくれる宿です。最初の説明に一通り入っているのは、その日の流れが全体で決まっていることが多いからです。",
        "和室は、くつろぐ場所、食事の場、寝る場へと役割が切り替わります。部屋を整えておくこと自体が、宿の流れを助ける配慮になります。"
      ],
      phraseCards: [
        {
          phrase: "夕食は何時ですか？",
          pronunciation: "Yuushoku wa nanji desu ka?",
          explanation: "夕食の時間をていねいに確認する、短くて使いやすい言い方です。",
          useWhen: "説明が早く感じたときや、到着後にもう一度確認したいときに役立ちます。"
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
        "気まずくなりやすいのは、お酒を飲むこと自体よりも、注文のばらつきやラストオーダーの見落とし、周りとの温度差です."
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
    }
  }
};

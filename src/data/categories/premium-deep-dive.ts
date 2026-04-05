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
    }
  }
};

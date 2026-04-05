import type { CategoryId, PremiumDeepDive } from "@/types/category";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

export const simplifiedChinesePremiumDeepDive: PremiumDeepDiveMap = {
  onsen: {
    culturalNotes: [
      "日本温泉礼仪与其说是背流程，不如说是在保护共用浴场的安静和整洁。",
      "比起看起来很熟练，先洗干净、动作放慢一点，往往更能让人感觉到你在顾及周围。"
    ],
    situationCards: [
      {
        title: "看到别人都很熟悉流程，自己开始着急",
        body: "太快去模仿周围的人，往往比先慢下来看看标示更容易出尴尬。温泉空间通常重视的是从容，不是速度。"
      },
      {
        title: "盥洗位附近开始堆满自己的东西",
        body: "就算浴场本身看起来很宽敞，盥洗位依然是共享的个人空间。小小的杂乱，往往比旅客想象中更明显。"
      }
    ],
    phraseCards: [
      {
        phrase: "タオルはどこに置けばいいですか？",
        pronunciation: "Taoru wa doko ni okeba ii desu ka?",
        explanation: "用来简单确认毛巾应该放在哪里。",
        useWhen: "当你对空间配置不熟，又不想自己乱猜时很实用。"
      },
      {
        phrase: "こちらのお風呂を使って大丈夫ですか？",
        pronunciation: "Kochira no ofuro o tsukatte daijoubu desu ka?",
        explanation: "礼貌确认这个浴池是否可以使用。",
        useWhen: "有多个浴池、私人区域或贴有使用限制时很有帮助。"
      }
    ],
    checklist: [
      "先确认纹身、拍照和使用时间规则。",
      "进浴池前先彻底冲洗，毛巾不要泡进水里。",
      "离开盥洗位时整理到下一位可以立刻坐下的程度。"
    ]
  },
  shrine: {
    culturalNotes: [
      "神社礼仪之所以让人觉得微妙，往往是因为那里同时存在观光、参拜、边界感与氛围。",
      "通常不需要把每个动作做得完美。更重要的是别着急，也不要把参拜空间变成自己的拍摄现场。"
    ],
    situationCards: [
      {
        title: "想在本殿附近拍一张好照片",
        body: "最好看的角度往往也是参拜最活跃的位置。稍微等一下、把通道留出来，通常比先占住那个点更自然。"
      },
      {
        title: "不确定要不要照着仪式做",
        body: "先看一两个人怎么做，通常是更有礼貌的选择。太快模仿，有时反而比先停一下更显得草率。"
      }
    ],
    phraseCards: [
      {
        phrase: "写真はここで大丈夫ですか？",
        pronunciation: "Shashin wa koko de daijoubu desu ka?",
        explanation: "自然地确认这个位置能不能拍照。",
        useWhen: "在参拜处、鸟居、手水舍或较安静的角落附近特别实用。"
      },
      {
        phrase: "こちらでお参りしてもいいですか？",
        pronunciation: "Kochira de omairi shitemo ii desu ka?",
        explanation: "温和地确认是否可以在这里参拜。",
        useWhen: "建筑物很多、动线不太明显时很有帮助。"
      }
    ],
    checklist: [
      "举起相机前先看有没有拍照限制。",
      "走到参道、手水舍、赛钱箱附近时把节奏放慢。",
      "不确定时先观察，并把参拜动线留出来。"
    ]
  },
  temple: {
    culturalNotes: [
      "寺院礼仪常比神社更安静，也更偏向室内空间，尤其是在本堂、供养区或祈祷场所。",
      "与其背熟仪式，不如先读懂气氛。比起表现得很有把握，安静和留距离更重要。"
    ],
    situationCards: [
      {
        title: "走进一个看起来对外开放的殿堂",
        body: "门打开，不代表里面的参拜区、鞋子规则或摄影规则都完全自由。把开门当成提醒自己多看一下，比当成毫无限制更安全。"
      },
      {
        title: "想在佛坛或供养物前停留久一点",
        body: "就算没有人制止，那里对参拜者来说也可能带有很私人的意义。比起长时间站在正中间，安静地把空间让出来通常更合适。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここは入っても大丈夫ですか？",
        pronunciation: "Koko wa haitte mo daijoubu desu ka?",
        explanation: "平静地询问这里可不可以进去。",
        useWhen: "在本堂、侧殿或有绳索标示的边界前特别有用。"
      },
      {
        phrase: "靴はここで脱ぎますか？",
        pronunciation: "Kutsu wa koko de nugimasu ka?",
        explanation: "直接确认是不是要在这里脱鞋。",
        useWhen: "入口动线很细微、不想一不小心走太里面时很好用。"
      }
    ],
    checklist: [
      "跨进去之前先确认鞋子、摄影和室内出入规则。",
      "在室内把音量压得更低一些。",
      "如果有人正在祈祷，尽量把空间中央留给对方。"
    ]
  },
  bicycle: {
    culturalNotes: [
      "日本的自行车礼仪往往不是比谁骑得利落，而是不要对行人、车站周边和停放空间制造摩擦。",
      "尤其是停在哪里可以，这种小判断往往比骑行本身更容易出问题。"
    ],
    situationCards: [
      {
        title: "车站旁一个安静角落看起来很适合停车",
        body: "空着不代表可以停，也可能是管理区域或稍微挡到人流的位置。自行车最重要的常常不是停一下，而是停在被允许的地方。"
      },
      {
        title: "行人很多，但觉得只是快速通过一下",
        body: "在行人密集的地方，比起继续骑，下来推着走通常更自然。速度不是重点，减少摩擦才是。"
      }
    ],
    phraseCards: [
      {
        phrase: "自転車はここに止めて大丈夫ですか？",
        pronunciation: "Jitensha wa koko ni tomete daijoubu desu ka?",
        explanation: "确认这里能不能停自行车。",
        useWhen: "标示不清、又想短暂停放一下时很好用。"
      },
      {
        phrase: "駐輪場はどこですか？",
        pronunciation: "Chuurinjou wa doko desu ka?",
        explanation: "询问正式的自行车停放区在哪里。",
        useWhen: "在车站、商店街或设施附近想找正规停车位置时很实用。"
      }
    ],
    checklist: [
      "不是停了之后，而是在停之前先确认可不可以停。",
      "行人多的地方提前减速。",
      "如果空间看起来太共享，推着走通常比继续骑更好。"
    ]
  },
  ryokan: {
    culturalNotes: [
      "旅馆的服务常带有一种提前为你安排好的感觉，因为整天的节奏往往是大家共享的。",
      "房间可能会从休息空间变成用餐空间，再变成睡眠空间，所以把房间保持整齐，本身就是体验的一部分。"
    ],
    situationCards: [
      {
        title: "刚 check-in 完就想立刻外出",
        body: "如果刚刚才说明过晚餐时间、泡汤时段或房间使用方式，没确认清楚就急着出门，之后很容易出现小问题。通常先花一分钟看清楚更值得。"
      },
      {
        title: "你还在整理时，工作人员可能会再次进房",
        body: "在旅馆里，铺床、送餐、整理房间都可能让工作人员多次进出。打开的行李、湿毛巾、散在地上的充电线，比一般酒店更容易显得打扰。"
      }
    ],
    phraseCards: [
      {
        phrase: "夕食は何時ですか？",
        pronunciation: "Yuushoku wa nanji desu ka?",
        explanation: "用来简单又有礼地确认晚餐时间。",
        useWhen: "说明讲得有点快，或刚到时比较疲累没听清楚时很好用。"
      },
      {
        phrase: "こちらで待てばいいですか？",
        pronunciation: "Kochira de mateba ii desu ka?",
        explanation: "平静地询问应该在哪里等。",
        useWhen: "在 check-in、带房或准备用餐时特别实用。"
      }
    ],
    checklist: [
      "在完全安顿下来前先确认晚餐、泡汤与退房时间。",
      "拖鞋要分场合穿，尤其是厕所附近和榻榻米周边。",
      "如果工作人员可能进房，湿物、敞开的行李和线材要尽量收整齐。"
    ]
  },
  "visiting-home": {
    culturalNotes: [
      "做一个好客人，通常不是把正式礼仪全部做完，而是配合主人的节奏和气氛。",
      "主人说“没关系”常常是出于好意，所以稍微收一点、不要把每句客套都照单全收，通常更自然。"
    ],
    situationCards: [
      {
        title: "对方叫你放轻松、像在自己家一样",
        body: "这通常是叫你不要太拘谨，不是叫你把对方家当酒店或熟朋友住处那样使用。还是以轻一点的动作和等待提示为主比较好。"
      },
      {
        title: "你不确定要不要帮忙",
        body: "做太多可能显得太闯入，完全不动又可能显得太疏离。轻轻提一两次要不要帮忙通常就够了，之后照主人的回答走就好。"
      }
    ],
    phraseCards: [
      {
        phrase: "何かお手伝いしましょうか？",
        pronunciation: "Nanika otetsudai shimashou ka?",
        explanation: "不会太强势地表示想帮忙。",
        useWhen: "上菜、收拾，或主人看起来忙碌时很好用。"
      },
      {
        phrase: "どこに置けばいいですか？",
        pronunciation: "Doko ni okeba ii desu ka?",
        explanation: "有礼貌地问东西应该放在哪里。",
        useWhen: "外套、包、伴手礼或鞋子该放哪里不明显时很实用。"
      }
    ],
    checklist: [
      "进门前先看清楚玄关流程和拖鞋节奏。",
      "伴手礼以小巧、好收、好递出的东西最自然。",
      "主人没有明确带领前，不要自己往其他房间走。"
    ]
  },
  "residential-private": {
    culturalNotes: [
      "公寓规则通常是在处理短住旅客不太会注意到、但邻居会听到或看到的细节。",
      "日本的垃圾时间往往很准，所以“差不多就好”也可能真的给房东或住户带来麻烦。"
    ],
    situationCards: [
      {
        title: "觉得深夜抵达应该没什么",
        body: "行李轮声、在建筑外说话、手机外放声音，在安静的住宅小巷里都可能比你想象得更明显。"
      },
      {
        title: "建筑布局让人搞不太清楚",
        body: "住户专用门、信箱区、储物区、停车动线可能各自分开。和酒店不同，在住宅建筑走错地方更容易被感受到像是闯入私人空间。"
      }
    ],
    phraseCards: [
      {
        phrase: "ゴミはどこに出せばいいですか？",
        pronunciation: "Gomi wa doko ni daseba ii desu ka?",
        explanation: "直接而有礼地问垃圾该怎么处理。",
        useWhen: "在私人住宿中，垃圾规则通常比酒店更严格，特别有用。"
      },
      {
        phrase: "この入り口で合っていますか？",
        pronunciation: "Kono iriguchi de atteimasu ka?",
        explanation: "小心地确认这是不是正确入口。",
        useWhen: "有住户专用门或入口看起来很像的公寓里很好用。"
      }
    ],
    checklist: [
      "搬行李时也不要挡住或撑开建筑的大门。",
      "晚上特别压低轮子声、说话声和手机声音。",
      "垃圾、洗衣和共用空间规则要照着做，不要大概就好。"
    ]
  },
  "hostel-dorm": {
    culturalNotes: [
      "日本的青年旅馆 dorm 常常比某些国家的背包客旅馆更安静。",
      "社交气氛通常留在公共区域，睡房本身更像是大家共用的卧室。"
    ],
    situationCards: [
      {
        title: "很晚回来，但觉得两分钟就能处理完",
        body: "只要开始拿包、充电器、盥洗用品，那两分钟往往很快变成十分钟。在 dorm 里，比起心里想着快一点，更重要的是事先准备好再安静进房。"
      },
      {
        title: "房间气氛很轻松，于是床边聊天开始变长",
        body: "简单打招呼没有问题，但一旦变成真正的聊天，通常移去 lounge 会更体贴。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここで電話しても大丈夫ですか？",
        pronunciation: "Koko de denwa shitemo daijoubu desu ka?",
        explanation: "确认这个空间能不能讲电话。",
        useWhen: "不确定 lounge 或走廊是否适合讲话时很好用。"
      },
      {
        phrase: "ライトをつけてもいいですか？",
        pronunciation: "Raito o tsukete mo ii desu ka?",
        explanation: "柔和地询问可不可以开灯。",
        useWhen: "晚到、早起整理行李，或多人共用小房间时特别实用。"
      }
    ],
    checklist: [
      "盥洗用品、衣物和充电器最好在进入睡眠模式前先准备好。",
      "尽量使用耳机、小灯和最安静的拉链、拿包流程。",
      "吃东西、讲电话和大整理行李，能移到公共区域就移过去。"
    ]
  }
  ,
  "all-you-can-drink": {
    culturalNotes: [
      "喝到饱方案看起来很轻松，但它其实仍然建立在共用时间限制和整桌节奏上。",
      "容易尴尬的点通常不在于喝酒本身，而是在于点太多、错过最后加点，或和整桌节奏脱节。"
    ],
    situationCards: [
      {
        title: "时间快到时还想再点最后一杯",
        body: "如果整桌节奏已经慢下来，硬要再补一轮，可能会让人感觉整桌都在为了你一个人的步调被拉长。"
      },
      {
        title: "大家各自在不同时间分别点单",
        body: "这样很容易让整桌节奏变乱，也让气氛显得零散。很多店里，稍微一起抓同一个点单节奏会更顺。"
      }
    ],
    phraseCards: [
      {
        phrase: "ラストオーダーは何時ですか？",
        pronunciation: "Rasuto oodaa wa nanji desu ka?",
        explanation: "直接确认最后加点时间。",
        useWhen: "想提早抓好整桌节奏、不要到最后才匆忙时很好用。"
      },
      {
        phrase: "次は一緒に頼みますか？",
        pronunciation: "Tsugi wa issho ni tanomimasu ka?",
        explanation: "温和地询问下一轮要不要一起点。",
        useWhen: "饮料快见底，又不想让点单节奏太分散时很有帮助。"
      }
    ],
    checklist: [
      "不要拖到最后一刻，先确认时间限制和最后加点时间。",
      "不要一直零碎加点，尽量配合整桌节奏。",
      "如果你比较早停下来，也让整桌维持轻松的节奏。"
    ]
  },
  karaoke: {
    culturalNotes: [
      "日本卡拉 OK 常更像是共享顺序、一起维持房间氛围，而不是比谁唱得最好。",
      "比起唱得厉害，让人觉得和你同房很舒服，往往更重要。"
    ],
    situationCards: [
      {
        title: "你很会操作点歌机，所以一直很快地点歌",
        body: "就算没有人抱怨，如果你太强势地掌握整个房间节奏，安静一点的人就很容易自然退到后面。"
      },
      {
        title: "你想一开始就把气氛炒热",
        body: "比起一开始就唱自己最私人的歌或最炸的歌，先挑一首大家都容易跟上的歌，通常更容易让整体气氛顺起来。"
      }
    ],
    phraseCards: [
      {
        phrase: "次どうぞ",
        pronunciation: "Tsugi douzo",
        explanation: "自然地把下一首或下一轮让给别人。",
        useWhen: "想让房间继续流动，又不想自己占太多空间时很实用。"
      },
      {
        phrase: "みんなで歌える曲にしますね",
        pronunciation: "Minna de utaeru kyoku ni shimasu ne",
        explanation: "表示自己会选一首大家都能一起享受的歌。",
        useWhen: "想让房间气氛更有包容感时很好用。"
      }
    ],
    checklist: [
      "先用适合房间氛围的歌开场，不要一开始就选最长或最重的歌。",
      "自然地把下一轮让出去，也留意是否有人还没唱过。",
      "用遥控器、铃鼓和点餐时，不要把整个房间变成自己的舞台。"
    ]
  },
  "live-concert": {
    culturalNotes: [
      "演唱会和剧场礼仪，常常是在保护整个空间共同维持的专注感。",
      "那些看起来严格的规则，通常不是因为形式，而是为了避免一个人的灯光、动作或声音打断很多人的体验。"
    ],
    situationCards: [
      {
        title: "演出开始后才匆匆赶到",
        body: "就算座位就在附近，按着自己的节奏快速挤进去，也常比先等工作人员指示更打扰别人。"
      },
      {
        title: "不确定偷拍一张可不可以",
        body: "在拍摄规则严格的场馆里，“只拍一下”往往不会被当成小例外，而更像是在破坏彼此的默契。"
      }
    ],
    phraseCards: [
      {
        phrase: "写真は大丈夫ですか？",
        pronunciation: "Shashin wa daijoubu desu ka?",
        explanation: "快速又有礼地确认能不能拍照。",
        useWhen: "演出前、中场休息，或规则看不太清楚时很好用。"
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "确认自己是不是在正确的座位或区域。",
        useWhen: "区域拥挤、或接近开演才到场时很有帮助。"
      }
    ],
    checklist: [
      "演出前先确认座位、时间和拍摄规则。",
      "安静型场馆里，手机连震动都最好关掉。",
      "如果迟到，先跟着工作人员指引，不要自己临场乱穿。"
    ]
  },
  "sports-event": {
    culturalNotes: [
      "体育赛事现场虽然热闹，但每个区域常常仍有自己关于站立、应援和移动的内部节奏。",
      "最自然的做法通常不是把自己的风格硬带进去，而是享受现场能量，同时和周围的人对齐。"
    ],
    situationCards: [
      {
        title: "你很兴奋，想经常站起来应援",
        body: "有些区域这样很自然，但有些区域会很快挡到别人的视线。先看一下四周，通常就能知道这一块的默契。"
      },
      {
        title: "食物、饮料和应援小物越堆越多",
        body: "气氛可以很随意，但台阶、膝前和座位下空间仍然是共享的。东西一散开，整排都会感觉更挤。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここは立って応援する感じですか？",
        pronunciation: "Koko wa tatte ouen suru kanji desu ka?",
        explanation: "自然地询问这一块是不是站着应援的氛围。",
        useWhen: "当现场看起来比预期更有秩序时很有帮助。"
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "坐下前先平静确认自己是不是在对的位置。",
        useWhen: "区块和排数看起来很像、不想打扰别人两次时很好用。"
      }
    ],
    checklist: [
      "先看这一块是坐着、站着、偏安静，还是很积极应援的氛围。",
      "食物、包和应援用品尽量留在自己的座位范围内。",
      "比赛重新开始时，身体和注意力要尽快回到原位。"
    ]
  },
  "theme-park": {
    culturalNotes: [
      "日本主题乐园表面上看起来很轻松热闹，但底层动线通常是高度有秩序的。",
      "摩擦感通常不是来自设施本身，而是大家怎么使用排队区、等待区和看表演的位置。"
    ],
    situationCards: [
      {
        title: "一群人停在路中间讨论下一步",
        body: "在人很多的园区里，这样很快就会变成移动障碍物。哪怕只往旁边多移几步，整体感受都会差很多。"
      },
      {
        title: "你觉得只是先帮朋友占一下位置",
        body: "在游行、表演和排队现场，替还没到的人占太多空间，往往比旅客想象中更快被觉得不公平。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここで待てばいいですか？",
        pronunciation: "Koko de mateba ii desu ka?",
        explanation: "确认是不是该在这里排或等。",
        useWhen: "动线分成 standby、预约入场或回来时间时特别有帮助。"
      },
      {
        phrase: "今ここで止まっても大丈夫ですか？",
        pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
        explanation: "温和地确认这里可不可以暂时停一下。",
        useWhen: "想看地图、整理包、或集合人之前很好用。"
      }
    ],
    checklist: [
      "先确认这里是真正的队伍，还是队伍入口前的空间。",
      "讨论下一步时，不要让整群人把走道占满。",
      "把游行、表演和拍照点都当成共享观看空间来使用。"
    ]
  },
  "rental-car": {
    culturalNotes: [
      "日本租车礼仪与其说是在讲风格，不如说是在减少那些其实可以避免的摩擦，比如停车、窄路、加油规则和还车时间。",
      "真正容易让人手忙脚乱的，常常不是开车本身，而是取车、收费道路、以及哪些地方到底能不能停车这些小预设。"
    ],
    situationCards: [
      {
        title: "看起来只是短暂停一下，应该没关系",
        body: "在很多地方，‘只停一下’也可能挡到窄路、店家出入口或本地车流。看起来安静的路段，也可能其实管理得很紧。"
      },
      {
        title: "还车时间感觉应该可以有一点弹性",
        body: "租车公司的交车节奏常比旅客想象中更紧。稍微晚一点，都可能影响到工作人员、清洁或下一笔预约。"
      }
    ],
    phraseCards: [
      {
        phrase: "この近くに駐車しても大丈夫ですか？",
        pronunciation: "Kono chikaku ni chuusha shitemo daijoubu desu ka?",
        explanation: "小心确认附近能不能停车。",
        useWhen: "标示不够明确、或这个空间看起来有点模糊时很有帮助。"
      },
      {
        phrase: "返却前に給油が必要ですか？",
        pronunciation: "Henkyaku mae ni kyuuyu ga hitsuyou desu ka?",
        explanation: "直接确认还车前是否需要加油。",
        useWhen: "接近最后一天、或取车时说明听得有点赶时特别实用。"
      }
    ],
    checklist: [
      "离开停车场前，先再次确认驾照、收费方式、油量规则和还车时间。",
      "就算只是短停，也先看会不会挡到行人动线或出入口。",
      "接近还车前，要把加油、移动时间和最后确认都留得宽一些。"
    ]
  }
};

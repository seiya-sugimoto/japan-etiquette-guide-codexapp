import type { CategoryId, PremiumDeepDive } from "@/types/category";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

export const traditionalChinesePremiumDeepDive: PremiumDeepDiveMap = {
  onsen: {
    culturalNotes: [
      "日本溫泉禮儀與其說是背流程，不如說是在保護共用浴場的安靜與整潔。",
      "比起看起來熟練，先洗乾淨、動作放慢一點，通常更能讓人感受到你有在顧慮周圍。"
    ],
    situationCards: [
      {
        title: "看到別人都很熟悉流程，自己開始著急",
        body: "太快模仿周圍的人，往往比先慢下來看標示更容易出現尷尬。溫泉空間通常重視的是從容，不是速度。"
      },
      {
        title: "盥洗位附近開始堆滿自己的東西",
        body: "就算浴場本身看起來很寬敞，盥洗位依然是共享的個人空間。小小的雜亂，往往比旅客想像中更明顯。"
      }
    ],
    phraseCards: [
      {
        phrase: "タオルはどこに置けばいいですか？",
        pronunciation: "Taoru wa doko ni okeba ii desu ka?",
        explanation: "用來簡單確認毛巾應該放哪裡。",
        useWhen: "當你對空間配置不熟，又不想自己亂猜時很實用。"
      },
      {
        phrase: "こちらのお風呂を使って大丈夫ですか？",
        pronunciation: "Kochira no ofuro o tsukatte daijoubu desu ka?",
        explanation: "禮貌確認這個浴池是否可以使用。",
        useWhen: "有多個浴池、私人區域或貼有使用限制時很有幫助。"
      }
    ],
    checklist: [
      "先確認刺青、拍照和使用時間規則。",
      "進浴池前先徹底沖洗，毛巾不要泡進水裡。",
      "離開盥洗位時整理到下一位可以立刻坐下的程度。"
    ]
  },
  shrine: {
    culturalNotes: [
      "神社禮儀之所以讓人覺得微妙，往往是因為那裡同時存在觀光、參拜、邊界感與氛圍。",
      "通常不需要把每個動作做得完美。更重要的是別急，也不要把參拜空間變成自己的表演場。"
    ],
    situationCards: [
      {
        title: "想在本殿附近拍一張好照片",
        body: "最漂亮的角度常常也是參拜最活躍的位置。稍微等一下、把通道留出來，通常比先占住那個點更自然。"
      },
      {
        title: "不確定要不要照著儀式做",
        body: "先看一兩個人怎麼做，通常是更有禮貌的選擇。太快模仿，有時反而比先停一下更顯得草率。"
      }
    ],
    phraseCards: [
      {
        phrase: "写真はここで大丈夫ですか？",
        pronunciation: "Shashin wa koko de daijoubu desu ka?",
        explanation: "自然地確認這個位置能不能拍照。",
        useWhen: "在參拜處、鳥居、手水舍或較安靜的角落附近特別實用。"
      },
      {
        phrase: "こちらでお参りしてもいいですか？",
        pronunciation: "Kochira de omairi shitemo ii desu ka?",
        explanation: "溫和地確認是否可以在這裡參拜。",
        useWhen: "建築物很多、動線不夠明顯時很有幫助。"
      }
    ],
    checklist: [
      "舉起相機前先看有沒有拍照限制。",
      "走到參道、手水舍、賽錢箱附近時把步調放慢。",
      "不確定時先觀察，並把參拜動線留出來。"
    ]
  },
  temple: {
    culturalNotes: [
      "寺院禮儀常比神社更安靜、也更偏向室內空間，尤其是在本堂、供養區或祈禱場所。",
      "與其背熟儀式，不如先讀懂空氣。比起表現得很有把握，安靜與留距離更重要。"
    ],
    situationCards: [
      {
        title: "走進一個看起來對外開放的殿堂",
        body: "入口打開，不代表裡面的參拜區、鞋子規則或攝影規則完全自由。把開門當成提醒自己多看一下，比當成毫無限制更安全。"
      },
      {
        title: "想在佛壇或供養物前停留久一點",
        body: "就算沒有人阻止，那裡對參拜者來說也可能帶有很私人的意義。比起長時間站在正中間，安靜地留出空間通常更合適。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここは入っても大丈夫ですか？",
        pronunciation: "Koko wa haitte mo daijoubu desu ka?",
        explanation: "平靜地詢問這裡可不可以進去。",
        useWhen: "在本堂、側殿或有繩索標示的邊界前特別有用。"
      },
      {
        phrase: "靴はここで脱ぎますか？",
        pronunciation: "Kutsu wa koko de nugimasu ka?",
        explanation: "直接確認是不是要在這裡脫鞋。",
        useWhen: "入口動線很細微、不想一不小心走太裡面時很好用。"
      }
    ],
    checklist: [
      "跨進去之前先確認鞋子、攝影和室內出入規則。",
      "在室內把音量壓得更低一些。",
      "如果有人正在祈禱，盡量把空間中央留給對方。"
    ]
  },
  bicycle: {
    culturalNotes: [
      "日本的自行車禮儀往往不是比誰騎得俐落，而是不要對行人、車站周邊和停放空間造成摩擦。",
      "尤其是停哪裡可以，這種小小的判斷，常比騎乘本身更容易出問題。"
    ],
    situationCards: [
      {
        title: "車站旁一個安靜角落看起來很適合停車",
        body: "空著不代表可以停，也可能是管理區或稍微擋到人流的位置。自行車最重要的常常不是停一下，而是停在被允許的地方。"
      },
      {
        title: "行人很多，但覺得只是快速通過一下",
        body: "在行人密集的地方，比起繼續騎，牽著走通常更自然。速度不是重點，減少摩擦才是。"
      }
    ],
    phraseCards: [
      {
        phrase: "自転車はここに止めて大丈夫ですか？",
        pronunciation: "Jitensha wa koko ni tomete daijoubu desu ka?",
        explanation: "確認這裡能不能停自行車。",
        useWhen: "標示不明、又想短暫停放一下時很好用。"
      },
      {
        phrase: "駐輪場はどこですか？",
        pronunciation: "Chuurinjou wa doko desu ka?",
        explanation: "詢問正式的自行車停放區在哪裡。",
        useWhen: "在車站、商店街或設施附近想找正規停車位置時很實用。"
      }
    ],
    checklist: [
      "不是停了之後，而是在停之前先確認可不可以停。",
      "行人多的地方提早減速。",
      "如果空間看起來太共享，牽著走通常比繼續騎更好。"
    ]
  },
  ryokan: {
    culturalNotes: [
      "旅館的服務常帶有一種先一步為你安排好的感覺，因為整天的節奏往往是大家共用的。",
      "房間可能會從休息空間變成用餐空間，再變成睡眠空間，所以把房間維持整齊，本身就是體驗的一部分。"
    ],
    situationCards: [
      {
        title: "剛 check-in 完就想立刻外出",
        body: "如果剛剛才說明過晚餐時間、泡湯時段或房間使用方式，沒確認清楚就急著出門，之後很容易出現小問題。通常先花一分鐘看清楚更值得。"
      },
      {
        title: "你還在整理時，工作人員可能會再次進房",
        body: "在旅館裡，鋪床、送餐、整理房間都可能讓工作人員多次進出。打開的行李、濕毛巾、散在地上的充電線，比一般飯店更容易顯得打擾。"
      }
    ],
    phraseCards: [
      {
        phrase: "夕食は何時ですか？",
        pronunciation: "Yuushoku wa nanji desu ka?",
        explanation: "用來簡單又有禮地確認晚餐時間。",
        useWhen: "說明講得有點快，或剛到時比較疲累沒聽清楚時很好用。"
      },
      {
        phrase: "こちらで待てばいいですか？",
        pronunciation: "Kochira de mateba ii desu ka?",
        explanation: "平靜地詢問應該在哪裡等。",
        useWhen: "在 check-in、帶房或準備用餐時特別實用。"
      }
    ],
    checklist: [
      "在完全安頓下來前先確認晚餐、泡湯與退房時間。",
      "拖鞋要分場合穿，尤其是廁所附近和榻榻米周邊。",
      "如果工作人員可能進房，濕物、敞開的行李和線材要盡量收整齊。"
    ]
  },
  "visiting-home": {
    culturalNotes: [
      "當一個好客人，通常不是把正式禮儀全部做完，而是配合主人的節奏與空氣。",
      "主人說『沒關係』常常是出於好意，所以稍微收一點、不要把每句客套都照單全收，通常更自然。"
    ],
    situationCards: [
      {
        title: "對方叫你放輕鬆、像在自己家一樣",
        body: "這通常是叫你不要太拘謹，不是叫你把對方家當飯店或熟朋友住處那樣使用。還是以輕一點的動作和等待提示為主比較好。"
      },
      {
        title: "你不確定要不要幫忙",
        body: "做太多可能顯得太闖入，完全不動又可能顯得太疏離。輕輕提一兩次要不要幫忙通常就夠了，之後照主人的回答走就好。"
      }
    ],
    phraseCards: [
      {
        phrase: "何かお手伝いしましょうか？",
        pronunciation: "Nanika otetsudai shimashou ka?",
        explanation: "不會太強勢地表示想幫忙。",
        useWhen: "上菜、收拾，或主人看起來忙碌時很好用。"
      },
      {
        phrase: "どこに置けばいいですか？",
        pronunciation: "Doko ni okeba ii desu ka?",
        explanation: "有禮貌地問東西應該放哪裡。",
        useWhen: "外套、包包、伴手禮或鞋子該放哪裡不明顯時很實用。"
      }
    ],
    checklist: [
      "進門前先看清楚玄關的流程和拖鞋節奏。",
      "伴手禮以小巧、好收、好遞出的東西最自然。",
      "主人沒有明確帶領前，不要自己往其他房間走。"
    ]
  },
  "residential-private": {
    culturalNotes: [
      "公寓規則通常是在處理短住旅客不太會注意到、但鄰居會聽到或看到的細節。",
      "日本的垃圾時間常常很準，所以『差不多就好』也可能真的給屋主或住戶帶來麻煩。"
    ],
    situationCards: [
      {
        title: "覺得深夜抵達應該沒什麼",
        body: "行李輪聲、在建築外說話、手機外放聲音，在安靜的住宅巷道裡都可能比你想像得更明顯。"
      },
      {
        title: "建築配置讓人搞不太清楚",
        body: "住戶專用門、信箱區、儲物區、停車動線可能各自分開。和飯店不同，在住宅建築走錯地方更容易被感受到像是闖入私人空間。"
      }
    ],
    phraseCards: [
      {
        phrase: "ゴミはどこに出せばいいですか？",
        pronunciation: "Gomi wa doko ni daseba ii desu ka?",
        explanation: "直接而有禮地問垃圾該怎麼處理。",
        useWhen: "在私人住宿中，垃圾規則通常比飯店更嚴格，特別有用。"
      },
      {
        phrase: "この入り口で合っていますか？",
        pronunciation: "Kono iriguchi de atteimasu ka?",
        explanation: "小心地確認這是不是正確入口。",
        useWhen: "有住戶專用門或入口看起來很像的公寓裡很好用。"
      }
    ],
    checklist: [
      "搬行李時也不要擋住或撐開建築的大門。",
      "晚上特別壓低輪子聲、說話聲和手機聲音。",
      "垃圾、洗衣和共用空間規則要照著做，不要大概就好。"
    ]
  },
  "hostel-dorm": {
    culturalNotes: [
      "日本的青年旅館 dorm 常常比某些國家的背包客旅館更安靜。",
      "社交氣氛通常留在公共區域，睡房本身更像是大家共用的臥室。"
    ],
    situationCards: [
      {
        title: "很晚回來，但覺得兩分鐘就能處理完",
        body: "只要開始拿包、充電器、盥洗用品，那兩分鐘往往很快變成十分鐘。在 dorm 裡，比起心裡想著快一點，更重要的是事先準備好再安靜進房。"
      },
      {
        title: "房間氣氛很輕鬆，於是床邊聊天開始變長",
        body: "簡單打招呼沒有問題，但一旦變成真正的聊天，通常移去 lounge 會更體貼。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここで電話しても大丈夫ですか？",
        pronunciation: "Koko de denwa shitemo daijoubu desu ka?",
        explanation: "確認這個空間能不能講電話。",
        useWhen: "不確定 lounge 或走廊是否適合講話時很好用。"
      },
      {
        phrase: "ライトをつけてもいいですか？",
        pronunciation: "Raito o tsukete mo ii desu ka?",
        explanation: "柔和地詢問可不可以開燈。",
        useWhen: "晚到、早起整理行李，或多人共用小房間時特別實用。"
      }
    ],
    checklist: [
      "盥洗用品、衣物和充電器最好在進入睡眠模式前先準備好。",
      "盡量使用耳機、小燈和最安靜的拉鍊、拿包流程。",
      "吃東西、講電話和大整理行李，能移到公共區域就移過去。"
    ]
  }
  ,
  "all-you-can-drink": {
    culturalNotes: [
      "喝到飽方案看起來很輕鬆，但它其實仍然建立在共用時間限制和整桌節奏上。",
      "容易尷尬的點通常不在於喝酒本身，而是在於點太多、錯過最後加點，或和整桌節奏脫節。"
    ],
    situationCards: [
      {
        title: "時間快到時還想再點最後一杯",
        body: "如果整桌節奏已經慢下來，硬要再補一輪，可能會讓人感覺整桌都在為了你一個人的步調被拉長。"
      },
      {
        title: "大家各自分開、在不同時間點單",
        body: "這樣很容易讓整桌節奏變亂，也讓氣氛顯得零散。很多店裡，稍微一起抓同一個點單節奏會更順。"
      }
    ],
    phraseCards: [
      {
        phrase: "ラストオーダーは何時ですか？",
        pronunciation: "Rasuto oodaa wa nanji desu ka?",
        explanation: "直接確認最後加點時間。",
        useWhen: "想提早抓好整桌節奏、不要到最後才匆忙時很好用。"
      },
      {
        phrase: "次は一緒に頼みますか？",
        pronunciation: "Tsugi wa issho ni tanomimasu ka?",
        explanation: "溫和地詢問下一輪要不要一起點。",
        useWhen: "飲料快見底，又不想讓點單節奏太分散時很有幫助。"
      }
    ],
    checklist: [
      "不要拖到最後一刻，先確認時間限制和最後加點時間。",
      "不要一直零碎加點，盡量配合整桌節奏。",
      "如果你比較早停下來，也讓整桌維持輕鬆的節奏。"
    ]
  },
  karaoke: {
    culturalNotes: [
      "日本卡拉 OK 常比較像是共享順序、一起維持房間氣氛，而不是比賽誰唱得最好。",
      "比起唱得厲害，讓人覺得和你同房很舒服，往往更重要。"
    ],
    situationCards: [
      {
        title: "你很會操作點歌機，所以一直很快地選歌",
        body: "就算沒有人抱怨，若你太強勢地掌握整個房間節奏，安靜一點的人就很容易自然消失在流裡。"
      },
      {
        title: "你想一開始就把氣氛炒熱",
        body: "比起一開始就唱自己最私人的歌或最炸的歌，先挑一首大家都容易跟上的歌，通常更容易讓整體氣氛順起來。"
      }
    ],
    phraseCards: [
      {
        phrase: "次どうぞ",
        pronunciation: "Tsugi douzo",
        explanation: "自然地把下一首或下一輪讓給別人。",
        useWhen: "想讓房間繼續流動，又不想自己占太多空間時很實用。"
      },
      {
        phrase: "みんなで歌える曲にしますね",
        pronunciation: "Minna de utaeru kyoku ni shimasu ne",
        explanation: "表示自己會選一首大家都能一起享受的歌。",
        useWhen: "想讓房間氣氛更有包容感時很好用。"
      }
    ],
    checklist: [
      "先用適合房間氣氛的歌開場，不要一開始就選最長或最重的歌。",
      "自然地把下一輪讓出去，也注意是否有人還沒唱過。",
      "用遙控器、鈴鼓和點餐時，不要把整個房間變成自己的舞台。"
    ]
  },
  "live-concert": {
    culturalNotes: [
      "演唱會與劇場禮儀，常常是在保護整個空間共同維持的專注感。",
      "那些看起來嚴格的規則，通常不是因為形式，而是為了避免一個人的光線、動作或聲音打斷很多人的體驗。"
    ],
    situationCards: [
      {
        title: "演出開始後才匆匆趕到",
        body: "就算座位就在附近，照著自己的節奏快速擠進去，也常比先等工作人員指示更打擾別人。"
      },
      {
        title: "不確定偷拍一張可不可以",
        body: "在拍攝規則嚴格的場館裡，「只拍一下」常常不會被當成小例外，而更像是在破壞彼此的默契。"
      }
    ],
    phraseCards: [
      {
        phrase: "写真は大丈夫ですか？",
        pronunciation: "Shashin wa daijoubu desu ka?",
        explanation: "快速又有禮地確認能不能拍照。",
        useWhen: "演出前、中場休息，或規則看不太清楚時很好用。"
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "確認自己是不是坐對座位或區域。",
        useWhen: "區域擁擠、或接近開演才到場時很有幫助。"
      }
    ],
    checklist: [
      "演出前先確認座位、時間和拍攝規則。",
      "安靜型場館裡，手機連震動都最好關掉。",
      "若遲到，先跟著工作人員指引，不要自己臨場亂穿。"
    ]
  },
  "sports-event": {
    culturalNotes: [
      "體育賽事現場雖然熱鬧，但每個區域常常仍有自己關於站立、應援和移動的內在節奏。",
      "最自然的做法通常不是把自己的風格硬帶進去，而是享受現場能量，同時和周圍的人對齊。"
    ],
    situationCards: [
      {
        title: "你很興奮，想常常站起來應援",
        body: "有些區塊這很自然，但有些區塊會很快擋到別人的視線。先看一下四周，通常就能知道這一區的默契。"
      },
      {
        title: "食物、飲料和應援小物越堆越多",
        body: "氣氛可以很隨意，但台階、膝前和座位下空間仍然是共享的。東西一散開，整排都會感覺更擠。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここは立って応援する感じですか？",
        pronunciation: "Koko wa tatte ouen suru kanji desu ka?",
        explanation: "自然地詢問這一區是不是站著應援的氛圍。",
        useWhen: "當現場看起來比預期更有秩序時很有幫助。"
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "坐下前先平靜確認自己是不是在對的位置。",
        useWhen: "區塊和排數看起來很像、不想打擾別人兩次時很好用。"
      }
    ],
    checklist: [
      "先看這一區是坐著、站著、偏安靜，還是很積極應援的氛圍。",
      "食物、包包和應援用品盡量留在自己的座位範圍內。",
      "比賽重新開始時，身體和注意力要快點回到原位。"
    ]
  },
  "theme-park": {
    culturalNotes: [
      "日本主題樂園表面上看起來很輕鬆熱鬧，但底層動線通常是高度有秩序的。",
      "摩擦感通常不是來自設施本身，而是大家怎麼使用排隊區、等待區和看表演的位置。"
    ],
    situationCards: [
      {
        title: "一群人停在路中間討論下一步",
        body: "在人很多的園區裡，這樣很快就會變成移動障礙物。哪怕只往旁邊多移幾步，整體感受都會差很多。"
      },
      {
        title: "你覺得只是先幫朋友佔一下位置",
        body: "在遊行、表演和排隊現場，替尚未到場的人占太多空間，往往比旅客想像中更快被覺得不公平。"
      }
    ],
    phraseCards: [
      {
        phrase: "ここで待てばいいですか？",
        pronunciation: "Koko de mateba ii desu ka?",
        explanation: "確認是不是該在這裡排或等。",
        useWhen: "動線分成 standby、預約入場或回來時間時特別有幫助。"
      },
      {
        phrase: "今ここで止まっても大丈夫ですか？",
        pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
        explanation: "溫和地確認這裡可不可以暫停一下。",
        useWhen: "想看地圖、整理包包或集合人員前很好用。"
      }
    ],
    checklist: [
      "先確認這裡是真正的隊伍，還只是隊伍入口前的空間。",
      "討論下一步時，不要讓整群人把走道占滿。",
      "把遊行、表演和拍照點都當成共享觀看空間來使用。"
    ]
  },
  "rental-car": {
    culturalNotes: [
      "日本租車禮儀與其說是在講風格，不如說是在減少那些其實可以避免的摩擦，例如停車、窄路、加油規則和還車時間。",
      "真正容易讓人手忙腳亂的，常常不是開車本身，而是取車、收費道路、以及哪些地方到底能不能停車這些小小的預設。"
    ],
    situationCards: [
      {
        title: "看起來只是短暫停一下，應該沒關係",
        body: "在很多地方，『只停一下』也可能擋到窄路、店家出入口或在地車流。看起來安靜的路段，也可能其實管理得很緊。"
      },
      {
        title: "還車時間感覺應該可以有一點彈性",
        body: "租車公司的交車節奏常比旅客想像中更緊。稍微晚一點，都可能影響到工作人員、清潔或下一筆預約。"
      }
    ],
    phraseCards: [
      {
        phrase: "この近くに駐車しても大丈夫ですか？",
        pronunciation: "Kono chikaku ni chuusha shitemo daijoubu desu ka?",
        explanation: "小心確認附近能不能停車。",
        useWhen: "標示不夠明確、或這個空間看起來有點模糊時很有幫助。"
      },
      {
        phrase: "返却前に給油が必要ですか？",
        pronunciation: "Henkyaku mae ni kyuuyu ga hitsuyou desu ka?",
        explanation: "直接確認還車前是否需要加油。",
        useWhen: "接近最後一天、或取車時說明聽得有點趕時特別實用。"
      }
    ],
    checklist: [
      "離開停車場前，先再次確認駕照、收費方式、油量規則和還車時間。",
      "就算只是短停，也先看會不會擋到行人動線或出入口。",
      "接近還車前，要把加油、移動時間和最後確認都留得寬一些。"
    ]
  }
};

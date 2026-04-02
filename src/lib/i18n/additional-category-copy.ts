import type { AppLanguage } from "@/types/language";

type CategoryCopy = {
  title: string;
  shortDescription: string;
};

export const additionalLocalizedCategoryCopy: Partial<
  Record<AppLanguage, Record<string, CategoryCopy>>
> = {
  en: {
    "airport-arrival": {
      title: "Arriving at the Airport",
      shortDescription: "How to move calmly through the first busy moments after landing."
    },
    "immigration-customs": {
      title: "Immigration and Customs",
      shortDescription: "Be ready, stay in line, and wait for instructions."
    },
    "airport-transfer": {
      title: "Airport Transfers",
      shortDescription: "Check your route first, then move with purpose."
    },
    "airport-limousine-bus": {
      title: "Airport Limousine Buses",
      shortDescription: "Board on time, confirm the stop, and follow the luggage process."
    },
    "local-bus": {
      title: "Local Buses",
      shortDescription: "Watch how boarding and payment work before you move."
    },
    "night-bus": {
      title: "Night Buses",
      shortDescription: "Treat the bus like a shared sleeping space, not a social one."
    },
    taxi: {
      title: "Taxis",
      shortDescription: "Show the destination clearly and keep the ride simple."
    },
    "ride-hailing": {
      title: "Ride-Hailing Pickups",
      shortDescription: "Find the pickup point first, then wait without blocking anyone."
    },
    ferry: {
      title: "Ferries and Boats",
      shortDescription: "Move carefully, keep your things tidy, and respect shared space."
    },
    "ropeway-cablecar": {
      title: "Ropeways and Cable Cars",
      shortDescription: "Board quickly, share the view, and do not hold the best spot too long."
    },
    "hotel-checkin": {
      title: "Hotel Check-In",
      shortDescription: "Have your booking ready and listen to the hotel explanation."
    },
    "hotel-lobby": {
      title: "Hotel Lobby",
      shortDescription: "Use the lobby as a shared waiting space, not a personal base."
    },
    "hotel-breakfast": {
      title: "Hotel Breakfast",
      shortDescription: "Follow the seating flow, take food lightly, and keep the line moving."
    },
    "hotel-elevator": {
      title: "Hotel Elevators",
      shortDescription: "Let people out first and keep the ride quiet and short."
    },
    "shared-lounge": {
      title: "Shared Lounges",
      shortDescription: "Use the room lightly and match the quietest tone in the space."
    },
    "coin-laundry": {
      title: "Coin Laundry",
      shortDescription: "Use machines efficiently and pick up finished laundry on time."
    },
    "capsule-hotel": {
      title: "Capsule Hotels",
      shortDescription: "Think quiet, compact, and considerate in the sleeping area."
    },
    "hostel-dorm": {
      title: "Hostels and Dorm Rooms",
      shortDescription: "Shared rooms work best when everyone reduces noise, light, and clutter."
    },
    "checkout-room": {
      title: "Leaving the Room at Checkout",
      shortDescription: "Leave the room reasonably tidy and get out on time."
    },
    "luggage-storage": {
      title: "Luggage Storage and Lockers",
      shortDescription: "Choose the right space quickly and do your sorting away from the lockers."
    },
    cafe: {
      title: "Cafes",
      shortDescription: "Check the flow first, then choose your seat and pace."
    },
    bakery: {
      title: "Bakeries",
      shortDescription: "Use the tray and tongs, and handle display food gently."
    },
    "fast-food": {
      title: "Fast Food",
      shortDescription: "Order efficiently, clear your table, and keep the seating turning over."
    },
    "food-court": {
      title: "Food Courts",
      shortDescription: "Share seats fairly and follow the self-service rhythm."
    },
    izakaya: {
      title: "Izakaya",
      shortDescription: "Expect house rules, a different pace, and a few local customs."
    },
    bar: {
      title: "Bars",
      shortDescription: "Read the mood first, then match your voice and pace to the room."
    },
    "all-you-can-drink": {
      title: "All-You-Can-Drink Plans",
      shortDescription: "Drink plans still come with time limits, last orders, and waste rules."
    },
    karaoke: {
      title: "Karaoke",
      shortDescription: "Check the time plan, room rules, and order flow at the start."
    },
    "food-stalls": {
      title: "Food Stalls and Street Food Areas",
      shortDescription: "Follow the flow, eat where it makes sense, and manage your trash."
    },
    "vending-machine": {
      title: "Vending Machines",
      shortDescription: "Buy quickly, step aside, and recycle drink containers correctly later."
    },
    supermarket: {
      title: "Supermarkets",
      shortDescription: "Follow the aisle flow, then bag your items where the store expects."
    },
    drugstore: {
      title: "Drugstores",
      shortDescription: "Know which items are simple shopping and which ones need extra guidance."
    },
    "department-store": {
      title: "Department Stores",
      shortDescription: "Move calmly, handle displays carefully, and follow the room's pace."
    },
    "duty-free": {
      title: "Duty-Free Shopping",
      shortDescription: "Bring the right documents and expect a process, not just a discount."
    },
    "fitting-room": {
      title: "Fitting Rooms",
      shortDescription: "Wait your turn, follow the store rules, and help keep the clothes clean."
    },
    "secondhand-shop": {
      title: "Secondhand and Reuse Shops",
      shortDescription: "Look closely, handle gently, and ask before opening or testing things."
    },
    "market-shopping-street": {
      title: "Markets and Shopping Streets",
      shortDescription: "Keep moving, leave room for locals, and respect shop fronts as working space."
    },
    "shopping-bags-packaging": {
      title: "Shopping Bags and Packaging",
      shortDescription: "Listen for the bag question and answer simply so checkout keeps moving."
    },
    "delivery-service": {
      title: "Delivery Services",
      shortDescription: "Check the address carefully and follow the form one step at a time."
    },
    atm: {
      title: "Using an ATM",
      shortDescription: "Use the machine efficiently, then step aside before sorting your wallet."
    },
    "museum-gallery": {
      title: "Museums and Galleries",
      shortDescription: "Read the room, keep quiet, and assume touching or photos may be limited."
    },
    "castle-garden": {
      title: "Castles, Gardens, and Historic Sites",
      shortDescription: "Move slowly, stay on the path, and treat barriers as real boundaries."
    },
    "observatory-night-view": {
      title: "Observatories and Night Views",
      shortDescription: "Take your turn at the best spot, then step aside."
    },
    "live-concert": {
      title: "Live Shows, Concerts, and Theaters",
      shortDescription: "Arrive on time, follow venue rules, and keep focus on the performance."
    },
    "sports-event": {
      title: "Watching Sports",
      shortDescription: "Enjoy the excitement, but respect seats, sections, and cleanup."
    },
    "theme-park": {
      title: "Theme Parks",
      shortDescription: "Treat lines, waiting zones, and viewing spots as shared space."
    },
    "festival-fireworks": {
      title: "Festivals and Fireworks",
      shortDescription: "Crowds change fast, so move early and stay aware of the flow."
    },
    "seasonal-scenic-spot": {
      title: "Cherry Blossom and Autumn Leaf Spots",
      shortDescription: "Enjoy the scenery gently and share crowded photo spots patiently."
    },
    "rental-car": {
      title: "Rental Cars",
      shortDescription: "Check documents, parking rules, and return conditions before driving."
    },
    "service-area": {
      title: "Service Areas and Roadside Stations",
      shortDescription: "Use rest stops efficiently, park neatly, and leave shared spaces tidy."
    }
  },
  ja: {
    "airport-arrival": {
      title: "空港に着いた直後",
      shortDescription: "到着直後の混雑した動線で、落ち着いて動くためのポイント。"
    },
    "immigration-customs": {
      title: "入国審査・税関",
      shortDescription: "書類を先に用意し、案内に沿って静かに進むための基本。"
    },
    "airport-transfer": {
      title: "空港からの乗り換え",
      shortDescription: "電車やバスへ移る前に、次の行動を先に決めるコツ。"
    },
    "airport-limousine-bus": {
      title: "空港リムジンバス",
      shortDescription: "乗り場と行き先、荷物の流れを落ち着いて確認するためのガイド。"
    },
    "local-bus": {
      title: "路線バス",
      shortDescription: "乗り方や支払い方が違うバスで迷わないための基本。"
    },
    "night-bus": {
      title: "夜行バス",
      shortDescription: "静かさが特に大切な移動で、気をつけたいこと。"
    },
    taxi: {
      title: "タクシー",
      shortDescription: "行き先の伝え方や車内でのふるまいを、シンプルに整理。"
    },
    "ride-hailing": {
      title: "配車アプリ・乗り場",
      shortDescription: "待ち合わせ場所で迷わず、周囲の流れも止めないための基本。"
    },
    ferry: {
      title: "フェリー・船",
      shortDescription: "通路や座席を共有しながら、落ち着いて乗るためのポイント。"
    },
    "ropeway-cablecar": {
      title: "ロープウェイ・ケーブルカー",
      shortDescription: "景色を楽しみつつ、狭い車内をみんなで気持ちよく使うコツ。"
    },
    "hotel-checkin": {
      title: "ホテルのチェックイン",
      shortDescription: "予約情報や説明を落ち着いて確認して、到着後をスムーズにする。"
    },
    "hotel-lobby": {
      title: "ホテルロビー",
      shortDescription: "共有の待合空間として、周囲の流れを止めずに使うためのポイント。"
    },
    "hotel-breakfast": {
      title: "ホテルの朝食会場",
      shortDescription: "席案内やビュッフェの流れを見ながら気持ちよく利用するコツ。"
    },
    "hotel-elevator": {
      title: "ホテルのエレベーター",
      shortDescription: "小さい共有空間で自然に見える乗り方の基本。"
    },
    "shared-lounge": {
      title: "共用ラウンジ・休憩スペース",
      shortDescription: "静かな共有スペースを軽やかに使うための考え方。"
    },
    "coin-laundry": {
      title: "コインランドリー",
      shortDescription: "機械だけでなく時間と共有スペースにも配慮するための基本。"
    },
    "capsule-hotel": {
      title: "カプセルホテル",
      shortDescription: "音と動きに気を配って、眠る人の近くで自然にふるまうコツ。"
    },
    "hostel-dorm": {
      title: "ホステル・相部屋",
      shortDescription: "音・光・荷物の広がりを抑えて、共有の寝室を快適に使う基本。"
    },
    "checkout-room": {
      title: "チェックアウト前に部屋を出るとき",
      shortDescription: "忘れ物と散らかりを減らして、気持ちよく部屋を出るためのポイント。"
    },
    "luggage-storage": {
      title: "荷物預かり・コインロッカー",
      shortDescription: "ロッカー前の流れを止めずに、手早く荷物を預けるコツ。"
    },
    cafe: {
      title: "カフェ",
      shortDescription: "先に流れを見てから、座る場所と過ごし方を決める。"
    },
    bakery: {
      title: "ベーカリー",
      shortDescription: "トレーとトングを使い、並んだパンはやさしく扱う。"
    },
    "fast-food": {
      title: "ファストフード店",
      shortDescription: "注文は手早く、食後は片づけて、席は気持ちよく回す。"
    },
    "food-court": {
      title: "フードコート",
      shortDescription: "必要な席だけ使って、セルフサービスの流れに合わせる。"
    },
    izakaya: {
      title: "居酒屋",
      shortDescription: "店ごとのルールや独特の流れを先に見ておくと安心。"
    },
    bar: {
      title: "バー",
      shortDescription: "まず空気を見て、声の大きさや過ごし方を合わせる。"
    },
    "all-you-can-drink": {
      title: "飲み放題",
      shortDescription: "時間制やラストオーダーがある前提で、無理なく頼む。"
    },
    karaoke: {
      title: "カラオケ",
      shortDescription: "最初に時間プランとルール、注文方法を確認する。"
    },
    "food-stalls": {
      title: "屋台・食べ歩きエリア",
      shortDescription: "人の流れを見ながら、食べる場所とゴミの扱いに気を配る。"
    },
    "vending-machine": {
      title: "自動販売機",
      shortDescription: "手早く買ってその場を空け、飲み終わった容器は正しく捨てる。"
    },
    supermarket: {
      title: "スーパー",
      shortDescription: "通路の流れを見て、袋詰めは店のやり方に合わせる。"
    },
    drugstore: {
      title: "ドラッグストア",
      shortDescription: "普通の買い物と説明が必要な薬を分けて考える。"
    },
    "department-store": {
      title: "百貨店",
      shortDescription: "少し落ち着いたペースで動き、売り場の空気に合わせる。"
    },
    "duty-free": {
      title: "免税店・免税手続き",
      shortDescription: "割引というより手続きとして考え、書類を先に用意する。"
    },
    "fitting-room": {
      title: "試着室",
      shortDescription: "店のルールに従って、服をきれいに扱う。"
    },
    "secondhand-shop": {
      title: "中古店・リユースショップ",
      shortDescription: "よく見て、ていねいに扱い、開封や試用は確認してから。"
    },
    "market-shopping-street": {
      title: "市場・商店街",
      shortDescription: "通路をふさがず、店先を生活や仕事の場として尊重する。"
    },
    "shopping-bags-packaging": {
      title: "レジ袋・包装",
      shortDescription: "袋や包装の確認には短く答えて、会計の流れを止めない。"
    },
    "delivery-service": {
      title: "宅配・配送サービス",
      shortDescription: "宛先をよく確認し、伝票は一つずつ落ち着いて進める。"
    },
    atm: {
      title: "ATMで現金を下ろすとき",
      shortDescription: "操作は手早く済ませて、財布の整理は横に移ってから。"
    },
    "museum-gallery": {
      title: "博物館・美術館",
      shortDescription: "まず館内ルールを見て、静かに、近づきすぎずに楽しむ。"
    },
    "castle-garden": {
      title: "城・庭園・文化財",
      shortDescription: "決められた道をゆっくり進み、境界線は本物のルールと考える。"
    },
    "observatory-night-view": {
      title: "展望台・夜景スポット",
      shortDescription: "いちばん良い場所は譲り合って、撮ったら次の人に回す。"
    },
    "live-concert": {
      title: "ライブ・コンサート・劇場",
      shortDescription: "時間どおりに入り、会場ルールと公演への集中を大切にする。"
    },
    "sports-event": {
      title: "スポーツ観戦",
      shortDescription: "盛り上がりながらも、席・エリア・後片づけを守る。"
    },
    "theme-park": {
      title: "テーマパーク",
      shortDescription: "列、待機場所、観覧場所はみんなの共有スペースとして使う。"
    },
    "festival-fireworks": {
      title: "祭り・花火大会",
      shortDescription: "人の流れが急に変わるので、早めに動いて帰りも先に考える。"
    },
    "seasonal-scenic-spot": {
      title: "桜・紅葉の名所",
      shortDescription: "景色も植物も共有物として扱い、写真スポットは譲り合う。"
    },
    "rental-car": {
      title: "レンタカー",
      shortDescription: "運転前に書類、駐車ルール、返却条件を確認しておく。"
    },
    "service-area": {
      title: "サービスエリア・道の駅",
      shortDescription: "休憩は手早く、駐車はきれいに、使った場所は整えて出る。"
    }
  },
  ko: {
    "airport-arrival": {
      title: "공항에 도착했을 때",
      shortDescription: "도착 직후의 복잡한 동선에서 차분하게 움직이는 방법."
    },
    "immigration-customs": {
      title: "입국심사와 세관",
      shortDescription: "서류를 미리 준비하고 차례대로 안내를 따르는 기본 예절."
    },
    "airport-transfer": {
      title: "공항에서 환승할 때",
      shortDescription: "기차나 버스로 갈아타기 전에 다음 이동을 먼저 정리하는 요령."
    },
    "airport-limousine-bus": {
      title: "공항 리무진버스",
      shortDescription: "정류장과 목적지, 수하물 절차를 차분히 확인하는 방법."
    },
    "local-bus": {
      title: "시내버스",
      shortDescription: "탑승 방식과 결제 방식이 다른 버스에서 헷갈리지 않는 법."
    },
    "night-bus": {
      title: "야간버스",
      shortDescription: "조용함이 특히 중요한 이동에서 지키면 좋은 기본."
    },
    taxi: {
      title: "택시",
      shortDescription: "목적지 전달과 차 안에서의 태도를 간단하게 정리한 가이드."
    },
    "ride-hailing": {
      title: "배차 앱과 택시 승차장",
      shortDescription: "픽업 장소에서 헤매지 않고 줄의 흐름도 막지 않는 방법."
    },
    ferry: {
      title: "페리와 배",
      shortDescription: "통로와 좌석을 함께 쓰는 배 안에서 편하게 움직이는 요령."
    },
    "ropeway-cablecar": {
      title: "로프웨이와 케이블카",
      shortDescription: "좁은 객실에서 전망을 함께 나누며 타는 방법."
    },
    "hotel-checkin": {
      title: "호텔 체크인",
      shortDescription: "예약 정보와 안내를 차분히 확인해 도착 직후를 더 편하게 만드는 방법."
    },
    "hotel-lobby": {
      title: "호텔 로비",
      shortDescription: "공용 대기 공간인 로비를 주변 흐름을 막지 않고 쓰는 요령."
    },
    "hotel-breakfast": {
      title: "호텔 조식",
      shortDescription: "자리 안내와 뷔페 흐름을 보며 편하게 이용하는 기본."
    },
    "hotel-elevator": {
      title: "호텔 엘리베이터",
      shortDescription: "작은 공용 공간에서 자연스럽게 보이는 기본 예절."
    },
    "shared-lounge": {
      title: "공용 라운지와 휴게 공간",
      shortDescription: "조용한 공용 공간을 가볍게 사용하는 방법."
    },
    "coin-laundry": {
      title: "코인세탁실",
      shortDescription: "기계뿐 아니라 시간과 공용 공간도 배려하는 기본."
    },
    "capsule-hotel": {
      title: "캡슐호텔",
      shortDescription: "잠자는 공간 가까이에서 소리와 움직임을 줄이는 요령."
    },
    "hostel-dorm": {
      title: "호스텔과 도미토리",
      shortDescription: "소리와 빛, 짐의 퍼짐을 줄여 공유 침실을 편하게 쓰는 방법."
    },
    "checkout-room": {
      title: "체크아웃 직전 방을 나설 때",
      shortDescription: "잊은 물건과 어지러움을 줄이고 편하게 방을 나오는 기본."
    },
    "luggage-storage": {
      title: "짐 보관과 코인락커",
      shortDescription: "락커 앞 흐름을 막지 않고 빠르게 짐을 맡기는 요령."
    },
    cafe: {
      title: "카페",
      shortDescription: "먼저 흐름을 보고, 그다음 자리에 앉고 머무는 속도를 정해요."
    },
    bakery: {
      title: "베이커리",
      shortDescription: "쟁반과 집게를 쓰고, 진열된 빵은 조심스럽게 다뤄요."
    },
    "fast-food": {
      title: "패스트푸드점",
      shortDescription: "주문은 빠르게, 먹은 뒤엔 정리하고, 자리는 자연스럽게 비워요."
    },
    "food-court": {
      title: "푸드코트",
      shortDescription: "필요한 자리만 쓰고, 셀프서비스 흐름에 맞춰 움직여요."
    },
    izakaya: {
      title: "이자카야",
      shortDescription: "가게 규칙과 특유의 속도를 먼저 보면 훨씬 편해요."
    },
    bar: {
      title: "바",
      shortDescription: "먼저 분위기를 읽고, 목소리 크기와 머무는 리듬을 그 공간에 맞춰요."
    },
    "all-you-can-drink": {
      title: "무제한 음료 플랜",
      shortDescription: "시간 제한, 라스트 오더, 남김 규칙을 먼저 생각하고 주문해요."
    },
    karaoke: {
      title: "가라오케",
      shortDescription: "처음에 시간제와 룸 규칙, 주문 방식을 확인하면 편해요."
    },
    "food-stalls": {
      title: "포장마차·길거리 음식 구역",
      shortDescription: "사람 흐름을 보며 먹는 위치와 쓰레기 처리를 신경 써요."
    },
    "vending-machine": {
      title: "자판기",
      shortDescription: "빠르게 고르고 자리를 비운 뒤, 마신 용기는 알맞게 버려요."
    },
    supermarket: {
      title: "슈퍼마켓",
      shortDescription: "통로 흐름을 보고, 담는 장소도 가게 방식에 맞춰요."
    },
    drugstore: {
      title: "드러그스토어",
      shortDescription: "일반 쇼핑과 설명이 필요한 약을 구분해서 생각해요."
    },
    "department-store": {
      title: "백화점",
      shortDescription: "조금 차분한 속도로 움직이며 매장 분위기에 맞춰요."
    },
    "duty-free": {
      title: "면세 쇼핑",
      shortDescription: "할인보다 절차라고 생각하고 서류를 먼저 챙겨요."
    },
    "fitting-room": {
      title: "피팅룸",
      shortDescription: "매장 규칙을 따르며 옷을 깨끗하게 다뤄요."
    },
    "secondhand-shop": {
      title: "중고·리유즈 숍",
      shortDescription: "잘 보고, 조심히 다루고, 개봉이나 테스트는 먼저 물어봐요."
    },
    "market-shopping-street": {
      title: "시장·상점가",
      shortDescription: "통로를 막지 말고, 가게 앞을 생활과 일의 공간으로 존중해요."
    },
    "shopping-bags-packaging": {
      title: "쇼핑백·포장",
      shortDescription: "봉투와 포장 질문에는 짧게 답하고 계산 흐름을 막지 않아요."
    },
    "delivery-service": {
      title: "택배·배송 서비스",
      shortDescription: "주소를 잘 확인하고, 접수표는 하나씩 차분히 작성해요."
    },
    atm: {
      title: "ATM 이용",
      shortDescription: "조작은 빠르게 마치고, 지갑 정리는 옆으로 비켜서 해요."
    },
    "museum-gallery": {
      title: "박물관·미술관",
      shortDescription: "먼저 규칙을 보고, 조용히, 너무 가까이 가지 않으며 봐요."
    },
    "castle-garden": {
      title: "성·정원·문화재",
      shortDescription: "정해진 길을 따라 천천히 움직이고 경계선은 실제 규칙으로 봐요."
    },
    "observatory-night-view": {
      title: "전망대·야경 명소",
      shortDescription: "좋은 자리는 나눠 쓰고, 사진을 찍으면 다음 사람에게 넘겨요."
    },
    "live-concert": {
      title: "라이브·콘서트·극장",
      shortDescription: "제시간에 들어가고, 공연과 공연장 규칙에 집중해요."
    },
    "sports-event": {
      title: "스포츠 관람",
      shortDescription: "응원은 즐기되, 좌석과 구역, 정리는 함께 지켜요."
    },
    "theme-park": {
      title: "테마파크",
      shortDescription: "줄, 대기 공간, 관람 자리는 모두의 공유 공간으로 써요."
    },
    "festival-fireworks": {
      title: "축제·불꽃놀이",
      shortDescription: "인파 흐름이 빨리 바뀌니 일찍 움직이고 돌아가는 길도 먼저 봐요."
    },
    "seasonal-scenic-spot": {
      title: "벚꽃·단풍 명소",
      shortDescription: "풍경과 식물을 함께 지키고, 사진 자리는 서로 양보해요."
    },
    "rental-car": {
      title: "렌터카",
      shortDescription: "운전 전에 서류, 주차 규칙, 반납 조건을 먼저 확인해요."
    },
    "service-area": {
      title: "휴게소·도로 휴식 시설",
      shortDescription: "잠깐 쉬고, 바르게 주차하고, 사용한 자리는 정리해요."
    }
  },
  "zh-Hant": {
    "airport-arrival": {
      title: "剛到機場時",
      shortDescription: "落地後最忙亂的幾分鐘，怎麼移動會更安心。"
    },
    "immigration-customs": {
      title: "入境審查與海關",
      shortDescription: "先準備文件、照著隊伍走，會順很多。"
    },
    "airport-transfer": {
      title: "機場轉乘",
      shortDescription: "轉電車或巴士前，先確認下一步會更省心。"
    },
    "airport-limousine-bus": {
      title: "機場利木津巴士",
      shortDescription: "上車前先確認月台、目的地和行李流程。"
    },
    "local-bus": {
      title: "路線巴士",
      shortDescription: "不同城市上車和付款方式可能不同，先看再動最安心。"
    },
    "night-bus": {
      title: "夜行巴士",
      shortDescription: "把車內當成安靜的共用休息空間會比較自然。"
    },
    taxi: {
      title: "計程車",
      shortDescription: "清楚出示目的地，讓乘車過程簡單又順利。"
    },
    "ride-hailing": {
      title: "叫車 App 與乘車點",
      shortDescription: "先找對上車點，再安靜等車，不擋到其他人。"
    },
    ferry: {
      title: "渡輪與船",
      shortDescription: "注意通道與共用座位，在船上更從容。"
    },
    "ropeway-cablecar": {
      title: "纜車與空中纜車",
      shortDescription: "上車快一點、看景色時彼此禮讓會更舒服。"
    },
    "hotel-checkin": {
      title: "飯店辦理入住",
      shortDescription: "先準備好訂房資訊和證件，入住會順很多。"
    },
    "hotel-lobby": {
      title: "飯店大廳",
      shortDescription: "把大廳當成共用等待空間，而不是自己的臨時基地。"
    },
    "hotel-breakfast": {
      title: "飯店早餐",
      shortDescription: "照著座位和取餐動線走，大家都會更舒服。"
    },
    "hotel-elevator": {
      title: "飯店電梯",
      shortDescription: "在小小的共用空間裡，自然又不打擾別人的基本做法。"
    },
    "shared-lounge": {
      title: "共用休息室",
      shortDescription: "輕鬆使用共用空間，同時保留別人的舒適感。"
    },
    "coin-laundry": {
      title: "投幣洗衣店",
      shortDescription: "不只看機器，還要顧到時間和共用檯面。"
    },
    "capsule-hotel": {
      title: "膠囊旅館",
      shortDescription: "在睡眠區附近把聲音和動作都放輕，會自在很多。"
    },
    "hostel-dorm": {
      title: "青年旅館與多人房",
      shortDescription: "控制聲音、燈光和行李範圍，讓共用房間更舒服。"
    },
    "checkout-room": {
      title: "退房前離開房間時",
      shortDescription: "避免忘東忘西，也讓房間保持基本整齊。"
    },
    "luggage-storage": {
      title: "行李寄放與置物櫃",
      shortDescription: "快速寄放行李，同時不要堵住置物櫃區域。"
    },
    cafe: {
      title: "咖啡店",
      shortDescription: "先看店裡的流程，再決定座位和停留節奏。"
    },
    bakery: {
      title: "麵包店",
      shortDescription: "用托盤和夾子，對展示中的麵包輕一點。"
    },
    "fast-food": {
      title: "速食店",
      shortDescription: "點餐俐落、吃完整理，讓座位自然流動。"
    },
    "food-court": {
      title: "美食街",
      shortDescription: "只用需要的座位，照著自助節奏走就好。"
    },
    izakaya: {
      title: "居酒屋",
      shortDescription: "先看店規和節奏，通常會輕鬆很多。"
    },
    bar: {
      title: "酒吧",
      shortDescription: "先讀空氣，再調整音量和聊天節奏。"
    },
    "all-you-can-drink": {
      title: "喝到飽方案",
      shortDescription: "先注意時間限制、最後點單和不要浪費。"
    },
    karaoke: {
      title: "卡拉 OK",
      shortDescription: "一開始先確認時間方案、包廂規則和點餐方式。"
    },
    "food-stalls": {
      title: "屋台與邊走邊吃區域",
      shortDescription: "跟著人流走，注意在哪裡吃和垃圾怎麼處理。"
    },
    "vending-machine": {
      title: "自動販賣機",
      shortDescription: "快速買完就讓開，喝完的容器再正確回收。"
    },
    supermarket: {
      title: "超市",
      shortDescription: "順著通道流動，裝袋也照店裡的方式來。"
    },
    drugstore: {
      title: "藥妝店",
      shortDescription: "把一般購物和需要說明的藥品分開看待。"
    },
    "department-store": {
      title: "百貨公司",
      shortDescription: "步調放慢一點，順著賣場的氣氛行動。"
    },
    "duty-free": {
      title: "免稅購物",
      shortDescription: "先把它當成一套流程，而不只是折扣。"
    },
    "fitting-room": {
      title: "試衣間",
      shortDescription: "照店規使用，也幫忙保持衣服乾淨。"
    },
    "secondhand-shop": {
      title: "二手與再利用商店",
      shortDescription: "看仔細、拿輕一點，開封或測試前先問。"
    },
    "market-shopping-street": {
      title: "市場與商店街",
      shortDescription: "邊走邊看，也要把店門口當成工作空間來尊重。"
    },
    "shopping-bags-packaging": {
      title: "購物袋與包裝",
      shortDescription: "聽到袋子或包裝問題時，簡短回答就好。"
    },
    "delivery-service": {
      title: "宅配與寄送服務",
      shortDescription: "地址先核對清楚，再一步一步填單。"
    },
    atm: {
      title: "使用 ATM",
      shortDescription: "操作俐落完成，整理錢包再移到旁邊。"
    },
    "museum-gallery": {
      title: "博物館與美術館",
      shortDescription: "先看規則，安靜欣賞，也別預設一定能拍照。"
    },
    "castle-garden": {
      title: "城、庭園與歷史古蹟",
      shortDescription: "慢慢走在路線上，把界線真的當成界線。"
    },
    "observatory-night-view": {
      title: "展望台與夜景景點",
      shortDescription: "好位置輪流用，拍完就讓下一個人上來。"
    },
    "live-concert": {
      title: "演唱會、現場表演與劇場",
      shortDescription: "準時入場，跟著場館規則，把注意力留給演出。"
    },
    "sports-event": {
      title: "看運動比賽",
      shortDescription: "可以熱情，但也要守住座位、分區和離場整理。"
    },
    "theme-park": {
      title: "主題樂園",
      shortDescription: "排隊、等候區和觀賞位置都當成共享空間來用。"
    },
    "festival-fireworks": {
      title: "祭典與煙火大會",
      shortDescription: "人潮變化很快，提早移動也提早想好怎麼離開。"
    },
    "seasonal-scenic-spot": {
      title: "櫻花與紅葉名所",
      shortDescription: "景色和植物都要一起珍惜，拍照點也要慢慢分享。"
    },
    "rental-car": {
      title: "租車",
      shortDescription: "上路前先確認文件、停車規則和還車條件。"
    },
    "service-area": {
      title: "服務區與道路休息站",
      shortDescription: "短暫休息、停車整齊，用完後把共享空間恢復乾淨。"
    }
  },
  "zh-Hans": {
    "airport-arrival": {
      title: "刚到机场时",
      shortDescription: "落地后最忙的几分钟里，怎么走会更从容。"
    },
    "immigration-customs": {
      title: "入境审查和海关",
      shortDescription: "提前准备证件，按队伍安静前进会更顺利。"
    },
    "airport-transfer": {
      title: "机场换乘",
      shortDescription: "去坐电车或巴士前，先确认下一步会更省心。"
    },
    "airport-limousine-bus": {
      title: "机场利木津巴士",
      shortDescription: "上车前先看清站台、目的地和行李流程。"
    },
    "local-bus": {
      title: "路线巴士",
      shortDescription: "不同城市的上车和付款方式可能不同，先观察最稳妥。"
    },
    "night-bus": {
      title: "夜行巴士",
      shortDescription: "把车内当成安静的共享休息空间会更自然。"
    },
    taxi: {
      title: "出租车",
      shortDescription: "把目的地说清楚或出示清楚，乘车会顺很多。"
    },
    "ride-hailing": {
      title: "叫车 App 和上车点",
      shortDescription: "先找到正确的上车点，再安静等车，不挡到别人。"
    },
    ferry: {
      title: "渡轮和船",
      shortDescription: "注意通道和共用座位，在船上会更轻松。"
    },
    "ropeway-cablecar": {
      title: "索道和缆车",
      shortDescription: "上车快一点、看风景时互相礼让会更舒服。"
    },
    "hotel-checkin": {
      title: "酒店办理入住",
      shortDescription: "先准备好预订信息和证件，入住会顺很多。"
    },
    "hotel-lobby": {
      title: "酒店大堂",
      shortDescription: "把大堂当成共享等候空间，而不是自己的临时基地。"
    },
    "hotel-breakfast": {
      title: "酒店早餐",
      shortDescription: "跟着入座和取餐动线走，大家都会更舒服。"
    },
    "hotel-elevator": {
      title: "酒店电梯",
      shortDescription: "在小小的共享空间里，自然又不打扰别人的基本做法。"
    },
    "shared-lounge": {
      title: "共享休息区",
      shortDescription: "轻松使用共享空间，同时保留别人的舒适感。"
    },
    "coin-laundry": {
      title: "投币洗衣房",
      shortDescription: "不只看机器，也要顾到时间和共享台面。"
    },
    "capsule-hotel": {
      title: "胶囊旅馆",
      shortDescription: "在睡眠区附近把声音和动作都放轻，会舒服很多。"
    },
    "hostel-dorm": {
      title: "青年旅馆与多人房",
      shortDescription: "控制声音、灯光和行李范围，让共享房间更舒服。"
    },
    "checkout-room": {
      title: "退房前离开房间时",
      shortDescription: "减少遗漏物品，也让房间保持基本整齐。"
    },
    "luggage-storage": {
      title: "行李寄存和投币柜",
      shortDescription: "快速寄放行李，同时不要堵住柜子区域。"
    },
    cafe: {
      title: "咖啡店",
      shortDescription: "先看店里的流程，再决定座位和停留节奏。"
    },
    bakery: {
      title: "面包店",
      shortDescription: "用托盘和夹子，对展示中的面包轻一点。"
    },
    "fast-food": {
      title: "快餐店",
      shortDescription: "点餐利落、吃完整理，让座位自然周转。"
    },
    "food-court": {
      title: "美食广场",
      shortDescription: "只用需要的座位，照着自助节奏走就好。"
    },
    izakaya: {
      title: "居酒屋",
      shortDescription: "先看店规和节奏，通常会轻松很多。"
    },
    bar: {
      title: "酒吧",
      shortDescription: "先看气氛，再调整音量和聊天节奏。"
    },
    "all-you-can-drink": {
      title: "畅饮套餐",
      shortDescription: "先注意时间限制、最后点单和不要浪费。"
    },
    karaoke: {
      title: "卡拉 OK",
      shortDescription: "一开始先确认时间方案、包厢规则和点餐方式。"
    },
    "food-stalls": {
      title: "摊位与边走边吃区域",
      shortDescription: "跟着人流走，注意在哪里吃和垃圾怎么处理。"
    },
    "vending-machine": {
      title: "自动售货机",
      shortDescription: "快速买完就让开，喝完的容器再正确回收。"
    },
    supermarket: {
      title: "超市",
      shortDescription: "顺着通道流动，装袋也照店里的方式来。"
    },
    drugstore: {
      title: "药妆店",
      shortDescription: "把普通购物和需要说明的药品分开看待。"
    },
    "department-store": {
      title: "百货公司",
      shortDescription: "步调放慢一点，顺着卖场的气氛行动。"
    },
    "duty-free": {
      title: "免税购物",
      shortDescription: "先把它当成一套流程，而不只是折扣。"
    },
    "fitting-room": {
      title: "试衣间",
      shortDescription: "照店规使用，也帮忙保持衣服干净。"
    },
    "secondhand-shop": {
      title: "二手与再利用商店",
      shortDescription: "看仔细、拿轻一点，开封或测试前先问。"
    },
    "market-shopping-street": {
      title: "市场与商店街",
      shortDescription: "边走边看，也要把店门口当成工作空间来尊重。"
    },
    "shopping-bags-packaging": {
      title: "购物袋与包装",
      shortDescription: "听到袋子或包装问题时，简短回答就好。"
    },
    "delivery-service": {
      title: "宅配与寄送服务",
      shortDescription: "地址先核对清楚，再一步一步填单。"
    },
    atm: {
      title: "使用 ATM",
      shortDescription: "操作利落完成，整理钱包再移到旁边。"
    },
    "museum-gallery": {
      title: "博物馆与美术馆",
      shortDescription: "先看规则，安静欣赏，也别默认一定能拍照。"
    },
    "castle-garden": {
      title: "城、庭园与历史古迹",
      shortDescription: "慢慢走在路线内，把界线真的当成界线。"
    },
    "observatory-night-view": {
      title: "展望台与夜景景点",
      shortDescription: "好位置轮流用，拍完就让下一位上来。"
    },
    "live-concert": {
      title: "演唱会、现场表演与剧场",
      shortDescription: "准时入场，跟着场馆规则，把注意力留给演出。"
    },
    "sports-event": {
      title: "看体育比赛",
      shortDescription: "可以热情，但也要守住座位、分区和离场整理。"
    },
    "theme-park": {
      title: "主题乐园",
      shortDescription: "排队、等候区和观赏位置都当成共享空间来用。"
    },
    "festival-fireworks": {
      title: "祭典与烟花大会",
      shortDescription: "人潮变化很快，提早移动也提早想好怎么离开。"
    },
    "seasonal-scenic-spot": {
      title: "樱花与红叶名所",
      shortDescription: "景色和植物都要一起珍惜，拍照点也要慢慢分享。"
    },
    "rental-car": {
      title: "租车",
      shortDescription: "上路前先确认文件、停车规则和还车条件。"
    },
    "service-area": {
      title: "服务区与道路休息站",
      shortDescription: "短暂休息、停车整齐，用完后把共享空间恢复干净。"
    }
  },
  th: {
    "airport-arrival": { title: "เมื่อมาถึงสนามบิน", shortDescription: "ตั้งสติ ดูป้ายให้ชัด และเดินไปตามจังหวะของผู้คนรอบตัว" },
    "immigration-customs": { title: "ด่านตรวจคนเข้าเมืองและศุลกากร", shortDescription: "เตรียมเอกสารให้พร้อม ต่อแถว และรอฟังคำแนะนำอย่างใจเย็น" },
    "airport-transfer": { title: "ต่อรถจากสนามบิน", shortDescription: "เช็กเส้นทางก่อน แล้วค่อยเดินไปยังจุดขึ้นรถอย่างมั่นใจ" },
    "airport-limousine-bus": { title: "รถบัสลีมูซีนสนามบิน", shortDescription: "มาถึงก่อนเวลาเล็กน้อย เช็กจุดหมาย และทำตามขั้นตอนเรื่องกระเป๋า" },
    "local-bus": { title: "รถบัสท้องถิ่น", shortDescription: "สังเกตวิธีขึ้นรถและจ่ายเงินก่อน แล้วค่อยขยับตาม" },
    "night-bus": { title: "รถบัสกลางคืน", shortDescription: "มองว่าเป็นพื้นที่สำหรับพักผ่อนร่วมกัน ไม่ใช่พื้นที่พูดคุยเสียงดัง" },
    taxi: { title: "แท็กซี่", shortDescription: "แสดงปลายทางให้ชัด และทำให้การเดินทางเรียบง่าย" },
    "ride-hailing": { title: "จุดรับรถจากแอปเรียกรถ", shortDescription: "หาให้เจอว่าต้องขึ้นตรงไหนก่อน แล้วค่อยรอโดยไม่กีดขวางคนอื่น" },
    ferry: { title: "เรือเฟอร์รีและเรือโดยสาร", shortDescription: "เดินอย่างระวัง เก็บของให้เป็นระเบียบ และเคารพพื้นที่ส่วนรวม" },
    "ropeway-cablecar": { title: "กระเช้าลอยฟ้าและเคเบิลคาร์", shortDescription: "ขึ้นให้รวดเร็ว แบ่งวิวกันดู และอย่ายืนบังจุดดีที่สุดนานเกินไป" },
    "hotel-checkin": { title: "เช็กอินโรงแรม", shortDescription: "เตรียมข้อมูลการจองไว้ และฟังคำอธิบายจากโรงแรมให้ครบ" },
    "hotel-lobby": { title: "ล็อบบี้โรงแรม", shortDescription: "ใช้เป็นพื้นที่รอร่วมกัน ไม่ใช่มุมส่วนตัวสำหรับตั้งหลักนาน ๆ" },
    "hotel-breakfast": { title: "อาหารเช้าโรงแรม", shortDescription: "ตามจังหวะการนั่งและการตักอาหารอย่างพอดี พร้อมรักษาแถวให้ลื่นไหล" },
    "hotel-elevator": { title: "ลิฟต์โรงแรม", shortDescription: "ให้คนออกก่อน และใช้พื้นที่เงียบ ๆ ในช่วงเวลาสั้น ๆ" },
    "shared-lounge": { title: "เลานจ์และพื้นที่พักผ่อนร่วม", shortDescription: "ใช้อย่างพอดี และปรับตัวตามบรรยากาศที่เงียบที่สุดในห้อง" },
    "coin-laundry": { title: "ร้านซักผ้าหยอดเหรียญ", shortDescription: "ใช้เครื่องอย่างมีประสิทธิภาพ และกลับมารับผ้าตรงเวลา" },
    "capsule-hotel": { title: "โรงแรมแคปซูล", shortDescription: "คิดถึงความเงียบ ความกะทัดรัด และความเกรงใจในโซนนอน" },
    "hostel-dorm": { title: "โฮสเทลและห้องพักรวม", shortDescription: "ห้องรวมจะสบายขึ้นมากเมื่อทุกคนลดเสียง แสง และความรก" },
    "checkout-room": { title: "ออกจากห้องก่อนเช็กเอาต์", shortDescription: "เก็บห้องให้เรียบร้อยพอสมควร และออกตรงเวลา" },
    "luggage-storage": { title: "ฝากกระเป๋าและตู้ล็อกเกอร์", shortDescription: "เลือกขนาดให้ไว และจัดของต่อในจุดที่ไม่กีดขวางคนอื่น" },
    cafe: { title: "คาเฟ่", shortDescription: "ดูจังหวะของร้านก่อน แล้วค่อยเลือกที่นั่งและเวลานั่ง" },
    bakery: { title: "ร้านเบเกอรี", shortDescription: "ใช้ถาดและคีบอย่างเบามือ พร้อมขยับไปตามแนวร้าน" },
    "fast-food": { title: "ร้านฟาสต์ฟู้ด", shortDescription: "สั่งให้ไว เก็บโต๊ะหลังทาน และช่วยให้ที่นั่งหมุนเวียน" },
    "food-court": { title: "ฟู้ดคอร์ต", shortDescription: "แบ่งที่นั่งกันอย่างพอดี และทำตามจังหวะบริการตนเอง" },
    izakaya: { title: "อิซากายะ", shortDescription: "คาดไว้ก่อนว่าร้านอาจมีกติกา จังหวะ และธรรมเนียมเฉพาะตัว" },
    bar: { title: "บาร์", shortDescription: "อ่านบรรยากาศก่อน แล้วค่อยปรับเสียงและจังหวะของตัวเองให้เข้ากับร้าน" },
    "all-you-can-drink": { title: "แพ็กเกจดื่มไม่อั้น", shortDescription: "แม้จะไม่อั้น ก็ยังมีเวลา จำกัดการสั่ง และเรื่องการเหลือทิ้ง" },
    karaoke: { title: "คาราโอเกะ", shortDescription: "เช็กเวลาใช้ห้อง กติกา และวิธีสั่งอาหารตั้งแต่ต้น" },
    "food-stalls": { title: "ร้านแผงลอยและโซนสตรีทฟู้ด", shortDescription: "เดินตามทาง หาที่เหมาะสำหรับกิน และจัดการขยะให้ดี" },
    "vending-machine": { title: "ตู้ขายเครื่องดื่มอัตโนมัติ", shortDescription: "ซื้อให้ไว หลบออกมาด้านข้าง และทิ้งภาชนะในจุดที่ถูกต้องภายหลัง" },
    supermarket: { title: "ซูเปอร์มาร์เก็ต", shortDescription: "เดินตามจังหวะของทางเดิน และแพ็กของในจุดที่ร้านเตรียมไว้" },
    drugstore: { title: "ร้านยาและดรักสโตร์", shortDescription: "แยกให้ออกว่าอะไรเป็นของใช้ทั่วไป และอะไรควรถามพนักงานก่อน" },
    "department-store": { title: "ห้างสรรพสินค้า", shortDescription: "เดินอย่างสงบ จับสินค้าอย่างระวัง และปรับตามบรรยากาศของชั้นนั้น" },
    "duty-free": { title: "ช็อปปลอดภาษี", shortDescription: "เตรียมเอกสารให้พร้อม และเข้าใจว่าเป็นขั้นตอน ไม่ใช่แค่ส่วนลด" },
    "fitting-room": { title: "ห้องลองเสื้อผ้า", shortDescription: "รอคิว ทำตามกติกาของร้าน และช่วยกันรักษาความสะอาดของเสื้อผ้า" },
    "secondhand-shop": { title: "ร้านของมือสองและรียูส", shortDescription: "ดูอย่างตั้งใจ จับอย่างเบา และถามก่อนเปิดหรือทดลองสินค้า" },
    "market-shopping-street": { title: "ตลาดและถนนช้อปปิ้ง", shortDescription: "เดินต่อไปเรื่อย ๆ เว้นทางให้คนท้องถิ่น และเคารพหน้าร้านที่ยังทำงานอยู่" },
    "shopping-bags-packaging": { title: "ถุงและการห่อสินค้า", shortDescription: "ฟังคำถามเรื่องถุงให้ดี แล้วตอบสั้น ๆ เพื่อให้แถวเดินต่อได้" },
    "delivery-service": { title: "บริการส่งของ", shortDescription: "ตรวจที่อยู่ให้รอบคอบ และกรอกฟอร์มไปทีละขั้น" },
    atm: { title: "การใช้ตู้ ATM", shortDescription: "ทำธุรกรรมให้กระชับ แล้วค่อยหลบไปจัดกระเป๋าเงินของตัวเอง" },
    "museum-gallery": { title: "พิพิธภัณฑ์และแกลเลอรี", shortDescription: "อ่านบรรยากาศให้เป็น พูดเบา ๆ และอย่าคิดว่าถ่ายรูปหรือแตะต้องได้เสมอ" },
    "castle-garden": { title: "ปราสาท สวน และแหล่งประวัติศาสตร์", shortDescription: "เดินช้า ๆ อยู่ในเส้นทางที่กำหนด และมองรั้วกั้นว่าเป็นขอบเขตจริง" },
    "observatory-night-view": { title: "จุดชมวิวและวิวกลางคืน", shortDescription: "ใช้จุดมุมดีทีละคน แล้วขยับให้คนถัดไปได้ชมบ้าง" },
    "live-concert": { title: "คอนเสิร์ต การแสดงสด และโรงละคร", shortDescription: "ไปให้ตรงเวลา ทำตามกติกาสถานที่ และโฟกัสกับการแสดง" },
    "sports-event": { title: "การชมกีฬา", shortDescription: "เชียร์ได้เต็มที่ แต่ยังต้องเคารพที่นั่ง โซน และการเก็บพื้นที่หลังจบ" },
    "theme-park": { title: "สวนสนุก", shortDescription: "มองคิว จุดรอ และจุดชมขบวนเป็นพื้นที่ร่วมกันของทุกคน" },
    "festival-fireworks": { title: "งานเทศกาลและดอกไม้ไฟ", shortDescription: "ฝูงชนเปลี่ยนเร็ว ควรขยับแต่เนิ่น ๆ และรู้ทิศทางการไหลของคน" },
    "seasonal-scenic-spot": { title: "จุดชมซากุระและใบไม้เปลี่ยนสี", shortDescription: "ชมธรรมชาติอย่างเบามือ และแบ่งจุดถ่ายรูปที่คนแน่นอย่างอดทน" },
    "rental-car": { title: "รถเช่า", shortDescription: "เช็กเอกสาร กฎที่จอดรถ และเงื่อนไขคืนรถก่อนออกขับ" },
    "service-area": { title: "จุดพักรถและมิจิโนะเอกิ", shortDescription: "ใช้จุดพักอย่างมีประสิทธิภาพ จอดให้เรียบร้อย และรักษาพื้นที่ร่วมกันให้สะอาด" }
  },
  fr: {
    "airport-arrival": { title: "À l’arrivée à l’aéroport", shortDescription: "Prenez un instant pour lire les panneaux et avancer avec le flux." },
    "immigration-customs": { title: "Immigration et douane", shortDescription: "Préparez vos documents, restez dans la file et attendez calmement." },
    "airport-transfer": { title: "Correspondances depuis l’aéroport", shortDescription: "Vérifiez d’abord votre trajet, puis avancez sans hésiter." },
    "airport-limousine-bus": { title: "Bus limousine d’aéroport", shortDescription: "Arrivez un peu en avance, vérifiez l’arrêt et suivez la procédure bagages." },
    "local-bus": { title: "Bus locaux", shortDescription: "Observez comment on monte et paie avant de bouger." },
    "night-bus": { title: "Bus de nuit", shortDescription: "Considérez-le comme un espace de repos partagé, pas comme un lieu social." },
    taxi: { title: "Taxis", shortDescription: "Montrez clairement la destination et gardez le trajet simple." },
    "ride-hailing": { title: "Prise en charge via appli", shortDescription: "Trouvez d’abord le bon point de rendez-vous, puis attendez sans gêner." },
    ferry: { title: "Ferries et bateaux", shortDescription: "Déplacez-vous avec soin, rangez vos affaires et respectez l’espace commun." },
    "ropeway-cablecar": { title: "Téléphériques et funiculaires", shortDescription: "Montez vite, partagez la vue et ne monopolisez pas la meilleure place." },
    "hotel-checkin": { title: "Enregistrement à l’hôtel", shortDescription: "Ayez la réservation prête et écoutez les explications de l’hôtel." },
    "hotel-lobby": { title: "Hall d’hôtel", shortDescription: "Utilisez le hall comme espace d’attente partagé, pas comme base personnelle." },
    "hotel-breakfast": { title: "Petit-déjeuner à l’hôtel", shortDescription: "Suivez le placement, servez-vous légèrement et gardez la file fluide." },
    "hotel-elevator": { title: "Ascenseurs d’hôtel", shortDescription: "Laissez sortir d’abord les autres et gardez l’espace calme." },
    "shared-lounge": { title: "Salons et espaces communs", shortDescription: "Occupez l’espace légèrement et adaptez-vous au ton le plus calme." },
    "coin-laundry": { title: "Laveries automatiques", shortDescription: "Utilisez les machines efficacement et revenez chercher le linge à temps." },
    "capsule-hotel": { title: "Hôtels capsule", shortDescription: "Pensez silence, compacité et attention dans la zone de couchage." },
    "hostel-dorm": { title: "Auberges et dortoirs", shortDescription: "Une chambre partagée fonctionne mieux quand chacun réduit bruit et désordre." },
    "checkout-room": { title: "Quitter la chambre au départ", shortDescription: "Laissez la chambre raisonnablement rangée et partez à l’heure." },
    "luggage-storage": { title: "Consignes et bagagerie", shortDescription: "Choisissez vite le bon espace et triez vos affaires à côté, pas devant." },
    cafe: { title: "Cafés", shortDescription: "Regardez d’abord le fonctionnement, puis choisissez votre place et votre rythme." },
    bakery: { title: "Boulangeries", shortDescription: "Utilisez le plateau et la pince, et manipulez les produits avec soin." },
    "fast-food": { title: "Fast-food", shortDescription: "Commandez efficacement, débarrassez votre table et libérez les places." },
    "food-court": { title: "Food courts", shortDescription: "Partagez les places équitablement et suivez le rythme du self-service." },
    izakaya: { title: "Izakaya", shortDescription: "Attendez-vous à des règles maison, un autre rythme et quelques usages locaux." },
    bar: { title: "Bars", shortDescription: "Lisez d’abord l’ambiance, puis adaptez votre voix et votre rythme." },
    "all-you-can-drink": { title: "Formules boissons à volonté", shortDescription: "Même à volonté, il y a des limites de temps, de commande et de gaspillage." },
    karaoke: { title: "Karaoké", shortDescription: "Vérifiez dès le début le temps, les règles de salle et la commande." },
    "food-stalls": { title: "Stands de rue et street food", shortDescription: "Suivez le flux, mangez au bon endroit et gérez vos déchets." },
    "vending-machine": { title: "Distributeurs automatiques", shortDescription: "Achetez vite, écartez-vous ensuite et recyclez correctement plus tard." },
    supermarket: { title: "Supermarchés", shortDescription: "Suivez le flux des rayons puis emballez vos achats à l’endroit prévu." },
    drugstore: { title: "Drugstores et pharmacies", shortDescription: "Distinguez les articles simples des produits qui demandent un conseil." },
    "department-store": { title: "Grands magasins", shortDescription: "Avancez calmement, manipulez les présentations avec soin et lisez l’ambiance." },
    "duty-free": { title: "Achats détaxés", shortDescription: "Apportez les bons documents et prévoyez une vraie procédure." },
    "fitting-room": { title: "Cabines d’essayage", shortDescription: "Attendez votre tour, suivez les règles du magasin et gardez les vêtements propres." },
    "secondhand-shop": { title: "Boutiques de seconde main", shortDescription: "Examinez de près, manipulez doucement et demandez avant d’ouvrir ou tester." },
    "market-shopping-street": { title: "Marchés et rues commerçantes", shortDescription: "Continuez d’avancer, laissez la place aux habitants et respectez les devantures." },
    "shopping-bags-packaging": { title: "Sacs et emballage", shortDescription: "Écoutez la question sur le sac et répondez brièvement pour faire avancer la caisse." },
    "delivery-service": { title: "Services de livraison", shortDescription: "Vérifiez soigneusement l’adresse et remplissez le formulaire pas à pas." },
    atm: { title: "Utiliser un distributeur", shortDescription: "Faites l’opération rapidement puis écartez-vous avant de ranger votre portefeuille." },
    "museum-gallery": { title: "Musées et galeries", shortDescription: "Lisez l’ambiance, gardez le silence et partez du principe que tout n’est pas permis." },
    "castle-garden": { title: "Châteaux, jardins et sites historiques", shortDescription: "Marchez lentement, restez sur le parcours et respectez réellement les barrières." },
    "observatory-night-view": { title: "Observatoires et vues de nuit", shortDescription: "Profitez du meilleur point à tour de rôle puis laissez la place." },
    "live-concert": { title: "Concerts, spectacles et théâtres", shortDescription: "Arrivez à l’heure, respectez les règles du lieu et concentrez-vous sur le spectacle." },
    "sports-event": { title: "Événements sportifs", shortDescription: "Profitez de l’ambiance tout en respectant les sièges, les sections et le rangement." },
    "theme-park": { title: "Parcs à thème", shortDescription: "Considérez files, zones d’attente et points de vue comme des espaces partagés." },
    "festival-fireworks": { title: "Festivals et feux d’artifice", shortDescription: "Les foules changent vite, donc bougez tôt et gardez le sens du flux." },
    "seasonal-scenic-spot": { title: "Cerisiers et feuillages d’automne", shortDescription: "Profitez du paysage avec douceur et partagez patiemment les endroits photo." },
    "rental-car": { title: "Voitures de location", shortDescription: "Vérifiez documents, règles de stationnement et conditions de retour avant de partir." },
    "service-area": { title: "Aires de service et stations routières", shortDescription: "Utilisez l’arrêt efficacement, garez-vous proprement et laissez les lieux nets." }
  },
  es: {
    "airport-arrival": { title: "Al llegar al aeropuerto", shortDescription: "Tómate un momento para leer las señales y avanzar con el flujo." },
    "immigration-customs": { title: "Inmigración y aduana", shortDescription: "Ten los documentos listos, sigue la fila y espera con calma." },
    "airport-transfer": { title: "Traslado desde el aeropuerto", shortDescription: "Revisa primero la ruta y luego muévete con seguridad." },
    "airport-limousine-bus": { title: "Autobús limousine del aeropuerto", shortDescription: "Llega un poco antes, confirma la parada y sigue el proceso del equipaje." },
    "local-bus": { title: "Autobuses locales", shortDescription: "Mira primero cómo se sube y se paga antes de moverte." },
    "night-bus": { title: "Autobuses nocturnos", shortDescription: "Piénsalo como un espacio compartido para dormir, no para socializar." },
    taxi: { title: "Taxis", shortDescription: "Muestra el destino con claridad y mantén el viaje simple." },
    "ride-hailing": { title: "Puntos de recogida por app", shortDescription: "Ubica primero el punto correcto y espera sin bloquear a nadie." },
    ferry: { title: "Ferris y barcos", shortDescription: "Muévete con cuidado, mantén tus cosas ordenadas y respeta el espacio común." },
    "ropeway-cablecar": { title: "Teleféricos y funiculares", shortDescription: "Sube rápido, comparte la vista y no ocupes demasiado tiempo el mejor lugar." },
    "hotel-checkin": { title: "Check-in del hotel", shortDescription: "Ten la reserva a mano y escucha bien la explicación del hotel." },
    "hotel-lobby": { title: "Lobby del hotel", shortDescription: "Úsalo como zona de espera compartida, no como base personal." },
    "hotel-breakfast": { title: "Desayuno del hotel", shortDescription: "Sigue el flujo de mesas, sírvete con moderación y mantén la fila en movimiento." },
    "hotel-elevator": { title: "Ascensores del hotel", shortDescription: "Deja salir primero a los demás y mantén el espacio tranquilo." },
    "shared-lounge": { title: "Salones y zonas comunes", shortDescription: "Usa el espacio con ligereza y sigue el tono más tranquilo del lugar." },
    "coin-laundry": { title: "Lavanderías automáticas", shortDescription: "Usa las máquinas con eficiencia y recoge la ropa a tiempo." },
    "capsule-hotel": { title: "Hoteles cápsula", shortDescription: "Piensa en silencio, orden y consideración dentro de la zona de descanso." },
    "hostel-dorm": { title: "Hostales y dormitorios compartidos", shortDescription: "Las habitaciones compartidas funcionan mejor cuando todos reducen ruido y desorden." },
    "checkout-room": { title: "Salir de la habitación al hacer check-out", shortDescription: "Deja la habitación razonablemente ordenada y sal a tiempo." },
    "luggage-storage": { title: "Consignas y taquillas", shortDescription: "Elige rápido el espacio adecuado y organiza tus cosas fuera de la fila." },
    cafe: { title: "Cafeterías", shortDescription: "Mira primero cómo funciona el local y luego elige tu mesa y tu ritmo." },
    bakery: { title: "Panaderías", shortDescription: "Usa la bandeja y las pinzas, y trata el pan expuesto con cuidado." },
    "fast-food": { title: "Comida rápida", shortDescription: "Pide con agilidad, recoge tu mesa y ayuda a que los asientos roten." },
    "food-court": { title: "Patios de comida", shortDescription: "Comparte los asientos con justicia y sigue el ritmo del autoservicio." },
    izakaya: { title: "Izakaya", shortDescription: "Espera reglas de la casa, otro ritmo y algunas costumbres locales." },
    bar: { title: "Bares", shortDescription: "Lee primero el ambiente y adapta tu voz y tu ritmo al lugar." },
    "all-you-can-drink": { title: "Planes de bebida libre", shortDescription: "Aunque sea libre, sigue habiendo tiempo límite, última ronda y reglas contra el desperdicio." },
    karaoke: { title: "Karaoke", shortDescription: "Confirma desde el principio el tiempo, las reglas de la sala y el sistema de pedidos." },
    "food-stalls": { title: "Puestos callejeros y zonas para comer", shortDescription: "Sigue el flujo, come donde tenga sentido y gestiona tu basura con cuidado." },
    "vending-machine": { title: "Máquinas expendedoras", shortDescription: "Compra rápido, hazte a un lado y recicla el envase correctamente después." },
    supermarket: { title: "Supermercados", shortDescription: "Sigue el flujo del pasillo y embolsa tus compras donde corresponde." },
    drugstore: { title: "Droguerías y farmacias", shortDescription: "Distingue qué es compra sencilla y qué conviene consultar con el personal." },
    "department-store": { title: "Grandes almacenes", shortDescription: "Muévete con calma, toca los productos con cuidado y lee el ambiente." },
    "duty-free": { title: "Compras libres de impuestos", shortDescription: "Lleva los documentos correctos y piensa en ello como un trámite, no solo un descuento." },
    "fitting-room": { title: "Probadores", shortDescription: "Espera tu turno, sigue las reglas de la tienda y ayuda a mantener la ropa limpia." },
    "secondhand-shop": { title: "Tiendas de segunda mano", shortDescription: "Mira bien, toca con suavidad y pregunta antes de abrir o probar algo." },
    "market-shopping-street": { title: "Mercados y calles comerciales", shortDescription: "Sigue avanzando, deja espacio a la gente local y respeta las entradas de las tiendas." },
    "shopping-bags-packaging": { title: "Bolsas y empaquetado", shortDescription: "Escucha la pregunta sobre la bolsa y responde de forma breve para no frenar la caja." },
    "delivery-service": { title: "Servicios de entrega", shortDescription: "Revisa bien la dirección y completa el formulario paso a paso." },
    atm: { title: "Usar un cajero automático", shortDescription: "Haz la operación con rapidez y luego apártate para ordenar tu cartera." },
    "museum-gallery": { title: "Museos y galerías", shortDescription: "Lee el ambiente, habla bajo y no des por hecho que se puede tocar o fotografiar." },
    "castle-garden": { title: "Castillos, jardines y sitios históricos", shortDescription: "Camina despacio, sigue la ruta marcada y respeta de verdad las barreras." },
    "observatory-night-view": { title: "Miradores y vistas nocturnas", shortDescription: "Disfruta el mejor punto por turnos y luego deja espacio a los demás." },
    "live-concert": { title: "Conciertos, espectáculos y teatros", shortDescription: "Llega a tiempo, sigue las reglas del lugar y céntrate en la actuación." },
    "sports-event": { title: "Eventos deportivos", shortDescription: "Disfruta del ambiente, pero respeta asientos, secciones y la limpieza al salir." },
    "theme-park": { title: "Parques temáticos", shortDescription: "Piensa en las filas, zonas de espera y puntos de vista como espacios compartidos." },
    "festival-fireworks": { title: "Festivales y fuegos artificiales", shortDescription: "Las multitudes cambian rápido, así que conviene moverse pronto y leer el flujo." },
    "seasonal-scenic-spot": { title: "Lugares para ver sakura y hojas de otoño", shortDescription: "Disfruta del paisaje con cuidado y comparte con paciencia los puntos de foto." },
    "rental-car": { title: "Coches de alquiler", shortDescription: "Revisa documentos, normas de aparcamiento y condiciones de devolución antes de conducir." },
    "service-area": { title: "Áreas de servicio y paradas en carretera", shortDescription: "Aprovecha la parada con eficiencia, aparca bien y deja limpio el espacio compartido." }
  },
  vi: {
    "airport-arrival": { title: "Khi vừa đến sân bay", shortDescription: "Dành chút thời gian nhìn biển chỉ dẫn và di chuyển theo dòng người." },
    "immigration-customs": { title: "Xuất nhập cảnh và hải quan", shortDescription: "Chuẩn bị giấy tờ sẵn, đứng đúng hàng và chờ hướng dẫn bình tĩnh." },
    "airport-transfer": { title: "Chuyển tiếp từ sân bay", shortDescription: "Xác nhận tuyến đi trước rồi mới di chuyển dứt khoát." },
    "airport-limousine-bus": { title: "Xe buýt limousine sân bay", shortDescription: "Đến sớm một chút, kiểm tra điểm đến và làm theo quy trình hành lý." },
    "local-bus": { title: "Xe buýt địa phương", shortDescription: "Quan sát cách lên xe và trả tiền trước khi làm theo." },
    "night-bus": { title: "Xe buýt đêm", shortDescription: "Hãy xem đây là không gian nghỉ ngơi chung, không phải nơi trò chuyện ồn ào." },
    taxi: { title: "Taxi", shortDescription: "Cho tài xế thấy điểm đến rõ ràng và giữ chuyến đi đơn giản." },
    "ride-hailing": { title: "Điểm đón xe qua ứng dụng", shortDescription: "Tìm đúng điểm đón trước rồi chờ mà không chắn lối người khác." },
    ferry: { title: "Phà và tàu chở khách", shortDescription: "Di chuyển cẩn thận, giữ đồ gọn gàng và tôn trọng không gian chung." },
    "ropeway-cablecar": { title: "Cáp treo và tàu kéo", shortDescription: "Lên nhanh, chia sẻ góc nhìn đẹp và đừng chiếm vị trí tốt quá lâu." },
    "hotel-checkin": { title: "Làm thủ tục nhận phòng", shortDescription: "Chuẩn bị thông tin đặt phòng và nghe kỹ phần giải thích của khách sạn." },
    "hotel-lobby": { title: "Sảnh khách sạn", shortDescription: "Hãy dùng như khu chờ chung, không phải chỗ chiếm dụng lâu." },
    "hotel-breakfast": { title: "Bữa sáng ở khách sạn", shortDescription: "Đi theo nhịp xếp chỗ, lấy đồ vừa phải và giữ hàng di chuyển đều." },
    "hotel-elevator": { title: "Thang máy khách sạn", shortDescription: "Nhường người ra trước và giữ không gian yên tĩnh trong thời gian ngắn." },
    "shared-lounge": { title: "Phòng chờ và khu nghỉ chung", shortDescription: "Sử dụng nhẹ nhàng và điều chỉnh theo bầu không khí yên nhất trong phòng." },
    "coin-laundry": { title: "Tiệm giặt tự động", shortDescription: "Dùng máy hiệu quả và quay lại lấy đồ đúng lúc." },
    "capsule-hotel": { title: "Khách sạn capsule", shortDescription: "Hãy nghĩ đến sự yên tĩnh, gọn gàng và ý tứ trong khu ngủ." },
    "hostel-dorm": { title: "Hostel và phòng ngủ tập thể", shortDescription: "Phòng chung dễ chịu hơn khi mọi người cùng giảm tiếng ồn, ánh sáng và đồ bừa bộn." },
    "checkout-room": { title: "Rời phòng trước giờ trả", shortDescription: "Để phòng gọn gàng vừa đủ và rời đi đúng giờ." },
    "luggage-storage": { title: "Gửi hành lý và tủ khóa", shortDescription: "Chọn nhanh chỗ phù hợp rồi sắp xếp đồ ở nơi không chắn người khác." },
    cafe: { title: "Quán cà phê", shortDescription: "Nhìn cách quán vận hành trước rồi mới chọn chỗ ngồi và thời gian ngồi." },
    bakery: { title: "Tiệm bánh", shortDescription: "Dùng khay và kẹp đúng cách, chạm vào bánh trưng bày thật nhẹ nhàng." },
    "fast-food": { title: "Cửa hàng thức ăn nhanh", shortDescription: "Gọi món gọn gàng, dọn bàn sau khi ăn và giúp chỗ ngồi quay vòng." },
    "food-court": { title: "Khu ẩm thực", shortDescription: "Chia sẻ chỗ ngồi hợp lý và theo nhịp phục vụ tự lấy." },
    izakaya: { title: "Izakaya", shortDescription: "Nên chuẩn bị tâm lý rằng quán có thể có quy tắc riêng và nhịp phục vụ khác." },
    bar: { title: "Quán bar", shortDescription: "Đọc bầu không khí trước rồi mới điều chỉnh giọng nói và nhịp của mình." },
    "all-you-can-drink": { title: "Gói uống không giới hạn", shortDescription: "Dù là uống thoải mái, vẫn có giới hạn giờ, lượt gọi cuối và quy tắc tránh lãng phí." },
    karaoke: { title: "Karaoke", shortDescription: "Ngay từ đầu nên kiểm tra thời lượng, quy định phòng và cách gọi món." },
    "food-stalls": { title: "Quầy hàng và khu ăn đường phố", shortDescription: "Đi theo dòng người, ăn ở chỗ phù hợp và tự quản lý rác của mình." },
    "vending-machine": { title: "Máy bán hàng tự động", shortDescription: "Mua nhanh, tránh sang một bên và bỏ chai lon đúng chỗ sau đó." },
    supermarket: { title: "Siêu thị", shortDescription: "Đi theo dòng của lối hàng rồi đóng gói đồ ở khu vực mà cửa hàng chuẩn bị." },
    drugstore: { title: "Drugstore và hiệu thuốc", shortDescription: "Phân biệt món nào là mua nhanh và món nào nên hỏi nhân viên trước." },
    "department-store": { title: "Cửa hàng bách hóa", shortDescription: "Di chuyển nhẹ nhàng, chạm đồ cẩn thận và đọc bầu không khí của tầng đó." },
    "duty-free": { title: "Mua sắm miễn thuế", shortDescription: "Mang đúng giấy tờ và hiểu đây là một quy trình chứ không chỉ là giảm giá." },
    "fitting-room": { title: "Phòng thử đồ", shortDescription: "Chờ đến lượt, làm theo quy định của cửa hàng và giữ quần áo sạch sẽ." },
    "secondhand-shop": { title: "Cửa hàng đồ cũ và tái sử dụng", shortDescription: "Xem kỹ, cầm nhẹ và hỏi trước khi mở hay thử sản phẩm." },
    "market-shopping-street": { title: "Chợ và phố mua sắm", shortDescription: "Tiếp tục di chuyển, nhường chỗ cho người địa phương và tôn trọng mặt tiền cửa hàng." },
    "shopping-bags-packaging": { title: "Túi mua sắm và đóng gói", shortDescription: "Lắng nghe câu hỏi về túi và trả lời ngắn gọn để quầy thanh toán không bị chậm." },
    "delivery-service": { title: "Dịch vụ giao gửi", shortDescription: "Kiểm tra địa chỉ thật kỹ và điền biểu mẫu từng bước một." },
    atm: { title: "Sử dụng ATM", shortDescription: "Thực hiện giao dịch nhanh rồi bước sang bên để sắp xếp ví của mình." },
    "museum-gallery": { title: "Bảo tàng và phòng trưng bày", shortDescription: "Đọc không khí xung quanh, nói nhỏ và đừng mặc định rằng lúc nào cũng được chạm hay chụp ảnh." },
    "castle-garden": { title: "Lâu đài, vườn và di tích lịch sử", shortDescription: "Đi chậm, theo lối được chỉ định và xem hàng rào là ranh giới thật sự." },
    "observatory-night-view": { title: "Đài quan sát và điểm ngắm đêm", shortDescription: "Thay nhau dùng vị trí đẹp rồi nhường chỗ cho người kế tiếp." },
    "live-concert": { title: "Buổi diễn, hòa nhạc và nhà hát", shortDescription: "Đến đúng giờ, theo quy định địa điểm và tập trung vào màn biểu diễn." },
    "sports-event": { title: "Xem thể thao", shortDescription: "Tận hưởng không khí nhưng vẫn tôn trọng ghế ngồi, khu vực và việc dọn dẹp." },
    "theme-park": { title: "Công viên chủ đề", shortDescription: "Hãy xem hàng chờ, khu đợi và điểm xem như không gian dùng chung." },
    "festival-fireworks": { title: "Lễ hội và pháo hoa", shortDescription: "Đám đông thay đổi rất nhanh, nên di chuyển sớm và luôn để ý hướng dòng người." },
    "seasonal-scenic-spot": { title: "Điểm ngắm hoa anh đào và lá đỏ", shortDescription: "Thưởng cảnh nhẹ nhàng và chia sẻ kiên nhẫn những điểm chụp ảnh đông người." },
    "rental-car": { title: "Xe thuê", shortDescription: "Kiểm tra giấy tờ, quy định đỗ xe và điều kiện trả xe trước khi lái." },
    "service-area": { title: "Trạm dừng nghỉ và điểm nghỉ ven đường", shortDescription: "Dừng nghỉ gọn gàng, đỗ xe ngay ngắn và giữ khu vực chung sạch sẽ." }
  }
};

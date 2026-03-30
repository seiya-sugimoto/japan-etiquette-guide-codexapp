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
    }
  }
};

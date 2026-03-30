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
    }
  }
};

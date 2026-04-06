import type { PremiumPackId } from "@/lib/constants/premium";
import type { AppLanguage } from "@/types/language";

type RecommendedItem = {
  packId: PremiumPackId;
  title: string;
  body: string;
};

type PremiumRecommendedCopy = {
  title: string;
  body: string;
  items: [RecommendedItem, RecommendedItem, RecommendedItem];
};

const englishCopy: PremiumRecommendedCopy = {
  title: "A good place to start",
  body: "If you just unlocked Premium, these are the easiest entry points depending on what your trip looks like.",
  items: [
    {
      packId: "special-stays",
      title: "If your stay feels more personal than a hotel",
      body: "Start with Special Stays for ryokan, hostels, local homes, and residential habits."
    },
    {
      packId: "social-nightlife",
      title: "If evenings or group plans feel hardest to read",
      body: "Start with Social & Nightlife to get smoother with group pace, karaoke, and drinking flow."
    },
    {
      packId: "events-crowds",
      title: "If your day includes lines, crowds, and photo pressure",
      body: "Start with Events & Crowds for concerts, games, and busy attractions."
    }
  ]
};

const premiumRecommendedCopy: Partial<Record<AppLanguage, PremiumRecommendedCopy>> = {
  en: englishCopy,
  ja: {
    title: "最初に見るならここ",
    body: "Premium を開いたあと、旅の形に合わせて見始めやすい入口を先にまとめています。",
    items: [
      {
        packId: "special-stays",
        title: "ホテルより少し私的な滞在があるなら",
        body: "旅館、ホステル、知人宅、住宅街の滞在に近いなら Special Stays から入るのが自然です。"
      },
      {
        packId: "social-nightlife",
        title: "夜のグループ行動がいちばん不安なら",
        body: "飲み会、カラオケ、場の空気の読み方を先に見たいなら Social & Nightlife が向いています。"
      },
      {
        packId: "events-crowds",
        title: "列や人混みで迷いそうな日があるなら",
        body: "ライブ、スポーツ、混雑スポットの流れを押さえたいなら Events & Crowds から始めると見やすいです。"
      }
    ]
  },
  ko: {
    title: "처음 보면 좋은 시작점",
    body: "Premium을 열었을 때 여행 형태에 따라 어디부터 보면 좋은지 먼저 정리해 두었습니다.",
    items: [
      {
        packId: "special-stays",
        title: "호텔보다 더 사적인 숙박이 있다면",
        body: "료칸, 호스텔, 현지 가정, 주거 지역 숙박이 있다면 Special Stays부터 보는 흐름이 자연스럽습니다."
      },
      {
        packId: "social-nightlife",
        title: "저녁 모임이 가장 불안하다면",
        body: "술자리, 노래방, 단체 분위기를 먼저 익히고 싶다면 Social & Nightlife가 잘 맞습니다."
      },
      {
        packId: "events-crowds",
        title: "줄과 인파가 있는 날이 걱정된다면",
        body: "공연, 스포츠, 혼잡한 명소 흐름을 먼저 잡고 싶다면 Events & Crowds부터 시작하면 좋습니다."
      }
    ]
  },
  "zh-Hant": {
    title: "如果要先看，建議從這裡開始",
    body: "Premium 打開後，先依照旅程型態選入口，會比一篇篇亂看更容易有感。",
    items: [
      {
        packId: "special-stays",
        title: "如果這趟住宿比飯店更私密",
        body: "有旅館、青年旅舍、民家或住宅區住宿的話，先看 Special Stays 會最自然。"
      },
      {
        packId: "social-nightlife",
        title: "如果你最怕的是晚上的團體氣氛",
        body: "想先弄懂飲酒、卡拉 OK 與群體節奏時，從 Social & Nightlife 開始最實用。"
      },
      {
        packId: "events-crowds",
        title: "如果你擔心排隊和人潮",
        body: "想先掌握演唱會、球賽與熱門景點的人流時，從 Events & Crowds 開始會很順。"
      }
    ]
  },
  "zh-Hans": {
    title: "如果先看，建议从这里开始",
    body: "Premium 打开后，先按旅行类型选入口，会比一篇篇乱看更容易有感觉。",
    items: [
      {
        packId: "special-stays",
        title: "如果这趟住宿比酒店更私密",
        body: "有旅馆、青年旅舍、民家或住宅区住宿的话，先看 Special Stays 会最自然。"
      },
      {
        packId: "social-nightlife",
        title: "如果你最担心的是晚上的团体气氛",
        body: "想先弄懂喝酒、卡拉 OK 与群体节奏时，从 Social & Nightlife 开始最实用。"
      },
      {
        packId: "events-crowds",
        title: "如果你担心排队和人潮",
        body: "想先掌握演唱会、球赛和热门景点的人流时，从 Events & Crowds 开始会很顺。"
      }
    ]
  },
  th: {
    title: "ถ้าจะเริ่มดู แนะนำเริ่มตรงนี้",
    body: "หลังจากเปิด Premium แล้ว การเริ่มจากทางเข้าที่ตรงกับรูปแบบทริปจะเข้าใจค่าได้ง่ายกว่าไล่อ่านไปเรื่อย ๆ",
    items: [
      {
        packId: "special-stays",
        title: "ถ้าที่พักของทริปนี้เป็นส่วนตัวกว่าการนอนโรงแรมทั่วไป",
        body: "ถ้ามีเรียวกัง โฮสเทล บ้านคนญี่ปุ่น หรือย่านพักอาศัย ให้เริ่มจาก Special Stays ก่อน"
      },
      {
        packId: "social-nightlife",
        title: "ถ้ากังวลเรื่องบรรยากาศตอนกลางคืนมากที่สุด",
        body: "ถ้าอยากอ่านจังหวะวง ดื่ม หรือคาราโอเกะให้ลื่นขึ้น Social & Nightlife จะช่วยได้มาก"
      },
      {
        packId: "events-crowds",
        title: "ถ้ากังวลเรื่องคิวและคนเยอะ",
        body: "ถ้ามีคอนเสิร์ต กีฬา หรือจุดท่องเที่ยวคนแน่น ให้เริ่มจาก Events & Crowds"
      }
    ]
  },
  fr: {
    title: "Un bon point de départ",
    body: "Une fois Premium ouvert, commencer par l’entrée qui correspond au voyage rend la valeur beaucoup plus claire.",
    items: [
      {
        packId: "special-stays",
        title: "Si le séjour semble plus personnel qu’un hôtel classique",
        body: "Pour ryokan, auberge, maison privée ou quartier résidentiel, commencer par Special Stays est le plus naturel."
      },
      {
        packId: "social-nightlife",
        title: "Si le plus difficile est l’ambiance des soirées",
        body: "Pour mieux lire le rythme d’un groupe, le karaoké ou les verres, Social & Nightlife est une bonne première étape."
      },
      {
        packId: "events-crowds",
        title: "Si les files et la foule risquent d’être le plus stressant",
        body: "Pour concerts, matchs et lieux chargés, Events & Crowds donne un point de départ très concret."
      }
    ]
  },
  es: {
    title: "Un buen lugar para empezar",
    body: "Después de abrir Premium, empezar por la entrada que mejor encaja con el viaje hace que su valor se note más rápido.",
    items: [
      {
        packId: "special-stays",
        title: "Si tu alojamiento se siente más personal que un hotel normal",
        body: "Para ryokan, hostal, casa particular o zona residencial, empezar por Special Stays es lo más natural."
      },
      {
        packId: "social-nightlife",
        title: "Si lo más difícil será leer el ambiente por la noche",
        body: "Para entender mejor el ritmo del grupo, el karaoke o las bebidas, Social & Nightlife es una gran primera parada."
      },
      {
        packId: "events-crowds",
        title: "Si te preocupan las colas y la gente",
        body: "Para conciertos, partidos y lugares muy concurridos, Events & Crowds da una entrada muy clara."
      }
    ]
  },
  vi: {
    title: "Nên bắt đầu từ đâu trước",
    body: "Sau khi mở Premium, bắt đầu từ lối vào đúng với kiểu chuyến đi sẽ giúp giá trị của nó hiện ra nhanh hơn.",
    items: [
      {
        packId: "special-stays",
        title: "Nếu chỗ ở của chuyến đi này riêng tư hơn khách sạn thường",
        body: "Nếu có ryokan, hostel, nhà dân hoặc khu dân cư, bắt đầu từ Special Stays sẽ tự nhiên nhất."
      },
      {
        packId: "social-nightlife",
        title: "Nếu điều khó nhất là đọc không khí buổi tối",
        body: "Muốn hiểu nhịp của nhóm, karaoke hay uống cùng nhau mượt hơn thì Social & Nightlife là điểm vào rất hợp."
      },
      {
        packId: "events-crowds",
        title: "Nếu bạn lo nhất về hàng chờ và đám đông",
        body: "Với concert, thể thao và nơi đông người, Events & Crowds cho điểm bắt đầu rất rõ."
      }
    ]
  }
};

export function getPremiumRecommendedCopy(language: AppLanguage) {
  return premiumRecommendedCopy[language] ?? englishCopy;
}

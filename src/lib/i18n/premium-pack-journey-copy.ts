import type { PremiumPackId } from "@/lib/constants/premium";
import type { AppLanguage } from "@/types/language";

type PackJourneyCopy = {
  chooseTitle: string;
  chooseBody: string;
  bestForLabel: string;
  useWhenLabel: string;
  packs: Record<
    PremiumPackId,
    {
      bestFor: string;
      useWhen: string;
    }
  >;
};

const englishCopy: PackJourneyCopy = {
  chooseTitle: "Choose the pack that matches your trip",
  chooseBody: "Premium feels stronger when it opens a clear next layer for the kind of travel you are actually doing.",
  bestForLabel: "Best for",
  useWhenLabel: "Use when",
  packs: {
    "special-stays": {
      bestFor: "Travelers staying in ryokan, local homes, hostels, or residential neighborhoods.",
      useWhen: "Use this if your trip includes private spaces where small habits matter more than visible rules."
    },
    "social-nightlife": {
      bestFor: "Travelers joining drinks, karaoke, or group evenings.",
      useWhen: "Use this if you want help reading atmosphere, pacing yourself, and avoiding awkward group moments."
    },
    "events-crowds": {
      bestFor: "Travelers going to concerts, games, or high-traffic attractions.",
      useWhen: "Use this if your day includes lines, cheering, photo pressure, or crowded exits."
    },
    "independent-travel": {
      bestFor: "Travelers moving around by rental car or making more decisions alone.",
      useWhen: "Use this if parking, timing, service areas, or return rules could affect your day."
    }
  }
};

const premiumPackJourneyCopy: Partial<Record<AppLanguage, PackJourneyCopy>> = {
  en: englishCopy,
  ja: {
    chooseTitle: "旅のスタイルに合うパックを選ぶ",
    chooseBody: "Premium は、今の旅に本当に必要な次のレイヤーが開くときに価値が伝わりやすくなります。",
    bestForLabel: "こんな人向け",
    useWhenLabel: "こんな時に役立つ",
    packs: {
      "special-stays": {
        bestFor: "旅館、知人宅、ホステル、住宅街の滞在がある旅行者向けです。",
        useWhen: "目に見えるルールより、その場の空気や私的な距離感が大事になりそうな時に向いています。"
      },
      "social-nightlife": {
        bestFor: "飲み会、カラオケ、夜のグループ行動がある旅行者向けです。",
        useWhen: "場の空気を読みたい、ペースを合わせたい、気まずさを避けたい時に役立ちます。"
      },
      "events-crowds": {
        bestFor: "ライブ、スポーツ観戦、人の多い観光地に行く旅行者向けです。",
        useWhen: "列、応援、写真、退場の流れなど、人の動きに巻き込まれやすい日に向いています。"
      },
      "independent-travel": {
        bestFor: "レンタカー移動や、自分で判断する場面が多い旅行者向けです。",
        useWhen: "駐車、時間配分、サービスエリア、返却条件などが旅程に影響しそうな時に役立ちます。"
      }
    }
  },
  ko: {
    chooseTitle: "여행 방식에 맞는 팩 고르기",
    chooseBody: "Premium은 지금 내 여행에 필요한 다음 레이어를 열어 줄 때 가장 가치가 잘 보입니다.",
    bestForLabel: "이런 여행자에게",
    useWhenLabel: "이럴 때 유용해요",
    packs: {
      "special-stays": {
        bestFor: "료칸, 현지 가정, 호스텔, 주거 지역 숙박이 있는 여행자.",
        useWhen: "눈에 보이는 규칙보다 분위기와 사적인 거리감이 더 중요한 상황에서 특히 유용합니다."
      },
      "social-nightlife": {
        bestFor: "술자리, 노래방, 저녁 단체 일정이 있는 여행자.",
        useWhen: "분위기를 읽고, 속도를 맞추고, 어색한 순간을 줄이고 싶을 때 잘 맞습니다."
      },
      "events-crowds": {
        bestFor: "공연, 스포츠 경기, 사람 많은 관광지를 가는 여행자.",
        useWhen: "줄, 응원, 사진, 퇴장 흐름처럼 사람 움직임이 중요한 날에 유용합니다."
      },
      "independent-travel": {
        bestFor: "렌터카 이동이나 스스로 판단할 일이 많은 여행자.",
        useWhen: "주차, 시간 배분, 휴게소, 반납 조건이 하루 일정에 영향을 줄 수 있을 때 도움이 됩니다."
      }
    }
  },
  "zh-Hant": {
    chooseTitle: "選擇適合你旅程的 pack",
    chooseBody: "當 Premium 打開的是你現在這趟旅程真正需要的下一層內容時，價值會最清楚。",
    bestForLabel: "適合誰",
    useWhenLabel: "什麼時候特別有用",
    packs: {
      "special-stays": {
        bestFor: "適合會住旅館、民家、青年旅舍或住宅區住宿的旅人。",
        useWhen: "當你需要拿捏氣氛與私人距離，而不只是看明顯規則時，這包特別有幫助。"
      },
      "social-nightlife": {
        bestFor: "適合會參加飲酒、卡拉 OK 或夜間團體活動的旅人。",
        useWhen: "當你想讀懂現場氣氛、配合節奏、避免尷尬時，這包最實用。"
      },
      "events-crowds": {
        bestFor: "適合要去演唱會、球賽或高人流景點的旅人。",
        useWhen: "如果你這天會遇到排隊、歡呼、拍照壓力或散場動線，這包很值得先看。"
      },
      "independent-travel": {
        bestFor: "適合租車移動或需要自己做更多判斷的旅人。",
        useWhen: "當停車、時間安排、休息站或還車條件可能影響行程時，這包最能減少猜測。"
      }
    }
  },
  "zh-Hans": {
    chooseTitle: "选择适合这趟旅行的 pack",
    chooseBody: "当 Premium 打开的正好是你这趟旅行真正需要的下一层内容时，价值会最清楚。",
    bestForLabel: "适合谁",
    useWhenLabel: "什么时候特别有用",
    packs: {
      "special-stays": {
        bestFor: "适合会住旅馆、民家、青年旅舍或住宅区住宿的旅行者。",
        useWhen: "当你需要拿捏气氛和私人距离，而不只是看明显规则时，这包特别有帮助。"
      },
      "social-nightlife": {
        bestFor: "适合会参加喝酒、卡拉 OK 或夜间团体活动的旅行者。",
        useWhen: "当你想读懂现场气氛、配合节奏、避免尴尬时，这包最实用。"
      },
      "events-crowds": {
        bestFor: "适合要去演唱会、球赛或高人流景点的旅行者。",
        useWhen: "如果这一天会遇到排队、应援、拍照压力或散场动线，这包值得先看。"
      },
      "independent-travel": {
        bestFor: "适合租车移动或需要自己做更多判断的旅行者。",
        useWhen: "当停车、时间安排、服务区或还车条件可能影响行程时，这包最能减少猜测。"
      }
    }
  },
  th: {
    chooseTitle: "เลือกแพ็กที่เหมาะกับทริปของคุณ",
    chooseBody: "Premium จะดูมีคุณค่าชัดที่สุดเมื่อมันเปิดชั้นถัดไปที่ตรงกับรูปแบบการเดินทางของคุณจริง ๆ",
    bestForLabel: "เหมาะกับใคร",
    useWhenLabel: "ใช้เมื่อไหร่จะคุ้ม",
    packs: {
      "special-stays": {
        bestFor: "เหมาะกับคนที่พักเรียวกัง บ้านคนญี่ปุ่น โฮสเทล หรือย่านพักอาศัย",
        useWhen: "เหมาะเมื่อคุณต้องอ่านบรรยากาศและระยะห่างแบบส่วนตัว มากกว่าดูแค่กติกาที่เห็นชัด"
      },
      "social-nightlife": {
        bestFor: "เหมาะกับคนที่มีแผนดื่ม คาราโอเกะ หรือกิจกรรมกลุ่มตอนกลางคืน",
        useWhen: "มีประโยชน์เมื่ออยากอ่านบรรยากาศ ปรับจังหวะ และเลี่ยงช่วงที่อาจอ awkward"
      },
      "events-crowds": {
        bestFor: "เหมาะกับคนที่จะไปคอนเสิร์ต กีฬา หรือสถานที่คนแน่น",
        useWhen: "เหมาะในวันที่ต้องเจอคิว เสียงเชียร์ จุดถ่ายรูป หรือช่วงคนออกพร้อมกัน"
      },
      "independent-travel": {
        bestFor: "เหมาะกับคนที่เช่ารถหรือมีหลายจังหวะที่ต้องตัดสินใจเอง",
        useWhen: "คุ้มมากเมื่อที่จอดรถ เวลา จุดพัก และเงื่อนไขคืนรถอาจกระทบทั้งวัน"
      }
    }
  },
  fr: {
    chooseTitle: "Choisir le pack qui correspond au voyage",
    chooseBody: "Premium devient plus convaincant quand il ouvre la couche suivante dont ce voyage a vraiment besoin.",
    bestForLabel: "Idéal pour",
    useWhenLabel: "À utiliser surtout si",
    packs: {
      "special-stays": {
        bestFor: "Les voyageurs qui passent par un ryokan, chez l’habitant, en dortoir ou dans un quartier résidentiel.",
        useWhen: "À privilégier quand l’atmosphère et la distance privée comptent plus que les règles visibles."
      },
      "social-nightlife": {
        bestFor: "Les voyageurs qui prévoient de boire, chanter au karaoké ou sortir en groupe le soir.",
        useWhen: "Très utile si vous voulez lire l’ambiance, suivre le rythme du groupe et éviter les moments gênants."
      },
      "events-crowds": {
        bestFor: "Les voyageurs qui vont à un concert, un match ou un lieu très fréquenté.",
        useWhen: "À ouvrir surtout si la journée inclut files, encouragements, pression photo ou sorties de foule."
      },
      "independent-travel": {
        bestFor: "Les voyageurs qui louent une voiture ou prennent plus de décisions par eux-mêmes.",
        useWhen: "Le plus utile quand le stationnement, le timing, les aires de repos ou le retour du véhicule peuvent compliquer la journée."
      }
    }
  },
  es: {
    chooseTitle: "Elige el pack que encaja con tu viaje",
    chooseBody: "Premium se vuelve más valioso cuando abre justo la siguiente capa que tu viaje necesita de verdad.",
    bestForLabel: "Ideal para",
    useWhenLabel: "Úsalo sobre todo si",
    packs: {
      "special-stays": {
        bestFor: "Viajeros que pasarán por ryokan, casas particulares, hostales o zonas residenciales.",
        useWhen: "Conviene cuando importa más leer el ambiente y la distancia privada que seguir solo reglas visibles."
      },
      "social-nightlife": {
        bestFor: "Viajeros con planes de beber, karaoke o salidas de grupo por la noche.",
        useWhen: "Muy útil si quieres leer el ambiente, seguir el ritmo del grupo y evitar momentos incómodos."
      },
      "events-crowds": {
        bestFor: "Viajeros que irán a conciertos, partidos o lugares con mucha gente.",
        useWhen: "Úsalo si tu día incluye filas, ánimo colectivo, presión por fotos o salidas con mucha gente."
      },
      "independent-travel": {
        bestFor: "Viajeros que alquilan coche o tendrán más decisiones por su cuenta.",
        useWhen: "Ayuda mucho cuando el aparcamiento, el tiempo, las áreas de descanso o la devolución pueden afectar el día."
      }
    }
  },
  vi: {
    chooseTitle: "Chọn gói hợp với kiểu chuyến đi của bạn",
    chooseBody: "Premium thuyết phục hơn khi nó mở đúng lớp nội dung tiếp theo mà chuyến đi hiện tại thật sự cần.",
    bestForLabel: "Phù hợp với ai",
    useWhenLabel: "Đáng mở nhất khi",
    packs: {
      "special-stays": {
        bestFor: "Phù hợp với người ở ryokan, nhà dân, hostel hoặc khu dân cư riêng tư.",
        useWhen: "Hữu ích nhất khi bạn cần đọc bầu không khí và khoảng cách riêng tư hơn là chỉ nhìn các quy tắc rõ ràng."
      },
      "social-nightlife": {
        bestFor: "Phù hợp với người có kế hoạch uống cùng nhóm, karaoke hoặc hoạt động buổi tối.",
        useWhen: "Rất hợp khi bạn muốn đọc không khí, giữ nhịp với nhóm và tránh những khoảnh khắc ngượng."
      },
      "events-crowds": {
        bestFor: "Phù hợp với người đi concert, thể thao hoặc nơi rất đông người.",
        useWhen: "Nên mở nếu trong ngày có xếp hàng, cổ vũ, áp lực chụp ảnh hoặc dòng người ra về đông."
      },
      "independent-travel": {
        bestFor: "Phù hợp với người thuê xe hoặc phải tự quyết định nhiều hơn.",
        useWhen: "Đặc biệt hữu ích khi chỗ đỗ xe, thời gian, trạm dừng hoặc điều kiện trả xe có thể ảnh hưởng cả ngày."
      }
    }
  }
};

export function getPremiumPackJourneyCopy(language: AppLanguage) {
  return premiumPackJourneyCopy[language] ?? englishCopy;
}

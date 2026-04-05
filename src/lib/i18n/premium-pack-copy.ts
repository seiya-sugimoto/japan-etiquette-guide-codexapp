import type { PremiumPackId } from "@/lib/constants/premium";
import type { AppLanguage } from "@/types/language";

type PackCopy = {
  title: string;
  body: string;
};

type PremiumPackCopy = {
  sectionTitle: string;
  sectionBody: string;
  scenesLabel: string;
  packs: Record<PremiumPackId, PackCopy>;
};

const premiumPackCopy: Record<AppLanguage, PremiumPackCopy> = {
  en: {
    sectionTitle: "Premium packs",
    sectionBody: "Instead of random locked scenes, Premium should feel like a few clear bundles that match real trip styles.",
    scenesLabel: "Scenes included",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "For ryokan visits, staying with locals, shared lodging, and residential etiquette."
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "For drinking plans, karaoke, and group situations where the atmosphere matters."
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "For concerts, sports, and high-energy places where flow and shared space matter."
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "For rental car use and the kinds of decisions that come with moving around more independently."
      }
    }
  },
  ja: {
    sectionTitle: "Premium パック",
    sectionBody: "単発の locked シーンではなく、実際の旅行スタイルに合ったまとまりとして見える方が Premium らしくなります。",
    scenesLabel: "含まれるシーン",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "旅館、知人宅滞在、共同宿泊、住宅街でのふるまいなど、少し私的で空気感の強い滞在向けです。"
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "飲み放題、カラオケ、グループの場など、ルールより空気感が重要になりやすい場面向けです。"
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "ライブ、スポーツ、混雑イベントなど、流れと共有空間の使い方が大事な場面をまとめます。"
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "レンタカーのように、自分で判断する場面が増える移動スタイル向けのパックです。"
      }
    }
  },
  ko: {
    sectionTitle: "Premium 팩",
    sectionBody: "잠긴 장면을 흩어 두기보다, 실제 여행 스타일에 맞는 묶음으로 보이는 편이 Premium 느낌이 더 강해집니다.",
    scenesLabel: "포함된 장면",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "료칸, 현지 가정 방문, 공동 숙박, 주거 지역 예절처럼 조금 더 사적인 체류 상황을 위한 묶음입니다."
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "음주 모임, 노래방, 단체 분위기처럼 규칙보다 공기 읽기가 중요한 상황을 다룹니다."
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "콘서트, 스포츠, 혼잡 이벤트처럼 흐름과 공유 공간 사용이 중요한 장면을 묶습니다."
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "렌터카처럼 스스로 판단해야 하는 이동 스타일을 위한 팩입니다."
      }
    }
  },
  "zh-Hant": {
    sectionTitle: "Premium 套組",
    sectionBody: "與其把 locked 情境分散顯示，不如整理成符合實際旅行型態的幾個套組，Premium 會更容易理解。",
    scenesLabel: "包含情境",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "適合旅館、住在當地人家、共享住宿與住宅區禮儀等較私人的停留情境。"
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "適合飲酒聚會、卡拉 OK 與團體場合等，比起規則更看重現場氣氛的情境。"
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "整理演唱會、運動賽事與高人流活動等，共享空間與動線很重要的場景。"
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "適合租車等需要自己做更多判斷的移動方式。"
      }
    }
  },
  "zh-Hans": {
    sectionTitle: "Premium 套组",
    sectionBody: "与其把 locked 场景零散放着，不如整理成符合真实旅行方式的几组内容，Premium 会更好理解。",
    scenesLabel: "包含场景",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "适合旅馆、住在当地人家、共享住宿和住宅区礼仪等更私人一点的停留场景。"
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "适合饮酒聚会、卡拉 OK 和团体场合等，比规则更看重气氛的场景。"
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "整理演唱会、体育赛事和高人流活动等，共享空间和动线很重要的场景。"
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "适合租车等需要自己做更多判断的出行方式。"
      }
    }
  },
  th: {
    sectionTitle: "แพ็ก Premium",
    sectionBody: "แทนที่จะมีฉากที่ถูกล็อกแบบกระจัดกระจาย การจัดเป็นแพ็กตามรูปแบบการเดินทางจริงจะทำให้ Premium ดูเข้าใจง่ายกว่า",
    scenesLabel: "สถานการณ์ในแพ็ก",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "เหมาะกับเรียวกัง การพักบ้านคนท้องถิ่น ที่พักแบบแชร์ และมารยาทในย่านที่พักอาศัยซึ่งมีความเป็นส่วนตัวมากขึ้น"
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "เหมาะกับการดื่ม คาราโอเกะ และสถานการณ์กลุ่มที่บรรยากาศสำคัญพอ ๆ กับกติกา"
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "รวมคอนเสิร์ต กีฬา และสถานที่คนเยอะที่ต้องใส่ใจกับการไหลของคนและการใช้พื้นที่ร่วมกัน"
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "เหมาะกับการเช่ารถและการเดินทางที่ต้องตัดสินใจด้วยตัวเองมากขึ้น"
      }
    }
  },
  fr: {
    sectionTitle: "Packs Premium",
    sectionBody: "Au lieu d’éparpiller quelques scènes verrouillées, Premium devient plus clair quand il est présenté comme quelques ensembles liés à de vrais styles de voyage.",
    scenesLabel: "Scènes incluses",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "Pour les ryokan, les séjours chez l’habitant, l’hébergement partagé et les règles de voisinage plus privées."
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "Pour les soirées, le karaoké et les situations de groupe où l’ambiance compte autant que les règles."
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "Pour les concerts, les matchs et les lieux très fréquentés où le flux et l’espace partagé comptent beaucoup."
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "Pour la location de voiture et les déplacements où l’on doit davantage décider par soi-même."
      }
    }
  },
  es: {
    sectionTitle: "Paquetes Premium",
    sectionBody: "En lugar de mostrar escenas bloqueadas sin relación, Premium se entiende mejor si se presenta como unos pocos paquetes ligados a formas reales de viajar.",
    scenesLabel: "Escenas incluidas",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "Para ryokan, alojarse con locales, hospedaje compartido y etiqueta en zonas residenciales más privadas."
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "Para planes de bebida, karaoke y situaciones de grupo donde el ambiente importa tanto como las reglas."
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "Para conciertos, deportes y lugares con mucha gente donde importan el flujo y el espacio compartido."
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "Para alquiler de coche y desplazamientos donde hay que tomar más decisiones por cuenta propia."
      }
    }
  },
  vi: {
    sectionTitle: "Gói Premium",
    sectionBody: "Thay vì để các tình huống bị khóa rải rác, Premium sẽ dễ hiểu hơn nếu được trình bày thành vài gói gắn với kiểu chuyến đi thực tế.",
    scenesLabel: "Tình huống trong gói",
    packs: {
      "special-stays": {
        title: "Special Stays",
        body: "Dành cho ryokan, ở cùng người địa phương, chỗ ở chia sẻ và phép lịch sự trong khu dân cư riêng tư hơn."
      },
      "social-nightlife": {
        title: "Social & Nightlife",
        body: "Dành cho uống cùng nhóm, karaoke và các tình huống đông người nơi bầu không khí quan trọng ngang với quy tắc."
      },
      "events-crowds": {
        title: "Events & Crowds",
        body: "Dành cho concert, thể thao và nơi đông người, nơi luồng di chuyển và không gian chung rất quan trọng."
      },
      "independent-travel": {
        title: "Independent Travel",
        body: "Dành cho thuê xe và những kiểu di chuyển phải tự quyết định nhiều hơn."
      }
    }
  }
};

export function getPremiumPackCopy(language: AppLanguage) {
  return premiumPackCopy[language];
}

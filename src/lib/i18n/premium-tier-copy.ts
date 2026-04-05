import type { AppLanguage } from "@/types/language";

type PremiumTierCopy = {
  previewBadge: string;
  premiumOnlyBadge: string;
  lockedTitle: string;
  lockedBody: string;
  lockedPoints: [string, string, string];
  unlockCta: string;
  browseCta: string;
  premiumOnlyListTitle: string;
  premiumOnlyListBody: string;
};

const premiumTierCopy: Record<AppLanguage, PremiumTierCopy> = {
  en: {
    previewBadge: "Preview",
    premiumOnlyBadge: "Premium",
    lockedTitle: "This guide is part of the Premium mock layer",
    lockedBody:
      "Core etiquette stays free. This screen is reserved for deeper, more specialized travel situations so we can test the paid experience before real billing exists.",
    lockedPoints: [
      "Basic first-trip etiquette stays open to everyone",
      "Premium-only scenes focus on nuanced stays, social moments, and event-style visits",
      "Switch mock Premium on from the Premium screen to preview the unlocked version"
    ],
    unlockCta: "See Premium preview",
    browseCta: "Back to free guides",
    premiumOnlyListTitle: "Premium-only scenes in the current mock",
    premiumOnlyListBody: "These are the more specialized scenes currently treated as locked in the mock Premium flow."
  },
  ja: {
    previewBadge: "プレビュー",
    premiumOnlyBadge: "プレミアム",
    lockedTitle: "このガイドは Premium mock レイヤーに含まれています",
    lockedBody:
      "基本マナーは無料のままにしつつ、より専門的で深いシーンだけを有料側の体験として試せるようにしています。まだ本課金はありません。",
    lockedPoints: [
      "初回旅行で必要な基本マナーは引き続き無料です",
      "宿泊の細かな作法や社交・イベント系の一部を premium-only に寄せています",
      "Premium 画面で mock をアンロックすると購入後の見え方を確認できます"
    ],
    unlockCta: "Premium プレビューを見る",
    browseCta: "無料ガイドに戻る",
    premiumOnlyListTitle: "現在 premium-only にしているシーン",
    premiumOnlyListBody: "今の mock Premium フローでは、より専門的なシーンだけを locked 扱いにしています。"
  },
  ko: {
    previewBadge: "미리보기",
    premiumOnlyBadge: "프리미엄",
    lockedTitle: "이 가이드는 Premium mock 레이어에 포함되어 있어요",
    lockedBody:
      "기본 예절은 무료로 유지하고, 더 전문적이고 깊은 상황만 유료 경험처럼 시험할 수 있게 해 둔 상태예요. 아직 실제 결제는 없어요.",
    lockedPoints: [
      "첫 일본 여행에 필요한 기본 예절은 계속 무료로 열려 있어요",
      "숙박의 세부 상황, 사교, 이벤트 계열 일부만 premium-only 로 두고 있어요",
      "Premium 화면에서 mock 잠금을 풀면 구매 후 느낌을 확인할 수 있어요"
    ],
    unlockCta: "Premium 미리보기 보기",
    browseCta: "무료 가이드로 돌아가기",
    premiumOnlyListTitle: "현재 premium-only 로 둔 장면",
    premiumOnlyListBody: "지금 mock Premium 흐름에서는 더 전문적인 장면만 잠금 대상으로 두고 있어요."
  },
  "zh-Hant": {
    previewBadge: "預覽",
    premiumOnlyBadge: "Premium",
    lockedTitle: "這個指南屬於目前的 Premium mock 層",
    lockedBody:
      "基本禮儀仍然維持免費，只有更深入、較專門的情境會先用來測試付費體驗。目前還沒有真正購買流程。",
    lockedPoints: [
      "第一次來日本最需要的基本禮儀仍然免費開放",
      "premium-only 主要放在住宿細節、社交與活動型情境",
      "可先到 Premium 畫面切換 mock 解鎖狀態，看之後可能的樣子"
    ],
    unlockCta: "查看 Premium 預覽",
    browseCta: "回到免費指南",
    premiumOnlyListTitle: "目前設為 premium-only 的情境",
    premiumOnlyListBody: "在現在的 mock Premium 流程中，只有較專門的情境會被視為 locked。"
  },
  "zh-Hans": {
    previewBadge: "预览",
    premiumOnlyBadge: "Premium",
    lockedTitle: "这个指南属于当前的 Premium mock 层",
    lockedBody:
      "基础礼仪仍然保持免费，只有更深入、更专业的场景会先拿来测试付费体验。目前还没有真正购买流程。",
    lockedPoints: [
      "第一次来日本最需要的基础礼仪仍然免费开放",
      "premium-only 主要放在住宿细节、社交和活动类场景",
      "可以先去 Premium 页面切换 mock 解锁状态，看看之后可能的样子"
    ],
    unlockCta: "查看 Premium 预览",
    browseCta: "返回免费指南",
    premiumOnlyListTitle: "当前设为 premium-only 的场景",
    premiumOnlyListBody: "在现在的 mock Premium 流程中，只有更专业的场景会被视为 locked。"
  },
  th: {
    previewBadge: "พรีวิว",
    premiumOnlyBadge: "พรีเมียม",
    lockedTitle: "คู่มือนี้อยู่ในชั้น Premium mock ตอนนี้",
    lockedBody:
      "มารยาทพื้นฐานยังคงเปิดฟรีตามเดิม ส่วนสถานการณ์ที่ลึกและเฉพาะทางมากขึ้นจะใช้สำหรับทดลองประสบการณ์แบบเสียเงินก่อน ตอนนี้ยังไม่มีการซื้อจริง",
    lockedPoints: [
      "มารยาทพื้นฐานสำหรับทริปแรกยังเปิดให้ใช้ฟรี",
      "premium-only จะเน้นเรื่องการพักอาศัย การเข้าสังคม และกิจกรรมบางแบบ",
      "คุณสามารถไปที่หน้า Premium แล้วสลับ mock unlock เพื่อดูภาพหลังซื้อได้"
    ],
    unlockCta: "ดูพรีวิว Premium",
    browseCta: "กลับไปคู่มือฟรี",
    premiumOnlyListTitle: "สถานการณ์ที่ตั้งเป็น premium-only ตอนนี้",
    premiumOnlyListBody: "ใน mock Premium ตอนนี้ เราล็อกเฉพาะสถานการณ์ที่เฉพาะทางมากขึ้นเท่านั้น"
  },
  fr: {
    previewBadge: "Aperçu",
    premiumOnlyBadge: "Premium",
    lockedTitle: "Ce guide fait partie de la couche mock Premium",
    lockedBody:
      "Les bases restent gratuites. Seules des situations plus profondes et plus spécialisées servent ici à tester l'expérience payante avant toute vraie facturation.",
    lockedPoints: [
      "Les règles essentielles du premier voyage restent ouvertes à tous",
      "Le premium-only vise surtout les séjours particuliers, les moments sociaux et certains événements",
      "Vous pouvez activer le mock déverrouillé depuis l'écran Premium pour voir la version ouverte"
    ],
    unlockCta: "Voir l’aperçu Premium",
    browseCta: "Retour aux guides gratuits",
    premiumOnlyListTitle: "Scènes premium-only du mock actuel",
    premiumOnlyListBody: "Dans le mock Premium actuel, seules les scènes les plus spécialisées sont traitées comme verrouillées."
  },
  es: {
    previewBadge: "Vista previa",
    premiumOnlyBadge: "Premium",
    lockedTitle: "Esta guía forma parte de la capa mock Premium",
    lockedBody:
      "Las reglas básicas siguen siendo gratuitas. Aquí solo usamos situaciones más profundas y especializadas para probar la experiencia de pago antes de tener compras reales.",
    lockedPoints: [
      "La etiqueta esencial para un primer viaje sigue abierta para todos",
      "premium-only se centra sobre todo en alojamientos especiales, momentos sociales y algunos eventos",
      "Puedes activar el mock desbloqueado desde la pantalla Premium para ver cómo se sentiría después"
    ],
    unlockCta: "Ver vista previa Premium",
    browseCta: "Volver a las guías gratis",
    premiumOnlyListTitle: "Escenas premium-only del mock actual",
    premiumOnlyListBody: "En el flujo mock actual, solo tratamos como bloqueadas las escenas más especializadas."
  },
  vi: {
    previewBadge: "Xem trước",
    premiumOnlyBadge: "Premium",
    lockedTitle: "Hướng dẫn này đang thuộc lớp mock Premium",
    lockedBody:
      "Các phép lịch sự cơ bản vẫn miễn phí. Chỉ những tình huống sâu hơn và chuyên biệt hơn mới được dùng để thử trải nghiệm trả phí trước khi có mua thật.",
    lockedPoints: [
      "Những điều cần cho chuyến đi đầu tiên vẫn mở miễn phí cho mọi người",
      "premium-only chủ yếu dành cho lưu trú đặc thù, tình huống xã hội và một số sự kiện",
      "Bạn có thể vào màn hình Premium để bật mock đã mở khóa và xem cảm giác sau khi mua"
    ],
    unlockCta: "Xem Premium preview",
    browseCta: "Quay lại hướng dẫn miễn phí",
    premiumOnlyListTitle: "Các tình huống premium-only hiện tại",
    premiumOnlyListBody: "Trong luồng mock Premium hiện tại, chỉ những tình huống chuyên biệt hơn mới được xem là bị khóa."
  }
};

export function getPremiumTierCopy(language: AppLanguage) {
  return premiumTierCopy[language];
}

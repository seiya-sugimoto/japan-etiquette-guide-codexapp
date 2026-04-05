import type { AppLanguage } from "@/types/language";

type PremiumMockCopy = {
  previewState: string;
  unlockedState: string;
  stateLabel: string;
  previewModeTitle: string;
  previewModeBody: string;
  unlockedModeTitle: string;
  unlockedModeBody: string;
  unlockedListTitle: string;
  unlockedListBody: string;
  unlockMockCta: string;
  resetMockCta: string;
};

export const premiumMockCopy: Record<AppLanguage, PremiumMockCopy> = {
  en: {
    previewState: "Preview",
    unlockedState: "Unlocked",
    stateLabel: "Premium status",
    previewModeTitle: "Preview mode",
    previewModeBody: "This is how Premium looks before purchase. It explains the direction without pretending the paid flow already exists.",
    unlockedModeTitle: "Unlocked mock mode",
    unlockedModeBody: "This simulates how the app could feel after purchase, so we can design the paid experience before real billing exists.",
    unlockedListTitle: "Preview candidates in the current app",
    unlockedListBody: "These are the scenes currently treated as Premium preview candidates for deeper content later.",
    unlockMockCta: "Switch to unlocked mock",
    resetMockCta: "Back to preview mode"
  },
  ja: {
    previewState: "プレビュー",
    unlockedState: "アンロック",
    stateLabel: "Premium 状態",
    previewModeTitle: "プレビューモード",
    previewModeBody: "購入前にどう見えるかを確認するための状態です。課金があるように見せすぎず、方向性だけを伝えます。",
    unlockedModeTitle: "アンロック mock モード",
    unlockedModeBody: "実課金なしで、購入後に近い見え方を試すための状態です。先に有料体験の設計を詰められます。",
    unlockedListTitle: "いま候補になっている Premium シーン",
    unlockedListBody: "今は、将来的により深い内容を足していく候補シーンとして扱っています。",
    unlockMockCta: "アンロック状態を試す",
    resetMockCta: "プレビュー状態に戻す"
  },
  ko: {
    previewState: "미리 보기",
    unlockedState: "해제됨",
    stateLabel: "Premium 상태",
    previewModeTitle: "미리 보기 모드",
    previewModeBody: "구매 전에는 어떻게 보일지 확인하는 상태입니다. 아직 결제가 있는 것처럼 과장하지 않고 방향만 보여 줍니다.",
    unlockedModeTitle: "해제 mock 모드",
    unlockedModeBody: "실제 결제 없이도 구매 후 화면이 어떻게 보일지 시험해 보는 상태입니다.",
    unlockedListTitle: "현재 Premium 후보 장면",
    unlockedListBody: "지금은 나중에 더 깊은 내용을 붙일 후보 장면으로 다루고 있습니다.",
    unlockMockCta: "해제 상태로 보기",
    resetMockCta: "미리 보기로 돌아가기"
  },
  "zh-Hant": {
    previewState: "預覽",
    unlockedState: "已解鎖",
    stateLabel: "Premium 狀態",
    previewModeTitle: "預覽模式",
    previewModeBody: "這是用來確認購買前畫面應該怎麼呈現的狀態，不會假裝現在已經有完整付費流程。",
    unlockedModeTitle: "解鎖 mock 模式",
    unlockedModeBody: "這是不用真實購買，也能先模擬購買後畫面的狀態。",
    unlockedListTitle: "目前的 Premium 候選情境",
    unlockedListBody: "這些情境目前被視為之後可加深內容的候選項目。",
    unlockMockCta: "切換成解鎖狀態",
    resetMockCta: "回到預覽狀態"
  },
  "zh-Hans": {
    previewState: "预览",
    unlockedState: "已解锁",
    stateLabel: "Premium 状态",
    previewModeTitle: "预览模式",
    previewModeBody: "这个状态用来确认购买前应该怎么展示，不会假装现在已经有完整付费流程。",
    unlockedModeTitle: "解锁 mock 模式",
    unlockedModeBody: "这个状态可以在没有真实购买的情况下，先模拟购买后的页面体验。",
    unlockedListTitle: "当前的 Premium 候选场景",
    unlockedListBody: "这些场景目前被视为以后可以补充更深内容的候选项。",
    unlockMockCta: "切换到解锁状态",
    resetMockCta: "回到预览状态"
  },
  th: {
    previewState: "พรีวิว",
    unlockedState: "ปลดล็อกแล้ว",
    stateLabel: "สถานะ Premium",
    previewModeTitle: "โหมดพรีวิว",
    previewModeBody: "สถานะนี้ใช้ดูว่าก่อนซื้อควรแสดงอย่างไร โดยไม่ทำให้ดูเหมือนว่ามีระบบจ่ายเงินจริงแล้ว",
    unlockedModeTitle: "โหมดปลดล็อก mock",
    unlockedModeBody: "สถานะนี้ใช้จำลองหน้าหลังซื้อได้ โดยยังไม่ต้องมีการจ่ายเงินจริง",
    unlockedListTitle: "สถานการณ์ที่ตอนนี้เป็น候補 Premium",
    unlockedListBody: "ตอนนี้เราใช้ฉากเหล่านี้เป็นตัวเลือกสำหรับเนื้อหาที่จะลงลึกมากขึ้นในอนาคต",
    unlockMockCta: "สลับเป็นโหมดปลดล็อก",
    resetMockCta: "กลับสู่โหมดพรีวิว"
  },
  fr: {
    previewState: "Aperçu",
    unlockedState: "Déverrouillé",
    stateLabel: "État Premium",
    previewModeTitle: "Mode aperçu",
    previewModeBody: "Cet état sert à voir comment Premium apparaît avant achat, sans faire croire qu'un vrai paiement existe déjà.",
    unlockedModeTitle: "Mode mock déverrouillé",
    unlockedModeBody: "Cet état simule le rendu après achat, même si la facturation réelle n'existe pas encore.",
    unlockedListTitle: "Scènes candidates pour Premium",
    unlockedListBody: "Ces scènes servent actuellement de candidates pour un traitement plus approfondi plus tard.",
    unlockMockCta: "Passer au mock déverrouillé",
    resetMockCta: "Revenir au mode aperçu"
  },
  es: {
    previewState: "Vista previa",
    unlockedState: "Desbloqueado",
    stateLabel: "Estado Premium",
    previewModeTitle: "Modo de vista previa",
    previewModeBody: "Este estado sirve para ver cómo debería mostrarse antes de comprar, sin fingir que ya existe un pago real.",
    unlockedModeTitle: "Modo mock desbloqueado",
    unlockedModeBody: "Este estado simula cómo podría verse después de la compra, aunque todavía no haya facturación real.",
    unlockedListTitle: "Escenas candidatas para Premium",
    unlockedListBody: "Estas escenas se están usando ahora como candidatas para añadir contenido más profundo después.",
    unlockMockCta: "Cambiar a modo desbloqueado",
    resetMockCta: "Volver al modo de vista previa"
  },
  vi: {
    previewState: "Xem trước",
    unlockedState: "Đã mở",
    stateLabel: "Trạng thái Premium",
    previewModeTitle: "Chế độ xem trước",
    previewModeBody: "Trạng thái này dùng để xem Premium nên xuất hiện thế nào trước khi mua, mà không giả như đã có thanh toán thật.",
    unlockedModeTitle: "Chế độ mock đã mở",
    unlockedModeBody: "Trạng thái này mô phỏng cảm giác sau khi mua, dù hiện vẫn chưa có thanh toán thật.",
    unlockedListTitle: "Các tình huống hiện là ứng viên Premium",
    unlockedListBody: "Những tình huống này hiện được dùng như nhóm ứng viên để thêm nội dung sâu hơn về sau.",
    unlockMockCta: "Chuyển sang trạng thái đã mở",
    resetMockCta: "Quay lại chế độ xem trước"
  }
};

export function getPremiumMockCopy(language: AppLanguage) {
  return premiumMockCopy[language] ?? premiumMockCopy.en;
}

import type { AppLanguage } from "@/types/language";

type PremiumBillingCopy = {
  liveReadyTitle: string;
  liveReadyBody: string;
  mockReadyTitle: string;
  mockReadyBody: string;
  buyNowLabel: string;
  buyWithPriceLabel: string;
  restoreLabel: string;
  refreshLabel: string;
  purchasePendingLabel: string;
  restorePendingLabel: string;
  noPackageBody: string;
  liveStatusCaption: string;
  mockStatusCaption: string;
  errorTitle: string;
};

const premiumBillingCopy: Record<AppLanguage, PremiumBillingCopy> = {
  en: {
    liveReadyTitle: "Billing connection is ready",
    liveReadyBody: "This device is using the real premium flow. Purchases and restore now connect to Apple billing through RevenueCat.",
    mockReadyTitle: "Mock billing is still active",
    mockReadyBody: "Expo Go and empty RevenueCat keys stay in mock mode, so we can keep designing the paid experience safely.",
    buyNowLabel: "Unlock Premium",
    buyWithPriceLabel: "Unlock Premium ({price})",
    restoreLabel: "Restore purchases",
    refreshLabel: "Refresh status",
    purchasePendingLabel: "Starting purchase...",
    restorePendingLabel: "Restoring purchases...",
    noPackageBody: "Premium is connected, but no lifetime package is available yet. Finish the RevenueCat offering setup and refresh again.",
    liveStatusCaption: "Live billing",
    mockStatusCaption: "Mock billing",
    errorTitle: "Premium connection note"
  },
  ja: {
    liveReadyTitle: "課金接続の準備ができています",
    liveReadyBody: "この端末では本番の Premium フローを使います。購入と復元は RevenueCat 経由で Apple の課金に接続されます。",
    mockReadyTitle: "現在は mock 課金のままです",
    mockReadyBody: "Expo Go や RevenueCat のキー未設定時は mock のまま動きます。安全に購入体験を詰めるための状態です。",
    buyNowLabel: "Premium をアンロック",
    buyWithPriceLabel: "Premium をアンロック（{price}）",
    restoreLabel: "購入を復元",
    refreshLabel: "状態を更新",
    purchasePendingLabel: "購入を開始しています…",
    restorePendingLabel: "購入情報を復元しています…",
    noPackageBody: "Premium 接続はできていますが、買い切りパッケージがまだ取得できていません。RevenueCat 側の offering 設定後にもう一度更新してください。",
    liveStatusCaption: "本番課金",
    mockStatusCaption: "mock 課金",
    errorTitle: "Premium 接続メモ"
  },
  ko: {
    liveReadyTitle: "결제 연결이 준비되었습니다",
    liveReadyBody: "이 기기에서는 실제 Premium 흐름을 사용합니다. 구매와 복원은 RevenueCat을 통해 Apple 결제로 연결됩니다.",
    mockReadyTitle: "현재는 mock 결제 상태입니다",
    mockReadyBody: "Expo Go 또는 RevenueCat 키가 비어 있는 경우에는 mock 상태로 유지되어 안전하게 유료 경험을 다듬을 수 있습니다.",
    buyNowLabel: "Premium 잠금 해제",
    buyWithPriceLabel: "Premium 잠금 해제 ({price})",
    restoreLabel: "구매 복원",
    refreshLabel: "상태 새로고침",
    purchasePendingLabel: "구매를 시작하는 중...",
    restorePendingLabel: "구매 내역을 복원하는 중...",
    noPackageBody: "Premium 연결은 되었지만 lifetime 패키지를 아직 불러오지 못했습니다. RevenueCat offering 설정 후 다시 새로고침해 주세요.",
    liveStatusCaption: "실제 결제",
    mockStatusCaption: "mock 결제",
    errorTitle: "Premium 연결 메모"
  },
  "zh-Hant": {
    liveReadyTitle: "付費連線已準備完成",
    liveReadyBody: "這台裝置會使用真正的 Premium 流程。購買與復原會透過 RevenueCat 連到 Apple 的付費系統。",
    mockReadyTitle: "目前仍是 mock 付費模式",
    mockReadyBody: "在 Expo Go 或尚未填入 RevenueCat 金鑰時，會維持 mock 模式，方便先安全地打磨付費體驗。",
    buyNowLabel: "解鎖 Premium",
    buyWithPriceLabel: "解鎖 Premium（{price}）",
    restoreLabel: "恢復購買",
    refreshLabel: "更新狀態",
    purchasePendingLabel: "正在開始購買…",
    restorePendingLabel: "正在恢復購買資訊…",
    noPackageBody: "Premium 已連上，但尚未取得買斷方案。請先完成 RevenueCat 的 offering 設定，再重新更新。",
    liveStatusCaption: "正式付費",
    mockStatusCaption: "mock 付費",
    errorTitle: "Premium 連線備註"
  },
  "zh-Hans": {
    liveReadyTitle: "付费连接已准备完成",
    liveReadyBody: "这台设备会使用真实的 Premium 流程。购买与恢复会通过 RevenueCat 连接到 Apple 的付费系统。",
    mockReadyTitle: "当前仍是 mock 付费模式",
    mockReadyBody: "在 Expo Go 或 RevenueCat 金钥未设置时，会保持 mock 模式，方便先安全地打磨付费体验。",
    buyNowLabel: "解锁 Premium",
    buyWithPriceLabel: "解锁 Premium（{price}）",
    restoreLabel: "恢复购买",
    refreshLabel: "更新状态",
    purchasePendingLabel: "正在开始购买…",
    restorePendingLabel: "正在恢复购买信息…",
    noPackageBody: "Premium 已连接，但还没有拿到买断方案。请先完成 RevenueCat 的 offering 设置后再刷新。",
    liveStatusCaption: "正式付费",
    mockStatusCaption: "mock 付费",
    errorTitle: "Premium 连接备注"
  },
  th: {
    liveReadyTitle: "ระบบซื้อพร้อมใช้งานแล้ว",
    liveReadyBody: "อุปกรณ์นี้กำลังใช้ Premium แบบจริงอยู่ การซื้อและการกู้คืนจะเชื่อมไปยังการชำระเงินของ Apple ผ่าน RevenueCat",
    mockReadyTitle: "ตอนนี้ยังอยู่ในโหมด mock",
    mockReadyBody: "ถ้าเปิดผ่าน Expo Go หรือยังไม่ได้ใส่ RevenueCat key ระบบจะอยู่ในโหมด mock เพื่อให้เราปรับประสบการณ์แบบเสียเงินได้อย่างปลอดภัย",
    buyNowLabel: "ปลดล็อก Premium",
    buyWithPriceLabel: "ปลดล็อก Premium ({price})",
    restoreLabel: "กู้คืนการซื้อ",
    refreshLabel: "อัปเดตสถานะ",
    purchasePendingLabel: "กำลังเริ่มการซื้อ...",
    restorePendingLabel: "กำลังกู้คืนข้อมูลการซื้อ...",
    noPackageBody: "เชื่อมต่อ Premium ได้แล้ว แต่ยังไม่มีแพ็กเกจซื้อขาดให้ใช้งาน โปรดตั้งค่า offering ใน RevenueCat แล้วค่อยอัปเดตอีกครั้ง",
    liveStatusCaption: "การซื้อจริง",
    mockStatusCaption: "การซื้อแบบ mock",
    errorTitle: "บันทึกการเชื่อมต่อ Premium"
  },
  fr: {
    liveReadyTitle: "La connexion d'achat est prête",
    liveReadyBody: "Cet appareil utilise le vrai flux Premium. L'achat et la restauration passent maintenant par Apple via RevenueCat.",
    mockReadyTitle: "Le mode mock est encore actif",
    mockReadyBody: "Dans Expo Go ou sans clé RevenueCat, l'application reste en mode mock pour continuer à ajuster l'expérience payante sans risque.",
    buyNowLabel: "Débloquer Premium",
    buyWithPriceLabel: "Débloquer Premium ({price})",
    restoreLabel: "Restaurer les achats",
    refreshLabel: "Actualiser l'état",
    purchasePendingLabel: "Achat en cours de démarrage...",
    restorePendingLabel: "Restauration des achats...",
    noPackageBody: "Premium est connecté, mais aucun pack lifetime n'est encore disponible. Termine d'abord l'offering RevenueCat puis réessaie.",
    liveStatusCaption: "Achat réel",
    mockStatusCaption: "Achat mock",
    errorTitle: "Note sur la connexion Premium"
  },
  es: {
    liveReadyTitle: "La conexión de pago está lista",
    liveReadyBody: "Este dispositivo usa el flujo real de Premium. La compra y la restauración se conectan ahora al pago de Apple a través de RevenueCat.",
    mockReadyTitle: "El modo mock sigue activo",
    mockReadyBody: "En Expo Go o sin la clave de RevenueCat, la app se mantiene en modo mock para seguir afinando la experiencia de pago con seguridad.",
    buyNowLabel: "Desbloquear Premium",
    buyWithPriceLabel: "Desbloquear Premium ({price})",
    restoreLabel: "Restaurar compras",
    refreshLabel: "Actualizar estado",
    purchasePendingLabel: "Iniciando compra...",
    restorePendingLabel: "Restaurando compras...",
    noPackageBody: "Premium está conectado, pero todavía no hay un paquete lifetime disponible. Termina la configuración del offering en RevenueCat y vuelve a actualizar.",
    liveStatusCaption: "Pago real",
    mockStatusCaption: "Pago mock",
    errorTitle: "Nota sobre la conexión Premium"
  },
  vi: {
    liveReadyTitle: "Kết nối thanh toán đã sẵn sàng",
    liveReadyBody: "Thiết bị này đang dùng luồng Premium thật. Mua và khôi phục sẽ đi qua RevenueCat để kết nối với thanh toán của Apple.",
    mockReadyTitle: "Hiện vẫn đang ở chế độ mock",
    mockReadyBody: "Trong Expo Go hoặc khi chưa điền khóa RevenueCat, ứng dụng sẽ giữ ở chế độ mock để tiếp tục chỉnh trải nghiệm trả phí một cách an toàn.",
    buyNowLabel: "Mở khóa Premium",
    buyWithPriceLabel: "Mở khóa Premium ({price})",
    restoreLabel: "Khôi phục mua hàng",
    refreshLabel: "Làm mới trạng thái",
    purchasePendingLabel: "Đang bắt đầu mua...",
    restorePendingLabel: "Đang khôi phục mua hàng...",
    noPackageBody: "Premium đã kết nối nhưng chưa có gói lifetime khả dụng. Hãy hoàn tất offering trong RevenueCat rồi cập nhật lại.",
    liveStatusCaption: "Thanh toán thật",
    mockStatusCaption: "Thanh toán mock",
    errorTitle: "Ghi chú kết nối Premium"
  }
};

export function getPremiumBillingCopy(language: AppLanguage) {
  return premiumBillingCopy[language] ?? premiumBillingCopy.en;
}

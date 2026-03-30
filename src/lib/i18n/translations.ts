import { localizedCategoryCopy } from "@/lib/i18n/category-copy";
import type { AppLanguage } from "@/types/language";

export type SuggestedTopic = {
  label: string;
  slug: string;
};

export const supportedLanguages: { code: AppLanguage; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語" },
  { code: "ko", label: "Korean", nativeLabel: "한국어" },
  { code: "zh-Hant", label: "Traditional Chinese", nativeLabel: "繁體中文" },
  { code: "zh-Hans", label: "Simplified Chinese", nativeLabel: "简体中文" },
  { code: "th", label: "Thai", nativeLabel: "ไทย" },
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt" }
];

type TranslationSet = {
  appName: string;
  homeQuestion: string;
  homeIntro: string;
  commonSituations: string;
  seeAll: string;
  unlockTitle: string;
  unlockBody: string;
  goPremium: string;
  browseTitle: string;
  browseDescription: string;
  bySituation: string;
  byPlace: string;
  searchPlaceholder: string;
  suggestedTopics: string;
  searchResults: string;
  recentSearches: string;
  clearAll: string;
  favoritesEmptyTitle: string;
  favoritesEmptyBody: string;
  settingsTitleLanguage: string;
  settingsBodyLanguage: string;
  settingsTitlePremium: string;
  settingsBodyPremium: string;
  settingsTitleFeedback: string;
  settingsBodyFeedback: string;
  chooseLanguage: string;
  suggestedForDevice: string;
  quickView: string;
  doLabel: string;
  avoidLabel: string;
  watchFor: string;
  whyItMatters: string;
  commonMistakes: string;
  readMore: string;
  save: string;
  saved: string;
  removeSaved: string;
  guideNotFound: string;
  guideMissing: string;
  premiumAccess: string;
  premiumPlaceholder: string;
  feedbackPlaceholder: string;
  languagePlaceholder: string;
  homeTab: string;
  browseTab: string;
  searchTab: string;
  savedTab: string;
  settingsTab: string;
};

const commonEnglish: TranslationSet = {
  appName: "Japan Etiquette Guide",
  homeQuestion: "What do you need right now?",
  homeIntro: "Fast etiquette guidance for trains, dining, baths, sacred places, and shared spaces.",
  commonSituations: "Common situations",
  seeAll: "See all",
  unlockTitle: "Unlock deeper etiquette guides",
  unlockBody: "Get more situations, richer explanations, and premium-only guidance.",
  goPremium: "Go Premium",
  browseTitle: "Browse Guides",
  browseDescription: "Simple habits and unwritten rules for common situations in Japan.",
  bySituation: "By Situation",
  byPlace: "By Place",
  searchPlaceholder: "Search etiquette topics...",
  suggestedTopics: "Suggested topics",
  searchResults: "Search results",
  recentSearches: "Recent searches",
  clearAll: "Clear all",
  favoritesEmptyTitle: "No favorites yet",
  favoritesEmptyBody: "Save guides you want to check again during your trip.",
  settingsTitleLanguage: "Language",
  settingsBodyLanguage: "Choose the language used across the app.",
  settingsTitlePremium: "Premium",
  settingsBodyPremium: "Unlock deeper cultural guidance with a one-time purchase.",
  settingsTitleFeedback: "Feedback",
  settingsBodyFeedback: "Tell us what travel situations or manners still feel unclear.",
  chooseLanguage: "Choose your language",
  suggestedForDevice: "Suggested from your device",
  quickView: "Quick View",
  doLabel: "What to do",
  avoidLabel: "What to avoid",
  watchFor: "Watch for",
  whyItMatters: "Why this matters",
  commonMistakes: "Common mistakes",
  readMore: "Read more",
  save: "Save",
  saved: "Saved",
  removeSaved: "Remove from saved",
  guideNotFound: "Guide not found",
  guideMissing: "This category is missing or the link is invalid.",
  premiumAccess: "Premium Access",
  premiumPlaceholder: "Unlock fuller guidance, extra situations, and deeper cultural context.",
  feedbackPlaceholder: "Feedback flow will be added in a later milestone.",
  languagePlaceholder: "Switch languages here.",
  homeTab: "Home",
  browseTab: "Browse",
  searchTab: "Search",
  savedTab: "Saved",
  settingsTab: "Settings"
};

export const translations: Record<AppLanguage, TranslationSet> = {
  en: commonEnglish,
  ja: {
    ...commonEnglish,
    homeQuestion: "今知りたいのはどれですか？",
    homeIntro: "電車、食事、温泉、寺社、共有空間でのマナーを、短時間で分かりやすく確認できます。",
    commonSituations: "よくあるシーン",
    seeAll: "すべて見る",
    unlockTitle: "より詳しいガイドを解放",
    unlockBody: "より多くのシーンと詳しい背景説明を利用できます。",
    goPremium: "プレミアムへ",
    browseTitle: "ガイド一覧",
    browseDescription: "日本でよくある場面ごとのマナーや暗黙ルールを、シンプルに確認できます。",
    bySituation: "シーン別",
    byPlace: "場所別",
    searchPlaceholder: "マナーを検索...",
    suggestedTopics: "おすすめトピック",
    searchResults: "検索結果",
    recentSearches: "最近の検索",
    clearAll: "すべて削除",
    favoritesEmptyTitle: "保存したガイドはまだありません",
    favoritesEmptyBody: "旅行中に見返したいガイドを保存できます。",
    settingsTitleLanguage: "言語",
    settingsBodyLanguage: "アプリ全体で使う言語を選べます。",
    settingsTitlePremium: "プレミアム",
    settingsBodyPremium: "より詳しい文化ガイドを一回の購入で利用できます。",
    settingsTitleFeedback: "フィードバック",
    settingsBodyFeedback: "分かりにくかった場面や追加してほしい内容を教えてください。",
    chooseLanguage: "言語を選ぶ",
    suggestedForDevice: "端末設定からのおすすめ",
    quickView: "クイックビュー",
    doLabel: "するとよいこと",
    avoidLabel: "避けたいこと",
    watchFor: "注意したい点",
    whyItMatters: "なぜ大切か",
    commonMistakes: "よくある失敗",
    readMore: "詳しく読む",
    save: "保存",
    saved: "保存済み",
    removeSaved: "保存を解除",
    guideNotFound: "ガイドが見つかりません",
    guideMissing: "このカテゴリは存在しないか、リンクが無効です。",
    premiumAccess: "プレミアムアクセス",
    premiumPlaceholder: "より詳しいガイドや追加シーンは Premium unlock で利用できます。",
    feedbackPlaceholder: "フィードバック導線は後のマイルストーンで追加予定です。",
    languagePlaceholder: "ここで言語を切り替えられます。",
    homeTab: "ホーム",
    browseTab: "一覧",
    searchTab: "検索",
    savedTab: "保存",
    settingsTab: "設定"
  },
  ko: { ...commonEnglish, homeQuestion: "지금 무엇이 가장 궁금한가요?", homeIntro: "전철, 식사, 온천, 종교 공간, 공공장소에서 바로 도움이 되는 예절을 빠르게 확인할 수 있어요.", commonSituations: "자주 만나는 상황", seeAll: "전체 보기", unlockTitle: "더 깊은 예절 가이드 열기", unlockBody: "더 많은 상황과 더 자세한 설명을 볼 수 있어요.", goPremium: "프리미엄 보기", browseTitle: "가이드 둘러보기", browseDescription: "일본에서 자주 만나는 상황별 예절과 암묵적인 규칙을 간단히 확인하세요.", bySituation: "상황별", byPlace: "장소별", searchPlaceholder: "예절 주제 검색...", suggestedTopics: "추천 주제", searchResults: "검색 결과", recentSearches: "최근 검색", clearAll: "모두 지우기", favoritesEmptyTitle: "아직 저장한 가이드가 없어요", favoritesEmptyBody: "여행 중 다시 보고 싶은 가이드를 저장할 수 있어요.", settingsTitleLanguage: "언어", settingsBodyLanguage: "앱 전체에서 사용할 언어를 선택하세요.", settingsTitleFeedback: "피드백", settingsBodyFeedback: "아직 헷갈리는 상황이나 추가하고 싶은 내용을 알려 주세요.", chooseLanguage: "언어 선택", suggestedForDevice: "기기 설정 기준 추천", quickView: "빠른 보기", doLabel: "이렇게 해보세요", avoidLabel: "피하면 좋아요", watchFor: "주의할 점", whyItMatters: "왜 중요한가요", commonMistakes: "자주 하는 실수", readMore: "더 보기", save: "저장", saved: "저장됨", removeSaved: "저장 해제", guideNotFound: "가이드를 찾을 수 없어요", guideMissing: "이 카테고리가 없거나 링크가 잘못되었어요.", premiumAccess: "프리미엄 이용", premiumPlaceholder: "더 자세한 가이드와 추가 상황은 Premium unlock 에서 제공됩니다.", feedbackPlaceholder: "피드백 기능은 이후 단계에서 추가될 예정입니다.", languagePlaceholder: "여기에서 언어를 바꿀 수 있어요.", homeTab: "홈", browseTab: "둘러보기", searchTab: "검색", savedTab: "저장", settingsTab: "설정" },
  "zh-Hant": { ...commonEnglish, homeQuestion: "你現在最想知道什麼？", homeIntro: "快速查看電車、用餐、溫泉、寺社與共享空間中常見的日本禮儀。", commonSituations: "常見情境", seeAll: "查看全部", unlockTitle: "解鎖更深入的禮儀指南", unlockBody: "查看更多情境與更完整的背景說明。", goPremium: "前往 Premium", browseTitle: "瀏覽指南", browseDescription: "用簡單方式了解在日本常見情境中的禮儀與默契規則。", bySituation: "依情境", byPlace: "依場所", searchPlaceholder: "搜尋禮儀主題...", suggestedTopics: "推薦主題", searchResults: "搜尋結果", recentSearches: "最近搜尋", clearAll: "全部清除", favoritesEmptyTitle: "尚未儲存任何指南", favoritesEmptyBody: "可儲存旅途中想再確認的指南。", settingsTitleLanguage: "語言", settingsBodyLanguage: "選擇整個 App 使用的語言。", settingsTitleFeedback: "意見回饋", settingsBodyFeedback: "告訴我們哪些情境仍然不夠清楚。", chooseLanguage: "選擇語言", suggestedForDevice: "依裝置語言推薦", quickView: "快速查看", doLabel: "可以這樣做", avoidLabel: "盡量避免", watchFor: "留意重點", whyItMatters: "為什麼重要", commonMistakes: "常見錯誤", readMore: "查看更多", save: "儲存", saved: "已儲存", removeSaved: "取消儲存", guideNotFound: "找不到指南", guideMissing: "此分類不存在，或連結無效。", premiumAccess: "Premium 存取", premiumPlaceholder: "更完整的指南與更多情境將在 Premium unlock 中提供。", feedbackPlaceholder: "回饋流程將在之後的里程碑加入。", languagePlaceholder: "可在這裡切換語言。", homeTab: "首頁", browseTab: "瀏覽", searchTab: "搜尋", savedTab: "已存", settingsTab: "設定" },
  "zh-Hans": { ...commonEnglish, homeQuestion: "你现在最想知道什么？", homeIntro: "快速查看电车、用餐、温泉、寺社和共享空间中的日本礼仪。", commonSituations: "常见场景", seeAll: "查看全部", unlockTitle: "解锁更深入的礼仪指南", unlockBody: "查看更多场景和更完整的背景说明。", goPremium: "前往 Premium", browseTitle: "浏览指南", browseDescription: "用简单方式了解在日本常见场景中的礼仪和默认规则。", bySituation: "按场景", byPlace: "按地点", searchPlaceholder: "搜索礼仪主题...", suggestedTopics: "推荐主题", searchResults: "搜索结果", recentSearches: "最近搜索", clearAll: "全部清除", favoritesEmptyTitle: "还没有保存的指南", favoritesEmptyBody: "可以保存旅行中想再次查看的指南。", settingsTitleLanguage: "语言", settingsBodyLanguage: "选择整个 App 使用的语言。", settingsTitleFeedback: "反馈", settingsBodyFeedback: "告诉我们哪些场景仍然不够清楚。", chooseLanguage: "选择语言", suggestedForDevice: "根据设备语言推荐", quickView: "快速查看", doLabel: "可以这样做", avoidLabel: "尽量避免", watchFor: "需要留意", whyItMatters: "为什么重要", commonMistakes: "常见错误", readMore: "查看更多", save: "保存", saved: "已保存", removeSaved: "取消保存", guideNotFound: "找不到指南", guideMissing: "该分类不存在，或链接无效。", premiumAccess: "Premium 访问", premiumPlaceholder: "更完整的指南和更多场景将在 Premium unlock 中提供。", feedbackPlaceholder: "反馈流程将在之后的里程碑中加入。", languagePlaceholder: "可在这里切换语言。", homeTab: "首页", browseTab: "浏览", searchTab: "搜索", savedTab: "已存", settingsTab: "设置" },
  th: { ...commonEnglish, homeQuestion: "ตอนนี้คุณอยากรู้เรื่องไหนมากที่สุด?", homeIntro: "ดูมารยาทที่ใช้ได้จริงในรถไฟ ร้านอาหาร ออนเซ็น ศาสนสถาน และพื้นที่ส่วนรวมได้อย่างรวดเร็ว", commonSituations: "สถานการณ์ที่พบบ่อย", seeAll: "ดูทั้งหมด", unlockTitle: "ปลดล็อกคู่มือมารยาทแบบละเอียด", unlockBody: "ดูสถานการณ์เพิ่มเติมและคำอธิบายที่ลึกขึ้นได้", goPremium: "ไปที่พรีเมียม", browseTitle: "ดูคู่มือทั้งหมด", browseDescription: "ดูมารยาทและกฎที่ไม่เขียนไว้สำหรับสถานการณ์ทั่วไปในญี่ปุ่นแบบเข้าใจง่าย", bySituation: "ตามสถานการณ์", byPlace: "ตามสถานที่", searchPlaceholder: "ค้นหาหัวข้อมารยาท...", suggestedTopics: "หัวข้อแนะนำ", searchResults: "ผลการค้นหา", recentSearches: "การค้นหาล่าสุด", clearAll: "ล้างทั้งหมด", favoritesEmptyTitle: "ยังไม่มีคู่มือที่บันทึกไว้", favoritesEmptyBody: "คุณสามารถบันทึกคู่มือที่อยากกลับมาดูระหว่างทริปได้", settingsTitleLanguage: "ภาษา", settingsBodyLanguage: "เลือกภาษาที่ใช้ในแอปทั้งหมด", settingsTitleFeedback: "ข้อเสนอแนะ", settingsBodyFeedback: "บอกเราว่าสถานการณ์ไหนยังไม่ชัดเจนหรืออยากให้เพิ่มอะไร", chooseLanguage: "เลือกภาษา", suggestedForDevice: "แนะนำตามอุปกรณ์ของคุณ", quickView: "ดูแบบเร็ว", doLabel: "ควรทำ", avoidLabel: "ควรหลีกเลี่ยง", watchFor: "ข้อควรระวัง", whyItMatters: "ทำไมจึงสำคัญ", commonMistakes: "ความผิดพลาดที่พบบ่อย", readMore: "อ่านเพิ่มเติม", save: "บันทึก", saved: "บันทึกแล้ว", removeSaved: "ยกเลิกการบันทึก", guideNotFound: "ไม่พบคู่มือ", guideMissing: "หมวดหมู่นี้ไม่มีอยู่หรือリンクไม่ถูกต้อง", premiumAccess: "การเข้าถึงพรีเมียม", premiumPlaceholder: "คู่มือที่ละเอียดกว่าและสถานการณ์เพิ่มเติมจะอยู่ใน Premium unlock", feedbackPlaceholder: "ฟังก์ชันข้อเสนอแนะจะถูกเพิ่มในลำดับถัดไป", languagePlaceholder: "เปลี่ยนภาษาได้ที่นี่", homeTab: "หน้าแรก", browseTab: "คู่มือ", searchTab: "ค้นหา", savedTab: "บันทึก", settingsTab: "ตั้งค่า" },
  fr: { ...commonEnglish, homeQuestion: "De quoi avez-vous besoin maintenant ?", homeIntro: "Consultez rapidement les règles utiles pour les trains, les repas, les bains, les lieux sacrés et les espaces partagés.", commonSituations: "Situations courantes", seeAll: "Tout voir", unlockTitle: "Débloquer des guides plus détaillés", unlockBody: "Accédez à plus de situations et à des explications plus riches.", goPremium: "Passer en Premium", browseTitle: "Parcourir les guides", browseDescription: "Des habitudes simples et des règles implicites pour les situations courantes au Japon.", bySituation: "Par situation", byPlace: "Par lieu", searchPlaceholder: "Rechercher un sujet...", suggestedTopics: "Sujets suggérés", searchResults: "Résultats", recentSearches: "Recherches récentes", clearAll: "Tout effacer", favoritesEmptyTitle: "Aucun guide enregistré", favoritesEmptyBody: "Vous pouvez enregistrer les guides à revoir pendant le voyage.", settingsTitleLanguage: "Langue", settingsBodyLanguage: "Choisissez la langue utilisée dans l'application.", settingsTitleFeedback: "Retour", settingsBodyFeedback: "Dites-nous quelles situations restent peu claires.", chooseLanguage: "Choisir la langue", suggestedForDevice: "Suggéré depuis votre appareil", quickView: "Vue rapide", doLabel: "À faire", avoidLabel: "À éviter", watchFor: "À surveiller", whyItMatters: "Pourquoi c'est important", commonMistakes: "Erreurs fréquentes", readMore: "En savoir plus", save: "Enregistrer", saved: "Enregistré", removeSaved: "Retirer", guideNotFound: "Guide introuvable", guideMissing: "Cette catégorie est absente ou le lien n'est pas valide.", premiumAccess: "Accès Premium", premiumPlaceholder: "Des guides plus complets et des situations supplémentaires arriveront avec Premium.", feedbackPlaceholder: "Le parcours de retour sera ajouté plus tard.", languagePlaceholder: "Changez la langue ici.", homeTab: "Accueil", browseTab: "Parcourir", searchTab: "Recherche", savedTab: "Enregistré", settingsTab: "Réglages" },
  es: { ...commonEnglish, homeQuestion: "¿Qué necesitas saber ahora?", homeIntro: "Consulta rápido las reglas útiles para trenes, comida, baños, lugares sagrados y espacios compartidos.", commonSituations: "Situaciones comunes", seeAll: "Ver todo", unlockTitle: "Desbloquear guías más completas", unlockBody: "Accede a más situaciones y explicaciones más detalladas.", goPremium: "Ir a Premium", browseTitle: "Explorar guías", browseDescription: "Hábitos simples y reglas implícitas para situaciones comunes en Japón.", bySituation: "Por situación", byPlace: "Por lugar", searchPlaceholder: "Buscar temas de etiqueta...", suggestedTopics: "Temas sugeridos", searchResults: "Resultados", recentSearches: "Búsquedas recientes", clearAll: "Borrar todo", favoritesEmptyTitle: "Aún no hay guías guardadas", favoritesEmptyBody: "Puedes guardar guías para revisarlas otra vez durante el viaje.", settingsTitleLanguage: "Idioma", settingsBodyLanguage: "Elige el idioma usado en toda la app.", settingsTitleFeedback: "Comentarios", settingsBodyFeedback: "Cuéntanos qué situaciones siguen siendo poco claras.", chooseLanguage: "Elige tu idioma", suggestedForDevice: "Sugerido según tu dispositivo", quickView: "Vista rápida", doLabel: "Qué hacer", avoidLabel: "Qué evitar", watchFor: "Ten en cuenta", whyItMatters: "Por qué importa", commonMistakes: "Errores comunes", readMore: "Leer más", save: "Guardar", saved: "Guardado", removeSaved: "Quitar de guardados", guideNotFound: "Guía no encontrada", guideMissing: "Esta categoría no existe o el enlace no es válido.", premiumAccess: "Acceso Premium", premiumPlaceholder: "Las guías más completas y situaciones extra estarán disponibles en Premium.", feedbackPlaceholder: "El flujo de comentarios se añadirá más adelante.", languagePlaceholder: "Cambia el idioma aquí.", homeTab: "Inicio", browseTab: "Explorar", searchTab: "Buscar", savedTab: "Guardado", settingsTab: "Ajustes" },
  vi: { ...commonEnglish, homeQuestion: "Lúc này bạn muốn biết điều gì nhất?", homeIntro: "Xem nhanh các phép lịch sự hữu ích trên tàu, khi ăn uống, ở onsen, nơi linh thiêng và không gian chung.", commonSituations: "Tình huống thường gặp", seeAll: "Xem tất cả", unlockTitle: "Mở khóa hướng dẫn chi tiết hơn", unlockBody: "Xem thêm nhiều tình huống và lời giải thích sâu hơn.", goPremium: "Xem Premium", browseTitle: "Danh sách hướng dẫn", browseDescription: "Những thói quen đơn giản và quy tắc ngầm trong các tình huống thường gặp ở Nhật.", bySituation: "Theo tình huống", byPlace: "Theo địa điểm", searchPlaceholder: "Tìm chủ đề phép lịch sự...", suggestedTopics: "Chủ đề gợi ý", searchResults: "Kết quả tìm kiếm", recentSearches: "Tìm kiếm gần đây", clearAll: "Xóa tất cả", favoritesEmptyTitle: "Chưa có hướng dẫn đã lưu", favoritesEmptyBody: "Bạn có thể lưu hướng dẫn để xem lại trong chuyến đi.", settingsTitleLanguage: "Ngôn ngữ", settingsBodyLanguage: "Chọn ngôn ngữ dùng trong toàn bộ ứng dụng.", settingsTitleFeedback: "Phản hồi", settingsBodyFeedback: "Hãy cho chúng tôi biết phần nào vẫn còn khó hiểu.", chooseLanguage: "Chọn ngôn ngữ", suggestedForDevice: "Đề xuất theo thiết bị", quickView: "Xem nhanh", doLabel: "Nên làm", avoidLabel: "Nên tránh", watchFor: "Điều cần lưu ý", whyItMatters: "Vì sao quan trọng", commonMistakes: "Lỗi thường gặp", readMore: "Đọc thêm", save: "Lưu", saved: "Đã lưu", removeSaved: "Bỏ lưu", guideNotFound: "Không tìm thấy hướng dẫn", guideMissing: "Danh mục này không tồn tại hoặc liên kết không hợp lệ.", premiumAccess: "Truy cập Premium", premiumPlaceholder: "Những hướng dẫn chi tiết hơn và tình huống bổ sung sẽ có trong Premium.", feedbackPlaceholder: "Luồng phản hồi sẽ được thêm ở giai đoạn sau.", languagePlaceholder: "Đổi ngôn ngữ tại đây.", homeTab: "Trang chủ", browseTab: "Danh sách", searchTab: "Tìm kiếm", savedTab: "Đã lưu", settingsTab: "Cài đặt" }
};

export const localizedSuggestedTopics: Record<AppLanguage, SuggestedTopic[]> = {
  en: [{ label: "Tattoo policy", slug: "onsen" }, { label: "Shrine photo rules", slug: "photo-video" }, { label: "Tipping", slug: "payments-tipping" }, { label: "Large luggage", slug: "large-luggage" }],
  ja: [{ label: "タトゥーの可否", slug: "onsen" }, { label: "寺社の撮影ルール", slug: "photo-video" }, { label: "チップ", slug: "payments-tipping" }, { label: "大きな荷物", slug: "large-luggage" }],
  ko: [{ label: "문신 가능 여부", slug: "onsen" }, { label: "신사 사진 규칙", slug: "photo-video" }, { label: "팁", slug: "payments-tipping" }, { label: "큰 짐", slug: "large-luggage" }],
  "zh-Hant": [{ label: "刺青可不可以", slug: "onsen" }, { label: "寺社拍照規則", slug: "photo-video" }, { label: "小費", slug: "payments-tipping" }, { label: "大型行李", slug: "large-luggage" }],
  "zh-Hans": [{ label: "纹身可不可以", slug: "onsen" }, { label: "寺社拍照规则", slug: "photo-video" }, { label: "小费", slug: "payments-tipping" }, { label: "大件行李", slug: "large-luggage" }],
  th: [{ label: "เรื่องรอยสัก", slug: "onsen" }, { label: "กฎการถ่ายรูปที่ศาลเจ้า", slug: "photo-video" }, { label: "ทิป", slug: "payments-tipping" }, { label: "กระเป๋าใบใหญ่", slug: "large-luggage" }],
  fr: [{ label: "Tatouages", slug: "onsen" }, { label: "Photos dans les sanctuaires", slug: "photo-video" }, { label: "Pourboire", slug: "payments-tipping" }, { label: "Gros bagages", slug: "large-luggage" }],
  es: [{ label: "Tatuajes", slug: "onsen" }, { label: "Fotos en santuarios", slug: "photo-video" }, { label: "Propinas", slug: "payments-tipping" }, { label: "Equipaje grande", slug: "large-luggage" }],
  vi: [{ label: "Hình xăm", slug: "onsen" }, { label: "Chụp ảnh ở đền chùa", slug: "photo-video" }, { label: "Tiền tip", slug: "payments-tipping" }, { label: "Hành lý lớn", slug: "large-luggage" }]
};

export const localizedRecentSearches: Record<AppLanguage, string[]> = {
  en: ["Public transport behavior", "Gift giving customs"],
  ja: ["電車でのふるまい", "手土産の考え方"],
  ko: ["대중교통 예절", "작은 선물 예절"],
  "zh-Hant": ["大眾交通禮儀", "伴手禮習慣"],
  "zh-Hans": ["公共交通礼仪", "伴手礼习惯"],
  th: ["มารยาทบนรถสาธารณะ", "การให้ของฝาก"],
  fr: ["Comportement dans les transports", "Petits cadeaux"],
  es: ["Comportamiento en transporte público", "Costumbres al regalar"],
  vi: ["Ứng xử trên phương tiện công cộng", "Phong tục quà nhỏ"]
};

export { localizedCategoryCopy };

export function getLanguageLabel(language: AppLanguage) {
  return supportedLanguages.find((item) => item.code === language)?.nativeLabel ?? language;
}

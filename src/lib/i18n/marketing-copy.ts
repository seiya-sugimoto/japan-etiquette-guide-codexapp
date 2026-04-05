import type { AppLanguage } from "@/types/language";

type PremiumCopy = {
  eyebrow: string;
  title: string;
  body: string;
  guidesLabel: string;
  languagesLabel: string;
  nowTitle: string;
  nowBody: string;
  nowPoints: [string, string, string];
  laterTitle: string;
  laterBody: string;
  laterPoints: [string, string, string];
  noteTitle: string;
  noteBody: string;
  browseCta: string;
  feedbackCta: string;
};

type FeedbackCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cards: [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string }
  ];
  helpsTitle: string;
  helpsPoints: [string, string, string];
  statusTitle: string;
  statusBody: string;
  browseCta: string;
  premiumCta: string;
};

const premiumPreviewCopy: Record<AppLanguage, PremiumCopy> = {
  en: {
    eyebrow: "Later ideas",
    title: "A calmer look at what Premium could become",
    body: "This preview shows the kind of deeper help we may add later, while keeping the core etiquette guide useful for everyone.",
    guidesLabel: "Guides now",
    languagesLabel: "Languages now",
    nowTitle: "Already included for everyone",
    nowBody: "The free guide is already broad and practical. Right now, the focus is making the everyday situations clear, calm, and easy to scan.",
    nowPoints: [
      "69 etiquette scenes across transport, dining, shopping, and sightseeing",
      "Detailed guidance in all 9 supported languages",
      "Fast scanning with quick view, common mistakes, and cultural context"
    ],
    laterTitle: "Ideas that fit a later Premium version",
    laterBody: "If Premium grows later, it should add depth rather than put the basic etiquette behind a paywall.",
    laterPoints: [
      "Deeper cultural context for nuanced situations",
      "Traveler-specific collections such as business, family, or long-stay visits",
      "Extra phrase cards, planning tools, or offline-focused bundles"
    ],
    noteTitle: "Current status",
    noteBody: "This is still a preview screen. There is no purchase flow yet, and the core app remains available without it.",
    browseCta: "Browse current guides",
    feedbackCta: "Share what would help"
  },
  ja: {
    eyebrow: "今後のアイデア",
    title: "Premium を将来どう育てるかのプレビュー",
    body: "この画面では、将来的に追加しうるより深いサポートの方向だけを見せています。基本のマナーガイドは、引き続き誰でも使いやすく保ちます。",
    guidesLabel: "現在のガイド数",
    languagesLabel: "現在の対応言語",
    nowTitle: "今すでに誰でも使えるもの",
    nowBody: "無料部分だけでも、旅行中によくある場面はかなり広くカバーしています。まずは日常の迷いやすい行動を、落ち着いて短く理解できることを優先しています。",
    nowPoints: [
      "移動・食事・買い物・観光を含む 69 シーン",
      "9 言語ですべて詳細本文まで対応",
      "Quick View、Common mistakes、背景説明で素早く理解"
    ],
    laterTitle: "将来 Premium に向いていそうな内容",
    laterBody: "もし Premium を育てるなら、基本マナーを閉じるのではなく、より深い理解や用途別の整理を足す方向が自然です。",
    laterPoints: [
      "迷いやすい場面の、より深い文化背景",
      "出張、家族旅行、長期滞在など目的別のまとめ",
      "フレーズ集、準備ツール、オフライン向けの追加パック"
    ],
    noteTitle: "現在の状態",
    noteBody: "これはまだプレビュー画面です。購入導線は未実装で、コアのガイドはそのまま使えます。",
    browseCta: "今あるガイドを見る",
    feedbackCta: "あると助かる内容を送る"
  },
  ko: {
    eyebrow: "앞으로의 아이디어",
    title: "Premium이 나중에 어떻게 커질 수 있는지 미리 보기",
    body: "이 화면은 앞으로 추가될 수 있는 더 깊은 도움의 방향만 보여 줍니다. 기본 에티켓 가이드는 계속 누구나 편하게 쓸 수 있게 둘 예정입니다.",
    guidesLabel: "현재 가이드",
    languagesLabel: "현재 언어",
    nowTitle: "지금도 모두에게 열려 있는 내용",
    nowBody: "무료 가이드만으로도 여행 중 자주 겪는 상황을 꽤 넓게 다루고 있습니다. 지금은 일상적인 실수를 줄이고 빠르게 이해할 수 있게 만드는 데 집중하고 있습니다.",
    nowPoints: [
      "이동, 식사, 쇼핑, 관광을 포함한 69개 장면",
      "지원 9개 언어 모두 상세 본문 제공",
      "Quick View, Common mistakes, 문화 맥락으로 빠르게 파악"
    ],
    laterTitle: "나중에 Premium에 어울리는 방향",
    laterBody: "Premium이 생긴다면 기본 예절을 잠그기보다, 더 깊은 이해와 목적별 정리를 더하는 편이 자연스럽습니다.",
    laterPoints: [
      "헷갈리기 쉬운 상황의 더 깊은 문화 맥락",
      "출장, 가족 여행, 장기 체류 등 목적별 묶음",
      "표현 카드, 준비 도구, 오프라인용 추가 묶음"
    ],
    noteTitle: "현재 상태",
    noteBody: "아직은 미리 보기 화면입니다. 구매 흐름은 없고, 핵심 가이드는 그대로 사용할 수 있습니다.",
    browseCta: "현재 가이드 보기",
    feedbackCta: "있으면 좋을 내용을 보내기"
  },
  "zh-Hant": {
    eyebrow: "之後的方向",
    title: "Premium 未來可能的樣子",
    body: "這個畫面只是展示之後可能加入的更深層幫助。基礎禮儀指南仍然會維持清楚、實用，而且讓所有人都能使用。",
    guidesLabel: "目前指南數",
    languagesLabel: "目前語言數",
    nowTitle: "現在所有人都能使用的內容",
    nowBody: "即使只有目前的免費內容，也已經涵蓋旅途中常見的大多數情境。現在的重點仍然是讓日常禮儀簡單、平靜、好理解。",
    nowPoints: [
      "涵蓋交通、用餐、購物與觀光的 69 個情境",
      "9 種支援語言都已有詳細內容",
      "透過 Quick View、Common mistakes 與文化背景快速理解"
    ],
    laterTitle: "較適合未來 Premium 的內容",
    laterBody: "如果之後發展 Premium，比起把基本禮儀鎖起來，更自然的方向是加入更深的理解與用途整理。",
    laterPoints: [
      "容易猶豫情境的更深入文化背景",
      "商務、親子、長住等旅行目的別整理",
      "短語卡、準備工具與偏離線使用的補充組合"
    ],
    noteTitle: "目前狀態",
    noteBody: "這仍然只是預覽畫面，還沒有購買流程，核心指南目前都可以直接使用。",
    browseCta: "查看目前指南",
    feedbackCta: "告訴我們什麼會更有幫助"
  },
  "zh-Hans": {
    eyebrow: "后续方向",
    title: "Premium 以后可能会变成什么样",
    body: "这个页面只是展示以后可能加入的更深入帮助。基础礼仪指南仍然会保持清楚、实用，并继续让所有人都能使用。",
    guidesLabel: "当前指南数",
    languagesLabel: "当前语言数",
    nowTitle: "现在所有人都能使用的内容",
    nowBody: "即使只看目前的免费内容，也已经覆盖旅途中常见的大多数场景。现在的重点仍然是让日常礼仪简单、平静、好理解。",
    nowPoints: [
      "覆盖交通、用餐、购物和观光的 69 个场景",
      "9 种支持语言都已有详细正文",
      "通过 Quick View、Common mistakes 和背景说明快速理解"
    ],
    laterTitle: "更适合未来 Premium 的内容",
    laterBody: "如果以后发展 Premium，比起把基础礼仪锁起来，更自然的方向是补充更深的理解和用途整理。",
    laterPoints: [
      "容易犹豫场景的更深入文化背景",
      "商务、家庭、长期停留等目的别整理",
      "短语卡、准备工具和偏离线使用的补充包"
    ],
    noteTitle: "当前状态",
    noteBody: "这仍然只是预览页面，目前没有购买流程，核心指南都可以直接使用。",
    browseCta: "查看当前指南",
    feedbackCta: "告诉我们什么会更有帮助"
  },
  th: {
    eyebrow: "แนวคิดในอนาคต",
    title: "ภาพรวมว่า Premium อาจพัฒนาไปทางไหน",
    body: "หน้านี้เป็นเพียงตัวอย่างของความช่วยเหลือเชิงลึกที่อาจเพิ่มเข้ามาในอนาคต โดยคู่มือมารยาทหลักจะยังคงใช้งานได้ง่ายสำหรับทุกคนเหมือนเดิม",
    guidesLabel: "คู่มือตอนนี้",
    languagesLabel: "ภาษาตอนนี้",
    nowTitle: "สิ่งที่ทุกคนใช้ได้อยู่แล้ว",
    nowBody: "แม้จะเป็นส่วนฟรีเพียงอย่างเดียว ตอนนี้ก็ค่อนข้างครอบคลุมสถานการณ์ที่นักเดินทางเจอบ่อยแล้ว จุดสำคัญยังคงเป็นการอธิบายให้สั้น สงบ และอ่านง่าย",
    nowPoints: [
      "69 สถานการณ์ ครอบคลุมการเดินทาง อาหาร ช้อปปิ้ง และท่องเที่ยว",
      "มีเนื้อหาแบบละเอียดครบทั้ง 9 ภาษา",
      "มี Quick View, Common mistakes และบริบททางวัฒนธรรมให้อ่านเร็ว"
    ],
    laterTitle: "สิ่งที่เหมาะจะเป็น Premium ในอนาคต",
    laterBody: "ถ้าจะมี Premium จริงในอนาคต ก็ควรเพิ่มความลึกมากกว่าปิดกั้นเนื้อหาพื้นฐาน",
    laterPoints: [
      "บริบททางวัฒนธรรมที่ลึกขึ้นในสถานการณ์ที่ลังเลง่าย",
      "ชุดเนื้อหาตามวัตถุประสงค์ เช่น ธุรกิจ ครอบครัว หรือพักยาว",
      "การ์ดวลี เครื่องมือเตรียมตัว หรือชุดใช้งานแบบออฟไลน์"
    ],
    noteTitle: "สถานะตอนนี้",
    noteBody: "ตอนนี้ยังเป็นเพียงหน้าพรีวิว ยังไม่มีระบบซื้อ และคู่มือหลักยังใช้งานได้ตามปกติ",
    browseCta: "ดูคู่มือที่มีตอนนี้",
    feedbackCta: "บอกเราว่าอะไรจะช่วยได้"
  },
  fr: {
    eyebrow: "Pour plus tard",
    title: "A quoi Premium pourrait ressembler plus tard",
    body: "Cet écran montre seulement le type d'aide plus approfondie qui pourrait arriver plus tard. Le guide principal doit rester utile et accessible à tout le monde.",
    guidesLabel: "Guides actuels",
    languagesLabel: "Langues actuelles",
    nowTitle: "Ce qui est déjà disponible pour tout le monde",
    nowBody: "Même en version gratuite, l'application couvre déjà de nombreuses situations courantes de voyage. La priorité reste de rendre les usages quotidiens clairs, calmes et faciles à lire.",
    nowPoints: [
      "69 scènes couvrant transport, repas, achats et visites",
      "Des contenus détaillés dans les 9 langues prises en charge",
      "Une lecture rapide avec Quick View, Common mistakes et contexte culturel"
    ],
    laterTitle: "Ce qui conviendrait mieux à un futur Premium",
    laterBody: "Si Premium arrive plus tard, le plus logique serait d'ajouter de la profondeur plutôt que de bloquer les bases derrière un paiement.",
    laterPoints: [
      "Un contexte culturel plus riche pour les situations délicates",
      "Des collections selon le voyage: affaires, famille, long séjour",
      "Des cartes de phrases, outils de préparation ou packs orientés hors ligne"
    ],
    noteTitle: "État actuel",
    noteBody: "Il s'agit encore d'un écran d'aperçu. Il n'y a pas encore d'achat, et le guide principal reste disponible tel quel.",
    browseCta: "Voir les guides actuels",
    feedbackCta: "Dire ce qui serait utile"
  },
  es: {
    eyebrow: "Más adelante",
    title: "Cómo podría crecer Premium más adelante",
    body: "Esta pantalla solo muestra el tipo de ayuda más profunda que podría añadirse en el futuro. La guía principal debe seguir siendo útil y abierta para todo el mundo.",
    guidesLabel: "Guías actuales",
    languagesLabel: "Idiomas actuales",
    nowTitle: "Lo que ya está disponible para todos",
    nowBody: "Incluso la parte gratuita ya cubre muchas situaciones comunes del viaje. Ahora mismo la prioridad es que lo cotidiano se entienda rápido, con calma y sin estrés.",
    nowPoints: [
      "69 escenas sobre transporte, comida, compras y turismo",
      "Contenido detallado en los 9 idiomas disponibles",
      "Lectura rápida con Quick View, Common mistakes y contexto cultural"
    ],
    laterTitle: "Qué encajaría mejor en un Premium futuro",
    laterBody: "Si Premium crece más adelante, lo natural sería añadir profundidad, no esconder la base detrás de un pago.",
    laterPoints: [
      "Más contexto cultural para situaciones delicadas",
      "Colecciones según el tipo de viaje: negocios, familia o estancia larga",
      "Tarjetas de frases, herramientas de preparación o paquetes pensados para usar sin conexión"
    ],
    noteTitle: "Estado actual",
    noteBody: "Todavía es una pantalla de vista previa. No hay compra disponible por ahora y la guía principal sigue abierta.",
    browseCta: "Ver las guías actuales",
    feedbackCta: "Contarnos qué ayudaría"
  },
  vi: {
    eyebrow: "Ý tưởng về sau",
    title: "Premium có thể phát triển theo hướng nào sau này",
    body: "Màn hình này chỉ cho xem trước kiểu hỗ trợ chuyên sâu có thể được thêm vào sau này. Phần hướng dẫn cốt lõi vẫn nên rõ ràng, hữu ích và mở cho mọi người.",
    guidesLabel: "Hướng dẫn hiện có",
    languagesLabel: "Ngôn ngữ hiện có",
    nowTitle: "Những gì hiện đã mở cho mọi người",
    nowBody: "Ngay cả phần miễn phí hiện tại cũng đã bao phủ khá nhiều tình huống du lịch thường gặp. Ưu tiên lúc này vẫn là giải thích rõ, nhẹ nhàng và dễ đọc trên điện thoại.",
    nowPoints: [
      "69 tình huống về di chuyển, ăn uống, mua sắm và tham quan",
      "Nội dung chi tiết trong cả 9 ngôn ngữ hỗ trợ",
      "Đọc nhanh với Quick View, Common mistakes và bối cảnh văn hóa"
    ],
    laterTitle: "Những gì hợp hơn với Premium trong tương lai",
    laterBody: "Nếu Premium được phát triển sau này, hướng tự nhiên hơn là thêm chiều sâu chứ không khóa phần cơ bản.",
    laterPoints: [
      "Bối cảnh văn hóa sâu hơn cho những tình huống dễ ngập ngừng",
      "Bộ sưu tập theo mục đích chuyến đi như công tác, gia đình, lưu trú dài ngày",
      "Thẻ câu nói, công cụ chuẩn bị hoặc gói tập trung vào dùng ngoại tuyến"
    ],
    noteTitle: "Trạng thái hiện tại",
    noteBody: "Đây vẫn chỉ là màn hình xem trước. Hiện chưa có luồng mua và phần hướng dẫn cốt lõi vẫn dùng bình thường.",
    browseCta: "Xem hướng dẫn hiện có",
    feedbackCta: "Cho chúng tôi biết điều gì sẽ hữu ích"
  }
};

const feedbackScreenCopy: Record<AppLanguage, FeedbackCopy> = {
  en: {
    eyebrow: "Help us improve",
    title: "What kind of feedback is most useful right now",
    body: "The feedback flow is not live yet, but this screen shows the kinds of notes that would help improve the guide first.",
    cards: [
      {
        title: "Unclear wording",
        body: "Tell us where a guide feels hard to understand, too strict, or too vague."
      },
      {
        title: "Missing situation",
        body: "Tell us about a real travel moment that is not covered yet, or still feels incomplete."
      },
      {
        title: "Language polish",
        body: "Tell us if a translation sounds unnatural, too literal, or awkward on mobile."
      }
    ],
    helpsTitle: "What helps most",
    helpsPoints: [
      "Which screen or scene you opened",
      "What felt unclear or uncomfortable",
      "What wording would have helped in that moment"
    ],
    statusTitle: "Current status",
    statusBody: "There is no send form in the app yet. For now, this screen works as a guide for the kind of feedback we want to collect next.",
    browseCta: "Browse guides again",
    premiumCta: "See Premium preview"
  },
  ja: {
    eyebrow: "改善のために",
    title: "今いちばん助かるフィードバック",
    body: "まだ送信フォームは入っていませんが、この画面では先に集めたいフィードバックの種類を整理しています。",
    cards: [
      {
        title: "文言がわかりにくい",
        body: "説明が厳しすぎる、曖昧すぎる、意味がつかみにくいと感じた箇所があれば助かります。"
      },
      {
        title: "足りないシーンがある",
        body: "実際に旅行中に迷った場面で、まだ載っていないものや説明が浅いものを教えてほしいです。"
      },
      {
        title: "翻訳をもう少し自然にしたい",
        body: "不自然な訳、直訳っぽい表現、スマホで読みにくい言い回しがあれば改善できます。"
      }
    ],
    helpsTitle: "あると助かる情報",
    helpsPoints: [
      "どの画面・どのシーンを見たか",
      "どこがわかりにくかったか",
      "その場ではどう書いてあると助かったか"
    ],
    statusTitle: "現在の状態",
    statusBody: "アプリ内送信はまだありません。今はまず、どんなフィードバックを集めたいかをここで明確にしています。",
    browseCta: "ガイドを見直す",
    premiumCta: "Premium プレビューを見る"
  },
  ko: {
    eyebrow: "개선을 위해",
    title: "지금 가장 도움이 되는 피드백",
    body: "아직 앱 안에서 바로 보내는 흐름은 없지만, 먼저 어떤 의견이 가장 도움이 되는지 이 화면에 정리해 두었습니다.",
    cards: [
      {
        title: "표현이 이해하기 어렵다",
        body: "설명이 너무 딱딱하거나 모호하거나, 의미가 잘 잡히지 않는 부분을 알려 주세요."
      },
      {
        title: "빠진 상황이 있다",
        body: "실제 여행 중 헷갈렸는데 아직 다루지 않았거나 설명이 얕은 상황이 있으면 알려 주세요."
      },
      {
        title: "번역을 더 자연스럽게",
        body: "직역처럼 느껴지거나 모바일에서 어색하게 보이는 표현도 큰 도움이 됩니다."
      }
    ],
    helpsTitle: "있으면 가장 도움이 되는 정보",
    helpsPoints: [
      "어떤 화면이나 장면을 보고 있었는지",
      "무엇이 헷갈리거나 불편했는지",
      "그 순간 어떤 표현이면 더 도움이 됐을지"
    ],
    statusTitle: "현재 상태",
    statusBody: "아직 앱 안에 전송 폼은 없습니다. 지금은 먼저 어떤 피드백을 모을지 분명히 정리하는 단계입니다.",
    browseCta: "가이드 다시 보기",
    premiumCta: "Premium 미리 보기"
  },
  "zh-Hant": {
    eyebrow: "幫助我們改善",
    title: "現在最有幫助的回饋類型",
    body: "目前還沒有正式送出表單，但這個畫面先整理了最值得優先收集的回饋內容。",
    cards: [
      {
        title: "文案不夠清楚",
        body: "如果某段說明太嚴、太模糊，或不容易一下子理解，這種回饋很有幫助。"
      },
      {
        title: "缺少某個情境",
        body: "如果你旅途中遇到實際會猶豫的場面，但目前沒有收錄或說明不夠完整，也很值得告訴我們。"
      },
      {
        title: "翻譯還能更自然",
        body: "如果某些翻譯太直、讀起來不自然，或在手機上不夠順，也可以作為優先改善點。"
      }
    ],
    helpsTitle: "最有幫助的資訊",
    helpsPoints: [
      "你當時看的是哪個畫面或哪個情境",
      "哪裡讓你覺得不清楚或不舒服",
      "當下如果怎麼寫會更有幫助"
    ],
    statusTitle: "目前狀態",
    statusBody: "App 內送出功能還沒加入。現階段先把未來想收集的回饋方向整理清楚。",
    browseCta: "再看一次指南",
    premiumCta: "看看 Premium 預覽"
  },
  "zh-Hans": {
    eyebrow: "帮助我们改进",
    title: "现在最有帮助的反馈类型",
    body: "目前还没有正式的发送表单，但这个页面先整理了最值得优先收集的反馈内容。",
    cards: [
      {
        title: "文案不够清楚",
        body: "如果某段说明太严、太模糊，或不容易一下理解，这类反馈会很有帮助。"
      },
      {
        title: "缺少某个场景",
        body: "如果你旅途中遇到真实会犹豫的场面，但目前没有收录或说明还不完整，也很值得告诉我们。"
      },
      {
        title: "翻译还能更自然",
        body: "如果某些翻译太直、读起来不自然，或在手机上不够顺，也可以作为优先优化点。"
      }
    ],
    helpsTitle: "最有帮助的信息",
    helpsPoints: [
      "你当时打开的是哪个页面或场景",
      "哪里让你觉得不清楚或不舒服",
      "如果当时怎么写会更有帮助"
    ],
    statusTitle: "当前状态",
    statusBody: "App 内还没有发送功能。现阶段先把未来希望收集的反馈方向整理清楚。",
    browseCta: "再看一次指南",
    premiumCta: "看看 Premium 预览"
  },
  th: {
    eyebrow: "ช่วยให้เราปรับดีขึ้น",
    title: "ฟีดแบ็กแบบไหนที่มีประโยชน์ที่สุดตอนนี้",
    body: "ตอนนี้ยังไม่มีฟอร์มส่งในแอป แต่หน้านี้สรุปประเภทของความคิดเห็นที่อยากเก็บก่อนเป็นลำดับแรก",
    cards: [
      {
        title: "ข้อความยังไม่ชัด",
        body: "ถ้าคำอธิบายดูเข้มเกินไป คลุมเครือเกินไป หรืออ่านแล้วยังไม่เข้าใจง่าย ข้อมูลแบบนี้ช่วยมาก"
      },
      {
        title: "ยังขาดบางสถานการณ์",
        body: "ถ้ามีเหตุการณ์จริงระหว่างเดินทางที่คุณลังเล แต่ในแอปยังไม่มี หรือยังอธิบายไม่พอ ก็บอกเราได้"
      },
      {
        title: "อยากให้ภาษาธรรมชาติกว่านี้",
        body: "ถ้าคำแปลดูแข็ง ตรงเกินไป หรืออ่านบนมือถือแล้วไม่ลื่น ก็เป็นจุดที่ควรปรับ"
      }
    ],
    helpsTitle: "ข้อมูลที่ช่วยได้มาก",
    helpsPoints: [
      "ตอนนั้นคุณเปิดหน้าหรือสถานการณ์ไหนอยู่",
      "ตรงไหนที่ทำให้รู้สึกไม่ชัดหรือไม่สบายใจ",
      "ถ้าจะช่วยในตอนนั้น ควรเขียนว่าอย่างไร"
    ],
    statusTitle: "สถานะตอนนี้",
    statusBody: "ตอนนี้ยังไม่มีฟังก์ชันส่งจากในแอป หน้านี้จึงใช้เพื่อบอกก่อนว่าเราอยากเก็บฟีดแบ็กแบบไหนต่อไป",
    browseCta: "กลับไปดูคู่มือ",
    premiumCta: "ดู Premium preview"
  },
  fr: {
    eyebrow: "Pour nous aider à améliorer",
    title: "Le type de retour le plus utile en ce moment",
    body: "Il n'y a pas encore de formulaire d'envoi dans l'app, mais cet écran précise les retours que nous aimerions recueillir en priorité.",
    cards: [
      {
        title: "Formulation peu claire",
        body: "Si un texte semble trop strict, trop vague ou difficile à comprendre rapidement, c'est très utile de le signaler."
      },
      {
        title: "Situation manquante",
        body: "S'il manque une vraie situation de voyage, ou si une scène semble encore incomplète, ce retour est précieux."
      },
      {
        title: "Traduction à affiner",
        body: "Si une traduction paraît trop littérale, peu naturelle ou lourde sur mobile, cela vaut la peine de l'améliorer."
      }
    ],
    helpsTitle: "Ce qui nous aide le plus",
    helpsPoints: [
      "L'écran ou la scène que vous consultiez",
      "Ce qui semblait flou ou gênant",
      "Quelle formulation aurait été plus utile à ce moment-là"
    ],
    statusTitle: "État actuel",
    statusBody: "L'envoi direct depuis l'application n'existe pas encore. Pour l'instant, cet écran sert à clarifier le type de retour que nous voulons recueillir ensuite.",
    browseCta: "Revoir les guides",
    premiumCta: "Voir l'aperçu Premium"
  },
  es: {
    eyebrow: "Para mejorar",
    title: "Qué tipo de comentario ayuda más ahora mismo",
    body: "Todavía no hay un formulario de envío dentro de la app, pero esta pantalla aclara qué tipo de comentarios nos ayudarían primero.",
    cards: [
      {
        title: "Texto poco claro",
        body: "Si una explicación te parece demasiado rígida, demasiado vaga o difícil de entender rápido, ese comentario ayuda mucho."
      },
      {
        title: "Falta una situación",
        body: "Si te encontraste con un momento real del viaje que no está cubierto, o que aún se siente incompleto, también nos sirve mucho."
      },
      {
        title: "Pulir la traducción",
        body: "Si una traducción suena muy literal, poco natural o incómoda en móvil, también vale la pena revisarla."
      }
    ],
    helpsTitle: "Lo que más ayuda",
    helpsPoints: [
      "Qué pantalla o escena estabas viendo",
      "Qué parte te resultó poco clara o incómoda",
      "Qué redacción te habría ayudado en ese momento"
    ],
    statusTitle: "Estado actual",
    statusBody: "Todavía no existe un envío directo dentro de la app. Por ahora, esta pantalla deja claro qué tipo de comentarios queremos recoger después.",
    browseCta: "Volver a las guías",
    premiumCta: "Ver vista previa Premium"
  },
  vi: {
    eyebrow: "Giúp chúng tôi cải thiện",
    title: "Loại phản hồi nào hữu ích nhất vào lúc này",
    body: "Hiện chưa có biểu mẫu gửi ngay trong ứng dụng, nhưng màn hình này cho biết trước những loại góp ý mà chúng tôi muốn ưu tiên thu thập.",
    cards: [
      {
        title: "Câu chữ chưa rõ",
        body: "Nếu một phần giải thích quá cứng, quá mơ hồ hoặc khó hiểu nhanh, kiểu phản hồi này rất hữu ích."
      },
      {
        title: "Thiếu một tình huống",
        body: "Nếu bạn gặp một khoảnh khắc thật trong chuyến đi mà app chưa có, hoặc vẫn giải thích còn thiếu, điều đó cũng rất đáng để biết."
      },
      {
        title: "Cần làm mượt bản dịch",
        body: "Nếu một bản dịch nghe quá sát nghĩa, chưa tự nhiên hoặc đọc trên điện thoại chưa mượt, chúng tôi cũng muốn chỉnh lại."
      }
    ],
    helpsTitle: "Thông tin giúp nhiều nhất",
    helpsPoints: [
      "Bạn đang xem màn hình hay tình huống nào",
      "Điểm nào khiến bạn thấy chưa rõ hoặc chưa thoải mái",
      "Ngay lúc đó, cách viết nào sẽ hữu ích hơn"
    ],
    statusTitle: "Trạng thái hiện tại",
    statusBody: "Hiện chưa có chức năng gửi trực tiếp trong app. Tạm thời, màn hình này dùng để làm rõ loại phản hồi mà chúng tôi muốn thu thập tiếp theo.",
    browseCta: "Xem lại hướng dẫn",
    premiumCta: "Xem Premium preview"
  }
};

export function getPremiumPreviewCopy(language: AppLanguage) {
  return premiumPreviewCopy[language] ?? premiumPreviewCopy.en;
}

export function getFeedbackScreenCopy(language: AppLanguage) {
  return feedbackScreenCopy[language] ?? feedbackScreenCopy.en;
}

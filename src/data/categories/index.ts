import { englishCategories } from "@/data/categories/en";
import { localizedCategoryCopy } from "@/lib/i18n/translations";
import type { CategoryContent } from "@/types/category";
import type { AppLanguage } from "@/types/language";

const localizedContentTemplates: Record<
  Exclude<AppLanguage, "en">,
  {
    followFlow: string;
    observeFirst: string;
    avoidAssumptions: string;
    doNotRush: string;
    sharedSpace: string;
    commonOne: string;
    commonTwo: string;
    askOrRead: string;
  }
> = {
  ja: {
    followFlow: "現地の案内や周囲の流れに合わせて行動しましょう。",
    observeFirst: "迷ったら、まず周りの人の動きを見てから行動すると安心です。",
    avoidAssumptions: "自分の国と同じ感覚だと思い込まないようにしましょう。",
    doNotRush: "不安なときほど急がず、落ち着いて確認するのが大切です。",
    sharedSpace: "この場面には小さな暗黙ルールがあり、それが共有空間の心地よさにつながっています。",
    commonOne: "案内表示を見落として先に動いてしまうこと。",
    commonTwo: "周囲の流れを見ずに自分の感覚で判断してしまうこと。",
    askOrRead: "困ったときは案内表示を確認するか、短く丁寧にスタッフへ聞くのが安心です。"
  },
  ko: {
    followFlow: "현지 안내와 주변 흐름에 맞춰 행동하세요.",
    observeFirst: "확신이 없으면 먼저 다른 사람들의 움직임을 살펴보세요.",
    avoidAssumptions: "내 나라와 같은 방식일 것이라고 단정하지 마세요.",
    doNotRush: "헷갈릴수록 서두르지 말고 차분히 확인하는 것이 좋습니다.",
    sharedSpace: "이 상황에는 작은 암묵적 규칙이 있고, 그것이 함께 쓰는 공간의 편안함을 만듭니다.",
    commonOne: "안내 표지를 놓치고 먼저 행동하는 것.",
    commonTwo: "주변 흐름을 보지 않고 자기 방식대로 판단하는 것.",
    askOrRead: "헷갈리면 안내를 읽거나 짧고 정중하게 직원에게 물어보세요."
  },
  "zh-Hant": {
    followFlow: "請配合現場指示與周圍動線行動。",
    observeFirst: "如果不確定，先觀察周圍的人怎麼做會比較安心。",
    avoidAssumptions: "不要直接假設這裡和自己熟悉的習慣一樣。",
    doNotRush: "越不確定時，越要放慢一點、先確認再行動。",
    sharedSpace: "這類情境常有一些小默契，能讓共享空間更舒服。",
    commonOne: "沒注意到現場標示就先行動。",
    commonTwo: "沒有先看周圍節奏，就照自己的習慣判斷。",
    askOrRead: "如果拿不準，先看標示，或簡短有禮地詢問工作人員。"
  },
  "zh-Hans": {
    followFlow: "请按照现场提示和周围动线行动。",
    observeFirst: "如果不确定，先看看周围的人怎么做会更稳妥。",
    avoidAssumptions: "不要直接认为这里和自己熟悉的习惯完全一样。",
    doNotRush: "越不确定的时候，越要放慢一点，先确认再行动。",
    sharedSpace: "这类场景通常有一些小默契，它们会让共享空间更舒适。",
    commonOne: "没注意到提示牌就先行动。",
    commonTwo: "没有看周围节奏，就按自己的习惯判断。",
    askOrRead: "如果拿不准，先看提示，或简短礼貌地询问工作人员。"
  },
  th: {
    followFlow: "ปฏิบัติตามป้ายแนะนำและจังหวะของคนรอบตัว",
    observeFirst: "ถ้าไม่แน่ใจ ให้สังเกตคนอื่นก่อนแล้วค่อยทำตาม",
    avoidAssumptions: "อย่าคิดว่าธรรมเนียมที่นี่จะเหมือนประเทศของตนเองทั้งหมด",
    doNotRush: "ยิ่งไม่แน่ใจ ยิ่งควรใจเย็นและตรวจดูก่อน",
    sharedSpace: "สถานการณ์นี้มักมีธรรมเนียมเล็ก ๆ ที่ช่วยให้พื้นที่ส่วนรวมอยู่ร่วมกันได้อย่างสบาย",
    commonOne: "มองข้ามป้ายหรือคำแนะนำแล้วรีบทำทันที",
    commonTwo: "ตัดสินใจจากความคุ้นเคยของตัวเองโดยไม่ดูคนรอบข้าง",
    askOrRead: "ถ้าไม่มั่นใจ ให้ดูป้ายก่อนหรือถามพนักงานสั้น ๆ อย่างสุภาพ"
  },
  fr: {
    followFlow: "Suivez les indications sur place et le mouvement autour de vous.",
    observeFirst: "En cas de doute, observez d'abord ce que font les autres.",
    avoidAssumptions: "N'imaginez pas que la règle est la même que chez vous.",
    doNotRush: "Si vous hésitez, ralentissez et vérifiez calmement.",
    sharedSpace: "Cette situation repose souvent sur de petites attentes sociales qui rendent l'espace partagé plus agréable.",
    commonOne: "Agir trop vite sans avoir regardé les panneaux.",
    commonTwo: "Décider selon ses propres habitudes sans observer l'environnement.",
    askOrRead: "Si besoin, lisez les indications ou demandez poliment au personnel."
  },
  es: {
    followFlow: "Sigue las indicaciones del lugar y el flujo de las personas a tu alrededor.",
    observeFirst: "Si no estás seguro, observa primero lo que hacen los demás.",
    avoidAssumptions: "No des por hecho que aquí se hace igual que en tu país.",
    doNotRush: "Cuando tengas dudas, ve despacio y confirma antes de actuar.",
    sharedSpace: "Esta situación suele depender de pequeñas reglas implícitas que hacen más cómodo el espacio compartido.",
    commonOne: "Actuar antes de leer los avisos o señales.",
    commonTwo: "Decidir según tus hábitos sin mirar el ritmo del lugar.",
    askOrRead: "Si hace falta, lee las indicaciones o pregunta con educación al personal."
  },
  vi: {
    followFlow: "Hãy làm theo bảng hướng dẫn và nhịp di chuyển xung quanh bạn.",
    observeFirst: "Nếu chưa chắc, hãy quan sát người khác trước rồi mới làm theo.",
    avoidAssumptions: "Đừng cho rằng quy tắc ở đây giống hệt nơi bạn quen thuộc.",
    doNotRush: "Càng không chắc thì càng nên chậm lại và kiểm tra kỹ.",
    sharedSpace: "Tình huống này thường có những quy tắc ngầm nhỏ giúp không gian chung dễ chịu hơn.",
    commonOne: "Bỏ qua biển hướng dẫn rồi hành động ngay.",
    commonTwo: "Tự quyết theo thói quen của mình mà không nhìn xung quanh.",
    askOrRead: "Nếu không chắc, hãy xem bảng hướng dẫn hoặc hỏi nhân viên một cách ngắn gọn, lịch sự."
  }
};

function buildLocalizedContent(language: AppLanguage, title: string, shortDescription: string, fallback: CategoryContent) {
  if (language === "en") {
    return fallback;
  }

  const template = localizedContentTemplates[language];

  return {
    quickView: [shortDescription, template.followFlow],
    dos: [template.followFlow, template.observeFirst],
    donts: [template.avoidAssumptions, template.doNotRush],
    whyItMatters: [`${title}: ${template.sharedSpace}`],
    commonMistakes: [template.commonOne, template.commonTwo],
    readMore: [template.askOrRead]
  };
}

export function getCategories(language: AppLanguage = "en") {
  return englishCategories.map((category) => {
    const copy = localizedCategoryCopy[language][category.id];
    const title = copy?.title ?? category.title;
    const shortDescription = copy?.shortDescription ?? category.shortDescription;

    return {
      ...category,
      title,
      shortDescription,
      content: buildLocalizedContent(language, title, shortDescription, category.content)
    };
  });
}

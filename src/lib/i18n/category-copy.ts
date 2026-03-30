import { additionalLocalizedCategoryCopy } from "@/lib/i18n/additional-category-copy";
import type { AppLanguage } from "@/types/language";

type CategoryCopy = {
  title: string;
  shortDescription: string;
};

const englishCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "Train", shortDescription: "Quiet, orderly habits for stations and trains." },
  restaurant: { title: "Restaurant", shortDescription: "Simple dining habits that help service run smoothly." },
  shrine: { title: "Shrine", shortDescription: "Respectful behavior around shrine grounds and rituals." },
  onsen: { title: "Onsen", shortDescription: "Bathing etiquette for shared hot spring and public bath spaces." },
  temple: { title: "Temple", shortDescription: "Quiet, attentive behavior in Buddhist temple spaces." },
  ryokan: { title: "Ryokan", shortDescription: "How to follow the flow of a traditional inn without stress." },
  "shoes-indoors": { title: "Shoes Indoors", shortDescription: "When to remove shoes and how indoor footwear usually works." },
  "trash-public": { title: "Trash", shortDescription: "How to carry waste and stay considerate in shared public space." },
  "payments-tipping": { title: "Payments", shortDescription: "How payment flow works and why tipping is uncommon." },
  chopsticks: { title: "Chopsticks", shortDescription: "Small dining rules that surprise many first-time visitors." },
  "visiting-home": { title: "Visiting a Home", shortDescription: "How to act naturally when invited into someone's home." },
  "convenience-store": { title: "Convenience Store", shortDescription: "Small checkout habits that can feel unfamiliar at first." },
  "queue-escalator": { title: "Queues", shortDescription: "How to line up and move smoothly in busy public spaces." },
  "photo-video": { title: "Photos and Video", shortDescription: "How to film respectfully without blocking people or breaking local rules." },
  smoking: { title: "Smoking", shortDescription: "Where smoking is allowed can be more limited than many visitors expect." },
  "large-luggage": { title: "Large Luggage", shortDescription: "How to handle suitcases without slowing crowded stations and trains." },
  "residential-private": { title: "Residential Areas", shortDescription: "Quiet, respectful habits around homes, apartments, and private property." },
  toilet: { title: "Toilets", shortDescription: "How to use unfamiliar toilets calmly and keep the space clean." },
  bicycle: { title: "Bicycles", shortDescription: "Riding and parking habits that help you stay safe and avoid trouble." }
};

const japaneseCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "電車", shortDescription: "駅や車内で、静かにスムーズに過ごすための基本マナー。" },
  restaurant: { title: "レストラン", shortDescription: "注文や会計の流れで迷いにくくなる基本マナー。" },
  shrine: { title: "神社", shortDescription: "神社の境内や参拝で、失礼になりにくいふるまい。" },
  onsen: { title: "温泉", shortDescription: "共同浴場や温泉での入浴マナー。" },
  temple: { title: "寺院", shortDescription: "寺院で静かに過ごすための基本マナー。" },
  ryokan: { title: "旅館", shortDescription: "旅館で戸惑いやすい流れと、気をつけたい点。" },
  "shoes-indoors": { title: "靴を脱ぐ", shortDescription: "どこで靴を脱ぐのか、室内履きをどう使うのか。" },
  "trash-public": { title: "ゴミ・公共マナー", shortDescription: "ゴミの持ち方や共有空間での配慮。" },
  "payments-tipping": { title: "支払い・チップ", shortDescription: "会計の流れと、チップ文化が一般的でない理由。" },
  chopsticks: { title: "箸", shortDescription: "食事中に意外と驚かれやすい箸のマナー。" },
  "visiting-home": { title: "家を訪問するとき", shortDescription: "人の家に招かれたときに自然にふるまうためのポイント。" },
  "convenience-store": { title: "コンビニ", shortDescription: "レジや袋詰めで戸惑いやすい小さな流れ。" },
  "queue-escalator": { title: "列・エスカレーター", shortDescription: "人の流れを止めにくくする並び方や立ち位置。" },
  "photo-video": { title: "写真・動画撮影", shortDescription: "人や場所に配慮して撮るための撮影マナー。" },
  smoking: { title: "喫煙", shortDescription: "どこで吸えるか、どこでは避けるべきかの考え方。" },
  "large-luggage": { title: "大きな荷物", shortDescription: "スーツケースで通路や人の流れをふさがないための工夫。" },
  "residential-private": { title: "住宅街・私有地・民泊", shortDescription: "生活の場で静かに過ごすための配慮。" },
  toilet: { title: "トイレ", shortDescription: "見慣れない設備でも落ち着いて使うためのガイド。" },
  bicycle: { title: "自転車・レンタサイクル", shortDescription: "歩行者や駐輪場所に配慮するための基本ルール。" }
};

const koreanCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "전철", shortDescription: "역과 전철 안에서 조용하고 자연스럽게 행동하는 방법." },
  restaurant: { title: "식당", shortDescription: "주문과 계산 흐름에서 당황하지 않도록 돕는 기본 예절." },
  shrine: { title: "신사", shortDescription: "신사 경내와 참배 공간에서 실례가 되지 않게 행동하는 법." },
  onsen: { title: "온천", shortDescription: "공용 목욕탕과 온천에서의 기본 입욕 예절." },
  temple: { title: "절", shortDescription: "사찰에서 조용히 머물기 위한 기본 예절." },
  ryokan: { title: "료칸", shortDescription: "료칸에서 헷갈리기 쉬운 흐름과 주의할 점." },
  "shoes-indoors": { title: "실내에서 신발 벗기", shortDescription: "어디서 신발을 벗고 실내 슬리퍼를 어떻게 쓰는지." },
  "trash-public": { title: "쓰레기·공공 예절", shortDescription: "쓰레기를 들고 다니는 법과 공공장소 배려." },
  "payments-tipping": { title: "결제·팁", shortDescription: "계산 흐름과 팁이 일반적이지 않은 이유." },
  chopsticks: { title: "젓가락", shortDescription: "식사 중 의외로 많이 실수하는 젓가락 예절." },
  "visiting-home": { title: "집 방문", shortDescription: "누군가의 집에 초대되었을 때 자연스럽게 행동하는 방법." },
  "convenience-store": { title: "편의점", shortDescription: "계산대에서 낯설게 느껴질 수 있는 작은 흐름." },
  "queue-escalator": { title: "줄서기·에스컬레이터", shortDescription: "사람 흐름을 막지 않도록 서고 움직이는 법." },
  "photo-video": { title: "사진·영상 촬영", shortDescription: "사람과 장소를 배려하며 촬영하는 방법." },
  smoking: { title: "흡연", shortDescription: "어디서 흡연할 수 있고 어디서는 피해야 하는지." },
  "large-luggage": { title: "큰 짐", shortDescription: "큰 캐리어로 길이나 문 앞을 막지 않기 위한 요령." },
  "residential-private": { title: "주택가·사유지·민박", shortDescription: "생활 공간에서 조용히 지내기 위한 배려." },
  toilet: { title: "화장실", shortDescription: "익숙하지 않은 화장실도 침착하게 사용하는 방법." },
  bicycle: { title: "자전거·공유 자전거", shortDescription: "보행자와 주차 규칙을 배려하는 기본 습관." }
};

const traditionalChineseCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "電車", shortDescription: "在車站與車廂內安靜、順暢地行動的基本禮儀。" },
  restaurant: { title: "餐廳", shortDescription: "幫助你在點餐與結帳時更不容易困惑的基本禮儀。" },
  shrine: { title: "神社", shortDescription: "在神社境內與參拜空間中較不容易失禮的做法。" },
  onsen: { title: "溫泉", shortDescription: "共用浴場與溫泉的基本入浴禮儀。" },
  temple: { title: "寺院", shortDescription: "在寺院中安靜停留的基本禮儀。" },
  ryokan: { title: "旅館", shortDescription: "在旅館中容易搞混的流程與需要注意的地方。" },
  "shoes-indoors": { title: "脫鞋", shortDescription: "在哪裡要脫鞋，以及室內拖鞋通常怎麼使用。" },
  "trash-public": { title: "垃圾與公共禮儀", shortDescription: "如何自己帶垃圾，以及在公共空間中多一點體貼。" },
  "payments-tipping": { title: "付款與小費", shortDescription: "結帳流程，以及為什麼日本通常不需要給小費。" },
  chopsticks: { title: "筷子", shortDescription: "許多第一次來日本的旅客會意外踩到的筷子禮儀。" },
  "visiting-home": { title: "拜訪住家", shortDescription: "受邀進入別人家時，自然不失禮的做法。" },
  "convenience-store": { title: "便利商店", shortDescription: "在結帳檯前常讓人覺得陌生的小流程。" },
  "queue-escalator": { title: "排隊與手扶梯", shortDescription: "如何排隊與站位，才不會打斷人流。" },
  "photo-video": { title: "拍照與錄影", shortDescription: "顧及他人與場所規則的拍攝方式。" },
  smoking: { title: "吸菸", shortDescription: "哪裡可以吸、哪裡應避免吸菸的基本想法。" },
  "large-luggage": { title: "大型行李", shortDescription: "用大行李箱移動時，避免擋到通道與人流的方法。" },
  "residential-private": { title: "住宅區・私人空間・民宿", shortDescription: "在生活空間中安靜停留所需要的配合。" },
  toilet: { title: "廁所", shortDescription: "面對不熟悉的設備時，也能安心使用的簡單指南。" },
  bicycle: { title: "自行車・租借單車", shortDescription: "顧及行人與停車規則的基本習慣。" }
};

const simplifiedChineseCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "电车", shortDescription: "在车站和车厢里安静、顺畅行动的基本礼仪。" },
  restaurant: { title: "餐厅", shortDescription: "帮助你在点餐和结账时不那么容易困惑的基本礼仪。" },
  shrine: { title: "神社", shortDescription: "在神社境内和参拜空间里较不容易失礼的做法。" },
  onsen: { title: "温泉", shortDescription: "公共浴场和温泉的基本入浴礼仪。" },
  temple: { title: "寺院", shortDescription: "在寺院中安静停留的基本礼仪。" },
  ryokan: { title: "旅馆", shortDescription: "在旅馆中容易弄混的流程和需要注意的地方。" },
  "shoes-indoors": { title: "脱鞋", shortDescription: "在哪里要脱鞋，以及室内拖鞋通常怎么使用。" },
  "trash-public": { title: "垃圾与公共礼仪", shortDescription: "如何自己带垃圾，以及在公共空间中多一点体贴。" },
  "payments-tipping": { title: "支付与小费", shortDescription: "结账流程，以及为什么日本通常不需要给小费。" },
  chopsticks: { title: "筷子", shortDescription: "很多第一次来日本的游客容易踩到的筷子礼仪。" },
  "visiting-home": { title: "拜访住家", shortDescription: "受邀进入别人家时，自然又不失礼的做法。" },
  "convenience-store": { title: "便利店", shortDescription: "在收银台前常让人觉得陌生的小流程。" },
  "queue-escalator": { title: "排队与扶梯", shortDescription: "如何排队和站位，才不容易挡住人流。" },
  "photo-video": { title: "拍照与录像", shortDescription: "兼顾他人与场所规则的拍摄方式。" },
  smoking: { title: "吸烟", shortDescription: "哪里可以吸、哪里应避免吸烟的基本判断。" },
  "large-luggage": { title: "大件行李", shortDescription: "带着大箱子移动时，避免挡到通道和人流的方法。" },
  "residential-private": { title: "住宅区・私有地・民宿", shortDescription: "在生活空间中安静停留所需要的配合。" },
  toilet: { title: "厕所", shortDescription: "面对不熟悉的设备时，也能安心使用的简单指南。" },
  bicycle: { title: "自行车・租赁单车", shortDescription: "顾及行人和停车规则的基本习惯。" }
};

const thaiCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "รถไฟ", shortDescription: "มารยาทพื้นฐานเพื่อให้การใช้สถานีและรถไฟราบรื่นขึ้น" },
  restaurant: { title: "ร้านอาหาร", shortDescription: "มารยาทพื้นฐานที่ช่วยให้สั่งอาหารและจ่ายเงินได้ง่ายขึ้น" },
  shrine: { title: "ศาลเจ้า", shortDescription: "การวางตัวอย่างสุภาพในพื้นที่ศาลเจ้าและระหว่างการสักการะ" },
  onsen: { title: "ออนเซ็น", shortDescription: "มารยาทพื้นฐานในการใช้บ่ออาบน้ำรวมและออนเซ็น" },
  temple: { title: "วัด", shortDescription: "มารยาทพื้นฐานในการอยู่ในวัดอย่างสงบ" },
  ryokan: { title: "เรียวกัง", shortDescription: "จุดที่นักท่องเที่ยวมักสับสนเมื่อเข้าพักเรียวกัง" },
  "shoes-indoors": { title: "การถอดรองเท้า", shortDescription: "ควรถอดรองเท้าที่ไหน และรองเท้าใส่ในอาคารใช้อย่างไร" },
  "trash-public": { title: "ขยะและมารยาทสาธารณะ", shortDescription: "การถือขยะของตัวเองและการอยู่ร่วมในพื้นที่สาธารณะ" },
  "payments-tipping": { title: "การจ่ายเงินและทิป", shortDescription: "ขั้นตอนการจ่ายเงินและเหตุผลที่ญี่ปุ่นไม่ค่อยมีวัฒนธรรมทิป" },
  chopsticks: { title: "ตะเกียบ", shortDescription: "มารยาทเรื่องตะเกียบที่นักท่องเที่ยวมักไม่ทันคิด" },
  "visiting-home": { title: "การไปบ้านคนอื่น", shortDescription: "วิธีวางตัวอย่างเป็นธรรมชาติเมื่อได้รับเชิญเข้าบ้าน" },
  "convenience-store": { title: "ร้านสะดวกซื้อ", shortDescription: "จังหวะเล็ก ๆ ที่เคาน์เตอร์จ่ายเงินซึ่งอาจรู้สึกไม่คุ้น" },
  "queue-escalator": { title: "การต่อคิวและบันไดเลื่อน", shortDescription: "การยืนและต่อคิวโดยไม่ขวางคนอื่น" },
  "photo-video": { title: "การถ่ายรูปและวิดีโอ", shortDescription: "วิธีถ่ายอย่างสุภาพและคำนึงถึงคนอื่นกับกฎของสถานที่" },
  smoking: { title: "การสูบบุหรี่", shortDescription: "แนวคิดพื้นฐานว่าในที่ไหนสูบได้และที่ไหนควรหลีกเลี่ยง" },
  "large-luggage": { title: "กระเป๋าใบใหญ่", shortDescription: "วิธีใช้กระเป๋าเดินทางใบใหญ่โดยไม่กีดขวางทางเดิน" },
  "residential-private": { title: "ย่านที่พักอาศัย・พื้นที่ส่วนตัว・ที่พักแบบโฮสต์", shortDescription: "การอยู่ในพื้นที่อยู่อาศัยอย่างเงียบและเกรงใจ" },
  toilet: { title: "ห้องน้ำ", shortDescription: "คู่มือง่าย ๆ สำหรับใช้ห้องน้ำที่ไม่คุ้นเคยอย่างสบายใจ" },
  bicycle: { title: "จักรยาน・จักรยานเช่า", shortDescription: "นิสัยพื้นฐานที่คำนึงถึงคนเดินเท้าและกฎการจอด" }
};

const frenchCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "Train", shortDescription: "Les habitudes utiles pour rester calme et fluide dans les gares et les trains." },
  restaurant: { title: "Restaurant", shortDescription: "Les bases utiles pour commander et payer sans stress." },
  shrine: { title: "Sanctuaire", shortDescription: "Comment se comporter avec respect dans l'enceinte d'un sanctuaire." },
  onsen: { title: "Onsen", shortDescription: "Les règles de base pour les bains publics et les sources chaudes." },
  temple: { title: "Temple", shortDescription: "Les bases pour rester discret et attentif dans un temple." },
  ryokan: { title: "Ryokan", shortDescription: "Les points qui surprennent souvent dans une auberge japonaise." },
  "shoes-indoors": { title: "Chaussures à l'intérieur", shortDescription: "Où enlever ses chaussures et comment utiliser les chaussons." },
  "trash-public": { title: "Déchets et espace public", shortDescription: "Comment gérer ses déchets et rester attentif dans les espaces partagés." },
  "payments-tipping": { title: "Paiement et pourboire", shortDescription: "Le déroulement du paiement et pourquoi le pourboire est rare." },
  chopsticks: { title: "Baguettes", shortDescription: "Les petites règles autour des baguettes qui surprennent souvent." },
  "visiting-home": { title: "Visiter un logement", shortDescription: "Comment se comporter naturellement quand on est invité chez quelqu'un." },
  "convenience-store": { title: "Supérette", shortDescription: "Les petits réflexes de caisse qui peuvent sembler inhabituels." },
  "queue-escalator": { title: "Files et escalators", shortDescription: "Comment faire la queue et se placer sans gêner le flux." },
  "photo-video": { title: "Photo et vidéo", shortDescription: "Comment filmer en respectant les personnes et les règles du lieu." },
  smoking: { title: "Tabac", shortDescription: "Comprendre où il est permis de fumer et où il vaut mieux éviter." },
  "large-luggage": { title: "Grands bagages", shortDescription: "Comment gérer de grosses valises sans bloquer le passage." },
  "residential-private": { title: "Quartiers résidentiels et lieux privés", shortDescription: "Comment rester discret dans les lieux de vie et les hébergements privés." },
  toilet: { title: "Toilettes", shortDescription: "Un guide simple pour utiliser calmement des toilettes peu familières." },
  bicycle: { title: "Vélos", shortDescription: "Les habitudes de base pour rouler et stationner sans problème." }
};

const spanishCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "Tren", shortDescription: "Hábitos útiles para moverse con calma en estaciones y trenes." },
  restaurant: { title: "Restaurante", shortDescription: "Lo básico para pedir y pagar sin confundirse." },
  shrine: { title: "Santuario", shortDescription: "Cómo comportarse con respeto dentro de un santuario." },
  onsen: { title: "Onsen", shortDescription: "Las reglas básicas para baños públicos y aguas termales." },
  temple: { title: "Templo", shortDescription: "Lo básico para permanecer en silencio y con atención en un templo." },
  ryokan: { title: "Ryokan", shortDescription: "Puntos que suelen confundir en una posada tradicional japonesa." },
  "shoes-indoors": { title: "Quitarse los zapatos", shortDescription: "Dónde quitarse los zapatos y cómo se usan las pantuflas." },
  "trash-public": { title: "Basura y espacio público", shortDescription: "Cómo llevar tu basura y moverte con consideración en espacios compartidos." },
  "payments-tipping": { title: "Pago y propina", shortDescription: "Cómo suele funcionar el pago y por qué la propina no es común." },
  chopsticks: { title: "Palillos", shortDescription: "Pequeñas reglas sobre los palillos que sorprenden a muchos viajeros." },
  "visiting-home": { title: "Visitar una casa", shortDescription: "Cómo comportarte con naturalidad cuando te invitan a una casa." },
  "convenience-store": { title: "Tienda de conveniencia", shortDescription: "Pequeños hábitos de caja que al principio pueden resultar extraños." },
  "queue-escalator": { title: "Filas y escaleras mecánicas", shortDescription: "Cómo hacer fila y colocarte sin interrumpir el paso." },
  "photo-video": { title: "Fotos y video", shortDescription: "Cómo grabar y sacar fotos respetando a las personas y las reglas del lugar." },
  smoking: { title: "Fumar", shortDescription: "Dónde se puede fumar y dónde conviene evitarlo." },
  "large-luggage": { title: "Equipaje grande", shortDescription: "Cómo llevar maletas grandes sin bloquear el paso." },
  "residential-private": { title: "Zonas residenciales y lugares privados", shortDescription: "Cómo mantenerte tranquilo en barrios residenciales y alojamientos privados." },
  toilet: { title: "Baños", shortDescription: "Una guía simple para usar baños poco familiares con calma." },
  bicycle: { title: "Bicicletas", shortDescription: "Hábitos básicos para circular y aparcar sin problemas." }
};

const vietnameseCategoryCopy: Record<string, CategoryCopy> = {
  train: { title: "Tàu điện", shortDescription: "Những thói quen cơ bản để đi lại nhẹ nhàng trong ga và trên tàu." },
  restaurant: { title: "Nhà hàng", shortDescription: "Những điều cơ bản giúp bạn gọi món và thanh toán dễ hơn." },
  shrine: { title: "Đền Thần đạo", shortDescription: "Cách cư xử lịch sự trong khuôn viên đền và khi tham bái." },
  onsen: { title: "Onsen", shortDescription: "Những phép lịch sự cơ bản khi dùng suối nước nóng và nhà tắm công cộng." },
  temple: { title: "Chùa", shortDescription: "Những điều cơ bản để ở trong chùa một cách yên tĩnh và tôn trọng." },
  ryokan: { title: "Ryokan", shortDescription: "Những điểm du khách thường thấy khó hiểu ở nhà trọ kiểu Nhật." },
  "shoes-indoors": { title: "Cởi giày trong nhà", shortDescription: "Khi nào cần cởi giày và dép đi trong nhà thường được dùng thế nào." },
  "trash-public": { title: "Rác và phép lịch sự nơi công cộng", shortDescription: "Cách tự mang rác và giữ ý trong không gian chung." },
  "payments-tipping": { title: "Thanh toán và tiền tip", shortDescription: "Cách thanh toán thường diễn ra và vì sao tiền tip không phổ biến." },
  chopsticks: { title: "Đũa", shortDescription: "Những quy tắc nhỏ về đũa khiến nhiều du khách bất ngờ." },
  "visiting-home": { title: "Khi đến nhà người khác", shortDescription: "Cách cư xử tự nhiên khi được mời vào nhà ai đó." },
  "convenience-store": { title: "Cửa hàng tiện lợi", shortDescription: "Những nhịp nhỏ ở quầy thanh toán có thể khiến bạn thấy lạ lúc đầu." },
  "queue-escalator": { title: "Xếp hàng và thang cuốn", shortDescription: "Cách đứng và xếp hàng để không cản dòng người." },
  "photo-video": { title: "Chụp ảnh và quay video", shortDescription: "Cách ghi hình có ý tứ với người khác và với quy định của nơi đó." },
  smoking: { title: "Hút thuốc", shortDescription: "Hiểu nơi nào có thể hút và nơi nào nên tránh." },
  "large-luggage": { title: "Hành lý lớn", shortDescription: "Cách dùng vali lớn mà không chặn lối đi." },
  "residential-private": { title: "Khu dân cư và nơi ở riêng", shortDescription: "Cách giữ yên tĩnh trong khu ở và chỗ lưu trú riêng." },
  toilet: { title: "Nhà vệ sinh", shortDescription: "Hướng dẫn đơn giản để dùng nhà vệ sinh lạ một cách bình tĩnh." },
  bicycle: { title: "Xe đạp", shortDescription: "Những thói quen cơ bản để đi xe và đỗ xe an toàn, không phiền người khác." }
};

export const localizedCategoryCopy: Record<AppLanguage, Record<string, CategoryCopy>> = {
  en: { ...englishCategoryCopy, ...(additionalLocalizedCategoryCopy.en ?? {}) },
  ja: { ...japaneseCategoryCopy, ...(additionalLocalizedCategoryCopy.ja ?? {}) },
  ko: { ...koreanCategoryCopy, ...(additionalLocalizedCategoryCopy.ko ?? {}) },
  "zh-Hant": {
    ...traditionalChineseCategoryCopy,
    ...(additionalLocalizedCategoryCopy["zh-Hant"] ?? {})
  },
  "zh-Hans": {
    ...simplifiedChineseCategoryCopy,
    ...(additionalLocalizedCategoryCopy["zh-Hans"] ?? {})
  },
  th: thaiCategoryCopy,
  fr: frenchCategoryCopy,
  es: spanishCategoryCopy,
  vi: vietnameseCategoryCopy
};

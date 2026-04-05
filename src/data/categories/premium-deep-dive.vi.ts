import type { CategoryId, PremiumDeepDive } from "@/types/category";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

export const vietnamesePremiumDeepDive: PremiumDeepDiveMap = {
  ryokan: {
    culturalNotes: [
      "Dich vu o ryokan thuong co cam giac du doan truoc nhu cau vi ca ngay van hanh theo nhip chung.",
      "Phong co the chuyen tu cho nghi sang cho an roi sang cho ngu, nen giu phong gon gang la mot phan cua trai nghiem."
    ],
    situationCards: [
      {
        title: "Ban muon ra ngoai ngay sau khi check-in",
        body: "Neu vua moi duoc giai thich ve gio an toi, gio tam hoac cach su dung phong, roi di ngay co the gay ra vai vuong nho sau do. Thuong chi can dung lai mot phut de nhin ky hon la du."
      },
      {
        title: "Nhan vien co the quay lai trong luc ban dang sap xep",
        body: "O ryokan, viec trai futon, phuc vu bua an hoac sap xep phong co the khien nhan vien vao phong nhieu lan. Vali mo, khan uot va day sac trai san de bi chu y hon so voi khach san thuong."
      }
    ],
    phraseCards: [
      {
        phrase: "夕食は何時ですか？",
        pronunciation: "Yuushoku wa nanji desu ka?",
        explanation: "Cach don gian va lich su de xac nhan gio an toi.",
        useWhen: "Huu ich neu luc giai thich dien ra nhanh hoac ban den trong tinh trang hoi met."
      },
      {
        phrase: "こちらで待てばいいですか？",
        pronunciation: "Kochira de mateba ii desu ka?",
        explanation: "Cach hoi binh tinh xem nen doi o dau.",
        useWhen: "Huu ich trong luc check-in, duoc dan vao phong hoac cho bua an."
      }
    ],
    checklist: [
      "Xac nhan gio an, gio tam va gio check-out truoc khi unpack het do.",
      "Di dung loai dep o dung khu, nhat la gan nha ve sinh va tatami.",
      "Neu nhan vien co the vao phong, hay thu gon do uot, vali mo va day dien."
    ]
  },
  "visiting-home": {
    culturalNotes: [
      "Lam mot vi khach de chiu thuong la theo nhip cua chu nha hon la co gang lam dung het cac nghi thuc.",
      "Khi chu nha noi khong sao dau, nhieu khi do la su tu te, nen tiet che mot chut thuong tu nhien hon viec nhan tat ca theo nghia den."
    ],
    situationCards: [
      {
        title: "Ban duoc bao cu thoai mai nhu o nha",
        body: "Dieu do thuong co nghia la ban khong can qua cung nhac, khong phai la cu xu nhu o khach san. Van nen di chuyen nhe va doi them tin hieu tu chu nha."
      },
      {
        title: "Ban khong chac co nen de nghi giup hay khong",
        body: "Lam qua nhieu co the bi xem la xen vao, con khong lam gi ca lai co the tao cam giac xa cach. Thuong chi can de nghi mot hai lan roi theo cau tra loi cua chu nha."
      }
    ],
    phraseCards: [
      {
        phrase: "何かお手伝いしましょうか？",
        pronunciation: "Nanika otetsudai shimashou ka?",
        explanation: "Cach nhe nhang de de nghi giup do ma khong tao ap luc.",
        useWhen: "Tot khi dang bay do an, don dep, hoac chu nha trong co ve ban."
      },
      {
        phrase: "どこに置けばいいですか？",
        pronunciation: "Doko ni okeba ii desu ka?",
        explanation: "Cach lich su de hoi nen dat mot mon do o dau.",
        useWhen: "Huu ich voi ao khoac, tui, qua tang hoac giay neu cach sap xep khong ro rang."
      }
    ],
    checklist: [
      "Quan sat ky khu vuc genkan truoc khi buoc vao hoac doi dep.",
      "Qua tang nen nho, de nhan va de dua.",
      "Dung tu y di vao phong khac neu chu nha chua ro rang dan ban."
    ]
  },
  "residential-private": {
    culturalNotes: [
      "Quy tac trong khu nha o thuong nham vao nhung tieng dong va chi tiet ma khach o ngan ngay it de y nhung hang xom lai nghe thay.",
      "Lich vut rac o Nhat thuong rat cu the, nen cam giac gan dung roi van co the gay phien."
    ],
    situationCards: [
      {
        title: "Ban thay den muon ban dem chac khong sao",
        body: "Tieng vali keo, noi chuyen truoc toa nha, hoac am thanh tu dien thoai mo loa ngoai co the ro hon ban nghi rat nhieu trong ngo dan cu yen tinh."
      },
      {
        title: "Cach bo tri toa nha lam ban hoi roi",
        body: "Co the co cua rieng cho cu dan, khu hop thu, cho de do hoac lan dau xe rieng. O nham khu vuc trong nha o de bi xem la xam pham hon so voi khach san."
      }
    ],
    phraseCards: [
      {
        phrase: "ゴミはどこに出せばいいですか？",
        pronunciation: "Gomi wa doko ni daseba ii desu ka?",
        explanation: "Cach hoi truc tiep va lich su ve noi bo rac.",
        useWhen: "Rat huu ich trong cho o rieng, noi quy tac rac thuong chat hon khach san."
      },
      {
        phrase: "この入り口で合っていますか？",
        pronunciation: "Kono iriguchi de atteimasu ka?",
        explanation: "Cach can than de xac nhan day co dung la loi vao khong.",
        useWhen: "Tot trong chung cu co cua rieng cho cu dan hoac nhieu loi vao giong nhau."
      }
    ],
    checklist: [
      "Khong chan cua toa nha hoac de cua mo khi dang di chuyen hanh ly.",
      "Ban dem hay giam them tieng banh xe, giong noi va am thanh tu dien thoai.",
      "Lam dung chinh xac quy tac ve rac, giat do va khong gian chung."
    ]
  },
  "hostel-dorm": {
    culturalNotes: [
      "Dorm o hostel tai Nhat thuong yen hon nhieu diem backpacker o nuoc khac.",
      "Khong khi giao luu thuong o khu chung, con dorm duoc xem nhu mot phong ngu dung chung."
    ],
    situationCards: [
      {
        title: "Ban ve muon va nghi minh chi can hai phut",
        body: "Hai phut thuong thanh muoi phut khi ban lay vali, sac dien va do ve sinh ra. O dorm, chuan bi truoc roi vao im lang quan trong hon viec nghi rang minh se lam nhanh."
      },
      {
        title: "Phong co ve than thien nen cuoc tro chuyen bat dau ngay ben giuong",
        body: "Chao hoi nhanh thi khong sao, nhung khi da thanh mot cuoc noi chuyen thuc su, thuong se tinh te hon neu chuyen ra lounge."
      }
    ],
    phraseCards: [
      {
        phrase: "ここで電話しても大丈夫ですか？",
        pronunciation: "Koko de denwa shitemo daijoubu desu ka?",
        explanation: "Cach huu ich de hoi xem co the goi dien o day khong.",
        useWhen: "Tot khi ban khong chac lounge hoac hanh lang co phu hop de noi chuyen hay khong."
      },
      {
        phrase: "ライトをつけてもいいですか？",
        pronunciation: "Raito o tsukete mo ii desu ka?",
        explanation: "Cach nhe nhang de hoi truoc khi bat den.",
        useWhen: "Huu ich khi den muon, sap do som, hoac trong phong nho co nhieu nguoi."
      }
    ],
    checklist: [
      "Chuan bi do ve sinh, quan ao va sac dien truoc khi vao che do ngu.",
      "Dung tai nghe, den nho va cach dong mo tui it gay tieng nhat co the.",
      "Neu co the, hay chuyen viec an uong, goi dien va sap xep do lon ra khu chung."
    ]
  },
  "all-you-can-drink": {
    culturalNotes: [
      "Goi uong khong gioi han co the tao cam giac thoai mai, nhung thuc te van van hanh theo thoi gian gioi han va nhip chung cua ca ban.",
      "Nhung luc de ngai thuong khong nam o viec uong ma o cho goi qua nhieu, lo mat gio last order, hoac lech nhip voi ca nhom."
    ],
    situationCards: [
      {
        title: "Ban muon goi them mot ly ngay truoc luc het gio",
        body: "Neu ca ban da cham lai, co chen them mot vong nua co the tao cam giac moi nguoi dang keo dai nhip chi vi minh ban."
      },
      {
        title: "Moi nguoi goi rieng o nhung thoi diem khac nhau",
        body: "Dieu do de lam roi nhip va khien ban an trong roi hon. O nhieu noi, goi theo nhip chung thuong tu nhien hon."
      }
    ],
    phraseCards: [
      {
        phrase: "ラストオーダーは何時ですか？",
        pronunciation: "Rasuto oodaa wa nanji desu ka?",
        explanation: "Cach hoi truc tiep ve gio last order.",
        useWhen: "Huu ich neu ban muon can nhip ca ban som hon thay vi doi den phut cuoi."
      },
      {
        phrase: "次は一緒に頼みますか？",
        pronunciation: "Tsugi wa issho ni tanomimasu ka?",
        explanation: "Cach nhe nhang de de nghi goi lan tiep theo cung nhau.",
        useWhen: "Tot khi ly dang can va ban khong muon nhip goi mon bi tach roi."
      }
    ],
    checklist: [
      "Kiem tra gioi han thoi gian va gio last order tu som.",
      "Giu nhip voi ca ban thay vi lien tuc goi nhung mon nho le te.",
      "Neu ban ngung uong som hon, cu de nhip cua nhom giu duoc su de chiu."
    ]
  },
  karaoke: {
    culturalNotes: [
      "Karaoke o Nhat thuong giong viec chia luot va cung giu khong khi trong phong hon la mot cuoc thi trinh dien.",
      "Thuong quan trong hon viec hat hay la tro thanh nguoi de cung o chung trong phong."
    ],
    situationCards: [
      {
        title: "Ban ranh may nen lien tuc chon bai rat nhanh",
        body: "Du khong ai phan nan, neu ban giu nhip phong qua manh thi nhung nguoi kin tieng hon se de bi troi ra ngoai dong chay cua nhom."
      },
      {
        title: "Ban muon lam phong soi dong ngay lap tuc",
        body: "Bat dau bang mot bai ma moi nguoi de cung thuong thuc thuong hop hon la mo man bang bai rieng tu nhat hoac manh nhat cua minh."
      }
    ],
    phraseCards: [
      {
        phrase: "次どうぞ",
        pronunciation: "Tsugi douzo",
        explanation: "Cach tu nhien de nhuong luot tiep theo cho nguoi khac.",
        useWhen: "Huu ich neu ban muon giu nhip phong nhung khong chiem qua nhieu khong gian."
      },
      {
        phrase: "みんなで歌える曲にしますね",
        pronunciation: "Minna de utaeru kyoku ni shimasu ne",
        explanation: "Cach than thien de noi rang ban se chon bai ca phong co the cung vui.",
        useWhen: "Tot khi ban muon giu khong khi mang tinh bao gom."
      }
    ],
    checklist: [
      "Bat dau bang bai hop voi khong khi phong thay vi bai dai nhat hoac nang nhat.",
      "Nhuong luot tiep theo mot cach tu nhien va de y xem ai van chua hat.",
      "Dung remote, tambourine va goi mon ma dung bien can phong thanh san khau rieng cua minh."
    ]
  },
  "live-concert": {
    culturalNotes: [
      "Quy tac o concert va nha hat thuong nham giu su tap trung chung cua ca phong.",
      "Nhung dieu nghe co ve nghiem thuong khong phai vi hinh thuc, ma vi mot nguoi co the lam ngat trai nghiem cua rat nhieu nguoi."
    ],
    situationCards: [
      {
        title: "Ban den tre ngay sau khi buoi dien da bat dau",
        body: "Du cho ngoi co gan den dau, viec tu chen nhanh theo nhip cua minh thuong gay phien hon la doi nhan vien ho tro."
      },
      {
        title: "Ban khong chac mot tam anh nhanh co duoc phep khong",
        body: "O nhung noi co quy dinh chup hinh nghiem, 'chi mot tam thoi' thuong khong duoc xem la linh dong nho ma de bi thay nhu pha vo su tin tuong."
      }
    ],
    phraseCards: [
      {
        phrase: "写真は大丈夫ですか？",
        pronunciation: "Shashin wa daijoubu desu ka?",
        explanation: "Cach nhanh va lich su de xac nhan co duoc chup hinh hay khong.",
        useWhen: "Tot truoc buoi dien, trong gio nghi, hoac khi quy dinh chua ro."
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "Cach don gian de xac nhan minh dang o dung ghe hoac dung khu.",
        useWhen: "Huu ich khi khu vuc dong va ban den rat sat gio bat dau."
      }
    ],
    checklist: [
      "Kiem tra cho ngoi, gio giac va quy dinh chup hinh truoc khi buoi dien bat dau.",
      "Tat hoan toan chuong va rung cua dien thoai trong khong gian yen.",
      "Neu den muon, hay theo huong dan cua nhan vien thay vi tu xu ly."
    ]
  },
  "sports-event": {
    culturalNotes: [
      "Khu khan dai the thao co the rat on ao, nhung moi khu thuong van co nhip rieng ve viec dung len, co vu va di chuyen.",
      "Cach tinh te nhat thuong la huong ung nang luong chung trong khi can nhip voi nhung nguoi xung quanh, thay vi ap phong cach rieng len ca khu."
    ],
    situationCards: [
      {
        title: "Ban qua hao hung nen muon dung len lien tuc de co vu",
        body: "O mot so khu thi rat tu nhien, nhung o khu khac lai co the chan tam nhin ngay. Nhin xung quanh tu dau thuong se cho ban biet khu do mong doi dieu gi."
      },
      {
        title: "Do an, do uong va do co vu bat dau chat dong",
        body: "Khong khi co the thoai mai, nhung bac thang, khoang truoc dau goi va cho duoi ghe van la khong gian chung. Khi do dac lan ra, ca hang se thay chat hon."
      }
    ],
    phraseCards: [
      {
        phrase: "ここは立って応援する感じですか？",
        pronunciation: "Koko wa tatte ouen suru kanji desu ka?",
        explanation: "Cach tu nhien de hoi xem khu nay co thuong dung len co vu hay khong.",
        useWhen: "Huu ich khi khong khi co ve quy cu hon ban nghi."
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "Cach binh tinh de xac nhan ghe truoc khi on dinh cho ngoi.",
        useWhen: "Tot khi block va hang ghe nhin giong nhau va ban khong muon lam phien hai lan."
      }
    ],
    checklist: [
      "Som de y xem khu cua ban la kieu ngoi yen, dung len, tram hon hay rat soi dong.",
      "Giu do an, tui va do co vu trong pham vi ghe cua minh.",
      "Khi tran dau tiep tuc, dua tu the va su chu y tro lai dung nhip that nhanh."
    ]
  },
  "theme-park": {
    culturalNotes: [
      "Cong vien chu de o Nhat nhin ben ngoai co ve vui va nhe, nhung ben duoi thuong van hanh rat co cau truc.",
      "Ma sat thuong khong den tu tro choi ma tu cach moi nguoi dung hang doi, khu cho va noi xem show."
    ],
    situationCards: [
      {
        title: "Nhom ban dung giua loi di de ban buoc tiep theo",
        body: "O cong vien dong nguoi, dieu do rat nhanh se bien nhom thanh vat can di dong. Chi can buoc vao trong mot chut cung da thay doi cam giac rat nhieu."
      },
      {
        title: "Ban nghi minh chi dang giu cho giup ban",
        body: "O parade, show va hang doi, viec giu nhieu cho hon so nguoi thuc su co mat thuong de bi xem la khong cong bang nhanh hon du khach hay nghi."
      }
    ],
    phraseCards: [
      {
        phrase: "ここで待てばいいですか？",
        pronunciation: "Koko de mateba ii desu ka?",
        explanation: "Cach huu ich de xac nhan co phai can doi o day khong.",
        useWhen: "Rat tien neu he thong tach thanh standby, vao theo gio, hoac quay lai sau."
      },
      {
        phrase: "今ここで止まっても大丈夫ですか？",
        pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
        explanation: "Cach nhe nhang de hoi xem dung lai mot chut o day co duoc khong.",
        useWhen: "Tot truoc khi xem ban do, chinh lai tui, hoac gom nhom."
      }
    ],
    checklist: [
      "Xac nhan day la hang doi that su hay chi la khu truoc cua hang.",
      "Dung de ca nhom choan het loi di khi dang ban buoc tiep theo.",
      "Xem parade, show va diem chup hinh la khong gian xem chung."
    ]
  },
  "rental-car": {
    culturalNotes: [
      "Khi dung xe thue o Nhat, dieu quan trong thuong khong nam o phong cach lai xe ma o viec tranh nhung va cham co the du doan duoc nhu dau xe, duong hep, quy tac xang va gio tra xe.",
      "Phan gay met thuong khong phai ban than viec lai xe, ma la nhung gia dinh nho quanh viec nhan xe, phi duong bo va cho nao duoc de xe."
    ],
    situationCards: [
      {
        title: "Mot diem dung ngan trong co ve vo hai",
        body: "O nhieu noi, 'chi mot chut' van co the chan duong hep, loi vao cua cua hang hoac luong xe dia phuong."
      },
      {
        title: "Gio tra xe co ve kha linh hoat",
        body: "Nhip ban giao xe thue thuong chat hon du khach nghi. Chi can tre mot chut cung co the anh huong den nhan vien, viec don dep va luot dat tiep theo."
      }
    ],
    phraseCards: [
      {
        phrase: "この近くに駐車しても大丈夫ですか？",
        pronunciation: "Kono chikaku ni chuusha shitemo daijoubu desu ka?",
        explanation: "Cach hoi can than xem dau xe gan day co duoc khong.",
        useWhen: "Huu ich khi bien bao chua ro rang hoac khong gian co cam giac hoi mo ho."
      },
      {
        phrase: "返却前に給油が必要ですか？",
        pronunciation: "Henkyaku mae ni kyuuyu ga hitsuyou desu ka?",
        explanation: "Cach hoi truc tiep xem co can do xang truoc khi tra hay khong.",
        useWhen: "Tot truoc ngay cuoi, nhat la neu luc nhan xe ban nghe huong dan hoi nhanh."
      }
    ],
    checklist: [
      "Truoc khi roi bai, xac nhan giay phep, cach thu phi, quy tac xang va gio tra xe.",
      "Ngay ca khi chi dung ngan, hay kiem tra truoc xem co chan loi di hay cua ra vao khong.",
      "Truoc luc tra xe, de du thoi gian cho viec do xang, di chuyen va kiem tra cuoi."
    ]
  }
};

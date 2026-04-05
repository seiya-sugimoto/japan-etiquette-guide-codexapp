import type { CategoryId, PremiumDeepDive } from "@/types/category";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

export const frenchPremiumDeepDive: PremiumDeepDiveMap = {
  ryokan: {
    culturalNotes: [
      "Dans un ryokan, le service anticipe souvent vos besoins parce que la journ\u00e9e suit un rythme partag\u00e9.",
      "La chambre peut passer d'espace de repos \u00e0 salle de repas puis \u00e0 espace de couchage, donc la garder ordonn\u00e9e fait partie de l'exp\u00e9rience."
    ],
    situationCards: [
      {
        title: "Vous voulez sortir juste apr\u00e8s le check-in",
        body: "Si l'on vient de vous expliquer l'heure du repas, du bain ou la mani\u00e8re d'utiliser la chambre, partir trop vite peut cr\u00e9er de petits probl\u00e8mes plus tard. Une minute d'attention vaut souvent le coup."
      },
      {
        title: "Le personnel peut revenir pendant que vous vous installez",
        body: "Dans un ryokan, la pr\u00e9paration du futon, le service du repas ou l'organisation de la chambre peuvent impliquer plusieurs entr\u00e9es. Valise ouverte, serviettes mouill\u00e9es et c\u00e2bles au sol se remarquent plus qu'\u00e0 l'h\u00f4tel."
      }
    ],
    phraseCards: [
      {
        phrase: "夕食は何時ですか？",
        pronunciation: "Yuushoku wa nanji desu ka?",
        explanation: "Une mani\u00e8re simple et polie de rev\u00e9rifier l'heure du d\u00eener.",
        useWhen: "Utile si l'explication allait vite ou si vous \u00e9tiez fatigu\u00e9 en arrivant."
      },
      {
        phrase: "こちらで待てばいいですか？",
        pronunciation: "Kochira de mateba ii desu ka?",
        explanation: "Une fa\u00e7on calme de demander o\u00f9 attendre.",
        useWhen: "Pratique pendant le check-in, l'accompagnement \u00e0 la chambre ou la pr\u00e9paration du repas."
      }
    ],
    checklist: [
      "Confirmez l'heure du repas, du bain et du check-out avant de tout d\u00e9baller.",
      "Utilisez les bonnes pantoufles aux bons endroits, surtout pr\u00e8s des toilettes et du tatami.",
      "Gardez les objets mouill\u00e9s, la valise ouverte et les c\u00e2bles bien regroup\u00e9s si le personnel peut entrer."
    ]
  },
  "visiting-home": {
    culturalNotes: [
      "Bien se comporter chez quelqu'un consiste souvent moins \u00e0 appliquer une \u00e9tiquette formelle qu'\u00e0 s'ajuster au rythme de l'h\u00f4te.",
      "Quand l'h\u00f4te dit que \u00abc'est bon\u00bb, c'est souvent par gentillesse, donc un peu de retenue para\u00eet souvent plus naturel."
    ],
    situationCards: [
      {
        title: "On vous dit de vous mettre \u00e0 l'aise",
        body: "Cela signifie g\u00e9n\u00e9ralement qu'il faut se d\u00e9tendre, pas traiter le lieu comme un h\u00f4tel. Mieux vaut continuer \u00e0 bouger avec l\u00e9g\u00e8ret\u00e9 et attendre les signes."
      },
      {
        title: "Vous ne savez pas s'il faut aider",
        body: "En faire trop peut para\u00eetre intrusif, ne rien faire du tout peut sembler distant. Proposer une ou deux fois suffit souvent, puis il vaut mieux suivre la r\u00e9ponse de l'h\u00f4te."
      }
    ],
    phraseCards: [
      {
        phrase: "何かお手伝いしましょうか？",
        pronunciation: "Nanika otetsudai shimashou ka?",
        explanation: "Une mani\u00e8re douce de proposer son aide sans insister.",
        useWhen: "Bien pour le repas, le rangement, ou si l'h\u00f4te semble occup\u00e9."
      },
      {
        phrase: "どこに置けばいいですか？",
        pronunciation: "Doko ni okeba ii desu ka?",
        explanation: "Une fa\u00e7on polie de demander o\u00f9 poser quelque chose.",
        useWhen: "Utile pour manteaux, sacs, cadeaux ou chaussures si l'organisation n'est pas claire."
      }
    ],
    checklist: [
      "Observez bien l'entr\u00e9e avant d'avancer ou de changer de pantoufles.",
      "Gardez les cadeaux petits, faciles \u00e0 recevoir et simples \u00e0 donner.",
      "N'entrez pas dans d'autres pi\u00e8ces tant que l'h\u00f4te ne vous y guide pas clairement."
    ]
  },
  "residential-private": {
    culturalNotes: [
      "Les r\u00e8gles d'un immeuble visent souvent des bruits ou gestes qu'un visiteur de courte dur\u00e9e remarque \u00e0 peine mais que les voisins entendent.",
      "Au Japon, les horaires de d\u00e9chets peuvent \u00eatre tr\u00e8s pr\u00e9cis, donc \u00e0 peu pr\u00e8s peut cr\u00e9er un vrai probl\u00e8me."
    ],
    situationCards: [
      {
        title: "Une arriv\u00e9e tardive vous semble anodine",
        body: "Le bruit des roulettes, une conversation devant l'immeuble ou le haut-parleur du t\u00e9l\u00e9phone peuvent se remarquer bien plus que pr\u00e9vu dans une rue r\u00e9sidentielle calme."
      },
      {
        title: "L'organisation du b\u00e2timent n'est pas claire",
        body: "Il peut y avoir des portes, bo\u00eetes aux lettres, espaces de rangement ou acc\u00e8s de stationnement r\u00e9serv\u00e9s. Se tromper d'endroit para\u00eet plus intrusif ici que dans un h\u00f4tel."
      }
    ],
    phraseCards: [
      {
        phrase: "ゴミはどこに出せばいいですか？",
        pronunciation: "Gomi wa doko ni daseba ii desu ka?",
        explanation: "Une question directe et polie pour demander o\u00f9 sortir les d\u00e9chets.",
        useWhen: "Particuli\u00e8rement utile dans les logements priv\u00e9s o\u00f9 les r\u00e8gles sont plus strictes."
      },
      {
        phrase: "この入り口で合っていますか？",
        pronunciation: "Kono iriguchi de atteimasu ka?",
        explanation: "Une mani\u00e8re prudente de v\u00e9rifier que vous utilisez la bonne entr\u00e9e.",
        useWhen: "Pratique dans les immeubles avec portes r\u00e9serv\u00e9es ou acc\u00e8s qui se ressemblent."
      }
    ],
    checklist: [
      "Ne bloquez jamais la porte pendant que vous d\u00e9placez vos bagages.",
      "Le soir, r\u00e9duisez encore plus le bruit des roulettes, des voix et du t\u00e9l\u00e9phone.",
      "Suivez exactement les r\u00e8gles sur les d\u00e9chets, le linge et les espaces communs."
    ]
  },
  "hostel-dorm": {
    culturalNotes: [
      "Les dortoirs d'auberge au Japon paraissent souvent plus calmes que dans d'autres destinations backpacker.",
      "L'\u00e9nergie sociale reste plut\u00f4t dans les espaces communs, tandis que le dortoir est trait\u00e9 comme une chambre partag\u00e9e."
    ],
    situationCards: [
      {
        title: "Vous arrivez tard et pensez n'avoir besoin que de deux minutes",
        body: "Ces deux minutes deviennent vite dix quand sortent sacs, chargeurs et affaires de toilette. Dans un dortoir, mieux vaut pr\u00e9parer avant d'entrer que compter sur sa bonne intention."
      },
      {
        title: "La chambre semble conviviale, alors la discussion commence au bord du lit",
        body: "Un salut rapide va bien, mais d\u00e8s qu'une vraie conversation commence, aller au salon est g\u00e9n\u00e9ralement plus attentionn\u00e9."
      }
    ],
    phraseCards: [
      {
        phrase: "ここで電話しても大丈夫ですか？",
        pronunciation: "Koko de denwa shitemo daijoubu desu ka?",
        explanation: "Une mani\u00e8re utile de demander si un endroit convient pour un appel.",
        useWhen: "Pratique si vous n'\u00eates pas s\u00fbr que le salon ou le couloir conviennent."
      },
      {
        phrase: "ライトをつけてもいいですか？",
        pronunciation: "Raito o tsukete mo ii desu ka?",
        explanation: "Une fa\u00e7on douce de demander avant d'allumer une lumi\u00e8re.",
        useWhen: "Utile en arrivant tard, en rangeant t\u00f4t ou dans une petite chambre partag\u00e9e."
      }
    ],
    checklist: [
      "Pr\u00e9parez affaires de toilette, v\u00eatements et chargeurs avant d'entrer en mode nuit.",
      "Utilisez \u00e9couteurs, petite lumi\u00e8re et la fermeture la plus silencieuse possible.",
      "D\u00e9placez repas, appels et gros rangement vers l'espace commun si possible."
    ]
  },
  "all-you-can-drink": {
    culturalNotes: [
      "Les formules \u00e0 volont\u00e9 peuvent para\u00eetre d\u00e9contract\u00e9es, mais elles reposent quand m\u00eame sur un temps limit\u00e9 et un rythme de table partag\u00e9.",
      "Les moments g\u00eanants viennent souvent moins de l'alcool lui-m\u00eame que des commandes excessives, du dernier tour rat\u00e9 ou d'un rythme d\u00e9saccord\u00e9."
    ],
    situationCards: [
      {
        title: "Vous voulez encore un verre juste avant la fin",
        body: "Si la table s'est d\u00e9j\u00e0 calm\u00e9e, pousser un dernier tour peut donner l'impression que tout le groupe prolonge pour vous seul."
      },
      {
        title: "Tout le monde commande \u00e0 des moments diff\u00e9rents",
        body: "Cela peut brouiller le rythme et rendre la table d\u00e9sordonn\u00e9e. Dans beaucoup d'endroits, commander plus ensemble est plus fluide."
      }
    ],
    phraseCards: [
      {
        phrase: "ラストオーダーは何時ですか？",
        pronunciation: "Rasuto oodaa wa nanji desu ka?",
        explanation: "Une mani\u00e8re directe de confirmer l'heure de la derni\u00e8re commande.",
        useWhen: "Utile si vous voulez g\u00e9rer le rythme de la table sans vous presser \u00e0 la fin."
      },
      {
        phrase: "次は一緒に頼みますか？",
        pronunciation: "Tsugi wa issho ni tanomimasu ka?",
        explanation: "Une fa\u00e7on douce de proposer de commander ensemble le tour suivant.",
        useWhen: "Pratique quand les verres se vident et que vous ne voulez pas casser le rythme."
      }
    ],
    checklist: [
      "V\u00e9rifiez la limite de temps et la derni\u00e8re commande assez t\u00f4t.",
      "Gardez le rythme de la table au lieu de multiplier les mini-commandes.",
      "Si vous vous arr\u00eatez plus t\u00f4t, laissez le groupe garder un rythme simple."
    ]
  },
  karaoke: {
    culturalNotes: [
      "Au Japon, le karaok\u00e9 ressemble souvent davantage \u00e0 un partage des tours qu'\u00e0 un concours de performance.",
      "Il compte souvent plus d'\u00eatre agr\u00e9able \u00e0 partager la salle que de chanter parfaitement."
    ],
    situationCards: [
      {
        title: "Vous connaissez bien la machine et encha\u00eenez vite les chansons",
        body: "M\u00eame sans plainte, imposer trop fortement votre rythme peut faire dispara\u00eetre les personnes plus discr\u00e8tes du mouvement du groupe."
      },
      {
        title: "Vous voulez mettre l'ambiance tout de suite",
        body: "Commencer avec une chanson que tout le monde peut appr\u00e9cier fonctionne souvent mieux que d'ouvrir avec votre choix le plus personnel ou le plus intense."
      }
    ],
    phraseCards: [
      {
        phrase: "次どうぞ",
        pronunciation: "Tsugi douzo",
        explanation: "Une mani\u00e8re naturelle de passer le prochain tour \u00e0 quelqu'un d'autre.",
        useWhen: "Utile si vous voulez garder le mouvement sans prendre trop de place."
      },
      {
        phrase: "みんなで歌える曲にしますね",
        pronunciation: "Minna de utaeru kyoku ni shimasu ne",
        explanation: "Une fa\u00e7on amicale d'indiquer que vous choisissez quelque chose de collectif.",
        useWhen: "Pratique si vous voulez garder une ambiance inclusive."
      }
    ],
    checklist: [
      "Commencez par une chanson adapt\u00e9e \u00e0 la salle plut\u00f4t que la plus longue ou la plus lourde.",
      "Passez naturellement le tour suivant et remarquez si quelqu'un n'a pas encore chant\u00e9.",
      "Utilisez t\u00e9l\u00e9commande, tambourins et commandes sans transformer la salle en sc\u00e8ne personnelle."
    ]
  },
  "live-concert": {
    culturalNotes: [
      "Les r\u00e8gles de concert et de spectacle visent souvent \u00e0 prot\u00e9ger la concentration partag\u00e9e de la salle.",
      "Ce qui semble strict rel\u00e8ve souvent moins du formalisme que de l'envie d'\u00e9viter qu'une seule personne casse l'exp\u00e9rience de beaucoup d'autres."
    ],
    situationCards: [
      {
        title: "Vous arrivez juste apr\u00e8s le d\u00e9but",
        body: "M\u00eame si votre si\u00e8ge semble proche, vous faufiler selon votre propre rythme peut para\u00eetre plus perturbant que d'attendre l'aide du personnel."
      },
      {
        title: "Vous h\u00e9sitez sur la possibilit\u00e9 d'une photo rapide",
        body: "Dans les salles o\u00f9 les r\u00e8gles sont strictes, \u00ab juste une photo \u00bb ressemble souvent moins \u00e0 une petite exception qu'\u00e0 une rupture de confiance."
      }
    ],
    phraseCards: [
      {
        phrase: "写真は大丈夫ですか？",
        pronunciation: "Shashin wa daijoubu desu ka?",
        explanation: "Une fa\u00e7on rapide et polie de demander si les photos sont autoris\u00e9es.",
        useWhen: "Utile avant le spectacle, pendant l'entracte ou si la r\u00e8gle reste floue."
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "Une mani\u00e8re simple de confirmer votre si\u00e8ge ou votre zone.",
        useWhen: "Pratique si les sections sont serr\u00e9es ou si vous arrivez juste avant le d\u00e9but."
      }
    ],
    checklist: [
      "V\u00e9rifiez le si\u00e8ge, l'horaire et les r\u00e8gles de prise de vue avant le d\u00e9but.",
      "Mettez le t\u00e9l\u00e9phone en silencieux complet, y compris les vibrations dans les salles calmes.",
      "Si vous arrivez en retard, suivez le personnel au lieu d'improviser."
    ]
  },
  "sports-event": {
    culturalNotes: [
      "Une foule sportive peut \u00eatre bruyante, mais chaque section garde souvent son propre rythme pour se lever, encourager et bouger.",
      "L'approche la plus respectueuse consiste souvent \u00e0 profiter de l'\u00e9nergie tout en s'alignant sur les personnes autour de vous."
    ],
    situationCards: [
      {
        title: "Vous voulez vous lever souvent pour encourager",
        body: "Dans certaines zones c'est naturel, mais dans d'autres cela coupe vite la vue. Regarder autour de vous au d\u00e9but montre souvent ce que la section attend."
      },
      {
        title: "Nourriture, boissons et goodies s'accumulent",
        body: "L'ambiance peut \u00eatre d\u00e9contract\u00e9e, mais les marches, l'espace devant les genoux et sous le si\u00e8ge restent partag\u00e9s. D\u00e8s que vos affaires s'\u00e9tendent, tout le rang se resserre."
      }
    ],
    phraseCards: [
      {
        phrase: "ここは立って応援する感じですか？",
        pronunciation: "Koko wa tatte ouen suru kanji desu ka?",
        explanation: "Une mani\u00e8re naturelle de demander si cette section encourage debout.",
        useWhen: "Utile si l'ambiance semble plus encadr\u00e9e que pr\u00e9vu."
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "Une fa\u00e7on calme de confirmer votre si\u00e8ge avant de vous installer.",
        useWhen: "Pratique si blocs et rangs se ressemblent et que vous ne voulez pas interrompre deux fois."
      }
    ],
    checklist: [
      "Rep\u00e9rez vite si votre section est assise, debout, calme ou tr\u00e8s active.",
      "Gardez nourriture, sacs et objets de support dans l'espace de votre si\u00e8ge.",
      "Quand le jeu reprend, remettez vite votre corps et votre attention dans le bon rythme."
    ]
  },
  "theme-park": {
    culturalNotes: [
      "Les parcs \u00e0 th\u00e8me au Japon semblent ludiques en surface, mais l'organisation sous-jacente est souvent tr\u00e8s structur\u00e9e.",
      "Les frictions viennent g\u00e9n\u00e9ralement moins des attractions elles-m\u00eames que de la mani\u00e8re dont on utilise les files, les zones d'attente et les espaces de spectacle."
    ],
    situationCards: [
      {
        title: "Votre groupe s'arr\u00eate au milieu pour d\u00e9cider de la suite",
        body: "Dans un parc charg\u00e9, cela transforme vite le groupe en obstacle mobile. Faire seulement quelques pas de c\u00f4t\u00e9 change beaucoup la sensation."
      },
      {
        title: "Vous pensez simplement garder de la place pour des amis",
        body: "Dans les files, les parades et les spectacles, r\u00e9server plus d'espace que pour les personnes vraiment pr\u00e9sentes peut para\u00eetre injuste beaucoup plus vite qu'on ne l'imagine."
      }
    ],
    phraseCards: [
      {
        phrase: "ここで待てばいいですか？",
        pronunciation: "Koko de mateba ii desu ka?",
        explanation: "Une mani\u00e8re utile de confirmer si vous attendez au bon endroit.",
        useWhen: "Pratique quand il y a standby, horaires d'entr\u00e9e ou syst\u00e8mes de retour."
      },
      {
        phrase: "今ここで止まっても大丈夫ですか？",
        pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
        explanation: "Une fa\u00e7on douce de demander si l'on peut s'arr\u00eater ici.",
        useWhen: "Utile avant de regarder la carte, de r\u00e9ajuster les sacs ou de rassembler le groupe."
      }
    ],
    checklist: [
      "V\u00e9rifiez si vous \u00eates dans la vraie file ou seulement \u00e0 son entr\u00e9e.",
      "Ne laissez pas le groupe occuper toute l'all\u00e9e pendant que vous d\u00e9cidez.",
      "Consid\u00e9rez les parades, spectacles et spots photo comme des espaces de vue partag\u00e9s."
    ]
  },
  "rental-car": {
    culturalNotes: [
      "Avec une voiture de location au Japon, l'important est souvent moins le style que la mani\u00e8re d'\u00e9viter les frictions pr\u00e9visibles: stationnement, routes \u00e9troites, r\u00e8gles de carburant et heure de retour.",
      "Le stress vient souvent moins de la conduite que des petites suppositions autour du retrait, des p\u00e9ages et des endroits o\u00f9 l'on peut laisser la voiture."
    ],
    situationCards: [
      {
        title: "Un arr\u00eat court semble sans cons\u00e9quence",
        body: "Dans beaucoup d'endroits, \u00ab juste une minute \u00bb peut quand m\u00eame bloquer une rue \u00e9troite, l'acc\u00e8s \u00e0 un commerce ou la circulation locale."
      },
      {
        title: "L'heure de retour vous semble flexible",
        body: "Le retour d'une voiture suit souvent un rythme plus serr\u00e9 que ne l'imaginent les voyageurs. Quelques minutes de retard peuvent d\u00e9caler le personnel, le nettoyage et la r\u00e9servation suivante."
      }
    ],
    phraseCards: [
      {
        phrase: "この近くに駐車しても大丈夫ですか？",
        pronunciation: "Kono chikaku ni chuusha shitemo daijoubu desu ka?",
        explanation: "Une mani\u00e8re prudente de demander si stationner ici est acceptable.",
        useWhen: "Utile si les panneaux ne sont pas clairs ou si l'espace para\u00eet ambigu."
      },
      {
        phrase: "返却前に給油が必要ですか？",
        pronunciation: "Henkyaku mae ni kyuuyu ga hitsuyou desu ka?",
        explanation: "Une mani\u00e8re directe de confirmer la r\u00e8gle de carburant avant le retour.",
        useWhen: "Pratique avant le dernier jour, surtout si l'explication du retrait est all\u00e9e vite."
      }
    ],
    checklist: [
      "Avant de partir, confirmez permis valide, p\u00e9ages, carburant et heure de retour.",
      "M\u00eame pour un arr\u00eat court, regardez d'abord si vous bloquez un passage ou une entr\u00e9e.",
      "Avant le retour, gardez de la marge pour l'essence, le trajet et la derni\u00e8re v\u00e9rification."
    ]
  }
};

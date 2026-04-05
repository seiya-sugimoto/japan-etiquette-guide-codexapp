import type { CategoryId, PremiumDeepDive } from "@/types/category";

type PremiumDeepDiveMap = Partial<Record<CategoryId, PremiumDeepDive>>;

export const spanishPremiumDeepDive: PremiumDeepDiveMap = {
  ryokan: {
    culturalNotes: [
      "En un ryokan, el servicio suele anticiparse porque el d\u00eda funciona con un ritmo compartido.",
      "La habitaci\u00f3n puede pasar de sala de descanso a comedor y luego a espacio para dormir, as\u00ed que mantenerla ordenada forma parte de la experiencia."
    ],
    situationCards: [
      {
        title: "Quieres salir justo despu\u00e9s del check-in",
        body: "Si acaban de explicarte la hora de la cena, el ba\u00f1o o el uso de la habitaci\u00f3n, irte demasiado r\u00e1pido puede crear peque\u00f1os problemas m\u00e1s tarde. Normalmente vale la pena parar un minuto y mirar bien."
      },
      {
        title: "El personal puede volver a entrar mientras te instalas",
        body: "En un ryokan, preparar el fut\u00f3n, servir la comida o arreglar la habitaci\u00f3n puede implicar varias entradas. Una maleta abierta, toallas mojadas y cables por el suelo llaman m\u00e1s la atenci\u00f3n que en un hotel normal."
      }
    ],
    phraseCards: [
      {
        phrase: "夕食は何時ですか？",
        pronunciation: "Yuushoku wa nanji desu ka?",
        explanation: "Una forma simple y amable de confirmar la hora de la cena.",
        useWhen: "\u00datil si la explicaci\u00f3n fue r\u00e1pida o llegaste cansado."
      },
      {
        phrase: "こちらで待てばいいですか？",
        pronunciation: "Kochira de mateba ii desu ka?",
        explanation: "Una forma tranquila de preguntar d\u00f3nde debes esperar.",
        useWhen: "Pr\u00e1ctico durante el check-in, el acompa\u00f1amiento a la habitaci\u00f3n o la preparaci\u00f3n de la comida."
      }
    ],
    checklist: [
      "Confirma la hora de la comida, del ba\u00f1o y del check-out antes de instalarte por completo.",
      "Usa las zapatillas correctas en los lugares correctos, sobre todo cerca del ba\u00f1o y el tatami.",
      "Mant\u00e9n juntos los objetos mojados, la maleta abierta y los cables si el personal puede entrar."
    ]
  },
  "visiting-home": {
    culturalNotes: [
      "Ser un buen invitado suele consistir menos en seguir una etiqueta formal y m\u00e1s en acompasar tu ritmo al del anfitri\u00f3n.",
      "Cuando el anfitri\u00f3n dice \u00abest\u00e1 bien\u00bb, muchas veces lo hace por amabilidad, as\u00ed que un poco de contenci\u00f3n suele sentirse m\u00e1s natural."
    ],
    situationCards: [
      {
        title: "Te dicen que te relajes y te sientas como en casa",
        body: "Eso suele significar que no hace falta estar tenso, no que debas tratar la casa como si fuera un hotel. Aun as\u00ed conviene moverse con ligereza y esperar se\u00f1ales."
      },
      {
        title: "No sabes si deber\u00edas ayudar",
        body: "Hacer demasiado puede sentirse invasivo, pero no hacer nada puede parecer distante. Normalmente basta con ofrecer ayuda una o dos veces y luego seguir la respuesta del anfitri\u00f3n."
      }
    ],
    phraseCards: [
      {
        phrase: "何かお手伝いしましょうか？",
        pronunciation: "Nanika otetsudai shimashou ka?",
        explanation: "Una forma suave de ofrecer ayuda sin presionar.",
        useWhen: "Bien cuando est\u00e1n sirviendo comida, recogiendo o el anfitri\u00f3n parece ocupado."
      },
      {
        phrase: "どこに置けばいいですか？",
        pronunciation: "Doko ni okeba ii desu ka?",
        explanation: "Una forma educada de preguntar d\u00f3nde dejar algo.",
        useWhen: "\u00datil para abrigos, bolsas, regalos o zapatos cuando no est\u00e1 claro."
      }
    ],
    checklist: [
      "Observa bien la entrada antes de pasar o cambiar de zapatillas.",
      "Mant\u00e9n los regalos peque\u00f1os, f\u00e1ciles de recibir y simples de entregar.",
      "No vayas a otras habitaciones hasta que el anfitri\u00f3n te gu\u00ede claramente."
    ]
  },
  "residential-private": {
    culturalNotes: [
      "Las reglas de un edificio suelen existir por sonidos o gestos que un visitante de corta estancia casi no nota, pero que los vecinos s\u00ed perciben.",
      "En Jap\u00f3n el horario de la basura puede ser muy preciso, as\u00ed que \u00abcasi bien\u00bb puede causar un problema real."
    ],
    situationCards: [
      {
        title: "Llegar tarde por la noche te parece algo sin importancia",
        body: "El ruido de la maleta, hablar fuera del edificio o el altavoz del tel\u00e9fono pueden notarse mucho m\u00e1s de lo que parece en una calle residencial tranquila."
      },
      {
        title: "La distribuci\u00f3n del edificio es confusa",
        body: "Puede haber puertas, buzones, zonas de almacenamiento o l\u00edneas de aparcamiento separadas. Equivocarte de zona se siente m\u00e1s invasivo en un edificio residencial que en un hotel."
      }
    ],
    phraseCards: [
      {
        phrase: "ゴミはどこに出せばいいですか？",
        pronunciation: "Gomi wa doko ni daseba ii desu ka?",
        explanation: "Una forma directa y educada de preguntar d\u00f3nde sacar la basura.",
        useWhen: "Muy \u00fatil en alojamientos privados donde las reglas son m\u00e1s estrictas que en un hotel."
      },
      {
        phrase: "この入り口で合っていますか？",
        pronunciation: "Kono iriguchi de atteimasu ka?",
        explanation: "Una manera cuidadosa de confirmar si esa es la entrada correcta.",
        useWhen: "Pr\u00e1ctica en edificios con puertas para residentes o accesos parecidos."
      }
    ],
    checklist: [
      "No bloquees ni dejes abierta la puerta del edificio mientras mueves equipaje.",
      "Por la noche baja a\u00fan m\u00e1s el ruido de ruedas, voces y tel\u00e9fono.",
      "Sigue exactamente las reglas de basura, lavander\u00eda y espacios compartidos."
    ]
  },
  "hostel-dorm": {
    culturalNotes: [
      "Los dormitorios de hostal en Jap\u00f3n suelen sentirse m\u00e1s tranquilos que en otros destinos mochileros.",
      "La energ\u00eda social suele quedarse en las zonas comunes, mientras que el dormitorio se trata m\u00e1s como una habitaci\u00f3n compartida."
    ],
    situationCards: [
      {
        title: "Llegas tarde y piensas que solo necesitas dos minutos",
        body: "Esos dos minutos suelen convertirse en diez cuando salen bolsas, cargadores y neceseres. En un dormitorio importa m\u00e1s prepararse antes de entrar que confiar en la intenci\u00f3n."
      },
      {
        title: "La habitaci\u00f3n parece social y la conversaci\u00f3n empieza junto a la cama",
        body: "Un saludo breve est\u00e1 bien, pero cuando ya es una conversaci\u00f3n real, normalmente es m\u00e1s considerado pasar al lounge."
      }
    ],
    phraseCards: [
      {
        phrase: "ここで電話しても大丈夫ですか？",
        pronunciation: "Koko de denwa shitemo daijoubu desu ka?",
        explanation: "Una forma \u00fatil de preguntar si ese espacio sirve para hablar por tel\u00e9fono.",
        useWhen: "Pr\u00e1ctica si no sabes si el lounge o el pasillo son adecuados."
      },
      {
        phrase: "ライトをつけてもいいですか？",
        pronunciation: "Raito o tsukete mo ii desu ka?",
        explanation: "Una forma suave de preguntar antes de encender la luz.",
        useWhen: "\u00datil al llegar tarde, al hacer la maleta temprano o en una habitaci\u00f3n peque\u00f1a compartida."
      }
    ],
    checklist: [
      "Prepara neceser, ropa y cargadores antes de pasar al modo noche.",
      "Usa auriculares, una luz peque\u00f1a y el cierre m\u00e1s silencioso posible.",
      "Lleva comida, llamadas y el gran reordenamiento al espacio com\u00fan si puedes."
    ]
  },
  "all-you-can-drink": {
    culturalNotes: [
      "Los planes de bebida ilimitada pueden parecer relajados, pero siguen funcionando con un tiempo compartido y un ritmo de mesa com\u00fan.",
      "Los momentos inc\u00f3modos suelen venir menos de beber y m\u00e1s de pedir demasiado, perder el \u00faltimo pedido o descoordinarse con la mesa."
    ],
    situationCards: [
      {
        title: "Quieres una bebida m\u00e1s justo antes de terminar",
        body: "Si la mesa ya se ha calmado, insistir en una \u00faltima ronda puede dar la sensaci\u00f3n de que todos alargan el ritmo solo por ti."
      },
      {
        title: "Cada persona pide por separado en momentos distintos",
        body: "Eso puede romper el flujo y hacer que la mesa se sienta desordenada. En muchos sitios funciona mejor pedir con un poco m\u00e1s de ritmo compartido."
      }
    ],
    phraseCards: [
      {
        phrase: "ラストオーダーは何時ですか？",
        pronunciation: "Rasuto oodaa wa nanji desu ka?",
        explanation: "Una forma directa de confirmar la hora del \u00faltimo pedido.",
        useWhen: "\u00datil si quieres acompasar la mesa sin correr al final."
      },
      {
        phrase: "次は一緒に頼みますか？",
        pronunciation: "Tsugi wa issho ni tanomimasu ka?",
        explanation: "Una forma suave de proponer que el siguiente pedido sea conjunto.",
        useWhen: "Pr\u00e1ctica cuando los vasos se vac\u00edan y no quieres desordenar el ritmo."
      }
    ],
    checklist: [
      "Comprueba pronto el l\u00edmite de tiempo y el \u00faltimo pedido.",
      "Mant\u00e9n el ritmo de la mesa en lugar de hacer mini pedidos constantes.",
      "Si dejas de beber antes, permite que el grupo siga con un ritmo c\u00f3modo."
    ]
  },
  karaoke: {
    culturalNotes: [
      "En Jap\u00f3n, el karaoke suele sentirse m\u00e1s como turnarse y compartir la sala que como una competici\u00f3n de canto.",
      "A menudo importa m\u00e1s ser alguien con quien es agradable compartir la sala que cantar muy bien."
    ],
    situationCards: [
      {
        title: "Controlas bien la m\u00e1quina y sigues metiendo canciones r\u00e1pido",
        body: "Aunque nadie se queje, llevar demasiado fuerte el ritmo de la sala puede hacer que la gente m\u00e1s callada desaparezca del flujo."
      },
      {
        title: "Quieres animar la sala desde el principio",
        body: "Empezar con una canci\u00f3n que todos puedan disfrutar suele funcionar mejor que abrir con tu elecci\u00f3n m\u00e1s personal o m\u00e1s intensa."
      }
    ],
    phraseCards: [
      {
        phrase: "次どうぞ",
        pronunciation: "Tsugi douzo",
        explanation: "Una forma natural de pasar el siguiente turno a otra persona.",
        useWhen: "\u00datil si quieres mantener el movimiento sin ocupar demasiado espacio."
      },
      {
        phrase: "みんなで歌える曲にしますね",
        pronunciation: "Minna de utaeru kyoku ni shimasu ne",
        explanation: "Una forma amable de decir que vas a elegir algo que todos puedan disfrutar.",
        useWhen: "Pr\u00e1ctica si quieres mantener un ambiente inclusivo."
      }
    ],
    checklist: [
      "Empieza con una canci\u00f3n adecuada para la sala, no con la m\u00e1s larga o intensa.",
      "Cede el siguiente turno con naturalidad y observa si alguien a\u00fan no ha cantado.",
      "Usa mando, panderetas y pedidos sin convertir la sala en tu escenario personal."
    ]
  },
  "live-concert": {
    culturalNotes: [
      "Las reglas de conciertos y espect\u00e1culos suelen centrarse en proteger la concentraci\u00f3n compartida de la sala.",
      "Lo que parece estricto suele tener menos que ver con la formalidad y m\u00e1s con evitar que una sola persona rompa la experiencia de muchos."
    ],
    situationCards: [
      {
        title: "Llegas justo despu\u00e9s de que empieza la funci\u00f3n",
        body: "Aunque tu asiento est\u00e9 cerca, entrar deprisa seg\u00fan tu propio ritmo suele resultar m\u00e1s molesto que esperar la ayuda del personal."
      },
      {
        title: "No sabes si una foto r\u00e1pida est\u00e1 permitida",
        body: "En recintos con reglas estrictas, \u00absolo una foto\u00bb suele sentirse menos como una peque\u00f1a excepci\u00f3n y m\u00e1s como romper la confianza."
      }
    ],
    phraseCards: [
      {
        phrase: "写真は大丈夫ですか？",
        pronunciation: "Shashin wa daijoubu desu ka?",
        explanation: "Una forma r\u00e1pida y educada de confirmar si se pueden hacer fotos.",
        useWhen: "\u00datil antes del show, en el intermedio o si la regla no est\u00e1 clara."
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "Una forma simple de confirmar que est\u00e1s en el asiento o zona correctos.",
        useWhen: "Pr\u00e1ctica cuando las secciones est\u00e1n llenas o llegas muy cerca del inicio."
      }
    ],
    checklist: [
      "Comprueba asiento, horario y reglas de grabaci\u00f3n antes de que empiece la funci\u00f3n.",
      "Pon el tel\u00e9fono en silencio total, incluida la vibraci\u00f3n en recintos tranquilos.",
      "Si llegas tarde, sigue al personal en lugar de improvisar."
    ]
  },
  "sports-event": {
    culturalNotes: [
      "Una grada deportiva puede ser ruidosa, pero cada secci\u00f3n suele tener su propio ritmo para ponerse de pie, animar y moverse.",
      "La forma m\u00e1s respetuosa suele ser disfrutar la energ\u00eda adapt\u00e1ndote a la gente de alrededor, no imponiendo tu propio estilo."
    ],
    situationCards: [
      {
        title: "Te emociona y quieres levantarte a menudo",
        body: "En algunos bloques es natural, pero en otros corta muy r\u00e1pido la vista. Mirar alrededor al principio suele decirte qu\u00e9 espera la secci\u00f3n."
      },
      {
        title: "Se acumulan comida, bebida y objetos de apoyo",
        body: "El ambiente puede ser relajado, pero escalones, espacio frente a las rodillas y debajo del asiento siguen siendo compartidos. Cuando tus cosas se expanden, toda la fila se siente m\u00e1s apretada."
      }
    ],
    phraseCards: [
      {
        phrase: "ここは立って応援する感じですか？",
        pronunciation: "Koko wa tatte ouen suru kanji desu ka?",
        explanation: "Una forma natural de preguntar si en esta zona se anima de pie.",
        useWhen: "\u00datil cuando el ambiente parece m\u00e1s organizado de lo esperado."
      },
      {
        phrase: "この席で合っていますか？",
        pronunciation: "Kono seki de atteimasu ka?",
        explanation: "Una forma tranquila de confirmar tu asiento antes de acomodarte.",
        useWhen: "Pr\u00e1ctica si bloques y filas se parecen y no quieres interrumpir dos veces."
      }
    ],
    checklist: [
      "Observa pronto si tu zona es sentada, de pie, tranquila o muy activa.",
      "Mant\u00e9n comida, bolsa y objetos de apoyo dentro de tu propio espacio.",
      "Cuando el juego se reanude, devuelve r\u00e1pido tu cuerpo y atenci\u00f3n al ritmo correcto."
    ]
  },
  "theme-park": {
    culturalNotes: [
      "Los parques tem\u00e1ticos en Jap\u00f3n pueden parecer muy ligeros en la superficie, pero su organizaci\u00f3n interna suele ser bastante estructurada.",
      "La fricci\u00f3n suele venir menos de las atracciones y m\u00e1s de c\u00f3mo se usan las filas, las zonas de espera y los espacios para ver shows."
    ],
    situationCards: [
      {
        title: "Tu grupo se para en medio para decidir qu\u00e9 hacer despu\u00e9s",
        body: "En un parque lleno, eso convierte al grupo en un obst\u00e1culo muy r\u00e1pido. Solo unos pasos hacia un lado cambian mucho la sensaci\u00f3n."
      },
      {
        title: "Piensas que solo est\u00e1s guardando sitio para amigos",
        body: "En desfiles, shows y colas, reservar m\u00e1s espacio del que ocupan las personas presentes suele parecer injusto antes de lo que imaginan muchos viajeros."
      }
    ],
    phraseCards: [
      {
        phrase: "ここで待てばいいですか？",
        pronunciation: "Koko de mateba ii desu ka?",
        explanation: "Una forma \u00fatil de confirmar si est\u00e1s esperando en el lugar correcto.",
        useWhen: "Pr\u00e1ctica cuando hay standby, entrada con hora o sistemas de regreso."
      },
      {
        phrase: "今ここで止まっても大丈夫ですか？",
        pronunciation: "Ima koko de tomatte mo daijoubu desu ka?",
        explanation: "Una forma suave de preguntar si puedes pararte aqu\u00ed un momento.",
        useWhen: "\u00datil antes de mirar el mapa, arreglar una bolsa o reunir al grupo."
      }
    ],
    checklist: [
      "Confirma si est\u00e1s en la fila real o solo en la entrada a ella.",
      "No dejes que el grupo ocupe todo el paso mientras decide el siguiente movimiento.",
      "Trata desfiles, shows y puntos de foto como espacios de visi\u00f3n compartidos."
    ]
  },
  "rental-car": {
    culturalNotes: [
      "La etiqueta del coche de alquiler en Jap\u00f3n tiene menos que ver con el estilo y m\u00e1s con evitar fricciones previsibles: aparcamiento, carreteras estrechas, reglas de combustible y hora de devoluci\u00f3n.",
      "Lo que m\u00e1s estresa muchas veces no es conducir, sino las peque\u00f1as suposiciones sobre recogida, peajes y d\u00f3nde puede dejarse el coche."
    ],
    situationCards: [
      {
        title: "Una parada corta parece inofensiva",
        body: "En muchos lugares, \u00absolo un minuto\u00bb puede bloquear una calle estrecha, la entrada a una tienda o el tr\u00e1fico local."
      },
      {
        title: "La hora de devoluci\u00f3n te parece flexible",
        body: "La devoluci\u00f3n de un alquiler suele tener un ritmo m\u00e1s ajustado de lo que esperan muchos viajeros. Llegar un poco tarde puede afectar al personal, la limpieza y la siguiente reserva."
      }
    ],
    phraseCards: [
      {
        phrase: "この近くに駐車しても大丈夫ですか？",
        pronunciation: "Kono chikaku ni chuusha shitemo daijoubu desu ka?",
        explanation: "Una forma cuidadosa de preguntar si se puede aparcar cerca.",
        useWhen: "\u00datil si las se\u00f1ales no est\u00e1n claras o el espacio parece ambiguo."
      },
      {
        phrase: "返却前に給油が必要ですか？",
        pronunciation: "Henkyaku mae ni kyuuyu ga hitsuyou desu ka?",
        explanation: "Una forma directa de confirmar la regla del combustible antes de devolverlo.",
        useWhen: "Pr\u00e1ctica antes del \u00faltimo d\u00eda, sobre todo si la explicaci\u00f3n al recoger fue r\u00e1pida."
      }
    ],
    checklist: [
      "Antes de salir, confirma permiso, peajes, combustible y hora de devoluci\u00f3n.",
      "Incluso para una parada breve, comprueba primero que no bloqueas paso ni entrada.",
      "Antes de devolver el coche, deja margen para gasolina, trayecto y revisi\u00f3n final."
    ]
  }
};

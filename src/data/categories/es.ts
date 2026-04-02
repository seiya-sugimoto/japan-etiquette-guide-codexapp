import type { CategoryContent, CategoryId } from "@/types/category";

export const spanishCategoryContent: Partial<Record<CategoryId, CategoryContent>> = {
  train: {
    quickView: ["Habla en voz baja.", "Haz fila antes de subir.", "Pon el teléfono en modo silencio."],
    dos: ["Deja bajar primero a las demás personas.", "Si alguien parece necesitar asiento prioritario, considera ofrecerlo.", "En trenes llenos, lleva la mochila delante."],
    donts: ["Procura no contestar llamadas dentro del vagón.", "No bloquees las puertas con tu cuerpo o tu equipaje.", "Comer suele ser aceptable en trenes de larga distancia, pero menos en los trenes de uso diario."],
    whyItMatters: ["En Japón, los trenes suelen sentirse tranquilos y ordenados. Gestos pequeños cambian mucho la comodidad del espacio compartido."],
    commonMistakes: ["Hablar a volumen normal o alto con amigos.", "Detenerse junto a la puerta con una maleta grande.", "No ver los avisos sobre asientos prioritarios o reglas especiales."],
    readMore: ["Las normas cambian según el tipo de tren, así que conviene mirar las señales sobre vagones reservados, asientos y equipaje grande."]
  },
  restaurant: {
    quickView: ["Si el personal organiza las mesas, espera a que te indiquen.", "Haz pedidos simples y claros.", "Mira cómo funciona el pedido y el pago."],
    dos: ["Usa el botón de llamada si la mesa lo tiene.", "Mantén los bolsos compactos, sobre todo en locales pequeños.", "Si quieres dividir la cuenta, pregunta con educación porque no todos los sitios lo permiten."],
    donts: ["No supongas que todos los restaurantes dividen la cuenta.", "Evita dejar la mesa muy desordenada.", "En lugares estrechos, comprueba antes de entrar con equipaje grande."],
    whyItMatters: ["Muchos restaurantes son pequeños y funcionan con un ritmo silencioso y fluido. Un poco de atención ayuda bastante."],
    commonMistakes: ["Esperar sin notar el atril o la señal de recepción.", "Interrumpir la explicación del personal antes de escucharla.", "Pensar que el pago funciona igual en todos los restaurantes."],
    readMore: ["Vale la pena fijarse en botones de llamada, consumo mínimo, pago solo en efectivo y si se paga en la mesa o en caja."]
  },
  shrine: {
    quickView: ["Mantén la calma y observa.", "Si dudas, sigue las señales y el flujo local.", "Un comportamiento tranquilo y respetuoso suele ser suficiente."],
    dos: ["En algunos santuarios se evita caminar por el centro del camino principal, así que conviene observar las señales y a la gente local.", "Si quieres intentar un ritual, mira primero cómo lo hacen otras personas.", "Mantén discretos la voz, el móvil y las fotos."],
    donts: ["No conviertas el lugar en un set de fotos si hay personas rezando cerca.", "No bloquees el espacio de culto para tomar fotos.", "No toques objetos rituales si no está claramente permitido."],
    whyItMatters: ["Muchos santuarios son a la vez lugares culturales y lugares de culto activos."],
    commonMistakes: ["Caminar por el centro sin notar la costumbre local.", "Sacar fotos donde la gente necesita espacio para rezar.", "Copiar el ritual demasiado rápido sin entender el flujo."],
    readMore: ["No necesitas conocer el ritual a la perfección. En muchos lugares, estar en silencio, observar y seguir el ambiente es suficiente."]
  },
  onsen: {
    quickView: ["Lávate antes de entrar al baño.", "No metas la toalla en el agua.", "Mantén un ambiente tranquilo."],
    dos: ["Enjuágate y lávate bien en la zona de duchas antes de entrar.", "Recoge el pelo largo si hace falta.", "Mantén ordenados tu taquilla y tu espacio de lavado."],
    donts: ["No entres al baño antes de haberte lavado.", "Evita nadar, salpicar o hablar en voz alta.", "No dejes la toalla grande dentro del agua."],
    whyItMatters: ["Onsen y sento son espacios compartidos que se basan en la limpieza, la calma y la consideración hacia los demás."],
    commonMistakes: ["Tratar el baño como si fuera una piscina.", "Dejar jabón o agua por todas partes en la zona de lavado.", "Pensar que las normas sobre tatuajes son iguales en todos los lugares."],
    readMore: ["Las reglas sobre tatuajes, fotos y baños privados cambian mucho según el establecimiento, así que las señales y el personal importan mucho."]
  },
  "trash-public": {
    quickView: ["Si hace falta, guarda tu propia basura.", "Deja libres las zonas de paso.", "Si comes mientras caminas, cuida aún más el espacio y los restos."],
    dos: ["Lleva una bolsa pequeña para tu basura.", "Sigue las indicaciones de separación cuando los contenedores estén claramente marcados.", "Apártate antes de mirar el mapa, las fotos o los mensajes."],
    donts: ["No tires basura ni dejes vasos o envoltorios atrás.", "Evita detenerte de golpe en un paso concurrido.", "No comas de una manera que manche, huela fuerte o estorbe a otras personas."],
    whyItMatters: ["A veces hay pocos contenedores públicos, así que muchas personas gestionan su propia basura e intentan mantener cómodo el espacio compartido."],
    commonMistakes: ["Pensar que siempre habrá una papelera cerca.", "Bloquear el paso mientras consultas direcciones.", "Dejar envoltorios de tienda en lugares que no son para basura."],
    readMore: ["Comer mientras caminas no siempre es un problema, pero en zonas llenas puede sentirse incómodo. Guardar la basura hasta encontrar el lugar adecuado suele ser lo más seguro."]
  },
  "payments-tipping": {
    quickView: ["Normalmente no se deja propina.", "Fíjate dónde se hace el pago.", "En algunos sitios el efectivo sigue siendo útil."],
    dos: ["Busca caja, máquina de tickets, bandeja de pago o autopago.", "Si hay bandeja para el dinero, usarla suele ser lo más natural.", "En lugares pequeños, puede ser útil comprobar antes si aceptan tarjeta."],
    donts: ["No asumas que la propina forma parte del servicio.", "No des por hecho que siempre se paga en la mesa.", "No pienses que siempre se puede dividir la cuenta."],
    whyItMatters: ["Pagar en Japón suele ser sencillo, pero el ritmo puede sentirse distinto si esperas propina o cobro en la mesa."],
    commonMistakes: ["Dejar monedas como propina.", "Esperar demasiado a que el personal cobre en la mesa.", "Pensar que todas las tarjetas internacionales se aceptan."],
    readMore: ["Vale la pena mirar señales de solo efectivo, máquinas de tickets, autopago y si el pago se hace en la caja."]
  },
  "queue-escalator": {
    quickView: ["Sigue las líneas o marcas cuando existan.", "Observa las señales y el flujo local.", "En lugares concurridos, evita parar de golpe."],
    dos: ["Mira las marcas del suelo antes de hacer fila.", "Mantén el equipaje pegado al cuerpo.", "Apártate antes de mirar mapas o mensajes."],
    donts: ["No empieces otra fila si ya hay una cola organizada.", "No dejes que tus bolsos invadan la zona de paso.", "No asumas que en todas las ciudades se usa igual la escalera mecánica."],
    whyItMatters: ["Estaciones, tiendas y eventos suelen depender de un flujo de gente continuo y ordenado."],
    commonMistakes: ["No ver una fila porque se formó en silencio.", "Quedarte en un punto donde bloqueas a otros en la escalera o el andén.", "Pararte en un paso estrecho para decidir adónde ir."],
    readMore: ["En escaleras mecánicas, lo más seguro es seguir las señales, al personal y el flujo local. En algunos lugares incluso se recomienda no caminar sobre ellas."]
  },
  "photo-video": {
    quickView: ["Comprueba primero las normas para fotos o vídeo.", "No bloquees caminos ni zonas de culto.", "Ten cuidado si hay personas dentro del encuadre."],
    dos: ["Busca señales antes de grabar en tiendas, templos, santuarios, exposiciones o propiedades privadas.", "Mantén cierta distancia si fotografías a personas o personal.", "Apártate antes de detenerte a sacar fotos o vídeo."],
    donts: ["No asumas que un lugar bonito significa que siempre se puede grabar.", "Evita filmar a personas muy de cerca sin permiso.", "No uses flash ni vídeo donde los carteles indiquen que no."],
    whyItMatters: ["Las normas sobre fotos en Japón suelen relacionarse con privacidad, seguridad, culto y funcionamiento del lugar, no solo con si parece público."],
    commonMistakes: ["Bloquear un paso estrecho para hacer una foto.", "Grabar dentro de una tienda sin ver un cartel.", "Hacer planos muy cercanos de desconocidos sin preguntar."],
    readMore: ["Si no está claro, lo más seguro es mirar señales o preguntar al personal. Las restricciones cambian según el lugar y el evento."]
  },
  "large-luggage": {
    quickView: ["Mantén el equipaje fuera de las zonas de paso.", "Vigila bien tus maletas en espacios concurridos.", "Revisa las normas del tren para equipaje grande."],
    dos: ["En estaciones y filas, lleva las maletas grandes pegadas a ti.", "Si cargar todo resulta difícil, usa consignas o envío de equipaje.", "Antes de un trayecto largo, revisa las reglas para equipaje sobredimensionado."],
    donts: ["No dejes bolsas atravesadas en puertas, pasillos o andenes.", "No te pares en un paso estrecho a reorganizar las maletas.", "No coloques una maleta grande donde otras personas necesitan pasar."],
    whyItMatters: ["En estaciones y trenes llenos, la posición del equipaje importa mucho más de lo que muchas personas imaginan."],
    commonMistakes: ["Abrir una maleta en mitad del pasillo de una estación.", "Dejar una maleta junto a la puerta de un tren lleno.", "No ver la información sobre equipaje grande en algunos shinkansen."],
    readMore: ["Si llevas muchas cosas, las consignas y el envío de equipaje pueden hacer el día mucho más cómodo. Las reglas cambian según la línea."]
  },
  toilet: {
    quickView: ["Normalmente el papel se tira al inodoro, salvo que una señal diga lo contrario.", "No pasa nada si hay muchos botones.", "Deja el espacio limpio para la siguiente persona."],
    dos: ["Si el tipo de inodoro o los controles te resultan raros, mira los carteles dentro del cubículo.", "Si dudas, usa el botón normal de descarga.", "Tómate un momento para dejar limpios el suelo y el asiento."],
    donts: ["No pulses el botón de emergencia salvo que realmente necesites ayuda.", "No asumas que todos los baños funcionan igual.", "Evita dejar agua, papel o equipaje repartidos por un cubículo pequeño."],
    whyItMatters: ["Los baños en Japón suelen estar muy limpios, y muchos lugares esperan que las instalaciones compartidas sigan así."],
    commonMistakes: ["Pulsar por error un botón de aviso.", "Quedarte paralizado porque el panel parece complicado.", "Dejar un baño público pequeño desordenado."],
    readMore: ["Hay baños de estilo japonés y occidental. Si dudas, las señales dentro del cubículo suelen indicar el siguiente paso más seguro."]
  },
  "airport-arrival": {
    quickView: ["Mira primero las señales.", "Ten los documentos listos.", "Si vas a revisar el móvil, apártate antes."],
    dos: ["Guarda pasaporte y documentos de llegada en un lugar fácil de sacar.", "Si necesitas detenerte para orientarte, hazlo a un lado."],
    donts: ["No te pares de golpe en pasillos concurridos.", "No bloquees a otras personas mientras miras el teléfono."],
    whyItMatters: ["Las zonas de llegada se llenan muy rápido, así que una pequeña pausa afecta a muchas personas a la vez."],
    commonMistakes: ["Pararse justo delante de una señal.", "Buscar los documentos solo al llegar al control."],
    readMore: ["Si te sientes perdido, apártate primero, revisa las señales y luego vuelve al flujo."]
  },
  "immigration-customs": {
    quickView: ["Prepara los documentos con antelación.", "Quédate en la fila correcta.", "Espera con calma las instrucciones."],
    dos: ["Ten listos el pasaporte y los formularios antes de llegar al mostrador.", "Avanza solo cuando el personal te llame o te lo indique."],
    donts: ["No uses el teléfono donde esté prohibido.", "No hagas fotos en zonas controladas."],
    whyItMatters: ["Estas áreas dependen del orden tranquilo y de la seguridad."],
    commonMistakes: ["Empezar a buscar papeles justo en el mostrador.", "Pasar a la siguiente mesa antes de ser llamado."],
    readMore: ["Si dudas sobre la fila correcta, mirar la señal o preguntar brevemente es mejor que adivinar."]
  },
  "airport-transfer": {
    quickView: ["Ten claro el siguiente paso.", "Lleva el equipaje cerca.", "No te metas en una fila sin comprobarla antes."],
    dos: ["Confirma la línea de tren, la parada del bus o el método de ticket antes de bajar al andén.", "Busca símbolos y señales útiles en inglés."],
    donts: ["No bloquees las máquinas mientras decides la ruta.", "No entres corriendo en la primera fila sin saber adónde va."],
    whyItMatters: ["Las zonas de transbordo parecen rápidas, pero una pausa breve evita la mayoría de las confusiones."],
    commonMistakes: ["Ponerse en la fila equivocada.", "Reorganizar el equipaje en medio de la estación."],
    readMore: ["Antes de entrar en el flujo, decide primero destino, tipo de transporte y método de pago."]
  },
  "local-bus": {
    quickView: ["Mira por dónde se sube.", "Ten claro cuándo se paga.", "Pulsa el botón de parada con tiempo."],
    dos: ["Observa cómo suben y pagan los pasajeros locales.", "Lleva lista la tarifa o la tarjeta IC."],
    donts: ["No supongas que todos los autobuses funcionan igual.", "No bloquees la puerta mientras averiguas cuánto debes pagar."],
    whyItMatters: ["Si adivinas el sistema, puedes retrasar a toda la fila de atrás."],
    commonMistakes: ["Intentar pagar en el momento equivocado.", "Olvidar el botón de parada."],
    readMore: ["Si no estás seguro, mirar a las personas que van delante suele ser la forma más rápida de entenderlo."]
  },
  taxi: {
    quickView: ["Muestra el destino con claridad.", "Deja que el conductor gestione la puerta si es automática.", "Mantén el trayecto simple."],
    dos: ["Si puedes, enseña el nombre del lugar o la dirección en japonés.", "Mantén el equipaje compacto dentro del coche."],
    donts: ["No fuerces una puerta automática salvo que sea necesario.", "No supongas que pronunciar el nombre más o menos bastará."],
    whyItMatters: ["Un pequeño malentendido con la puerta, la dirección o el tono puede volver el trayecto incómodo enseguida."],
    commonMistakes: ["Tirar de la puerta tú mismo.", "Dar solo un nombre de lugar muy general en inglés."],
    readMore: ["Mostrar un mapa, una tarjeta del hotel o una dirección escrita suele funcionar mejor que explicar la ruta en voz alta."]
  },
  "hotel-checkin": {
    quickView: ["Prepara reserva y pasaporte.", "Escucha antes de hacer muchas preguntas.", "No llenes de maletas el mostrador."],
    dos: ["Ten listos nombre de la reserva, pasaporte y forma de pago antes de llegar.", "Escucha bien la explicación sobre llave, desayuno o normas del baño."],
    donts: ["No repartas el equipaje por todo el mostrador.", "No supongas que todos los hoteles hacen el check-in igual."],
    whyItMatters: ["Un check-in tranquilo ayuda al personal a atender a muchas llegadas con fluidez."],
    commonMistakes: ["Buscar documentos ya en el mostrador.", "No prestar atención a detalles sobre desayuno, baño o salida."],
    readMore: ["Incluso una explicación corta suele contener detalles que ahorran tiempo más tarde."]
  },
  "hotel-breakfast": {
    quickView: ["Si hace falta, espera a que te sienten.", "Sírvete poco al principio.", "Devuelve bandejas o platos si así se indica."],
    dos: ["Observa si el personal está asignando mesas antes de elegir una.", "Si el buffet está lleno, sirve pequeñas rondas."],
    donts: ["No te cueles en la fila del buffet.", "No ocupes una mesa grande solo con bolsas o equipaje."],
    whyItMatters: ["La sala de desayuno parece relajada, pero el servicio suele seguir un ritmo rápido y estructurado."],
    commonMistakes: ["Servirse demasiado de una vez.", "Quedarse mucho rato delante de la comida pensando qué elegir."],
    readMore: ["En horas punta, estancias más cortas y platos pequeños suelen hacer la experiencia más fluida para todo el mundo."]
  },
  "luggage-storage": {
    quickView: ["Elige primero el tamaño correcto de taquilla.", "No reorganices el equipaje delante de las taquillas.", "Acuérdate bien de dónde dejaste la maleta."],
    dos: ["Ten listo el pago y calcula más o menos el tamaño que necesitas antes de usar la máquina.", "Si necesitas más tiempo para ordenar tus cosas, apártate a un lado."],
    donts: ["No bloquees toda una fila de taquillas mientras reorganizas el equipaje.", "No fuerces una maleta demasiado grande en una taquilla que no corresponde."],
    whyItMatters: ["La zona de taquillas suele ser estrecha, transitada y pensada para usarse rápido."],
    commonMistakes: ["Abrir varias taquillas mientras otras personas esperan.", "Olvidar en qué bloque guardaste la maleta."],
    readMore: ["Hacer una foto rápida al número de taquilla o a la señal cercana puede ahorrar bastante tiempo después."]
  },
  cafe: {
    quickView: ["Comprueba si primero se elige mesa o se pide.", "En horas punta, usa el espacio con ligereza.", "No bloquees el mostrador de recogida."],
    dos: ["Observa un momento las señales de entrada o a otras personas antes de sentarte.", "Si vas solo y hay mucha gente, elige una mesa pequeña."],
    donts: ["No supongas que todas las cafeterías aceptan estancias muy largas con una sola bebida.", "No ocupes toda la mesa con dispositivos y bolsas."],
    whyItMatters: ["Muchas cafeterías japonesas son pequeñas y el ritmo cambia rápido cuando el local se llena."],
    commonMistakes: ["Sentarse primero en una cafetería donde se pide antes.", "Quedarse demasiado tiempo en un local lleno sin notar el flujo."],
    readMore: ["Si no sabes cuánto tiempo quedarte, en horas concurridas suele funcionar mejor una visita más corta y más ligera."]
  },
  supermarket: {
    quickView: ["Sigue el flujo del pasillo.", "Fíjate en dónde se embolsan las compras.", "Manipula los productos con cuidado."],
    dos: ["Coge una cesta si te hace falta.", "Después de pagar, pasa a embolsar tus compras en la zona prevista."],
    donts: ["No te quedes mucho rato bloqueando un pasillo con la cesta o el carro.", "No abras productos antes de comprarlos."],
    whyItMatters: ["El supermercado es un espacio de vida diaria para la gente local, así que la fluidez importa mucho."],
    commonMistakes: ["Empezar a embolsar en la caja mientras otras personas esperan.", "Dejar en cualquier sitio un producto que ya no quieres."],
    readMore: ["Si cambias de idea sobre un artículo, devolverlo a su zona correcta ayuda mucho más que dejarlo en cualquier estante."]
  },
  drugstore: {
    quickView: ["Distingue lo que es compra sencilla de lo que conviene consultar.", "Si es medicina, lee bien el uso y las advertencias.", "Si dudas, una pregunta corta es mejor que adivinar."],
    dos: ["Pregunta brevemente al personal si buscas algo para un síntoma o una necesidad concreta.", "Sigue las indicaciones del personal cuando el producto tenga restricciones o avisos especiales."],
    donts: ["No abras productos ni uses testers sin confirmar que están para eso.", "No pienses que todos los medicamentos se compran como si fueran snacks o cosméticos."],
    whyItMatters: ["Las droguerías japonesas mezclan productos cotidianos con artículos de salud, así que algunas compras requieren más cuidado."],
    commonMistakes: ["Comprar una medicina sin entender para qué sirve.", "Confundir un tester con un producto nuevo para la venta."],
    readMore: ["Si el artículo está relacionado con salud o cuidado corporal, preguntar al personal suele ser la opción más segura."]
  },
  "department-store": {
    quickView: ["Muévete con calma y lee el ambiente.", "Toca los productos con cuidado.", "Adáptate al ritmo más sereno del lugar."],
    dos: ["Deja espacio al personal y a otras personas, sobre todo cerca de mostradores y exposiciones.", "Si el servicio se siente más formal, acompaña ese tono."],
    donts: ["No trates los grandes almacenes como una plaza ruidosa para descansar.", "No abras embalajes ni manipules las presentaciones con demasiada libertad."],
    whyItMatters: ["Muchos grandes almacenes en Japón cuidan mucho la presentación, la atmósfera y la atención al cliente."],
    commonMistakes: ["Hablar demasiado alto en grupo.", "Tratar un mostrador cuidado como si fuera una estantería de autoservicio."],
    readMore: ["Cuanto más refinado parezca un espacio, más útil suele ser bajar un poco el ritmo y observar antes."]
  },
  "duty-free": {
    quickView: ["Lleva los documentos correctos antes de pagar.", "Piensa en la compra libre de impuestos como un trámite completo, no solo un descuento.", "Sigue las indicaciones sobre embalaje y entrega."],
    dos: ["Ten listo el pasaporte original si la tienda lo exige.", "Comprueba antes si el producto y la compra entran realmente en el sistema."],
    donts: ["No supongas que todas las tiendas o todos los artículos son aptos.", "No llegues al mostrador sin la documentación necesaria."],
    whyItMatters: ["La compra libre de impuestos depende mucho de reglas, categorías de producto e identificación."],
    commonMistakes: ["Dejar el pasaporte en el hotel.", "Pensar que una foto del pasaporte en el móvil basta."],
    readMore: ["Decidir antes de pagar si quieres hacer el trámite libre de impuestos suele ahorrar tiempo y confusiones."]
  },
  "fitting-room": {
    quickView: ["Espera tu turno y sigue las reglas de la tienda.", "Ayuda a mantener la ropa limpia.", "Si dudas sobre cuántas prendas o cómo usar el probador, pregunta antes."],
    dos: ["Quítate los zapatos o usa la funda para la cara si la tienda lo pide.", "Entra solo con el número de prendas permitido."],
    donts: ["No entres con zapatos donde no se permite.", "No des por hecho que siempre se pueden hacer fotos dentro del probador."],
    whyItMatters: ["Los probadores son espacios controlados porque la tienda protege la higiene, la ropa y el ritmo de la cola."],
    commonMistakes: ["Dejar tiradas las prendas que no quieres.", "Intentar entrar con demasiadas piezas sin mirar la norma."],
    readMore: ["Si el sistema del probador parece estricto, normalmente tiene que ver con limpieza, orden y cuidado de la mercancía."]
  },
  "market-shopping-street": {
    quickView: ["Sigue avanzando y no conviertas el centro de la calle en zona de parada.", "Deja espacio a la gente local y a las entradas de las tiendas.", "Si vas a hacer fotos, mira primero el momento y el espacio."],
    dos: ["Si necesitas parar, apártate a un lado.", "Pregunta antes de fotografiar tiendas, trabajadores o puestos que siguen funcionando."],
    donts: ["No bloquees una entrada ni te quedes mucho rato delante de un puesto.", "No toques productos frescos si no está claro que el sistema es de autoservicio."],
    whyItMatters: ["Mercados y calles comerciales son a la vez lugares para visitantes, para trabajar y para las compras diarias de la gente local."],
    commonMistakes: ["Pararse a hablar justo delante de una tienda.", "Hacer fotos a vendedores sin pedir permiso."],
    readMore: ["La mejor idea es simple: disfruta del lugar, pero recuerda que sigue siendo un espacio de trabajo real."]
  },
  "museum-gallery": {
    quickView: ["Habla bajo y lee las normas antes de entrar.", "No des por hecho que todo se puede tocar o fotografiar.", "Deja espacio real para que otras personas vean las obras."],
    dos: ["Comprueba las reglas de cada sala o exposición antes de sacar la cámara.", "Mantén una distancia razonable con las obras y con otras personas."],
    donts: ["No uses flash ni te acerques demasiado a objetos frágiles.", "No ocupes demasiado tiempo delante de una pieza muy popular sin darte cuenta."],
    whyItMatters: ["Museos y galerías en Japón suelen valorar una atmósfera tranquila y atenta."],
    commonMistakes: ["Hacer fotos en una sala donde está prohibido.", "Tratar la exposición como una atracción turística ruidosa."],
    readMore: ["Si las normas cambian de una sala a otra, volver a mirar los carteles al avanzar suele ser lo más seguro."]
  },
  "castle-garden": {
    quickView: ["Camina despacio y sigue la ruta marcada.", "Toma las barreras como límites reales.", "Ten cuidado con superficies antiguas y delicadas."],
    dos: ["Quítate los zapatos o sigue las normas específicas si el lugar lo pide.", "Respeta el sentido de la visita y los caminos señalados."],
    donts: ["No pases una barrera baja solo para conseguir una foto mejor.", "No toques madera, piedra ni superficies históricas sin necesidad."],
    whyItMatters: ["Muchos lugares históricos son más frágiles de lo que parecen y dependen del cuidado de cada visitante."],
    commonMistakes: ["Apoyarse en una estructura antigua.", "Pensar que un espacio abierto a la vista significa que se puede entrar."],
    readMore: ["Cuando un lugar parece delicado, suele serlo de verdad. Moverse con cuidado forma parte del respeto."]
  },
  "festival-fireworks": {
    quickView: ["Llega con tiempo y piensa desde el principio en la vuelta.", "Ten presente la dirección del flujo de gente.", "Controla bien tu basura y tus pertenencias."],
    dos: ["Cuenta con más tiempo para entrar y para salir.", "Sigue al personal cuando haya control de accesos o de salidas."],
    donts: ["No te pares de golpe dentro de una multitud en movimiento.", "No des por hecho que podrás salir fácilmente sin un plan."],
    whyItMatters: ["Los festivales y fuegos artificiales pueden pasar muy rápido de ambiente relajado a una multitud intensísima."],
    commonMistakes: ["Intentar caminar contra el flujo de la gente.", "Esperar hasta el último momento para pensar cómo volver."],
    readMore: ["Saber de antemano dónde vas a colocarte y cómo vas a salir suele hacer mucho más llevaderos los grandes eventos."]
  },
  "seasonal-scenic-spot": {
    quickView: ["Disfruta del paisaje con cuidado.", "Comparte con paciencia los mejores puntos de foto.", "No salgas del camino para conseguir otro ángulo."],
    dos: ["Mantente en las rutas indicadas y mira las señales de zonas protegidas.", "Espera tu turno para la foto en vez de meterte delante."],
    donts: ["No tires de ramas ni toques flores para arreglar la foto.", "No uses trípodes grandes donde el paso es estrecho y hay mucha gente."],
    whyItMatters: ["Los lugares famosos por sakura o colores de otoño deben proteger a la vez el paisaje, la seguridad y la naturaleza."],
    commonMistakes: ["Quedarse demasiado rato en el punto más estrecho.", "Entrar en zonas protegidas para acercarse más."],
    readMore: ["En lugares muy populares, esperar con calma suele dar una experiencia mejor que intentar sacar la foto perfecta enseguida."]
  },
  "rental-car": {
    quickView: ["Revisa los documentos antes de conducir.", "Entiende bien las normas de aparcamiento y devolución.", "No supongas que todo funciona igual que en tu país."],
    dos: ["Confirma al recoger el coche las reglas sobre permiso, combustible y hora de devolución.", "Aparca solo donde esté claramente permitido."],
    donts: ["No des por hecho que tu permiso normal sirve en cualquier caso.", "No devuelvas el coche tarde sin avisar.", "No aparques en un borde de carretera esperando que no pase nada."],
    whyItMatters: ["Una diferencia en documentos, señales, aparcamiento o proceso de devolución puede convertirse enseguida en un problema serio o un coste alto."],
    commonMistakes: ["Olvidar el permiso o la traducción necesarios.", "Devolver el coche sin repostar cuando el contrato lo pedía."],
    readMore: ["Antes de salir, deja claras al menos tres cosas: tus documentos, dónde puedes aparcar y cómo es exactamente la devolución."]
  }
};

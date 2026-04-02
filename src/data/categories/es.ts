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
  },
  "airport-limousine-bus": {
    quickView: ["Llega un poco antes.", "Comprueba bien el andén y el destino.", "Sigue el proceso del equipaje que marque el personal."],
    dos: ["Confirma el número de andén y el nombre exacto del destino antes de hacer cola.", "Sigue las indicaciones del personal para las maletas grandes."],
    donts: ["No supongas que el autobús esperará hasta el último segundo.", "No dejes el equipaje en un lugar no aprobado por el personal."],
    whyItMatters: ["Los autobuses de aeropuerto suelen ir con horarios muy ajustados, así que una pequeña confusión puede retrasar a muchas personas."],
    commonMistakes: ["Esperar en la parada equivocada.", "No darse cuenta del proceso de etiqueta o manejo del equipaje."],
    readMore: ["Mirar dos veces el nombre del destino ayuda mucho, sobre todo cuando varios hoteles o estaciones tienen nombres parecidos."]
  },
  "night-bus": {
    quickView: ["Piensa en el bus como un espacio para dormir.", "Reduce al máximo el ruido y la luz.", "Deja preparadas tus cosas antes de que el ambiente se calme."],
    dos: ["Haz conversaciones muy cortas y muy bajas.", "Ten listo lo que necesites antes de que el autobús entre en modo descanso."],
    donts: ["No hagas llamadas dentro del autobús.", "No uses pantallas brillantes sin pensar en la gente de alrededor."],
    whyItMatters: ["Incluso sonidos pequeños o un poco de luz pueden molestar a muchas personas en un autobús nocturno."],
    commonMistakes: ["Reorganizar la mochila después de apagar las luces.", "Ver vídeos sin pensar en el brillo de la pantalla."],
    readMore: ["Si tienes que moverte durante el trayecto, lo más seguro es hacerlo despacio y con la menor luz y ruido posibles."]
  },
  "ride-hailing": {
    quickView: ["Encuentra primero el punto correcto de recogida.", "Espera sin bloquear la fila ni la carretera.", "Respeta el orden si hay parada de taxi o zona marcada."],
    dos: ["Comprueba el lugar exacto antes de pedir el coche.", "Colócate donde el conductor pueda verte sin estorbar a otras personas."],
    donts: ["No des por hecho que el coche puede parar en cualquier sitio.", "No te adelantes a personas que ya están esperando."],
    whyItMatters: ["En estaciones y aeropuertos, un error pequeño en el punto de recogida puede generar bastante confusión."],
    commonMistakes: ["Pedir el coche antes de encontrar la zona correcta.", "Esperar en el carril equivocado."],
    readMore: ["En un nodo de transporte grande, el mejor hábito suele ser simple: primero encuentra el punto de recogida y luego pide el coche."]
  },
  ferry: {
    quickView: ["Muévete con cuidado.", "Guarda tus cosas de forma ordenada.", "Respeta las normas de las zonas comunes y de la cubierta."],
    dos: ["Sigue las indicaciones de embarque y cuida el equilibrio al moverte.", "Deja las bolsas donde no bloqueen el paso."],
    donts: ["No te extiendas demasiado en asientos o zonas compartidas.", "No bloquees un pasillo estrecho para mirar o hacer fotos."],
    whyItMatters: ["En ferris y barcos, el espacio es compartido y a veces inestable, así que el orden y la atención importan mucho."],
    commonMistakes: ["Dejar maletas en el pasillo.", "Hacer fotos desde un lugar que bloquea a otras personas."],
    readMore: ["En trayectos largos, revisar las normas del lounge, la cubierta y las zonas tranquilas suele hacer el viaje bastante más fácil."]
  },
  "ropeway-cablecar": {
    quickView: ["Sube rápido.", "Comparte de forma natural las mejores vistas.", "Deja libre la zona de salida."],
    dos: ["Entra con rapidez y avanza para hacer sitio.", "Disfruta de la vista un momento y luego deja pasar a otras personas."],
    donts: ["No corras a ocupar la mejor ventana.", "No mantengas la posición perfecta para fotos durante todo el trayecto."],
    whyItMatters: ["Estos trayectos suelen ser cortos, bonitos y concurridos, así que compartir un poco cambia mucho la experiencia."],
    commonMistakes: ["Adueñarse de la ventana principal durante todo el viaje.", "Pararse en la salida para sacar una última foto."],
    readMore: ["El ritmo más cómodo suele ser simple: subir rápido, mirar un poco, compartir de forma natural y salir sin bloquear."]
  },
  "hotel-lobby": {
    quickView: ["Usa el lobby como zona de espera compartida.", "Mantén el equipaje compacto.", "Si necesitas organizarte, apártate a un lado."],
    dos: ["Elige una zona despejada si necesitas unos minutos para revisar tus planes.", "Mantén tus cosas cerca de ti."],
    donts: ["No conviertas el centro del lobby en base para reorganizar maletas.", "No bloquees los pasillos principales con equipaje."],
    whyItMatters: ["El lobby sirve a la vez para llegadas, salidas, movimientos del personal y esperas tranquilas."],
    commonMistakes: ["Extender las maletas en una zona de paso.", "Hablar demasiado alto porque el espacio parece abierto."],
    readMore: ["Si necesitas parar un momento, normalmente lo mejor es elegir un lateral despejado y ocupar el menor espacio posible."]
  },
  "hotel-elevator": {
    quickView: ["Deja salir primero a las demás personas.", "Entra con decisión y libera la puerta.", "Mantén el trayecto breve y tranquilo."],
    dos: ["Avanza hacia dentro para dejar espacio.", "Sujeta la puerta si alguien está llegando claramente."],
    donts: ["No te quedes parado en el marco de la puerta.", "No dejes una maleta grande bloqueando al resto."],
    whyItMatters: ["El ascensor del hotel es un espacio pequeño, visible y muy compartido, así que la cortesía se nota enseguida."],
    commonMistakes: ["Intentar entrar antes de que salgan otras personas.", "Dejar la maleta en medio de la cabina."],
    readMore: ["Los gestos sencillos dentro de un ascensor suelen dejar una impresión fuerte precisamente porque el espacio es tan directo."]
  },
  "shared-lounge": {
    quickView: ["Usa el espacio con ligereza.", "Adáptate al tono más silencioso de la sala.", "Comprueba si se permiten llamadas, comida o bebida."],
    dos: ["Ocupa solo el espacio que necesites.", "Deja la zona limpia al marcharte."],
    donts: ["No ocupes varios asientos con bolsas.", "No uses la sala más tranquila para una llamada larga."],
    whyItMatters: ["La comodidad de una sala compartida depende mucho de lo poco que cada persona pese sobre el espacio."],
    commonMistakes: ["Extenderse por varias plazas.", "Dejar vasos o envoltorios al irse."],
    readMore: ["Cuando no sabes bien qué hacer, normalmente lo más seguro es seguir el ejemplo de la gente más silenciosa de la sala."]
  },
  "coin-laundry": {
    quickView: ["Usa las máquinas con eficiencia.", "Vuelve a recoger la ropa a tiempo.", "No invadas las superficies comunes con tus cosas."],
    dos: ["Lee bien las instrucciones antes de iniciar el ciclo.", "Pon una alarma para volver a la hora correcta."],
    donts: ["No dejes la ropa terminada mucho tiempo dentro de la máquina.", "No ocupes varias máquinas sin necesidad."],
    whyItMatters: ["Las lavanderías compartidas funcionan mejor cuando la gente respeta tanto el tiempo de las demás personas como las máquinas."],
    commonMistakes: ["Olvidar la hora de fin.", "Dejar detergente, bolsas o ropa sobre la mesa de doblado."],
    readMore: ["Cuando la lavandería está llena, volver pronto a recoger la ropa importa casi tanto como usar bien la máquina."]
  },
  "capsule-hotel": {
    quickView: ["Termina las tareas ruidosas antes de entrar en la zona de cápsulas.", "Pon el móvil en silencio.", "Muévete con suavidad por la noche."],
    dos: ["Usa las zonas comunes para llamadas, reorganizar equipaje o cualquier tarea ruidosa.", "Prepara lo que necesites antes de entrar en la zona de descanso."],
    donts: ["No hagas llamadas cerca de las cápsulas.", "No abras cremalleras o bolsas ruidosamente durante mucho rato por la noche."],
    whyItMatters: ["En un hotel cápsula el sonido se transmite con mucha facilidad, incluso cuando a ti te parece que apenas se nota."],
    commonMistakes: ["Rehacer la maleta pasada la medianoche.", "Ver vídeos cerca de cápsulas donde otras personas intentan dormir."],
    readMore: ["En un hotel cápsula, lo más cómodo suele ser terminar todo lo que haga ruido antes de entrar en la zona de sueño."]
  },
  "hostel-dorm": {
    quickView: ["Usa las zonas comunes para llamadas y para reorganizar el equipaje.", "Mantén ordenada tu zona de cama.", "Por la noche, usa una luz pequeña."],
    dos: ["Lleva las conversaciones largas y el repacking a un lounge o a una zona común.", "Mantén tus cosas cerca de tu cama."],
    donts: ["No enciendas luces fuertes tarde por la noche salvo que sea necesario.", "No uses el suelo como espacio extra de almacenamiento."],
    whyItMatters: ["Las habitaciones compartidas pueden sentirse sociales, pero siguen siendo espacios de descanso."],
    commonMistakes: ["Tener una conversación larga junto a la cama mientras otras personas descansan.", "Dejar bolsas y cargadores por todo el suelo."],
    readMore: ["Si quieres hablar, comer u organizar el equipaje, normalmente las zonas comunes son la mejor opción."]
  },
  "checkout-room": {
    quickView: ["Revisa si olvidas algo.", "Deja la habitación razonablemente ordenada.", "No supongas que salir tarde no importa."],
    dos: ["Mira enchufes, estantes del baño y debajo de la cama antes de irte.", "Sigue las indicaciones sencillas sobre basura o devolución de llave."],
    donts: ["No dejes la habitación muy desordenada.", "No te quedes después de la hora de salida sin preguntar."],
    whyItMatters: ["La hora de salida afecta a la limpieza y a la llegada de la siguiente persona."],
    commonMistakes: ["Olvidar cargadores o pasaporte.", "Hacer la maleta con prisas y dejar la habitación hecha un caos."],
    readMore: ["No hace falta dejar todo perfecto. Un orden básico y salir a tiempo suele ser suficiente."]
  },
  bakery: {
    quickView: ["Coge bandeja si ese es el sistema.", "Usa las pinzas con cuidado.", "Mantén la fila en movimiento."],
    dos: ["Usa la bandeja y las pinzas cuando la tienda las ofrezca.", "Avanza por la vitrina sin detenerte demasiado en un mismo punto."],
    donts: ["No toques el pan directamente salvo que esté claramente permitido.", "No te inclines sobre la vitrina con bolsas abiertas o mangas sueltas."],
    whyItMatters: ["Las vitrinas de pan están abiertas, así que importan tanto la higiene como la fluidez."],
    commonMistakes: ["Tocar más de una pieza mientras decides.", "Bloquear demasiado tiempo la parte delantera de la vitrina."],
    readMore: ["Aunque la panadería parezca informal, moverse como una fila tranquila suele encajar mejor con el ritmo local."]
  },
  "fast-food": {
    quickView: ["Ten claro el pedido antes de llegar al mostrador.", "Devuelve la bandeja si el local lo pide.", "Deja la mesa razonablemente limpia."],
    dos: ["Prepara el pedido antes de llegar al mostrador cuando sea posible.", "Devuelve bandejas y basura después de comer si el sistema lo espera."],
    donts: ["No dejes envoltorios y bandejas sobre la mesa al marcharte.", "No bloquees la zona de condimentos o de recogida."],
    whyItMatters: ["Los espacios de comida rápida están pensados para una rotación veloz, así que cualquier retraso se nota mucho."],
    commonMistakes: ["No darse cuenta de dónde se devuelven las bandejas.", "Quedarse mucho tiempo después de terminar en hora punta."],
    readMore: ["Mirar a una o dos personas locales suele mostrar más rápido cómo funciona la limpieza que leer todos los carteles."]
  },
  "food-court": {
    quickView: ["Usa solo los asientos que necesites.", "Lleva la bandeja con cuidado.", "Devuelve platos o basura donde toque."],
    dos: ["Ocupa solo el número de plazas que tu grupo necesita de verdad.", "Devuelve bandejas, platos o basura a la estación correcta al terminar."],
    donts: ["No reserves una zona grande solo con bolsas.", "No dejes bandejas terminadas en la mesa si hay estación de devolución."],
    whyItMatters: ["Los food courts dependen de que mucha gente comparta los mismos asientos durante poco tiempo."],
    commonMistakes: ["Guardar demasiados sitios demasiado pronto.", "Tratar la zona compartida como si fuera un comedor privado."],
    readMore: ["En los momentos más llenos, el ritmo más agradecido suele ser simple: comer, recoger y dejar sitio con naturalidad."]
  },
  izakaya: {
    quickView: ["Espera a que te sienten.", "Revisa primero las normas de la casa.", "Pide al ritmo del local."],
    dos: ["Comprueba si hay cargo de mesa, regla de una bebida o límite de tiempo.", "Mira el ambiente antes de tratarlo como un bar informal cualquiera."],
    donts: ["No supongas que todo lo que llega a la mesa es gratis u opcional.", "No lleves equipaje grande a una zona de asientos muy pequeña."],
    whyItMatters: ["Muchas personas viajeras se confunden con pequeñas costumbres del izakaya, sobre todo al principio de la comida."],
    commonMistakes: ["Sorprenderse por un otoshi o un cargo de mesa.", "Tardar demasiado en pedir en un local muy pequeño."],
    readMore: ["Una mirada rápida a la carta, al tamaño del sitio y a la información del cargo suele bastar para entender qué tipo de lugar es."]
  },
  bar: {
    quickView: ["Observa el ambiente antes de hablar fuerte.", "Pide de forma clara y sencilla.", "Comprueba antes de hacer fotos."],
    dos: ["Dedica un momento a ver si el bar es tranquilo, social, formal o informal.", "Mantén tu voz cerca del nivel que ya tiene la sala."],
    donts: ["No supongas que todos los bares aceptan energía ruidosa de grupo.", "No uses flash ni filmes al personal sin comprobarlo."],
    whyItMatters: ["Muchos bares en Japón dependen mucho de la atmósfera, y leer la sala importa tanto como entender la carta."],
    commonMistakes: ["Hablar demasiado alto en un bar de cócteles tranquilo.", "Bloquear la barra mientras decides qué pedir."],
    readMore: ["Un minuto de observación al llegar suele funcionar mejor que un minuto de preguntas."]
  },
  "all-you-can-drink": {
    quickView: ["Comprueba el límite de tiempo.", "Fíjate en la hora del último pedido.", "Pide solo lo que la mesa pueda terminar."],
    dos: ["Confirma la duración y la hora del último pedido antes de acomodarte.", "Pide al ritmo que tu grupo realmente pueda disfrutar."],
    donts: ["No conviertas la tarifa en un reto.", "No dejes muchas bebidas sin terminar sobre la mesa."],
    whyItMatters: ["Estos planes están organizados alrededor del tiempo, la equidad y un servicio eficiente."],
    commonMistakes: ["Pedir demasiado y demasiado rápido.", "Perder el último pedido porque nadie miró la hora."],
    readMore: ["Casi siempre se siente mejor acompasar a la mesa que seguir añadiendo bebidas que en realidad nadie quiere."]
  },
  karaoke: {
    quickView: ["Confirma primero la duración.", "Sigue las reglas de uso de la sala.", "Deja la habitación en buen estado."],
    dos: ["Comprueba al llegar el sistema de tarifas, el límite de tiempo y cualquier consumo mínimo.", "Usa los micrófonos y el equipo con cuidado."],
    donts: ["No supongas que una sala privada significa que no hay normas.", "No te quedes más allá de tu hora sin revisar una posible extensión."],
    whyItMatters: ["El karaoke en Japón es divertido pero muy de sistema, así que entender el plan al principio evita confusiones después."],
    commonMistakes: ["No entender cómo funciona el tiempo contratado.", "Dejar la sala desordenada o tratar mal el equipo."],
    readMore: ["Revisar al principio cómo se pide y cómo se extiende el tiempo evita la mayoría de los problemas posteriores."]
  },
  "food-stalls": {
    quickView: ["Comprueba si se espera que comas allí o sigas andando.", "Apártate si te detienes.", "Lleva tu basura contigo."],
    dos: ["Fíjate en si el puesto espera que comas cerca o continúes caminando.", "Muévete a un lado si te paras a comer o a hacer fotos."],
    donts: ["No te detengas en la parte más estrecha de la multitud.", "No dejes caer comida ni migas mientras atraviesas una zona concurrida."],
    whyItMatters: ["Estas zonas parecen informales, pero el movimiento y el espacio compartido importan mucho cuando hay mucha gente."],
    commonMistakes: ["Comer en medio de una multitud en movimiento.", "Dejar brochetas, vasos o envoltorios en el lugar equivocado."],
    readMore: ["Algunas zonas toleran más comer mientras caminas, pero detenerse con orden suele ser la opción más segura."]
  }
};

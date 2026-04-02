import type { CategoryContent, CategoryId } from "@/types/category";

export const frenchCategoryContent: Partial<Record<CategoryId, CategoryContent>> = {
  train: {
    quickView: ["Gardez la voix basse.", "Faites la queue avant de monter.", "Mettez le téléphone en mode silencieux."],
    dos: ["Laissez d’abord sortir les passagers.", "Proposez une place prioritaire si quelqu’un semble en avoir besoin.", "Dans les trains bondés, portez le sac devant vous."],
    donts: ["Évitez de répondre au téléphone dans la rame.", "Ne bloquez pas les portes avec votre corps ou vos bagages.", "Manger est souvent accepté dans les trains longue distance, mais moins dans les trains du quotidien."],
    whyItMatters: ["Les trains au Japon sont souvent calmes et ordonnés. De petits gestes changent beaucoup l’ambiance pour tout le monde."],
    commonMistakes: ["Parler à voix haute avec ses amis.", "S’arrêter près des portes avec une grosse valise.", "Ne pas remarquer les panneaux sur les places prioritaires ou les règles spéciales."],
    readMore: ["Les règles varient selon le type de train, donc les panneaux sur les voitures réservées, les sièges et les grands bagages méritent toujours un coup d’œil."]
  },
  restaurant: {
    quickView: ["S’il y a un accueil, attendez qu’on vous place.", "Gardez vos demandes simples et claires.", "Vérifiez comment fonctionnent la commande et le paiement."],
    dos: ["Utilisez le bouton d’appel s’il y en a un à la table.", "Gardez vos sacs compacts, surtout dans les petits restaurants.", "Si vous voulez séparer l’addition, demandez poliment car certains lieux ne le font pas."],
    donts: ["Ne supposez pas que chaque restaurant accepte les additions séparées.", "Évitez de laisser la table très en désordre.", "Dans un endroit étroit, vérifiez avant d’apporter de gros bagages."],
    whyItMatters: ["Beaucoup de restaurants sont petits et suivent un rythme calme et fluide. Un peu d’attention aide vraiment."],
    commonMistakes: ["Attendre sans remarquer le comptoir d’accueil ou un panneau.", "Couper l’explication du personnel au lieu d’écouter d’abord.", "Supposer que le paiement fonctionne pareil partout."],
    readMore: ["Pensez à vérifier les boutons d’appel, les consommations minimales, le cash only et si l’addition se règle à table ou à la caisse."]
  },
  shrine: {
    quickView: ["Restez calme et observateur.", "En cas de doute, suivez les panneaux et le mouvement local.", "Un comportement discret et respectueux suffit souvent."],
    dos: ["Dans certains sanctuaires, on évite le centre de l’allée principale, donc regardez les panneaux et les habitudes autour de vous.", "Si vous voulez essayer un rituel, observez d’abord.", "Gardez les voix, le téléphone et les photos très mesurés."],
    donts: ["N’utilisez pas le lieu comme décor photo si des personnes prient à côté.", "Ne bloquez pas l’espace de prière pour prendre des photos.", "Ne touchez pas aux objets rituels sans invitation claire."],
    whyItMatters: ["Les sanctuaires sont souvent à la fois des lieux culturels et des lieux de culte bien vivants."],
    commonMistakes: ["Marcher au milieu sans remarquer l’usage local.", "Prendre des photos là où les fidèles ont besoin d’espace.", "Imiter les gestes trop vite sans comprendre le flux."],
    readMore: ["Vous n’avez pas besoin de connaître parfaitement les rites. Dans beaucoup d’endroits, être calme, patient et attentif suffit."]
  },
  onsen: {
    quickView: ["Lavez-vous avant d’entrer dans le bain.", "Gardez la serviette hors de l’eau.", "Restez calme et détendu."],
    dos: ["Rincez-vous et lavez-vous bien au poste de douche avant le bain.", "Attachez les cheveux longs si nécessaire.", "Gardez votre casier et votre espace de lavage bien rangés."],
    donts: ["N’entrez pas dans le bain avant de vous être lavé.", "Évitez de nager, d’éclabousser ou de parler fort.", "Ne laissez pas la grande serviette tremper dans l’eau."],
    whyItMatters: ["Les onsen et sento sont des espaces partagés fondés sur la propreté, le calme et l’attention aux autres."],
    commonMistakes: ["Traiter le bain comme une piscine.", "Laisser savon et eau partout dans la zone de lavage.", "Penser que les règles sur les tatouages sont identiques partout."],
    readMore: ["Les règles sur tatouages, photos et bains privés varient beaucoup selon l’établissement, donc les panneaux et le personnel comptent vraiment."]
  },
  "trash-public": {
    quickView: ["Gardez vos déchets avec vous si besoin.", "Laissez les passages libres.", "Si vous mangez en marchant, faites encore plus attention à l’espace et aux miettes."],
    dos: ["Gardez un petit sac pour vos déchets.", "Suivez les indications de tri quand elles sont claires.", "Mettez-vous de côté avant de consulter une carte, des photos ou des messages."],
    donts: ["Ne jetez rien au sol et ne laissez pas emballages ou gobelets derrière vous.", "Évitez de vous arrêter net dans un passage chargé.", "Évitez de manger d’une façon qui salit, gêne ou diffuse une forte odeur."],
    whyItMatters: ["Les poubelles publiques peuvent être rares, donc chacun gère souvent ses déchets tout en gardant l’espace agréable."],
    commonMistakes: ["Penser qu’on trouvera facilement une poubelle partout.", "Bloquer le flux piéton pour vérifier un itinéraire.", "Déposer un emballage à un endroit qui n’est pas prévu pour cela."],
    readMore: ["Manger en marchant n’est pas toujours mal vu, mais dans les zones très fréquentées cela peut sembler maladroit. Garder ses déchets jusqu’à la bonne poubelle reste l’option la plus sûre."]
  },
  "payments-tipping": {
    quickView: ["Le pourboire n’est généralement pas attendu.", "Regardez où se fait le paiement.", "L’argent liquide reste utile dans certains endroits."],
    dos: ["Repérez la caisse, le distributeur de tickets, le plateau de paiement ou l’auto-caisse.", "S’il y a un plateau pour l’argent, l’utiliser est souvent le plus naturel.", "Dans les petits lieux, il peut être utile de vérifier l’acceptation des cartes avant de commander."],
    donts: ["Ne supposez pas que le pourboire fait partie du service.", "Ne supposez pas que l’on paie toujours à table.", "Ne supposez pas que l’addition peut toujours être divisée."],
    whyItMatters: ["Le paiement est souvent simple au Japon, mais le rythme peut sembler différent si l’on attend un pourboire ou un règlement à table."],
    commonMistakes: ["Laisser des pièces comme pourboire.", "Attendre trop longtemps que le personnel encaisse à table.", "Supposer que toutes les cartes étrangères sont acceptées."],
    readMore: ["Les indices utiles sont les panneaux cash only, les machines à tickets, les auto-caisses et le fait de payer au comptoir ou non."]
  },
  "queue-escalator": {
    quickView: ["Suivez les lignes ou marquages quand ils existent.", "Observez les panneaux et le flux local.", "Dans les endroits très fréquentés, évitez les arrêts brusques."],
    dos: ["Regardez les marquages au sol avant de vous mettre en file.", "Gardez vos bagages près du corps.", "Mettez-vous sur le côté avant de consulter une carte ou vos messages."],
    donts: ["Ne créez pas une nouvelle file s’il y en a déjà une bien organisée.", "Ne laissez pas vos sacs déborder dans le passage.", "Ne supposez pas que la façon de se tenir sur les escalators est la même partout."],
    whyItMatters: ["Gares, magasins et événements reposent souvent sur une circulation fluide de la foule."],
    commonMistakes: ["Ne pas voir une file parce qu’elle s’est formée discrètement.", "Se tenir là où l’on bloque les autres sur l’escalator ou le quai.", "S’arrêter dans un passage étroit pour décider où aller."],
    readMore: ["Pour les escalators, le plus sûr reste de suivre les panneaux, le personnel et le mouvement local. Dans certains endroits, les campagnes de sécurité demandent même de ne pas marcher du tout sur l’escalator."]
  },
  "photo-video": {
    quickView: ["Vérifiez les règles avant de filmer.", "Ne bloquez ni les passages ni les zones de prière.", "Faites attention si des personnes apparaissent dans le cadre."],
    dos: ["Cherchez les panneaux avant de filmer dans les boutiques, temples, sanctuaires, expositions ou propriétés privées.", "Gardez un peu de distance si vous photographiez des personnes ou du personnel.", "Mettez-vous de côté avant de vous arrêter pour filmer ou photographier."],
    donts: ["Ne supposez pas qu’un beau lieu autorise forcément les photos.", "Évitez de filmer des personnes de près sans permission.", "N’utilisez pas de flash ni de vidéo là où les panneaux l’interdisent."],
    whyItMatters: ["Au Japon, les règles photo relèvent souvent de la vie privée, de la sécurité, du culte et du fonctionnement du lieu, pas seulement de son apparence publique."],
    commonMistakes: ["Bloquer un passage étroit pour une photo.", "Filmer à l’intérieur d’une boutique sans remarquer un panneau.", "Faire de gros plans sur des inconnus sans demander."],
    readMore: ["Si les règles ne sont pas claires, le plus sûr est de regarder les panneaux ou de demander au personnel. Les restrictions changent selon le lieu et l’événement."]
  },
  "large-luggage": {
    quickView: ["Gardez les bagages hors des passages.", "Surveillez bien votre valise dans les zones chargées.", "Vérifiez les règles des trains pour les gros bagages."],
    dos: ["Dans les gares et les files, gardez les grosses valises près de vous.", "Si tout porter devient compliqué, utilisez des consignes ou une livraison de bagages.", "Avant un trajet longue distance, vérifiez les règles pour les bagages volumineux."],
    donts: ["Ne laissez pas vos sacs à travers les portes, allées ou quais.", "Ne vous arrêtez pas dans un passage étroit pour réorganiser vos bagages.", "Ne laissez pas une grosse valise à l’endroit où les autres doivent passer."],
    whyItMatters: ["Dans les gares et trains bondés, la position des bagages compte beaucoup plus qu’on ne l’imagine souvent."],
    commonMistakes: ["Ouvrir une valise au milieu d’un couloir de gare.", "Laisser un bagage près de la porte d’un train bondé.", "Manquer les indications sur les bagages volumineux dans certains shinkansen."],
    readMore: ["Si vous transportez beaucoup, les consignes et l’envoi de bagages peuvent rendre la journée bien plus simple. Les règles varient selon la ligne."]
  },
  toilet: {
    quickView: ["Le papier toilette se jette généralement dans la cuvette, sauf indication contraire.", "Pas de panique s’il y a beaucoup de boutons.", "Laissez l’endroit propre pour la personne suivante."],
    dos: ["Si le type de toilettes ou les commandes vous semblent inhabituels, lisez les panneaux dans la cabine.", "Si vous hésitez, utilisez le bouton de chasse standard.", "Prenez un instant pour laisser le siège et le sol en bon état."],
    donts: ["N’appuyez pas sur le bouton d’appel d’urgence sauf si vous avez réellement besoin d’aide.", "Ne supposez pas que toutes les toilettes fonctionnent pareil.", "Évitez de laisser eau, papier ou bagages partout dans une petite cabine."],
    whyItMatters: ["Les toilettes au Japon sont souvent très propres, et l’on s’attend souvent à ce que les espaces partagés le restent."],
    commonMistakes: ["Appuyer par erreur sur un bouton d’appel.", "Se figer devant un panneau de commandes compliqué.", "Laisser une petite cabine publique en désordre."],
    readMore: ["On trouve des toilettes japonaises et occidentales. En cas de doute, les panneaux dans la cabine indiquent souvent l’option la plus sûre."]
  },
  "airport-arrival": {
    quickView: ["Regardez les panneaux d’abord.", "Gardez les documents prêts.", "Mettez-vous de côté avant de vérifier votre téléphone."],
    dos: ["Gardez passeport et documents d’arrivée faciles à sortir.", "Si vous devez vous arrêter pour vous orienter, faites-le sur le côté."],
    donts: ["Ne vous arrêtez pas brusquement dans un passage chargé.", "Ne bloquez pas les autres voyageurs pendant que vous regardez votre téléphone."],
    whyItMatters: ["Les zones d’arrivée deviennent très vite chargées, donc une petite pause touche beaucoup de monde à la fois."],
    commonMistakes: ["S’arrêter juste devant un panneau.", "Chercher ses documents seulement au moment du contrôle."],
    readMore: ["Si vous vous sentez perdu, mettez-vous d’abord de côté, lisez les panneaux, puis reprenez le flux."]
  },
  "immigration-customs": {
    quickView: ["Préparez les documents à l’avance.", "Restez dans la bonne file.", "Attendez calmement les instructions."],
    dos: ["Préparez passeport et formulaires avant d’arriver au guichet.", "Avancez seulement quand le personnel vous appelle ou vous le demande."],
    donts: ["N’utilisez pas votre téléphone là où c’est interdit.", "Ne prenez pas de photos dans les zones contrôlées."],
    whyItMatters: ["Ces espaces dépendent d’un ordre calme et d’un haut niveau de sécurité."],
    commonMistakes: ["Chercher ses papiers au comptoir.", "Avancer au poste suivant avant d’être appelé."],
    readMore: ["Si vous hésitez sur la file à prendre, regarder le panneau ou demander brièvement vaut mieux que deviner."]
  },
  "airport-transfer": {
    quickView: ["Connaissez l’étape suivante.", "Gardez les bagages près de vous.", "Ne rejoignez pas une file avant de l’avoir vérifiée."],
    dos: ["Confirmez la ligne, l’arrêt de bus ou la méthode de ticket avant de descendre vers le quai.", "Repérez les symboles et panneaux utiles en anglais."],
    donts: ["Ne bloquez pas les distributeurs pendant que vous décidez.", "Ne vous précipitez pas dans la première file sans savoir où elle mène."],
    whyItMatters: ["Les zones de correspondance paraissent rapides, mais une courte pause évite la plupart des confusions."],
    commonMistakes: ["Rejoindre la mauvaise file.", "Réorganiser ses bagages au milieu de la gare."],
    readMore: ["Avant de vous lancer, décidez d’abord la destination, le type de transport et le mode de paiement."]
  },
  "local-bus": {
    quickView: ["Regardez où monter.", "Sachez quand payer.", "Appuyez assez tôt sur le bouton stop."],
    dos: ["Observez comment les habitants montent et paient.", "Gardez votre monnaie ou carte IC prête."],
    donts: ["Ne supposez pas que tous les bus fonctionnent pareil.", "Ne bloquez pas la porte pendant que vous cherchez le tarif."],
    whyItMatters: ["Si vous devinez le système, vous risquez de ralentir tout le monde derrière vous."],
    commonMistakes: ["Payer au mauvais moment.", "Oublier le bouton d’arrêt."],
    readMore: ["Regarder les passagers devant vous est souvent la façon la plus rapide de comprendre le système."]
  },
  taxi: {
    quickView: ["Montrez clairement la destination.", "Laissez le chauffeur gérer la porte si elle est automatique.", "Gardez le trajet simple."],
    dos: ["Montrez le nom du lieu ou l’adresse en japonais si possible.", "Gardez vos affaires compactes dans l’habitacle."],
    donts: ["Ne forcez pas une porte automatique sauf nécessité.", "Ne supposez pas qu’une prononciation approximative suffira."],
    whyItMatters: ["Une petite incompréhension sur la porte, l’adresse ou le ton peut vite rendre le trajet gênant."],
    commonMistakes: ["Tirer la porte soi-même.", "Donner seulement un nom de lieu vague en anglais."],
    readMore: ["Montrer une carte, une carte d’hôtel ou une adresse écrite fonctionne souvent mieux qu’expliquer le trajet à l’oral."]
  },
  "hotel-checkin": {
    quickView: ["Préparez réservation et passeport.", "Écoutez avant de poser beaucoup de questions.", "Gardez le comptoir dégagé."],
    dos: ["Préparez nom de réservation, passeport et moyen de paiement avant d’arriver au bureau.", "Écoutez bien les explications sur la clé, le petit-déjeuner ou le bain."],
    donts: ["Ne répandez pas vos bagages autour du comptoir.", "Ne supposez pas que tous les hôtels suivent le même déroulé."],
    whyItMatters: ["Un enregistrement calme aide le personnel à accueillir plusieurs arrivées sans heurts."],
    commonMistakes: ["Chercher les documents une fois au comptoir.", "Ignorer les détails sur le petit-déjeuner, le bain ou l’heure de départ."],
    readMore: ["Même une explication brève contient souvent des détails utiles qui font gagner du temps ensuite."]
  },
  "hotel-breakfast": {
    quickView: ["Attendez qu’on vous place si nécessaire.", "Servez-vous d’abord en petites portions.", "Rapportez plateau ou vaisselle si c’est prévu."],
    dos: ["Regardez si le personnel place les clients avant de choisir une table.", "Si le buffet est chargé, servez-vous en plusieurs petits passages."],
    donts: ["Ne coupez pas la file du buffet.", "Ne monopolisez pas une grande table avec vos sacs."],
    whyItMatters: ["La salle de petit-déjeuner paraît détendue, mais le service suit souvent un rythme rapide et structuré."],
    commonMistakes: ["Prendre trop de nourriture d’un coup.", "Rester longtemps devant les plats pour décider."],
    readMore: ["Aux heures chargées, des séjours plus courts et de petites assiettes successives sont souvent plus agréables pour tout le monde."]
  },
  "luggage-storage": {
    quickView: ["Choisissez d’abord la bonne taille de casier.", "Ne repackez pas devant les casiers.", "Notez bien l’endroit où vous avez rangé votre sac."],
    dos: ["Préparez le paiement et estimez la taille nécessaire avant d’utiliser la machine.", "Mettez-vous de côté si vous avez besoin de temps pour trier vos affaires."],
    donts: ["Ne bloquez pas toute une rangée de casiers pendant que vous réorganisez vos bagages.", "Ne forcez pas un sac trop grand dans un casier inadapté."],
    whyItMatters: ["Les zones de casiers sont souvent étroites, fréquentées et pensées pour un usage rapide."],
    commonMistakes: ["Ouvrir plusieurs casiers pendant que d’autres attendent.", "Oublier dans quelle rangée vous avez laissé votre bagage."],
    readMore: ["Prendre rapidement une photo du numéro du casier ou du panneau voisin peut faire gagner du temps plus tard."]
  },
  cafe: {
    quickView: ["Vérifiez s’il faut d’abord choisir la place ou commander.", "Aux heures chargées, gardez une présence légère.", "Ne bloquez pas le comptoir de retrait."],
    dos: ["Observez un instant les panneaux d’entrée ou les autres clients avant de vous asseoir.", "Si vous êtes seul pendant le rush, choisissez une petite table."],
    donts: ["Ne supposez pas que tous les cafés acceptent une très longue pause avec une seule boisson.", "Ne déployez pas appareils et sacs sur toute la table."],
    whyItMatters: ["Beaucoup de cafés japonais sont petits et le rythme change vite quand la salle se remplit."],
    commonMistakes: ["S’asseoir d’abord dans un café où l’on commande d’abord.", "Rester trop longtemps dans un lieu bondé sans remarquer le flux."],
    readMore: ["Si vous ne savez pas combien de temps rester, les périodes chargées appellent souvent une visite plus courte et plus légère."]
  },
  supermarket: {
    quickView: ["Suivez le flux du rayon.", "Voyez où il faut emballer les achats.", "Manipulez les produits avec soin."],
    dos: ["Prenez un panier si besoin.", "Après avoir payé, allez emballer vos courses à l’endroit prévu."],
    donts: ["Ne restez pas longtemps devant un rayon avec panier ou chariot qui bloque.", "N’ouvrez pas les produits avant de les avoir achetés."],
    whyItMatters: ["Le supermarché est un espace du quotidien pour les habitants, donc la fluidité y compte beaucoup."],
    commonMistakes: ["Commencer à emballer à la caisse alors que d’autres attendent.", "Reposer un produit au mauvais endroit après avoir changé d’avis."],
    readMore: ["Si vous ne prenez plus un article, le remettre dans son bon rayon aide beaucoup plus que le laisser au hasard."]
  },
  drugstore: {
    quickView: ["Distinguez les achats simples des produits qui demandent un conseil.", "Pour les médicaments, lisez bien les indications.", "En cas de doute, une question courte vaut mieux qu’un pari."],
    dos: ["Demandez brièvement au personnel si vous cherchez un produit adapté à un symptôme ou à un besoin précis.", "Suivez les explications du personnel pour les articles avec restrictions ou avertissements."],
    donts: ["N’ouvrez pas les produits et n’utilisez pas les testeurs au hasard.", "Ne supposez pas que tous les médicaments s’achètent comme de simples snacks ou cosmétiques."],
    whyItMatters: ["Les drugstores japonais vendent à la fois des articles du quotidien et des produits liés à la santé, donc certaines règles sont plus strictes."],
    commonMistakes: ["Acheter un médicament sans comprendre à quoi il sert.", "Confondre un testeur avec un produit neuf à vendre."],
    readMore: ["Quand un article touche à la santé ou aux soins du corps, une courte question au personnel est souvent l’option la plus sûre."]
  },
  "department-store": {
    quickView: ["Avancez calmement et lisez l’ambiance.", "Manipulez les produits avec soin.", "Adaptez-vous au rythme plus posé du lieu."],
    dos: ["Laissez de l’espace au personnel et aux autres clients, surtout près des comptoirs.", "Si le service paraît plus formel, suivez simplement ce ton."],
    donts: ["Ne traitez pas le magasin comme un salon bruyant.", "N’ouvrez pas les emballages et ne manipulez pas les présentations trop librement."],
    whyItMatters: ["Les grands magasins au Japon accordent souvent beaucoup d’importance à la présentation, au calme et à la qualité du service."],
    commonMistakes: ["Parler fort en groupe.", "Traiter un comptoir soigné comme un rayon entièrement libre-service."],
    readMore: ["Plus un étage paraît raffiné, plus il est utile de ralentir un peu et d’observer avant d’agir."]
  },
  "duty-free": {
    quickView: ["Préparez les bons documents avant de payer.", "Voyez la détaxe comme une procédure complète, pas seulement une remise.", "Suivez les consignes sur l’emballage et la remise des achats."],
    dos: ["Gardez votre passeport original prêt si le magasin l’exige.", "Vérifiez d’abord si l’achat et le type d’article entrent bien dans le dispositif."],
    donts: ["Ne supposez pas que tous les magasins ou tous les articles sont éligibles.", "N’arrivez pas au comptoir sans les documents nécessaires."],
    whyItMatters: ["La détaxe dépend surtout des règles, des catégories d’articles et de l’identification, pas seulement du prix."],
    commonMistakes: ["Laisser son passeport à l’hôtel.", "Penser qu’une photo du passeport sur le téléphone suffit."],
    readMore: ["Décider avant le passage en caisse si vous voulez une procédure détaxée rend généralement l’achat bien plus simple."]
  },
  "fitting-room": {
    quickView: ["Attendez votre tour et suivez les règles du magasin.", "Aidez à garder les vêtements propres.", "En cas de doute sur le nombre d’articles ou la marche à suivre, demandez avant."],
    dos: ["Retirez vos chaussures ou utilisez la housse de visage si le magasin le demande.", "Entrez avec le nombre d’articles autorisé par le magasin."],
    donts: ["N’entrez pas avec des chaussures là où elles sont interdites.", "Ne supposez pas que les photos sont toujours permises dans les cabines."],
    whyItMatters: ["Les cabines sont des espaces contrôlés, car le magasin protège à la fois les vêtements, l’hygiène et le rythme de la file."],
    commonMistakes: ["Laisser les vêtements refusés en désordre.", "Essayer d’entrer avec trop d’articles sans vérifier la règle."],
    readMore: ["Si le système d’essayage paraît strict, c’est généralement pour des raisons de propreté, d’ordre et de soin des produits."]
  },
  "market-shopping-street": {
    quickView: ["Continuez d’avancer et ne transformez pas le milieu de la rue en zone d’arrêt.", "Laissez de la place aux habitants et aux devantures.", "Si vous prenez des photos, regardez d’abord le moment et l’espace."],
    dos: ["Si vous devez vous arrêter, décalez-vous sur le côté.", "Demandez avant de photographier une boutique, un vendeur ou un étal qui ressemble à un espace de travail."],
    donts: ["Ne bloquez pas une entrée de magasin et ne restez pas longtemps devant un étal.", "Ne touchez pas les produits frais si le système n’est pas clairement en libre-service."],
    whyItMatters: ["Les marchés et rues commerçantes servent à la fois au tourisme, au travail et aux courses du quotidien."],
    commonMistakes: ["S’arrêter pour discuter juste devant une boutique.", "Prendre en photo des commerçants sans demander."],
    readMore: ["Le bon réflexe est simple: profitez du lieu, mais souvenez-vous qu’il fonctionne encore comme espace de travail réel."]
  },
  "museum-gallery": {
    quickView: ["Parlez bas et lisez les règles avant d’entrer.", "Ne supposez pas que tout se touche ou se photographie.", "Laissez aux autres visiteurs un vrai espace de regard."],
    dos: ["Vérifiez les règles de chaque salle ou exposition avant d’utiliser l’appareil photo.", "Gardez une distance raisonnable avec les œuvres et les autres visiteurs."],
    donts: ["N’utilisez pas le flash et ne vous approchez pas trop des objets fragiles.", "Ne monopolisez pas trop longtemps une œuvre très regardée sans vous en rendre compte."],
    whyItMatters: ["Les musées et galeries au Japon valorisent souvent une atmosphère calme et attentive."],
    commonMistakes: ["Photographier dans une salle où cela est interdit.", "Traiter l’exposition comme une attraction touristique bruyante."],
    readMore: ["Si les règles changent d’une salle à l’autre, les relire en avançant reste souvent le choix le plus sûr."]
  },
  "castle-garden": {
    quickView: ["Marchez lentement et restez sur le parcours indiqué.", "Considérez les barrières comme de vraies limites.", "Faites attention aux surfaces anciennes et fragiles."],
    dos: ["Retirez vos chaussures ou suivez les consignes particulières si le site le demande.", "Respectez le sens de visite et les chemins balisés."],
    donts: ["Ne passez pas derrière une barrière basse pour obtenir une meilleure photo.", "Ne touchez pas inutilement le bois, la pierre ou les surfaces historiques."],
    whyItMatters: ["De nombreux sites historiques sont plus fragiles qu’ils n’en ont l’air et dépendent du soin apporté par les visiteurs."],
    commonMistakes: ["S’appuyer sur une structure ancienne.", "Penser qu’un espace visuellement ouvert est forcément accessible."],
    readMore: ["Quand un lieu semble délicat, il l’est souvent vraiment. Y avancer avec précaution fait partie du respect du site."]
  },
  "festival-fireworks": {
    quickView: ["Arrivez tôt et pensez déjà au retour.", "Gardez en tête le sens du flux de foule.", "Maîtrisez vos déchets et vos affaires."],
    dos: ["Prévoyez plus de temps pour l’entrée comme pour la sortie.", "Suivez les indications du personnel si les accès ou sorties sont régulés."],
    donts: ["Ne vous arrêtez pas brusquement dans une foule en mouvement.", "Ne supposez pas que vous sortirez facilement sans plan."],
    whyItMatters: ["Les festivals et feux d’artifice peuvent passer très vite d’une ambiance détendue à une foule extrêmement dense."],
    commonMistakes: ["Essayer d’aller à contre-courant de la foule.", "Attendre le tout dernier moment pour réfléchir au trajet retour."],
    readMore: ["Savoir à l’avance où vous vous placerez et comment vous repartirez rend souvent les grands événements bien plus simples."]
  },
  "seasonal-scenic-spot": {
    quickView: ["Profitez du paysage avec douceur.", "Partagez patiemment les meilleurs points photo.", "Ne sortez pas du chemin pour gagner un angle."],
    dos: ["Restez sur les parcours indiqués et regardez les panneaux des zones protégées.", "Attendez votre tour pour les photos au lieu de vous imposer."],
    donts: ["Ne tirez pas sur une branche et ne touchez pas les fleurs pour arranger votre photo.", "N’utilisez pas un grand trépied là où le passage est étroit et fréquenté."],
    whyItMatters: ["Les lieux célèbres pour les saisons doivent préserver en même temps leur beauté, leur sécurité et la nature elle-même."],
    commonMistakes: ["Rester trop longtemps au point le plus étroit.", "Entrer sur une zone protégée pour se rapprocher du sujet."],
    readMore: ["Dans les lieux très populaires, attendre calmement donne souvent une meilleure expérience que vouloir réussir la photo parfaite tout de suite."]
  },
  "rental-car": {
    quickView: ["Vérifiez vos documents avant de conduire.", "Comprenez les règles de stationnement et de retour.", "Ne supposez pas que tout fonctionne comme dans votre pays."],
    dos: ["Confirmez dès la prise du véhicule les règles sur le permis, le carburant et l’heure de retour.", "Garez-vous uniquement là où l’autorisation est claire."],
    donts: ["Ne supposez pas que votre permis habituel suffit dans tous les cas.", "Ne rendez pas la voiture en retard sans prévenir.", "Ne vous garez pas au bord de la route en espérant que cela passera."],
    whyItMatters: ["Une différence de document, de signalisation, de parking ou de procédure de retour peut vite devenir un vrai problème ou un coût important."],
    commonMistakes: ["Oublier le permis ou la traduction nécessaires.", "Rendre la voiture sans refaire le plein quand c’était demandé."],
    readMore: ["Avant de partir, clarifiez au moins trois points: vos documents, les règles de stationnement et la procédure exacte de retour."]
  },
  "airport-limousine-bus": {
    quickView: ["Arrivez un peu en avance.", "Vérifiez bien le bon quai et la destination.", "Suivez le processus bagages indiqué par le personnel."],
    dos: ["Confirmez le numéro du quai et le nom exact de la destination avant de faire la queue.", "Suivez les indications du personnel pour les grandes valises."],
    donts: ["Ne supposez pas que le bus attendra au dernier moment.", "Ne laissez pas vos bagages là où le personnel ne l’a pas demandé."],
    whyItMatters: ["Les bus d’aéroport fonctionnent souvent à l’heure près, donc un petit flottement au départ peut gêner tout le monde."],
    commonMistakes: ["Attendre au mauvais arrêt.", "Rater l’étape de l’étiquette bagage."],
    readMore: ["Regarder deux fois le nom de la destination aide beaucoup, surtout quand plusieurs hôtels ou gares ont des noms proches."]
  },
  "night-bus": {
    quickView: ["Considérez le bus comme un espace pour dormir.", "Réduisez au maximum bruit et lumière.", "Préparez vos affaires avant le calme de nuit."],
    dos: ["Gardez les conversations très courtes et très basses.", "Préparez ce qu’il vous faut avant que le bus ne s’installe pour la nuit."],
    donts: ["Ne passez pas d’appels dans le bus.", "N’utilisez pas un écran lumineux sans faire attention aux autres."],
    whyItMatters: ["Même de petits sons ou un peu de lumière peuvent gêner beaucoup de monde dans un bus de nuit."],
    commonMistakes: ["Ranger ou refaire son sac après extinction des lumières.", "Regarder des vidéos sans penser à la luminosité."],
    readMore: ["Si vous devez bouger pendant le trajet, faites-le lentement et en gardant lumière et bruit au minimum."]
  },
  "ride-hailing": {
    quickView: ["Trouvez d’abord le bon point de prise en charge.", "Attendez sans bloquer la file ni la chaussée.", "Suivez l’ordre du point taxi s’il y en a un."],
    dos: ["Vérifiez l’emplacement exact avant de demander la course.", "Placez-vous là où le conducteur peut vous voir sans gêner les autres."],
    donts: ["Ne supposez pas que la voiture peut s’arrêter n’importe où.", "Ne passez pas devant des personnes déjà en attente."],
    whyItMatters: ["Dans les gares et aéroports, une petite erreur de point de rendez-vous crée vite de la confusion pour tout le monde."],
    commonMistakes: ["Commander la voiture avant d’avoir trouvé la bonne zone.", "Attendre dans la mauvaise file."],
    readMore: ["Dans un grand hub de transport, le meilleur réflexe est simple: trouvez d’abord le point de prise en charge, demandez la voiture ensuite."]
  },
  ferry: {
    quickView: ["Déplacez-vous avec soin.", "Rangez vos affaires proprement.", "Respectez les règles des espaces communs et du pont."],
    dos: ["Suivez les indications d’embarquement et gardez l’équilibre en vous déplaçant.", "Posez vos sacs de manière à ne pas gêner les allées."],
    donts: ["Ne vous étalez pas dans les zones de repos partagées.", "Ne bloquez pas un passage étroit pour regarder ou prendre des photos."],
    whyItMatters: ["Sur un ferry, les espaces sont partagés et parfois instables, donc l’ordre et l’attention comptent beaucoup."],
    commonMistakes: ["Laisser les bagages dans l’allée.", "Prendre des photos depuis un endroit qui bloque les autres."],
    readMore: ["Sur les trajets plus longs, vérifier les règles du lounge, du pont et des zones calmes rend souvent le voyage plus facile."]
  },
  "ropeway-cablecar": {
    quickView: ["Montez rapidement.", "Partagez naturellement les meilleures vues.", "Laissez l’espace de sortie libre."],
    dos: ["Entrez vite dans la cabine et avancez pour faire de la place.", "Regardez la vue un moment puis laissez tourner."],
    donts: ["Ne vous précipitez pas sur la meilleure vitre.", "Ne gardez pas la position photo idéale pendant tout le trajet."],
    whyItMatters: ["Ces trajets sont souvent courts, beaux et bondés, donc un peu de partage change tout."],
    commonMistakes: ["Monopoliser la vitre avant pendant tout le voyage.", "S’arrêter dans le passage de sortie pour une dernière photo."],
    readMore: ["Le rythme le plus confortable est simple: monter vite, regarder un peu, partager naturellement, puis sortir sans bloquer."]
  },
  "hotel-lobby": {
    quickView: ["Utilisez le hall comme espace d’attente partagé.", "Gardez vos bagages compacts.", "Si vous devez vous organiser, décalez-vous sur le côté."],
    dos: ["Choisissez une zone claire si vous avez besoin de temps pour vérifier vos plans.", "Gardez vos affaires près de vous."],
    donts: ["Ne transformez pas le centre du hall en zone de regroupement ou de tri des sacs.", "Ne bloquez pas les allées principales avec les valises."],
    whyItMatters: ["Le hall sert à la fois aux arrivées, départs, déplacements du personnel et attentes calmes."],
    commonMistakes: ["Étaler les bagages dans un passage.", "Parler trop fort parce que l’espace semble ouvert."],
    readMore: ["Si vous avez besoin de quelques minutes, le mieux est souvent de choisir un coin dégagé et de garder une empreinte légère."]
  },
  "hotel-elevator": {
    quickView: ["Laissez sortir les autres avant d’entrer.", "Entrez franchement puis libérez la porte.", "Gardez le trajet calme et bref."],
    dos: ["Avancez à l’intérieur pour laisser la place.", "Tenez la porte si quelqu’un arrive clairement."],
    donts: ["Ne restez pas planté dans l’encadrement.", "Ne laissez pas une grosse valise bloquer les autres passagers."],
    whyItMatters: ["L’ascenseur d’hôtel est un espace petit, visible et très partagé, donc la courtoisie s’y remarque vite."],
    commonMistakes: ["Essayer d’entrer avant la sortie des autres.", "Laisser une valise au milieu de la cabine."],
    readMore: ["Des gestes simples dans un ascenseur donnent souvent une impression forte, précisément parce que l’espace est si direct."]
  },
  "shared-lounge": {
    quickView: ["Occupez l’espace légèrement.", "Adaptez-vous au ton le plus calme de la pièce.", "Vérifiez si appels, nourriture ou boissons sont acceptés."],
    dos: ["Prenez seulement la place dont vous avez besoin.", "Laissez l’endroit propre en partant."],
    donts: ["N’occupez pas plusieurs sièges avec vos sacs.", "N’utilisez pas une pièce très calme pour un appel long."],
    whyItMatters: ["Le confort d’un salon partagé dépend surtout de la légèreté avec laquelle chacun l’utilise."],
    commonMistakes: ["S’étaler sur plusieurs places.", "Laisser des gobelets ou emballages derrière soi."],
    readMore: ["Quand vous hésitez sur le bon comportement, le plus sûr est souvent de vous aligner sur les personnes les plus discrètes de la pièce."]
  },
  "coin-laundry": {
    quickView: ["Utilisez les machines efficacement.", "Revenez chercher le linge à temps.", "N’étalez pas vos affaires sur les surfaces communes."],
    dos: ["Lisez bien les consignes de la machine avant de lancer le cycle.", "Mettez un rappel pour revenir à l’heure."],
    donts: ["Ne laissez pas votre linge fini longtemps dans la machine.", "N’occupez pas plusieurs machines sans raison."],
    whyItMatters: ["Les laveries partagées fonctionnent mieux quand chacun respecte autant le temps des autres que la machine elle-même."],
    commonMistakes: ["Oublier l’heure de fin.", "Laisser lessive, sacs ou vêtements sur les plans de pliage."],
    readMore: ["Quand la laverie est chargée, revenir vite chercher son linge compte presque autant que bien utiliser la machine."]
  },
  "capsule-hotel": {
    quickView: ["Finissez les tâches bruyantes avant d’entrer dans la zone des capsules.", "Passez le téléphone en silencieux.", "Bougez doucement la nuit."],
    dos: ["Utilisez les espaces communs pour les appels, le repacking ou toute tâche bruyante.", "Préparez ce qu’il vous faut avant d’entrer dans l’espace de couchage."],
    donts: ["Ne téléphonez pas près des capsules.", "N’ouvrez pas vos sacs bruyamment pendant longtemps tard dans la nuit."],
    whyItMatters: ["Le son circule facilement dans un hôtel capsule, même quand on croit être discret."],
    commonMistakes: ["Refaire sa valise après minuit.", "Regarder des vidéos près des capsules endormies."],
    readMore: ["Le plus simple dans un hôtel capsule est souvent de faire tout ce qui fait du bruit avant d’entrer dans la zone de repos."]
  },
  "hostel-dorm": {
    quickView: ["Utilisez les espaces communs pour les appels et le repacking.", "Gardez votre zone de lit ordonnée.", "La nuit, utilisez une petite lumière."],
    dos: ["Déplacez les longues conversations et le rangement des sacs vers un lounge ou un espace commun.", "Gardez vos affaires près de votre lit."],
    donts: ["N’allumez pas de lumière forte tard dans la nuit sans nécessité.", "N’utilisez pas le sol comme espace de stockage."],
    whyItMatters: ["Les dortoirs peuvent sembler sociaux, mais restent des espaces de repos partagés."],
    commonMistakes: ["Tenir une vraie conversation au bord du lit pendant que d’autres dorment.", "Laisser sacs et chargeurs partout sur le sol."],
    readMore: ["Si vous voulez discuter, manger ou réorganiser vos bagages, les espaces communs sont généralement le meilleur choix."]
  },
  "checkout-room": {
    quickView: ["Vérifiez les objets oubliés.", "Laissez la chambre raisonnablement rangée.", "Ne supposez pas qu’un départ tardif est sans problème."],
    dos: ["Vérifiez prises, salle de bain et dessous du lit avant de partir.", "Suivez les consignes simples sur les déchets ou le retour de clé."],
    donts: ["Ne laissez pas la chambre très en désordre.", "Ne restez pas après l’heure de départ sans demander."],
    whyItMatters: ["L’horaire de départ influence le ménage et l’arrivée du prochain client."],
    commonMistakes: ["Oublier chargeur ou passeport.", "Faire sa valise dans la précipitation et laisser une chambre chaotique."],
    readMore: ["Le but n’est pas la perfection. Un minimum d’ordre et le respect de l’heure suffisent généralement."]
  },
  bakery: {
    quickView: ["Prenez un plateau si le système le prévoit.", "Utilisez les pinces avec soin.", "Gardez la file fluide."],
    dos: ["Utilisez plateau et pinces quand la boutique les met à disposition.", "Avancez le long de la vitrine sans rester trop longtemps au même endroit."],
    donts: ["Ne touchez pas directement le pain sauf si c’est clairement permis.", "Ne vous penchez pas sur la vitrine avec sacs ouverts ou manches amples."],
    whyItMatters: ["Les vitrines de boulangerie sont ouvertes, donc l’hygiène comme la fluidité comptent beaucoup."],
    commonMistakes: ["Toucher plusieurs pièces avant de choisir.", "Bloquer trop longtemps l’avant de la vitrine."],
    readMore: ["Même si la boulangerie paraît décontractée, avancer comme une file calme correspond souvent mieux au rythme local."]
  },
  "fast-food": {
    quickView: ["Sachez ce que vous commandez avant le comptoir.", "Rapportez le plateau si le lieu le demande.", "Laissez la table raisonnablement propre."],
    dos: ["Préparez votre commande avant d’arriver au comptoir quand c’est possible.", "Rapportez plateau et déchets après le repas si le système le prévoit."],
    donts: ["Ne laissez pas emballages et plateaux sur la table en partant.", "Ne bloquez pas la zone des condiments ou de retrait."],
    whyItMatters: ["Les espaces de fast-food sont pensés pour un roulement rapide, donc le moindre retard se voit."],
    commonMistakes: ["Ne pas repérer la station de retour des plateaux.", "Rester longtemps après avoir fini en période chargée."],
    readMore: ["Observer un ou deux clients locaux montre souvent plus vite le bon rythme de nettoyage que lire tous les panneaux."]
  },
  "food-court": {
    quickView: ["N’utilisez que les places nécessaires.", "Transportez votre plateau avec soin.", "Rapportez vaisselle ou déchets au bon endroit."],
    dos: ["Prenez seulement le nombre de sièges réellement utile à votre groupe.", "Rapportez plateau, vaisselle ou déchets à la bonne station après le repas."],
    donts: ["Ne réservez pas une grande zone avec seulement des sacs.", "Ne laissez pas les plateaux finis sur la table s’il existe une station de retour."],
    whyItMatters: ["Les food courts reposent sur le partage rapide des mêmes places par beaucoup de personnes."],
    commonMistakes: ["Garder trop de sièges trop tôt.", "Traiter la zone commune comme une salle à manger privée."],
    readMore: ["Aux heures chargées, le rythme le plus apprécié reste simple: manger, débarrasser, puis laisser naturellement la place."]
  },
  izakaya: {
    quickView: ["Attendez qu’on vous place.", "Vérifiez d’abord les règles de la maison.", "Commandez au rythme du lieu."],
    dos: ["Vérifiez s’il y a un couvert, une boisson obligatoire ou une limite de temps.", "Regardez l’ambiance avant de traiter l’endroit comme un pub classique."],
    donts: ["Ne supposez pas que tout ce qu’on pose sur la table est gratuit ou facultatif.", "N’apportez pas de gros bagages dans un très petit espace."],
    whyItMatters: ["Beaucoup de voyageurs se perdent dans les petites coutumes d’izakaya, surtout au début du repas."],
    commonMistakes: ["Être surpris par un otoshi ou un couvert.", "Mettre trop de temps à commander dans un lieu minuscule."],
    readMore: ["Regarder rapidement la carte, la taille de la salle et les informations sur le couvert aide souvent à comprendre le type d’endroit."]
  },
  bar: {
    quickView: ["Regardez l’ambiance avant de hausser la voix.", "Commandez clairement et simplement.", "Vérifiez avant de prendre des photos."],
    dos: ["Prenez un instant pour voir si le bar est calme, social, formel ou décontracté.", "Gardez votre voix au niveau déjà présent dans la salle."],
    donts: ["Ne supposez pas que tous les bars apprécient l’énergie bruyante d’un groupe.", "N’utilisez pas le flash et ne filmez pas le personnel sans vérifier."],
    whyItMatters: ["Beaucoup de bars au Japon reposent fortement sur l’atmosphère, et lire la salle compte autant que connaître la carte."],
    commonMistakes: ["Parler trop fort dans un bar à cocktails très calme.", "Bloquer le comptoir pendant que vous choisissez."],
    readMore: ["Une minute d’observation en entrant fonctionne souvent mieux qu’une minute de questions."]
  },
  "all-you-can-drink": {
    quickView: ["Vérifiez la durée de la formule.", "Repérez l’heure de dernière commande.", "Commandez seulement ce que la table peut finir."],
    dos: ["Confirmez la limite de temps et la dernière commande avant de vous installer.", "Commandez à un rythme que votre groupe peut vraiment apprécier."],
    donts: ["Ne transformez pas la formule en défi.", "Ne laissez pas beaucoup de verres non terminés sur la table."],
    whyItMatters: ["Ces formules sont organisées autour de l’équité, du temps et d’un service fluide."],
    commonMistakes: ["Commander trop et trop vite.", "Manquer la dernière commande parce que personne n’a regardé l’heure."],
    readMore: ["Il vaut presque toujours mieux garder le rythme de la table que d’empiler des boissons dont personne ne veut vraiment."]
  },
  karaoke: {
    quickView: ["Confirmez d’abord la durée.", "Suivez les règles d’usage de la salle.", "Laissez la pièce en bon état."],
    dos: ["Vérifiez le système de prix, la durée et l’éventuelle consommation minimale dès l’arrivée.", "Utilisez micros et matériel avec soin."],
    donts: ["Ne supposez pas qu’une salle privée n’a aucune règle.", "Ne restez pas après votre heure sans vérifier une prolongation."],
    whyItMatters: ["Le karaoke japonais est amusant mais très structuré, donc comprendre le système dès le début évite beaucoup de confusion."],
    commonMistakes: ["Ne pas comprendre le forfait temps.", "Laisser la salle en désordre ou traiter l’équipement sans soin."],
    readMore: ["Un rapide contrôle du mode de commande et des règles de prolongation au début évite la plupart des problèmes ensuite."]
  },
  "food-stalls": {
    quickView: ["Vérifiez s’il faut manger sur place ou continuer à marcher.", "Mettez-vous sur le côté si vous vous arrêtez.", "Gardez vos déchets avec vous."],
    dos: ["Regardez si l’échoppe attend que vous mangiez à côté ou que vous avanciez.", "Décalez-vous si vous vous arrêtez pour manger ou prendre des photos."],
    donts: ["Ne vous arrêtez pas dans la partie la plus étroite de la foule.", "Ne laissez pas couler ou tomber de nourriture en marchant dans une zone chargée."],
    whyItMatters: ["Ces zones semblent décontractées, mais la circulation et l’espace partagé comptent énormément quand la foule se resserre."],
    commonMistakes: ["Manger au milieu d’un flux de foule.", "Laisser brochettes, gobelets ou emballages au mauvais endroit."],
    readMore: ["Dans certaines zones, manger en marchant est plus toléré, mais s’arrêter proprement reste souvent la solution la plus sûre."]
  },
  "vending-machine": {
    quickView: ["Choisissez vite.", "Décalez-vous après l’achat.", "Utilisez la bonne poubelle de recyclage si elle existe."],
    dos: ["Décidez de votre boisson avant de rester trop longtemps devant la machine.", "Écartez-vous une fois l’achat terminé pour laisser la place au suivant."],
    donts: ["Ne laissez pas bouteilles ou canettes à côté de la machine s’il n’y a pas de bac prévu.", "Ne supposez pas que chaque poubelle proche accepte les déchets ordinaires."],
    whyItMatters: ["Les distributeurs sont pratiques parce que les gens gardent la zone propre et fluide."],
    commonMistakes: ["Utiliser la poubelle de recyclage des boissons pour d’autres déchets.", "Rester devant la machine à trier ses pièces et ses sacs."],
    readMore: ["Les bacs près des distributeurs acceptent souvent seulement les contenants de boisson, pas les emballages alimentaires ni les ordures générales."]
  },
  "secondhand-shop": {
    quickView: ["Regardez les articles attentivement.", "Manipulez-les doucement.", "Demandez avant d’ouvrir, tester ou examiner en profondeur."],
    dos: ["Examinez les objets avec soin et demandez si vous voulez tester un appareil ou ouvrir un emballage.", "Suivez les indications du personnel pour les articles chers ou sous vitrine."],
    donts: ["Ne traitez pas les objets d’occasion comme des bacs à fouille, sauf si le magasin fonctionne clairement ainsi.", "N’ouvrez pas un article scellé sans permission."],
    whyItMatters: ["Beaucoup de magasins de réemploi au Japon sont très organisés, et l’état du produit fait partie essentielle de la confiance."],
    commonMistakes: ["Manipuler trop brutalement parce que l’objet est d’occasion.", "Traiter une boutique de revente haut de gamme comme un marché aux puces."],
    readMore: ["Plus la présentation semble soignée, plus on attend généralement des clients qu’ils manipulent les articles avec précaution."]
  },
  "shopping-bags-packaging": {
    quickView: ["On peut vous demander si vous voulez un sac.", "L’emballage cadeau est souvent un choix séparé.", "Décidez avant que la file ne ralentisse."],
    dos: ["Écoutez les courtes questions sur les sacs ou l’emballage et répondez simplement.", "Si vous voulez un emballage spécial, dites-le avant la fin du paiement si possible."],
    donts: ["Ne supposez pas qu’un sac plastique est automatique ou toujours gratuit.", "Ne retenez pas la file pour décider d’un détail non essentiel."],
    whyItMatters: ["Une simple question sur un sac ou un emballage joue souvent sur la vitesse, le coût et la réduction des déchets en même temps."],
    commonMistakes: ["Être dérouté par une simple question sur le sac.", "Demander un emballage élaboré une fois l’encaissement terminé."],
    readMore: ["Même si vous manquez la question orale, le personnel montre souvent le sac ou les options, donc une réponse courte suffit généralement."]
  },
  "delivery-service": {
    quickView: ["Confirmez d’abord l’adresse.", "Demandez de l’aide pour le formulaire si besoin.", "Assurez-vous que le destinataire peut bien recevoir l’envoi."],
    dos: ["Vérifiez le nom complet, l’adresse et le moment de livraison avant d’envoyer quoi que ce soit.", "Demandez au personnel si le formulaire ou les options vous semblent flous."],
    donts: ["Ne devinez pas l’adresse ou le nom de l’hôtel.", "Ne supposez pas que tous les hôtels acceptent tous les colis sans avertissement."],
    whyItMatters: ["Les services de livraison au Japon sont fiables, mais ils dépendent d’informations destinataire très précises."],
    commonMistakes: ["Utiliser un nom d’hôtel incomplet.", "Essayer de tout comprendre seulement en arrivant à un comptoir déjà occupé."],
    readMore: ["Si vous envoyez vers un hôtel, vérifier d’abord sa politique de réception reste généralement l’étape la plus sûre."]
  },
  atm: {
    quickView: ["Préparez votre carte avant d’avancer.", "Décalez-vous après l’opération.", "Ne réorganisez pas tout devant la machine."],
    dos: ["Ayez la carte en main avant d’arriver à l’ATM.", "Éloignez-vous avant de compter l’argent, vérifier les reçus ou ranger votre portefeuille."],
    donts: ["Ne supposez pas que tous les distributeurs acceptent les cartes étrangères.", "Ne laissez pas les reçus derrière vous."],
    whyItMatters: ["Les coins ATM sont souvent petits et pensés pour un usage rapide et discret."],
    commonMistakes: ["Prendre trop de temps à choisir la langue ou le réseau.", "Rester devant la machine à réorganiser un portefeuille plein."],
    readMore: ["Les ATM des konbini sont souvent les plus simples pour les cartes étrangères, mais il reste utile de vérifier avant de dépendre d’une seule machine."]
  },
  "observatory-night-view": {
    quickView: ["Partagez les meilleurs emplacements.", "Gardez le matériel photo compact.", "Écartez-vous après votre photo."],
    dos: ["Prenez votre tour à la vitre ou à la rambarde puis bougez pour que d’autres profitent de la même vue.", "Gardez une installation légère dans les espaces d’observation serrés."],
    donts: ["Ne gardez pas le meilleur point trop longtemps.", "Ne bloquez pas les autres avec un grand trépied ou un gros sac."],
    whyItMatters: ["Tout le monde vient pour quelques bons angles, surtout au coucher du soleil ou la nuit."],
    commonMistakes: ["Rester au bord de la vitre à vérifier chaque photo.", "Installer un gros dispositif dans une zone d’observation étroite."],
    readMore: ["Le bon rythme est simple: regarder, photographier, se décaler, puis revenir plus tard si l’espace se libère."]
  },
  "live-concert": {
    quickView: ["Vérifiez les règles avant d’entrer.", "Mettez le téléphone complètement en silencieux.", "Ne filmez pas si la salle l’interdit."],
    dos: ["Arrivez avec assez d’avance pour trouver votre place sans précipitation.", "Suivez les règles du lieu sur l’entrée, les sièges et les moments d’applaudissement."],
    donts: ["Ne parlez pas pendant la performance.", "Ne supposez pas qu’une entrée tardive sera toujours possible sans gêner."],
    whyItMatters: ["Les salles de spectacle fonctionnent mieux quand tout le monde suit les mêmes règles de temps et d’attention."],
    commonMistakes: ["Utiliser son téléphone pendant le spectacle.", "Entrer bruyamment après le début de la représentation."],
    readMore: ["Chaque salle a son style, mais silence, ponctualité et absence de tournage non autorisé restent presque toujours de bons réflexes."]
  },
  "sports-event": {
    quickView: ["Asseyez-vous dans la bonne section.", "Gardez vos affaires dans votre espace de siège.", "Nettoyez votre place avant de partir."],
    dos: ["Vérifiez si votre section a un rythme ou des coutumes d’encouragement particuliers.", "Gardez vos affaires compactes pour qu’elles ne débordent pas sur les marches ou les sièges voisins."],
    donts: ["N’occupez pas des sièges qui ne sont pas les vôtres.", "Ne bloquez pas constamment la vue en restant debout là où ce n’est pas la norme."],
    whyItMatters: ["Les événements sportifs peuvent être animés, mais l’enthousiasme partagé dépend quand même de règles claires sur les places et les sections."],
    commonMistakes: ["S’asseoir dans le mauvais bloc.", "Laisser des déchets sous le siège ou sur les marches."],
    readMore: ["Un rapide coup d’œil autour de vous montre souvent tout de suite si votre section est censée être très active ou plus calme."]
  },
  "theme-park": {
    quickView: ["Suivez les files avec soin.", "Ne gardez pas trop d’espace pour d’autres.", "Laissez les allées libres quand vous consultez carte ou photos."],
    dos: ["Utilisez les zones d’attente prévues et suivez de près les règles de file du parc.", "Décalez-vous avant de vous arrêter pour planifier ou photographier."],
    donts: ["Ne revenez pas dans la file parce que votre groupe s’est séparé.", "Ne bloquez pas un passage chargé pendant que vous décidez de la suite."],
    whyItMatters: ["Les parcs à thème semblent ludiques, mais leur gestion de foule est souvent très structurée."],
    commonMistakes: ["Transformer l’allée en zone de planification.", "Garder un espace pour un groupe plus large que les personnes réellement présentes."],
    readMore: ["Dans les parcs très fréquentés, l’endroit où l’on se place compte souvent presque autant que ce qu’on prévoit de faire."]
  },
  "service-area": {
    quickView: ["Garez-vous dans les lignes.", "Utilisez l’arrêt avec mesure.", "Nettoyez avant de repartir."],
    dos: ["Garez-vous dans l’emplacement marqué et déplacez la voiture plus tard si vous trouvez mieux.", "Utilisez les zones de repas, boutiques et sièges sans étaler trop loin vos affaires."],
    donts: ["Ne laissez pas de déchets sur les tables ou sur le parking.", "Ne bloquez pas la circulation du parking pendant que vous décidez où aller."],
    whyItMatters: ["Les aires de service sont partagées par des voyageurs très différents et fonctionnent mieux quand chacun s’arrête brièvement puis repart clairement."],
    commonMistakes: ["Se garer à cheval sur les lignes.", "Réorganiser toute la voiture dans la partie la plus chargée du parking."],
    readMore: ["Même les haltes routières détendues ont un rythme: arriver, se garer proprement, faire une pause, ranger, puis repartir."]
  },
  temple: {
    quickView: ["Avancez lentement.", "Gardez la voix basse.", "Regardez les panneaux avant d’entrer dans un bâtiment."],
    dos: ["Lisez les consignes affichées avant d’entrer.", "Retirez vos chaussures quand on le demande.", "Gardez téléphone et photos discrets."],
    donts: ["N’entrez pas dans les zones interdites.", "Ne supposez pas que les photos sont permises partout.", "Évitez d’interrompre prière ou cérémonie."],
    whyItMatters: ["Les temples peuvent être des lieux de prière, de mémoire et de pratique vivante, pas seulement des sites touristiques."],
    commonMistakes: ["Parler fort à l’intérieur.", "Manquer une zone de retrait des chaussures.", "Prendre des photos sans vérifier."],
    readMore: ["Les règles changent selon le temple, surtout autour des halls intérieurs, des espaces commémoratifs et de la photo."]
  },
  ryokan: {
    quickView: ["Écoutez bien l’explication de l’arrivée.", "Respectez les horaires des repas et des bains.", "Gardez la chambre calme et rangée."],
    dos: ["Vérifiez dès l’arrivée les horaires des repas, des bains et les règles de la maison.", "Utilisez les chaussons seulement dans les zones prévues.", "Demandez avant de déplacer futons, meubles ou objets."],
    donts: ["Ne portez pas de chaussures d’extérieur à l’intérieur.", "Ne supposez pas qu’un ryokan fonctionne exactement comme un hôtel.", "Évitez de manquer l’explication d’arrivée, beaucoup de détails utiles y sont donnés."],
    whyItMatters: ["Les ryokan ont souvent un rythme de maison plus marqué que les hôtels, surtout autour des repas, des bains et de l’usage de la chambre."],
    commonMistakes: ["Rater l’heure du repas ou du bain.", "Porter les chaussons de toilettes au mauvais endroit.", "Laisser des objets mouillés là où le personnel doit préparer la chambre."],
    readMore: ["Si vous hésitez, demander au personnel reste l’option la plus sûre. Les attentes varient selon l’auberge."]
  },
  "shoes-indoors": {
    quickView: ["Cherchez une marche, un tapis ou une zone à chaussures.", "Retirez les chaussures quand le sol devient intérieur.", "Utilisez les chaussons là où ils sont prévus."],
    dos: ["Repérez genkan, étagère à chaussures, chaussons ou panneau.", "Si des chaussons sont fournis, utilisez-les dans les zones intérieures ordinaires.", "Faites particulièrement attention autour du tatami et des cabines d’essayage."],
    donts: ["Ne marchez pas sur un sol intérieur avec des chaussures d’extérieur.", "Ne portez pas les chaussons des toilettes ailleurs.", "Ne supposez pas que tous les lieux suivent exactement le même modèle."],
    whyItMatters: ["Retirer ses chaussures aide à garder les espaces intérieurs propres et agréables, et cela apparaît dans plus d’endroits qu’on ne l’imagine souvent."],
    commonMistakes: ["Manquer la petite marche à l’entrée.", "Marcher sur le tatami avec des chaussons ou des chaussures.", "Confondre chaussons de salle de bain et chaussons d’intérieur."],
    readMore: ["Cela concerne les maisons, temples, certains restaurants, cabines d’essayage, cliniques et hébergements traditionnels."]
  },
  chopsticks: {
    quickView: ["Ne plantez pas les baguettes droites dans le riz.", "Ne passez pas la nourriture de baguettes à baguettes.", "Posez-les sur un repose-baguettes quand vous faites une pause."],
    dos: ["Posez les baguettes proprement sur le support quand c’est possible.", "S’il y a des baguettes de service pour un plat partagé, utilisez-les.", "Si vous préférez une fourchette, il est tout à fait normal de demander."],
    donts: ["Ne piquez pas les aliments de façon désinvolte.", "Ne gesticulez pas avec les baguettes en parlant.", "Ne pointez pas des personnes ou des plats avec elles."],
    whyItMatters: ["Quelques gestes avec les baguettes rappellent fortement les rites funéraires, et d’autres donnent simplement une impression brusque dans un repas partagé."],
    commonMistakes: ["Laisser longtemps les baguettes en travers d’un bol.", "Passer directement un aliment d’une paire de baguettes à une autre.", "Utiliser les baguettes pour faire glisser les plats vers soi."],
    readMore: ["Vous n’avez pas besoin d’une technique parfaite. Une manipulation calme et soignée compte plus qu’une allure experte."]
  },
  "visiting-home": {
    quickView: ["Enlevez les chaussures à l’entrée.", "Observez l’usage des chaussons.", "Un petit cadeau est souvent apprécié, mais pas toujours nécessaire."],
    dos: ["Suivez le mouvement de votre hôte à l’entrée.", "Demandez où poser manteau ou sac si vous hésitez.", "Dans un appartement, une voix calme est souvent appréciée."],
    donts: ["Ne portez pas les chaussons de toilettes ailleurs.", "Ne supposez pas que toutes les pièces utilisent les mêmes chaussons.", "Évitez d’arriver bien trop tôt sauf si l’hôte vous l’a proposé."],
    whyItMatters: ["Les visites à domicile peuvent sembler un peu plus formelles que certains voyageurs ne l’imaginent, surtout autour de l’entrée et de l’espace partagé."],
    commonMistakes: ["Marcher sur le tatami avec des chaussons.", "Rater le passage des chaussures d’extérieur aux chaussons.", "Apporter un grand sac mouillé ou une grosse valise dans une entrée étroite sans vérifier."],
    readMore: ["Vous n’avez pas besoin d’être excessivement formel. Observer votre hôte et suivre le flux général suffit généralement."]
  },
  "convenience-store": {
    quickView: ["Utilisez le plateau de paiement s’il existe.", "Ayez argent ou carte prêts.", "Décalez-vous si vous avez besoin de trier vos achats."],
    dos: ["Regardez d’abord le rythme du comptoir avant de payer.", "Gardez votre moyen de paiement prêt.", "Après le passage en caisse, bougez un peu si vous devez refaire votre sac."],
    donts: ["Évitez de bloquer le comptoir pendant que vous réorganisez tout.", "Ne supposez pas que chaque magasin emballe ou sert de la même façon.", "Si vous manquez une question du caissier, il est tout à fait acceptable de demander poliment."],
    whyItMatters: ["Les konbini sont conçus pour aller vite, donc un peu d’attention aide toute la file."],
    commonMistakes: ["Manquer le plateau de paiement.", "Trier reçus et monnaie en bloquant le client suivant.", "Ne pas voir la zone micro-ondes, retrait ou self-bag séparée."],
    readMore: ["Les konbini sont un très bon endroit pour observer les petits rythmes du quotidien au Japon."]
  },
  smoking: {
    quickView: ["Cherchez une zone fumeur désignée.", "Ne supposez pas que l’extérieur est toujours autorisé.", "Vérifiez la règle de chaque lieu."],
    dos: ["Utilisez les zones fumeurs marquées quand elles existent.", "Regardez les panneaux près des gares, rues, restaurants et bâtiments.", "Gardez cigarette et cendres dans la zone prévue."],
    donts: ["Ne fumez pas là où il n’y a ni cendrier ni autorisation claire.", "Ne supposez pas que la règle est la même dans tous les restaurants ou bars.", "Évitez de penser que dehors signifie automatiquement autorisé."],
    whyItMatters: ["Les règles de tabac peuvent être strictes dans certaines zones, et la fumée est souvent traitée comme une question de confort et de sécurité partagés."],
    commonMistakes: ["Allumer une cigarette près d’une sortie de gare sans vérifier.", "Chercher un endroit fumeur seulement après s’être éloigné d’un cendrier.", "Supposer qu’un restaurant a la même politique tabac que le précédent."],
    readMore: ["Les règles varient selon la ville, l’immeuble et le lieu. Les panneaux et les zones désignées sont votre meilleur guide."]
  },
  "residential-private": {
    quickView: ["Gardez le niveau sonore bas.", "Respectez les parties communes.", "Suivez les règles locales pour les déchets et l’entrée."],
    dos: ["Parlez doucement dans les couloirs, escaliers et à l’entrée, surtout tôt le matin et tard le soir.", "Lisez les consignes de tri des déchets et de check-in si elles existent.", "Gardez vos bagages et votre porte dégagés."],
    donts: ["Ne supposez pas qu’un quartier résidentiel fonctionne comme une zone touristique.", "Ne laissez pas de sacs ou de déchets dans les parties communes.", "Ne faites pas de bruit sur balcon, dans la rue ou dans l’entrée tard le soir."],
    whyItMatters: ["Les logements privés et quartiers résidentiels partagent le même espace avec la vie quotidienne des habitants."],
    commonMistakes: ["Parler fort devant l’immeuble en rentrant tard.", "Sortir les déchets au mauvais jour ou au mauvais endroit.", "Laisser des valises dans le couloir."],
    readMore: ["Même si le séjour semble informel, les règles du bâtiment et du voisinage comptent beaucoup dans les zones résidentielles."]
  },
  bicycle: {
    quickView: ["Ne marchez pas soudainement sur une piste ou une zone vélo.", "Garez-vous uniquement là où c’est autorisé.", "Traitez le vélo comme un vrai moyen de transport du quotidien."],
    dos: ["Regardez autour de vous avant de traverser une zone où passent des vélos.", "Utilisez les emplacements de stationnement indiqués si vous louez ou garez un vélo.", "Gardez le contrôle et ralentissez dans les zones piétonnes."],
    donts: ["Ne laissez pas un vélo au hasard devant une gare ou un commerce.", "Ne bloquez pas les trottoirs étroits avec un vélo arrêté.", "Ne supposez pas que les règles de circulation sont détendues parce que le vélo paraît courant."],
    whyItMatters: ["Au Japon, le vélo fait partie de la vie quotidienne, donc circulation et stationnement sont pris au sérieux."],
    commonMistakes: ["Laisser un vélo dans une zone d’interdiction sans voir le panneau.", "Traverser sans regarder une voie où arrivent des vélos rapidement.", "Abandonner un vélo loué à un endroit non prévu."],
    readMore: ["Les règles de circulation et de stationnement peuvent varier selon la ville. Les panneaux, les marquages au sol et les consignes de location sont vos meilleurs repères."]
  }
};

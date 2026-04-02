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
  }
};

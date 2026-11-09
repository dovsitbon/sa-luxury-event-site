# sA Luxury Event : contenu du site

Tous les textes du site, en français et en anglais, à relire et valider avec elle.
Fichiers sources : `locales/fr.json` et `locales/en.json` (ce fichier est généré par `npm run contenu`).
Données datées dans `data/` : `annonces.json` (bandeau), `prestations.json` (prestations et prix « à partir de »),
`realisations.json` (mariages, lieux, nombre d'invités), `avis.json` (vrais avis), `dates.json` (dates déjà prises),
`site.json` (coordonnées, chiffres, acompte en ligne – désactivé).
La liste des informations à lui demander est dans **INFOS-A-DEMANDER.md**.

## Grand titre du hero : 3 propositions

1. **Le luxe est dans chaque détail** / *Luxury lives in every detail* — retenue : c'est la première ligne de sa bio Instagram
2. **Un décor à la hauteur de votre histoire** / *A setting worthy of your story* — reprend sa légende « chaque histoire mérite un décor à sa hauteur »
3. **Vous arrivez, tout est prêt** / *You arrive, everything is ready* — la promesse du jour J (installation, bouquet apporté la veille, démontage)

Pour changer : `hero.title` dans `locales/fr.json` et `locales/en.json`.

## Prestations (data/prestations.json)

Prix affichés : non (showPrices = false, prix à remplir avec elle)

- **Table d’honneur** / Top table — à partir de : à remplir
  - FR : Nappage, vaisselle, chandeliers et fleurs fraîches : la table où tous les regards se posent, composée autour de vos couleurs.
  - EN : Linen, tableware, candelabras and fresh flowers: the table every eye turns to, built around your colours.
- **Coin des mariés** / Couple’s corner — à partir de : à remplir
  - FR : Trône, salon ou estrade habillés de fleurs fraîches, pour vos entrées, vos photos et le reste de la soirée.
  - EN : A throne, lounge or stage dressed in fresh flowers, for your entrance, your photos and the rest of the night.
- **Arche et cérémonie** / Arch & ceremony — à partir de : à remplir
  - FR : Arche florale, allée, panneau d’accueil à vos initiales : un décor de cérémonie, en salle ou en plein air.
  - EN : Floral arch, aisle, welcome sign with your initials: a ceremony setting, indoors or outdoors.
- **Centres de table** / Centrepieces — à partir de : à remplir
  - FR : Compositions hautes ou basses, cristal, bougies, menus et marque-places : l’art de la table, table par table.
  - EN : Tall or low arrangements, crystal, candles, menus and place cards: the art of the table, one table at a time.
- **Bouquet de mariée** / Bridal bouquet — à partir de : à remplir
  - FR : Créé sur mesure d’après votre inspiration, et apporté la veille, pendant l’installation : vous l’avez sans y penser le jour J.
  - EN : Made to match your inspiration and brought the day before, during set-up, so it’s one less thing to think about.
- **Scénographie complète** / Full venue styling — à partir de : à remplir
  - FR : Toute la salle pensée comme un seul décor, fleurs comprises, avec une seule équipe du premier rendez-vous au démontage.
  - EN : The whole room designed as one setting, flowers included, with a single team from the first meeting to take-down.

## Réalisations (data/realisations.json)

Date = mois de publication Instagram (à corriger avec la vraie date du mariage). Lieu et invités : « à remplir » quand ils manquent (non affichés sur le site).

| Date | Mariage | Lieu | Invités | Ambiance |
|---|---|---|---|---|
| 2026-10 | Salle aux arches, lustres de cristal | à remplir | à remplir | Blanc, vert tendre et cristal |
| 2026-08 | Mariage en plein air | à remplir | à remplir | Orange solaire et blanc |
| 2026-07 | Une mariée qui sait ce qu’elle veut | Villa Pamilya | à remplir | Pivoines, rose poudré et or |
| 2026-03 | Le mariage de Dounia | à remplir | à remplir | Glamour et chic : bordeaux, blanc et or |
| 2025-09 | Hyness & Alban | Jardin d’Hiver | à remplir | Verrière, blanc et verdure |
| 2025-09 | Le mariage d’Elsa | à remplir | à remplir | Pastels et fleurs des champs |
| 2025-08 | Roses ivoire et gypsophile | à remplir | à remplir | Blanc ivoire et cristal |
| 2025-06 | Noir et blanc | à remplir | à remplir | Sobre, élégant, intemporel |
| 2025-05 | Fiançailles de Yasmine & Sabri | à remplir | à remplir | Blanc, cristal et verdure en terrasse |
| 2025-04 | Un mariage de conte de fées | à remplir | à remplir | Fleurs fraîches, lumière tamisée, trône |
| 2025-01 | Katarina & Jessy | à remplir | à remplir | Rose tendre et chandeliers de cristal |
| 2024-12 | Le luxe est dans chaque détail | La Grande Sieste | à remplir | Pastels, cristal et dorures |
| 2024-11 | Faryal & Samy | à remplir | à remplir | Trône royal, bougies et roses |
| 2024-11 | S & A | à remplir | à remplir | Fleurs vives et argent |
| 2024-09 | Douceur de rose | à remplir | à remplir | Rose et fuchsia, arches blanches |
| 2024-09 | Anabelle & Brayan | à remplir | à remplir | Cérémonie en blanc, rose pâle et box magazine |
| 2024-07 | Mawada & Naseem | Le Grand Cellier | à remplir | Deux jours de décoration |
| 2024-05 | Des thèmes et des couleurs variés | à remplir | à remplir | Blanc, vert et dorures |
| 2024-01 | Comme un rêve | à remplir | à remplir | Bougies, bleu ciel et gypsophile |
| 2023-09 | Le sens du détail | à remplir | à remplir | Cristal, roses blanches et rose pâle |
| 2023-08 | K & J | Domaine de Verchant | à remplir | Guirlandes lumineuses et tons pêche |
| 2023-05 | Venitia & Quentin | à remplir | à remplir | Bleu roi et blanc |

## Avis (data/avis.json), recopiés de la story « Avis clients »

- **Mawada** — 2024-04-15 — Mariages.net — 5/5
  - FR : J’ai récemment eu le plaisir de travailler avec SA pour mon mariage, et je ne pourrais pas être plus heureuse des résultats. Du début à la fin, leur équipe a fait preuve d’un professionnalisme, d’une créativité et d’un souci du détail exceptionnels. Ils ont fait une décoration de 2 jours de mon mariage ! La consultation initiale a été approfondie et personnalisée. Ils ont pris le temps de comprendre notre vision, nos préférences et notre budget, et ont fourni des suggestions perspicaces qui ont vraiment amélioré nos idées. Le processus de planification s’est déroulé sans heurts, et ils nous ont tenus informés à chaque étape, s’assurant que nous étions à l’aise et confiants dans les plans. Je recommande vivement SA à tous ceux qui recherchent des décorations de mariage de premier ordre. Leur passion, leur créativité et leur dévouement sont vraiment inégalés. Merci d’avoir fait de mon mariage un rêve devenu réalité !
  - EN : I recently had the pleasure of working with SA for my wedding, and I couldn’t be happier with the result. From start to finish, their team showed exceptional professionalism, creativity and attention to detail. They decorated two days of my wedding! The first consultation was thorough and personal. They took the time to understand our vision, our preferences and our budget, and made thoughtful suggestions that really improved our ideas. Planning went smoothly and they kept us informed at every step, making sure we felt comfortable and confident. I warmly recommend SA to anyone looking for first-class wedding decoration. Their passion, creativity and dedication are truly unmatched. Thank you for making my wedding a dream come true!
- **Kaouthar** — 2024-08-30 — Mariages.net — 5/5
  - FR : Très belle expérience avec Sa Luxury events ! Nous avons eu la déco de nos rêves. Les invités ont été éblouis, les fleurs étaient magnifiques, le travail est soigné et raffiné. Sa Luxury events est non seulement à l’écoute mais est aussi impliqué et travaille avec passion et cela se voit dans le résultat de sa décoration. Nous la recommandons vivement !
  - EN : A wonderful experience with Sa Luxury events! We had the decoration of our dreams. Our guests were dazzled, the flowers were beautiful, the work is careful and refined. Sa Luxury events not only listens but is truly involved and works with passion, and you can see it in the result. We highly recommend her!
- **Mostapha & Ounayma** — date à remplir — Message
  - FR : Merci énormément, c’était magnifique, j’ai eu que des bons retours, je vous recommande à 100 %. Traiteur excellent.
  - EN : Thank you so much, it was beautiful, I only had good feedback, I recommend you 100%. Excellent catering.
- **Hyness** — 2025-09 — Instagram
  - FR : Merci pour votre travail exceptionnel.
  - EN : Thank you for your exceptional work.
- **Une cliente (sans prénom)** — date à remplir — Message
  - FR : Je voulais vous remercier pour votre travail et votre gentillesse. C’était parfait, tout était parfait, très pro, et on sent en vous une confiance de dingue. Merci, merci pour tout, je suis trop contente. Magnifique boulot et investissement de votre part. Et vous êtes trop attachante.
  - EN : I wanted to thank you for your work and your kindness. It was perfect, everything was perfect, very professional, and you radiate such confidence. Thank you, thank you for everything, I’m so happy. Beautiful work and real commitment on your part. And you’re so endearing.

<!-- À REMPLIR avec de vrais avis clients supplémentaires -->


## Référencement (titres Google et descriptions)

**`meta.title`**

- Français : Décoration de mariage et scénographie sur mesure à Montpellier, Nice et Perpignan | sA Luxury Event
- English : Wedding decoration and bespoke event styling in Montpellier, Nice and Perpignan | sA Luxury Event

**`meta.description`**

- Français : Décoratrice de mariages haut de gamme dans le Sud : table d’honneur, coin des mariés, arches, centres de table, bouquet de mariée et scénographie complète. Montpellier, Nice, Perpignan. Devis gratuit sur WhatsApp.
- English : Luxury wedding decorator in the South of France: top table, couple’s corner, arches, centrepieces, bridal bouquet and full venue styling. Montpellier, Nice, Perpignan. Free quote on WhatsApp.

**`meta.legalTitle`**

- Français : Mentions légales | sA Luxury Event
- English : Legal notice | sA Luxury Event

**`meta.legalDescription`**

- Français : Mentions légales et données personnelles du site sA Luxury Event, décoration de mariage et scénographie sur mesure.
- English : Legal notice and privacy for the sA Luxury Event website, wedding decoration and bespoke event styling.

## Menu

**`nav.skip`**

- Français : Aller au contenu
- English : Skip to content

**`nav.home`**

- Français : sA Luxury Event, accueil
- English : sA Luxury Event, home

**`nav.menu`**

- Français : Menu
- English : Menu

**`nav.close`**

- Français : Fermer le menu
- English : Close menu

**`nav.language`**

- Français : Langue
- English : Language

**`nav.weddings`**

- Français : Mariages
- English : Weddings

**`nav.services`**

- Français : Prestations
- English : Services

**`nav.work`**

- Français : Réalisations
- English : Our work

**`nav.events`**

- Français : Autres événements
- English : Other events

**`nav.about`**

- Français : À propos
- English : About

**`nav.contact`**

- Français : Contact
- English : Contact

**`nav.book`**

- Français : Demander un devis
- English : Request a quote

## Bandeau d'infos (le texte lui-même est dans data/annonces.json)

**`infobar.close`**

- Français : Fermer l’annonce
- English : Close announcement

## Ouverture

**`intro.skip`**

- Français : Passer
- English : Skip

## Hero (titre retenu : option 1, voir plus haut)

**`hero.eyebrow`**

- Français : Décoration de mariage · Scénographie sur mesure
- English : Wedding decoration · Bespoke event styling

**`hero.title`**

- Français : Le luxe est dans chaque détail
- English : Luxury lives in every detail

**`hero.lead`**

- Français : Tables, fleurs fraîches, trônes et salles entières, imaginés avec vous et installés par une seule équipe. Montpellier, Nice, Perpignan.
- English : Tables, fresh flowers, thrones and entire rooms, designed with you and set up by one team. Montpellier, Nice, Perpignan.

**`hero.cta`**

- Français : Demander un devis
- English : Request a quote

**`hero.ctaWork`**

- Français : Voir les réalisations
- English : See our work

## Preuves près des boutons (chiffres dans data/site.json)

**`proof.since`**

- Français : Mariages depuis {year}
- English : Weddings since {year}

**`proof.followers`**

- Français : {n} abonnés sur Instagram
- English : {n} followers on Instagram

**`proof.rating`**

- Français : {rating}/5 sur Mariages.net
- English : {rating}/5 on Mariages.net

**`proof.weddings`**

- Français : {n} mariages réalisés
- English : {n} weddings styled

**`proof.free`**

- Français : Devis gratuit, réponse sur WhatsApp
- English : Free quote, reply on WhatsApp

## Cartes portrait par type d'événement

**`cards.eyebrow`**

- Français : Ce que nous décorons
- English : What we style

**`cards.title`**

- Français : Un décor pour chaque grand jour
- English : A setting for every big day

**`cards.items.0.key`**

- Français : wedding
- English : wedding

**`cards.items.0.title`**

- Français : Mariage
- English : Weddings

**`cards.items.0.text`**

- Français : De la cérémonie à la salle de réception
- English : From the ceremony to the reception room

**`cards.items.0.href`**

- Français : #prestations
- English : #prestations

**`cards.items.1.key`**

- Français : baby
- English : baby

**`cards.items.1.title`**

- Français : Baby shower
- English : Baby showers

**`cards.items.1.text`**

- Français : Coin photo, table de buffet, oursons
- English : Photo corner, buffet table, teddy bears

**`cards.items.1.href`**

- Français : #evenements
- English : #evenements

**`cards.items.2.key`**

- Français : birthday
- English : birthday

**`cards.items.2.title`**

- Français : Anniversaire
- English : Birthdays

**`cards.items.2.text`**

- Français : Un thème, une table, une fête
- English : One theme, one table, one party

**`cards.items.2.href`**

- Français : #evenements
- English : #evenements

**`cards.items.3.key`**

- Français : private
- English : private

**`cards.items.3.title`**

- Français : Événement privé
- English : Private events

**`cards.items.3.text`**

- Français : Fiançailles, Saint-Valentin, galas
- English : Engagements, Valentine’s Day, galas

**`cards.items.3.href`**

- Français : #evenements
- English : #evenements

## Prestations (cartes et prix dans data/prestations.json)

**`services.eyebrow`**

- Français : Prestations
- English : Services

**`services.title`**

- Français : Chaque élément, ou toute la salle
- English : One element, or the whole room

**`services.lead`**

- Français : Choisissez un élément ou confiez-nous l’ensemble : fleurs fraîches comprises, sans fleuriste à part.
- English : Pick a single element or leave the whole setting to us: fresh flowers included, no separate florist needed.

**`services.from`**

- Français : À partir de {price}
- English : From {price}

**`services.onQuote`**

- Français : Sur devis
- English : On quote

**`services.cta`**

- Français : Demander un devis
- English : Request a quote

## Trois blocs alternés

**`blocks.items.0.eyebrow`**

- Français : Sur mesure
- English : Made to measure

**`blocks.items.0.title`**

- Français : Une scénographie qui vous ressemble
- English : Styling that looks like you

**`blocks.items.0.text`**

- Français : Vos couleurs, votre salle, vos inspirations Pinterest : nous composons un décor complet, des fleurs à la vaisselle, pour que tout parle la même langue.
- English : Your colours, your venue, your Pinterest boards: we design a complete setting, from the flowers to the tableware, so everything speaks the same language.

**`blocks.items.0.cta`**

- Français : Demander un devis
- English : Request a quote

**`blocks.items.0.href`**

- Français : #devis
- English : #devis

**`blocks.items.1.eyebrow`**

- Français : Le jour J
- English : On the day

**`blocks.items.1.title`**

- Français : Vous arrivez, tout est prêt
- English : You arrive, everything is ready

**`blocks.items.1.text`**

- Français : L’équipe installe la salle, apporte le bouquet la veille et revient démonter. Vous gardez la surprise de la découverte, sans rien porter ni rien vérifier.
- English : Our team sets up the room, brings your bouquet the day before and comes back to take everything down. You keep the surprise, with nothing to carry or check.

**`blocks.items.1.cta`**

- Français : Comment ça marche
- English : How it works

**`blocks.items.1.href`**

- Français : #methode
- English : #methode

**`blocks.items.2.eyebrow`**

- Français : Et aussi
- English : And also

**`blocks.items.2.title`**

- Français : Baby showers, anniversaires, fêtes privées
- English : Baby showers, birthdays, private parties

**`blocks.items.2.text`**

- Français : Le même soin pour les autres moments : un coin photo personnalisé, une table à thème, un gala, une soirée au bord de l’eau.
- English : The same care for other moments: a personalised photo corner, a themed table, a gala, an evening by the water.

**`blocks.items.2.cta`**

- Français : Voir les événements
- English : See the events

**`blocks.items.2.href`**

- Français : #evenements
- English : #evenements

## Réalisations (mariages, lieux, invités dans data/realisations.json)

**`work.eyebrow`**

- Français : Réalisations
- English : Our work

**`work.title`**

- Français : Mariages décorés, année après année
- English : Weddings we’ve styled, year after year

**`work.lead`**

- Français : Une sélection de mariages publiés sur Instagram, avec le lieu quand il est connu.
- English : A selection of weddings shared on Instagram, with the venue when we know it.

**`work.filterLabel`**

- Français : Filtrer par année
- English : Filter by year

**`work.all`**

- Français : Toutes
- English : All

**`work.guests`**

- Français : {n} invités
- English : {n} guests

**`work.engagement`**

- Français : Fiançailles
- English : Engagement

**`work.more`**

- Français : Toutes les réalisations sur Instagram
- English : All our work on Instagram

**`work.open`**

- Français : Agrandir la photo
- English : Enlarge photo

**`work.lightbox.close`**

- Français : Fermer
- English : Close

**`work.lightbox.prev`**

- Français : Photo précédente
- English : Previous photo

**`work.lightbox.next`**

- Français : Photo suivante
- English : Next photo

**`work.lightbox.counter`**

- Français : {n} / {total}
- English : {n} / {total}

## Autres événements

**`events.eyebrow`**

- Français : Autres événements
- English : Other events

**`events.title`**

- Français : Pas seulement des mariages
- English : Not only weddings

**`events.lead`**

- Français : Pour une naissance, un anniversaire ou une soirée à deux, le décor se pense de la même façon : un thème, des matières, un détail qu’on retient.
- English : For a birth, a birthday or an evening for two, we approach the setting the same way: a theme, textures, a detail people remember.

**`events.items.0.key`**

- Français : baby
- English : baby

**`events.items.0.title`**

- Français : Baby shower
- English : Baby showers

**`events.items.0.text`**

- Français : Coin photo à la couleur et au prénom de votre choix, table de buffet « baby » en location, oursons et ballons.
- English : A photo corner in the colour and name of your choice, a “baby” buffet table to hire, teddy bears and balloons.

**`events.items.1.key`**

- Français : birthday
- English : birthday

**`events.items.1.title`**

- Français : Anniversaires
- English : Birthdays

**`events.items.1.text`**

- Français : Dolce vita, jungle chic, brunch aux agrumes ou dîner sur l’étang de Thau : un thème choisi ensemble, jusqu’aux sablés.
- English : Dolce vita, jungle chic, a citrus brunch or a dinner on the Thau lagoon: a theme chosen together, down to the biscuits.

**`events.items.2.key`**

- Français : private
- English : private

**`events.items.2.title`**

- Français : Saint-Valentin et galas
- English : Valentine’s Day and galas

**`events.items.2.text`**

- Français : Tapis rouge, roses, boîte XXL en location : des soirées qui marquent, en restaurant comme en salle.
- English : Red carpet, roses, an XXL photo box to hire: evenings people talk about, in a restaurant or a reception room.

**`events.items.3.key`**

- Français : engagement
- English : engagement

**`events.items.3.title`**

- Français : Fiançailles
- English : Engagements

**`events.items.3.text`**

- Français : Une décoration chic et romantique, en terrasse ou en salle, pour annoncer la suite.
- English : Chic, romantic styling on a terrace or indoors, to announce what comes next.

**`events.cta`**

- Français : Demander un devis
- English : Request a quote

## À propos (histoire à compléter avec elle)

**`about.eyebrow`**

- Français : À propos
- English : About

**`about.title`**

- Français : Une seule équipe, du premier message au démontage
- English : One team, from the first message to take-down

**`about.paragraphs.0`**

- Français : Depuis 2022, sA Luxury Event décore des mariages et des fêtes autour de Montpellier, de Sète à l’étang de Thau, et jusqu’à Nice et Perpignan.
- English : Since 2022, sA Luxury Event has been decorating weddings and parties around Montpellier, from Sète to the Thau lagoon, and as far as Nice and Perpignan.

**`about.paragraphs.1`**

- Français : Fleurs fraîches, vaisselle haut de gamme, trônes, arches et mobilier sont réunis dans une seule prestation : un décor cohérent, un seul interlocuteur, et pas de fleuriste à coordonner en plus.
- English : Fresh flowers, fine tableware, thrones, arches and furniture all come in one service: a consistent look, one contact, and no extra florist to coordinate.

**`about.paragraphs.2`**

- Français : Son travail s’arrête quand les portes s’ouvrent. La salle est prête, la mariée découvre son décor avec ses invités.
- English : Her work ends when the doors open. The room is ready, and the bride discovers her setting with her guests.

**`about.quote`**

- Français : « Je n’assiste presque jamais aux mariages, même lorsque mes clientes m’y invitent gentiment. »
- English : “I almost never attend the weddings, even when my clients kindly invite me.”

**`about.quoteBy`**

- Français : La fondatrice de sA Luxury Event
- English : The founder of sA Luxury Event

**`about.cta`**

- Français : Parler de votre mariage
- English : Tell us about your wedding

**`about.photoAlt`**

- Français : Bouquet d’arums blancs noué d’un ruban « Always and forever » aux initiales des mariés
- English : White calla lily bouquet tied with an “Always and forever” ribbon bearing the couple’s initials

## Comment ça marche

**`process.eyebrow`**

- Français : Comment ça marche
- English : How it works

**`process.title`**

- Français : Cinq étapes, sans stress
- English : Five steps, no stress

**`process.steps.0.title`**

- Français : Premier échange
- English : First conversation

**`process.steps.0.text`**

- Français : Vous nous écrivez sur WhatsApp ou via le formulaire : date, lieu, nombre d’invités, envies.
- English : Write to us on WhatsApp or through the form: date, venue, number of guests, ideas.

**`process.steps.1.title`**

- Français : Rendez-vous et moodboard
- English : Meeting and moodboard

**`process.steps.1.text`**

- Français : On construit ensemble l’ambiance : couleurs, fleurs, matières, inspirations.
- English : Together we build the mood: colours, flowers, textures, inspiration.

**`process.steps.2.title`**

- Français : Devis
- English : Quote

**`process.steps.2.text`**

- Français : Un devis détaillé, élément par élément. Votre date est bloquée à la réservation.
- English : A detailed quote, item by item. Your date is held once you book.

**`process.steps.3.title`**

- Français : Installation le jour J
- English : Set-up on the day

**`process.steps.3.text`**

- Français : L’équipe installe la salle et apporte le bouquet. Vous n’avez rien à faire.
- English : The team sets up the room and brings the bouquet. Nothing for you to do.

**`process.steps.4.title`**

- Français : Démontage
- English : Take-down

**`process.steps.4.text`**

- Français : Nous revenons tout récupérer après la fête, selon l’horaire convenu avec la salle.
- English : We come back for everything after the party, at the time agreed with the venue.

## Avis (vrais avis dans data/avis.json)

**`reviews.eyebrow`**

- Français : Avis
- English : Reviews

**`reviews.title`**

- Français : Ce que disent les mariées
- English : What our brides say

**`reviews.translated`**

- Français : Traduit du français
- English : Translated from French

**`reviews.weddingOn`**

- Français : Mariage du {date}
- English : Wedding on {date}

**`reviews.anonymous`**

- Français : Une cliente
- English : A client

**`reviews.via`**

- Français : via {source}
- English : via {source}

**`reviews.readMore`**

- Français : Lire la suite
- English : Read more

**`reviews.readLess`**

- Français : Réduire
- English : Show less

## Zone d'intervention

**`zone.eyebrow`**

- Français : Zone d’intervention
- English : Where we work

**`zone.title`**

- Français : Montpellier, Nice, Perpignan et alentours
- English : Montpellier, Nice, Perpignan and around

**`zone.lead`**

- Français : Hérault, Gard, Pyrénées-Orientales, Côte d’Azur : dites-nous où se trouve votre salle, nous vous confirmons le déplacement dans le devis.
- English : Hérault, Gard, Pyrénées-Orientales, the Riviera: tell us where your venue is and we’ll confirm travel in the quote.

**`zone.cities.0.name`**

- Français : Montpellier
- English : Montpellier

**`zone.cities.0.text`**

- Français : Montpellier, Sète, l’étang de Thau et les domaines de l’Hérault.
- English : Montpellier, Sète, the Thau lagoon and the estates of the Hérault.

**`zone.cities.1.name`**

- Français : Nice
- English : Nice

**`zone.cities.1.text`**

- Français : Nice et la Côte d’Azur, de la salle de réception à la villa.
- English : Nice and the Riviera, from reception halls to private villas.

**`zone.cities.2.name`**

- Français : Perpignan
- English : Perpignan

**`zone.cities.2.text`**

- Français : Perpignan et les Pyrénées-Orientales, entre mer et domaines.
- English : Perpignan and the Pyrénées-Orientales, between sea and estates.

## Questions fréquentes (réponses à valider)

**`faq.eyebrow`**

- Français : Questions fréquentes
- English : FAQ

**`faq.title`**

- Français : Avant de nous écrire
- English : Before you write

**`faq.items.0.q`**

- Français : Combien de temps à l’avance faut-il réserver ?
- English : How far in advance should we book?

**`faq.items.0.a`**

- Français : Le plus tôt possible : les samedis de mai à septembre partent vite. Écrivez-nous dès que vous avez votre date et votre lieu, même si tout n’est pas encore décidé. Les dates 2027 sont ouvertes.
- English : As early as you can: Saturdays from May to September go quickly. Write to us as soon as you have your date and venue, even if nothing else is decided. 2027 dates are open.

**`faq.items.1.q`**

- Français : L’installation et le démontage sont-ils compris ?
- English : Are set-up and take-down included?

**`faq.items.1.a`**

- Français : Oui, c’est notre équipe qui installe et qui démonte. L’horaire se cale avec votre salle, et le détail figure dans le devis.
- English : Yes, our team sets up and takes down. Timing is agreed with your venue and detailed in the quote.

**`faq.items.2.q`**

- Français : Les éléments de décor sont-ils loués ou achetés ?
- English : Are decor items hired or bought?

**`faq.items.2.a`**

- Français : Le mobilier, la vaisselle, les trônes et les décors sont prêtés le temps de l’événement. Les compositions florales et le bouquet de mariée sont créés pour vous.
- English : Furniture, tableware, thrones and decor are lent for the event. Floral arrangements and the bridal bouquet are made for you.

**`faq.items.3.q`**

- Français : Vous déplacez-vous en dehors de Montpellier, Nice et Perpignan ?
- English : Do you travel beyond Montpellier, Nice and Perpignan?

**`faq.items.3.a`**

- Français : Oui, dans le Sud et au-delà selon les dates. Indiquez la ville de votre salle dans le formulaire : les frais de déplacement éventuels sont précisés dans le devis.
- English : Yes, across the South and further depending on dates. Give the town of your venue in the form: any travel costs are shown in the quote.

**`faq.items.4.q`**

- Français : Faut-il verser un acompte ?
- English : Is a deposit required?

**`faq.items.4.a`**

- Français : Un acompte confirme la réservation de votre date. Son montant et les conditions sont indiqués sur le devis.
- English : A deposit secures your date. The amount and terms are shown on the quote.

**`faq.items.5.q`**

- Français : Y a-t-il un rendez-vous de préparation ?
- English : Is there a planning meeting?

**`faq.items.5.a`**

- Français : Oui. Après le premier échange, on se retrouve pour construire le moodboard : couleurs, fleurs, matières, et le plan de la salle.
- English : Yes. After the first conversation we meet to build the moodboard: colours, flowers, textures and the room layout.

**`faq.items.6.q`**

- Français : Proposez-vous aussi le traiteur ?
- English : Do you also offer catering?

**`faq.items.6.a`**

- Français : Oui, un pack décoration et traiteur est possible avec nos partenaires. Précisez-le dans votre message.
- English : Yes, a decoration and catering package is possible with our partners. Just mention it in your message.

**`faq.items.7.q`**

- Français : Le devis est-il gratuit ?
- English : Is the quote free?

**`faq.items.7.a`**

- Français : Oui. Remplissez le formulaire ou écrivez-nous sur WhatsApp, nous revenons vers vous avec une proposition.
- English : Yes. Fill in the form or message us on WhatsApp and we’ll come back to you with a proposal.

## Formulaire de devis + message WhatsApp

**`quote.eyebrow`**

- Français : Demande de devis
- English : Quote request

**`quote.title`**

- Français : Parlez-nous de votre événement
- English : Tell us about your event

**`quote.lead`**

- Français : Quelques informations suffisent. Votre demande s’ouvre dans WhatsApp, déjà rédigée : il ne reste qu’à l’envoyer.
- English : A few details are enough. Your request opens in WhatsApp, already written: all you have to do is send it.

**`quote.steps.0`**

- Français : Votre événement
- English : Your event

**`quote.steps.1`**

- Français : Le décor
- English : The setting

**`quote.steps.2`**

- Français : Vos coordonnées
- English : Your details

**`quote.next`**

- Français : Continuer
- English : Continue

**`quote.back`**

- Français : Retour
- English : Back

**`quote.fields.type`**

- Français : Type d’événement
- English : Type of event

**`quote.fields.types.mariage`**

- Français : Mariage
- English : Wedding

**`quote.fields.types.baby`**

- Français : Baby shower
- English : Baby shower

**`quote.fields.types.anniversaire`**

- Français : Anniversaire
- English : Birthday

**`quote.fields.types.autre`**

- Français : Autre
- English : Other

**`quote.fields.date`**

- Français : Date
- English : Date

**`quote.fields.dateHint`**

- Français : Approximative si besoin
- English : Approximate is fine

**`quote.fields.venue`**

- Français : Lieu ou salle
- English : Venue

**`quote.fields.venuePlaceholder`**

- Français : Nom du domaine, de la salle…
- English : Name of the estate or hall…

**`quote.fields.city`**

- Français : Ville
- English : Town

**`quote.fields.cityPlaceholder`**

- Français : Montpellier, Nice, Perpignan…
- English : Montpellier, Nice, Perpignan…

**`quote.fields.guests`**

- Français : Nombre d’invités
- English : Number of guests

**`quote.fields.elements`**

- Français : Éléments souhaités
- English : What you’d like

**`quote.fields.elementsOptions.table-honneur`**

- Français : Table d’honneur
- English : Top table

**`quote.fields.elementsOptions.coin-maries`**

- Français : Coin des mariés
- English : Couple’s corner

**`quote.fields.elementsOptions.arche`**

- Français : Arche et cérémonie
- English : Arch & ceremony

**`quote.fields.elementsOptions.centres-table`**

- Français : Centres de table
- English : Centrepieces

**`quote.fields.elementsOptions.bouquet`**

- Français : Bouquet de mariée
- English : Bridal bouquet

**`quote.fields.elementsOptions.scenographie`**

- Français : Scénographie complète
- English : Full venue styling

**`quote.fields.mood`**

- Français : Ambiance ou couleurs
- English : Mood or colours

**`quote.fields.moodPlaceholder`**

- Français : Blanc et or, champêtre, bordeaux… ou collez un lien Pinterest
- English : White and gold, rustic, burgundy… or paste a Pinterest link

**`quote.fields.budget`**

- Français : Budget (facultatif)
- English : Budget (optional)

**`quote.fields.budgetPlaceholder`**

- Français : Une fourchette suffit
- English : A rough range is enough

**`quote.fields.name`**

- Français : Nom et prénom
- English : Full name

**`quote.fields.phone`**

- Français : Téléphone
- English : Phone

**`quote.fields.message`**

- Français : Message
- English : Message

**`quote.fields.messagePlaceholder`**

- Français : Ce qui compte pour vous, une question…
- English : What matters to you, a question…

**`quote.fields.optional`**

- Français : facultatif
- English : optional

**`quote.errors.type`**

- Français : Choisissez le type d’événement.
- English : Choose the type of event.

**`quote.errors.date`**

- Français : Indiquez la date, même approximative.
- English : Give the date, even approximate.

**`quote.errors.city`**

- Français : Indiquez la ville ou le lieu.
- English : Give the town or venue.

**`quote.errors.name`**

- Français : Indiquez votre nom.
- English : Give your name.

**`quote.errors.phone`**

- Français : Indiquez un numéro de téléphone valide.
- English : Give a valid phone number.

**`quote.taken`**

- Français : Cette date est déjà réservée pour une autre installation. Écrivez-nous quand même : selon le lieu, c’est parfois possible.
- English : This date is already booked for another set-up. Write to us anyway: depending on the venue, it may still be possible.

**`quote.pinterest`**

- Français : Lien Pinterest détecté, il sera joint au message.
- English : Pinterest link found, it will be added to the message.

**`quote.submit`**

- Français : Envoyer sur WhatsApp
- English : Send on WhatsApp

**`quote.sentTitle`**

- Français : Votre demande est prête
- English : Your request is ready

**`quote.sentText`**

- Français : WhatsApp s’est ouvert avec votre message. S’il ne s’est pas ouvert, utilisez le bouton ci-dessous.
- English : WhatsApp has opened with your message. If it didn’t, use the button below.

**`quote.sentAgain`**

- Français : Ouvrir WhatsApp
- English : Open WhatsApp

**`quote.privacy`**

- Français : Vos informations servent uniquement à répondre à votre demande. Rien n’est enregistré sur ce site.
- English : Your details are only used to answer your request. Nothing is stored on this website.

**`quote.orCall`**

- Français : Vous préférez appeler ?
- English : Prefer to call?

**`quote.deposit`**

- Français : Payer l’acompte en ligne
- English : Pay the deposit online

**`quote.message.title`**

- Français : Demande de devis – sA Luxury Event
- English : Quote request – sA Luxury Event

**`quote.message.type`**

- Français : Événement
- English : Event

**`quote.message.date`**

- Français : Date
- English : Date

**`quote.message.venue`**

- Français : Lieu / salle
- English : Venue

**`quote.message.city`**

- Français : Ville
- English : Town

**`quote.message.guests`**

- Français : Invités
- English : Guests

**`quote.message.elements`**

- Français : Éléments souhaités
- English : Wishes

**`quote.message.mood`**

- Français : Ambiance / couleurs
- English : Mood / colours

**`quote.message.budget`**

- Français : Budget
- English : Budget

**`quote.message.name`**

- Français : Nom
- English : Name

**`quote.message.phone`**

- Français : Téléphone
- English : Phone

**`quote.message.notes`**

- Français : Message
- English : Message

**`quote.message.closing`**

- Français : Merci, à très vite !
- English : Thank you, speak soon!

## Bouton WhatsApp

**`whatsapp.hello`**

- Français : Bonjour sA Luxury Event, je souhaite des informations pour la décoration de mon événement.
- English : Hello sA Luxury Event, I’d like some information about decorating my event.

**`whatsapp.float`**

- Français : Écrire sur WhatsApp
- English : Message us on WhatsApp

## Pied de page

**`footer.tagline`**

- Français : Décoration de mariage et scénographie sur mesure dans le Sud de la France.
- English : Wedding decoration and bespoke event styling in the South of France.

**`footer.nav`**

- Français : Navigation
- English : Navigation

**`footer.zone`**

- Français : Zone
- English : Area

**`footer.zoneText`**

- Français : Montpellier, Nice, Perpignan et alentours
- English : Montpellier, Nice, Perpignan and around

**`footer.rights`**

- Français : Tous droits réservés
- English : All rights reserved

**`footer.photos`**

- Français : Photos : réalisations sA Luxury Event
- English : Photos: work by sA Luxury Event

**`footer.legal`**

- Français : Mentions légales
- English : Legal notice

## Mentions légales

**`legal.title`**

- Français : Mentions légales
- English : Legal notice

**`legal.sections.0.h`**

- Français : Éditeur du site
- English : Publisher

**`legal.sections.0.p`**

- Français : sA Luxury Event, décoration de mariage et scénographie sur mesure. Téléphone : 06 59 86 86 74. Raison sociale, adresse et numéro SIRET : à compléter.
- English : sA Luxury Event, wedding decoration and bespoke event styling. Phone: +33 6 59 86 86 74. Company name, address and SIRET number: to be completed.

**`legal.sections.1.h`**

- Français : Hébergement
- English : Hosting

**`legal.sections.1.p`**

- Français : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
- English : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.

**`legal.sections.2.h`**

- Français : Données personnelles
- English : Personal data

**`legal.sections.2.p`**

- Français : Le formulaire de devis ne stocke aucune donnée sur ce site : il prépare un message que vous envoyez vous-même sur WhatsApp. Les informations transmises servent uniquement à répondre à votre demande. Vous pouvez demander leur suppression à tout moment par WhatsApp ou par téléphone.
- English : The quote form stores nothing on this website: it prepares a message that you send yourself on WhatsApp. The details you share are only used to answer your request. You can ask for them to be deleted at any time by WhatsApp or phone.

**`legal.sections.3.h`**

- Français : Cookies
- English : Cookies

**`legal.sections.3.p`**

- Français : Le site n’utilise aucun cookie publicitaire ni de mesure d’audience. Seuls le choix de la langue et la fermeture du bandeau d’informations sont mémorisés dans votre navigateur.
- English : This website uses no advertising or analytics cookies. Only your language choice and the closing of the information bar are remembered in your browser.

**`legal.sections.4.h`**

- Français : Photos
- English : Photos

**`legal.sections.4.p`**

- Français : Toutes les photos sont des réalisations de sA Luxury Event. Les crédits des photographes partenaires figurent sur Instagram. Toute reproduction est interdite sans autorisation.
- English : All photos show work by sA Luxury Event. Partner photographers are credited on Instagram. No reproduction without permission.

**`legal.back`**

- Français : Retour à l’accueil
- English : Back to home

## Textes alternatifs des photos (accessibilité, Google Images)

**`alt.salle-arches`**

- Français : Salle de réception décorée : arches blanches éclairées, lustres de cristal et estrade des mariés
- English : Decorated reception room: lit white arches, crystal chandeliers and the couple’s stage

**`alt.table-pivoines`**

- Français : Table ronde avec centre de pivoines et d’hortensias, assiettes à bord perlé doré et verres en cristal
- English : Round table with a peony and hydrangea centrepiece, gold beaded plates and crystal glasses

**`alt.table-honneur-pierre`**

- Français : Table d’honneur ronde nappée de blanc devant un mur de pierre, bouquet de roses et de fleurs mauves
- English : Round top table in white linen against a stone wall, roses and mauve flowers

**`alt.table-honneur-bleu-roi`**

- Français : Longue table d’honneur en bleu roi et blanc, menus bleus et compositions de roses blanches
- English : Long top table in royal blue and white, blue menus and white rose arrangements

**`alt.table-honneur-guirlandes`**

- Français : Longue table sous des guirlandes lumineuses, chemin de table pêche et bougies
- English : Long table under string lights, peach runner and candles

**`alt.table-honneur-menu`**

- Français : Assiette ivoire et menu noué d’un ruban, roses blanches et gypsophile en fond
- English : Ivory plate and a menu tied with ribbon, white roses and baby’s breath behind

**`alt.trone-bordeaux`**

- Français : Trône des mariés blanc habillé d’une cascade d’hortensias bordeaux, sous des arches éclairées
- English : White wedding throne dressed with a cascade of burgundy hydrangeas, under lit arches

**`alt.estrade-roses`**

- Français : Estrade des mariés aux arches blanches, banquette et guirlande de roses roses
- English : Couple’s stage with white arches, a sofa and a garland of pink roses

**`alt.salon-rose`**

- Français : Banquette en velours rose poudré sous une arche dorée et une guirlande de roses
- English : Dusty pink velvet sofa under a gold arch and a garland of roses

**`alt.salon-orange`**

- Français : Salon blanc en plein air entouré de colonnes et de fleurs orange
- English : White outdoor lounge surrounded by columns and orange flowers

**`alt.estrade-bougies`**

- Français : Estrade extérieure aux arches blanches, chandeliers de cristal, roses et gypsophile
- English : Outdoor stage with white arches, crystal candelabras, roses and baby’s breath

**`alt.salon-arches`**

- Français : Chandeliers de cristal et roses blanches devant des arches éclairées
- English : Crystal candelabras and white roses in front of lit arches

**`alt.arche-ceremonie`**

- Français : Cérémonie sous une arche fleurie, en noir et blanc
- English : Ceremony under a floral arch, in black and white

**`alt.allee-ceremonie`**

- Français : Allée de cérémonie en plein air, chaises blanches, fleurs rose pâle et panneau façon couverture de magazine
- English : Outdoor ceremony aisle, white chairs, blush flowers and a magazine-cover photo booth

**`alt.panneau-initiales`**

- Français : Panneau d’accueil aux initiales des mariés, pampas et fleurs séchées
- English : Welcome sign with the couple’s initials, pampas and dried flowers

**`alt.colonnes-orange`**

- Français : Colonnes blanches et bouquets de fleurs orange pour une cérémonie en plein air
- English : White columns and orange flower arrangements for an outdoor ceremony

**`alt.centre-hortensias`**

- Français : Centre de table : vase en céramique, hortensias verts, roses blanches et amarante
- English : Centrepiece: ceramic vase, green hydrangeas, white roses and amaranth

**`alt.centre-roses`**

- Français : Centre de table de roses blanches et rose pâle, gypsophile et verres en cristal
- English : Centrepiece of white and blush roses, baby’s breath and crystal glasses

**`alt.centre-gypsophile`**

- Français : Dôme de roses ivoire et de gypsophile au centre de la table
- English : Dome of ivory roses and baby’s breath in the middle of the table

**`alt.centre-pastel`**

- Français : Composition pastel sur chandelier, numéro de table et verres en cristal
- English : Pastel arrangement on a candelabra, table number and crystal glasses

**`alt.centre-pivoines`**

- Français : Centre de table de roses et d’hortensias roses, bordeaux et pêche, verres en cristal
- English : Centrepiece of pink, burgundy and peach roses and hydrangeas, crystal glasses

**`alt.centre-bougies`**

- Français : Chandeliers de cristal, bougies et fleurs blanches au centre de la table
- English : Crystal candelabras, candles and white flowers in the middle of the table

**`alt.centre-cristal`**

- Français : Chandeliers en cristal, roses blanches et serviettes nouées sur nappe blanche
- English : Crystal candelabras, white roses and folded napkins on white linen

**`alt.art-de-table`**

- Français : Art de la table : assiettes festonnées, bord perlé doré, couverts dorés et menu
- English : Table setting: scalloped plates, gold beaded chargers, gold cutlery and a menu

**`alt.centre-orange`**

- Français : Table dressée de roses et de gerberas orange, verres en cristal et menu personnalisé
- English : Table set with orange roses and gerberas, crystal glasses and a personalised menu

**`alt.art-de-table-vert`**

- Français : Assiette ivoire, menu vert et doré, lierre sur la table
- English : Ivory plate, green and gold menu, ivy on the table

**`alt.bouquet-champetre`**

- Français : Bouquet de mariée champêtre : roses, dahlias, marguerites et fleurs mauves, noué de blanc
- English : Country-style bridal bouquet: roses, dahlias, daisies and mauve flowers tied in white

**`alt.bouquet-arums`**

- Français : Bouquet d’arums blancs noué d’un ruban brodé « Always and forever »
- English : White calla lily bouquet tied with an embroidered “Always and forever” ribbon

**`alt.bouquet-blanc`**

- Français : Bouquet de mariée blanc tenu contre le voile
- English : White bridal bouquet held against the veil

**`alt.bouquet-roses`**

- Français : Bouquet rond de roses ivoire et de gypsophile, ruban de satin blanc
- English : Round bouquet of ivory roses and baby’s breath, white satin ribbon

**`alt.fleurs-fraiches`**

- Français : Roses de jardin roses, corail et mauves
- English : Pink, coral and mauve garden roses

**`alt.baby-shower-coin-photo`**

- Français : Coin photo de baby shower : arches blanches, ballons nacrés, prénom du bébé et oursons
- English : Baby shower photo corner: white arches, pearl balloons, the baby’s name and teddy bears

**`alt.baby-shower-table`**

- Français : Table de baby shower bleu ciel et or, ourson et biscuits personnalisés
- English : Baby shower table in sky blue and gold, teddy bear and personalised biscuits

**`alt.baby-shower-oursons`**

- Français : Décor de baby shower : arches crème, ballons dorés et grands oursons
- English : Baby shower setting: cream arches, gold balloons and large teddy bears

**`alt.anniversaire-dolce-vita`**

- Français : Table d’anniversaire « dolce vita » : citrons, bleu et jaune, verres bleus
- English : “Dolce vita” birthday table: lemons, blue and yellow, blue glasses

**`alt.anniversaire-jungle`**

- Français : Anniversaire thème jungle chic en plein air : panneaux, girafe et verdure
- English : Outdoor jungle-chic birthday: panels, giraffe and greenery

**`alt.anniversaire-etang`**

- Français : Table d’anniversaire face à l’étang de Thau, fleurs blanches et vertes
- English : Birthday table facing the Thau lagoon, white and green flowers

**`alt.fete-piscine`**

- Français : Table de fête au bord d’une piscine, nappe bleue et roses
- English : Party table by a swimming pool, blue tablecloth and roses

**`alt.brunch-agrumes`**

- Français : Table de brunch au thème agrumes, fleurs orange et assiettes pastel
- English : Citrus-themed brunch table, orange flowers and pastel plates

**`alt.tapis-rouge`**

- Français : Escalier au tapis rouge éclairé de bougies et de roses rouges
- English : Red-carpet staircase lit with candles and red roses

**`alt.gala-table`**

- Français : Table de gala sous un grand bouquet de roses, salon à moulures
- English : Gala table beneath a tall rose arrangement, in a moulded salon

**`alt.saint-valentin-roses`**

- Français : Bouquet de roses rouges pour une soirée de Saint-Valentin
- English : Red rose arrangement for a Valentine’s evening

**`alt.noir-et-blanc`**

- Français : Réception en noir et blanc : longues tables, fleurs et verrière
- English : Black and white reception: long tables, flowers and a glasshouse

**`alt.terrasse-arches`**

- Français : Décor de fiançailles en terrasse : arches blanches, roses blanches et cristal
- English : Engagement setting on a terrace: white arches, white roses and crystal

**`alt.gateau-bleu-roi`**

- Français : Pièce montée blanche ornée de fleurs blanches et bleu roi
- English : White tiered cake decorated with white and royal blue flowers

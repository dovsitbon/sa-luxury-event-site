# sA Luxury Event : informations à lui demander

Le site est en ligne avec ce qu'on a trouvé sur son Instagram (@sa.luxury.event, 135 publications, 11 stories à la une, relevé le 9 novembre 2026).
Rien n'a été inventé : ce qui manque n'est pas affiché, ou est formulé de façon générale. Chaque réponse se reporte dans le fichier indiqué.

## Elle et son histoire
- [ ] **Son prénom** et si elle veut qu'il apparaisse sur le site → `data/site.json` (`founderName`) + `locales/*.json` (`about`)
- [ ] **Son histoire** : depuis quand elle décore (premier post Instagram : septembre 2022), d'où vient le nom « sA », ce qui l'a amenée au métier → `about.paragraphs`
- [ ] **Un portrait** d'elle (photo verticale, lumière naturelle) → `assets/a-recevoir/portrait/`. En attendant, la section « À propos » montre un bouquet d'arums.
- [ ] **Le logo** en fichier d'origine (vectoriel ou PNG haute définition). Il a été redessiné en SVG d'après sa photo de profil (A + S entrelacés) : `components/Logo.tsx`, `app/icon.svg`, `public/logo.svg`.

## Prestations et prix
- [ ] **La liste exacte des prestations** (table d'honneur, coin des mariés, arche et cérémonie, centres de table, bouquet de mariée, scénographie complète : à confirmer ou compléter) → `data/prestations.json`
- [ ] **Les prix « à partir de »** pour chaque prestation, et si elle veut les afficher (`showPrices`) → `data/prestations.json`
- [ ] **Location ou vente** des éléments de décor : la FAQ dit « prêtés le temps de l'événement, fleurs créées pour vous » → à valider
- [ ] **Le pack décoration + traiteur** (mentionné sur le mariage de Yasmine, avec @nl_buffet) : toujours proposé ? avec quels partenaires ?
- [ ] **Location seule** : boîte XXL, table de buffet « baby », box magazine « Vogue », trône : encore disponibles ? prix ?
- [ ] **Recherche de lieu** (« Nous nous occupons également de trouver le lieu parfait », mars 2023) : toujours proposé ?

## Zone et déplacements
- [ ] **Villes et départements couverts** (le site dit Montpellier, Nice, Perpignan et alentours ; Hérault, Gard, Pyrénées-Orientales, Côte d'Azur) → `locales/*.json` (`zone`) + `data/site.json` (`areasConfirmed`)
- [ ] **Frais de déplacement** (forfait, au kilomètre, à partir de quelle distance)
- [ ] **Adresse ou ville de rattachement** pour Google (le site indique Montpellier dans les données structurées) → `lib/jsonld.ts`

## Organisation
- [ ] **Installation et démontage** : inclus ou en supplément ? la veille ou le jour même ? (le site dit « inclus, horaire calé avec la salle »)
- [ ] **Acompte et conditions de réservation** : montant ou pourcentage, échéancier, annulation → FAQ ; et si elle veut le paiement en ligne de l'acompte (prévu dans le code, désactivé : `data/site.json` → `payments`)
- [ ] **Délai de réservation conseillé** (la FAQ dit « le plus tôt possible »)
- [ ] **Rendez-vous de préparation** : en showroom, chez elle, en visio, sur le lieu ?
- [ ] **Dates déjà réservées** en 2027 (pour le calendrier du formulaire) → `data/dates.json`
- [ ] **Nombre de mariages réalisés** (affiché près des boutons seulement s'il est rempli) → `data/site.json` (`stats.weddings`)

## Réalisations
- [ ] **Les vraies dates** des mariages (le site utilise le mois de publication Instagram) → `data/realisations.json`
- [ ] **Les lieux et salles** où elle a travaillé, pour chaque mariage. Connus : Domaine des Moures, Villa Pamilya, Jardin d'Hiver, La Grande Sieste, Le Grand Cellier, Domaine de Verchant, La Palourdière (étang de Thau), Mas Hinaïti. Inconnus pour les autres.
- [ ] **Le nombre d'invités** pour chaque mariage (non affiché tant que vide)
- [ ] **L'accord des mariés** pour afficher leurs prénoms (repris tels qu'elle les a publiés sur Instagram)

## Avis
- [ ] **D'autres vrais avis** (Mariages.net, Google, messages) avec prénom et date du mariage → `data/avis.json`. 5 avis repris de la story « Avis clients » (Mawada, Kaouthar, Mostapha & Ounayma, Hyness, une cliente sans prénom).
- [ ] **Le lien de sa fiche Mariages.net** (2 avis 5/5 visibles en story) → `data/site.json` (`mariagesNet.url`)
- [ ] Le prénom de la cliente du premier message (story de décembre 2022), si elle veut être nommée.

## Photos et vidéos
- [ ] **Photos en haute définition** (les images viennent d'Instagram, certaines en 720 px) : surtout le hero (salle aux arches et lustres, avril 2025), tables d'honneur, trônes, bouquets → `assets/a-recevoir/photos/`
- [ ] **Vidéos** (reels sans le son, pour un hero vidéo éventuel) → `assets/a-recevoir/videos/`
- [ ] Les **crédits photographes** à afficher (AAS Photographie, Alex Capucine, Nicolas Cance, Doya Studio, Elha Photographie, TH Weddings…)

## Mentions légales
- [ ] Raison sociale, adresse, SIRET, nom du responsable de publication → `locales/*.json` (`legal`)

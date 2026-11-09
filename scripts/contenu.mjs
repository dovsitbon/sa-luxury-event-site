// Génère CONTENU.md : tous les textes du site, en français et en anglais, section par section, pour validation par la cliente.
//   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LANGS = [
  ["fr", "Français"],
  ["en", "English"],
];
const SECTIONS = {
  meta: "Référencement (titres Google et descriptions)",
  nav: "Menu",
  infobar: "Bandeau d'infos (le texte lui-même est dans data/annonces.json)",
  intro: "Ouverture",
  hero: "Hero (titre retenu : option 1, voir plus haut)",
  proof: "Preuves près des boutons (chiffres dans data/site.json)",
  cards: "Cartes portrait par type d'événement",
  services: "Prestations (cartes et prix dans data/prestations.json)",
  blocks: "Trois blocs alternés",
  work: "Réalisations (mariages, lieux, invités dans data/realisations.json)",
  events: "Autres événements",
  about: "À propos (histoire à compléter avec elle)",
  process: "Comment ça marche",
  reviews: "Avis (vrais avis dans data/avis.json)",
  zone: "Zone d'intervention",
  faq: "Questions fréquentes (réponses à valider)",
  quote: "Formulaire de devis + message WhatsApp",
  whatsapp: "Bouton WhatsApp",
  footer: "Pied de page",
  legal: "Mentions légales",
  alt: "Textes alternatifs des photos (accessibilité, Google Images)",
};

const read = async (...p) => JSON.parse(await readFile(path.join(ROOT, ...p), "utf8"));
const dicts = Object.fromEntries(await Promise.all(LANGS.map(async ([l]) => [l, await read("locales", `${l}.json`)])));
const prestations = await read("data", "prestations.json");
const realisations = await read("data", "realisations.json");
const avis = await read("data", "avis.json");

function flatten(obj, prefix = "") {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") out.push(...flatten(v, key));
    else out.push([key, String(v)]);
  }
  return out;
}
const get = (obj, key) => key.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
const NL = "\n";

let md = `# sA Luxury Event : contenu du site

Tous les textes du site, en français et en anglais, à relire et valider avec elle.
Fichiers sources : \`locales/fr.json\` et \`locales/en.json\` (ce fichier est généré par \`npm run contenu\`).
Données datées dans \`data/\` : \`annonces.json\` (bandeau), \`prestations.json\` (prestations et prix « à partir de »),
\`realisations.json\` (mariages, lieux, nombre d'invités), \`avis.json\` (vrais avis), \`dates.json\` (dates déjà prises),
\`site.json\` (coordonnées, chiffres, acompte en ligne – désactivé).
La liste des informations à lui demander est dans **INFOS-A-DEMANDER.md**.

## Grand titre du hero : 3 propositions

1. **Le luxe est dans chaque détail** / *Luxury lives in every detail* — retenue : c'est la première ligne de sa bio Instagram
2. **Un décor à la hauteur de votre histoire** / *A setting worthy of your story* — reprend sa légende « chaque histoire mérite un décor à sa hauteur »
3. **Vous arrivez, tout est prêt** / *You arrive, everything is ready* — la promesse du jour J (installation, bouquet apporté la veille, démontage)

Pour changer : \`hero.title\` dans \`locales/fr.json\` et \`locales/en.json\`.

## Prestations (data/prestations.json)

Prix affichés : ${prestations.showPrices ? "oui" : "non (showPrices = false, prix à remplir avec elle)"}

${prestations.items.map((p) => `- **${p.title.fr}** / ${p.title.en} — à partir de : ${p.priceFrom ?? "à remplir"}${NL}  - FR : ${p.text.fr}${NL}  - EN : ${p.text.en}`).join(NL)}

## Réalisations (data/realisations.json)

Date = mois de publication Instagram (à corriger avec la vraie date du mariage). Lieu et invités : « à remplir » quand ils manquent (non affichés sur le site).

| Date | Mariage | Lieu | Invités | Ambiance |
|---|---|---|---|---|
${realisations.items.map((r) => `| ${r.date} | ${r.title.fr} | ${r.place ?? "à remplir"} | ${r.guests ?? "à remplir"} | ${r.ambiance.fr} |`).join(NL)}

## Avis (data/avis.json), recopiés de la story « Avis clients »

${avis.reviews.map((r) => `- **${r.name ?? "Une cliente (sans prénom)"}** — ${r.date ?? "date à remplir"} — ${r.source}${r.rating ? ` — ${r.rating}/5` : ""}${NL}  - FR : ${r.text.fr}${NL}  - EN : ${r.text.en}`).join(NL)}

<!-- À REMPLIR avec de vrais avis clients supplémentaires -->

`;

for (const [sec, title] of Object.entries(SECTIONS)) {
  md += `${NL}## ${title}${NL}`;
  for (const [key] of flatten(dicts.fr[sec], sec)) {
    md += `${NL}**\`${key}\`**${NL}${NL}`;
    for (const [l, name] of LANGS) md += `- ${name} : ${get(dicts[l], key) ?? "—"}${NL}`;
  }
}

await writeFile(path.join(ROOT, "CONTENU.md"), md);
console.log("CONTENU.md écrit");

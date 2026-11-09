// Trie les visuels Instagram de @sa.luxury.event (assets/raw/saluxury_<n° de publication>_<code>[_video-cover].jpg)
// dans assets/<catégorie>/ avec des noms lisibles, puis les prépare pour le web dans public/media/<catégorie>/
// (next/image sert ensuite AVIF/WebP à la bonne taille).
//   npm run media
//
// Nom = <style>-<n>.jpg : le style sert de clé de texte alternatif (locales/*.json → alt).
// Écartés après revue : portraits de mariés et d'invités en gros plan (20, 23, 27, 39, 44, 61, 63, 68, 69, 83, 85, 115, 126, 129),
// photos de famille et d'enfants (94-96), visuels chargés de texte ou captures (33, 51, 78, 80, 86, 125, 131, 134),
// hélicoptère (12), visuels trop petits ou flous (36, 99, 100, 135), vitrine « Vogue » avec invités (112, 114, 116, 117).
import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { readdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = readdirSync(path.join(ROOT, "assets/raw"));
const raw = (n) => {
  const f = RAW.find((x) => x.startsWith(`saluxury_${String(n).padStart(3, "0")}_`));
  if (!f) throw new Error(`introuvable : ${n}`);
  return `raw/${f}`;
};

// [n° de publication (ordre du profil), catégorie, style]
export const PICKS = [
  // Hero : salle entière, arches éclairées, lustres de cristal, estrade des mariés (mariage « conte de fées », avril 2025)
  [40, "hero", "salle-arches"],
  [10, "hero", "table-pivoines"],

  // Table d'honneur
  [48, "table-honneur", "table-honneur-pierre"],
  [102, "table-honneur", "table-honneur-bleu-roi"],
  [87, "table-honneur", "table-honneur-guirlandes"],
  [29, "table-honneur", "table-honneur-menu"],

  // Coin des mariés : trônes, estrades, salons
  [17, "coin-maries", "trone-bordeaux"],
  [59, "coin-maries", "estrade-roses"],
  [77, "coin-maries", "salon-rose"],
  [8, "coin-maries", "salon-orange"],
  [55, "coin-maries", "estrade-bougies"],
  [21, "coin-maries", "salon-arches"],

  // Arche et cérémonie
  [24, "ceremonie", "arche-ceremonie"],
  [62, "ceremonie", "allee-ceremonie"],
  [76, "ceremonie", "panneau-initiales"],
  [9, "ceremonie", "colonnes-orange"],

  // Centres de table et art de la table
  [5, "centres-table", "centre-hortensias"],
  [19, "centres-table", "centre-roses"],
  [28, "centres-table", "centre-gypsophile"],
  [49, "centres-table", "centre-pastel"],
  [11, "centres-table", "centre-pivoines"],
  [74, "centres-table", "centre-bougies"],
  [84, "centres-table", "centre-cristal"],
  [41, "centres-table", "art-de-table"],
  [1, "centres-table", "art-de-table"],
  [7, "centres-table", "centre-orange"],
  [16, "centres-table", "art-de-table"],
  [107, "centres-table", "art-de-table-vert"],

  // Bouquets de mariée
  [25, "bouquets", "bouquet-champetre"],
  [2, "bouquets", "bouquet-arums"],
  [13, "bouquets", "bouquet-blanc"],
  [50, "bouquets", "bouquet-roses"],
  [31, "bouquets", "bouquet-arums"],
  [47, "bouquets", "fleurs-fraiches"],

  // Baby shower
  [123, "baby-shower", "baby-shower-coin-photo"],
  [122, "baby-shower", "baby-shower-table"],
  [121, "baby-shower", "baby-shower-table"],
  [103, "baby-shower", "baby-shower-oursons"],
  [118, "baby-shower", "baby-shower-table"],

  // Anniversaires et fêtes
  [79, "anniversaires", "anniversaire-dolce-vita"],
  [81, "anniversaires", "anniversaire-dolce-vita"],
  [132, "anniversaires", "anniversaire-jungle"],
  [128, "anniversaires", "anniversaire-jungle"],
  [108, "anniversaires", "anniversaire-etang"],
  [106, "anniversaires", "anniversaire-etang"],
  [97, "anniversaires", "fete-piscine"],
  [133, "anniversaires", "brunch-agrumes"],

  // Saint-Valentin, galas, événements privés
  [110, "evenements-prives", "tapis-rouge"],
  [113, "evenements-prives", "gala-table"],
  [111, "evenements-prives", "saint-valentin-roses"],

  // Galerie des réalisations (une image par mariage, sans visages)
  [4, "galerie", "salle-arches"],
  [16, "galerie", "art-de-table"],
  [26, "galerie", "centre-pastel"],
  [30, "galerie", "centre-gypsophile"],
  [32, "galerie", "centre-pastel"],
  [34, "galerie", "noir-et-blanc"],
  [38, "galerie", "terrasse-arches"],
  [42, "galerie", "salle-arches"],
  [45, "galerie", "centre-roses"],
  [52, "galerie", "noir-et-blanc"],
  [56, "galerie", "centre-bougies"],
  [58, "galerie", "salle-arches"],
  [64, "galerie", "centre-roses"],
  [66, "galerie", "centre-bougies"],
  [71, "galerie", "art-de-table"],
  [73, "galerie", "centre-bougies"],
  [82, "galerie", "centre-cristal"],
  [22, "galerie", "noir-et-blanc"],
  [92, "galerie", "art-de-table"],
  [101, "galerie", "gateau-bleu-roi"],
];

await rm(path.join(ROOT, "public/media"), { recursive: true, force: true });
const sizes = {};
const count = {};
const byPost = {};
for (const [n, cat, style] of PICKS) {
  const k = `${cat}/${style}`;
  count[k] = (count[k] ?? 0) + 1;
  const name = `${style}-${String(count[k]).padStart(2, "0")}`;
  const file = path.join(ROOT, "assets", raw(n));
  await mkdir(path.join(ROOT, "assets", cat), { recursive: true });
  await mkdir(path.join(ROOT, "public/media", cat), { recursive: true });
  await copyFile(file, path.join(ROOT, "assets", cat, `${name}.jpg`));
  const max = cat === "hero" ? 2200 : 1600;
  const info = await sharp(file)
    .rotate()
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(ROOT, "public/media", cat, `${name}.jpg`));
  const p = `/media/${cat}/${name}.jpg`;
  sizes[p] = [info.width, info.height];
  (byPost[n] ??= []).push(p);
}

// Image de partage (Open Graph) 1200 × 630 : la salle aux arches et lustres
await sharp(path.join(ROOT, "assets", raw(40)))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

// Emplacements prévus pour les photos et vidéos qu'elle enverra
for (const d of ["a-recevoir/photos", "a-recevoir/videos", "a-recevoir/portrait"]) await mkdir(path.join(ROOT, "assets", d), { recursive: true });

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
await writeFile(path.join(ROOT, "assets/index-publications.json"), JSON.stringify(byPost, null, 1) + "\n");
console.log(`${PICKS.length} images prêtes`);

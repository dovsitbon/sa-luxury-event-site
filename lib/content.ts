import site from "@/data/site.json";
import annonces from "@/data/annonces.json";
import prestationsData from "@/data/prestations.json";
import realisationsData from "@/data/realisations.json";
import avis from "@/data/avis.json";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { altOf } from "@/lib/i18n";
import { img, type Img } from "@/lib/media";

type L10n = Record<Locale, string>;

/** Annonce du bandeau : la première active et non expirée (data/annonces.json). */
export function currentAnnouncement(lang: Locale, today: string) {
  const a = (annonces.items as (L10n & { id: string; active: boolean; until: string | null })[]).find((x) => x.active && (!x.until || x.until >= today));
  return a ? { id: a.id, text: a[lang] } : null;
}

export type Service = Img & { id: string; title: string; text: string; priceFrom: number | null; alt: string };
export const showPrices = prestationsData.showPrices as boolean;

export function services(lang: Locale, d: Dict): Service[] {
  return (prestationsData.items as { id: string; image: string; priceFrom: number | null; title: L10n; text: L10n }[]).map((s) => ({
    ...img(s.image),
    id: s.id,
    title: s.title[lang],
    text: s.text[lang],
    priceFrom: s.priceFrom,
    alt: altOf(d, s.image),
  }));
}

export type Work = { id: string; date: string; year: string; kind: string; title: string; place: string | null; guests: number | null; ambiance: string; image: Img; alt: string };

export function works(lang: Locale, d: Dict): Work[] {
  return (realisationsData.items as { id: string; date: string; kind: string; image: string; place: string | null; guests: number | null; title: L10n; ambiance: L10n }[])
    .map((w) => ({
      id: w.id,
      date: w.date,
      year: w.date.slice(0, 4),
      kind: w.kind,
      title: w.title[lang],
      place: w.place,
      guests: w.guests,
      ambiance: w.ambiance[lang],
      image: img(w.image),
      alt: altOf(d, w.image),
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export type Review = { name: string | null; date: string | null; source: string; rating: number | null; title: L10n | null; text: L10n };
export const reviews = avis.reviews as Review[];

/** Preuves affichées près des boutons : uniquement des chiffres réels (data/site.json). */
export function proofs(d: Dict, lang: Locale) {
  const nf = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB");
  const out: string[] = [];
  const weddings = site.stats.weddings as number | null;
  if (weddings) out.push(d.proof.weddings.replace("{n}", String(weddings)));
  out.push(d.proof.since.replace("{year}", String(site.founded)));
  out.push(d.proof.rating.replace("{rating}", String(site.mariagesNet.rating)));
  out.push(d.proof.followers.replace("{n}", nf.format(Math.floor(site.followers.count / 100) * 100)));
  return out;
}

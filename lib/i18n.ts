import fr from "@/locales/fr.json";
import en from "@/locales/en.json";
import type { Locale } from "@/lib/locales";

export { defaultLocale, dirOf, intlLocale, isLocale, locales, ogLocale, PAGES, type Locale, type PagePath } from "@/lib/locales";
export type Dict = typeof fr;

const dictionaries: Record<Locale, Dict> = { fr, en };

export const getDict = (lang: Locale): Dict => dictionaries[lang];

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

/** Texte alternatif d'une image de public/media, d'après son style (nom de fichier sans le numéro). */
export function altOf(d: Dict, src: string) {
  const key = src.split("/").pop()!.replace(/-\d+\.\w+$/, "") as keyof Dict["alt"];
  return d.alt[key] ?? d.alt["salle-arches"];
}

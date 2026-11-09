// Langues du site, sans les textes : importable côté client sans embarquer les dictionnaires.
// Pour ajouter plus tard une langue de droite à gauche : l'ajouter ici, à RTL, et créer locales/<code>.json
// (toute la mise en page utilise déjà des propriétés CSS logiques : ms/me, ps/pe, start/end).
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

const RTL: readonly string[] = ["ar", "he"];

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const dirOf = (lang: Locale): "ltr" | "rtl" => (RTL.includes(lang) ? "rtl" : "ltr");

export const ogLocale: Record<Locale, string> = { fr: "fr_FR", en: "en_GB" };
export const intlLocale: Record<Locale, string> = { fr: "fr-FR", en: "en-GB" };

/** Pages du site (même chemin dans chaque langue). */
export const PAGES = ["", "/legal"] as const;
export type PagePath = (typeof PAGES)[number];

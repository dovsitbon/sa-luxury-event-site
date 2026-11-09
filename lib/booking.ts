import site from "@/data/site.json";
import calendar from "@/data/dates.json";
import type { Dict } from "@/lib/i18n";
import { intlLocale, type Locale } from "@/lib/locales";

export const EVENT_TYPES = ["mariage", "baby", "anniversaire", "autre"] as const;
export const ELEMENTS = ["table-honneur", "coin-maries", "arche", "centres-table", "bouquet", "scenographie"] as const;
export type EventType = (typeof EVENT_TYPES)[number];
export type Element = (typeof ELEMENTS)[number];

export const takenDates = new Set<string>(calendar.taken as string[]);

export const isPhone = (v: string) => /^[+\d][\d\s\-().]{7,19}$/.test(v.trim());
export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const pinterestUrl = (v: string) => v.match(/https?:\/\/(?:[\w-]+\.)?(?:pinterest\.[a-z.]+|pin\.it)\/\S+/i)?.[0] ?? null;

export const money = (n: number, lang: Locale) => new Intl.NumberFormat(intlLocale[lang], { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

/** Date du jour au format AAAA-MM-JJ, heure de Paris. */
export function isoDay(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

export function formatDay(iso: string, lang: Locale, opts: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long", year: "numeric" }) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(intlLocale[lang], { ...opts, timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d || 1)));
}

export type QuoteRequest = {
  type: EventType | "";
  date: string;
  venue: string;
  city: string;
  guests: string;
  elements: Element[];
  mood: string;
  budget: string;
  name: string;
  phone: string;
  message: string;
};

/** Récapitulatif envoyé sur le WhatsApp de sA Luxury Event, dans la langue choisie sur le site. */
export function quoteMessage(q: QuoteRequest, lang: Locale, d: Dict) {
  const m = d.quote.message;
  const f = d.quote.fields;
  const c = lang === "fr" ? " :" : ":";
  const line = (label: string, value: string) => (value ? `${label}${c} ${value}` : "");
  const blocks = [
    [`*${m.title}*`],
    [line(m.type, q.type ? f.types[q.type] : ""), line(m.date, q.date ? formatDay(q.date, lang) : ""), line(m.venue, q.venue), line(m.city, q.city), line(m.guests, q.guests)],
    [line(m.elements, q.elements.map((e) => f.elementsOptions[e]).join(", ")), line(m.mood, q.mood), line(m.budget, q.budget)],
    [line(m.name, q.name), line(m.phone, q.phone), line(m.notes, q.message)],
    [m.closing],
  ];
  return blocks.map((b) => b.filter(Boolean).join("\n")).filter(Boolean).join("\n\n");
}

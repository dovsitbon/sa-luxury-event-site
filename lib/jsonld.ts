import type { Metadata } from "next";
import site from "@/data/site.json";
import { defaultLocale, getDict, locales, ogLocale, type Locale, type PagePath } from "@/lib/i18n";
import { reviews, services } from "@/lib/content";

const business = `${site.url}/#business`;

/** Métadonnées d'une page : titre, description, canonique, hreflang, Open Graph. */
export function pageMeta(lang: Locale, path: PagePath, title: string, description: string): Metadata {
  const url = `/${lang}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])), "x-default": `/${defaultLocale}${path}` },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: getDict(lang).alt["salle-arches"] }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}

const cities = [
  { "@type": "City", name: "Montpellier" },
  { "@type": "City", name: "Nice" },
  { "@type": "City", name: "Perpignan" },
  { "@type": "AdministrativeArea", name: "Hérault" },
  { "@type": "AdministrativeArea", name: "Occitanie" },
];

/** Décoratrice d'événements (EventPlanner / LocalBusiness), sans adresse publique : zone desservie. */
function businessNode(lang: Locale) {
  const d = getDict(lang);
  const rated = reviews.filter((r) => r.rating);
  return {
    "@type": ["EventPlanner", "LocalBusiness"],
    "@id": business,
    name: site.name,
    alternateName: ["SA Luxury Event", "sA Luxury Events", "sa.luxury.event"],
    slogan: d.hero.title,
    description: d.meta.description,
    url: `${site.url}/${lang}`,
    image: [`${site.url}/og.jpg`, `${site.url}/media/hero/salle-arches-01.jpg`],
    logo: `${site.url}/logo.svg`,
    telephone: site.phone,
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    address: { "@type": "PostalAddress", addressLocality: "Montpellier", addressRegion: "Occitanie", addressCountry: "FR" },
    areaServed: cities,
    foundingDate: String(site.founded),
    knowsLanguage: ["fr", "en"],
    sameAs: [site.instagram],
    contactPoint: { "@type": "ContactPoint", telephone: site.phone, contactType: "customer service", availableLanguage: ["French", "English"] },
    ...(rated.length
      ? {
          aggregateRating: { "@type": "AggregateRating", ratingValue: site.mariagesNet.rating, bestRating: 5, ratingCount: rated.length },
          review: rated.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name ?? d.reviews.anonymous },
            ...(r.date ? { datePublished: r.date } : {}),
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            reviewBody: r.text.fr,
            inLanguage: "fr",
          })),
        }
      : {}),
  };
}

function serviceNodes(lang: Locale) {
  const d = getDict(lang);
  const wedding = {
    "@type": "Service",
    "@id": `${site.url}/#decoration-mariage`,
    name: lang === "fr" ? "Décoration de mariage et scénographie sur mesure" : "Wedding decoration and bespoke event styling",
    serviceType: lang === "fr" ? "Décoration de mariage" : "Wedding decoration",
    provider: { "@id": business },
    areaServed: cities,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: d.services.title,
      itemListElement: services(lang, d).map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.text } })),
    },
  };
  const others = d.events.items.map((e) => ({
    "@type": "Service",
    name: lang === "fr" ? `Décoration ${e.title.toLowerCase()}` : `${e.title} decoration`,
    serviceType: e.title,
    description: e.text,
    provider: { "@id": business },
    areaServed: cities,
  }));
  return [wedding, ...others];
}

function faqNode(lang: Locale) {
  const d = getDict(lang);
  return { "@type": "FAQPage", mainEntity: d.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
}

export function homeJsonLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: [...locales], publisher: { "@id": business } },
      businessNode(lang),
      ...serviceNodes(lang),
      faqNode(lang),
    ],
  };
}

export const ldScript = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

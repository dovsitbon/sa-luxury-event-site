import Image from "next/image";
import site from "@/data/site.json";
import { Reveal } from "@/components/Reveal";
import { Sparkle } from "@/components/Logo";
import { ArrowIcon, PlusIcon, WhatsAppIcon } from "@/components/icons";
import { proofs, reviews, services, showPrices } from "@/lib/content";
import { altOf, fill, type Dict, type Locale } from "@/lib/i18n";
import { formatDay, money, waLink } from "@/lib/booking";
import { img } from "@/lib/media";

/* ——— Petites pièces communes ——— */

export function SectionHead({ eyebrow, title, lead, id, center = false }: { eyebrow: string; title: string; lead?: string; id?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="display mt-5 text-[clamp(2.2rem,5vw,3.6rem)]">
        {title}
      </h2>
      {lead && <p className={`lead mt-6 ${center ? "mx-auto" : ""} max-w-xl`}>{lead}</p>}
    </Reveal>
  );
}

/** Preuves réelles (data/site.json), posées près des boutons. */
export function Proof({ d, lang, className = "" }: { d: Dict; lang: Locale; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-muted ${className}`}>
      {proofs(d, lang).map((p, i) => (
        <li key={p} className="flex items-center gap-3">
          {i > 0 && (
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
          )}
          {p}
        </li>
      ))}
    </ul>
  );
}

function Photo({ src, alt, sizes, className = "", priority = false, ratio = "aspect-[4/5]" }: { src: string; alt: string; sizes: string; className?: string; priority?: boolean; ratio?: string }) {
  const i = img(src);
  return (
    <div className={`shine relative ${ratio} overflow-hidden bg-champagne/40 ${className}`}>
      <Image src={i.src} alt={alt} fill sizes={sizes} quality={70} priority={priority} className="object-cover" />
    </div>
  );
}

/* ——— Hero ——— */

export function Hero({ d, lang }: { d: Dict; lang: Locale }) {
  const hero = "/media/hero/salle-arches-01.jpg";
  return (
    <section className="relative" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-[1400px] md:min-h-[calc(100svh-5rem)] md:grid-cols-[1fr_1.05fr]">
        <div className="relative order-2 flex flex-col justify-center px-5 pt-12 pb-16 md:order-1 md:px-10 md:py-20 lg:ps-16">
          <p className="eyebrow rise">{d.hero.eyebrow}</p>
          <h1 id="hero-title" className="display rise mt-6 max-w-[11ch] text-[clamp(3rem,7.4vw,6.2rem)]" style={{ animationDelay: "0.1s" }}>
            {d.hero.title}
          </h1>
          <p className="lead rise mt-7 max-w-md" style={{ animationDelay: "0.25s" }}>
            {d.hero.lead}
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
            <a href="#devis" className="btn-solid">
              {d.hero.cta}
            </a>
            <a href="#realisations" className="btn-line">
              {d.hero.ctaWork}
            </a>
          </div>
          <Proof d={d} lang={lang} className="rise mt-8" />
        </div>
        <div className="relative order-1 aspect-[6/5] overflow-hidden md:order-2 md:aspect-auto">
          <Image src={hero} alt={altOf(d, hero)} fill priority sizes="(min-width: 768px) 52vw, 100vw" quality={75} className="drift object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ——— Cartes portrait par type d'événement ——— */

const CARD_IMAGES: Record<string, string> = {
  wedding: "/media/galerie/salle-arches-03.jpg",
  baby: "/media/baby-shower/baby-shower-table-01.jpg",
  birthday: "/media/anniversaires/anniversaire-jungle-01.jpg",
  private: "/media/evenements-prives/gala-table-01.jpg",
};

export function EventCards({ d }: { d: Dict }) {
  return (
    <section id="mariages" className="px-5 py-20 md:px-10 md:py-28" aria-labelledby="cards-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow={d.cards.eyebrow} title={d.cards.title} id="cards-title" />
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-16 lg:grid-cols-4 lg:gap-x-6">
          {d.cards.items.map((c, i) => (
            <Reveal as="li" key={c.key} delay={i * 0.08}>
              <a href={c.href} className="group block">
                <div className="relative">
                  <Photo src={CARD_IMAGES[c.key]} alt={altOf(d, CARD_IMAGES[c.key])} sizes="(min-width: 1024px) 24vw, 46vw" ratio="aspect-[3/4]" />
                  <Sparkle className="glint absolute end-4 top-4 h-4 w-4 text-ivory" />
                </div>
                <h3 className="display mt-5 text-[1.7rem] md:text-[2rem]">{c.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted">{c.text}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ——— Prestations ——— */

export function Services({ d, lang }: { d: Dict; lang: Locale }) {
  return (
    <section id="prestations" className="border-t border-line bg-pearl px-5 py-20 md:px-10 md:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow={d.services.eyebrow} title={d.services.title} lead={d.services.lead} id="services-title" />
        <ul className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {services(lang, d).map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 0.08}>
              <Photo src={s.src} alt={s.alt} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw" />
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="display text-[1.75rem]">{s.title}</h3>
                {showPrices && s.priceFrom !== null && <p className="shrink-0 text-[0.875rem] text-gold-ink">{fill(d.services.from, { price: money(s.priceFrom, lang) })}</p>}
              </div>
              <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-16 flex flex-col items-start gap-5 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <Proof d={d} lang={lang} />
          <a href="#devis" className="btn-solid">
            {d.services.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— Trois blocs alternés ——— */

const BLOCK_IMAGES = ["/media/hero/table-pivoines-01.jpg", "/media/coin-maries/salon-arches-01.jpg", "/media/anniversaires/anniversaire-etang-01.jpg"];

export function Blocks({ d }: { d: Dict }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" aria-label={d.blocks.items[0].title}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-24 md:gap-32">
        {d.blocks.items.map((b, i) => (
          <div key={b.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
            <Reveal className={i % 2 ? "md:order-2" : ""}>
              <Photo src={BLOCK_IMAGES[i]} alt={altOf(d, BLOCK_IMAGES[i])} sizes="(min-width: 768px) 46vw, 100vw" />
            </Reveal>
            <Reveal delay={0.1} className="max-w-md">
              <p className="eyebrow">{b.eyebrow}</p>
              <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)]">{b.title}</h2>
              <p className="lead mt-6">{b.text}</p>
              <a href={b.href} className="btn-line mt-9">
                {b.cta}
                <ArrowIcon />
              </a>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ——— Autres événements ——— */

const EVENT_IMAGES: Record<string, string> = {
  baby: "/media/baby-shower/baby-shower-coin-photo-01.jpg",
  birthday: "/media/anniversaires/anniversaire-dolce-vita-01.jpg",
  private: "/media/evenements-prives/tapis-rouge-01.jpg",
  engagement: "/media/galerie/terrasse-arches-01.jpg",
};

export function Events({ d }: { d: Dict }) {
  return (
    <section id="evenements" className="border-t border-line bg-pearl px-5 py-20 md:px-10 md:py-28" aria-labelledby="events-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow={d.events.eyebrow} title={d.events.title} lead={d.events.lead} id="events-title" />
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {d.events.items.map((e, i) => (
            <Reveal as="li" key={e.key} delay={i * 0.08}>
              <Photo src={EVENT_IMAGES[e.key]} alt={altOf(d, EVENT_IMAGES[e.key])} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw" ratio="aspect-[3/4]" />
              <h3 className="display mt-6 text-[1.6rem]">{e.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{e.text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-14">
          <a href="#devis" className="btn-solid">
            {d.events.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— À propos ——— */

export function About({ d }: { d: Dict }) {
  const photo = "/media/bouquets/bouquet-arums-02.jpg";
  return (
    <section id="a-propos" className="px-5 py-20 md:px-10 md:py-32" aria-labelledby="about-title">
      {/* À REMPLIR : portrait de la fondatrice (assets/a-recevoir/portrait/), son prénom (data/site.json → founderName) et son histoire */}
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[0.9fr_1fr] md:gap-24">
        <Reveal>
          <Photo src={photo} alt={d.about.photoAlt} sizes="(min-width: 768px) 42vw, 100vw" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">{d.about.eyebrow}</p>
          <h2 id="about-title" className="display mt-5 text-[clamp(2.1rem,4.4vw,3.3rem)]">
            {d.about.title}
          </h2>
          <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.85] text-muted">
            {d.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <figure className="mt-10 border-s border-gold ps-6">
            <blockquote className="display text-[1.55rem] italic leading-snug">{d.about.quote}</blockquote>
            <figcaption className="mt-3 text-[0.8125rem] text-muted">{d.about.quoteBy}</figcaption>
          </figure>
          <a href="#devis" className="btn-line mt-10">
            {d.about.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— Comment ça marche ——— */

export function Process({ d }: { d: Dict }) {
  return (
    <section id="methode" className="border-t border-line px-5 py-20 md:px-10 md:py-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow={d.process.eyebrow} title={d.process.title} id="process-title" />
        <ol className="mt-14 grid gap-10 md:grid-cols-5 md:gap-8">
          {d.process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="border-t border-line pt-6">
              <span className="num text-[0.875rem] text-gold-ink">0{i + 1}</span>
              <h3 className="display mt-4 text-[1.5rem]">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ——— Avis réels (data/avis.json) ——— */

export function Reviews({ d, lang }: { d: Dict; lang: Locale }) {
  return (
    <section id="avis" className="border-t border-line bg-pearl px-5 py-20 md:px-10 md:py-28" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow={d.reviews.eyebrow} title={d.reviews.title} id="reviews-title" />
        {reviews.length === 0 ? (
          <div className="mt-12">{/* À REMPLIR avec de vrais avis clients (data/avis.json) */}</div>
        ) : (
          <ul className="mt-12 columns-1 gap-6 md:mt-16 md:columns-2 lg:columns-3">
            {reviews.map((r, i) => {
              const text = r.text[lang];
              const long = text.length > 320;
              const meta = [r.date && r.date.length === 10 ? fill(d.reviews.weddingOn, { date: formatDay(r.date, lang, { day: "numeric", month: "long", year: "numeric" }) }) : r.date ? formatDay(r.date, lang, { month: "long", year: "numeric" }) : null, fill(d.reviews.via, { source: r.source })].filter(Boolean);
              return (
                <Reveal as="li" key={i} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid bg-ivory p-7 md:p-9">
                  <figure>
                    {r.rating && (
                      <p className="num text-[0.8125rem] text-gold-ink">{r.rating}/5</p>
                    )}
                    {r.title && <p className="display mt-4 text-[1.35rem]">{r.title[lang]}</p>}
                    <blockquote className="mt-4 text-[0.9375rem] leading-[1.85] text-ink/85" lang="fr">
                      {long ? (
                        <details className="group/more">
                          <summary className="cursor-pointer list-none">
                            <span>{text.slice(0, text.lastIndexOf(" ", 300))}…</span>{" "}
                            <span className="text-gold-ink underline underline-offset-4 group-open/more:hidden">{d.reviews.readMore}</span>
                          </summary>
                          <p className="mt-0">{text.slice(text.lastIndexOf(" ", 300))}</p>
                        </details>
                      ) : (
                        <p>{text}</p>
                      )}
                    </blockquote>
                    <figcaption className="mt-6 text-[0.8125rem] text-muted">
                      <span className="text-ink">{r.name ?? d.reviews.anonymous}</span>
                      {meta.length > 0 && <> · {meta.join(" · ")}</>}
                      {lang !== "fr" && <span className="mt-1 block italic">{d.reviews.translated}</span>}
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

/* ——— Zone d'intervention ——— */

export function Zone({ d }: { d: Dict }) {
  return (
    <section id="zone" className="px-5 py-20 md:px-10 md:py-28" aria-labelledby="zone-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead eyebrow={d.zone.eyebrow} title={d.zone.title} lead={d.zone.lead} id="zone-title" />
        <ul className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3">
          {d.zone.cities.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 0.08} className="border-t border-gold/60 pt-6">
              <h3 className="display text-[2rem]">{c.name}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{c.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ——— FAQ ——— */

export function Faq({ d }: { d: Dict }) {
  return (
    <section id="faq" className="border-t border-line px-5 py-20 md:px-10 md:py-28" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <SectionHead eyebrow={d.faq.eyebrow} title={d.faq.title} id="faq-title" />
        <Reveal>
          <ul className="border-t border-line">
            {d.faq.items.map((f) => (
              <li key={f.q} className="border-b border-line">
                <details className="group">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.0625rem]">
                    {f.q}
                    <PlusIcon className="h-4 w-4 shrink-0 text-gold-ink transition-transform duration-500 group-open:rotate-45" />
                  </summary>
                  <p className="pb-6 text-[0.9375rem] leading-relaxed text-muted">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— Contact rapide sous le formulaire ——— */

export function DirectContact({ d, lang }: { d: Dict; lang: Locale }) {
  return (
    <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9375rem] text-muted">
      <span>{d.quote.orCall}</span>
      <a href={`tel:${site.phone}`} className="link-line text-ink" dir="ltr">
        {lang === "fr" ? site.phoneDisplay : site.phoneIntl}
      </a>
      <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink hover:text-gold-ink">
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </p>
  );
}

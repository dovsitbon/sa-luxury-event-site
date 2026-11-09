import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Works } from "@/components/Works";
import { QuoteForm } from "@/components/QuoteForm";
import { About, Blocks, DirectContact, EventCards, Events, Faq, Hero, Process, Proof, Reviews, SectionHead, Services, Zone } from "@/components/sections";
import { works } from "@/lib/content";
import { getDict, isLocale } from "@/lib/i18n";
import { homeJsonLd, ldScript, pageMeta } from "@/lib/jsonld";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return pageMeta(lang, "", d.meta.title, d.meta.description);
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldScript(homeJsonLd(lang))} />
      <Hero d={d} lang={lang} />
      <EventCards d={d} />
      <Services d={d} lang={lang} />
      <Blocks d={d} />
      <section id="realisations" className="border-t border-line px-5 py-20 md:px-10 md:py-28" aria-labelledby="work-title">
        <div className="mx-auto max-w-[1400px]">
          <SectionHead eyebrow={d.work.eyebrow} title={d.work.title} lead={d.work.lead} id="work-title" />
          <Works items={works(lang, d)} />
        </div>
      </section>
      <Events d={d} />
      <About d={d} />
      <Process d={d} />
      <Reviews d={d} lang={lang} />
      <Zone d={d} />
      <Faq d={d} />
      <section id="devis" className="border-t border-line bg-pearl px-5 py-20 md:px-10 md:py-28" aria-labelledby="quote-title">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <SectionHead eyebrow={d.quote.eyebrow} title={d.quote.title} lead={d.quote.lead} id="quote-title" />
            <Proof d={d} lang={lang} className="mt-8 max-w-sm" />
            <DirectContact d={d} lang={lang} />
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

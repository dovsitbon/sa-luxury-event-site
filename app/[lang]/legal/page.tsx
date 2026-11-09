import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDict, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/jsonld";

export async function generateMetadata({ params }: PageProps<"/[lang]/legal">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDict(lang).meta;
  return { ...pageMeta(lang, "/legal", m.legalTitle, m.legalDescription), robots: { index: false, follow: true } };
}

export default async function Legal({ params }: PageProps<"/[lang]/legal">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  const p = d.legal;
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="display text-[2.8rem] md:text-[3.6rem]">{p.title}</h1>
        <div className="mt-12 space-y-10 border-t border-line pt-10">
          {p.sections.map((s) => (
            <div key={s.h}>
              <h2 className="eyebrow">{s.h}</h2>
              <p className="mt-3 leading-[1.85] text-muted">{s.p}</p>
            </div>
          ))}
        </div>
        <Link href={`/${lang}`} className="nav-link link-line mt-14 inline-block">
          {p.back}
        </Link>
      </div>
    </section>
  );
}

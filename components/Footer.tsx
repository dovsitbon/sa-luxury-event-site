import Link from "next/link";
import site from "@/data/site.json";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { LogoFull } from "@/components/Logo";
import type { Dict, Locale } from "@/lib/i18n";
import { waLink } from "@/lib/booking";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const year = new Date().getFullYear();
  const home = `/${lang}`;
  const nav = [
    { href: `${home}#mariages`, label: d.nav.weddings },
    { href: `${home}#prestations`, label: d.nav.services },
    { href: `${home}#realisations`, label: d.nav.work },
    { href: `${home}#evenements`, label: d.nav.events },
    { href: `${home}#a-propos`, label: d.nav.about },
    { href: `${home}#devis`, label: d.nav.book },
  ];
  return (
    <footer id="contact" className="border-t border-line bg-pearl text-ink">
      <div className="mx-auto grid max-w-[1400px] items-start gap-14 px-5 pt-20 pb-12 md:grid-cols-3 md:px-10 md:pt-24">
        <div className="order-first md:order-none md:col-start-2">
          <LogoFull />
          <p className="mx-auto mt-6 max-w-xs text-center text-[0.9375rem] leading-relaxed text-muted">{d.footer.tagline}</p>
        </div>
        <div className="md:col-start-1 md:row-start-1">
          <p className="eyebrow">{d.nav.contact}</p>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            <li>
              <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-3 hover:text-gold-ink">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="inline-flex min-h-8 items-center gap-3 hover:text-gold-ink">
                <PhoneIcon className="h-4 w-4" />
                <span dir="ltr">{lang === "fr" ? site.phoneDisplay : site.phoneIntl}</span>
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-3 hover:text-gold-ink">
                <InstagramIcon className="h-4 w-4" />
                <span dir="ltr">{site.instagramHandle}</span>
              </a>
            </li>
            <li className="pt-2 text-muted">
              <span className="text-ink">{d.footer.zone}</span> · {d.footer.zoneText}
            </li>
          </ul>
        </div>
        <div className="md:text-end">
          <p className="eyebrow">{d.footer.nav}</p>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-8 items-center hover:text-gold-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-line px-5 py-6 pb-28 text-[0.8125rem] text-muted md:flex-row md:justify-between md:px-10 md:pb-6">
        <p>
          © {year} <span translate="no">{site.name}</span> · {d.footer.rights}
        </p>
        <p className="flex flex-wrap gap-x-4">
          <span>{d.footer.photos}</span>
          <Link href={`${home}/legal`} className="underline-offset-4 hover:underline">
            {d.footer.legal}
          </Link>
        </p>
      </div>
    </footer>
  );
}

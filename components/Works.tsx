"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import site from "@/data/site.json";
import { InstagramIcon } from "@/components/icons";
import { Lightbox } from "@/components/Lightbox";
import { useLocale } from "@/components/providers";
import type { Work } from "@/lib/content";

/** Réalisations en grille (lieu, année, ambiance, invités), filtrables par année ; clic = photo en grand. */
export function Works({ items }: { items: Work[] }) {
  const { d } = useLocale();
  const w = d.work;
  const years = useMemo(() => [...new Set(items.map((i) => i.year))].sort((a, b) => b.localeCompare(a)), [items]);
  const [year, setYear] = useState<string | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const shown = year ? items.filter((i) => i.year === year) : items;
  const lightboxItems = shown.map((s) => ({ ...s.image, alt: s.alt }));

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label={w.filterLabel}>
        {[null, ...years].map((y) => (
          <button key={y ?? "all"} type="button" aria-pressed={year === y} onClick={() => setYear(y)} className="chip">
            {y ?? w.all}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-14 lg:grid-cols-4" aria-live="polite">
        {shown.map((s, i) => (
          <li key={s.id} className="fade-in">
            <button type="button" onClick={() => setOpen(i)} className="group block w-full text-start" aria-label={`${w.open} : ${s.title}`}>
              <div className="shine relative aspect-[4/5] overflow-hidden bg-champagne/40">
                <Image src={s.image.src} alt={s.alt} fill sizes="(min-width: 1024px) 24vw, (min-width: 768px) 31vw, 46vw" quality={70} className="object-cover" />
              </div>
              <p className="mt-4 text-[0.75rem] tracking-[0.18em] text-gold-ink uppercase">
                {[s.year, s.kind === "fiancailles" ? w.engagement : null, s.place].filter(Boolean).join(" · ")}
              </p>
              <h3 className="display mt-2 text-[1.35rem] md:text-[1.55rem]">{s.title}</h3>
              <p className="mt-1.5 text-[0.875rem] leading-snug text-muted">
                {s.ambiance}
                {s.guests ? ` · ${w.guests.replace("{n}", String(s.guests))}` : ""}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-line mt-14">
        <InstagramIcon className="h-4 w-4" />
        {w.more}
      </a>

      <Lightbox items={lightboxItems} index={open} onIndex={setOpen} labels={w.lightbox} />
    </>
  );
}

"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Sparkle } from "@/components/Logo";

export const INTRO_KEY = "saluxury-intro";
const at = (d: number, extra: Record<string, string> = {}) => ({ "--d": `${d}s`, ...extra }) as CSSProperties;

// Étincelles au bout de la baguette : décalage x/y (px), retard, taille
const SPARKS: [number, number, number, number][] = [
  [0, 0, 0.95, 11],
  [14, -12, 1.02, 7],
  [-10, -16, 1.08, 6],
  [18, 8, 1.12, 5],
];

/**
 * Ouverture (1,5 s, une fois par session, CSS dans globals.css) : fond blanc nacré, une fine arche florale se dessine
 * au trait doré, « sA » apparaît au centre puis « LUXURY EVENT », quelques étincelles au bout d'une baguette, fondu sur le hero.
 * Bouton « Passer » ; rien ne s'affiche si prefers-reduced-motion (script du layout).
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center overflow-hidden text-ink">
      <div className="relative flex h-[min(70vh,440px)] w-[min(78vw,320px)] flex-col items-center justify-center">
        {/* Arche florale au trait : l'arc, puis des feuilles et petites fleurs le long des montants */}
        <svg viewBox="0 0 320 440" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <path className="intro-stroke" style={at(0)} pathLength={1} stroke="#c7a25e" strokeWidth="1" d="M40 440V170C40 96 94 36 160 36s120 60 120 134v270" />
          <path className="intro-stroke" style={at(0.12)} pathLength={1} stroke="#c7a25e" strokeWidth="0.7" d="M54 440V172c0-66 48-120 106-120s106 54 106 120v268" />
          <g className="intro-stroke-group" style={at(0.35)} stroke="#c7a25e" strokeWidth="0.8">
            <path pathLength={1} className="intro-stroke" style={at(0.35)} d="M40 300c-14-6-22-18-22-32 14 4 22 16 22 32ZM40 250c12-8 24-8 32 0-12 8-24 8-32 0ZM44 200c-14-4-24-14-26-28 14 2 24 12 26 28Z" />
            <path pathLength={1} className="intro-stroke" style={at(0.42)} d="M280 300c14-6 22-18 22-32-14 4-22 16-22 32ZM280 250c-12-8-24-8-32 0 12 8 24 8 32 0ZM276 200c14-4 24-14 26-28-14 2-24 12-26 28Z" />
            <path pathLength={1} className="intro-stroke" style={at(0.5)} d="M96 66c-4-14 0-26 10-32 4 12 0 24-10 32ZM224 66c4-14 0-26-10-32-4 12 0 24 10 32ZM160 36c-8-10-8-22 0-30 8 8 8 20 0 30Z" />
          </g>
          <g className="intro-fade" style={at(0.6)} fill="#c7a25e">
            <circle cx="40" cy="226" r="3" />
            <circle cx="280" cy="226" r="3" />
            <circle cx="128" cy="44" r="2.4" />
            <circle cx="192" cy="44" r="2.4" />
          </g>
          {/* Baguette au trait, posée en bas à droite de l'arche */}
          <path className="intro-stroke" style={at(0.75)} pathLength={1} stroke="#c7a25e" strokeWidth="1" strokeLinecap="round" d="M232 396 268 352" />
        </svg>

        {SPARKS.map(([x, y, d, s], i) => (
          <span key={i} className="intro-spark absolute" style={at(d, { left: `calc(${(268 / 320) * 100}% + ${x}px)`, top: `calc(${(352 / 440) * 100}% + ${y}px)` })} aria-hidden="true">
            <Sparkle className="block -translate-x-1/2 -translate-y-1/2" style={{ width: s, height: s }} />
          </span>
        ))}

        <p className="intro-fade font-[family-name:var(--font-cormorant)] text-[clamp(3.6rem,14vw,5.2rem)] leading-none font-light" style={at(0.3)} translate="no">
          sA
        </p>
        <p className="intro-fade mt-4 ps-[0.5em] font-[family-name:var(--font-jost)] text-[0.75rem] leading-none tracking-[0.5em] text-gold-ink" style={at(0.6)} translate="no">
          LUXURY EVENT
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(INTRO_KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="nav-link absolute end-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}

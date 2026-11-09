import type { CSSProperties } from "react";

/**
 * Logo sA Luxury Event, redessiné en SVG d'après sa photo de profil Instagram :
 * un grand « A » à empattements traversé d'un « S » calligraphié, puis « LUXURY EVENT ».
 * Glyphes de Cormorant Garamond (A droit, S italique) vectorisés. Pour remplacer le logo :
 * changer ces composants, app/icon.svg (favicon) et public/logo.svg.
 */
export const A_PATH =
  "M194 275 204 295H469L476 275ZM699 12Q703 12 703.0 6.0Q703 0 699 0Q670 0 640.0 2.0Q610 4 582 4Q551 4 528.0 2.0Q505 0 477 0Q473 0 473.0 6.0Q473 12 477 12Q530 12 543.0 27.5Q556 43 536 86L314 555L339 586L145 127Q120 66 142.0 39.0Q164 12 229 12Q234 12 234.0 6.0Q234 0 229 0Q199 0 174.0 2.0Q149 4 111 4Q75 4 53.5 2.0Q32 0 1 0Q-3 0 -3.0 6.0Q-3 12 1 12Q28 12 48.0 22.5Q68 33 85.5 59.5Q103 86 124 136L335 634Q337 637 342.0 637.0Q347 637 348 634L584 137Q607 88 625.0 60.5Q643 33 660.5 22.5Q678 12 699 12Z";
export const S_PATH =
  "M181 -12Q150 -12 120.0 -4.5Q90 3 56 22Q52 25 51.0 29.5Q50 34 50 41L60 171Q60 176 65.5 176.0Q71 176 71 171Q69 131 81.0 92.0Q93 53 123.5 27.5Q154 2 205 2Q235 2 264.0 13.5Q293 25 315.5 51.0Q338 77 346 122Q355 170 340.5 202.5Q326 235 297.5 259.0Q269 283 237 304Q206 325 179.0 348.0Q152 371 137.5 402.5Q123 434 131 481Q141 533 171.5 567.5Q202 602 244.0 619.0Q286 636 329 636Q353 636 379.5 630.5Q406 625 434 612Q447 605 446 595L434 489Q434 485 428.0 485.0Q422 485 422 489Q422 518 414.0 549.0Q406 580 383.5 601.5Q361 623 315 623Q274 623 247.0 605.0Q220 587 204.5 560.0Q189 533 184 504Q176 462 190.5 432.5Q205 403 232.5 381.0Q260 359 291 338Q324 317 353.0 293.5Q382 270 397.5 237.5Q413 205 405 157Q397 111 368.5 72.5Q340 34 293.0 11.0Q246 -12 181 -12Z";

/** Monogramme A + S (viewBox 0 0 720 700). */
export function Mark({ className = "", title, style }: { className?: string; title?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="-10 -30 730 720" className={className} style={style} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <g transform="translate(0,660) scale(1,-1)" fill="currentColor">
        <path d={A_PATH} />
        <path d={S_PATH} transform="translate(95,-40) scale(1.12)" />
      </g>
    </svg>
  );
}

/** Petite étincelle au trait (étoile à quatre branches). */
export function Sparkle({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
      <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z" />
    </svg>
  );
}

/** Marque du header : monogramme + « LUXURY EVENT ». */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`} translate="no">
      <Mark className="h-9 w-auto text-ink md:h-11" />
      <span className="flex flex-col items-start leading-none">
        <span className="font-[family-name:var(--font-cormorant)] text-[1.35rem] font-light tracking-[0.02em] md:text-[1.6rem]">sA</span>
        <span className="mt-1 ps-[0.1em] font-[family-name:var(--font-jost)] text-[0.5rem] tracking-[0.42em] text-gold-ink md:text-[0.5625rem]">LUXURY EVENT</span>
      </span>
    </span>
  );
}

/** Logo complet (pied de page). */
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`} translate="no">
      <Mark className="h-20 w-auto text-ink" />
      <span className="mt-4 font-[family-name:var(--font-cormorant)] text-[2rem] leading-none font-light">sA</span>
      <span className="mt-3 ps-[0.5em] font-[family-name:var(--font-jost)] text-[0.75rem] leading-none tracking-[0.5em] text-gold-ink">LUXURY EVENT</span>
    </div>
  );
}

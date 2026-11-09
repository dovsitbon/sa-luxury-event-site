"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { useLocale } from "@/components/providers";
import { ELEMENTS, EVENT_TYPES, isoDay, isPhone, pinterestUrl, quoteMessage, takenDates, waLink, type Element, type QuoteRequest } from "@/lib/booking";
import { paymentsEnabled } from "@/lib/payment";

type Errors = Partial<Record<"type" | "date" | "city" | "name" | "phone", string>>;
const EMPTY: QuoteRequest = { type: "", date: "", venue: "", city: "", guests: "", elements: [], mood: "", budget: "", name: "", phone: "", message: "" };

function Field({ id, label, hint, error, children, className = "" }: { id: string; label: string; hint?: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label}
        {hint && <span className="ms-2 tracking-normal normal-case opacity-80">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[0.8125rem] text-gold-ink" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Demande de devis en 3 étapes (événement → décor → coordonnées). À l'envoi, le récapitulatif est ouvert dans WhatsApp
 * (33659868674), rédigé dans la langue du site. Rien n'est stocké. Acompte en ligne prévu mais désactivé (lib/payment.ts).
 */
export function QuoteForm() {
  const { lang, d } = useLocale();
  const q = d.quote;
  const f = q.fields;
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [v, setV] = useState<QuoteRequest>(EMPTY);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const top = useRef<HTMLDivElement>(null);

  const set = <K extends keyof QuoteRequest>(k: K, val: QuoteRequest[K]) => setV((s) => ({ ...s, [k]: val }));
  const toggle = (e: Element) => set("elements", v.elements.includes(e) ? v.elements.filter((x) => x !== e) : [...v.elements, e]);

  function validate(s: number): Errors {
    const e: Errors = {};
    if (s === 0) {
      if (!v.type) e.type = q.errors.type;
      if (!v.date) e.date = q.errors.date;
      if (!v.city.trim() && !v.venue.trim()) e.city = q.errors.city;
    }
    if (s === 2) {
      if (!v.name.trim()) e.name = q.errors.name;
      if (!isPhone(v.phone)) e.phone = q.errors.phone;
    }
    return e;
  }

  function go(next: number) {
    if (next > step) {
      const e = validate(step);
      setErrors(e);
      if (Object.keys(e).length) {
        const first = Object.keys(e)[0];
        document.getElementById(id(first))?.focus();
        return;
      }
    }
    setStep(next);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submit(ev: FormEvent) {
    ev.preventDefault();
    if (step < 2) return go(step + 1);
    const e = validate(2);
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(id(Object.keys(e)[0]))?.focus();
      return;
    }
    const url = waLink(quoteMessage(v, lang, d));
    setSentUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const invalid = (k: keyof Errors) => (errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${id(k)}-error` } : {});
  const pin = pinterestUrl(v.mood);
  const taken = v.date && takenDates.has(v.date);

  if (sentUrl) {
    return (
      <div className="fade-in border border-line bg-ivory p-8 md:p-12" role="status">
        <CheckIcon className="h-6 w-6 text-gold-ink" />
        <p className="display mt-5 text-[2rem]">{q.sentTitle}</p>
        <p className="lead mt-4">{q.sentText}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn-solid">
            <WhatsAppIcon className="h-4 w-4" />
            {q.sentAgain}
          </a>
          {paymentsEnabled() && (
            <button type="button" onClick={() => window.location.assign("/api/checkout")} className="btn-line">
              {q.deposit}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div ref={top} className="scroll-mt-32">
      <ol className="flex gap-6 border-b border-line pb-4 text-[0.75rem] tracking-[0.18em] uppercase" aria-label={q.eyebrow}>
        {q.steps.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined} className={i === step ? "text-ink" : "text-muted/70"}>
            <span className="num me-2 tracking-normal">0{i + 1}</span>
            <span className={i === step ? "" : "hidden sm:inline"}>{s}</span>
          </li>
        ))}
      </ol>

      <form onSubmit={submit} noValidate className="mt-10">
        {step === 0 && (
          <div className="fade-in grid gap-8 sm:grid-cols-2">
            <fieldset className="sm:col-span-2">
              <legend className="label">{f.type}</legend>
              <div className="mt-4 flex flex-wrap gap-2" id={id("type")} tabIndex={-1} {...invalid("type")}>
                {EVENT_TYPES.map((t) => (
                  <label key={t} className="chip">
                    <input type="radio" name="type" value={t} checked={v.type === t} onChange={() => set("type", t)} className="sr-only" />
                    {f.types[t]}
                  </label>
                ))}
              </div>
              {errors.type && (
                <p id={`${id("type")}-error`} className="mt-2 text-[0.8125rem] text-gold-ink" role="alert">
                  {errors.type}
                </p>
              )}
            </fieldset>
            <Field id={id("date")} label={f.date} hint={f.dateHint} error={errors.date}>
              <input id={id("date")} name="date" type="date" min={isoDay(new Date())} value={v.date} onChange={(e) => set("date", e.target.value)} className="field" {...invalid("date")} />
              {taken && <p className="mt-2 text-[0.8125rem] text-muted">{q.taken}</p>}
            </Field>
            <Field id={id("guests")} label={f.guests}>
              <input id={id("guests")} name="guests" type="number" inputMode="numeric" min={1} value={v.guests} onChange={(e) => set("guests", e.target.value)} className="field" />
            </Field>
            <Field id={id("venue")} label={f.venue}>
              <input id={id("venue")} name="venue" type="text" value={v.venue} placeholder={f.venuePlaceholder} onChange={(e) => set("venue", e.target.value)} className="field" autoComplete="off" />
            </Field>
            <Field id={id("city")} label={f.city} error={errors.city}>
              <input id={id("city")} name="city" type="text" value={v.city} placeholder={f.cityPlaceholder} onChange={(e) => set("city", e.target.value)} className="field" autoComplete="address-level2" {...invalid("city")} />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="fade-in grid gap-8">
            <fieldset>
              <legend className="label">{f.elements}</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {ELEMENTS.map((e) => (
                  <label key={e} className="chip">
                    <input type="checkbox" name="elements" value={e} checked={v.elements.includes(e)} onChange={() => toggle(e)} className="sr-only" />
                    {f.elementsOptions[e]}
                  </label>
                ))}
              </div>
            </fieldset>
            <Field id={id("mood")} label={f.mood}>
              <textarea id={id("mood")} name="mood" rows={2} value={v.mood} placeholder={f.moodPlaceholder} onChange={(e) => set("mood", e.target.value)} className="field resize-y" />
              {pin && <p className="mt-2 text-[0.8125rem] text-muted">{q.pinterest}</p>}
            </Field>
            <Field id={id("budget")} label={f.budget}>
              <input id={id("budget")} name="budget" type="text" value={v.budget} placeholder={f.budgetPlaceholder} onChange={(e) => set("budget", e.target.value)} className="field" />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in grid gap-8 sm:grid-cols-2">
            <Field id={id("name")} label={f.name} error={errors.name}>
              <input id={id("name")} name="name" type="text" value={v.name} onChange={(e) => set("name", e.target.value)} className="field" autoComplete="name" {...invalid("name")} />
            </Field>
            <Field id={id("phone")} label={f.phone} error={errors.phone}>
              <input id={id("phone")} name="phone" type="tel" value={v.phone} onChange={(e) => set("phone", e.target.value)} className="field" autoComplete="tel" dir="ltr" {...invalid("phone")} />
            </Field>
            <Field id={id("message")} label={f.message} hint={f.optional} className="sm:col-span-2">
              <textarea id={id("message")} name="message" rows={3} value={v.message} placeholder={f.messagePlaceholder} onChange={(e) => set("message", e.target.value)} className="field resize-y" />
            </Field>
            <p className="text-[0.8125rem] text-muted sm:col-span-2">{q.privacy}</p>
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-4">
          {step > 0 && (
            <button type="button" onClick={() => go(step - 1)} className="btn-line">
              {q.back}
            </button>
          )}
          <button type="submit" className="btn-solid">
            {step < 2 ? (
              q.next
            ) : (
              <>
                <WhatsAppIcon className="h-4 w-4" />
                {q.submit}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

import site from "@/data/site.json";

/**
 * Paiement d'acompte en ligne : prévu mais désactivé (data/site.json → payments.enabled = false).
 *
 * Pour l'activer plus tard :
 *  1. data/site.json : payments.enabled = true et payments.depositEUR = montant de l'acompte ;
 *  2. créer une route app/api/checkout/route.ts qui appelle Stripe Checkout (mode « payment », devise EUR)
 *     avec la clé STRIPE_SECRET_KEY (variable d'environnement Vercel, jamais dans le code) ;
 *  3. le bouton « Payer l'acompte en ligne » apparaît alors après l'envoi du formulaire (components/QuoteForm.tsx).
 * Tant que c'est désactivé, aucun script de paiement n'est chargé et aucun bouton n'apparaît.
 */
export const payments = site.payments as { enabled: boolean; provider: "stripe"; depositEUR: number | null };

export const paymentsEnabled = () => payments.enabled && typeof payments.depositEUR === "number" && payments.depositEUR > 0;

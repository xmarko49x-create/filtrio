/**
 * Helper Plausible — events custom typés.
 * Safe : ne crash pas si Plausible n'est pas encore chargé (queue).
 */

type PlausibleEvent =
  | "CTA_Affilie"
  | "Clic_Comparatif"
  | "Clic_CasUsage"
  | "Clic_Fiche";

type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
  }
}

/**
 * Envoie un event custom à Plausible.
 * Les props apparaissent comme Custom Properties dans le dashboard.
 */
export function trackEvent(name: PlausibleEvent, props?: EventProps): void {
  if (typeof window === "undefined") return;
  if (typeof window.plausible !== "function") return;
  try {
    window.plausible(name, props ? { props } : undefined);
  } catch {
    // no-op — jamais bloquer l'UX pour un event analytics
  }
}

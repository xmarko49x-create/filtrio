/**
 * Identité auteur unique de Filtrio.
 * Utilisée par AuthorByline (haut de page), AuthorBio (bas de page)
 * et lib/schema.ts (JSON-LD author + dateModified).
 */

export const AUTHOR = {
  name: "Marc Devillers",
  initials: "MD",
  url: "/a-propos",
  role: "Éditeur de Filtrio",
  bio: "Marc Devillers est l'éditeur de Filtrio. Il analyse les outils IA pour créateurs vidéo francophones à partir des pages officielles, des plans disponibles, des retours publics et d'une méthodologie en 6 critères publiée.",
} as const;

/**
 * Date de publication par défaut pour les premières pages du site.
 * Format ISO 8601 (YYYY-MM-DD).
 *
 * Utilisée comme `datePublished` dans le JSON-LD quand une page n'a
 * pas sa propre date de publication explicite. La `dateModified` reste
 * le `lastCheck` propre à chaque page (mise à jour à chaque révision).
 */
export const SITE_LAUNCH_DATE = "2026-04-17";

/**
 * Convertit une date "23/04/2026" (format hero.lastCheck) en
 * "23 avr. 2026" (format affiché sur le site).
 */
export function formatDateFR(lastCheck: string): string {
  const match = lastCheck.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return lastCheck;
  const [, dd, mm, yyyy] = match;
  const months = [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ];
  const day = parseInt(dd, 10);
  const monthIndex = parseInt(mm, 10) - 1;
  return `${day} ${months[monthIndex]} ${yyyy}`;
}

/**
 * Données partagées de l'Observatoire des prix.
 *
 * Utilisées par la page /observatoire-prix ET par la route CSV
 * /observatoire-prix.csv, pour garantir que le tableau HTML et le
 * fichier téléchargeable restent toujours synchronisés.
 */

/** Date de la dernière édition de l'Observatoire (format JJ/MM/AAAA). */
export const OBSERVATOIRE_LAST_UPDATED = "10/07/2026";

/** Date de dernière vérification du prix, par fiche (reprise des fiches publiées). */
export const VERIF_DATES: Record<string, string> = {
  submagic: "10/07/2026",
  opusclip: "10/07/2026",
  tubebuddy: "10/07/2026",
  canva: "10/07/2026",
  runway: "10/07/2026",
  descript: "10/07/2026",
  elevenlabs: "10/07/2026",
  davinci: "10/07/2026",
  synthesia: "10/07/2026",
  riverside: "10/07/2026",
  vidiq: "10/07/2026",
  heygen: "10/07/2026",
  capcut: "10/07/2026",
  veed: "10/07/2026",
  invideo: "10/07/2026",
  kapwing: "10/07/2026",
  pictory: "10/07/2026",
  pika: "10/07/2026",
};

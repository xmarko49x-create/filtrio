/**
 * Données partagées de l'Observatoire des prix.
 *
 * Utilisées par la page /observatoire-prix ET par la route CSV
 * /observatoire-prix.csv, pour garantir que le tableau HTML et le
 * fichier téléchargeable restent toujours synchronisés.
 */

/** Date de la dernière édition de l'Observatoire (format JJ/MM/AAAA). */
export const OBSERVATOIRE_LAST_UPDATED = "06/11/2026";

/** Date de dernière vérification du prix, par fiche (reprise des fiches publiées). */
export const VERIF_DATES: Record<string, string> = {
  submagic: "06/11/2026",
  opusclip: "06/11/2026",
  tubebuddy: "06/11/2026",
  canva: "06/11/2026",
  runway: "06/11/2026",
  descript: "06/11/2026",
  elevenlabs: "06/11/2026",
  davinci: "06/11/2026",
  synthesia: "06/11/2026",
  riverside: "06/11/2026",
  vidiq: "06/11/2026",
  heygen: "06/11/2026",
  capcut: "24/08/2026",
  veed: "06/11/2026",
  invideo: "06/11/2026",
  kapwing: "06/11/2026",
  pictory: "06/11/2026",
  pika: "06/11/2026",
  "gpt-video": "10/11/2026",
};

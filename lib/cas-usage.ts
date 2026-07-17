/**
 * Registre des cas d'usage publiés.
 */

export interface CasUsageMeta {
  slug: string;
  titre: string;
  description: string;
  /** slug de l'outil gagnant (ou chaîne libre si hors registre). */
  gagnant: string;
  tempsLecture: number;
}

export const CAS_USAGE: CasUsageMeta[] = [
  {
    slug: "video-longue-en-shorts",
    titre: "Transformer une vidéo longue en shorts : 5 outils comparés en 2026",
    description:
      "Découper une vidéo longue en clips courts : 5 outils IA comparés, OpusClip en tête. Ce que l'IA automatise vraiment, les limites et le temps à prévoir.",
    gagnant: "opusclip",
    tempsLecture: 5,
  },
  {
    slug: "sous-titrer-tiktok",
    titre: "Sous-titrer une vidéo TikTok : 5 outils IA comparés en 2026",
    description:
      "Sous-titres TikTok automatiques : 5 outils IA comparés sur la précision FR, la vitesse et le style. Submagic en tête, alternatives gratuites incluses.",
    gagnant: "submagic",
    tempsLecture: 5,
  },
  {
    slug: "submagic-ou-opusclip-shorts-fr",
    titre: "Submagic ou OpusClip pour des shorts en français ? Le verdict 2026",
    description:
      "Submagic ou OpusClip pour tes shorts en français ? Choix guidé en 4 questions selon ton usage, ton volume et ton budget, avec le combo des deux détaillé.",
    gagnant: "submagic",
    tempsLecture: 5,
  },
  {
    slug: "sous-titres-rapides",
    titre: "Sous-titres automatiques : 5 outils IA comparés en 2026",
    description:
      "Quel outil sous-titre le plus vite sans sacrifier la qualité ? Comparaison du temps de traitement et du rendu livré, verdict direct et pièges à éviter.",
    gagnant: "submagic",
    tempsLecture: 5,
  },
  {
    slug: "miniatures-youtube-ia",
    titre: "Miniatures YouTube IA : 5 outils comparés en 2026",
    description:
      "Créer des miniatures YouTube avec l'IA : Canva, Microsoft Designer, TubeBuddy et deux alternatives au crible. Gagnant tranché et erreurs à éviter.",
    gagnant: "canva",
    tempsLecture: 6,
  },
  {
    slug: "podcast-enregistrement-distant",
    titre: "Enregistrer un podcast à distance : 5 outils comparés en 2026",
    description:
      "Riverside face à Descript, Zencastr, SquadCast et Zoom : le comparatif pour enregistrer un podcast à distance en qualité studio, sans mauvaise surprise.",
    gagnant: "riverside",
    tempsLecture: 6,
  },
];

export function getCasUsage(slug: string): CasUsageMeta | undefined {
  return CAS_USAGE.find((c) => c.slug === slug);
}

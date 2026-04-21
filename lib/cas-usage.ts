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
    titre: "Meilleur outil pour transformer une vidéo longue en shorts",
    description:
      "Les meilleurs outils analysés pour le même besoin. Gagnant annoncé dès le début.",
    gagnant: "opusclip",
    tempsLecture: 5,
  },
  {
    slug: "sous-titrer-tiktok",
    titre: "Meilleur outil IA pour sous-titrer une vidéo TikTok",
    description:
      "Précision FR, rapidité, style : les 3 critères décisifs. Verdict en tête.",
    gagnant: "submagic",
    tempsLecture: 5,
  },
  {
    slug: "submagic-ou-opusclip-shorts-fr",
    titre: "Submagic ou OpusClip pour des shorts en français",
    description:
      "La question qui revient le plus. Choix guidé en 4 questions.",
    gagnant: "submagic",
    tempsLecture: 5,
  },
  {
    slug: "sous-titres-rapides",
    titre: "Outil le plus rapide pour sous-titres automatiques",
    description:
      "Comparaison du temps de traitement et de la qualité livrée. Verdict direct.",
    gagnant: "submagic",
    tempsLecture: 5,
  },
  {
    slug: "miniatures-youtube-ia",
    titre: "Meilleur générateur de miniatures YouTube IA",
    description:
      "5 outils analysés pour le même besoin. Canva, Microsoft Designer, TubeBuddy et alternatives.",
    gagnant: "canva",
    tempsLecture: 6,
  },
  {
    slug: "podcast-enregistrement-distant",
    titre: "Meilleur outil pour enregistrer un podcast à distance",
    description:
      "Qualité studio sans être dans la même pièce. 5 outils analysés, pièges à éviter.",
    gagnant: "riverside",
    tempsLecture: 6,
  },
];

export function getCasUsage(slug: string): CasUsageMeta | undefined {
  return CAS_USAGE.find((c) => c.slug === slug);
}

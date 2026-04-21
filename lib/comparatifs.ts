/**
 * Registre des comparatifs publiés.
 * Utilisé pour le sitemap, le maillage home et les cartes "continuer la lecture".
 */

export interface ComparatifMeta {
  slug: string;
  titre: string;
  description: string;
  outilA: string;
  outilB: string;
  /** Minutes estimées. */
  tempsLecture: number;
}

export const COMPARATIFS: ComparatifMeta[] = [
  {
    slug: "opusclip-vs-submagic",
    titre: "OpusClip vs Submagic",
    description:
      "Les deux rois du short viral. Comparés sur leurs fonctionnalités, plans et retours publics. Le gagnant dépend de ton cas.",
    outilA: "opusclip",
    outilB: "submagic",
    tempsLecture: 7,
  },
  {
    slug: "submagic-vs-capcut",
    titre: "Submagic vs CapCut",
    description:
      "Le payant spécialisé contre le gratuit polyvalent. La précision FR fait-elle la différence ?",
    outilA: "submagic",
    outilB: "capcut",
    tempsLecture: 6,
  },
  {
    slug: "submagic-vs-descript",
    titre: "Submagic vs Descript",
    description:
      "Shorts viraux FR contre édition long format. Deux outils, deux philosophies.",
    outilA: "submagic",
    outilB: "descript",
    tempsLecture: 6,
  },
  {
    slug: "vidiq-vs-tubebuddy",
    titre: "VidIQ vs TubeBuddy",
    description:
      "Les deux extensions reines pour YouTubeurs. IA générative contre tests A/B.",
    outilA: "vidiq",
    outilB: "tubebuddy",
    tempsLecture: 6,
  },
  {
    slug: "elevenlabs-vs-heygen",
    titre: "ElevenLabs vs HeyGen",
    description:
      "Voix IA pure contre avatar vidéo complet. Pas de vrais rivaux — le choix dépend du format.",
    outilA: "elevenlabs",
    outilB: "heygen",
    tempsLecture: 6,
  },
  {
    slug: "descript-vs-riverside",
    titre: "Descript vs Riverside",
    description:
      "Édition textuelle contre enregistrement distant pro. Deux outils complémentaires plus que concurrents.",
    outilA: "descript",
    outilB: "riverside",
    tempsLecture: 6,
  },
  {
    slug: "opusclip-vs-capcut",
    titre: "OpusClip vs CapCut",
    description:
      "Découpe IA payante vs éditeur gratuit. Le choix par profil de créateur.",
    outilA: "opusclip",
    outilB: "capcut",
    tempsLecture: 5,
  },
  {
    slug: "veed-vs-kapwing",
    titre: "Veed vs Kapwing",
    description:
      "Deux éditeurs web proches. Solo polyvalent contre collaboratif d'équipe.",
    outilA: "veed",
    outilB: "kapwing",
    tempsLecture: 5,
  },
  {
    slug: "synthesia-vs-heygen",
    titre: "Synthesia vs HeyGen",
    description:
      "Avatars IA. B2B corporate contre créateurs et marketeurs. Profils différents, choix guidé.",
    outilA: "synthesia",
    outilB: "heygen",
    tempsLecture: 6,
  },
  {
    slug: "runway-vs-pika",
    titre: "Runway vs Pika",
    description:
      "Génération vidéo IA. Qualité pro vs accessibilité. Verdict par profil créatif.",
    outilA: "runway",
    // Pika pas dans le registre — garde string libre
    outilB: "pika",
    tempsLecture: 5,
  },
  {
    slug: "invideo-vs-pictory",
    titre: "InVideo vs Pictory",
    description:
      "Script-to-video polyvalent contre article-to-video spécialisé. Verdict tranché selon ton workflow.",
    outilA: "invideo",
    outilB: "pictory",
    tempsLecture: 5,
  },
  {
    slug: "alternatives-a-submagic",
    titre: "Alternatives à Submagic",
    description:
      "5 alternatives sérieuses à Submagic, dont 2 gratuites qui tiennent la route.",
    outilA: "submagic",
    outilB: "",
    tempsLecture: 7,
  },
];

export function getComparatif(slug: string): ComparatifMeta | undefined {
  return COMPARATIFS.find((c) => c.slug === slug);
}

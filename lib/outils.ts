/**
 * Registre central des outils Filtrio.
 * Une seule source de vérité : nom, slug, score, couleur d'accent, tagline, lien affilié.
 * Toutes les pages (home, fiches, comparatifs, cas d'usage) consomment cette donnée.
 */

export type TailwindColor =
  | "amber"
  | "emerald"
  | "orange"
  | "sky"
  | "teal"
  | "cyan"
  | "violet"
  | "indigo"
  | "red"
  | "pink"
  | "yellow"
  | "green"
  | "fuchsia"
  | "blue"
  | "purple"
  | "rose"
  | "slate";

export type OutilCategorie =
  | "shorts"
  | "seo-youtube"
  | "voix-ia"
  | "avatar-ia"
  | "long-format"
  | "editeur"
  | "generation-video"
  | "design"
  | "script-to-video";

/** Libellés lisibles des catégories pour l'UI (page /outils notamment). */
export const CATEGORIE_LABELS: Record<OutilCategorie, string> = {
  shorts: "Shorts & Clips",
  "seo-youtube": "SEO YouTube",
  "voix-ia": "Voix IA",
  "avatar-ia": "Avatars IA",
  "long-format": "Long format",
  editeur: "Éditeur vidéo",
  "generation-video": "Génération vidéo IA",
  design: "Design",
  "script-to-video": "Script-to-video",
};

export interface Outil {
  slug: string;
  name: string;
  score: number;
  color: TailwindColor;
  tagline: string;
  category: OutilCategorie;
  priceFrom?: string;
  freeTier?: string;
  affiliateLink: string;
  /** Indique si la fiche Filtrio est publiée ou en "à venir". */
  ficheAvailable: boolean;
  /** Commission affilié connue (pour tri / badge "tier 1"). */
  commission?: string;
}

export const OUTILS: Outil[] = [
  {
    slug: "submagic",
    name: "Submagic",
    score: 9.2,
    color: "amber",
    tagline: "Sous-titres viraux FR",
    category: "shorts",
    priceFrom: "À partir de 12 €/mois",
    freeTier: "Formule gratuite limitée",
    affiliateLink: "https://submagic.co/?via=marc38",
    ficheAvailable: true,
    commission: "30% récurrent à vie",
  },
  {
    slug: "opusclip",
    name: "OpusClip",
    score: 8.7,
    color: "emerald",
    tagline: "Découpe IA auto",
    category: "shorts",
    priceFrom: "À partir de 15 $/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "https://www.opus.pro/?via=3e1380",
    ficheAvailable: true,
    commission: "25% récurrent 1 an",
  },
  {
    slug: "tubebuddy",
    name: "TubeBuddy",
    score: 8.6,
    color: "orange",
    tagline: "SEO YouTube",
    category: "seo-youtube",
    priceFrom: "À partir de 3,99 $/mois",
    freeTier: "",
    affiliateLink: "#aff-tubebuddy",
    ficheAvailable: true,
    commission: "15% récurrent jusqu'à 1 an (programme actuellement fermé aux nouveaux affiliés)",
  },
  {
    slug: "canva",
    name: "Canva",
    score: 8.5,
    color: "pink",
    tagline: "Design polyvalent",
    category: "design",
    priceFrom: "À partir de 110 €/an",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-canva",
    ficheAvailable: true,
  },
  {
    slug: "runway",
    name: "Runway",
    score: 8.5,
    color: "purple",
    tagline: "Génération vidéo IA",
    category: "generation-video",
    priceFrom: "À partir de 12 $/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-runway",
    ficheAvailable: true,
  },
  {
    slug: "descript",
    name: "Descript",
    score: 8.4,
    color: "violet",
    tagline: "Édition textuelle",
    category: "long-format",
    priceFrom: "À partir de 16 $/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-descript",
    ficheAvailable: true,
    commission: "15% récurrent",
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    score: 8.3,
    color: "teal",
    tagline: "Voix IA",
    category: "voix-ia",
    priceFrom: "À partir de 6 $/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "https://try.elevenlabs.io/0rlozubpip1z",
    ficheAvailable: true,
    commission: "22% récurrent 12 mois",
  },
  {
    slug: "davinci",
    name: "DaVinci Resolve",
    score: 8.2,
    color: "red",
    tagline: "Montage pro gratuit",
    category: "editeur",
    priceFrom: "Gratuit · Studio à 295 $ en achat unique",
    freeTier: "Téléchargement gratuit sans watermark",
    affiliateLink: "#aff-davinci",
    ficheAvailable: true,
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    score: 8.2,
    color: "blue",
    tagline: "Avatars IA B2B",
    category: "avatar-ia",
    priceFrom: "À partir de 12 €/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-synthesia",
    ficheAvailable: true,
    commission: "25% récurrent",
  },
  {
    slug: "riverside",
    name: "Riverside",
    score: 8.1,
    color: "indigo",
    tagline: "Enregistrement distant",
    category: "long-format",
    priceFrom: "À partir de 24 $/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-riverside",
    ficheAvailable: true,
  },
  {
    slug: "vidiq",
    name: "VidIQ",
    score: 8.0,
    color: "sky",
    tagline: "SEO YouTube IA",
    category: "seo-youtube",
    priceFrom: "À partir de 16,58 €/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "https://vidiq.com/filtrio",
    ficheAvailable: true,
    commission: "15% récurrent (palier Associate, jusqu'à 25% selon volume)",
  },
  {
    slug: "heygen",
    name: "HeyGen",
    score: 8.0,
    color: "cyan",
    tagline: "Avatars IA créateurs",
    category: "avatar-ia",
    priceFrom: "À partir de 29 $/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-heygen",
    ficheAvailable: true,
  },
  {
    slug: "capcut",
    name: "CapCut",
    score: 7.8,
    color: "sky",
    tagline: "Éditeur gratuit",
    category: "editeur",
    priceFrom: "Gratuit · Pro à 199,99 €/an",
    freeTier: "Essai Pro 7 jours offerts",
    affiliateLink: "#aff-capcut",
    ficheAvailable: true,
  },
  {
    slug: "veed",
    name: "Veed",
    score: 7.8,
    color: "yellow",
    tagline: "Éditeur web polyvalent",
    category: "editeur",
    priceFrom: "À partir de 10,75 €/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-veed",
    ficheAvailable: true,
  },
  {
    slug: "invideo",
    name: "InVideo",
    score: 7.7,
    color: "fuchsia",
    tagline: "Script-to-video IA",
    category: "script-to-video",
    priceFrom: "À partir de 17 $/mois",
    freeTier: "",
    affiliateLink: "#aff-invideo",
    ficheAvailable: true,
  },
  {
    slug: "kapwing",
    name: "Kapwing",
    score: 7.2,
    color: "green",
    tagline: "Collaboratif équipe",
    category: "editeur",
    priceFrom: "À partir de 16 $/mois",
    freeTier: "Plan gratuit disponible",
    affiliateLink: "#aff-kapwing",
    ficheAvailable: true,
  },
];

export function getOutil(slug: string): Outil | undefined {
  return OUTILS.find((o) => o.slug === slug);
}

export function getOutilOrThrow(slug: string): Outil {
  const o = getOutil(slug);
  if (!o) throw new Error(`Outil inconnu : ${slug}`);
  return o;
}

export function outilsByScore(limit?: number): Outil[] {
  const sorted = [...OUTILS].sort((a, b) => b.score - a.score);
  return limit ? sorted.slice(0, limit) : sorted;
}

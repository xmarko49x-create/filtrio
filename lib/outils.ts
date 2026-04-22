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
    affiliateLink: "#aff-opusclip",
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
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
    affiliateLink: "#aff-tubebuddy",
    ficheAvailable: true,
    commission: "50% récurrent",
  },
  {
    slug: "canva",
    name: "Canva",
    score: 8.5,
    color: "pink",
    tagline: "Design polyvalent",
    category: "design",
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
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
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
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
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
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
    affiliateLink: "#aff-elevenlabs",
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
    priceFrom: "Gratuit + licence Studio payante",
    freeTier: "",
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
    priceFrom: "Payant + démo",
    freeTier: "",
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
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
    affiliateLink: "#aff-vidiq",
    ficheAvailable: true,
  },
  {
    slug: "heygen",
    name: "HeyGen",
    score: 8.0,
    color: "cyan",
    tagline: "Avatars IA créateurs",
    category: "avatar-ia",
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
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
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
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
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
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
    priceFrom: "Plan gratuit + payant",
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
    priceFrom: "Plan gratuit + payant",
    freeTier: "",
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

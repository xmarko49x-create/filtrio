import type { MetadataRoute } from "next";
import { FICHE_REGISTRY } from "@/content/outils/registry";
import { COMPARATIF_REGISTRY } from "@/content/comparatifs/registry";
import { CAS_USAGE_REGISTRY } from "@/content/cas-usage/registry";
import { OBSERVATOIRE_LAST_UPDATED } from "@/lib/observatoire";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.filtrio.fr";

/**
 * Dates de dernière modification réelles (format JJ/MM/AAAA).
 * À mettre à jour quand le contenu de la page change vraiment : Google
 * ignore les lastmod qui changent à chaque build.
 */
const DATES = {
  hubs: "10/11/2026", // accueil, catalogue, comparatifs, YouTube, TikTok (prix repris des fiches)
  statistiques: "06/11/2026",
  bancEssai: "24/08/2026",
  methode: "06/11/2026",
  lexique: "02/10/2026",
  alternativesSubmagic: "06/11/2026",
  outilsShorts: "06/11/2026",
};

/** "06/11/2026" -> Date. */
function d(fr: string): Date {
  const [jj, mm, aaaa] = fr.split("/").map(Number);
  return new Date(Date.UTC(aaaa, mm - 1, jj));
}

/** La plus récente de plusieurs dates JJ/MM/AAAA (les valeurs vides sont ignorées). */
function latest(...dates: (string | undefined)[]): Date {
  return dates
    .filter((x): x is string => Boolean(x))
    .map(d)
    .reduce((a, b) => (a > b ? a : b));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: d(DATES.hubs), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/outils`, lastModified: d(DATES.hubs), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/comparatifs`, lastModified: d(DATES.hubs), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/youtube`, lastModified: d(DATES.hubs), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tiktok-shorts`, lastModified: d(DATES.hubs), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lexique`, lastModified: d(DATES.lexique), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/observatoire-prix`, lastModified: d(OBSERVATOIRE_LAST_UPDATED), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/statistiques-outils-ia-video`, lastModified: d(DATES.statistiques), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/banc-essai`, lastModified: d(DATES.bancEssai), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/methode`, lastModified: d(DATES.methode), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/a-propos`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const outilsPages: MetadataRoute.Sitemap = Object.entries(FICHE_REGISTRY).map(
    ([slug, fiche]) => ({
      url: `${SITE_URL}/outils/${slug}`,
      lastModified: latest(fiche.hero.lastCheck, fiche.hero.contentUpdate),
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const comparatifsPages: MetadataRoute.Sitemap = Object.entries(
    COMPARATIF_REGISTRY,
  ).map(([slug, comp]) => ({
    url: `${SITE_URL}/comparatifs/${slug}`,
    lastModified: latest(comp.hero.lastCheck, comp.hero.contentUpdate),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const casUsagePages: MetadataRoute.Sitemap = Object.entries(
    CAS_USAGE_REGISTRY,
  ).map(([slug, cas]) => ({
    url: `${SITE_URL}/cas-usage/${slug}`,
    lastModified: d(cas.hero.lastCheck),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Meta-pages comparatifs (routes concrètes, pas dynamiques)
  const metaPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/comparatifs/alternatives-a-submagic`,
      lastModified: d(DATES.alternativesSubmagic),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/comparatifs/outils-shorts-tiktok-2026`,
      lastModified: d(DATES.outilsShorts),
      changeFrequency: "monthly",
      priority: 0.95,
    },
  ];

  return [
    ...staticPages,
    ...outilsPages,
    ...comparatifsPages,
    ...metaPages,
    ...casUsagePages,
  ];
}

import type { MetadataRoute } from "next";
import { FICHE_REGISTRY } from "@/content/outils/registry";
import { COMPARATIF_REGISTRY } from "@/content/comparatifs/registry";
import { CAS_USAGE_REGISTRY } from "@/content/cas-usage/registry";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://filtrio.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/youtube`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tiktok-shorts`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/methode`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const outilsPages: MetadataRoute.Sitemap = Object.keys(FICHE_REGISTRY).map(
    (slug) => ({
      url: `${SITE_URL}/outils/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const comparatifsPages: MetadataRoute.Sitemap = Object.keys(
    COMPARATIF_REGISTRY,
  ).map((slug) => ({
    url: `${SITE_URL}/comparatifs/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const casUsagePages: MetadataRoute.Sitemap = Object.keys(
    CAS_USAGE_REGISTRY,
  ).map((slug) => ({
    url: `${SITE_URL}/cas-usage/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Meta-page "Alternatives à Submagic" (route concrète, pas dynamique)
  const metaPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/comparatifs/alternatives-a-submagic`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
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

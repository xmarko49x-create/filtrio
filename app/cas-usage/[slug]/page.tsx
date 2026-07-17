import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CasUsageLayout from "@/components/cas-usage/CasUsageLayout";
import {
  CAS_USAGE_REGISTRY,
  getCasUsageContent,
} from "@/content/cas-usage/registry";
import { getCasUsage } from "@/lib/cas-usage";

export async function generateStaticParams() {
  return Object.keys(CAS_USAGE_REGISTRY).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = getCasUsage(slug);
  if (!meta) return { title: "Cas d'usage introuvable" };

  // Description SEO écrite sur mesure par cas d'usage dans lib/cas-usage.ts
  // (cible 140-160 chars). Pas de hook générique ajouté : chaque page a sa
  // propre formulation, sans répétition de modèle.
  const description = meta.description.replace(/\s+$/, "");

  return {
    title: meta.titre,
    description,
    alternates: { canonical: `/cas-usage/${slug}` },
    openGraph: {
      title: `${meta.titre}, Filtrio`,
      description,
      type: "article",
    },
  };
}

export default async function CasUsagePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const data = getCasUsageContent(slug);
  if (!data) notFound();
  return <CasUsageLayout data={data} />;
}

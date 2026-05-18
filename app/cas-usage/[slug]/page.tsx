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

  // Description optimisée SEO : titre + description du registre + hook.
  // Cible 150-160 chars pour maximiser l'affichage en SERP Google.
  const baseDesc = meta.description.replace(/\s+$/, "");
  const hasSuffix = /(verdict|outils analysés|gagnant|comparés)/i.test(baseDesc);
  const description = hasSuffix
    ? `${baseDesc} 5 outils comparés, gagnant tranché, pièges à éviter et alternatives.`
    : `${baseDesc} Verdict en 30 secondes, 5 outils comparés, pièges à éviter et alternatives.`;

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

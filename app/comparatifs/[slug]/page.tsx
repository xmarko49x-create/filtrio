import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparatifLayout from "@/components/comparatif/ComparatifLayout";
import {
  COMPARATIF_REGISTRY,
  getComparatifContent,
} from "@/content/comparatifs/registry";
import { getComparatif } from "@/lib/comparatifs";

export async function generateStaticParams() {
  return Object.keys(COMPARATIF_REGISTRY).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = getComparatif(slug);
  if (!meta) return { title: "Comparatif introuvable" };

  // Description optimisée SEO : titre + description du registre + hook engageant.
  // Cible 150-160 chars pour maximiser l'affichage en SERP Google.
  // Suffix ajouté seulement si la description du registre n'en contient pas déjà.
  const baseDesc = meta.description.replace(/\s+$/, "");
  const hasSuffix = /(verdict|alternatives|FAQ|prix|plans|cas d'usage)/i.test(baseDesc);
  const description = hasSuffix
    ? `${meta.titre} en 2026. ${baseDesc}`
    : `${meta.titre} en 2026. ${baseDesc} Verdict tranché, prix, alternatives et cas d'usage détaillés.`;

  return {
    title: `${meta.titre} : lequel choisir en 2026 ?`,
    description,
    alternates: { canonical: `/comparatifs/${slug}` },
    openGraph: {
      title: `${meta.titre}, Filtrio`,
      description,
      type: "article",
    },
  };
}

export default async function ComparatifPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const data = getComparatifContent(slug);
  if (!data) notFound();
  return <ComparatifLayout data={data} />;
}

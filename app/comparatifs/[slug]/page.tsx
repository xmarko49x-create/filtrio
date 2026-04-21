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

  return {
    title: `${meta.titre} : lequel choisir en 2026 ?`,
    description: meta.description,
    alternates: { canonical: `/comparatifs/${slug}` },
    openGraph: {
      title: `${meta.titre} — Filtrio`,
      description: meta.description,
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

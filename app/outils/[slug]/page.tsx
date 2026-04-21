import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FicheOutilLayout from "@/components/fiche/FicheOutilLayout";
import { FICHE_REGISTRY, getFiche } from "@/content/outils/registry";
import { getOutil } from "@/lib/outils";

export async function generateStaticParams() {
  return Object.keys(FICHE_REGISTRY).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const outil = getOutil(slug);
  if (!outil) return { title: "Fiche introuvable" };

  return {
    title: `${outil.name} : avis complet en 2026`,
    description: `Avis ${outil.name} 2026 : score éditorial Filtrio, tarifs, fonctionnalités, alternatives. ${outil.tagline}.`,
    alternates: { canonical: `/outils/${slug}` },
    openGraph: {
      title: `${outil.name} : avis complet en 2026 — Filtrio`,
      description: `Analyse ${outil.name} : score ${outil.score}/10. ${outil.tagline}.`,
      type: "article",
    },
  };
}

export default async function FicheOutilPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const data = getFiche(slug);
  if (!data) notFound();
  return <FicheOutilLayout data={data} />;
}

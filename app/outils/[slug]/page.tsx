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

  // Description optimisée SEO : prix + score + tagline + hook
  // Cible 150-160 chars pour maximiser l'affichage en SERP Google.
  // Si priceFrom absent, on garde une formulation neutre.
  const prixSegment = outil.priceFrom
    ? `${outil.priceFrom}, score ${outil.score}/10`
    : `score ${outil.score}/10`;
  // Garantit une ponctuation finale après la tagline pour la concaténation propre
  const tagline = /[.!?]\s*$/.test(outil.tagline) ? outil.tagline : `${outil.tagline}.`;
  const description = `Avis ${outil.name} 2026 : ${prixSegment}. ${tagline} Plans, alternatives, FAQ et analyse sans langue de bois.`;

  return {
    title: `${outil.name} : avis complet en 2026`,
    description,
    alternates: { canonical: `/outils/${slug}` },
    openGraph: {
      title: `${outil.name} : avis complet en 2026, Filtrio`,
      description,
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

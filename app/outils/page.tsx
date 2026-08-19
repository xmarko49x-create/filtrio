import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import OutilsCatalog from "@/components/OutilsCatalog";
import { JsonLd } from "@/components/JsonLd";
import { OUTILS } from "@/lib/outils";

export const metadata: Metadata = {
  title: "Tous les outils IA pour créateurs vidéo en 2026",
  description:
    "Catalogue filtrable de 18 outils IA analysés sur 6 critères. Filtre par catégorie, plan gratuit, recherche par nom. Score éditorial transparent.",
  alternates: { canonical: "/outils" },
  openGraph: {
    title: "Tous les outils IA pour créateurs vidéo, Filtrio",
    description:
      "18 outils analysés en profondeur. Filtre par catégorie ou plan gratuit pour trouver ce qu'il te faut.",
    type: "website",
  },
};

export default function OutilsPage() {
  // Ordre alphabétique, identique à l'affichage du catalogue.
  // Les positions du JSON-LD ne doivent pas véhiculer un classement global
  // par score : la grille de notation comporte des axes adaptés par catégorie,
  // donc les scores ne sont comparables qu'à l'intérieur d'une catégorie.
  // .filter() renvoie déjà un nouveau tableau, donc .sort() ne mute pas OUTILS.
  const outilsAlphabetiques = OUTILS.filter((o) => o.ficheAvailable).sort(
    (a, b) => a.name.localeCompare(b.name, "fr"),
  );

  // Schema CollectionPage + ItemList des outils publiés
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Outils IA pour créateurs vidéo, Filtrio",
    description:
      "Catalogue éditorial Filtrio des outils IA analysés sur 6 critères.",
    itemListElement: outilsAlphabetiques.map((o, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.filtrio.fr/outils/${o.slug}`,
      name: o.name,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <Nav />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Catalogue complet · juillet 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
          Tous les <span className="text-emerald-400">outils IA</span> analysés.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-3xl">
          Le catalogue complet de Filtrio. Chaque outil est analysé sur 6
          critères pondérés : qualité en français, rapport qualité/prix,
          profondeur IA, interface, support, intégrations. Certains critères
          sont adaptés à la catégorie, les scores comparent surtout les
          outils d&apos;une même catégorie.
        </p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Le catalogue est présenté par ordre alphabétique. Utilise les filtres
          pour cibler par catégorie, par plan gratuit ou par mot-clé. Nous ne
          proposons volontairement pas de tri par score : les critères notés
          varient d&apos;une catégorie à l&apos;autre, un classement par note
          serait donc trompeur.
        </p>
      </section>

      {/* CATALOGUE FILTRABLE */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <OutilsCatalog />
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

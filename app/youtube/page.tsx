import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PlateformeSection from "@/components/PlateformeSection";

export const metadata: Metadata = {
  title: "Outils IA pour YouTubeurs en 2026",
  description:
    "Sélection 2026 des meilleurs outils IA pour YouTubeurs : SEO, miniatures, voix off, édition long format, découpe en shorts. Analysés sur 6 critères.",
  alternates: { canonical: "/youtube" },
};

export default function YouTubePage() {
  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Sélection YouTube · avril 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
          Les outils IA pour <span className="text-red-400">YouTubeurs</span>.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-3xl">
          Pour grandir sur YouTube aujourd&apos;hui, tu as besoin de 4 choses :
          optimiser ton SEO, améliorer tes miniatures, produire vite, recycler
          en shorts. Voici les outils qu&apos;on recommande sur chaque axe.
        </p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Pas une liste bâclée. Chaque outil est noté sur 6 critères identiques
          et vient avec une fiche analyse complète.
        </p>
      </section>

      <PlateformeSection
        plateforme="YouTube"
        outilsPrioritaires={[
          "tubebuddy",
          "vidiq",
          "canva",
          "submagic",
          "opusclip",
          "descript",
          "riverside",
          "elevenlabs",
          "runway",
          "synthesia",
          "heygen",
          "davinci",
        ]}
        comparatifsPertinents={[
          {
            slug: "opusclip-vs-submagic",
            titre: "OpusClip vs Submagic",
            description:
              "Les deux rois du recycling en shorts depuis une vidéo YouTube longue.",
          },
          {
            slug: "opusclip-vs-capcut",
            titre: "OpusClip vs CapCut",
            description:
              "Automatiser la découpe ou éditer gratuitement ? Verdict par profil.",
          },
          {
            slug: "synthesia-vs-heygen",
            titre: "Synthesia vs HeyGen",
            description:
              "Avatars IA pour YouTubeurs faceless : corporate vs créateur moderne.",
          },
          {
            slug: "runway-vs-pika",
            titre: "Runway vs Pika",
            description: "Générer des visuels IA pour dynamiser ta chaîne.",
          },
        ]}
        casUsagePertinents={[
          {
            slug: "video-longue-en-shorts",
            titre:
              "Meilleur outil pour transformer une vidéo longue en shorts",
            description: "Automatiser l'extraction des shorts depuis ton long format.",
          },
          {
            slug: "miniatures-youtube-ia",
            titre: "Meilleur générateur de miniatures YouTube IA",
            description: "Canva, Microsoft Designer, alternatives.",
          },
          {
            slug: "podcast-enregistrement-distant",
            titre:
              "Meilleur outil pour enregistrer un podcast à distance",
            description: "Qualité studio sans studio physique.",
          },
        ]}
      />

      <Newsletter />
      <Footer />
    </>
  );
}

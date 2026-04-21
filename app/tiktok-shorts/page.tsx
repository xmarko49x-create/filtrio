import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PlateformeSection from "@/components/PlateformeSection";

export const metadata: Metadata = {
  title: "Outils IA pour TikTok, Shorts et Reels francophones en 2026",
  description:
    "Sélection 2026 des meilleurs outils IA pour créateurs TikTok/Shorts/Reels : sous-titres viraux FR, découpe auto, éditeur gratuit, voix IA.",
  alternates: { canonical: "/tiktok-shorts" },
};

export default function TikTokShortsPage() {
  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          Sélection TikTok / Shorts / Reels · avril 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
          Les outils IA pour{" "}
          <span className="text-amber-400">TikTok / Shorts / Reels</span>{" "}
          francophones.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-3xl">
          Le short viral a son écosystème : sous-titres stylés, découpe auto,
          voix IA, templates prêts. Voici les outils que les créateurs FR
          utilisent vraiment, classés par score éditorial.
        </p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Pas un top 10 aléatoire. Chaque outil est analysé sur 6 critères et
          vient avec une fiche complète.
        </p>
      </section>

      <PlateformeSection
        plateforme="TikTok / Shorts"
        outilsPrioritaires={[
          "submagic",
          "opusclip",
          "capcut",
          "canva",
          "elevenlabs",
          "heygen",
          "veed",
          "kapwing",
          "invideo",
          "runway",
        ]}
        comparatifsPertinents={[
          {
            slug: "opusclip-vs-submagic",
            titre: "OpusClip vs Submagic",
            description:
              "Le vrai duel du short viral. Qui gagne selon ton profil.",
          },
          {
            slug: "opusclip-vs-capcut",
            titre: "OpusClip vs CapCut",
            description:
              "Spécialiste découpe IA ou éditeur gratuit polyvalent ? Verdict.",
          },
          {
            slug: "invideo-vs-pictory",
            titre: "InVideo vs Pictory",
            description:
              "Générer des vidéos courtes depuis un script ou un article.",
          },
          {
            slug: "veed-vs-kapwing",
            titre: "Veed vs Kapwing",
            description:
              "Deux éditeurs web pour solo ou équipe. Lequel choisir.",
          },
        ]}
        casUsagePertinents={[
          {
            slug: "sous-titrer-tiktok",
            titre: "Meilleur outil IA pour sous-titrer une vidéo TikTok",
            description: "Précision FR, rapidité, style viral.",
          },
          {
            slug: "submagic-ou-opusclip-shorts-fr",
            titre: "Submagic ou OpusClip pour des shorts en français",
            description: "Choix guidé en 4 questions.",
          },
          {
            slug: "sous-titres-rapides",
            titre: "Outil le plus rapide pour sous-titres automatiques",
            description: "Sous-titrer en moins de 90 secondes.",
          },
          {
            slug: "video-longue-en-shorts",
            titre:
              "Meilleur outil pour transformer une vidéo longue en shorts",
            description: "Recycler ton contenu YouTube.",
          },
        ]}
      />

      <Newsletter />
      <Footer />
    </>
  );
}

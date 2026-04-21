import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "À propos de Filtrio — Comparateur d'outils IA pour créateurs vidéo",
  description:
    "Filtrio est un comparateur indépendant d'outils IA pour créateurs vidéo francophones. Analyse cohérente, transparence sur l'affiliation, ligne éditoriale claire.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos de Filtrio",
    description:
      "Un comparateur d'outils IA pensé pour les créateurs vidéo francophones.",
    type: "profile",
  },
};

export default function AProposPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          À propos de Filtrio
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
          Un comparateur d&apos;outils IA pensé pour les créateurs vidéo
          francophones.
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed mb-6">
          Je m&apos;appelle{" "}
          <strong className="text-slate-100">Marc Devillers</strong> et
          j&apos;ai créé Filtrio pour aider les créateurs vidéo, freelances,
          indépendants, agences et petites équipes à choisir plus facilement
          les bons outils IA.
        </p>
        <p className="text-slate-400 leading-relaxed mb-4">
          Aujourd&apos;hui, il existe de nombreux outils pour créer des shorts,
          générer des sous-titres, monter plus vite, produire des voix IA ou
          gagner du temps sur YouTube, TikTok et les formats courts. Le
          problème, c&apos;est qu&apos;une grande partie des contenus publiés
          sur le sujet restent flous, trop génériques ou peu utiles au moment
          de faire un vrai choix.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Filtrio est né d&apos;une idée simple : proposer un comparateur plus
          lisible, plus structuré et plus utile pour les francophones qui
          veulent comprendre rapidement quel outil correspond réellement à
          leur besoin.
        </p>
      </section>

      {/* POURQUOI */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Pourquoi j&apos;ai créé Filtrio
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            En regardant ce qui existait déjà, j&apos;ai retrouvé souvent les
            mêmes problèmes :
          </p>
          <ul className="space-y-2 text-slate-300 mb-6 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>des listes d&apos;outils sans vraie hiérarchie</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>des comparatifs trop vagues</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>des articles remplis de promesses marketing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>
                peu de contenu vraiment pensé pour un public francophone
              </span>
            </li>
          </ul>
          <p className="text-slate-400 leading-relaxed">
            J&apos;ai donc voulu créer un site plus clair, plus direct et plus
            cohérent, avec une logique simple : aider à choisir plus vite, avec
            plus de clarté.
          </p>
        </div>
      </section>

      {/* COMMENT */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">
          Comment Filtrio analyse les outils
        </h2>
        <p className="text-slate-400 leading-relaxed mb-6">
          Les outils présentés sur Filtrio sont comparés avec une méthode
          cohérente, pensée pour aider les créateurs à comprendre rapidement
          les différences entre plusieurs options selon leur usage, leur niveau
          et leur budget.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Le détail complet du scoring, des critères et de la logique
          d&apos;analyse est disponible sur la{" "}
          <Link
            href="/methode"
            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-400/40 hover:decoration-emerald-300"
          >
            page Méthode
          </Link>
          .
        </p>
      </section>

      {/* LIGNE ÉDITORIALE */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            La ligne éditoriale de Filtrio
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Filtrio suit une ligne simple :
          </p>
          <ul className="space-y-2 text-slate-300 mb-6 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>aller à l&apos;essentiel</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>rester lisible</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>éviter le jargon inutile</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>
                distinguer les vrais usages des promesses marketing
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">—</span>
              <span>aider les créateurs à faire un choix plus clair</span>
            </li>
          </ul>
          <p className="text-slate-400 leading-relaxed">
            Le site est conçu pour être utile avant d&apos;être impressionnant.
          </p>
        </div>
      </section>

      {/* TRANSPARENCE */}
      <section
        id="transparence"
        className="max-w-3xl mx-auto px-6 py-14 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-6 tracking-tight">
          Transparence
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Certaines pages de Filtrio peuvent contenir des liens affiliés. Cela
          signifie que je peux recevoir une commission si un visiteur
          s&apos;inscrit via certains liens, sans coût supplémentaire pour lui.
        </p>
        <p className="text-slate-400 leading-relaxed">
          En revanche, l&apos;objectif de Filtrio n&apos;est pas de pousser un
          outil à tout prix. Je m&apos;efforce de garder une approche claire,
          structurée et indépendante, en mettant en avant aussi bien les
          points forts que les limites quand c&apos;est utile.
        </p>
      </section>

      {/* QUI EST DERRIÈRE */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Qui est derrière Filtrio
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Filtrio est un projet indépendant créé par{" "}
            <strong className="text-slate-100">Marc Devillers</strong>.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Pour me contacter :{" "}
            <a
              href="mailto:contact@filtrio.fr"
              className="text-emerald-400 hover:text-emerald-300"
            >
              contact@filtrio.fr
            </a>
          </p>
        </div>
      </section>

      {/* EN RÉSUMÉ */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">En résumé</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Filtrio a été créé pour proposer un comparateur utile et structuré
          autour des outils IA pour créateurs vidéo francophones.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Le but est simple : t&apos;aider à comprendre plus vite quel outil
          choisir, pour quel besoin, sans perdre du temps dans des comparatifs
          brouillons ou trop marketing.
        </p>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

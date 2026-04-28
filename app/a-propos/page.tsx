import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const AUTEUR = {
  nomComplet: "Marc Devillers",
  email: "contact@filtrio.fr",
};

export const metadata: Metadata = {
  title: "À propos de Filtrio — Comparateur d'outils IA pour créateurs vidéo",
  description:
    "Filtrio est un comparateur indépendant d'outils IA pour créateurs vidéo. Méthode de notation claire, transparence sur l'affiliation.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos de Filtrio",
    description:
      "Un comparateur d'outils IA pensé pour les créateurs vidéo.",
    type: "profile",
  },
};

export default function AProposPage() {
  return (
    <>
      <Nav />

      {/* HERO + INTRO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          À propos de Filtrio
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 tracking-tight">
          Un comparateur d&apos;outils IA pensé pour les créateurs vidéo.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed mb-5">
          Filtrio est un comparateur d&apos;outils IA pour créateurs vidéo.
          Le but du site est simple : aider à choisir plus vite
          le bon outil selon un besoin concret, avec des avis structurés, des
          comparatifs utiles et une méthode de notation claire.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Je m&apos;appelle{" "}
          <strong className="text-slate-100">{AUTEUR.nomComplet}</strong>{" "}
          et j&apos;ai créé Filtrio pour proposer un site plus lisible, plus
          honnête et plus utile que les listes génériques ou les comparatifs
          trop vagues.
        </p>
      </section>

      {/* POURQUOI */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Pourquoi Filtrio existe
          </h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            Beaucoup de créateurs, freelances et petites équipes perdent du
            temps entre des dizaines d&apos;outils, de promesses marketing et
            de comparatifs peu clairs.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            Filtrio existe pour simplifier ce choix. Le site met
            l&apos;accent sur trois choses :
          </p>
          <ul className="space-y-2 text-slate-300 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>comprendre rapidement à quoi sert vraiment un outil,</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>voir ses limites autant que ses points forts,</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>comparer plusieurs options sans jargon inutile.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* COMMENT FILTRIO ANALYSE */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">
          Comment Filtrio analyse les outils
        </h2>
        <p className="text-slate-300 leading-relaxed mb-5">
          Les outils sont analysés avec une grille éditoriale commune, fondée
          sur 6 critères pondérés : qualité en français, rapport qualité/prix,
          profondeur IA, interface &amp; prise en main, support &amp; confort FR,
          intégrations.
        </p>
        <p className="text-slate-400 leading-relaxed mb-6">
          L&apos;objectif n&apos;est pas de produire une note
          &laquo;&nbsp;scientifique&nbsp;&raquo; artificielle, mais un verdict
          utile, cohérent et lisible pour un créateur vidéo.
        </p>
        <Link
          href="/methode"
          className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-600 px-5 py-3 rounded-lg transition"
        >
          Voir la méthode complète →
        </Link>
      </section>

      {/* TRANSPARENCE */}
      <section
        id="transparence"
        className="border-y border-slate-800 bg-slate-900/40 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Transparence
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Filtrio peut utiliser des liens affiliés sur certaines pages. Quand
            c&apos;est le cas, cela est indiqué clairement.
          </p>
          <p className="text-slate-400 leading-relaxed">
            L&apos;affiliation ne change pas le classement. Un outil
            n&apos;est pas mieux noté parce qu&apos;il rémunère davantage.
          </p>
        </div>
      </section>

      {/* QUI EST DERRIÈRE */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">
          Qui est derrière Filtrio
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Filtrio est un projet indépendant créé par{" "}
          <strong className="text-slate-100">{AUTEUR.nomComplet}</strong>.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Pour me contacter :{" "}
          <a
            href={`mailto:${AUTEUR.email}`}
            className="text-emerald-400 hover:text-emerald-300"
          >
            {AUTEUR.email}
          </a>
        </p>
      </section>

      {/* POUR COMMENCER — maillage */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Pour commencer
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Les pages les plus utiles pour entrer dans le site.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              href="/methode"
              className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition flex items-center justify-between"
            >
              <span className="font-semibold group-hover:text-emerald-400 transition">
                Voir la méthode
              </span>
              <span className="text-emerald-400">→</span>
            </Link>
            <Link
              href="/outils/submagic"
              className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition flex items-center justify-between"
            >
              <span className="font-semibold group-hover:text-emerald-400 transition">
                Lire l&apos;avis Submagic
              </span>
              <span className="text-emerald-400">→</span>
            </Link>
            <Link
              href="/comparatifs/opusclip-vs-submagic"
              className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition flex items-center justify-between"
            >
              <span className="font-semibold group-hover:text-emerald-400 transition">
                Comparer OpusClip vs Submagic
              </span>
              <span className="text-emerald-400">→</span>
            </Link>
            <Link
              href="/youtube"
              className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition flex items-center justify-between"
            >
              <span className="font-semibold group-hover:text-emerald-400 transition">
                Explorer les outils YouTube
              </span>
              <span className="text-emerald-400">→</span>
            </Link>
            <Link
              href="/tiktok-shorts"
              className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition flex items-center justify-between md:col-span-2"
            >
              <span className="font-semibold group-hover:text-emerald-400 transition">
                Explorer TikTok / Shorts / Reels
              </span>
              <span className="text-emerald-400">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

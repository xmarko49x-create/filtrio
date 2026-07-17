import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  PERSON_ID,
  ORG_ID,
} from "@/lib/schema";

const AUTEUR = {
  nomComplet: "Marc Devillers",
  email: "contact@filtrio.fr",
};

/** ProfilePage + Person + publications externes reliées à l'auteur (E-E-A-T). */
const PROFILE_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Marc Devillers",
      url: "https://www.filtrio.fr/a-propos",
      jobTitle: "Éditeur de Filtrio",
      email: "mailto:contact@filtrio.fr",
      worksFor: {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Filtrio",
        url: "https://www.filtrio.fr",
      },
      sameAs: [
        "https://www.linkedin.com/in/marc-devillers",
        "https://www.malt.fr/profile/marcdevillers",
        "https://www.skopio.fr/a-propos",
        "https://www.bitclair.com/a-propos",
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Le vrai prix des outils IA en 2026",
    url: "https://www.webmarketing-com.com/prix-outils-ia",
    datePublished: "2026-06-23",
    inLanguage: "fr-FR",
    author: { "@id": PERSON_ID },
    publisher: {
      "@type": "Organization",
      name: "Webmarketing & co'm",
      url: "https://www.webmarketing-com.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "IA vidéo : la fin de l'illimité au profit des crédits",
    url: "https://www.journaldunet.com/intelligence-artificielle/1551371-ia-video-la-fin-de-l-illimite-au-profit-des-credits/",
    datePublished: "2026-06-15",
    inLanguage: "fr-FR",
    author: { "@id": PERSON_ID },
    publisher: {
      "@type": "Organization",
      name: "Journal du Net",
      url: "https://www.journaldunet.com",
    },
  },
];

export const metadata: Metadata = {
  title: "À propos, Comparateur d'outils IA pour créateurs vidéo",
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
      <JsonLd
        data={[getOrganizationSchema(), getWebsiteSchema(), ...PROFILE_SCHEMAS]}
      />
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
          <ul className="space-y-2 text-slate-300 leading-relaxed list-disc list-inside marker:text-emerald-400 pl-1">
            <li>comprendre rapidement à quoi sert vraiment un outil,</li>
            <li>voir ses limites autant que ses points forts,</li>
            <li>comparer plusieurs options sans jargon inutile.</li>
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
          <strong className="text-slate-100">{AUTEUR.nomComplet}</strong>,
          éditeur de Filtrio.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4 tracking-tight">
          Publications et contributions externes
        </h3>
        <ul className="space-y-3 text-slate-400 leading-relaxed list-disc list-inside marker:text-emerald-400 mb-6">
          <li>
            <a
              href="https://www.webmarketing-com.com/prix-outils-ia"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              « Le vrai prix des outils IA en 2026 »
            </a>
            , article invité publié sur Webmarketing &amp; co&apos;m le
            23 juin 2026, à partir des relevés de tarifs réalisés pour
            Filtrio.
          </li>
          <li>
            <a
              href="https://www.journaldunet.com/intelligence-artificielle/1551371-ia-video-la-fin-de-l-illimite-au-profit-des-credits/"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              « IA vidéo : la fin de l&apos;illimité au profit des crédits »
            </a>
            , chronique publiée sur le Journal du Net le 15 juin 2026, sur le
            basculement des outils d&apos;IA vidéo vers les modèles à crédits.
          </li>
          <li>
            Autres projets éditoriaux :{" "}
            <a
              href="https://www.skopio.fr"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Skopio
            </a>
            , comparateur d&apos;outils de cybersécurité grand public, et{" "}
            <a
              href="https://www.bitclair.com"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Bitclair
            </a>
            , comparateur de plateformes Bitcoin en France. Ces projets
            reposent sur les mêmes principes : méthode publique, prix
            vérifiés et datés, et transparence sur l&apos;affiliation.
          </li>
          <li>
            Profils professionnels :{" "}
            <a
              href="https://www.linkedin.com/in/marc-devillers"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              LinkedIn
            </a>{" "}
            et{" "}
            <a
              href="https://www.malt.fr/profile/marcdevillers"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Malt
            </a>
            .
          </li>
        </ul>
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

      {/* POUR COMMENCER, maillage */}
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

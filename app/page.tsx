import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { TrackedComparatifLink } from "@/components/TrackedComparatifLink";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";
import { JsonLd } from "@/components/JsonLd";
import { OUTILS, type Outil } from "@/lib/outils";
import { COMPARATIFS } from "@/lib/comparatifs";
import { CAS_USAGE } from "@/lib/cas-usage";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getFaqPageSchema,
} from "@/lib/schema";

// Mini-FAQ home, questions classiques de visiteur lambda
const HOME_FAQ: { question: string; answer: React.ReactNode }[] = [
  {
    question: "C'est gratuit, ces outils ?",
    answer: (
      <>
        Plusieurs outils comparés proposent un plan gratuit ou un essai
        sans carte bancaire (CapCut, OpusClip, Canva, ElevenLabs, VidIQ).
        Les outils les plus complets restent payants, à partir de 6 à 30
        €/mois selon le niveau.
      </>
    ),
  },
  {
    question: "Si je débute, je prends lequel ?",
    answer: (
      <>
        Pour des sous-titres rapides, viraux, en français : Submagic. Pour
        découper de longues vidéos en shorts automatiquement : OpusClip. Pour
        des miniatures et visuels propres : Canva. Tous les trois ont une
        prise en main très rapide pour un débutant.
      </>
    ),
  },
  {
    question: "Pourquoi tu ne notes pas tous les outils 10/10 ?",
    answer: (
      <>
        Notre note est relative, pas commerciale. Chaque outil est évalué
        sur 6 critères pondérés. Un outil peut être très bon sur la qualité
        FR mais moyen sur les intégrations, ce qui donne une note finale
        nuancée. Ces notes servent surtout à départager des outils d&apos;une
        même catégorie : comparer un outil de voix IA à un outil de design
        n&apos;aurait pas de sens.
      </>
    ),
  },
  {
    question: "Vos liens sont des liens affiliés ?",
    answer: (
      <>
        Certains liens vers les outils sont affiliés (Submagic, OpusClip,
        ElevenLabs, VidIQ). Les scores et les recommandations sont établis
        selon nos critères éditoriaux, <strong>jamais</strong> selon la
        commission. Nos recommandations par besoin incluent d&apos;ailleurs
        des outils qui ne nous rémunèrent pas, comme TubeBuddy et Canva.
        La méthodologie est publique.
      </>
    ),
  },
  {
    question: "Vous testez vraiment les outils ?",
    answer: (
      <>
        Phase actuelle (V1) : analyse documentaire approfondie + compilation
        des retours utilisateurs publics (G2, Trustpilot, Reddit, doc
        officielle) + prise en main des plans gratuits. Phase à venir (V2) :
        protocole de test comparatif standardisé sur sources vidéo
        identiques. Tout est dit sur la page Méthode.
      </>
    ),
  },
  {
    question: "Comment vous choisissez les outils comparés ?",
    answer: (
      <>
        Niche : créateurs vidéo (YouTube, TikTok / Shorts / Reels). Critère
        d&apos;entrée : l&apos;outil doit être utilisable dans au moins 2
        formats (long, shorts, voix, avatars, design). Pas d&apos;outil
        ajouté contre rémunération, jamais.
      </>
    ),
  },
];

/**
 * Recommandations par besoin.
 *
 * Un outil par usage, sélectionné uniquement sur les critères éditoriaux
 * publiés. Aucun critère commercial n'entre dans ce choix : TubeBuddy et
 * Canva y figurent alors qu'ils ne rapportent aucune commission à Filtrio.
 *
 * Pas de note globale affichée sur ces cartes : ces cinq outils relèvent de
 * catégories différentes et leurs scores ne sont pas comparables entre eux.
 */
const RECOMMANDATIONS: {
  slug: string;
  besoin: string;
  justification: string;
  href: string;
  hrefLabel: string;
}[] = [
  {
    slug: "submagic",
    besoin: "Sous-titrer des shorts en français",
    justification:
      "Meilleure note « Qualité en français » de notre catalogue. Sous-titres animés propres, prêts à publier, sans reprise manuelle.",
    href: "/cas-usage/sous-titrer-tiktok",
    hrefLabel: "Voir le guide sous-titres TikTok",
  },
  {
    slug: "opusclip",
    besoin: "Découper une vidéo longue en shorts",
    justification:
      "Le seul outil du catalogue dont c'est la fonction principale : détection automatique des passages forts et recadrage vertical.",
    href: "/cas-usage/video-longue-en-shorts",
    hrefLabel: "Voir le guide découpe en shorts",
  },
  {
    slug: "tubebuddy",
    besoin: "Optimiser le SEO de sa chaîne YouTube",
    justification:
      "Devant VidIQ sur nos critères, notamment les tests A/B de miniatures et l'optimisation de chaîne. Aucun lien affilié de notre côté.",
    href: "/comparatifs/vidiq-vs-tubebuddy",
    hrefLabel: "Voir le duel VidIQ vs TubeBuddy",
  },
  {
    slug: "elevenlabs",
    besoin: "Créer des voix off en français",
    justification:
      "Le rendu français le plus naturel de notre panel voix IA, avec le clonage vocal et le doublage multilingue.",
    href: "/outils/elevenlabs",
    hrefLabel: "Voir la fiche ElevenLabs",
  },
  {
    slug: "canva",
    besoin: "Créer des miniatures YouTube",
    justification:
      "Vainqueur de notre comparatif miniatures : templates, suppression de fond et contrôle créatif dans le même outil. Aucun lien affilié de notre côté.",
    href: "/cas-usage/miniatures-youtube-ia",
    hrefLabel: "Voir le comparatif miniatures",
  },
];

function hasRealAffiliateLink(o: Outil): boolean {
  return /^https?:\/\//.test(o.affiliateLink);
}

export default function HomePage() {
  const recommandations = RECOMMANDATIONS.flatMap((reco) => {
    const outil = OUTILS.find((o) => o.slug === reco.slug);
    return outil ? [{ ...reco, outil }] : [];
  });

  return (
    <>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getWebsiteSchema(),
          getFaqPageSchema(HOME_FAQ),
        ]}
      />
      <Nav ctaHref="#recommandations" />

      {/* HERO, direct, orienté utilité */}
      <section className="relative overflow-hidden">
        {/* Halos décoratifs full-width (clipés au viewport, pas au max-w-5xl) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-[60%] w-[560px] h-[560px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(52,211,153,0.65), rgba(52,211,153,0.15), transparent)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 left-1/2 translate-x-[10%] w-[440px] h-[440px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(52,211,153,0.55), rgba(52,211,153,0.10), transparent)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="relative inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Mise à jour ·{" "}
          {new Date().toLocaleDateString("fr-FR", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
          Quel outil IA pour{" "}
          <span className="text-emerald-400">tes vidéos</span> ?
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
          Filtrio est un comparateur indépendant pour créateurs vidéo.
          Tu nous dis ton besoin, on te dit quel outil prendre.
          Avec ses forces, ses limites et son prix.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#recommandations"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
          >
            Voir nos recommandations
          </Link>
          <Link
            href="/methode"
            className="border border-slate-700 hover:border-slate-600 px-6 py-3 rounded-lg transition"
          >
            Notre méthode
          </Link>
        </div>
        </div>
      </section>

      {/* FILTRIO DANS LES MÉDIAS, bloc crédibilité */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 md:p-6">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            Filtrio dans les médias
          </div>
          <p className="text-slate-300 leading-relaxed mb-3">
            Nos analyses sur les prix des outils IA ont été publiées par le
            Journal du Net et Webmarketing &amp; co&apos;m.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.journaldunet.com/intelligence-artificielle/1551371-ia-video-la-fin-de-l-illimite-au-profit-des-credits/"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Lire notre analyse sur le Journal du Net →
            </a>
            <a
              href="https://www.webmarketing-com.com/prix-outils-ia"
              target="_blank"
              rel="noopener"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Lire notre étude sur Webmarketing &amp; co&apos;m →
            </a>
          </div>
        </div>
      </section>

      {/* 3 ENTRÉES ACTIONNABLES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Tu ne sais pas par où commencer ?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Trois façons rapides de trouver l&apos;outil qu&apos;il te faut.
            Pas besoin de tout lire.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="#comparatifs"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Entrée 1
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
              Comparer deux outils
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Duels 1 contre 1 : OpusClip vs Submagic, VidIQ vs TubeBuddy,
              etc. Verdict clair par profil.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              Voir les comparatifs →
            </div>
          </Link>

          <Link
            href="#cas-usage"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Entrée 2
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
              Choisir par besoin
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Tu sais ce que tu veux faire (sous-titrer, clipper un podcast,
              générer une miniature). On te dit quel outil.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              Voir les cas d&apos;usage →
            </div>
          </Link>

          <Link
            href="#recommandations"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Entrée 3
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
              Aller droit au but
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Un outil recommandé pour chacun des cinq besoins les plus
              courants. Pas un palmarès, une réponse par usage.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              Voir nos recommandations →
            </div>
          </Link>
        </div>
      </section>

      {/* RECOMMANDATIONS PAR BESOIN */}
      <section
        id="recommandations"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Recommandations par besoin
            </div>
            <h2 className="text-4xl font-bold mb-3 tracking-tight">
              Dis-nous ce que tu veux faire.
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl">
              Un outil recommandé par usage, pas un palmarès général. Comparer
              un outil de voix IA à un outil de miniatures n&apos;aurait pas de
              sens : nos notes servent à départager des outils d&apos;une même
              catégorie, et c&apos;est pour ça qu&apos;elles ne figurent pas
              ici.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommandations.map(
              ({ outil: o, besoin, justification, href, hrefLabel }) => {
                const showTester = o.ficheAvailable && hasRealAffiliateLink(o);
                return (
                  <div
                    key={o.slug}
                    className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group flex flex-col"
                  >
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                      Tu veux…
                    </div>
                    <h3 className="text-lg font-bold mb-4 leading-snug">
                      {besoin}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xl font-bold text-${o.color}-400`}>
                        {o.name}
                      </span>
                      <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
                        Recommandé
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {justification}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-5">
                      {o.priceFrom && (
                        <span className="bg-slate-800 px-2 py-0.5 rounded">
                          {o.priceFrom}
                        </span>
                      )}
                      {o.freeTier && (
                        <span className="bg-slate-800 px-2 py-0.5 rounded">
                          {o.freeTier}
                        </span>
                      )}
                    </div>
                    <div className="mt-auto flex flex-col gap-3">
                      <Link
                        href={href}
                        className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
                      >
                        {hrefLabel} →
                      </Link>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/outils/${o.slug}`}
                          className="text-sm font-medium border border-slate-700 hover:border-slate-500 text-slate-200 px-4 py-2 rounded-lg transition"
                        >
                          Voir la fiche
                        </Link>
                        {showTester && (
                          <TrackedAffiliateLink
                            href={o.affiliateLink}
                            outilSlug={o.slug}
                            outilName={o.name}
                            source="home"
                            className={`text-sm font-semibold bg-${o.color}-500 hover:bg-${o.color}-400 text-slate-950 px-4 py-2 rounded-lg transition`}
                          >
                            Tester {o.name}
                          </TrackedAffiliateLink>
                        )}
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* COMPARATIFS */}
      <section id="comparatifs" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Comparatifs populaires
          </div>
          <h2 className="text-4xl font-bold mb-3 tracking-tight">
            Les duels que tu cherchais.
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Pour chaque combat, un verdict clair : qui gagne, pour qui, pourquoi.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {COMPARATIFS.map((c) => {
            const outilA = OUTILS.find((o) => o.slug === c.outilA);
            const outilB = OUTILS.find((o) => o.slug === c.outilB);
            return (
              <TrackedComparatifLink
                key={c.slug}
                href={`/comparatifs/${c.slug}`}
                slug={c.slug}
                source="home"
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group flex flex-col"
              >
                {/* Rounds visuels avec scores */}
                {outilA && (
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-${outilA.color}-500/10 border border-${outilA.color}-500/40 flex flex-col items-center justify-center flex-shrink-0`}
                    >
                      <span
                        className={`text-${outilA.color}-400 font-bold text-sm leading-none`}
                      >
                        {outilA.score.toFixed(1)}
                      </span>
                    </div>
                    {outilB ? (
                      <>
                        <span className="text-xs text-slate-500 font-bold">
                          VS
                        </span>
                        <div
                          className={`w-12 h-12 rounded-full bg-${outilB.color}-500/10 border border-${outilB.color}-500/40 flex flex-col items-center justify-center flex-shrink-0`}
                        >
                          <span
                            className={`text-${outilB.color}-400 font-bold text-sm leading-none`}
                          >
                            {outilB.score.toFixed(1)}
                          </span>
                        </div>
                      </>
                    ) : (
                      // Méta-page : visuel "alternatives groupées"
                      <>
                        <span className="text-xs text-slate-500 font-bold">
                          vs
                        </span>
                        <div className="flex -space-x-3">
                          <div className="w-9 h-9 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-slate-400 font-bold">
                            1
                          </div>
                          <div className="w-9 h-9 rounded-full bg-slate-600 border-2 border-slate-900 flex items-center justify-center text-[10px] text-slate-400 font-bold">
                            2
                          </div>
                          <div className="w-9 h-9 rounded-full bg-slate-500 border-2 border-slate-900 flex items-center justify-center text-[10px] text-slate-300 font-bold">
                            3+
                          </div>
                        </div>
                      </>
                    )}
                    <span className="ml-auto text-xs text-slate-500">
                      {c.tempsLecture} min
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
                  {c.titre}
                </h3>
                <p className="text-slate-400 text-sm mb-3 flex-1">
                  {c.description}
                </p>
                <div className="text-xs text-emerald-400 font-medium">
                  Lire le verdict →
                </div>
              </TrackedComparatifLink>
            );
          })}
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section id="cas-usage" className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Je veux faire ça, maintenant
            </div>
            <h2 className="text-4xl font-bold mb-3 tracking-tight">
              Tu sais ce que tu veux faire. On te dit quoi prendre.
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl">
              Pas de tutos à rallonge. Juste : voici le besoin, voici
              l&apos;outil, voici pourquoi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {CAS_USAGE.map((c) => (
              <Link
                key={c.slug}
                href={`/cas-usage/${c.slug}`}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition">
                  {c.titre}
                </h3>
                <p className="text-slate-400 text-sm">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE, version allégée */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
          Notre méthode
        </div>
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          Un scoring éditorial en 6 critères.
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-3xl">
          Voici notre grille de référence. C&apos;est le socle commun à tous
          les outils. Pour certaines catégories, un axe est remplacé par un
          critère plus pertinent : un outil collaboratif est jugé sur la
          collaboration, un générateur vidéo sur la qualité de génération. La
          grille appliquée est affichée en clair sur chaque fiche.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              ["Qualité en français", "20 %"],
              ["Rapport qualité/prix", "20 %"],
              ["Profondeur IA", "20 %"],
              ["Interface & prise en main", "15 %"],
              ["Support & confort FR", "15 %"],
              ["Intégrations", "10 %"],
            ].map(([label, poids]) => (
              <li
                key={label}
                className="flex items-center justify-between border-b border-slate-800 pb-2"
              >
                <span className="text-slate-200">{label}</span>
                <span className="text-emerald-400 font-semibold text-sm">
                  {poids}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-slate-400 mb-6 max-w-3xl">
          <strong className="text-slate-200">À quoi sert la note :</strong> à
          départager des outils d&apos;une même catégorie. Elle n&apos;est pas
          faite pour comparer un outil de voix IA à un outil de design. Aucun
          score n&apos;est influencé par une commission affiliée.
        </p>

        <p className="text-sm text-slate-400 mb-8 max-w-3xl">
          <strong className="text-slate-200">Phase actuelle (V1) :</strong>{" "}
          analyse documentaire approfondie + compilation des retours
          utilisateurs publics (G2, Trustpilot, Reddit, doc officielle) +
          prise en main des plans gratuits.{" "}
          <strong className="text-slate-200">Phase à venir :</strong> protocole
          de test comparatif standardisé.
        </p>

        <Link
          href="/methode"
          className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-600 px-5 py-3 rounded-lg transition"
        >
          Voir la méthode complète →
        </Link>
      </section>

      {/* FAQ, questions classiques visiteur lambda */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            On nous demande souvent
          </div>
          <h2 className="text-4xl font-bold mb-3 tracking-tight">
            Les questions qu&apos;on nous pose.
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mb-10">
            Tout ce que tu te demandes avant d&apos;utiliser Filtrio.
          </p>
          <div className="space-y-3">
            {HOME_FAQ.map((qa) => (
              <details
                key={qa.question}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-slate-800/40 transition">
                  <span className="font-semibold text-slate-100">
                    {qa.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="faq-chevron text-emerald-400 text-2xl leading-none transition-transform"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 leading-relaxed">
                  {qa.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

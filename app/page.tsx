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
        Plusieurs outils du classement proposent un plan gratuit ou un essai
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
        nuancée. C&apos;est ce qui rend le classement utile.
      </>
    ),
  },
  {
    question: "Vos liens sont des liens affiliés ?",
    answer: (
      <>
        Certains liens vers les outils sont affiliés (Submagic, OpusClip,
        ElevenLabs, VidIQ). Cela ne change <strong>jamais</strong> le
        classement éditorial. Les scores sont attribués avant tout calcul
        de commission, et la méthodologie est publique.
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
    question: "Comment vous choisissez les outils du classement ?",
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
 * Sélection éditoriale du top 5 home.
 * Choix manuel : on combine score élevé et capacité à monétiser.
 * VidIQ remplace TubeBuddy (programme affilié TubeBuddy fermé en 2026).
 */
const TOP_5_SLUGS = ["submagic", "opusclip", "canva", "runway", "vidiq"];

function hasRealAffiliateLink(o: Outil): boolean {
  return /^https?:\/\//.test(o.affiliateLink);
}

export default function HomePage() {
  const top5: Outil[] = TOP_5_SLUGS.map((slug) =>
    OUTILS.find((o) => o.slug === slug),
  ).filter((o): o is Outil => o !== undefined);

  return (
    <>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getWebsiteSchema(),
          getFaqPageSchema(HOME_FAQ),
        ]}
      />
      <Nav ctaHref="#top-outils" />

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
            href="#top-outils"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
          >
            Voir le top 5
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
            href="#top-outils"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Entrée 3
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
              Voir les meilleurs outils
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Classement par score éditorial sur 6 critères pondérés. Les
              outils qui tiennent la route, pas le buzz.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              Voir le top 5 →
            </div>
          </Link>
        </div>
      </section>

      {/* TOP 5 */}
      <section
        id="top-outils"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Top 5 du moment
            </div>
            <h2 className="text-4xl font-bold mb-3 tracking-tight">
              Les outils qui prennent clairement l&apos;avantage.
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl">
              Classement selon notre scoring éditorial sur 6 critères. Chaque
              fiche détaille les forces, limites honnêtes et le verdict direct.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {top5.map((o) => {
              const showTester = o.ficheAvailable && hasRealAffiliateLink(o);
              return (
                <div
                  key={o.slug}
                  className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-xl font-bold text-${o.color}-400`}>
                      {o.name}
                    </h3>
                    <span className={`text-${o.color}-400 font-bold`}>
                      {o.score.toFixed(1)}
                    </span>
                  </div>
                  <div className="text-sm text-slate-400 mb-4">{o.tagline}</div>
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
                  <div className="mt-auto flex flex-wrap gap-2">
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
              );
            })}
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
          Chaque outil est analysé sur la même grille, avec les mêmes
          pondérations. Aucun favoritisme, aucun classement dicté par la
          commission affiliée.
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

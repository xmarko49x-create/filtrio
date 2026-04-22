import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { outilsByScore } from "@/lib/outils";
import { COMPARATIFS } from "@/lib/comparatifs";
import { CAS_USAGE } from "@/lib/cas-usage";

export default function HomePage() {
  const top5 = outilsByScore(5);

  return (
    <>
      <Nav ctaHref="#top-outils" />

      {/* HERO — direct, orienté utilité */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
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
          Filtrio est un comparateur indépendant pour créateurs vidéo
          francophones. Tu donnes ton besoin, on te dit quel outil prendre —
          avec forces, limites et prix.
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
      </section>

      {/* 3 ENTRÉES ACTIONNABLES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
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
            {top5.map((o) => (
              <Link
                key={o.slug}
                href={`/outils/${o.slug}`}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className={`text-xl font-bold group-hover:text-${o.color}-400 transition`}
                  >
                    {o.name}
                  </h3>
                  <span className={`text-${o.color}-400 font-bold`}>
                    {o.score.toFixed(1)}
                  </span>
                </div>
                <div className="text-sm text-slate-400 mb-4">{o.tagline}</div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
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
              </Link>
            ))}
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
          {COMPARATIFS.map((c) => (
            <Link
              key={c.slug}
              href={`/comparatifs/${c.slug}`}
              className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold group-hover:text-emerald-400 transition">
                  {c.titre}
                </h3>
                <span className="text-xs text-slate-500">
                  {c.tempsLecture} min de lecture
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-3">{c.description}</p>
              <div className="text-xs text-emerald-400 font-medium">
                Lire le verdict →
              </div>
            </Link>
          ))}
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

      {/* MÉTHODE — version allégée */}
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

      <Newsletter />
      <Footer />
    </>
  );
}

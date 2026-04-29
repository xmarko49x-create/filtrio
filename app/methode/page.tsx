import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Notre méthode sans langue de bois",
  description:
    "6 critères d'évaluation, prix vérifiés, analyse des fonctionnalités, transparence affiliation et mises à jour régulières pour comparer les outils IA vidéo.",
  alternates: { canonical: "/methode" },
};

export default function MethodePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Dernière mise à jour · avril 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
          Comment Filtrio évalue les outils IA.
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          Filtrio note les outils sur 6 critères pondérés identiques, avec la
          même grille pour tous. Pas de listicle sponsorisé. Pas de classement
          acheté. Le scoring est défini avant toute considération de
          commission d&apos;affiliation.
        </p>
      </section>

      {/* GRILLE 6 CRITÈRES */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Le score éditorial Filtrio, en 6 critères.
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              [
                "Qualité en français",
                "20 %",
                "Rendu FR natif, pas traduit depuis l'anglais. Segmentation, ponctuation, accents, vocabulaire courant.",
              ],
              [
                "Rapport qualité/prix",
                "20 %",
                "Plans, limites, ce que tu obtiens pour ton budget. Positionnement par rapport aux alternatives.",
              ],
              [
                "Profondeur IA",
                "20 %",
                "Sophistication réelle des features IA, pas juste le buzz. Ce que l'outil fait concrètement mieux que la moyenne.",
              ],
              [
                "Interface & prise en main",
                "15 %",
                "Combien de clics avant ton premier résultat. Courbe d'apprentissage. Ergonomie au quotidien.",
              ],
              [
                "Support & confort FR",
                "15 %",
                "Documentation, ressources FR, support client, confort d'usage général pour un utilisateur français.",
              ],
              [
                "Intégrations",
                "10 %",
                "API, Zapier/Make, exports, connexions avec les autres outils du workflow.",
              ],
            ].map(([label, poids, desc]) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex justify-between items-start gap-4"
              >
                <div>
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {desc}
                  </div>
                </div>
                <div className="text-emerald-400 font-bold whitespace-nowrap">
                  {poids}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTE DES DONNÉES — resserrée */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">
          D&apos;où viennent les données.
        </h2>

        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold text-emerald-400 mb-2">
              Ce qu&apos;on fait
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Analyse documentaire approfondie de chaque outil : pages
              officielles, pricing, changelog. Compilation des retours
              utilisateurs publics (G2, Trustpilot, Reddit, documentation
              officielle). Prise en main des plans gratuits quand ils existent.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold text-emerald-400 mb-2">
              Ce qui arrive (Phase V2)
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Un protocole de tests comparatifs standardisés avec les mêmes
              sources vidéo pour tous les outils d&apos;une même catégorie. Les
              résultats détaillés seront publiés publiquement dès que le
              protocole est en place.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold text-emerald-400 mb-2">
              Ce qu&apos;on ne prétend pas faire
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Tester 30 jours chaque outil, auditer les moteurs IA à la trace,
              publier des benchmarks techniques propriétaires. Ce n&apos;est
              pas notre prétention actuelle. On livre un verdict honnête à
              partir des éléments publics à date.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSPARENCE AFFILIATION */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">
            Transparence affiliation.
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Certains liens sur ce site sont affiliés. Si tu t&apos;inscris à
              un outil via un de nos liens, Filtrio touche une commission. Cela
              ne change jamais le classement ni les scores.
            </p>
            <p>
              Pour éviter tout conflit : le scoring est défini{" "}
              <strong className="text-slate-100">avant</strong> de regarder les
              programmes d&apos;affiliation. Un outil avec une commission
              élevée mais un score faible ne sera jamais recommandé. Un outil
              sans programme d&apos;affiliation sera recommandé s&apos;il le
              mérite.
            </p>
          </div>
        </div>
      </section>

      {/* EXEMPLES CONCRETS — nouveau bloc maillage */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">
          La méthode appliquée concrètement.
        </h2>
        <p className="text-slate-300 leading-relaxed mb-8">
          La meilleure façon de juger la grille, c&apos;est de la voir en
          action. Voici quatre exemples de pages où le scoring, les forces, les
          limites et le verdict sont déroulés en entier.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/outils/submagic"
            className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
              Fiche outil
            </div>
            <div className="font-semibold group-hover:text-emerald-400 transition">
              Submagic — l&apos;avis complet
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Grille des 6 critères, plans réels, verdict par profil.
            </div>
          </Link>

          <Link
            href="/comparatifs/opusclip-vs-submagic"
            className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
              Comparatif
            </div>
            <div className="font-semibold group-hover:text-emerald-400 transition">
              OpusClip vs Submagic
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Deux outils notés sur la même grille, verdict par profil de
              créateur.
            </div>
          </Link>

          <Link
            href="/youtube"
            className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
              Page plateforme
            </div>
            <div className="font-semibold group-hover:text-emerald-400 transition">
              Les outils pour YouTube
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Classement des 12 outils les plus pertinents pour YouTubeurs.
            </div>
          </Link>

          <Link
            href="/tiktok-shorts"
            className="group p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
              Page plateforme
            </div>
            <div className="font-semibold group-hover:text-emerald-400 transition">
              Les outils pour TikTok / Shorts / Reels
            </div>
            <div className="text-sm text-slate-400 mt-1">
              10 outils analysés pour le format court et le rendu viral.
            </div>
          </Link>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

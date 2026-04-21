import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Notre méthode",
  description:
    "Comment Filtrio note les outils IA : 6 critères pondérés, méthodologie transparente, phase V1 documentaire et phase V2 de tests comparatifs.",
  alternates: { canonical: "/methode" },
};

export default function MethodePage() {
  return (
    <>
      <Nav />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Dernière mise à jour · avril 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
          Notre méthode. Pas de bullshit.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Filtrio note les outils IA sur 6 critères pondérés identiques, avec la
          même grille pour tous. On ne fait pas de listicle sponsorisé. On ne
          prend pas un pourcentage plus élevé pour monter quelqu&apos;un. Le
          scoring est indépendant de la commission.
        </p>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Score éditorial Filtrio : 6 critères pondérés.
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              ["Qualité en français", "20%", "Rendu FR natif, pas traduit depuis l'anglais"],
              ["Rapport qualité/prix", "20%", "Plans, limites, ce que tu obtiens pour ton budget"],
              ["Profondeur IA", "20%", "Sophistication des features IA, pas juste le buzz"],
              ["Interface & prise en main", "15%", "Combien de temps avant ton premier résultat"],
              ["Support & doc FR", "15%", "Ressources, communauté, réactivité"],
              ["Intégrations", "10%", "Zapier, API, exports, autres outils"],
            ].map(([label, poids, desc]) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex justify-between items-start gap-4"
              >
                <div>
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
                <div className="text-emerald-400 font-bold">{poids}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 tracking-tight">
          Comment on collecte les données.
        </h2>
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            <strong className="text-slate-100">Phase actuelle (V1) :</strong> les
            scores sont basés sur une analyse documentaire approfondie, la
            compilation de retours utilisateurs publics (G2, Trustpilot, Reddit,
            documentation officielle) et la prise en main des plans gratuits
            quand ils existent.
          </p>
          <p>
            <strong className="text-slate-100">Phase à venir (V2) :</strong>{" "}
            protocole de test comparatif standardisé avec sources vidéo
            identiques selon les cas d&apos;usage. Les résultats détaillés
            seront publiés publiquement dès que le protocole est en place.
          </p>
          <p>
            On ne prétend pas avoir testé chaque outil pendant 30 jours. Ce
            n&apos;est pas notre prétention. Ce qu&apos;on fait, c&apos;est
            collecter l&apos;information publique, la croiser, et livrer un
            verdict honnête à partir des éléments disponibles à date.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Transparence affiliation.
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Certains liens sur ce site sont affiliés. Si tu t&apos;inscris à
              un outil via un de nos liens, on touche une commission. Cela ne
              change jamais le classement ni les scores.
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

      <Newsletter />
      <Footer />
    </>
  );
}

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

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Mise à jour · {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
          Les outils IA des{" "}
          <span className="text-emerald-400">créateurs vidéo francophones</span>.
          <br />
          Analysés sans langue de bois.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl">
          Un comparateur indépendant dédié aux créateurs vidéo francophones. Notés
          sur 6 critères concrets. Mis à jour régulièrement.
        </p>
        <div className="flex flex-wrap gap-3">
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
      <section className="border-y border-slate-800 bg-slate-900/40">
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

      {/* MÉTHODE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
          Notre méthode
        </div>
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          Score éditorial Filtrio : 6 critères pondérés.
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-3xl">
          On ne note pas à la louche. Chaque outil est analysé sur 6 critères
          pondérés identiques, avec la même grille pour tous.
        </p>
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
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-sm text-slate-400">
          <p className="mb-2">
            <strong className="text-slate-200">Phase actuelle (V1) :</strong>{" "}
            scores basés sur une analyse documentaire approfondie, la
            compilation de retours utilisateurs publics (G2, Trustpilot, Reddit,
            documentation officielle) et la prise en main des plans gratuits.
          </p>
          <p>
            <strong className="text-slate-200">Phase à venir :</strong> protocole
            de test comparatif standardisé avec sources vidéo identiques selon
            les cas d&apos;usage. Les résultats détaillés seront publiés
            publiquement.
          </p>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

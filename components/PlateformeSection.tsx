import Link from "next/link";
import { OUTILS, type Outil } from "@/lib/outils";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";

interface PlateformeSectionProps {
  plateforme: "YouTube" | "TikTok / Shorts";
  /** Slugs des outils les plus pertinents (ordre = priorité). */
  outilsPrioritaires: string[];
  /**
   * Top 3 contextualisé pour cette plateforme (slugs explicites, dans l'ordre
   * d'affichage). Sélection éditoriale assumée : les outils vraiment
   * pertinents pour la plateforme (ex : TubeBuddy et VidIQ pour YouTube).
   * Aucun critère commercial n'intervient dans ce choix.
   *
   * Obligatoire : un oubli doit être signalé par TypeScript, pas faire
   * disparaître la section en silence.
   */
  top3Slugs: string[];
  /** Slugs des comparatifs pertinents. */
  comparatifsPertinents: { slug: string; titre: string; description: string }[];
  /** Slugs des cas d'usage pertinents. */
  casUsagePertinents: { slug: string; titre: string; description: string }[];
}

/** Détecte un vrai lien affilié vs un placeholder type `#aff-...`. */
function hasRealAffiliateLink(o: Outil): boolean {
  return /^https?:\/\//.test(o.affiliateLink);
}

export default function PlateformeSection({
  plateforme,
  outilsPrioritaires,
  top3Slugs,
  comparatifsPertinents,
  casUsagePertinents,
}: PlateformeSectionProps) {
  const outils: Outil[] = outilsPrioritaires
    .map((slug) => OUTILS.find((o) => o.slug === slug))
    .filter((o): o is Outil => o !== undefined);

  // Top 3 contextualisé pour la plateforme : liste explicite, dans l'ordre.
  // Sélection éditoriale de pertinence, pas un classement par score, et aucun
  // critère commercial. Aucun repli automatique : la prop est obligatoire.
  const top3: Outil[] = top3Slugs
    .map((slug) => OUTILS.find((o) => o.slug === slug && o.ficheAvailable))
    .filter((o): o is Outil => o !== undefined)
    .slice(0, 3);

  const labelTop3 = (i: number): string => {
    if (i === 0) return "Notre choix #1";
    if (i === 1) return "Notre choix #2";
    return "Notre choix #3";
  };

  return (
    <>
      {/* TOP 3 PICKS, format Wirecutter / NerdWallet : verdict éclair + gros CTA */}
      {top3.length >= 2 && (
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="mb-10">
            <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Notre sélection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Le top 3 pour {plateforme}.
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl">
              {`Sélection contextualisée pour ${plateforme}. Ces 3 outils couvrent les besoins clés d'un créateur sur cette plateforme, pas un classement par score absolu.`}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {top3.map((o, i) => {
              const showTester = hasRealAffiliateLink(o);
              const isWinner = i === 0;
              return (
                <div
                  key={o.slug}
                  className={`p-6 rounded-xl border flex flex-col ${
                    isWinner
                      ? `bg-${o.color}-500/5 border-${o.color}-500/30`
                      : "bg-slate-900 border-slate-800"
                  }`}
                >
                  {/* Pas de note affichée ici : ces 3 outils relèvent de
                      catégories différentes, aligner leurs scores donnerait à
                      lire un classement transversal qui n'en est pas un.
                      Les notes restent sur les fiches et dans le catalogue. */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isWinner
                          ? `text-${o.color}-400`
                          : "text-slate-500"
                      }`}
                    >
                      {labelTop3(i)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${o.color}-500/10 border border-${o.color}-500/30 flex items-center justify-center text-${o.color}-400 font-bold text-xl flex-shrink-0`}
                    >
                      {o.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold">{o.name}</h3>
                  </div>
                  <p className="text-sm text-slate-400 mb-3 flex-1">
                    {o.tagline}
                  </p>
                  {o.priceFrom && (
                    <p className="text-xs text-slate-500 mb-4">
                      {o.priceFrom}
                    </p>
                  )}
                  <div className="flex gap-2">
                    {showTester ? (
                      <TrackedAffiliateLink
                        href={o.affiliateLink}
                        outilSlug={o.slug}
                        outilName={o.name}
                        source="plateforme"
                        className={`flex-1 text-center text-sm font-semibold bg-${o.color}-500 hover:bg-${o.color}-400 text-slate-950 px-4 py-2.5 rounded-lg transition`}
                      >
                        Tester {o.name}
                      </TrackedAffiliateLink>
                    ) : (
                      <Link
                        href={`/outils/${o.slug}`}
                        className={`flex-1 text-center text-sm font-semibold bg-${o.color}-500 hover:bg-${o.color}-400 text-slate-950 px-4 py-2.5 rounded-lg transition`}
                      >
                        Voir {o.name}
                      </Link>
                    )}
                    {showTester && (
                      <Link
                        href={`/outils/${o.slug}`}
                        className="text-sm font-medium border border-slate-700 hover:border-slate-500 text-slate-200 px-4 py-2.5 rounded-lg transition"
                      >
                        Fiche
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* OUTILS PRIORITAIRES */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Pour aller plus loin
            </div>
            <h2 className="text-4xl font-bold mb-3 tracking-tight">
              Les outils utiles pour {plateforme}.
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl">
              Triés par pertinence pour {plateforme}. Pas par score. Les scores
              affichés servent à comparer des outils d&apos;une même catégorie,
              pas à les départager toutes catégories confondues. Le{" "}
              <Link
                href="/outils"
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                catalogue complet
              </Link>{" "}
              liste les 18 outils par ordre alphabétique.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outils.map((o) => {
              const showTester = o.ficheAvailable && hasRealAffiliateLink(o);
              if (!o.ficheAvailable) {
                return (
                  <div
                    key={o.slug}
                    className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl opacity-70"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-300">
                        {o.name}
                      </h3>
                      <span className="text-xs bg-slate-800 text-slate-500 px-2 py-0.5 rounded">
                        Fiche à venir
                      </span>
                    </div>
                    <div className="text-sm text-slate-400 mb-4">{o.tagline}</div>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                      {o.priceFrom && (
                        <span className="bg-slate-800 px-2 py-0.5 rounded">
                          {o.priceFrom}
                        </span>
                      )}
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={o.slug}
                  className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group flex flex-col"
                >
                  {/* Idem : liste multi-catégories, pas de note alignée. */}
                  <div className="mb-3">
                    <h3 className={`text-xl font-bold text-${o.color}-400`}>
                      {o.name}
                    </h3>
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
                        source="plateforme"
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
      {comparatifsPertinents.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Comparatifs utiles
            </div>
            <h2 className="text-4xl font-bold mb-3 tracking-tight">
              Les duels qui comptent sur {plateforme}.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {comparatifsPertinents.map((c) => (
              <Link
                key={c.slug}
                href={`/comparatifs/${c.slug}`}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition">
                  {c.titre}
                </h3>
                <p className="text-slate-400 text-sm mb-3">{c.description}</p>
                <div className="text-xs text-emerald-400 font-medium">
                  Lire le verdict →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CAS D'USAGE */}
      {casUsagePertinents.length > 0 && (
        <section className="border-y border-slate-800 bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="mb-12">
              <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                Je veux faire ça
              </div>
              <h2 className="text-4xl font-bold mb-3 tracking-tight">
                Les cas d&apos;usage {plateforme}.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {casUsagePertinents.map((c) => (
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
      )}
    </>
  );
}

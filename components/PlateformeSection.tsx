import Link from "next/link";
import { OUTILS, type Outil } from "@/lib/outils";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";

interface PlateformeSectionProps {
  plateforme: "YouTube" | "TikTok / Shorts";
  /** Slugs des outils les plus pertinents (ordre = priorité). */
  outilsPrioritaires: string[];
  /** Slugs des comparatifs pertinents. */
  comparatifsPertinents: { slug: string; titre: string; description: string }[];
  /** Slugs des cas d'usage pertinents. */
  casUsagePertinents: { slug: string; titre: string; description: string }[];
}

/** Détecte un vrai lien affilié vs un placeholder type `#aff-...`. */
function hasRealAffiliateLink(o: Outil): boolean {
  return /^https?:\/\//.test(o.affiliateLink);
}

/**
 * Pour un outil sans lien affilié, propose un outil alternatif :
 * - même catégorie
 * - avec lien affilié réel
 * - score le plus élevé
 * Retourne undefined si aucun match.
 */
function suggererAlternative(outil: Outil): Outil | undefined {
  if (hasRealAffiliateLink(outil)) return undefined;
  const candidats = OUTILS.filter(
    (o) =>
      o.slug !== outil.slug &&
      o.category === outil.category &&
      o.ficheAvailable &&
      hasRealAffiliateLink(o),
  ).sort((a, b) => b.score - a.score);
  return candidats[0];
}

export default function PlateformeSection({
  plateforme,
  outilsPrioritaires,
  comparatifsPertinents,
  casUsagePertinents,
}: PlateformeSectionProps) {
  const outils: Outil[] = outilsPrioritaires
    .map((slug) => OUTILS.find((o) => o.slug === slug))
    .filter((o): o is Outil => o !== undefined);

  return (
    <>
      {/* OUTILS PRIORITAIRES */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Les outils qui comptent
            </div>
            <h2 className="text-4xl font-bold mb-3 tracking-tight">
              Pour {plateforme}, voici le classement.
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl">
              Score éditorial Filtrio sur 6 critères identiques pour tous. Les
              fiches disponibles ouvrent l&apos;analyse complète.
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
              const alternative = suggererAlternative(o);
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
                        source="plateforme"
                        className={`text-sm font-semibold bg-${o.color}-500 hover:bg-${o.color}-400 text-slate-950 px-4 py-2 rounded-lg transition`}
                      >
                        Tester {o.name}
                      </TrackedAffiliateLink>
                    )}
                  </div>
                  {alternative && (
                    <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-500">
                      Pas de lien direct ici. Voir alternative{" "}
                      <Link
                        href={`/outils/${alternative.slug}`}
                        className={`text-${alternative.color}-400 hover:text-${alternative.color}-300 font-medium`}
                      >
                        {alternative.name} →
                      </Link>
                    </div>
                  )}
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

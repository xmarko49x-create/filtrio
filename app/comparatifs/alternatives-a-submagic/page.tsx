import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { colorHex } from "@/components/ScoreRing";
import { getOutilOrThrow, type TailwindColor } from "@/lib/outils";

export const metadata: Metadata = {
  title: "Alternatives à Submagic : 5 options sérieuses en 2026",
  description:
    "5 vraies alternatives à Submagic analysées sur 6 critères. 2 gratuites qui tiennent la route, 3 payantes qui font mieux sur certains cas précis.",
  alternates: { canonical: "/comparatifs/alternatives-a-submagic" },
};

interface Alternative {
  slug: string;
  positionnement: string;
  scoreAlt: number;
  pourquoi: string;
  limites: string;
  verdict: string;
  priceLabel: string;
}

const ALTERNATIVES: Alternative[] = [
  {
    slug: "capcut",
    positionnement: "Gratuit",
    scoreAlt: 8.5,
    pourquoi:
      "Éditeur vidéo complet + sous-titres auto. Rapport qualité/prix imbattable (c'est gratuit). La référence pour qui ne peut ou ne veut pas payer.",
    limites:
      "Moins spécialisé sur les sous-titres viraux FR. Le rendu demande de la personnalisation manuelle. ByteDance (TikTok) = certaines entreprises bloquent.",
    verdict:
      "Alternative n°1 si ton budget est zéro. Tu ne retrouveras pas les templates viraux prêts de Submagic, mais tu couvriras 80% des besoins.",
    priceLabel: "Gratuit",
  },
  {
    slug: "opusclip",
    positionnement: "Découpe auto",
    scoreAlt: 8.7,
    pourquoi:
      "Si ton vrai besoin est de découper du long format en shorts, OpusClip est plus spécialisé que Submagic sur ce point. Plan gratuit récurrent 60 min/mois.",
    limites:
      "Moins fort que Submagic sur le rendu final viral FR. Pas d'API publique équivalente. Payant au-delà des 60 min gratuites.",
    verdict:
      "Alternative complémentaire plutôt que concurrente. Le combo OpusClip + Submagic reste le setup le plus puissant.",
    priceLabel: "9 $/mois",
  },
  {
    slug: "descript",
    positionnement: "Long format",
    scoreAlt: 8.4,
    pourquoi:
      "Pour ceux qui font surtout du long format (podcasts, interviews, tutos). L'édition textuelle divise le temps de montage par 3-5. Studio Sound nettoie l'audio en un clic.",
    limites:
      "Pas optimal pour les shorts viraux (pas son cas d'usage). Plus cher (12 $/mois min). Interface moins intuitive au premier abord.",
    verdict:
      "Alternative si ton contenu principal est long et pas short. Pour le short viral FR, Submagic reste devant.",
    priceLabel: "12 $/mois",
  },
  {
    slug: "veed",
    positionnement: "Éditeur web",
    scoreAlt: 7.8,
    pourquoi:
      "Éditeur web polyvalent : montage, sous-titres, transcription, enregistrement. Bon compromis si tu veux un seul outil pour plusieurs besoins. Plan gratuit testable.",
    limites:
      "Sous-titres FR moins soignés que Submagic. Moins de templates viraux prêts. Performance IA généraliste, pas spécialisée.",
    verdict:
      "Alternative si tu veux un outil plus polyvalent que Submagic et moins spécialisé. Bon équilibre features/prix.",
    priceLabel: "12 $/mois",
  },
  {
    slug: "riverside",
    positionnement: "Podcast distant",
    scoreAlt: 8.1,
    pourquoi:
      "Si ton besoin est d'enregistrer des podcasts ou interviews à distance en qualité studio. Pas du tout le même usage que Submagic, mais souvent cité en alternative par confusion.",
    limites:
      "N'a rien à voir avec les shorts viraux. À considérer uniquement si tu cherches un outil podcast distant, pas un remplaçant Submagic.",
    verdict:
      "Fausse alternative dans la plupart des cas. Pertinent uniquement si tu as mal identifié ton vrai besoin.",
    priceLabel: "15 $/mois",
  },
];

export default function AlternativesASubmagicPage() {
  const submagic = getOutilOrThrow("submagic");

  return (
    <>
      <Nav ctaHref="#classement" />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300">
            Accueil
          </Link>
          <span>›</span>
          <span>Comparatifs</span>
          <span>›</span>
          <span className="text-slate-300">Alternatives à Submagic</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Mise à jour · avril 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
          Alternatives à <span className="text-amber-400">Submagic</span> : les
          5 options sérieuses en 2026
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl">
          5 vraies alternatives à Submagic, analysées sur leurs forces et
          faiblesses. 2 gratuites qui tiennent la route, 3 payantes qui font
          mieux sur certains cas précis. Pour chaque profil de créateur,
          l&apos;option qui a du sens.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 border-t border-slate-800 pt-6">
          <div>
            <span className="text-slate-400">Temps de lecture :</span> 7 min
          </div>
          <div>
            <span className="text-slate-400">Outils analysés :</span> 5
          </div>
          <div>
            <span className="text-slate-400">Dernière vérification :</span>{" "}
            20/04/2026
          </div>
        </div>
      </section>

      {/* REPÈRE SUBMAGIC */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-amber-500/10 to-emerald-500/5 border border-amber-500/20 rounded-2xl p-8">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
            Le point de référence
          </div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            Pourquoi chercher une alternative à Submagic ?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Submagic reste le plus fort sur les sous-titres viraux FR, avec le
            score éditorial Filtrio le plus élevé ({submagic.score.toFixed(1)}).
            Mais il a des limites : pas d&apos;API, pas de vraie gratuité
            récurrente, facturation USD uniquement, pas optimal pour le long
            format.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Selon ton cas d&apos;usage (budget zéro, long format, équipe,
            podcast distant, workflow automatisé), une alternative peut être
            plus adaptée. Voici les 5 options qu&apos;on recommande.
          </p>
        </div>
      </section>

      {/* CLASSEMENT */}
      <section id="classement" className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
            Les 5 alternatives analysées
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Classement par score éditorial.
          </h2>
          <div className="space-y-4">
            {ALTERNATIVES.map((alt, i) => (
              <AlternativeCard key={alt.slug} alt={alt} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CHOISIR */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
          Comment choisir en 60 secondes
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">
          Ta vraie question n&apos;est pas &quot;laquelle&quot; mais &quot;pourquoi&quot;.
        </h2>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-1">Tu cherches une alternative gratuite ?</h3>
              <p className="text-slate-400 text-sm">
                →{" "}
                <Link href="/outils/capcut" className="text-sky-400 hover:underline">
                  CapCut
                </Link>
                . C&apos;est la meilleure option zéro budget. Le compromis :
                moins stylé, plus de travail manuel.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Tu veux découper du long format en shorts ?
              </h3>
              <p className="text-slate-400 text-sm">
                →{" "}
                <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
                  OpusClip
                </Link>
                . Spécialisé sur ce cas, pas Submagic. Combo OpusClip +
                Submagic = setup pro complet.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-1">Ton besoin principal est le long format ?</h3>
              <p className="text-slate-400 text-sm">
                →{" "}
                <Link href="/outils/descript" className="text-violet-400 hover:underline">
                  Descript
                </Link>
                . Édition textuelle révolutionnaire pour podcasts et tutos
                longs. Pas concurrent direct Submagic.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              4
            </div>
            <div>
              <h3 className="font-semibold mb-1">Tu veux un éditeur polyvalent ?</h3>
              <p className="text-slate-400 text-sm">
                →{" "}
                <Link href="/outils/veed" className="text-yellow-400 hover:underline">
                  Veed
                </Link>
                . Tout-en-un web, bon compromis features/prix pour les
                créateurs qui veulent un seul outil.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              5
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Dans 90% des cas, Submagic reste le meilleur choix.
              </h3>
              <p className="text-slate-400 text-sm">
                Si ton usage principal est les shorts viraux FR, aucune de ces
                alternatives ne fait vraiment mieux. Reste sur Submagic.{" "}
                <Link href="/outils/submagic" className="text-amber-400 hover:underline">
                  Voir la fiche Submagic
                </Link>
                .
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
            FAQ
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Les questions qui reviennent.
          </h2>
          <div className="space-y-4">
            <details className="group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-amber-500/30">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>Submagic vaut-il encore ses 14 $/mois en 2026 ?</span>
                <span className="faq-chevron transition-transform text-amber-400">+</span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">
                Oui pour un créateur qui publie régulièrement sur TikTok/Reels/Shorts en français. Le rendu et la rapidité justifient le prix sur ce cas précis. Pour d&apos;autres usages, les alternatives ci-dessus font mieux.
              </div>
            </details>
            <details className="group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-amber-500/30">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>Peut-on utiliser CapCut gratuit sans limite ?</span>
                <span className="faq-chevron transition-transform text-amber-400">+</span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">
                Oui, le plan gratuit CapCut n&apos;a pas de limite de durée d&apos;utilisation. Certains assets sont watermarkés, mais l&apos;éditeur complet est accessible. La vraie limite est qualitative : le rendu demande plus de travail manuel pour approcher celui de Submagic.
              </div>
            </details>
            <details className="group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-amber-500/30">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>OpusClip remplace-t-il Submagic ?</span>
                <span className="faq-chevron transition-transform text-amber-400">+</span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">
                Non, outils complémentaires. OpusClip découpe, Submagic soigne le rendu final. Les deux ensemble = workflow pro pour qui produit beaucoup. Voir le{" "}
                <Link href="/comparatifs/opusclip-vs-submagic" className="text-emerald-400 hover:underline">
                  comparatif OpusClip vs Submagic
                </Link>
                .
              </div>
            </details>
            <details className="group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-amber-500/30">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>Existe-t-il des alternatives 100% françaises ?</span>
                <span className="faq-chevron transition-transform text-amber-400">+</span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">
                Submagic est déjà français (fondé par David Zitoun). Parmi les alternatives, il n&apos;y a pas d&apos;équivalent FR vraiment compétitif sur le short viral. Veed est UK, Kapwing US, CapCut chinois. Le terrain reste largement dominé par Submagic côté FR.
              </div>
            </details>
            <details className="group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-amber-500/30">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>Quelle alternative pour une facturation en euros ?</span>
                <span className="faq-chevron transition-transform text-amber-400">+</span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">
                Canva et Veed proposent la facturation EUR native avec TVA FR. Submagic facture en USD uniquement. Si la conformité comptable FR est critique, ces alternatives te simplifient la vie côté admin.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-slate-800 bg-gradient-to-b from-slate-900/40 to-amber-500/5">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
            Prêt à choisir ?
          </div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Dans 90% des cas, reste sur Submagic.
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Les alternatives ci-dessus ne battent Submagic que sur des cas
            précis (gratuit, long format, podcast distant). Pour le short
            viral FR, Submagic reste la référence la plus complète du marché.
          </p>
          <Link
            href="/outils/submagic"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition text-lg"
          >
            Voir la fiche Submagic →
          </Link>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

function AlternativeCard({ alt, rank }: { alt: Alternative; rank: number }) {
  const outil = getOutilOrThrow(alt.slug);
  const c: TailwindColor = outil.color;
  const hex = colorHex(c);
  const pct = Math.round(alt.scoreAlt * 10);

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0 flex flex-col items-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: `conic-gradient(${hex} ${pct}%, #1e293b 0)` }}
          >
            <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold" style={{ color: hex }}>
                {alt.scoreAlt.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="text-xs text-slate-500 mt-2">Score éditorial</div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-2xl font-bold mb-1">
                {rank}. {outil.name}
              </h3>
              <span className={`bg-${c}-500/10 text-${c}-400 text-xs font-semibold px-2 py-1 rounded`}>
                {alt.positionnement}
              </span>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-sm text-slate-500">Prix</div>
              <div className="text-xl font-bold">{alt.priceLabel}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-5">
            <div className="text-sm">
              <div className="font-semibold text-emerald-400 mb-2">Pourquoi</div>
              <p className="text-slate-300">{alt.pourquoi}</p>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-rose-400 mb-2">Limites</div>
              <p className="text-slate-300">{alt.limites}</p>
            </div>
          </div>

          <div
            className={`mt-5 p-4 bg-slate-800/50 border-l-2 border-${c}-500 rounded-r text-sm`}
          >
            <span className={`font-semibold text-${c}-400`}>Verdict : </span>
            <span className="text-slate-200">{alt.verdict}</span>
          </div>

          {outil.ficheAvailable && (
            <div className="flex gap-3 mt-5">
              <Link
                href={`/outils/${outil.slug}`}
                className="border border-slate-700 hover:border-slate-600 px-5 py-2.5 rounded-lg text-sm transition"
              >
                Voir la fiche {outil.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

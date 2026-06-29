import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { colorHex } from "@/components/ScoreRing";
import { getOutilOrThrow, type TailwindColor } from "@/lib/outils";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";

export const metadata: Metadata = {
  title: {
    absolute:
      "Alternative à Submagic : 6 outils pour sous-titrer et monter des shorts en 2026",
  },
  description:
    "5 alternatives sérieuses à Submagic pour sous-titrer et monter des shorts, comparées à Submagic comme référence : forces, limites, prix et niveau de sous-titrage en français.",
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
      "OpusClip propose un plan gratuit, puis une offre payante à partir de 15 $/mois. Si ton vrai besoin est de découper du long format en shorts, OpusClip est plus spécialisé que Submagic sur ce point.",
    limites:
      "Le plan gratuit reste utile pour tester, mais il inclut un watermark, sans édition, avec une limite d'export dans le temps. Moins fort que Submagic sur le rendu final viral FR.",
    verdict:
      "Alternative complémentaire plutôt que concurrente. Le combo OpusClip + Submagic reste un des setups les plus complets.",
    priceLabel: "À partir de 15 $/mois",
  },
  {
    slug: "descript",
    positionnement: "Long format",
    scoreAlt: 8.4,
    pourquoi:
      "Pour ceux qui font surtout du long format (podcasts, interviews, tutos). L'édition textuelle divise le temps de montage par 3-5. Studio Sound nettoie l'audio en un clic.",
    limites:
      "Pas optimal pour les shorts viraux (pas son cas d'usage). Plus cher (à partir de 16 $/mois). Interface moins intuitive au premier abord.",
    verdict:
      "Alternative si ton contenu principal est long et pas short. Pour le short viral FR, Submagic reste devant.",
    priceLabel: "À partir de 16 $/mois",
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
    priceLabel: "À partir de 10,75 €/mois",
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
    priceLabel: "À partir de 24 $/mois",
  },
];

/**
 * Tableau comparatif d'entrée de page.
 * Prix d'entrée alignés sur lib/outils.ts (vérifiés au fil des sessions).
 * Prix Captions vérifiés en LIVE le 29/06/2026 depuis captions.ai/pricing :
 * inscription gratuite (version Free), plan payant le moins cher affiché =
 * Max à 24,99 $/mois (prix iOS, USD), un plan Pro existe sans tarif affiché.
 * Captions n'a pas encore de fiche complète sur Filtrio (lien direct, non affilié).
 */
interface TableRow {
  nom: string;
  gratuit: string;
  prix: string;
  meilleurPour: string;
  sousTitresFR: string;
  ref?: boolean;
}

const TABLE_ROWS: TableRow[] = [
  {
    nom: "Submagic",
    gratuit: "Essai limité",
    prix: "12 €/mois",
    meilleurPour: "Sous-titres viraux courts en français",
    sousTitresFR: "La référence du classement",
    ref: true,
  },
  {
    nom: "Captions",
    gratuit: "Oui (version Free)",
    prix: "24,99 $/mois",
    meilleurPour: "Création tout-IA (acteurs IA, B-roll, voix)",
    sousTitresFR: "Solides, 100+ langues, interface en anglais",
  },
  {
    nom: "OpusClip",
    gratuit: "Oui (avec watermark)",
    prix: "15 $/mois",
    meilleurPour: "Découper du long format en shorts",
    sousTitresFR: "Bons, un cran sous Submagic",
  },
  {
    nom: "CapCut",
    gratuit: "Oui (éditeur complet)",
    prix: "Gratuit, Pro à 199,99 €/an",
    meilleurPour: "Éditeur gratuit polyvalent",
    sousTitresFR: "Corrects, plus de réglage manuel",
  },
  {
    nom: "Veed",
    gratuit: "Oui",
    prix: "10,75 €/mois",
    meilleurPour: "Éditeur web tout-en-un",
    sousTitresFR: "Moins soignés que Submagic",
  },
  {
    nom: "Descript",
    gratuit: "Oui",
    prix: "16 $/mois",
    meilleurPour: "Long format, podcasts, tutos",
    sousTitresFR: "Bons en long format, pas le short viral",
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
          <span className="text-slate-300">Alternative à Submagic</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Mise à jour · juin 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
          Alternative à <span className="text-amber-400">Submagic</span> : les
          6 outils sérieux en 2026
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl">
          5 alternatives sérieuses à Submagic, comparées à Submagic comme point
          de référence, avec leurs forces, leurs limites, leurs prix et leur
          niveau de sous-titrage en français.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 border-t border-slate-800 pt-6">
          <div>
            <span className="text-slate-400">Temps de lecture :</span> 9 min
          </div>
          <div>
            <span className="text-slate-400">Outils comparés :</span> 6
          </div>
          <div>
            <span className="text-slate-400">Dernière mise à jour :</span>{" "}
            29/06/2026
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
            Mais il a des limites : pas de plan gratuit récurrent (seulement un
            essai limité), positionnement dans la fourchette haute de sa
            catégorie, pas optimal pour le clipping massif de long format.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Selon ton cas d&apos;usage (budget zéro, long format, équipe,
            podcast distant, workflow automatisé), une alternative peut être
            plus adaptée. Voici les options qu&apos;on recommande.
          </p>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
          Vue d&apos;ensemble
        </div>
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Submagic face à ses alternatives, en un coup d&apos;œil
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8 max-w-3xl">
          Les six outils côte à côte sur ce qui compte vraiment quand on
          cherche à remplacer Submagic : le plan gratuit, le prix
          d&apos;entrée, le cas d&apos;usage idéal et la qualité des
          sous-titres en français. Submagic sert de point de référence.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-sm text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="bg-slate-900 text-slate-300">
                <th className="px-4 py-3 font-semibold">Outil</th>
                <th className="px-4 py-3 font-semibold">Plan gratuit</th>
                <th className="px-4 py-3 font-semibold">Prix d&apos;entrée</th>
                <th className="px-4 py-3 font-semibold">Meilleur pour</th>
                <th className="px-4 py-3 font-semibold">Sous-titres FR</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row) => (
                <tr
                  key={row.nom}
                  className={`border-t border-slate-800 ${
                    row.ref ? "bg-amber-500/5" : "bg-slate-900/40"
                  }`}
                >
                  <td className="px-4 py-3 font-semibold text-slate-100 whitespace-nowrap">
                    {row.nom}
                    {row.ref && (
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-amber-400">
                        Référence
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-300">{row.gratuit}</td>
                  <td className="px-4 py-3 text-slate-300 whitespace-nowrap">
                    {row.prix}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {row.meilleurPour}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {row.sousTitresFR}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">
          Prix d&apos;entrée relevés sur les pages officielles. Le détail et la
          date de vérification figurent sur chaque fiche outil. Captions
          n&apos;a pas encore de fiche complète sur Filtrio ; les prix indiqués
          ont été vérifiés le 29/06/2026 depuis les pages publiques (version
          gratuite à l&apos;inscription, plan Max à 24,99 $/mois affiché en prix
          iOS USD, un plan Pro existe sans tarif affiché).
        </p>
      </section>

      {/* FOCUS CAPTIONS */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            Et Captions, l&apos;alternative qu&apos;on oublie souvent
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Captions est l&apos;une des alternatives à Submagic les plus
            citées, mais elle joue un jeu différent. Là où Submagic se
            concentre sur des sous-titres animés très soignés, Captions vise la
            création vidéo entièrement assistée par IA : acteurs IA, génération
            de B-roll, voix off et montage piloté au chat. Le sous-titrage
            existe et gère plus de 100 langues, mais l&apos;interface est en
            anglais et l&apos;outil est surtout pensé pour produire des vidéos
            de bout en bout.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Concrètement : si ton besoin est juste de sous-titrer des shorts en
            français, Submagic reste plus direct et mieux localisé. Si tu veux
            générer des vidéos complètes avec des avatars et du B-roll IA,
            Captions devient une vraie option, à un prix plus élevé (plan Max à
            24,99 $/mois affiché côté iOS). Captions n&apos;a pas encore de
            fiche complète sur Filtrio, donc pas de score éditorial pour
            l&apos;instant ; les prix indiqués ont été vérifiés le 29/06/2026
            depuis les pages publiques.
          </p>
          <a
            href="https://www.captions.ai/"
            rel="noopener nofollow"
            target="_blank"
            className="inline-block mt-5 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold px-5 py-2.5 rounded-lg text-sm transition"
          >
            Aller sur Captions →
          </a>
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

      {/* QUELLE ALTERNATIVE SELON USAGE */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
          Le bon choix selon ton cas
        </div>
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Quelle alternative à Submagic choisir selon ton usage ?
        </h2>
        <p className="text-slate-400 leading-relaxed mb-10 max-w-3xl">
          Il n&apos;y a pas de meilleure alternative dans l&apos;absolu,
          seulement celle qui colle à ton usage réel. Voici la recommandation
          pour chaque profil de créateur.
        </p>
        <ol className="space-y-6 list-none">
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Budget zéro : tu ne veux rien payer
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Va sur{" "}
                <Link href="/outils/capcut" className="text-sky-400 hover:underline">
                  CapCut
                </Link>
                , l&apos;un des éditeurs gratuits les plus complets, avec sous-titres
                automatiques inclus. Le compromis : un rendu moins stylé que
                Submagic et plus de réglage manuel pour approcher le même
                résultat. Pour la plupart des besoins de base, ça suffit
                largement.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Tu pars de vidéos longues à découper en shorts
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prends{" "}
                <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
                  OpusClip
                </Link>
                , spécialisé dans le repérage des meilleurs moments d&apos;une
                vidéo longue. Ce n&apos;est pas le terrain de Submagic. Le combo
                le plus courant reste OpusClip pour découper, puis Submagic
                pour soigner le rendu final des sous-titres.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Ton contenu principal est du long format
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Regarde{" "}
                <Link href="/outils/descript" className="text-violet-400 hover:underline">
                  Descript
                </Link>
                , dont l&apos;édition basée sur le texte fait gagner beaucoup de
                temps sur les podcasts, interviews et tutos. Ce n&apos;est pas un
                concurrent direct de Submagic : pour le short viral en français,
                Submagic reste devant.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              4
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Tu veux un seul outil polyvalent
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Essaie{" "}
                <Link href="/outils/veed" className="text-yellow-400 hover:underline">
                  Veed
                </Link>
                , un éditeur web tout-en-un (montage, sous-titres,
                transcription, enregistrement). Bon compromis features/prix si
                tu préfères centraliser plutôt que d&apos;empiler plusieurs
                outils spécialisés. Les sous-titres FR sont un cran sous ceux de
                Submagic.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              5
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Tu veux générer des vidéos entières avec l&apos;IA
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tourne-toi vers Captions, pensé pour la création tout-IA :
                acteurs IA, B-roll généré, voix off et montage au chat. Bien
                plus large que le seul sous-titrage, mais plus cher et en
                anglais. Pour du simple sous-titrage en français, ça dépasse le
                besoin.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              6
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Ton usage principal, ce sont les shorts viraux en français
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reste sur{" "}
                <Link href="/outils/submagic" className="text-amber-400 hover:underline">
                  Submagic
                </Link>
                . C&apos;est le cas où aucune des alternatives ci-dessus ne fait
                vraiment mieux : rendu des sous-titres, rapidité et localisation
                française sont ses points forts. Les alternatives ne prennent
                l&apos;avantage que sur des besoins différents.
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
                <span>Submagic vaut-il encore son abonnement en 2026 ?</span>
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
                <span>Captions est-il une bonne alternative à Submagic ?</span>
                <span className="faq-chevron transition-transform text-amber-400">+</span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">
                Ça dépend de ton besoin. Pour sous-titrer des shorts en
                français, Submagic reste plus direct et mieux localisé. Captions
                devient intéressant si tu veux générer des vidéos entières avec
                des acteurs IA, du B-roll et de la voix off, qui est son vrai
                terrain. Son plan payant démarre plus haut (Max à 24,99 $/mois
                affiché côté iOS) et l&apos;interface est en anglais.
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
            Dans la plupart des cas, reste sur Submagic.
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Les alternatives ci-dessus ne battent Submagic que sur des cas
            précis (gratuit, long format, podcast distant). Pour le short
            viral FR, Submagic reste l&apos;option la plus complète de notre
            classement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TrackedAffiliateLink
              href={submagic.affiliateLink}
              outilSlug="submagic"
              outilName="Submagic"
              source="comparatif"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition text-lg"
            >
              Tester Submagic →
            </TrackedAffiliateLink>
            <Link
              href="/outils/submagic"
              className="inline-block border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold px-8 py-4 rounded-xl transition text-lg"
            >
              Voir la fiche Submagic
            </Link>
          </div>
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
  const hasRealAffiliateLink = /^https?:\/\//.test(outil.affiliateLink);

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
            <div className="flex flex-wrap gap-3 mt-5">
              {hasRealAffiliateLink && (
                <TrackedAffiliateLink
                  href={outil.affiliateLink}
                  outilSlug={outil.slug}
                  outilName={outil.name}
                  source="comparatif"
                  className={`bg-${c}-500 hover:bg-${c}-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition`}
                >
                  Tester {outil.name} →
                </TrackedAffiliateLink>
              )}
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

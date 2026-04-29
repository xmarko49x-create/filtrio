import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBio } from "@/components/AuthorBio";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";
import { getOutilOrThrow, type Outil } from "@/lib/outils";
import { getFaqPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const SLUG = "outils-shorts-tiktok-2026";
const TITLE = "Comparatif des outils IA pour shorts et TikTok en 2026";
const SUBTITLE =
  "Submagic, OpusClip, Descript, CapCut, Veed et Kapwing comparés sur 12 critères. Tableau côte à côte, recommandation par profil, verdict tranché.";
const LAST_CHECK = "29/04/2026";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Le grand comparatif 2026 des 6 outils de référence pour créer des shorts, TikTok et Reels. Sous-titres, clipping IA, prix, plan gratuit, qualité FR : tout sur la même page.",
  alternates: { canonical: `/comparatifs/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: SUBTITLE,
    type: "article",
  },
};

/* ---------- DATA ---------- */

interface OutilCard {
  slug: string;
  badge: string; // 1-2 mots qui résument la position de l'outil
  bestFor: string; // 1 phrase courte qui décrit le profil idéal
  forceMajeure: string; // l'argument numéro 1
  faiblesseMajeure: string; // ce que l'outil ne fait pas bien
}

const OUTILS_COMPARES: OutilCard[] = [
  {
    slug: "submagic",
    badge: "Le plus FR",
    bestFor: "TikTokeurs et créateurs de shorts qui veulent un rendu viral propre en français.",
    forceMajeure: "La meilleure précision FR du marché et des templates animés vraiment utilisables.",
    faiblesseMajeure: "Pas pensé pour le clipping massif depuis une vidéo longue.",
  },
  {
    slug: "opusclip",
    badge: "Le clippeur IA",
    bestFor: "YouTubeurs qui veulent transformer leurs vidéos longues en shorts.",
    forceMajeure: "L'IA détecte automatiquement les meilleurs passages d'une vidéo et génère des shorts prêts à publier.",
    faiblesseMajeure: "Sous-titres FR moins finis que Submagic.",
  },
  {
    slug: "descript",
    badge: "L'édition textuelle",
    bestFor: "Podcasteurs et créateurs long format qui veulent éditer comme dans un Word.",
    forceMajeure: "Édition textuelle révolutionnaire : tu corriges la transcription, la vidéo se modifie.",
    faiblesseMajeure: "Pas le meilleur pour des shorts purement viraux.",
  },
  {
    slug: "capcut",
    badge: "Le gratuit roi",
    bestFor: "Débutants sans budget qui veulent un éditeur complet sans payer.",
    forceMajeure: "Gratuit avec une qualité largement suffisante. Communauté massive sur TikTok.",
    faiblesseMajeure: "Sous-titres FR moins automatisés, plus manuels que Submagic.",
  },
  {
    slug: "veed",
    badge: "Le couteau suisse web",
    bestFor: "Marketeurs qui veulent un seul outil pour vidéo, sous-titres et templates.",
    forceMajeure: "Tout dans le navigateur, sans installation, avec une bibliothèque de templates conséquente.",
    faiblesseMajeure: "Moyen partout, excellent nulle part. Prix qui grimpe vite avec les features Pro.",
  },
  {
    slug: "kapwing",
    badge: "Le collaboratif",
    bestFor: "Équipes et agences qui éditent des vidéos à plusieurs.",
    forceMajeure: "Édition en temps réel à plusieurs, comme Google Docs pour la vidéo.",
    faiblesseMajeure: "Sous-titres et templates moins avancés que les spécialistes.",
  },
];

interface CritereLine {
  label: string;
  // Une cellule par outil dans l'ordre de OUTILS_COMPARES
  values: string[];
  highlight?: number; // index du gagnant (mise en avant)
}

const CRITERES_TABLEAU: CritereLine[] = [
  {
    label: "Score éditorial Filtrio",
    values: ["9.2 / 10", "8.7 / 10", "8.4 / 10", "7.8 / 10", "7.8 / 10", "7.2 / 10"],
    highlight: 0,
  },
  {
    label: "Spécialité principale",
    values: [
      "Sous-titres viraux",
      "Clipping IA auto",
      "Édition long format",
      "Éditeur tout-en-un",
      "Éditeur web",
      "Édition collab",
    ],
  },
  {
    label: "Prix de départ",
    values: [
      "12 €/mois (annuel)",
      "15 $/mois",
      "16 $/mois (annuel)",
      "Gratuit",
      "10,75 €/mois (annuel)",
      "16 $/mois (annuel)",
    ],
    highlight: 3,
  },
  {
    label: "Plan gratuit récurrent",
    values: [
      "Essai 3 vidéos",
      "60 crédits/mois",
      "Plan Free disponible",
      "Oui, complet",
      "Plan Free disponible",
      "Plan Free disponible",
    ],
    highlight: 3,
  },
  {
    label: "Qualité sous-titres FR",
    values: ["Excellente", "Correcte", "Très bonne", "Bonne", "Bonne", "Correcte"],
    highlight: 0,
  },
  {
    label: "Templates animés",
    values: ["Excellents", "Limités", "Bons", "Excellents", "Très bons", "Bons"],
  },
  {
    label: "Clipping IA depuis longue vidéo",
    values: [
      "Avec Magic Clips",
      "Cœur du produit",
      "Indirect",
      "Manuel",
      "Limité",
      "Manuel",
    ],
    highlight: 1,
  },
  {
    label: "Édition textuelle (transcript-based)",
    values: ["Non", "Non", "Excellente", "Non", "Limitée", "Limitée"],
    highlight: 2,
  },
  {
    label: "Export 4K",
    values: ["Pro+ uniquement", "Plan Pro", "Plan Pro", "Avec Pro", "Plan Pro", "Plan Pro"],
  },
  {
    label: "App mobile",
    values: ["Web", "Web", "Web + macOS", "iOS + Android", "Web", "Web"],
    highlight: 3,
  },
  {
    label: "Collaboration équipe",
    values: ["Limitée", "Limitée", "Bonne", "Limitée", "Correcte", "Excellente"],
    highlight: 5,
  },
  {
    label: "Programme affilié actif chez Filtrio",
    values: ["Oui", "Oui", "Non (PartnerStack)", "Non", "Non (sélectif)", "Non (Tapfiliate)"],
  },
];

interface Profil {
  emoji: string;
  titre: string;
  description: string;
  recommandation: string; // slug de l'outil
  raisons: string[];
}

const PROFILS: Profil[] = [
  {
    emoji: "🚀",
    titre: "Tu fais tes premiers TikTok et tu n'as pas un euro à mettre",
    description:
      "Tu démarres, tu découvres les outils, tu n'es pas sûr de tenir 6 mois. La gratuité prime.",
    recommandation: "capcut",
    raisons: [
      "100 % gratuit sans watermark",
      "Apps iOS et Android complètes",
      "Communauté FR énorme avec des tutos partout",
      "Tu peux toujours upgrader vers Submagic plus tard si tu deviens régulier",
    ],
  },
  {
    emoji: "🎬",
    titre: "Tu publies 3-5 shorts par semaine et tu vises la viralité",
    description:
      "Tu as déjà tes habitudes, tu veux un rendu pro et un workflow rapide. Budget jusqu'à 25 €/mois acceptable.",
    recommandation: "submagic",
    raisons: [
      "La meilleure précision FR pour les sous-titres",
      "Templates animés conçus pour la viralité",
      "Magic Clips pour découper des shorts depuis une longue vidéo",
      "Démarre à 12 €/mois en annuel, raisonnable pour l'usage",
    ],
  },
  {
    emoji: "📺",
    titre: "Tu fais du long format YouTube et tu veux recycler en shorts",
    description:
      "Ta vidéo principale fait 15-30 min. Tu veux 3-5 shorts générés automatiquement à partir des meilleurs passages.",
    recommandation: "opusclip",
    raisons: [
      "L'IA détecte les meilleurs passages automatiquement",
      "Score de viralité par clip pour prioriser",
      "Sous-titres et formats verticaux générés sans intervention",
      "Combo possible avec Submagic pour finaliser le rendu FR",
    ],
  },
  {
    emoji: "🎙️",
    titre: "Tu fais un podcast et tu veux des clips vidéo + transcript",
    description:
      "Tu enregistres en audio ou audio+vidéo. Tu veux pouvoir éditer en corrigeant un texte, pas en jouant avec une timeline.",
    recommandation: "descript",
    raisons: [
      "Édition textuelle qui modifie la vidéo automatiquement",
      "Transcription multilingue de très bonne qualité",
      "Studio Sound pour nettoyer l'audio en un clic",
      "Export en clips courts depuis une longue session",
    ],
  },
  {
    emoji: "📊",
    titre: "Tu fais du marketing pour ta boîte ou tes clients",
    description:
      "Tu produis 10-20 vidéos par mois pour des landing pages, social ads, posts LinkedIn. Tu veux un seul outil pour tout.",
    recommandation: "veed",
    raisons: [
      "Bibliothèque de templates pour publicité, social, formation",
      "Sous-titres multilangues automatiques",
      "Brand kit pour rester cohérent visuellement",
      "Tout dans le navigateur, accessible partout",
    ],
  },
  {
    emoji: "👥",
    titre: "Tu travailles en équipe et plusieurs personnes éditent les vidéos",
    description:
      "Toi et 2-3 collègues bossez sur les mêmes projets. Vous avez besoin de commenter, valider, modifier sans vous marcher dessus.",
    recommandation: "kapwing",
    raisons: [
      "Édition collaborative en temps réel comme Google Docs",
      "Commentaires précis sur des moments de la vidéo",
      "Gestion des permissions et workflow de validation",
      "Plan Business à 50 $/mois solide pour une petite équipe",
    ],
  },
];

const FAQ = [
  {
    question:
      "Quel outil choisir si je débute totalement sans budget ?",
    answer:
      "CapCut sans hésiter. Il est 100 % gratuit, fonctionne sur PC et mobile, et la qualité de base est largement suffisante pour démarrer. La communauté FR est immense, tu trouveras un tuto pour tout. Tu pourras toujours upgrader vers Submagic ou OpusClip plus tard si tu deviens régulier et que tu sens un plafond.",
  },
  {
    question:
      "Submagic ou OpusClip pour des shorts en français ?",
    answer:
      "Pour la qualité du rendu final en français : Submagic. Sa précision FR sur les accents et les liaisons est meilleure, et ses templates animés sont conçus pour le marché francophone. Pour la productivité pure (transformer une vidéo longue en plusieurs shorts automatiquement) : OpusClip. Beaucoup de créateurs avancés combinent les deux : OpusClip pour la découpe, Submagic pour finaliser les sous-titres.",
  },
  {
    question:
      "Descript fait des sous-titres aussi, pourquoi le mettre dans ce comparatif ?",
    answer:
      "Descript fait effectivement des sous-titres, mais ce n'est pas son cœur de métier. C'est avant tout un éditeur vidéo et podcast basé sur la transcription. Il entre dans ce comparatif parce que beaucoup de créateurs long format hésitent entre Descript (pour tout) et un combo Submagic + un éditeur séparé. La réponse dépend de la longueur du contenu : court → Submagic ; long → Descript.",
  },
  {
    question:
      "Veed et Kapwing se ressemblent, lequel choisir ?",
    answer:
      "Veed est plus orienté solo et marketeurs : interface plus polie, plus de templates marketing, meilleure UX en mode individuel. Kapwing est plus orienté équipes : sa force absolue c'est la collaboration en temps réel. Si tu es seul, prends Veed. Si vous êtes 2 ou plus à toucher au même fichier, prends Kapwing.",
  },
  {
    question:
      "CapCut est gratuit, pourquoi prendre du payant ?",
    answer:
      "CapCut gratuit fait 80 % du job pour 0 €. Le payant a du sens uniquement si tu cherches un gain de temps précis : sous-titres FR ultra-rapides à corriger (Submagic), clipping automatique depuis une longue vidéo (OpusClip), ou collaboration équipe (Kapwing). Si tu publies 1-2 shorts par mois, CapCut suffit. Si tu publies 5+ par semaine, tu sentiras vite la limite.",
  },
  {
    question:
      "Quel est le combo le plus puissant pour un créateur sérieux ?",
    answer:
      "Pour un créateur shorts régulier qui fait aussi du long format : OpusClip + Submagic. OpusClip découpe les meilleurs moments de ta vidéo longue en shorts bruts, Submagic finalise les sous-titres et l'animation. Total environ 27 $/mois en plans payants, très défendable pour un usage régulier. C'est aussi le combo qu'on recommande dans notre cas d'usage Submagic ou OpusClip pour des shorts en français.",
  },
];

/* ---------- PAGE ---------- */

export default function GrandComparatifPage() {
  // Charger les vraies données depuis le registre pour les liens et CTA
  const outils = OUTILS_COMPARES.map((c) => ({
    ...c,
    outil: getOutilOrThrow(c.slug),
  }));

  // Schemas
  const faqSchema = getFaqPageSchema(FAQ);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Comparatifs", url: "/" },
    { name: TITLE.slice(0, 60) },
  ]);

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <Nav />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300">
            Accueil
          </Link>
          <span>›</span>
          <span>Comparatifs</span>
          <span>›</span>
          <span className="text-slate-300">Outils shorts &amp; TikTok 2026</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          Page-pilier · Mise à jour {LAST_CHECK}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5 tracking-tight">
          Le grand comparatif des outils IA pour{" "}
          <span className="text-amber-400">shorts et TikTok</span> en 2026.
        </h1>
        <div className="mb-6">
          <AuthorByline
            lastCheck={LAST_CHECK}
            subtitle="Comparateur indépendant · Méthodologie en 6 critères"
          />
        </div>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          {SUBTITLE}
        </p>
      </section>

      {/* VERDICT EN 30S — synthèse */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-amber-500/10 to-emerald-500/5 border border-amber-500/20 rounded-2xl p-8 md:p-10">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
            Le verdict en 30 secondes
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
            Pas le temps de tout lire ? Voici l&apos;essentiel.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {outils.map((o) => (
              <div
                key={o.slug}
                className="flex gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className={`text-lg font-bold text-${o.outil.color}-400`}>
                      {o.outil.name}
                    </h3>
                    <span className="text-xs text-slate-500">{o.badge}</span>
                  </div>
                  <p className="text-sm text-slate-300">{o.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEGA TABLEAU COMPARATIF */}
      <section
        id="tableau"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
            Tableau côte à côte
          </div>
          <h2 className="text-3xl font-bold mb-3 tracking-tight">
            Les 6 outils sur 12 critères.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-3xl">
            Toutes les données vérifiées sur les pages officielles au {LAST_CHECK}.
            Score éditorial Filtrio basé sur la méthodologie publique en 6 critères pondérés.
          </p>

          <div className="overflow-x-auto -mx-6 px-6 pb-2">
            <table className="w-full min-w-[1000px] text-sm border-separate border-spacing-0">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                  <th className="sticky left-0 bg-slate-950/90 backdrop-blur z-10 py-4 pr-4 border-b border-slate-800 font-semibold">
                    Critère
                  </th>
                  {outils.map((o) => (
                    <th
                      key={o.slug}
                      className="py-4 px-3 border-b border-slate-800 font-semibold whitespace-nowrap"
                    >
                      <Link
                        href={`/outils/${o.slug}`}
                        className={`text-${o.outil.color}-400 hover:underline`}
                      >
                        {o.outil.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CRITERES_TABLEAU.map((cr, idx) => (
                  <tr
                    key={cr.label}
                    className={idx % 2 === 0 ? "bg-slate-900/30" : ""}
                  >
                    <td className="sticky left-0 bg-slate-950/90 backdrop-blur z-10 py-4 pr-4 font-semibold text-slate-200 border-b border-slate-800/50">
                      {cr.label}
                    </td>
                    {cr.values.map((v, i) => (
                      <td
                        key={i}
                        className={`py-4 px-3 text-slate-300 border-b border-slate-800/50 ${
                          cr.highlight === i
                            ? `text-${outils[i].outil.color}-400 font-semibold`
                            : ""
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 mt-6 max-w-3xl">
            <strong className="text-slate-300">Phase actuelle (V1) :</strong>{" "}
            les évaluations qualitatives (Excellent / Bon / Limité) sont basées sur l&apos;analyse documentaire et les retours utilisateurs publics. Une phase de test comparatif standardisé est prévue.
          </p>
        </div>
      </section>

      {/* RECOMMANDATION PAR PROFIL */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
          Recommandation par profil
        </div>
        <h2 className="text-3xl font-bold mb-3 tracking-tight">
          Tu te reconnais dans lequel ? On te dit quoi prendre.
        </h2>
        <p className="text-slate-400 leading-relaxed mb-10 max-w-3xl">
          Six profils de créateurs, six recommandations directes. Si aucun ne te correspond exactement, prends le plus proche, le raisonnement reste valable.
        </p>

        <div className="space-y-6">
          {PROFILS.map((p, i) => {
            const reco = getOutilOrThrow(p.recommandation);
            const hasRealAffiliateLink = /^https?:\/\//.test(reco.affiliateLink);
            return (
              <div
                key={i}
                className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-${reco.color}-500/40 transition`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="text-5xl">{p.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{p.titre}</h3>
                    <p className="text-slate-400 mb-4">{p.description}</p>
                    <div
                      className={`inline-flex items-center gap-2 bg-${reco.color}-500/10 border border-${reco.color}-500/30 rounded-lg px-4 py-2 mb-4`}
                    >
                      <span className="text-xs text-slate-300">Notre reco :</span>
                      <Link
                        href={`/outils/${reco.slug}`}
                        className={`text-${reco.color}-400 font-bold hover:underline`}
                      >
                        {reco.name}
                      </Link>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {p.raisons.map((r, j) => (
                        <li key={j} className="flex gap-3 text-slate-300">
                          <span className={`text-${reco.color}-400 mt-1`}>✓</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/outils/${reco.slug}`}
                        className="text-sm font-medium border border-slate-700 hover:border-slate-500 text-slate-200 px-4 py-2 rounded-lg transition"
                      >
                        Voir la fiche {reco.name}
                      </Link>
                      {hasRealAffiliateLink && (
                        <TrackedAffiliateLink
                          href={reco.affiliateLink}
                          outilSlug={reco.slug}
                          outilName={reco.name}
                          source="comparatif"
                          className={`text-sm font-semibold bg-${reco.color}-500 hover:bg-${reco.color}-400 text-slate-950 px-4 py-2 rounded-lg transition`}
                        >
                          Tester {reco.name} →
                        </TrackedAffiliateLink>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAILLAGE — comparatifs 1v1 + cas d'usage */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
            Pour aller plus loin
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Comparatifs détaillés et cas d&apos;usage liés.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/comparatifs/opusclip-vs-submagic"
              className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
            >
              <h3 className="font-bold mb-1 text-slate-100">OpusClip vs Submagic</h3>
              <p className="text-sm text-slate-400">Le duel le plus consulté pour les shorts.</p>
            </Link>
            <Link
              href="/comparatifs/submagic-vs-capcut"
              className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
            >
              <h3 className="font-bold mb-1 text-slate-100">Submagic vs CapCut</h3>
              <p className="text-sm text-slate-400">Payant spécialisé contre gratuit polyvalent.</p>
            </Link>
            <Link
              href="/comparatifs/submagic-vs-descript"
              className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
            >
              <h3 className="font-bold mb-1 text-slate-100">Submagic vs Descript</h3>
              <p className="text-sm text-slate-400">Shorts viraux contre édition long format.</p>
            </Link>
            <Link
              href="/comparatifs/veed-vs-kapwing"
              className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
            >
              <h3 className="font-bold mb-1 text-slate-100">Veed vs Kapwing</h3>
              <p className="text-sm text-slate-400">Solo contre équipe, lequel choisir.</p>
            </Link>
            <Link
              href="/cas-usage/video-longue-en-shorts"
              className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/40 transition"
            >
              <h3 className="font-bold mb-1 text-slate-100">
                Transformer une vidéo longue en shorts
              </h3>
              <p className="text-sm text-slate-400">Le cas d&apos;usage clé pour les YouTubeurs.</p>
            </Link>
            <Link
              href="/cas-usage/sous-titrer-tiktok"
              className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/40 transition"
            >
              <h3 className="font-bold mb-1 text-slate-100">
                Sous-titrer une vidéo TikTok
              </h3>
              <p className="text-sm text-slate-400">L&apos;outil le plus rapide selon ton besoin.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
          FAQ
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">
          Les questions qui reviennent.
        </h2>
        <div className="space-y-4">
          {FAQ.map((q) => (
            <details
              key={q.question}
              className="group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-amber-500/30"
            >
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>{q.question}</span>
                <span className="faq-chevron text-amber-400 transition-transform">+</span>
              </summary>
              <div className="text-slate-300 mt-4 leading-relaxed">{q.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <AuthorBio />
      <Newsletter />
      <Footer />
    </>
  );
}

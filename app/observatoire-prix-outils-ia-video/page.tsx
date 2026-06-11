import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBio } from "@/components/AuthorBio";

/**
 * Observatoire des prix des outils IA vidéo.
 * Asset "linkbait" : donnée originale vérifiée, conçue pour être citée.
 *
 * SNAPSHOT VÉRIFIÉ LE 09/06/2026.
 * À mettre à jour mensuellement (prix relevés sur les pages tarifaires
 * officielles). La classification "accès gratuit" est volontairement
 * distincte du label commercial : un plan gratuit reconductible, des
 * crédits offerts une seule fois et un simple essai ne sont PAS la même
 * chose. Le tableau ci-dessous est la preuve des statistiques affichées.
 */

const DATE_RELEVE = "09/06/2026";

type DeviseEntree = "EUR" | "USD";
type Facturation = "Mensuel" | "Annuel" | "Achat unique";

interface LigneObservatoire {
  nom: string;
  categorie: string;
  prixEntree: string;
  facturation: Facturation;
  gratuit: string;
  devise: DeviseEntree;
  score: number;
}

// Trié par score décroissant. Données relevées sur les pages officielles.
const OBSERVATOIRE: LigneObservatoire[] = [
  { nom: "Submagic", categorie: "Shorts & Clips", prixEntree: "12 €/mois", facturation: "Mensuel", gratuit: "Plan gratuit limité", devise: "EUR", score: 9.2 },
  { nom: "OpusClip", categorie: "Shorts & Clips", prixEntree: "15 $/mois", facturation: "Mensuel", gratuit: "Plan gratuit", devise: "USD", score: 8.7 },
  { nom: "TubeBuddy", categorie: "SEO YouTube", prixEntree: "3,99 $/mois", facturation: "Mensuel", gratuit: "Aucun accès gratuit", devise: "USD", score: 8.6 },
  { nom: "Canva", categorie: "Design", prixEntree: "110 €/an", facturation: "Annuel", gratuit: "Gratuit durable exploitable", devise: "EUR", score: 8.5 },
  { nom: "Runway", categorie: "Génération vidéo IA", prixEntree: "12 $/mois", facturation: "Mensuel", gratuit: "Crédits offerts une seule fois (125)", devise: "USD", score: 8.5 },
  { nom: "Descript", categorie: "Long format", prixEntree: "16 $/mois", facturation: "Mensuel", gratuit: "Plan gratuit", devise: "USD", score: 8.4 },
  { nom: "ElevenLabs", categorie: "Voix IA", prixEntree: "6 $/mois", facturation: "Mensuel", gratuit: "Crédits gratuits mensuels", devise: "USD", score: 8.3 },
  { nom: "DaVinci Resolve", categorie: "Éditeur vidéo", prixEntree: "295 $ (Studio)", facturation: "Achat unique", gratuit: "Gratuit durable exploitable (version locale)", devise: "USD", score: 8.2 },
  { nom: "Synthesia", categorie: "Avatars IA", prixEntree: "12 €/mois", facturation: "Mensuel", gratuit: "Plan gratuit limité", devise: "EUR", score: 8.2 },
  { nom: "Riverside", categorie: "Long format", prixEntree: "24 $/mois", facturation: "Mensuel", gratuit: "Plan gratuit (single-track illimité, multitrack 2h one-off)", devise: "USD", score: 8.1 },
  { nom: "VidIQ", categorie: "SEO YouTube", prixEntree: "16,58 €/mois", facturation: "Mensuel", gratuit: "Plan gratuit", devise: "EUR", score: 8.0 },
  { nom: "HeyGen", categorie: "Avatars IA", prixEntree: "29 $/mois", facturation: "Mensuel", gratuit: "Plan gratuit (3 vidéos/mois)", devise: "USD", score: 8.0 },
  { nom: "CapCut", categorie: "Éditeur vidéo", prixEntree: "199,99 €/an (Pro)", facturation: "Annuel", gratuit: "Gratuit durable exploitable (version de base)", devise: "EUR", score: 7.8 },
  { nom: "Veed", categorie: "Éditeur vidéo", prixEntree: "10,75 €/mois", facturation: "Mensuel", gratuit: "Plan gratuit", devise: "EUR", score: 7.8 },
  { nom: "Pika", categorie: "Génération vidéo IA", prixEntree: "8 $/mois", facturation: "Mensuel", gratuit: "Crédits gratuits mensuels (80/mois)", devise: "USD", score: 7.8 },
  { nom: "InVideo", categorie: "Script-to-video", prixEntree: "17 $/mois", facturation: "Mensuel", gratuit: "Aucun accès gratuit", devise: "USD", score: 7.7 },
  { nom: "Pictory", categorie: "Script-to-video", prixEntree: "25 $/mois", facturation: "Mensuel", gratuit: "Essai gratuit seulement", devise: "USD", score: 7.5 },
  { nom: "Kapwing", categorie: "Éditeur vidéo", prixEntree: "16 $/mois", facturation: "Mensuel", gratuit: "Plan gratuit", devise: "USD", score: 7.2 },
];

// Les 6 chiffres-clés. Calculés sur le snapshot ci-dessus et vérifiés.
const STATS: { valeur: string; texte: string }[] = [
  {
    valeur: "14 / 18",
    texte:
      "proposent un accès gratuit reconductible (plan gratuit ou crédits renouvelés), soit 78 %. Les 4 autres : TubeBuddy et InVideo n'offrent rien, Runway des crédits offerts une seule fois, Pictory un simple essai.",
  },
  {
    valeur: "67 %",
    texte:
      "des outils (12 sur 18) affichent leur prix d'entrée payant en dollars, pas en euros. Pour un acheteur français, cela ajoute un risque de change et de variation du prix final.",
  },
  {
    valeur: "3,99 $ → 29 $",
    texte:
      "le ticket d'entrée parmi les abonnements mensuels, du moins cher (TubeBuddy, 3,99 $/mois) au plus cher (HeyGen, 29 $/mois).",
  },
  {
    valeur: "~12,80 € / ~15,60 $",
    texte:
      "le prix d'entrée moyen par mois, pour les outils facturés respectivement en euros et en dollars (abonnements mensuels d'entrée uniquement).",
  },
  {
    valeur: "3 / 18",
    texte:
      "seulement permettent un usage gratuit durable réellement exploitable, sans payer : DaVinci Resolve, CapCut et Canva.",
  },
  {
    valeur: "3 / 18",
    texte:
      "ne suivent pas le modèle d'abonnement mensuel : Canva et CapCut sont comptés ici en entrée annuelle, DaVinci Resolve Studio en achat unique.",
  },
];

const DEFINITIONS: [string, string][] = [
  ["Plan gratuit reconductible", "utilisable dans le temps sans payer, même bridé (limites de quota, watermark, file d'attente)."],
  ["Crédits gratuits", "une réserve offerte : soit renouvelée chaque mois (reconductible), soit offerte une seule fois (one-shot, comme Runway)."],
  ["Essai gratuit", "un accès temporaire, puis paiement obligatoire pour continuer (comme Pictory)."],
  ["Gratuit durable exploitable", "permet de créer et d'exporter du contenu utilisable sans payer immédiatement, même avec certaines limites (DaVinci Resolve, CapCut, Canva)."],
  ["Facturation", "le mode du premier palier payant : abonnement mensuel, abonnement annuel, ou achat unique."],
  ["Devise", "la devise du prix d'entrée affiché sur la page officielle. Elle peut varier selon le pays, le plan ou l'App Store."],
];

const METHODOLOGIE =
  "Données vérifiées le 9 juin 2026. Prix publics affichés sur les pages tarifaires officielles de chaque éditeur. Les promotions temporaires, taxes, variations de change et prix sur les App Stores peuvent modifier le prix final. Les essais gratuits sont distingués des plans gratuits reconductibles. Les moyennes sont calculées uniquement sur les outils proposant un abonnement mensuel d'entrée, hors plans annuels, hors achat unique et hors promotions.";

const CITATION =
  "Ces données peuvent être citées et reprises librement, à condition d'indiquer la source (« Observatoire Filtrio ») avec un lien vers cette page et la date du relevé. Une question, une correction de prix ? contact@filtrio.fr.";

export const metadata: Metadata = {
  title: "Observatoire des prix des outils IA vidéo (2026)",
  description:
    "Le prix vérifié de 18 outils IA pour créateurs vidéo : ticket d'entrée, plan gratuit, devise. 14/18 ont un accès gratuit reconductible, 2 sur 3 sont facturés en dollars. Données à jour et librement citables.",
  alternates: { canonical: "/observatoire-prix-outils-ia-video" },
  openGraph: {
    title: "Observatoire des prix des outils IA vidéo 2026, Filtrio",
    description:
      "Le prix vérifié de 18 outils IA vidéo : ticket d'entrée, plan gratuit, devise. Données originales, librement citables.",
    type: "article",
  },
};

export default function ObservatoirePage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Observatoire des prix des outils IA vidéo 2026",
    description:
      "Relevé vérifié du prix d'entrée, du plan gratuit et de la devise de 18 outils IA pour créateurs vidéo, mis à jour régulièrement par Filtrio.",
    url: "https://www.filtrio.fr/observatoire-prix-outils-ia-video",
    keywords: [
      "prix outils IA vidéo",
      "tarifs outils IA création vidéo",
      "outils IA vidéo gratuits",
      "comparatif prix Submagic OpusClip",
    ],
    isAccessibleForFree: true,
    creator: {
      "@type": "Organization",
      name: "Filtrio",
      url: "https://www.filtrio.fr",
    },
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    variableMeasured: [
      "Prix d'entrée payant",
      "Disponibilité d'un accès gratuit",
      "Devise de facturation",
      "Mode de facturation",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Filtrio", item: "https://www.filtrio.fr" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Observatoire des prix",
        item: "https://www.filtrio.fr/observatoire-prix-outils-ia-video",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[datasetSchema, breadcrumbSchema]} />
      <Nav />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Données vérifiées · 9 juin 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
          Observatoire des <span className="text-emerald-400">prix</span> des outils IA vidéo
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl">
          Combien coûtent vraiment les outils IA pour créateurs vidéo ? On a
          relevé le prix d&apos;entrée, le plan gratuit et la devise de 18
          outils, vérifiés sur leurs pages tarifaires officielles. Données à
          jour et librement citables.
        </p>
        <AuthorByline
          lastCheck={DATE_RELEVE}
          subtitle="Comparateur indépendant · Prix relevés sur les pages officielles"
        />
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="max-w-5xl mx-auto px-6 pb-6">
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-6">
          Les chiffres clés
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-slate-100 mb-2">
                {s.valeur}
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">{s.texte}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-5 leading-relaxed max-w-3xl">
          Note : si l&apos;on inclut les essais gratuits, 16 outils sur 18
          offrent au moins une porte d&apos;entrée gratuite. Seuls TubeBuddy et
          InVideo n&apos;offrent aucune option gratuite.
        </p>
      </section>

      {/* TABLEAU MAÎTRE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
          Le tableau complet
        </h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          Les 18 outils analysés par Filtrio, triés par score éditorial. Chaque
          ligne est la source des chiffres ci-dessus.
        </p>
        <div className="overflow-x-auto border border-slate-800 rounded-2xl">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/40 text-left text-slate-400">
                <th className="px-4 py-3 font-semibold">Outil</th>
                <th className="px-4 py-3 font-semibold">Catégorie</th>
                <th className="px-4 py-3 font-semibold">Prix d&apos;entrée</th>
                <th className="px-4 py-3 font-semibold">Facturation</th>
                <th className="px-4 py-3 font-semibold">Accès gratuit</th>
                <th className="px-4 py-3 font-semibold">Devise</th>
                <th className="px-4 py-3 font-semibold text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {OBSERVATOIRE.map((o) => (
                <tr
                  key={o.nom}
                  className="border-b border-slate-800/60 last:border-0 hover:bg-slate-900/30"
                >
                  <td className="px-4 py-3 font-semibold text-slate-100 whitespace-nowrap">
                    {o.nom}
                  </td>
                  <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                    {o.categorie}
                  </td>
                  <td className="px-4 py-3 text-slate-200 whitespace-nowrap">
                    {o.prixEntree}
                  </td>
                  <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                    {o.facturation}
                  </td>
                  <td className="px-4 py-3 text-slate-400">{o.gratuit}</td>
                  <td className="px-4 py-3 text-slate-400">{o.devise}</td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-400">
                    {o.score.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* COMMENT LIRE */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-2 tracking-tight">
          Comment lire ce tableau
        </h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          Sur un sujet de prix, c&apos;est la définition des catégories qui
          compte autant que les chiffres. Voici comment on distingue les
          formes d&apos;accès gratuit et de facturation.
        </p>
        <dl className="space-y-4">
          {DEFINITIONS.map(([terme, def]) => (
            <div
              key={terme}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-5"
            >
              <dt className="font-semibold text-slate-100 mb-1">{terme}</dt>
              <dd className="text-slate-400 text-sm leading-relaxed">{def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* MÉTHODOLOGIE */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Méthodologie
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{METHODOLOGIE}</p>
        </div>
      </section>

      {/* CITATION / RÉUTILISATION */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border border-slate-800 rounded-2xl p-6">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Réutilisation des données
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{CITATION}</p>
        </div>
      </section>

      <AuthorBio />
      <Newsletter />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getFaqPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBio } from "@/components/AuthorBio";
import { OUTILS, CATEGORIE_LABELS } from "@/lib/outils";

const LAST_UPDATED = "10/07/2026";
const SAMPLE_SIZE = 18;

export const metadata: Metadata = {
  title: "Statistiques outils IA vidéo 2026 : prix, devises, crédits",
  description:
    "11 statistiques vérifiées sur les prix de 18 outils IA vidéo : 61 % affichés ou facturés en dollars, jusqu'à +100 % d'écart entre mensuel et annuel, montée du modèle à crédits. Données datées, méthodologie publique, CSV téléchargeable, librement citables.",
  alternates: {
    canonical: "https://www.filtrio.fr/statistiques-outils-ia-video",
  },
  openGraph: {
    title: "Statistiques outils IA vidéo 2026, Filtrio",
    description:
      "11 statistiques vérifiées sur les prix de 18 outils IA vidéo. Données datées, librement citables avec lien.",
  },
};

/** Les 11 statistiques citables. Chaque chiffre est recalculable depuis l'observatoire. */
const STATS = [
  {
    chiffre: "61 %",
    titre: "affichent ou facturent leurs abonnements en dollars US",
    detail:
      "11 outils sur 18 affichaient ou facturaient leurs abonnements en dollars lors de notre vérification effectuée depuis la France. Pour un acheteur français, le montant réellement débité peut dépendre du taux de change et d'éventuels frais bancaires.",
  },
  {
    chiffre: "+21 % à +100 %",
    titre: "de surcoût pour le même plan payé au mois plutôt qu'à l'année",
    detail:
      "Sur 4 plans vérifiés : OpusClip Pro +100 % (14,50 $ affiché, 29 $ réel en mensuel), Submagic Starter +58 %, Descript Hobbyist +50 %, Riverside Pro +21 %.",
  },
  {
    chiffre: "+57 %",
    titre: "de surcoût mensuel moyen sur les plans vérifiés",
    detail:
      "Sur ces quatre plans, le prix mensuel mis en avant correspondait à un engagement annuel, tandis que le paiement sans engagement coûtait en moyenne 57 % plus cher.",
  },
  {
    chiffre: "83 %",
    titre: "proposent une version gratuite utilisable dans la durée",
    detail:
      "15 outils sur 18 proposent un plan gratuit durable. Submagic et Pictory proposent seulement un essai limité, tandis que Runway fournit une allocation gratuite unique de crédits qui ne se renouvelle pas.",
  },
  {
    chiffre: "de 3,60 $ à 29 $",
    titre: "par mois : l'étendue des premiers plans payants en dollars",
    detail:
      "Parmi les outils facturés en dollars, le premier palier payant relevé va de 3,60 $/mois (TubeBuddy Pro, paiement annuel) à 29 $/mois (HeyGen Creator, paiement mensuel).",
  },
  {
    chiffre: "≥ 44 %",
    titre: "fonctionnent partiellement ou totalement avec des crédits",
    detail:
      "Au moins 8 outils sur 18 : ElevenLabs, Runway, Synthesia, InVideo, Pika, OpusClip, Pictory, et Submagic pour certaines fonctionnalités IA. Le prix d'abonnement ne suffit plus à prévoir le coût réel, qui dépend du volume de production.",
  },
  {
    chiffre: "22 %",
    titre: "ont modifié leurs plans ou leur affichage en un seul mois",
    detail:
      "4 outils sur 18 entre juin et juillet 2026 : Runway a remplacé son plan Illimité par un plan à crédits (Max), Riverside est passé à l'affichage en euros, HeyGen a ajouté un plan Pro, Veed a arrondi ses prix TTC.",
  },
  {
    chiffre: "2 sur 18",
    titre: "n'offrent qu'un essai gratuit limité, qui se consomme une fois",
    detail:
      "Submagic (essai de 3 vidéos) et Pictory (essai de 14 jours). Un point d'entrée à ne pas confondre avec un plan gratuit durable : une fois l'essai consommé, il faut payer pour continuer.",
  },
  {
    chiffre: "39 %",
    titre: "affichent des prix en euros pour les visiteurs français",
    detail:
      "7 outils sur 18 (Submagic, Synthesia, VidIQ, Veed, Canva, CapCut, Riverside). Un élément utile pour comparer son budget en euros et limiter les écarts liés à la conversion monétaire.",
  },
  {
    chiffre: "1 sur 18",
    titre: "seul outil indique explicitement que les taxes sont incluses",
    detail:
      "Veed est le seul outil de notre relevé dont la page tarifs affichait explicitement la mention « incl. tax ». Pour les autres, le traitement des taxes n'était pas clairement précisé sur la page consultée : le montant final est à vérifier avant paiement.",
  },
  {
    chiffre: "1 sur 18",
    titre: "seul outil propose sa version payante en achat unique",
    detail:
      "DaVinci Resolve Studio est affiché à 295 $ en achat unique. Pour les 17 autres outils du panel, l'accès payant repose sur au moins une formule d'abonnement.",
  },
];

const DEFINITIONS = [
  {
    terme: "Prix d'entrée affiché",
    definition:
      "Le tarif du premier plan payant tel qu'il apparaît par défaut sur la page tarifs officielle de l'outil, généralement en facturation annuelle.",
  },
  {
    terme: "Version gratuite durable",
    definition:
      "Un plan gratuit utilisable sans limite de temps (quotas mensuels acceptés). S'oppose à l'essai limité, qui se consomme une fois (ex. : 3 vidéos).",
  },
  {
    terme: "Modèle à crédits",
    definition:
      "L'abonnement donne droit à un quota de crédits ; chaque génération en consomme un nombre variable selon le modèle d'IA, la durée ou la résolution. Le coût réel dépend donc du volume d'usage.",
  },
];

const FAQ = [
  {
    question: "D'où viennent ces statistiques ?",
    answer:
      "Chaque chiffre est calculé à partir d'un relevé manuel des pages tarifs officielles de 18 outils IA vidéo, avec trois contrôles systématiques par prix : montant exact, devise et cycle de facturation. Le détail outil par outil, daté, est publié dans l'Observatoire des prix de Filtrio.",
  },
  {
    question: "Puis-je réutiliser ces chiffres dans un article, une newsletter ou une vidéo ?",
    answer:
      "Oui, librement, à une condition simple : mentionner la source avec un lien vers cette page (filtrio.fr/statistiques-outils-ia-video). Pour une vérification spécifique ou une donnée complémentaire : contact@filtrio.fr, réponse généralement sous 24h.",
  },
  {
    question: "À quelle fréquence ces statistiques sont-elles mises à jour ?",
    answer:
      "À chaque édition de l'Observatoire des prix, environ une fois par mois. La date de dernière vérification est affichée en haut de page. Les tarifs SaaS évoluent vite : 4 outils sur 18 ont modifié leurs plans ou leur affichage rien qu'entre juin et juillet 2026.",
  },
  {
    question: "Quel est l'échantillon exact ?",
    answer:
      "18 outils IA pour créateurs vidéo, couvrant 9 catégories : sous-titres et shorts (Submagic, OpusClip), SEO YouTube (TubeBuddy, VidIQ), voix IA (ElevenLabs), avatars IA (HeyGen, Synthesia), long format (Descript, Riverside), éditeurs (CapCut, Veed, Kapwing, DaVinci Resolve), génération vidéo (Runway, Pika), script-to-video (InVideo, Pictory) et design (Canva).",
  },
];

export default function StatistiquesPage() {
  const outilsTries = [...OUTILS].sort((a, b) => b.score - a.score);

  return (
    <>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getFaqPageSchema(FAQ),
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Statistiques outils IA vidéo" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "Statistiques 2026 sur les prix des outils IA vidéo",
            description:
              "11 statistiques vérifiées sur les prix, devises et modèles de facturation de 18 outils IA pour créateurs vidéo, calculées à partir d'un relevé manuel des pages tarifs officielles.",
            url: "https://www.filtrio.fr/statistiques-outils-ia-video",
            creator: {
              "@type": "Organization",
              name: "Filtrio",
              url: "https://www.filtrio.fr",
            },
            distribution: {
              "@type": "DataDownload",
              encodingFormat: "text/csv",
              contentUrl:
                "https://www.filtrio.fr/data/statistiques-outils-ia-video.csv",
            },
            dateModified: "2026-07-10",
            inLanguage: "fr",
            isAccessibleForFree: true,
          },
        ]}
      />

      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-[60%] w-[560px] h-[560px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-10">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Données vérifiées le {LAST_UPDATED} · Échantillon : {SAMPLE_SIZE} outils
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Statistiques 2026 sur les prix des outils IA vidéo.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
            11 chiffres calculés à partir d&apos;un relevé manuel des pages
            tarifs officielles de {SAMPLE_SIZE} outils IA pour créateurs vidéo
            (Submagic, OpusClip, Runway, HeyGen, ElevenLabs, CapCut...).
            Chaque statistique est datée, sourcée et{" "}
            <strong className="text-slate-100">librement citable</strong>{" "}
            avec un lien vers cette page.
          </p>
          <AuthorByline
            lastCheck={LAST_UPDATED}
            subtitle="Comparateur indépendant · Relevé manuel sur les pages officielles"
          />
        </div>
      </section>

      {/* LES 12 STATS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          Les 11 statistiques.
        </h2>
        <p className="text-slate-400 mb-8 max-w-3xl">
          Chiffres arrondis pour la lisibilité. Le détail outil par outil (18
          lignes, avec devise et date de vérification par prix) est publié
          dans l&apos;
          <Link
            href="/observatoire-prix"
            className="text-emerald-400 hover:underline"
          >
            Observatoire des prix
          </Link>
          .
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {s.chiffre}
              </div>
              <h3 className="font-semibold text-slate-100 mb-2 leading-snug">
                {s.titre}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CITATION + CSV */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-7">
          <h2 className="text-xl font-bold mb-3 text-emerald-300">
            Vous pouvez citer ces données.
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Journaliste, blogueur, créateur de newsletter ou vidéaste : ces
            statistiques sont librement réutilisables avec une mention de la
            source et un lien vers cette page
            (filtrio.fr/statistiques-outils-ia-video). Pour une donnée
            complémentaire ou une vérification spécifique : contact@filtrio.fr,
            réponse généralement sous 24h.
          </p>
          <a
            href="/data/statistiques-outils-ia-video.csv"
            download
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-2.5 rounded-xl transition"
          >
            Télécharger les données (CSV)
          </a>
        </div>
      </section>

      {/* TABLEAU ÉCHANTILLON */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          L&apos;échantillon : les {SAMPLE_SIZE} outils.
        </h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          Prix d&apos;entrée tel qu&apos;affiché sur la page tarifs officielle
          au {LAST_UPDATED}. Chaque outil a une fiche détaillée sur Filtrio.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-left text-slate-300">
                <th className="px-4 py-3 font-semibold">Outil</th>
                <th className="px-4 py-3 font-semibold">Catégorie</th>
                <th className="px-4 py-3 font-semibold">Prix d&apos;entrée affiché</th>
                <th className="px-4 py-3 font-semibold">Offre gratuite</th>
              </tr>
            </thead>
            <tbody>
              {outilsTries.map((o) => (
                <tr
                  key={o.slug}
                  className="border-t border-slate-800 hover:bg-slate-900/50"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/outils/${o.slug}`}
                      className="font-semibold text-emerald-400 hover:underline"
                    >
                      {o.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    {CATEGORIE_LABELS[o.category]}
                  </td>
                  <td className="px-4 py-3 text-slate-200">
                    {o.priceFrom ?? "Voir tarifs officiels"}
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    {o.freeTier && o.freeTier.length > 0 ? o.freeTier : "Aucune"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DÉFINITIONS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Définitions utilisées.
        </h2>
        <div className="space-y-4">
          {DEFINITIONS.map((d, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5"
            >
              <h3 className="font-semibold text-emerald-400 mb-1">{d.terme}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {d.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MÉTHODOLOGIE */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-5">
          Méthodologie.
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mb-4">
          Chaque prix est relevé manuellement sur la page tarifs officielle de
          l&apos;outil, avec trois contrôles systématiques : le montant exact,
          la devise et le cycle de facturation (mensuel ou annuel). Chaque
          vérification est datée. Quand une donnée n&apos;est pas vérifiable
          proprement, elle est exclue du calcul plutôt qu&apos;estimée. Les
          statistiques de cette page sont recalculées à chaque édition de
          l&apos;
          <Link
            href="/observatoire-prix"
            className="text-emerald-400 hover:underline"
          >
            Observatoire des prix
          </Link>
          , environ une fois par mois.
        </p>
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          Certains liens de Filtrio sont affiliés, et cela ne change ni les
          prix relevés ni les calculs : la grille de notation est publique sur
          la{" "}
          <Link href="/methode" className="text-emerald-400 hover:underline">
            page Méthode
          </Link>
          , et la transparence sur l&apos;affiliation est détaillée sur la{" "}
          <Link
            href="/a-propos#transparence"
            className="text-emerald-400 hover:underline"
          >
            page À propos
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Questions fréquentes.
        </h2>
        <div className="space-y-4">
          {FAQ.map((q, i) => (
            <details
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 cursor-pointer"
            >
              <summary className="font-semibold text-slate-100">
                {q.question}
              </summary>
              <p className="mt-3 text-slate-300 leading-relaxed">{q.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <AuthorBio />
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const opusclipVsSubmagic: ComparatifData = {
  slug: "opusclip-vs-submagic",
  outilAslug: "opusclip",
  outilBslug: "submagic",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Les deux rois du short viral. Comparés sur la base de leurs fonctionnalités, de leurs plans et des retours utilisateurs publics. Le gagnant dépend de ton cas précis.",
    tempsLecture: 7,
    lastCheck: "20/04/2026",
  },
  verdictRapide: {
    headline: "OpusClip pour le volume. Submagic pour le rendu FR.",
    paragraphs: [
      <>
        <strong className="text-emerald-400">OpusClip</strong>{" "}automatise la
        découpe de vidéos longues (podcasts, lives, conférences) en clips
        courts prêts à publier. Parfait si ta source fait 30 minutes à 2
        heures.{" "}
        <strong className="text-amber-400">Submagic</strong>{" "}est plus fort sur
        la qualité des sous-titres en français et les templates viraux. Pour
        des shorts courts tournés directement, Submagic prend l&apos;avantage.
      </>,
      <>
        Beaucoup de créateurs pros utilisent les deux : OpusClip pour la
        découpe initiale, Submagic pour le polish final. Un combo économique
        qui reste rentable si tu produis du contenu régulièrement.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité en français",
      poids: 20,
      scoreA: 7.5,
      scoreB: 9.2,
      gagnant: "B",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 8.5,
      scoreB: 7.8,
      gagnant: "A",
    },
    {
      label: "Profondeur IA (découpe auto)",
      poids: 20,
      scoreA: 9.2,
      scoreB: 8.0,
      gagnant: "A",
    },
    {
      label: "Interface & prise en main",
      poids: 15,
      scoreA: 8.5,
      scoreB: 9.3,
      gagnant: "B",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      scoreA: 7.0,
      scoreB: 9.0,
      gagnant: "B",
    },
    {
      label: "Intégrations",
      poids: 10,
      scoreA: 8.0,
      scoreB: 6.5,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu as des vidéos longues à recycler (podcasts, lives, confs)",
    "Tu veux automatiser la production de 5-10 clips par vidéo source",
    "Tu utilises déjà un workflow Make/Zapier et veux une API",
    "Tu crées aussi en anglais ou multilingue",
    "Tu cherches un plan gratuit récurrent pour tester sans engagement",
  ],
  porQuiB: [
    "Tu tournes directement des contenus courts (face cam, Shorts)",
    "Tu vises un public FR",
    "La qualité du sous-titre FR est ton critère #1",
    "Tu veux un rendu viral stylé sans retouches manuelles",
    "Tu fais du personal branding sur LinkedIn / TikTok / Reels",
  ],
  casUsage: [
    {
      profil: "Podcasteur qui veut transformer 1h en 10 shorts",
      description:
        "OpusClip analyse toute la vidéo et propose les meilleurs moments prêts à clipper. OpusClip est nettement plus adapté à ce volume de découpe.",
      gagnant: "A",
    },
    {
      profil: "Créateur TikTok FR qui poste 3 vidéos courtes par semaine",
      description:
        "Les vidéos sont déjà courtes. Submagic excelle sur les sous-titres FR stylés. OpusClip ferait le boulot mais moins bien sur la qualité du rendu FR.",
      gagnant: "B",
    },
    {
      profil: "YouTubeur qui fait 2-3 vidéos longues par mois",
      description:
        "Combo gagnant : OpusClip pour découper en shorts, Submagic pour ajouter les sous-titres stylés sur le clip final. Si un seul choix, OpusClip.",
      gagnant: "A",
    },
    {
      profil: "Solopreneur personal branding LinkedIn vidéo",
      description:
        "Format court, audience FR, besoin de rendu pro. Submagic est l'outil le plus adapté à ce cas précis.",
      gagnant: "B",
    },
    {
      profil: "Agence social media qui gère plusieurs comptes",
      description:
        "Le clipping massif, le volume et l'orientation workflow d'OpusClip font la différence à l'échelle. Submagic en complément pour les clients qui demandent du rendu FR premium.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Si tu produis du long format (podcasts, lives, confs) à recycler :{" "}
        <strong className="text-emerald-400">OpusClip</strong>. Si tu produis
        du contenu court natif en français : <strong className="text-amber-400">Submagic</strong>.
        Les deux sont complémentaires pour qui produit sérieusement du contenu
        vidéo.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer OpusClip →",
  },
  faq: [
    {
      question: "Peut-on utiliser les deux dans le même workflow ?",
      answer:
        "Oui, c'est même le setup le plus puissant. OpusClip pour la découpe initiale, Submagic pour le rendu final FR stylé. Combo économique qui se rentabilise rapidement dès qu'on produit plusieurs shorts par mois.",
    },
    {
      question: "Lequel a la meilleure qualité de sous-titres en français ?",
      answer:
        "Submagic, selon les retours publics et notre analyse. OpusClip a progressé en 2025-2026 mais reste en retrait sur la segmentation FR et les accents régionaux.",
    },
    {
      question: "Y a-t-il un plan gratuit durable ?",
      answer:
        "Oui, les deux proposent une porte d'entrée gratuite, mais elles ne servent pas le même usage. OpusClip pousse davantage le clipping de vidéos longues avec une logique plus orientée volume, tandis que Submagic propose une formule gratuite plus limitée pour tester son rendu et son workflow.",
    },
    {
      question: "Lequel est le plus crédible pour un workflow automatisé ?",
      answer:
        "OpusClip reste plus crédible si ton besoin principal est le clipping à grande échelle et un workflow orienté volume. Submagic affiche aussi des options d'API et d'intégrations sur ses offres, mais l'outil reste surtout pensé pour produire rapidement des shorts avec un rendu visuel fort, pas comme une plateforme d'automatisation lourde.",
    },
    {
      question: "Lequel choisir pour débuter ?",
      answer: (
        <>
          Si tu pars de vidéos longues, commence avec le plan gratuit
          d&apos;OpusClip pour te faire une idée. Si tu tournes déjà court,
          teste l&apos;essai gratuit de Submagic puis décide. Les deux sont
          plus simples que leurs concurrents (
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>
          ,{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>
          ).
        </>
      ),
    },
  ],
};

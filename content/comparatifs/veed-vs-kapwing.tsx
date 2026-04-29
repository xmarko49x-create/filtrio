import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const veedVsKapwing: ComparatifData = {
  slug: "veed-vs-kapwing",
  outilAslug: "veed",
  outilBslug: "kapwing",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Les deux éditeurs vidéo web les plus matures pour les équipes et les freelances. Veed couvre mieux le solo, Kapwing domine sur la collaboration temps réel. La bonne question : tu travailles seul ou en équipe de 3+ ?",
    tempsLecture: 5,
    lastCheck: "20/04/2026",
  },
  verdictRapide: {
    headline:
      "Veed pour solo et petites équipes. Kapwing pour workflow collaboratif intensif.",
    paragraphs: [
      <>
        <strong className="text-yellow-400">Veed</strong>{" "}couvre mieux les
        usages individuels avec un rapport qualité/prix supérieur à
        l&apos;entrée (12 $/mois).{" "}
        <strong className="text-green-400">Kapwing</strong>{" "}justifie son tarif
        Business (50 $/mois/user) si la collaboration temps réel est au cœur du
        workflow.
      </>,
      <>
        En solo ou duo, Veed. En équipe de 3+, Kapwing. C&apos;est presque
        aussi simple que ça.
      </>,
    ],
  },
  criteres: [
    {
      label: "Rapport qualité/prix solo",
      poids: 20,
      scoreA: 8.2,
      scoreB: 6.5,
      gagnant: "A",
    },
    {
      label: "Collaboration équipe",
      poids: 20,
      scoreA: 7.0,
      scoreB: 9.2,
      gagnant: "B",
    },
    {
      label: "Profondeur IA",
      poids: 15,
      scoreA: 7.5,
      scoreB: 7.0,
      gagnant: "A",
    },
    {
      label: "Polyvalence",
      poids: 15,
      scoreA: 8.5,
      scoreB: 7.8,
      gagnant: "A",
    },
    {
      label: "Workflows d'approbation",
      poids: 15,
      scoreA: 6.0,
      scoreB: 9.0,
      gagnant: "B",
    },
    {
      label: "Intégrations",
      poids: 15,
      scoreA: 8.5,
      scoreB: 8.0,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu travailles en solo ou en duo",
    "Ton usage est polyvalent (montage + sous-titres + enregistrement)",
    "Tu veux l'entrée la moins chère (12 $/mois)",
    "Tu travailles depuis plusieurs ordinateurs différents",
    "Features IA légères te suffisent (transcription, sous-titres auto)",
  ],
  porQuiB: [
    "Tu travailles en équipe de 3+ personnes",
    "Tu as besoin d'édition simultanée temps réel",
    "Workflows d'approbation et commentaires sont critiques",
    "Tu es en agence avec plusieurs clients à gérer",
    "Brand kits partagés important pour toi",
  ],
  casUsage: [
    {
      profil: "Freelance vidéo solo",
      description:
        "Besoins polyvalents, un seul utilisateur, travail depuis plusieurs machines clients. Veed couvre tout moins cher.",
      gagnant: "A",
    },
    {
      profil: "Agence social media avec 3+ monteurs",
      description:
        "Édition simultanée, commentaires, approbation client directement dans l'outil. Kapwing Business (50 $/user/mois) s'amortit vite.",
      gagnant: "B",
    },
    {
      profil: "Marketeur solo d'une PME",
      description:
        "Produit toutes les vidéos seul ou valide avec 1 manager. Pas besoin de collaboration temps réel. Veed suffit largement.",
      gagnant: "A",
    },
    {
      profil: "Équipe contenu interne d'entreprise",
      description:
        "Communication interne, formation, tutos SOP impliquant com' + RH + produit. Collaboration centralisée précieuse.",
      gagnant: "B",
    },
    {
      profil: "YouTubeur qui délègue à un monteur freelance",
      description:
        "Un créateur + un monteur, allers-retours via exports. Pas de collaboration temps réel indispensable. Veed plus économique.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Veed en solo, Kapwing en équipe de 3+. La vraie ligne de partage se
        joue sur ton organisation, pas sur les fonctionnalités pures.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer Veed →",
  },
  faq: [
    {
      question: "Lequel est le mieux pour un débutant ?",
      answer:
        "Veed. Interface plus intuitive, prise en main plus rapide, moins cher. Kapwing a une courbe d'apprentissage plus longue et ses features brillent en équipe, pas en solo.",
    },
    {
      question: "Peut-on travailler offline sur l'un ou l'autre ?",
      answer: "Non, les deux sont 100% web. Si tu veux offline, il faut un éditeur desktop (DaVinci Resolve, Premiere Pro, CapCut en version desktop).",
    },
    {
      question: "Sous-titres auto : lequel est meilleur en français ?",
      answer: (
        <>
          Les deux sont corrects, avec un léger avantage à Veed. Mais si la
          qualité des sous-titres FR est critique, passe plutôt par{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          (spécialiste FR) et utilise Veed/Kapwing pour le reste.
        </>
      ),
    },
    {
      question: "Lequel pour une agence avec plusieurs clients ?",
      answer:
        "Kapwing. La gestion multi-espaces, les brand kits par client, les workflows d'approbation centralisés sont pensés pour ce cas. Veed fonctionne mais demande plus de manipulation manuelle pour rester organisé.",
    },
    {
      question: "Coûts totaux sur un an ?",
      answer:
        "Veed Basic : 144 $/an pour 1 user. Kapwing Business : 600 $/user/an. L'écart est énorme mais n'a de sens qu'en comparant équipe vs solo. En équipe de 5 monteurs, Kapwing à 3000 $/an vs Veed Business à ~700 $/an — la différence se justifie uniquement si tu utilises vraiment la collaboration temps réel.",
    },
  ],
};

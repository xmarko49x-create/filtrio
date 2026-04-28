import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const vidiqVsTubebuddy: ComparatifData = {
  slug: "vidiq-vs-tubebuddy",
  outilAslug: "vidiq",
  outilBslug: "tubebuddy",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Les deux extensions qui dominent le marché du SEO YouTube. Approches opposées : IA générative moderne d'un côté, analyse mature et tests A/B de l'autre. Voici quel outil est fait pour quel profil de créateur.",
    tempsLecture: 6,
    lastCheck: "22/04/2026",
  },
  verdictRapide: {
    headline:
      "VidIQ pour l'IA et les débutants. TubeBuddy pour les tests A/B et les chaînes établies.",
    paragraphs: [
      <>
        <strong className="text-sky-400">VidIQ</strong> mise sur l&apos;IA
        générative, l&apos;analyse de tendances et un plan gratuit vraiment
        utile. Plus moderne, plus accessible pour démarrer.{" "}
        <strong className="text-orange-400">TubeBuddy</strong> mise sur la
        maturité, les tests A/B de miniatures et les outils d&apos;analyse
        concurrentielle. Plus ancré dans une approche analytique.
      </>,
      <>
        Ils couvrent des besoins similaires mais avec des philosophies
        différentes. Le bon choix dépend de ton style : &quot;je veux que
        l&apos;IA me suggère&quot; (VidIQ) ou &quot;je veux tester moi-même ce
        qui marche&quot; (TubeBuddy).
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité en français",
      poids: 20,
      scoreA: 7.0,
      scoreB: 7.0,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 8.0,
      scoreB: 8.8,
      gagnant: "B",
    },
    {
      label: "Profondeur IA",
      poids: 20,
      scoreA: 8.5,
      scoreB: 8.5,
      gagnant: "A",
    },
    {
      label: "Interface & prise en main",
      poids: 15,
      scoreA: 8.5,
      scoreB: 9.0,
      gagnant: "B",
    },
    {
      label: "Tests A/B de miniatures",
      poids: 15,
      scoreA: 6.5,
      scoreB: 9.3,
      gagnant: "B",
    },
    {
      label: "Intégrations & mobile",
      poids: 10,
      scoreA: 8.5,
      scoreB: 7.5,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu veux tester sérieusement en gratuit avant de payer",
    "Tu utilises beaucoup l'IA générative (titres, scripts, hooks)",
    "Tu cherches de nouvelles niches ou sujets porteurs",
    "Tu gères aussi ta chaîne depuis un smartphone",
    "Tu préfères une interface moderne et épurée",
  ],
  porQuiB: [
    "Tu veux des tests A/B de miniatures sérieux",
    "Tu as besoin d'analyser la concurrence en profondeur",
    "Tu veux modifier en masse les métadonnées de tes vidéos",
    "Tu es un YouTubeur qui aime tester et analyser plutôt que laisser l'IA décider",
    "Tu cherches un tarif d'entrée bas (Pro à 3,99 $/mois en annuel)",
  ],
  casUsage: [
    {
      profil: "Débutant sans budget qui veut tester",
      description:
        "Priorité au plan gratuit récurrent utilisable. VidIQ conserve un plan Free récurrent ; TubeBuddy ne met plus en avant de plan gratuit en 2026 (uniquement Pro et Legend payants). Avantage net à VidIQ pour tester sans carte bancaire.",
      gagnant: "A",
    },
    {
      profil: "YouTubeur établi qui veut optimiser son CTR",
      description:
        "Les tests A/B de miniatures sont critiques. TubeBuddy reste la référence selon les retours publics sur cette fonctionnalité historique.",
      gagnant: "B",
    },
    {
      profil: "Créateur qui cherche de nouveaux sujets via l'IA",
      description:
        "Générateur de niches, AI Coach, suggestions de scripts : VidIQ est plus fort sur l'accompagnement créatif assisté par IA.",
      gagnant: "A",
    },
    {
      profil: "Agence avec catalogue important à optimiser",
      description:
        "Bulk edit, analytics concurrentielle, tests A/B sur plusieurs chaînes : TubeBuddy reste plus productif sur ce type de volume.",
      gagnant: "B",
    },
    {
      profil: "YouTubeur nomade qui travaille aussi sur mobile",
      description:
        "Les apps iOS/Android complètes de VidIQ changent la donne pour un workflow sans PC permanent. TubeBuddy reste centré sur l'extension Chrome.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "Choisir selon ton profil.",
    paragraph: (
      <>
        Si tu débutes, utilises l&apos;IA pour générer titres et idées, ou
        veux un plan gratuit récurrent : prends VidIQ. Si tu fais beaucoup de
        tests A/B de miniatures ou gères un catalogue important : la fiche
        TubeBuddy reste utile à consulter. Les deux approches sont valides,
        choisis celle qui colle à ton workflow.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Tester VidIQ →",
  },
  faq: [
    {
      question: "Peut-on installer les deux en même temps ?",
      answer:
        "Techniquement oui, mais pas recommandé. Les deux extensions s'injectent dans YouTube Studio et peuvent générer des conflits visuels (bandeaux superposés, boutons redondants). Il vaut mieux en choisir une, tester sérieusement pendant 30-60 jours, puis switcher si besoin.",
    },
    {
      question: "Y a-t-il un outil 100% gratuit qui remplace les deux ?",
      answer: (
        <>
          YouTube Studio natif a considérablement amélioré ses outils
          d&apos;analyse en 2024-2026 : analytics détaillées, tests A/B de
          miniatures natifs, suggestions de contenu. Ça ne remplace pas
          totalement VidIQ ou TubeBuddy mais ça couvre une partie significative
          des besoins de base gratuitement. À noter : côté TubeBuddy, la page
          Tarifs officielle ne met plus en avant de plan gratuit en 2026 —
          seuls les plans Pro et Legend sont affichés.{" "}
          <Link href="/outils/vidiq" className="text-sky-400 hover:underline">
            VidIQ
          </Link>{" "}
          conserve un plan Free récurrent.
        </>
      ),
    },
    {
      question: "Lequel est le plus populaire en France ?",
      answer: (
        <>
          Les deux sont largement utilisés par les YouTubeurs francophones.{" "}
          <Link href="/outils/tubebuddy" className="text-orange-400 hover:underline">
            TubeBuddy
          </Link>{" "}
          a une présence historique plus forte (plus ancien, plus cité dans les
          tutos YouTube FR des années 2018-2023).{" "}
          <Link href="/outils/vidiq" className="text-sky-400 hover:underline">
            VidIQ
          </Link>{" "}
          a pris le relais auprès des créateurs plus récents qui privilégient
          l&apos;IA. Aucun des deux n&apos;a de version spécifiquement
          optimisée pour la France.
        </>
      ),
    },
    {
      question: "Est-ce que ça vaut vraiment la peine de payer ?",
      answer: (
        <>
          Pour un YouTubeur qui publie régulièrement et prend sa chaîne au
          sérieux, oui. Le gain de temps sur l&apos;optimisation SEO, la
          recherche de mots-clés et l&apos;analyse concurrence justifie
          l&apos;abonnement.{" "}
          <Link href="/outils/vidiq" className="text-sky-400 hover:underline">
            VidIQ
          </Link>{" "}
          démarre à 16,58 €/mois (Boost annuel),{" "}
          <Link href="/outils/tubebuddy" className="text-orange-400 hover:underline">
            TubeBuddy
          </Link>{" "}
          à partir de 3,99 $/mois (Pro annuel) — tarif d&apos;entrée
          sensiblement plus bas sur le papier.
        </>
      ),
    },
    {
      question: "Dois-je changer d'outil si je grandis ?",
      answer:
        "Pas forcément. Les deux outils scalent pour des chaînes de toutes tailles. Le seul cas où changer fait sens : si tu passes du mode créateur solo au mode agence multi-chaînes, TubeBuddy a historiquement des features bulk edit plus matures. Pour rester sur VidIQ, ses plans supérieurs couvrent aussi les équipes.",
    },
  ],
};

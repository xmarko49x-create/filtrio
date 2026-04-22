import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const vidiqFiche: FicheData = {
  slug: "vidiq",
  hero: {
    h1: "VidIQ : l'avis complet en 2026",
    tagline:
      "Concurrent moderne de TubeBuddy, data-driven avec une forte composante IA. Trend Alerts, AI Coach, scoring SEO en temps réel. Plan gratuit réellement utilisable. Voici le verdict.",
    badges: [
      { label: "SEO YouTube IA", tone: "primary" },
      { label: "Plan gratuit utile", tone: "accent" },
      { label: "Trend Alerts", tone: "neutral" },
    ],
    origine: "USA",
    tempsLecture: 8,
    lastCheck: "22/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Extension Chrome lancée en 2015, intégrée à YouTube Studio. Positionnement data-driven : analyse de tendances, suggestions IA de niches, scoring SEO en temps réel, générateur de scripts et de titres.",
    },
    {
      question: "Pour qui ?",
      answer:
        "YouTubeurs qui veulent un outil SEO moderne avec une forte dimension IA générative. Créateurs qui recherchent leurs prochains sujets via l'analyse de tendances. Agences qui ont besoin d'analytics data-driven.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs hors YouTube. YouTubeurs qui préfèrent une approche plus
          manuelle et analytique (→{" "}
          <Link
            href="/outils/tubebuddy"
            className="text-orange-400 hover:underline"
          >
            TubeBuddy
          </Link>{" "}
          plus adapté). Ceux qui veulent des tests A/B de miniatures avancés
          (moins développés ici).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Gratuit disponible pour démarrer (meilleur que TubeBuddy sur ce point). Boost à 16,58 €/mois en annuel, Max à 31 €/mois en annuel. Offre Enterprise dédiée via contact. Facturation en EUR (FR geo-pricing), tarification fixe.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link
            href="/outils/tubebuddy"
            className="text-orange-400 hover:underline"
          >
            TubeBuddy
          </Link>
          , le concurrent direct. Plus fort sur tests A/B, moins sur l&apos;IA
          générative. Voir le{" "}
          <Link
            href="/comparatifs/vidiq-vs-tubebuddy"
            className="text-sky-400 hover:underline"
          >
            comparatif direct
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-sky-400">Oui</strong>, en particulier si tu
          cherches un outil moderne avec une forte composante IA et un vrai
          plan gratuit pour tester.
        </>
      ),
    },
  ],
  porQui: [
    "Tu cherches un outil SEO YouTube avec IA générative",
    "Tu veux analyser les tendances pour trouver tes prochains sujets",
    "Tu débutes et veux un tier gratuit sérieux pour tester",
    "Tu préfères des tarifs fixes peu importe la taille de ta chaîne",
    "Tu apprécies un scoring SEO immédiat sur chaque vidéo",
    "Tu publies sur plusieurs plateformes et veux un outil moderne",
  ],
  pasPourQui: [
    "YouTube n'est pas ton canal principal",
    <>
      Tu veux faire des tests A/B avancés de miniatures (→{" "}
      <Link
        href="/outils/tubebuddy"
        className="text-orange-400 hover:underline"
      >
        TubeBuddy
      </Link>
      )
    </>,
    "Tu crées du contenu dans une niche très francophone (outils optimisés EN)",
    "Tu cherches un éditeur vidéo ou un outil de sous-titrage",
    "Tu as besoin d'un outil de gestion multi-chaînes poussé",
    "Tu veux un outil qui fonctionne sans extension navigateur",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface partiellement traduite, suggestions de keywords nettement moins riches en français qu'en anglais. Les features IA génératives fonctionnent en FR mais avec moins de finesse que pour les niches anglophones.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 8.0,
      commentaire:
        "Plan gratuit réellement utilisable (avantage sur TubeBuddy). Tarifs fixes et prévisibles affichés en EUR : Boost à 16,58 €/mois en annuel, Max à 31 €/mois. Plan Boost proposé régulièrement en promo, avec économie annoncée sur la facturation annuelle.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "IA générative intégrée au workflow : générateur de titres, scripts, hooks, descriptions, suggestions de niches. AI Coach qui accompagne les créateurs pas à pas. Plus moderne que TubeBuddy sur cet axe.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Extension intégrée à YouTube Studio avec un design plus moderne que TubeBuddy. Dashboard séparé disponible. Courbe d'apprentissage courte : les 3-4 features principales sont accessibles en moins de 10 minutes.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support en anglais principalement. Documentation traduite automatiquement. Communauté Discord active mais internationale. Quelques tutos YouTube FR existent par des créateurs indépendants.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "Extensions Chrome, Firefox, Edge, Safari. Applications iOS et Android natives (avantage sur TubeBuddy). Export data vers Google Sheets. API accessible sur les plans supérieurs.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Scoring SEO en temps réel",
      description:
        "Note immédiate de chaque vidéo sur son potentiel SEO, avec suggestions concrètes d'amélioration sur titre, tags, description, miniature.",
    },
    {
      titre: "AI Coach et suggestions IA",
      description:
        "Assistant IA qui analyse ta chaîne et propose des pistes concrètes : sujets tendance dans ta niche, formats qui performent, ajustements à tester.",
    },
    {
      titre: "Trend Alerts",
      description:
        "Notifications sur les tendances émergentes dans ta niche. Permet d'être parmi les premiers à traiter un sujet en pleine montée.",
    },
    {
      titre: "Générateur de titres et scripts",
      description:
        "IA qui propose des titres accrocheurs, des hooks d'introduction et des structures de script basés sur ta thématique et les performances de ta niche.",
    },
    {
      titre: "Keyword Tool et niche finder",
      description:
        "Recherche approfondie de mots-clés avec volume, concurrence, tendance. Identification des niches à fort potentiel et faible concurrence.",
    },
    {
      titre: "Channel Audit",
      description:
        "Audit complet de ta chaîne avec rapport détaillé sur les points à améliorer. Utile à intervalles réguliers pour prioriser les efforts.",
    },
  ],
  plans: [
    {
      nom: "Gratuit",
      prix: "0 €",
      prixSub: "Pour démarrer",
      cible: "Pour découvrir VidIQ",
      features: [
        "Accès limité aux outils SEO et IA",
        "Scoring et keyword research de base",
        "Upgrade quand la chaîne grandit",
      ],
    },
    {
      nom: "Boost",
      prix: "16,58 €/mois",
      prixSub: "En annuel · économie 29 € vs mensuel",
      cible: "Créateurs réguliers",
      features: [
        "IA générative intégrée au workflow",
        "AI Coach pour accompagnement",
        "Scoring SEO, tendances, analytics",
        "Extensions + apps mobiles",
      ],
    },
    {
      nom: "Max",
      prix: "31 €/mois",
      prixSub: "En annuel · économie 96 € vs mensuel",
      cible: "Créateurs pros",
      features: [
        "Tout Boost inclus",
        "Mode \"Max Mode\" AI plus puissant (entraîné sur des milliards de vidéos)",
        "Outils avancés de pilotage de chaîne",
      ],
    },
    {
      nom: "Enterprise",
      prix: "Sur devis",
      prixSub: "Organisations & médias",
      cible: "Accès entreprise multi-chaînes",
      features: [
        "Full enterprise access pour chaque chaîne",
        "Support et conditions dédiés",
        "Détails via contact commercial",
      ],
    },
  ],
  alternatives: [
    {
      slug: "tubebuddy",
      comment:
        "Le concurrent direct. Plus fort sur tests A/B de miniatures et bulk edit, moins sur l'IA générative. Approche plus analytique que moderne.",
    },
    {
      slug: "morningfame",
      comment:
        "Alternative européenne plus pédagogique et moins chère. Bon choix pour débuter sans surcharge de features.",
    },
    {
      slug: "youtube-studio",
      comment:
        "YouTube Studio natif a amélioré ses analytics et suggestions en 2024-2026. Couvre une partie des features VidIQ sans extension.",
    },
  ],
  faq: [
    {
      question: "VidIQ ou TubeBuddy, lequel choisir en 2026 ?",
      answer: (
        <>
          VidIQ si tu veux un outil moderne avec IA générative intégrée et un
          plan gratuit sérieux. TubeBuddy si tu veux le meilleur système de
          tests A/B de miniatures et le bulk edit. Voir le{" "}
          <Link
            href="/comparatifs/vidiq-vs-tubebuddy"
            className="text-sky-400 hover:underline"
          >
            comparatif complet
          </Link>
          .
        </>
      ),
    },
    {
      question: "Le plan gratuit est-il utilisable durablement ?",
      answer:
        "Oui, c'est un vrai avantage vs TubeBuddy. Tu peux faire du scoring SEO basique, découvrir des mots-clés, avoir quelques alertes de tendance sur la durée. Assez pour démarrer une chaîne avec de bonnes bases avant de considérer le Pro.",
    },
    {
      question: "Les features IA fonctionnent-elles bien en français ?",
      answer:
        "Fonctionnent oui, avec moins de finesse qu'en anglais. Les suggestions de titres FR sont correctes mais manquent parfois d'idiomatique naturel. L'AI Coach fournit des retours utiles mais optimisés par défaut pour le marché anglophone.",
    },
    {
      question: "Peut-on utiliser VidIQ sur mobile ?",
      answer:
        "Oui, applications iOS et Android natives disponibles. Avantage net sur TubeBuddy qui reste extension-navigateur seulement. Utile pour les créateurs qui gèrent leur chaîne en mobilité.",
    },
    {
      question: "Les promotions sont-elles vraiment intéressantes ?",
      answer:
        "Oui, VidIQ pousse régulièrement des offres (Boost à -50% la première année, mois gratuits, etc.). Avant de souscrire, vérifie les offres actives. Passer par une page de promo active peut diviser le coût de la première année par 2.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester VidIQ ?",
    sub: "Le plan gratuit récurrent permet de démarrer sérieusement sans engagement. Upgrade Boost à -50% la première année souvent disponible en promo.",
    buttonText: "Essayer VidIQ",
  },
};

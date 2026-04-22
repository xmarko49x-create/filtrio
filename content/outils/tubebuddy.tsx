import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const tubebuddyFiche: FicheData = {
  slug: "tubebuddy",
  hero: {
    h1: "TubeBuddy : l'avis complet en 2026",
    tagline:
      "L'extension Chrome historique du SEO YouTube, depuis 2014. Tests A/B de miniatures, analyse concurrence, bulk edit. Voici pour qui elle vaut son prix, pour qui elle ne vaut pas.",
    badges: [
      { label: "SEO YouTube historique", tone: "primary" },
      { label: "Commission 50% récurrent", tone: "accent" },
      { label: "Tests A/B miniatures", tone: "neutral" },
    ],
    origine: "USA",
    depuis: "2014",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Extension Chrome pour YouTubeurs, lancée en 2014. Elle s'intègre directement à YouTube Studio et ajoute des outils d'optimisation : tags suggérés, analyse de mots-clés, optimisation de titres, test A/B de miniatures, analytics concurrent.",
    },
    {
      question: "Pour qui ?",
      answer:
        "YouTubeurs qui veulent optimiser leur SEO, comprendre leur concurrence, tester différentes miniatures et titres, et gérer leur chaîne plus efficacement. Particulièrement utile pour les chaînes entre 1k et 100k abonnés.",
    },
    {
      question: "Pas pour qui ?",
      answer:
        "Créateurs 100% TikTok/Reels (pas utile hors YouTube). YouTubeurs gros qui ont déjà des équipes SEO. Ceux qui cherchent un outil de montage ou de sous-titrage (ce n'est pas son rôle).",
    },
    {
      question: "Combien ?",
      answer:
        "Plans payants à partir de 12 $/mois · Facturation en USD · Voir les tarifs officiels pour le détail des offres.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/vidiq" className="text-sky-400 hover:underline">
            VidIQ
          </Link>
          , son concurrent direct. Fonctionnalités très proches, avec quelques
          différences d&apos;approche. Voir le{" "}
          <Link
            href="/comparatifs/vidiq-vs-tubebuddy"
            className="text-emerald-400 hover:underline"
          >
            comparatif complet VidIQ vs TubeBuddy
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-orange-400">Oui</strong>, pour tout YouTubeur
          sérieux qui publie régulièrement. Le ROI est clair dès qu&apos;on
          cherche à optimiser son référencement et sa stratégie de contenu.
        </>
      ),
    },
  ],
  porQui: [
    "Ta chaîne YouTube est ton canal principal",
    "Tu publies régulièrement (1+ vidéo par semaine)",
    "Tu veux optimiser tes tags, titres et descriptions",
    "Tu veux tester plusieurs miniatures avec des vrais stats",
    "Tu veux analyser ta concurrence en profondeur",
    "Tu préfères travailler dans l'interface YouTube native",
  ],
  pasPourQui: [
    "Tu ne fais pas (ou peu) de YouTube",
    "Ta chaîne est déjà très établie avec une équipe dédiée",
    "Tu veux un outil orienté contenu IA (script, voix, sous-titres)",
    "Tu utilises un autre navigateur que Chrome/Edge/Firefox",
    "Tu préfères un workflow mobile-first",
    "Ton budget est 100% zéro (plan gratuit trop limité)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface disponible en français mais l'expérience reste principalement anglophone. Les suggestions de tags et de titres sont plus riches en anglais qu'en français. Support uniquement en anglais.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 8.8,
      commentaire:
        "Tarification dégressive intéressante pour les petites chaînes. Plan gratuit utile pour découvrir. Le ROI est clair sur les chaînes en croissance qui cherchent à optimiser leur visibilité.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "L'écosystème couvre SEO, tags, titres, miniatures, tests A/B, analytics concurrent, bulk edit. Peu d'IA générative native (vs VidIQ qui mise plus sur ce terrain), mais des outils d'analyse très robustes.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 9.0,
      commentaire:
        "Intégration directe à YouTube Studio via l'extension. Pas de nouvelle interface à apprendre : les features apparaissent dans les pages YouTube existantes. Fluide pour un YouTubeur déjà habitué à son environnement.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support uniquement en anglais. Documentation traduite automatiquement en français, qualité correcte. Communauté YouTube internationale très active, tutos FR existants sur YouTube.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 9.0,
      commentaire:
        "S'intègre directement à YouTube (Studio et pages publiques), export vers Google Sheets, Canva, extensions Chrome/Firefox/Edge. Pas d'API publique mais couvre le workflow YouTube natif.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Tag Explorer",
      description:
        "Recherche et suggestion de tags YouTube basée sur les volumes de recherche, la concurrence et les performances. Permet de trouver des mots-clés à faible concurrence et fort volume.",
    },
    {
      titre: "Optimisation de titres",
      description:
        "Analyse des titres existants performants, suggestions basées sur les mots-clés ciblés. Vérification longueur, CTR potentiel, concordance avec le contenu.",
    },
    {
      titre: "Tests A/B de miniatures",
      description:
        "Rotation automatique entre plusieurs miniatures pour déterminer celle qui génère le meilleur CTR. Statistiques détaillées par variante. Fonctionnalité phare de TubeBuddy.",
    },
    {
      titre: "Analytics concurrent",
      description:
        "Analyse détaillée des chaînes concurrentes : vues moyennes, fréquence de publication, tags utilisés, engagement. Permet de comprendre ce qui marche chez les autres.",
    },
    {
      titre: "Bulk Processing",
      description:
        "Modification en masse de métadonnées (titres, tags, descriptions) sur plusieurs vidéos. Gain de temps considérable pour une chaîne avec un catalogue conséquent.",
    },
    {
      titre: "Health Check de chaîne",
      description:
        "Audit global de ta chaîne : identification des vidéos sous-optimisées, suggestions d'amélioration, check SEO global. Utile pour faire le point régulièrement.",
    },
  ],
  plans: [
    {
      nom: "Plans TubeBuddy",
      prix: "À partir de 12 $/mois",
      cible: "YouTubeurs, chaînes en croissance, agences",
      features: [
        "Plans payants à partir de 12 $/mois",
        "Facturation en USD",
        "Détail des offres et fonctionnalités sur la page Tarifs de TubeBuddy",
        "Tarifs susceptibles d'évoluer — vérifier sur le site officiel",
      ],
    },
  ],
  alternatives: [
    {
      slug: "vidiq",
      comment:
        "Le concurrent direct. Plus orienté IA générative et suggestions de contenu. Interface plus moderne, plan gratuit vraiment utilisable.",
    },
    {
      slug: "morningfame",
      comment:
        "Alternative européenne plus pédagogique et moins chère. Bon choix pour débuter sans surcharge de features.",
    },
    {
      slug: "youtube-studio",
      comment:
        "YouTube a amélioré ses analytics et suggestions en 2024-2026. Couvre une partie des features TubeBuddy sans extension, gratuitement.",
    },
  ],
  faq: [
    {
      question: "TubeBuddy fonctionne-t-il bien en français ?",
      answer:
        "L'interface est traduite. Les données et suggestions de mots-clés sont nettement plus riches en anglais qu'en français. Pour une niche francophone, les suggestions restent utiles mais moins exhaustives. Support uniquement en EN.",
    },
    {
      question: "Quelle est la différence principale avec VidIQ ?",
      answer: (
        <>
          TubeBuddy mise sur l&apos;analyse et les tests (A/B miniatures,
          concurrent, bulk edit). VidIQ mise sur l&apos;IA générative et
          l&apos;identification de tendances. Voir le{" "}
          <Link
            href="/comparatifs/vidiq-vs-tubebuddy"
            className="text-orange-400 hover:underline"
          >
            comparatif direct
          </Link>{" "}
          pour le détail.
        </>
      ),
    },
    {
      question: "Le plan gratuit est-il vraiment utile ?",
      answer:
        "Pour découvrir l'outil, oui. Pour un usage régulier, non : les limitations arrivent vite (tags limités, pas de tests A/B, analytics basiques). VidIQ propose un plan gratuit nettement plus généreux sur ce point.",
    },
    {
      question: "Le prix augmente-t-il avec la taille de ma chaîne ?",
      answer:
        "Oui, c'est le point critique. TubeBuddy applique une tarification en partie liée à la taille de ta chaîne : plus elle grossit, plus l'abonnement monte. Les paliers exacts sont à vérifier sur la page Tarifs officielle.",
    },
    {
      question: "Compatible avec Safari ou Opera ?",
      answer:
        "Non. Extension officiellement supportée sur Chrome, Firefox et Edge. Safari et Opera ne sont pas couverts. Si tu travailles sur Mac Safari, il faut basculer sur Chrome pour utiliser TubeBuddy.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester TubeBuddy ?",
    sub: "Plans payants à partir de 12 $/mois (facturation USD). Détail des offres sur la page Tarifs officielle.",
    buttonText: "Essayer TubeBuddy",
  },
};

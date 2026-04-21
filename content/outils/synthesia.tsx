import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const synthesiaFiche: FicheData = {
  slug: "synthesia",
  hero: {
    h1: "Synthesia : l'avis complet en 2026",
    tagline:
      "Référence B2B des avatars IA vidéo. Fortune 500, conformité SOC 2/GDPR, 140+ langues, intégrations LMS. Voici pour qui il vaut son prix, pour qui il ne vaut pas.",
    badges: [
      { label: "Référence B2B", tone: "primary" },
      { label: "140+ langues", tone: "accent" },
      { label: "SOC 2 / GDPR", tone: "neutral" },
    ],
    origine: "UK",
    depuis: "2017",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme d'avatars IA vidéo lancée en 2017, positionnée B2B. Tu écris un script, tu choisis un avatar parmi 230+ préconçus (ou tu clones un dirigeant), Synthesia génère une vidéo formation ou communication. Spécialité : multilingue 140+ langues + conformité entreprise.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Équipes L&D (Learning & Development), communication interne d'entreprise, formation client SaaS, onboarding multilingue. Entreprises qui ont des exigences de conformité et qui produisent beaucoup de contenu formation/corporate.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs solo ou YouTubeurs (→{" "}
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          plus adapté). Social media grand public. Ceux qui veulent juste de la
          voix off (→{" "}
          <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
            ElevenLabs
          </Link>
          ). Budgets solo serrés.
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Starter à 22 $/mois (10 min vidéo), Creator à 67 $/mois (30 min). Enterprise sur devis. Plus cher qu'HeyGen à l'entrée mais inclut des features B2B (SSO, admin, conformité) utiles en entreprise.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          pour usage créateur ou B2C.{" "}
          <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
            ElevenLabs
          </Link>{" "}
          si tu veux juste la voix IA sans avatar.{" "}
          <Link
            href="/comparatifs/synthesia-vs-heygen"
            className="text-blue-400 hover:underline"
          >
            Comparatif Synthesia vs HeyGen
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-blue-400">Oui, pour les cas d&apos;usage B2B</strong>
          . Synthesia est le choix le plus sûr pour une entreprise. Pour un
          créateur, HeyGen ou d&apos;autres alternatives seront plus adaptés.
        </>
      ),
    },
  ],
  porQui: [
    "Tu produis du contenu formation / onboarding d'entreprise",
    "Tu as besoin de communication interne multilingue (140+ langues)",
    "Tu as des exigences B2B (SSO, conformité, admin)",
    "Tu veux des avatars plus \"pros\", moins \"YouTube\"",
    "Ton entreprise a un budget dédié formation",
    "Tu veux cloner le visage du CEO ou d'un dirigeant",
  ],
  pasPourQui: [
    <>
      Tu es créateur solo (→{" "}
      <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
        HeyGen
      </Link>
      )
    </>,
    "Tu fais du contenu social media grand public",
    <>
      Tu veux juste de la voix off (→{" "}
      <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
        ElevenLabs
      </Link>
      )
    </>,
    "Budget solo serré (22 $/mois c'est un engagement)",
    "Tu veux un style d'avatar créatif/flashy",
    "Tu préfères filmer toi-même (Synthesia ne remplace pas la présence humaine)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 8.0,
      commentaire:
        "Voix FR parmi les meilleures de la catégorie avatars IA. Sync labiale FR soignée. Documentation partiellement traduite. Support B2B disponible en français pour les entreprises.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.2,
      commentaire:
        "Plus cher qu'HeyGen à l'entrée (22 $ vs 29 $ mais 10 min vs 30 min d'HeyGen Creator). S'amortit en entreprise grâce aux features B2B. Peu adapté au solo.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "230+ avatars préconçus, clonage facial sur plans pros, traduction vidéo automatique 140+ langues avec sync labiale adaptée. Solide mais moins créatif que HeyGen sur les usages contemporain.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface claire orientée workflow B2B : script → choix avatar → voix → render. Courbe d'apprentissage raisonnable (1h pour être opérationnel).",
    },
    {
      label: "Conformité et sécurité B2B",
      poids: 15,
      score: 9.0,
      commentaire:
        "Point fort différenciateur vs HeyGen. SOC 2, GDPR compliant, SSO, audit logs, contrôle admin avancé. Conçu pour les exigences des grandes entreprises.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API complète, intégrations LMS (Moodle, Docebo, Teachable), connecteurs Slack, Teams, SharePoint. Pensé pour s'insérer dans les workflows d'entreprise existants.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Avatars B2B préconçus",
      description:
        "230+ avatars catégorisés par style pro (formation, corporate, tech, finance). Rendu adapté au contexte entreprise, moins \"créatif\" qu'HeyGen. Les avatars premium sont très crédibles.",
    },
    {
      titre: "Traduction vidéo 140+ langues",
      description:
        "Catalogue multilingue le plus large du secteur. Sync labiale adaptée à chaque langue cible. Permet à une multinationale de décliner une formation dans toutes les langues où elle opère.",
    },
    {
      titre: "Clonage facial corporate",
      description:
        "Clone du visage d'un dirigeant disponible sur plans Creator+. Processus plus long et vérifié qu'HeyGen. Vidéo de consentement formelle requise. Sécurité renforcée apprécié des directions juridiques.",
    },
    {
      titre: "Conformité entreprise",
      description:
        "SOC 2, GDPR, SSO, audit logs, contrôle admin avancé. Point fort vs HeyGen. Essentiel pour les grandes entreprises avec exigences sécurité et compliance.",
    },
    {
      titre: "Intégrations LMS",
      description:
        "Moodle, Docebo, Teachable : connecteurs natifs. Les vidéos générées s'intègrent directement dans les systèmes de formation d'entreprise. Rare dans cette catégorie.",
    },
    {
      titre: "API et automatisation",
      description:
        "API complète pour industrialiser la génération. Permet de créer dynamiquement des vidéos à partir de contenus textuels existants. Utilisé par les SaaS pour des tutos produit auto-générés.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      cible: "Pour démo rapide",
      features: [
        "3 min de vidéo/mois",
        "9 avatars basiques",
        "Watermark Synthesia",
        "140 langues accessibles",
      ],
    },
    {
      nom: "Starter",
      prix: "22 $/mois",
      cible: "Petite équipe formation",
      features: [
        "10 min de vidéo/mois",
        "100+ avatars",
        "Sans watermark",
        "Export 1080p",
      ],
    },
    {
      nom: "Creator",
      prix: "67 $/mois",
      cible: "Formateurs pros / PME",
      features: [
        "30 min de vidéo/mois",
        "230+ avatars",
        "Clonage facial basique",
        "Branding personnalisé",
      ],
    },
    {
      nom: "Enterprise",
      prix: "Sur devis",
      cible: "Grandes entreprises",
      features: [
        "Volume sur mesure",
        "SSO + SOC 2 + GDPR",
        "API + intégrations LMS",
        "Support dédié + SLA",
      ],
    },
  ],
  alternatives: [
    {
      slug: "heygen",
      comment:
        "Concurrent direct plus orienté créateurs individuels. Avatars plus modernes, moins de features B2B. Plus souple pour usage social media.",
    },
    {
      slug: "elevenlabs",
      comment:
        "Si tu veux juste la voix IA sans avatar. Nettement moins cher et meilleure qualité vocale pure.",
    },
    {
      slug: "invideo",
      comment:
        "Si tu préfères script-to-video avec stock plutôt qu'avatar. Plus orienté marketing que formation.",
    },
  ],
  faq: [
    {
      question: "Synthesia ou HeyGen pour une entreprise ?",
      answer: (
        <>
          Synthesia dans la plupart des cas B2B : SSO, GDPR, SOC 2,
          intégrations LMS. HeyGen dans les cas où vitesse et créativité
          priment sur les features B2B (ex : équipe marketing agile d&apos;une
          scale-up). Voir le{" "}
          <Link
            href="/comparatifs/synthesia-vs-heygen"
            className="text-blue-400 hover:underline"
          >
            comparatif
          </Link>
          .
        </>
      ),
    },
    {
      question: "Peut-on cloner le visage d'un dirigeant ?",
      answer:
        "Oui, sur plans Creator+. Processus plus long et plus vérifié que HeyGen (plusieurs jours). Synthesia demande une vidéo de consentement formelle. Sécurité renforcée pour éviter le clonage non-autorisé, ce qui rassure les directions juridiques.",
    },
    {
      question: "140 langues, c'est vraiment utile ?",
      answer:
        "Pour une multinationale, oui : tu peux décliner une formation en toutes les langues où tu opères sans équipes locales. Pour une PME française, 5-10 langues suffisent largement et HeyGen les couvre. Avantage concret uniquement si tu opères vraiment dans de nombreux pays.",
    },
    {
      question: "Qualité vocale FR ?",
      answer:
        "Bonne qualité en français, parmi les meilleures de la catégorie avatars. Légèrement en retrait par rapport à ElevenLabs (spécialiste voix pure) mais largement suffisante pour du contenu formation ou corporate.",
    },
    {
      question: "Y a-t-il un programme d'affiliation ?",
      answer:
        "Oui, Synthesia propose un programme partenaire avec commission de 25% récurrente. Orienté partenaires B2B plutôt que créateurs individuels. Approbation généralement plus stricte qu'HeyGen ou ElevenLabs.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Synthesia ?",
    sub: "Plan gratuit (3 min/mois) suffisant pour générer une démo et tester le rendu avatar sur un script de présentation entreprise.",
    buttonText: "Essayer Synthesia",
  },
};

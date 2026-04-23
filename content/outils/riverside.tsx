import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const riversideFiche: FicheData = {
  slug: "riverside",
  hero: {
    h1: "Riverside.fm : l'avis complet en 2026",
    tagline:
      "Référence de l'enregistrement podcast et interview à distance. Positionnement qualité studio grâce à l'enregistrement local séparé de chaque participant.",
    badges: [
      { label: "Enregistrement distant pro", tone: "primary" },
      { label: "Qualité studio", tone: "accent" },
      { label: "Record · Edit · Repurpose", tone: "neutral" },
    ],
    origine: "Israël",
    tempsLecture: 8,
    lastCheck: "23/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme d'enregistrement audio-vidéo à distance. Innovation clé : chaque participant est enregistré localement sur sa machine, puis les tracks sont uploadés séparément. Résultat annoncé : qualité studio même sur une connexion moyenne.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Podcasteurs qui reçoivent des invités à distance, intervieweurs, équipes qui font du contenu conversationnel multi-intervenants. Tous ceux qui trouvent Zoom insuffisant pour un rendu pro.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs solo qui enregistrent seuls. Ceux qui éditent beaucoup en
          post-prod (→{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          plus adapté). Créateurs 100% shorts (pas du tout le bon outil).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer: (
        <>
          À partir de 24 $/mois. Riverside propose aussi un plan gratuit pour
          découvrir l&apos;outil. Les plans payants sont affichés en dollars
          américains sur le site officiel. Pour les besoins avancés ou équipe,
          il faut passer par une offre plus élevée ou une prise de contact
          commerciale.
        </>
      ),
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          qui intègre désormais l&apos;enregistrement à distance.{" "}
          <Link
            href="/comparatifs/descript-vs-riverside"
            className="text-indigo-400 hover:underline"
          >
            Comparatif Descript vs Riverside
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-indigo-400">Oui</strong>, si tu fais du
          podcast ou de l&apos;interview avec des invités à distance.
          C&apos;est l&apos;option la plus spécialisée pour ce cas précis.
        </>
      ),
    },
  ],
  porQui: [
    "Tu fais du podcast ou interview avec des invités à distance",
    "Tu veux une qualité d'enregistrement studio sans studio physique",
    "La qualité audio/vidéo de tes invités compte autant que la tienne",
    "Tu rassembles plusieurs intervenants sur une même session",
    "Tu veux récupérer des tracks séparés par participant pour éditer proprement",
    "Tu veux un producteur / ingé son à distance en tant que \"spectateur\"",
  ],
  pasPourQui: [
    "Tu enregistres toujours seul (Descript ou DAW classique suffisent)",
    <>
      Tu veux l&apos;édition textuelle révolutionnaire (→{" "}
      <Link href="/outils/descript" className="text-violet-400 hover:underline">
        Descript
      </Link>
      )
    </>,
    "Tu fais surtout du montage post-prod avancé",
    "Tu as un workflow Zoom/Teams qui te convient pour tes besoins",
    "Tes invités sont des profils non-techniques qui galèrent avec un outil nouveau",
    "Ton budget est vraiment serré sur le long terme",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Interface partiellement traduite en FR. La feature d'enregistrement en elle-même est agnostique à la langue. La transcription et l'éditeur IA restent plus convaincants en anglais qu'en français, comparable à Descript sur ce point.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.5,
      commentaire:
        "Plan gratuit disponible pour tester. Point d'entrée payant affiché à partir de 24 $/mois (USD) sur le site officiel. Positionnement dans la fourchette haute de sa catégorie, avec une spécialisation forte sur l'enregistrement distant pro.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "Magic Editor : découpe intelligente, suppression des silences, génération de clips courts, transcription auto. Moins poussé que Descript sur l'édition textuelle, mais comble l'écart sur les workflows podcast. Suggestions de highlights utiles.",
    },
    {
      label: "Qualité d'enregistrement à distance",
      poids: 15,
      score: 9.5,
      commentaire:
        "Le point fort absolu. Enregistrement local sur la machine de chaque participant, puis upload des tracks séparés. Aucune perte liée à la connexion. Largement supérieur à Zoom ou Teams sur ce volet.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support client en anglais principalement. Documentation traduite automatiquement, qualité correcte. Plusieurs tutos FR de la communauté podcasting francophone sur YouTube.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "Export direct vers plateformes podcast (Spotify, Apple, Google), YouTube, réseaux sociaux. API disponible sur les plans supérieurs. Intégrations Zapier et Make. Compatible avec la plupart des flux de production podcast.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Enregistrement local séparé",
      description:
        "Le différenciateur principal. Chaque participant enregistre en local sur sa machine en qualité maximale. Les tracks audio et vidéo sont uploadés en arrière-plan, sans perte liée à la connexion.",
    },
    {
      titre: "Magic Editor (IA)",
      description:
        "Éditeur IA : transcription automatique, suppression des silences, génération de clips courts automatiques, suggestions de moments forts. Couvre la plupart des cas d'édition courants pour un podcast.",
    },
    {
      titre: "Multi-intervenants avec tracks séparés",
      description:
        "Enregistrement simultané de plusieurs intervenants avec tracks séparés par participant. Utile pour les tables rondes et émissions multi-invités, et pour mixer proprement en post-production.",
    },
    {
      titre: "Producer mode",
      description:
        "Un \"producteur\" invisible peut rejoindre la session pour assister techniquement sans apparaître à l'enregistrement. Utile pour les podcasts avec une équipe de production séparée.",
    },
    {
      titre: "Media Board",
      description:
        "Permet d'injecter des sons, jingles, extraits vidéo en direct pendant l'enregistrement. Précieux pour les podcasts scénarisés ou les émissions dynamiques.",
    },
    {
      titre: "Export multi-plateformes",
      description:
        "Export direct vers les plateformes podcast et les réseaux sociaux. Formats audio et vidéo disponibles selon le plan choisi.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      prixSub: "2 heures one-off (crédit unique, pas mensuel)",
      cible: "Test avant engagement",
      features: [
        "2 heures de multi-track recording (crédit total, non renouvelable)",
        "Single track recording illimité",
        "Vidéo jusqu'à 720p",
        "Avec watermark",
      ],
    },
    {
      nom: "Pro",
      prix: "29 $/mois",
      prixSub: "Mensuel · ou 24 $/mois en annuel",
      cible: "Podcasteurs et créateurs réguliers",
      features: [
        "Essai gratuit 14 jours",
        "Qualité studio 4K vidéo · 48 kHz audio",
        "15 heures de multi-track recording par mois",
        "Single track illimité",
        "Teleprompter · sans watermark",
        "Unlimited text-based editing · AI tools (Magic Audio, eye contact, transcriptions, remove silences & filler words)",
        "Magic clips & show notes · Publish YouTube & podcast directories",
      ],
    },
    {
      nom: "Live",
      prix: "39 $/mois",
      prixSub: "Mensuel · ou 34 $/mois en annuel",
      cible: "Créateurs live et streamers",
      features: [
        "Tout Pro inclus",
        "Live stream full HD 1080p",
        "Multistreaming vers YouTube, Facebook, LinkedIn, Instagram, X, Twitch",
        "Custom RTMP",
        "Omnichat · live call-ins audience · live stream chat",
        "Custom overlays, lower thirds",
      ],
    },
    {
      nom: "Webinar",
      prix: "99 $/mois",
      prixSub: "Mensuel · ou 79 $/mois en annuel",
      cible: "Événements et webinaires",
      features: [
        "Tout Live inclus",
        "Host webinars jusqu'à 100 registrants",
        "Pre-record & stream like-live",
        "Unlimited scheduled sessions",
        "Lead capture tool · formulaire d'inscription custom",
        "Automated email reminders & follow-ups",
      ],
    },
    {
      nom: "Business",
      prix: "Sur devis",
      prixSub: "Organisations et équipes",
      cible: "Agences, médias, entreprises",
      features: [
        "Enregistrement illimité",
        "Vidéo mobile jusqu'à 4K",
        "Custom roles · collaborative editing",
        "API access · Salesforce integration",
        "24/7 Priority support · Customized onboarding",
        "Enterprise-grade security (SSO, SOC2, ISO27001)",
      ],
    },
  ],
  alternatives: [
    {
      slug: "descript",
      comment:
        "Intègre désormais l'enregistrement à distance. Plus fort sur la post-prod textuelle. Moins spécialisé en enregistrement pur que Riverside.",
    },
    {
      slug: "zencastr",
      comment:
        "Alternative historique plus abordable. Moins mature en vidéo mais très correct pour du podcast audio pur.",
    },
    {
      slug: "squadcast",
      comment:
        "Ancienne solution standalone, désormais intégrée à Descript. Bon choix si tu veux combiner enregistrement et édition sur une seule plateforme.",
    },
  ],
  faq: [
    {
      question: "Riverside ou Descript pour un podcast hebdomadaire ?",
      answer: (
        <>
          Dépend de ton besoin dominant. Riverside si la qualité
          d&apos;enregistrement à distance est ta priorité. Descript si
          l&apos;édition post-prod est ta priorité. Beaucoup de podcasteurs
          pros utilisent les deux. Voir le{" "}
          <Link
            href="/comparatifs/descript-vs-riverside"
            className="text-indigo-400 hover:underline"
          >
            comparatif direct
          </Link>
          .
        </>
      ),
    },
    {
      question: "La qualité est-elle vraiment meilleure que Zoom ?",
      answer:
        "Oui, nettement, selon les retours publics. Zoom compresse l'audio en temps réel et dégrade la vidéo selon la bande passante. Riverside enregistre en local, pas de compression temps-réel. L'écart est généralement audible sur un enregistrement conversationnel multi-intervenants.",
    },
    {
      question: "Combien d'invités peut-on avoir simultanément ?",
      answer:
        "Riverside permet plusieurs participants simultanés sur la même session, avec tracks séparés par personne. Le nombre exact selon le plan est à vérifier sur la page Tarifs officielle.",
    },
    {
      question: "L'invité doit-il installer quelque chose ?",
      answer:
        "Non, ça tourne dans le navigateur (Chrome/Edge de préférence). Il suffit de partager le lien de la session, l'invité autorise micro et caméra, et Riverside s'occupe de l'enregistrement local en arrière-plan. Friction minimale.",
    },
    {
      question: "Riverside vaut-il le prix pour un débutant podcaster ?",
      answer:
        "Pour un podcasteur qui prend son rendu au sérieux, oui. La différence de qualité par rapport à Zoom ou Teams est généralement audible. Pour un débutant qui n'est pas sûr de son engagement dans le podcasting, le plan gratuit permet de tester avant de s'engager.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à enregistrer en qualité studio ?",
    sub: "Le plan gratuit permet de tester la qualité d'enregistrement distant avec un invité avant de t'engager. Plans payants à partir de 24 $/mois (USD).",
    buttonText: "Essayer Riverside",
  },
};

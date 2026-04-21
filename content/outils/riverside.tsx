import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const riversideFiche: FicheData = {
  slug: "riverside",
  hero: {
    h1: "Riverside.fm : l'avis complet en 2026",
    tagline:
      "Référence de l'enregistrement podcast à distance. Qualité studio même sur connexion moyenne grâce à l'enregistrement local séparé de chaque participant. Jusqu'à 4K vidéo. Voici le verdict.",
    badges: [
      { label: "Enregistrement distant pro", tone: "primary" },
      { label: "Qualité studio", tone: "accent" },
      { label: "Jusqu'à 8 participants", tone: "neutral" },
    ],
    origine: "Israël",
    depuis: "2020",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme d'enregistrement audio-vidéo à distance lancée en 2020. Innovation clé : chaque participant est enregistré localement (sur sa machine) en qualité maximale, puis les tracks sont uploadés. Résultat : qualité studio même sur une connexion moyenne.",
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
          Créateurs solo qui enregistrent seuls (pas besoin d&apos;un studio
          distribué). Ceux qui éditent beaucoup en post-prod (→{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          plus adapté). Créateurs 100% shorts (pas du tout le bon outil).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan gratuit 2h d'enregistrement/mois. Standard à 15 $/mois (5h), Pro à 24 $/mois (15h + éditeur IA), Business à 49 $/mois (illimité + équipe). Tarification au temps d'enregistrement mensuel.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          qui intègre désormais l&apos;enregistrement à distance (via
          Squadcast). Zencastr pour un concurrent plus abordable.{" "}
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
    "Tu veux enregistrer vidéo 4K (plan Pro+)",
    "Tu as des invités 1-7 personnes à rassembler sur une session",
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
        "Interface partiellement traduite en FR. La feature d'enregistrement en elle-même est agnostique à la langue. La transcription et l'éditeur IA sont moins naturels en français qu'en anglais, comparable à Descript sur ce point.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.5,
      commentaire:
        "Plan gratuit correct (2h/mois pour tester). Plan Standard à 15 $/mois avec 5h d'enregistrement convient à un podcaster occasionnel. Plus cher que Zencastr sur l'entrée de gamme, plus mature fonctionnellement.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "Magic Editor depuis 2024 : découpe intelligente, suppression des silences, génération de clips courts, transcription auto. Moins poussé que Descript sur l'édition textuelle, mais comble vite l'écart. Suggestions de highlights réellement pertinentes.",
    },
    {
      label: "Qualité d'enregistrement à distance",
      poids: 15,
      score: 9.5,
      commentaire:
        "Le point fort absolu. Enregistrement local sur la machine de chaque participant, puis upload des tracks séparés. Aucune perte liée à la connexion. Qualité 48kHz audio, vidéo 4K disponible. Largement supérieur à Zoom ou Teams sur ce volet.",
    },
    {
      label: "Support et documentation FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support client en anglais principalement, chat live réactif. Documentation traduite automatiquement, qualité correcte. Plusieurs tutos YouTube FR de la communauté podcasting francophone.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "Export direct vers plateformes podcast (Spotify, Apple, Google), YouTube, réseaux sociaux. API disponible sur plans Business. Intégration Zapier et Make. Compatible avec la plupart des flux de production de podcast.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Enregistrement local séparé",
      description:
        "Le différenciateur principal. Chaque participant enregistre en local sur sa machine en qualité maximale. Les tracks audio et vidéo sont uploadés en arrière-plan, sans perte liée à la connexion.",
    },
    {
      titre: "Qualité 48kHz / 4K",
      description:
        "Audio 48kHz pour tous les plans, vidéo jusqu'à 4K sur les plans Pro+. Qualité comparable à un enregistrement studio, à condition que chaque participant ait un minimum de matériel côté micro.",
    },
    {
      titre: "Magic Editor (IA)",
      description:
        "Éditeur IA lancé en 2024 : transcription automatique, suppression des silences, génération de clips courts automatiques, suggestions de moments forts. Moins poussé que Descript sur l'édition textuelle mais couvre bien les cas courants.",
    },
    {
      titre: "Jusqu'à 8 participants",
      description:
        "Enregistrement simultané de 8 intervenants avec tracks séparés. Utile pour les tables rondes, émissions multi-invités. Au-delà, il faut basculer sur un plan entreprise.",
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
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      cible: "Pour tester",
      features: [
        "2h d'enregistrement/mois",
        "Qualité 720p",
        "Watermark sur export",
        "Pas de Magic Editor",
      ],
    },
    {
      nom: "Standard",
      prix: "15 $/mois",
      cible: "Podcasteurs réguliers",
      features: [
        "5h d'enregistrement/mois",
        "1080p vidéo",
        "Sans watermark",
        "Transcription auto",
      ],
    },
    {
      nom: "Pro",
      prix: "24 $/mois",
      cible: "Créateurs pros",
      features: [
        "15h d'enregistrement/mois",
        "4K vidéo",
        "Magic Editor complet",
        "Producer mode",
      ],
    },
    {
      nom: "Business",
      prix: "49 $/mois",
      cible: "Agences et médias",
      features: [
        "Enregistrement illimité",
        "API et intégrations",
        "Collaboration équipe",
        "Support prioritaire",
      ],
    },
  ],
  alternatives: [
    {
      slug: "descript",
      comment:
        "Intègre désormais l'enregistrement à distance via Squadcast. Plus fort sur la post-prod textuelle. Moins mature en enregistrement pur que Riverside.",
    },
    {
      slug: "zencastr",
      comment:
        "Alternative plus accessible dès 10 $/mois. Moins mature en vidéo mais très correct pour du podcast audio pur.",
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
        "Oui, nettement. Zoom compresse l'audio en temps réel et dégrade la vidéo selon la bande passante. Riverside enregistre en local, pas de compression temps-réel. L'écart est immédiatement audible sur un enregistrement conversationnel multi-intervenants.",
    },
    {
      question: "Combien d'invités peut-on avoir simultanément ?",
      answer:
        "Jusqu'à 8 participants sur tous les plans payants. Au-delà, il faut passer sur un plan entreprise. Pour une table ronde classique (2-4 personnes), le plan Standard à 15 $/mois suffit largement.",
    },
    {
      question: "L'invité doit-il installer quelque chose ?",
      answer:
        "Non, ça tourne dans le navigateur (Chrome/Edge de préférence). Il suffit de partager le lien de la session, l'invité autorise micro et caméra, et Riverside s'occupe de l'enregistrement local en arrière-plan. Friction minimale.",
    },
    {
      question: "Riverside vaut-il le prix pour un débutant podcaster ?",
      answer:
        "Pour un podcasteur qui prend son rendu au sérieux, oui. La différence de qualité par rapport à Zoom ou Teams est immédiatement audible. Pour un débutant qui n'est pas sûr de son engagement dans le podcasting, le plan gratuit (2h/mois) permet de tester avant de s'engager.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à enregistrer en qualité studio ?",
    sub: "Le plan gratuit (2h/mois) permet de faire 1-2 épisodes de test avec un invité pour juger du rendu. Zéro risque avant engagement.",
    buttonText: "Essayer Riverside",
  },
};

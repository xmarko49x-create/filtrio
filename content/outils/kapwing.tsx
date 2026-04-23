import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const kapwingFiche: FicheData = {
  slug: "kapwing",
  hero: {
    h1: "Kapwing : l'avis complet en 2026",
    tagline:
      "Éditeur vidéo web spécialisé collaboration équipe. Édition simultanée, commentaires temps réel, workflows d'approbation. Voici pour qui c'est le choix évident et pour qui non.",
    badges: [
      { label: "Collaboration temps réel", tone: "primary" },
      { label: "Éditeur web", tone: "accent" },
      { label: "Agences et équipes", tone: "neutral" },
    ],
    origine: "USA",
    tempsLecture: 7,
    lastCheck: "22/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Éditeur vidéo web collaboratif américain. Différenciateur principal : édition simultanée de plusieurs utilisateurs sur un même projet, à la manière de Google Docs. Commentaires précis ancrés à des timestamps, workflows d'approbation, brand kits partagés.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Équipes qui travaillent à plusieurs sur des vidéos : agences sociales, équipes marketing, médias, scale-ups. Tous ceux qui en ont marre d'envoyer des exports par email et de commenter par Slack.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs solo (
          <Link href="/outils/veed" className="text-yellow-400 hover:underline">
            Veed
          </Link>{" "}
          ou{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          sont meilleurs). Shorts viraux (
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          ). Montage pro (DaVinci ou Premiere).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Free (0 $) limité. Pro à 16 $/mois par user en annuel (192 $/an) ou 24 $/mois en mensuel : projets et édition illimités, exports jusqu'à 2h. Business à 50 $/mois par user en annuel (600 $/an) ou 64 $/mois en mensuel pour booster la création en équipe. Enterprise sur devis. Facturation USD.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/veed" className="text-yellow-400 hover:underline">
            Veed
          </Link>{" "}
          pour solo ou petite équipe.{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          pour usage solo gratuit.{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          pour équipes podcast/long format.
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-green-400">
            Oui, mais uniquement pour travail d&apos;équipe
          </strong>
          . En solo, d&apos;autres outils font mieux moins cher. La
          collaboration temps réel est le vrai différenciateur.
        </>
      ),
    },
  ],
  porQui: [
    "Tu travailles en équipe sur les mêmes projets vidéo",
    "Tu fais du contenu B2B, marketing, formation interne",
    "Tu veux un commentaire et approbation en temps réel",
    "Tu gères plusieurs clients (agence) avec séparation des espaces",
    "Tu veux un éditeur web sans installation",
    "Brand kit d'équipe important pour toi",
  ],
  pasPourQui: [
    "Tu es créateur solo (Veed ou CapCut font mieux moins cher)",
    <>
      Tu fais surtout des shorts viraux (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    "Ton budget est serré",
    "Tu veux du montage pro (→ DaVinci ou Premiere)",
    "Tu veux travailler offline",
    "Tu veux des features IA de pointe (Kapwing est en retrait)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface en anglais principalement, traduction partielle. Sous-titres auto FR fonctionnels mais moins précis qu'un outil spécialisé. Support exclusivement anglais.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 6.8,
      commentaire:
        "Pro à 16 $/mois en solo est cher vs Veed ou CapCut. Business à 50 $/mois par user devient intéressant si la collaboration temps réel est vraiment exploitée. Le rapport qualité/prix n'a de sens qu'en équipe.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 7.0,
      commentaire:
        "Sous-titres auto, transcription, suppression silence, smart cut. Moins IA-first qu'un Submagic ou Descript, mais suffisant pour les usages d'équipe courants.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 7.5,
      commentaire:
        "Interface claire mais moins fluide que Veed ou Canva. Courbe d'apprentissage moyenne (1-2h pour être opérationnel). La valeur ajoutée se révèle en équipe.",
    },
    {
      label: "Collaboration équipe",
      poids: 15,
      score: 9.2,
      commentaire:
        "Point fort absolu. Édition simultanée, commentaires précis, approbation, gestion des rôles, brand kits partagés. L'un des meilleurs outils d'édition vidéo collaborative du marché.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "API sur plan Business, intégrations Slack, Notion, Asana, Google Drive, Dropbox. Pensé pour s'intégrer aux workflows d'équipe modernes.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Édition collaborative temps réel",
      description:
        "Plusieurs éditeurs sur le même projet en même temps, à la manière de Google Docs. Commentaires précis ancrés à des timestamps. Feature signature.",
    },
    {
      titre: "Smart Cut (silences)",
      description:
        "Détection et suppression automatique des silences en vidéo. Gain de temps sur les tutos, démos, interviews.",
    },
    {
      titre: "Brand kits partagés",
      description:
        "Couleurs, fonts, logos accessibles à toute l'équipe. Garantit la cohérence visuelle sur plusieurs projets et plusieurs monteurs.",
    },
    {
      titre: "Templates et Scènes IA",
      description:
        "Bibliothèque de templates adaptés par plateforme (YouTube, LinkedIn, TikTok). Génération IA de scènes à partir d'un script.",
    },
    {
      titre: "Redimensionnement multi-plateforme",
      description:
        "Un projet, plusieurs formats (16:9, 9:16, 1:1). Recadrage intelligent pour adapter à chaque plateforme sans repartir de zéro.",
    },
    {
      titre: "Workflows d'approbation",
      description:
        "Étapes de validation par rôle (monteur → chef de projet → client). Traçabilité des modifications. Plus structurant que les allers-retours par email ou Slack.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      prixSub: "Pour tester",
      cible: "Découverte de l'outil",
      features: [
        "Plan gratuit avec limites",
        "Watermark et quotas d'export limités",
        "Accès à l'interface collaborative basique",
      ],
    },
    {
      nom: "Pro",
      prix: "16 $/mois",
      prixSub: "Par user · facturation annuelle (192 $/an) · ou 24 $/mois en mensuel",
      cible: "Créateurs et solo pros",
      features: [
        "Projets et édition illimités",
        "Exports jusqu'à 2 heures",
        "Sans watermark",
        "Brand kit personnel",
        "Features IA complètes",
      ],
    },
    {
      nom: "Business",
      prix: "50 $/mois",
      prixSub: "Par user · facturation annuelle (600 $/an) · ou 64 $/mois en mensuel",
      cible: "Agences et équipes",
      features: [
        "Tout Pro inclus",
        "Collaboration temps réel avancée",
        "Workflows d'approbation",
        "Brand kits d'équipe",
        "API et SSO",
      ],
    },
    {
      nom: "Enterprise",
      prix: "Sur devis",
      prixSub: "Organisations centralisées",
      cible: "Grandes équipes et groupes",
      features: [
        "Gestion centralisée des équipes",
        "Fonctionnalités sur mesure",
        "Support dédié",
      ],
    },
  ],
  alternatives: [
    {
      slug: "veed",
      comment:
        "Alternative éditeur web polyvalent, moins orienté collaboration temps réel mais plus accessible en solo.",
    },
    {
      slug: "descript",
      comment:
        "Si ton besoin équipe est surtout du long format (podcasts, interviews), Descript Business est plus adapté que Kapwing.",
    },
    {
      slug: "capcut",
      comment:
        "Si tu ne travailles pas vraiment en équipe, CapCut gratuit fait largement l'affaire avec plus de features éditeur.",
    },
  ],
  faq: [
    {
      question: "La collaboration temps réel fonctionne-t-elle vraiment bien ?",
      answer:
        "Oui, c'est le point fort de Kapwing. Plusieurs monteurs sur un même projet sans conflit, commentaires ancrés à des timestamps précis, suivi des modifications. Utilisé par de nombreuses agences et équipes marketing.",
    },
    {
      question: "Kapwing vaut-il le coup en solo ?",
      answer: (
        <>
          Pas vraiment. Pour 16 $/mois en Pro solo, tu as mieux ailleurs :{" "}
          <Link href="/outils/veed" className="text-yellow-400 hover:underline">
            Veed
          </Link>{" "}
          Creator à 10,75 €/mois plus polyvalent, ou{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          gratuit. Kapwing se rentabilise en équipe sur le Business.
        </>
      ),
    },
    {
      question: "Comment se compare-t-il à Veed pour une agence ?",
      answer: (
        <>
          Kapwing pour la collaboration temps réel pure (édition simultanée,
          approbation structurée). Veed pour un éditeur web polyvalent avec
          plus de features individuelles. Voir le{" "}
          <Link
            href="/comparatifs/veed-vs-kapwing"
            className="text-green-400 hover:underline"
          >
            comparatif direct
          </Link>
          .
        </>
      ),
    },
    {
      question: "Le plan gratuit est-il utilisable pour une démo ?",
      answer:
        "Oui pour tester l'interface, la collaboration (avec un collègue sur le même lien), les features IA. Les limites (4 min max, watermark, 7 min export/jour) te pousseront vite vers le Pro mais c'est suffisant pour se faire une idée.",
    },
    {
      question: "Compatible avec les workflows Slack/Notion ?",
      answer:
        "Oui, intégrations natives Slack, Notion, Asana. Tu peux partager des liens de prévisu directement dans tes canaux d'équipe, recevoir les commentaires là où tu travailles. Workflow agence moderne bien pensé.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Kapwing ?",
    sub: "Le plan gratuit (4 min max) permet de faire une démo avec ton équipe. Suffisant pour juger si la collaboration temps réel apporte vraiment un gain chez toi.",
    buttonText: "Essayer Kapwing",
  },
};

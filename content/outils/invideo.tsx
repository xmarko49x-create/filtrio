import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { SCORING_BY_SLUG } from "@/lib/scoring";

export const invideoFiche: FicheData = {
  slug: "invideo",
  hero: {
    h1: "InVideo : l'avis complet en 2026",
    tagline:
      "Plateforme vidéo IA qui se présente désormais comme un « éditeur vidéo agentique » : des agents IA génèrent et montent la vidéo à partir de ton script ou de ton prompt. Modèle à crédits par siège, voix off multilingue, stock, API. Voici pour qui il a du sens en 2026.",
    badges: [
      { label: "Script-to-video IA", tone: "primary" },
      { label: "API disponible", tone: "accent" },
      { label: "Marketing & faceless", tone: "neutral" },
    ],
    origine: "Inde",
    tempsLecture: 8,
    lastCheck: "06/11/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme IA de création vidéo d'origine indienne. Tu écris un script ou un prompt, les agents IA d'invideo produisent une vidéo complète (voix off, images, sous-titres, transitions) que tu peux ensuite retoucher dans l'éditeur. La plateforme donne accès à plusieurs modèles IA tiers (la liste évolue, voir invideo.io) dans un modèle à crédits. Positionnée marketing et créateurs faceless en volume.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Marketeurs qui produisent des pubs vidéo en série, créateurs faceless, YouTubeurs qui diffusent du contenu éducatif automatisé, agences qui industrialisent la production. Pour qui a besoin de volume et de scripts texte comme point de départ.",
    },
    {
      question: "À éviter si ?",
      answer: (
        <>
          Créateurs qui veulent du contenu authentique face cam. Shorts viraux
          (→{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          ). Montage fin (→ DaVinci). Ceux qui préfèrent garder 100% du contrôle
          créatif.
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Pas de plan gratuit affiché sur la page tarifs officielle (vérifié le 06/11/2026). Modèle à crédits en USD, prix par siège : Starter à 10 $/mois en annuel (20 $ en mensuel, 400 crédits/mois), Plus à 30 $/mois en annuel (60 $ en mensuel, 2 000 crédits/mois), Max à 250 $/mois (même prix en annuel et en mensuel, 8 000 crédits/mois). Les crédits inutilisés ne sont pas reportés au mois suivant. Chaque génération consomme des crédits selon le modèle IA utilisé.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          pour avatars IA complets. Pictory pour text-to-video similaire.{" "}
          <Link href="/outils/veed" className="text-yellow-400 hover:underline">
            Veed
          </Link>{" "}
          pour un éditeur polyvalent moins IA-first.
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-fuchsia-400">
            Oui, pour le script-to-video marketing
          </strong>
          . Si tu fais du contenu B2B ou faceless en volume, c&apos;est un
          gain de temps énorme. Pour le reste, des spécialistes font mieux.
        </>
      ),
    },
  ],
  porQui: [
    "Tu veux générer des vidéos à partir d'un script texte",
    "Tu produis du contenu marketing en volume",
    "Tu fais du contenu faceless (pas de caméra)",
    "Tu as besoin de templates marketing prêts",
    "Tu veux automatiser la production vidéo de série",
    "Accès API pour intégrer à ton workflow",
  ],
  pasPourQui: [
    "Tu veux du contenu authentique face cam",
    <>
      Tu fais des shorts viraux (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    "Tu veux contrôler chaque détail créatif manuellement",
    "Tu as un budget serré (modèle à crédits peut vite grimper selon les modèles utilisés)",
    "Tu veux du rendu cinéma avec color grading",
    "Tu vises une audience qui rejette le contenu IA visible",
  ],
  scoring: SCORING_BY_SLUG.invideo,
  fonctionnalites: [
    {
      titre: "Script-to-video IA",
      description:
        "Tu colles un script ou un prompt texte, InVideo génère une vidéo complète avec voix off, images stock pertinentes, transitions. Feature signature de l'outil.",
    },
    {
      titre: "Templates marketing",
      description:
        "Bibliothèque de templates adaptés à des cas d'usage précis : pub Facebook, vidéo YouTube, explicatif produit, témoignage client. Gain de temps pour les marketeurs.",
    },
    {
      titre: "Voix off IA multilingue",
      description:
        "Génération de voix off multilingues (intégration ElevenLabs parmi les modèles disponibles). Intégrée au workflow de génération vidéo, donc pratique sans avoir à jongler entre outils.",
    },
    {
      titre: "Stock médias et iStock",
      description:
        "Accès aux top stock providers (iStock, Storyblocks). L'IA sélectionne automatiquement les médias pertinents selon ton script. Quota d'iStock par plan (100 à 5 000 images/mois selon le tier).",
    },
    {
      titre: "AI Magic Box",
      description:
        "Édition assistée par IA : ajouter/supprimer/remplacer des éléments par commande texte plutôt que par manipulation manuelle de la timeline.",
    },
    {
      titre: "API et automatisation",
      description:
        "API REST pour générer des vidéos programmatiquement. Intégrations Zapier, Make. Permet d'industrialiser la production de vidéos (ex : une vidéo par article de blog automatiquement).",
    },
  ],
  plans: [
    {
      nom: "Starter",
      prix: "10 $/mois",
      prixSub: "Par siège, en annuel · 20 $ en mensuel",
      cible: "Pour explorer",
      features: [
        "400 crédits/mois par siège",
        "Crédits inutilisés non reportés",
      ],
    },
    {
      nom: "Plus",
      prix: "30 $/mois",
      prixSub: "Par siège, en annuel · 60 $ en mensuel",
      cible: "Pour un usage régulier",
      features: [
        "2 000 crédits/mois par siège",
        "10 sièges invités gratuits (190 crédits chacun)",
        "Crédits inutilisés non reportés",
      ],
    },
    {
      nom: "Max",
      prix: "250 $/mois",
      prixSub: "Par siège · même prix en annuel et en mensuel",
      cible: "Pour la production en gros volume",
      features: [
        "8 000 crédits/mois par siège",
        "20 sièges invités gratuits",
        "Crédits inutilisés non reportés",
      ],
    },
  ],
  alternatives: [
    {
      slug: "heygen",
      comment:
        "Si tu veux des avatars vidéo complets avec visage et sync labiale. Plus spécialisé qu'InVideo sur cet angle.",
    },
    {
      slug: "pictory",
      comment:
        "Concurrent direct sur le script-to-video. Interface plus simple, focus créateurs individuels. Moins d'IA, plus de templates prêts.",
    },
    {
      slug: "veed",
      comment:
        "Alternative web polyvalente moins IA-first. Plus adaptée si tu veux garder le contrôle créatif plutôt que générer depuis script.",
    },
  ],
  faq: [
    {
      question: "invideo AI et invideo Studio, quelle différence ?",
      answer:
        "La marque a longtemps séparé invideo AI (génération vidéo par IA) et invideo Studio (éditeur à modèles). En 2026, l'offre mise en avant sur invideo.io est un éditeur unique avec agents IA, facturé par siège (Starter, Plus, Max). Cette fiche couvre cette offre principale.",
    },
    {
      question: "InVideo ou HeyGen pour du contenu IA ?",
      answer: (
        <>
          InVideo pour du script-to-video avec images stock, musique, voix off.{" "}
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          pour du script-to-video avec un avatar humain qui parle à
          l&apos;écran. Produits complémentaires plutôt que concurrents
          directs. Certaines équipes utilisent les deux selon le format final
          souhaité.
        </>
      ),
    },
    {
      question: "La qualité de la voix off FR est-elle suffisante ?",
      answer:
        "Correcte pour des contenus marketing standards. Moins naturelle qu'ElevenLabs. Pour du contenu premium ou où la voix porte l'émotion, envisager d'importer une piste audio ElevenLabs plutôt que d'utiliser la voix native InVideo.",
    },
    {
      question: "Le plan Starter à 10 $/mois suffit-il pour démarrer ?",
      answer:
        "Oui pour explorer le workflow script-to-video et évaluer la qualité sur ton cas d'usage réel (400 crédits/mois, non reportés ; le nombre de vidéos dépend des modèles choisis). Pour un usage récurrent en volume, il faut passer au Plus ou au Max.",
    },
    {
      question: "L'API vaut-elle le coût d'un plan payant ?",
      answer:
        "Si tu automatises vraiment (Make, Zapier, scripts custom), oui. Permet de générer une vidéo par article de blog, par fiche produit, par événement CRM. ROI clair pour les agences et équipes marketing pros. Pour un créateur solo qui fait 2-3 vidéos par semaine manuellement, pas nécessaire.",
    },
    {
      question: "Le rendu IA est-il reconnaissable à l'écran ?",
      answer:
        "Oui, souvent. Le choix automatique d'images stock, les transitions par défaut, la voix off IA donnent un style 'InVideo' reconnaissable si tu regardes plusieurs vidéos. Pour masquer ce style, il faut personnaliser manuellement chaque vidéo (ce qui réduit le gain de temps). À accepter comme trade-off inhérent au script-to-video.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à automatiser ta prod vidéo ?",
    sub: "Le plan Starter à 10 $/mois par siège (annuel, 400 crédits/mois) est le point d'entrée. Pour un usage régulier, le plan Plus à 30 $/mois ; pour la production en volume, le Max.",
    buttonText: "Essayer InVideo",
  },
};

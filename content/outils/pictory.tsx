import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const pictoryFiche: FicheData = {
  slug: "pictory",
  hero: {
    h1: "Pictory : l'avis complet en 2026",
    tagline:
      "Outil de script-to-video orienté marketing et formation. Transforme un texte, un article de blog ou un script en vidéo automatiquement, avec stock vidéo et voix IA intégrées.",
    badges: [
      { label: "Script-to-video", tone: "primary" },
      { label: "Stock vidéo Getty inclus", tone: "accent" },
      { label: "Voix IA ElevenLabs", tone: "neutral" },
    ],
    origine: "USA",
    tempsLecture: 6,
    lastCheck: "10/07/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme SaaS de génération vidéo automatique à partir d'un texte. Tu colles un article de blog, un script ou une URL, Pictory découpe en segments, choisit des stock vidéos pertinents (Getty Images, Storyblocks), ajoute une voix IA (ElevenLabs intégré) et te livre une vidéo prête à publier. Plans à partir de 25 $/mois en annuel.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Marketers de contenu, créateurs de vidéos éducatives, agences qui industrialisent du contenu vidéo à partir de blog posts existants. Pour un usage où le rendu propre suffit, sans recherche d'effet créatif premium.",
    },
    {
      question: "À éviter si ?",
      answer: (
        <>
          Tu fais des shorts viraux personnels (→{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          ou{" "}
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>
          ). Tu cherches une qualité visuelle premium ou créative (→{" "}
          <Link href="/outils/runway" className="text-purple-400 hover:underline">
            Runway
          </Link>
          ). Tu veux contrôler manuellement chaque plan (préfère un éditeur
          timeline classique).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Starter à 25 $/mois en annuel (29 $/mois mensuel) avec 200 minutes de vidéo. Plan Professional à 35 $/mois en annuel (59 $/mois mensuel) avec 600 minutes. Plan Team à 119 $/mois en annuel pour 3+ utilisateurs avec 1 800 minutes. Enterprise sur devis. Essai gratuit disponible. Facturation USD.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/invideo" className="text-fuchsia-400 hover:underline">
            InVideo
          </Link>{" "}
          pour un script-to-video plus polyvalent et moins cher.{" "}
          <Link href="/outils/synthesia" className="text-blue-400 hover:underline">
            Synthesia
          </Link>{" "}
          si tu veux un avatar humain à la place du stock. Voir le{" "}
          <Link
            href="/comparatifs/invideo-vs-pictory"
            className="text-rose-400 hover:underline"
          >
            comparatif InVideo vs Pictory
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-rose-400">Oui pour le script-to-video</strong>{" "}
          si ton workflow part de textes longs (blog, scripts) à transformer en
          vidéos pédagogiques ou marketing. À éviter pour les shorts viraux ou
          la création visuelle expressive.
        </>
      ),
    },
  ],
  porQui: [
    "Tu transformes des articles de blog en vidéos automatiquement",
    "Tu fais du contenu marketing/éducation en volume",
    "Tu veux une voix IA intégrée (ElevenLabs) sans abonnement séparé",
    "Tu as besoin de stock vidéo (Getty, Storyblocks) inclus dans le prix",
    "Tu produis des vidéos courtes à moyennes (1-10 min) régulièrement",
    "Tu veux un workflow simple sans timeline complexe",
  ],
  pasPourQui: [
    "Tu fais des shorts viraux personnels (Submagic ou OpusClip)",
    <>
      Tu veux du visuel créatif ou expressif (→{" "}
      <Link href="/outils/runway" className="text-purple-400 hover:underline">
        Runway
      </Link>
      )
    </>,
    "Tu cherches un avatar humain parlant (Synthesia ou HeyGen)",
    "Tu veux un contrôle fin des plans, transitions et effets",
    "Budget serré (à partir de 25 $/mois en annuel)",
    "Tu produis très peu de vidéos (le forfait n'est pas amorti)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface principalement en anglais. Les voix IA ElevenLabs intégrées supportent 29 langues dont le français, donc le rendu vidéo final peut être en FR. Mais l'expérience d'édition reste anglophone.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.0,
      commentaire:
        "25 $/mois en annuel pour 200 minutes de vidéo, c'est correct mais pas donné. Le stock Getty/Storyblocks et 60 minutes de voix IA ElevenLabs inclus améliorent la valeur. Plus cher qu'InVideo qui propose un Free Forever.",
    },
    {
      label: "Profondeur IA",
      poids: 20,
      score: 7.5,
      commentaire:
        "Bonne automatisation script-to-video. Découpe le texte en segments, propose des stock vidéos pertinents, génère la voix off, ajoute sous-titres et musique. Limites : la créativité reste \"générique\" (vidéos qui se ressemblent entre utilisateurs).",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Workflow simple : tu colles un texte ou une URL, Pictory propose une première version en quelques minutes, tu retouches via une interface visuelle. Beaucoup plus accessible qu'un éditeur timeline classique.",
    },
    {
      label: "Stock vidéo et voix IA",
      poids: 15,
      score: 9.0,
      commentaire:
        "Point fort. Accès à 5 millions+ de vidéos Getty Images/Storyblocks dès le plan Starter (jusqu'à 18 millions sur Professional). Voix ElevenLabs intégrée (60 min sur Starter, 120 min sur Professional). Pas besoin de payer ces ressources séparément.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 7.0,
      commentaire:
        "Connexions natives à YouTube, dépôts cloud, et import depuis URL d'article. API disponible sur les plans supérieurs pour automatiser. Moins riche que les solutions développeurs pures.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Script-to-video automatique",
      description:
        "Colle un texte ou une URL d'article : Pictory découpe en segments, choisit des plans stock vidéo pertinents et génère une vidéo en quelques minutes. Workflow le plus simple du marché pour ce cas d'usage.",
    },
    {
      titre: "Voix IA ElevenLabs intégrée",
      description:
        "60 minutes de voix ElevenLabs incluses sur Starter (120 sur Pro), 29 langues dont français. Pas besoin de payer un abonnement ElevenLabs séparé pour des projets de volume modéré.",
    },
    {
      titre: "Stock vidéo Getty + Storyblocks",
      description:
        "5 millions de vidéos sur Starter, 18 millions sur Professional. Bibliothèque de qualité pro intégrée, sans surcoût ni licence à gérer.",
    },
    {
      titre: "Brand Kit",
      description:
        "Logo, couleurs, polices stockés et appliqués automatiquement à toutes tes vidéos. 1 Brand Kit sur Starter, 5 sur Professional, 10 sur Team. Utile pour agences ou équipes marketing.",
    },
    {
      titre: "AI Credits pour images, vidéos, avatars",
      description:
        "100 AI Credits sur Starter pour générer des images, vidéos ou avatars personnalisés via les modèles intégrés (au-delà du stock). Permet d'éviter une scène générique quand l'angle voulu n'existe pas en stock.",
    },
    {
      titre: "Édition textuelle",
      description:
        "Tu modifies le script, la vidéo se met à jour automatiquement. Approche similaire à Descript pour le long format mais ciblée script-to-video plutôt qu'enregistrement existant.",
    },
  ],
  plans: [
    {
      nom: "Starter",
      prix: "25 $/mois",
      prixSub: "Annuel (300 $/an) · 1 utilisateur",
      cible: "Créateurs qui démarrent en script-to-video",
      features: [
        "200 minutes de vidéo",
        "5 Go de stockage",
        "1 Brand Kit",
        "60 minutes de voix ElevenLabs (29 langues)",
        "5 millions de vidéos Getty + Storyblocks",
        "100 AI Credits (images, vidéos, avatars)",
        "Pas de watermark",
        "Outils IA basiques",
      ],
    },
    {
      nom: "Professional",
      prix: "35 $/mois",
      prixSub: "Annuel (420 $/an) · 1 utilisateur",
      cible: "Créateurs qui produisent en volume",
      features: [
        "600 minutes de vidéo",
        "20 Go de stockage",
        "5 Brand Kits",
        "Voix standard illimitées (7 langues)",
        "120 minutes de voix ElevenLabs (29 langues)",
        "18 millions de vidéos Getty + Storyblocks",
        "Plus d'AI Credits que Starter",
        "Fonctionnalités IA avancées",
      ],
    },
    {
      nom: "Team",
      prix: "119 $/mois",
      prixSub: "Annuel (1 428 $/an) · 3+ utilisateurs",
      cible: "Équipes marketing et agences",
      features: [
        "1 800 minutes de vidéo",
        "100 Go de stockage",
        "10 Brand Kits",
        "Voix standard illimitées (7 langues)",
        "240 minutes de voix ElevenLabs (29 langues)",
        "18 millions de vidéos Getty + Storyblocks",
        "Collaboration en équipe",
        "Workflow d'approbation",
      ],
    },
    {
      nom: "Enterprise",
      prix: "Custom",
      prixSub: "10+ utilisateurs",
      cible: "Grandes équipes et entreprises",
      features: [
        "Minutes vidéo personnalisées",
        "Stockage personnalisé",
        "Brand Kits illimités",
        "Voix ElevenLabs personnalisées",
        "API dédiée",
        "SSO et conformité avancée",
        "Support dédié",
      ],
    },
  ],
  alternatives: [
    {
      slug: "invideo",
      comment:
        "Concurrent direct sur le script-to-video, plus polyvalent et moins cher en entrée. Voir le comparatif détaillé.",
    },
    {
      slug: "synthesia",
      comment:
        "Pour un avatar humain parlant à la place du stock vidéo. Plus B2B/formation, moins centré sur l'auto-génération de scènes.",
    },
    {
      slug: "runway",
      comment:
        "Pour la génération vidéo créative à partir de prompts. Pas le même usage : Runway crée du visuel original, Pictory illustre un texte avec du stock.",
    },
  ],
  faq: [
    {
      question: "Pictory ou InVideo ?",
      answer: (
        <>
          Les deux font du script-to-video. InVideo est plus polyvalent
          (avec une formule gratuite et plus de modèles) mais Pictory est plus
          orienté formation et marketing avec un workflow plus simple. Voir le{" "}
          <Link
            href="/comparatifs/invideo-vs-pictory"
            className="text-rose-400 hover:underline"
          >
            comparatif détaillé
          </Link>
          .
        </>
      ),
    },
    {
      question: "Pictory parle-t-il français ?",
      answer:
        "L'interface est en anglais. Mais les voix IA ElevenLabs intégrées supportent le français (60 min sur Starter, 120 sur Professional, 240 sur Team), donc le rendu vidéo final peut être 100% en français.",
    },
    {
      question: "Est-ce qu'il y a un plan gratuit ?",
      answer:
        "Pas de plan gratuit récurrent, mais un essai gratuit (Free Trial) est disponible sur les plans payants. Pour tester l'outil avant de s'engager.",
    },
    {
      question: "Le stock Getty est-il vraiment inclus ?",
      answer:
        "Oui, 5 millions de vidéos sur Starter, jusqu'à 18 millions sur Professional. Pas de surcoût par téléchargement, pas de licence à gérer. Les vidéos sont libres d'usage commercial dans le cadre de ton abonnement.",
    },
    {
      question: "Pictory utilise vraiment les voix ElevenLabs ?",
      answer:
        "Oui, intégration officielle. Tu accèdes aux voix ElevenLabs depuis l'interface Pictory, avec un quota inclus dans ton plan (60/120/240 min selon plan). Pas besoin d'un abonnement ElevenLabs séparé pour ces minutes.",
    },
    {
      question: "Mes vidéos générées sont-elles utilisables commercialement ?",
      answer:
        "Oui, dès le plan Starter. Toutes les vidéos générées (incluant le stock Getty et la voix IA) sont licenciées pour un usage commercial dans le cadre de ton abonnement. Vérifier les CGU pour des cas spécifiques (publicité large).",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Pictory ?",
    sub: "Essai gratuit disponible sur les plans payants. Plan Starter à 25 $/mois en annuel pour 200 minutes de vidéo, voix ElevenLabs et stock Getty inclus.",
    buttonText: "Essayer Pictory",
  },
};

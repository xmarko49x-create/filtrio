import Link from "next/link";
import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";

export const sousTitrerTiktok: CasUsageData = {
  slug: "sous-titrer-tiktok",
  gagnantSlug: "submagic",
  hero: {
    h1: "Sous-titrer une vidéo TikTok : 5 outils IA comparés en 2026",
    tagline:
      "Tu veux des sous-titres stylés en français sur tes TikTok, sans passer 30 minutes par vidéo à les ajuster. Voici notre classement des outils qui livrent le meilleur rendu FR, le gagnant, et les pièges à éviter.",
    tempsLecture: 5,
    outilsAnalyses: 5,
    lastCheck: "28/05/2026",
  },
  verdict: {
    tag: "Le verdict en 30 secondes",
    headline: (
      <>
        Pour TikTok en français, <span className="text-amber-400">Submagic</span>{" "}
        reste largement devant.
      </>
    ),
    paragraphs: [
      <>
        Précision FR supérieure aux concurrents, templates viraux prêts à
        l&apos;emploi, recadrage 9:16 automatique, export direct TikTok. Un
        des workflows les plus rapides pour obtenir un rendu pro.
      </>,
      <>
        <strong className="text-slate-200">Alternative sérieuse :</strong>{" "}
        <Link href="/outils/capcut" className="text-sky-400 hover:underline">
          CapCut
        </Link>{" "}
        si tu veux du gratuit. Acceptable mais demande plus de travail manuel
        pour approcher le rendu Submagic.
      </>,
    ],
  },
  criteres: [
    {
      label: "Précision FR (moins de corrections)",
      poids: 30,
      description:
        "Le critère n°1. Un outil qui transcrit mal le français te fait perdre 5-10 minutes de correction par vidéo.",
    },
    {
      label: "Style viral prêt à l'emploi",
      poids: 25,
      description:
        "Templates inspirés des formats qui marchent sur TikTok. Animations mot par mot, emojis contextuels, mots-clés surlignés.",
    },
    {
      label: "Rapidité de rendu",
      poids: 20,
      description:
        "Du upload au fichier exportable : idéal en moins de 2 minutes pour une vidéo d'1 minute.",
    },
    {
      label: "Recadrage 9:16 automatique",
      poids: 15,
      description:
        "Format vertical imposé par TikTok. Le recadrage auto évite un aller-retour manuel vers un éditeur classique.",
    },
    {
      label: "Accessibilité (plan gratuit)",
      poids: 10,
      description:
        "Un tier gratuit durable permet de tester sérieusement avant de s'engager.",
    },
  ],
  classement: [
    {
      slug: "submagic",
      scoreCas: 9.5,
      badge: "Outil français",
      pourquoiGagne: [
        "Très bonne précision FR selon les retours publics",
        "Templates viraux FR prêts, zéro ajustement nécessaire",
        "Recadrage 9:16 automatique, pas besoin d'autre outil",
        "Export direct TikTok et autres plateformes shorts",
        "Workflow 3 clics : upload → template → export",
      ],
      limites: [
        "Pas de vraie gratuité récurrente, seulement un essai limité",
        "Tarifs à vérifier selon la devise affichée",
        "Pas d'API publique pour automatiser",
      ],
      verdict:
        "Si tu publies régulièrement sur TikTok en français, Submagic peut être rentabilisé rapidement et le gain de temps reste tangible dès les premières vidéos.",
      priceDisplay: { label: "À partir de", value: "12 €/mois" },
    },
    {
      slug: "capcut",
      scoreCas: 8.0,
      badge: "Gratuit",
      pourquoiGagne: [
        "Gratuit avec sous-titres FR automatiques de qualité correcte",
        "Templates de sous-titres animés disponibles dans la bibliothèque intégrée",
        "Recadrage 9:16 et autres formats verticaux natifs",
        "Édition complète : tu peux finaliser ton TikTok dans la même app",
        "Disponible sur mobile (iOS/Android) pour éditer en déplacement",
      ],
      limites: [
        "Style viral TikTok moins prêt à l'emploi que Submagic, nécessite ajustement manuel",
        "Précision FR correcte mais légèrement en retrait sur les accents et le vocabulaire courant",
        "Templates de sous-titres animés moins variés que Submagic pour le format short",
      ],
      verdict:
        "L'alternative gratuite la plus sérieuse. Sous-titres FR corrects, mais style viral à personnaliser manuellement. Compte 3-5 minutes de retouches par vidéo pour approcher le rendu Submagic.",
      priceDisplay: { label: "Prix", value: "Gratuit" },
    },
    {
      slug: "opusclip",
      scoreCas: 7.8,
      pourquoiGagne: [
        "AI Caption avec animation mot par mot et highlights émotionnels",
        "Recadrage 9:16 automatique et virality score intégré",
        "Workflow taillé pour transformer une vidéo longue en plusieurs TikTok d'un coup",
        "Plan gratuit récurrent pour tester sérieusement",
        "Export direct multi-plateformes shorts (TikTok, Reels, Shorts)",
      ],
      limites: [
        "Surdimensionné si tu sous-titres juste une vidéo TikTok déjà tournée verticale",
        "Précision FR pure légèrement en retrait de Submagic sur les transcriptions courtes",
        "Mieux exploité quand tu pars d'une vidéo longue à découper en plusieurs shorts",
      ],
      verdict:
        "Très bien si tu pars d'une vidéo longue à découper. Moins optimal pour un simple sous-titrage de TikTok déjà prêt. Combo OpusClip + Submagic reste la combinaison pro pour le volume.",
      priceDisplay: {
        label: "À partir de",
        value: "15 $/mois",
        note: "Plan gratuit disponible",
      },
    },
    {
      slug: "veed",
      scoreCas: 7.2,
      pourquoiGagne: [
        "Éditeur web complet accessible depuis n'importe quel navigateur",
        "Sous-titres FR automatiques avec édition manuelle simple",
        "Multi-outils dans la même plateforme (sous-titres, édition, voix off)",
        "Bonne option si tu utilises déjà Veed pour d'autres besoins vidéo",
      ],
      limites: [
        "Styles de sous-titres moins viraux que Submagic, plus orientés pro et corporate",
        "Précision FR moins poussée que les outils spécialisés shorts",
        "Workflow plus long, plus pensé pour le montage classique que pour les shorts rapides",
      ],
      verdict:
        "Éditeur web polyvalent, sous-titres FR fonctionnels. Pas le plus stylé pour TikTok mais pratique si tu utilises déjà Veed pour d'autres besoins vidéo.",
      priceDisplay: { label: "À partir de", value: "12 $/mois" },
    },
    {
      slug: "kapwing",
      scoreCas: 6.8,
      pourquoiGagne: [
        "Collaboration en équipe intégrée, utile si plusieurs personnes éditent les TikTok",
        "Bibliothèque de templates et d'éléments visuels riche",
        "Édition web sans installation, accessible depuis n'importe où",
        "Gestion de versioning des projets",
      ],
      limites: [
        "Pensé pour des équipes plus que pour un créateur solo qui publie vite",
        "Styles de sous-titres moins optimisés pour le format short viral",
        "Workflow plus lent que les outils dédiés shorts (Submagic, OpusClip)",
      ],
      verdict:
        "Davantage pensé pour le travail en équipe que pour le créateur solo qui publie sur TikTok. Sous-titres FR corrects mais workflow moins adapté au short viral.",
      priceDisplay: { label: "À partir de", value: "16 $/mois" },
    },
  ],
  pourquoiGagne: [
    {
      titre: "Précision FR supérieure",
      description:
        "Submagic met clairement l'accent sur le contenu court et les sous-titres en français. L'outil semble mieux gérer le français que beaucoup d'alternatives généralistes, notamment sur la segmentation, les accents et la ponctuation.",
    },
    {
      titre: "Templates viraux prêts à l'emploi",
      description:
        "Pas besoin de configurer manuellement la typo, les couleurs, les animations. Tu choisis parmi les templates inspirés des formats qui marchent, tout est appliqué automatiquement.",
    },
    {
      titre: "Recadrage 9:16 natif",
      description:
        "Le format TikTok impose du vertical. Submagic recadre automatiquement en suivant le visage ou le sujet principal. Pas d'aller-retour avec un éditeur classique pour adapter la vidéo au format.",
    },
    {
      titre: "Export direct optimisé",
      description:
        "Export en un clic avec le format exact demandé par TikTok. Pas de re-encodage inutile, pas de perte de qualité. Le fichier est prêt à uploader directement.",
    },
  ],
  piegesAEviter: [
    {
      titre: "Les sous-titres natifs de TikTok",
      description:
        "Gratuits et rapides à activer, mais qualité FR basique et zéro style viral. Tu économises 30 sec à la génération, tu perds à la publication (vidéos moins performantes).",
    },
    {
      titre: "Écrire les sous-titres à la main",
      description:
        "15-20 minutes par vidéo pour taper, synchroniser, styliser. Peu rentable quand un outil spécialisé peut faire une grosse partie du travail beaucoup plus vite, avec un rendu souvent plus propre.",
    },
    {
      titre: "Utiliser un outil EN sur du contenu FR",
      description:
        "Tu peux utiliser Pictory, Synthesia ou un autre outil anglophone pour générer des sous-titres FR, mais tu vas devoir corriger beaucoup plus qu'avec un outil pensé FR. Faux gain de temps.",
    },
    {
      titre: "Ignorer le template de la niche",
      description:
        "Le style des sous-titres doit matcher ton audience. Les templates sérieux pour les contenus éducatifs, les templates flashy pour les divertissants. Submagic propose plusieurs styles, prends le temps de choisir.",
    },
  ],
  commentChoisir: [
    {
      question: "Tu publies régulièrement sur TikTok FR ?",
      reponse: (
        <>
          Si oui → <strong className="text-amber-400">Submagic</strong>.
          Intéressant si tu publies plusieurs shorts par mois.
        </>
      ),
    },
    {
      question: "Budget zéro ?",
      reponse: (
        <>
          Si oui → <strong className="text-sky-400">CapCut</strong>{" "}gratuit.
          Personnalisation manuelle requise pour le rendu stylé.
        </>
      ),
    },
    {
      question: "Tu pars d'une vidéo longue à découper ?",
      reponse: (
        <>
          Si oui → Combo{" "}
          <strong className="text-emerald-400">OpusClip</strong>{" "}(pour découper)
          +{" "}
          <strong className="text-amber-400">Submagic</strong>{" "}(pour le rendu
          final).
        </>
      ),
    },
  ],
  faq: [
    {
      question: "Submagic fonctionne-t-il mieux que les sous-titres natifs TikTok ?",
      answer:
        "Oui, largement. Précision FR supérieure, styles viraux prêts à l'emploi, animations mot par mot. Les sous-titres natifs TikTok sont basiques et sans style. La différence de performance des vidéos se voit.",
    },
    {
      question: "CapCut gratuit suffit-il pour TikTok FR ?",
      answer:
        "Pour 1-2 shorts par mois occasionnels, oui. Pour une publication régulière avec un rendu pro cohérent, Submagic fait gagner du temps et améliore le rendu. Calcul ROI : si tu postes 4+ shorts/mois, Submagic se rentabilise.",
    },
    {
      question: "Puis-je cumuler Submagic et OpusClip ?",
      answer: (
        <>
          Oui, combo fréquent chez les créateurs pros.{" "}
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>{" "}
          pour découper une vidéo longue en shorts,{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          pour finaliser les sous-titres stylés. un combo économique pour un workflow
          complet.
        </>
      ),
    },
    {
      question: "Qu'en est-il de la précision sur jargon technique FR ?",
      answer:
        "Submagic gère bien le français courant. Sur vocabulaire très technique (crypto, médical, juridique), quelques corrections manuelles restent nécessaires. Pas de magie totale, mais l'écart sur le vocabulaire standard est net.",
    },
    {
      question: "Les templates Submagic fonctionnent-ils sur des TikTok anglophones ?",
      answer:
        "Oui, Submagic supporte plusieurs langues. Le produit est fort en FR mais fonctionne aussi en EN, ES, DE, etc. Si tu fais du multilingue, Submagic reste compétitif.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à accélérer tes sous-titres TikTok ?",
    paragraph:
      "Le workflow le plus simple : un compte Submagic, l'upload de ta vidéo TikTok, le choix du template, puis l'export. Résultat prêt à publier sans passer par un montage manuel complet.",
    buttonText: "Essayer Submagic",
  },
  autresCasUsage: [
    {
      slug: "sous-titres-rapides",
      titre: "Outil le plus rapide pour sous-titres automatiques",
      description: "La vitesse pure, quel que soit le rendu final.",
      color: "amber",
    },
    {
      slug: "submagic-ou-opusclip-shorts-fr",
      titre: "Submagic ou OpusClip pour shorts en français",
      description: "Le choix guidé entre les 2 leaders FR.",
      color: "amber",
    },
    {
      slug: "video-longue-en-shorts",
      titre: "Transformer une vidéo longue en shorts",
      description: "Automatiser l'extraction des shorts.",
      color: "emerald",
    },
  ],
};

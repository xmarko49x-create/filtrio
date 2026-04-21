import Link from "next/link";
import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";

export const sousTitrerTiktok: CasUsageData = {
  slug: "sous-titrer-tiktok",
  gagnantSlug: "submagic",
  hero: {
    h1: "Meilleur outil IA pour sous-titrer une vidéo TikTok",
    tagline:
      "Tu veux des sous-titres stylés en français sur tes TikTok, sans passer 30 minutes par vidéo à les ajuster. Voici notre classement des outils qui livrent le meilleur rendu FR, le gagnant, et les pièges à éviter.",
    tempsLecture: 5,
    outilsAnalyses: 5,
    lastCheck: "20/04/2026",
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
        l&apos;emploi, recadrage 9:16 automatique, export direct TikTok. Le
        workflow le plus rapide du marché pour un rendu pro.
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
        "Précision FR la plus élevée du marché selon les retours publics",
        "Templates viraux FR prêts, zéro ajustement nécessaire",
        "Recadrage 9:16 automatique, pas besoin d'autre outil",
        "Export direct TikTok et autres plateformes shorts",
        "Workflow 3 clics : upload → template → export",
      ],
      limites: [
        "Pas de vraie gratuité récurrente (3 vidéos essai à vie)",
        "Paiement USD uniquement",
        "Pas d'API publique pour automatiser",
      ],
      verdict:
        "Si tu publies régulièrement sur TikTok en français, Submagic paie son abonnement dès le 3e short. Le gain de temps est immédiatement tangible.",
      priceDisplay: { label: "À partir de", value: "14 $/mois" },
    },
    {
      slug: "capcut",
      scoreCas: 8.0,
      badge: "Gratuit",
      verdict:
        "L'alternative gratuite la plus sérieuse. Sous-titres FR corrects, mais style viral à personnaliser manuellement. Comptez 3-5 minutes de retouches par vidéo pour approcher le rendu Submagic.",
      priceDisplay: { label: "Prix", value: "Gratuit" },
    },
    {
      slug: "opusclip",
      scoreCas: 7.8,
      verdict:
        "Excellent si tu pars d'une vidéo longue à découper. Moins optimal pour un simple sous-titrage de TikTok déjà prêt. Combo OpusClip + Submagic reste le setup pro pour volume.",
      priceDisplay: {
        label: "À partir de",
        value: "9 $/mois",
        note: "Plan gratuit 60 min",
      },
    },
    {
      slug: "veed",
      scoreCas: 7.2,
      verdict:
        "Éditeur web polyvalent, sous-titres FR fonctionnels. Pas le plus stylé pour TikTok mais pratique si tu utilises déjà Veed pour d'autres besoins vidéo.",
      priceDisplay: { label: "À partir de", value: "12 $/mois" },
    },
    {
      slug: "kapwing",
      scoreCas: 6.8,
      verdict:
        "Davantage pensé pour le travail en équipe que pour le créateur solo qui publie sur TikTok. Sous-titres FR corrects mais workflow moins adapté au short viral.",
      priceDisplay: { label: "À partir de", value: "16 $/mois" },
    },
  ],
  pourquoiGagne: [
    {
      titre: "Précision FR supérieure",
      description:
        "Submagic a été développé par une équipe française (David Zitoun), entraîné massivement sur du contenu FR. La différence se voit dès la première vidéo : segmentation propre, accents gérés, ponctuation cohérente.",
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
        "15-20 minutes par vidéo pour taper, synchroniser, styliser. Absurde quand un outil à 14 $/mois fait le même job en 60 secondes avec un meilleur rendu.",
    },
    {
      titre: "Utiliser un outil EN sur du contenu FR",
      description:
        "Tu peux utiliser Pictory, Synthesia ou un autre outil anglophone pour générer des sous-titres FR, mais tu vas devoir corriger beaucoup plus qu'avec un outil pensé FR. Faux gain de temps.",
    },
    {
      titre: "Ignorer le template de la niche",
      description:
        "Le style des sous-titres doit matcher ton audience. Les templates sérieux pour les contenus éducatifs, les templates flashy pour les divertissants. Submagic propose plusieurs styles — prends le temps de choisir.",
    },
  ],
  commentChoisir: [
    {
      question: "Tu publies régulièrement sur TikTok FR ?",
      reponse: (
        <>
          Si oui → <strong className="text-amber-400">Submagic</strong>.
          Rentabilisé dès 3-4 shorts par mois.
        </>
      ),
    },
    {
      question: "Budget zéro ?",
      reponse: (
        <>
          Si oui → <strong className="text-sky-400">CapCut</strong> gratuit.
          Personnalisation manuelle requise pour le rendu stylé.
        </>
      ),
    },
    {
      question: "Tu pars d'une vidéo longue à découper ?",
      reponse: (
        <>
          Si oui → Combo{" "}
          <strong className="text-emerald-400">OpusClip</strong> (pour découper)
          +{" "}
          <strong className="text-amber-400">Submagic</strong> (pour le rendu
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
          pour finaliser les sous-titres stylés. ~23 $/mois pour un workflow
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
    headline: "Prêt à sous-titrer en 90 secondes ?",
    paragraph:
      "Le workflow le plus rapide : un compte Submagic, upload de ta vidéo TikTok, choix du template, export. Résultat prêt à publier avant la fin de ton café.",
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

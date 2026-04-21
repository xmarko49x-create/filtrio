import Link from "next/link";
import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";

export const sousTitresRapides: CasUsageData = {
  slug: "sous-titres-rapides",
  gagnantSlug: "submagic",
  hero: {
    h1: "Outil le plus rapide pour sous-titres automatiques",
    tagline:
      "Tu veux des sous-titres automatiques en français en moins de 2 minutes par vidéo, sans sacrifier la qualité. Voici notre classement des outils qui livrent le rendu le plus rapide, le gagnant, et les pièges à éviter.",
    tempsLecture: 5,
    outilsAnalyses: 5,
    lastCheck: "20/04/2026",
  },
  verdict: {
    tag: "Le verdict en 30 secondes",
    headline: (
      <>
        Pour la vitesse,{" "}
        <span className="text-amber-400">Submagic</span> reste imbattable.
      </>
    ),
    paragraphs: [
      <>
        3 clics de l&apos;upload au rendu final : choix du template, génération
        automatique, export. La qualité FR et les templates prêts à
        l&apos;emploi évitent toute retouche manuelle sur la grande majorité
        des vidéos. Sur une vidéo de 60 secondes, compte environ 60 à 90
        secondes pour avoir ton short prêt à publier.
      </>,
      <>
        <strong className="text-slate-200">Exception :</strong> si tu veux
        tester en gratuit avant de payer,{" "}
        <Link href="/outils/capcut" className="text-sky-400 hover:underline">
          CapCut
        </Link>{" "}
        ou{" "}
        <Link
          href="/outils/opusclip"
          className="text-emerald-400 hover:underline"
        >
          OpusClip
        </Link>{" "}
        sont tes alternatives. La vitesse sera comparable, la qualité visuelle
        légèrement en retrait.
      </>,
    ],
  },
  criteres: [
    {
      label: "Temps de traitement brut",
      poids: 30,
      description:
        "Combien de secondes entre l'upload et le fichier exporté prêt.",
    },
    {
      label: "Qualité FR sans retouche",
      poids: 25,
      description:
        "Si tu dois corriger 10 mots à la main, ce n'est plus rapide.",
    },
    {
      label: "Simplicité d'interface",
      poids: 20,
      description:
        "Upload, template, export en 3 clics max ou tu perds du temps.",
    },
    {
      label: "Export direct multi-plateformes",
      poids: 15,
      description:
        "Recadrage 9:16 et publication directe évitent des allers-retours.",
    },
    {
      label: "Accessibilité (plan gratuit)",
      poids: 10,
      description:
        "Un outil rapide que tu ne peux pas tester n'est pas utilisable.",
    },
  ],
  classement: [
    {
      slug: "submagic",
      scoreCas: 9.3,
      badge: "Outil français",
      pourquoiGagne: [
        "Rendu prêt en 60-90 sec pour une vidéo d'1 min",
        "Templates viraux prêts à l'emploi, zéro personnalisation",
        "Précision FR qui évite les corrections",
        "Export direct au format TikTok/Reels/Shorts",
      ],
      limites: [
        "Pas de vraie gratuité récurrente, seulement un essai limité",
        "Plafond de durée vidéo selon le plan choisi",
        "Tarifs à vérifier selon la devise affichée",
      ],
      verdict:
        "Si tu produis régulièrement des shorts, Submagic te fait gagner 10-15 minutes par vidéo comparé à un outil plus lent. Rentabilisé dès le 3e short.",
      priceDisplay: { label: "À partir de", value: "14 $/mois" },
    },
    {
      slug: "capcut",
      scoreCas: 8.5,
      badge: "Gratuit",
      verdict:
        "Tu passeras 2-3 minutes de plus par vidéo qu'avec Submagic pour personnaliser le style manuellement. Acceptable si le budget est la priorité.",
      priceDisplay: { label: "Prix", value: "Gratuit" },
    },
    {
      slug: "opusclip",
      scoreCas: 8.0,
      verdict:
        "À prendre si ton cas principal est la découpe automatique de longues vidéos. Sur une vidéo courte isolée, Submagic ou CapCut iront plus vite.",
      priceDisplay: {
        label: "À partir de",
        value: "9 $/mois",
        note: "Plan gratuit 60 min",
      },
    },
    {
      slug: "veed",
      scoreCas: 7.5,
      verdict:
        "Correct si tu utilises déjà Veed pour d'autres besoins. Pas le plus rapide sur ce cas précis.",
      priceDisplay: { label: "À partir de", value: "12 $/mois" },
    },
    {
      slug: "kapwing",
      scoreCas: 7.0,
      verdict:
        "Intéressant en équipe. Pour un créateur solo qui veut aller vite, Submagic ou CapCut sont plus adaptés.",
      priceDisplay: { label: "À partir de", value: "16 $/mois" },
    },
  ],
  pourquoiGagne: [
    {
      titre: "Workflow 3 clics",
      description:
        "Upload → choix du template → export. Trois actions, zéro friction. La plupart des concurrents ajoutent des étapes de personnalisation manuelle qui allongent le processus.",
    },
    {
      titre: "Templates viraux prêts",
      description:
        "Pas besoin de configurer la typo, les couleurs, les animations. Tu choisis parmi les templates inspirés des formats qui marchent, tout est appliqué automatiquement.",
    },
    {
      titre: "Précision FR qui évite les retouches",
      description:
        "Avec un outil moins précis en français, tu gagnes 30 sec sur la génération mais tu en perds 5 min à corriger. Submagic évite cette perte sèche.",
    },
    {
      titre: "Export direct multi-formats",
      description:
        "Recadrage 9:16 automatique pour TikTok/Reels/Shorts. Pas d'allers-retours avec un autre éditeur pour adapter le format final à la plateforme de publication.",
    },
  ],
  piegesAEviter: [
    {
      titre: "Les sous-titres natifs de TikTok / Shorts",
      description:
        "Gratuits et rapides à activer, mais qualité FR basique et zéro style viral. Tu économises 30 sec à la génération, tu perds à la publication. Pas une vraie option rapide si tu vises le résultat.",
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
      titre: "Tenter l'essai gratuit Submagic pour un usage régulier",
      description: (
        <>
          L&apos;essai gratuit est limité et se consomme rapidement. Si tu
          veux utiliser Submagic sur la durée, il faut passer sur un plan
          payant. Pour un vrai test gratuit récurrent, commence plutôt par{" "}
          <Link
            href="/outils/opusclip"
            className="text-emerald-400 hover:underline"
          >
            OpusClip
          </Link>{" "}
          (60 min/mois récurrent) ou CapCut.
        </>
      ),
    },
  ],
  commentChoisir: [
    {
      question: "Tu as un budget mensuel à allouer ?",
      reponse: (
        <>
          Si oui → <strong className="text-amber-400">Submagic</strong>.
          C&apos;est le plus rapide du marché, 14 $/mois.
        </>
      ),
    },
    {
      question: "Ton budget est zéro ?",
      reponse: (
        <>
          Si oui → <strong className="text-sky-400">CapCut</strong>. Rapide,
          gratuit, qualité FR correcte. Tu personnaliseras manuellement pour le
          style.
        </>
      ),
    },
    {
      question: "Tu pars d'une vidéo longue à découper d'abord ?",
      reponse: (
        <>
          Si oui → <strong className="text-emerald-400">OpusClip</strong> pour
          la découpe, puis{" "}
          <strong className="text-amber-400">Submagic</strong> pour finaliser
          les sous-titres. Combo rapide pour long format.
        </>
      ),
    },
  ],
  faq: [
    {
      question: "Combien de temps pour une vidéo de 60 secondes ?",
      answer:
        "Avec Submagic : environ 60-90 secondes total (upload + génération + export). Avec CapCut : 3-5 minutes si tu personnalises le style. Avec un outil non spécialisé : 10-15 minutes. L'écart se creuse dès que tu produis plusieurs vidéos par semaine.",
    },
    {
      question: "Les sous-titres IA en français sont-ils fiables ?",
      answer:
        "Sur un audio propre, oui — les outils spécialisés FR comme Submagic produisent des sous-titres corrects avec peu de retouches nécessaires selon les retours utilisateurs publics. Les difficultés restent : vocabulaire technique pointu, noms propres rares, accents régionaux forts. Dans ces cas, prévois une relecture rapide.",
    },
    {
      question: "Submagic mérite-t-il les 14 $/mois juste pour la vitesse ?",
      answer:
        "Dépend de ton volume. Si tu fais 1 short par mois, clairement non, CapCut suffit. Si tu fais 1 short par semaine, le calcul devient intéressant : 4 shorts × 10 min gagnées = 40 min/mois. Si tu fais 3+ shorts par semaine, Submagic se paie tout seul en temps gagné.",
    },
    {
      question: "Peut-on accélérer encore plus avec l'API Submagic ?",
      answer: (
        <>
          Submagic ne propose pas d&apos;API publique pour l&apos;instant. Pour
          un workflow automatisé plus avancé (Make, Zapier),{" "}
          <Link
            href="/outils/opusclip"
            className="text-emerald-400 hover:underline"
          >
            OpusClip
          </Link>{" "}
          (API sur plan Pro) ou{" "}
          <Link
            href="/outils/elevenlabs"
            className="text-teal-400 hover:underline"
          >
            ElevenLabs
          </Link>{" "}
          (pour la voix) sont plus adaptés. Le gain de vitesse chez Submagic
          reste côté interface.
        </>
      ),
    },
    {
      question: "Y a-t-il un outil vraiment 100% gratuit sans limite ?",
      answer:
        "CapCut est le plus proche de ça : version gratuite avec sous-titres auto sans limite de vidéos. Contrainte : il faut personnaliser manuellement le style pour approcher le rendu Submagic, ce qui ralentit. Pour de la vitesse pure en gratuit, CapCut est l'option la plus réaliste.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à sous-titrer en 90 secondes ?",
    paragraph:
      "Le workflow le plus rapide : un compte Submagic, upload d'une vidéo courte, template, export. Résultat prêt à publier avant la fin de ton café.",
    buttonText: "Essayer Submagic",
  },
  autresCasUsage: [
    {
      slug: "sous-titrer-tiktok",
      titre: "Meilleur outil IA pour sous-titrer TikTok",
      description: "Spécifique à TikTok, avec accent sur le rendu viral FR.",
      color: "amber",
    },
    {
      slug: "submagic-ou-opusclip-shorts-fr",
      titre: "Submagic ou OpusClip pour shorts FR",
      description: "Le choix guidé en 4 questions.",
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

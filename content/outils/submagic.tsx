import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const submagicFiche: FicheData = {
  slug: "submagic",
  hero: {
    h1: "Submagic : l'avis complet en 2026",
    tagline:
      "L'outil français qui s'est imposé comme référence des sous-titres viraux. Voici pour qui il vaut son prix, pour qui il ne vaut pas, et ce qu'il sait faire mieux que ses concurrents.",
    badges: [
      { label: "Outil français", tone: "primary" },
      { label: "Coup de cœur Filtrio", tone: "accent" },
      { label: "Sous-titres & shorts", tone: "neutral" },
    ],
    origine: "France 🇫🇷",
    depuis: "2022",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Outil français (fondé par David Zitoun) qui génère des sous-titres stylés et des shorts viraux à partir de n'importe quelle vidéo. Détection auto des moments forts, templates animés, recadrage 9:16 inclus.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs FR qui postent sur TikTok, Reels, Shorts. Solopreneurs personal branding. Agences social media. Tous ceux qui veulent des sous-titres propres en français sans y passer des heures.",
    },
    {
      question: "Pas pour qui ?",
      answer:
        "Créateurs long-format pur (podcasters sans volonté de clipper). Monteurs pro qui veulent une timeline éditable. Budgets serrés (pas de vrai tier gratuit récurrent).",
    },
    {
      question: "Combien ?",
      answer:
        "14 $/mois (Starter, 20 vidéos/mois) à 29 $/mois (Pro, quasi illimité). Paiement USD uniquement. Essai gratuit limité à 3 vidéos au total, pas renouvelable.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          OpusClip si tu veux recycler du contenu long (podcasts, lives) en
          masse. CapCut si ton budget est zéro.{" "}
          <Link
            href="/comparatifs/opusclip-vs-submagic"
            className="text-emerald-400 hover:underline"
          >
            Comparatif complet ici
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-amber-400">Oui, sans hésiter</strong>, pour la
          majorité des créateurs vidéo francophones. C&apos;est le #1 de notre
          classement 2026 et la fiche la plus simple à justifier.
        </>
      ),
    },
  ],
  porQui: [
    "Tu postes principalement sur TikTok, Reels, YouTube Shorts",
    "Tu vises un public francophone (la qualité FR est son point fort)",
    "Tu veux des sous-titres stylés sans passer 30 min par vidéo",
    "Tes sources sont déjà courtes (2 à 15 min)",
    "Tu veux un outil simple, prise en main en moins d'une heure",
    "Tu fais du personal branding (LinkedIn vidéo, Shorts face cam)",
  ],
  pasPourQui: [
    <>
      Tu veux découper automatiquement un podcast d&apos;1h en 10 clips (→{" "}
      <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
        OpusClip
      </Link>
      )
    </>,
    <>
      Tu as besoin d&apos;un éditeur vidéo complet avec timeline (→{" "}
      <Link href="/outils/descript" className="text-violet-400 hover:underline">
        Descript
      </Link>{" "}
      ou{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut Pro
      </Link>
      )
    </>,
    <>
      Tu ne veux pas payer (→{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut
      </Link>{" "}
      reste très correct en gratuit)
    </>,
    "Tu veux une API publique pour automatiser via Make/Zapier",
    "Tu as besoin d'une facturation en euros avec TVA FR",
    "Tu crées exclusivement en anglais (les concurrents US sont aussi bons)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 9.2,
      commentaire:
        "Précision FR parmi les meilleures du marché selon les retours utilisateurs publics. Segmentation propre, ponctuation cohérente, gestion des accents correcte. Interface en français natif.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.8,
      commentaire:
        "14 $/mois pour 20 vidéos c'est correct mais pas le moins cher. L'absence de vrai tier gratuit récurrent pénalise. Le plan Pro à 29 $/mois reste compétitif vs la concurrence.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.2,
      commentaire:
        "Sous-titres stylés, détection moments forts, recadrage 9:16, ajout B-roll auto, effets sonores. La découpe sur vidéos très longues est moins poussée que chez OpusClip.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 9.3,
      commentaire:
        "L'un des parcours utilisateurs les plus courts de sa catégorie. Upload, choix du template, export : trois clics. Peu de courbe d'apprentissage pour un non-technicien.",
    },
    {
      label: "Support et documentation FR",
      poids: 15,
      score: 9.3,
      commentaire:
        "Support en français natif. Documentation bilingue complète. Communauté Discord FR active. Équipe basée en France, réactive sur les tickets.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 6.5,
      commentaire:
        "Le maillon faible. Upload manuel uniquement, pas d'API publique, pas d'intégration native YouTube/Twitch/Zoom. L'export vers réseaux sociaux demande un passage par ton PC.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Sous-titres stylés et animés",
      description:
        "Bibliothèque de templates avec animations mot par mot, mots-clés surlignés, couleurs vives, emojis contextuels. C'est le cœur de l'outil et ce qui fait sa réputation.",
    },
    {
      titre: "Détection auto des moments forts",
      description:
        "L'IA analyse le contenu et propose les passages les plus accrocheurs d'une vidéo pour en faire des shorts. Efficace sur les sources courtes à moyennes.",
    },
    {
      titre: "Recadrage 9:16 automatique",
      description:
        "Passe de paysage à vertical sans couper les têtes. Suit le visage du locuteur via IA. Gain de temps réel vs recadrage manuel dans un éditeur classique.",
    },
    {
      titre: "B-roll et effets sonores IA",
      description:
        "Ajoute automatiquement des images d'illustration et des effets audio selon le contexte. À utiliser avec parcimonie — peut vite faire 'IA générique' si abusé.",
    },
  ],
  plans: [
    {
      nom: "Starter",
      prix: "14 $/mois",
      cible: "Créateurs occasionnels",
      features: ["20 vidéos/mois", "Templates complets", "Export 1080p", "Support FR"],
    },
    {
      nom: "Pro",
      prix: "29 $/mois",
      cible: "Créateurs réguliers",
      features: ["100 vidéos/mois", "Templates premium", "Export 4K", "Équipe jusqu'à 3"],
    },
    {
      nom: "Business",
      prix: "Sur devis",
      cible: "Agences",
      features: ["Volume illimité", "API early access", "Gestion multi-comptes", "SLA"],
    },
  ],
  alternatives: [
    {
      slug: "opusclip",
      comment:
        "Si ton besoin est la découpe automatique de longues vidéos en shorts. Plus fort sur le long format, moins fort sur les templates viraux FR.",
    },
    {
      slug: "capcut",
      comment:
        "Alternative gratuite la plus sérieuse. Moins spécialisé que Submagic mais couvre un éditeur complet en plus.",
    },
    {
      slug: "descript",
      comment:
        "Si tu veux un outil d'édition complet (podcast, long format) avec transcription et édition textuelle.",
    },
  ],
  faq: [
    {
      question: "Submagic vaut-il les 14 $/mois pour un créateur qui débute ?",
      answer:
        "Oui si tu publies au moins 4-5 shorts par mois. Le temps gagné sur les sous-titres stylés paie l'abonnement dès le 3e short. Non si tu publies moins souvent — CapCut gratuit fera l'affaire.",
    },
    {
      question: "La précision FR est-elle vraiment meilleure que les alternatives ?",
      answer:
        "Selon les retours publics G2 / Reddit et notre prise en main, oui sur audio propre. Les difficultés restent sur vocabulaire technique pointu, noms propres rares, accents régionaux forts.",
    },
    {
      question: "Y a-t-il une vraie offre gratuite ?",
      answer:
        "Non. L'essai gratuit est limité à 3 vidéos à vie, pas renouvelable. Pour un usage gratuit durable, OpusClip (60 min/mois récurrent) ou CapCut sont plus adaptés.",
    },
    {
      question: "Peut-on l'utiliser dans un workflow automatisé (Make, Zapier) ?",
      answer:
        "Non, pas d'API publique à date. L'API est en early access pour certains partenaires Business. Si l'automatisation est critique, regarder OpusClip qui propose une API sur plan Pro.",
    },
    {
      question: "Combien de temps pour sous-titrer une vidéo de 1 minute ?",
      answer:
        "Environ 60-90 secondes total (upload + génération + export) selon la complexité du template choisi. C'est l'un des workflows les plus rapides du marché.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à essayer Submagic ?",
    sub: "Le workflow le plus rapide pour des sous-titres stylés en français. Essai gratuit 3 vidéos, pas de carte requise.",
    buttonText: "Essayer Submagic",
  },
};

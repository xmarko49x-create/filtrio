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
      answer: (
        <>
          Abonnement mensuel à partir de 19 €/mois en facturation mensuelle.
          Une option annuelle moins chère est également proposée. Essai
          gratuit limité disponible. Les plans et tarifs exacts sont à jour
          sur la{" "}
          <a
            href="https://submagic.co/?via=marc38"
            target="_blank"
            rel="sponsored nofollow noopener"
            className="text-amber-400 hover:underline"
          >
            page Tarifs de Submagic
          </a>
          .
        </>
      ),
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
        "Positionnement dans la fourchette haute de sa catégorie. L'absence de vrai tier gratuit récurrent peut pénaliser les usages très occasionnels. Le tarif devient rentable dès qu'on publie plusieurs shorts par mois, grâce au temps gagné sur les sous-titres.",
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
      nom: "Plans Submagic",
      prix: "À partir de 19 €/mois",
      cible: "Créateurs, indépendants, équipes",
      features: [
        "Facturation mensuelle ou annuelle (annuelle moins chère)",
        "Essai gratuit limité disponible",
        "Détail complet des quotas et fonctionnalités sur la page Tarifs",
        "Tarifs susceptibles d'évoluer — vérifier sur submagic.co",
      ],
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
      question: "Submagic vaut-il son abonnement pour un créateur qui débute ?",
      answer:
        "Oui si tu publies au moins 4-5 shorts par mois. Le temps gagné sur les sous-titres stylés compense rapidement le coût. Non si tu publies très occasionnellement — CapCut gratuit fera l'affaire.",
    },
    {
      question: "La précision FR est-elle vraiment meilleure que les alternatives ?",
      answer:
        "Selon les retours publics G2 / Reddit et notre prise en main, oui sur audio propre. Les difficultés restent sur vocabulaire technique pointu, noms propres rares, accents régionaux forts.",
    },
    {
      question: "Y a-t-il une vraie offre gratuite ?",
      answer:
        "Submagic propose un essai gratuit limité mais pas de plan gratuit récurrent. Pour un usage gratuit durable, OpusClip ou CapCut sont des alternatives plus adaptées. Les conditions exactes de l'essai sont à vérifier sur submagic.co.",
    },
    {
      question: "Peut-on l'utiliser dans un workflow automatisé (Make, Zapier) ?",
      answer:
        "Non, pas d'API publique à date. L'API est en early access pour certains partenaires Business. Si l'automatisation est critique, regarder OpusClip qui propose une API sur plan Pro.",
    },
    {
      question: "Combien de temps pour sous-titrer une vidéo courte ?",
      answer:
        "Le workflow est l'un des plus rapides du marché : upload, choix du template, export en quelques clics. La durée exacte dépend de la longueur de la vidéo et du template choisi.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à essayer Submagic ?",
    sub: "Le workflow le plus rapide pour des sous-titres stylés en français. Essai gratuit disponible sur le site.",
    buttonText: "Essayer Submagic",
  },
};

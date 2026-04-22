import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const submagicFiche: FicheData = {
  slug: "submagic",
  hero: {
    h1: "Submagic : l'avis complet en 2026",
    tagline:
      "Un outil rapide pour produire des shorts visuellement propres, avec une interface simple et une prise en main en quelques clics.",
    badges: [
      { label: "Outil français", tone: "primary" },
      { label: "Coup de cœur Filtrio", tone: "accent" },
      { label: "Sous-titres & shorts", tone: "neutral" },
    ],
    langue: "Interface disponible en français",
    tempsLecture: 8,
    lastCheck: "22/04/2026",
  },
  verdict30s: [
    {
      question: "Pour qui ?",
      answer:
        "Créateurs de contenu, freelances, agences et petites équipes qui veulent produire des shorts propres rapidement, avec un rendu visuel fort et une interface simple.",
    },
    {
      question: "Pas pour qui ?",
      answer:
        "Équipes qui ont besoin d'automatisations avancées, de gros volumes API dès le départ, ou d'un workflow orienté clipping massif de longues vidéos.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          OpusClip si ton besoin principal est de découper automatiquement de
          longues vidéos en extraits courts à grande échelle.{" "}
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
      answer:
        "Oui, pour beaucoup de créateurs francophones qui veulent un outil rapide, simple et efficace pour produire des shorts plus propres visuellement.",
    },
    {
      question: "Combien ?",
      answer: (
        <>
          À partir de 12 €/mois en annuel. Essai gratuit de 3 vidéos. Plans
          supérieurs disponibles selon les volumes et les besoins. Détail sur
          la{" "}
          <a
            href="https://submagic.co/?via=marc38"
            target="_blank"
            rel="sponsored nofollow noopener"
            className="text-amber-400 hover:underline"
          >
            page Tarifs
          </a>
          .
        </>
      ),
    },
    {
      question: "Verdict rapide",
      answer:
        "Submagic est un très bon choix si tu veux aller vite, obtenir un rendu moderne et produire des vidéos courtes plus propres sans complexité inutile.",
    },
  ],
  porQui: [
    "Tu veux produire des shorts rapides, propres, avec un rendu visuel fort",
    "Tu fais du personal branding ou du contenu court régulier (TikTok, Reels, Shorts)",
    "Tu veux une interface simple, sans courbe d'apprentissage",
    "Tes sources sont déjà courtes à moyennes",
    "Tu travailles en français ou ciblent une audience francophone",
    "Tu veux un outil qui te fait gagner du temps sur le sous-titrage",
  ],
  pasPourQui: [
    "Tu as besoin d'automatisations avancées et de gros volumes API dès le départ",
    <>
      Tu veux un workflow orienté clipping massif de longues vidéos (→{" "}
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
    "Tu crées exclusivement en anglais sans contrainte de rendu visuel FR",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 9.2,
      commentaire:
        "Précision FR parmi les plus convaincantes de sa catégorie selon les retours utilisateurs publics. Segmentation propre, ponctuation cohérente, gestion correcte des accents. Interface en français.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.8,
      commentaire:
        "Positionnement dans la fourchette haute de sa catégorie. L'absence de plan gratuit récurrent peut pénaliser les usages très occasionnels. Le tarif devient rentable dès qu'on publie plusieurs shorts par mois, grâce au temps gagné sur les sous-titres.",
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
        "L'un des parcours utilisateurs les plus courts de sa catégorie. Upload, choix du template, export : peu de clics. Peu de courbe d'apprentissage pour un non-technicien.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 8.5,
      commentaire:
        "Documentation accessible et claire, support disponible. Le français est bien pris en compte côté interface et contenu généré.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 7.0,
      commentaire:
        "Des options d'API et d'intégrations existent (disponibles dès le Starter avec un petit quota, étendues sur Business + API). L'outil reste avant tout pensé pour une utilisation simple et rapide, pas comme une plateforme d'automatisation avancée à grande échelle.",
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
      nom: "Essai gratuit",
      prix: "0 €",
      prixSub: "Essai de 3 vidéos",
      cible: "Pour tester sans engagement",
      features: ["3 vidéos gratuites", "Sans carte bancaire"],
    },
    {
      nom: "Starter",
      prix: "12 €/mois",
      prixSub: "Facturation annuelle · mensuel plus cher",
      cible: "Individus qui démarrent la création vidéo",
      features: [
        "15 vidéos/mois, max. 2 min chacune",
        "3 AI Credits/mois",
        "Sans watermark · Auto captions IA",
        "B-rolls et audio gratuits · Édition text-based",
        "Export 1080p à 30 FPS",
        "API & Integrations (10 min/mois)",
      ],
    },
    {
      nom: "Pro",
      prix: "23 €/mois",
      prixSub: "Facturation annuelle · mensuel plus cher",
      cible: "Créateurs qui veulent des shorts percutants",
      features: [
        "40 vidéos/mois, max. 5 min chacune",
        "6 AI Credits/mois",
        "Storyblocks B-Rolls & Audio",
        "AI hook titles, AI clean audio, AI remove silences",
        "AI Translate captions · Brand Kit",
        "Publish to TikTok, YouTube, Instagram",
      ],
    },
    {
      nom: "Business + API",
      prix: "41 €/mois",
      prixSub: "Facturation annuelle · mensuel plus cher",
      cible: "Équipes et agences qui scalent la production",
      features: [
        "100 vidéos/mois, max. 30 min chacune",
        "15 AI Credits/mois",
        "Export 4K à 60 FPS",
        "10 custom templates · Logos & brand assets",
        "Dictionnaire de mots custom · Support prioritaire",
        "API & Integrations (100 min/mois)",
      ],
    },
    {
      nom: "Custom Plan",
      prix: "Sur devis",
      prixSub: "Usages sur mesure",
      cible: "Organisations aux besoins spécifiques",
      features: [
        "Nombre de vidéos, membres et templates personnalisés",
        "Quotas API et Magic Clips sur mesure",
        "Sécurité avancée et SSO",
        "Customer success dédié",
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
        "Alternative gratuite la plus sérieuse. Moins spécialisée que Submagic mais couvre un éditeur complet en plus.",
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
        "Submagic propose un essai gratuit de 3 vidéos, sans carte bancaire. Mais pas de plan gratuit récurrent. Pour un usage gratuit durable, OpusClip ou CapCut sont des alternatives plus adaptées.",
    },
    {
      question: "Peut-on intégrer Submagic à un workflow automatisé (Make, Zapier) ?",
      answer:
        "Oui, Submagic affiche des options d'API et d'intégrations sur ses offres (disponibles dès le Starter avec un petit quota, étendues sur Business + API). En revanche, l'outil reste surtout positionné comme une solution simple et rapide pour produire des shorts, pas comme une brique d'automatisation lourde.",
    },
    {
      question: "Combien de temps pour sous-titrer une vidéo courte ?",
      answer:
        "Le workflow est l'un des plus rapides de sa catégorie : upload, choix du template, export en quelques clics. La durée exacte dépend de la longueur de la vidéo et du template choisi.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à essayer Submagic ?",
    sub: "Un outil rapide pour produire des shorts visuellement propres. Essai gratuit : 3 vidéos, sans carte bancaire.",
    buttonText: "Essayer Submagic",
  },
};

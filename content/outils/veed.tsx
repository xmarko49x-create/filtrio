import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const veedFiche: FicheData = {
  slug: "veed",
  hero: {
    h1: "Veed : l'avis complet en 2026",
    tagline:
      "Éditeur vidéo web tout-en-un pensé pour les pros. Sous-titres auto, transcription, redimensionnement, enregistrement webcam. Voici pour qui c'est le bon compromis.",
    badges: [
      { label: "Éditeur web tout-en-un", tone: "primary" },
      { label: "Basé à Londres", tone: "accent" },
      { label: "Pas d'installation", tone: "neutral" },
    ],
    origine: "Royaume-Uni",
    tempsLecture: 7,
    lastCheck: "23/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Éditeur vidéo tout-en-un accessible via navigateur, lancé en 2018 depuis Londres. Positionnement : couvrir tous les besoins vidéo courants (montage, sous-titres, transcription, redimensionnement) dans une seule interface web sans installation.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs qui veulent un éditeur web fiable, marketeurs qui font des vidéos B2B, équipes qui travaillent depuis plusieurs machines, freelances qui alternent entre plusieurs clients sans logiciel dédié.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs de shorts viraux FR (→{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          ). Vidéastes qui veulent du montage pro (→{" "}
          <Link href="/outils/davinci" className="text-red-400 hover:underline">
            DaVinci
          </Link>
          ). Budgets zéro (→{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>
          ).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Free (0 €, 10 min d'export, 720p, 2 Go de stockage). Creator à 10,75 €/mois par editor (annuel, 129 €/an, 6 000 credits/an) pour des vidéos sociales sans watermark. Pro (populaire) à 23,17 €/mois par editor (annuel, 278 €/an, 30 000 credits/an) pour du pro-level avec Brand Kits multiples et 4K. Studio à 37,33 €/mois par editor (annuel, 448 €/an, 180 000 credits/an) avec Project Analytics. Enterprise sur devis. Facturation EUR.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/kapwing" className="text-green-400 hover:underline">
            Kapwing
          </Link>{" "}
          pour un usage collaboratif équivalent.{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          si budget zéro. Spécialistes pour chaque tâche spécifique (
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          ,{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>
          ).
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-yellow-400">Oui, en couteau suisse web</strong>
          . Pas le meilleur sur un point précis mais solide sur beaucoup, sans
          installation, accessible équipe. Compromis valide.
        </>
      ),
    },
  ],
  porQui: [
    "Tu veux un éditeur 100% web sans installation",
    "Tu travailles depuis plusieurs ordinateurs différents",
    "Tu fais des vidéos B2B, formation, interne, explicatives",
    "Tu veux un seul outil pour couvrir plusieurs besoins",
    "Tu préfères un tarif pro prévisible à 12-24 $/mois",
    "Tu veux tester avec un plan gratuit (même limité)",
  ],
  pasPourQui: [
    <>
      Tu veux des sous-titres stylés viraux FR (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    "Tu veux du montage pro avec color grading (→ DaVinci)",
    "Tu as un budget zéro (CapCut plus adapté)",
    <>
      Tu fais surtout du long format podcast (→{" "}
      <Link href="/outils/descript" className="text-violet-400 hover:underline">
        Descript
      </Link>
      )
    </>,
    "Tu veux une connexion offline (Veed est online only)",
    "Ta priorité est la vitesse (outils spécialisés plus rapides)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Interface partiellement traduite en français. Sous-titres auto FR corrects mais en retrait par rapport à Submagic sur le rendu visuel. Support anglais principalement. Documentation multilingue correcte.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.8,
      commentaire:
        "Basic à 12 $/mois correct pour un éditeur web tout-en-un. Pro à 24 $/mois pour les besoins croissants. Moins cher qu'un abonnement Premiere, plus cher qu'un CapCut gratuit. Bon équilibre polyvalence/prix.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 7.5,
      commentaire:
        "IA intégrée pour sous-titres auto, transcription, suppression bruit, suppression fond vidéo, B-roll automatique. Moins spécialisé qu'un Submagic ou Descript mais couvre les cas standards correctement.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface web propre, prise en main rapide pour un non-technicien. Courbe d'apprentissage plus courte que DaVinci Resolve mais plus chargée que CapCut. Compromis accessible.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support principalement anglais. Base de connaissances accessible, quelques tutos YouTube FR de la communauté. Moins établi que Canva ou CapCut sur ce volet.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API disponible sur plans pro. Intégrations Zapier, Make, Google Drive, Dropbox. Import direct depuis YouTube, Zoom, Teams. Bonne ouverture pour des workflows automatisés, plus poussé que CapCut.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Éditeur vidéo web complet",
      description:
        "Timeline multi-pistes, transitions, effets, texte animé, musique. Pas au niveau d'un DaVinci mais suffisant pour 80% des besoins vidéo courants.",
    },
    {
      titre: "Sous-titres auto multilingues",
      description:
        "Reconnaissance vocale en 100+ langues dont le français. Personnalisation du style, animation. Moins soigné que Submagic mais fonctionnel pour la majorité des usages.",
    },
    {
      titre: "Transcription et traduction",
      description:
        "Transcription automatique convertie en texte éditable. Traduction vers d'autres langues. Utile pour créer du contenu multilingue à partir d'une source.",
    },
    {
      titre: "Redimensionnement automatique",
      description:
        "Conversion entre formats (16:9, 9:16, 1:1) avec recadrage intelligent automatique. Parfait pour republier une vidéo sur plusieurs plateformes.",
    },
    {
      titre: "Enregistrement webcam et screen",
      description:
        "Capture d'écran, webcam, ou les deux en simultané directement dans l'outil. Utile pour démos, tutos, contenus explicatifs sans logiciel tiers.",
    },
    {
      titre: "IA : clean audio, suppression fond",
      description:
        "Nettoyage audio IA (bruit de fond), suppression automatique du fond vidéo. Bonne qualité pour un outil généraliste, moins aboutie qu'un Descript ou Submagic dédié.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 €",
      prixSub: "Pour tester",
      cible: "Découverte de l'outil",
      features: [
        "Export vidéo limité à 10 minutes",
        "720p · 2 Go de stockage · upload 1 Go max",
        "2 min/mois de sous-titres auto",
        "Stock audio/vidéo limité",
        "100 images/mois en AI image generation (avec crédits)",
      ],
    },
    {
      nom: "Creator",
      prix: "10,75 €/mois",
      prixSub: "Par editor · facturation annuelle (129 €/an) · ~6 000 credits/an",
      cible: "Créateurs sociaux occasionnels",
      features: [
        "Watermark-free social videos avec IA",
        "Sous-titres auto illimités",
        "Full stock audio & video library",
        "15+ AI tools (Clean Audio, Eye contact, etc.)",
        "5 videos/jour dans Gen-AI Studio",
        "1080p · 5 Go de stockage",
      ],
    },
    {
      nom: "Pro",
      prix: "23,17 €/mois",
      prixSub: "Par editor · facturation annuelle (278 €/an) · 30 000 credits/an · Populaire",
      cible: "Créateurs réguliers on-brand",
      features: [
        "Tout Creator inclus",
        "Multiple Brand Kits",
        "6h/an de traductions",
        "Jusqu'à 144h/an de voix IA",
        "Vidéos illimitées dans Gen-AI Studio",
        "AI Image Generations illimitées",
        "4K · 50 Go de stockage",
      ],
    },
    {
      nom: "Studio",
      prix: "37,33 €/mois",
      prixSub: "Par editor · facturation annuelle (448 €/an) · 180 000 credits/an",
      cible: "Agences et équipes pros",
      features: [
        "Tout Pro inclus",
        "Project Analytics",
        "Quotas vidéos et images étendus",
        "Jusqu'à 960h/an de voix IA",
        "AI Dubbing Proofread",
        "4K · stockage illimité",
      ],
    },
    {
      nom: "Enterprise",
      prix: "Sur devis",
      prixSub: "Scale your entire team's video creation",
      cible: "Organisations et équipes centralisées",
      features: [
        "Gestion centralisée des équipes et données",
        "Fonctionnalités sur mesure",
        "Stockage illimité",
        "Support dédié",
      ],
    },
  ],
  alternatives: [
    {
      slug: "kapwing",
      comment:
        "Alternative collaborative similaire, plus fort sur la collaboration temps réel. Même niveau de qualité IA, workflow d'équipe plus poussé.",
    },
    {
      slug: "capcut",
      comment:
        "Alternative gratuite beaucoup plus accessible. Moins polyvalente pour usages pros mais imbattable côté prix.",
    },
    {
      slug: "invideo",
      comment:
        "Si tu cherches un générateur script-to-video avec stock intégré. Moins d'édition, plus de génération rapide.",
    },
  ],
  faq: [
    {
      question: "Veed ou Kapwing pour une agence ?",
      answer: (
        <>
          Pour la collaboration temps réel pure,{" "}
          <Link href="/outils/kapwing" className="text-green-400 hover:underline">
            Kapwing
          </Link>{" "}
          est en avance. Pour un éditeur web polyvalent avec plus de features
          IA intégrées en solo/petite équipe, Veed est un meilleur compromis.
          La différence se joue sur l&apos;intensité du travail collaboratif.
        </>
      ),
    },
    {
      question: "Sous-titres FR : Veed ou Submagic ?",
      answer: (
        <>
          Submagic sur la qualité FR et le rendu viral, sans discussion.
          Veed pour un workflow plus complet qui englobe aussi édition + stock
          + transcription. Si ton besoin est uniquement les sous-titres FR
          stylés, Submagic reste la référence.
        </>
      ),
    },
    {
      question: "Peut-on monter une vidéo longue sur Veed ?",
      answer:
        "Oui jusqu'à plusieurs heures sur le plan Basic+. Pour du vrai long format avec beaucoup de pistes, l'expérience reste plus fluide sur un éditeur desktop (DaVinci, Premiere). Veed est optimal sur le court à moyen format (2-60 min).",
    },
    {
      question: "L'enregistrement webcam et screen est-il utilisable pro ?",
      answer:
        "Correct pour des tutos, démos produit, présentations. Pour du podcast vidéo sérieux avec invités distants, Riverside reste supérieur. Veed fait le job sur les usages B2B courants.",
    },
    {
      question: "Compatible avec les workflows d'automatisation ?",
      answer:
        "Oui via API (plans pro+) et intégrations natives Zapier/Make. Permet d'automatiser la création de vidéos à partir de données (ex : fiches produit → vidéos). Plus ouvert que CapCut sur ce plan.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Veed ?",
    sub: "Le plan gratuit (10 min max par vidéo) permet de tester l'interface et les sous-titres auto. Bon compromis avant de s'engager sur le Basic.",
    buttonText: "Essayer Veed",
  },
};

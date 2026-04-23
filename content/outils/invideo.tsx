import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const invideoFiche: FicheData = {
  slug: "invideo",
  hero: {
    h1: "InVideo : l'avis complet en 2026",
    tagline:
      "Générateur script-to-video IA désormais pivoté sur un modèle à crédits et 200+ modèles intégrés (Veo, Sora, Kling, Nano Banana). Templates marketing, voix off multilingue, stock massif, API. Voici pour qui il a du sens en 2026.",
    badges: [
      { label: "Script-to-video IA", tone: "primary" },
      { label: "API disponible", tone: "accent" },
      { label: "Marketing & faceless", tone: "neutral" },
    ],
    origine: "Inde",
    tempsLecture: 8,
    lastCheck: "22/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme IA de génération vidéo indienne. Tu écris un script ou un prompt, l'agent invideo v4 produit une vidéo complète avec voix off, images stock pertinentes, sous-titres, transitions. Depuis 2025-2026, la plateforme agrège 200+ modèles tiers (Veo 3.1, Sora 2 pro, Kling 3.0, Nano Banana Pro, ElevenLabs music) dans un modèle à crédits. Positionné marketing B2B et créateurs faceless en volume.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Marketeurs qui produisent des pubs vidéo en série, créateurs faceless, YouTubeurs qui diffusent du contenu éducatif automatisé, agences qui industrialisent la production. Pour qui a besoin de volume et de scripts texte comme point de départ.",
    },
    {
      question: "Pas pour qui ?",
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
        "Modèle à crédits en USD. Offre Individual à 4 plans facturation annuelle (-15% jusqu'à Génératif, -10% sur Élite) : En plus à 17 $/mois (200 $/an, 75 crédits/mois), Max à 85 $/mois (1000 $/an, 390 crédits/mois), Génératif à 170 $/mois (2000 $/an, 800 crédits/mois), Élite à 900 $/mois (10 800 $/an, 4250 crédits/mois). Offre Team & Enterprise sur devis. Les crédits sont consommés à chaque génération selon le modèle IA utilisé (Veo 3.1, Sora 2 pro, Kling 3.0, Nano Banana Pro tarifés à leur prix API d'origine).",
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
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface anglais principalement, traduction partielle. Voix off IA FR correctes mais moins naturelles qu'ElevenLabs. Scripts FR fonctionnent, stock d'images avec mots-clés FR plus limité qu'EN.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.0,
      commentaire:
        "Modèle à crédits qui peut devenir coûteux selon les modèles IA sollicités (Veo 3.1, Sora 2 pro tarifés à leur prix API d'origine). Rentable pour un usage régulier et industrialisé. Pas adapté à un usage occasionnel sans maîtrise de la consommation de crédits.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "Point fort : génération vidéo à partir de script ou prompt, voix off IA, matching automatique d'images stock pertinentes, sous-titres auto, AI Magic Box pour éditer. L'un des outils les plus IA-first du marché généraliste.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 7.5,
      commentaire:
        "Interface moderne orientée workflow IA. Prise en main rapide pour les cas standards (script → vidéo). Plus technique si tu veux du contrôle fin (ajustements timeline, transitions custom).",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 6.8,
      commentaire:
        "Support anglais. Documentation traduite automatiquement. Peu de tutos YouTube FR (vs la richesse de Canva/CapCut). C'est un outil plus orienté marketeurs pros que créateurs amateurs francophones.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API disponible. Intégrations Zapier, Make, webhooks. Export direct YouTube, plateformes sociales. Pensé pour s'insérer dans des workflows marketing automatisés.",
    },
  ],
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
      nom: "En plus",
      prix: "17 $/mois",
      prixSub: "Facturation annuelle (200 $/an) · -15 % vs mensuel",
      cible: "Pour explorer",
      features: [
        "75 crédits/mois",
        "= 300 Nano Banana Pro ou 600 Nano Banana 2 générations",
        "4 avatars IA et clones vocaux",
        "Concurrence limitée",
        "20 Go de stockage · 100 iStock",
        "Exportations illimitées sans watermark",
      ],
    },
    {
      nom: "Max",
      prix: "85 $/mois",
      prixSub: "Facturation annuelle (1 000 $/an) · -15 % · Plus populaire",
      cible: "Pour un usage occasionnel",
      features: [
        "390 crédits/mois",
        "= 1 560 Nano Banana Pro ou 3 120 Nano Banana 2 générations",
        "16 avatars IA & clones vocaux",
        "2x plus de concurrence que En plus",
        "100 Go de stockage · 200 iStock",
        "Exportations illimitées sans watermark",
      ],
    },
    {
      nom: "Génératif",
      prix: "170 $/mois",
      prixSub: "Facturation annuelle (2 000 $/an) · -15 % · Meilleur rapport qualité-prix",
      cible: "Pour un usage quotidien",
      features: [
        "800 crédits/mois (slider jusqu'à 1 600)",
        "= 3 200 Nano Banana Pro ou 6 400 Nano Banana 2 générations",
        "40 avatars IA et clones vocaux",
        "10x plus de concurrence que En plus",
        "2 To de stockage · 1 000 iStock",
        "Exportations illimitées sans watermark",
      ],
    },
    {
      nom: "Élite",
      prix: "900 $/mois",
      prixSub: "Facturation annuelle (10 800 $/an) · -10 %",
      cible: "Pour les créateurs de pouvoir",
      features: [
        "4 250 crédits/mois (slider jusqu'à 8 500)",
        "= 17 000 Nano Banana Pro ou 34 000 Nano Banana 2 générations",
        "200 avatars IA et clones vocaux",
        "20x plus de concurrence que En plus",
        "10 To de stockage · 5 000 iStock",
        "Exportations illimitées sans watermark",
      ],
    },
    {
      nom: "Team & Enterprise",
      prix: "Sur devis",
      prixSub: "Équipes centralisées",
      cible: "Organisations et groupes",
      features: [
        "Offre dédiée équipes",
        "Quotas de crédits et seats négociables",
        "Facturation consolidée",
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
        "Deux produits distincts sous la même marque. invideo AI = plateforme de génération vidéo à crédits (200+ modèles IA intégrés, plans En plus à 17 $/mo annuel jusqu'à Élite à 900 $/mo). invideo Studio = éditeur vidéo traditionnel avec bibliothèque de modèles et générateur de scripts IA (plans Gratuit, Affaires à 15 $/mo annuel, Illimité à 30 $/mo annuel, avec lifetime Business à 399 $ et Unlimited à 1 099 $ one-time). Cette fiche couvre principalement invideo AI (l'offre mise en avant sur la page Tarification principale).",
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
      question: "Le plan En plus à 17 $/mois suffit-il pour démarrer ?",
      answer:
        "Oui pour explorer sérieusement le workflow script-to-video et évaluer la qualité sur ton cas d'usage réel (75 crédits/mois suffisent à plusieurs générations selon les modèles choisis). Pour un usage récurrent en volume, il faut passer au Max ou au Génératif.",
    },
    {
      question: "L'API vaut-elle le coût d'un plan Individual ?",
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
    sub: "Le plan En plus à 17 $/mois (annuel, 75 crédits/mois) est le point d'entrée pour tester sérieusement le workflow script-to-video sur un cas concret. Pour un usage en volume, passer au Max ou au Génératif.",
    buttonText: "Essayer InVideo",
  },
};

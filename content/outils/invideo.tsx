import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const invideoFiche: FicheData = {
  slug: "invideo",
  hero: {
    h1: "InVideo : l'avis complet en 2026",
    tagline:
      "Le générateur script-to-video IA le plus mature en 2026. 5000+ templates marketing, voix off multilingue, 16M+ assets stock, API pour automatiser. Voici pour qui il vaut son prix, pour qui il ne vaut pas.",
    badges: [
      { label: "Script-to-video IA", tone: "primary" },
      { label: "API disponible", tone: "accent" },
      { label: "Marketing & faceless", tone: "neutral" },
    ],
    origine: "Inde",
    depuis: "2019",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme IA de génération vidéo lancée en 2019. Tu écris un script ou un prompt, InVideo produit une vidéo complète avec voix off, images stock pertinentes, sous-titres, transitions. Positionné marketing B2B et créateurs faceless en volume.",
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
        "Plan gratuit très limité (10 min/semaine). Plus à 20 $/mois (50 min IA/mois), Max à 50 $/mois (200 min). Plus cher que les éditeurs classiques, s'amortit si tu utilises vraiment la génération IA.",
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
    "Tu as un budget serré (20 $/mois c'est un engagement)",
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
      score: 7.5,
      commentaire:
        "Plus à 20 $/mois correct si tu utilises vraiment l'IA générative. Pas rentable pour un usage occasionnel. Plan gratuit trop limité pour tester sérieusement.",
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
        "API disponible dès le plan Plus. Intégrations Zapier, Make, webhooks. Export direct YouTube, plateformes sociales. Pensé pour s'insérer dans des workflows marketing automatisés.",
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
        "Plus de 5000 templates adaptés à des cas d'usage précis : pub Facebook, vidéo YouTube, explicatif produit, témoignage client. Gain de temps énorme pour les marketeurs.",
    },
    {
      titre: "Voix off IA multilingue",
      description:
        "Génération de voix off en 50+ langues dont le français. Moins naturel qu'ElevenLabs mais intégré au workflow de génération vidéo, donc pratique.",
    },
    {
      titre: "Stock médias massif",
      description:
        "16M+ images et vidéos stock accessibles. L'IA sélectionne automatiquement les plus pertinentes selon ton script. Inclus dans les plans Plus et supérieurs.",
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
      nom: "Gratuit",
      prix: "0 $",
      cible: "Juste pour découvrir",
      features: [
        "10 min de génération IA/semaine",
        "Watermark InVideo",
        "Stock limité",
        "Export 720p",
      ],
    },
    {
      nom: "Plus",
      prix: "20 $/mois",
      cible: "Marketeurs réguliers",
      features: [
        "50 min de génération IA/mois",
        "Sans watermark",
        "Stock massif inclus",
        "1080p export",
        "API disponible",
      ],
    },
    {
      nom: "Max",
      prix: "50 $/mois",
      cible: "Agences et volume",
      features: [
        "200 min de génération IA/mois",
        "4K export",
        "Features IA premium",
        "Brand kit complet",
        "Support prioritaire",
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
      question: "Le plan gratuit permet-il vraiment de tester ?",
      answer:
        "Superficiellement. 10 min/semaine avec watermark suffit pour voir l'interface et le workflow, mais pas pour évaluer la qualité réelle sur ton cas d'usage. Si tu es sérieux, prends le Plus à 20 $/mois en offre annuelle (souvent promo -30%).",
    },
    {
      question: "L'API vaut-elle le plan Plus à 20 $/mois ?",
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
    sub: "Le plan gratuit (10 min/semaine) suffit pour tester le workflow script-to-video sur une idée concrète. Si le rendu te convient, le Plus à 20 $/mois est le point d'entrée sérieux.",
    buttonText: "Essayer InVideo",
  },
};

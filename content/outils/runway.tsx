import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const runwayFiche: FicheData = {
  slug: "runway",
  hero: {
    h1: "Runway : l'avis complet en 2026",
    tagline:
      "Référence de la génération vidéo IA premium. Gen-3 Alpha, écosystème VFX complet, utilisé par les studios Hollywood. Voici pour qui il vaut son prix.",
    badges: [
      { label: "Génération vidéo IA premium", tone: "primary" },
      { label: "VFX pro", tone: "accent" },
      { label: "Clips 5-10s", tone: "neutral" },
    ],
    origine: "USA",
    tempsLecture: 8,
    lastCheck: "22/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme de génération vidéo IA lancée en 2018. Gen-3 Alpha depuis 2024 : text-to-video, image-to-video, écosystème VFX complet (inpainting, motion tracking, green screen auto). Utilisée par studios Hollywood et agences premium.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Motion designers, filmmakers indépendants, créateurs visuels premium, agences publicitaires. Pros de la création visuelle qui veulent explorer ce que la génération vidéo IA peut faire en 2026.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs long format classique (→{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          ou éditeurs timeline). YouTubeurs éducatifs linéaires (→{" "}
          <Link href="/outils/invideo" className="text-fuchsia-400 hover:underline">
            InVideo
          </Link>{" "}
          plus adapté). Budgets serrés. Ceux qui veulent du rendu "réaliste
          cinéma" parfait (encore des limites techniques).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Free (0 $) avec 125 credits one-time et 3 projets. Standard à 12 $/user/mois en annuel (144 $/an) avec 625 credits mensuels. Pro à 28 $/user/mois en annuel (336 $/an) avec 2250 credits. Unlimited à 76 $/user/mois en annuel (912 $/an) avec génération illimitée en Explore Mode. Enterprise sur devis. Facturation USD.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          Pika pour une alternative plus abordable. Sora (OpenAI) pour
          génération encore plus avancée quand disponible. Kling pour
          utilisateurs Chine.{" "}
          <Link
            href="/comparatifs/runway-vs-pika"
            className="text-purple-400 hover:underline"
          >
            Comparatif Runway vs Pika
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-purple-400">
            Oui, pour la création visuelle premium
          </strong>
          . C&apos;est l&apos;outil de référence si tu veux explorer la
          génération vidéo IA sérieusement. Pas un outil de montage classique.
        </>
      ),
    },
  ],
  porQui: [
    "Tu crées du contenu visuel créatif ou expérimental",
    "Tu fais des effets visuels impossibles en tournage classique",
    "Tu veux générer des vidéos à partir d'un prompt texte",
    "Tu animes une image fixe en vidéo (image-to-video)",
    "Tu es motion designer ou publicitaire premium",
    "Tu veux tester la dernière techno de génération vidéo IA",
  ],
  pasPourQui: [
    "Tu veux juste monter des vidéos classiques",
    <>
      Tu fais du contenu éducatif linéaire (→{" "}
      <Link href="/outils/invideo" className="text-fuchsia-400 hover:underline">
        InVideo
      </Link>{" "}
      plus adapté)
    </>,
    "Tu produis beaucoup de vidéos longues (coût en crédits élevé)",
    "Tu es débutant en création visuelle",
    "Tu veux un rendu \"réaliste cinéma\" parfait (encore des limites)",
    "Budget serré (à partir de 12 $/mois + coûts crédits)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface anglais principalement. Prompts IA fonctionnent en FR mais meilleurs résultats en EN selon les retours utilisateurs. Support anglais uniquement. Communauté FR modeste sur un outil très technique.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.5,
      commentaire:
        "Standard à 15 $/mois correct pour tester sérieusement. Coût par crédit raisonnable mais la génération vidéo IA reste consommatrice. Pro à 35 $/mois pour usage régulier.",
    },
    {
      label: "Qualité de la génération vidéo",
      poids: 25,
      score: 9.5,
      commentaire:
        "Point fort absolu. Gen-3 Alpha est parmi les meilleurs modèles de génération vidéo IA disponibles au grand public en 2026. Qualité visuelle impressionnante pour des clips de 5-10 secondes. Sora (OpenAI) comparable quand accessible.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface claire mais l'art du prompt IA reste complexe. Apprendre à formuler des prompts efficaces demande plusieurs heures d'expérimentation. Maîtrise avancée sur plusieurs semaines.",
    },
    {
      label: "Outils VFX complémentaires",
      poids: 10,
      score: 9.0,
      commentaire:
        "Écosystème VFX IA impressionnant : inpainting, motion tracking, green screen auto, removal d'objets, transfert de style. Peu d'outils aussi complets sur ce volet.",
    },
    {
      label: "API et intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "API disponible pour les plans pros. Permet d'intégrer Runway à des workflows custom, automatiser la génération. Utile pour studios et agences.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Gen-3 Alpha (text-to-video)",
      description:
        "Modèle de pointe depuis 2024. Génère des clips de 5-10 secondes à partir d'un prompt texte. Qualité visuelle au-dessus de la moyenne du marché.",
    },
    {
      titre: "Image-to-video",
      description:
        "Anime une image fixe en vidéo. Utile pour donner vie à une illustration, une photo produit, un concept visuel. Contrôle basique du mouvement via prompt.",
    },
    {
      titre: "Écosystème VFX complet",
      description:
        "Inpainting, motion tracking, green screen IA, removal d'objets, transfert de style. Démocratise des outils jusque-là réservés aux studios pros (VFX, compositing).",
    },
    {
      titre: "Lip sync et camera motion",
      description:
        "Contrôle avancé des mouvements de caméra (pan, zoom, tilt) via prompt. Lip sync pour animer un avatar parlant à partir d'une piste audio.",
    },
    {
      titre: "Workflows API",
      description:
        "API disponible sur plans pros. Permet d'automatiser la génération dans des pipelines custom. Utilisé par studios et agences pour industrialiser.",
    },
    {
      titre: "Act-One (performance capture)",
      description:
        "Capture d'une performance d'acteur et transfert sur un personnage IA. Feature avancée pour motion designers et filmmakers cherchant du caractère sans tournage.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      prixSub: "Free forever · per editor",
      cible: "Pour tester l'outil",
      features: [
        "125 credits (one-time)",
        "3 video editor projects",
        "Accès Gemini 3 Pro",
      ],
    },
    {
      nom: "Standard",
      prix: "12 $/mois",
      prixSub: "Par user · facturation annuelle (144 $/an)",
      cible: "Créateurs solo et petites équipes (max 5 users)",
      features: [
        "625 credits monthly · Credits refresh chaque mois",
        "Accès aux modèles tiers (Seedance 2.0, Kling 3.0 Pro, etc.)",
        "Unlimited video editor projects",
        "Possibilité d'acheter des credits supplémentaires",
      ],
    },
    {
      nom: "Pro",
      prix: "28 $/mois",
      prixSub: "Par user · facturation annuelle (336 $/an)",
      cible: "Teams pros (max 10 users)",
      features: [
        "2250 credits monthly",
        "Create Custom Voices pour Lip Sync et Text to Speech",
        "500 GB asset storage",
        "Tout Standard inclus",
      ],
    },
    {
      nom: "Unlimited",
      prix: "76 $/mois",
      prixSub: "Par user · facturation annuelle (912 $/an)",
      cible: "Studios avec volume illimité (max 10 users)",
      features: [
        "2250 credits mensuels + Explore Mode",
        "Unlimited generations de tous les modèles image et vidéo en Explore mode",
        "Tout Pro inclus",
      ],
    },
    {
      nom: "Enterprise",
      prix: "Sur devis",
      prixSub: "Organisations & grandes équipes",
      cible: "Sécurité avancée et personnalisation",
      features: [
        "Scalable pour grandes organisations",
        "Sécurité avancée et support dédié",
        "Personnalisation sur mesure",
      ],
    },
  ],
  alternatives: [
    {
      slug: "pika",
      comment:
        "Concurrent direct plus abordable. Qualité légèrement en retrait mais accès rapide et workflow plus simple. Bon pour débuter en génération vidéo IA.",
    },
    {
      slug: "sora",
      comment:
        "Modèle vidéo d'OpenAI. Qualité exceptionnelle mais accès limité. Disponibilité variable selon pays et abonnement ChatGPT Pro.",
    },
    {
      slug: "invideo",
      comment:
        "Alternative orientée script-to-video marketing avec stock. Moins créatif mais plus productif pour du contenu linéaire.",
    },
  ],
  faq: [
    {
      question: "Runway ou Pika ?",
      answer: (
        <>
          Runway pour la qualité maximale et l&apos;écosystème VFX complet.
          Pika pour un accès plus abordable et un workflow simplifié. Les
          créateurs pros privilégient Runway, les débutants en génération
          vidéo IA Pika. Voir le{" "}
          <Link
            href="/comparatifs/runway-vs-pika"
            className="text-purple-400 hover:underline"
          >
            comparatif
          </Link>
          .
        </>
      ),
    },
    {
      question: "Longueur maximale des vidéos générées ?",
      answer:
        "5 à 10 secondes par génération Gen-3 Alpha. Pour des vidéos plus longues, il faut enchaîner plusieurs générations et les monter ensemble. Limitation inhérente à la technologie actuelle de génération vidéo IA, tous outils confondus.",
    },
    {
      question: "Prompts en français fonctionnent-ils ?",
      answer:
        "Oui, mais les résultats sont généralement meilleurs en anglais selon les retours utilisateurs. Le modèle a été entraîné principalement sur des prompts EN. Pour la qualité maximale, formuler les prompts en anglais même si tu es francophone.",
    },
    {
      question: "Usage commercial autorisé ?",
      answer:
        "Oui, dès le plan Standard. Les vidéos générées sont utilisables commercialement. Runway est explicitement pensé pour un usage pro. Vérifier les CGU pour usages sensibles (avatars de personnes réelles, marques).",
    },
    {
      question: "Quelle machine nécessaire ?",
      answer:
        "Aucune, tout tourne sur les serveurs Runway. Un navigateur moderne et une connexion correcte suffisent. Avantage vs les modèles locaux qui demandent une GPU puissante.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Runway ?",
    sub: "Le plan Free (125 credits one-time, 3 projets) permet de tester la qualité des modèles avant engagement. Standard à partir de 12 $/user/mois en annuel.",
    buttonText: "Essayer Runway",
  },
};

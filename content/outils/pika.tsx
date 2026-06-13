import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const pikaFiche: FicheData = {
  slug: "pika",
  hero: {
    h1: "Pika : l'avis complet en 2026",
    tagline:
      "Génération vidéo IA accessible. Modèle Pika 2.5, effets Pikaffects, accès image-to-video et text-to-video à un prix nettement inférieur à Runway. Pour qui veut tester la création vidéo IA sans casser sa banque.",
    badges: [
      { label: "Génération vidéo IA", tone: "primary" },
      { label: "Plan gratuit récurrent", tone: "accent" },
      { label: "Pikaffects créatifs", tone: "neutral" },
    ],
    origine: "USA",
    tempsLecture: 6,
    lastCheck: "06/05/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme de génération vidéo IA. Modèle Pika 2.5 (text-to-video, image-to-video) avec les effets propriétaires Pikaffects (Pikaframes, Pikascenes, Pikadditions, Pikaswaps, Pikatwists). Plan Basic gratuit avec 80 credits/mois, plans payants à partir de 8 $/mois en annuel.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs visuels qui veulent tester la génération vidéo IA sans payer 30 $+/mois. Étudiants, créateurs indépendants, makers qui aiment l'expérimentation visuelle. Pour découvrir le format avant éventuellement passer sur Runway.",
    },
    {
      question: "À éviter si ?",
      answer: (
        <>
          Tu fais du contenu pro premium qui demande la qualité maximum (→{" "}
          <Link href="/outils/runway" className="text-purple-400 hover:underline">
            Runway
          </Link>
          ). Tu veux des intégrations VFX avancées (motion tracking, green
          screen IA, Runway domine). Tu produis du contenu linéaire long
          format classique (génération vidéo IA pas adaptée).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Basic gratuit (80 credits/mois, Pika 2.5 480p only, watermark). Standard à 8 $/mois en annuel (700 credits, toutes résolutions, sans watermark, pas d'usage commercial). Pro à 28 $/mois en annuel (2 300 credits, faster generations, usage commercial). Fancy à 76 $/mois en annuel (6 000 credits, fastest). Facturation USD.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/runway" className="text-purple-400 hover:underline">
            Runway
          </Link>{" "}
          pour la qualité maximale et l'écosystème VFX. Voir le{" "}
          <Link
            href="/comparatifs/runway-vs-pika"
            className="text-purple-400 hover:underline"
          >
            comparatif Runway vs Pika
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-lime-400">
            Oui pour découvrir la génération vidéo IA
          </strong>
          . Le plan gratuit permet de tester sérieusement avant engagement.
          Pour un usage pro intensif, Runway reste plus crédible. Pour la
          curiosité et les projets perso : Pika est imbattable côté prix.
        </>
      ),
    },
  ],
  porQui: [
    "Tu veux tester la génération vidéo IA sans engagement",
    "Tu fais du contenu créatif personnel ou expérimental",
    "Tu cherches des effets stylisés via Pikaffects",
    "Budget serré (8 $/mois en annuel pour démarrer sérieusement)",
    "Tu animes des images fixes en vidéos courtes",
    "Tu ne fais pas de production pro premium",
  ],
  pasPourQui: [
    <>
      Tu veux la qualité maximale du marché (→{" "}
      <Link href="/outils/runway" className="text-purple-400 hover:underline">
        Runway
      </Link>
      )
    </>,
    "Tu fais des effets VFX pros (motion tracking, green screen IA, Runway)",
    "Tu produis pour des clients premium qui exigent une qualité référence",
    "Tu as besoin d'API robuste pour automatiser (Runway plus mature)",
    "Tu fais du long format ou de l'éducatif linéaire",
    "Tu veux un usage commercial et tu hésites à monter au plan Pro (28 $/mois)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 6.5,
      commentaire:
        "Interface anglaise. Prompts en français fonctionnent mais résultats généralement meilleurs en anglais. Communauté FR limitée. Peu de tutos FR comparé à Runway.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 25,
      score: 9.0,
      commentaire:
        "Point fort majeur. Plan Standard à 8 $/mois en annuel = quasi-imbattable pour découvrir sérieusement la génération vidéo IA. Plan gratuit récurrent (80 credits/mois) permet de tester sans payer. Vs Runway à 12 $/mois : Pika est sensiblement moins cher pour démarrer.",
    },
    {
      label: "Qualité de la génération vidéo",
      poids: 25,
      score: 7.5,
      commentaire:
        "Pika 2.5 produit des vidéos correctes. Qualité visuelle solide pour un outil grand public mais en retrait par rapport à Runway Gen-4.5 sur les rendus complexes ou cinéma. Bon pour les concepts créatifs et les vidéos sociales.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Interface très simple, orientée créativité ludique. Workflow rapide : tu écris un prompt, tu choisis un Pikaffect, tu génères. Apprentissage rapide pour les débutants. Les Pikaffects sont un plus pédagogique pour comprendre ce qu'on peut faire.",
    },
    {
      label: "Effets et fonctionnalités créatives",
      poids: 10,
      score: 8.5,
      commentaire:
        "Pikaffects (Pikaframes, Pikascenes, Pikadditions, Pikaswaps, Pikatwists) sont une signature. Permettent des effets stylisés rapides et accessibles aux créateurs non-techniques. Différenciateur principal vs Runway plus VFX-pro.",
    },
    {
      label: "Usage commercial et restrictions",
      poids: 5,
      score: 6.0,
      commentaire:
        "Restriction notable : usage commercial uniquement à partir du plan Pro (28 $/mois). Plan Standard (8 $) ne permet pas l'usage commercial. À prendre en compte si tu vends des prestations vidéo. Runway autorise l'usage commercial dès le plan Standard à 12 $/mois.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Pika 2.5 (text-to-video, image-to-video)",
      description:
        "Modèle propriétaire pour générer des vidéos courtes (jusqu'à 10 secondes) à partir d'un prompt texte ou d'une image fixe. Disponible en 480p sur le plan Basic, toutes résolutions à partir du Standard.",
    },
    {
      titre: "Pikaffects (effets signature)",
      description:
        "Pikaframes (transitions IA), Pikascenes (changements de décor), Pikadditions (ajouts d'éléments), Pikaswaps (remplacements), Pikatwists (transformations stylisées). Différenciateur clé vs Runway, plus accessible créativement.",
    },
    {
      titre: "Image-to-video",
      description:
        "Anime une image fixe en clip vidéo. Disponible dès le plan Basic (Pikaffects Image-to-Video uniquement). Accès à Pika 2.5 Image-to-Video sur Standard et plus.",
    },
    {
      titre: "Text-to-video Pika 2.5",
      description:
        "Génération de vidéo à partir d'un prompt texte. Toutes résolutions disponibles à partir du plan Standard (8 $/mois). Qualité solide pour des concepts créatifs courts.",
    },
    {
      titre: "Système à crédits avec rollover",
      description:
        "Les crédits non utilisés se reportent au mois suivant (rollover). Achat de crédits supplémentaires possible sur tous les plans payants. 80 (Basic) / 700 (Standard) / 2300 (Pro) / 6000 (Fancy) credits/mois.",
    },
  ],
  plans: [
    {
      nom: "Basic",
      prix: "0 $",
      prixSub: "Gratuit · 80 credits/mois",
      cible: "Pour découvrir l'outil sans engagement",
      features: [
        "80 credits mensuels",
        "Pika 2.5 (480p uniquement)",
        "Pikascenes, Pikadditions, Pikaswaps, Pikatwists",
        "Pikaffects Image-to-Video uniquement",
        "Téléchargements avec watermark",
        "Pas d'usage commercial",
        "Rollover des crédits non utilisés",
      ],
    },
    {
      nom: "Standard",
      prix: "8 $/mois",
      prixSub: "Annuel (96 $/an, -20% vs mensuel)",
      cible: "Créateurs réguliers découvrant la génération vidéo IA",
      features: [
        "700 credits mensuels",
        "Pika 2.5 toutes résolutions",
        "Tous les Pikaffects (Pikaframes inclus)",
        "Génération rapide",
        "Téléchargements sans watermark",
        "Achat de crédits supplémentaires",
        "Pas d'usage commercial",
      ],
    },
    {
      nom: "Pro",
      prix: "28 $/mois",
      prixSub: "Annuel (336 $/an) · Best value",
      cible: "Créateurs et freelances pro",
      features: [
        "2 300 credits mensuels",
        "Tout Standard inclus",
        "Génération plus rapide (faster generations)",
        "Téléchargements sans watermark",
        "Usage commercial autorisé",
        "Achat de crédits supplémentaires",
      ],
    },
    {
      nom: "Fancy",
      prix: "76 $/mois",
      prixSub: "Annuel (912 $/an)",
      cible: "Studios et créateurs intensifs",
      features: [
        "6 000 credits mensuels",
        "Tout Pro inclus",
        "Génération la plus rapide (fastest)",
        "Téléchargements sans watermark",
        "Usage commercial autorisé",
        "Achat de crédits supplémentaires",
      ],
    },
  ],
  alternatives: [
    {
      slug: "runway",
      comment:
        "Concurrent direct premium. Qualité supérieure et écosystème VFX pro. À choisir si budget plus large et besoins pros.",
    },
    {
      slug: "synthesia",
      comment:
        "Pour un avatar humain parlant à la place de génération créative. Cas d'usage différent (formation, B2B).",
    },
    {
      slug: "heygen",
      comment:
        "Avatars IA et vidéos B2B. Pas un concurrent direct mais alternative pour qui veut un humain plutôt que des scènes générées.",
    },
  ],
  faq: [
    {
      question: "Pika ou Runway ?",
      answer: (
        <>
          Pika pour démarrer la génération vidéo IA à petit prix (8 $/mois en
          annuel). Runway pour la qualité maximale et l'écosystème VFX
          (12 $/mois en annuel mais plus complet). Voir le{" "}
          <Link
            href="/comparatifs/runway-vs-pika"
            className="text-purple-400 hover:underline"
          >
            comparatif Runway vs Pika
          </Link>
          .
        </>
      ),
    },
    {
      question: "Le plan gratuit Pika est-il vraiment utilisable ?",
      answer:
        "Pour découvrir l'outil oui : 80 credits/mois en récurrent (vs 125 credits one-time chez Runway), accès aux Pikaffects de base, mais limité à Pika 2.5 480p et avec watermark. Pour un usage régulier sans watermark, le plan Standard à 8 $/mois est nécessaire.",
    },
    {
      question: "Usage commercial autorisé ?",
      answer:
        "Uniquement à partir du plan Pro (28 $/mois en annuel). Les plans Basic (gratuit) et Standard (8 $/mois) ne permettent pas l'usage commercial. À retenir si tu vends des vidéos ou les utilises pour un client.",
    },
    {
      question: "Prompts en français fonctionnent-ils ?",
      answer:
        "Oui mais les résultats sont généralement meilleurs en anglais (modèle entraîné principalement sur des prompts EN). Pour la qualité maximale, formuler les prompts en anglais même si tu es français.",
    },
    {
      question: "Combien de temps fait une vidéo générée ?",
      answer:
        "Quelques secondes par génération avec Pika 2.5 (5 à 10 secondes typique). Pour des vidéos plus longues, il faut enchaîner plusieurs générations et les monter ensemble. Limitation inhérente à la génération vidéo IA, tous outils confondus.",
    },
    {
      question: "Les crédits non utilisés expirent-ils ?",
      answer:
        "Non, Pika fait du rollover sur tous les plans : les credits non utilisés se reportent au mois suivant. Pratique pour les usages irréguliers. Cumul possible sans limite annoncée mais à vérifier dans les CGU pour les plans intensifs.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Pika ?",
    sub: "Plan Basic gratuit (80 credits/mois récurrent) pour découvrir. Plan Standard à 8 $/mois en annuel (700 credits, toutes résolutions, sans watermark) pour un usage régulier non commercial.",
    buttonText: "Essayer Pika",
  },
};

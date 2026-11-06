import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { SCORING_BY_SLUG } from "@/lib/scoring";

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
    lastCheck: "06/11/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme de génération vidéo IA. Modèle Pika 2.5 (text-to-video, image-to-video) avec les effets propriétaires Pikaffects (Pikaframes, Pikascenes, Pikadditions, Pikaswaps, Pikatwists). Plan gratuit sans crédits inclus (crédits à acheter en packs), plans payants à partir de 8 $/mois en annuel.",
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
          ). Tu veux des applications d&apos;édition dédiées (Edit Video, Video
          Backdrop, Color Grade Video) ou la capture de performance Act-Two, où
          Runway domine. Tu produis du contenu linéaire long format classique
          (génération vidéo IA pas adaptée).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Free à 0 $ sans crédits mensuels (crédits à acheter en packs, sans usage commercial). Starter à 8 $/mois en annuel ou 10 $ en mensuel (600 crédits/mois). Creator à 28 $/mois en annuel ou 35 $ en mensuel (2 600 crédits/mois). Fancy à 76 $/mois en annuel ou 95 $ en mensuel (8 550 crédits/mois, file prioritaire). Tous les plans donnent accès à tous les modèles et téléchargent sans watermark. Facturation USD, vérifié le 06/11/2026.",
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
    "Tu fais de l'édition avancée par application (Edit Video, Video Backdrop, Color Grade Video, Runway)",
    "Tu produis pour des clients premium qui exigent une qualité référence",
    "Tu as besoin d'API robuste pour automatiser (Runway plus mature)",
    "Tu fais du long format ou de l'éducatif linéaire",
    "Tu veux monter en volume ou en vitesse de génération (plans Creator et Fancy)",
  ],
  scoring: SCORING_BY_SLUG.pika,
  fonctionnalites: [
    {
      titre: "Pika 2.5 (text-to-video, image-to-video)",
      description:
        "Modèle propriétaire pour générer des vidéos courtes (clips de 5 secondes dans la grille de tarifs) à partir d'un prompt texte ou d'une image fixe. Tous les plans donnent accès à tous les modèles, le coût en crédits dépend du modèle et de la résolution.",
    },
    {
      titre: "Pikaffects (effets signature)",
      description:
        "Pikaframes (transitions IA), Pikascenes (changements de décor), Pikadditions (ajouts d'éléments), Pikaswaps (remplacements), Pikatwists (transformations stylisées). Différenciateur clé vs Runway, plus accessible créativement.",
    },
    {
      titre: "Image-to-video",
      description:
        "Anime une image fixe en clip vidéo avec Pika 2.5 ou les autres modèles proposés. Disponible sur tous les plans, chaque génération consomme des crédits.",
    },
    {
      titre: "Text-to-video Pika 2.5",
      description:
        "Génération de vidéo à partir d'un prompt texte. Accessible dès le plan Starter (8 $/mois en annuel). Qualité solide pour des concepts créatifs courts.",
    },
    {
      titre: "Système à crédits",
      description:
        "Crédits renouvelés chaque mois : 0 (Free) / 600 (Starter) / 2 600 (Creator) / 8 550 (Fancy). Packs de crédits supplémentaires vendus à part (environ 60 crédits par dollar). Le report des crédits non utilisés n'est pas précisé sur la page tarifs.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      prixSub: "Gratuit · aucun crédit mensuel",
      cible: "Pour découvrir l'interface",
      features: [
        "Aucun crédit inclus : crédits à acheter en packs",
        "Accès à tous les modèles",
        "Téléchargements sans watermark",
        "Pas d'usage commercial",
      ],
    },
    {
      nom: "Starter",
      prix: "8 $/mois",
      prixSub: "Annuel (96 $/an) · 10 $ en mensuel",
      cible: "Créateurs réguliers découvrant la génération vidéo IA",
      features: [
        "600 crédits mensuels",
        "Accès à tous les modèles",
        "Téléchargements sans watermark",
        "Usage commercial inclus",
        "Achat de crédits supplémentaires",
      ],
    },
    {
      nom: "Creator",
      prix: "28 $/mois",
      prixSub: "Annuel (336 $/an) · 35 $ en mensuel",
      cible: "Créateurs et freelances pro",
      features: [
        "2 600 crédits mensuels",
        "Tout Starter inclus",
        "Plus de générations en parallèle",
        "Téléchargements sans watermark",
        "Usage commercial inclus",
      ],
    },
    {
      nom: "Fancy",
      prix: "76 $/mois",
      prixSub: "Annuel (912 $/an) · 95 $ en mensuel",
      cible: "Studios et créateurs intensifs",
      features: [
        "8 550 crédits mensuels",
        "Tout Creator inclus",
        "File de génération prioritaire",
        "Téléchargements sans watermark",
        "Usage commercial inclus",
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
        "Peu : le plan Free n'inclut aucun crédit mensuel, il faut acheter des packs de crédits pour générer, et l'usage commercial n'est pas inclus. Pour un usage régulier, le plan Starter à 8 $/mois en annuel (600 crédits/mois) est le vrai point d'entrée.",
    },
    {
      question: "Usage commercial autorisé ?",
      answer:
        "D'après la page tarifs de Pika (vérifiée le 06/11/2026), la licence commerciale est incluse sur les plans payants (Starter, Creator, Fancy) mais pas sur le plan Free. Les conditions exactes peuvent évoluer : vérifie les CGU officielles avant de vendre des vidéos ou de les utiliser pour un client.",
    },
    {
      question: "Prompts en français fonctionnent-ils ?",
      answer:
        "Oui mais les résultats sont généralement meilleurs en anglais (modèle entraîné principalement sur des prompts EN). Pour la qualité maximale, formuler les prompts en anglais même si tu es français.",
    },
    {
      question: "Combien de temps fait une vidéo générée ?",
      answer:
        "Quelques secondes par génération (clips de 5 secondes dans la grille de tarifs de Pika). Pour des vidéos plus longues, il faut enchaîner plusieurs générations et les monter ensemble. Limitation inhérente à la génération vidéo IA, tous outils confondus.",
    },
    {
      question: "Les crédits non utilisés expirent-ils ?",
      answer:
        "La page tarifs indique que les crédits des plans sont renouvelés chaque mois, sans préciser si les crédits non utilisés sont reportés. À vérifier dans les CGU avant de compter dessus.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Pika ?",
    sub: "Plan Free pour découvrir l'interface (crédits à acheter en packs). Plan Starter à 8 $/mois en annuel (600 crédits/mois, usage commercial, sans watermark) pour un usage régulier.",
    buttonText: "Essayer Pika",
  },
};

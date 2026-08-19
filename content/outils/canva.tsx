import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { SCORING_BY_SLUG } from "@/lib/scoring";

export const canvaFiche: FicheData = {
  slug: "canva",
  hero: {
    h1: "Canva : l'avis complet en 2026",
    tagline:
      "Le couteau suisse du design pour créateurs. 180M+ utilisateurs, Magic Design IA, templates massifs, édition vidéo légère. Voici pour qui c'est le choix idéal.",
    badges: [
      { label: "Interface FR native", tone: "primary" },
      { label: "Plan gratuit riche", tone: "accent" },
      { label: "Magic Design IA", tone: "neutral" },
    ],
    origine: "Australie",
    langue: "Interface disponible en français",
    tempsLecture: 7,
    lastCheck: "10/07/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme de design en ligne devenue un couteau suisse : miniatures YouTube, posts sociaux, présentations, logos, édition vidéo basique. Écosystème IA en expansion (Magic Design, Magic Write, Magic Edit).",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs de contenu qui font aussi du design (miniatures, posts, stories), solopreneurs, marketeurs sans équipe design, formateurs, tous ceux qui veulent un rendu pro sans skills design avancés.",
    },
    {
      question: "À éviter si ?",
      answer: (
        <>
          Designers pros qui ont besoin d&apos;Illustrator/Photoshop. Monteurs
          vidéo qui veulent un vrai éditeur (→{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          ou DaVinci Resolve). Ceux qui veulent de l&apos;IA générative
          d&apos;images purement avancée (→ Midjourney).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan Gratuit (0 €/an). Pro à 110 €/an par personne (facturation annuelle, environ 9 €/mois), débloque Magic Design, Brand Kit, contenu premium et suppression d'arrière-plan. Pro+ à 170 €/an par personne (plan populaire) pour les particuliers et petites équipes. Offre Entreprise dédiée via contact. Économisez 16 % et plus avec l'annuel.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          Adobe Express si tu es déjà chez Adobe. Figma si tu veux du design
          web/app.{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          si tu veux un éditeur vidéo dédié. Cas par cas selon ton usage
          dominant.
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-pink-400">Oui</strong>, pour la majorité des
          créateurs qui ont besoin de design + contenu visuel sans skills pro.
          Interface FR native et plan gratuit riche en font le choix par défaut
          des créateurs.
        </>
      ),
    },
  ],
  porQui: [
    "Tu produis des miniatures YouTube régulièrement",
    "Tu fais aussi du design (posts sociaux, stories, présentations)",
    "Tu n'as pas de skills design avancés mais tu veux un rendu pro",
    "Tu veux un outil polyvalent plutôt que 5 spécialisés",
    "Tu veux profiter d'un plan gratuit réellement utilisable",
    "Tu travailles en équipe sur des visuels de marque",
  ],
  pasPourQui: [
    "Tu es designer pro et veux la précision Illustrator/Photoshop",
    <>
      Tu veux un éditeur vidéo complet (→{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut
      </Link>{" "}
      ou DaVinci)
    </>,
    "Tu veux l'IA générative d'images la plus avancée (→ Midjourney)",
    <>
      Tu fais surtout des sous-titres stylés pour shorts (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    "Tu as besoin d'API avancée pour automatiser à l'échelle",
    "Tu veux un contrôle typographique très fin (kerning, leading avancé)",
  ],
  scoring: SCORING_BY_SLUG.canva,
  fonctionnalites: [
    {
      titre: "Magic Design (IA générative)",
      description:
        "Génère des designs complets à partir d'un prompt texte ou d'une image. Templates adaptés à ton besoin (miniature, post, story). Point fort de Canva sur le terrain IA.",
    },
    {
      titre: "Templates massifs",
      description:
        "Des centaines de milliers de templates dans toutes les niches : miniatures YouTube, posts Instagram, stories, présentations, CV, affiches, flyers. La plupart gratuits.",
    },
    {
      titre: "Bibliothèque d'assets",
      description:
        "Millions de photos, illustrations, icônes, vidéos, musiques. Une partie gratuite, stock premium via plan Pro. L'une des bibliothèques les plus riches du marché.",
    },
    {
      titre: "Brand Kit",
      description:
        "Centralise tes couleurs, fonts, logos de marque. Application en un clic sur tous tes designs. Gain de temps énorme pour maintenir une cohérence visuelle. Plan Pro requis.",
    },
    {
      titre: "Édition vidéo basique",
      description:
        "Timeline simple, transitions, musique, sous-titres auto. Suffisant pour du contenu social media court, pas pour un montage pro. Bon complément du design.",
    },
    {
      titre: "Collaboration équipe",
      description:
        "Partage de designs, commentaires en temps réel, gestion des droits. Parfait pour les équipes marketing qui produisent du contenu visuel à plusieurs mains.",
    },
  ],
  plans: [
    {
      nom: "Gratuit",
      prix: "0 €/an",
      prixSub: "Pour une seule personne",
      cible: "Créateurs solo et débutants",
      features: [
        "Éditeur drag-and-drop et plus de 1 000 types de designs",
        "Large bibliothèque de modèles, photos, vidéos, illustrations, audio",
        "1 Identité visuelle (3 couleurs uniquement)",
        "Export PNG, JPG, PDF",
      ],
    },
    {
      nom: "Pro",
      prix: "110 €/an",
      prixSub: "Par personne · Facturation annuelle",
      cible: "Créateurs réguliers",
      features: [
        "Accès au contenu premium et aux outils de création avancés",
        "Magic Design, Magic Write et outils IA inclus",
        "Brand Kit et outils de marque",
        "Économisez 16 % et plus avec l'annuel (mensuel disponible plus cher)",
      ],
    },
    {
      nom: "Pro+",
      prix: "170 €/an",
      prixSub: "Par personne · Plan populaire",
      cible: "Particuliers et petites équipes",
      features: [
        "Tout Pro inclus",
        "Outils avancés pour créer plus vite",
        "Stratégie marketing plus intelligente",
        "Évolution et collaboration en équipe",
      ],
    },
    {
      nom: "Entreprise",
      prix: "Sur devis",
      prixSub: "Organisations & grandes équipes",
      cible: "Besoins sur mesure",
      features: [
        "Gestion multi-équipes",
        "Brand controls avancés",
        "Sécurité et conformité entreprise",
        "Support dédié",
      ],
    },
  ],
  alternatives: [
    {
      slug: "capcut",
      comment:
        "Si ton besoin principal est l'édition vidéo plutôt que le design. CapCut est plus spécialisé, Canva est plus polyvalent.",
    },
    {
      slug: "adobe-express",
      comment:
        "Alternative Adobe avec Firefly intégré. Excellent si tu es déjà dans l'écosystème Adobe. Tarifs similaires, plus pro sur certains aspects mais moins intuitif.",
    },
    {
      slug: "microsoft-designer",
      comment:
        "Alternative gratuite de Microsoft avec DALL-E intégré. Moins mature que Canva côté design mais IA image puissante. Bon choix pour qui veut du 100% gratuit.",
    },
  ],
  faq: [
    {
      question: "Canva ou Adobe Express pour les miniatures YouTube ?",
      answer:
        "Canva pour la majorité : interface plus intuitive, templates plus nombreux, community FR massive. Adobe Express si tu es déjà dans l'écosystème Adobe et veux Firefly intégré. Les deux donnent un résultat équivalent sur miniatures classiques.",
    },
    {
      question: "Le plan gratuit est-il vraiment suffisant ?",
      answer:
        "Pour la majorité des créateurs solo, oui. Il couvre l'éditeur drag-and-drop, plus de 1 000 types de designs, et la bibliothèque standard de modèles, photos, vidéos et audio. Tu passes Pro si tu veux le contenu premium, le Brand Kit et les outils IA avancés.",
    },
    {
      question: "Peut-on éditer de la vidéo sérieusement avec Canva ?",
      answer: (
        <>
          Pour du court social media simple, oui. Pour un montage long format
          ou avec color grading, non, utilise plutôt{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          ou DaVinci Resolve. Canva reste avant tout un outil de design, pas
          un éditeur vidéo dédié.
        </>
      ),
    },
    {
      question: "Le Brand Kit vaut-il le plan Pro ?",
      answer:
        "Si tu maintiens une cohérence visuelle de marque et que tu produis beaucoup de contenu, oui. Une fois configuré, le Brand Kit applique automatiquement tes couleurs/fonts/logos aux nouveaux designs. Gain de temps réel pour marketeurs et créateurs réguliers. Pro à 110 €/an par personne en annuel.",
    },
    {
      question: "Pro ou Pro+, comment choisir ?",
      answer:
        "Pro à 110 €/an par personne suffit pour un créateur solo qui veut le contenu premium, Brand Kit et Magic Design. Pro+ à 170 €/an est le plan populaire pour les particuliers et petites équipes qui veulent aller plus loin sur la collaboration et la stratégie marketing. Entreprise sur devis pour les organisations.",
    },
    {
      question: "Compatible avec la TVA FR ?",
      answer:
        "Oui, Canva propose une facturation en euros avec interface française native. Plan Pro offert pour associations, enseignants et étudiants sous conditions (avec vérification). Bonne politique de localisation FR.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Canva ?",
    sub: "Le plan gratuit couvre déjà largement la plupart des usages. Crée ta première miniature YouTube en 10 minutes pour te faire une idée.",
    buttonText: "Essayer Canva",
  },
};

import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const heygenFiche: FicheData = {
  slug: "heygen",
  hero: {
    h1: "HeyGen : l'avis complet en 2026",
    tagline:
      "Plateforme d'avatars IA vidéo spécialisée dans le contenu marketing multilingue et la formation scalable. Clonage facial en 2 minutes, 500+ avatars, sync labiale adaptée par langue. Voici pour qui il vaut son prix.",
    badges: [
      { label: "Avatars IA réalistes", tone: "primary" },
      { label: "Doublage multilingue", tone: "accent" },
      { label: "Contenu B2B & formation", tone: "neutral" },
    ],
    origine: "USA",
    tempsLecture: 8,
    lastCheck: "22/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme d'avatars IA vidéo. Tu écris un script, tu choisis un avatar (parmi la bibliothèque ou en clonant ton visage), et HeyGen génère une vidéo complète avec sync labiale. Spécialité : le doublage multilingue vidéo.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Marques qui produisent du contenu marketing multilingue, équipes formation interne qui veulent scaler, marketeurs qui produisent des pubs personnalisées, créateurs de contenu pédagogique. Pas un outil de créateur solo classique.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          YouTubeurs qui font du contenu authentique face cam. Créateurs qui
          veulent juste de la voix off (→{" "}
          <Link
            href="/outils/elevenlabs"
            className="text-teal-400 hover:underline"
          >
            ElevenLabs
          </Link>
          ). Budgets serrés (minimum 29 $/mois). Ceux qui veulent un rendu 100%
          indiscernable (visage avatar encore perceptible).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan gratuit (Free) disponible. Creator à 29 $/mois (Photo Avatars illimités, fast video processing). Pro à 99 $/mois (faster processing, translation script edit). Business à 149 $/mois pour les équipes (+20 $/siège). Enterprise sur devis. Facturation en USD.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link
            href="/outils/elevenlabs"
            className="text-teal-400 hover:underline"
          >
            ElevenLabs
          </Link>{" "}
          si tu veux juste la voix.{" "}
          <Link
            href="/outils/synthesia"
            className="text-blue-400 hover:underline"
          >
            Synthesia
          </Link>{" "}
          pour un concurrent plus orienté corporate/formation.{" "}
          <Link
            href="/comparatifs/elevenlabs-vs-heygen"
            className="text-cyan-400 hover:underline"
          >
            Comparatif ElevenLabs vs HeyGen
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-cyan-400">Oui, mais sur un besoin précis</strong>{" "}
          : avatar vidéo complet avec sync labiale. Pour tout le reste,
          d&apos;autres outils sont mieux adaptés.
        </>
      ),
    },
  ],
  porQui: [
    "Tu veux produire du contenu vidéo avec un visage sans filmer",
    "Tu dois décliner tes vidéos dans 5-10+ langues",
    "Tu fais du contenu marketing B2B, de la formation, ou du tuto corporate",
    "Tu veux cloner ton propre visage pour industrialiser ta production",
    "Tu veux un rendu pro sans équipe de tournage",
    "Tu as un budget à partir de 29 $/mois à allouer",
  ],
  pasPourQui: [
    "Tu fais du contenu authentique personnel face cam (YouTube, TikTok)",
    <>
      Tu veux juste de la voix off sans avatar (→{" "}
      <Link
        href="/outils/elevenlabs"
        className="text-teal-400 hover:underline"
      >
        ElevenLabs
      </Link>
      )
    </>,
    "Tu as un budget très limité",
    "Tu cherches un rendu 100% indiscernable (avatar encore perceptible)",
    "Ton contenu repose sur l'émotion et la présence humaine",
    "Tu veux un éditeur vidéo complet avec timeline",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Voix FR correcte, moins naturelle que celle d'ElevenLabs selon les retours publics. La sync labiale fonctionne en français mais avec quelques glitches sur les sons nasaux typiques du FR (ent, in, on). Interface partiellement traduite.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.0,
      commentaire:
        "Plus cher que les outils voix-only. 29 $/mois minimum pour un usage sérieux (Creator), 99 $/mois pour Pro, 149 $/mois pour Business (équipes). Le rapport qualité/prix dépend du besoin : excellent si tu as vraiment besoin d'avatars, décevant si tu veux juste de la voix.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.0,
      commentaire:
        "Point fort. Génération d'avatars à partir d'un script, clonage facial à partir d'une vidéo de 2 min, doublage vidéo avec sync labiale adaptée à la langue, bibliothèque de 500+ avatars. Interactive avatar en temps réel sur plans pro.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface moderne, workflow clair : script → avatar → voix → render. Courbe d'apprentissage de 30 min pour les basiques, quelques heures pour maîtriser les features avancées. Editor vidéo intégré basique.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Documentation bilingue partiellement traduite. Support en anglais uniquement. Communauté Discord active mais internationale. Plusieurs tutos YouTube FR existent, créés par la communauté.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API disponible sur plans payants, intégrations natives avec Zapier et Make. Export direct vers plateformes de diffusion. Plugin PowerPoint pour transformer des présentations en vidéos avec avatar.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Avatars IA réalistes",
      description:
        "Plus de 500 avatars pré-conçus dans la bibliothèque, dont une quarantaine d'avatars \"premium\" très réalistes. Catégorisés par genre, âge, style, métier. Le choix de l'avatar conditionne fortement la crédibilité du rendu.",
    },
    {
      titre: "Clonage facial et vocal",
      description:
        "Avatar personnalisé à partir d'une vidéo de 2 min de toi. L'outil recrée ton visage, ta voix, tes expressions. Disponible sur plans Creator+, avec vérification d'identité obligatoire.",
    },
    {
      titre: "Doublage vidéo multilingue",
      description:
        "Transforme une vidéo existante dans une autre langue en ajustant la sync labiale. 170+ langues supportées. La qualité varie selon la langue cible (excellent en EN/ES, bon en FR).",
    },
    {
      titre: "Script-to-Video",
      description:
        "Workflow phare : tu écris ou colles un script, tu choisis l'avatar et la voix, tu ajoutes éventuellement des visuels, et HeyGen génère la vidéo complète en quelques minutes.",
    },
    {
      titre: "Interactive Avatar",
      description:
        "Disponible sur plans Team+ : avatar en temps réel qui peut converser avec un utilisateur. Utile pour les chatbots vidéo, agents commerciaux automatisés, démos interactives.",
    },
    {
      titre: "Templates marketing",
      description:
        "Bibliothèque de templates vidéo prêts à l'emploi : témoignage, pub produit, tuto, formation. Accélère fortement la production pour qui n'a pas d'idée créative au départ.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      prixSub: "Pour tester",
      cible: "Découverte de l'outil",
      features: [
        "1 minute Avatar IV Gen",
        "3 minutes Product Placement",
        "Standard video processing",
        "Point d'entrée pour tester l'outil",
      ],
    },
    {
      nom: "Creator",
      prix: "29 $/mois",
      prixSub: "Facturation USD",
      cible: "Créateurs solo, marketeurs",
      features: [
        "Unlimited Photo Avatars",
        "Fast video processing",
        "30 minutes Avatar IV Gen",
        "30 minutes Product Placement",
        "AI video generator · AI voice over",
      ],
    },
    {
      nom: "Pro",
      prix: "99 $/mois",
      prixSub: "Créateurs pros",
      cible: "Création vidéo avancée",
      features: [
        "Tout Creator · Faster video processing",
        "30 minutes Avatar IV Gen",
        "30 minutes Product Placement",
        "Edit & proofread translation script",
        "Password protected URLs",
      ],
    },
    {
      nom: "Business",
      prix: "149 $/mois",
      prixSub: "+20 $/siège supplémentaire",
      cible: "Équipes, agences",
      features: [
        "Auto-reload credits",
        "60 minutes Avatar IV Gen",
        "Team templates · Invites & team management",
        "Team Member 2FA Enforcement",
      ],
    },
    {
      nom: "Enterprise",
      prix: "Sur devis",
      prixSub: "Organisations & grandes équipes",
      cible: "Studio-quality custom",
      features: [
        "Proofreader seats for video translation",
        "Enterprise-grade security & privacy",
        "Team Member MFA",
        "Enterprise Community access",
      ],
    },
  ],
  alternatives: [
    {
      slug: "elevenlabs",
      comment:
        "Si tu veux juste la voix IA sans avatar. Bien moins cher, meilleure qualité FR. Alternative la plus logique pour beaucoup de créateurs.",
    },
    {
      slug: "synthesia",
      comment:
        "Concurrent direct d'HeyGen, plus orienté corporate/formation. Avatars plus \"pro\", moins créatifs. Plans plus chers mais souvent préféré en B2B.",
    },
    {
      slug: "d-id",
      comment:
        "Alternative plus accessible, spécialisée dans l'animation de photos statiques en vidéos parlantes. Rendu plus \"cartoon\" qu'HeyGen.",
    },
  ],
  faq: [
    {
      question: "HeyGen ou ElevenLabs, lequel choisir ?",
      answer: (
        <>
          HeyGen si tu veux un avatar vidéo complet (visage + voix + sync
          labiale). ElevenLabs si tu veux juste la voix IA pour de la voix off
          sur tes propres images. Les deux sont complémentaires, pas
          concurrents. Voir le{" "}
          <Link
            href="/comparatifs/elevenlabs-vs-heygen"
            className="text-cyan-400 hover:underline"
          >
            comparatif direct
          </Link>
          .
        </>
      ),
    },
    {
      question: "Peut-on cloner son propre visage ?",
      answer:
        "Oui, sur les plans Creator+. 2 minutes de vidéo propre suffisent. Vérification d'identité obligatoire pour éviter les deepfakes. Le clonage prend quelques heures côté HeyGen. Résultat généralement très convaincant sur voix et expressions basiques.",
    },
    {
      question: "La sync labiale fonctionne-t-elle bien en français ?",
      answer:
        "Correctement, avec quelques glitches sur les sons nasaux typiques du français (ent, in, on). Sur un œil attentif, la sync reste détectable. Pour une vidéo corporate ou formation, c'est largement acceptable. Pour un rendu premium indiscernable, non.",
    },
    {
      question: "Est-ce légal d'utiliser des avatars IA dans mes vidéos ?",
      answer:
        "Oui, HeyGen respecte les cadres légaux. Pour les avatars pré-conçus, les droits sont couverts. Pour un avatar custom (clonage), tu dois avoir le consentement de la personne (la tienne si c'est toi). Certaines régulations locales (ex : certains pays européens) imposent un disclaimer IA visible sur la vidéo.",
    },
    {
      question: "Les avatars sont-ils vraiment indiscernables de vrais humains ?",
      answer:
        "Non. Les avatars premium sont très convaincants mais un œil attentif repère encore les micro-expressions figées ou la sync labiale légèrement décalée. Au fur et à mesure que le public s'habitue aux avatars IA, la détection devient plus facile. À prendre en compte pour le choix d'usage.",
    },
    {
      question: "Peut-on intégrer HeyGen dans un workflow automatisé ?",
      answer:
        "Oui sur plans Business et Enterprise. API REST documentée, intégrations natives Make et Zapier, auto-reload credits. Permet d'industrialiser la production : chaque nouvelle fiche produit déclenche une vidéo avatar, chaque nouvel article devient une vidéo explicative. Gain de temps considérable à l'échelle.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester HeyGen ?",
    sub: "Le plan gratuit permet de tester la qualité des avatars sur ton script avant de t'engager. Creator à 29 $/mois pour les créateurs solo, Business à 149 $/mois pour les équipes.",
    buttonText: "Essayer HeyGen",
  },
};

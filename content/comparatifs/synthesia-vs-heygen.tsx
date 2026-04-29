import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const synthesiaVsHeygen: ComparatifData = {
  slug: "synthesia-vs-heygen",
  outilAslug: "synthesia",
  outilBslug: "heygen",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Les deux plateformes leaders d'avatars IA vidéo en 2026. Synthesia mise sur le B2B et la conformité, HeyGen mise sur le créateur et la vitesse. La ligne de partage est presque toujours claire.",
    tempsLecture: 6,
    lastCheck: "20/04/2026",
  },
  verdictRapide: {
    headline: "Synthesia pour l'entreprise. HeyGen pour le créateur.",
    paragraphs: [
      <>
        <strong className="text-blue-400">Synthesia</strong>{" "}mise sur le B2B :
        SSO, GDPR, SOC 2, intégrations LMS, support formation.{" "}
        <strong className="text-cyan-400">HeyGen</strong>{" "}mise sur le créateur
        moderne : avatars plus flashy, workflow rapide, prix d&apos;entrée
        accessible, API dès plan Creator.
      </>,
      <>
        Le choix se fait presque sur une seule question : ton usage est-il pro
        corporate ou créateur individuel ? La réponse tranche instantanément.
      </>,
    ],
  },
  criteres: [
    {
      label: "Conformité et sécurité B2B",
      poids: 20,
      scoreA: 9.0,
      scoreB: 7.2,
      gagnant: "A",
    },
    {
      label: "Qualité avatars",
      poids: 20,
      scoreA: 8.5,
      scoreB: 8.8,
      gagnant: "B",
    },
    {
      label: "Clonage facial",
      poids: 15,
      scoreA: 8.0,
      scoreB: 9.2,
      gagnant: "B",
    },
    {
      label: "Rapport qualité/prix",
      poids: 15,
      scoreA: 7.2,
      scoreB: 7.0,
      gagnant: "A",
    },
    {
      label: "Multilingue et doublage",
      poids: 15,
      scoreA: 9.2,
      scoreB: 9.2,
      gagnant: "A",
    },
    {
      label: "Vitesse de workflow",
      poids: 15,
      scoreA: 7.5,
      scoreB: 8.8,
      gagnant: "B",
    },
  ],
  porQuiA: [
    "Tu produis du contenu formation ou communication interne",
    "Tu as besoin de SSO, GDPR, SOC 2 (exigences entreprise)",
    "Tu couvres beaucoup de langues (140+ supportées)",
    "Tu veux intégrer un LMS (Moodle, Docebo, Teachable)",
    "Crédibilité B2B importante pour ta direction juridique",
  ],
  porQuiB: [
    "Tu es créateur solo ou scale-up agile",
    "Tu veux un style d'avatars plus contemporain",
    "Tu clones ton visage pour produire en volume",
    "Tu veux l'API dès le plan Creator HeyGen (à partir de 29 $/mois, USD)",
    "Interactive Avatar pour chatbots vidéo ou démos interactives",
  ],
  casUsage: [
    {
      profil: "Équipe L&D d'un grand groupe international",
      description:
        "Formations pour 10 000+ employés multilingues. Synthesia gère la conformité GDPR, l'intégration LMS, le multilingue massif. Exigences B2B non négociables.",
      gagnant: "A",
    },
    {
      profil: "Créateur solo qui lance une chaîne faceless",
      description:
        "Clone facial rapide, workflow fluide, API dès plan Creator pour automatiser. HeyGen correspond à l'ADN créateur individuel.",
      gagnant: "B",
    },
    {
      profil: "Éditeur SaaS qui fait des tutos produit",
      description:
        "Onboarding client multilingue, intégration avec base de connaissances. Besoins SSO, logs d'audit. Synthesia fait plus pro.",
      gagnant: "A",
    },
    {
      profil: "Agence marketing produisant des pubs personnalisées",
      description:
        "Besoin de produire 50+ variantes vidéo par mois pour campagnes A/B test. API HeyGen + clonage rapide = workflow industriel.",
      gagnant: "B",
    },
    {
      profil: "PME qui crée ses premières vidéos IA",
      description:
        "Usage modéré, besoin de contenu pro, pas d'équipe vidéo. Synthesia offre une barrière d'entrée plus rassurante côté compliance.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Synthesia pour le B2B et la conformité. HeyGen pour le créateur et la
        vitesse. La ligne de partage est claire : pose-toi la question
        &quot;est-ce que j&apos;ai des exigences d&apos;entreprise ?&quot; —
        la réponse tranche.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer Synthesia →",
  },
  faq: [
    {
      question: "Quel est le vrai écart de qualité entre les avatars ?",
      answer:
        "Faible et très contextuel. HeyGen a un léger avantage sur les avatars \"contemporains\" (style social media). Synthesia a un léger avantage sur le rendu corporate (formation, B2B). Dans les deux cas, la qualité est suffisante pour un usage pro.",
    },
    {
      question: "Peut-on migrer de l'un à l'autre facilement ?",
      answer:
        "Les contenus ne sont pas interopérables directement. Tes scripts texte oui, mais pas les projets avatar eux-mêmes. Migration = reconstruire tes vidéos sur l'autre plateforme. Choisir du premier coup économise du temps.",
    },
    {
      question: "Lequel pour une PME française ?",
      answer: (
        <>
          Dépend de l&apos;usage. Si c&apos;est l&apos;équipe formation interne
          ou la com&apos; RH → Synthesia (profil B2B). Si c&apos;est
          l&apos;équipe marketing qui veut produire des vidéos créatives → HeyGen.
          Voir aussi{" "}
          <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
            ElevenLabs
          </Link>{" "}
          si tu veux juste la voix IA.
        </>
      ),
    },
    {
      question: "Programme d'affiliation ?",
      answer:
        "Synthesia offre 25% récurrent via leur programme partenaire (plutôt B2B). HeyGen a un programme affilié équivalent via les plans Creator+. Les deux sont tier 1 côté commissions.",
    },
    {
      question: "Et par rapport à ElevenLabs ?",
      answer: (
        <>
          <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
            ElevenLabs
          </Link>{" "}
          fait la voix seulement. Synthesia et HeyGen ajoutent l&apos;avatar
          vidéo avec sync labiale. Si tu fais du faceless YouTube ou des voix
          off, ElevenLabs suffit et coûte nettement moins cher.
        </>
      ),
    },
  ],
};

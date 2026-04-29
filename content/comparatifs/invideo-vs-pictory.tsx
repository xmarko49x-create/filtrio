import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const invideoVsPictory: ComparatifData = {
  slug: "invideo-vs-pictory",
  outilAslug: "invideo",
  outilBslug: "pictory",
  outilBfallback: {
    name: "Pictory",
    color: "rose",
    score: 7.0,
    tagline: "Article-to-video et webinaires",
    priceFrom: "Plans payants",
    freeTier: "Essai gratuit",
  },
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Le générateur polyvalent (InVideo) contre le spécialiste article-to-video (Pictory). InVideo couvre beaucoup plus de cas. Pictory n'a de sens que sur un workflow précis : articles et webinaires à transformer en vidéos courtes.",
    tempsLecture: 5,
    lastCheck: "22/04/2026",
  },
  verdictRapide: {
    headline: "InVideo prend clairement l'avantage pour la plupart des créateurs.",
    paragraphs: [
      <>
        <strong className="text-fuchsia-400">InVideo</strong>{" "}couvre plus de
        cas d&apos;usage : script-to-video IA, templates sociaux, stock intégré
        massif, voix IA, éditeur web propre.{" "}
        <strong className="text-rose-400">Pictory</strong>{" "}reste pertinent pour
        un usage spécifique (transformer articles de blog et longs webinaires
        en vidéos courtes) mais offre moins de flexibilité, un rendu plus
        générique, et un rapport qualité/prix moins intéressant.
      </>,
      <>
        Pour créateurs, marketeurs, formateurs et agences, InVideo est
        l&apos;option la plus logique. Pictory n&apos;a du sens que si ton
        workflow principal est &quot;article → vidéo résumé&quot; ou
        &quot;webinaire → highlights&quot;.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité en français",
      poids: 20,
      scoreA: 7.5,
      scoreB: 6.8,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 8.0,
      scoreB: 6.8,
      gagnant: "A",
    },
    {
      label: "Profondeur IA",
      poids: 20,
      scoreA: 8.2,
      scoreB: 7.2,
      gagnant: "A",
    },
    {
      label: "Interface & prise en main",
      poids: 15,
      scoreA: 7.2,
      scoreB: 8.0,
      gagnant: "B",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      scoreA: 7.2,
      scoreB: 6.5,
      gagnant: "A",
    },
    {
      label: "Intégrations",
      poids: 10,
      scoreA: 7.5,
      scoreB: 6.8,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu fais du contenu social, marketing ET formation",
    "Tu veux partir d'un prompt ou d'un script et produire vite",
    "Tu as besoin de templates sociaux (Shorts, Reels, TikTok)",
    "Tu préfères un éditeur web avec timeline flexible",
    "Tu veux stock vidéo + voix IA intégrés",
  ],
  porQuiB: [
    "Ton workflow principal = article de blog → vidéo résumé",
    "Tu publies beaucoup de webinaires ou longues conférences",
    "Tu veux extraire automatiquement des highlights de longues vidéos",
    "Tu cherches une interface minimaliste, pas une timeline complète",
    "Tu es marketeur SaaS B2B avec beaucoup de contenu écrit",
  ],
  casUsage: [
    {
      profil: "Créateur social qui produit en série",
      description:
        "Shorts, Reels, TikTok en volume avec voix IA et templates prêts. InVideo couvre ce besoin mieux avec sa bibliothèque de templates sociaux et son stock intégré.",
      gagnant: "A",
    },
    {
      profil: "Marketeur de contenu avec un blog actif",
      description:
        "Tu veux transformer chaque article en vidéo YouTube ou LinkedIn. Pictory est né pour ce cas précis : il extrait les idées clés et assemble automatiquement.",
      gagnant: "B",
    },
    {
      profil: "Formateur en ligne qui crée des modules pédagogiques",
      description:
        "Script → vidéo explicative avec stock + voix + animations. InVideo offre plus de contrôle éditorial et un rendu moins générique pour ce type de contenu.",
      gagnant: "A",
    },
    {
      profil: "Organisateur de webinaires longs à recycler",
      description:
        "1h de webinaire à transformer en 5-10 clips courts pour social. Pictory est pensé pour ce workflow long-form-to-shorts avec transcription et sélection auto.",
      gagnant: "B",
    },
    {
      profil: "Agence digitale qui livre plusieurs clients",
      description:
        "Besoin de flexibilité, timeline, gestion de brand kits. InVideo offre plus de contrôle créatif et des plans équipe plus mûrs pour ce type d'usage multi-clients.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        InVideo est l&apos;option la plus polyvalente pour la grande majorité
        des créateurs, marketeurs et formateurs. Pictory reste pertinent sur un
        cas d&apos;usage précis : transformer articles et webinaires en vidéos
        automatiquement. Pour tout le reste, InVideo devient l&apos;option la
        plus logique.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer InVideo →",
  },
  faq: [
    {
      question: "Quel est le vrai positionnement de chacun ?",
      answer:
        "InVideo = éditeur vidéo IA généraliste avec un moteur script-to-video et une forte bibliothèque de templates sociaux. Pictory = automatisation articles/webinaires vers vidéos courtes. InVideo sert plus de besoins, Pictory est plus spécialisé sur un workflow précis.",
    },
    {
      question: "Le français fonctionne-t-il correctement sur les deux ?",
      answer:
        "Les deux acceptent le français en entrée et en voix IA. InVideo a généralement un rendu plus naturel en voix FR et accepte mieux les prompts en français. Pictory fonctionne mais reste plus à l'aise en anglais, notamment pour l'extraction d'idées clés d'articles.",
    },
    {
      question: "Lequel offre le meilleur rapport qualité/prix ?",
      answer:
        "InVideo est devenu plus généraliste avec son modèle à crédits (point d'entrée à 17 $/mois en annuel sur le plan En plus, jusqu'à 900 $/mois pour Élite). Pictory garde un positionnement plus étroit mais plus prévisible sur le forfait mensuel. Le choix dépend surtout de la prévisibilité recherchée : InVideo sur usage en volume, Pictory sur forfait simple.",
    },
    {
      question: "Peut-on les combiner dans un workflow ?",
      answer:
        "Oui mais rare. Certains utilisent Pictory pour extraire rapidement des highlights depuis de longs webinaires puis passent dans InVideo (ou un autre éditeur) pour le montage final. La plupart choisissent un outil principal selon leur besoin dominant.",
    },
    {
      question: "Et par rapport à OpusClip ou Submagic ?",
      answer: (
        <>
          InVideo et Pictory sont des générateurs (créer depuis un script/article).{" "}
          <Link
            href="/comparatifs/opusclip-vs-submagic"
            className="text-emerald-400 hover:underline"
          >
            OpusClip
          </Link>{" "}
          découpe des vidéos longues existantes en shorts.{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          ajoute des sous-titres viraux. Ce ne sont pas les mêmes besoins.
        </>
      ),
    },
  ],
};

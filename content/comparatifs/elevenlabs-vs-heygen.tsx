import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const elevenlabsVsHeygen: ComparatifData = {
  slug: "elevenlabs-vs-heygen",
  outilAslug: "elevenlabs",
  outilBslug: "heygen",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Deux outils souvent comparés mais qui répondent à des besoins différents. ElevenLabs est une voix IA pure, HeyGen produit des avatars vidéo complets. Pas vraiment des concurrents frontaux, mais ils sont régulièrement mis en balance. Voici comment trancher selon ton profil.",
    tempsLecture: 6,
    lastCheck: "22/04/2026",
  },
  verdictRapide: {
    headline:
      "ElevenLabs pour la voix. HeyGen pour la vidéo avec avatar. Ce ne sont pas vraiment des rivaux.",
    paragraphs: [
      <>
        <strong className="text-teal-400">ElevenLabs</strong> fait une chose
        avec excellence : générer de la voix IA ultra-naturelle, en
        particulier en français.{" "}
        <strong className="text-cyan-400">HeyGen</strong> fait autre chose :
        générer des vidéos complètes avec un avatar qui parle, avec sync
        labiale. Tu choisis selon ton format de sortie : voix seule ou vidéo
        avec visage.
      </>,
      <>
        Beaucoup d&apos;utilisateurs les comparent parce qu&apos;ils couvrent
        tous les deux &quot;le parlé IA&quot;, mais le choix se fait sur la
        question : ai-je besoin d&apos;un visage à l&apos;écran ou non ?
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité en français",
      poids: 20,
      scoreA: 9.0,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 7.5,
      scoreB: 7.0,
      gagnant: "A",
    },
    {
      label: "Profondeur IA",
      poids: 20,
      scoreA: 9.5,
      scoreB: 9.0,
      gagnant: "A",
    },
    {
      label: "Avatar vidéo complet",
      poids: 15,
      scoreA: 3.0,
      scoreB: 9.3,
      gagnant: "B",
    },
    {
      label: "Support multilingue et doublage",
      poids: 15,
      scoreA: 8.5,
      scoreB: 9.2,
      gagnant: "B",
    },
    {
      label: "API et intégrations",
      poids: 10,
      scoreA: 9.0,
      scoreB: 8.5,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu veux juste de la voix off, sans visage à l'écran",
    "Tu produis des chaînes YouTube faceless, des audiobooks, des podcasts narrés",
    "Tu veux cloner ta voix pour gagner du temps",
    "La qualité vocale en français est critique",
    "Tu as un budget limité (Starter à 6 $/mois)",
  ],
  porQuiB: [
    "Tu veux produire du contenu vidéo avec un visage sans filmer",
    "Tu dois décliner des vidéos marketing dans plusieurs langues",
    "Tu fais de la formation, du corporate, du B2B",
    "Tu veux cloner ton visage pour scaler ta production vidéo",
    "Tu as un budget 29 $/mois minimum (ou 24 $/mois en annuel, plan Creator)",
  ],
  casUsage: [
    {
      profil: "YouTubeur faceless qui narre des vidéos éducatives",
      description:
        "Pas de visage nécessaire, juste une voix de qualité. ElevenLabs est l'option évidente, avec le meilleur rendu FR.",
      gagnant: "A",
    },
    {
      profil: "Équipe marketing qui veut une pub multilingue avec porte-parole",
      description:
        "Besoin d'un visage qui parle, déclinaison dans 5-10 langues avec sync labiale adaptée à chaque langue. HeyGen est taillé pour ça.",
      gagnant: "B",
    },
    {
      profil: "Auteur qui produit des audiobooks",
      description:
        "Long format narré sans vidéo. ElevenLabs pour la qualité vocale FR et le modèle au caractère plus adapté au volume texte.",
      gagnant: "A",
    },
    {
      profil: "Formateur qui scale sa production de tutos vidéo",
      description:
        "Cloner son visage + générer plusieurs tutos par mois sans se filmer à chaque fois. HeyGen est la solution la plus directe.",
      gagnant: "B",
    },
    {
      profil: "Créateur avancé qui veut le meilleur des deux",
      description:
        "Voix ElevenLabs importée dans HeyGen pour un avatar avec voix ultra-naturelle. Workflow pro mais coûteux — pertinent pour du contenu premium.",
      gagnant: "B",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        ElevenLabs pour la voix seule (moins cher, meilleure qualité FR).
        HeyGen pour la vidéo avec avatar (plus cher, mais couvre un besoin
        qu&apos;ElevenLabs ne couvre pas). Le bon choix dépend de ton format
        de contenu. Workflow avancé combiné : voix{" "}
        <strong className="text-teal-400">ElevenLabs</strong> importée dans{" "}
        <strong className="text-cyan-400">HeyGen</strong> pour un rendu
        maximal.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer ElevenLabs →",
  },
  faq: [
    {
      question: "Peut-on utiliser les deux ensemble ?",
      answer: (
        <>
          Oui, et c&apos;est un workflow pratiqué par les créateurs avancés.
          Tu génères la voix avec{" "}
          <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
            ElevenLabs
          </Link>{" "}
          (qualité FR supérieure), tu importes le fichier audio dans{" "}
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          qui anime l&apos;avatar en sync labiale avec cette voix. Résultat :
          avatar vidéo avec voix au rendu maximal. Coût combiné : environ
          34-58 $/mois selon les plans retenus.
        </>
      ),
    },
    {
      question: "Pour une chaîne YouTube faceless, lequel prendre ?",
      answer: (
        <>
          <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
            ElevenLabs
          </Link>{" "}
          dans la majorité des cas. Une chaîne faceless repose sur la voix et
          les visuels d&apos;illustration. Pas besoin d&apos;avatar. Tu
          combineras ElevenLabs avec un éditeur vidéo (
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>
          ,{" "}
          <Link href="/outils/davinci" className="text-red-400 hover:underline">
            DaVinci
          </Link>
          , Premiere) pour monter la vidéo finale. Beaucoup moins cher
          qu&apos;HeyGen et rendu FR supérieur.
        </>
      ),
    },
    {
      question: "HeyGen remplace-t-il un tournage réel ?",
      answer:
        "Pour du contenu marketing, formation, B2B : souvent oui. Le rendu est suffisamment pro pour être diffusé. Pour du contenu authentique (vlog, témoignage, présence scène), pas encore. Les audiences détectent de plus en plus facilement les avatars IA et peuvent se désengager. C'est un outil complémentaire plus qu'un remplacement universel.",
    },
    {
      question: "La qualité FR d'ElevenLabs est-elle vraiment supérieure ?",
      answer:
        "Selon les retours publics et les comparaisons disponibles en ligne (Reddit, démos YouTube), oui — sur la naturalité du phrasé, la gestion des liaisons, l'intonation. HeyGen est correct pour du contenu corporate mais moins convaincant pour du narratif long. Le critère est audible pour une oreille francophone exigeante.",
    },
    {
      question: "Quel modèle économique choisir : crédits ou minutes ?",
      answer: (
        <>
          <Link href="/outils/elevenlabs" className="text-teal-400 hover:underline">
            ElevenLabs
          </Link>{" "}
          facture au crédit (10k crédits/mois en Free, 30k en Starter à 6 $/mois,
          121k en Creator à 22 $/mois). Un crédit correspond à une génération
          dont le coût varie selon le modèle utilisé.{" "}
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          facture au temps de vidéo (Creator 30 min/mois à 29 $/mo mensuel ou
          24 $/mo annuel). Pour un volume régulier de vidéos courtes avec
          avatar, HeyGen peut être plus avantageux. Pour du long narré en voix
          pure, ElevenLabs reste plus efficient. Fais le calcul sur ton volume
          réel avant de choisir.
        </>
      ),
    },
  ],
};

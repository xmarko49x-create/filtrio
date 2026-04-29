import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const runwayVsPika: ComparatifData = {
  slug: "runway-vs-pika",
  outilAslug: "runway",
  outilBslug: "pika",
  outilBfallback: {
    name: "Pika",
    color: "rose",
    score: 7.5,
    tagline: "Génération vidéo IA accessible",
    priceFrom: "Plans payants",
    freeTier: "Plan gratuit disponible",
  },
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Les deux outils de génération vidéo IA les plus cités en 2026. Runway joue la carte qualité pro + écosystème VFX. Pika joue l'accessibilité et la rapidité. Voici lequel correspond à ton profil créatif.",
    tempsLecture: 5,
    lastCheck: "20/04/2026",
  },
  verdictRapide: {
    headline: "Runway pour la qualité pro. Pika pour l'accessibilité.",
    paragraphs: [
      <>
        <strong className="text-purple-400">Runway</strong>{" "}reste la référence
        du marché avec Gen-4 et Gen-4.5, Aleph, Acte-Deux, l&apos;écosystème
        VFX le plus complet (inpainting, tracking, green screen IA) et
        l&apos;intégration des modèles tiers majeurs (Veo 3.1, Sora, Kling
        3.0 Pro). Crédibilité studio.{" "}
        <strong className="text-rose-400">Pika</strong>{" "}est plus abordable,
        plus simple à prendre en main, mais propose une qualité qui progresse
        rapidement sans atteindre le niveau Runway.
      </>,
      <>
        Pour un créateur visuel sérieux, Runway. Pour explorer la génération
        vidéo IA sans engagement fort, Pika est un bon point d&apos;entrée.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité de génération",
      poids: 25,
      scoreA: 9.5,
      scoreB: 8.0,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 7.5,
      scoreB: 8.5,
      gagnant: "B",
    },
    {
      label: "Écosystème VFX",
      poids: 20,
      scoreA: 9.2,
      scoreB: 6.5,
      gagnant: "A",
    },
    {
      label: "Prise en main",
      poids: 15,
      scoreA: 7.8,
      scoreB: 9.0,
      gagnant: "B",
    },
    {
      label: "Communauté et tutos",
      poids: 10,
      scoreA: 8.8,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "API & intégrations",
      poids: 10,
      scoreA: 8.2,
      scoreB: 6.2,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu es motion designer ou filmmaker pro",
    "Tu cherches la qualité maximale disponible en 2026",
    "Tu utilises les features VFX (inpainting, tracking, green screen)",
    "Ton contenu est premium (pub, clip, documentaire)",
    "Tu veux l'API pour automatiser un studio",
  ],
  porQuiB: [
    "Tu débutes en génération vidéo IA",
    "Tu veux expérimenter sans budget élevé",
    "Tu as besoin de rendu rapide plutôt que parfait",
    "Tu crées du contenu social media expérimental",
    "Tu n'as pas besoin d'écosystème VFX complet",
  ],
  casUsage: [
    {
      profil: "Motion designer pro",
      description:
        "Besoin de qualité cohérente, écosystème VFX complet, clients pros. Runway reste la référence pour cette maturité.",
      gagnant: "A",
    },
    {
      profil: "Créateur qui découvre la génération vidéo IA",
      description:
        "Pas besoin de la qualité Gen-4.5 pour débuter. Pika est plus accessible, moins cher, bonne courbe d'apprentissage.",
      gagnant: "B",
    },
    {
      profil: "Filmmaker indépendant qui ajoute des VFX",
      description:
        "Extension de décor, remplacement d'objets, effets atmosphériques. Runway démocratise l'accès aux VFX pros.",
      gagnant: "A",
    },
    {
      profil: "Créateur social media qui veut expérimenter",
      description:
        "Besoin de rendre des concepts rapidement pour TikTok/Reels. Pika permet de tester vite sans exploser le budget.",
      gagnant: "B",
    },
    {
      profil: "Agence publicitaire premium",
      description:
        "Production de maquettes et concepts pour pitches clients. Runway couvre la qualité attendue côté client + API pour industrialiser.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Runway reste la référence qualité + VFX pro. Pika est le meilleur point
        d&apos;entrée accessible. Pour un créateur sérieux, Runway. Pour
        explorer, Pika. La différence de qualité se resserre mois après mois.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer Runway →",
  },
  faq: [
    {
      question: "Quelle différence de qualité entre les deux en 2026 ?",
      answer:
        "Runway Gen-4.5 et Gen-4 restent mesurablement supérieurs sur le réalisme, la cohérence temporelle et la qualité visuelle globale. Pika a fait d'énormes progrès en 2025-2026 mais garde un léger retard technique. L'écart se réduit progressivement.",
    },
    {
      question: "Peut-on mélanger les deux dans un workflow ?",
      answer:
        "Oui, certains créateurs pros font du \"brainstorming\" avec Pika (moins cher par génération) puis basculent vers Runway pour les rendus finaux. Workflow économique mais rare : la plupart choisissent un des deux selon leur niveau.",
    },
    {
      question: "Longueur maximale des vidéos générées ?",
      answer:
        "Quelques secondes par génération avec Gen-4 et Gen-4.5 de Runway, 3 à 5 secondes pour Pika selon la version. Limitation inhérente aux modèles de génération vidéo IA actuels. Pour des vidéos plus longues, il faut enchaîner plusieurs générations.",
    },
    {
      question: "Lequel est le plus utilisé par les pros ?",
      answer:
        "Runway largement. C'est l'outil utilisé par les studios Hollywood, les agences pubs premium, les filmmakers établis. Pika est plus présent chez les créateurs débutants et les amateurs de génération vidéo IA.",
    },
    {
      question: "Prompts en français fonctionnent-ils ?",
      answer:
        "Les deux acceptent les prompts en français mais les résultats sont meilleurs en anglais. Modèles entraînés principalement sur des prompts EN. Pour la qualité maximale, formuler les prompts en anglais même en étant français.",
    },
  ],
};

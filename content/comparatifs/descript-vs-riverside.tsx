import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const descriptVsRiverside: ComparatifData = {
  slug: "descript-vs-riverside",
  outilAslug: "descript",
  outilBslug: "riverside",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Les deux outils phares du podcast pro en 2026. Approches opposées : Descript excelle en post-production avec son édition textuelle, Riverside domine l'enregistrement à distance en qualité studio. Voici comment choisir selon ton workflow.",
    tempsLecture: 6,
    lastCheck: "22/04/2026",
  },
  verdictRapide: {
    headline:
      "Descript pour éditer. Riverside pour enregistrer. Beaucoup de pros utilisent les deux.",
    paragraphs: [
      <>
        <strong className="text-violet-400">Descript</strong> est imbattable en
        post-production avec son édition textuelle unique.{" "}
        <strong className="text-indigo-400">Riverside</strong> est imbattable
        en enregistrement à distance avec sa qualité locale séparée par
        intervenant. Depuis le rachat de Squadcast par Descript en 2023, les
        deux se chevauchent davantage, mais chacun garde son territoire de
        domination.
      </>,
      <>
        Le workflow le plus courant des podcasteurs pros en 2026 : enregistrer
        avec Riverside, puis éditer avec Descript. Pas vraiment des
        concurrents, plutôt deux étapes complémentaires du même métier.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité d'enregistrement à distance",
      poids: 20,
      scoreA: 8.0,
      scoreB: 9.5,
      gagnant: "B",
    },
    {
      label: "Édition post-production",
      poids: 20,
      scoreA: 9.5,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "Qualité en français",
      poids: 15,
      scoreA: 7.8,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 15,
      scoreA: 8.8,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "Fonctionnalités IA",
      poids: 15,
      scoreA: 9.0,
      scoreB: 8.5,
      gagnant: "A",
    },
    {
      label: "Multi-intervenants",
      poids: 15,
      scoreA: 7.5,
      scoreB: 9.2,
      gagnant: "B",
    },
  ],
  porQuiA: [
    "Tu passes plus de temps à monter qu'à enregistrer",
    "Tu veux supprimer automatiquement les hésitations, silences, répétitions",
    "Tu cherches l'édition textuelle (unique sur le marché)",
    "Tu veux Studio Sound pour nettoyer des audios médiocres",
    "Tu enregistres souvent solo ou tu as déjà un outil d'enregistrement",
  ],
  porQuiB: [
    "Tu reçois des invités à distance régulièrement",
    "La qualité audio/vidéo des invités compte autant que la tienne",
    "Tu veux enregistrer jusqu'à 8 participants simultanément",
    "Tu veux enregistrer en 4K pour du contenu vidéo premium",
    "Tu fais peu de post-prod fine (édition légère en timeline suffit)",
  ],
  casUsage: [
    {
      profil: "Podcasteur qui reçoit des invités hebdomadaires",
      description:
        "L'enregistrement pro est le goulot d'étranglement. Riverside garantit la qualité de chaque intervenant, quelle que soit leur connexion.",
      gagnant: "B",
    },
    {
      profil: "YouTubeur long format qui édite beaucoup",
      description:
        "Vidéos 20-45 min avec beaucoup de coupes, nettoyage des hésitations, ajustements. Descript fait gagner des heures par vidéo.",
      gagnant: "A",
    },
    {
      profil: "Podcasteur pro avec invités + montage léché",
      description:
        "Tu veux les deux : qualité enregistrement maximale + post-prod textuelle. Le combo des deux outils est standard chez les pros.",
      gagnant: "B",
    },
    {
      profil: "Formateur solo qui enregistre des tutos",
      description:
        "Enregistrement seul, besoin de montage rapide et nettoyage audio. Pas besoin des features multi-invités de Riverside.",
      gagnant: "A",
    },
    {
      profil: "Média qui fait des interviews vidéo 4K",
      description:
        "Qualité vidéo premium sur les deux intervenants, diffusion pro attendue. Riverside garde l'avantage sur le 4K multi-cam.",
      gagnant: "B",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Descript si tu passes plus de temps à éditer qu&apos;à enregistrer.
        Riverside si tu reçois des invités à distance régulièrement. Beaucoup
        de podcasteurs pros utilisent les deux en complément :{" "}
        <strong className="text-indigo-400">Riverside</strong> pour la capture,{" "}
        <strong className="text-violet-400">Descript</strong> pour le montage.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer Descript →",
  },
  faq: [
    {
      question:
        "Peut-on vraiment se passer de Riverside en utilisant Descript + Squadcast ?",
      answer: (
        <>
          Pour un usage basique à modéré, oui.{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          a intégré Squadcast en 2023 et propose un enregistrement à distance
          correct. Pour un usage pro intensif (4K, multi-intervenants, producer
          mode),{" "}
          <Link href="/outils/riverside" className="text-indigo-400 hover:underline">
            Riverside
          </Link>{" "}
          reste plus mature. Les retours publics récents montrent un écart de
          qualité mesurable en faveur de Riverside sur les sessions complexes.
        </>
      ),
    },
    {
      question: "Quel workflow pour un podcast pro solo + invités ?",
      answer:
        "Le combo le plus courant : enregistrement sur Riverside (qualité des intervenants), puis export vers Descript pour l'édition textuelle, le nettoyage Studio Sound, les corrections Overdub. Enfin export vers plateformes podcast (Spotify, Apple) directement depuis Descript. Temps de post-prod divisé par 3 à 5 par rapport à un workflow timeline classique selon les retours publics.",
    },
    {
      question: "Pour un débutant, lequel commencer ?",
      answer:
        "Dépend de ton premier bloqueur. Si tu as du mal à bien enregistrer tes invités (son qui saute, vidéo floue), commence par Riverside. Si tu as du mal à monter proprement et à supprimer les défauts, commence par Descript. Les deux plans gratuits permettent de tester sérieusement pendant plusieurs semaines avant de choisir.",
    },
    {
      question: "Riverside ou Zencastr, quelle différence ?",
      answer:
        "Zencastr est une alternative historique avec une approche similaire. Riverside a plus de features pro (4K, Producer mode, Media Board) et une meilleure qualité vidéo. Pour du podcast audio pur avec budget serré, Zencastr peut suffire. Pour de la vidéo pro ou des sessions multi-invités complexes, Riverside est plus adapté.",
    },
    {
      question: "Le combo des deux outils coûte-t-il vraiment cher ?",
      answer:
        "Descript à partir de 16 $/mois (Hobbyist annuel) et Riverside à partir de 24 $/mois sur les plans payants les plus abordables. Le combo ressort donc autour de 40 $/mois en entrée de gamme. Pour un podcast professionnel hebdomadaire, c'est un coût de production raisonnable par rapport au temps gagné en post-prod.",
    },
  ],
};

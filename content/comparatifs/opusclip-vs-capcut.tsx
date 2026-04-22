import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const opusclipVsCapcut: ComparatifData = {
  slug: "opusclip-vs-capcut",
  outilAslug: "opusclip",
  outilBslug: "capcut",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Le spécialiste découpe IA (OpusClip) contre l'éditeur gratuit leader (CapCut). Deux philosophies opposées : automatisation premium vs éditeur manuel polyvalent. Voici laquelle convient à ton profil.",
    tempsLecture: 5,
    lastCheck: "20/04/2026",
  },
  verdictRapide: {
    headline: "OpusClip pour l'automatisation. CapCut pour la gratuité complète.",
    paragraphs: [
      <>
        <strong className="text-emerald-400">OpusClip</strong> excelle sur un
        cas précis : prendre une vidéo longue et en sortir 5-15 shorts prêts à
        publier, automatiquement.{" "}
        <strong className="text-sky-400">CapCut</strong> est un éditeur complet
        gratuit qui peut aussi découper, mais manuellement. Deux outils, deux
        problèmes.
      </>,
      <>
        Si ton goulot = la découpe de long format, prends OpusClip. Si tu veux
        un éditeur global gratuit, prends CapCut. Beaucoup de créateurs
        combinent les deux : OpusClip pour extraire les shorts, CapCut pour les
        retoucher.
      </>,
    ],
  },
  criteres: [
    {
      label: "Découpe IA automatique",
      poids: 25,
      scoreA: 9.4,
      scoreB: 5.5,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 8.5,
      scoreB: 9.8,
      gagnant: "B",
    },
    {
      label: "Polyvalence éditeur",
      poids: 15,
      scoreA: 6.5,
      scoreB: 9.0,
      gagnant: "B",
    },
    {
      label: "Sous-titres auto FR",
      poids: 15,
      scoreA: 8.0,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "Prise en main",
      poids: 15,
      scoreA: 8.8,
      scoreB: 8.5,
      gagnant: "A",
    },
    {
      label: "Intégration workflow créateur",
      poids: 10,
      scoreA: 8.5,
      scoreB: 8.0,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu as beaucoup de long format à recycler en shorts",
    "Tu fais du podcast, du live ou du webinaire régulier",
    "Tu veux automatiser l'extraction des moments forts",
    "Tu as un budget à partir de 15 $/mois à allouer",
    "Tu crées en anglais ou multilingue (OpusClip est fort en EN)",
  ],
  porQuiB: [
    "Tu tournes directement du contenu court",
    "Tu as un budget strict de zéro",
    "Tu veux un éditeur vidéo complet pour plein de choses",
    "Tu es mobile-first (app TikTokeur)",
    "Tu débutes et veux tester sans t'engager",
  ],
  casUsage: [
    {
      profil: "Podcasteur qui veut transformer 1h en 10 shorts",
      description:
        "OpusClip analyse toute la vidéo, détecte les moments forts, génère les clips prêts à publier. CapCut demanderait 2-3h de découpe manuelle.",
      gagnant: "A",
    },
    {
      profil: "TikTokeur qui tourne tout en vertical directement",
      description:
        "Pas de besoin de découpe auto. CapCut est le meilleur éditeur vidéo gratuit du marché pour ce cas. OpusClip serait du gaspillage.",
      gagnant: "B",
    },
    {
      profil: "YouTubeur long format qui fait 4 vidéos/mois",
      description:
        "Workflow optimal : OpusClip pour sortir des shorts à partir des vidéos longues. À partir de 15 $/mois sur les plans payants, rentabilisé dès qu'on produit plusieurs shorts par mois.",
      gagnant: "A",
    },
    {
      profil: "Étudiant ou créateur débutant sans budget",
      description:
        "CapCut gratuit, complet, pas d'engagement. Ideal pour apprendre le montage et publier. OpusClip viendra plus tard si le volume augmente.",
      gagnant: "B",
    },
    {
      profil: "Agence social media qui gère plusieurs clients",
      description:
        "L'API OpusClip permet d'industrialiser. CapCut reste en accompagnement pour retouches manuelles. Combo gagnant à l'échelle.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        OpusClip si tu veux automatiser la découpe de long format. CapCut si tu
        veux un éditeur gratuit complet. Les deux sont complémentaires pour un
        créateur sérieux. Ne les oppose pas, combine-les.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer OpusClip →",
  },
  faq: [
    {
      question: "OpusClip vaut-il son abonnement vs CapCut gratuit ?",
      answer:
        "Si tu fais régulièrement du long format à découper, oui, largement. Une vidéo d'1h que tu découpes à la main dans CapCut demande plusieurs heures de travail. OpusClip fait la même chose en une fraction du temps. L'abonnement se rentabilise rapidement dès qu'on produit plusieurs shorts par mois.",
    },
    {
      question: "Peut-on utiliser les deux ensemble ?",
      answer:
        "Oui, combo fréquent. OpusClip génère les clips bruts, tu les exportes, tu affines dans CapCut (ajout musique, transitions, effets) avant publication. Maximum de vitesse + maximum de contrôle final.",
    },
    {
      question: "Sous-titres FR : OpusClip ou CapCut ?",
      answer: (
        <>
          Match serré, léger avantage à OpusClip. Mais pour un rendu viral FR
          premium, la meilleure option reste{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          . Workflow pro : OpusClip pour découper, Submagic pour sous-titrer
          stylé.
        </>
      ),
    },
    {
      question: "CapCut a-t-il une découpe IA ?",
      answer:
        "Depuis 2024-2026, CapCut a ajouté quelques features IA basiques (suppression silences, suggestions). Mais c'est encore loin du niveau de spécialisation d'OpusClip. Si la découpe auto est ton besoin principal, OpusClip reste nettement devant.",
    },
    {
      question: "Et par rapport à Submagic ?",
      answer: (
        <>
          OpusClip et{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          sont complémentaires. OpusClip découpe, Submagic soigne le rendu
          final viral FR. CapCut reste dans sa lane d&apos;éditeur généraliste
          gratuit. Voir aussi{" "}
          <Link
            href="/comparatifs/opusclip-vs-submagic"
            className="text-emerald-400 hover:underline"
          >
            OpusClip vs Submagic
          </Link>
          .
        </>
      ),
    },
  ],
};

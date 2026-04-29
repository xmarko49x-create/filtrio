import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const submagicVsDescript: ComparatifData = {
  slug: "submagic-vs-descript",
  outilAslug: "submagic",
  outilBslug: "descript",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Deux outils puissants, deux philosophies opposées. Submagic pense shorts viraux avec sous-titres léchés. Descript pense édition textuelle profonde du long format. Le bon choix dépend entièrement de ton format.",
    tempsLecture: 6,
    lastCheck: "22/04/2026",
  },
  verdictRapide: {
    headline:
      "Submagic gagne pour les shorts. Descript gagne pour le long format.",
    paragraphs: [
      <>
        <strong className="text-amber-400">Submagic</strong>{" "}est l&apos;option
        la plus spécialisée pour produire rapidement des shorts TikTok / Reels /
        Shorts avec sous-titres stylés en français.{" "}
        <strong className="text-violet-400">Descript</strong>{" "}est l&apos;option
        la plus complète pour éditer un podcast, une interview ou une longue
        vidéo YouTube : édition textuelle, Studio Sound, suppression
        automatique des hésitations.
      </>,
      <>
        Ce ne sont pas des concurrents frontaux. Choisis selon ton format
        dominant : shorts viraux = Submagic ; long format = Descript. Certains
        créateurs utilisent les deux pour couvrir les deux besoins.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité en français",
      poids: 20,
      scoreA: 9.2,
      scoreB: 7.8,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 7.8,
      scoreB: 8.8,
      gagnant: "B",
    },
    {
      label: "Profondeur IA",
      poids: 20,
      scoreA: 8.2,
      scoreB: 9.0,
      gagnant: "B",
    },
    {
      label: "Interface & prise en main",
      poids: 15,
      scoreA: 9.3,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "Édition audio et long format",
      poids: 15,
      scoreA: 4.5,
      scoreB: 9.5,
      gagnant: "B",
    },
    {
      label: "Intégrations",
      poids: 10,
      scoreA: 6.5,
      scoreB: 8.2,
      gagnant: "B",
    },
  ],
  porQuiA: [
    "Ton format principal est le short (TikTok, Reels, YouTube Shorts)",
    "Tu vises un public FR (précision FR mieux travaillée)",
    "Tu veux des styles de sous-titres animés prêts sans effort",
    "Tes sources sont courtes (moins de 15 min)",
    "Tu ne veux pas apprendre un outil complexe",
  ],
  porQuiB: [
    "Tu fais du podcast, de l'interview ou du long format (20 min+)",
    "Tu veux supprimer automatiquement les hésitations et les silences",
    "Tu veux éditer ta vidéo comme un document texte",
    "Tu as besoin de Studio Sound (nettoyage audio pro)",
    "Tu veux accéder à un plan gratuit pour tester",
  ],
  casUsage: [
    {
      profil: "TikTokeur ou créateur Shorts FR",
      description:
        "Priorité à la qualité visuelle des sous-titres FR et à la rapidité de production. Descript est surdimensionné pour ce besoin.",
      gagnant: "A",
    },
    {
      profil: "Podcasteur vidéo qui édite des épisodes d'1h+",
      description:
        "Tu as besoin de supprimer les silences, nettoyer l'audio, corriger des hésitations. Le modèle d'édition textuelle de Descript est taillé pour ça.",
      gagnant: "B",
    },
    {
      profil: "YouTubeur qui publie long format ET shorts dérivés",
      description:
        "Besoin des deux univers : édition propre du long format + shorts finalisés. Beaucoup d'utilisateurs avancés combinent les deux outils.",
      gagnant: "B",
    },
    {
      profil: "Formateur ou entreprise qui produit des tutos",
      description:
        "Besoin de qualité audio pro, d'édition textuelle, de Studio Sound. Le rendu formation n'a pas besoin des sous-titres animés de Submagic.",
      gagnant: "B",
    },
    {
      profil: "Solopreneur personal branding (LinkedIn, Shorts)",
      description:
        "Enregistrements courts face caméra, besoin de sortir du contenu régulier et léché sans passer 1h par vidéo.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Submagic si ton format principal est le short. Descript si ton format
        principal est le long (podcast, tuto, interview). Ils ne sont pas en
        concurrence frontale. Pour qui fait les deux, le combo{" "}
        <strong className="text-slate-200">Descript + Submagic</strong>{" "}est
        courant chez les YouTubeurs et podcasteurs qui veulent aussi alimenter
        leurs shorts.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer Submagic →",
  },
  faq: [
    {
      question: "Descript peut-il aussi faire des shorts viraux ?",
      answer: (
        <>
          Techniquement oui,{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          propose une fonction Clips qui permet de générer des extraits courts
          avec sous-titres. Mais les styles sont plus sobres que{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          et demandent plus d&apos;étapes de personnalisation. Si les shorts
          sont ta priorité, Submagic reste plus efficace. Si tu fais
          occasionnellement des shorts à partir de long-format déjà édité,
          Descript seul peut suffire.
        </>
      ),
    },
    {
      question: "Submagic peut-il gérer un podcast d'1 heure ?",
      answer: (
        <>
          Submagic plafonne par vidéo selon le plan : 2 min en Starter, 5 min
          en Pro, 30 min en Business + API. Pour un podcast d&apos;1h, il faut
          le scinder en blocs avant upload ou passer à Business + API. Ce
          n&apos;est pas l&apos;usage principal de l&apos;outil.{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          (ou{" "}
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>{" "}
          pour le découpage auto) sont beaucoup plus adaptés à ce cas.
        </>
      ),
    },
    {
      question: "Descript est-il bon en français ?",
      answer:
        "Descript supporte la transcription en 25+ langues dont le français. La qualité FR est correcte mais l'outil est pensé pour le marché anglophone d'abord. Plus de correction à prévoir que sur un outil FR natif. Pour un usage pro en français, prévois du temps de relecture.",
    },
    {
      question: "Comment fonctionne concrètement l'édition textuelle de Descript ?",
      answer:
        "Tu uploades ta vidéo, Descript génère automatiquement une transcription. Tu édites cette transcription comme un document texte : tu supprimes une phrase, la vidéo correspondante est retirée. Tu remplaces un mot, Overdub peut cloner ta voix pour le dire. Tu coupes les silences en un clic. C'est l'un des modèles d'édition les plus rapides pour le long format parlé.",
    },
    {
      question: "Y a-t-il d'autres alternatives sérieuses pour le long format ?",
      answer: (
        <>
          <Link href="/outils/riverside" className="text-indigo-400 hover:underline">
            Riverside
          </Link>{" "}
          est un concurrent direct de Descript, plus orienté enregistrement à
          distance.{" "}
          <Link href="/outils/davinci" className="text-red-400 hover:underline">
            DaVinci Resolve
          </Link>{" "}
          reste une référence en gratuit, même si moins IA-first. Voir aussi la{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            fiche Descript complète
          </Link>{" "}
          pour le détail.
        </>
      ),
    },
  ],
};

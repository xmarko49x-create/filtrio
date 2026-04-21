import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const opusclipFiche: FicheData = {
  slug: "opusclip",
  hero: {
    h1: "OpusClip : l'avis complet en 2026",
    tagline:
      "Le spécialiste incontournable de la découpe IA de long format en shorts. Plan gratuit récurrent mensuel, score viralité prédictif, intégrations massives. Voici pour qui il vaut son prix.",
    badges: [
      { label: "Large adoption", tone: "primary" },
      { label: "Commission 25% récurrent 1 an", tone: "accent" },
      { label: "Découpe IA auto", tone: "neutral" },
    ],
    origine: "USA",
    depuis: "2022",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Outil américain lancé en 2022 qui découpe automatiquement une vidéo longue (podcast, live, interview) en 8-15 clips courts prêts à publier, avec score viralité prédictif, recadrage 9:16 et sous-titres.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Podcasters, streamers Twitch, YouTubeurs long-format, agences social media, marques qui recyclent du contenu existant en masse. Toute personne qui part d'une source longue pour faire des shorts.",
    },
    {
      question: "Pas pour qui ?",
      answer:
        "Créateurs qui tournent déjà au format court (face cam 30-60 sec). Ceux qui visent la qualité visuelle maximale des sous-titres en français. Ceux qui veulent éditer finement chaque clip.",
    },
    {
      question: "Combien ?",
      answer:
        "Plan gratuit disponible · Plans payants à partir de 15 $/mois · Business sur devis. Détail des quotas et fonctionnalités sur la page Tarifs d'OpusClip.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          pour la qualité FR des sous-titres et les sources courtes. CapCut si
          budget zéro mais sans détection IA automatique.{" "}
          <Link
            href="/comparatifs/opusclip-vs-submagic"
            className="text-emerald-400 hover:underline"
          >
            Comparatif complet ici
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-emerald-400">Oui, sans hésiter</strong>, si
          ton besoin principal est de découper du contenu long en shorts.
          C&apos;est l&apos;option la plus spécialisée sur ce cas précis.
        </>
      ),
    },
  ],
  porQui: [
    "Tu pars de sources longues (podcasts, lives, interviews 30 min+)",
    "Tu veux 100% d'automatisation de la découpe",
    "Tu publies sur plusieurs plateformes en même temps",
    "Tu veux tester sérieusement sans payer (plan gratuit récurrent mensuel)",
    "Tu veux connecter directement YouTube, Twitch, Zoom, Drive",
    "Tu gères une agence social media avec du volume",
  ],
  pasPourQui: [
    <>
      Tu vises la qualité visuelle maximale des sous-titres en français (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    "Tu tournes déjà au format court face caméra (moins de valeur ajoutée)",
    "Tu veux éditer finement chaque clip (trop automatisé)",
    "Tu as besoin d'une facturation en euros avec TVA FR",
    "Tu veux un éditeur vidéo complet avec timeline",
    "Tu veux des templates viraux déjà prêts visuellement",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Reconnaissance vocale FR correcte, segmentation des sous-titres à retoucher sur vocabulaire technique. Meilleur sur l'anglais, pensé pour le marché US d'abord. Interface multilingue mais pas 100% FR natif.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 9.0,
      commentaire:
        "Un des meilleurs rapports qualité/prix de sa catégorie grâce à un plan gratuit récurrent mensuel et des plans payants abordables. Plus généreux que Submagic ou Descript pour démarrer sans engagement.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.5,
      commentaire:
        "Le point fort. Détection IA des passages accrocheurs sur sources longues, score viralité prédictif par clip, recadrage 9:16 avec suivi visage, B-roll automatique. Aucun concurrent n'est aussi poussé sur ce volet.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Plus riche que Submagic en options (choix clips à garder, réorganisation, édition fine), donc un peu plus longue à maîtriser. Une fois le workflow compris, très efficace.",
    },
    {
      label: "Support et documentation FR",
      poids: 15,
      score: 7.5,
      commentaire:
        "Support principalement en anglais. Documentation traduite automatiquement, qualité correcte mais pas native. Communauté Discord internationale active.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 9.0,
      commentaire:
        "Écosystème riche. Import depuis YouTube, Twitch, Vimeo, Zoom, Google Drive, Dropbox. Publication programmée directe sur TikTok, Instagram Reels, YouTube Shorts. API disponible sur plan Pro.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Détection IA des moments viraux",
      description:
        "L'algorithme analyse le contenu, le rythme et les pics d'attention pour identifier les passages les plus accrocheurs. Le cœur du produit, bien plus développé que chez les concurrents.",
    },
    {
      titre: "Score viralité par clip",
      description:
        "Chaque clip généré reçoit une note prédictive de potentiel viral. Pas parfait mais utile pour prioriser les publications sans devoir tout regarder soi-même.",
    },
    {
      titre: "Recadrage 9:16 intelligent",
      description:
        "Le format vertical suit automatiquement le visage ou l'action principale. Précieux sur des sources tournées en paysage (lives, interviews, podcasts vidéo).",
    },
    {
      titre: "AI Captions (sous-titres IA)",
      description:
        "Génération automatique de sous-titres avec plusieurs styles. Moins raffinés que Submagic en français mais corrects, avec animation mot par mot.",
    },
    {
      titre: "Sources longues acceptées",
      description:
        "Jusqu'à 3 heures de vidéo en plan Pro. Un des rares outils à gérer les podcasts et lives complets sans devoir les scinder.",
    },
    {
      titre: "Publication multi-plateformes",
      description:
        "Publication programmée directe sur TikTok, Instagram Reels, YouTube Shorts, LinkedIn. Workflow tout-en-un qui évite de repasser par ton PC.",
    },
  ],
  plans: [
    {
      nom: "Plans OpusClip",
      prix: "À partir de 15 $/mois",
      cible: "Créateurs, agences, médias",
      features: [
        "Plan gratuit disponible",
        "Plans payants à partir de 15 $/mois",
        "Plan Business sur devis",
        "Quotas exacts et fonctionnalités par plan sur la page Tarifs d'OpusClip",
      ],
    },
  ],
  alternatives: [
    {
      slug: "submagic",
      comment:
        "Pour la qualité visuelle maximale des sous-titres FR. Meilleur sur sources courtes tournées directement. Combo OpusClip + Submagic reste le setup pro le plus puissant.",
    },
    {
      slug: "descript",
      comment:
        "Si tu veux aussi éditer finement le long format en plus de le découper. Édition textuelle révolutionnaire, mais moins automatique sur la découpe pure.",
    },
    {
      slug: "capcut",
      comment:
        "Alternative gratuite si budget zéro. Pas de détection IA automatique, découpe manuelle. Acceptable pour un usage occasionnel.",
    },
  ],
  faq: [
    {
      question: "OpusClip ou Submagic, lequel prendre ?",
      answer: (
        <>
          OpusClip si tu pars d&apos;une source longue (podcast, live, vidéo
          longue). Submagic si tu tournes déjà du contenu court et que la
          qualité FR compte. Voir le{" "}
          <Link
            href="/comparatifs/opusclip-vs-submagic"
            className="text-emerald-400 hover:underline"
          >
            comparatif détaillé
          </Link>
          .
        </>
      ),
    },
    {
      question: "Le plan gratuit est-il vraiment utilisable durablement ?",
      answer:
        "Oui. Le plan gratuit est récurrent mensuel (pas un simple essai one-shot), ce qui permet de traiter une source par mois ou plusieurs plus courtes. Idéal pour démarrer sérieusement sans carte bancaire. Quotas exacts à consulter sur le site.",
    },
    {
      question: "Le score viralité est-il fiable ?",
      answer:
        "Utile comme première indication, pas une vérité absolue. Selon les retours publics, il priorise correctement sur des sources à fort rythme (podcasts punchy, interviews dynamiques) mais se trompe plus sur les contenus calmes. À prendre comme aide au tri, pas comme oracle.",
    },
    {
      question: "Peut-on utiliser OpusClip avec l'API ?",
      answer:
        "Oui sur les plans payants supérieurs. Intégration avec Make, Zapier ou scripts custom pour industrialiser la génération. Particulièrement utile pour les agences et créateurs qui automatisent à grande échelle.",
    },
    {
      question: "Quelle sortie pour le marché francophone ?",
      answer: (
        <>
          Fonctionne correctement en FR (reconnaissance vocale et découpe IA).
          Limite principale : les sous-titres sont moins stylés que chez{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          . Beaucoup de créateurs FR font OpusClip pour découper puis Submagic
          pour finaliser le rendu visuel.
        </>
      ),
    },
  ],
  ctaFinal: {
    headline: "Prêt à automatiser ta découpe ?",
    sub: "Le plan gratuit récurrent mensuel permet de traiter une source longue par mois. Tu verras vite si le workflow te convient avant de payer.",
    buttonText: "Essayer OpusClip",
  },
};

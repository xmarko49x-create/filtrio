import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const descriptFiche: FicheData = {
  slug: "descript",
  hero: {
    h1: "Descript : l'avis complet en 2026",
    tagline:
      "L'édition textuelle révolutionnaire : tu modifies ta vidéo en éditant sa transcription. Studio Sound, Overdub, Squadcast intégré. Voici pour qui il vaut son prix.",
    badges: [
      { label: "Édition textuelle", tone: "primary" },
      { label: "Podcast & long format", tone: "accent" },
      { label: "Studio Sound inclus", tone: "neutral" },
    ],
    origine: "USA",
    depuis: "2017",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme d'édition audio-vidéo unique : tu modifies ta vidéo en éditant sa transcription. Supprime un mot = la vidéo se coupe au bon endroit. Lancé en 2017, rachat de Squadcast en 2023 pour renforcer l'enregistrement à distance.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Podcasteurs, intervieweurs, formateurs, YouTubeurs long format. Créateurs qui font beaucoup de montage conversationnel et veulent supprimer les silences, hésitations, répétitions sans passer des heures dans une timeline.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs 100% shorts (→{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          plus adapté). Monteurs qui font beaucoup d&apos;effets visuels avancés
          (Premiere, DaVinci plus puissants). Budgets zéro sur le long terme
          (le plan gratuit est limité).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan gratuit 1h de transcription/mois, export 1080p. Hobbyist à 12 $/mois (10h), Creator à 24 $/mois (30h), Business à 40 $/mois (40h + features pro). Export watermark sur plan gratuit.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/riverside" className="text-indigo-400 hover:underline">
            Riverside.fm
          </Link>{" "}
          si tu veux surtout enregistrer à distance avec qualité pro. Adobe
          Podcast pour du nettoyage audio gratuit.{" "}
          <Link
            href="/comparatifs/descript-vs-riverside"
            className="text-violet-400 hover:underline"
          >
            Comparatif Descript vs Riverside
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-violet-400">Oui</strong>, si tu fais du long
          format conversationnel régulier. L&apos;édition textuelle change
          complètement le workflow. Pas indispensable pour d&apos;autres profils.
        </>
      ),
    },
  ],
  porQui: [
    "Tu fais du podcast vidéo ou audio régulier (1+ épisode/semaine)",
    "Tu veux supprimer automatiquement les \"euh\", silences, répétitions",
    "Tu produis des interviews, tutos, ou formations longues",
    "Tu veux éditer ta vidéo comme un document Word",
    "Tu veux nettoyer professionnellement l'audio (Studio Sound)",
    "Tu veux corriger ta voix avec du clonage vocal (Overdub)",
  ],
  pasPourQui: [
    <>
      Tu fais surtout des shorts TikTok/Reels (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    <>
      Tu veux un outil d&apos;enregistrement à distance de qualité pro (→{" "}
      <Link href="/outils/riverside" className="text-indigo-400 hover:underline">
        Riverside
      </Link>
      )
    </>,
    "Tu veux des effets visuels avancés ou du color grading",
    "Tu as déjà un workflow Premiere/DaVinci qui te convient",
    "Tu fais peu de contenu parlé (l'outil est centré sur la transcription)",
    "Ta qualité audio source est médiocre (la transcription devient fautive)",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.8,
      commentaire:
        "Transcription FR correcte, ponctuation automatique raisonnable, mais moins fine qu'en anglais. Les termes techniques et noms propres demandent souvent des corrections. Interface partiellement traduite. Support uniquement en anglais.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 8.8,
      commentaire:
        "Plan gratuit correct pour tester (1h/mois). Plan Hobbyist à 12 $/mois avec 10h de transcription et les features principales : très bon rapport q/p pour un podcaster régulier. Moins compétitif pour les usages faibles.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.0,
      commentaire:
        "Point fort. Édition textuelle unique sur le marché, Studio Sound (nettoyage audio), Overdub (clonage vocal pour corriger un mot), génération auto de titres et chapitres, transcription multi-langue. Écosystème IA le plus complet pour le long format.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 7.5,
      commentaire:
        "Courbe d'apprentissage plus longue que la moyenne. Le modèle d'édition textuelle est déroutant au début : tu édites du texte, pas une timeline. Compte 2-3 heures pour être vraiment à l'aise. Une fois maîtrisé, gain de productivité massif.",
    },
    {
      label: "Support et documentation FR",
      poids: 15,
      score: 6.5,
      commentaire:
        "Support client exclusivement en anglais. Documentation principalement anglophone avec traductions automatiques. Communauté Discord internationale très active, quelques tutos FR sur YouTube créés par des utilisateurs avancés.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "Import depuis YouTube, Vimeo, Zoom, Dropbox. Export vers toutes les plateformes podcast (Spotify, Apple, Google). API disponible sur plans Business. Plugin Premiere Pro pour aller-retour fluide. Squadcast intégré (enregistrement à distance).",
    },
  ],
  fonctionnalites: [
    {
      titre: "Édition textuelle",
      description:
        "La signature de Descript. Tu uploads ta vidéo, l'outil transcrit, tu édites le texte : supprimer une phrase retire le passage vidéo correspondant. Révolutionnaire pour le long format conversationnel.",
    },
    {
      titre: "Studio Sound (nettoyage audio)",
      description:
        "Un clic pour nettoyer l'audio : suppression bruit de fond, lissage de la voix, égalisation. Résultat souvent proche d'un micro pro même sur enregistrement médiocre. Particulièrement apprécié des podcasteurs.",
    },
    {
      titre: "Overdub (clonage vocal)",
      description:
        "Clone ta voix à partir de quelques minutes d'audio. Permet de corriger un mot, une phrase, un nom propre sans réenregistrer. Utile pour les erreurs, pas pour générer de gros volumes de voix.",
    },
    {
      titre: "Enregistrement à distance (via Squadcast)",
      description:
        "Depuis l'acquisition de Squadcast, Descript intègre l'enregistrement à distance de qualité. Concurrent de Riverside. Tracks locaux séparés pour chaque intervenant, pas de dépendance à la qualité de la connexion.",
    },
    {
      titre: "AI Actions",
      description:
        "Génération automatique de titres, descriptions, chapitres, show notes de podcast. Suggestions de moments clips dans une vidéo longue. Gain de temps important en post-production.",
    },
    {
      titre: "Éditeur multi-piste",
      description:
        "Timeline classique disponible en complément de l'édition textuelle pour les ajustements fins (transitions, musique, keyframes basiques). Pas aussi puissant que Premiere mais suffisant pour 90% des podcasts.",
    },
  ],
  plans: [
    {
      nom: "Gratuit",
      prix: "0 $",
      cible: "Pour tester",
      features: [
        "1 heure transcription/mois",
        "Export 1080p avec watermark",
        "Features basiques",
        "Pas d'Overdub",
      ],
    },
    {
      nom: "Hobbyist",
      prix: "12 $/mois",
      cible: "Podcasteurs réguliers",
      features: [
        "10h transcription/mois",
        "Sans watermark",
        "Studio Sound inclus",
        "Overdub basique",
      ],
    },
    {
      nom: "Creator",
      prix: "24 $/mois",
      cible: "Créateurs pros",
      features: [
        "30h transcription/mois",
        "Export 4K",
        "AI Actions complètes",
        "Squadcast inclus",
      ],
    },
    {
      nom: "Business",
      prix: "40 $/mois",
      cible: "Agences et médias",
      features: [
        "40h transcription/mois",
        "API et intégrations avancées",
        "Collaboration équipe",
        "Support prioritaire",
      ],
    },
  ],
  alternatives: [
    {
      slug: "riverside",
      comment:
        "Plus fort sur l'enregistrement à distance pur. Éditeur post-prod moins poussé que celui de Descript. Complémentaires plus que concurrents.",
    },
    {
      slug: "submagic",
      comment:
        "Si ton besoin est le short plutôt que le long format. Focus sous-titres stylés, pas d'édition textuelle, mais beaucoup plus rapide sur les formats courts.",
    },
    {
      slug: "adobe-podcast",
      comment:
        "Alternative gratuite pour le nettoyage audio (Enhance Speech). Pas d'édition textuelle mais Studio Sound équivalent sans payer.",
    },
  ],
  faq: [
    {
      question: "L'édition textuelle vaut-elle vraiment la courbe d'apprentissage ?",
      answer:
        "Oui pour un usage long format régulier. Compte 2-3h pour être à l'aise. Une fois maîtrisé, le gain de productivité est massif — selon les retours publics, le temps de montage d'un podcast d'1h est divisé par 3 à 5 vs un workflow timeline classique.",
    },
    {
      question: "La transcription FR est-elle fiable ?",
      answer:
        "Correcte sur audio propre. Prévois de repasser sur le texte pour corriger les termes techniques, noms propres et accents régionaux. C'est plus rapide que de tout retaper, mais pas zéro-touch.",
    },
    {
      question: "Descript ou Riverside pour un podcast hebdomadaire ?",
      answer: (
        <>
          Dépend de ton workflow. Riverside si la qualité d&apos;enregistrement
          à distance est ta priorité. Descript si l&apos;édition post-prod est
          ta priorité. Beaucoup de podcasteurs pros utilisent les deux. Voir le{" "}
          <Link
            href="/comparatifs/descript-vs-riverside"
            className="text-violet-400 hover:underline"
          >
            comparatif direct
          </Link>
          .
        </>
      ),
    },
    {
      question: "Overdub fonctionne-t-il bien en français ?",
      answer:
        "Oui pour les corrections ponctuelles (1-3 mots). Au-delà, le rendu devient moins naturel et fait entendre une légère texture artificielle. Parfait pour réparer une erreur, pas pour générer des paragraphes entiers.",
    },
    {
      question: "Combien d'heures de transcription pour un podcast hebdo ?",
      answer:
        "Environ 4-8h/mois pour un podcast d'1h par semaine (l'outil transcrit l'audio brut + les retakes). Le plan Hobbyist à 12 $/mois (10h) convient pour un créateur régulier sans débordement. Au-delà, passe sur Creator à 24 $/mois.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester Descript ?",
    sub: "Le plan gratuit (1h/mois de transcription) permet de découvrir le workflow d'édition textuelle. Même 30 minutes de test suffisent pour comprendre le gain.",
    buttonText: "Essayer Descript",
  },
};

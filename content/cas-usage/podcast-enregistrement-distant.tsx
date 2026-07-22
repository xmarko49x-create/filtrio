import Link from "next/link";
import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";

export const podcastEnregistrementDistant: CasUsageData = {
  slug: "podcast-enregistrement-distant",
  gagnantSlug: "riverside",
  hero: {
    h1: "Enregistrer un podcast à distance : 5 outils comparés en 2026",
    tagline:
      "Tu veux enregistrer un podcast ou une interview avec un invité à distance, en qualité studio, sans Zoom qui compresse l'audio. Voici notre classement des outils qui livrent la meilleure qualité, le gagnant, et les pièges à éviter.",
    tempsLecture: 6,
    outilsAnalyses: 5,
    lastCheck: "10/07/2026",
  },
  verdict: {
    tag: "La recommandation tout de suite",
    headline: (
      <>
        Pour la qualité studio,{" "}
        <span className="text-indigo-400">Riverside</span>{" "}prend clairement
        l&apos;avantage.
      </>
    ),
    paragraphs: [
      <>
        Enregistrement local de chaque participant en qualité non compressée
        (jusqu&apos;au 4K pour la vidéo, WAV non compressé pour l&apos;audio),
        upload progressif dans le cloud pendant l&apos;entretien, et pistes
        séparées livrées à la fin. Tu obtiens une qualité équivalente à un
        studio traditionnel sans être dans la même pièce que ton invité.
      </>,
      <>
        <strong className="text-slate-200">Alternative sérieuse :</strong>{" "}
        <Link
          href="/outils/descript"
          className="text-violet-400 hover:underline"
        >
          Descript
        </Link>{" "}
        si tu veux combiner enregistrement et édition dans le même outil.
        Zencastr et SquadCast sont des options crédibles mais moins matures
        côté vidéo.
      </>,
    ],
  },
  tableauSynthese: {
    lignes: [
      {
        outil: (
          <Link href="/outils/riverside" className="text-indigo-400 hover:underline">
            Riverside
          </Link>
        ),
        meilleurPour: "Qualité studio audio + vidéo (enregistrement local)",
        gratuit: "Oui, plan gratuit",
        prixEntree: "24 €/mois en annuel · 29 €/mois en mensuel",
        verdict: "Notre gagnant (9,2/10)",
      },
      {
        outil: (
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>
        ),
        meilleurPour: "Enregistrer et éditer dans le même outil",
        gratuit: "Oui, limité à 1 h",
        prixEntree: "16 $/mois",
        verdict: "Alternative tout-en-un (8,6/10)",
      },
      {
        outil: "Zencastr",
        meilleurPour: "Podcast 100 % audio",
        gratuit: "Oui, plan gratuit",
        prixEntree: "20 $/mois",
        verdict: "Solide en audio pur (8,2/10)",
      },
      {
        outil: "SquadCast (by Descript)",
        meilleurPour: "Qualité audio historique, désormais dans Descript",
        gratuit: "Via Descript",
        prixEntree: "Intégré à Descript",
        verdict: "Prendre Descript directement (7,8/10)",
      },
      {
        outil: "Zoom / Google Meet",
        meilleurPour: "Réunions internes, pas la publication",
        gratuit: "Oui",
        prixEntree: "Gratuit",
        verdict: "À éviter pour un podcast publié (5,5/10)",
      },
    ],
  },
  criteres: [
    {
      label: "Qualité audio brute",
      poids: 30,
      description:
        "WAV non compressé, 48 kHz minimum. Pas de compression VoIP type Zoom ou Google Meet.",
    },
    {
      label: "Enregistrement local par participant",
      poids: 25,
      description:
        "Chaque voix enregistrée côté navigateur puis uploadée. Garantit la qualité même si la connexion est instable.",
    },
    {
      label: "Facilité côté invité",
      poids: 20,
      description:
        "Ton invité ne doit rien installer. Juste un lien, un navigateur récent, un micro correct.",
    },
    {
      label: "Export multi-pistes séparées",
      poids: 15,
      description:
        "Une piste audio par participant + piste vidéo. Indispensable pour l'édition pro.",
    },
    {
      label: "Édition embarquée (bonus)",
      poids: 10,
      description:
        "Transcription, coupe par texte, nettoyage audio IA. Permet d'éviter un aller-retour vers un logiciel tiers.",
    },
  ],
  classement: [
    {
      slug: "riverside",
      scoreCas: 9.2,
      badge: "Qualité studio",
      pourquoiGagne: [
        "Enregistrement local par participant (qualité préservée)",
        "Tracks audio et vidéo séparés par intervenant",
        "Invité rejoint via simple lien navigateur",
        "Export multi-pistes séparées automatique",
        "Transcription auto + Magic Clips pour extraire shorts",
      ],
      limites: [
        "Interface d'édition moins poussée que Descript",
        "Upload peut prendre du temps en fin d'enregistrement",
        "Fonctionnalités avancées sur les plans supérieurs (voir page Tarifs officielle)",
      ],
      verdict:
        "Si tu produis régulièrement un podcast ou une série d'interviews à distance, Riverside est l'investissement le plus logique. La qualité fait la différence à l'écoute, et ton invité n'a rien à installer.",
      priceDisplay: {
        label: "À partir de",
        value: "24 €/mois",
        note: "En annuel · 29 €/mois en mensuel · Plan gratuit disponible",
      },
    },
    {
      slug: "descript",
      scoreCas: 8.6,
      badge: "Tout-en-un",
      pourquoiGagne: [
        "Tout-en-un : enregistrement à distance, édition et transcription dans la même app",
        "Édition textuelle puissante : tu coupes ton podcast comme tu coupes un Word",
        "Fonctionnalités IA avancées : suppression hésitations, mots-bouchons, ajustement audio",
        "Studio Sound pour nettoyer la voix automatiquement",
        "Export multi-formats et publication directe simplifiée",
      ],
      limites: [
        "Qualité d'enregistrement à distance moins poussée que Riverside (pas de track local par invité dans les plans bas)",
        "Plan Hobbyist limite l'enregistrement à 1h",
        "Si tu fais surtout du podcast pur sans édition lourde, c'est surdimensionné",
      ],
      verdict:
        "Choix pertinent si tu veux tout faire au même endroit. La qualité d'enregistrement pure reste légèrement en retrait de Riverside, mais la force d'édition compense pour beaucoup de créateurs.",
      priceDisplay: {
        label: "À partir de",
        value: "16 $/mois",
        note: "Plan gratuit 1h",
      },
    },
    {
      slug: "zencastr",
      fallbackColor: "slate",
      fallbackName: "Zencastr",
      scoreCas: 8.2,
      pourquoiGagne: [
        "Spécialiste podcast 100 % audio depuis plus de 10 ans",
        "Enregistrement local par participant (qualité préservée)",
        "Interface très simple pour les invités, juste un lien à ouvrir",
        "Plan gratuit honnête pour démarrer",
        "Bonne réputation dans la communauté podcast",
      ],
      limites: [
        "Pas de vidéo en qualité pro (peu adapté si tu veux publier des clips vidéo)",
        "Édition très basique vs Descript ou Riverside",
        "Moins de fonctionnalités IA récentes que la concurrence",
      ],
      verdict:
        "Solide pour du podcast 100 % audio. Si tu as besoin de vidéo en qualité pro, Riverside reste devant. Fiche Filtrio à venir.",
      priceDisplay: {
        label: "À partir de",
        value: "20 $/mois",
        note: "Plan gratuit",
      },
    },
    {
      slug: "squadcast",
      fallbackColor: "slate",
      fallbackName: "SquadCast (by Descript)",
      scoreCas: 7.8,
      pourquoiGagne: [
        "Historiquement réputé pour la qualité audio à distance",
        "Enregistrement local par invité (Dolby Voice)",
        "Intégré à Descript pour l'édition derrière",
      ],
      limites: [
        "Aujourd'hui doublonné avec Descript : si tu prends Descript, tu as déjà SquadCast intégré",
        "Peu de raison de le prendre seul en 2026",
      ],
      verdict:
        "Historiquement une alternative sérieuse. Aujourd'hui la logique est plutôt de prendre Descript directement.",
      priceDisplay: {
        label: "Intégré",
        value: "Descript",
      },
    },
    {
      slug: "zoom-meet",
      fallbackColor: "slate",
      fallbackName: "Zoom / Google Meet",
      scoreCas: 5.5,
      pourquoiGagne: [
        "Déjà installé chez toi et chez tes invités",
        "Zéro friction pour les invités, aucune installation",
        "Gratuit ou inclus dans ton abonnement existant",
      ],
      limites: [
        "Qualité audio compressée (streaming, pas enregistrement studio)",
        "Pas de tracks séparées par intervenant",
        "Pas d'enregistrement local : si la connexion plante, tu perds tout",
        "Édition très basique côté plateforme",
      ],
      verdict:
        "Acceptable pour un call interne ou une prise de notes. Inadapté pour un podcast destiné à être publié. L'audio compressé s'entend immédiatement et fait perdre en crédibilité.",
      priceDisplay: { label: "Prix", value: "Gratuit" },
    },
  ],
  pourquoiGagne: [
    {
      titre: "Enregistrement local par participant",
      description:
        "Chaque voix est capturée côté navigateur de son propriétaire, pas envoyée en streaming. Résultat : même si la connexion coupe en plein enregistrement, ta piste reste intacte en local et s'upload ensuite.",
    },
    {
      titre: "Qualité non compressée",
      description:
        "Audio WAV 48 kHz et vidéo jusqu'au 4K. À comparer aux 48-96 kbps compressés d'une conférence Zoom classique. L'écart est audible instantanément.",
    },
    {
      titre: "Pistes séparées livrées automatiquement",
      description:
        "Une piste audio par intervenant, une piste vidéo par intervenant. Indispensable pour l'édition pro (corriger un participant, ajuster les niveaux, supprimer un moment gênant sans impacter l'autre).",
    },
    {
      titre: "Magic Clips pour extraire shorts",
      description:
        "Après enregistrement, Riverside détecte automatiquement les extraits forts et suggère des shorts verticaux prêts à publier. Utile si tu recycles ton podcast sur TikTok et Reels.",
    },
  ],
  piegesAEviter: [
    {
      titre: "Enregistrer sur Zoom ou Google Meet",
      description:
        "Audio compressé en temps réel, monopiste, artefacts de compression. Un podcast enregistré sur Zoom s'entend immédiatement et pénalise ta crédibilité. À réserver aux réunions internes, pas à la publication.",
    },
    {
      titre: "Demander à l'invité d'installer un logiciel",
      description:
        "Tu perds une partie de tes invités à l'étape installation : logiciel à télécharger, compte à créer, réglages à faire. Un bon outil de podcast à distance fonctionne directement dans le navigateur, juste avec un lien. Riverside, Descript et Zencastr respectent tous ce principe.",
    },
    {
      titre: "Négliger le micro de l'invité",
      description:
        "Le meilleur outil du monde ne peut pas sauver un invité qui parle dans le micro de son laptop bas de gamme. Envoie un guide simple à ton invité avant l'enregistrement : casque audio filaire, pièce calme, micro à 20 cm.",
    },
    {
      titre: "Ne pas faire de test 5 minutes avant",
      description:
        "Connexion, niveau sonore, bruit de fond. Cinq minutes de test au début évitent de devoir tout refaire. La plupart des outils proposent une salle d'attente pour régler ça sans lancer l'enregistrement.",
    },
  ],
  commentChoisir: [
    {
      question: "Tu veux aussi une captation vidéo pro ?",
      reponse: (
        <>
          Si oui →{" "}
          <strong className="text-indigo-400">Riverside</strong>. C&apos;est le
          plus abouti côté vidéo jusqu&apos;au 4K.
        </>
      ),
    },
    {
      question: "Tu veux tout faire (enregistrer + éditer) dans le même outil ?",
      reponse: (
        <>
          Si oui →{" "}
          <strong className="text-violet-400">Descript</strong>. Son édition
          textuelle reste une des plus abouties du marché.
        </>
      ),
    },
    {
      question: "Podcast 100% audio sans ambition vidéo ?",
      reponse: (
        <>
          Si oui → <strong className="text-slate-300">Zencastr</strong>{" "}ou{" "}
          <strong className="text-indigo-400">Riverside</strong>{" "}sur le plan
          gratuit. Les deux suffisent largement.
        </>
      ),
    },
    {
      question: "Tu publies ensuite des shorts verticaux sur TikTok ou Reels ?",
      reponse: (
        <>
          Si oui → <strong className="text-indigo-400">Riverside</strong>{" "}+
          OpusClip. Enregistrement pro puis découpe automatique en shorts.
        </>
      ),
    },
  ],
  faq: [
    {
      question: "Riverside ou Descript pour un podcast hebdomadaire ?",
      answer: (
        <>
          Dépend de ton workflow. Si tu préfères enregistrer dans un outil et
          éditer dans un autre avec ton propre setup, Riverside. Si tu veux
          passer directement de l&apos;enregistrement à l&apos;édition
          textuelle sans changer d&apos;outil, Descript. Les deux tiennent la
          charge d&apos;un podcast hebdomadaire.
        </>
      ),
    },
    {
      question: "L'invité doit-il installer quelque chose ?",
      answer:
        "Non, pour Riverside, Descript et Zencastr. Un lien suffit, l'invité ouvre dans Chrome ou Edge (Firefox et Safari fonctionnent mais avec plus de limitations connues). Il doit autoriser micro et caméra, c'est tout.",
    },
    {
      question: "Faut-il un micro dédié pour faire du podcast distant sérieux ?",
      answer:
        "Fortement recommandé côté host. Un micro USB à 80-150 € (Shure MV7, Samson Q9U, Rode NT-USB+) change complètement le rendu et te sort immédiatement du niveau \"podcast amateur\". Côté invité, on accepte généralement un casque avec micro correct ou un casque filaire type AirPods filaires, à défaut.",
    },
    {
      question: "Combien de temps d'édition pour un épisode d'1 heure ?",
      answer:
        "Avec un workflow Riverside + Descript : comptez 1,5 à 2 h d'édition pour 1 h de contenu brut (nettoyage, coupe des blancs, enlever les \"euh\" via Descript, mixage). Sans transcription IA, c'était historiquement plutôt 3 à 4 h.",
    },
    {
      question: "Peut-on ajouter des invités qui appellent depuis leur téléphone ?",
      answer:
        "Riverside et Zencastr proposent des applications mobiles qui permettent à un invité d'enregistrer en local depuis son téléphone. La qualité reste inférieure à un setup desktop avec micro dédié, mais c'est très nettement au-dessus d'un appel téléphonique classique.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à enregistrer en qualité studio ?",
    paragraph:
      "Le workflow le plus propre : un compte Riverside, un lien envoyé à ton invité, un test 5 minutes, puis enregistrement. Tu récupères des pistes séparées exploitables immédiatement.",
    buttonText: "Essayer Riverside",
  },
  autresCasUsage: [
    {
      slug: "video-longue-en-shorts",
      titre: "Transformer une vidéo longue en shorts",
      description: "Recycler ton podcast en clips verticaux viraux.",
      color: "emerald",
    },
    {
      slug: "sous-titres-rapides",
      titre: "Outil le plus rapide pour sous-titres automatiques",
      description: "Sous-titrer tes extraits en moins de 90 secondes.",
      color: "amber",
    },
    {
      slug: "sous-titrer-tiktok",
      titre: "Meilleur outil IA pour sous-titrer TikTok",
      description: "Précision FR, rapidité, style viral.",
      color: "amber",
    },
  ],
};

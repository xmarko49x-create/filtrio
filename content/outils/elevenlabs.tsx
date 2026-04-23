import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const elevenlabsFiche: FicheData = {
  slug: "elevenlabs",
  hero: {
    h1: "ElevenLabs : l'avis complet en 2026",
    tagline:
      "Référence de la voix IA, particulièrement convaincante en français. Clonage vocal, doublage multilingue, API solide. Voici pour qui il vaut son prix, pour qui il ne vaut pas.",
    badges: [
      { label: "Référence voix IA", tone: "primary" },
      { label: "API solide", tone: "accent" },
      { label: "Voix off & narration", tone: "neutral" },
    ],
    origine: "USA",
    tempsLecture: 8,
    lastCheck: "23/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Plateforme de génération et clonage de voix par IA. Spécialisée dans la synthèse vocale ultra-réaliste, le doublage vidéo multi-langues et la création de voix personnalisées à partir d'un extrait audio court.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs vidéo qui ont besoin de voix off sans enregistrer, YouTubeurs sans face cam, podcasteurs qui veulent doubler leurs épisodes, marques qui produisent du contenu multilingue, auteurs audiobook.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs qui font déjà du face cam et parlent eux-mêmes. Ceux qui
          veulent un avatar vidéo complet (→{" "}
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>
          ). Budgets très serrés qui vont consommer beaucoup de credits.
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan gratuit avec 10 000 credits/mois. Starter à 6 $/mois (30k credits, commercial license, voice cloning), Creator à 22 $/mois (121k credits, Professional Voice Cloning), Pro à 99 $/mois (600k credits, audio 192kbps). Scale à 299 $/mois et Business à 990 $/mois pour les équipes. Enterprise sur devis. Facturation en USD, hors taxes.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          si tu veux aussi un avatar vidéo. Murf ou Play.ht pour des
          alternatives voix plus abordables sur du volume.{" "}
          <Link
            href="/comparatifs/elevenlabs-vs-heygen"
            className="text-teal-400 hover:underline"
          >
            Comparatif ElevenLabs vs HeyGen
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-teal-400">Oui</strong>, pour la majorité des
          créateurs francophones qui veulent une voix IA naturelle et
          convaincante. C&apos;est l&apos;option de référence selon les retours
          publics.
        </>
      ),
    },
  ],
  porQui: [
    "Tu fais des voix off pour vidéos YouTube, TikTok, formations",
    "Tu veux cloner ta propre voix pour gagner du temps",
    "Tu veux doubler ton contenu dans d'autres langues",
    "Tu produis des audiobooks ou des podcasts narrés",
    "La qualité vocale est un critère non-négociable",
    "Tu veux tester en gratuit avant de payer",
  ],
  pasPourQui: [
    "Tu fais du face cam et parles toi-même dans toutes tes vidéos",
    <>
      Tu veux aussi un avatar vidéo (→{" "}
      <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
        HeyGen
      </Link>
      )
    </>,
    "Tu produis énormément de contenu long (coût par credit à surveiller)",
    "Ta priorité est le prix au volume (alternatives plus adaptées)",
    "Tu cherches un outil complet de montage/édition vidéo",
    "Tu as besoin d'une facturation EUR avec TVA FR native",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 9.0,
      commentaire:
        "Rendu naturel en français, prononciation maîtrisée, gestion des liaisons et intonations largement supérieure aux concurrents. Certains mots techniques ou noms propres demandent des ajustements via la syntaxe phonétique.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.5,
      commentaire:
        "Plan gratuit (10 000 credits/mois) généreux pour tester. Facturation au credit qui peut monter vite sur du volume. Le Creator à 22 $/mois (121k credits, premier mois -50 %) couvre les usages réguliers. Pro à 99 $/mois pour les besoins pros.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.5,
      commentaire:
        "Point fort. Synthèse vocale, clonage à partir d'un extrait audio, doublage vidéo, voix multilingues cohérentes, contrôle fin des émotions et du débit. Peu d'outils aussi poussés sur l'IA vocale pure.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Interface web propre, prise en main rapide pour la génération basique. Les features avancées (fine-tuning, clonage pro, API) demandent un peu de lecture de doc. Globalement accessible pour un non-technicien.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 6.5,
      commentaire:
        "Interface partiellement traduite, documentation en anglais principalement. Support client en anglais. Communauté Discord internationale très active. C'est le talon d'Achille pour l'utilisateur FR pur.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 9.0,
      commentaire:
        "API très documentée, intégration native avec Zapier, Make, Premiere Pro, DaVinci Resolve. Utilisable dans des workflows d'automatisation. Écosystème riche pour connecter la voix IA à d'autres outils.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Synthèse vocale multilingue",
      description:
        "Plus de 30 langues supportées avec un rendu naturel, dont un français particulièrement travaillé. Contrôle du débit, de l'émotion, de l'intonation. Idéal pour voix off.",
    },
    {
      titre: "Clonage vocal (Instant & Professional)",
      description:
        "Instant Voice Cloning dès le Starter : clone une voix à partir d'un extrait audio court. Professional Voice Cloning sur le Creator+ : qualité pro à partir d'un dataset plus fourni.",
    },
    {
      titre: "Doublage vidéo multilingue",
      description:
        "Traduit automatiquement ta vidéo dans une autre langue en conservant le timbre de la voix source. Utile pour toucher un public international sans réenregistrer.",
    },
    {
      titre: "Voice Library",
      description:
        "Bibliothèque de voix prêtes à l'emploi, communautaire et pro. Voix catégorisées par âge, genre, ton, langue. Utile pour trouver rapidement le bon timbre sans cloner.",
    },
    {
      titre: "API complète",
      description:
        "API REST bien documentée pour intégrer la génération vocale dans tes workflows. Compatible Make, Zapier, scripts custom. Audio 192kbps et 44.1kHz PCM dès le plan Pro.",
    },
    {
      titre: "Studio, Sound Effects, Music",
      description:
        "En plus de la voix : Studio Productions, Sound Effects, Voice Design, Music, Image & Video. Un écosystème audio IA complet au-delà du TTS pur.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      prixSub: "Pour tester",
      cible: "Découverte de l'outil",
      features: [
        "10 000 credits/mois",
        "3 Projects in Studio",
        "Text to Speech, Speech to Text, Sound Effects",
        "Voice Design, Music, Productions",
      ],
    },
    {
      nom: "Starter",
      prix: "6 $/mois",
      prixSub: "Facturation mensuelle ou annuelle",
      cible: "Créateurs occasionnels",
      features: [
        "30 000 credits/mois",
        "Commercial License",
        "Instant Voice Cloning",
        "20 Projects in Studio",
        "Music commercial use · Dubbing Studio",
      ],
    },
    {
      nom: "Creator",
      prix: "22 $/mois",
      prixSub: "Premier mois à -50 % (11 $)",
      cible: "Créateurs réguliers · Plan populaire",
      features: [
        "121 000 credits/mois",
        "Professional Voice Cloning",
        "Additional Credits",
      ],
    },
    {
      nom: "Pro",
      prix: "99 $/mois",
      prixSub: "Facturation USD",
      cible: "Créateurs pros",
      features: [
        "600 000 credits/mois",
        "44.1kHz PCM audio output via API",
        "192kbps quality audio",
      ],
    },
    {
      nom: "Scale / Business / Enterprise",
      prix: "À partir de 299 $/mois",
      prixSub: "Équipes, agences, organisations",
      cible: "Collaboration & volume",
      features: [
        "Scale : 1.8M credits/mois, 3 seats, Team Collaboration (299 $/mois)",
        "Business : 6M credits/mois, 10 seats, Low-latency TTS (990 $/mois)",
        "Enterprise : custom pricing, SSO, DPA/BAA, support prioritaire",
      ],
    },
  ],
  alternatives: [
    {
      slug: "heygen",
      comment:
        "Pour qui veut un avatar vidéo complet (visage + voix + sync labiale). Plus cher mais couvre un besoin différent.",
    },
    {
      slug: "murf",
      comment:
        "Alternative voix IA à prix plus prévisible. Moins naturel qu'ElevenLabs selon les retours, mais intéressant pour gros volume.",
    },
    {
      slug: "play-ht",
      comment:
        "Concurrent direct d'ElevenLabs, plans plus abordables sur le volume. Qualité FR légèrement en retrait selon les retours publics.",
    },
  ],
  faq: [
    {
      question: "ElevenLabs est-il vraiment la meilleure voix IA en français ?",
      answer:
        "Selon les retours publics et notre analyse des features, oui sur le rendu naturel, les liaisons et les intonations. Certains concurrents (Murf, Play.ht) sont plus abordables sur le volume mais généralement en retrait sur la qualité FR pure.",
    },
    {
      question: "Comment fonctionne la facturation aux credits ?",
      answer:
        "Chaque génération consomme des credits, selon le modèle IA utilisé (1 credit = 1 caractère sur les modèles standard, 0.5 à 1 credit sur les modèles Flash/Turbo selon le plan). Les credits non utilisés peuvent être reportés jusqu'à deux mois sur un plan payant actif. Voir la FAQ officielle pour le détail exact.",
    },
    {
      question: "Le clonage vocal fonctionne-t-il bien en français ?",
      answer:
        "Oui, c'est même un des points forts. L'Instant Voice Cloning (dès le plan Starter) permet déjà un clone convaincant à partir d'un extrait audio FR propre. Le Professional Voice Cloning (dès le Creator) demande un dataset plus fourni pour une qualité pro.",
    },
    {
      question: "Peut-on cloner la voix de n'importe qui ?",
      answer:
        "Non. ElevenLabs impose une vérification : tu dois posséder les droits de la voix (la tienne ou autorisation écrite). Pour le clonage pro, enregistrement d'une phrase de consentement obligatoire. Mesure contre les deepfakes.",
    },
    {
      question: "Le doublage vidéo remplace-t-il un avatar IA comme HeyGen ?",
      answer: (
        <>
          Non. Le doublage ElevenLabs remplace la piste audio et conserve le
          timbre. Pour un avatar complet avec visage IA qui parle, c&apos;est{" "}
          <Link href="/outils/heygen" className="text-cyan-400 hover:underline">
            HeyGen
          </Link>{" "}
          qu&apos;il faut. Les deux outils sont complémentaires, pas
          concurrents.
        </>
      ),
    },
    {
      question: "Usage commercial autorisé dès le plan Starter ?",
      answer:
        "Oui, le plan Starter à 6 $/mois inclut la Commercial License. Le plan gratuit ne l'inclut pas. Vérifie les conditions exactes dans la documentation avant déploiement commercial à grande échelle.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester ElevenLabs ?",
    sub: "Le plan gratuit (10 000 credits/mois) permet de comparer la qualité FR. Facturation USD, plans mensuels ou annuels.",
    buttonText: "Essayer ElevenLabs",
  },
};

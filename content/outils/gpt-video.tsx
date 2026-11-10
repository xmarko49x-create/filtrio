import Link from "next/link";
import type { ReactNode } from "react";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { SCORING_BY_SLUG } from "@/lib/scoring";

/**
 * Figure de preuve pour le test de première main.
 * Local à cette fiche : aucun composant partagé n'est modifié.
 */
function FigureTest({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      <figcaption className="text-sm text-slate-400 leading-relaxed p-5">
        {caption}
      </figcaption>
    </figure>
  );
}

export const gptVideoFiche: FicheData = {
  slug: "gpt-video",
  hero: {
    h1: "GPT-Video : notre avis après un test complet en 2026",
    tagline:
      "Un outil en ligne qui transforme une vidéo longue en clips verticaux sous-titrés, avec une note et une explication détaillée pour chaque clip. Nous l'avons testé le 10 novembre 2026 sur la même vidéo française que les autres outils de notre banc d'essai : ce qui marche, ce qui coûte, et ce qu'il faut régler.",
    badges: [
      { label: "Shorts & clips", tone: "primary" },
      { label: "Testé par Filtrio", tone: "accent" },
      { label: "Sans lien avec OpenAI", tone: "neutral" },
    ],
    origine: "Italie",
    tempsLecture: 7,
    lastCheck: "10/11/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Un outil en ligne qui découpe une vidéo longue (podcast, interview, cours, live) en clips verticaux sous-titrés, prêts pour TikTok, Reels ou YouTube Shorts. Chaque clip reçoit une note et une explication de son choix. Un assistant permet aussi de modifier le projet en écrivant. Malgré son nom, c'est un produit indépendant, fabriqué en Italie, sans lien avec OpenAI.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs qui recyclent des interviews, des podcasts ou des cours en shorts et qui veulent comprendre pourquoi un passage est retenu. Ceux qui veulent un traitement rapide et la possibilité de tout ajuster ensuite.",
    },
    {
      question: "À éviter si ?",
      answer: (
        <>
          Tu veux un plan gratuit utilisable dans la durée (→{" "}
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>
          ). Tu cherches surtout des sous-titres stylés sur des vidéos déjà
          courtes (→{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          ). Tu veux un logiciel de montage complet (→{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>
          ).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Pas de plan gratuit durable : un accès d'essai est offert à l'inscription (50 crédits et 3 exports, avec 14 jours restants le jour de notre test). Starter à 19 $/mois (250 crédits), Creator à 49 $/mois (800 crédits), Studio à 199 $/mois (6 000 crédits). En paiement annuel : 190 $, 490 $ et 1 990 $ par an. 1 crédit = 1 minute de vidéo envoyée. Facturation en dollars, vérifié le 10/11/2026.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>{" "}
          pour un plan gratuit récurrent et plus d&apos;intégrations.{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          pour des sous-titres français très stylés. Voir aussi notre{" "}
          <Link
            href="/cas-usage/video-longue-en-shorts"
            className="text-orange-400 hover:underline"
          >
            comparatif vidéo longue en shorts
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-orange-400">
            Oui, si tu veux comprendre et contrôler le choix des clips
          </strong>
          . Sur notre test : traitement très rapide, sous-titres français
          justes et export gratuit sans logo. Pense à choisir le cadrage
          « Suivre le visage » quand la personne n&apos;est pas au centre de
          l&apos;image.
        </>
      ),
    },
  ],
  sectionApresVerdict: {
    titre: "Notre test de GPT-Video du 10 novembre 2026",
    contenu: (
      <>
        <p>
          Le 10 novembre 2026, nous avons fait passer une vraie vidéo dans
          GPT-Video, avec le compte gratuit que tout le monde obtient à
          l&apos;inscription. La source est un entretien de 1 min 17 en
          français, filmé en plan fixe, publié sous licence libre :{" "}
          <a
            href="https://tubedu.org/videos/watch/9aba92da-0f91-44cf-9904-31a66a722413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            « Sciences ensemble »
          </a>
          , interview de Laure Turcati, MOOC Science Ouverte (Alliance Sorbonne
          Université), 3 mars 2022, TubEdu, licence CC BY 4.0. C&apos;est
          exactement le même fichier que pour nos tests de Submagic, OpusClip
          et CapCut : tu peux le télécharger et refaire la manipulation
          toi-même.
        </p>
        <p className="text-slate-400">
          <strong className="text-slate-300">Transparence.</strong> GPT-Video
          nous a contactés et nous a proposé un accès Creator temporaire pour
          notre banc d&apos;essai. Le test ci-dessous a été fait avec le compte
          gratuit standard, avant toute activation. Nous n&apos;avons reçu aucun
          paiement, et nous n&apos;avons pas de lien affilié GPT-Video.
        </p>
        <p>Deux repères reviennent dans les légendes :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-slate-100">Testé</strong> : nous avons
            réellement fait l&apos;action pendant la session.
          </li>
          <li>
            <strong className="text-slate-100">Observé</strong> : la fonction
            existe à l&apos;écran, mais nous ne l&apos;avons pas utilisée. Nous
            ne portons donc aucun jugement dessus.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          Ce qu&apos;on a vu en testant GPT-Video, capture par capture
        </h3>

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          1. L&apos;accueil : bien plus qu&apos;un découpeur de vidéos
        </h4>
        <FigureTest
          src="/tests/2026-11-10/gpt-video-accueil.png"
          alt="Accueil de GPT-Video avec l'assistant à gauche et la liste des outils : Auto Clip, Vibe Editing, Split Screen Video, Reddit Story Video, Generate Voiceovers"
          caption={
            <>
              L&apos;accueil, en français. À gauche, l&apos;assistant qui
              propose d&apos;ouvrir le bon outil à partir d&apos;une simple
              phrase. À droite, les « salles » : Auto Clip (découper une vidéo
              longue en clips), Vibe Editing (modifier une vidéo en écrivant),
              écran partagé, histoires Reddit, voix off, fausses conversations,
              suppression de musique. En bas à gauche, l&apos;accès gratuit :
              50 crédits et 3 exports.{" "}
              <strong className="text-slate-200">
                Testé : Auto Clip uniquement. Observé : tous les autres outils.
              </strong>
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          2. Les réglages : pas de valeurs par défaut
        </h4>
        <FigureTest
          src="/tests/2026-11-10/gpt-video-reglages-ia.png"
          alt="Réglages d'Auto Clip remplis par l'IA : objectif Educational, 5 clips, durée de 5 à 15 secondes, langue en détection automatique, cadrage Centre fixe, style de sous-titres Boxed"
          caption={
            <>
              Avant de lancer, GPT-Video demande six choix : objectif, nombre
              de clips, durée minimale et maximale, cadrage et style des
              sous-titres. Pour rester dans les conditions de nos autres tests,
              nous n&apos;avons rien choisi nous-mêmes : nous avons cliqué sur
              « Laisser l&apos;IA choisir ». Elle a retenu un objectif
              pédagogique, 5 clips de 5 à 15 secondes, la langue en détection
              automatique, un cadrage centré et le style de sous-titres
              « Boxed ». Ce bouton passe par l&apos;assistant, qui nous a
              répondu en anglais. Coût de l&apos;analyse : 2 crédits pour notre
              vidéo de 1 min 17.{" "}
              <strong className="text-slate-200">Testé.</strong>
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          3. Les clips proposés, en 12 secondes
        </h4>
        <FigureTest
          src="/tests/2026-11-10/gpt-video-clips-proposes.png"
          alt="Tableau de clips de GPT-Video : trois clips notés 79, 77 et 75 avec titre, citation, résumé et mots-clés"
          caption={
            <>
              L&apos;analyse et la génération des clips ont pris 12 secondes,
              d&apos;après la page de suivi de l&apos;outil. GPT-Video a
              proposé 3 clips (sur les 5 demandés, ce qui reste logique sur une
              vidéo de 1 min 17), notés 79, 77 et 75. Chaque clip a un titre,
              une citation, un résumé et des mots-clés. Pour chacun, on peut
              accepter et modifier, ou refuser.{" "}
              <strong className="text-slate-200">Testé.</strong>
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          4. « Pourquoi ce clip ? » : la note expliquée
        </h4>
        <FigureTest
          src="/tests/2026-11-10/gpt-video-pourquoi-ce-clip.png"
          alt="Détail Pourquoi ce clip : une phrase d'explication et huit notes, dont accroche 8, clarté 9, autonome 9 et émotion 5, plus une légende prête à publier"
          caption={
            <>
              C&apos;est le point fort de GPT-Video. Sous chaque clip, une
              phrase explique en français pourquoi le passage a été retenu, et
              la note est détaillée sur huit points : accroche, clarté,
              nouveauté, citabilité, dénouement, émotion, compréhension sans
              contexte et dialogue. Une légende prête à publier, avec ses
              hashtags, est aussi proposée. Attention : ces notes sont celles
              que l&apos;outil se donne à lui-même. Elles aident à choisir, mais
              ne remplacent pas ton propre regard sur le clip.{" "}
              <strong className="text-slate-200">Testé.</strong>
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          5. Le clip final : cadrage, sous-titres et export
        </h4>
        <FigureTest
          src="/tests/2026-11-10/gpt-video-clip-cadre-visage.png"
          alt="Éditeur de clip GPT-Video : clip vertical cadré sur le visage avec un titre en haut et le sous-titre ON A DE L'ÉCOLOGIE, réglages de rognage, cadrage, sous-titres et audio à droite"
          caption={
            <>
              L&apos;éditeur du clip. Deux modes de cadrage au choix : centré
              ou suivi du visage. Sur notre vidéo, où la personne est assise
              sur le côté de l&apos;image, le suivi du visage donne le meilleur
              résultat. Un seul clic suffit, sans crédit supplémentaire. Les
              sous-titres français sont justes, accents compris, et le mot
              prononcé s&apos;allume en couleur au bon moment. Un titre
              s&apos;affiche en haut pendant les premières secondes pour
              accrocher le spectateur. À droite : rognage du début et de la
              fin, quatre styles de sous-titres réglables, bouton « Corriger le
              texte », volume de la voix et musique de fond. L&apos;export en
              MP4 a pris 16 secondes, et la vidéo obtenue avec le compte
              gratuit ne porte aucun logo.{" "}
              <strong className="text-slate-200">
                Testé : cadrage, lecture et export. Observé : les autres
                réglages.
              </strong>
            </>
          }
        />

        <div className="bg-slate-900 border border-orange-500/30 rounded-2xl p-6 my-8">
          <h4 className="font-bold text-orange-400 mb-3">
            Ce qu&apos;il faut retenir, en clair
          </h4>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong className="text-slate-100">Rapide :</strong> environ 40
              secondes de traitement au total (choix des réglages, analyse,
              recadrage et export), sans compter l&apos;envoi du fichier.
            </li>
            <li>
              <strong className="text-slate-100">Clips expliqués :</strong> 3
              clips notés de 75 à 79, chacun avec la raison de son choix
              détaillée sur huit points.
            </li>
            <li>
              <strong className="text-slate-100">Sous-titres français :</strong>{" "}
              justes sur notre vidéo, accents compris.
            </li>
            <li>
              <strong className="text-slate-100">Cadrage :</strong> deux modes,
              centré ou suivi du visage. Sur notre vidéo, le suivi du visage
              donne le meilleur résultat, en un clic.
            </li>
            <li>
              <strong className="text-slate-100">Export gratuit :</strong>{" "}
              possible avec le compte d&apos;essai (3 exports), sans logo.
            </li>
            <li>
              <strong className="text-slate-100">À savoir :</strong> six
              réglages à faire avant de lancer, ou à confier à l&apos;IA, et un
              assistant qui répond en anglais.
            </li>
          </ul>
        </div>

        <p className="text-slate-400">
          <strong className="text-slate-300">
            Ce que ce test ne prouve pas.
          </strong>{" "}
          Une seule vidéo, 1 min 17, un plan fixe, en français, un seul jour,
          avec les réglages choisis par l&apos;IA. Nous n&apos;avons pas mesuré
          de taux d&apos;erreur des sous-titres sur des vidéos longues ou
          bruyantes. Les autres outils de GPT-Video (écran partagé, histoires
          Reddit, voix off, fausses conversations, suppression de musique) ont
          été observés, jamais utilisés, donc jamais évalués.
        </p>
      </>
    ),
  },
  porQui: [
    "Tu transformes des interviews, podcasts ou cours en shorts",
    "Tu veux savoir pourquoi l'IA retient un passage plutôt qu'un autre",
    "Tu veux un traitement rapide et un export sans logo dès l'essai",
    "Tu aimes ajuster chaque clip : durée, cadrage, style des sous-titres",
    "Tu veux pouvoir modifier ton projet en écrivant à un assistant",
    "Tu as besoin d'une API pour automatiser (observée, non testée)",
  ],
  pasPourQui: [
    <>
      Tu veux un plan gratuit utilisable dans la durée (→{" "}
      <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
        OpusClip
      </Link>
      )
    </>,
    <>
      Tu veux surtout des sous-titres viraux très stylés sur des vidéos courtes
      (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    "Tu veux lancer ton premier clip sans aucun réglage à faire",
    "Tu veux une interface et un assistant 100 % en français",
    "Tu veux payer en euros plutôt qu'en dollars",
    <>
      Tu cherches un logiciel de montage complet (→{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut
      </Link>
      )
    </>,
  ],
  scoring: SCORING_BY_SLUG["gpt-video"],
  fonctionnalites: [
    {
      titre: "Auto Clip : vidéo longue → clips verticaux",
      description:
        "Tu envoies une vidéo (MP4, MOV ou WebM), l'outil repère les passages forts et propose des clips verticaux sous-titrés. Nombre de clips, durées, objectif et langue réglables, ou confiés à l'IA. Testé.",
    },
    {
      titre: "« Pourquoi ce clip ? »",
      description:
        "Pour chaque clip, une explication en français et une note détaillée sur huit points (accroche, clarté, nouveauté, émotion, compréhension sans contexte…), plus une légende prête à publier. Testé.",
    },
    {
      titre: "Éditeur de clip",
      description:
        "Rognage du début et de la fin avec sous-titres qui se recalent seuls, cadrage centré ou suivi du visage, quatre styles de sous-titres (taille, position, couleurs), correction du texte, volume de la voix et musique de fond. Testé en partie.",
    },
    {
      titre: "Editor Assistant",
      description:
        "Un assistant qui modifie le projet à partir d'une phrase : choisir les clips, changer le style, corriger les sous-titres, lancer les exports. Utilisé lors du test via « Laisser l'IA choisir » ; il a répondu en anglais.",
    },
    {
      titre: "Autres formats",
      description:
        "Écran partagé, histoires Reddit, fausses conversations, voix off générées, suppression de musique ou de bruit de fond, vidéos de streamer. Observé dans l'interface, non testé.",
    },
    {
      titre: "API pour développeurs",
      description:
        "Une API et une connexion aux assistants IA compatibles MCP sont disponibles, avec 50 crédits offerts réservés à l'API. Observé dans l'interface, non testé.",
    },
  ],
  plans: [
    {
      nom: "Accès d'essai",
      prix: "0 $",
      prixSub: "À l'inscription · durée limitée",
      cible: "Pour tester sur une vidéo courte",
      features: [
        "50 crédits (1 crédit = 1 minute de vidéo envoyée)",
        "3 exports",
        "14 jours restants le jour de notre test",
        "Export sans logo lors de notre test",
      ],
    },
    {
      nom: "Starter",
      prix: "19 $/mois",
      prixSub: "Ou 190 $/an",
      cible: "Créateurs qui démarrent",
      features: ["250 crédits par mois (environ 4 heures de vidéo envoyée)"],
    },
    {
      nom: "Creator",
      prix: "49 $/mois",
      prixSub: "Ou 490 $/an",
      cible: "Créateurs réguliers",
      features: ["800 crédits par mois (environ 13 heures de vidéo envoyée)"],
    },
    {
      nom: "Studio",
      prix: "199 $/mois",
      prixSub: "Ou 1 990 $/an",
      cible: "Agences et gros volumes",
      features: ["6 000 crédits par mois (100 heures de vidéo envoyée)"],
    },
    {
      nom: "Entreprise",
      prix: "Sur devis",
      prixSub: "Formule Autopilot affichée à 500 $/mois, 3 mois minimum",
      cible: "Production automatisée à grande échelle",
      features: ["Détail des volumes sur gpt-video.com"],
    },
  ],
  alternatives: [
    {
      slug: "opusclip",
      comment:
        "Le leader de la découpe automatique. Plan gratuit récurrent, plus d'intégrations et de publication directe. À choisir si tu veux tester sans limite de temps.",
    },
    {
      slug: "submagic",
      comment:
        "Le spécialiste des sous-titres viraux en français. Plus fort sur le style des sous-titres, moins orienté découpe de vidéos longues.",
    },
    {
      slug: "capcut",
      comment:
        "Un logiciel de montage complet, avec de nombreuses fonctions gratuites. Pour monter toi-même plutôt que laisser l'IA choisir les clips.",
    },
  ],
  faq: [
    {
      question: "GPT-Video a-t-il un lien avec OpenAI ou ChatGPT ?",
      answer:
        "Non. La FAQ officielle de GPT-Video précise qu'il s'agit d'un produit indépendant, sans lien avec OpenAI. L'outil est fabriqué en Italie.",
    },
    {
      question: "Y a-t-il un plan gratuit ?",
      answer:
        "Pas de plan gratuit durable. À l'inscription, un accès d'essai donne 50 crédits et 3 exports, pour une durée limitée (14 jours restants le jour de notre test). C'est suffisant pour tester une ou deux vidéos courtes comme la nôtre.",
    },
    {
      question: "Combien de vidéos peut-on traiter avec un abonnement ?",
      answer:
        "Un crédit correspond à une minute de vidéo envoyée. Le plan Starter (250 crédits) couvre donc environ 4 heures de vidéo source par mois, le plan Creator (800 crédits) environ 13 heures. Attention : relancer l'analyse d'une vidéo consomme de nouveau des crédits. Le recadrage, lui, n'a rien coûté lors de notre test.",
    },
    {
      question: "Les sous-titres français sont-ils fiables ?",
      answer:
        "Sur notre vidéo de test, oui : texte juste, accents corrects, mot prononcé en couleur au bon moment. Pour les noms propres et le jargon, un champ « Vocabulaire » permet de les indiquer avant l'analyse. Sur une vidéo de moins de 2 minutes, il n'est pris en compte que si tu choisis toi-même la langue.",
    },
    {
      question: "GPT-Video ou OpusClip ?",
      answer: (
        <>
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>{" "}
          si tu veux un plan gratuit récurrent et la publication directe sur
          les réseaux. GPT-Video si tu veux comprendre pourquoi chaque clip est
          choisi et tout ajuster ensuite. Sur notre vidéo de test, GPT-Video a
          livré un export gratuit sans logo, là où OpusClip ajoutait un
          filigrane.
        </>
      ),
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester GPT-Video ?",
    sub: "L'accès d'essai offert à l'inscription suffit pour tester une vidéo courte comme la nôtre : 50 crédits et 3 exports. Compare d'abord avec OpusClip et Submagic, les deux références de la catégorie.",
    buttonText: "Essayer GPT-Video",
  },
};

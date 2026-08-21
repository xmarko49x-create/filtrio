import Link from "next/link";
import type { ReactNode } from "react";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { SCORING_BY_SLUG } from "@/lib/scoring";

/**
 * Figure de preuve pour la visite guidée du test de première main.
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

export const opusclipFiche: FicheData = {
  slug: "opusclip",
  hero: {
    h1: "OpusClip : l'avis complet en 2026",
    tagline:
      "Le spécialiste incontournable de la découpe IA de long format en shorts. Plan gratuit récurrent, score viralité prédictif, intégrations massives. Voici pour qui il vaut son prix.",
    badges: [
      { label: "Large adoption", tone: "primary" },
      { label: "Plan gratuit", tone: "accent" },
      { label: "Découpe IA auto", tone: "neutral" },
      { label: "Long format vers shorts", tone: "neutral" },
    ],
    origine: "USA",
    depuis: "2022",
    tempsLecture: 8,
    lastCheck: "21/08/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Outil américain lancé en 2022 qui découpe automatiquement une vidéo longue (podcast, live, interview) en plusieurs clips courts prêts à publier, avec score viralité prédictif, recadrage 9:16 et sous-titres.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Podcasters, streamers Twitch, YouTubeurs long-format, agences social media, marques qui recyclent du contenu existant en masse. Toute personne qui part d'une source longue pour faire des shorts.",
    },
    {
      question: "À éviter si ?",
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
  sectionApresVerdict: {
    titre: "Ce qu'on a vu en testant OpusClip, capture par capture",
    contenu: (
      <>
        <p>
          Le 21 août 2026, nous avons fait passer une vidéo dans OpusClip avec
          un compte gratuit et les réglages par défaut. La source est un
          entretien de 1 min 17 en français, plan fixe, 720p, publié sous
          licence libre :{" "}
          <a
            href="https://tubedu.org/videos/watch/9aba92da-0f91-44cf-9904-31a66a722413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            « Sciences ensemble »
          </a>
          , interview de Laure Turcati, MOOC Science Ouverte (Alliance Sorbonne
          Université), 3 mars 2022, TubEdu, licence CC BY 4.0. Tu peux
          télécharger le même fichier et refaire la manipulation.
        </p>
        <p>
          Chaque légende distingue trois statuts, et cette distinction est la
          règle de lecture de toute la section :{" "}
          <strong className="text-slate-100">utilisé pendant le test</strong>,{" "}
          <strong className="text-slate-100">
            seulement observé dans l&apos;interface
          </strong>
          , et{" "}
          <strong className="text-slate-100">
            marqué Pro ou consommant des crédits
          </strong>
          . Une fonction visible n&apos;est ni une fonction testée, ni une
          fonction gratuite.
        </p>

        <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 my-8">
          <h3 className="font-bold text-emerald-400 mb-3">
            Ce que le plan gratuit a réellement livré
          </h3>
          <p className="mb-3">
            Le constat principal tient en une phrase :{" "}
            <strong className="text-slate-100">
              nous sommes repartis avec un fichier vidéo, sans payer
            </strong>
            . Traitement de la vidéo : 1 crédit, coût affiché avant le
            lancement. Le téléchargement HD a fonctionné. Le fichier obtenu fait
            1080 × 1920, H.264/AAC, 24 i/s, 70 secondes, 52,1 Mo, avec le
            filigrane OpusClip incrusté.
          </p>
          <p className="mb-3 text-slate-400">
            Nuance technique importante : la source était en 720p. Un recadrage
            9:16 y prélève environ 405 pixels de large, ensuite agrandis pour
            atteindre 1080. Le « 1080 × 1920 » annoncé est donc{" "}
            <strong className="text-slate-300">un agrandissement</strong>, pas
            un gain de définition.
          </p>
          <p className="mb-0 text-slate-400">
            Le forfait gratuit s&apos;annonce lui-même « avec filigrane et
            fonctionnalités limitées ». Plusieurs actions portent la mention
            Pro, et l&apos;option « Améliorer et télécharger » affiche un coût
            de 82 crédits que nous n&apos;avons pas engagé.
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-100 pt-4">
          Avant le découpage
        </h3>
        <FigureTest
          src="/tests/2026-08-21/opusclip-catalogue-outils.png"
          alt="Catalogue des outils affichés sur l'accueil d'OpusClip"
          caption={
            <>
              L&apos;accueil affiche treize entrées : conversion format long en
              shorts, IA Sous-titres, éditeur vidéo, Producteur IA (bêta),
              presets viraux (bêta), amélioration vocale, effets sonores
              automatiques, IA Reframe, IA B-Roll, voix off d&apos;accroche,
              améliorer, double vidéo, script vers vidéo. L&apos;import accepte
              un fichier, Google Drive ou un lien Rumble.{" "}
              <strong className="text-slate-200">
                Seul le parcours « Obtenir des clips en 1 clic » a été utilisé.
              </strong>{" "}
              Les douze autres entrées sont uniquement observées : ni testées,
              ni vérifiées, et rien n&apos;indique qu&apos;elles soient incluses
              dans le forfait gratuit.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/opusclip-import-plan-gratuit.png"
          alt="Écran d'import d'OpusClip avec le bandeau du forfait gratuit et les réglages de découpage"
          caption={
            <>
              Le bandeau supérieur annonce le forfait gratuit «{" "}
              <span className="text-slate-200">
                avec filigrane et fonctionnalités limitées
              </span>{" "}
              », et la ligne sous le bouton indique « utilisation des crédits :
              1 » pour cette vidéo.{" "}
              <strong className="text-slate-200">
                Réglages laissés par défaut et utilisés tels quels
              </strong>{" "}
              : découpage par IA, modèle de clip Auto, genre Auto, durée de clip
              Auto (0 à 3 min), titre automatique activé, plage de traitement
              complète (0:00 à 1:18). OpusClip affiche aussi un avertissement
              sur les droits d&apos;auteur — dans notre cas la source est sous
              licence libre, ce qui règle la question.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/opusclip-langue-francaise.png"
          alt="Menu de langue d'OpusClip : langue d'origine et option de traduction"
          caption={
            <>
              Le menu de langue sépare la langue d&apos;origine et la traduction.
              La colonne de gauche liste de nombreuses langues, dont le
              français ; la colonne de droite ne propose que « pas de traduction
              » ou « anglais ».{" "}
              <strong className="text-slate-200">
                Réglage utilisé : origine sur Auto, aucune traduction.
              </strong>{" "}
              À noter pour un usage francophone : la traduction proposée ici va
              vers l&apos;anglais uniquement.
            </>
          }
        />

        <h3 className="text-xl font-bold text-slate-100 pt-4">
          Le résultat et les actions
        </h3>
        <FigureTest
          src="/tests/2026-08-21/opusclip-resultat-actions.png"
          alt="Écran de résultat d'OpusClip avec le clip généré, le titre automatique et les actions"
          caption={
            <>
              Un clip de 1 min 10 a été produit à partir de la source de 1 min
              18. Le titre automatique et le descriptif sont générés seuls, et
              une analyse de scène accompagne la transcription horodatée. À
              droite, huit actions.{" "}
              <strong className="text-slate-200">
                Seul « Télécharger en HD » a été utilisé
              </strong>
              , et il a fonctionné sans payer. Détail vérifiable sur
              l&apos;image : le titre généré écrit « Science Ensemble » alors
              que la vidéo source s&apos;intitule « Sciences ensemble ».
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/opusclip-transcription-actions.png"
          alt="Transcription horodatée d'OpusClip et colonne des actions avec les mentions Pro et les crédits"
          caption={
            <>
              Vue rapprochée des actions.{" "}
              <strong className="text-slate-200">
                Observées sans être testées
              </strong>{" "}
              : publier sur les réseaux sociaux, exporter en XML, dupliquer. «{" "}
              Modifier le clip » et le bouton de ratio « 9:16 » portent la
              mention <strong className="text-slate-200">Pro</strong> — à noter
              que le clip livré gratuitement était déjà en 9:16 sans passer par
              ce bouton, la mention Pro portant sur le réglage manuel du format.
              « Améliorer et télécharger » affiche un coût de{" "}
              <strong className="text-slate-200">82 crédits</strong> et
              n&apos;a pas été déclenché.
            </>
          }
        />

        <h3 className="text-xl font-bold text-slate-100 pt-4">
          Le rendu vertical livré
        </h3>
        <p>
          Les trois images qui suivent sont extraites du fichier réellement
          exporté, pas de l&apos;aperçu basse résolution affiché dans
          l&apos;interface. C&apos;est le résultat concret du test.
        </p>
        <FigureTest
          src="/tests/2026-08-21/opusclip-export-vertical.jpg"
          alt="Image du clip exporté par OpusClip, sous-titre RECHERCHE ET D'ENSEIGNEMENT SUPÉRIEUR"
          caption={
            <>
              Recadrage 9:16 automatique, visage centré, tête non coupée.
              Filigrane OpusClip en haut à gauche. Sous-titres en capitales avec
              le mot en cours surligné en vert.{" "}
              <strong className="text-slate-200">
                Le bandeau nominatif de la source a disparu du cadre
              </strong>{" "}
              : le recadrage vertical l&apos;a fait sortir de l&apos;image. Si
              tu découpes des interviews, le nom et la fonction de la personne
              filmée sautent avec.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/opusclip-rendu-2.jpg"
          alt="Image du clip exporté par OpusClip, sous-titre UNIVERSITÉ ET LE MUSÉUM sur deux lignes"
          caption={
            <>
              Un autre passage, réparti automatiquement sur deux lignes. Le
              découpage et le dimensionnement du texte se font seuls, et le
              cadrage reste stable d&apos;un bout à l&apos;autre du clip. À
              relativiser : la source est un plan fixe, donc le suivi de sujet
              n&apos;a presque rien à faire ici.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/opusclip-rendu-3.jpg"
          alt="Image du clip exporté par OpusClip, sous-titre DES DISCIPLINES TRÈS VARIÉES sur trois lignes"
          caption={
            <>
              Troisième passage, sur trois lignes cette fois, avec le mot clé
              surligné au milieu. Le style est cohérent sur tout le clip sans
              aucune intervention de notre part.{" "}
              <a
                href="/tests/2026-08-21/opusclip-export-720x1280.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Le clip complet est consultable ici
              </a>{" "}
              — copie allégée en 720 × 1280 pour l&apos;hébergement, contenu et
              filigrane identiques à l&apos;export d&apos;origine.
            </>
          }
        />

        <p className="text-slate-400 pt-4">
          <strong className="text-slate-300">
            Ce que cette visite ne prouve pas.
          </strong>{" "}
          Une seule vidéo, 1 min 17, un plan fixe, en français, un compte
          gratuit, les réglages par défaut, un seul jour. Un plan fixe est un
          exercice facile pour un recadrage automatique : n&apos;en conclus rien
          sur des séquences avec mouvement ou plusieurs intervenants. Nous
          n&apos;avons mesuré aucun taux d&apos;erreur de transcription et ne
          publions donc aucun chiffre de précision. Les fonctions restées
          inutilisées ne sont pas évaluées. Et ce test ne modifie aucune note de
          la grille ci-dessus, qui repose sur notre analyse documentaire.
        </p>
      </>
    ),
  },
  porQui: [
    "Tu pars de sources longues (podcasts, lives, interviews 30 min+)",
    "Tu veux 100 % d'automatisation de la découpe",
    "Tu publies sur plusieurs plateformes en même temps",
    "Tu veux tester sérieusement sans payer (plan gratuit récurrent)",
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
  scoring: SCORING_BY_SLUG.opusclip,
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
        "Accepte les vidéos longues (la durée maximale dépend du plan, à vérifier sur opus.pro). Un des rares outils à gérer les podcasts et lives complets sans devoir systématiquement les scinder.",
    },
    {
      titre: "Publication multi-plateformes",
      description:
        "Publication programmée directe sur TikTok, Instagram Reels, YouTube Shorts, LinkedIn. Workflow tout-en-un qui évite de repasser par ton PC.",
    },
  ],
  plans: [
    {
      nom: "Free",
      prix: "0 $",
      prixSub: "Free forever · pour tester",
      cible: "Découverte de l'outil",
      features: [
        "Accès aux fonctionnalités de base",
        "Clips avec watermark",
        "Quotas et limites à vérifier sur la page Tarifs officielle",
      ],
    },
    {
      nom: "Starter",
      prix: "15 $/mois",
      prixSub: "Mensuel uniquement (pas d'annuel)",
      cible: "Créateurs individuels",
      features: [
        "150 credits/mois",
        "AI clipping avec Virality Score",
        "Sous-titres animés IA (20+ langues)",
        "Auto post YouTube Shorts, TikTok, IG Reels",
        "Filler & silence removal",
        "Watermark supprimé",
        "1 brand template",
      ],
    },
    {
      nom: "Pro",
      prix: "14,50 $/mois",
      prixSub: "Annuel (174 $/an) · ou 29 $/mo en mensuel · -50 %",
      cible: "Créateurs pros, marketeurs, équipes",
      features: [
        "3 600 credits/an (disponibles instantanément)",
        "Team workspace · 2 seats",
        "2 brand templates",
        "6 social account connections",
        "AI B-roll · speech enhancement",
        "Aspect ratios multiples (9:16, 1:1, 16:9)",
        "Export vers Adobe Premiere Pro & DaVinci Resolve",
        "Social media scheduler · Intercom support",
      ],
    },
    {
      nom: "Business",
      prix: "Sur devis",
      prixSub: "Custom pricing · organisations et API",
      cible: "Agences, médias, équipes avancées",
      features: [
        "Tout Pro inclus",
        "Priority project processing",
        "API & custom integrations",
        "Customized credits, team seats, social accounts",
        "Dedicated storage",
        "Master Service Agreement (MSA)",
        "Priority support via Slack dédié",
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
        "Oui. Le plan gratuit est récurrent (pas un simple essai one-shot), ce qui permet de traiter une source par mois ou plusieurs plus courtes. Idéal pour démarrer sérieusement sans carte bancaire. Quotas exacts à consulter sur le site.",
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
      question: "Quelle sortie pour le marché FR ?",
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
    sub: "Le plan gratuit récurrent permet de traiter une source longue par mois. Tu verras vite si le workflow te convient avant de payer.",
    buttonText: "Essayer OpusClip",
  },
};

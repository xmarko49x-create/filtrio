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

export const submagicFiche: FicheData = {
  slug: "submagic",
  hero: {
    h1: "Submagic : l'avis complet en 2026",
    tagline:
      "Un outil rapide pour produire des shorts visuellement propres, avec une interface simple et une prise en main en quelques clics.",
    badges: [
      { label: "Outil français", tone: "primary" },
      { label: "Coup de cœur Filtrio", tone: "accent" },
      { label: "Sous-titres & shorts", tone: "neutral" },
    ],
    langue: "Interface disponible en français",
    tempsLecture: 8,
    lastCheck: "21/08/2026",
  },
  verdict30s: [
    {
      question: "Pour qui ?",
      answer:
        "Créateurs de contenu, freelances, agences et petites équipes qui veulent produire des shorts propres rapidement, avec un rendu visuel fort et une interface simple.",
    },
    {
      question: "À éviter si ?",
      answer:
        "Équipes qui ont besoin d'automatisations avancées, de gros volumes API dès le départ, ou d'un workflow orienté clipping massif de longues vidéos.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          OpusClip si ton besoin principal est de découper automatiquement de
          longues vidéos en extraits courts à grande échelle.{" "}
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
      answer:
        "Oui, pour beaucoup de créateurs qui veulent un outil rapide, simple et efficace pour produire des shorts plus propres visuellement.",
    },
    {
      question: "Combien ?",
      answer: (
        <>
          À partir de 12 €/mois en annuel. Essai gratuit de 3 vidéos. Plans
          supérieurs disponibles selon les volumes et les besoins. Détail sur
          la{" "}
          <a
            href="https://submagic.co/?via=marc38"
            target="_blank"
            rel="sponsored nofollow noopener"
            className="text-amber-400 hover:underline"
          >
            page Tarifs
          </a>
          .
        </>
      ),
    },
    {
      question: "Verdict rapide",
      answer:
        "Submagic est un très bon choix si tu veux aller vite, obtenir un rendu moderne et produire des vidéos courtes plus propres sans complexité inutile.",
    },
  ],
  sectionApresVerdict: {
    titre: "Ce qu'on a vu en testant Submagic, capture par capture",
    contenu: (
      <>
        <p>
          Le 21 août 2026, nous avons fait passer une vidéo dans Submagic avec
          un compte gratuit et les réglages par défaut. La source est un
          entretien de 1 min 17 en français, plan fixe, 720p, publié sous
          licence libre :{" "}
          <a
            href="https://tubedu.org/videos/watch/9aba92da-0f91-44cf-9904-31a66a722413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
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
            marqué Premium ou consommant des crédits
          </strong>
          . Une fonction visible n&apos;est ni une fonction testée, ni une
          fonction gratuite.
        </p>

        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 my-8">
          <h3 className="font-bold text-amber-400 mb-3">
            L&apos;économie réelle du plan gratuit
          </h3>
          <p className="mb-3">
            Submagic annonce son essai en nombre de vidéos, mais son interface
            décompte des crédits : les chiffres ci-dessous sont ceux relevés à
            l&apos;écran, en crédits. Générer les sous-titres
            d&apos;une vidéo est facturé{" "}
            <strong className="text-slate-100">3 crédits</strong>, coût affiché
            sur le bouton lui-même. Après cette génération, le compte affichait{" "}
            <strong className="text-slate-100">12 crédits restants</strong>,
            soit{" "}
            <strong className="text-slate-100">
              quatre générations supplémentaires en théorie
            </strong>{" "}
            — moins si l&apos;on active les options d&apos;IA, facturées de 1 à
            3 crédits chacune.
          </p>
          <p className="mb-0 text-slate-400">
            <strong className="text-slate-300">
              À ne pas confondre avec le blocage de l&apos;export.
            </strong>{" "}
            Ce sont deux limites indépendantes. Au moment d&apos;exporter, un
            abonnement payant nous a été demandé, et nous sommes repartis sans
            fichier — alors que le compte disposait encore de ses 12 crédits.
            Le mur d&apos;abonnement n&apos;est donc pas une question de solde :
            recharger des crédits ne l&apos;aurait pas levé.
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-100 pt-4">
          Avant la génération
        </h3>
        <FigureTest
          src="/tests/2026-08-21/submagic-generation-sous-titres.png"
          alt="Écran Submagic avant génération : langue française, options de traduction, coût en crédits"
          caption={
            <>
              La vidéo source de 1 min 17 est chargée. Langue orale réglée sur
              français, thème multi-intervenants désactivé, traduction
              désactivée. Le bouton « Générer des sous-titres » affiche son
              coût : <strong className="text-slate-200">+3 crédits</strong>.{" "}
              <strong className="text-slate-200">Utilisé pendant le test</strong>{" "}
              avec ces réglages exacts. La génération a fonctionné sans aucun
              paiement, en consommant les 3 crédits annoncés.
            </>
          }
        />

        <h3 className="text-xl font-bold text-slate-100 pt-4">
          Le rendu obtenu
        </h3>
        <FigureTest
          src="/tests/2026-08-21/submagic-apercu-16-9.png"
          alt="Aperçu Submagic 16:9 avec le mot RECHERCHE surligné en jaune"
          caption={
            <>
              L&apos;aperçu conserve le 16:9 de la source : aucun passage
              automatique en vertical avec les réglages par défaut. Le bandeau
              nominatif de l&apos;intervenante reste lisible, ce qui n&apos;est
              pas le cas quand un outil recadre en 9:16. Le mot « RECHERCHE »
              est surligné en jaune automatiquement.{" "}
              <strong className="text-slate-200">
                Génération et prévisualisation réellement testées.
              </strong>{" "}
              La mention « aperçu basse résolution » est visible : cette image
              ne prouve pas qu&apos;un export gratuit soit possible.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-rendu-2.png"
          alt="Aperçu Submagic avec un sous-titre réparti sur deux lignes"
          caption={
            <>
              Un autre passage, « RASSEMBLE UNE QUARANTAINE », réparti
              automatiquement sur deux lignes. C&apos;est le découpage et le
              dimensionnement automatiques du texte qu&apos;on observe ici, et
              ils sont propres. Même statut que l&apos;image précédente :
              aperçu basse résolution, pas d&apos;export.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-rendu-3.png"
          alt="Aperçu Submagic avec le mot LINGUISTIQUE en rouge et un élément graphique"
          caption={
            <>
              « LINGUISTIQUE » s&apos;affiche en rouge, avec un petit élément
              graphique ajouté sous le texte. Les couleurs et les illustrations
              sont appliquées automatiquement, sans intervention de notre part.
              C&apos;est ce que Submagic vend, et sur ce point le rendu par
              défaut est effectivement soigné.
            </>
          }
        />

        <h3 className="text-xl font-bold text-slate-100 pt-4">
          L&apos;éditeur
        </h3>
        <FigureTest
          src="/tests/2026-08-21/submagic-editeur-outils-ia.png"
          alt="Vue complète de l'éditeur Submagic avec le solde de crédits et les outils d'IA"
          caption={
            <>
              La vue d&apos;ensemble : solde de 12 crédits restants en haut,
              relevé après la génération des sous-titres, quatre
              onglets (style, sous-titres, outils d&apos;IA, scènes), menus
              Audio et Miniature, aperçu au format original, boutons Sauvegarder
              et Exportation.{" "}
              <strong className="text-slate-200">
                Utilisés : les sous-titres IA, l&apos;aperçu et la navigation.
              </strong>{" "}
              Tous les autres outils sont sur off et portent un coût en crédits
              : supprimer les silences (+2), zoom automatique IA (+1),
              automatisation automatique IA (+2), titre AI Hook (+2), audio
              propre (+2), supprimer les mauvaises prises (+2), contact visuel
              correct (+3).
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-transcription.png"
          alt="Éditeur de transcription Submagic, segments horodatés et précision annoncée"
          caption={
            <>
              La transcription est éditable segment par segment, avec
              horodatage, retours à la ligne et commandes par segment.{" "}
              <strong className="text-slate-200">
                Consultée pendant le test
              </strong>
              , sans correction manuelle de notre part. Le taux de « précision
              des sous-titres : 98,58 % » affiché en haut est un chiffre
              communiqué par Submagic :{" "}
              <strong className="text-slate-200">
                ce n&apos;est pas une mesure Filtrio
              </strong>
              , et nous ne le reprenons pas à notre compte. Cette capture ne
              permet pas non plus de dire lesquelles de ces commandes sont
              gratuites.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-styles-legendes.png"
          alt="Galerie des styles de légendes Submagic avec les réglages de position et de taille"
          caption={
            <>
              La galerie de styles de sous-titres est fournie, classée en
              onglets Tous, Tendance, Nouveau, Premium, Intervenants et Emoji,
              avec réglage de la position (50 %), de la taille de police (30 px)
              et de la police.{" "}
              <strong className="text-slate-200">
                Consultée, mais nous avons conservé le style par défaut
              </strong>{" "}
              : la galerie est montrée, pas évaluée. Plusieurs vignettes portent
              un éclair et un onglet Premium existe, donc tous les styles ne
              sont pas au même niveau d&apos;accès.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-decoupage-scenes.png"
          alt="Vue Scènes de Submagic, découpage horodaté avec emplacements A-roll"
          caption={
            <>
              La vue Scènes découpe la vidéo en segments horodatés, chacun avec
              un emplacement A-roll et un bouton d&apos;ajout, plus une zone «
              ajouter une introduction ». En en-tête : B-rolls automatiques,
              zoom automatique, titre Hook.{" "}
              <strong className="text-slate-200">
                Vue consultée, aucune de ces fonctions déclenchée.
              </strong>{" "}
              Aucun badge ni prix n&apos;apparaît ici : cette capture ne permet
              pas de les déclarer gratuites.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-menu-outils-ia.png"
          alt="Menu compact des outils d'IA Submagic avec le coût en crédits de chaque option"
          caption={
            <>
              La même liste en vue compacte, utile parce qu&apos;elle montre
              tous les coûts d&apos;un seul coup d&apos;œil : zoom automatique
              IA +1, automatisation automatique IA +2, supprimer les silences
              +2, titre AI Hook +2, audio propre +2, supprimer les mauvaises
              prises +2, contact visuel correct +3.{" "}
              <strong className="text-slate-200">
                Les sept interrupteurs sont sur off
              </strong>{" "}
              : ces fonctions n&apos;ont pas été utilisées. Précision qui
              compte : ces badges prouvent un coût en crédits,{" "}
              <strong className="text-slate-200">
                pas une obligation d&apos;abonnement
              </strong>
              . À noter, le libellé affiché « supprimer les mauvaises opinions »
              est une traduction approximative de l&apos;anglais{" "}
              <em>remove bad takes</em> : il s&apos;agit des prises ratées, pas
              de propos.
            </>
          }
        />

        <FigureTest
          src="/tests/2026-08-21/submagic-menu-miniature.png"
          alt="Menu Miniature de Submagic : créer une vignette, télécharger une image, sélectionner dans la vidéo"
          caption={
            <>
              Le menu Miniature propose trois entrées : créer une vignette
              (marquée « Nouveau »), télécharger une image, ou sélectionner une
              image directement dans la vidéo.{" "}
              <strong className="text-slate-200">
                Menu ouvert, aucune de ces options utilisée.
              </strong>{" "}
              Aucun badge Premium ni coût en crédits n&apos;apparaît ici, ce qui
              ne suffit pas à conclure qu&apos;elles sont toutes gratuites.
            </>
          }
        />

        <h3 className="text-xl font-bold text-slate-100 pt-4">
          Le son, puis l&apos;export
        </h3>
        <FigureTest
          src="/tests/2026-08-21/submagic-menu-audio.png"
          alt="Menu Audio de Submagic : audio propre, volume, ajouter de la musique"
          caption={
            <>
              Le menu Audio réunit trois commandes : « Audio propre », le
              réglage du volume (0 dB) et l&apos;ajout de musique.{" "}
              <strong className="text-slate-200">
                Menu ouvert, aucune commande utilisée.
              </strong>{" "}
              « Audio propre » porte un éclair, marqueur des fonctions d&apos;IA
              liées aux crédits, mais{" "}
              <strong className="text-slate-200">
                sans chiffre affiché ici
              </strong>{" "}
              : on ne peut donc préciser ni son coût, ni affirmer
              qu&apos;elle est gratuite. Le volume et la musique n&apos;affichent
              aucune contrepartie.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-export-parametres.png"
          alt="Menu des paramètres d'export Submagic : qualité 720p, 24 images par seconde"
          caption={
            <>
              Le menu d&apos;export propose HD 720p, 24 images par seconde, type
              « Avec légendes » et sauvegarde des préréglages.{" "}
              <strong className="text-slate-200">
                Ces réglages étaient accessibles
              </strong>
              , mais l&apos;action finale a ensuite demandé un abonnement. Le
              téléchargement 720p ne doit donc pas être présenté comme gratuit.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-21/submagic-export-types.png"
          alt="Menu déroulant des types d'export Submagic : avec légendes, sous-titres sur fond bleu ou vert"
          caption={
            <>
              Trois types d&apos;export sont proposés : avec légendes,
              sous-titres uniquement sur fond bleu, sous-titres uniquement sur
              fond vert. Les deux derniers servent à récupérer les sous-titres
              incrustés sur un fond à incruster dans un logiciel de montage —
              une option pensée pour les monteurs.{" "}
              <strong className="text-slate-200">
                Options visibles, aucune exportée
              </strong>{" "}
              : le téléchargement final était bloqué.
            </>
          }
        />

        <p className="text-slate-400 pt-4">
          <strong className="text-slate-300">
            Ce que cette visite ne prouve pas.
          </strong>{" "}
          Une seule vidéo, 1 min 17, un plan fixe, en français, un compte
          gratuit, les réglages par défaut, un seul jour. Nous n&apos;avons
          mesuré aucun taux d&apos;erreur de transcription et ne publions donc
          aucun chiffre de précision. Les fonctions restées désactivées ne sont
          pas évaluées. Et ce test ne modifie aucune note de la grille
          ci-dessus, qui repose sur notre analyse documentaire.
        </p>
      </>
    ),
  },
  porQui: [
    "Tu veux produire des shorts rapides, propres, avec un rendu visuel fort",
    "Tu fais du personal branding ou du contenu court régulier (TikTok, Reels, Shorts)",
    "Tu veux une interface simple, sans courbe d'apprentissage",
    "Tes sources sont déjà courtes à moyennes",
    "Tu travailles en français ou tu cibles une audience FR",
    "Tu veux un outil qui te fait gagner du temps sur le sous-titrage",
  ],
  pasPourQui: [
    "Tu as besoin d'automatisations avancées et de gros volumes API dès le départ",
    <>
      Tu veux un workflow orienté clipping massif de longues vidéos (→{" "}
      <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
        OpusClip
      </Link>
      )
    </>,
    <>
      Tu as besoin d&apos;un éditeur vidéo complet avec timeline (→{" "}
      <Link href="/outils/descript" className="text-violet-400 hover:underline">
        Descript
      </Link>{" "}
      ou{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut Pro
      </Link>
      )
    </>,
    <>
      Tu ne veux pas payer (→{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut
      </Link>{" "}
      reste très correct en gratuit)
    </>,
    "Tu crées exclusivement en anglais sans contrainte de rendu visuel FR",
  ],
  scoring: SCORING_BY_SLUG.submagic,
  fonctionnalites: [
    {
      titre: "Sous-titres stylés et animés",
      description:
        "Bibliothèque de templates avec animations mot par mot, mots-clés surlignés, couleurs vives, emojis contextuels. C'est le cœur de l'outil et ce qui fait sa réputation.",
    },
    {
      titre: "Détection auto des moments forts",
      description:
        "L'IA analyse le contenu et propose les passages les plus accrocheurs d'une vidéo pour en faire des shorts. Efficace sur les sources courtes à moyennes.",
    },
    {
      titre: "Recadrage 9:16 automatique",
      description:
        "Passe de paysage à vertical sans couper les têtes. Suit le visage du locuteur via IA. Gain de temps réel vs recadrage manuel dans un éditeur classique.",
    },
    {
      titre: "B-roll et effets sonores IA",
      description:
        "Ajoute automatiquement des images d'illustration et des effets audio selon le contexte. À utiliser avec parcimonie, peut vite faire 'IA générique' si abusé.",
    },
  ],
  plans: [
    {
      nom: "Essai gratuit",
      prix: "0 €",
      prixSub: "Essai de 3 vidéos",
      cible: "Pour tester sans engagement",
      features: ["3 vidéos gratuites", "Sans carte bancaire"],
    },
    {
      nom: "Starter",
      prix: "12 €/mois",
      prixSub: "Facturation annuelle · mensuel plus cher",
      cible: "Individus qui démarrent la création vidéo",
      features: [
        "15 vidéos/mois, max. 2 min chacune",
        "3 AI Credits/mois",
        "Sans watermark · Auto captions IA",
        "B-rolls et audio gratuits · Édition text-based",
        "Export 1080p à 30 FPS",
        "API & Integrations (10 min/mois)",
      ],
    },
    {
      nom: "Pro",
      prix: "23 €/mois",
      prixSub: "Facturation annuelle · mensuel plus cher",
      cible: "Créateurs qui veulent des shorts percutants",
      features: [
        "40 vidéos/mois, max. 5 min chacune",
        "6 AI Credits/mois",
        "Storyblocks B-Rolls & Audio",
        "AI hook titles, AI clean audio, AI remove silences",
        "AI Translate captions · Brand Kit",
        "Publish to TikTok, YouTube, Instagram",
      ],
    },
    {
      nom: "Business + API",
      prix: "41 €/mois",
      prixSub: "Facturation annuelle · mensuel plus cher",
      cible: "Équipes et agences qui scalent la production",
      features: [
        "100 vidéos/mois, max. 30 min chacune",
        "15 AI Credits/mois",
        "Export 4K à 60 FPS",
        "10 custom templates · Logos & brand assets",
        "Dictionnaire de mots custom · Support prioritaire",
        "API & Integrations (100 min/mois)",
      ],
    },
    {
      nom: "Custom Plan",
      prix: "Sur devis",
      prixSub: "Usages sur mesure",
      cible: "Organisations aux besoins spécifiques",
      features: [
        "Nombre de vidéos, membres et templates personnalisés",
        "Quotas API et Magic Clips sur mesure",
        "Sécurité avancée et SSO",
        "Customer success dédié",
      ],
    },
  ],
  alternatives: [
    {
      slug: "opusclip",
      comment:
        "Si ton besoin est la découpe automatique de longues vidéos en shorts. Plus fort sur le long format, moins fort sur les templates viraux FR.",
    },
    {
      slug: "capcut",
      comment:
        "Alternative gratuite la plus sérieuse. Moins spécialisée que Submagic mais couvre un éditeur complet en plus.",
    },
    {
      slug: "descript",
      comment:
        "Si tu veux un outil d'édition complet (podcast, long format) avec transcription et édition textuelle.",
    },
  ],
  faq: [
    {
      question: "Submagic vaut-il son abonnement pour un créateur qui débute ?",
      answer:
        "Oui si tu publies au moins 4-5 shorts par mois. Le temps gagné sur les sous-titres stylés compense rapidement le coût. Non si tu publies très occasionnellement, CapCut gratuit fera l'affaire.",
    },
    {
      question: "La précision FR est-elle vraiment meilleure que les alternatives ?",
      answer:
        "Selon les retours publics G2 / Reddit et notre prise en main, oui sur audio propre. Les difficultés restent sur vocabulaire technique pointu, noms propres rares, accents régionaux forts.",
    },
    {
      question: "Y a-t-il une vraie offre gratuite ?",
      answer: (
        <>
          Submagic propose un essai gratuit de 3 vidéos, sans carte bancaire.
          Mais pas de plan gratuit récurrent. Pour un usage gratuit durable,{" "}
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>{" "}
          ou{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          sont des alternatives plus adaptées. Détail dans le{" "}
          <Link
            href="/comparatifs/submagic-vs-capcut"
            className="text-amber-400 hover:underline"
          >
            comparatif Submagic vs CapCut
          </Link>
          .
        </>
      ),
    },
    {
      question: "Quelles sont les meilleures alternatives à Submagic ?",
      answer: (
        <>
          Ça dépend de ton usage : CapCut en gratuit, OpusClip pour découper du
          long format, Descript pour le long format, Veed en éditeur polyvalent,
          Captions pour la création tout-IA. On les compare dans un tableau et
          par cas d&apos;usage sur notre page{" "}
          <Link
            href="/comparatifs/alternatives-a-submagic"
            className="text-amber-400 hover:underline"
          >
            alternatives à Submagic
          </Link>
          .
        </>
      ),
    },
    {
      question: "Peut-on intégrer Submagic à un workflow automatisé (Make, Zapier) ?",
      answer:
        "Oui, Submagic affiche des options d'API et d'intégrations sur ses offres (disponibles dès le Starter avec un petit quota, étendues sur Business + API). En revanche, l'outil reste surtout positionné comme une solution simple et rapide pour produire des shorts, pas comme une brique d'automatisation lourde.",
    },
    {
      question: "Combien de temps pour sous-titrer une vidéo courte ?",
      answer:
        "Le workflow est l'un des plus rapides de sa catégorie : upload, choix du template, export en quelques clics. La durée exacte dépend de la longueur de la vidéo et du template choisi.",
    },
    {
      question: "Submagic ou Descript pour un YouTubeur qui fait les deux formats ?",
      answer: (
        <>
          Submagic pour les shorts (TikTok, Reels, YouTube Shorts),{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          pour l&apos;édition propre du long format (podcast, tuto, interview).
          Ils ne jouent pas sur le même terrain. Détail dans le{" "}
          <Link
            href="/comparatifs/submagic-vs-descript"
            className="text-violet-400 hover:underline"
          >
            comparatif Submagic vs Descript
          </Link>
          .
        </>
      ),
    },
  ],
  ctaFinal: {
    headline: "Prêt à essayer Submagic ?",
    sub: "Un outil rapide pour produire des shorts visuellement propres. Essai gratuit : 3 vidéos, sans carte bancaire.",
    buttonText: "Essayer Submagic",
  },
};

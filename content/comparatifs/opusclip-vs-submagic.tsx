import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const opusclipVsSubmagic: ComparatifData = {
  slug: "opusclip-vs-submagic",
  outilAslug: "opusclip",
  outilBslug: "submagic",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Les deux rois du short viral. Comparés sur la base de leurs fonctionnalités, de leurs plans et des retours utilisateurs publics. Le gagnant dépend de ton cas précis.",
    tempsLecture: 7,
    lastCheck: "21/08/2026",
  },
  verdictRapide: {
    headline: "OpusClip pour le volume. Submagic pour le rendu FR.",
    paragraphs: [
      <>
        <strong className="text-emerald-400">OpusClip</strong>{" "}automatise la
        découpe de vidéos longues (podcasts, lives, conférences) en clips
        courts prêts à publier. Parfait si ta source fait 30 minutes à 2
        heures.{" "}
        <strong className="text-amber-400">Submagic</strong>{" "}est plus fort sur
        la qualité des sous-titres en français et les templates viraux. Pour
        des shorts courts tournés directement, Submagic prend l&apos;avantage.
      </>,
      <>
        Beaucoup de créateurs pros utilisent les deux : OpusClip pour la
        découpe initiale, Submagic pour le polish final. Un combo économique
        qui reste rentable si tu produis du contenu régulièrement.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité en français",
      poids: 20,
      scoreA: 7.5,
      scoreB: 9.2,
      gagnant: "B",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 8.5,
      scoreB: 7.8,
      gagnant: "A",
    },
    {
      label: "Profondeur IA (découpe auto)",
      poids: 20,
      scoreA: 9.2,
      scoreB: 8.0,
      gagnant: "A",
    },
    {
      label: "Interface & prise en main",
      poids: 15,
      scoreA: 8.5,
      scoreB: 9.3,
      gagnant: "B",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      scoreA: 7.0,
      scoreB: 9.0,
      gagnant: "B",
    },
    {
      label: "Intégrations",
      poids: 10,
      scoreA: 8.0,
      scoreB: 6.5,
      gagnant: "A",
    },
  ],
  porQuiA: [
    "Tu as des vidéos longues à recycler (podcasts, lives, confs)",
    "Tu veux automatiser la production de plusieurs clips par vidéo source",
    "Tu utilises déjà un workflow Make/Zapier et veux une API",
    "Tu crées aussi en anglais ou multilingue",
    "Tu cherches un plan gratuit récurrent pour tester sans engagement",
  ],
  porQuiB: [
    "Tu tournes directement des contenus courts (face cam, Shorts)",
    "Tu vises un public FR",
    "La qualité du sous-titre FR est ton critère #1",
    "Tu veux un rendu viral stylé sans retouches manuelles",
    "Tu fais du personal branding sur LinkedIn / TikTok / Reels",
  ],
  casUsage: [
    {
      profil: "Podcasteur qui veut transformer 1h en 10 shorts",
      description:
        "OpusClip analyse toute la vidéo et propose les meilleurs moments prêts à clipper. OpusClip est nettement plus adapté à ce volume de découpe.",
      gagnant: "A",
    },
    {
      profil: "Créateur TikTok FR qui poste 3 vidéos courtes par semaine",
      description:
        "Les vidéos sont déjà courtes. Submagic excelle sur les sous-titres FR stylés. OpusClip ferait le boulot mais moins bien sur la qualité du rendu FR.",
      gagnant: "B",
    },
    {
      profil: "YouTubeur qui fait 2-3 vidéos longues par mois",
      description:
        "Combo gagnant : OpusClip pour découper en shorts, Submagic pour ajouter les sous-titres stylés sur le clip final. Si un seul choix, OpusClip.",
      gagnant: "A",
    },
    {
      profil: "Solopreneur personal branding LinkedIn vidéo",
      description:
        "Format court, audience FR, besoin de rendu pro. Submagic est l'outil le plus adapté à ce cas précis.",
      gagnant: "B",
    },
    {
      profil: "Agence social media qui gère plusieurs comptes",
      description:
        "Le clipping massif, le volume et l'orientation workflow d'OpusClip font la différence à l'échelle. Submagic en complément pour les clients qui demandent du rendu FR premium.",
      gagnant: "A",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Si tu produis du long format (podcasts, lives, confs) à recycler :{" "}
        <strong className="text-emerald-400">OpusClip</strong>. Si tu produis
        du contenu court natif en français : <strong className="text-amber-400">Submagic</strong>.
        Les deux sont complémentaires pour qui produit sérieusement du contenu
        vidéo.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer OpusClip →",
  },
  testReel: {
    intro: (
      <>
        <p className="mb-4">
          Le 21 août 2026, nous avons envoyé{" "}
          <strong className="text-slate-100">la même vidéo</strong> dans les
          deux outils, le même jour, avec un compte gratuit de chaque côté et
          les réglages par défaut. Aucune retouche manuelle : ce qui est
          comparé, c&apos;est le rendu automatique, pas notre montage.
        </p>
        <p className="mb-4">
          La source est un entretien de 1 min 17 en français, plan fixe, 720p,
          publié sous licence libre :{" "}
          <a
            href="https://tubedu.org/videos/watch/9aba92da-0f91-44cf-9904-31a66a722413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            « Sciences ensemble »
          </a>
          , interview de Laure Turcati, MOOC Science Ouverte (Alliance Sorbonne
          Université), 3 mars 2022, TubEdu, licence CC BY 4.0. Nous la citons
          pour que ce test soit reproductible : tu peux télécharger exactement
          le même fichier et refaire la manipulation.
        </p>
        <p className="text-base text-slate-400">
          Les captures ci-dessous montrent aussi des fonctions que nous
          n&apos;avons pas utilisées. Pour éviter toute confusion, chaque
          légende précise systématiquement ce qui a été{" "}
          <strong className="text-slate-300">utilisé pendant le test</strong>,
          ce qui a été{" "}
          <strong className="text-slate-300">
            seulement observé dans l&apos;interface
          </strong>{" "}
          et ce qui est{" "}
          <strong className="text-slate-300">
            marqué Pro ou consomme des crédits
          </strong>
          . Une fonction visible n&apos;est ni une fonction testée, ni une
          fonction gratuite.
        </p>
      </>
    ),
    lignes: [
      {
        critere: "Temps de traitement",
        a: "Environ 2 min 30, de l'envoi au résultat affiché.",
        b: "Environ 2 min 30, de l'envoi au résultat affiché.",
        gagnant: "egalite",
      },
      {
        critere: "Format de sortie par défaut",
        a: "Recadrage vertical 9:16 automatique. Visage centré et tête non coupée sur toute la durée contrôlée.",
        b: "Aperçu resté au format 16:9 de la source. Aucun passage automatique en vertical dans nos réglages par défaut.",
        gagnant: "A",
      },
      {
        critere: "Personnalisation avant export",
        a: "Titre automatique généré, transcription horodatée et analyse de scène consultables.",
        b: "Nombreux styles de légendes, position et taille réglables, transcription éditable mot à mot, découpage en scènes.",
        gagnant: "B",
      },
      {
        critere: "Bandeau nominatif de la vidéo source",
        a: "Le bandeau nominatif de l'intervenante disparaît : le recadrage 9:16 le fait sortir du cadre.",
        b: "Bandeau nominatif conservé, l'aperçu gardant le cadre d'origine.",
        gagnant: "B",
      },
      {
        critere: "Export sur le plan gratuit",
        a: "Téléchargement réussi sans payer. Fichier obtenu : 1080 × 1920, H.264/AAC, 24 i/s, 70 s, 52,1 Mo. Filigrane OpusClip présent.",
        b: "Export refusé. Un abonnement payant est demandé à cette étape. Aucun fichier n'a été récupéré.",
        gagnant: "A",
      },
    ],
    images: [
      /* --- Groupe OpusClip --- */
      {
        src: "/tests/2026-08-21/opusclip-catalogue-outils.png",
        alt: "Catalogue des outils affichés sur l'accueil d'OpusClip",
        caption: (
          <>
            <strong className="text-emerald-400">OpusClip · </strong>
            l&apos;accueil affiche treize entrées : conversion format long en
            shorts, IA Sous-titres, éditeur vidéo, Producteur IA (bêta),
            presets viraux (bêta), amélioration vocale, effets sonores
            automatiques, IA Reframe, IA B-Roll, voix off d&apos;accroche,
            améliorer, double vidéo et script vers vidéo. L&apos;import accepte
            un fichier, Google Drive ou un lien Rumble.{" "}
            <strong className="text-slate-200">
              Seul le parcours « Obtenir des clips en 1 clic » a été utilisé.
            </strong>{" "}
            Les douze autres entrées sont uniquement observées : nous ne les
            avons ni testées, ni vérifiées, et rien n&apos;indique
            qu&apos;elles soient incluses dans le forfait gratuit.
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/opusclip-import-plan-gratuit.png",
        alt: "Écran d'import d'OpusClip affichant le bandeau du forfait gratuit et les réglages de découpage",
        caption: (
          <>
            <strong className="text-emerald-400">OpusClip · </strong>
            l&apos;écran d&apos;import annonce le forfait gratuit «{" "}
            <span className="text-slate-200">
              avec filigrane et fonctionnalités limitées
            </span>{" "}
            » et affiche « utilisation des crédits : 1 » pour cette vidéo.
            Réglages laissés par défaut et{" "}
            <strong className="text-slate-200">utilisés tels quels</strong> :
            langue parlée sur Auto, découpage par IA, modèle de clip Auto,
            genre Auto, durée de clip Auto (0 à 3 min), titre automatique
            activé, plage de traitement complète (0:00 à 1:18).
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/opusclip-resultat-actions.png",
        alt: "Écran de résultat d'OpusClip avec la transcription et les actions disponibles sur le clip",
        caption: (
          <>
            <strong className="text-emerald-400">OpusClip · </strong>
            l&apos;écran de résultat donne l&apos;analyse de scène et la
            transcription horodatée, plus huit actions.{" "}
            <strong className="text-slate-200">
              Nous n&apos;avons utilisé que « Télécharger en HD »
            </strong>
            , qui a fonctionné sans payer. Observées sans être testées :
            publier sur les réseaux sociaux, exporter en XML et dupliquer. «{" "}
            Modifier le clip » et le bouton de ratio « 9:16 » portent la
            mention{" "}
            <strong className="text-slate-200">Pro</strong> — à noter que le
            clip livré était déjà en 9:16 sans passer par ce bouton. «{" "}
            Améliorer et télécharger » affiche un coût de{" "}
            <strong className="text-slate-200">82 crédits</strong> et
            n&apos;a pas été déclenché.
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/opusclip-export-vertical.jpg",
        alt: "Image extraite du fichier exporté par OpusClip, format vertical avec filigrane et sous-titres",
        caption: (
          <>
            <strong className="text-emerald-400">OpusClip · </strong>
            image extraite du fichier réellement exporté, pas de
            l&apos;aperçu. Recadrage 9:16 correct, filigrane en haut à gauche,
            sous-titres en capitales avec le mot en cours surligné. Le bandeau
            nominatif de la source a disparu du cadre. C&apos;est le résultat
            concret du test.
          </>
        ),
      },
      /* --- Groupe Submagic --- */
      {
        src: "/tests/2026-08-21/submagic-editeur-outils-ia.png",
        alt: "Éditeur Submagic ouvert sur le panneau des outils d'IA, avec les coûts en crédits",
        caption: (
          <>
            <strong className="text-amber-400">Submagic · </strong>
            l&apos;éditeur s&apos;organise en quatre onglets : style,
            sous-titres, outils d&apos;IA et scènes.{" "}
            <strong className="text-slate-200">
              Seuls les sous-titres IA étaient activés, et c&apos;est la seule
              fonction que nous avons utilisée.
            </strong>{" "}
            Les autres sont désactivées et{" "}
            <strong className="text-slate-200">
              affichent chacune un coût en crédits
            </strong>{" "}
            : supprimer les silences (+2), zoom automatique IA (+1),
            automatisation automatique IA (+2), titre AI Hook (+2), audio
            propre (+2), supprimer les mauvaises prises (+2), contact visuel
            correct (+3). Le compte disposait de 12 crédits.
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/submagic-styles-legendes.png",
        alt: "Galerie des styles de légendes de Submagic et réglages de position et de taille",
        caption: (
          <>
            <strong className="text-amber-400">Submagic · </strong>
            la galerie de styles de sous-titres est fournie, classée en
            onglets Tous, Tendance, Nouveau, Premium, Intervenants et Emoji,
            avec réglage de la position (50 %), de la taille de police (30 px)
            et de la police.{" "}
            <strong className="text-slate-200">
              Nous avons conservé le style par défaut
            </strong>{" "}
            : la galerie est observée, pas évaluée. Plusieurs vignettes portent
            un éclair, et l&apos;onglet Premium indique que tous les styles ne
            sont pas accessibles au même niveau d&apos;abonnement.
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/submagic-decoupage-scenes.png",
        alt: "Vue Scènes de Submagic, découpage horodaté avec emplacements A-roll",
        caption: (
          <>
            <strong className="text-amber-400">Submagic · </strong>
            la vue Scènes découpe la vidéo en segments horodatés, chacun avec
            un emplacement A-roll et un bouton d&apos;ajout, plus une zone «
            ajouter une introduction ». En en-tête : B-rolls automatiques, zoom
            automatique et titre Hook.{" "}
            <strong className="text-slate-200">
              Aucune de ces fonctions n&apos;a été déclenchée
            </strong>{" "}
            ; elles sont montrées pour donner à voir l&apos;étendue du montage
            possible, pas pour en juger la qualité.
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/submagic-menu-outils-ia.png",
        alt: "Menu compact des outils d'IA de Submagic avec le coût en crédits de chaque option",
        caption: (
          <>
            <strong className="text-amber-400">Submagic · </strong>
            la même liste en vue compacte, utile parce qu&apos;elle montre le
            coût de chaque option d&apos;un seul coup d&apos;œil.{" "}
            <strong className="text-slate-200">
              Les sept interrupteurs sont sur off
            </strong>{" "}
            : ces fonctions n&apos;ont pas été utilisées et consomment des
            crédits.
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/submagic-transcription.png",
        alt: "Éditeur de transcription Submagic affichant une précision annoncée de 98,58 %",
        caption: (
          <>
            <strong className="text-amber-400">Submagic · </strong>
            la transcription est éditable segment par segment, avec les
            horodatages et les retours à la ligne.{" "}
            <strong className="text-slate-200">
              Fonction utilisée pendant le test
            </strong>{" "}
            (consultation, sans correction manuelle). Le taux de « précision
            des sous-titres : 98,58 % » affiché en haut est un chiffre
            communiqué par Submagic :{" "}
            <strong className="text-slate-200">
              ce n&apos;est pas une mesure Filtrio
            </strong>
            , et nous ne le reprenons pas à notre compte.
          </>
        ),
      },
      {
        src: "/tests/2026-08-21/submagic-apercu-16-9.png",
        alt: "Aperçu Submagic au format 16:9 avec sous-titres incrustés",
        caption: (
          <>
            <strong className="text-amber-400">Submagic · </strong>
            l&apos;aperçu conserve le 16:9 de la source. Les sous-titres sont
            générés et le bandeau nominatif de l&apos;intervenante reste
            lisible.{" "}
            <strong className="text-slate-200">
              C&apos;est l&apos;état obtenu avec les réglages par défaut
            </strong>{" "}
            : aucun passage automatique en vertical n&apos;a eu lieu de notre
            côté.
          </>
        ),
      },
    ],
    verdict: (
      <>
        <p className="mb-4">
          Sur ce test, la vitesse ne départage rien : les deux outils ont mis
          environ 2 min 30. La différence décisive est ailleurs, et elle est
          nette.{" "}
          <strong className="text-emerald-400">
            OpusClip nous a livré un fichier vertical exploitable sans payer
          </strong>
          , filigrane compris.{" "}
          <strong className="text-amber-400">
            Submagic nous a laissés préparer un montage plus personnalisable,
            puis a demandé un abonnement au moment de l&apos;export
          </strong>
          , et nous sommes repartis sans fichier. Si ton objectif est de sortir
          un short sans sortir la carte bancaire, l&apos;écart est là.
        </p>
        <p className="mb-4">
          Un point technique à connaître avant de se réjouir du «{" "}
          1080 × 1920 » : la source était en 720p. Un recadrage 9:16 y prélève
          environ 405 pixels de large, ensuite agrandis. C&apos;est un
          agrandissement, pas un gain de définition.
        </p>
        <p className="mb-4">
          Un piège que personne ne mentionne, et qui compte si tu découpes des
          interviews : le recadrage vertical automatique fait sortir du cadre
          les bandeaux nominatifs incrustés. Le nom et la fonction de la
          personne filmée disparaissent du clip.{" "}
          <a
            href="/tests/2026-08-21/opusclip-export-720x1280.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            Le clip exporté est consultable ici
          </a>{" "}
          (copie allégée en 720 × 1280 pour l&apos;hébergement, contenu et
          filigrane identiques).
        </p>
        <p className="mb-4 text-slate-400">
          <strong className="text-slate-300">
            Ce que ce test ne prouve pas.
          </strong>{" "}
          Une seule vidéo, 1 min 17, un plan fixe, en français, deux comptes
          gratuits, les réglages par défaut, un seul jour. Un plan fixe est un
          exercice facile pour un recadrage automatique : n&apos;en concluez
          rien sur des séquences avec mouvement ou plusieurs intervenants. Nous
          n&apos;avons pas mesuré de taux d&apos;erreur de transcription, et
          nous ne publions donc aucun chiffre de précision. Les fonctions
          repérées dans les deux interfaces mais non utilisées ne sont pas
          évaluées ici, et rien n&apos;indique qu&apos;elles soient incluses
          gratuitement.
        </p>
        <p className="text-slate-400">
          <strong className="text-slate-300">
            Ce test ne modifie aucune note.
          </strong>{" "}
          Les scores affichés plus haut restent ceux de notre analyse
          documentaire. Un test unique sur une vidéo ne suffit pas à faire
          bouger une grille de notation, et nous ne l&apos;utiliserons pas pour
          justifier après coup une note déjà publiée.
        </p>
      </>
    ),
  },
  faq: [
    {
      question: "Peut-on utiliser les deux dans le même workflow ?",
      answer:
        "Oui, c'est même le setup le plus puissant. OpusClip pour la découpe initiale, Submagic pour le rendu final FR stylé. Combo économique qui se rentabilise rapidement dès qu'on produit plusieurs shorts par mois.",
    },
    {
      question: "Lequel a la meilleure qualité de sous-titres en français ?",
      answer:
        "Submagic, selon les retours publics et notre analyse. OpusClip a progressé en 2025-2026 mais reste en retrait sur la segmentation FR et les accents régionaux.",
    },
    {
      question: "Y a-t-il un plan gratuit durable ?",
      answer:
        "Oui, les deux proposent une porte d'entrée gratuite, mais elles ne servent pas le même usage. OpusClip pousse davantage le clipping de vidéos longues avec une logique plus orientée volume, tandis que Submagic propose une formule gratuite plus limitée pour tester son rendu et son workflow.",
    },
    {
      question: "Lequel est le plus crédible pour un workflow automatisé ?",
      answer:
        "OpusClip reste plus crédible si ton besoin principal est le clipping à grande échelle et un workflow orienté volume. Submagic affiche aussi des options d'API et d'intégrations sur ses offres, mais l'outil reste surtout pensé pour produire rapidement des shorts avec un rendu visuel fort, pas comme une plateforme d'automatisation lourde.",
    },
    {
      question: "Lequel choisir pour débuter ?",
      answer: (
        <>
          Si tu pars de vidéos longues, commence avec le plan gratuit
          d&apos;OpusClip pour te faire une idée. Si tu tournes déjà court,
          teste l&apos;essai gratuit de Submagic puis décide. Les deux sont
          plus simples que leurs concurrents (
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>
          ,{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>
          ).
        </>
      ),
    },
  ],
};

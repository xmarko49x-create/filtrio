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
          Ce tableau résume le face-à-face. La visite guidée détaillée de chaque
          outil, captures à l&apos;appui, est publiée sur sa fiche : les liens
          sont juste en dessous du verdict.
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
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <Link
            href="/outils/submagic"
            className="block bg-slate-950 border border-amber-500/30 hover:border-amber-500 rounded-xl p-6 transition"
          >
            <div className="text-lg font-bold text-amber-400 mb-2">
              Voir le test complet de Submagic →
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-0">
              La visite guidée capture par capture : l&apos;écran de génération,
              le rendu, l&apos;éditeur, les styles, les scènes, les outils
              d&apos;IA avec leur coût en crédits, l&apos;audio, la miniature et
              l&apos;export.
            </p>
          </Link>
          <Link
            href="/outils/opusclip"
            className="block bg-slate-950 border border-emerald-500/30 hover:border-emerald-500 rounded-xl p-6 transition"
          >
            <div className="text-lg font-bold text-emerald-400 mb-2">
              Voir le test complet d&apos;OpusClip →
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-0">
              La visite guidée capture par capture : le catalogue d&apos;outils,
              l&apos;import et son forfait gratuit, le réglage de langue, les
              actions sur le clip avec leurs mentions Pro, et le rendu vertical
              livré.
            </p>
          </Link>
        </div>

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
        "Oui, les deux proposent une porte d'entrée gratuite, mais elles ne servent pas le même usage. OpusClip pousse davantage le clipping de vidéos longues avec une logique plus orientée volume, tandis que Submagic propose une formule gratuite plus limitée pour tester son rendu et son workflow. Lors de notre test du 21 août 2026, sur une vidéo et avec les réglages par défaut : chez Submagic, la génération des sous-titres et l'édition ont fonctionné sans aucun paiement, mais un abonnement a été demandé au moment de l'export et nous sommes repartis sans fichier ; chez OpusClip, le téléchargement du clip a fonctionné gratuitement, avec un filigrane incrusté. Ce constat vaut pour cette manipulation datée, pas comme règle générale sur les offres des deux éditeurs.",
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

import Link from "next/link";
import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";

export const submagicVsCapcut: ComparatifData = {
  slug: "submagic-vs-capcut",
  outilAslug: "submagic",
  outilBslug: "capcut",
  hero: {
    h1: "lequel choisir ?",
    tagline:
      "Le spécialiste payant des sous-titres FR (Submagic) contre l'éditeur vidéo gratuit leader (CapCut). Deux philosophies : qualité premium vs gratuité complète. Voici laquelle colle à ton profil et ton budget.",
    tempsLecture: 6,
    lastCheck: "24/08/2026",
  },
  verdictRapide: {
    headline:
      "Submagic pour qui veut des shorts léchés. CapCut pour qui veut tout faire sans payer.",
    paragraphs: [
      <>
        <strong className="text-amber-400">Submagic</strong>{" "}est une option
        logique si ta priorité est la qualité visuelle des sous-titres en
        français, la régularité de production et le gain de temps sur les
        shorts. Ses styles animés font la différence visuellement.{" "}
        <strong className="text-sky-400">CapCut</strong>{" "}est un choix solide si
        tu débutes, si ton budget est zéro, ou si tu veux un éditeur vidéo
        complet en plus du sous-titrage.
      </>,
      <>
        La question n&apos;est donc pas &quot;lequel est le meilleur&quot; mais
        &quot;quel est ton budget et ton niveau d&apos;exigence visuelle&quot;.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité en français",
      poids: 20,
      scoreA: 9.2,
      scoreB: 7.5,
      gagnant: "A",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      scoreA: 7.8,
      scoreB: 9.5,
      gagnant: "B",
    },
    {
      label: "Profondeur IA",
      poids: 20,
      scoreA: 8.2,
      scoreB: 7.2,
      gagnant: "A",
    },
    {
      label: "Interface & prise en main",
      poids: 15,
      scoreA: 9.3,
      scoreB: 8.0,
      gagnant: "A",
    },
    {
      label: "Polyvalence édition vidéo",
      poids: 15,
      scoreA: 5.5,
      scoreB: 9.3,
      gagnant: "B",
    },
    {
      label: "Intégrations",
      poids: 10,
      scoreA: 6.5,
      scoreB: 8.5,
      gagnant: "B",
    },
  ],
  porQuiA: [
    "Tu produis régulièrement des shorts (3+ par semaine)",
    "Tu vises un public FR (précision FR plus travaillée)",
    "Tu veux des styles de sous-titres animés prêts, sans effort",
    "Tu as un budget de 12-23 €/mois à allouer (plans Starter ou Pro)",
    "Tu veux maximiser le rendement par short",
  ],
  porQuiB: [
    "Ton budget est zéro (la version gratuite de CapCut couvre la majorité des besoins, un plan Pro existe pour les fonctionnalités avancées)",
    "Tu débutes et tu n'es pas sûr de ton engagement dans la création",
    "Tu veux aussi un éditeur vidéo complet (timeline, transitions, effets)",
    "Tu montes tes vidéos principalement sur mobile",
    "Tu publies ponctuellement plutôt que de façon régulière",
  ],
  casUsage: [
    {
      profil: "Créateur régulier (3-5 shorts par semaine)",
      description:
        "La régularité de rendu et le gain de temps par vidéo justifient l'abonnement. Sur 20 shorts par mois, l'écart de qualité visuelle fait la différence sur l'engagement.",
      gagnant: "A",
    },
    {
      profil: "Débutant qui teste avant de s'engager",
      description:
        "CapCut permet de poster sans budget pendant plusieurs mois, le temps de savoir si la création t'intéresse vraiment. Tu basculeras sur Submagic plus tard si besoin.",
      gagnant: "B",
    },
    {
      profil: "Monteur qui veut un outil vidéo complet en plus du sous-titrage",
      description:
        "Tu fais aussi des montages long-format, des transitions, du color grading. CapCut couvre tout ça sans avoir à ouvrir un second outil.",
      gagnant: "B",
    },
    {
      profil: "Agence qui produit des shorts pour clients",
      description:
        "Régularité de rendu, qualité FR, gain de temps sur le volume. L'abonnement Submagic devient un coût de production, pas une dépense personnelle.",
      gagnant: "A",
    },
    {
      profil: "Créateur mobile-first qui monte sur smartphone",
      description:
        "CapCut est né mobile et reste une référence sur ce format. L'application iOS/Android est particulièrement fluide, utilisable sans passer par le web.",
      gagnant: "B",
    },
  ],
  verdictFinal: {
    headline: "En résumé.",
    paragraph: (
      <>
        Submagic pour un créateur régulier qui veut des shorts léchés en FR.
        CapCut pour un débutant sans budget ou pour quelqu&apos;un qui veut
        aussi un éditeur vidéo complet. Beaucoup d&apos;utilisateurs avancés
        combinent les deux : CapCut pour le montage général, Submagic pour
        finaliser les sous-titres FR stylés.
      </>
    ),
    ctaGagnant: "A",
    ctaText: "Essayer Submagic →",
  },
  testReel: {
    intro: (
      <>
        <p className="mb-4">
          Nous avons fait passer{" "}
          <strong className="text-slate-100">la même vidéo</strong> dans les
          deux outils, avec un compte gratuit de chaque côté et les réglages par
          défaut, sans aucune retouche manuelle. Ce qui est comparé, c&apos;est
          le rendu automatique.
        </p>
        <p className="mb-4">
          La source est un entretien de 1 min 17 en français, plan fixe, 720p,
          publié sous licence libre :{" "}
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
        <p className="text-base text-slate-400">
          Une précision de méthode :{" "}
          <strong className="text-slate-300">
            les deux sessions n&apos;ont pas eu lieu le même jour
          </strong>{" "}
          — Submagic le 21 août 2026, CapCut le 24 août 2026. Le fichier source
          et les réglages sont identiques, mais ce n&apos;est pas une
          manipulation simultanée. Le détail complet, capture par capture, est
          publié sur chaque fiche : les liens sont sous le verdict.
        </p>
      </>
    ),
    lignes: [
      {
        critere: "Nature de l'outil",
        a: "Outil spécialisé : générer des sous-titres stylés pour vidéos courtes.",
        b: "Logiciel de montage complet : timeline, texte, musique, transitions, effets, filtres, réglages audio et colorimétriques.",
        gagnant: "B",
      },
      {
        critere: "Temps de génération des sous-titres",
        a: "Environ 2 min 30, de l'envoi au résultat affiché.",
        b: "Moins d'une minute, sur le même fichier.",
        gagnant: "B",
      },
      {
        critere: "Format de sortie par défaut",
        a: "Aperçu resté au format 16:9 de la source, aucun passage automatique en vertical.",
        b: "Format 16:9 d'origine conservé également, aucun recadrage automatique.",
        gagnant: "egalite",
      },
      {
        critere: "Lisibilité du rendu par défaut",
        a: "Sous-titres nets, mot en cours surligné, bandeau nominatif de la source resté lisible.",
        b: "Le sous-titre blanc par défaut se pose sur le bandeau nominatif de la source et devient difficile à lire ; un mot coupé entre deux lignes.",
        gagnant: "A",
      },
      {
        critere: "Erreurs de transcription visibles",
        a: "Non relevées sur les passages contrôlés lors de notre session.",
        b: "Deux erreurs directement lisibles à l'image : « 1 quarantaine de projets 1 p'tit peu plus » et « de des projets ». Exemples ponctuels, aucun taux d'erreur calculé.",
        gagnant: "A",
      },
      {
        critere: "Export sur le plan gratuit",
        a: "Export refusé. Un abonnement payant est demandé à cette étape. Aucun fichier récupéré.",
        b: "Export refusé à cause d'une fonction précise : l'écran de blocage nomme les « légendes automatiques » comme seule fonctionnalité Pro utilisée, et ne liste rien d'autre. Un essai Pro gratuit était proposé, non activé volontairement. L'export d'un montage sans aucune fonction Pro n'a pas été testé ce jour-là.",
        gagnant: "egalite",
      },
    ],
    verdict: (
      <>
        <p className="mb-4">
          Le constat qui compte pour quelqu&apos;un qui débute sans budget :{" "}
          <strong className="text-slate-100">
            aucun des deux ne nous a livré de fichier sous-titré gratuitement
          </strong>
          . Submagic demande un abonnement au moment de l&apos;export. CapCut
          laisse tout faire, puis classe les sous-titres automatiques en
          fonctionnalité Pro au moment d&apos;enregistrer. Dans les deux cas, le
          plan gratuit sert à voir le rendu, pas à publier.
        </p>
        <p className="mb-4">
          Mais les deux blocages n&apos;ont pas la même nature, et la nuance
          change tout.{" "}
          <strong className="text-sky-400">
            Chez CapCut, ce n&apos;est pas l&apos;export qui est payant, c&apos;est
            la fonction que nous avions utilisée
          </strong>{" "}
          : l&apos;écran de blocage nomme les « légendes automatiques » et ne
          liste rien d&apos;autre. D&apos;après notre usage de CapCut en dehors
          de ce test, un montage assemblé soi-même sans aucune option marquée
          d&apos;un diamant s&apos;exporte gratuitement.{" "}
          <strong className="text-slate-300">
            Cette manipulation-là n&apos;a pas été refaite le 24 août
          </strong>{" "}
          : nous la signalons parce qu&apos;elle est utile, pas comme un
          résultat mesuré, et elle ne compte donc pas dans le tableau
          ci-dessus.
        </p>
        <p className="mb-4">
          Sur la vitesse, CapCut prend l&apos;avantage : moins d&apos;une minute
          contre environ 2 min 30. Sur la qualité du rendu par défaut,
          c&apos;est l&apos;inverse — chez CapCut le sous-titre blanc vient
          recouvrir le bandeau au nom de l&apos;intervenante, et deux fautes de
          transcription sont lisibles à l&apos;image. Submagic livre un rendu
          plus propre sans qu&apos;on ait à y toucher.
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
            href="/outils/capcut"
            className="block bg-slate-950 border border-sky-500/30 hover:border-sky-500 rounded-xl p-6 transition"
          >
            <div className="text-lg font-bold text-sky-400 mb-2">
              Voir le test complet de CapCut →
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-0">
              Vingt et une captures commentées en langage simple : ce
              qu&apos;est chaque outil, à quoi il sert, et lesquels portent le
              diamant violet qui signale une fonction réservée à
              l&apos;abonnement Pro.
            </p>
          </Link>
        </div>

        <p className="mb-4 text-slate-400">
          <strong className="text-slate-300">
            Ce que ce test ne prouve pas.
          </strong>{" "}
          Une seule vidéo, 1 min 17, un plan fixe, en français, deux comptes
          gratuits, les réglages par défaut, et deux sessions à trois jours
          d&apos;intervalle. Nous n&apos;avons mesuré aucun taux d&apos;erreur
          de transcription : les fautes citées sont des exemples vérifiables sur
          les captures, pas une statistique. Les nombreuses fonctions repérées
          dans les deux interfaces mais non utilisées ne sont pas évaluées, et
          rien n&apos;indique qu&apos;elles soient incluses gratuitement.
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
      question: "CapCut est-il vraiment gratuit sans limite ?",
      answer:
        "Le plan gratuit couvre la majorité des besoins d'un créateur individuel : export HD, sous-titres auto, templates, effets de base. Certaines fonctionnalités premium (export 4K, stock premium, fonctionnalités IA avancées) nécessitent le plan Pro. Pour de la création de shorts classique, la version gratuite reste suffisante.",
    },
    {
      question:
        "Peut-on obtenir la même qualité de sous-titres avec CapCut qu'avec Submagic ?",
      answer: (
        <>
          Techniquement, tu peux personnaliser manuellement les sous-titres de
          CapCut pour t&apos;approcher du rendu{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          . Mais ça demande beaucoup plus de temps par vidéo. Submagic propose
          des styles de sous-titres animés prêts en un clic. Si tu fais 1 short
          par semaine, aucun problème. Si tu en fais 5, l&apos;écart de
          productivité devient critique.
        </>
      ),
    },
    {
      question: "CapCut est-il sûr niveau données personnelles ?",
      answer: (
        <>
          CapCut appartient à ByteDance (maison mère de TikTok). Les conditions
          d&apos;utilisation ont fait débat concernant les droits sur le contenu
          uploadé. ByteDance a depuis clarifié ses CGU, mais si tu es sensible à
          la question des données, c&apos;est un point à peser.{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          , équipe basée en France, offre un cadre juridique différent (RGPD
          strict).
        </>
      ),
    },
    {
      question: "Peut-on utiliser les deux en complément ?",
      answer: (
        <>
          Oui, c&apos;est un workflow pratiqué par beaucoup
          d&apos;utilisateurs avancés : CapCut pour le montage général et les
          effets avancés,{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          pour finaliser les sous-titres FR stylés. Combo courant chez les
          créateurs réguliers qui veulent le meilleur des deux mondes.
        </>
      ),
    },
    {
      question: "Y a-t-il une alternative si je n'aime ni l'un ni l'autre ?",
      answer: (
        <>
          Plusieurs options sérieuses :{" "}
          <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
            OpusClip
          </Link>{" "}
          si tu pars de sources longues,{" "}
          <Link href="/outils/descript" className="text-violet-400 hover:underline">
            Descript
          </Link>{" "}
          pour éditer du long-format textuellement,{" "}
          <Link href="/outils/veed" className="text-yellow-400 hover:underline">
            Veed
          </Link>{" "}
          pour un positionnement intermédiaire,{" "}
          <Link href="/outils/kapwing" className="text-green-400 hover:underline">
            Kapwing
          </Link>{" "}
          pour un usage collaboratif. Voir aussi la meta-page{" "}
          <Link
            href="/comparatifs/alternatives-a-submagic"
            className="text-amber-400 hover:underline"
          >
            Alternatives à Submagic
          </Link>
          .
        </>
      ),
    },
  ],
};

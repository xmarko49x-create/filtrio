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
    lastCheck: "22/04/2026",
  },
  verdictRapide: {
    headline:
      "Submagic pour qui veut des shorts léchés. CapCut pour qui veut tout faire sans payer.",
    paragraphs: [
      <>
        <strong className="text-amber-400">Submagic</strong> est une option
        logique si ta priorité est la qualité visuelle des sous-titres en
        français, la régularité de production et le gain de temps sur les
        shorts. Ses styles animés font la différence visuellement.{" "}
        <strong className="text-sky-400">CapCut</strong> est un choix solide si
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
    "Ton budget est zéro (CapCut reste 100% gratuit pour la majorité des besoins)",
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
  faq: [
    {
      question: "CapCut est-il vraiment gratuit sans limite ?",
      answer:
        "Le plan gratuit couvre la majorité des besoins d'un créateur individuel : export HD, sous-titres auto, templates, effets de base. Certaines fonctionnalités premium (export 4K, stock premium, features IA avancées) nécessitent le plan Pro. Pour de la création de shorts classique, la version gratuite reste suffisante.",
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

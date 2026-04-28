import Link from "next/link";
import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";

export const submagicOuOpusclipShortsFr: CasUsageData = {
  slug: "submagic-ou-opusclip-shorts-fr",
  gagnantSlug: "submagic",
  hero: {
    h1: "Submagic ou OpusClip pour des shorts en français",
    tagline:
      "C'est la question qui revient le plus chez les créateurs FR. Les deux outils sont excellents mais ne résolvent pas le même problème. Voici le choix guidé en 4 questions pour savoir lequel prendre — ou quand utiliser les deux.",
    tempsLecture: 5,
    outilsAnalyses: 2,
    lastCheck: "20/04/2026",
  },
  verdict: {
    tag: "La recommandation tout de suite",
    headline: (
      <>
        Contenu court natif → <span className="text-amber-400">Submagic</span>.
        Long format à découper → OpusClip. Volume pro → les deux.
      </>
    ),
    paragraphs: [
      <>
        <strong className="text-amber-400">Submagic</strong> excelle sur le
        rendu final : sous-titres viraux stylés FR, templates prêts, recadrage
        9:16 natif. <strong className="text-emerald-400">OpusClip</strong>{" "}
        excelle sur l&apos;extraction : prendre une vidéo longue d&apos;1h et
        en sortir 5-15 shorts automatiquement.
      </>,
      <>
        Beaucoup de créateurs pros utilisent les deux : OpusClip pour la
        découpe initiale, Submagic pour le polish final. Un combo économique
        qui se rentabilise rapidement dès qu&apos;on produit plusieurs shorts
        par mois.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité sous-titres FR",
      poids: 30,
      description:
        "Sur un public FR, la précision FR fait 80% de la perception de qualité.",
    },
    {
      label: "Automatisation (découpe auto)",
      poids: 25,
      description:
        "Capacité à sortir plusieurs shorts depuis une source longue sans découpe manuelle.",
    },
    {
      label: "Rendu visuel final",
      poids: 20,
      description:
        "Templates animés, emojis contextuels, style viral prêt à publier.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 15,
      description:
        "Prix d'entrée et plan gratuit récurrent pour tester durablement.",
    },
    {
      label: "API et intégrations",
      poids: 10,
      description:
        "Pour qui veut industrialiser (agence, gros volume).",
    },
  ],
  classement: [
    {
      slug: "submagic",
      scoreCas: 9.3,
      badge: "Rendu final FR",
      pourquoiGagne: [
        "Précision FR la plus élevée du marché",
        "Templates viraux FR prêts à l'emploi",
        "Recadrage 9:16 automatique",
        "Workflow 3 clics pour un short fini",
        "Origine française, support FR",
      ],
      limites: [
        "Pas optimal pour découper une vidéo d'1h en 10 shorts",
        "Pas de plan gratuit récurrent, seulement un essai limité",
        "Pas d'API publique",
      ],
      verdict:
        "Si tu tournes directement des shorts (face cam, moments courts), Submagic est le choix évident. Le rendu FR + les templates font la différence visible.",
      priceDisplay: { label: "À partir de", value: "12 €/mois" },
    },
    {
      slug: "opusclip",
      scoreCas: 8.9,
      badge: "Découpe auto",
      pourquoiGagne: [
        "Détection IA des moments forts sur long format",
        "Recadrage 9:16 + sous-titres auto dans le même outil",
        "Plan gratuit 60 min/mois récurrent (vraiment utilisable)",
        "API sur plan Pro pour industrialiser",
        "Fort en EN aussi, utile si multilingue",
      ],
      limites: [
        "Rendu FR légèrement en retrait de Submagic sur le style visuel",
        "Templates moins 'viraux FR' que Submagic",
        "Sous-titres corrects mais moins stylés par défaut",
      ],
      verdict:
        "Si tu pars de long format (podcasts, lives, vidéos YouTube d'1h), OpusClip est nettement plus adapté. Rentabilisé dès 3-4 vidéos sources par mois.",
      priceDisplay: {
        label: "À partir de",
        value: "15 $/mois",
        note: "Plan gratuit disponible",
      },
    },
  ],
  pourquoiGagne: [
    {
      titre: "Submagic gagne si tu tournes directement court",
      description:
        "Tu tournes des shorts de 30-90 sec en face cam ou en voix off. Submagic te donne un rendu viral FR en 90 secondes. OpusClip serait du gaspillage ici — tu n'as pas de long format à découper.",
    },
    {
      titre: "OpusClip gagne si tu pars de long",
      description:
        "Tu fais des podcasts d'1h, des lives YouTube, des conférences. OpusClip identifie les passages forts et génère 5-15 clips prêts. Faire ça à la main prendrait 2-3h par vidéo source.",
    },
    {
      titre: "Le combo gagne en volume",
      description:
        "Pour un créateur qui publie régulièrement des shorts depuis du long format : OpusClip pour extraire, export, upload dans Submagic pour polish final. Combo économique, gain de temps massif vs un seul outil.",
    },
    {
      titre: "Pas la même facturation",
      description:
        "Submagic facture sur un volume de vidéos par mois. OpusClip facture sur un volume de minutes de source analysée. Selon ton usage (podcasts longs ou vidéos courtes), l'un sera plus avantageux que l'autre. Les détails de chaque plan sont à consulter sur les sites officiels.",
    },
  ],
  piegesAEviter: [
    {
      titre: "Choisir sans savoir ce qu'on publie",
      description:
        "La question n'est pas 'lequel est meilleur' mais 'que publies-tu ?'. Si tu ne sais pas encore, teste le plan gratuit d'OpusClip sur une vidéo existante, tu verras vite si c'est ton workflow.",
    },
    {
      titre: "Essayer de faire tout avec un seul",
      description:
        "Submagic n'est pas fait pour découper 1h de podcast. OpusClip n'est pas fait pour du rendu viral FR premium. Essayer de faire 100% avec un des deux = frustration. Accepte la division du travail.",
    },
    {
      titre: "Ignorer le volume réel de production",
      description:
        "Si tu publies 2 shorts par mois occasionnels, CapCut gratuit suffit, ni Submagic ni OpusClip ne sont justifiés. Si tu publies 15+ shorts par mois pour construire une audience, le combo Submagic + OpusClip est rentabilisé dès le 2e mois.",
    },
    {
      titre: "Oublier que l'affiliation existe",
      description: (
        <>
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          propose 30% récurrent à vie,{" "}
          <Link
            href="/outils/opusclip"
            className="text-emerald-400 hover:underline"
          >
            OpusClip
          </Link>{" "}
          25% récurrent 1 an. Si tu fais parler de toi comme créateur, les deux
          programmes affiliés peuvent partiellement payer tes abonnements.
        </>
      ),
    },
  ],
  commentChoisir: [
    {
      question: "Tu tournes directement des shorts (face cam, 30-90 sec) ?",
      reponse: (
        <>
          Si oui → <strong className="text-amber-400">Submagic</strong> seul.
          À partir de 12 €/mois, rentabilisé rapidement dès qu&apos;on publie
          plusieurs shorts par mois.
        </>
      ),
    },
    {
      question: "Tu pars d'une source longue (podcast, live, vidéo YouTube d'1h+) ?",
      reponse: (
        <>
          Si oui → <strong className="text-emerald-400">OpusClip</strong> seul
          (à partir de 15 $/mois). Plan gratuit disponible pour tester.
        </>
      ),
    },
    {
      question: "Tu produis plusieurs shorts par mois depuis du long format ?",
      reponse: (
        <>
          Si oui → Combo <strong className="text-emerald-400">OpusClip</strong> +{" "}
          <strong className="text-amber-400">Submagic</strong>. Combo économique,
          workflow pro complet.
        </>
      ),
    },
    {
      question: "Tu es débutant avec budget zéro ?",
      reponse: (
        <>
          Plan gratuit OpusClip ou{" "}
          <strong className="text-sky-400">CapCut</strong> gratuit.
          L&apos;essai Submagic reste limité pour un vrai test.
        </>
      ),
    },
  ],
  faq: [
    {
      question: "Peut-on migrer de l'un à l'autre facilement ?",
      answer:
        "Oui, les deux acceptent du contenu vidéo standard en entrée. Tu peux tester l'un, ne pas être satisfait, passer à l'autre. Aucun verrou technique. La seule perte : ton historique de projets ne migre pas.",
    },
    {
      question: "Lequel génère les meilleurs sous-titres FR ?",
      answer:
        "Submagic, selon les retours publics G2/Reddit et notre analyse des features. OpusClip a progressé en 2025-2026 mais reste en léger retrait sur la segmentation FR, les accents régionaux et la cohérence ponctuation.",
    },
    {
      question: "Le combo vaut-il son coût ?",
      answer: (
        <>
          Si tu publies plusieurs shorts par mois depuis du long format, oui
          largement. Le temps gagné par rapport à un workflow manuel rentabilise
          rapidement les deux abonnements combinés, d&apos;autant plus à
          mesure que le volume de publication augmente. Voir
          aussi le{" "}
          <Link
            href="/comparatifs/opusclip-vs-submagic"
            className="text-emerald-400 hover:underline"
          >
            comparatif direct
          </Link>
          .
        </>
      ),
    },
    {
      question: "Peut-on remplacer Submagic par CapCut dans le combo ?",
      answer: (
        <>
          Oui, possible si budget serré. Workflow : OpusClip pour découper,{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          (gratuit) pour finaliser. Tu économises le coût de Submagic, mais tu
          perds du temps en personnalisation manuelle par short. Équation à
          faire selon ton volume de production.
        </>
      ),
    },
    {
      question: "Est-ce que Submagic va intégrer une découpe auto à terme ?",
      answer:
        "Des features d'auto-sélection de moments forts ont été ajoutées en 2025, mais reste moins mature qu'OpusClip sur ce terrain. Submagic reste focalisé sur le rendu final viral. Peu probable qu'ils rattrapent OpusClip sur la découpe pure à court terme.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à choisir ?",
    paragraph:
      "Si tu hésites, commence par OpusClip gratuit (60 min/mois) pour voir si la découpe auto t'est utile. Si oui, ajoute Submagic pour le rendu final. Si non, Submagic seul suffira.",
    buttonText: "Essayer Submagic",
  },
  autresCasUsage: [
    {
      slug: "video-longue-en-shorts",
      titre: "Transformer une vidéo longue en shorts",
      description: "Le workflow complet pour recycler ton contenu long.",
      color: "emerald",
    },
    {
      slug: "sous-titrer-tiktok",
      titre: "Meilleur outil IA pour sous-titrer TikTok",
      description: "Précision FR, rapidité, style viral.",
      color: "amber",
    },
    {
      slug: "sous-titres-rapides",
      titre: "Outil le plus rapide pour sous-titres automatiques",
      description: "La vitesse pure, quel que soit le type de contenu.",
      color: "amber",
    },
  ],
};

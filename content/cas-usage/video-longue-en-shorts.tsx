import Link from "next/link";
import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";

export const videoLongueEnShorts: CasUsageData = {
  slug: "video-longue-en-shorts",
  gagnantSlug: "opusclip",
  hero: {
    h1: "Transformer une vidéo longue en shorts : 5 outils comparés en 2026",
    tagline:
      "Tu as un podcast, un live ou une conférence d'une à deux heures à recycler en shorts verticaux pour TikTok, Reels ou YouTube Shorts. Voici notre classement des outils qui livrent le meilleur résultat, le gagnant, et les pièges à éviter.",
    tempsLecture: 6,
    outilsAnalyses: 5,
    lastCheck: "10/06/2026",
  },
  verdict: {
    tag: "Le verdict en 30 secondes",
    headline: (
      <>
        Pour la découpe automatique, <span className="text-emerald-400">OpusClip</span>{" "}
        reste devant.
      </>
    ),
    paragraphs: [
      <>
        L&apos;IA identifie les passages forts d&apos;une vidéo longue et
        propose une série de clips courts prêts à publier, avec sous-titres
        auto et recadrage vertical. Gain de temps important par rapport à une
        découpe manuelle.
      </>,
      <>
        <strong className="text-slate-200">Alternative sérieuse :</strong>{" "}
        <Link href="/outils/descript" className="text-violet-400 hover:underline">
          Descript
        </Link>{" "}
        si tu veux aussi éditer les clips textuellement.{" "}
        <Link href="/outils/submagic" className="text-amber-400 hover:underline">
          Submagic
        </Link>{" "}
        pour finaliser le rendu FR stylé après découpe.
      </>,
    ],
  },
  criteres: [
    {
      label: "Qualité de la détection IA",
      poids: 30,
      description:
        "L'IA sait-elle repérer les moments forts, les punchlines, les transitions naturelles ?",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      description:
        "Combien d'heures de source couvertes par mois pour quel tarif. Plan gratuit durable valorisé.",
    },
    {
      label: "Qualité sous-titres FR",
      poids: 20,
      description:
        "Précision, segmentation, gestion des accents. Pour un public FR, critique.",
    },
    {
      label: "Recadrage 9:16 auto",
      poids: 15,
      description:
        "Suit-il correctement le visage ou doit-on recadrer manuellement chaque clip ?",
    },
    {
      label: "API & intégrations",
      poids: 15,
      description:
        "Automatisation via Make/Zapier pour qui produit à grande échelle.",
    },
  ],
  classement: [
    {
      slug: "opusclip",
      scoreCas: 9.4,
      badge: "Spécialiste découpe",
      pourquoiGagne: [
        "Une des détections IA des moments forts les plus matures du marché",
        "Sous-titres auto intégrés, pas besoin d'un second outil",
        "Recadrage 9:16 avec suivi de visage fluide",
        "API disponible sur le plan le plus élevé (Business), à vérifier sur opus.pro",
        "Plan gratuit récurrent pour tester durablement (pas juste un essai limité dans le temps)",
      ],
      limites: [
        "Qualité sous-titres FR en retrait vs Submagic",
        "Rendu final parfois générique sans retouches",
        "Les fonctionnalités avancées sont sur les plans supérieurs",
      ],
      verdict:
        "Si tu produis du long format régulièrement, OpusClip est l'investissement le plus logique. Rentabilisé rapidement dès qu'on produit plusieurs shorts par mois.",
      priceDisplay: { label: "À partir de", value: "15 $/mois", note: "Plan gratuit disponible" },
    },
    {
      slug: "submagic",
      scoreCas: 8.2,
      badge: "Spécialiste FR",
      pourquoiGagne: [
        "Parmi les rendus FR les plus aboutis une fois les clips découpés (templates prêts à l'emploi)",
        "Très bonne précision des sous-titres FR selon les retours publics",
        "Complément naturel d'OpusClip en 2e étape du workflow",
        "Prise en main très rapide, interface simple",
      ],
      limites: [
        "La découpe automatique passe par l'add-on Magic Clips, facturé en plus de l'abonnement",
        "Pensé d'abord pour les vidéos courtes (plafond de durée selon le plan)",
        "Pas de plan gratuit récurrent, seulement un essai limité",
      ],
      verdict:
        "Excellent sur le rendu final FR et les sous-titres stylés. Moins adapté à la découpe automatique de longs contenus. Idéal en complément d'OpusClip.",
      priceDisplay: { label: "À partir de", value: "12 €/mois" },
    },
    {
      slug: "descript",
      scoreCas: 8.0,
      badge: "Tout-en-un",
      pourquoiGagne: [
        "Édition textuelle unique : tu coupes la vidéo en supprimant du texte dans la transcription",
        "Workflow complet : enregistrement, édition long format et découpe en clips dans le même outil",
        "Accepte l'URL YouTube en entrée, comme OpusClip",
        "Bon choix si tu édites aussi tes épisodes longs, pas seulement les shorts",
      ],
      limites: [
        "Prise en main plus lourde que les outils dédiés à la découpe",
        "Détection automatique des moments forts moins poussée qu'OpusClip",
        "Qualité FR correcte mais en retrait des outils spécialisés FR",
      ],
      verdict:
        "Plus complet (édition textuelle + enregistrement + découpe) mais plus lourd à prendre en main. Pertinent si ton workflow inclut aussi l'édition long format.",
      priceDisplay: { label: "À partir de", value: "16 $/mois" },
    },
    {
      slug: "capcut",
      scoreCas: 7.0,
      badge: "Gratuit",
      pourquoiGagne: [
        "Gratuit, sans limite de vidéos sur la version gratuite",
        "Sous-titres automatiques FR corrects",
        "Édition complète intégrée pour finaliser les clips dans la même app",
        "Disponible sur desktop et mobile (iOS, Android)",
      ],
      limites: [
        "Pas de détection IA des moments forts : la découpe reste manuelle",
        "Workflow beaucoup plus long sur une source d'une heure",
        "Pas d'import direct par URL YouTube",
      ],
      verdict:
        "Gratuit, sous-titres auto corrects, mais découpe manuelle. Ne remplace pas OpusClip pour qui veut automatiser. OK pour un créateur occasionnel qui a du temps.",
      priceDisplay: { label: "Prix", value: "Gratuit" },
    },
    {
      slug: "veed",
      scoreCas: 6.8,
      pourquoiGagne: [
        "Éditeur web complet accessible depuis n'importe quel navigateur",
        "Sous-titres FR automatiques avec édition manuelle simple",
        "Bonne option si tu utilises déjà Veed pour d'autres besoins vidéo",
      ],
      limites: [
        "Fonctions de découpe IA en progression, mais pas au niveau du spécialiste",
        "Workflow plus lent qu'OpusClip sur le long format",
        "Pas pensé d'abord pour le recyclage de vidéos longues",
      ],
      verdict:
        "Éditeur web polyvalent, fonctionnalités découpe IA en progression mais pas le spécialiste. Intéressant si tu utilises déjà Veed pour autre chose.",
      priceDisplay: { label: "À partir de", value: "12 $/mois" },
    },
  ],
  pourquoiGagne: [
    {
      titre: "Détection IA mature",
      description:
        "OpusClip s'est spécialisé tôt sur la détection des moments forts et ça se voit : score de viralité, hooks automatiques, extraction propre. Une des approches les plus abouties de la catégorie.",
    },
    {
      titre: "Sous-titres + recadrage intégrés",
      description:
        "Pas besoin d'enchaîner 3 outils. OpusClip gère la découpe, les sous-titres, le recadrage 9:16 et l'export dans une seule interface.",
    },
    {
      titre: "API pour scaler",
      description:
        "L'API et les automatisations dépendent du plan choisi. À vérifier sur la page officielle d'OpusClip avant de construire un workflow Make.",
    },
    {
      titre: "Plan gratuit durable",
      description:
        "Plan gratuit récurrent, pas juste un essai limité dans le temps. Permet de tester sérieusement sans pression d'abonnement immédiat. Rare dans cette catégorie.",
    },
  ],
  piegesAEviter: [
    {
      titre: "Couper à la main",
      description:
        "Plusieurs heures de travail manuel pour ce que l'IA traite en automatique. Absurde si tu produis régulièrement du long format. Laisse l'IA proposer, valide, ajuste.",
    },
    {
      titre: "Utiliser un outil qui gère mal le français",
      description:
        "Certains concurrents d'OpusClip peuvent avoir une qualité FR moindre selon les retours publics. Vérifie sur une source test avant de t'engager.",
    },
    {
      titre: "Oublier le rendu final",
      description: (
        <>
          OpusClip produit des clips corrects mais parfois génériques. Pour du
          rendu viral FR, ajoute{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          en 2e étape. Un combo économique pour un rendu pro complet.
        </>
      ),
    },
  ],
  commentChoisir: [
    {
      question: "Tu produis du long format régulièrement ?",
      reponse: (
        <>
          Oui → <strong className="text-emerald-400">OpusClip</strong>{" "}en plan
          payant. Le volume se rentabilise vite si tu publies chaque semaine.
        </>
      ),
    },
    {
      question: "Tu veux tester gratuitement avant de t'engager ?",
      reponse: (
        <>
          Oui → <strong className="text-emerald-400">OpusClip plan gratuit</strong>.
          Disponible pour tester l&apos;outil avant de s&apos;engager.
        </>
      ),
    },
    {
      question: "Tu veux un rendu FR premium dès la sortie ?",
      reponse: (
        <>
          Combo <strong className="text-emerald-400">OpusClip</strong>{" "}pour la découpe +{" "}
          <strong className="text-amber-400">Submagic</strong>{" "}pour le polish final. Un combo
          économique pour un rendu pro complet.
        </>
      ),
    },
  ],
  faq: [
    {
      question: "Combien de shorts peut-on tirer d'un podcast d'1h ?",
      answer:
        "Le nombre de shorts exploitables dépend de la densité de la vidéo source, du rythme, du sujet et du niveau de retouche accepté. L'IA d'OpusClip priorise les passages les plus punchy. Sur une conversation fluide et dense, le rendement est meilleur que sur un monologue lent.",
    },
    {
      question: "La qualité IA est-elle suffisante sans intervention humaine ?",
      answer:
        "Largement, oui. Mais une passe humaine reste utile : vérifier que les clips n'ont pas coupé une phrase au milieu, ajuster parfois le début/fin, valider le choix des hooks. Compte un peu de temps de relecture par clip pour un rendu vraiment publiable.",
    },
    {
      question: "Peut-on utiliser une vidéo YouTube directement ?",
      answer:
        "Oui, OpusClip accepte l'URL YouTube en entrée. Pas besoin de télécharger puis uploader. Gain de temps réel sur le workflow. Descript aussi, CapCut non.",
    },
    {
      question: "Et pour le long format en anglais ?",
      answer:
        "OpusClip gère aussi bien EN que FR, c'est sa langue d'origine. Pas de différence de qualité sur ce cas. Submagic est en retrait sur le EN, plus optimisé FR.",
    },
    {
      question: "Combien de temps pour traiter 1h de source ?",
      answer:
        "Traitement cloud côté OpusClip qui peut varier selon la durée de la vidéo, la file d'attente et le plan utilisé. Tu lances puis tu fais autre chose, tu reçois les clips prêts. Vs un travail manuel long dans un éditeur classique.",
    },
    {
      question: "Quelles alternatives pour finaliser les sous-titres des shorts ?",
      answer: (
        <>
          Une fois tes clips découpés, plusieurs outils peuvent prendre le
          relais sur les sous-titres et le rendu : CapCut en gratuit, Veed en
          polyvalent, Captions pour la création tout-IA. On les compare dans un
          tableau sur notre page{" "}
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
  ],
  ctaFinal: {
    headline: "Prêt à automatiser la découpe ?",
    paragraph:
      "Le plan gratuit OpusClip permet de tester sur ta source la plus récente sans engagement, avant de basculer sur un plan payant si tu valides l'approche.",
    buttonText: "Essayer OpusClip",
  },
  autresCasUsage: [
    {
      slug: "sous-titrer-tiktok",
      titre: "Meilleur outil IA pour sous-titrer une vidéo TikTok",
      description: "Précision FR, rapidité, style : les 3 critères décisifs.",
      color: "amber",
    },
    {
      slug: "sous-titres-rapides",
      titre: "Outil le plus rapide pour sous-titres automatiques",
      description: "Sous-titrer en moins de 90 secondes par vidéo.",
      color: "amber",
    },
    {
      slug: "podcast-enregistrement-distant",
      titre: "Meilleur outil pour enregistrer un podcast à distance",
      description: "Qualité studio sans être dans la même pièce.",
      color: "indigo",
    },
  ],
};

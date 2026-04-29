import Link from "next/link";
import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";

export const videoLongueEnShorts: CasUsageData = {
  slug: "video-longue-en-shorts",
  gagnantSlug: "opusclip",
  hero: {
    h1: "Meilleur outil pour transformer une vidéo longue en shorts",
    tagline:
      "Tu as un podcast, un live ou une conférence d'une à deux heures à recycler en shorts verticaux pour TikTok, Reels ou YouTube Shorts. Voici notre classement des outils qui livrent le meilleur résultat, le gagnant, et les pièges à éviter.",
    tempsLecture: 6,
    outilsAnalyses: 5,
    lastCheck: "20/04/2026",
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
        propose 5 à 15 clips courts prêts à publier, avec sous-titres auto et
        recadrage vertical. Gain de temps massif vs découpe manuelle.
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
        "Détection IA des moments forts la plus mature du marché",
        "Sous-titres auto intégrés, pas besoin d'un second outil",
        "Recadrage 9:16 avec suivi de visage fluide",
        "API disponible sur plan Pro pour automatiser",
        "Plan gratuit récurrent (60 min/mois) pour tester durablement",
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
      verdict:
        "Excellent sur le rendu final FR et les sous-titres stylés. Moins adapté à la découpe automatique de longs contenus. Idéal en complément d'OpusClip.",
      priceDisplay: { label: "À partir de", value: "12 €/mois" },
    },
    {
      slug: "descript",
      scoreCas: 8.0,
      badge: "Tout-en-un",
      verdict:
        "Plus complet (édition textuelle + enregistrement + découpe) mais plus lourd à prendre en main. Pertinent si ton workflow inclut aussi l'édition long format.",
      priceDisplay: { label: "À partir de", value: "16 $/mois" },
    },
    {
      slug: "capcut",
      scoreCas: 7.0,
      badge: "Gratuit",
      verdict:
        "Gratuit, sous-titres auto corrects, mais découpe manuelle. Ne remplace pas OpusClip pour qui veut automatiser. OK pour un créateur occasionnel qui a du temps.",
      priceDisplay: { label: "Prix", value: "Gratuit" },
    },
    {
      slug: "veed",
      scoreCas: 6.8,
      verdict:
        "Éditeur web polyvalent, features découpe IA en progression mais pas le spécialiste. Intéressant si tu utilises déjà Veed pour autre chose.",
      priceDisplay: { label: "À partir de", value: "12 $/mois" },
    },
  ],
  pourquoiGagne: [
    {
      titre: "Détection IA mature",
      description:
        "OpusClip a 2 ans d'avance sur ses concurrents dans la qualité de détection des moments forts. Score viralité, hooks automatiques, extraction propre.",
    },
    {
      titre: "Sous-titres + recadrage intégrés",
      description:
        "Pas besoin d'enchaîner 3 outils. OpusClip gère la découpe, les sous-titres, le recadrage 9:16 et l'export dans une seule interface.",
    },
    {
      titre: "API pour scaler",
      description:
        "Sur plan Pro, l'API permet d'automatiser via Make : chaque nouvelle vidéo YouTube déclenche la génération automatique de 5-10 shorts. Game-changer pour agences.",
    },
    {
      titre: "Plan gratuit durable",
      description:
        "60 min/mois récurrent, pas juste un essai. Permet de tester sérieusement sans pression d'abonnement immédiat. Rare dans cette catégorie.",
    },
  ],
  piegesAEviter: [
    {
      titre: "Couper à la main",
      description:
        "2-3 heures de travail pour ce que l'IA fait en 5 minutes. Absurde si tu produis régulièrement du long format. Laisse l'IA proposer, valide, ajuste.",
    },
    {
      titre: "Utiliser un outil qui sait pas faire du FR",
      description:
        "Certains clones d'OpusClip (ex : Vidyo.ai) ont une qualité FR moindre. Vérifie sur une source test avant de t'engager. OpusClip a progressé en FR en 2025-2026.",
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
          Oui → <strong className="text-emerald-400">OpusClip Pro</strong>. L&apos;API et le volume se
          rentabilisent vite.
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
        "Entre 5 et 15 clips de 30 à 90 secondes, selon la densité du contenu. L'IA d'OpusClip priorise les passages les plus punchy. Sur une conversation fluide et dense, 10-12 clips de qualité publiables est courant.",
    },
    {
      question: "La qualité IA est-elle suffisante sans intervention humaine ?",
      answer:
        "À 80%. Les 20% restants demandent une passe humaine : vérifier que les clips n'ont pas coupé une phrase au milieu, ajuster parfois le début/fin, valider le choix des hooks. Compter 2-5 min par clip pour un rendu publiable.",
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
        "Environ 15-25 minutes en traitement cloud côté OpusClip. Tu lances puis tu fais autre chose, tu reçois les clips prêts. Vs 2-3h de travail manuel dans un éditeur classique.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à automatiser la découpe ?",
    paragraph:
      "Le plan gratuit OpusClip (60 min/mois) permet de tester sur ta source la plus récente sans engagement. Résultat en 20 minutes.",
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

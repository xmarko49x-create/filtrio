import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const capcutFiche: FicheData = {
  slug: "capcut",
  hero: {
    h1: "CapCut : l'avis complet en 2026",
    tagline:
      "Le leader gratuit du montage vidéo mobile et desktop. Édition complète, sous-titres auto, features IA, bibliothèque massive. Voici pour qui c'est suffisant et pour qui c'est trop limité.",
    badges: [
      { label: "Gratuit", tone: "primary" },
      { label: "Mobile-first", tone: "accent" },
      { label: "ByteDance (TikTok)", tone: "neutral" },
    ],
    origine: "Chine (ByteDance)",
    tempsLecture: 7,
    lastCheck: "22/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Éditeur vidéo gratuit (mobile iOS/Android + desktop + web) développé par ByteDance, maison mère de TikTok. Probablement l'outil de montage vidéo grand public le plus utilisé au monde. Features IA intégrées en 2024-2026.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Débutants sans budget, créateurs mobile-first, TikTokeurs qui éditent sur smartphone, créateurs occasionnels qui ne veulent pas s'engager sur un abonnement, étudiants, tous ceux qui découvrent le montage vidéo.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Créateurs sérieux qui veulent un style signature (→{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          ). Agences qui ont besoin d&apos;API ou d&apos;automatisation.
          Professionnels sensibles à la question ByteDance/données personnelles.
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Plan gratuit très complet (éditeur et la plupart des features). Version Pro accessible via 7 jours d'essai offerts, puis 23,99 €/mois en mensuel ou 199,99 €/an en annuel (≈ 16,66 €/mois) : 1 400 crédits mensuels, ressources premium, features IA avancées et 100 Go de stockage cloud. Version équipes disponible avec un tarif qui varie selon la région, le nombre de sièges et la fréquence de facturation. Facturation en EUR en France.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>{" "}
          si tu veux des sous-titres stylés FR pros.{" "}
          <Link href="/outils/davinci" className="text-red-400 hover:underline">
            DaVinci Resolve
          </Link>{" "}
          si tu veux un éditeur pro gratuit.{" "}
          <Link
            href="/comparatifs/submagic-vs-capcut"
            className="text-sky-400 hover:underline"
          >
            Comparatif Submagic vs CapCut
          </Link>
          .
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-sky-400">Oui, pour démarrer</strong>. Rapport
          valeur/prix imbattable (c&apos;est gratuit). Mais pour un usage pro
          régulier, les outils spécialisés font mieux sur leur niche.
        </>
      ),
    },
  ],
  porQui: [
    "Tu débutes et ton budget est zéro",
    "Tu montes principalement sur mobile (app iOS/Android leader du marché)",
    "Tu veux un éditeur vidéo complet + sous-titres auto en un seul outil",
    "Tu publies ponctuellement plutôt que professionnellement",
    "Tu es TikTokeur (intégration native avec TikTok)",
    "Tu veux tester le montage vidéo sans t'engager",
  ],
  pasPourQui: [
    <>
      Tu produis beaucoup de shorts et veux un style signature (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    "Tu es sensible à la question des données personnelles (ByteDance)",
    "Tu veux un éditeur pro avec color grading avancé (→ DaVinci Resolve)",
    "Tu as besoin d'API ou d'automatisation pour scaler",
    "Tu veux un outil européen ou US pour des raisons de conformité",
    <>
      Tu fais du long format podcast/interview (→{" "}
      <Link href="/outils/descript" className="text-violet-400 hover:underline">
        Descript
      </Link>
      )
    </>,
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Interface 100% traduite en français. Sous-titres auto FR corrects mais moins précis qu'un outil FR natif comme Submagic. Support en ligne disponible en français via base de connaissances.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 9.8,
      commentaire:
        "Le point fort absolu. Rapport qualité/prix imbattable puisque le plan gratuit couvre 90% des besoins d'un créateur solo. Aucun concurrent ne propose un éditeur aussi complet gratuitement.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 7.2,
      commentaire:
        "Features IA ajoutées progressivement en 2024-2026 : sous-titres auto, effets IA, suppression fond, upscaling. Moins spécialisé que Submagic ou Descript mais couvre les usages courants correctement.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Interface mobile et desktop particulièrement bien pensée, surtout pour les TikTokeurs. Courbe d'apprentissage courte. Moins intuitive sur les features vidéo avancées que sur les shorts.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.5,
      commentaire:
        "Base de connaissances en français correcte. Support client limité (principalement via formulaires). Communauté francophone massive sur YouTube et TikTok avec tutos gratuits de qualité.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 7.5,
      commentaire:
        "Intégration native avec TikTok (export direct, templates communs). Pas d'API publique. Export vers tous les formats standards, mais pas de publication programmée vers autres plateformes.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Éditeur vidéo complet",
      description:
        "Timeline multi-pistes, transitions, effets visuels, color grading basique, keyframes, green screen, multicam. Fonctionnalités qu'on trouve normalement dans des logiciels payants de la même catégorie.",
    },
    {
      titre: "Sous-titres automatiques",
      description:
        "Génération automatique de sous-titres en français et autres langues. Précision correcte (moins fine que Submagic mais acceptable). Personnalisation manuelle du style possible.",
    },
    {
      titre: "Features IA intégrées",
      description:
        "Suppression fond vidéo, upscaling qualité, génération avatars, voix off IA, effets automatiques. Écosystème IA en croissance constante, ajouts réguliers.",
    },
    {
      titre: "Bibliothèque d'assets massive",
      description:
        "Musiques libres de droits, effets sonores, stickers, transitions, fonts, templates TikTok viraux. Une des bibliothèques les plus riches du marché, surtout en gratuit.",
    },
    {
      titre: "Apps multi-plateformes",
      description:
        "iOS, Android, Mac, Windows, version web. Synchronisation cloud sur le plan Pro permet de continuer son montage sur n'importe quel appareil.",
    },
    {
      titre: "Intégration TikTok native",
      description:
        "Export direct vers TikTok avec formats adaptés, templates identiques à ceux de l'app TikTok. Workflow TikTokeur le plus fluide du marché.",
    },
  ],
  plans: [
    {
      nom: "Gratuit",
      prix: "0 €",
      prixSub: "Éditeur complet accessible sans engagement",
      cible: "Créateurs solo et débutants",
      features: [
        "Éditeur vidéo complet (desktop, mobile, web)",
        "Sous-titres auto",
        "Bibliothèque d'assets de base",
        "Features IA de base",
        "Export standard",
      ],
    },
    {
      nom: "Essai Pro",
      prix: "0 €",
      prixSub: "7 jours offerts pour tester",
      cible: "Pour découvrir Pro avant engagement",
      features: [
        "Accès complet à la version Pro pendant 7 jours",
        "Puis 23,99 €/mois si tu continues",
        "Annulation possible à tout moment",
      ],
    },
    {
      nom: "Pro Annuel",
      prix: "199,99 €/an",
      prixSub: "≈ 16,66 €/mois · solution la plus économique",
      cible: "Créateurs réguliers",
      features: [
        "1 400 crédits mensuels",
        "Plus de 200 millions de ressources de création",
        "Export 4K sans watermark sur assets Pro",
        "Features IA avancées",
        "100 Go de stockage cloud",
      ],
    },
    {
      nom: "Pro Mensuel",
      prix: "23,99 €/mois",
      prixSub: "Promo 1er mois à 14,49 € affichée",
      cible: "Engagement court",
      features: [
        "Tout Pro Annuel inclus",
        "100 Go de stockage cloud",
        "Accessible desktop, mobile et web",
        "Annulation à tout moment",
      ],
    },
    {
      nom: "Pro Équipes",
      prix: "Offre dédiée",
      prixSub: "Tarif selon région, sièges et fréquence de facturation",
      cible: "Équipes et collaborations",
      features: [
        "Tout Pro inclus",
        "Gestion multi-postes et collaboration",
        "Tarifs variables (dans notre capture FR : 17,99 €/poste/mois, 8,99 € promo 1er mois)",
        "Vérifier l'offre exacte selon ton compte et ta région",
      ],
    },
  ],
  alternatives: [
    {
      slug: "submagic",
      comment:
        "Payant spécialisé sur les sous-titres viraux FR. Beaucoup plus stylé pour le rendu final, surtout sur audience francophone.",
    },
    {
      slug: "davinci",
      comment:
        "Éditeur pro gratuit avec color grading avancé. Plus puissant mais courbe d'apprentissage plus longue. Pour ceux qui veulent monter sérieusement.",
    },
    {
      slug: "canva",
      comment:
        "Si tu fais surtout du design (miniatures, posts) et un peu de vidéo. Canva est plus polyvalent sur le design que CapCut.",
    },
  ],
  faq: [
    {
      question: "CapCut vaut-il le coup en 2026 même gratuit ?",
      answer:
        "Oui, sans discussion pour débuter. C'est l'éditeur vidéo gratuit le plus complet du marché. Pour un usage régulier et pro, les outils spécialisés (Submagic pour shorts, DaVinci pour montage pro) font mieux sur leur niche.",
    },
    {
      question: "Le plan CapCut Pro vaut-il son prix ?",
      answer:
        "Dépend de ton usage. Si tu exportes régulièrement en 4K, utilises les 1 400 crédits mensuels (features IA avancées) et le stock premium, le Pro peut se justifier — surtout à 199,99 €/an (≈ 16,66 €/mois). Sinon le plan gratuit couvre largement la majorité des créateurs solo. Un combo à envisager : CapCut gratuit pour monter + Submagic (à partir de 12 €/mois) pour le rendu sous-titres stylés FR.",
    },
    {
      question: "La question ByteDance pose-t-elle problème ?",
      answer:
        "Les préoccupations sur ByteDance (maison mère de TikTok) portent sur la collecte de données et les possibles accès par des autorités chinoises. Pour un créateur grand public, risque négligeable. Pour un pro qui édite du contenu sensible (entreprise, public, juridique), privilégier DaVinci Resolve ou Adobe Premiere.",
    },
    {
      question: "Sous-titres auto FR vs Submagic ?",
      answer: (
        <>
          CapCut fait le job sur un audio propre. Submagic est plus précis en FR
          et surtout propose des styles viraux prêts à l&apos;emploi que CapCut
          n&apos;a pas. Pour un créateur sérieux qui publie plusieurs shorts
          par semaine, la différence se voit. Voir le{" "}
          <Link
            href="/comparatifs/submagic-vs-capcut"
            className="text-sky-400 hover:underline"
          >
            comparatif direct
          </Link>
          .
        </>
      ),
    },
    {
      question: "Compatible avec les autres logiciels vidéo ?",
      answer:
        "Export vers tous les formats standards (MP4, MOV, etc.). Compatible avec Premiere Pro, DaVinci Resolve, Final Cut pour aller-retour. Pas d'API publique pour automatiser, contrainte si tu veux scaler.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à tester CapCut ?",
    sub: "100% gratuit, pas d'engagement. Télécharge l'app ou ouvre la version web et teste en 5 minutes sur une vidéo existante.",
    buttonText: "Télécharger CapCut",
  },
};

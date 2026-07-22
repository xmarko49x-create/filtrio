import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const capcutFiche: FicheData = {
  slug: "capcut",
  hero: {
    h1: "CapCut Desktop : notre avis complet en 2026",
    tagline:
      "Le leader gratuit du montage vidéo mobile et desktop. Édition complète, sous-titres auto, fonctionnalités IA, bibliothèque massive. Voici pour qui c'est suffisant et pour qui c'est trop limité.",
    badges: [
      { label: "Gratuit", tone: "primary" },
      { label: "Mobile-first", tone: "accent" },
      { label: "ByteDance (TikTok)", tone: "neutral" },
    ],
    origine: "Chine (ByteDance)",
    tempsLecture: 7,
    lastCheck: "10/07/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Éditeur vidéo gratuit (mobile iOS/Android + desktop + web) développé par ByteDance, maison mère de TikTok. L'un des outils de montage vidéo grand public les plus utilisés, surtout sur mobile. Fonctionnalités IA intégrées en 2024-2026.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Débutants sans budget, créateurs mobile-first, TikTokeurs qui éditent sur smartphone, créateurs occasionnels qui ne veulent pas s'engager sur un abonnement, étudiants, tous ceux qui découvrent le montage vidéo.",
    },
    {
      question: "À éviter si ?",
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
        "Plan gratuit très complet (éditeur et la plupart des fonctionnalités). Abonnements relevés sur l'App Store France : Standard à 11,99 €/mois et Pro à 23,99 €/mois. Une formule annuelle à 109,99 € apparaît également, sans que l'App Store précise clairement à quel niveau elle correspond. Attention : les prix CapCut peuvent varier selon la plateforme (Web, Android, ordinateur), la région et les promotions en cours. Facturation en EUR en France.",
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
  sectionApresVerdict: {
    titre: "CapCut Desktop sur PC et Mac : notre avis",
    contenu: (
      <>
        <p>
          CapCut Desktop existe en application dédiée sur Windows et macOS, en plus
          des versions mobile et web. Si tu montes régulièrement, c&apos;est la
          version la plus confortable : timeline plus lisible sur grand écran,
          raccourcis clavier, et une gestion bien plus sereine des projets longs ou
          multi-pistes qu&apos;un montage au doigt sur smartphone.
        </p>
        <p>
          Un point à garder en tête : les fonctionnalités et les prix ne sont pas
          strictement identiques entre le Web, le mobile et Desktop. Avant de
          t&apos;abonner, vérifie ce qui est inclus sur la plateforme que tu
          utilises vraiment.
        </p>
        <p>
          Pour démarrer, la version gratuite de CapCut Desktop suffit largement :
          l&apos;éditeur et l&apos;essentiel des fonctions sont accessibles sans
          payer. L&apos;abonnement Pro s&apos;adresse surtout à ceux qui ont besoin
          des ressources premium et des fonctions IA au quotidien.
        </p>
      </>
    ),
  },
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
        "Fonctionnalités IA ajoutées progressivement en 2024-2026 : sous-titres auto, effets IA, suppression fond, upscaling. Moins spécialisé que Submagic ou Descript mais couvre les usages courants correctement.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Interface mobile et desktop particulièrement bien pensée, surtout pour les TikTokeurs. Courbe d'apprentissage courte. Moins intuitive sur les fonctionnalités vidéo avancées que sur les shorts.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.5,
      commentaire:
        "Base de connaissances en français correcte. Support client limité (principalement via formulaires). Communauté FR massive sur YouTube et TikTok avec tutos gratuits de qualité.",
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
      titre: "Fonctionnalités IA intégrées",
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
        "Fonctionnalités IA de base",
        "Export standard",
      ],
    },
    {
      nom: "Standard",
      prix: "11,99 €/mois",
      prixSub: "Tarif relevé sur l'App Store France · peut varier selon la plateforme",
      cible: "Créateurs réguliers avec besoins intermédiaires",
      features: [
        "Niveau intermédiaire entre le gratuit et Pro",
        "Détail des fonctionnalités à vérifier dans l'app (variable selon plateforme)",
        "Annulation à tout moment",
      ],
    },
    {
      nom: "Pro",
      prix: "23,99 €/mois",
      prixSub: "Tarif de référence relevé sur l'App Store France · essai 7 jours offert",
      cible: "Créateurs réguliers",
      features: [
        "Ressources et assets premium",
        "Fonctionnalités IA avancées",
        "Export sans watermark sur assets Pro",
        "Essai gratuit de 7 jours, annulation à tout moment",
        "Le tarif peut différer sur le Web, Android ou ordinateur",
      ],
    },
    {
      nom: "Formule annuelle",
      prix: "109,99 €/an",
      prixSub: "Affichée sur l'App Store France, niveau d'abonnement non précisé",
      cible: "Engagement à l'année",
      features: [
        "L'App Store ne précise pas clairement à quel niveau (Standard ou Pro) cette formule correspond",
        "À vérifier dans l'app avant de souscrire",
      ],
    },
  ],
  alternatives: [
    {
      slug: "submagic",
      comment:
        "Payant spécialisé sur les sous-titres viraux FR. Beaucoup plus stylé pour le rendu final, surtout sur audience FR.",
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
        "Dépend de ton usage. Si tu utilises régulièrement les fonctionnalités IA avancées et le stock premium, le Pro à 23,99 €/mois (tarif App Store France, variable selon la plateforme et les promotions) peut se justifier. Sinon le plan gratuit couvre largement la majorité des créateurs solo. Un combo à envisager : CapCut gratuit pour monter + Submagic (à partir de 12 €/mois) pour le rendu sous-titres stylés FR.",
    },
    {
      question: "La question ByteDance pose-t-elle problème ?",
      answer:
        "Les préoccupations sur ByteDance (maison mère de TikTok) portent sur la collecte de données et les possibles accès par des autorités chinoises. Pour un créateur grand public qui ne traite pas de contenu sensible, le risque est généralement limité, mais il mérite d'être connu. Pour un pro qui édite du contenu sensible (entreprise, public, juridique), privilégier DaVinci Resolve ou Adobe Premiere.",
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
    sub: "Version gratuite très complète, sans engagement. Télécharge l'app ou ouvre la version web et teste en 5 minutes sur une vidéo existante. Plan Pro disponible pour les fonctionnalités avancées.",
    buttonText: "Télécharger CapCut",
  },
};

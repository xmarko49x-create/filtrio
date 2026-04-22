import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";

export const davinciFiche: FicheData = {
  slug: "davinci",
  hero: {
    h1: "DaVinci Resolve : l'avis complet en 2026",
    tagline:
      "Éditeur vidéo pro utilisé par Hollywood. Version gratuite quasi illimitée, Studio à 295 $ en licence à vie (pas d'abonnement). Color grading de référence, Fusion VFX intégré. Voici pour qui c'est un investissement qui paie.",
    badges: [
      { label: "Pro gratuit", tone: "primary" },
      { label: "Licence à vie", tone: "accent" },
      { label: "Color grading Hollywood", tone: "neutral" },
    ],
    origine: "Australie (Blackmagic)",
    depuis: "2003",
    tempsLecture: 8,
    lastCheck: "20/04/2026",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Éditeur vidéo pro développé par Blackmagic Design. Version gratuite quasiment illimitée qui inclut montage, color grading, effets visuels, audio. Version Studio payante à 295 $ en licence à vie (pas d'abonnement). Outil utilisé par les studios Hollywood.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs vidéo sérieux qui veulent un rendu pro, vidéastes freelance, monteurs qui font du color grading, YouTubeurs haut de gamme, documentaristes, étudiants cinéma. Pour ceux qui investissent du temps pour un résultat pro.",
    },
    {
      question: "Pas pour qui ?",
      answer: (
        <>
          Débutants qui veulent monter vite (→{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>
          ). Créateurs de shorts/TikTok (→{" "}
          <Link href="/outils/submagic" className="text-amber-400 hover:underline">
            Submagic
          </Link>
          ). Ceux qui montent principalement sur mobile (DaVinci est desktop
          only).
        </>
      ),
    },
    {
      question: "Combien ?",
      answer:
        "Version gratuite complète (95% des features). Studio à 295 $ en une fois (pas d'abonnement, mise à jour à vie). Pour ce prix, accès à HDR, 4K-8K, effets IA avancés, filtres neuraux. Rapport qualité/prix imbattable si tu maîtrises l'outil.",
    },
    {
      question: "Meilleure alternative ?",
      answer: (
        <>
          Adobe Premiere Pro si tu veux l&apos;écosystème Adobe complet. Final
          Cut Pro si tu es Mac only.{" "}
          <Link href="/outils/capcut" className="text-sky-400 hover:underline">
            CapCut
          </Link>{" "}
          si tu veux simple et rapide. DaVinci reste le meilleur rapport
          puissance/prix.
        </>
      ),
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-red-400">
            Oui, mais pour un profil précis
          </strong>
          . Si tu investis 10-20h d&apos;apprentissage et que tu veux un rendu
          pro sans payer d&apos;abonnement, imbattable. Pour un usage rapide
          occasionnel, surdimensionné.
        </>
      ),
    },
  ],
  porQui: [
    "Tu veux un éditeur pro sans abonnement à vie",
    "Tu fais du color grading ou veux apprendre sérieusement",
    "Tu es prêt à investir 10-20h d'apprentissage initial",
    "Tu fais du contenu long ou pro (documentaire, pub, clip)",
    "Tu montes sur un ordinateur puissant (8 Go RAM min)",
    "Tu veux un outil qui te servira 10+ ans sans frais récurrents",
  ],
  pasPourQui: [
    <>
      Tu es débutant qui veut aller vite (→{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut
      </Link>
      )
    </>,
    "Tu fais surtout du short/TikTok (outil surdimensionné)",
    "Tu montes uniquement sur mobile (DaVinci = desktop/laptop)",
    "Ton PC est faible (demande une machine décente)",
    "Tu veux une intégration native YouTube/TikTok directe",
    "Tu refuses d'apprendre un outil pro",
  ],
  scoring: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Interface disponible en français. Documentation officielle partiellement traduite. Gros écosystème de tutos YouTube FR créés par la communauté. Support officiel en anglais principalement.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 9.8,
      commentaire:
        "Le point fort absolu. Éditeur pro gratuit quasi illimité, ou Studio à 295 $ en une fois (licence à vie, vs 23 €/mois sur Premiere = amorti en 13 mois). Aucun concurrent ne propose ce rapport qualité/prix.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 7.8,
      commentaire:
        "Neural Engine propose : tracking facial, recadrage intelligent, upscaling, suppression bruit, transcription auto. Moins IA-first que CapCut ou les outils modernes mais couvre les usages pro. Studio débloque les features IA avancées.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 6.5,
      commentaire:
        "Le vrai défaut. Courbe d'apprentissage raide : 10-20h minimum pour être opérationnel, interface dense, terminologie pro. C'est le prix à payer pour autant de puissance.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 8.5,
      commentaire:
        "La communauté DaVinci FR est très active depuis 10+ ans. Des centaines de tutos YouTube FR, formations payantes dédiées, blogs spécialisés. Apprendre DaVinci en français est accessible sans passer par de la doc anglaise.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "Export tous formats standards (H.264, H.265, ProRes, etc.), workflows cinéma pro. Compatible hardware Blackmagic (caméras, consoles de colorimétrie). Pas d'intégration native YouTube/TikTok, mais export direct puis upload manuel.",
    },
  ],
  fonctionnalites: [
    {
      titre: "Color grading de référence",
      description:
        "L'outil historique de DaVinci, adopté par Hollywood. Color grading node-based puissant, scopes pro, LUTs, power grades, tracking color. Rien d'équivalent gratuitement sur le marché.",
    },
    {
      titre: "Éditeur multi-pistes complet",
      description:
        "Timeline illimitée, multicam jusqu'à 9 sources, proxy workflow, fusion 3D, audio Fairlight. Couvre tous les besoins de post-production sans dépendre d'autres logiciels.",
    },
    {
      titre: "Fusion (effets visuels)",
      description:
        "Moteur VFX node-based intégré, équivalent à After Effects. Compositing pro, motion tracking, particules, 3D basique. Niveau cinéma pour certaines features.",
    },
    {
      titre: "Fairlight (audio)",
      description:
        "DAW pro intégrée : mixage multipiste, effets, mastering. Équivalent à Pro Tools pour un usage courant. Permet de ne pas sortir de DaVinci pour finaliser l'audio.",
    },
    {
      titre: "Neural Engine (IA)",
      description:
        "Features IA : tracking facial, recadrage automatique 9:16/1:1, upscaling 4K-8K, suppression objets, transcription auto. Studio débloque les features IA les plus avancées.",
    },
    {
      titre: "Cut Page (montage rapide)",
      description:
        "Module dédié au montage rapide style YouTube/social. Plus accessible que la Edit Page standard pour démarrer. Concurrence directe de CapCut et Premiere Rush.",
    },
  ],
  plans: [
    {
      nom: "Gratuit",
      prix: "0 $",
      cible: "95% des créateurs",
      features: [
        "Éditeur complet (Edit + Cut Page)",
        "Color grading complet",
        "Fusion (VFX) complet",
        "Fairlight (audio) complet",
        "Export H.264/H.265 sans watermark",
        "Export 4K limité à 60fps",
      ],
    },
    {
      nom: "Studio",
      prix: "295 $",
      cible: "Vidéastes pros",
      features: [
        "Tout Gratuit inclus",
        "Licence à vie (pas d'abonnement)",
        "Export 4K-8K sans limite",
        "HDR / Dolby Vision",
        "Neural Engine complet (IA avancée)",
        "Collaboration multi-user",
        "Plugins tiers avancés",
      ],
    },
  ],
  alternatives: [
    {
      slug: "capcut",
      comment:
        "Alternative beaucoup plus accessible. Moins puissante mais prise en main 10x plus rapide. Pour usage social media et shorts, CapCut fait largement le job.",
    },
    {
      slug: "adobe-premiere",
      comment:
        "La référence Adobe. Plus intuitif pour certains, intégration complète avec After Effects et Audition. 23 €/mois par abonnement.",
    },
    {
      slug: "final-cut-pro",
      comment:
        "La référence Apple. Interface magnétique unique, performances excellentes sur Mac. 349 € en licence à vie, Mac only.",
    },
  ],
  faq: [
    {
      question: "DaVinci gratuit ou Studio pour un YouTubeur ?",
      answer:
        "Gratuit couvre 95% des besoins. Passe sur Studio si tu fais beaucoup de 4K-8K, HDR, ou si tu utilises intensivement les features IA avancées (filtres neuraux, super-résolution). Pour la majorité, rester sur Gratuit est rationnel.",
    },
    {
      question: "Quel ordinateur pour faire tourner DaVinci ?",
      answer:
        "Minimum 8 Go RAM + GPU dédié. 16 Go RAM recommandé pour du 4K. Sur Mac récent (M1+), DaVinci tourne exceptionnellement bien. Sur PC, bien vérifier compatibilité GPU (documentée par Blackmagic). Une machine faible = expérience frustrante.",
    },
    {
      question: "Courbe d'apprentissage : combien de temps pour être opérationnel ?",
      answer:
        "10-15h pour un débutant sans expérience vidéo : tu peux monter un projet simple. 30-50h pour maîtriser le color grading (feature signature). 100h+ pour exploiter Fusion (VFX). Gros investissement initial mais compétences transférables à vie.",
    },
    {
      question: "DaVinci vs Premiere Pro, lequel choisir en 2026 ?",
      answer:
        "Si tu veux l'écosystème Adobe (After Effects, Audition, Photoshop intégrés) et tu acceptes 23 €/mois : Premiere. Si tu veux un éditeur au moins aussi puissant sans abonnement : DaVinci Studio à 295 $. Les deux sont pro, le choix se fait sur le modèle économique et l'écosystème.",
    },
    {
      question: "Y a-t-il un programme affilié DaVinci ?",
      answer:
        "Non, Blackmagic ne propose pas de programme affilié grand public pour DaVinci Resolve. Le modèle économique (gratuit + licence unique à 295 $) ne laisse pas de marge pour de l'affiliation récurrente. À considérer vs les outils payants à commission si la monétisation est importante pour toi.",
    },
  ],
  ctaFinal: {
    headline: "Prêt à passer au pro ?",
    sub: "La version gratuite te laisse tout tester sans limite de durée. 10-15h pour te faire une idée de la puissance, puis décider si Studio à 295 $ vaut l'investissement.",
    buttonText: "Télécharger DaVinci Resolve",
  },
};

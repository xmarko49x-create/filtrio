/**
 * Grilles de notation détaillées des 18 fiches outils.
 *
 * Module de données PUR : aucun JSX, aucun composant React, aucun import.
 * Il ne dépend ni de `components/`, ni de `content/`, ni de `lib/outils.ts`.
 * C'est ce qui permet aux fiches `content/outils/*.tsx` de le consommer sans
 * créer de cycle avec `FicheOutilLayout`, qui dépend déjà de `lib/outils.ts`.
 *
 * Ce fichier ne fait que centraliser des données qui vivaient auparavant dans
 * chaque fiche. Aucune note, aucun poids, aucun libellé et aucun commentaire
 * n'a été modifié lors du déplacement.
 *
 * 18 outils · 6 critères par outil · 108 critères au total.
 * La somme des poids vaut 100 pour chaque outil.
 */

/** Un critère de la grille de notation d'un outil. */
export interface ScoringCriterion {
  /** Libellé affiché du critère. */
  label: string;
  /** Pondération en pourcentage. La somme vaut 100 par outil. */
  poids: number;
  /** Note du critère, sur 10. */
  score: number;
  /** Justification éditoriale affichée sous le critère. */
  commentaire: string;
}

/** Grilles indexées par slug d'outil (voir `OUTILS` dans lib/outils.ts). */
export const SCORING_BY_SLUG: Record<string, ScoringCriterion[]> = {
  submagic: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 9.2,
      commentaire:
        "Précision FR parmi les plus convaincantes de sa catégorie selon les retours utilisateurs publics. Segmentation propre, ponctuation cohérente, gestion correcte des accents. Interface en français.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.8,
      commentaire:
        "Positionnement dans la fourchette haute de sa catégorie. L'absence de plan gratuit récurrent peut pénaliser les usages très occasionnels. Le tarif devient rentable dès qu'on publie plusieurs shorts par mois, grâce au temps gagné sur les sous-titres.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.2,
      commentaire:
        "Sous-titres stylés, détection moments forts, recadrage 9:16, ajout B-roll auto, effets sonores. La découpe sur vidéos très longues est moins poussée que chez OpusClip.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 9.3,
      commentaire:
        "L'un des parcours utilisateurs les plus courts de sa catégorie. Upload, choix du template, export : peu de clics. Peu de courbe d'apprentissage pour un non-technicien.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 8.5,
      commentaire:
        "Documentation accessible et claire, support disponible. Le français est bien pris en compte côté interface et contenu généré.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 7.0,
      commentaire:
        "Des options d'API et d'intégrations existent (disponibles dès le Starter avec un petit quota, étendues sur Business + API). L'outil reste avant tout pensé pour une utilisation simple et rapide, pas comme une plateforme d'automatisation avancée à grande échelle.",
    },
  ],
  opusclip: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Reconnaissance vocale FR correcte, segmentation des sous-titres à retoucher sur vocabulaire technique. Meilleur sur l'anglais, pensé pour le marché US d'abord. Interface multilingue mais pas 100 % FR natif.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 9.0,
      commentaire:
        "Un des meilleurs rapports qualité/prix de sa catégorie grâce à un plan gratuit récurrent et des plans payants abordables. Plus généreux que Submagic ou Descript pour démarrer sans engagement.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.5,
      commentaire:
        "Le point fort. Détection IA des passages accrocheurs sur sources longues, score viralité prédictif par clip, recadrage 9:16 avec suivi visage, B-roll automatique. Aucun concurrent n'est aussi poussé sur ce volet.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Plus riche que Submagic en options (choix clips à garder, réorganisation, édition fine), donc un peu plus longue à maîtriser. Une fois le workflow compris, très efficace.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.5,
      commentaire:
        "Support principalement en anglais. Documentation traduite automatiquement, qualité correcte mais pas native. Communauté Discord internationale active.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 9.0,
      commentaire:
        "Écosystème riche. Import depuis YouTube, Twitch, Vimeo, Zoom, Google Drive, Dropbox. Publication programmée directe sur TikTok, Instagram Reels, YouTube Shorts. API disponible sur le plan le plus élevé (à vérifier sur opus.pro pour le détail).",
    },
  ],
  tubebuddy: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface disponible en français mais l'expérience reste principalement anglophone. Les suggestions de tags et de titres sont plus riches en anglais qu'en français. Support uniquement en anglais.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 8.8,
      commentaire:
        "Tarification dégressive intéressante pour les petites chaînes. Plan gratuit utile pour découvrir. Le ROI est clair sur les chaînes en croissance qui cherchent à optimiser leur visibilité.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "L'écosystème couvre SEO, tags, titres, miniatures, tests A/B, analytics concurrent, bulk edit. Peu d'IA générative native (vs VidIQ qui mise plus sur ce terrain), mais des outils d'analyse très robustes.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 9.0,
      commentaire:
        "Intégration directe à YouTube Studio via l'extension. Pas de nouvelle interface à apprendre : les fonctionnalités apparaissent dans les pages YouTube existantes. Fluide pour un YouTubeur déjà habitué à son environnement.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support uniquement en anglais. Documentation traduite automatiquement en français, qualité correcte. Communauté YouTube internationale très active, tutos FR existants sur YouTube.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 9.0,
      commentaire:
        "S'intègre directement à YouTube (Studio et pages publiques), export vers Google Sheets, Canva, extensions Chrome/Firefox/Edge. Pas d'API publique mais couvre le workflow YouTube natif.",
    },
  ],
  canva: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 9.0,
      commentaire:
        "Interface 100% traduite en français. Magic Design comprend bien les prompts FR. Support client disponible en français. L'un des meilleurs niveaux de localisation FR du marché.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 9.0,
      commentaire:
        "Plan gratuit réellement utilisable pour la majorité des besoins solo. Pro à 110 €/an par personne (facturation annuelle) : excellent rapport qualité/prix si tu utilises Magic Design, Brand Kit et contenu premium. Économisez 16 % et plus avec l'annuel.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.0,
      commentaire:
        "Magic Design, Magic Write, Magic Edit, Magic Animate : écosystème IA en expansion constante. Moins avancé qu'un spécialiste (Midjourney pour image pure) mais intégré à tout le workflow design.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 9.0,
      commentaire:
        "Point fort. Interface pensée pour les non-designers, drag-and-drop intuitif, templates qui guident le choix. 20 minutes pour être opérationnel même sans expérience design.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 8.5,
      commentaire:
        "Support client multilingue dont français. Centre d'aide traduit. Énormément de tutos YouTube FR créés par la communauté Canva depuis 10+ ans. Accessible pour débutants comme pour utilisateurs avancés.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API disponible sur plans pro, intégrations Zapier, Make, Buffer, Hootsuite. Publication directe vers réseaux sociaux. App Canva sur mobile complète. Export direct vers YouTube.",
    },
  ],
  runway: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface anglais principalement. Prompts IA fonctionnent en FR mais meilleurs résultats en EN selon les retours utilisateurs. Support anglais uniquement. Communauté FR modeste sur un outil très technique.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.5,
      commentaire:
        "Standard à 15 $/mois correct pour tester sérieusement. Coût par crédit raisonnable mais la génération vidéo IA reste consommatrice. Pro à 35 $/mois pour usage régulier.",
    },
    {
      label: "Qualité de la génération vidéo",
      poids: 25,
      score: 9.5,
      commentaire:
        "Point fort absolu. Gen-4 et Gen-4.5 sont parmi les modèles de génération vidéo IA les plus aboutis disponibles au grand public en 2026. Qualité visuelle impressionnante pour des clips courts. Intégration native de plusieurs modèles tiers (Google Veo, OpenAI Sora, Kling, etc.) pour accéder à d'autres options depuis la même plateforme.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface claire mais l'art du prompt IA reste complexe. Apprendre à formuler des prompts efficaces demande plusieurs heures d'expérimentation. Maîtrise avancée sur plusieurs semaines.",
    },
    {
      label: "Outils VFX complémentaires",
      poids: 10,
      score: 9.0,
      commentaire:
        "Écosystème VFX IA impressionnant : inpainting, motion tracking, green screen auto, suppression d'objets, transfert de style. Peu d'outils aussi complets sur ce volet.",
    },
    {
      label: "API et intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "API disponible pour les plans pros. Permet d'intégrer Runway à des flux de travail personnalisés, automatiser la génération. Utile pour studios et agences.",
    },
  ],
  descript: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.8,
      commentaire:
        "Transcription FR correcte, ponctuation automatique raisonnable, mais moins fine qu'en anglais. Les termes techniques et noms propres demandent souvent des corrections. Interface partiellement traduite. Support uniquement en anglais.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 8.8,
      commentaire:
        "Plan gratuit disponible pour tester. Hobbyist à 16 $/mois en annuel (10 media hours) : bon rapport q/p pour un podcaster régulier. Creator à 24 $/mois en annuel pour plus d'heures et l'export 4K. Jusqu'à 35 % d'économie avec l'annuel.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.0,
      commentaire:
        "Point fort. Édition textuelle unique sur le marché, Studio Sound (nettoyage audio), Overdub (clonage vocal pour corriger un mot), génération auto de titres et chapitres, transcription multi-langue. Écosystème IA le plus complet pour le long format.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 7.5,
      commentaire:
        "Courbe d'apprentissage plus longue que la moyenne. Le modèle d'édition textuelle est déroutant au début : tu édites du texte, pas une timeline. Compte quelques heures pour être vraiment à l'aise. Une fois maîtrisé, le gain de productivité est important.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 6.5,
      commentaire:
        "Support client exclusivement en anglais. Documentation principalement anglophone avec traductions automatiques. Communauté Discord internationale très active, quelques tutos FR sur YouTube créés par des utilisateurs avancés.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "Import depuis YouTube, Vimeo, Zoom, Dropbox. Export vers toutes les plateformes podcast (Spotify, Apple, Google). API disponible sur plans Business. Plugin Premiere Pro pour aller-retour fluide. Squadcast intégré (enregistrement à distance).",
    },
  ],
  elevenlabs: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 9.0,
      commentaire:
        "Rendu naturel en français, prononciation maîtrisée, gestion des liaisons et intonations largement supérieure aux concurrents. Certains mots techniques ou noms propres demandent des ajustements via la syntaxe phonétique.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.5,
      commentaire:
        "Plan gratuit (10 000 credits/mois) généreux pour tester. Facturation au credit qui peut monter vite sur du volume. Le Creator à 22 $/mois (121k credits, premier mois -50 %) couvre les usages réguliers. Pro à 99 $/mois pour les besoins pros.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.5,
      commentaire:
        "Point fort. Synthèse vocale, clonage à partir d'un extrait audio, doublage vidéo, voix multilingues cohérentes, contrôle fin des émotions et du débit. Peu d'outils aussi poussés sur l'IA vocale pure.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Interface web propre, prise en main rapide pour la génération basique. Les fonctionnalités avancées (fine-tuning, clonage pro, API) demandent un peu de lecture de doc. Globalement accessible pour un non-technicien.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 6.5,
      commentaire:
        "Interface partiellement traduite, documentation en anglais principalement. Support client en anglais. Communauté Discord internationale très active. C'est le talon d'Achille pour l'utilisateur FR pur.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 9.0,
      commentaire:
        "API très documentée, intégration native avec Zapier, Make, Premiere Pro, DaVinci Resolve. Utilisable dans des workflows d'automatisation. Écosystème riche pour connecter la voix IA à d'autres outils.",
    },
  ],
  davinci: [
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
        "Le point fort absolu. Éditeur pro gratuit quasi illimité, ou Studio à 295 $ en achat unique (licence perpétuelle, aucun abonnement à vie). Un éditeur à abonnement mensuel s'amortit vs DaVinci Studio en ~1 an selon le tarif retenu. Aucun concurrent ne propose ce rapport qualité/prix.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 7.8,
      commentaire:
        "Neural Engine propose : tracking facial, recadrage intelligent, upscaling, suppression bruit, transcription auto. Moins IA-first que CapCut ou les outils modernes mais couvre les usages pro. Studio débloque les fonctionnalités IA avancées.",
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
  synthesia: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 8.0,
      commentaire:
        "Voix FR parmi les meilleures de la catégorie avatars IA. Sync labiale FR soignée. Documentation partiellement traduite. Support B2B disponible en français pour les entreprises.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.2,
      commentaire:
        "Tarif Creator comparable à HeyGen (29 €/mois en annuel chez Synthesia) si tu cherches une plateforme B2B solide. S'amortit surtout en entreprise grâce aux fonctionnalités Enterprise (traductions 80+ langues, 240+ avatars libres de droits, SAML/SSO). Peu adapté au solo créateur.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "Large bibliothèque d'avatars préconçus, clonage facial (Personal Avatars) sur plans payants, traduction vidéo automatique multilingue avec sync labiale adaptée. Solide mais moins créatif qu'HeyGen sur les usages contemporains.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface claire orientée workflow B2B : script → choix avatar → voix → render. Courbe d'apprentissage raisonnable (1h pour être opérationnel).",
    },
    {
      label: "Conformité et sécurité B2B",
      poids: 15,
      score: 9.0,
      commentaire:
        "Point fort différenciateur vs HeyGen. SOC 2, GDPR compliant, SSO, audit logs, contrôle admin avancé. Conçu pour les exigences des grandes entreprises.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API complète, intégrations LMS (Moodle, Docebo, Teachable), connecteurs Slack, Teams, SharePoint. Pensé pour s'insérer dans les workflows d'entreprise existants.",
    },
  ],
  riverside: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Interface partiellement traduite en FR. La feature d'enregistrement en elle-même est agnostique à la langue. La transcription et l'éditeur IA restent plus convaincants en anglais qu'en français, comparable à Descript sur ce point.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.5,
      commentaire:
        "Plan gratuit disponible pour tester, essai 14 jours sur les plans payants. Point d'entrée payant affiché à partir de 24 €/mois en annuel sur le site officiel (affichage en euros pour les visiteurs européens). Positionnement dans la fourchette haute de sa catégorie, avec une spécialisation forte sur l'enregistrement distant pro.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "Magic Editor : découpe intelligente, suppression des silences, génération de clips courts, transcription auto. Moins poussé que Descript sur l'édition textuelle, mais comble l'écart sur les workflows podcast. Suggestions de highlights utiles.",
    },
    {
      label: "Qualité d'enregistrement à distance",
      poids: 15,
      score: 9.5,
      commentaire:
        "Le point fort absolu. Enregistrement local sur la machine de chaque participant, puis upload des tracks séparés. Aucune perte liée à la connexion. Largement supérieur à Zoom ou Teams sur ce volet.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support client en anglais principalement. Documentation traduite automatiquement, qualité correcte. Plusieurs tutos FR de la communauté podcasting FR sur YouTube.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "Export direct vers plateformes podcast (Spotify, Apple, Google), YouTube, réseaux sociaux. API disponible sur les plans supérieurs. Intégrations Zapier et Make. Compatible avec la plupart des flux de production podcast.",
    },
  ],
  vidiq: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface partiellement traduite, suggestions de keywords nettement moins riches en français qu'en anglais. Les fonctionnalités IA génératives fonctionnent en FR mais avec moins de finesse que pour les niches anglophones.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 8.0,
      commentaire:
        "Plan gratuit réellement utilisable (avantage sur TubeBuddy). Tarifs fixes et prévisibles affichés en EUR : Boost à 16,58 €/mois en annuel, Max à 31 €/mois. Plan Boost proposé régulièrement en promo, avec économie annoncée sur la facturation annuelle.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "IA générative intégrée au workflow : générateur de titres, scripts, hooks, descriptions, suggestions de niches. AI Coach qui accompagne les créateurs pas à pas. Plus moderne que TubeBuddy sur cet axe.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Extension intégrée à YouTube Studio avec un design plus moderne que TubeBuddy. Dashboard séparé disponible. Courbe d'apprentissage courte : les 3-4 fonctionnalités principales sont accessibles en moins de 10 minutes.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support en anglais principalement. Documentation traduite automatiquement. Communauté Discord active mais internationale. Quelques tutos YouTube FR existent par des créateurs indépendants.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "Extensions Chrome, Firefox, Edge, Safari. Applications iOS et Android natives (avantage sur TubeBuddy). Export data vers Google Sheets. API accessible sur les plans supérieurs.",
    },
  ],
  heygen: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Voix FR correcte, moins naturelle que celle d'ElevenLabs selon les retours publics. La sync labiale fonctionne en français mais avec quelques glitches sur les sons nasaux typiques du FR (ent, in, on). Interface partiellement traduite.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.0,
      commentaire:
        "Plus cher que les outils voix-only. Creator à 29 $/mois en mensuel (ou 24 $/mois en annuel) pour un usage sérieux, Business à 149 $/mois pour les équipes (+20 $/seat). Le rapport qualité/prix dépend du besoin : excellent si tu as vraiment besoin d'avatars vidéo complets, décevant si tu veux juste de la voix.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 9.0,
      commentaire:
        "Point fort. Génération vidéo par avatar à partir d'un script, Custom Digital Twins (1 à 5 selon le plan), Video Translation avec sync labiale, 500+ stock photo avatars sur Free et 700+ Stock Video Avatars sur Creator, voice cloning sur Creator+. Avatar IV pour générations étendues sur plans supérieurs.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface moderne, workflow clair : script → avatar → voix → render. Courbe d'apprentissage de 30 min pour les basiques, quelques heures pour maîtriser les fonctionnalités avancées. Editor vidéo intégré basique.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Documentation bilingue partiellement traduite. Support en anglais uniquement. Communauté Discord active mais internationale. Plusieurs tutos YouTube FR existent, créés par la communauté.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API disponible sur plans payants, intégrations natives avec Zapier et Make. Export direct vers plateformes de diffusion. Plugin PowerPoint pour transformer des présentations en vidéos avec avatar.",
    },
  ],
  capcut: [
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
  veed: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.5,
      commentaire:
        "Interface partiellement traduite en français. Sous-titres auto FR corrects mais en retrait par rapport à Submagic sur le rendu visuel. Support anglais principalement. Documentation multilingue correcte.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.8,
      commentaire:
        "Creator à 11 €/mois correct pour un éditeur web tout-en-un. Pro à 23 €/mois pour les besoins croissants. Moins cher qu'un abonnement Premiere, plus cher qu'un CapCut gratuit. Bon équilibre polyvalence/prix.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 7.5,
      commentaire:
        "IA intégrée pour sous-titres auto, transcription, suppression bruit, suppression fond vidéo, B-roll automatique. Moins spécialisé qu'un Submagic ou Descript mais couvre les cas standards correctement.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Interface web propre, prise en main rapide pour un non-technicien. Courbe d'apprentissage plus courte que DaVinci Resolve mais plus chargée que CapCut. Compromis accessible.",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 7.0,
      commentaire:
        "Support principalement anglais. Base de connaissances accessible, quelques tutos YouTube FR de la communauté. Moins établi que Canva ou CapCut sur ce volet.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API disponible sur plans pro. Intégrations Zapier, Make, Google Drive, Dropbox. Import direct depuis YouTube, Zoom, Teams. Bonne ouverture pour des workflows automatisés, plus poussé que CapCut.",
    },
  ],
  invideo: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface anglais principalement, traduction partielle. Voix off IA FR correctes mais moins naturelles qu'ElevenLabs. Scripts FR fonctionnent, stock d'images avec mots-clés FR plus limité qu'EN.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.0,
      commentaire:
        "Modèle à crédits qui peut devenir coûteux selon les modèles IA sollicités (Veo 3.1, Sora 2 pro tarifés à leur prix API d'origine). Rentable pour un usage régulier et industrialisé. Pas adapté à un usage occasionnel sans maîtrise de la consommation de crédits.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 8.5,
      commentaire:
        "Point fort : génération vidéo à partir de script ou prompt, voix off IA, matching automatique d'images stock pertinentes, sous-titres auto, AI Magic Box pour éditer. L'un des outils les plus IA-first du marché généraliste.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 7.5,
      commentaire:
        "Interface moderne orientée workflow IA. Prise en main rapide pour les cas standards (script → vidéo). Plus technique si tu veux du contrôle fin (ajustements timeline, transitions custom).",
    },
    {
      label: "Support & confort FR",
      poids: 15,
      score: 6.8,
      commentaire:
        "Support anglais. Documentation traduite automatiquement. Peu de tutos YouTube FR (vs la richesse de Canva/CapCut). C'est un outil plus orienté marketeurs pros que créateurs amateurs.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.5,
      commentaire:
        "API disponible. Intégrations Zapier, Make, webhooks. Export direct YouTube, plateformes sociales. Pensé pour s'insérer dans des workflows marketing automatisés.",
    },
  ],
  kapwing: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface en anglais principalement, traduction partielle. Sous-titres auto FR fonctionnels mais moins précis qu'un outil spécialisé. Support exclusivement anglais.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 6.8,
      commentaire:
        "Pro à 16 $/mois en solo est cher vs Veed ou CapCut. Business à 50 $/mois par utilisateur devient intéressant si la collaboration temps réel est vraiment exploitée. Le rapport qualité/prix n'a de sens qu'en équipe.",
    },
    {
      label: "Profondeur des fonctionnalités IA",
      poids: 20,
      score: 7.0,
      commentaire:
        "Sous-titres auto, transcription, suppression silence, smart cut. Moins IA-first qu'un Submagic ou Descript, mais suffisant pour les usages d'équipe courants.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 7.5,
      commentaire:
        "Interface claire mais moins fluide que Veed ou Canva. Courbe d'apprentissage moyenne (1-2h pour être opérationnel). La valeur ajoutée se révèle en équipe.",
    },
    {
      label: "Collaboration équipe",
      poids: 15,
      score: 9.2,
      commentaire:
        "Point fort absolu. Édition simultanée, commentaires précis, approbation, gestion des rôles, brand kits partagés. L'un des meilleurs outils d'édition vidéo collaborative du marché.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 8.0,
      commentaire:
        "API sur plan Business, intégrations Slack, Notion, Asana, Google Drive, Dropbox. Pensé pour s'intégrer aux workflows d'équipe modernes.",
    },
  ],
  pictory: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 7.0,
      commentaire:
        "Interface principalement en anglais. Les voix IA ElevenLabs intégrées supportent 29 langues dont le français, donc le rendu vidéo final peut être en FR. Mais l'expérience d'édition reste anglophone.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 20,
      score: 7.0,
      commentaire:
        "25 $/mois en annuel pour 200 minutes de vidéo, c'est correct mais pas donné. Le stock Getty/Storyblocks et 60 minutes de voix IA ElevenLabs inclus améliorent la valeur. Plus cher qu'InVideo qui propose un Free Forever.",
    },
    {
      label: "Profondeur IA",
      poids: 20,
      score: 7.5,
      commentaire:
        "Bonne automatisation script-to-video. Découpe le texte en segments, propose des stock vidéos pertinents, génère la voix off, ajoute sous-titres et musique. Limites : la créativité reste \"générique\" (vidéos qui se ressemblent entre utilisateurs).",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.0,
      commentaire:
        "Workflow simple : tu colles un texte ou une URL, Pictory propose une première version en quelques minutes, tu retouches via une interface visuelle. Beaucoup plus accessible qu'un éditeur timeline classique.",
    },
    {
      label: "Stock vidéo et voix IA",
      poids: 15,
      score: 9.0,
      commentaire:
        "Point fort. Accès à 5 millions+ de vidéos Getty Images/Storyblocks dès le plan Starter (jusqu'à 18 millions sur Professional). Voix ElevenLabs intégrée (60 min sur Starter, 120 min sur Professional). Pas besoin de payer ces ressources séparément.",
    },
    {
      label: "Intégrations",
      poids: 10,
      score: 7.0,
      commentaire:
        "Connexions natives à YouTube, dépôts cloud, et import depuis URL d'article. API disponible sur les plans supérieurs pour automatiser. Moins riche que les solutions développeurs pures.",
    },
  ],
  pika: [
    {
      label: "Qualité en français",
      poids: 20,
      score: 6.5,
      commentaire:
        "Interface anglaise. Prompts en français fonctionnent mais résultats généralement meilleurs en anglais. Communauté FR limitée. Peu de tutos FR comparé à Runway.",
    },
    {
      label: "Rapport qualité/prix",
      poids: 25,
      score: 9.0,
      commentaire:
        "Point fort majeur. Plan Standard à 8 $/mois en annuel = quasi-imbattable pour découvrir sérieusement la génération vidéo IA. Plan gratuit récurrent (80 credits/mois) permet de tester sans payer. Vs Runway à 12 $/mois : Pika est sensiblement moins cher pour démarrer.",
    },
    {
      label: "Qualité de la génération vidéo",
      poids: 25,
      score: 7.5,
      commentaire:
        "Pika 2.5 produit des vidéos correctes. Qualité visuelle solide pour un outil grand public mais en retrait par rapport à Runway Gen-4.5 sur les rendus complexes ou cinéma. Bon pour les concepts créatifs et les vidéos sociales.",
    },
    {
      label: "Interface et prise en main",
      poids: 15,
      score: 8.5,
      commentaire:
        "Interface très simple, orientée créativité ludique. Workflow rapide : tu écris un prompt, tu choisis un Pikaffect, tu génères. Apprentissage rapide pour les débutants. Les Pikaffects sont un plus pédagogique pour comprendre ce qu'on peut faire.",
    },
    {
      label: "Effets et fonctionnalités créatives",
      poids: 10,
      score: 8.5,
      commentaire:
        "Pikaffects (Pikaframes, Pikascenes, Pikadditions, Pikaswaps, Pikatwists) sont une signature. Permettent des effets stylisés rapides et accessibles aux créateurs non-techniques. Différenciateur principal vs Runway plus VFX-pro.",
    },
    {
      label: "Usage commercial et restrictions",
      poids: 5,
      score: 6.0,
      commentaire:
        "Bonne nouvelle : d'après la page tarifs actuelle de Pika, l'usage commercial est listé sur tous les plans, y compris le gratuit. Les conditions exactes peuvent évoluer, vérifie les CGU avant de vendre des prestations vidéo basées sur Pika.",
    },
  ],
};

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getFaqPageSchema,
} from "@/lib/schema";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBio } from "@/components/AuthorBio";

const LAST_UPDATED = "26/05/2026";

export const metadata: Metadata = {
  title:
    "Lexique IA vidéo, termes essentiels expliqués sans jargon",
  description:
    "Définitions des termes clés de l'IA appliquée à la vidéo pour créateurs : prompt, modèle de fondation, hallucination, text-to-video, avatar IA, clonage vocal, lip-sync, deepfake, watermark, AI Act européen. 22 termes expliqués sans jargon.",
  alternates: {
    canonical: "https://www.filtrio.fr/lexique",
  },
};

interface Term {
  slug: string;
  terme: string;
  definition: React.ReactNode;
  source?: string;
}

const TERMS: Term[] = [
  {
    slug: "ia-generative",
    terme: "IA générative",
    definition: (
      <>
        <strong className="text-slate-100">
          Famille de modèles d&apos;intelligence artificielle qui produisent
          du contenu.
        </strong>{" "}
        Texte, image, son, vidéo, code. À la différence des IA classiques qui
        classifient ou prédisent (filtre anti-spam, recommandation), l&apos;IA
        générative crée du contenu nouveau à partir d&apos;une instruction.
        Outils Filtrio concernés : Submagic, OpusClip, ElevenLabs, HeyGen,
        Runway, Synthesia, etc.
      </>
    ),
  },
  {
    slug: "modele-fondation",
    terme: "Modèle de fondation",
    definition: (
      <>
        <strong className="text-slate-100">
          Grand modèle d&apos;IA entraîné sur un volume massif de données.
        </strong>{" "}
        Sert de base à de nombreuses applications dérivées. Exemples côté
        vidéo : Sora et GPT-4o (OpenAI), Veo (Google), Gen-4 (Runway), Kling.
        Les éditeurs de SaaS comme OpusClip ou Submagic n&apos;entraînent
        souvent pas leur propre modèle de fondation, ils intègrent ceux d&apos;OpenAI,
        Anthropic, Google ou un mix. Le coût d&apos;entraînement d&apos;un
        modèle de fondation se compte en millions de dollars.
      </>
    ),
  },
  {
    slug: "prompt",
    terme: "Prompt",
    definition: (
      <>
        <strong className="text-slate-100">
          Instruction écrite envoyée à un modèle d&apos;IA.
        </strong>{" "}
        En vidéo IA, le prompt décrit ce que tu veux générer ou comment tu
        veux que l&apos;outil traite ton contenu. Exemple sur OpusClip : tu
        peux préciser le style de clips voulus, le ton, la durée cible. La
        qualité du prompt influence directement la qualité du résultat. Le
        métier de prompt engineer s&apos;est développé en 2023-2024 autour de
        cette compétence.
      </>
    ),
  },
  {
    slug: "token",
    terme: "Token",
    definition: (
      <>
        <strong className="text-slate-100">
          Unité de traitement et de facturation des modèles IA.
        </strong>{" "}
        Un token correspond grossièrement à 3-4 caractères en anglais, un peu
        plus en français. Les modèles facturent par tranches de 1000 tokens
        en entrée et en sortie. Pour la vidéo, certains outils parlent
        plutôt de crédits ou de minutes d&apos;export. Submagic, OpusClip,
        ElevenLabs utilisent leur propre système de crédits qui ne
        correspond pas exactement aux tokens du modèle sous-jacent.
      </>
    ),
  },
  {
    slug: "hallucination-ia",
    terme: "Hallucination IA",
    definition: (
      <>
        <strong className="text-slate-100">
          Production par un modèle d&apos;IA d&apos;une information fausse
          présentée comme vraie.
        </strong>{" "}
        Le modèle invente une donnée, un nom propre, une citation, un fait.
        Très fréquent sur les modèles de langage. En vidéo, ça se traduit
        souvent par des sous-titres mal transcrits ou par un avatar qui dit
        une phrase modifiée. Toujours relire les transcriptions et les
        sous-titres générés avant publication, surtout en français où les
        modèles font encore plus d&apos;erreurs qu&apos;en anglais.
      </>
    ),
  },
  {
    slug: "text-to-video",
    terme: "Text-to-video",
    definition: (
      <>
        <strong className="text-slate-100">
          Génération d&apos;une vidéo entière à partir d&apos;un prompt
          texte.
        </strong>{" "}
        Pas d&apos;image source, pas de footage. L&apos;outil produit chaque
        image. Outils Filtrio concernés : Runway, Pika, Sora (OpenAI),
        Veo (Google). Qualité encore variable, durée généralement limitée à
        5-10 secondes par clip, coût par seconde élevé. Plutôt utilisé pour
        des plans d&apos;illustration courts ou des séquences artistiques que
        pour de la vidéo longue complète.
      </>
    ),
  },
  {
    slug: "image-to-video",
    terme: "Image-to-video",
    definition: (
      <>
        <strong className="text-slate-100">
          Animation d&apos;une image fixe en clip vidéo court.
        </strong>{" "}
        Tu fournis une image source, le modèle génère du mouvement
        cohérent (zoom, mouvement de caméra, animation des éléments).
        Disponible sur Runway, Pika, Kling. Très utilisé pour donner vie à
        une photo, créer un teaser, animer un visuel statique pour un short.
        Plus rapide et moins cher que le text-to-video pur car la base
        visuelle est déjà donnée.
      </>
    ),
  },
  {
    slug: "avatar-ia",
    terme: "Avatar IA",
    definition: (
      <>
        <strong className="text-slate-100">
          Personnage humain virtuel généré par IA qui prononce un texte
          que tu fournis.
        </strong>{" "}
        Permet de produire une vidéo de présentation, un tutoriel ou une
        formation sans tourner. Outils Filtrio concernés : Synthesia (200+
        avatars stock, 175+ langues), HeyGen (700+ avatars Creator,
        clonage de ton propre avatar). Le rendu est convaincant pour la
        formation interne ou la communication corporate, moins pour les
        contenus où la présence humaine authentique compte (vlog, podcast
        vidéo).
      </>
    ),
  },
  {
    slug: "voix-off-ia",
    terme: "Voix off IA",
    definition: (
      <>
        <strong className="text-slate-100">
          Synthèse vocale générée par IA à partir d&apos;un texte.
        </strong>{" "}
        Bibliothèque de voix préfabriquées dans plusieurs langues et tons
        (narrateur, conversationnel, joyeux, sérieux). Référence du marché :
        ElevenLabs. Très utilisée pour la voix off de tutoriels YouTube, de
        formations en ligne, de podcasts narratifs. La qualité du français
        a beaucoup progressé en 2024-2025, on est très proche d&apos;un
        rendu humain sur les voix premium.
      </>
    ),
  },
  {
    slug: "clonage-vocal",
    terme: "Clonage vocal",
    definition: (
      <>
        <strong className="text-slate-100">
          Création d&apos;une voix IA qui imite la tienne à partir d&apos;un
          échantillon audio.
        </strong>{" "}
        Quelques minutes d&apos;enregistrement de toi suffisent à entraîner
        un modèle qui peut ensuite prononcer n&apos;importe quel texte avec
        ton timbre, ton accent et ton intonation. Disponible sur
        ElevenLabs, HeyGen, Descript. Utile pour la production rapide de
        voix off cohérentes avec ta marque personnelle. Soulève des
        questions éthiques importantes (usage frauduleux, deepfake audio).
      </>
    ),
  },
  {
    slug: "lip-sync",
    terme: "Lip-sync",
    definition: (
      <>
        <strong className="text-slate-100">
          Synchronisation des mouvements des lèvres avec une bande audio.
        </strong>{" "}
        En IA vidéo, c&apos;est ce qui rend un avatar crédible quand il
        parle (Synthesia, HeyGen) ou ce qui permet de doubler une vidéo dans
        une autre langue en gardant le mouvement des lèvres aligné avec la
        nouvelle bande son (HeyGen Video Translate, ElevenLabs Dubbing
        Studio). La qualité du lip-sync est l&apos;un des critères qui
        sépare un rendu pro d&apos;un rendu amateur.
      </>
    ),
  },
  {
    slug: "sous-titres-automatiques",
    terme: "Sous-titres automatiques",
    definition: (
      <>
        <strong className="text-slate-100">
          Transcription automatique de l&apos;audio en texte affiché à
          l&apos;écran.
        </strong>{" "}
        Étape de base : l&apos;outil détecte la langue, transcrit les
        paroles, segmente en blocs lisibles. Étape avancée : il anime les
        mots un par un, met des emphases, ajoute des emojis, propose des
        styles visuels (templates). Référence du marché côté shorts FR :
        Submagic. Côté gratuit/basique : CapCut. Toujours relire la
        transcription, surtout en français.
      </>
    ),
  },
  {
    slug: "recyclage-video",
    terme: "Recyclage de contenu (repurposing)",
    definition: (
      <>
        <strong className="text-slate-100">
          Transformation d&apos;une vidéo longue en plusieurs formats courts.
        </strong>{" "}
        Tu fournis un podcast d&apos;une heure ou une interview, l&apos;outil
        identifie les meilleurs moments (questions clés, citations
        marquantes), génère des clips courts adaptés aux formats verticaux
        (TikTok, Shorts, Reels), ajoute sous-titres et accroches. Référence
        du marché : OpusClip. Permet de multiplier la durée de vie
        d&apos;un contenu long sans tourner de nouvelles vidéos.
      </>
    ),
  },
  {
    slug: "short-vertical",
    terme: "Short vertical",
    definition: (
      <>
        <strong className="text-slate-100">
          Format vidéo court tourné en 9:16 (vertical), durée 15-90
          secondes.
        </strong>{" "}
        Trois plateformes principales : TikTok, YouTube Shorts, Instagram
        Reels. Chacune a son algorithme, son public et ses bonnes
        pratiques. Un short qui marche sur TikTok ne marche pas
        forcément sur YouTube et inversement. Les outils Filtrio dédiés :
        Submagic, OpusClip, CapCut.
      </>
    ),
  },
  {
    slug: "b-roll",
    terme: "B-roll",
    definition: (
      <>
        <strong className="text-slate-100">
          Plan d&apos;illustration secondaire ajouté par-dessus la vidéo
          principale.
        </strong>{" "}
        Sert à illustrer un propos, à varier le visuel, à masquer une
        coupure de montage. Exemple : tu parles à la caméra de Submagic, le
        B-roll montre une capture d&apos;écran de l&apos;outil. Certains
        outils IA récents (Submagic Pro, OpusClip) génèrent du B-roll
        automatiquement à partir du contexte de la phrase prononcée.
      </>
    ),
  },
  {
    slug: "stock-footage",
    terme: "Stock footage",
    definition: (
      <>
        <strong className="text-slate-100">
          Banque de vidéos libres de droits qu&apos;on peut utiliser dans
          ses propres montages.
        </strong>{" "}
        Plateformes courantes : Pexels (gratuit), Storyblocks (abonnement),
        Adobe Stock, Artgrid. Permet d&apos;ajouter des plans
        d&apos;illustration sans tourner soi-même. Plusieurs outils Filtrio
        intègrent du stock footage automatiquement : Submagic Pro propose
        des B-rolls Storyblocks, InVideo intègre une grande bibliothèque
        directement dans son éditeur.
      </>
    ),
  },
  {
    slug: "watermark-ia",
    terme: "Watermark IA",
    definition: (
      <>
        <strong className="text-slate-100">
          Marquage visible ou invisible identifiant un contenu comme généré
          par IA.
        </strong>{" "}
        Le watermark visible est un logo ou un texte sur l&apos;image
        (encore présent sur les exports plans gratuits de la plupart des
        outils). Le watermark invisible est un signal numérique embarqué
        dans les pixels ou les métadonnées, détectable par des outils
        spécialisés. L&apos;AI Act européen prévoit des obligations de
        marquage pour les contenus synthétiques publiés à grande échelle.
      </>
    ),
    source: "Règlement UE 2024/1689 (AI Act), articles sur les obligations de transparence",
  },
  {
    slug: "deepfake",
    terme: "Deepfake",
    definition: (
      <>
        <strong className="text-slate-100">
          Vidéo ou audio synthétique faisant dire ou faire à une personne
          réelle quelque chose qu&apos;elle n&apos;a jamais fait.
        </strong>{" "}
        Utilisations légitimes : doublage automatique avec lip-sync,
        avatar personnel pour ses propres contenus, prototypage. Usages
        problématiques : usurpation d&apos;identité, désinformation,
        contenu non consenti. Sanctionné par la loi française dans
        plusieurs cas (notamment usurpation d&apos;identité, contenu
        sexuel non consenti, fraude financière). L&apos;AI Act européen
        impose le marquage des contenus deepfake destinés au grand
        public.
      </>
    ),
    source: "Règlement UE 2024/1689 (AI Act), Code pénal français",
  },
  {
    slug: "ctr-miniature",
    terme: "CTR miniature (Click-Through Rate)",
    definition: (
      <>
        <strong className="text-slate-100">
          Pourcentage de personnes qui cliquent sur ta vidéo après avoir
          vu la miniature.
        </strong>{" "}
        Métrique critique sur YouTube. Une miniature bien faite peut faire
        passer le CTR de 2-3 % (peu engageant) à 8-12 % (très engageant).
        L&apos;algorithme YouTube favorise les vidéos avec un bon CTR. Les
        outils IA de génération de miniatures (Canva, ThumbnailAI, partie
        de Photoshop) aident à itérer rapidement entre plusieurs versions.
      </>
    ),
  },
  {
    slug: "retention-audience",
    terme: "Rétention audience (AVD)",
    definition: (
      <>
        <strong className="text-slate-100">
          Pourcentage de la vidéo regardé en moyenne par les viewers.
        </strong>{" "}
        Aussi appelée AVD (Average View Duration) ou Average Percentage
        Viewed. Sur YouTube, un AVD de 50 % et plus est très bon, 30-40 %
        est correct, en dessous de 25 % c&apos;est problématique. L&apos;algorithme
        favorise massivement les vidéos avec une bonne rétention.
        L&apos;intérêt des outils de recyclage comme OpusClip : ils
        identifient les moments à forte rétention dans une vidéo longue
        pour en faire des shorts.
      </>
    ),
  },
  {
    slug: "algorithme-recommandation",
    terme: "Algorithme de recommandation",
    definition: (
      <>
        <strong className="text-slate-100">
          Moteur d&apos;une plateforme qui décide à qui montrer ton
          contenu.
        </strong>{" "}
        Chaque plateforme a le sien (YouTube, TikTok, Instagram).
        L&apos;algorithme combine des signaux explicites (likes,
        commentaires, partages, abonnements) et des signaux implicites
        (temps de visionnage, scroll, replay). Pas de formule publique. Les
        outils SEO YouTube comme TubeBuddy et VidIQ aident à comprendre les
        tendances et à optimiser ses titres, descriptions et tags pour
        cocher les bonnes cases.
      </>
    ),
  },
  {
    slug: "ai-act",
    terme: "AI Act européen",
    definition: (
      <>
        <strong className="text-slate-100">
          Règlement UE 2024/1689 sur l&apos;intelligence artificielle, entré
          en vigueur le 1er août 2024.
        </strong>{" "}
        Premier cadre réglementaire global sur l&apos;IA dans le monde.
        Pour les créateurs, deux points concrets : obligation de marquer
        les contenus deepfake destinés au grand public (transparence sur
        la nature synthétique), et obligation pour les fournisseurs
        d&apos;outils IA d&apos;informer clairement les utilisateurs.
        L&apos;application complète est progressive jusqu&apos;en 2027.
        Sanctions financières lourdes prévues en cas de non-conformité
        pour les éditeurs d&apos;outils.
      </>
    ),
    source: "Règlement UE 2024/1689 (AI Act)",
  },
];

const ORDER: string[] = [
  "ia-generative",
  "modele-fondation",
  "prompt",
  "token",
  "hallucination-ia",
  "text-to-video",
  "image-to-video",
  "avatar-ia",
  "voix-off-ia",
  "clonage-vocal",
  "lip-sync",
  "sous-titres-automatiques",
  "recyclage-video",
  "short-vertical",
  "b-roll",
  "stock-footage",
  "watermark-ia",
  "deepfake",
  "ctr-miniature",
  "retention-audience",
  "algorithme-recommandation",
  "ai-act",
];

const TERMS_SORTED: Term[] = [...TERMS].sort(
  (a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug),
);

const FAQ_TERMS = [
  {
    question: "À quoi sert un lexique IA vidéo ?",
    answer: (
      <>
        À comprendre les termes utilisés dans la documentation des outils
        SaaS, dans les articles de presse spécialisée et dans les conditions
        générales d&apos;utilisation. Beaucoup d&apos;outils mélangent
        crédits, tokens, minutes d&apos;export, plans tarifaires : connaître
        le vocabulaire évite les mauvaises surprises en facturation et
        aide à comparer honnêtement deux outils.
      </>
    ),
  },
  {
    question: "Pourquoi Filtrio publie un lexique en accès libre ?",
    answer: (
      <>
        Beaucoup de glossaires IA français sont biaisés (poussent une
        plateforme spécifique) ou approximatifs (mauvaises définitions
        techniques). Filtrio analyse les outils IA vidéo pour créateurs et
        publie un vocabulaire neutre, sans promotion d&apos;un acteur
        particulier. Pas de conseil produit dans le lexique, juste de la
        pédagogie pour comprendre ce que tu lis ailleurs.
      </>
    ),
  },
  {
    question: "Les définitions sont-elles à jour ?",
    answer: (
      <>
        Vérifiées en {LAST_UPDATED}. Le vocabulaire IA évolue vite, surtout
        autour du cadre légal européen (AI Act) et des nouvelles capacités
        des modèles (Sora, Veo, Gen-4, etc.). Si tu repères une définition
        obsolète, écris à contact@filtrio.fr.
      </>
    ),
  },
  {
    question: "Pourquoi le marquage IA devient-il important ?",
    answer: (
      <>
        L&apos;AI Act européen entré en vigueur en 2024 prévoit des
        obligations de transparence pour les contenus synthétiques diffusés
        à grande échelle. Les plateformes (YouTube, TikTok, Meta) ont
        commencé à demander aux créateurs de signaler les contenus modifiés
        ou générés par IA. Mieux vaut s&apos;habituer dès maintenant à
        cocher la case prévue dans les paramètres d&apos;upload.
      </>
    ),
  },
  {
    question: "Tous ces termes s'appliquent-ils à mon métier ?",
    answer: (
      <>
        Non. Si tu fais des shorts TikTok, les termes clés pour toi sont
        sous-titres automatiques, recyclage de contenu, lip-sync, CTR
        miniature. Si tu fais de la formation en ligne, avatar IA et voix
        off IA seront plus pertinents. Si tu fais du long format YouTube,
        rétention audience et algorithme de recommandation sont
        prioritaires. Lis ce qui te concerne, ignore le reste.
      </>
    ),
  },
];

export default function LexiquePage() {
  return (
    <>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getWebsiteSchema(),
          getFaqPageSchema(FAQ_TERMS),
          {
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Lexique IA vidéo, Filtrio",
            description:
              "Glossaire des termes essentiels de l'IA appliquée à la vidéo pour créateurs.",
            url: "https://www.filtrio.fr/lexique",
            inLanguage: "fr-FR",
            hasDefinedTerm: TERMS.map((t) => ({
              "@type": "DefinedTerm",
              name: t.terme,
              url: `https://www.filtrio.fr/lexique#${t.slug}`,
            })),
          },
        ]}
      />
      <Nav />

      {/* HERO, full-width avec halo emerald clipé au viewport */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(16,185,129,0.45), rgba(16,185,129,0.10), transparent)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-12">
          <div className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-200">
              Accueil
            </Link>{" "}
            · <span className="text-slate-300">Lexique</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5 tracking-tight">
            Lexique IA vidéo.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {TERMS.length}{" "}termes essentiels expliqués en clair. Pour
            comprendre ce que tu lis dans la doc d&apos;un outil, dans un
            article de presse spécialisée ou dans les conditions générales
            avant de t&apos;abonner.
          </p>
          <AuthorByline
            lastCheck={LAST_UPDATED}
            subtitle="Comparateur indépendant · Définitions neutres"
          />
        </div>
      </section>

      {/* TABLE DES MATIÈRES */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
          <div className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">
            Sommaire
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {TERMS_SORTED.map((t) => (
              <li key={t.slug}>
                <a
                  href={`#${t.slug}`}
                  className="text-slate-300 hover:text-emerald-500 transition"
                >
                  · {t.terme}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TERMS */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-8">
          {TERMS_SORTED.map((t) => (
            <article
              key={t.slug}
              id={t.slug}
              className="scroll-mt-20 border-b border-slate-800/60 pb-8 last:border-b-0"
            >
              <h2 className="text-2xl font-bold text-slate-100 mb-3">
                {t.terme}
              </h2>
              <div className="text-slate-300 leading-relaxed text-base">
                {t.definition}
              </div>
              {t.source && (
                <div className="text-xs text-slate-500 mt-3">
                  Source : {t.source}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* NOTE ÉTHIQUE / TRANSPARENCE */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-sm text-slate-400 leading-relaxed">
          <strong className="text-slate-200">Note de transparence.</strong>
          {" "}Ce lexique est à but informatif et pédagogique. Filtrio cite des
          outils par leur nom pour illustrer chaque définition (Submagic,
          OpusClip, ElevenLabs, HeyGen, Runway, etc.). Certains de ces outils
          font partie de notre programme d&apos;affiliation, ce qui est
          détaillé dans nos{" "}
          <Link href="/methode" className="text-emerald-500 hover:underline">
            critères d&apos;analyse
          </Link>{" "}
          et sur la page{" "}
          <Link href="/a-propos#transparence" className="text-emerald-500 hover:underline">
            à propos
          </Link>
          . Les définitions elles-mêmes restent neutres.
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">
            Questions courantes
          </div>
          <h2 className="text-3xl font-bold mb-8 tracking-tight">
            Sur ce lexique.
          </h2>
          <div className="space-y-3">
            {FAQ_TERMS.map((qa) => (
              <details
                key={qa.question}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-slate-800/40 transition">
                  <span className="font-semibold text-slate-100">
                    {qa.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="faq-chevron text-emerald-500 text-2xl leading-none transition-transform"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 leading-relaxed">
                  {qa.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AuthorBio />
      <Newsletter />
      <Footer />
    </>
  );
}

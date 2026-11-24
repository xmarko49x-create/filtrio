import Link from "next/link";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { SCORING_BY_SLUG } from "@/lib/scoring";
import FigureTest from "@/components/FigureTest";

export const klapFiche: FicheData = {
  slug: "klap",
  hero: {
    h1: "Klap : notre avis après un test de l'essai gratuit en 2026",
    tagline:
      "Le clipper IA français qui transforme une vidéo longue en shorts avec de bons sous-titres et des intégrations poussées, mais un essai gratuit très limité. Nous l'avons testé le 23 novembre 2026 sur la même vidéo française que les autres outils de notre banc d'essai.",
    badges: [
      { label: "Shorts & clips", tone: "primary" },
      { label: "Testé par Filtrio", tone: "accent" },
      { label: "Éditeur français", tone: "neutral" },
    ],
    origine: "France",
    tempsLecture: 8,
    lastCheck: "23/11/2026",
    publishedAt: "2026-11-23",
  },
  verdict30s: [
    {
      question: "C'est quoi ?",
      answer:
        "Un outil en ligne qui découpe une vidéo longue (podcast, interview, cours) en clips verticaux sous-titrés, note chaque clip sur son potentiel de viralité et propose de les programmer sur les réseaux. L'édition se fait par le texte : on supprime une phrase de la transcription et le montage se coupe tout seul. Le pied de page du site indique ZIGG SAS comme éditeur, une forme juridique française.",
    },
    {
      question: "Pour qui ?",
      answer:
        "Créateurs et podcasteurs francophones qui recyclent des contenus longs en shorts, et qui veulent enchaîner découpe, sous-titrage et publication dans un seul outil. Il faut accepter de payer : l'essai ne permet pas de récupérer de fichier.",
    },
    {
      question: "Combien ?",
      answer:
        "Essai gratuit sur une seule vidéo, en aperçu, sans téléchargement possible. Ensuite : De base à 14,50 $/mois (100 clips), Pro à 39,50 $/mois (300 clips), Pro+ à 94,50 $/mois (1 000 clips), ces montants supposant un engagement annuel de 174 $, 474 $ et 1 134 $. Sans engagement, la FAQ de l'éditeur annonce 29 $, 79 $ et 189 $ par mois. Facturation en dollars, relevé le 23/11/2026.",
    },
    {
      question: "Est-ce qu'on le recommande ?",
      answer: (
        <>
          <strong className="text-indigo-400">
            Oui, si tu es prêt à payer dès le départ
          </strong>
          . Sur notre test, la transcription française était juste là où
          CapCut se trompait, les sous-titres étaient lisibles et le recadrage
          vertical propre. Mais aucun fichier ne sort de l'essai gratuit : pour
          juger le rendu final, il faut s&apos;abonner.
        </>
      ),
    },
  ],
  sectionApresVerdict: {
    titre: "Klap : notre avis et notre test du 23 novembre 2026",
    contenu: (
      <>
        <p>
          Klap transforme une vidéo longue en clips verticaux sous-titrés, note
          chaque clip et propose de les programmer sur les réseaux. Le pied de
          page du site indique <strong>ZIGG SAS</strong> comme éditeur, une
          forme juridique française, fondée par Théo Champion et Victor
          Timsit.
        </p>
        <p>
          Le 23 novembre 2026, nous avons créé un compte sans carte bancaire et
          nous y avons fait passer une vraie vidéo. La source est un entretien
          de 1 min 17 en français, filmé en plan fixe, publié sous licence
          libre :{" "}
          <a
            href="https://tubedu.org/videos/watch/9aba92da-0f91-44cf-9904-31a66a722413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            « Sciences ensemble »
          </a>
          , interview de Laure Turcati, MOOC Science Ouverte (Alliance Sorbonne
          Université), 3 mars 2022, TubEdu, licence CC BY 4.0. C&apos;est
          exactement le même fichier que celui utilisé pour nos tests de
          Submagic, d&apos;OpusClip et de CapCut : tu peux le télécharger et
          refaire la manipulation toi-même.
        </p>
        <p>Deux repères reviennent dans toutes les légendes :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-slate-100">Testé</strong> — nous avons
            réellement fait l&apos;action pendant la session.
          </li>
          <li>
            <strong className="text-slate-100">Observé</strong> — la fonction
            existe à l&apos;écran, mais nous ne l&apos;avons pas utilisée. Nous
            ne portons donc aucun jugement dessus.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          1. Le premier écran
        </h3>
        <FigureTest
          src="/tests/2026-11-23/klap-accueil-vide.png"
          alt="Écran d'accueil de Klap après inscription, avec le champ d'import"
          caption={
            <>
              L&apos;écran d&apos;accueil après inscription. Trois onglets
              seulement : Vidéos, Calendrier, Analytique. L&apos;interface est
              en français par défaut, sans rien avoir à régler, ce qui
              n&apos;était pas acquis : la page tarifaire de Klap est en
              anglais et en dollars.
              <br />
              <br />
              Un détail se remarque sur l&apos;action principale de
              l&apos;écran. Le champ d&apos;import affiche «{" "}
              <strong className="text-slate-100">Supprimer un fichier</strong>{" "}
              ou coller un lien depuis Loom ». L&apos;original anglais dit{" "}
              <em>Drop a file</em>, c&apos;est-à-dire déposer un fichier. La
              traduction a compris « supprimer ».
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong> : la création
              de compte et l&apos;arrivée sur cet écran, sans carte bancaire.
            </>
          }
        />

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          2. Les réglages avant de lancer
        </h3>
        <FigureTest
          src="/tests/2026-11-23/klap-modal-generation.png"
          alt="Fenêtre de génération de Klap, avec la durée de la source et le bouton de lancement"
          caption={
            <>
              La fenêtre de génération, une fois le fichier déposé. La vignette
              confirme la durée de la source, 1:17, et le bouton annonce
              « Générer ~7 courts-métrages ».
              <br />
              <br />
              Au passage, « courts-métrages » traduit <em>shorts</em>, qui
              désigne les vidéos verticales courtes et non le cinéma. Le titre
              de la même fenêtre dit pourtant « Créer des shorts ».
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong> : le dépôt du
              fichier et le lancement avec les réglages par défaut.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-styles-legendes.png"
          alt="Galerie des styles de sous-titres de Klap, avec un texte d'aperçu illisible en français"
          caption={
            <>
              La galerie de styles de sous-titres, neuf vignettes
              d&apos;aperçu. Toutes affichent le même texte : « LE VITE BRUN /
              FOX SAUTS TERMINÉ ». C&apos;est la phrase de test anglaise{" "}
              <em>the quick brown fox jumps over the lazy dog</em> passée à la
              traduction automatique. En français, l&apos;aperçu ne permet donc
              plus de juger la lisibilité d&apos;un style.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>, nous avons
              gardé le style proposé par défaut.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-langues.png"
          alt="Liste des langues source de Klap, le français en huitième position"
          caption={
            <>
              La liste des langues source. Le français y figure, en huitième
              position. L&apos;information mérite d&apos;être notée : le site
              de Klap annonce « 99 langues » sans jamais nommer le français.
              <br />
              <br />
              Le réglage par défaut est « Auto ». Nous l&apos;avons laissé tel
              quel, puisque c&apos;est ce qu&apos;obtient un utilisateur qui ne
              touche à rien.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-modes.png"
          alt="Menu déroulant de Klap avec les trois modes de génération"
          caption={
            <>
              Le menu déroulant du titre révèle trois modes : Courts métrages,
              Légendes, et{" "}
              <strong className="text-slate-100">Reformuler</strong>.
              <br />
              <br />
              Ce dernier mérite une note d&apos;usage. En anglais, la fonction
              s&apos;appelle <em>Reframe</em>, c&apos;est-à-dire recadrer une
              vidéo horizontale en vertical. En français, « reformuler » veut
              dire redire autrement. Un utilisateur qui cherche le recadrage
              risque de ne pas le trouver sous ce nom.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>, seul le mode
              Courts métrages a été utilisé.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-mes-modeles.png"
          alt="Onglet Mes modèles de Klap, vide sur un compte neuf"
          caption={
            <>
              L&apos;onglet « Mes modèles », vide sur un compte neuf. Il sert à
              enregistrer sa propre configuration de sous-titres pour la
              réutiliser.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-publication-auto.png"
          alt="Option de publication automatique de Klap, désactivée par défaut"
          caption={
            <>
              La publication automatique, désactivée par défaut. Rien
              n&apos;est publié sans connecter un compte.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>.
            </>
          }
        />

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          3. Le traitement
        </h3>
        <FigureTest
          src="/tests/2026-11-23/klap-traitement.png"
          alt="Écran d'attente de Klap pendant la préparation des médias"
          caption={
            <>
              L&apos;écran d&apos;attente. Klap annonce « Il reste 1 minute »
              et propose de prévenir par mail. Le traitement a effectivement
              pris environ une minute.
              <br />
              <br />
              Pour situer, sur le même fichier : GPT-Video 17 secondes, CapCut
              moins d&apos;une minute, Klap une minute, Submagic et OpusClip
              environ 2 min 30.
              <br />
              <br />
              Un questionnaire s&apos;intercale pendant l&apos;attente :
              « Qu&apos;est-ce qui vous décrit le mieux ? ». Nous ne
              l&apos;avons pas rempli.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          4. Le résultat sur une source de 1 min 17
        </h3>
        <FigureTest
          src="/tests/2026-11-23/klap-resultat-score.png"
          alt="Résultat de Klap : un court généré, score de viralité et transcription"
          caption={
            <>
              Sur cette source de soixante-dix-sept secondes, Klap a produit{" "}
              <strong className="text-slate-100">un seul court</strong>,
              d&apos;une durée de 1:17, soit la vidéo entière. Il l&apos;expli­que
              à l&apos;écran : « Votre vidéo ne contient pas assez de dialogues
              pour générer plusieurs courts. »
              <br />
              <br />
              Le bouton de lancement annonçait « ~7 courts-métrages ».
              C&apos;est une estimation affichée avant analyse, et sur une
              source aussi courte elle n&apos;avait pas de sens. Nous n&apos;en
              tirons aucune conclusion sur le comportement de l&apos;outil face
              à une vidéo longue, que nous n&apos;avons pas testée.
              <br />
              <br />
              Klap génère en revanche un titre en français correct et un score
              de viralité de <strong className="text-slate-100">65/100</strong>{" "}
              accompagné d&apos;une analyse argumentée : points forts, freins,
              suggestions concrètes. Ce texte est rédigé dans un français
              nettement meilleur que les menus de l&apos;interface.
              <br />
              <br />
              Une nuance : la source dit « une quarantaine de projets », le
              titre généré écrit « 40 projets ». L&apos;IA transforme une
              approximation en chiffre précis.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          5. Les sous-titres français
        </h3>
        <p>
          C&apos;est le point de comparaison le plus utile, parce que les trois
          autres outils de notre banc d&apos;essai ont reçu exactement le même
          fichier.
        </p>
        <FigureTest
          src="/tests/2026-11-23/klap-apercu-0013.png"
          alt="Aperçu du clip Klap à 13 secondes, sous-titre incrusté"
          caption={
            <>
              À 0:13, le sous-titre affiche « SUPÉRIEUR, DONT SORBONNE ». Deux
              lignes, en majuscules, avec le mot en cours surligné en jaune,
              posées en bas sans mordre sur le visage.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-apercu-0016.png"
          alt="Aperçu du clip Klap à 16 secondes, sous-titre incrusté"
          caption={
            <>
              À 0:16, « POUR CE QUI EST DES INSTITUTIONS QUI ». Transcription
              correcte.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-resultat-lecture.png"
          alt="Lecture du clip Klap à 43 secondes, avec la transcription complète à droite"
          caption={
            <>
              À 0:43, « GENS DANS CES PROJETS QUI SONT », et la transcription
              complète visible dans le panneau de droite. Les deux passages sur
              lesquels CapCut s&apos;était trompé sont ici corrects : « une
              quarantaine de projets, un petit peu plus », que CapCut avait
              écrit « 1 quarantaine de projets 1 p&apos;tit peu plus », et
              « des projets autour de la qualité de l&apos;air », que CapCut
              avait écrit « de des projets autour de la qualité de l&apos;air ».
              <br />
              <br />
              Ce sont deux exemples vérifiables à l&apos;image, pas un taux
              d&apos;erreur calculé.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-bandeau-tronque.png"
          alt="Clip Klap en plein écran à 5 secondes, incrustation du bas tronquée par le recadrage"
          caption={
            <>
              À 0:05, en plein écran. Le recadrage 9:16 centre correctement le
              visage, le suivi fonctionne. Mais l&apos;incrustation en bas de
              l&apos;image est amputée : on ne lit plus que « …atoire
              PartiCitaE » au lieu du nom complet du projet. Le début du mot est
              sorti du cadre.
              <br />
              <br />
              C&apos;est le compromis inverse de{" "}
              <Link
                href="/outils/capcut"
                className="text-sky-400 hover:underline"
              >
                CapCut
              </Link>
              , qui conservait le format 16:9 d&apos;origine et laissait
              l&apos;incrustation entière, mais posait son sous-titre blanc
              par-dessus. Deux outils, deux façons de dégrader la même
              information, sur le même fichier.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          6. L&apos;éditeur, accessible sans payer
        </h3>
        <FigureTest
          src="/tests/2026-11-23/klap-editeur.png"
          alt="Éditeur de Klap, transcription découpée en segments cliquables"
          caption={
            <>
              L&apos;éditeur complet s&apos;ouvre dès l&apos;essai gratuit. À
              droite, la transcription découpée en segments cliquables : on
              supprime une phrase et le montage se coupe tout seul. C&apos;est
              le principe de l&apos;édition par le texte, celui de{" "}
              <Link
                href="/outils/descript"
                className="text-violet-400 hover:underline"
              >
                Descript
              </Link>
              , et il est ici disponible sans abonnement. La timeline montre
              que Klap a bien segmenté la vidéo en scènes.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>, aucune coupe
              n&apos;a été appliquée.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-editeur-modeles.png"
          alt="Éditeur de modèles de sous-titres de Klap"
          caption={
            <>
              L&apos;éditeur de modèles, qui permet de régler position, emojis,
              mot surligné, typographie et affichage des sous-titres.
              <br />
              <br />
              La traduction se mélange ici : le panneau s&apos;intitule
              « Captions » en anglais au milieu d&apos;une interface française,
              la graisse de police est « Extra audacieux », et la vidéo de
              démonstration est une vidéo anglaise.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>, aucun
              réglage modifié.
            </>
          }
        />

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          7. Le moment où ça bloque
        </h3>
        <FigureTest
          src="/tests/2026-11-23/klap-encart-publier.png"
          alt="Encart de Klap invitant à publier directement plutôt qu'à télécharger"
          caption={
            <>
              Avant le téléchargement, Klap affiche un encart : « Publier
              directement depuis Klap. Ignorez le téléchargement. Planifiez les
              publications et suivez les performances. » On est orienté vers la
              connexion de ses comptes sociaux plutôt que vers le fichier.
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-mur-paiement.png"
          alt="Mur de paiement de Klap, trois plans affichés en dollars"
          caption={
            <>
              Le point d&apos;arrêt. « Passer à la version téléchargeable.
              Choisissez un plan pour continuer et télécharger vos clips ! »
              <br />
              <br />
              Sans abonnement,{" "}
              <strong className="text-slate-100">
                nous n&apos;avons récupéré aucun fichier
              </strong>
              . L&apos;aperçu reste consultable en ligne, étiqueté « Aperçu
              basse résolution », mais rien ne sort de la plateforme.
              <br />
              <br />
              Deux choses à relever. Les trois plans sont affichés en{" "}
              <strong className="text-slate-100">dollars</strong> — 14,50 $,
              39,50 $ et 94,50 $ par mois — alors que l&apos;interface est en
              français et que l&apos;éditeur est une société française. Et ces
              montants supposent le paiement annuel : l&apos;onglet
              « Annuellement, économisez 50 % » est sélectionné par défaut, les
              totaux annoncés étant 174 $, 474 $ et 1 134 $ par an.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-comptes-sociaux.png"
          alt="Écran de connexion des comptes sociaux de Klap, cinq plateformes proposées"
          caption={
            <>
              L&apos;écran de connexion des comptes propose cinq plateformes :
              Facebook, LinkedIn, Instagram, YouTube, TikTok. Le site de Klap
              annonce une publication « sur 7 plateformes en un clic ».
              <br />
              <br />
              <strong className="text-slate-100">Observé</strong>, nous
              n&apos;avons connecté aucun compte.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-11-23/klap-facturation.png"
          alt="Page Facturation de Klap en fin de session, aucun plan actif"
          caption={
            <>
              La page Facturation en fin de session : aucun plan actif, « Pas
              de factures ». Tout ce qui précède a été obtenu sans payer.
              <br />
              <br />
              <strong className="text-slate-100">Testé</strong>.
            </>
          }
        />

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          Ce qu&apos;il faut retenir, en clair
        </h3>
        <p>
          Sur notre vidéo française de 1 min 17, Klap a transcrit le français
          sans faute sur les passages contrôlés, y compris les deux où CapCut
          s&apos;était trompé. Les sous-titres sont lisibles, bien placés, et le
          recadrage vertical cadre correctement le visage, au prix de
          l&apos;incrustation du bas d&apos;image. Le traitement a pris une
          minute, et l&apos;éditeur complet, y compris l&apos;édition par le
          texte, est accessible sans payer.
        </p>
        <p>
          Mais{" "}
          <strong className="text-slate-100">
            aucun fichier ne sort sans abonnement
          </strong>
          . Comme Submagic et CapCut, Klap laisse voir le résultat et le refuse
          à l&apos;export. Sur notre{" "}
          <Link href="/banc-essai" className="text-indigo-400 hover:underline">
            banc d&apos;essai
          </Link>
          , seul OpusClip a livré un fichier sous-titré sur un plan gratuit.
        </p>
        <p>
          Dernière réserve, de confort : l&apos;interface française comporte
          plusieurs traductions approximatives, « Supprimer un fichier » pour
          déposer, « Reformuler » pour recadrer, des aperçus de styles
          illisibles. Rien n&apos;empêche d&apos;utiliser l&apos;outil, mais sur
          un produit édité en France, ça surprend.
        </p>

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          Ce que cette visite ne prouve pas
        </h3>
        <p>
          Une seule vidéo, 1 min 17, un plan fixe, en français, un seul jour,
          les réglages par défaut. Nous n&apos;avons mesuré aucun taux
          d&apos;erreur : les passages cités sont des exemples vérifiables à
          l&apos;image, pas une statistique.
        </p>
        <p>
          La détection des meilleurs moments, qui est l&apos;argument principal
          de Klap, n&apos;a pas pu être évaluée : sur une source de
          soixante-dix-sept secondes, l&apos;outil a lui-même estimé
          qu&apos;il n&apos;y avait pas matière à plusieurs extraits. Son
          comportement sur une vidéo longue reste à vérifier.
        </p>
        <p>
          Le calendrier de publication, les analyses de performance, les
          modèles de sous-titres et les trois modes de génération ont été vus à
          l&apos;écran, jamais utilisés, donc jamais évalués.
        </p>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-slate-100">Conditions du test.</strong>{" "}
            Klap nous a contactés et nous a proposé gratuitement 30 jours
            d&apos;accès Pro, sans obligation de publication ni droit de regard
            sur notre verdict. Nous n&apos;avons pas activé cet accès : le test
            présenté sur cette page a été réalisé exclusivement avec le plan
            gratuit. Nos liens vers Klap sont affiliés : ils sont signalés
            sous chaque bouton et portent l&apos;attribut{" "}
            <code>rel=&quot;sponsored&quot;</code>. Ils n&apos;entrent pas dans
            la note.
          </p>
        </div>
      </>
    ),
  },
  porQui: [
    "Tu recycles des podcasts, interviews ou cours en shorts verticaux",
    "Tu veux des sous-titres français lisibles sur les passages contrôlés, à vérifier avant publication",
    "Tu préfères monter en supprimant du texte plutôt qu'en coupant une timeline",
    "Tu veux programmer tes publications depuis le même outil",
    "Tu acceptes de payer dès le départ pour récupérer tes fichiers",
    "Tu as besoin d'une API pour automatiser (observée, non testée)",
  ],
  pasPourQui: [
    <>
      Tu veux un plan gratuit qui livre vraiment un fichier (→{" "}
      <Link href="/outils/opusclip" className="text-emerald-400 hover:underline">
        OpusClip
      </Link>
      )
    </>,
    <>
      Tu veux surtout des sous-titres très stylés sur des vidéos déjà courtes
      (→{" "}
      <Link href="/outils/submagic" className="text-amber-400 hover:underline">
        Submagic
      </Link>
      )
    </>,
    <>
      Tu cherches un logiciel de montage complet et gratuit (→{" "}
      <Link href="/outils/capcut" className="text-sky-400 hover:underline">
        CapCut
      </Link>
      )
    </>,
    "Tu veux payer en euros plutôt qu'en dollars",
    "Tu tiens à une interface française sans approximation de traduction",
    "Tes vidéos contiennent des incrustations en bas d'image à préserver",
  ],
  scoring: SCORING_BY_SLUG["klap"],
  fonctionnalites: [
    {
      titre: "Découpe automatique en clips verticaux",
      description:
        "Tu envoies un fichier ou un lien, l'outil repère les passages et produit des clips 9:16 sous-titrés. La source peut aller jusqu'à 3 heures selon l'éditeur. Testé sur une source de 1 min 17, qui n'a donné qu'un seul clip.",
    },
    {
      titre: "Score de viralité et analyse",
      description:
        "Chaque clip reçoit une note sur 100 et une analyse rédigée en français : points forts, freins à la viralité, suggestions concrètes. Testé.",
    },
    {
      titre: "Sous-titres automatiques",
      description:
        "Transcription et incrustation automatiques, mot prononcé surligné, neuf styles proposés. Le français figure dans la liste des langues source. Testé avec le style par défaut.",
    },
    {
      titre: "Recadrage 9:16 avec suivi du visage",
      description:
        "La vidéo horizontale est recadrée en vertical et le sujet reste centré. Testé : le suivi fonctionne, mais l'incrustation située en bas de l'image est tronquée.",
    },
    {
      titre: "Édition par le texte",
      description:
        "La transcription s'affiche en segments cliquables : supprimer une phrase coupe le montage correspondant. Accessible dès l'essai gratuit. Observé, aucune coupe appliquée.",
    },
    {
      titre: "Calendrier et analyses de performance",
      description:
        "Programmation des publications et suivi des résultats sur Facebook, LinkedIn, Instagram, YouTube et TikTok. L'éditeur annonce 7 plateformes, l'écran de connexion en propose 5. Observé, aucun compte connecté.",
    },
  ],
  plans: [
    {
      nom: "Essai gratuit",
      prix: "0 $",
      prixSub: "1 vidéo · sans carte bancaire",
      cible: "Voir le rendu avant de payer",
      features: [
        "Une seule vidéo traitée",
        "Aperçu en ligne, étiqueté « Aperçu basse résolution »",
        "Éditeur complet accessible",
        "Aucun téléchargement possible : l'export demande un plan payant",
      ],
    },
    {
      nom: "De base",
      prix: "14,50 $/mois",
      prixSub: "Soit 174 $ facturés chaque année",
      cible: "Créateurs individuels",
      features: ["100 clips par mois", "Téléchargement sans marque Klap"],
    },
    {
      nom: "Pro",
      prix: "39,50 $/mois",
      prixSub: "Soit 474 $ facturés chaque année",
      cible: "Créateurs réguliers et professionnels",
      features: ["300 clips par mois", "Téléchargement sans marque Klap"],
    },
    {
      nom: "Pro+",
      prix: "94,50 $/mois",
      prixSub: "Soit 1 134 $ facturés chaque année",
      cible: "Équipes et gros volumes",
      features: ["1 000 clips par mois", "Téléchargement sans marque Klap"],
    },
    {
      nom: "Sans engagement",
      prix: "29 $ à 189 $/mois",
      prixSub: "Tarifs mensuels annoncés dans la FAQ de l'éditeur",
      cible: "Paiement au mois",
      features: [
        "De base 29 $, Pro 79 $, Pro+ 189 $ par mois",
        "Les prix affichés par défaut supposent l'engagement annuel",
      ],
    },
  ],
  alternatives: [
    {
      slug: "opusclip",
      comment:
        "Le seul de notre banc d'essai à livrer un fichier sous-titré sur un plan gratuit. À choisir si tu veux tester sérieusement sans payer.",
    },
    {
      slug: "submagic",
      comment:
        "Le spécialiste des sous-titres stylés en français. Plus fort sur le rendu visuel, moins orienté découpe de vidéos longues.",
    },
    {
      slug: "gpt-video",
      comment:
        "Même approche de clips notés et expliqués, avec un export sans logo dès l'essai, mais pas de plan gratuit durable non plus.",
    },
  ],
  faq: [
    {
      question: "Klap propose-t-il un plan gratuit ?",
      answer:
        "Non, pas de plan gratuit durable : seulement un essai sur une seule vidéo, sans carte bancaire. Lors de notre test du 23/11/2026, il permettait de générer un clip, de le prévisualiser et d'ouvrir l'éditeur, mais pas de télécharger le fichier : l'export affiche un mur de paiement.",
    },
    {
      question: "Les sous-titres français sont-ils fiables ?",
      answer:
        "Sur notre test du 23/11/2026, la transcription était correcte sur tous les passages contrôlés, y compris deux phrases que CapCut avait mal transcrites sur le même fichier. Nous n'avons pas calculé de taux d'erreur : ce sont des exemples vérifiables, pas une mesure.",
    },
    {
      question: "Klap est-il un outil français ?",
      answer:
        "Le pied de page du site indique ZIGG SAS comme éditeur, une forme juridique française, fondée par Théo Champion et Victor Timsit. L'interface est en français par défaut, mais les tarifs sont affichés et facturés en dollars.",
    },
    {
      question: "Klap ou OpusClip ?",
      answer:
        "OpusClip si tu veux tester sans payer : c'est le seul de notre banc d'essai à avoir livré un fichier sous-titré sur un plan gratuit. Klap si tu paies de toute façon et que tu veux l'édition par le texte, le score de viralité et la programmation des publications dans le même outil.",
    },
    {
      question: "Que vaut le recadrage vertical ?",
      answer:
        "Sur notre test, le suivi du visage fonctionne et le sujet reste centré. En revanche l'incrustation en bas de l'image source a été tronquée par le recadrage. Si tes vidéos affichent des noms ou des mentions en bas d'écran, vérifie le rendu avant de publier.",
    },
  ],
  ctaFinal: {
    headline: "Passer à l'action",
    sub: "Klap se teste sur une vidéo sans carte bancaire. Garde en tête que le téléchargement du fichier demande un abonnement.",
    buttonText: "Voir Klap",
  },
};

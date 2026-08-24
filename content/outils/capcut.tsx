import Link from "next/link";
import type { ReactNode } from "react";
import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { SCORING_BY_SLUG } from "@/lib/scoring";

/**
 * Figure de preuve pour la visite guidée du test de première main.
 * Local à cette fiche : aucun composant partagé n'est modifié.
 */
function FigureTest({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      <figcaption className="text-sm text-slate-400 leading-relaxed p-5">
        {caption}
      </figcaption>
    </figure>
  );
}

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
    lastCheck: "24/08/2026",
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
    titre: "CapCut Desktop : notre avis et notre test du 24 août 2026",
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

        <h3 className="text-2xl font-bold text-slate-100 pt-10">
          Ce qu&apos;on a vu en testant CapCut, capture par capture
        </h3>
        <p>
          Le 24 août 2026, nous avons ouvert CapCut Desktop en français, sans
          nous connecter à un compte payant, et nous y avons fait passer une
          vraie vidéo. La source est un entretien de 1 min 17 en français, filmé
          en plan fixe, publié sous licence libre :{" "}
          <a
            href="https://tubedu.org/videos/watch/9aba92da-0f91-44cf-9904-31a66a722413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            « Sciences ensemble »
          </a>
          , interview de Laure Turcati, MOOC Science Ouverte (Alliance Sorbonne
          Université), 3 mars 2022, TubEdu, licence CC BY 4.0. C&apos;est
          exactement le même fichier que celui utilisé pour nos tests de
          Submagic et d&apos;OpusClip : tu peux le télécharger et refaire la
          manipulation toi-même.
        </p>
        <p>
          Si tu débutes, lis d&apos;abord ces trois repères, ils reviennent dans
          toutes les légendes :
        </p>
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
          <li>
            <strong className="text-slate-100">Diamant violet</strong> — le
            petit losange mauve que CapCut affiche sur une fonction ou une
            ressource. Il signifie « réservé à l&apos;abonnement Pro ».
          </li>
        </ul>
        <p className="text-slate-400">
          Une précision qui compte :{" "}
          <strong className="text-slate-300">
            l&apos;absence de diamant ne prouve pas qu&apos;une fonction est
            gratuite
          </strong>
          . Elle prouve seulement qu&apos;aucun marquage Pro n&apos;apparaît sur
          cette capture, à cette date. Les offres changent.
        </p>

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          1. C&apos;est quoi, CapCut, quand on l&apos;ouvre
        </h4>
        <FigureTest
          src="/tests/2026-08-24/capcut-accueil.png"
          alt="Écran d'accueil de CapCut Desktop avec le bouton Connexion et les outils IA"
          caption={
            <>
              L&apos;écran d&apos;accueil. CapCut n&apos;est pas un simple
              générateur de sous-titres : c&apos;est un logiciel de montage
              complet, comparable à ce qu&apos;on installe sur un ordinateur
              pour assembler des plans, ajouter du texte et de la musique. On y
              trouve aussi une série d&apos;outils IA — transformer une vidéo
              longue en vidéos courtes, générer une image, traduire une vidéo,
              améliorer la qualité.{" "}
              <strong className="text-slate-200">
                Observé, aucun de ces outils IA n&apos;a été utilisé.
              </strong>{" "}
              En haut à gauche, le bouton « Connexion » confirme que nous
              n&apos;étions connectés à aucun compte payant.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-importer.png"
          alt="Panneau Multimédia de CapCut, zone d'import de fichiers"
          caption={
            <>
              La première étape de tout montage : faire entrer sa vidéo dans le
              logiciel. On glisse le fichier dans cette zone, ou on enregistre
              directement depuis sa webcam ou son écran.{" "}
              <strong className="text-slate-200">
                Testé : l&apos;import classique du fichier a fonctionné sans
                payer et sans compte.
              </strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-timeline.png"
          alt="Vidéo importée dans CapCut, visible dans le chutier et posée dans la timeline"
          caption={
            <>
              La vidéo est entrée dans le logiciel. À gauche, la vignette dans
              le « chutier », la réserve où atterrissent les fichiers importés.
              En bas, la bande bleue est la{" "}
              <strong className="text-slate-200">timeline</strong> : la ligne du
              temps sur laquelle on pose les plans dans l&apos;ordre, et
              l&apos;endroit où se fait tout le montage. À droite, la mise à
              l&apos;échelle affiche 100 % :{" "}
              <strong className="text-slate-200">
                Testé — la vidéo est posée telle quelle, sans agrandissement,
                sans recadrage, sans effet.
              </strong>{" "}
              Jusqu&apos;ici, rien n&apos;a été demandé ni payé.
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          2. Ce qu&apos;on peut ajouter à une vidéo
        </h4>
        <p className="text-slate-400">
          Les neuf captures qui suivent montrent l&apos;étendue des
          bibliothèques de CapCut. Nous n&apos;avons rien appliqué de tout
          cela : elles sont là pour te montrer ce que contient le logiciel, pas
          pour en juger la qualité. Repère le diamant violet sur les vignettes,
          il revient partout.
        </p>
        <FigureTest
          src="/tests/2026-08-24/capcut-musique.png"
          alt="Bibliothèque musicale de CapCut classée par ambiance"
          caption={
            <>
              Une bibliothèque de musiques libres de droits, rangée par ambiance
              : été, vlog, fitness, voyage, anniversaire, romantique, triste.
              Concrètement, ça sert à poser un fond sonore sans aller chercher
              de la musique ailleurs ni risquer une réclamation de droits
              d&apos;auteur.{" "}
              <strong className="text-slate-200">
                Observé, aucune musique ajoutée.
              </strong>{" "}
              Certains morceaux portent un diamant, d&apos;autres non.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-texte.png"
          alt="Menu Texte de CapCut avec les différentes options d'ajout de texte"
          caption={
            <>
              Le menu Texte. Il sert à écrire par-dessus l&apos;image : un
              titre, une mention, un nom. Il donne aussi accès aux légendes
              automatiques — la transcription de la parole en sous-titres — et
              aux sous-titres importés depuis un fichier.{" "}
              <strong className="text-slate-200">
                Observé, aucun texte écrit à la main pendant le test.
              </strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-effets-texte.png"
          alt="Galerie d'effets de texte de CapCut"
          caption={
            <>
              Des habillages tout faits pour le texte : contours, ombres,
              néons, textures. Ça évite d&apos;avoir à régler soi-même la
              typographie pour obtenir un rendu qui accroche l&apos;œil.{" "}
              <strong className="text-slate-200">Observé.</strong> La galerie
              mélange des ressources avec diamant et d&apos;autres sans.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-modeles-texte.png"
          alt="Modèles de texte prêts à l'emploi dans CapCut"
          caption={
            <>
              Des blocs de texte animés prêts à poser : bandeau de
              localisation, « Breaking news », fin de chapitre, appel à
              l&apos;action. Utile quand on veut le look d&apos;une vidéo pro
              sans savoir animer du texte.{" "}
              <strong className="text-slate-200">Observé.</strong> Diamants
              présents sur une partie des modèles.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-stickers.png"
          alt="Bibliothèque de stickers animés de CapCut"
          caption={
            <>
              Des images animées à coller sur la vidéo : compte à rebours,
              flammes, cœurs, boutons « Like » et « Subscribe ». C&apos;est le
              vocabulaire visuel des vidéos courtes sur TikTok et YouTube
              Shorts.{" "}
              <strong className="text-slate-200">Observé.</strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-effets-video.png"
          alt="Galerie d'effets vidéo de CapCut"
          caption={
            <>
              Des effets appliqués à l&apos;image elle-même : particules,
              lumières, distorsions, rendus 3D. À la différence des stickers,
              ils transforment le plan au lieu de se poser dessus.{" "}
              <strong className="text-slate-200">Observé.</strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-transitions.png"
          alt="Galerie de transitions de CapCut"
          caption={
            <>
              Les transitions gèrent le passage d&apos;un plan au suivant :
              fondu, zoom, balayage, flash. Elles n&apos;ont d&apos;intérêt que
              si ta vidéo contient plusieurs séquences — notre test n&apos;en
              avait qu&apos;une.{" "}
              <strong className="text-slate-200">Observé.</strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-modeles-legendes.png"
          alt="Galerie de modèles de légendes de CapCut"
          caption={
            <>
              Les styles de sous-titres : couleurs, contours, mise en évidence
              du mot prononcé, versions sur plusieurs lignes. C&apos;est ce qui
              donne aux sous-titres l&apos;aspect « réseaux sociaux » plutôt
              que le blanc neutre par défaut.{" "}
              <strong className="text-slate-200">
                Observé — nous avons délibérément gardé le style par défaut
              </strong>{" "}
              pour juger ce que l&apos;outil produit tout seul. Plusieurs
              modèles portent un diamant.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-filtres.png"
          alt="Galerie de filtres colorimétriques de CapCut"
          caption={
            <>
              Les filtres modifient l&apos;ambiance des couleurs, comme sur une
              photo : rétro, noir et blanc, tons froids, tons chauds.{" "}
              <strong className="text-slate-200">
                Observé, aucun filtre appliqué.
              </strong>
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          3. Les réglages disponibles sur un clip
        </h4>
        <FigureTest
          src="/tests/2026-08-24/capcut-son.png"
          alt="Panneau Son de CapCut, réglages de base et fonctions Pro marquées d'un diamant"
          caption={
            <>
              C&apos;est la capture la plus parlante sur la frontière entre
              gratuit et payant.{" "}
              <strong className="text-slate-200">
                Sans diamant : le volume et les fondus
              </strong>{" "}
              — monter ou baisser le son, le faire apparaître ou disparaître en
              douceur.{" "}
              <strong className="text-slate-200">
                Avec diamant, donc Pro : normaliser le niveau sonore, améliorer
                la voix, traduire la vidéo, réduire le bruit, séparer les
                éléments audio.
              </strong>{" "}
              Dans les réglages de son et de couleur observés, les curseurs
              manuels visibles ne portent pas de diamant, tandis que plusieurs
              automatismes portent la marque Pro.{" "}
              <strong className="text-slate-200">
                Cette distinction n&apos;est pas universelle : d&apos;autres
                ressources manuelles peuvent également être payantes.
              </strong>{" "}
              <strong className="text-slate-200">
                Observé, rien n&apos;a été activé.
              </strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-vitesse.png"
          alt="Panneau Vitesse de CapCut affichant 1,00x et une durée de 77,4 secondes"
          caption={
            <>
              Accélérer ou ralentir la vidéo. L&apos;écran confirme au passage
              deux données de notre test : vitesse laissée à{" "}
              <strong className="text-slate-200">1,00x</strong>, donc aucune
              modification, et durée de{" "}
              <strong className="text-slate-200">77,4 secondes</strong>. Les
              réglages avancés — courbe de vitesse et ralenti fluide — portent
              un diamant.{" "}
              <strong className="text-slate-200">Observé.</strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-animations.png"
          alt="Panneau Animation de CapCut avec Aucun sélectionné"
          caption={
            <>
              Les animations font entrer ou sortir un plan avec un mouvement
              plutôt qu&apos;une apparition sèche. La vignette « Aucun » est
              sélectionnée à gauche :{" "}
              <strong className="text-slate-200">
                c&apos;est bien l&apos;état par défaut que nous avons conservé.
              </strong>{" "}
              La majorité des animations proposées portent un diamant.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-ajustements.png"
          alt="Panneau Ajustement de CapCut, réglages colorimétriques manuels et options Pro"
          caption={
            <>
              Le panneau qui sert à retoucher les couleurs et la lumière de
              l&apos;image — l&apos;équivalent des réglages d&apos;une photo.
              Même partage que pour le son :{" "}
              <strong className="text-slate-200">
                les trois automatismes portent un diamant
              </strong>{" "}
              — ajustement automatique, ajustement des couleurs, correction des
              couleurs — tandis que les curseurs manuels de température, teinte,
              saturation et clarté, ainsi que les LUT et la protection des tons
              de peau, n&apos;en portent pas. Même répartition que dans le
              panneau Son, avec la même réserve :{" "}
              <strong className="text-slate-200">
                cette distinction n&apos;est pas universelle, d&apos;autres
                ressources manuelles peuvent également être payantes
              </strong>{" "}
              — plusieurs effets de texte, stickers et transitions vus plus haut
              portent d&apos;ailleurs un diamant.{" "}
              <strong className="text-slate-200">
                Observé, rien n&apos;a été modifié.
              </strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-stylisation-ia.png"
          alt="Panneau Stylisation par l'IA de CapCut avec des styles génératifs et leur coût"
          caption={
            <>
              Ici, l&apos;IA générative : on décrit ce qu&apos;on veut, ou on
              choisit un style — surréaliste, cyberfutur, poupée, zoom 3D — et
              CapCut retransforme l&apos;image. Plusieurs vignettes affichent un
              coût en crédits, du type « 45 ».{" "}
              <strong className="text-slate-200">
                Observé, aucun effet généré
              </strong>{" "}
              : le vignette « Aucun » reste sélectionnée à gauche. Ça n&apos;a
              rien à voir avec du sous-titrage, mais ça montre jusqu&apos;où va
              le logiciel.
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          4. Le vrai test : les sous-titres français
        </h4>
        <FigureTest
          src="/tests/2026-08-24/capcut-paroles-automatiques.png"
          alt="Menu Paroles automatiques de CapCut, liste de langues sans le français"
          caption={
            <>
              Attention au piège, et c&apos;est important si tu compares des
              outils.{" "}
              <strong className="text-slate-200">
                « Paroles automatiques » n&apos;est pas la fonction de
                sous-titrage
              </strong>{" "}
              : elle sert à transcrire les paroles d&apos;une chanson. La liste
              de langues visible propose anglais, chinois, hindi, indonésien,
              japonais, coréen — et{" "}
              <strong className="text-slate-200">pas le français</strong>. La
              génération porte un diamant.{" "}
              <strong className="text-slate-200">Observé.</strong> Si tu
              t&apos;arrêtais à cet écran, tu conclurais à tort que CapCut ne
              transcrit pas le français. C&apos;est faux, et la capture
              suivante le montre.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-legendes-francais.png"
          alt="Menu Légendes automatiques de CapCut avec le français en langue source"
          caption={
            <>
              Voici la bonne fonction : « Légendes automatiques ». Elle écoute
              la parole et écrit les sous-titres toute seule. La langue source
              propose bien le{" "}
              <strong className="text-slate-200">français</strong>. Les
              « légendes bilingues », qui afficheraient deux langues en même
              temps, portent un diamant : nous les avons laissées sur « Aucun ».{" "}
              <strong className="text-slate-200">
                Testé : génération simple en français, réglages par défaut.
              </strong>{" "}
              À noter, un badge Pro est accolé au bouton « Générer », et la
              génération a pourtant abouti sans paiement — le blocage
              n&apos;est intervenu qu&apos;à l&apos;export.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-legendes-generees.png"
          alt="Timeline CapCut avec la piste de sous-titres générée au-dessus de la vidéo"
          caption={
            <>
              Le résultat. La bande rouge en haut est la piste de sous-titres :
              chaque petit segment correspond à une phrase, calée sur le moment
              où elle est prononcée. En dessous, la bande verte est la vidéo.{" "}
              <strong className="text-slate-200">
                Testé — le traitement a pris moins d&apos;une minute
              </strong>
              , contre environ 2 min 30 chez Submagic et OpusClip sur le même
              fichier. Aucun style, aucune traduction et aucune correction
              manuelle n&apos;ont été appliqués.
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          5. Ce que ça donne à l&apos;écran
        </h4>
        <FigureTest
          src="/tests/2026-08-24/capcut-rendu-chevauchement.png"
          alt="Aperçu CapCut où le sous-titre chevauche le bandeau nominatif de la vidéo source"
          caption={
            <>
              Deux bonnes nouvelles et un vrai défaut. La vidéo reste au format
              horizontal 16:9 d&apos;origine, sans recadrage automatique, et le
              bandeau au nom de l&apos;intervenante reste visible — ce qui
              n&apos;est pas le cas quand un outil recadre en vertical. En
              revanche,{" "}
              <strong className="text-slate-200">
                le sous-titre blanc par défaut vient se poser par-dessus ce
                bandeau
              </strong>{" "}
              et devient difficile à lire, et le mot « supérieur » est coupé en
              deux entre les lignes.{" "}
              <strong className="text-slate-200">Testé.</strong>
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-rendu-erreur-quarantaine.png"
          alt="Sous-titre CapCut affichant 1 quarantaine de projets 1 p'tit peu plus"
          caption={
            <>
              Une erreur de transcription visible à l&apos;œil nu. La personne
              dit « une quarantaine de projets, un p&apos;tit peu plus », et le
              sous-titre écrit{" "}
              <strong className="text-slate-200">
                « 1 quarantaine de projets 1 p&apos;tit peu plus »
              </strong>{" "}
              : le moteur a transformé les articles « une » et « un » en
              chiffres.{" "}
              <strong className="text-slate-200">Testé.</strong> C&apos;est un
              exemple ponctuel que tu peux vérifier sur l&apos;image, pas un
              taux d&apos;erreur calculé.
            </>
          }
        />
        <FigureTest
          src="/tests/2026-08-24/capcut-rendu-erreur-de-des.png"
          alt="Sous-titre CapCut affichant de des projets autour de la qualité de l'air"
          caption={
            <>
              Deuxième erreur repérable :{" "}
              <strong className="text-slate-200">
                « de des projets autour de la qualité de l&apos;air »
              </strong>
              . Le doublon « de des » n&apos;existe pas en français.{" "}
              <strong className="text-slate-200">Testé.</strong> Là encore, un
              exemple isolé et vérifiable, pas une mesure globale.
            </>
          }
        />

        <h4 className="text-xl font-bold text-slate-100 pt-6">
          6. Le moment où ça bloque
        </h4>
        <FigureTest
          src="/tests/2026-08-24/capcut-export-bloque.png"
          alt="Fenêtre CapCut indiquant que les légendes automatiques sont des fonctionnalités Pro"
          caption={
            <>
              C&apos;est le point d&apos;arrêt du test. Au moment
              d&apos;enregistrer la vidéo sur l&apos;ordinateur, CapCut affiche
              « Tu es en train d&apos;utiliser les fonctionnalités Pro
              suivantes » et liste les{" "}
              <strong className="text-slate-200">légendes automatiques</strong>.
              Sans abonnement,{" "}
              <strong className="text-slate-200">
                nous n&apos;avons récupéré aucun fichier contenant ces
                sous-titres
              </strong>
              . La fenêtre proposait bien un essai Pro gratuit :{" "}
              <strong className="text-slate-200">
                nous ne l&apos;avons volontairement pas activé
              </strong>
              , pour que la comparaison porte sur les plans gratuits et rien
              d&apos;autre.{" "}
              <strong className="text-slate-200">Testé.</strong>
            </>
          }
        />

        <div className="bg-slate-900 border border-sky-500/30 rounded-2xl p-6 my-8">
          <h4 className="font-bold text-sky-400 mb-3">
            Ce qu&apos;il faut retenir, en clair
          </h4>
          <p className="mb-3">
            Importer une vidéo, la placer dans le montage et générer des
            sous-titres français a fonctionné sans payer, et vite : moins
            d&apos;une minute de traitement. Mais{" "}
            <strong className="text-slate-100">
              au moment d&apos;enregistrer le résultat, les sous-titres
              automatiques sont classés Pro
            </strong>{" "}
            et l&apos;export nous a été refusé. Sur cet essai, le sous-titrage
            gratuit de CapCut permet de voir le rendu, pas de le publier.
          </p>
          <p className="mb-3">
            <strong className="text-slate-100">
              Et surtout : ça ne veut pas dire que CapCut est payant.
            </strong>{" "}
            L&apos;export nous a été refusé{" "}
            <strong className="text-slate-100">
              parce que notre montage contenait une fonction Pro
            </strong>{" "}
            — l&apos;écran de blocage la nomme lui-même, « légendes
            automatiques », et ne liste rien d&apos;autre. Ce n&apos;est pas
            l&apos;export qui est payant, c&apos;est cette fonction-là.
          </p>
          <p className="mb-0 text-slate-400">
            <strong className="text-slate-300">
              Précision issue de notre usage de CapCut en dehors de ce test
            </strong>{" "}
            : un montage que l&apos;on assemble soi-même, sans activer la
            moindre option marquée d&apos;un diamant, s&apos;exporte et se
            télécharge gratuitement. Nous le signalons parce que c&apos;est
            l&apos;information utile pour un débutant, mais nous ne
            l&apos;habillons pas en résultat de test :{" "}
            <strong className="text-slate-300">
              cette manipulation-là n&apos;a pas été refaite ni capturée le 24
              août
            </strong>
            , et elle ne figure donc pas dans le tableau comparatif.
          </p>
        </div>

        <p className="text-slate-400">
          <strong className="text-slate-300">
            Ce que cette visite ne prouve pas.
          </strong>{" "}
          Une seule vidéo, 1 min 17, un plan fixe, en français, un seul jour, les
          réglages par défaut. Nous n&apos;avons mesuré aucun taux
          d&apos;erreur : les deux fautes montrées sont des exemples
          vérifiables, pas une statistique. Les effets, transitions, musiques,
          filtres, outils audio et fonctions IA ont été montrés, jamais
          utilisés, donc jamais évalués. Et ce test ne modifie aucune note de la
          grille ci-dessus, qui repose sur notre analyse documentaire.
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
  scoring: SCORING_BY_SLUG.capcut,
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

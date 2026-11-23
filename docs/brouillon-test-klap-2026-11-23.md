# Brouillon — Test Klap du 23 novembre 2026

**Statut : brouillon. Rien n'est publié, rien n'est commité, rien n'est poussé.**

Le test suit le protocole Filtrio : il porte exclusivement sur l'offre
gratuite, comme pour Submagic, OpusClip et CapCut.

Les 19 captures sont préparées dans `public/tests/2026-11-23/`.

---

## Données de fiche

**Catégorie :** Shorts & Clips

**Tagline :** Le clipper IA français qui transforme une vidéo longue en shorts
avec de bons sous-titres et des intégrations poussées, mais un plan gratuit
très limité.

**Note provisoire : 8,0 / 10**

| Critère | Poids | Note |
|---|---|---|
| Qualité en français | 20 | 8,8 |
| Rapport qualité/prix | 20 | 6,8 |
| Profondeur des fonctionnalités IA | 20 | 8,8 |
| Interface et prise en main | 15 | 8,2 |
| Support & confort FR | 15 | 6,5 |
| Intégrations | 10 | 9,2 |

Vérifié : la moyenne pondérée de ces six notes donne 8,005, soit 8,0. Les
libellés et les poids correspondent exactement à ceux de la grille publiée
sur `/methode`.

**Affiliation :** les liens sortants vers Klap seront rendus par
`TrackedAffiliateLink`, qui pose `rel="sponsored noopener noreferrer"`, avec
la mention d'affiliation affichée sous chaque bouton, comme pour les autres
programmes actifs.

---

## Titre de section

**Klap : notre avis et notre test du 23 novembre 2026**

---

## Introduction

Klap transforme une vidéo longue en clips verticaux sous-titrés, note chaque
clip et propose de les programmer sur les réseaux. L'éditeur est une société
française, ZIGG SAS, dirigée par deux fondateurs qui signent @theo et @victor
en pied de page.

Le 23 novembre 2026, nous avons créé un compte sans carte bancaire et nous y
avons fait passer une vraie vidéo. La source est un entretien de 1 min 17 en
français, filmé en plan fixe, publié sous licence libre : « Sciences
ensemble », interview de Laure Turcati, MOOC Science Ouverte (Alliance
Sorbonne Université), 3 mars 2022, TubEdu, licence CC BY 4.0. C'est
exactement le même fichier que celui utilisé pour nos tests de Submagic,
d'OpusClip et de CapCut : tu peux le télécharger et refaire la manipulation
toi-même.

Si tu débutes, deux repères reviennent dans toutes les légendes :

- **Testé** — nous avons réellement fait l'action pendant la session.
- **Observé** — la fonction existe à l'écran, mais nous ne l'avons pas
  utilisée. Nous ne portons donc aucun jugement dessus.

---

## 1. Le premier écran

**Image : `klap-accueil-vide.png`**

> L'écran d'accueil après inscription. Trois onglets seulement : Vidéos,
> Calendrier, Analytique. L'interface est en français par défaut, sans rien
> avoir à régler, ce qui n'était pas acquis : la page tarifaire de Klap est
> en anglais et en dollars.
>
> Un détail se remarque sur l'action principale de l'écran. Le champ
> d'import affiche « **Supprimer un fichier** ou coller un lien depuis
> Loom ». L'original anglais dit *Drop a file*, c'est-à-dire déposer un
> fichier. La traduction a compris « supprimer ».
>
> **Testé** : la création de compte et l'arrivée sur cet écran, sans carte
> bancaire.

---

## 2. Les réglages avant de lancer

**Image : `klap-modal-generation.png`**

> La fenêtre de génération, une fois le fichier déposé. La vignette confirme
> la durée de la source, 1:17, et le bouton annonce « Générer ~7
> courts-métrages ».
>
> Au passage, « courts-métrages » traduit *shorts*, qui désigne les vidéos
> verticales courtes et non le cinéma. Le titre de la même fenêtre dit
> pourtant « Créer des shorts ».
>
> **Testé** : le dépôt du fichier et le lancement avec les réglages par
> défaut.

**Image : `klap-styles-legendes.png`**

> La galerie de styles de sous-titres, neuf vignettes d'aperçu. Toutes
> affichent le même texte : « LE VITE BRUN / FOX SAUTS TERMINÉ ». C'est la
> phrase de test anglaise *the quick brown fox jumps over the lazy dog*
> passée à la traduction automatique. En français, l'aperçu ne permet donc
> plus de juger la lisibilité d'un style.
>
> **Observé**, nous avons gardé le style proposé par défaut.

**Image : `klap-langues.png`**

> La liste des langues source. Le français y figure, en huitième position.
> L'information mérite d'être notée : le site de Klap annonce « 99 langues »
> sans jamais nommer le français.
>
> Le réglage par défaut est « Auto ». Nous l'avons laissé tel quel, puisque
> c'est ce qu'obtient un utilisateur qui ne touche à rien.
>
> **Observé**.

**Image : `klap-modes.png`**

> Le menu déroulant du titre révèle trois modes : Courts métrages, Légendes,
> et **Reformuler**.
>
> Ce dernier mérite une note d'usage. En anglais, la fonction s'appelle
> *Reframe*, c'est-à-dire recadrer une vidéo horizontale en vertical. En
> français, « reformuler » veut dire redire autrement. Un utilisateur qui
> cherche le recadrage risque de ne pas le trouver sous ce nom.
>
> **Observé**, seul le mode Courts métrages a été utilisé.

**Image : `klap-mes-modeles.png`**

> L'onglet « Mes modèles », vide sur un compte neuf. Il sert à enregistrer sa
> propre configuration de sous-titres pour la réutiliser.
>
> **Observé**.

**Image : `klap-publication-auto.png`**

> La publication automatique, désactivée par défaut. Rien n'est publié sans
> connecter un compte.
>
> **Observé**.

---

## 3. Le traitement

**Image : `klap-traitement.png`**

> L'écran d'attente. Klap annonce « Il reste 1 minute » et propose de
> prévenir par mail. Le traitement a effectivement pris environ une minute.
>
> Pour situer, sur le même fichier : GPT-Video 17 secondes, CapCut moins
> d'une minute, Klap une minute, Submagic et OpusClip environ 2 min 30.
>
> Un questionnaire s'intercale pendant l'attente : « Qu'est-ce qui vous
> décrit le mieux ? ». Nous ne l'avons pas rempli.
>
> **Testé**.

---

## 4. Le résultat sur une source de 1 min 17

**Image : `klap-resultat-score.png`**

> Sur cette source de soixante-dix-sept secondes, Klap a produit **un seul
> court**, d'une durée de 1:17, soit la vidéo entière. Il l'explique à
> l'écran : « Votre vidéo ne contient pas assez de dialogues pour générer
> plusieurs courts. »
>
> Le bouton de lancement annonçait « ~7 courts-métrages ». C'est une
> estimation affichée avant analyse, et sur une source aussi courte elle
> n'avait pas de sens. Nous n'en tirons aucune conclusion sur le
> comportement de l'outil face à une vidéo longue, que nous n'avons pas
> testée.
>
> Klap génère en revanche un titre en français correct, « Science Ensemble —
> comment la Sorbonne fédère 40 projets de science participative… », et un
> score de viralité de **65/100** accompagné d'une analyse argumentée :
> points forts, freins, et suggestions concrètes. Ce texte est rédigé dans un
> français nettement meilleur que les menus de l'interface.
>
> Une nuance : la source dit « une quarantaine de projets », le titre généré
> écrit « 40 projets ». L'IA transforme une approximation en chiffre précis.
>
> **Testé**.

---

## 5. Les sous-titres français

C'est le point de comparaison le plus utile, parce que les trois autres
outils ont reçu exactement le même fichier.

**Image : `klap-apercu-0013.png`**

> À 0:13, le sous-titre affiche « SUPÉRIEUR, DONT SORBONNE ». Deux lignes, en
> majuscules, avec le mot en cours surligné en jaune, posées en bas sans
> mordre sur le visage.
>
> **Testé**.

**Image : `klap-apercu-0016.png`**

> À 0:16, « POUR CE QUI EST DES INSTITUTIONS QUI ». Transcription correcte.
>
> **Testé**.

**Image : `klap-resultat-lecture.png`**

> À 0:43, « GENS DANS CES PROJETS QUI SONT », et la transcription complète
> visible dans le panneau de droite.
>
> Les deux passages sur lesquels CapCut s'était trompé sont ici corrects :
>
> | Passage prononcé | CapCut, 24/08/2026 | Klap, 23/11/2026 |
> |---|---|---|
> | « une quarantaine de projets, un petit peu plus » | « 1 quarantaine de projets 1 p'tit peu plus » | correct |
> | « des projets autour de la qualité de l'air » | « de des projets autour de la qualité de l'air » | correct |
>
> Ce sont deux exemples vérifiables à l'image, pas un taux d'erreur calculé.
>
> **Testé**.

**Image : `klap-bandeau-tronque.png`**

> À 0:05, en plein écran. Le recadrage 9:16 centre correctement le visage,
> le suivi fonctionne. Mais l'incrustation en bas de l'image est amputée :
> on ne lit plus que « …atoire PartiCitaE » au lieu du nom complet du projet.
> Le début du mot est sorti du cadre.
>
> C'est le compromis inverse de CapCut, qui conservait le format 16:9
> d'origine et laissait l'incrustation entière, mais posait son sous-titre
> blanc par-dessus. Deux outils, deux façons de dégrader la même information,
> sur le même fichier.
>
> **Testé**.

---

## 6. L'éditeur, accessible sans payer

**Image : `klap-editeur.png`**

> L'éditeur complet s'ouvre sur le plan gratuit. À droite, la transcription
> découpée en segments cliquables : on supprime une phrase et le montage se
> coupe tout seul. C'est le principe de l'édition par le texte, celui de
> Descript, et il est ici disponible sans abonnement.
>
> La timeline montre que Klap a bien segmenté la vidéo en scènes.
>
> **Observé**, aucune coupe n'a été appliquée.

**Image : `klap-editeur-modeles.png`**

> L'éditeur de modèles, qui permet de régler position, emojis, mot surligné,
> typographie et affichage des sous-titres.
>
> La traduction se mélange ici : le panneau s'intitule « Captions » en
> anglais au milieu d'une interface française, la graisse de police est
> « Extra audacieux », et la vidéo de démonstration est une vidéo anglaise.
>
> **Observé**, aucun réglage modifié.

---

## 7. Le moment où ça bloque

**Image : `klap-encart-publier.png`**

> Avant le téléchargement, Klap affiche un encart : « Publier directement
> depuis Klap. Ignorez le téléchargement. Planifiez les publications et
> suivez les performances. » On est orienté vers la connexion de ses comptes
> sociaux plutôt que vers le fichier.
>
> **Observé**.

**Image : `klap-mur-paiement.png`**

> Le point d'arrêt. « Passer à la version téléchargeable. Choisissez un plan
> pour continuer et télécharger vos clips ! »
>
> Sans abonnement, **nous n'avons récupéré aucun fichier**. L'aperçu reste
> consultable en ligne, étiqueté « Aperçu basse résolution », mais rien ne
> sort de la plateforme.
>
> Deux choses à relever sur cet écran. Les trois plans affichés le sont en
> **dollars** — 14,50 $, 39,50 $ et 94,50 $ par mois — alors que l'interface
> est en français et que l'éditeur est une société française. Et ces montants
> supposent le paiement annuel : l'onglet « Annuellement, économisez 50 % »
> est sélectionné par défaut, les totaux annoncés étant 174 $, 474 $ et
> 1 134 $ par an.
>
> **Testé**.

**Image : `klap-comptes-sociaux.png`**

> L'écran de connexion des comptes propose cinq plateformes : Facebook,
> LinkedIn, Instagram, YouTube, TikTok. Le site de Klap annonce une
> publication « sur 7 plateformes en un clic ».
>
> **Observé**, nous n'avons connecté aucun compte.

**Image : `klap-facturation.png`**

> La page Facturation en fin de session : aucun plan actif, « Pas de
> factures ». Tout ce qui précède a été obtenu sans payer.
>
> **Testé**.

---

## Ce qu'il faut retenir, en clair

Sur notre vidéo française de 1 min 17, Klap a transcrit le français sans
faute sur les passages contrôlés, y compris les deux où CapCut s'était
trompé. Les sous-titres sont lisibles, bien placés, et le recadrage vertical
cadre correctement le visage, au prix de l'incrustation du bas d'image. Le
traitement a pris une minute, et l'éditeur complet, y compris l'édition par
le texte, est accessible sans payer.

Mais **aucun fichier ne sort sans abonnement**. Comme Submagic et CapCut,
Klap laisse voir le résultat et le refuse à l'export. Sur notre banc d'essai,
seul OpusClip a livré un fichier sous-titré sur un plan gratuit.

Dernière réserve, de confort : l'interface française comporte plusieurs
traductions approximatives, « Supprimer un fichier » pour déposer,
« Reformuler » pour recadrer, des aperçus de styles illisibles. Rien
n'empêche d'utiliser l'outil, mais sur un produit édité en France, ça
surprend.

---

## Ce que cette visite ne prouve pas

Une seule vidéo, 1 min 17, un plan fixe, en français, un seul jour, les
réglages par défaut. Nous n'avons mesuré aucun taux d'erreur : les passages
cités sont des exemples vérifiables à l'image, pas une statistique.

La détection des meilleurs moments, qui est l'argument principal de Klap, n'a
pas pu être évaluée : sur une source de soixante-dix-sept secondes, l'outil a
lui-même estimé qu'il n'y avait pas matière à plusieurs extraits. Son
comportement sur une vidéo longue reste à vérifier.

Le calendrier de publication, les analyses de performance, les modèles de
sous-titres et les trois modes de génération ont été vus à l'écran, jamais
utilisés, donc jamais évalués.

---

## Bloc transparence

> **Conditions du test.** Klap nous a contactés et nous a proposé
> gratuitement 30 jours d'accès Pro, sans obligation de publication ni droit
> de regard sur notre verdict. Nous n'avons pas activé cet accès : le test
> présenté sur cette page a été réalisé exclusivement avec le plan gratuit.
> Les éventuels liens affiliés sont signalés et portent `rel="sponsored"`.

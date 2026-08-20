/**
 * Calcul des notes dérivées des grilles éditoriales.
 *
 * Module de calcul PUR, séparé des données. Il ne lit que `lib/scoring.ts`,
 * qui n'a lui-même aucune dépendance. Il n'importe ni `lib/outils.ts`, ni
 * React, ni aucun composant ou contenu : le sens des dépendances est donc
 *
 *     lib/scoring.ts  →  (aucune dépendance)
 *     lib/scoring-compute.ts  →  lib/scoring.ts
 *     lib/outils.ts  →  pourra utiliser ce module sans créer de cycle
 *
 * IMPORTANT — dans cette passe, aucune note publiée n'est dérivée de ce
 * module. Les 18 notes de `lib/outils.ts` restent saisies à la main et
 * restent la seule valeur affichée sur le site. Ce module tourne en
 * parallèle, pour préparer la bascule.
 *
 * Règle d'arrondi retenue, définitive :
 *   - la note exacte est conservée pour tous les calculs internes ;
 *   - la note publiable est arrondie au dixième le plus proche ;
 *   - un 5 exact est arrondi vers le haut (8,35 → 8,4 ; 7,55 → 7,6 ; 7,85 → 7,9).
 *
 * `toFixed(1)` n'est volontairement utilisé nulle part ici : son résultat
 * dépend de la représentation binaire du nombre. En IEEE 754, 8,35 est stocké
 * 8,3499999999999996, et `(8.35).toFixed(1)` renvoie donc "8.3". Tous les
 * arrondis de ce module passent par une normalisation en entiers, où le
 * problème ne peut pas se poser.
 */

import { SCORING_BY_SLUG, type ScoringCriterion } from "@/lib/scoring";

/** Nombre de critères attendu dans chaque grille. */
export const CRITERES_PAR_OUTIL = 6;

/** Somme attendue des pondérations d'une grille, en pourcentage. */
export const SOMME_POIDS_ATTENDUE = 100;

/* ---------- Arrondi ---------- */

/**
 * Arrondit au dixième le plus proche, un 5 exact étant arrondi vers le haut.
 *
 * La valeur est d'abord normalisée en millièmes entiers, ce qui neutralise
 * les artefacts de représentation binaire : 8,35 devient l'entier 8350, dont
 * la moitié de dixième est exactement représentable.
 *
 * Les notes manipulées ici dérivent de scores à une décimale et de poids
 * entiers : elles sont donc toujours des multiples exacts de 0,01, largement
 * couverts par une normalisation au millième.
 */
export function roundToOneDecimal(value: number): number {
  if (!Number.isFinite(value)) {
    throw new Error(`roundToOneDecimal : valeur non finie (${value}).`);
  }
  const signe = value < 0 ? -1 : 1;
  const millièmes = Math.round(Math.abs(value) * 1000);
  const dixièmes = Math.floor(millièmes / 100 + 0.5);
  return (signe * dixièmes) / 10;
}

/* ---------- Calcul ---------- */

/**
 * Note pondérée exacte d'une grille : Σ(score × poids) / 100.
 *
 * Le calcul passe par des entiers (score × 10, puis somme en millièmes) pour
 * que le résultat soit exact et indépendant de l'ordre d'addition.
 */
export function computeWeightedScore(grille: readonly ScoringCriterion[]): number {
  if (grille.length === 0) {
    throw new Error("computeWeightedScore : grille vide.");
  }
  let millièmes = 0;
  for (const critère of grille) {
    if (!Number.isFinite(critère.score) || !Number.isFinite(critère.poids)) {
      throw new Error(
        `computeWeightedScore : valeur non numérique sur « ${critère.label} ».`,
      );
    }
    millièmes += Math.round(critère.score * 10) * critère.poids;
  }
  return millièmes / 1000;
}

/** Note exacte d'un outil, non arrondie. Lève si le slug n'a pas de grille. */
export function getComputedScore(slug: string): number {
  const grille = SCORING_BY_SLUG[slug];
  if (!grille) {
    throw new Error(`getComputedScore : aucune grille pour le slug « ${slug} ».`);
  }
  return computeWeightedScore(grille);
}

/** Note publiable d'un outil : note exacte arrondie au dixième, 5 vers le haut. */
export function getPublishableScore(slug: string): number {
  return roundToOneDecimal(getComputedScore(slug));
}

/** Notes exactes et arrondies de toutes les grilles du registre. */
export function computeAllScores(): Record<
  string,
  { exact: number; publie: number }
> {
  const résultat: Record<string, { exact: number; publie: number }> = {};
  for (const slug of Object.keys(SCORING_BY_SLUG)) {
    const exact = getComputedScore(slug);
    résultat[slug] = { exact, publie: roundToOneDecimal(exact) };
  }
  return résultat;
}

/* ---------- Validation structurelle ---------- */

/**
 * Contrôle la structure du registre de notation.
 *
 * `slugsAttendus` est fourni par l'appelant — en pratique les slugs de
 * `OUTILS` — pour que ce module n'ait pas à importer `lib/outils.ts`, ce qui
 * rendrait un cycle possible le jour où `lib/outils.ts` dérivera ses notes.
 *
 * Retourne la liste des anomalies. Liste vide = registre conforme.
 */
export function validateScoringRegistry(
  slugsAttendus: readonly string[],
): string[] {
  const erreurs: string[] = [];

  const vus = new Set<string>();
  for (const slug of slugsAttendus) {
    if (vus.has(slug)) erreurs.push(`Slug dupliqué dans OUTILS : « ${slug} ».`);
    vus.add(slug);
  }

  const slugsGrilles = Object.keys(SCORING_BY_SLUG);
  for (const slug of vus) {
    if (!slugsGrilles.includes(slug)) {
      erreurs.push(`Aucune grille de notation pour l'outil « ${slug} ».`);
    }
  }
  for (const slug of slugsGrilles) {
    if (!vus.has(slug)) {
      erreurs.push(
        `Grille « ${slug} » sans outil correspondant dans OUTILS.`,
      );
    }
  }

  for (const [slug, grille] of Object.entries(SCORING_BY_SLUG)) {
    if (grille.length !== CRITERES_PAR_OUTIL) {
      erreurs.push(
        `« ${slug} » : ${grille.length} critères au lieu de ${CRITERES_PAR_OUTIL}.`,
      );
    }

    const labels = new Set<string>();
    let sommePoids = 0;

    for (const critère of grille) {
      const où = `« ${slug} » / critère « ${critère.label || "(sans label)"} »`;

      if (typeof critère.label !== "string" || critère.label.trim() === "") {
        erreurs.push(`${où} : label vide.`);
      } else if (labels.has(critère.label)) {
        erreurs.push(`${où} : label dupliqué dans la grille.`);
      } else {
        labels.add(critère.label);
      }

      if (
        typeof critère.commentaire !== "string" ||
        critère.commentaire.trim() === ""
      ) {
        erreurs.push(`${où} : commentaire vide.`);
      }

      if (typeof critère.score !== "number" || !Number.isFinite(critère.score)) {
        erreurs.push(`${où} : score non numérique (${critère.score}).`);
      } else if (critère.score < 0 || critère.score > 10) {
        erreurs.push(`${où} : score hors de [0, 10] (${critère.score}).`);
      }

      if (typeof critère.poids !== "number" || !Number.isFinite(critère.poids)) {
        erreurs.push(`${où} : poids non numérique (${critère.poids}).`);
      } else if (critère.poids <= 0) {
        erreurs.push(`${où} : poids non strictement positif (${critère.poids}).`);
      } else {
        sommePoids += critère.poids;
      }
    }

    if (Math.round(sommePoids * 1000) !== SOMME_POIDS_ATTENDUE * 1000) {
      erreurs.push(
        `« ${slug} » : somme des poids = ${sommePoids} au lieu de ${SOMME_POIDS_ATTENDUE}.`,
      );
    }
  }

  return erreurs;
}

/**
 * Variante bloquante de `validateScoringRegistry`.
 *
 * Appelée pendant la génération statique : toute anomalie structurelle fait
 * échouer le build avec un message qui nomme l'outil et le critère concernés.
 *
 * Ce contrôle ne porte QUE sur la structure du registre. Il ne compare jamais
 * la note calculée à la note publiée : tant que les deux coexistent, cette
 * comparaison échouerait sur les 18 outils.
 */
export function assertScoringRegistryValid(
  slugsAttendus: readonly string[],
): void {
  const erreurs = validateScoringRegistry(slugsAttendus);
  if (erreurs.length > 0) {
    throw new Error(
      `Registre de notation invalide (${erreurs.length} anomalie(s)) :\n` +
        erreurs.map((e) => `  - ${e}`).join("\n"),
    );
  }
}

import "server-only";

/**
 * Validation du registre de notation, réservée au serveur.
 *
 * Ce module est le SEUL point où `lib/outils.ts` et `lib/scoring.ts` se
 * rencontrent. Il est importé depuis `app/layout.tsx`, un Server Component,
 * et jamais depuis un composant client.
 *
 * Pourquoi ici plutôt que dans `lib/outils.ts` : ce dernier est consommé par
 * des composants clients (`OutilsCatalog`, `SearchBar`). Lui faire importer
 * les grilles enverrait les 108 commentaires éditoriaux dans le bundle
 * navigateur — mesuré à un chunk de ~52 Ko chargé par l'accueil, le catalogue,
 * les 18 fiches et les pages cas d'usage.
 *
 * L'import `server-only` en tête garantit structurellement cette frontière :
 * toute tentative future d'importer ce module depuis un composant client fait
 * échouer le build, sans dépendre d'une élimination de code morte.
 */

import { OUTILS } from "@/lib/outils";
import { SCORING_BY_SLUG } from "@/lib/scoring";
import { validateScoringRegistry } from "@/lib/scoring-compute";

/**
 * Vérifie la correspondance complète entre les 18 outils et les 18 grilles,
 * ainsi que la validité structurelle de chaque grille.
 *
 * Lève une erreur nommant l'outil et le critère concernés, ce qui fait
 * échouer la génération statique.
 *
 * Ce contrôle porte uniquement sur la STRUCTURE. Il ne compare jamais la note
 * calculée à la note publiée : tant que le champ `score` de `lib/outils.ts`
 * est saisi à la main, les deux coexistent volontairement.
 */
export function assertScoringRegistryConsistency(): void {
  const slugsOutils = OUTILS.map((o) => o.slug);
  const erreurs = validateScoringRegistry(slugsOutils);

  // Contrôle de cardinalité, redondant mais explicite : il rend le message
  // d'erreur lisible si les deux registres divergent en nombre.
  const nbOutils = slugsOutils.length;
  const nbGrilles = Object.keys(SCORING_BY_SLUG).length;
  if (nbOutils !== nbGrilles) {
    erreurs.unshift(
      `Cardinalités différentes : ${nbOutils} outils dans OUTILS contre ${nbGrilles} grilles dans SCORING_BY_SLUG.`,
    );
  }

  if (erreurs.length > 0) {
    throw new Error(
      `[Filtrio] Registre de notation invalide (${erreurs.length} anomalie(s)) :\n` +
        erreurs.map((e) => `  - ${e}`).join("\n"),
    );
  }
}

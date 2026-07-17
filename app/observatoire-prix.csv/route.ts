import { OUTILS, CATEGORIE_LABELS } from "@/lib/outils";
import { VERIF_DATES } from "@/lib/observatoire";

/**
 * CSV téléchargeable de l'Observatoire des prix.
 * Généré depuis le registre lib/outils.ts (même source que le tableau HTML),
 * donc toujours synchronisé avec la page /observatoire-prix.
 * Référencé par le schema Dataset (DataDownload) de la page.
 */

function csvEscape(value: string): string {
  // Point-virgule = séparateur : on remplace pour ne pas casser les colonnes.
  return value.replace(/;/g, ",").replace(/\r?\n/g, " ").trim();
}

export async function GET() {
  const header =
    "outil;categorie;prix_entree;offre_gratuite;score_editorial;verifie_le;fiche";

  const rows = [...OUTILS]
    .sort((a, b) => b.score - a.score)
    .map((o) =>
      [
        csvEscape(o.name),
        csvEscape(CATEGORIE_LABELS[o.category] ?? o.category),
        csvEscape(o.priceFrom ?? "Voir tarifs officiels"),
        csvEscape(o.freeTier && o.freeTier.length > 0 ? o.freeTier : "Aucune"),
        o.score.toFixed(1),
        VERIF_DATES[o.slug] ?? "Voir fiche",
        `https://www.filtrio.fr/outils/${o.slug}`,
      ].join(";"),
    );

  // BOM UTF-8 pour l'ouverture directe dans Excel FR.
  const body = "﻿" + [header, ...rows].join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="observatoire-prix-outils-ia-video.csv"',
    },
  });
}

export const dynamic = "force-static";

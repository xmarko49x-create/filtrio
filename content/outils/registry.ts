import type { FicheData } from "@/components/fiche/FicheOutilLayout";
import { submagicFiche } from "./submagic";
import { elevenlabsFiche } from "./elevenlabs";
import { tubebuddyFiche } from "./tubebuddy";
import { vidiqFiche } from "./vidiq";
import { heygenFiche } from "./heygen";
import { descriptFiche } from "./descript";
import { riversideFiche } from "./riverside";
import { runwayFiche } from "./runway";
import { synthesiaFiche } from "./synthesia";
import { canvaFiche } from "./canva";
import { capcutFiche } from "./capcut";
import { veedFiche } from "./veed";
import { kapwingFiche } from "./kapwing";
import { opusclipFiche } from "./opusclip";
import { davinciFiche } from "./davinci";
import { invideoFiche } from "./invideo";

/**
 * Registre des fiches outils publiées. Les 16 sont portées en Next.js.
 * Pour ajouter une nouvelle fiche :
 * 1. Créer `content/outils/{slug}.tsx` sur le modèle de `submagic.tsx`
 * 2. Importer et ajouter ici, indexé par slug
 * 3. La route `/outils/{slug}` se génère automatiquement
 */
export const FICHE_REGISTRY: Record<string, FicheData> = {
  submagic: submagicFiche,
  elevenlabs: elevenlabsFiche,
  tubebuddy: tubebuddyFiche,
  vidiq: vidiqFiche,
  heygen: heygenFiche,
  descript: descriptFiche,
  riverside: riversideFiche,
  runway: runwayFiche,
  synthesia: synthesiaFiche,
  canva: canvaFiche,
  capcut: capcutFiche,
  veed: veedFiche,
  kapwing: kapwingFiche,
  opusclip: opusclipFiche,
  davinci: davinciFiche,
  invideo: invideoFiche,
};

export function getFiche(slug: string): FicheData | undefined {
  return FICHE_REGISTRY[slug];
}

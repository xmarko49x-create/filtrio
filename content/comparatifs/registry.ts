import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";
import { opusclipVsSubmagic } from "./opusclip-vs-submagic";
import { synthesiaVsHeygen } from "./synthesia-vs-heygen";
import { veedVsKapwing } from "./veed-vs-kapwing";
import { opusclipVsCapcut } from "./opusclip-vs-capcut";
import { invideoVsPictory } from "./invideo-vs-pictory";
import { runwayVsPika } from "./runway-vs-pika";

/**
 * Registre des comparatifs 1v1 (pas la meta-page alternatives-a-submagic,
 * qui a sa propre route concrète dans app/comparatifs/alternatives-a-submagic/).
 */
export const COMPARATIF_REGISTRY: Record<string, ComparatifData> = {
  "opusclip-vs-submagic": opusclipVsSubmagic,
  "synthesia-vs-heygen": synthesiaVsHeygen,
  "veed-vs-kapwing": veedVsKapwing,
  "opusclip-vs-capcut": opusclipVsCapcut,
  "invideo-vs-pictory": invideoVsPictory,
  "runway-vs-pika": runwayVsPika,
  // submagic-vs-capcut, submagic-vs-descript, vidiq-vs-tubebuddy,
  // elevenlabs-vs-heygen, descript-vs-riverside — à porter plus tard
};

export function getComparatifContent(slug: string): ComparatifData | undefined {
  return COMPARATIF_REGISTRY[slug];
}

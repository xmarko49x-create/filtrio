import type { ComparatifData } from "@/components/comparatif/ComparatifLayout";
import { opusclipVsSubmagic } from "./opusclip-vs-submagic";
import { synthesiaVsHeygen } from "./synthesia-vs-heygen";
import { veedVsKapwing } from "./veed-vs-kapwing";
import { opusclipVsCapcut } from "./opusclip-vs-capcut";
import { invideoVsPictory } from "./invideo-vs-pictory";
import { runwayVsPika } from "./runway-vs-pika";
import { submagicVsCapcut } from "./submagic-vs-capcut";
import { submagicVsDescript } from "./submagic-vs-descript";
import { descriptVsRiverside } from "./descript-vs-riverside";
import { vidiqVsTubebuddy } from "./vidiq-vs-tubebuddy";
import { elevenlabsVsHeygen } from "./elevenlabs-vs-heygen";

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
  "submagic-vs-capcut": submagicVsCapcut,
  "submagic-vs-descript": submagicVsDescript,
  "descript-vs-riverside": descriptVsRiverside,
  "vidiq-vs-tubebuddy": vidiqVsTubebuddy,
  "elevenlabs-vs-heygen": elevenlabsVsHeygen,
};

export function getComparatifContent(slug: string): ComparatifData | undefined {
  return COMPARATIF_REGISTRY[slug];
}

import type { CasUsageData } from "@/components/cas-usage/CasUsageLayout";
import { videoLongueEnShorts } from "./video-longue-en-shorts";
import { podcastEnregistrementDistant } from "./podcast-enregistrement-distant";
import { sousTitrerTiktok } from "./sous-titrer-tiktok";
import { sousTitresRapides } from "./sous-titres-rapides";
import { miniaturesYoutubeIa } from "./miniatures-youtube-ia";
import { submagicOuOpusclipShortsFr } from "./submagic-ou-opusclip-shorts-fr";

export const CAS_USAGE_REGISTRY: Record<string, CasUsageData> = {
  "video-longue-en-shorts": videoLongueEnShorts,
  "podcast-enregistrement-distant": podcastEnregistrementDistant,
  "sous-titrer-tiktok": sousTitrerTiktok,
  "sous-titres-rapides": sousTitresRapides,
  "miniatures-youtube-ia": miniaturesYoutubeIa,
  "submagic-ou-opusclip-shorts-fr": submagicOuOpusclipShortsFr,
};

export function getCasUsageContent(slug: string): CasUsageData | undefined {
  return CAS_USAGE_REGISTRY[slug];
}

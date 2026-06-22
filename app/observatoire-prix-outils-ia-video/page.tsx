import { permanentRedirect } from "next/navigation";

// Page consolidee dans /observatoire-prix (redirection 301 dans next.config.mjs).
export default function ObservatoirePrixLegacyRedirect() {
  permanentRedirect("/observatoire-prix");
}

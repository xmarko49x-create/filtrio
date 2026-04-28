"use client";

import { trackEvent } from "@/lib/analytics";

interface TrackedAffiliateLinkProps {
  href: string;
  outilSlug: string;
  outilName: string;
  source: "fiche" | "cas-usage" | "comparatif" | "plateforme" | "home";
  className?: string;
  children: React.ReactNode;
}

/**
 * Lien affilié avec tracking Plausible.
 * Déclenche l'event "CTA_Affilie" avec le slug de l'outil et la source
 * (fiche, cas-usage, comparatif).
 */
export function TrackedAffiliateLink({
  href,
  outilSlug,
  outilName,
  source,
  className,
  children,
}: TrackedAffiliateLinkProps) {
  return (
    <a
      href={href}
      rel="sponsored nofollow"
      target="_blank"
      className={className}
      onClick={() =>
        trackEvent("CTA_Affilie", {
          outil: outilSlug,
          outil_name: outilName,
          source,
        })
      }
    >
      {children}
    </a>
  );
}

"use client";

import { trackEvent } from "@/lib/analytics";

interface TrackedAffiliateLinkProps {
  href: string;
  outilSlug: string;
  outilName: string;
  source: "fiche" | "cas-usage" | "comparatif" | "plateforme" | "home";
  /**
   * Position du CTA dans la page, pour comparer les zones de conversion
   * dans Plausible (ex : "verdict_haut", "recommandation_milieu",
   * "verdict_bas"). Optionnel : les CTA sans position restent trackés
   * par source uniquement.
   */
  position?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Lien affilié avec tracking Plausible.
 * Déclenche l'event "CTA_Affilie" avec le slug de l'outil, la source
 * (fiche, cas-usage, comparatif...) et la position dans la page.
 * rel="sponsored noopener noreferrer" : "sponsored" est l'attribut
 * recommandé par Google pour qualifier les liens affiliés.
 */
export function TrackedAffiliateLink({
  href,
  outilSlug,
  outilName,
  source,
  position,
  className,
  children,
}: TrackedAffiliateLinkProps) {
  return (
    <a
      href={href}
      rel="sponsored noopener noreferrer"
      target="_blank"
      className={className}
      onClick={() =>
        trackEvent("CTA_Affilie", {
          outil: outilSlug,
          outil_name: outilName,
          source,
          ...(position ? { position } : {}),
        })
      }
    >
      {children}
    </a>
  );
}

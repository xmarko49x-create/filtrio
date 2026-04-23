"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

interface TrackedComparatifLinkProps {
  href: string;
  slug: string;
  source: "home" | "fiche" | "cas-usage" | "comparatif" | "meta";
  className?: string;
  children: React.ReactNode;
}

/**
 * Lien interne vers un comparatif avec tracking Plausible.
 * Déclenche l'event "Clic_Comparatif" avec le slug du comparatif et
 * la source (home, fiche, cas-usage, comparatif, meta).
 */
export function TrackedComparatifLink({
  href,
  slug,
  source,
  className,
  children,
}: TrackedComparatifLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackEvent("Clic_Comparatif", {
          slug,
          source,
        })
      }
    >
      {children}
    </Link>
  );
}

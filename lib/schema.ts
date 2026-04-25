/**
 * Helpers JSON-LD pour Filtrio.
 *
 * Chaque fonction retourne un objet prêt à être sérialisé dans
 * <Script type="application/ld+json">. Les JSX children ReactNode
 * sont convertis en plain text via reactNodeToText() quand nécessaire
 * (cas du FAQPage qui contient parfois des <Link> dans les réponses).
 */

import type { ReactNode } from "react";
import { AUTHOR, SITE_LAUNCH_DATE } from "@/lib/author";

const SITE_URL = "https://filtrio.fr";
const SITE_NAME = "Filtrio";
const AUTHOR_NAME = AUTHOR.name;
const AUTHOR_URL = `${SITE_URL}${AUTHOR.url}`;

/* ---------- Utilitaires ---------- */

/** Extrait récursivement le texte pur d'un ReactNode. */
export function reactNodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToText).join(" ");
  if (typeof node === "object" && "props" in node) {
    // React Element : on descend sur children
    const props = (node as { props?: { children?: ReactNode } }).props;
    return reactNodeToText(props?.children);
  }
  return "";
}

/* ---------- Schemas ---------- */

/** Organization + WebSite (home, injectés ensemble). */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description:
      "Comparateur indépendant d'outils IA pour créateurs vidéo francophones. Analysés sans langue de bois, notés sur 6 critères concrets.",
    founder: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    foundingDate: "2026",
    inLanguage: "fr-FR",
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Comparateur indépendant d'outils IA pour créateurs vidéo francophones.",
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Review + SoftwareApplication pour une fiche outil.
 * Déclenche les rich snippets "étoiles" dans les SERP Google.
 */
export function getReviewSchema(params: {
  outilSlug: string;
  outilName: string;
  tagline: string;
  score: number;
  priceFrom?: string;
  lastCheck: string;
}) {
  // ratingValue doit être entre 1 et 10 (bestRating = 10)
  const parsedOffer = buildOfferFromPriceFrom(params.priceFrom);
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: params.outilName,
      applicationCategory: "MultimediaApplication",
      description: params.tagline,
      operatingSystem: "Web",
      ...(parsedOffer ? { offers: parsedOffer } : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: params.score.toFixed(1),
      bestRating: "10",
      worstRating: "0",
    },
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: SITE_LAUNCH_DATE,
    dateModified: lastCheckToIso(params.lastCheck),
  };
}

/**
 * FAQPage pour Google rich snippets (questions déroulantes dans SERP).
 * Accepte des ReactNode et les convertit en texte pur.
 */
export function getFaqPageSchema(
  faq: { question: string; answer: ReactNode }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: reactNodeToText(item.answer).replace(/\s+/g, " ").trim(),
      },
    })),
  };
}

/**
 * BreadcrumbList : fil d'Ariane pour Google (meilleur CTR en SERP).
 */
export function getBreadcrumbSchema(
  items: { name: string; url?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
    })),
  };
}

/* ---------- Helpers internes ---------- */

/** Convertit "22/04/2026" (format FR) en "2026-04-22" (ISO 8601). */
function lastCheckToIso(lastCheck: string): string {
  const match = lastCheck.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return new Date().toISOString().split("T")[0];
  const [, dd, mm, yyyy] = match;
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Essaie de parser un priceFrom type "À partir de 12 €/mois" ou "À partir
 * de 3,99 $/mois" en Offer JSON-LD avec price + priceCurrency structurés
 * (plus conforme à Google qu'une simple description texte).
 *
 * Retourne null pour les cas non parsables (ex : "Gratuit · Studio à 295 $
 * en achat unique", "Plan gratuit + payant") — auquel cas pas d'Offer,
 * ce qui reste valide côté Google.
 */
function buildOfferFromPriceFrom(
  priceFrom: string | undefined,
): Record<string, string> | null {
  if (!priceFrom) return null;
  // Pattern : "À partir de 12 €/mois", "À partir de 3,99 $/mois",
  // "À partir de 16,58 €/mois", "À partir de 110 €/an"
  const match = priceFrom.match(
    /(\d+(?:[.,]\d+)?)\s*(€|\$)\s*\/\s*(mois|an)/i,
  );
  if (!match) return null;
  const [, rawNumber, rawCurrency] = match;
  const price = rawNumber.replace(",", ".");
  const priceCurrency = rawCurrency === "€" ? "EUR" : "USD";
  return {
    "@type": "Offer",
    price,
    priceCurrency,
  };
}

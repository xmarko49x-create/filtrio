import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://filtrio.fr"),
  title: {
    default: "Filtrio — Comparateur d'outils IA pour créateurs vidéo francophones",
    template: "%s — Filtrio",
  },
  description:
    "Un comparateur indépendant dédié aux créateurs vidéo francophones. Analysés sans langue de bois. Notés sur 6 critères concrets. Mis à jour régulièrement.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Filtrio",
    title: "Filtrio — Comparateur d'outils IA pour créateurs vidéo francophones",
    description:
      "Un comparateur indépendant dédié aux créateurs vidéo francophones. Analysés sans langue de bois.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filtrio",
    description:
      "Comparateur indépendant d'outils IA pour créateurs vidéo francophones.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

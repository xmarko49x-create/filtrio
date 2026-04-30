import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://filtrio.fr"),
  title: {
    default: "Filtrio — Comparateur d'outils IA pour créateurs vidéo",
    template: "%s — Filtrio",
  },
  description:
    "Comparateur indépendant d'outils IA pour créateurs vidéo : Submagic, OpusClip, ElevenLabs, HeyGen et 12 autres. Notés sur 6 critères, prix vérifiés, sans langue de bois.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Filtrio",
    title: "Filtrio — Comparateur d'outils IA pour créateurs vidéo",
    description:
      "Comparateur indépendant d'outils IA pour créateurs vidéo : Submagic, OpusClip, ElevenLabs, HeyGen et 12 autres. Notés sur 6 critères, prix vérifiés.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filtrio",
    description:
      "Comparateur indépendant d'outils IA pour créateurs vidéo : Submagic, OpusClip, ElevenLabs et 13 autres. Notés sur 6 critères, prix vérifiés.",
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
      <body>
        {children}
        {/* Plausible Analytics — privacy-friendly, cookie-less, sans bandeau */}
        <Script
          src="https://plausible.io/js/pa-VYPdDDpvcbd6XBNACEEcX.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}

import { ImageResponse } from "next/og";

// Open Graph image par défaut (1200x630)
// Utilisée comme aperçu quand un lien Filtrio est partagé sur
// LinkedIn, X (Twitter), Facebook, WhatsApp, Slack, Discord, etc.
export const alt =
  "Filtrio — Comparateur d'outils IA pour créateurs vidéo francophones";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 50%, #0a1322 100%)",
          position: "relative",
        }}
      >
        {/* Halo décoratif emerald en haut à droite */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0) 70%)",
            display: "flex",
          }}
        />

        {/* Badge du haut */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 18px",
            background: "rgba(52,211,153,0.1)",
            border: "1px solid rgba(52,211,153,0.3)",
            borderRadius: 999,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#34d399",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#34d399",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Comparateur indépendant · Mise à jour avril 2026
          </span>
        </div>

        {/* Logo Filtrio géant */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 140,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#34d399" }}>Filt</span>
          <span style={{ color: "#f1f5f9" }}>rio</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 600,
            color: "#cbd5e1",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            maxWidth: 1000,
            marginBottom: 32,
          }}
        >
          Comparateur d&apos;outils IA pour créateurs vidéo francophones
        </div>

        {/* Footer : chiffres clés */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 20,
            fontSize: 22,
            color: "#64748b",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "#34d399", fontWeight: 700 }}>16</span>
            <span>outils analysés</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "#34d399", fontWeight: 700 }}>12</span>
            <span>comparatifs 1v1</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "#34d399", fontWeight: 700 }}>6</span>
            <span>critères scorés</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

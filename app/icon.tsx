import { ImageResponse } from "next/og";

// Favicon généré dynamiquement (PNG 32x32)
// Utilisé par tous les navigateurs desktop + Android
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#34d399",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          F
        </div>
      </div>
    ),
    { ...size },
  );
}

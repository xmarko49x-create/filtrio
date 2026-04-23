import { ImageResponse } from "next/og";

// Apple touch icon (PNG 180x180)
// Utilisé par iOS quand on ajoute Filtrio à l'écran d'accueil
// Et par certains lecteurs RSS / bookmarks Apple
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 110,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#34d399" }}>F</span>
          <span style={{ color: "#f1f5f9" }}>.</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

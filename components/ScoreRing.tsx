import type { TailwindColor } from "@/lib/outils";

/** Mappe Tailwind color name → hex hsl pour conic-gradient inline style. */
const COLOR_HEX: Record<TailwindColor, string> = {
  amber: "#f59e0b",
  emerald: "#10b981",
  orange: "#f97316",
  sky: "#0ea5e9",
  teal: "#14b8a6",
  cyan: "#06b6d4",
  violet: "#a78bfa",
  indigo: "#818cf8",
  red: "#ef4444",
  pink: "#ec4899",
  yellow: "#eab308",
  green: "#22c55e",
  fuchsia: "#e879f9",
  blue: "#3b82f6",
  purple: "#c084fc",
  rose: "#fb7185",
  slate: "#94a3b8",
};

export function colorHex(c: TailwindColor): string {
  return COLOR_HEX[c];
}

interface ScoreRingProps {
  score: number;
  color: TailwindColor;
  size?: "sm" | "md" | "lg";
}

export default function ScoreRing({ score, color, size = "md" }: ScoreRingProps) {
  const hex = COLOR_HEX[color];
  const pct = Math.round((score / 10) * 100);
  const dimensions = {
    sm: { outer: "w-16 h-16", inner: "w-12 h-12", text: "text-lg" },
    md: { outer: "w-20 h-20", inner: "w-16 h-16", text: "text-xl" },
    lg: { outer: "w-24 h-24", inner: "w-[84px] h-[84px]", text: "text-2xl" },
  }[size];

  return (
    <div
      className={`${dimensions.outer} rounded-full flex items-center justify-center`}
      style={{ background: `conic-gradient(${hex} ${pct}%, #1e293b 0)` }}
    >
      <div
        className={`bg-slate-900 ${dimensions.inner} rounded-full flex items-center justify-center`}
      >
        <span className={`${dimensions.text} font-bold`} style={{ color: hex }}>
          {score.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

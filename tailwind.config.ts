import type { Config } from "tailwindcss";

const ACCENT_COLORS = [
  "amber",
  "emerald",
  "orange",
  "sky",
  "teal",
  "cyan",
  "violet",
  "indigo",
  "red",
  "pink",
  "yellow",
  "green",
  "fuchsia",
  "blue",
  "purple",
  "rose",
  "slate",
] as const;

const SHADES = ["100", "200", "300", "400", "500", "600"];
const OPACITIES = ["5", "10", "20", "30", "40", "60"];

// Génère la liste complète des classes utilisées dynamiquement
// pour éviter que le purge Tailwind ne les supprime.
const safelist: Config["safelist"] = [];
for (const color of ACCENT_COLORS) {
  for (const shade of SHADES) {
    safelist.push(`bg-${color}-${shade}`);
    safelist.push(`text-${color}-${shade}`);
    safelist.push(`border-${color}-${shade}`);
    safelist.push(`from-${color}-${shade}`);
    safelist.push(`to-${color}-${shade}`);
    safelist.push(`hover:bg-${color}-${shade}`);
    safelist.push(`hover:text-${color}-${shade}`);
    safelist.push(`hover:border-${color}-${shade}`);
    safelist.push(`group-hover:text-${color}-${shade}`);
  }
  for (const opacity of OPACITIES) {
    safelist.push(`bg-${color}-500/${opacity}`);
    safelist.push(`text-${color}-500/${opacity}`);
    safelist.push(`border-${color}-500/${opacity}`);
    safelist.push(`from-${color}-500/${opacity}`);
    safelist.push(`to-${color}-500/${opacity}`);
    safelist.push(`hover:border-${color}-500/${opacity}`);
  }
  safelist.push(`open:border-${color}-500/30`);
}

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  safelist,
  plugins: [],
};

export default config;

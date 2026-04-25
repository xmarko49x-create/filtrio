import Link from "next/link";
import { AUTHOR, formatDateFR } from "@/lib/author";

interface AuthorBylineProps {
  /** lastCheck au format "DD/MM/YYYY" (ex: "23/04/2026") */
  lastCheck: string;
  /** Sous-ligne optionnelle (ex: "Comparateur indépendant · Méthodologie en 6 critères") */
  subtitle?: string;
}

/**
 * Bloc auteur compact à afficher juste sous le H1 d'une fiche /
 * comparatif / cas d'usage. Avatar emerald + nom (cliquable vers
 * /a-propos) + date de mise à jour visible.
 */
export function AuthorByline({ lastCheck, subtitle }: AuthorBylineProps) {
  const formattedDate = formatDateFR(lastCheck);

  return (
    <div className="flex items-center gap-3 text-sm">
      <div
        aria-hidden="true"
        className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs flex-shrink-0"
      >
        {AUTHOR.initials}
      </div>
      <div className="leading-tight min-w-0">
        <div className="text-slate-300">
          Par{" "}
          <Link
            href={AUTHOR.url}
            className="font-semibold text-slate-100 hover:text-emerald-400 transition"
          >
            {AUTHOR.name}
          </Link>
          <span className="text-slate-500">
            {" · "}Mis à jour le {formattedDate}
          </span>
        </div>
        {subtitle && (
          <div className="text-xs text-slate-500 mt-0.5">{subtitle}</div>
        )}
      </div>
    </div>
  );
}

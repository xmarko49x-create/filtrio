"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { OUTILS, type Outil } from "@/lib/outils";

/**
 * Barre de recherche client-side dans la Nav.
 * Filtre la liste OUTILS sur le nom et la tagline.
 * Affiche une dropdown avec les 6 premiers résultats.
 * Click sur un résultat → redirige vers la fiche outil.
 */
export function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ferme la dropdown quand on clique en dehors
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const q = query.trim().toLowerCase();
  const results: Outil[] =
    q.length === 0
      ? []
      : OUTILS.filter(
          (o) =>
            o.name.toLowerCase().includes(q) ||
            o.tagline.toLowerCase().includes(q),
        ).slice(0, 6);

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      <div className="relative">
        <svg
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Cherche un outil…"
          className="w-full bg-slate-800/60 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-800 transition"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden z-50">
          {results.map((o) => (
            <Link
              key={o.slug}
              href={o.ficheAvailable ? `/outils/${o.slug}` : "/outils"}
              onClick={() => {
                setQuery("");
                setOpen(false);
              }}
              className="block px-3 py-2 hover:bg-slate-800 transition"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div
                    className={`font-semibold text-sm truncate text-${o.color}-400`}
                  >
                    {o.name}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {o.tagline}
                  </div>
                </div>
                <span
                  className={`text-xs font-bold flex-shrink-0 text-${o.color}-400`}
                >
                  {o.score.toFixed(1)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
      {open && q.length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl px-3 py-3 text-sm text-slate-500 z-50">
          Aucun outil ne correspond à &laquo; {query} &raquo;.
        </div>
      )}
    </div>
  );
}

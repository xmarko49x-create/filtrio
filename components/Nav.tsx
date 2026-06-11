"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";

export default function Nav({ ctaHref = "#verdict" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
        <div className="flex items-center gap-8 min-w-0">
          <Link
            href="/"
            onClick={close}
            aria-label="Filtrio, retour à l'accueil"
            className="font-bold text-xl tracking-tight flex-shrink-0"
          >
            <span className="text-emerald-400">Filt</span>rio
          </Link>
          <div className="hidden lg:flex gap-5 text-sm text-slate-400">
            <Link href="/outils" className="hover:text-slate-100 transition">
              Outils
            </Link>
            <Link href="/youtube" className="hover:text-slate-100 transition">
              YouTube
            </Link>
            <Link
              href="/tiktok-shorts"
              className="hover:text-slate-100 transition"
            >
              TikTok / Shorts
            </Link>
            <Link
              href="/comparatifs"
              className="hover:text-slate-100 transition"
            >
              Comparatifs
            </Link>
            <Link href="/methode" className="hover:text-slate-100 transition">
              Méthode
            </Link>
          </div>
        </div>

        {/* SearchBar visible md+ uniquement */}
        <div className="hidden md:block flex-1 max-w-xs">
          <SearchBar />
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href={ctaHref}
            onClick={close}
            className="text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition"
          >
            Voir le verdict
          </Link>

          {/* Hamburger, visible < lg (les liens du menu sont en lg:flex) */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="filtrio-mobile-menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden -mr-2 p-2 text-slate-300 hover:text-slate-100 transition"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div
          id="filtrio-mobile-menu"
          className="lg:hidden border-t border-slate-800 bg-slate-950"
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col">
            {/* SearchBar dans le drawer pour les écrans très étroits (< md) */}
            <div className="md:hidden mb-2">
              <SearchBar />
            </div>
            <Link
              href="/outils"
              onClick={close}
              className="py-3 text-slate-200 hover:text-emerald-400 transition border-b border-slate-800/60"
            >
              Outils
            </Link>
            <Link
              href="/youtube"
              onClick={close}
              className="py-3 text-slate-200 hover:text-emerald-400 transition border-b border-slate-800/60"
            >
              YouTube
            </Link>
            <Link
              href="/tiktok-shorts"
              onClick={close}
              className="py-3 text-slate-200 hover:text-emerald-400 transition border-b border-slate-800/60"
            >
              TikTok / Shorts
            </Link>
            <Link
              href="/comparatifs"
              onClick={close}
              className="py-3 text-slate-200 hover:text-emerald-400 transition border-b border-slate-800/60"
            >
              Comparatifs
            </Link>
            <Link
              href="/methode"
              onClick={close}
              className="py-3 text-slate-200 hover:text-emerald-400 transition"
            >
              Méthode
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

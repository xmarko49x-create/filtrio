"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  OUTILS,
  CATEGORIE_LABELS,
  type Outil,
  type OutilCategorie,
} from "@/lib/outils";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";

/** Vrai lien affilié (https://...) vs placeholder type "#aff-...". */
function hasRealAffiliateLink(o: Outil): boolean {
  return /^https?:\/\//.test(o.affiliateLink);
}

/** Détecte si un outil a un plan gratuit utilisable. */
function hasFreeTier(o: Outil): boolean {
  if (o.freeTier && o.freeTier.trim().length > 0) return true;
  return /gratuit/i.test(o.priceFrom || "");
}

type SortKey = "score" | "name";

export default function OutilsCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | OutilCategorie>("all");
  const [onlyFree, setOnlyFree] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("score");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = OUTILS.filter((o) => o.ficheAvailable);

    if (category !== "all") {
      list = list.filter((o) => o.category === category);
    }
    if (onlyFree) {
      list = list.filter(hasFreeTier);
    }
    if (q.length > 0) {
      list = list.filter(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.tagline.toLowerCase().includes(q),
      );
    }

    if (sortKey === "score") {
      list = [...list].sort((a, b) => b.score - a.score);
    } else {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [search, category, onlyFree, sortKey]);

  const total = OUTILS.filter((o) => o.ficheAvailable).length;
  const categoriesPresent = useMemo(() => {
    const set = new Set<OutilCategorie>();
    OUTILS.filter((o) => o.ficheAvailable).forEach((o) => set.add(o.category));
    return Array.from(set).sort((a, b) =>
      CATEGORIE_LABELS[a].localeCompare(CATEGORIE_LABELS[b]),
    );
  }, []);

  return (
    <div>
      {/* BARRE FILTRES */}
      <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto_auto_auto]">
        {/* Recherche texte */}
        <div>
          <label
            htmlFor="search"
            className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            Rechercher
          </label>
          <input
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Submagic, voix off, sous-titres..."
            className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-500"
          />
        </div>

        {/* Catégorie */}
        <div>
          <label
            htmlFor="category"
            className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            Catégorie
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as "all" | OutilCategorie)
            }
            className="w-full md:w-56 bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg px-4 py-2.5 text-sm outline-none transition"
          >
            <option value="all">Toutes</option>
            {categoriesPresent.map((c) => (
              <option key={c} value={c}>
                {CATEGORIE_LABELS[c]}
              </option>
            ))}
          </select>
        </div>

        {/* Plan gratuit */}
        <div>
          <label
            htmlFor="onlyFree"
            className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            Plan gratuit
          </label>
          <button
            id="onlyFree"
            type="button"
            onClick={() => setOnlyFree(!onlyFree)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition ${
              onlyFree
                ? "bg-emerald-500 border-emerald-500 text-slate-950"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"
            }`}
          >
            {onlyFree ? "✓ Oui uniquement" : "Tous les outils"}
          </button>
        </div>

        {/* Tri */}
        <div>
          <label
            htmlFor="sort"
            className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            Tri
          </label>
          <select
            id="sort"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="w-full md:w-44 bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg px-4 py-2.5 text-sm outline-none transition"
          >
            <option value="score">Meilleur score</option>
            <option value="name">A → Z</option>
          </select>
        </div>
      </div>

      {/* COMPTEUR + RESET */}
      <div className="flex items-center justify-between mb-6 text-sm text-slate-400">
        <div>
          <span className="text-slate-200 font-semibold">
            {filtered.length}
          </span>{" "}
          {filtered.length > 1 ? "outils affichés" : "outil affiché"} sur{" "}
          {total}
        </div>
        {(search || category !== "all" || onlyFree) && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory("all");
              setOnlyFree(false);
            }}
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* GRILLE OUTILS */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-semibold text-slate-200 mb-1">
            Aucun outil ne correspond à ces filtres
          </h3>
          <p className="text-sm text-slate-400">
            Essaie de modifier ta recherche ou de réinitialiser les filtres.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((o) => {
            const showTester = hasRealAffiliateLink(o);
            return (
              <div
                key={o.slug}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold text-${o.color}-400`}>
                    {o.name}
                  </h3>
                  <span className={`text-${o.color}-400 font-bold`}>
                    {o.score.toFixed(1)}
                  </span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                  {CATEGORIE_LABELS[o.category]}
                </div>
                <div className="text-sm text-slate-400 mb-4">{o.tagline}</div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-5">
                  {o.priceFrom && (
                    <span className="bg-slate-800 px-2 py-0.5 rounded">
                      {o.priceFrom}
                    </span>
                  )}
                  {o.freeTier && (
                    <span className="bg-slate-800 px-2 py-0.5 rounded">
                      {o.freeTier}
                    </span>
                  )}
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Link
                    href={`/outils/${o.slug}`}
                    className="text-sm font-medium border border-slate-700 hover:border-slate-500 text-slate-200 px-4 py-2 rounded-lg transition"
                  >
                    Voir la fiche
                  </Link>
                  {showTester && (
                    <TrackedAffiliateLink
                      href={o.affiliateLink}
                      outilSlug={o.slug}
                      outilName={o.name}
                      source="plateforme"
                      className={`text-sm font-semibold bg-${o.color}-500 hover:bg-${o.color}-400 text-slate-950 px-4 py-2 rounded-lg transition`}
                    >
                      Tester {o.name}
                    </TrackedAffiliateLink>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

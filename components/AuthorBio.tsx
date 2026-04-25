import Link from "next/link";
import { AUTHOR } from "@/lib/author";

/**
 * Bloc "À propos de l'auteur" à afficher en bas de chaque page
 * éditoriale (avant Newsletter / Footer).
 * Renforce E-E-A-T : auteur identifiable, bio claire, lien vers
 * page À propos.
 */
export function AuthorBio() {
  return (
    <section className="border-t border-slate-800 bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">
          À propos de l&apos;auteur
        </div>
        <div className="flex items-start gap-5">
          <div
            aria-hidden="true"
            className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-base flex-shrink-0"
          >
            {AUTHOR.initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-lg text-slate-100 mb-2">
              {AUTHOR.name}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-3">{AUTHOR.bio}</p>
            <Link
              href={AUTHOR.url}
              className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition"
            >
              En savoir plus
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

export default function Nav({ ctaHref = "#verdict" }: { ctaHref?: string }) {
  return (
    <nav className="border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
        <div className="flex items-center gap-8 min-w-0">
          <Link href="/" className="font-bold text-xl tracking-tight flex-shrink-0">
            <span className="text-emerald-400">Filt</span>rio
          </Link>
          <div className="hidden lg:flex gap-5 text-sm text-slate-400">
            <Link href="/outils" className="hover:text-slate-100 transition">
              Outils
            </Link>
            <Link href="/youtube" className="hover:text-slate-100 transition">
              YouTube
            </Link>
            <Link href="/tiktok-shorts" className="hover:text-slate-100 transition">
              TikTok / Shorts
            </Link>
            <Link href="/#comparatifs" className="hover:text-slate-100 transition">
              Comparatifs
            </Link>
            <Link href="/methode" className="hover:text-slate-100 transition">
              Méthode
            </Link>
          </div>
        </div>
        <div className="hidden md:block flex-1 max-w-xs">
          <SearchBar />
        </div>
        <Link
          href={ctaHref}
          className="text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition flex-shrink-0"
        >
          Voir le verdict
        </Link>
      </div>
    </nav>
  );
}

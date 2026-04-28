import Link from "next/link";

export default function Nav({ ctaHref = "#verdict" }: { ctaHref?: string }) {
  return (
    <nav className="border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/" className="font-bold text-xl tracking-tight">
            <span className="text-emerald-400">Filt</span>rio
          </Link>
          <div className="hidden md:flex gap-6 text-sm text-slate-400">
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
            <Link href="/a-propos" className="hover:text-slate-100 transition">
              À propos
            </Link>
          </div>
        </div>
        <Link
          href={ctaHref}
          className="text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition"
        >
          Voir le verdict
        </Link>
      </div>
    </nav>
  );
}

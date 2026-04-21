import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-bold text-lg mb-3">
              <span className="text-emerald-400">Filt</span>rio
            </div>
            <p className="text-sm text-slate-500">
              Le comparateur des outils IA pour créateurs vidéo francophones.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-300 mb-3">Par plateforme</div>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/youtube" className="hover:text-slate-300">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="/tiktok-shorts" className="hover:text-slate-300">
                  TikTok / Shorts / Reels
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-300 mb-3">Par tâche</div>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/cas-usage/video-longue-en-shorts" className="hover:text-slate-300">
                  Shorts &amp; clips
                </Link>
              </li>
              <li>
                <Link href="/cas-usage/sous-titres-rapides" className="hover:text-slate-300">
                  Sous-titres
                </Link>
              </li>
              <li>
                <Link href="/cas-usage/miniatures-youtube-ia" className="hover:text-slate-300">
                  Miniatures
                </Link>
              </li>
              <li>
                <Link href="/outils/elevenlabs" className="hover:text-slate-300">
                  Voix IA
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-300 mb-3">Filtrio</div>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/a-propos" className="hover:text-slate-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/methode" className="hover:text-slate-300">
                  Notre méthode
                </Link>
              </li>
              <li>
                <Link href="/a-propos#transparence" className="hover:text-slate-300">
                  Transparence affiliation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-slate-300">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Filtrio — Indépendant, français, sans bullshit.</div>
          <div className="max-w-lg md:text-right">
            Certains liens sont affiliés. Cela ne change jamais notre classement.
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

/**
 * Bloc "Continue à explorer Filtrio" affiché en bas de chaque page.
 *
 * Remplace l'ancien bloc Newsletter (promesse non tenue tant qu'aucune
 * plateforme email n'est connectée). Sert maintenant de maillage interne
 * fort + raccourcis vers les sections principales du site.
 *
 * Le composant garde le nom "Newsletter" pour éviter de modifier les
 * imports dans toutes les pages, mais affiche désormais un bloc nav.
 *
 * À remplacer par une vraie newsletter quand :
 * - le site a > 1000 visites/mois
 * - une plateforme email est connectée (MailerLite / Resend)
 * - un calendrier d'envoi est tenable (1 email tous les 15 jours min.)
 */
export default function Newsletter() {
  return (
    <section
      id="continuer"
      className="border-t border-slate-800 bg-gradient-to-b from-slate-900/40 to-emerald-500/5"
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Continue à explorer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trois chemins pour aller plus loin.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/youtube"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-red-500/40 transition"
          >
            <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
              Par plateforme
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition">
              Outils pour YouTube
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              SEO, miniatures, voix off, édition long format, découpe en
              shorts. Le classement complet.
            </p>
          </Link>

          <Link
            href="/tiktok-shorts"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/40 transition"
          >
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
              Par plateforme
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition">
              Outils pour TikTok / Shorts
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sous-titres viraux, découpe auto, voix IA, templates prêts.
              Les outils qui marchent vraiment.
            </p>
          </Link>

          <Link
            href="/methode"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
          >
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Comprendre
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
              Notre méthode
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Comment Filtrio note chaque outil. Six critères, pondérations
              transparentes, méthodologie publique.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

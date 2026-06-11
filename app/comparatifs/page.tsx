import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import { getOrganizationSchema, getBreadcrumbSchema } from "@/lib/schema";
import { COMPARATIFS } from "@/lib/comparatifs";
import { getOutil } from "@/lib/outils";

export const metadata: Metadata = {
  title: "Tous les comparatifs d'outils IA vidéo, duels et verdicts 2026",
  description:
    "11 duels 1 contre 1 (OpusClip vs Submagic, VidIQ vs TubeBuddy, ElevenLabs vs HeyGen...), les alternatives à Submagic et le grand comparatif shorts. Un verdict clair par profil, à chaque fois.",
  alternates: {
    canonical: "https://www.filtrio.fr/comparatifs",
  },
};

export default function ComparatifsIndexPage() {
  const duels = COMPARATIFS.filter((c) => c.outilB && c.outilB.length > 0);
  const meta = COMPARATIFS.find((c) => c.slug === "alternatives-a-submagic");

  return (
    <>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Comparatifs" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Comparatifs d'outils IA pour créateurs vidéo",
            itemListElement: COMPARATIFS.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.titre,
              url: `https://www.filtrio.fr/comparatifs/${c.slug}`,
            })),
          },
        ]}
      />

      <Nav />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-[60%] w-[560px] h-[560px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Duels 1 contre 1 · Verdict par profil
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Tous les comparatifs.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            Pour chaque duel : qui gagne, pour qui, pourquoi. Scores repris
            des fiches, prix vérifiés sur les pages officielles, et un verdict
            qui dépend de ton usage, pas d&apos;une note absolue.
          </p>
        </div>
      </section>

      {/* PAGE PILIER */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/comparatifs/outils-shorts-tiktok-2026"
          className="block bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-7 hover:border-emerald-400/60 transition"
        >
          <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
            Le grand comparatif
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Outils shorts et TikTok 2026 : 6 outils, 12 critères, côte à côte.
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Submagic, OpusClip, Descript, CapCut, Veed et Kapwing comparés
            dans un seul méga-tableau, avec une recommandation par profil de
            créateur.
          </p>
          <span className="text-emerald-400 font-semibold text-sm">
            Lire le grand comparatif →
          </span>
        </Link>
      </section>

      {/* DUELS 1V1 */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Les duels 1 contre 1.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {duels.map((c) => {
            const a = getOutil(c.outilA);
            const b = getOutil(c.outilB);
            return (
              <Link
                key={c.slug}
                href={`/comparatifs/${c.slug}`}
                className="block bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition"
              >
                <div className="flex items-center gap-3 mb-3 text-sm">
                  {a && (
                    <span className={`font-bold text-${a.color}-400`}>
                      {a.score.toFixed(1)}
                    </span>
                  )}
                  <span className="text-slate-600 font-semibold text-xs">VS</span>
                  {b && (
                    <span className={`font-bold text-${b.color}-400`}>
                      {b.score.toFixed(1)}
                    </span>
                  )}
                  <span className="text-slate-600 text-xs ml-auto">
                    {c.tempsLecture} min
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{c.titre}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  {c.description}
                </p>
                <span className="text-emerald-400 font-semibold text-sm">
                  Lire le verdict →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* META PAGE ALTERNATIVES */}
      {meta && (
        <section className="max-w-6xl mx-auto px-6 py-8">
          <Link
            href={`/comparatifs/${meta.slug}`}
            className="block bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-emerald-500/50 transition"
          >
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Un outil contre tout le marché
            </div>
            <h2 className="text-2xl font-bold mb-2">{meta.titre}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              {meta.description}
            </p>
            <span className="text-emerald-400 font-semibold text-sm">
              Voir les alternatives →
            </span>
          </Link>
        </section>
      )}

      {/* COMMENT ON COMPARE */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
          <h2 className="text-xl font-bold mb-3">Comment on compare.</h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Chaque duel reprend les scores des fiches (6 critères pondérés,
            grille publique sur la{" "}
            <Link href="/methode" className="text-emerald-400 hover:underline">
              page Méthode
            </Link>
            ), des prix vérifiés sur les pages officielles et datés, et se
            conclut par une recommandation par profil plutôt que par un
            gagnant universel. Certains liens sont affiliés, ce qui ne change
            jamais le verdict :{" "}
            <Link
              href="/a-propos#transparence"
              className="text-emerald-400 hover:underline"
            >
              transparence complète ici
            </Link>
            .
          </p>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

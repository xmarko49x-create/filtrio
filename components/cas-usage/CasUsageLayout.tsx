import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { colorHex } from "@/components/ScoreRing";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";
import { getOutil, type TailwindColor } from "@/lib/outils";

export interface OutilDansClassement {
  slug: string;
  scoreCas: number;
  badge?: string;
  pourquoiGagne?: string[];
  limites?: string[];
  verdict: string;
  /** Prix/plan affiché en colonne droite */
  priceDisplay?: { label: string; value: string; note?: string };
  /** Couleur d'accent override si l'outil n'est pas au registre. */
  fallbackColor?: TailwindColor;
  fallbackName?: string;
}

export interface CasUsageData {
  slug: string;
  gagnantSlug: string;
  hero: {
    h1: string;
    tagline: string;
    tempsLecture: number;
    outilsAnalyses: number;
    lastCheck: string;
  };
  verdict: {
    tag: string;
    headline: ReactNode;
    paragraphs: ReactNode[];
  };
  criteres: { label: string; poids: number; description: string }[];
  classement: OutilDansClassement[];
  pourquoiGagne: { titre: string; description: string }[];
  piegesAEviter: { titre: string; description: ReactNode }[];
  commentChoisir: { question: string; reponse: ReactNode }[];
  faq: { question: string; answer: ReactNode }[];
  ctaFinal: { headline: string; paragraph: string; buttonText: string };
  autresCasUsage: { slug: string; titre: string; description: string; color: TailwindColor }[];
}

export default function CasUsageLayout({ data }: { data: CasUsageData }) {
  const gagnant = getOutil(data.gagnantSlug);
  if (!gagnant) throw new Error(`Gagnant introuvable : ${data.gagnantSlug}`);
  const c = gagnant.color;
  const hex = colorHex(c);

  return (
    <>
      <Nav ctaHref="#gagnant" />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300">
            Accueil
          </Link>
          <span>›</span>
          <span>Cas d&apos;usage</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Mise à jour · {data.hero.lastCheck}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
          {data.hero.h1}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl">
          {data.hero.tagline}
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 border-t border-slate-800 pt-6">
          <div>
            <span className="text-slate-400">Auteur :</span> Équipe Filtrio
          </div>
          <div>
            <span className="text-slate-400">Temps de lecture :</span>{" "}
            {data.hero.tempsLecture} min
          </div>
          <div>
            <span className="text-slate-400">Outils analysés :</span>{" "}
            {data.hero.outilsAnalyses}
          </div>
        </div>
      </section>

      {/* VERDICT */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div
          className={`bg-gradient-to-br from-${c}-500/10 to-emerald-500/5 border border-${c}-500/20 rounded-2xl p-8 md:p-10`}
        >
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-4`}>
            {data.verdict.tag}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
            {data.verdict.headline}
          </h2>
          {data.verdict.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-slate-300 leading-relaxed mb-4 last:mb-0 ${i === 0 ? "text-lg" : ""}`}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* CRITÈRES */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            Ce qui compte pour ce cas précis
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Les {data.criteres.length} critères qu&apos;on regarde.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.criteres.map((cr) => (
              <div
                key={cr.label}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{cr.label}</h3>
                  <span className={`text-${c}-400 font-bold text-sm`}>{cr.poids}%</span>
                </div>
                <p className="text-sm text-slate-400">{cr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSEMENT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
          Classement pour ce cas
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">
          Les {data.classement.length} outils retenus, notés.
        </h2>
        <div className="space-y-4">
          {data.classement.map((item, i) => (
            <OutilCard
              key={item.slug}
              item={item}
              rank={i + 1}
              isWinner={i === 0}
              winnerHex={hex}
              winnerColor={c}
            />
          ))}
        </div>
      </section>

      {/* POURQUOI LE GAGNANT */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            Focus sur le gagnant
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Pourquoi {gagnant.name} prend l&apos;avantage.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.pourquoiGagne.map((p, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <h3 className={`font-bold mb-3 text-${c}-400`}>
                  {i + 1}. {p.titre}
                </h3>
                <p className="text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIÈGES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-sm font-semibold text-rose-400 uppercase tracking-wider mb-3">
          Les pièges à éviter
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">Ce qui te ralentit vraiment.</h2>
        <div className="space-y-4">
          {data.piegesAEviter.map((p, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-rose-500/20 rounded-xl p-6"
            >
              <h3 className="font-bold mb-2 text-rose-400">{p.titre}</h3>
              <div className="text-slate-400">{p.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT CHOISIR */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            Ta décision en {data.commentChoisir.length} questions
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Comment choisir en 60 secondes.</h2>
          <ol className="space-y-6">
            {data.commentChoisir.map((q, i) => (
              <li key={i} className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-${c}-500/10 flex items-center justify-center text-${c}-400 font-bold`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{q.question}</h3>
                  <div className="text-slate-400 text-sm">{q.reponse}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
          FAQ
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">Les questions qui reviennent.</h2>
        <div className="space-y-4">
          {data.faq.map((q) => (
            <details
              key={q.question}
              className={`group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-${c}-500/30`}
            >
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>{q.question}</span>
                <span className="faq-chevron transition-transform" style={{ color: hex }}>
                  +
                </span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">{q.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className={`border-y border-slate-800 bg-gradient-to-b from-slate-900/40 to-${c}-500/5`}
      >
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            Passer à l&apos;action
          </div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">{data.ctaFinal.headline}</h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {data.ctaFinal.paragraph}
          </p>
          <TrackedAffiliateLink
            href={gagnant.affiliateLink}
            outilSlug={gagnant.slug}
            outilName={gagnant.name}
            source="cas-usage"
            className={`inline-block bg-${c}-500 hover:bg-${c}-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition text-lg`}
          >
            {data.ctaFinal.buttonText} →
          </TrackedAffiliateLink>
          <p className="text-xs text-slate-500 mt-6 max-w-lg mx-auto">
            Ce lien est affilié. Si tu t&apos;abonnes, on touche une commission
            — sans que cela change jamais notre classement.
          </p>
        </div>
      </section>

      {/* AUTRES CAS D'USAGE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
          Autres cas d&apos;usage
        </div>
        <h2 className="text-2xl font-bold mb-8 tracking-tight">
          Tu cherches à faire autre chose ?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {data.autresCasUsage.map((a) => (
            <Link
              key={a.slug}
              href={`/cas-usage/${a.slug}`}
              className={`p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-${a.color}-500/40 transition group`}
            >
              <div className={`text-xs text-${a.color}-400 font-semibold mb-2`}>Cas d&apos;usage</div>
              <h3 className={`font-bold mb-2 group-hover:text-${a.color}-400 transition`}>
                {a.titre}
              </h3>
              <p className="text-slate-400 text-sm">{a.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

/* ---------- Sous-composant ---------- */

function OutilCard({
  item,
  rank,
  isWinner,
  winnerHex,
  winnerColor,
}: {
  item: OutilDansClassement;
  rank: number;
  isWinner: boolean;
  winnerHex: string;
  winnerColor: TailwindColor;
}) {
  const outil = getOutil(item.slug);
  const color: TailwindColor = outil?.color ?? item.fallbackColor ?? "slate";
  const name = outil?.name ?? item.fallbackName ?? item.slug;
  const hex = colorHex(color);
  const pct = Math.round(item.scoreCas * 10);

  return (
    <article
      id={isWinner ? "gagnant" : undefined}
      className={`bg-slate-900 ${isWinner ? `border-${winnerColor}-500/30` : "border-slate-800"} border rounded-2xl p-6 md:p-8 relative`}
    >
      {isWinner && (
        <span
          className={`absolute -top-3 left-4 bg-${winnerColor}-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full`}
        >
          Gagnant
        </span>
      )}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0 flex flex-col items-center">
          <div
            className={`${isWinner ? "w-24 h-24" : "w-20 h-20"} rounded-full flex items-center justify-center`}
            style={{ background: `conic-gradient(${hex} ${pct}%, #1e293b 0)` }}
          >
            <div
              className={`bg-slate-900 ${isWinner ? "w-[84px] h-[84px]" : "w-16 h-16"} rounded-full flex flex-col items-center justify-center`}
            >
              <span className={`${isWinner ? "text-2xl" : "text-xl"} font-bold`} style={{ color: hex }}>
                {item.scoreCas.toFixed(1)}
              </span>
              {isWinner && <span className="text-xs text-slate-500">/ 10</span>}
            </div>
          </div>
          <div className="text-xs text-slate-500 mt-2">Score pour ce cas</div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-2xl font-bold mb-1">
                {rank}. {name}
              </h3>
              {item.badge && (
                <span
                  className={`bg-${color}-500/10 text-${color}-400 text-xs font-semibold px-2 py-1 rounded`}
                >
                  {item.badge}
                </span>
              )}
            </div>
            {item.priceDisplay && (
              <div className="text-right hidden md:block">
                <div className="text-sm text-slate-500">{item.priceDisplay.label}</div>
                <div className="text-xl font-bold">{item.priceDisplay.value}</div>
                {item.priceDisplay.note && (
                  <div className="text-xs text-emerald-400">
                    {item.priceDisplay.note}
                  </div>
                )}
              </div>
            )}
          </div>

          {isWinner && item.pourquoiGagne && item.limites && (
            <div className="grid md:grid-cols-2 gap-4 mt-5">
              <div className="text-sm">
                <div className="font-semibold text-emerald-400 mb-2">Pourquoi il gagne</div>
                <ul className="text-slate-300 space-y-1">
                  {item.pourquoiGagne.map((p, i) => (
                    <li key={i}>— {p}</li>
                  ))}
                </ul>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-rose-400 mb-2">Limites pour ce cas</div>
                <ul className="text-slate-300 space-y-1">
                  {item.limites.map((l, i) => (
                    <li key={i}>— {l}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div
            className={`mt-5 p-4 bg-slate-800/50 border-l-2 border-${color}-500 rounded-r text-sm`}
          >
            <span className={`font-semibold text-${color}-400`}>Verdict : </span>
            <span className="text-slate-200">{item.verdict}</span>
          </div>

          {outil && (
            <div className="flex gap-3 mt-5">
              <Link
                href={`/outils/${outil.slug}`}
                className="border border-slate-700 hover:border-slate-600 px-5 py-2.5 rounded-lg text-sm transition"
              >
                Voir la fiche complète
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

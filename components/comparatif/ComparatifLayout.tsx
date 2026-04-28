import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { colorHex } from "@/components/ScoreRing";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBio } from "@/components/AuthorBio";
import { TrackedAffiliateLink } from "@/components/TrackedAffiliateLink";
import { getOutil, type TailwindColor } from "@/lib/outils";
import { getFaqPageSchema, getBreadcrumbSchema } from "@/lib/schema";

/** Permet de définir un "outil fantôme" quand la fiche n'existe pas encore (Pika, Pictory…). */
export interface PhantomOutil {
  name: string;
  color: TailwindColor;
  tagline: string;
  score: number;
  priceFrom?: string;
  freeTier?: string;
}

export interface ComparatifData {
  slug: string;
  outilAslug: string;
  /** slug de l'outil B ; si absent du registre, fallback obligatoire. */
  outilBslug: string;
  outilBfallback?: PhantomOutil;
  hero: {
    h1: string;
    tagline: string;
    tempsLecture: number;
    lastCheck: string;
  };
  verdictRapide: {
    headline: ReactNode;
    paragraphs: ReactNode[];
  };
  criteres: {
    label: string;
    poids: number;
    scoreA: number;
    scoreB: number;
    gagnant: "A" | "B";
  }[];
  porQuiA: string[];
  porQuiB: string[];
  casUsage: {
    profil: string;
    description: string;
    gagnant: "A" | "B";
  }[];
  verdictFinal: {
    headline: ReactNode;
    paragraph: ReactNode;
    ctaGagnant: "A" | "B";
    ctaText: string;
  };
  faq: { question: string; answer: ReactNode }[];
}

export default function ComparatifLayout({ data }: { data: ComparatifData }) {
  const outilA = getOutil(data.outilAslug);
  const outilBReal = getOutil(data.outilBslug);
  if (!outilA) throw new Error(`Outil A introuvable : ${data.outilAslug}`);

  const A = {
    slug: outilA.slug,
    name: outilA.name,
    color: outilA.color,
    score: outilA.score,
    tagline: outilA.tagline,
    priceFrom: outilA.priceFrom,
    freeTier: outilA.freeTier,
    ficheAvailable: outilA.ficheAvailable,
  };
  const B = outilBReal
    ? {
        slug: outilBReal.slug,
        name: outilBReal.name,
        color: outilBReal.color,
        score: outilBReal.score,
        tagline: outilBReal.tagline,
        priceFrom: outilBReal.priceFrom,
        freeTier: outilBReal.freeTier,
        ficheAvailable: true,
      }
    : {
        slug: data.outilBslug,
        name: data.outilBfallback!.name,
        color: data.outilBfallback!.color,
        score: data.outilBfallback!.score,
        tagline: data.outilBfallback!.tagline,
        priceFrom: data.outilBfallback!.priceFrom,
        freeTier: data.outilBfallback!.freeTier,
        ficheAvailable: false,
      };

  const hexA = colorHex(A.color);
  const hexB = colorHex(B.color);

  const cta = data.verdictFinal.ctaGagnant === "A" ? A : B;
  // Récupère le vrai outil gagnant depuis le registre pour avoir
  // son affiliateLink (les phantoms B sans fiche n'en ont pas).
  const ctaOutil = cta.ficheAvailable ? getOutil(cta.slug) : undefined;

  // JSON-LD
  const faqSchema = getFaqPageSchema(data.faq);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Comparatifs", url: "/" },
    { name: `${A.name} vs ${B.name}` },
  ]);

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <Nav ctaHref="#verdict" />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300">
            Accueil
          </Link>
          <span>›</span>
          <span>Comparatifs</span>
          <span>›</span>
          <span className="text-slate-300">
            {A.name} vs {B.name}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5 tracking-tight">
          <span className={`text-${A.color}-400`}>{A.name}</span> vs{" "}
          <span className={`text-${B.color}-400`}>{B.name}</span> :{" "}
          {data.hero.h1}
        </h1>
        <div className="mb-6">
          <AuthorByline
            lastCheck={data.hero.lastCheck}
            subtitle="Comparateur indépendant · Méthodologie en 6 critères"
          />
        </div>
        <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl">
          {data.hero.tagline}
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 border-t border-slate-800 pt-6">
          <div>
            <span className="text-slate-400">Temps de lecture :</span>{" "}
            {data.hero.tempsLecture} min
          </div>
          <div>
            <span className="text-slate-400">Dernière vérification :</span>{" "}
            {data.hero.lastCheck}
          </div>
        </div>
      </section>

      {/* VERDICT RAPIDE */}
      <section id="verdict" className="max-w-5xl mx-auto px-6 pb-16">
        <div
          className={`bg-gradient-to-br from-${A.color}-500/10 to-${B.color}-500/5 border border-${A.color}-500/20 rounded-2xl p-8 md:p-10`}
        >
          <div className={`text-sm font-semibold text-${A.color}-400 uppercase tracking-wider mb-3`}>
            Le verdict rapide
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            {data.verdictRapide.headline}
          </h2>
          {data.verdictRapide.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-300 leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* SCORING COTE-A-COTE */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className={`text-sm font-semibold text-${A.color}-400 uppercase tracking-wider mb-3`}>
            Scores éditoriaux Filtrio
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">La note, par critère.</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <OutilScoreCard data={A} hex={hexA} highlight />
            <OutilScoreCard data={B} hex={hexB} />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
            <h3 className="font-bold mb-6 text-lg">Détail par critère</h3>
            <div className="space-y-5">
              {data.criteres.map((cr) => (
                <div key={cr.label}>
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <span className="font-semibold">
                      {cr.label}{" "}
                      <span className="text-slate-500 font-normal">
                        ({cr.poids}%)
                      </span>
                    </span>
                    <span
                      className={`text-xs font-semibold text-${cr.gagnant === "A" ? A.color : B.color}-400`}
                    >
                      {cr.gagnant === "A" ? A.name : B.name} gagne
                    </span>
                  </div>
                  <div className="space-y-2">
                    <ScoreBar name={A.name} score={cr.scoreA} hex={hexA} isWinner={cr.gagnant === "A"} color={A.color} />
                    <ScoreBar name={B.name} score={cr.scoreB} hex={hexB} isWinner={cr.gagnant === "B"} color={B.color} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 space-y-2">
              <p>
                <strong className="text-slate-300">Phase actuelle (V1) :</strong>{" "}
                scores basés sur analyse documentaire et retours publics.
              </p>
              <p>
                <strong className="text-slate-300">Phase à venir :</strong>{" "}
                protocole de test comparatif standardisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMANDATION POR QUI */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className={`text-sm font-semibold text-${A.color}-400 uppercase tracking-wider mb-3`}>
          Recommandation directe
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">Tu devrais prendre…</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <PorQuiCard
            name={A.name}
            color={A.color}
            items={data.porQuiA}
            href={A.ficheAvailable ? `/outils/${A.slug}` : undefined}
            buttonText={`Voir la fiche ${A.name} →`}
          />
          <PorQuiCard
            name={B.name}
            color={B.color}
            items={data.porQuiB}
            href={B.ficheAvailable ? `/outils/${B.slug}` : undefined}
            buttonText={`Voir la fiche ${B.name} →`}
          />
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className={`text-sm font-semibold text-${A.color}-400 uppercase tracking-wider mb-3`}>
            Cas d&apos;usage concrets
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Lequel selon ton profil.</h2>
          <div className="space-y-4">
            {data.casUsage.map((cu, i) => {
              const winner = cu.gagnant === "A" ? A : B;
              return (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-${winner.color}-500/10 flex items-center justify-center flex-shrink-0 text-${winner.color}-400 font-bold`}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">{cu.profil}</h3>
                      <p className="text-slate-400 mb-3">{cu.description}</p>
                      <div
                        className={`inline-flex items-center gap-2 bg-${winner.color}-500/10 text-${winner.color}-400 text-sm font-semibold px-3 py-1.5 rounded-lg`}
                      >
                        Prends {winner.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VERDICT FINAL */}
      <section className="border-y border-slate-800 bg-gradient-to-b from-slate-900/40 to-emerald-500/5">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Verdict final
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            {data.verdictFinal.headline}
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {data.verdictFinal.paragraph}
          </p>
          {ctaOutil ? (
            <TrackedAffiliateLink
              href={ctaOutil.affiliateLink}
              outilSlug={ctaOutil.slug}
              outilName={ctaOutil.name}
              source="comparatif"
              className={`inline-block bg-${cta.color}-500 hover:bg-${cta.color}-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition text-lg`}
            >
              {data.verdictFinal.ctaText}
            </TrackedAffiliateLink>
          ) : (
            <Link
              href={`/outils/${cta.slug}`}
              className={`inline-block bg-${cta.color}-500 hover:bg-${cta.color}-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition text-lg`}
            >
              {data.verdictFinal.ctaText}
            </Link>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className={`text-sm font-semibold text-${A.color}-400 uppercase tracking-wider mb-3`}>
          FAQ
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">
          Les questions qui reviennent.
        </h2>
        <div className="space-y-4">
          {data.faq.map((q) => (
            <details
              key={q.question}
              className={`group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-${A.color}-500/30`}
            >
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                <span>{q.question}</span>
                <span className="faq-chevron transition-transform" style={{ color: hexA }}>
                  +
                </span>
              </summary>
              <div className="text-slate-400 mt-4 leading-relaxed">{q.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <AuthorBio />
      <Newsletter />
      <Footer />
    </>
  );
}

/* ---------- Sous-composants ---------- */

function OutilScoreCard({
  data,
  hex,
  highlight,
}: {
  data: {
    slug: string;
    name: string;
    color: TailwindColor;
    score: number;
    tagline: string;
    priceFrom?: string;
    freeTier?: string;
  };
  hex: string;
  highlight?: boolean;
}) {
  const pct = Math.round(data.score * 10);
  const borderClass = highlight ? `border-${data.color}-500/30` : `border-${data.color}-500/30`;
  return (
    <div className={`bg-slate-900 border ${borderClass} rounded-2xl p-6 relative`}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs text-slate-500 uppercase tracking-wider">
            {highlight ? "Outil A" : "Outil B"}
          </div>
          <h3 className={`text-2xl font-bold text-${data.color}-400`}>{data.name}</h3>
        </div>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: `conic-gradient(${hex} ${pct}%, #1e293b 0)` }}
        >
          <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center">
            <span className={`text-lg font-bold text-${data.color}-400`}>
              {data.score.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-400 mb-5">{data.tagline}</div>
      <div className="flex gap-4 text-xs text-slate-500 pt-4 border-t border-slate-800">
        {data.priceFrom && (
          <div>
            <span className="text-slate-300 font-semibold">{data.priceFrom}</span>
          </div>
        )}
        {data.freeTier && (
          <>
            <div>·</div>
            <div>{data.freeTier}</div>
          </>
        )}
      </div>
    </div>
  );
}

function ScoreBar({
  name,
  score,
  hex,
  isWinner,
  color,
}: {
  name: string;
  score: number;
  hex: string;
  isWinner: boolean;
  color: TailwindColor;
}) {
  const pct = Math.round(score * 10);
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-slate-500 w-20">{name}</span>
      <div
        className="flex-1 bar"
        style={{
          ["--w" as string]: pct,
          ["--bar-color" as string]: hex,
        }}
      />
      <span
        className={`text-xs font-semibold w-8 text-right ${isWinner ? `text-${color}-400` : "text-slate-300"}`}
      >
        {score.toFixed(1)}
      </span>
    </div>
  );
}

function PorQuiCard({
  name,
  color,
  items,
  href,
  buttonText,
}: {
  name: string;
  color: TailwindColor;
  items: string[];
  href?: string;
  buttonText: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br from-${color}-500/10 to-${color}-500/5 border border-${color}-500/30 rounded-2xl p-8`}
    >
      <h3 className={`text-2xl font-bold mb-4 text-${color}-400`}>{name} si…</h3>
      <ul className="space-y-3 text-slate-300">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className={`text-${color}-400 mt-0.5`}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {href ? (
        <Link
          href={href}
          className={`mt-8 inline-flex items-center gap-2 bg-${color}-500 hover:bg-${color}-400 text-slate-950 font-semibold px-5 py-3 rounded-lg transition`}
        >
          {buttonText}
        </Link>
      ) : (
        <span
          className={`mt-8 inline-flex items-center gap-2 bg-${color}-500/20 text-${color}-400 border border-${color}-500/40 px-5 py-3 rounded-lg text-sm`}
        >
          Fiche {name} à venir
        </span>
      )}
    </div>
  );
}

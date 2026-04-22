import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ScoreRing, { colorHex } from "@/components/ScoreRing";
import { getOutil, getOutilOrThrow, type TailwindColor } from "@/lib/outils";

export interface FicheData {
  slug: string;
  hero: {
    h1: string;
    tagline: string;
    badges: { label: string; tone?: "primary" | "accent" | "neutral" }[];
    origine?: string;
    depuis?: string;
    langue?: string;
    tempsLecture: number;
    lastCheck: string;
  };
  verdict30s: { question: string; answer: ReactNode }[];
  porQui: string[];
  pasPourQui: ReactNode[];
  scoring: {
    label: string;
    poids: number;
    score: number;
    commentaire: string;
  }[];
  fonctionnalites?: { titre: string; description: string }[];
  plans?: {
    nom: string;
    prix: string;
    prixSub?: string;
    features: string[];
    cible?: string;
  }[];
  alternatives: { slug: string; comment: string }[];
  faq: { question: string; answer: ReactNode }[];
  ctaFinal: { headline: string; sub: string; buttonText: string };
}

function badgeClasses(color: TailwindColor, tone: "primary" | "accent" | "neutral") {
  if (tone === "neutral") return "bg-slate-800 text-slate-400";
  if (tone === "accent") return "bg-emerald-500/10 text-emerald-400";
  return `bg-${color}-500/10 text-${color}-400`;
}

export default function FicheOutilLayout({ data }: { data: FicheData }) {
  const outil = getOutilOrThrow(data.slug);
  const hex = colorHex(outil.color);
  const c = outil.color;

  return (
    <>
      <Nav ctaHref="#cta-final" />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300">
            Accueil
          </Link>
          <span>›</span>
          <span>Outils</span>
          <span>›</span>
          <span className="text-slate-300">{outil.name}</span>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <ScoreRing score={outil.score} color={outil.color} size="lg" />
            <div className="text-xs text-slate-500 mt-3">Score éditorial Filtrio</div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {data.hero.badges.map((b) => (
                <span
                  key={b.label}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClasses(c, b.tone ?? "primary")}`}
                >
                  {b.label}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4 tracking-tight">
              {data.hero.h1}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-6">
              {data.hero.tagline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6 bg-slate-900/40 border border-slate-800 rounded-xl p-5">
              {outil.priceFrom && (
                <FactCell label="Prix" value={outil.priceFrom} />
              )}
              {outil.freeTier && (
                <FactCell label="Essai" value={outil.freeTier} />
              )}
              {data.hero.langue && (
                <FactCell label="Langue" value={data.hero.langue} />
              )}
              {!data.hero.langue && data.hero.origine && (
                <FactCell label="Origine" value={data.hero.origine} />
              )}
              {!data.hero.langue && data.hero.depuis && (
                <FactCell label="Depuis" value={data.hero.depuis} />
              )}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="#cta-final"
                className={`bg-${c}-500 hover:bg-${c}-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition`}
              >
                Essayer {outil.name}
              </Link>
              <Link
                href="#verdict"
                className="border border-slate-700 hover:border-slate-600 px-6 py-3 rounded-lg transition"
              >
                Lire le verdict
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-slate-500 border-t border-slate-800 pt-6 mt-8">
          <div>
            <span className="text-slate-400">Auteur :</span> Équipe Filtrio
          </div>
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

      {/* VERDICT 30S */}
      <section id="verdict" className="max-w-5xl mx-auto px-6 pb-16">
        <div
          className={`bg-gradient-to-br from-${c}-500/10 to-emerald-500/5 border border-${c}-500/20 rounded-2xl p-8 md:p-10`}
        >
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-6`}>
            Le verdict en 30 secondes
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {data.verdict30s.map((qa) => (
              <div key={qa.question}>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  {qa.question}
                </div>
                <div className="text-slate-100 leading-relaxed">{qa.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI / PAS POUR QUI */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
          Recommandation directe
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">
          Prends {outil.name} si… évite-le si…
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className={`bg-gradient-to-br from-${c}-500/10 to-${c}-500/5 border border-${c}-500/30 rounded-2xl p-8`}
          >
            <h3 className={`text-xl font-bold mb-5 text-${c}-400`}>✓ Prends-le si</h3>
            <ul className="space-y-3 text-slate-300">
              {data.porQui.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className={`text-${c}-400 mt-0.5`}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-5 text-rose-400">✗ Évite-le si</h3>
            <ul className="space-y-3 text-slate-300">
              {data.pasPourQui.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-rose-400 mt-0.5">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SCORING */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            Scoring éditorial Filtrio
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">La note détaillée, 6 critères.</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              {data.scoring.map((cr) => (
                <div key={cr.label}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-semibold">{cr.label}</span>
                      <span className="text-slate-500 text-sm ml-2">
                        Pondération {cr.poids}%
                      </span>
                    </div>
                    <span
                      className={`text-2xl font-bold text-${c}-400`}
                      style={{ color: hex }}
                    >
                      {cr.score.toFixed(1)}
                    </span>
                  </div>
                  <div
                    className="bar mb-2"
                    style={{
                      ["--w" as string]: Math.round(cr.score * 10),
                      ["--bar-color" as string]: hex,
                    }}
                  />
                  <p className="text-sm text-slate-300">{cr.commentaire}</p>
                </div>
              ))}
            </div>
            <MethodologyNote />
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS (optionnel) */}
      {data.fonctionnalites && data.fonctionnalites.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            Fonctionnalités principales
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Ce que {outil.name} sait faire.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.fonctionnalites.map((f) => (
              <div
                key={f.titre}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <h3 className="font-bold mb-2">{f.titre}</h3>
                <p className="text-slate-400 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PLANS (optionnel) */}
      {data.plans && data.plans.length > 0 && (
        <section className="border-y border-slate-800 bg-slate-900/40">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
              Plans &amp; tarifs
            </div>
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Combien ça coûte.</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {data.plans.map((p) => (
                <div
                  key={p.nom}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col"
                >
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                    {p.nom}
                  </div>
                  <div className="mb-2">
                    <div
                      className="text-3xl font-bold leading-none"
                      style={{ color: hex }}
                    >
                      {p.prix}
                    </div>
                    {p.prixSub && (
                      <div className="text-xs text-slate-500 mt-1">
                        {p.prixSub}
                      </div>
                    )}
                  </div>
                  {p.cible && (
                    <div className="text-xs text-slate-500 mb-4">{p.cible}</div>
                  )}
                  <ul className="text-sm text-slate-300 space-y-1">
                    {p.features.map((ft, i) => (
                      <li key={i}>— {ft}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALTERNATIVES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
          Alternatives
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">
          Si {outil.name} ne te convient pas.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {data.alternatives.map((alt) => {
            const other = getOutil(alt.slug);
            if (!other) {
              // Outil hors registre : carte grisée
              return (
                <div
                  key={alt.slug}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 opacity-70"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-300">{alt.slug}</h3>
                    <span className="text-xs bg-slate-800 text-slate-500 px-2 py-0.5 rounded">
                      Fiche à venir
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{alt.comment}</p>
                </div>
              );
            }
            return (
              <Link
                key={alt.slug}
                href={`/outils/${other.slug}`}
                className={`bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-${other.color}-500/40 transition group`}
              >
                <h3
                  className={`text-xl font-bold mb-2 group-hover:text-${other.color}-400 transition`}
                >
                  {other.name}
                </h3>
                <div className="text-sm text-slate-500 mb-3">
                  Score éditorial Filtrio : {other.score.toFixed(1)} / 10
                </div>
                <p className="text-slate-400 text-sm mb-4">{alt.comment}</p>
                <div className={`text-xs text-${other.color}-400 font-medium`}>
                  Voir la fiche complète →
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            FAQ
          </div>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">
            Les questions qui reviennent.
          </h2>
          <div className="space-y-4">
            {data.faq.map((q) => (
              <details
                key={q.question}
                className={`group bg-slate-900 border border-slate-800 rounded-xl p-6 open:border-${c}-500/30`}
              >
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  <span>{q.question}</span>
                  <span
                    className={`faq-chevron text-${c}-400 transition-transform`}
                    style={{ color: hex }}
                  >
                    +
                  </span>
                </summary>
                <div className="text-slate-300 mt-4 leading-relaxed">{q.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="cta-final"
        className={`border-y border-slate-800 bg-gradient-to-b from-slate-900/40 to-${c}-500/5`}
      >
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className={`text-sm font-semibold text-${c}-400 uppercase tracking-wider mb-3`}>
            Passer à l&apos;action
          </div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            {data.ctaFinal.headline}
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {data.ctaFinal.sub}
          </p>
          <a
            href={outil.affiliateLink}
            rel="sponsored nofollow"
            className={`inline-block bg-${c}-500 hover:bg-${c}-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition text-lg`}
          >
            {data.ctaFinal.buttonText} →
          </a>
          <p className="text-xs text-slate-500 mt-6 max-w-lg mx-auto">
            Ce lien est affilié. Si tu t&apos;abonnes, on touche une commission —
            sans que cela change jamais notre classement.
          </p>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

function FactCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}

function MethodologyNote() {
  return (
    <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 space-y-2">
      <p>
        <strong className="text-slate-300">Phase actuelle (V1) :</strong> scores
        basés sur analyse documentaire approfondie, compilation de retours
        utilisateurs publics (G2, Trustpilot, Reddit, doc officielle) et prise
        en main des plans gratuits.
      </p>
      <p>
        <strong className="text-slate-300">Phase à venir :</strong> protocole de
        test comparatif standardisé avec sources vidéo identiques selon les cas
        d&apos;usage.
      </p>
    </div>
  );
}

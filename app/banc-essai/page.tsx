import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBio } from "@/components/AuthorBio";

const LAST_UPDATED = "24/08/2026";

export const metadata: Metadata = {
  title: "Banc d'essai : 3 outils vidéo IA testés sur le même fichier",
  description:
    "OpusClip, Submagic et CapCut passés au même fichier vidéo français, réglages par défaut, comptes gratuits. Temps, format affiché, export gratuit : les résultats en un tableau.",
  alternates: { canonical: "https://www.filtrio.fr/banc-essai" },
  openGraph: {
    title: "Banc d'essai Filtrio : 3 outils vidéo IA sur le même fichier",
    description:
      "Résultats bruts de nos tests de première main, sur une vidéo source libre que tu peux retélécharger.",
    type: "article",
  },
};

/** Une ligne = un outil réellement manipulé. Aucune valeur estimée ni déduite. */
const RESULTATS = [
  {
    outil: "OpusClip",
    slug: "opusclip",
    couleur: "emerald",
    date: "21/08/2026",
    temps: "≈ 2 min 30",
    format: "9:16 vertical, recadrage automatique",
    export: "Oui, fichier livré avec filigrane",
    exportOk: true,
    erreurs: "Aucune erreur relevée sur les passages contrôlés",
  },
  {
    outil: "Submagic",
    slug: "submagic",
    couleur: "amber",
    date: "21/08/2026",
    temps: "≈ 2 min 30",
    format: "16:9, format de la source conservé",
    export: "Non, abonnement demandé à l'export",
    exportOk: false,
    erreurs: "Aucune erreur relevée sur les passages contrôlés",
  },
  {
    outil: "CapCut Desktop",
    slug: "capcut",
    couleur: "sky",
    date: "24/08/2026",
    temps: "< 1 min",
    format: "16:9, format de la source conservé",
    export: "Non avec les légendes automatiques, classées Pro",
    exportOk: false,
    erreurs: "2 erreurs visibles à l'image, non quantifiées",
  },
];

export default function BancEssaiPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Banc d'essai" },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumb]} />
      <Nav />

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300">
            Accueil
          </Link>
          <span>›</span>
          <span className="text-slate-300">Banc d&apos;essai</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5 tracking-tight">
          Banc d&apos;essai Filtrio : 3 outils vidéo IA testés sur le même
          fichier
        </h1>
        <div className="mb-6">
          <AuthorByline
            lastCheck={LAST_UPDATED}
            subtitle="Tests de première main · Protocole public"
          />
        </div>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Cette page rassemble les résultats bruts de nos manipulations. Elle ne
          remplace pas les tests détaillés : elle en donne le sommaire chiffré,
          et renvoie vers les preuves.
        </p>
      </section>

      {/* PROTOCOLE */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">
            Le protocole, en cinq lignes.
          </h2>
          <ul className="space-y-3 text-slate-300 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">
                  Le même fichier source
                </strong>{" "}
                pour les trois outils : un entretien de 1 min 17 en français,
                plan fixe, 720p, sous licence libre.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">
                  Un compte gratuit de chaque côté
                </strong>
                , aucun essai payant activé, même quand il était proposé.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">
                  Les réglages par défaut
                </strong>{" "}
                et aucune retouche manuelle : ce qui est comparé, c&apos;est le
                rendu automatique.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">
                  Temps chronométré
                </strong>{" "}
                de l&apos;envoi au résultat affiché, et limites du plan gratuit
                relevées telles qu&apos;elles s&apos;affichent à l&apos;écran.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">
                  Captures conservées
                </strong>
                , y compris celles que nous ne publions pas.
              </span>
            </li>
          </ul>
          <p className="text-sm text-slate-400 leading-relaxed mt-6 pt-6 border-t border-slate-800">
            <strong className="text-slate-300">
              Une précision de date qui compte.
            </strong>{" "}
            Les trois outils ont reçu le même fichier, mais pas le même jour :
            OpusClip et Submagic ont été testés le 21 août 2026 lors d&apos;une
            même session, CapCut le 24 août 2026, soit trois jours plus tard. Ce
            n&apos;est donc pas une manipulation simultanée.
          </p>
        </div>
      </section>

      {/* TABLEAU */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-3 tracking-tight">
          Les résultats.
        </h2>
        <p className="text-slate-400 mb-8">
          Trois outils manipulés à ce jour. Le tableau s&apos;allongera à chaque
          nouveau test, à cette même adresse.
        </p>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm border-collapse min-w-[820px]">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 pr-4 font-semibold text-slate-400">
                  Outil
                </th>
                <th className="text-left py-3 px-3 font-semibold text-slate-400">
                  Date du test
                </th>
                <th className="text-left py-3 px-3 font-semibold text-slate-400">
                  Temps de traitement
                </th>
                <th className="text-left py-3 px-3 font-semibold text-slate-400">
                  Format affiché par défaut
                </th>
                <th className="text-left py-3 px-3 font-semibold text-slate-400">
                  Export sur le plan gratuit
                </th>
                <th className="text-left py-3 pl-3 font-semibold text-slate-400">
                  Erreurs de transcription
                </th>
              </tr>
            </thead>
            <tbody>
              {RESULTATS.map((r) => (
                <tr
                  key={r.slug}
                  className="border-b border-slate-800 align-top"
                >
                  <td className="py-4 pr-4">
                    <Link
                      href={`/outils/${r.slug}`}
                      className={`font-bold text-${r.couleur}-400 hover:underline`}
                    >
                      {r.outil}
                    </Link>
                  </td>
                  <td className="py-4 px-3 text-slate-400 whitespace-nowrap">
                    {r.date}
                  </td>
                  <td className="py-4 px-3 text-slate-200 whitespace-nowrap">
                    {r.temps}
                  </td>
                  <td className="py-4 px-3 text-slate-200 leading-relaxed">
                    {r.format}
                  </td>
                  <td
                    className={`py-4 px-3 leading-relaxed ${r.exportOk ? "text-emerald-400 font-medium" : "text-slate-200"}`}
                  >
                    {r.export}
                  </td>
                  <td className="py-4 pl-3 text-slate-400 leading-relaxed">
                    {r.erreurs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold mb-3">Comment lire ce tableau</h3>
          <ul className="space-y-2 text-sm text-slate-400 leading-relaxed">
            <li>
              <strong className="text-slate-300">
                « Format affiché par défaut »
              </strong>{" "}
              désigne ce que l&apos;outil montrait à l&apos;écran après
              traitement. Seul OpusClip nous a livré un fichier : pour les deux
              autres, c&apos;est un aperçu, pas un export.
            </li>
            <li>
              <strong className="text-slate-300">
                « Aucune erreur relevée sur les passages contrôlés »
              </strong>{" "}
              ne signifie pas zéro erreur sur toute la vidéo. Nous n&apos;avons
              calculé aucun taux : nous signalons uniquement ce qui était
              directement lisible à l&apos;image.
            </li>
            <li>
              <strong className="text-slate-300">
                Le blocage de CapCut porte sur une fonction précise
              </strong>{" "}
              — l&apos;écran d&apos;export nomme les « légendes automatiques »
              et ne liste rien d&apos;autre. Rien n&apos;indique que
              l&apos;export soit payant en soi ; nous ne l&apos;avons pas testé
              sans cette fonction.
            </li>
          </ul>
        </div>
      </section>

      {/* SOURCE */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            La vidéo source, librement téléchargeable.
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Le test n&apos;a d&apos;intérêt que si tu peux le refaire. La source
            est publiée sous licence Creative Commons Attribution, donc
            téléchargeable et réutilisable par n&apos;importe qui :
          </p>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <a
              href="https://tubedu.org/videos/watch/9aba92da-0f91-44cf-9904-31a66a722413"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold"
            >
              « Sciences ensemble », interview de Laure Turcati →
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mt-3 mb-0">
              MOOC Science Ouverte (Alliance Sorbonne Université), 3 mars 2022,
              publiée sur TubEdu sous licence CC BY 4.0. Entretien de 1 min 17
              en français, plan fixe, 720p. Sous-titres français rédigés à la
              main disponibles sur la page source.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITES */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">
          Ce que ce banc d&apos;essai ne prouve pas.
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            <strong className="text-slate-100">Une seule vidéo.</strong> 1 min
            17, un plan fixe, une seule voix, en français. Un plan fixe est un
            exercice facile pour un recadrage automatique : n&apos;en conclus
            rien sur des séquences avec mouvement ou plusieurs intervenants.
          </p>
          <p>
            <strong className="text-slate-100">
              Les réglages par défaut uniquement.
            </strong>{" "}
            Chaque outil propose des dizaines d&apos;options que nous
            n&apos;avons pas activées. Elles apparaissent dans les tests
            détaillés, signalées comme observées et non testées, mais elles ne
            sont pas évaluées.
          </p>
          <p>
            <strong className="text-slate-100">
              Aucun taux d&apos;erreur calculé.
            </strong>{" "}
            Les erreurs citées sont des exemples vérifiables sur les captures,
            pas une statistique. Nous ne publions aucun pourcentage de
            précision, ni le nôtre ni celui affiché par les éditeurs.
          </p>
          <p>
            <strong className="text-slate-100">
              Ces tests ne modifient aucune note.
            </strong>{" "}
            Les scores publiés sur les fiches restent issus de notre analyse
            documentaire. Une manipulation sur une vidéo ne suffit pas à faire
            bouger une grille de notation, et nous ne l&apos;utilisons jamais
            pour justifier après coup une note déjà publiée.
          </p>
        </div>
      </section>

      {/* LIENS VERS LES PREUVES */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">
            Les tests détaillés.
          </h2>
          <p className="text-slate-400 mb-8">
            Chaque manipulation est documentée capture par capture, avec la
            distinction entre ce qui a été utilisé, ce qui a seulement été
            observé, et ce qui est payant.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Link
              href="/outils/opusclip"
              className="block bg-slate-950 border border-emerald-500/30 hover:border-emerald-500 rounded-xl p-6 transition"
            >
              <div className="font-bold text-emerald-400 mb-2">
                Test OpusClip →
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-0">
                Catalogue d&apos;outils, import, réglage de langue, actions sur
                le clip et rendu vertical livré. Le clip exporté est
                consultable.
              </p>
            </Link>
            <Link
              href="/outils/submagic"
              className="block bg-slate-950 border border-amber-500/30 hover:border-amber-500 rounded-xl p-6 transition"
            >
              <div className="font-bold text-amber-400 mb-2">
                Test Submagic →
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-0">
                Génération, rendu, éditeur, styles, scènes, outils d&apos;IA
                avec leur coût en crédits, audio, miniature et export.
              </p>
            </Link>
            <Link
              href="/outils/capcut"
              className="block bg-slate-950 border border-sky-500/30 hover:border-sky-500 rounded-xl p-6 transition"
            >
              <div className="font-bold text-sky-400 mb-2">
                Test CapCut Desktop →
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-0">
                Vingt-quatre captures commentées en langage simple, et le
                diamant violet qui signale les fonctions réservées au Pro.
              </p>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/comparatifs/opusclip-vs-submagic"
              className="block bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl p-5 transition"
            >
              <div className="font-semibold text-slate-200 mb-1">
                Comparatif OpusClip vs Submagic →
              </div>
              <p className="text-sm text-slate-400 mb-0">
                Le duel complet, avec les notes éditoriales et le bloc de test.
              </p>
            </Link>
            <Link
              href="/comparatifs/submagic-vs-capcut"
              className="block bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl p-5 transition"
            >
              <div className="font-semibold text-slate-200 mb-1">
                Comparatif Submagic vs CapCut →
              </div>
              <p className="text-sm text-slate-400 mb-0">
                Le spécialiste des sous-titres face à l&apos;éditeur complet.
              </p>
            </Link>
          </div>

          <p className="text-sm text-slate-500 mt-8">
            Notre{" "}
            <Link href="/methode" className="text-emerald-400 hover:underline">
              méthode complète
            </Link>{" "}
            détaille comment les notes éditoriales sont établies, et pourquoi un
            test isolé ne les modifie pas.
          </p>
        </div>
      </section>

      {/* MISE À JOUR */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-sm text-slate-500">
          Dernière mise à jour de cette page :{" "}
          <strong className="text-slate-300">{LAST_UPDATED}</strong>. Elle est
          complétée à chaque nouvel outil testé, à cette même adresse. Les
          données sont librement citables avec un lien vers cette page.
        </p>
      </section>

      <AuthorBio />
      <Newsletter />
      <Footer />
    </>
  );
}

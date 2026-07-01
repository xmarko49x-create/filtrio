import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { JsonLd } from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getFaqPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBio } from "@/components/AuthorBio";
import { OUTILS, CATEGORIE_LABELS } from "@/lib/outils";

const LAST_UPDATED = "16/06/2026";

export const metadata: Metadata = {
  title: "Observatoire des prix des outils IA vidéo, édition juin 2026",
  description:
    "Les prix réels de 18 outils IA vidéo (Submagic, OpusClip, ElevenLabs, HeyGen, Runway...) relevés sur les pages officielles et datés. Devises, pièges mensuel vs annuel, modèles à crédits : ce que les pages tarifs ne montrent pas.",
  alternates: {
    canonical: "https://www.filtrio.fr/observatoire-prix",
  },
};

/** Date de dernière vérification du prix, par fiche (reprise des fiches publiées). */
const VERIF_DATES: Record<string, string> = {
  submagic: "16/06/2026",
  opusclip: "16/06/2026",
  tubebuddy: "23/04/2026",
  canva: "23/04/2026",
  runway: "23/04/2026",
  descript: "28/05/2026",
  elevenlabs: "16/06/2026",
  davinci: "22/04/2026",
  synthesia: "23/04/2026",
  riverside: "23/04/2026",
  vidiq: "23/04/2026",
  heygen: "23/04/2026",
  capcut: "23/04/2026",
  veed: "23/04/2026",
  invideo: "22/04/2026",
  kapwing: "22/04/2026",
  pictory: "06/05/2026",
  pika: "06/05/2026",
};

const FAQ = [
  {
    question: "D'où viennent ces prix ?",
    answer:
      "Chaque prix est relevé manuellement sur la page tarifs officielle de l'outil, avec sa devise et son cycle de facturation, à la date indiquée dans la colonne « Vérifié le ». Quand un prix n'est pas vérifiable proprement, on l'écrit (« voir tarifs officiels ») plutôt que de l'inventer. La méthode complète est décrite sur notre page Méthode.",
  },
  {
    question: "Quels outils affichent leurs prix en euros ?",
    answer:
      "Certains outils affichent directement des prix en euros depuis la France, comme Submagic, Synthesia ou Veed. D'autres restent en dollars, notamment plusieurs outils américains de génération vidéo, de voix IA ou de montage. CapCut fait exception : son offre gratuite est visible, mais le tarif Pro peut varier selon le pays, l'appareil ou le canal d'abonnement.",
  },
  {
    question: "Pourquoi le prix affiché n'est-il pas celui que je paierai ?",
    answer:
      "Parce que la quasi-totalité des outils affichent par défaut le tarif avec engagement annuel. En facturation mensuelle sans engagement, le même plan coûte sensiblement plus cher : sur les exemples que nous avons vérifiés, l'écart va d'environ +21 % à +100 % selon l'outil. Le détail est dans la section « Le piège mensuel vs annuel » ci-dessus.",
  },
  {
    question: "À quelle fréquence ces données sont-elles mises à jour ?",
    answer:
      "Les prix sont re-vérifiés régulièrement, fiche par fiche, et chaque vérification est datée individuellement (colonne « Vérifié le »). Cette page se met à jour automatiquement dès qu'un prix change dans nos fiches. Avant toute souscription, vérifie toujours la page tarifs officielle de l'outil : les tarifs SaaS évoluent vite.",
  },
  {
    question: "Puis-je réutiliser ces données dans un article ou une vidéo ?",
    answer:
      "Oui. Ces données sont librement citables dans la presse, les blogs, les newsletters et les vidéos, à une condition simple : mentionner la source avec un lien vers cette page (filtrio.fr/observatoire-prix). Pour toute question ou demande de données complémentaires : contact@filtrio.fr.",
  },
];

/** Exemples mensuel vs annuel vérifiés sur les pages officielles (fiches Filtrio). */
const ECARTS_MENSUEL_ANNUEL = [
  {
    outil: "OpusClip",
    plan: "Pro",
    annuel: "14,50 $/mois",
    mensuel: "29 $/mois",
    ecart: "+100 %",
  },
  {
    outil: "Submagic",
    plan: "Starter",
    annuel: "12 €/mois",
    mensuel: "19 €/mois",
    ecart: "+58 %",
  },
  {
    outil: "Descript",
    plan: "Hobbyist",
    annuel: "16 $/mois",
    mensuel: "24 $/mois",
    ecart: "+50 %",
  },
  {
    outil: "Riverside",
    plan: "Pro",
    annuel: "24 $/mois",
    mensuel: "29 $/mois",
    ecart: "+21 %",
  },
];

export default function ObservatoirePrixPage() {
  const outilsTries = [...OUTILS].sort((a, b) => b.score - a.score);

  return (
    <>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getFaqPageSchema(FAQ),
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Observatoire des prix" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "Observatoire des prix des outils IA vidéo",
            description:
              "Prix d'entrée, devise, offre gratuite et date de vérification de 18 outils IA pour créateurs vidéo, relevés sur les pages tarifs officielles.",
            url: "https://www.filtrio.fr/observatoire-prix",
            creator: {
              "@type": "Organization",
              name: "Filtrio",
              url: "https://www.filtrio.fr",
            },
            dateModified: "2026-06-10",
            inLanguage: "fr",
            isAccessibleForFree: true,
          },
        ]}
      />

      <Nav />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-[60%] w-[560px] h-[560px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-10">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Données vérifiées · Édition juin 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Observatoire des prix des outils IA vidéo.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
            Le prix affiché sur une page tarifs n&apos;est pas toujours le prix
            réellement payé. Devises en dollars, engagement annuel par défaut,
            modèles à crédits : voici les tarifs réels de 18 outils IA vidéo,
            relevés un par un sur les pages officielles, avec leur date de
            vérification.
          </p>
          <AuthorByline
            lastCheck={LAST_UPDATED}
            subtitle="Comparateur indépendant · Prix relevés sur les pages officielles"
          />
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-1">12 / 18</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              outils facturent en <strong className="text-slate-100">dollars US</strong>.
              Le montant débité en euros dépend du taux de change et des
              éventuels frais bancaires.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-1">+21 % à +100 %</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              c&apos;est le surcoût du <strong className="text-slate-100">même plan</strong>{" "}
              en facturation mensuelle plutôt qu&apos;annuelle, sur les
              exemples vérifiés ci-dessous.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-1">14 / 18</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              outils proposent une <strong className="text-slate-100">version gratuite durable</strong>.
              2 n&apos;offrent qu&apos;un essai limité, 2 n&apos;ont aucune
              offre gratuite.
            </p>
          </div>
        </div>
      </section>

      {/* TABLEAU PRINCIPAL */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          Les prix d&apos;entrée des 18 outils.
        </h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          Prix d&apos;entrée de gamme tel qu&apos;affiché sur la page tarifs
          officielle (généralement en facturation annuelle). Classement par
          score éditorial Filtrio. Chaque fiche détaille tous les plans.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-left text-slate-300">
                <th className="px-4 py-3 font-semibold">Outil</th>
                <th className="px-4 py-3 font-semibold">Catégorie</th>
                <th className="px-4 py-3 font-semibold">Prix d&apos;entrée affiché</th>
                <th className="px-4 py-3 font-semibold">Offre gratuite</th>
                <th className="px-4 py-3 font-semibold">Vérifié le</th>
              </tr>
            </thead>
            <tbody>
              {outilsTries.map((o) => (
                <tr
                  key={o.slug}
                  className="border-t border-slate-800 hover:bg-slate-900/50"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/outils/${o.slug}`}
                      className="font-semibold text-emerald-400 hover:underline"
                    >
                      {o.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    {CATEGORIE_LABELS[o.category]}
                  </td>
                  <td className="px-4 py-3 text-slate-200">
                    {o.priceFrom ?? "Voir tarifs officiels"}
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    {o.freeTier && o.freeTier.length > 0
                      ? o.freeTier
                      : "Aucune"}
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {VERIF_DATES[o.slug] ?? "Voir fiche"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Les tarifs SaaS évoluent vite : avant toute souscription, vérifie la
          page officielle de l&apos;outil. Si tu repères un écart, écris-nous
          à contact@filtrio.fr, on corrige.
        </p>
      </section>

      {/* CONSTATS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Ce que les pages tarifs ne montrent pas.
        </h2>

        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              1. Le piège mensuel vs annuel.
            </h3>
            <p className="text-slate-300 leading-relaxed mb-5">
              Le prix mis en avant correspond souvent à un engagement
              annuel. Le même plan, payé au mois sans engagement, coûte
              nettement plus cher. Quatre exemples vérifiés sur les pages
              officielles :
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-950 text-left text-slate-300">
                    <th className="px-4 py-2.5 font-semibold">Outil · plan</th>
                    <th className="px-4 py-2.5 font-semibold">Affiché (annuel)</th>
                    <th className="px-4 py-2.5 font-semibold">Réel en mensuel</th>
                    <th className="px-4 py-2.5 font-semibold">Écart</th>
                  </tr>
                </thead>
                <tbody>
                  {ECARTS_MENSUEL_ANNUEL.map((e) => (
                    <tr key={e.outil} className="border-t border-slate-800">
                      <td className="px-4 py-2.5 text-slate-200 font-medium">
                        {e.outil} · {e.plan}
                      </td>
                      <td className="px-4 py-2.5 text-slate-400">{e.annuel}</td>
                      <td className="px-4 py-2.5 text-slate-200">{e.mensuel}</td>
                      <td className="px-4 py-2.5 font-bold text-rose-400">{e.ecart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              2. Deux tiers des prix sont en dollars.
            </h3>
            <p className="text-slate-300 leading-relaxed">
              La majorité des outils du panel affichent leurs tarifs en dollars
              US. Pour un créateur qui paie en euros, le montant réellement
              débité dépend du taux de change du jour et des éventuels frais de
              ta banque. Quelques outils affichent directement des prix en euros
              depuis la France, comme Submagic, Synthesia, VidIQ, Veed et Canva.
              CapCut fait exception : l&apos;offre gratuite est visible, mais le
              tarif Pro peut varier selon le pays, l&apos;appareil ou le canal
              d&apos;abonnement. À budget serré, c&apos;est un critère de choix
              à part entière.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              3. Le modèle à crédits remplace peu à peu l&apos;illimité.
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Au moins 6 outils du panel (ElevenLabs, Runway, Synthesia,
              InVideo, Pika, et Submagic pour ses fonctions IA avancées)
              fonctionnent partiellement ou totalement avec des crédits
              mensuels ou annuels. Conséquence : le prix d&apos;abonnement ne
              suffit plus à prévoir le coût réel, qui dépend de ton volume de
              production. Avant de t&apos;engager, estime ton usage mensuel et
              vérifie ce qu&apos;un crédit permet réellement de produire chez
              l&apos;outil concerné.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              4. « Gratuit » recouvre trois réalités différentes.
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Sur les 18 outils : 14 proposent une version gratuite utilisable
              dans la durée (dont 2 outils intégralement gratuits dans leur
              version de base, CapCut et DaVinci Resolve), 2 n&apos;offrent
              qu&apos;un essai limité qui se consomme vite (Submagic, Pictory),
              et 2 n&apos;ont aucune offre gratuite (TubeBuddy, InVideo). Si tu
              veux tester sérieusement avant de payer, cette distinction
              change tout. Pour Submagic en particulier, des options gratuites
              ou moins chères existent : on les compare sur notre page{" "}
              <Link
                href="/comparatifs/alternatives-a-submagic"
                className="text-emerald-400 hover:underline"
              >
                alternatives à Submagic
              </Link>
              .
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              5. Un écart de 1 à 7 sur l&apos;entrée de gamme.
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Hors outils gratuits et achat unique, le premier plan payant va
              de 3,99 $/mois (TubeBuddy) à 29 $/mois (HeyGen). Un écart de
              plus de 1 à 7 pour des pages d&apos;accueil qui promettent
              souvent la même chose. Le prix ne dit rien de la valeur pour TON
              usage : c&apos;est exactement ce que nos{" "}
              <Link href="/outils" className="text-emerald-400 hover:underline">
                fiches
              </Link>{" "}
              et{" "}
              <Link href="/#comparatifs" className="text-emerald-400 hover:underline">
                comparatifs
              </Link>{" "}
              départagent, critère par critère.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              6. Le prix d&apos;entrée moyen : environ 12,80 € ou 15,60 $ par mois.
            </h3>
            <p className="text-slate-300 leading-relaxed">
              En isolant les seuls abonnements mensuels d&apos;entrée de gamme
              (hors plans annuels, hors achat unique, hors promotions), le
              premier palier payant revient en moyenne à{" "}
              <strong className="text-slate-100">environ 12,80 € par mois</strong>{" "}
              pour les outils facturés en euros, et{" "}
              <strong className="text-slate-100">environ 15,60 $ par mois</strong>{" "}
              pour ceux facturés en dollars. Un repère utile, mais à manier avec
              prudence : la moyenne écrase les écarts (de 3,99 $ à 29 $) et ne
              dit rien des modèles à crédits, où le coût réel dépend de ton
              volume de production.
            </p>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-7">
          <h2 className="text-xl font-bold mb-3 text-emerald-300">
            Ces données sont librement citables.
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Journaliste, blogueur, créateur de newsletter ou vidéaste : tu
            peux réutiliser ces chiffres et ces tableaux librement, avec une
            mention de la source et un lien vers cette page
            (filtrio.fr/observatoire-prix). Besoin d&apos;un détail, d&apos;une
            vérification ou d&apos;un angle spécifique ? Écris-nous :
            contact@filtrio.fr, réponse généralement sous 24h.
          </p>
        </div>
      </section>

      {/* METHODO */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-5">
          Comment ces prix sont relevés.
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mb-4">
          Chaque prix est vérifié manuellement sur la page tarifs officielle
          de l&apos;outil, avec trois contrôles systématiques : le montant
          exact, la devise, et le cycle de facturation (mensuel ou annuel).
          Chaque vérification est datée, fiche par fiche. Quand une donnée
          n&apos;est pas vérifiable proprement, on écrit « voir tarifs
          officiels » plutôt que d&apos;inventer un chiffre.
        </p>
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          Certains liens de Filtrio sont affiliés, et cela ne change ni les
          prix relevés ni le classement éditorial : la grille de notation est
          publique sur la{" "}
          <Link href="/methode" className="text-emerald-400 hover:underline">
            page Méthode
          </Link>
          , et la transparence sur l&apos;affiliation est détaillée sur la{" "}
          <Link
            href="/a-propos#transparence"
            className="text-emerald-400 hover:underline"
          >
            page À propos
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Les questions qu&apos;on nous pose.
        </h2>
        <div className="space-y-4">
          {FAQ.map((q, i) => (
            <details
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 cursor-pointer"
            >
              <summary className="font-semibold text-slate-100">
                {q.question}
              </summary>
              <p className="mt-3 text-slate-300 leading-relaxed">{q.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <AuthorBio />
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

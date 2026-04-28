import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Filtrio",
  description:
    "Informations légales du site Filtrio : éditeur, hébergeur, propriété intellectuelle, données personnelles, affiliation.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Nav />

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6">
          Informations légales
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-10 tracking-tight">
          Mentions légales
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
          <p className="text-slate-300 leading-relaxed">
            Filtrio est un projet indépendant édité par Marc Devillers.
          </p>
          <p className="text-slate-300 leading-relaxed mt-2">
            Contact :{" "}
            <a
              href="mailto:contact@filtrio.fr"
              className="text-emerald-400 hover:text-emerald-300"
            >
              contact@filtrio.fr
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
          <p className="text-slate-300 leading-relaxed">
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA. Infrastructure CDN globale.
          </p>
          <p className="text-slate-300 leading-relaxed mt-2">
            Le nom de domaine <code className="text-emerald-400">filtrio.fr</code>{" "}
            est enregistré auprès d&apos;Infomaniak Network SA (Suisse).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
          <p className="text-slate-300 leading-relaxed">
            Les contenus rédactionnels, analyses, scorings et mises en page du
            site sont la propriété de Filtrio et protégés par le droit
            d&apos;auteur. Les marques, logos et noms de produits cités
            appartiennent à leurs propriétaires respectifs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Données personnelles</h2>
          <p className="text-slate-300 leading-relaxed mb-3">
            Filtrio ne collecte aucune donnée personnelle via des formulaires
            publics au-delà de l&apos;adresse email si elle est volontairement
            fournie pour la newsletter. Aucune revente, aucun partage à des
            tiers à des fins commerciales.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Conformément au RGPD, tu peux demander à tout moment la
            consultation, la modification ou la suppression de tes données en
            écrivant à{" "}
            <a
              href="mailto:contact@filtrio.fr"
              className="text-emerald-400 hover:text-emerald-300"
            >
              contact@filtrio.fr
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Cookies et analytics</h2>
          <p className="text-slate-300 leading-relaxed">
            Le site peut utiliser des outils de mesure d&apos;audience
            (statistiques de visite) respectueux de la vie privée. Aucune
            publicité personnalisée n&apos;est affichée.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Affiliation</h2>
          <p className="text-slate-300 leading-relaxed">
            Certains liens vers des outils cités sont des liens affiliés. Cela
            signifie que Filtrio peut recevoir une commission si un visiteur
            s&apos;inscrit via ces liens, sans coût supplémentaire pour le
            visiteur. La rémunération affiliée ne biaise pas le classement
            éditorial des outils. Les scores sont attribués avant tout calcul
            de commission. Plus de détails sur la{" "}
            <a
              href="/a-propos#transparence"
              className="text-emerald-400 hover:text-emerald-300"
            >
              page À propos
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Responsabilité éditoriale</h2>
          <p className="text-slate-300 leading-relaxed">
            Les analyses, scorings et avis publiés sur Filtrio sont basés sur
            une méthodologie explicite présentée sur la{" "}
            <a
              href="/methode"
              className="text-emerald-400 hover:text-emerald-300"
            >
              page Méthode
            </a>
            . Les informations sont fournies à titre indicatif. Les tarifs,
            fonctionnalités et disponibilités des outils cités peuvent évoluer.
            Il est recommandé de vérifier directement sur le site officiel de
            chaque outil avant toute décision d&apos;achat.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Droit applicable</h2>
          <p className="text-slate-300 leading-relaxed">
            Les présentes mentions sont régies par le droit français. Tout
            litige relatif à leur interprétation ou leur exécution relève de la
            compétence des tribunaux français.
          </p>
        </section>

        <p className="text-sm text-slate-500 mt-12">
          Dernière mise à jour : avril 2026.
        </p>
      </section>

      <Footer />
    </>
  );
}

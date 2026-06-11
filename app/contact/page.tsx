import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question sur un outil, un prix à corriger, une demande presse ou partenariat ? Écris à contact@filtrio.fr, réponse sous 24h.",
  alternates: {
    canonical: "https://www.filtrio.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-[60%] w-[560px] h-[560px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Contact.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Filtrio fonctionne par écrit, simplement. Un email, une réponse
            sous 24h. Pas de formulaire, pas de chatbot.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 mb-8">
            <div className="text-sm text-slate-500 mb-2">Adresse unique</div>
            <a
              href="mailto:contact@filtrio.fr"
              className="text-2xl font-bold text-emerald-400 hover:underline"
            >
              contact@filtrio.fr
            </a>
            <p className="text-sm text-slate-400 mt-3">
              Réponse sous 24h, 7 jours sur 7.
            </p>
          </div>

          <h2 className="text-xl font-bold mb-4">On peut t&apos;aider sur :</h2>
          <ul className="space-y-3 mb-10 text-slate-300">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">Un prix ou une info à corriger.</strong>{" "}
                Tu as repéré un écart entre une de nos fiches et la page
                officielle d&apos;un outil ? Dis-le-nous, on vérifie et on
                corrige.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">Presse, blogs, newsletters.</strong>{" "}
                Les données de l&apos;
                <Link
                  href="/observatoire-prix"
                  className="text-emerald-400 hover:underline"
                >
                  Observatoire des prix
                </Link>{" "}
                sont librement citables avec un lien. Besoin d&apos;un chiffre
                précis ou de la méthodologie ? On répond vite.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">Éditeurs d&apos;outils.</strong>{" "}
                Lancement, changement de prix, nouvelle fonctionnalité :
                signale-le, on met la fiche à jour. Aucun placement payant,
                jamais : la{" "}
                <Link href="/methode" className="text-emerald-400 hover:underline">
                  méthode
                </Link>{" "}
                est publique.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-0.5">·</span>
              <span>
                <strong className="text-slate-100">Une question d&apos;outil.</strong>{" "}
                Tu hésites entre deux outils pour ton cas précis ? Regarde
                d&apos;abord les{" "}
                <Link
                  href="/comparatifs"
                  className="text-emerald-400 hover:underline"
                >
                  comparatifs
                </Link>
                , et si ton cas n&apos;y est pas, écris-nous.
              </span>
            </li>
          </ul>

          <p className="text-sm text-slate-500">
            Filtrio est édité par Marc Devillers.{" "}
            <Link href="/a-propos" className="text-emerald-400 hover:underline">
              En savoir plus sur le site et sa ligne éditoriale
            </Link>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

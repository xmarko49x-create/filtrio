import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="text-7xl font-bold text-emerald-400 mb-6">404</div>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Cette page n&apos;existe pas.
        </h1>
        <p className="text-slate-400 text-lg mb-10">
          Peut-être une fiche pas encore publiée, ou un lien cassé. On retourne
          au catalogue ?
        </p>
        <Link
          href="/"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
        >
          Retour à l&apos;accueil
        </Link>
      </section>
      <Footer />
    </>
  );
}

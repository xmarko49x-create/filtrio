export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="border-t border-slate-800 bg-gradient-to-b from-slate-900/40 to-emerald-500/5"
    >
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
          Newsletter
        </div>
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Les 5 outils IA qui comptent, chaque semaine.
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Un email court, le mardi matin.
        </p>
        <form className="flex gap-2 max-w-md mx-auto" action="#" method="post">
          <input
            type="email"
            name="email"
            required
            placeholder="ton@email.fr"
            className="flex-1 bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg px-4 py-3 text-sm outline-none transition"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-3 rounded-lg transition whitespace-nowrap"
          >
            S&apos;abonner
          </button>
        </form>
      </div>
    </section>
  );
}

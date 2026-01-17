const highlights = [
  "Experimental copy testing",
  "Structure and framing iterations",
  "Non-production staging space",
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-slate-900 to-fuchsia-600">
      <div className="min-h-screen bg-slate-950/80">
        <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-10 px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">
            Intervention v1
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Human Copy – Intervention
          </h1>
          <p className="text-lg text-slate-200 sm:text-xl">
            This is an experimental variant. Not the live site.
          </p>
          <section className="rounded-3xl border border-emerald-400/40 bg-slate-950/70 p-8 text-left shadow-2xl shadow-emerald-500/20">
            <h2 className="text-base font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Why it exists
            </h2>
            <ul className="mt-6 space-y-4 text-base text-slate-100">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-emerald-200">
            <span>Separated from human-copy-com</span>
            <span className="text-slate-400">Do not treat as production.</span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

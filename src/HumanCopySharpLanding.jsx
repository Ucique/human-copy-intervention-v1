import React, { useState } from "react";
import logoMarkUrl from "../assets/img/logo-mark.png";
import portraitUrl from "../assets/img/portrait-charlotte.jpg";

export default function HumanCopySharpLanding({ onOpenSettings }) {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formState === "loading") {
      return;
    }

    setFormState("loading");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xeeegdre", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        event.currentTarget.reset();
        setFormState("success");
        return;
      }
    } catch {
      // fall through to set error state
    }

    setFormState("error");
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-200 selection:text-zinc-950"
    >
      {/* Top hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />

      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        {/* NAV / HEADER */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoMarkUrl}
              alt="Human Copy Logo"
              className="h-5 w-auto opacity-90"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200">
              human-copy
            </span>
          </div>

          <a
            href="#einreichen"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200 hover:text-zinc-50"
          >
            Text einreichen
          </a>
        </nav>

        {/* HERO – INTERVENTION ganz oben */}
        <header className="mt-16 sm:mt-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Dein KI-Text ist nicht falsch.
              <br />
              Er ist wirkungslos.
            </h1>

            <p className="mt-6 text-lg text-zinc-200">
              Nicht die KI ist das Problem.
              <br />
              Sondern dass niemand entscheidet, was der Text sagen darf.
            </p>

            <p className="mt-8 text-base text-zinc-100">
              Ich greife in KI-Texte ein.
              <br />
              Ich streiche, ändere, stoppe – bis wieder jemand liest.
            </p>

            <div className="mt-10">
              <a
                href="#einreichen"
                className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
              >
                Schick mir den Text, bei dem du selbst hängenbleibst.
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />
        </header>

        <div className="mt-16 flex flex-col gap-16">
          <section className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-100">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                Warum KI-Texte scheitern
              </h2>
              <p>Die meisten KI-Texte sind nicht schlecht. Sie sind belanglos.</p>
              <p>Wenn alles erklärt wird, bleibt nichts hängen.</p>
              <p>Ich optimiere keine Texte. Ich greife ein.</p>
            </div>

            <aside className="lg:sticky lg:top-8">
              <div className="rounded-[28px] border border-zinc-200/15 bg-zinc-900/25 p-6 backdrop-blur">
                <div className="flex items-center gap-5">
                  <img
                    src={portraitUrl}
                    alt="Charlotte Portrait"
                    className="h-24 w-24 rounded-2xl object-cover ring-1 ring-zinc-200/10"
                  />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                      Portrait von Charlotte
                    </div>
                    <div className="text-sm text-zinc-400">Human Copy</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-100">
                  <p>
                    Ich arbeite nicht mit Menschen,
                    <br />
                    die Integrität als Accessoire tragen.
                  </p>
                  <p className="font-semibold text-zinc-50">
                    Ich poliere keine Worte.
                    <br />
                    Ich reiße ihnen die Maske ab.
                  </p>
                </div>
              </div>
            </aside>
          </section>

          <section>
            <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 text-lg leading-relaxed text-zinc-100 backdrop-blur sm:px-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                Beobachtungen
              </h2>
              <div className="mt-6 space-y-4">
                <p>
                  Der letzte Text war korrekt. Danach wurde er zu Ende gelesen.
                </p>
                <p>
                  Oft reicht ein gestrichener Absatz, damit ein Text atmet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 backdrop-blur sm:px-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                Wie es abläuft
              </h2>

              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                <div className="space-y-3">
                  <div className="text-3xl font-semibold text-zinc-50">1</div>
                  <p className="text-base text-zinc-100">
                    Du schickst mir Text oder Link. <br />
                    KI oder eigener Entwurf. <br />
                    Landingpage, About, Angebotsseite.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-semibold text-zinc-50">2</div>
                  <p className="text-base text-zinc-100">
                    Ich lese. Ich entscheide.
                    <br />
                    Wo du dich drückst. Wo du „klingst“. Wo du wirkst.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-semibold text-zinc-50">3</div>
                  <p className="text-base text-zinc-100">
                    Du bekommst mein Urteil.
                    <br />
                    Kurz. Direkt. Mit nächstem Schritt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="einreichen">
            <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 backdrop-blur sm:px-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                Text einreichen
              </h2>

              <p className="mt-6 text-lg text-zinc-100">
                Schick mir den Text, bei dem du selbst hängenbleibst.
              </p>

              <form
                className="mt-8 grid gap-6"
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xeeegdre"
                method="POST"
              >
                <input type="hidden" name="variant" value="intervention-v1" />
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <label className="grid gap-2 text-sm text-zinc-300">
                  Name (optional)
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="rounded-2xl border border-zinc-200/10 bg-zinc-950/60 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-200/30 focus:outline-none"
                    placeholder="Dein Name"
                  />
                </label>

                <label className="grid gap-2 text-sm text-zinc-300">
                  E-Mail
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="rounded-2xl border border-zinc-200/10 bg-zinc-950/60 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-200/30 focus:outline-none"
                    placeholder="name@email.com"
                  />
                </label>

                <label className="grid gap-2 text-sm text-zinc-300">
                  Link zum Text / Website (optional)
                  <input
                    type="url"
                    name="link"
                    autoComplete="url"
                    className="rounded-2xl border border-zinc-200/10 bg-zinc-950/60 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-200/30 focus:outline-none"
                    placeholder="https://..."
                  />
                </label>

                <label className="grid gap-2 text-sm text-zinc-300">
                  Worum geht's? (optional)
                  <input
                    type="text"
                    name="subject"
                    className="rounded-2xl border border-zinc-200/10 bg-zinc-950/60 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-200/30 focus:outline-none"
                    placeholder="Kurzbeschreibung"
                  />
                </label>

                <label className="grid gap-2 text-sm text-zinc-300">
                  Text / Kontext
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="rounded-2xl border border-zinc-200/10 bg-zinc-950/60 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-200/30 focus:outline-none"
                    placeholder="Worum geht es? Link, Text oder Kontext."
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={formState === "loading"}
                  >
                    {formState === "loading"
                      ? "Sende ..."
                      : "Schick mir den Text, bei dem du selbst hängenbleibst."}
                  </button>

                  {formState === "success" && (
                    <p className="text-sm text-zinc-200">
                      Danke. Ich melde mich.
                    </p>
                  )}
                  {formState === "error" && (
                    <p className="text-sm text-zinc-400">
                      Fehler beim Senden. Bitte später nochmal.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* FOOTER (wie jetzt) */}
        <footer className="mt-16 pb-10">
          <div className="flex flex-col gap-4 text-center text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-3 text-zinc-300 sm:items-start">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <a href="#impressum" className="hover:text-zinc-50">
                  Impressum
                </a>
                <span aria-hidden="true">·</span>
                <a href="#datenschutz" className="hover:text-zinc-50">
                  Datenschutz
                </a>
              </div>
              <button
                type="button"
                onClick={onOpenSettings}
                className="hover:text-zinc-50"
              >
                Cookie-Einstellungen
              </button>
            </div>
            <div className="flex justify-center sm:justify-end">
              <img
                src={logoMarkUrl}
                alt="Human Copy Logo"
                className="h-6 w-auto opacity-80"
              />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

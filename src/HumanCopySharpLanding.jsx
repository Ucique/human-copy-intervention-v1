import React, { useState } from "react";
import logoMarkUrl from "../assets/img/logo-mark.png";
import portraitUrl from "../assets/img/portrait-charlotte.jpg";

export default function HumanCopySharpLanding() {
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
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-50" />
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
              INTERVENTION
            </h1>

            <p className="mt-6 text-lg text-zinc-200">
              Für Menschen mit Außenwirkung,
              <br />
              deren Texte sich anfühlen
              <br />
              wie ein perfekt gebügelter Leichensack.
            </p>

            <div className="mt-8 space-y-2 text-base text-zinc-100">
              <p>Radikale Streichung.</p>
              <p>Neue Sprache.</p>
              <p>Kein Schonraum.</p>
            </div>

            <p className="mt-8 text-base text-zinc-100">
              Wenn du dich ertappt fühlst
              <br />
              und trotzdem grinst,
              <br />
              schreib mir.
            </p>

            <div className="mt-10">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />
        </header>

        {/* Direkt darunter (statt deiner jetzigen Einleitung) */}
        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="max-w-3xl space-y-9 text-lg leading-relaxed text-zinc-100">
            <p className="text-zinc-50">
              Man riecht es.
              <br />
              Wie Parfum über kaltem Schweiß.
            </p>

            <p className="text-zinc-100">
              Wenn du das unangenehm findest:
              <br />
              Glückwunsch. Dein Gewissen lebt noch.
            </p>

            <p>
              Du bist sichtbar.
              <br />
              Du wirst zitiert.
              <br />
              Und deine Texte klingen, als hätten sie einen Pressesprecher – aber
              keinen Puls.
            </p>

            <p>
              Dein Image läuft geschniegelt über die Bühne.
              <br />
              Deine Haltung raucht draußen hinter dem Theater.
            </p>

            <p>
              KI war nicht der Fehler.
              <br />
              Sie war nur der perfekte Alibi-Zeuge.
              <br />
              Sauber. Höflich. Immer bereit zu sagen: „Ich war’s.“
            </p>

            <p>
              Texte ohne Risiko sind wie Bio-Fleisch aus dem Labor:
              <br />
              ethisch verpackt,
              <br />
              geschmacklich tot.
            </p>

            <p>
              Oberflächlichkeit ist kein Stil mehr.
              <br />
              Sie ist ein Geruch.
            </p>

            <p>
              Und Unechtheit hat keine Zukunft –
              <br />
              sie recycelt sich nur selbst,
              <br />
              bis niemand mehr hinschaut.
            </p>
          </div>

          {/* Profilbild-Block (wie aktuell rechts/unter dem Formular) */}
          <aside className="lg:sticky lg:top-8">
            <div className="rounded-[28px] border border-zinc-200/15 bg-zinc-900/25 p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <img
                  src={portraitUrl}
                  alt="Charlotte Portrait"
                  className="h-14 w-14 rounded-2xl object-cover ring-1 ring-zinc-200/10"
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

        {/* Formular */}
        <section id="einreichen" className="mt-20">
          <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 backdrop-blur sm:px-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Text einreichen / Kontakt
            </h2>

            <p className="mt-6 text-lg text-zinc-100">
              Schick mir deinen Text oder Link. Ich melde mich mit der nächsten
              Entscheidung.
            </p>

            <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
              <input type="hidden" name="page_variant" value="intervention-v1" />

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
                Text / Link / Nachricht
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
                  {formState === "loading" ? "Sende ..." : "Text einreichen"}
                </button>

                {formState === "success" && (
                  <p className="text-sm text-zinc-200">Danke. Ich melde mich.</p>
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

        {/* Abschnitt „Wie es abläuft“ */}
        <section className="mt-20">
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

        {/* Hauptangebot-Block */}
        <section id="intervention" className="mt-20">
          <div className="rounded-[28px] border border-zinc-200/15 bg-zinc-50 px-7 py-10 text-zinc-950 shadow-[0_40px_140px_-110px_rgba(255,255,255,0.55)] sm:px-10">
            <h2 className="text-2xl font-semibold tracking-tight">INTERVENTION</h2>

            <p className="mt-5 text-lg text-zinc-800">
              Für Menschen mit Außenwirkung,
              <br />
              deren Texte sich anfühlen
              <br />
              wie ein perfekt gebügelter Leichensack.
            </p>

            <div className="mt-8 space-y-2 text-base text-zinc-800">
              <p>Radikale Streichung.</p>
              <p>Neue Sprache.</p>
              <p>Kein Schonraum.</p>
            </div>

            <p className="mt-8 text-base text-zinc-800">
              Wenn du dich ertappt fühlst
              <br />
              und trotzdem grinst,
              <br />
              schreib mir.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-zinc-50 hover:bg-black"
              >
                Kontakt
              </a>
              <p className="text-xs text-zinc-500">
                Keine Pakete. Kein Smalltalk. Nur Eingriff.
              </p>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="mt-20">
          <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 backdrop-blur sm:px-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Kontakt
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-relaxed text-zinc-100">
              <p className="font-semibold text-zinc-50">hello@human-copy.com</p>
              <p className="text-zinc-300 italic">Betreff: Intervention</p>

              <div className="mt-8 space-y-2">
                <p>Human Copy.</p>
                <p>Sprache ist Verantwortung.</p>
                <p>Und Verantwortung ist nichts für Feiglinge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER (wie jetzt) */}
        <footer className="mt-16 pb-10">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-zinc-400 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 text-zinc-300 sm:justify-start">
              <img
                src={logoMarkUrl}
                alt="Human Copy Logo"
                className="h-6 w-auto opacity-80"
              />
              <a href="#top" className="hover:text-zinc-50">
                Zurück nach oben
              </a>
              <span aria-hidden="true">·</span>
              <a href="/impressum.html" className="hover:text-zinc-50">
                Impressum
              </a>
              <span aria-hidden="true">·</span>
              <a href="/datenschutz.html" className="hover:text-zinc-50">
                Datenschutz
              </a>
              <span aria-hidden="true">·</span>
              <a href="#" className="hover:text-zinc-50">
                Cookie-Einstellungen
              </a>
            </div>
            <a
              href="#top"
              className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200 hover:text-zinc-50"
            >
              ↑
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

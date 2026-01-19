import React, { useEffect, useMemo, useState } from "react";
import logoMarkUrl from "../assets/img/logo-mark.png";
import portraitUrl from "../assets/img/portrait-charlotte.jpg";

export default function HumanCopySharpLanding() {
  const [formState, setFormState] = useState("idle");
  const [consent, setConsent] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const hasConsent = useMemo(() => consent !== null, [consent]);

  useEffect(() => {
    const stored = localStorage.getItem("hc_consent");
    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (typeof parsed?.analytics === "boolean") {
        setConsent(parsed);
        setAnalyticsEnabled(parsed.analytics);
      }
    } catch {
      // ignore invalid storage
    }
  }, []);

  useEffect(() => {
    if (!consent?.analytics) {
      return;
    }

    if (window.gtag) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-2DBL2MMR17";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    window.gtag("js", new Date());
    window.gtag("config", "G-2DBL2MMR17");
  }, [consent]);

  const updateConsent = (nextConsent) => {
    setConsent(nextConsent);
    setAnalyticsEnabled(nextConsent.analytics);
    localStorage.setItem("hc_consent", JSON.stringify(nextConsent));
  };

  const impressumBlocks = [
    "Anbieter / Anschrift\n" +
      "Human Copy\n" +
      "Charlotte Grude\n" +
      "Seestraße 118\n" +
      "13353 Berlin\n" +
      "Germany",
    "Kontakt\n" + "Kontakt:\n" + "E-Mail: hello@human-copy.com",
    "Umsatzsteuer\n" +
      "Umsatzsteuer:\n" +
      "Gemäß § 19 UStG wird keine Umsatzsteuer erhoben (Kleinunternehmerregelung).",
    "Verantwortlichkeit nach MStV\n" +
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:\n" +
      "Human Copy",
    "Haftung für Inhalte\n" +
      "Haftung für Inhalte\n" +
      "Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.\n" +
      "Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
    "Haftung für Links\n" +
      "Haftung für Links\n" +
      "Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.\n" +
      "Für diese fremden Inhalte wird keine Gewähr übernommen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
    "Urheberrecht\n" +
      "Urheberrecht\n" +
      "Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.\n" +
      "Die Vervielfältigung, Bearbeitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.",
  ];

  const datenschutzBlocks = [
    "Verantwortliche Stelle\n" + "Verantwortliche: human-copy",
    "Hosting über GitHub Pages\n" +
      "Diese Website wird über GitHub Pages (GitHub, Inc.) bereitgestellt. Beim Aufruf werden durch GitHub serverseitige Logfiles (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, User-Agent) verarbeitet, um die Website bereitzustellen und zu sichern.",
    "Kontaktaufnahme\n" +
      "Wenn du mich per E-Mail oder Kontaktformular kontaktierst, werden die von dir übermittelten Daten (z. B. Name, E-Mail-Adresse, Inhalte der Nachricht) zur Bearbeitung deiner Anfrage verarbeitet.",
    "Für die Formularübermittlung nutzen wir Formspree als Auftragsverarbeiter. Verarbeitet werden insbesondere Name, E-Mail-Adresse, Inhalte der Nachricht sowie ggf. weitere von dir angegebene Felder. Zweck ist die Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation). Die Daten werden gelöscht, sobald die Kommunikation abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    "Cookies & Einwilligung\n" +
      "Für Statistikzwecke werden Cookies oder ähnliche Technologien nur nach deiner Einwilligung gesetzt oder ausgelesen. Notwendige Funktionen bleiben davon unberührt.",
    "Google Analytics (nur nach Einwilligung)\n" +
      "Wir verwenden Google Analytics 4, um die Nutzung der Website zu messen und zu optimieren. Die Verarbeitung erfolgt erst, nachdem du über das Consent-Banner zugestimmt hast.\n" +
      "\n" +
      "Du kannst deine Einwilligung jederzeit über den Link Cookie-Einstellungen widerrufen oder ändern.\n" +
      "\n" +
      "GA4 Measurement ID: G-2DBL2MMR17",
    "Empfänger & Drittlandtransfer\n" +
      "Bei Nutzung von Dienstleistern (z. B. GitHub, Google, Formspree) können Daten in die USA übermittelt werden. Soweit erforderlich, erfolgt die Übermittlung auf Basis von Standardvertragsklauseln der EU-Kommission bzw. geeigneten Garantien.",
    "Speicherdauer\n" +
      "Kontaktdaten werden nur so lange gespeichert, wie es zur Bearbeitung der Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
    "Betroffenenrechte\n" +
      "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit. Eine Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.",
    "Beschwerderecht\n" +
      "Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten zu beschweren.",
  ];

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

        <div className="mt-16 flex flex-col gap-16">
          {/* Formular */}
          <section id="einreichen" className="order-1 md:order-2">
            <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 backdrop-blur sm:px-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                Text einreichen / Kontakt
              </h2>

              <p className="mt-6 text-lg text-zinc-100">
                Schick mir deinen Text oder Link. Ich melde mich mit der
                nächsten Entscheidung.
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
                    {formState === "loading" ? "Sende ..." : "Text einreichen"}
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

          {/* Abschnitt „Wie es abläuft“ */}
          <section className="order-2 md:order-3">
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

          {/* Direkt darunter (statt deiner jetzigen Einleitung) */}
          <section className="order-3 grid gap-10 lg:grid-cols-[1fr_320px] md:order-1">
            {/* Profilbild-Block (wie aktuell rechts/unter dem Formular) */}
            <aside className="lg:sticky lg:top-8 lg:col-start-2">
              <div className="rounded-[28px] border border-zinc-200/15 bg-zinc-900/25 p-6 backdrop-blur">
                <div className="flex items-center gap-5">
                  <img
                    src={portraitUrl}
                    alt="Charlotte Portrait"
                    className="h-20 w-20 rounded-2xl object-cover ring-1 ring-zinc-200/10"
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

            <div className="max-w-3xl space-y-9 text-lg leading-relaxed text-zinc-100 lg:col-start-1">
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
                Und deine Texte klingen, als hätten sie einen Pressesprecher –
                aber keinen Puls.
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
          </section>
        </div>

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

        <section id="impressum" className="mt-20">
          <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 text-sm text-zinc-100 backdrop-blur sm:px-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Impressum
            </h2>

            <div className="mt-6 space-y-6 leading-relaxed text-zinc-200">
              {impressumBlocks.map((block) => (
                <p key={block} className="whitespace-pre-line">
                  {block}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="datenschutz" className="mt-20">
          <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 text-sm text-zinc-100 backdrop-blur sm:px-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Datenschutz
            </h2>

            <div className="mt-6 space-y-6 leading-relaxed text-zinc-200">
              {datenschutzBlocks.map((block) => (
                <p key={block} className="whitespace-pre-line">
                  {block}
                </p>
              ))}
              <p className="whitespace-pre-line">Stand: 09. Januar 2026</p>
            </div>
          </div>
        </section>

        {/* FOOTER (wie jetzt) */}
        <footer className="mt-16 pb-10">
          <div className="flex flex-col gap-4 text-center text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 text-zinc-300 sm:justify-start">
              <a href="#top" className="hover:text-zinc-50">
                Zurück nach oben
              </a>
              <span aria-hidden="true">·</span>
              <a href="#impressum" className="hover:text-zinc-50">
                Impressum
              </a>
              <span aria-hidden="true">·</span>
              <a href="#datenschutz" className="hover:text-zinc-50">
                Datenschutz
              </a>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className="hover:text-zinc-50"
              >
                Cookie-Einstellungen
              </button>
              <span aria-hidden="true">·</span>
              <a
                href="#top"
                className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200 hover:text-zinc-50"
              >
                ↑
              </a>
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

      {!hasConsent && (
        <div className="fixed inset-x-4 bottom-6 z-50 rounded-[24px] border border-zinc-200/10 bg-zinc-900/95 p-6 text-sm text-zinc-200 shadow-xl backdrop-blur sm:inset-x-auto sm:right-6 sm:max-w-md">
          <p className="text-zinc-100">
            Wir verwenden Cookies für Statistikzwecke nur mit deiner
            Einwilligung.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => updateConsent({ analytics: true })}
              className="rounded-full bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-white"
            >
              Alle akzeptieren
            </button>
            <button
              type="button"
              onClick={() => updateConsent({ analytics: false })}
              className="rounded-full border border-zinc-200/20 px-4 py-2 text-xs font-semibold text-zinc-200 hover:border-zinc-200/40"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => setIsSettingsOpen(true)}
              className="rounded-full border border-zinc-200/20 px-4 py-2 text-xs font-semibold text-zinc-200 hover:border-zinc-200/40"
            >
              Einstellungen
            </button>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsSettingsOpen(false)}
          />
          <div className="relative w-full max-w-lg rounded-[28px] border border-zinc-200/10 bg-zinc-900/95 p-6 text-sm text-zinc-200 backdrop-blur">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Cookie-Einstellungen
            </h3>
            <p className="mt-4 text-zinc-100">
              Entscheide, ob wir Analytics-Cookies setzen dürfen.
            </p>

            <label className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-zinc-200/10 bg-zinc-950/60 px-4 py-3">
              <span className="text-sm text-zinc-100">Analytics</span>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                className="h-4 w-4 accent-zinc-50"
              />
            </label>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  updateConsent({ analytics: analyticsEnabled });
                  setIsSettingsOpen(false);
                }}
                className="rounded-full bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-white"
              >
                Speichern
              </button>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                className="rounded-full border border-zinc-200/20 px-4 py-2 text-xs font-semibold text-zinc-200 hover:border-zinc-200/40"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

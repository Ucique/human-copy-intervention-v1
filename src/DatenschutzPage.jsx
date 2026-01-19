import React from "react";
import logoMarkUrl from "../assets/img/logo-mark.png";

export const datenschutzBlocks = [
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

export default function DatenschutzPage({ onOpenSettings }) {
  return (
    <div
      id="top"
      className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-200 selection:text-zinc-950"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />

      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
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
            href="../"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200 hover:text-zinc-50"
          >
            Zurück zur Startseite
          </a>
        </nav>

        <section className="mt-16">
          <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 text-sm text-zinc-100 backdrop-blur sm:px-10">
            <h1 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Datenschutz
            </h1>
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

        <footer className="mt-16 pb-10">
          <div className="flex flex-col gap-4 text-center text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-3 text-zinc-300 sm:items-start">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <a href="../" className="hover:text-zinc-50">
                  Zurück zur Startseite
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

import React from "react";
import logoMarkUrl from "../assets/img/logo-mark.png";

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

export default function ImpressumPage({ onOpenSettings }) {
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
            href="#top"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200 hover:text-zinc-50"
          >
            Zurück
          </a>
        </nav>

        <section className="mt-16">
          <div className="rounded-[28px] border border-zinc-200/10 bg-zinc-900/20 px-7 py-10 text-sm text-zinc-100 backdrop-blur sm:px-10">
            <h1 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Impressum
            </h1>
            <div className="mt-6 space-y-6 leading-relaxed text-zinc-200">
              {impressumBlocks.map((block) => (
                <p key={block} className="whitespace-pre-line">
                  {block}
                </p>
              ))}
            </div>
          </div>
        </section>

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

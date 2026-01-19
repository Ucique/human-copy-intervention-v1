import React, { useEffect, useMemo, useState } from "react";
import DatenschutzPage from "./DatenschutzPage.jsx";
import HumanCopySharpLanding from "./HumanCopySharpLanding.jsx";
import ImpressumPage from "./ImpressumPage.jsx";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [consent, setConsent] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const hasConsent = useMemo(() => consent !== null, [consent]);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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

  const page =
    hash === "#impressum" ? (
      <ImpressumPage onOpenSettings={() => setIsSettingsOpen(true)} />
    ) : hash === "#datenschutz" ? (
      <DatenschutzPage onOpenSettings={() => setIsSettingsOpen(true)} />
    ) : (
      <HumanCopySharpLanding onOpenSettings={() => setIsSettingsOpen(true)} />
    );

  return (
    <>
      {page}

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
    </>
  );
}

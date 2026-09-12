"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Diese Seite setzt keine Tracking- oder Marketing-Cookies. Der einzige
 * externe Link (Google Maps im Kontaktbereich) öffnet erst nach einem
 * aktiven Klick in einem neuen Tab und lädt selbst nichts nach.
 */
export function CookieSettingsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-left text-[0.88rem] text-chalk/70 transition-colors hover:text-chalk"
      >
        Cookie-Einstellungen
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-anthracite/60 p-6"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal
            aria-label="Cookie-Einstellungen"
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-chalk p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-lg font-bold text-anthracite">Cookie-Einstellungen</h2>
                <button type="button" onClick={() => setOpen(false)} aria-label="Schließen" className="text-anthracite/50">
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-anthracite/70">
                Diese Webseite verwendet keine Tracking- oder Marketing-Cookies. Der Link
                „Route öffnen“ im Kontaktbereich führt zu Google Maps in einem neuen Tab und
                lädt selbst keine Inhalte nach. Details finden Sie in der{" "}
                <a href="/datenschutz" className="underline underline-offset-2">
                  Datenschutzerklärung
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 w-full bg-anthracite px-5 py-2.5 text-[0.88rem] font-medium text-chalk"
              >
                Verstanden
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

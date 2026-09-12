"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Navigation as NavigationIcon } from "lucide-react";
import { site } from "@/content/site";
import { LineReveal } from "@/components/motion/LineReveal";

const routeUrl = `https://www.openstreetmap.org/directions?to=${encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`
)}`;

// Grobe Näherung der Kartenausschnitts-Koordinaten für Fichtenau (Baden-Württemberg).
const OSM_EMBED_BBOX = "10.0800%2C49.1350%2C10.1700%2C49.1850";
const OSM_EMBED_MARKER = "49.1600%2C10.1250";

export function LocationSection() {
  const [mapConsent, setMapConsent] = useState(false);

  return (
    <section id="kontakt" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <LineReveal
          as="h2"
          lines={["Kontakt und Standort"]}
          className="font-display text-4xl font-extrabold tracking-tight text-anthracite sm:text-5xl"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <address className="not-italic">
              <p className="font-display text-xl font-bold text-anthracite">{site.legalName}</p>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-anthracite/70">
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </p>
            </address>

            <div className="mt-8 flex flex-col gap-3 text-[0.98rem]">
              <a href={site.phone.href} className="flex items-center gap-2.5 text-anthracite/80 transition-colors hover:text-anthracite">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {site.phone.display}
              </a>
              <a href={site.email.href} className="flex items-center gap-2.5 text-anthracite/80 transition-colors hover:text-anthracite">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {site.email.display}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2 bg-anthracite px-6 py-3 text-[0.88rem] font-medium text-chalk"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                Jetzt anrufen
              </a>
              <a
                href={site.email.href}
                className="inline-flex items-center gap-2 border border-anthracite/25 px-6 py-3 text-[0.88rem] font-medium text-anthracite"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                E-Mail schreiben
              </a>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-anthracite/25 px-6 py-3 text-[0.88rem] font-medium text-anthracite"
              >
                <NavigationIcon className="h-4 w-4" strokeWidth={1.75} />
                Route öffnen
              </a>
            </div>

            <p className="mt-8 text-[0.78rem] text-anthracite/40">
              Öffnungszeiten auf Anfrage — feste Zeiten werden hier ergänzt, sobald vom Betrieb
              bestätigt.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden border border-anthracite/10 bg-mineral/20 sm:aspect-[16/10]">
            {mapConsent ? (
              <iframe
                title={`Karte: ${site.legalName}, ${site.address.city}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${OSM_EMBED_BBOX}&layer=mapnik&marker=${OSM_EMBED_MARKER}`}
                className="h-full w-full grayscale-[0.15]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-mineral-light/60 px-6 text-center">
                <MapPin className="h-7 w-7 text-anthracite/50" strokeWidth={1.5} aria-hidden />
                <p className="max-w-xs text-[0.85rem] text-anthracite/60">
                  Aus Datenschutzgründen wird die Karte (OpenStreetMap) erst nach Ihrer
                  Zustimmung geladen.
                </p>
                <button
                  type="button"
                  onClick={() => setMapConsent(true)}
                  className="border border-anthracite/30 bg-chalk px-5 py-2.5 text-[0.85rem] font-medium text-anthracite transition-colors hover:border-anthracite"
                >
                  Karte anzeigen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

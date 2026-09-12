import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Jürgen Stirn Malerbetrieb in Fichtenau.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-terracotta/10 px-1 py-0.5 text-terracotta">
      {children}
    </span>
  );
}

export default function ImpressumPage() {
  return (
    <LegalPageShell title="Impressum">
      <div className="space-y-8 text-[0.98rem] leading-relaxed text-anthracite/80">
        <p className="border border-terracotta/30 bg-terracotta/[0.06] px-4 py-3 text-[0.88rem] text-anthracite">
          Diese Seite enthält an mehreren Stellen deutlich markierte Platzhalter
          (<Placeholder>orange hinterlegt</Placeholder>). Diese Angaben sind gesetzlich
          verpflichtend und müssen vor Veröffentlichung der Webseite mit dem Betrieb
          abgeklärt und ergänzt werden.
        </p>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3">
            {site.legalName}
            <br />
            Inhaber: {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">Kontakt</h2>
          <p className="mt-3">
            Telefon: {site.phone.display}
            <br />
            E-Mail: {site.email.display}
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">Rechtsform</h2>
          <p className="mt-3">
            <Placeholder>
              Angabe der Rechtsform (z. B. Einzelunternehmen) noch zu bestätigen.
            </Placeholder>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">
            Handwerksrechtliche Angaben
          </h2>
          <p className="mt-3">
            <Placeholder>
              Zuständige Handwerkskammer und Eintragung in die Handwerksrolle noch zu ergänzen.
            </Placeholder>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">Umsatzsteuer-ID</h2>
          <p className="mt-3">
            <Placeholder>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz noch zu ergänzen,
              sofern vorhanden.
            </Placeholder>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">
            {site.owner}
            <br />
            {site.address.street}, {site.address.zip} {site.address.city}
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">
            EU-Streitschlichtung
          </h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im
            Impressum. Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-anthracite">Haftungshinweis</h2>
          <p className="mt-3">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
            Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
            deren Betreiber verantwortlich.
          </p>
        </section>
      </div>
    </LegalPageShell>
  );
}

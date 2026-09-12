import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Markus Brunner Malermeister in Crailsheim-Tiefenbach.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="bg-amber-100 px-1 py-0.5 text-amber-900">{children}</span>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-bold text-anthracite">{children}</h2>;
}

export default function DatenschutzPage() {
  return (
    <LegalPageShell title="Datenschutzerklärung">
      <div className="space-y-8 text-[0.98rem] leading-relaxed text-anthracite/80">
        <p className="border border-amber-300 bg-amber-50 px-4 py-3 text-[0.88rem] text-anthracite">
          Diese Datenschutzerklärung beschreibt den aktuellen technischen Stand der Webseite.
          <Placeholder> Gelb markierte</Placeholder> Abschnitte sind vor Veröffentlichung final
          zu prüfen.
        </p>

        <section>
          <H2>1. Verantwortlicher</H2>
          <p className="mt-3">
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            Telefon: {site.phone.display}
            <br />
            E-Mail: {site.email.display}
          </p>
        </section>

        <section>
          <H2>2. Hosting</H2>
          <p className="mt-3">
            <Placeholder>
              Angaben zum Hosting-Anbieter (Name, Adresse, ggf. Auftragsverarbeitungsvertrag)
              sind vor Veröffentlichung zu ergänzen.
            </Placeholder>
          </p>
        </section>

        <section>
          <H2>3. Erhebung und Verarbeitung von Daten beim Besuch der Webseite</H2>
          <p className="mt-3">
            Diese Webseite bindet standardmäßig keine Analyse- oder Marketing-Dienste (z. B.
            Google Analytics) ein und setzt keine Tracking-Cookies. Server-seitige Zugriffsdaten
            (technisch bedingt, z. B. IP-Adresse, Datum/Uhrzeit des Zugriffs) können durch den
            Hosting-Anbieter zur Gewährleistung der Betriebssicherheit protokolliert werden.
          </p>
        </section>

        <section>
          <H2>4. Kontaktformular</H2>
          <p className="mt-3">
            Das Kontaktformular im Bereich „Kontakt“ überträgt Ihre Eingaben nicht an einen
            Server. Beim Absenden öffnet Ihr Browser stattdessen Ihr lokal eingerichtetes
            E-Mail-Programm mit einer vorausgefüllten Nachricht an {site.email.display}. Diese
            Nachricht sehen Sie vor dem Versand vollständig und senden sie eigenständig über
            Ihr E-Mail-Programm ab — an diesem Punkt gelten die Datenschutzhinweise Ihres
            E-Mail-Anbieters. Es findet keine Speicherung Ihrer Eingaben auf dieser Webseite
            statt.
          </p>
        </section>

        <section>
          <H2>5. Google Maps</H2>
          <p className="mt-3">
            Der Link „Route öffnen“ im Kontaktbereich führt zu Google Maps
            (maps.google.com) und öffnet sich in einem neuen Tab. Es werden dabei keine
            Inhalte von Google in diese Webseite eingebettet oder automatisch nachgeladen —
            eine Verbindung zu Google-Servern entsteht erst, wenn Sie den Link aktiv anklicken.
            Informationen zum Datenschutz bei Google finden Sie unter{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <H2>6. Ihre Rechte</H2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
            personenbezogenen Daten. Wenden Sie sich hierzu an die oben genannte Kontaktadresse.
            Ihnen steht zudem ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.
          </p>
        </section>
      </div>
    </LegalPageShell>
  );
}

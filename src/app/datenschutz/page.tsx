import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung des Jürgen Stirn Malerbetrieb in Fichtenau.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="bg-terracotta/10 px-1 py-0.5 text-terracotta">{children}</span>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-bold text-anthracite">{children}</h2>;
}

export default function DatenschutzPage() {
  return (
    <LegalPageShell title="Datenschutzerklärung">
      <div className="space-y-8 text-[0.98rem] leading-relaxed text-anthracite/80">
        <p className="border border-terracotta/30 bg-terracotta/[0.06] px-4 py-3 text-[0.88rem] text-anthracite">
          Diese Datenschutzerklärung beschreibt den aktuellen technischen Stand der Webseite.
          <Placeholder> Orange markierte</Placeholder> Abschnitte sind vor Veröffentlichung final
          zu prüfen, insbesondere sobald ein E-Mail-Versanddienst für das Kontaktformular
          angebunden wird.
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
          <H2>4. Projektanfrage-Formular</H2>
          <p className="mt-3">
            Wenn Sie das Formular „Projekt anfragen“ nutzen, werden die von Ihnen eingegebenen
            Daten (z. B. Projektart, Zeitrahmen, Ort/Postleitzahl, Beschreibung, optionale
            Bilder, Name, Telefonnummer, E-Mail-Adresse, bevorzugter Kontaktweg) verarbeitet, um
            Ihre Anfrage zu bearbeiten und Sie zu kontaktieren. Die Übermittlung erfolgt nur, wenn
            Sie der Verarbeitung aktiv zugestimmt haben (Checkbox). Rechtsgrundlage ist Art. 6
            Abs. 1 lit. b und lit. a DSGVO.
          </p>
          <p className="mt-3">
            <Placeholder>
              Hinweis für die Umsetzung: Der E-Mail-Versand des Formulars ist derzeit technisch
              noch nicht mit einem E-Mail-Dienst verbunden (siehe Code-Dokumentation in
              src/app/api/contact/route.ts). Sobald ein Dienst (z. B. Resend, Postmark, SMTP)
              angebunden wird, ist dieser Abschnitt um den Namen des Dienstleisters, dessen
              Serverstandort und ggf. einen Auftragsverarbeitungsvertrag zu ergänzen.
            </Placeholder>
          </p>
        </section>

        <section>
          <H2>5. Landkarte (OpenStreetMap)</H2>
          <p className="mt-3">
            Im Kontaktbereich kann optional eine Standortkarte von OpenStreetMap eingeblendet
            werden. Diese wird ausschließlich geladen, wenn Sie aktiv auf „Karte anzeigen“
            klicken. Dabei kann eine Verbindung zu Servern der OpenStreetMap Foundation
            hergestellt und Ihre IP-Adresse übertragen werden. Weitere Informationen:{" "}
            <a
              href="https://osmfoundation.org/wiki/Privacy_Policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              osmfoundation.org/wiki/Privacy_Policy
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

        <section>
          <H2>7. Speicherdauer</H2>
          <p className="mt-3">
            Über das Kontaktformular übermittelte Daten werden nur so lange gespeichert, wie es
            zur Bearbeitung Ihrer Anfrage erforderlich ist, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>
      </div>
    </LegalPageShell>
  );
}

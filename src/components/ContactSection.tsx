import { Mail, Phone, MapPin, Navigation as NavigationIcon, Printer } from "lucide-react";
import { LineReveal } from "@/components/motion/LineReveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <LineReveal
              as="h2"
              lines={["Lassen Sie uns", <span key="accent" className="font-accent">darüber sprechen.</span>]}
              className="font-display text-4xl font-extrabold tracking-tight text-anthracite sm:text-5xl"
            />
            <p className="mt-6 max-w-sm text-[1rem] leading-relaxed text-anthracite/65">
              Erzählen Sie uns kurz, was Sie vorhaben. Wir melden uns persönlich bei Ihnen.
            </p>

            <div className="mt-10 flex flex-col gap-3.5 text-[0.98rem]">
              <a
                href={site.phone.href}
                className="flex items-center gap-2.5 text-anthracite/80 transition-colors hover:text-anthracite"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {site.phone.display}
              </a>
              <a
                href={site.email.href}
                className="flex items-center gap-2.5 text-anthracite/80 transition-colors hover:text-anthracite"
              >
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {site.email.display}
              </a>
              <span className="flex items-center gap-2.5 text-anthracite/50">
                <Printer className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                Fax {site.fax.display}
              </span>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-anthracite/80 transition-colors hover:text-anthracite"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </span>
              </a>
            </div>

            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-anthracite/25 px-6 py-3 text-[0.85rem] font-medium text-anthracite transition-colors hover:border-anthracite"
            >
              <NavigationIcon className="h-4 w-4" strokeWidth={1.75} />
              Route öffnen
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import { LineReveal } from "@/components/motion/LineReveal";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="anfrage" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <LineReveal
              as="h2"
              lines={["Projekt", "anfragen."]}
              className="font-display text-4xl font-extrabold tracking-tight text-anthracite sm:text-5xl"
            />
            <p className="mt-6 max-w-sm text-[1rem] leading-relaxed text-anthracite/65">
              Drei kurze Schritte, damit wir Ihr Vorhaben von Anfang an richtig einschätzen
              können. Wir melden uns persönlich bei Ihnen zurück.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Check } from "lucide-react";
import { LineReveal } from "@/components/motion/LineReveal";

const points = ["Persönliche Beratung", "Saubere Ausführung", "Verlässliche Abstimmung"];

export function CraftSection() {
  return (
    <section id="ueber-uns" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden lg:order-2">
          <Image
            src="/images/craft.webp"
            alt="Nahaufnahme präziser Malerarbeit an einer Wandkante"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center lg:order-1">
          <LineReveal
            as="h2"
            lines={["Was zählt, ist", <span key="accent" className="font-accent">das Ergebnis.</span>]}
            className="max-w-md text-balance font-display text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl md:text-[2.75rem]"
          />
          <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-anthracite/70">
            Eine saubere Vorbereitung, hochwertige Materialien und eine sorgfältige
            Ausführung bilden die Grundlage jedes Projekts. Dabei stimmen wir Farben und
            Oberflächen passend zum Raum und zu Ihren Vorstellungen ab.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[0.98rem] text-anthracite/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-brand/10 text-brand">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

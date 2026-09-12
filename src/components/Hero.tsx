"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { LineReveal } from "@/components/motion/LineReveal";
import { CoatingLink } from "@/components/motion/CoatingButton";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-anthracite">
      {/* Hintergrund: fertig gestalteter Innenraum — von Anfang an sichtbar */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-fertiger-innenraum.jpg"
          alt="Fertig gestalteter Wohnraum mit ultramarinblauer Akzentwand"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-anthracite/85 via-anthracite/25 to-anthracite/10"
        />
      </div>

      <div className="relative z-20 flex flex-1 flex-col justify-end">
        <div className="container-edge pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div className="max-w-3xl text-chalk">
            <p className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[0.22em] opacity-80">
              Malermeisterbetrieb · Fichtenau
            </p>

            <LineReveal
              as="h1"
              lines={["Räume,", "die bleiben."]}
              className="font-display text-[3.1rem] font-extrabold leading-[0.95] tracking-tight sm:text-[4.5rem] md:text-[5.5rem]"
            />

            <p className="mt-7 max-w-lg text-[1.05rem] leading-relaxed opacity-90 sm:text-[1.15rem]">
              Präzises Malerhandwerk, saubere Oberflächen und eine Gestaltung, die zu Ihrem
              Zuhause passt – persönlich aus Fichtenau.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CoatingLink href="#anfrage" variant="solid" className="bg-ultramarine text-chalk">
                Projekt unverbindlich anfragen
              </CoatingLink>
              <CoatingLink href={site.phone.href} variant="outline" className="border-chalk/35 text-chalk">
                {site.phone.display} anrufen
              </CoatingLink>
            </div>

            <a
              href={site.rating.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 text-[0.85rem] opacity-90 transition-opacity hover:opacity-100"
            >
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                ))}
              </span>
              <span>
                {site.rating.value.toFixed(1).replace(".", ",")} bei {site.rating.count} Bewertungen ·{" "}
                <span className="underline underline-offset-2">laut {site.rating.source}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

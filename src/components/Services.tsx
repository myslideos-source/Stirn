"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { LineReveal } from "@/components/motion/LineReveal";

export function Services() {
  return (
    <section id="leistungen" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <LineReveal
          as="h2"
          lines={["Handwerk für Räume", <span key="accent" className="font-accent">mit Charakter.</span>]}
          className="max-w-3xl text-balance font-display text-4xl font-extrabold tracking-tight text-anthracite sm:text-5xl md:text-6xl"
        />

        <ul className="mt-16 border-t border-anthracite/15 sm:mt-20">
          {services.map((service) => (
            <li key={service.slug} className="group border-b border-anthracite/15">
              <a
                href="#kontakt"
                className="flex items-center gap-6 py-8 transition-colors hover:bg-anthracite/[0.03] sm:gap-10 sm:py-10"
              >
                <span className="font-display text-sm font-semibold text-brand sm:text-base">
                  {service.number}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-2xl font-bold leading-tight text-anthracite sm:text-3xl md:text-[2.25rem]">
                    {service.title}
                  </span>
                  <span className="mt-2 block max-w-xl text-[0.95rem] leading-relaxed text-anthracite/60 sm:text-[1.02rem]">
                    {service.description}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-anthracite/40 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand sm:h-7 sm:w-7"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

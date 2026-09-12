"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/content/services";
import { SurfacePlaceholder } from "@/components/motion/SurfacePlaceholder";
import { LineReveal } from "@/components/motion/LineReveal";

export function Services() {
  const [active, setActive] = useState<number>(0);

  return (
    <section id="leistungen" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <div className="mb-14 flex items-end justify-between gap-6 sm:mb-20">
          <LineReveal
            as="h2"
            lines={["Leistungen"]}
            className="font-display text-4xl font-extrabold tracking-tight text-anthracite sm:text-5xl md:text-6xl"
          />
          <p className="hidden max-w-xs text-right text-[0.95rem] leading-relaxed text-anthracite/60 md:block">
            Sechs Kapitel, ein Anspruch: saubere Ausführung und ein Ergebnis, das trägt.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <ul className="border-t border-anthracite/15">
            {services.map((service, i) => (
              <li key={service.slug} className="border-b border-anthracite/15">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex w-full items-center gap-5 py-6 text-left sm:gap-8 sm:py-7"
                  aria-expanded={active === i}
                >
                  <span
                    className={`font-display text-sm font-semibold transition-colors ${
                      active === i ? "text-ultramarine" : "text-anthracite/35"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block font-display text-xl font-bold leading-tight transition-colors sm:text-2xl md:text-[1.75rem] ${
                        active === i ? "text-anthracite" : "text-anthracite/55"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`mt-2 block text-[0.92rem] leading-relaxed text-anthracite/60 transition-all duration-300 ${
                        active === i ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0 sm:max-h-40 sm:opacity-70"
                      }`}
                    >
                      {service.summary}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative hidden aspect-[4/5] overflow-hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[active]?.slug}
                initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0"
              >
                {services[active]?.image ? (
                  <Image
                    src={services[active].image}
                    alt={`${services[active].title} — Detailaufnahme`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <SurfacePlaceholder
                    label={services[active]?.title ?? ""}
                    tone="mineral"
                    className="h-full w-full"
                  />
                )}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-anthracite/85 p-6">
              <p className="text-[0.92rem] leading-relaxed text-chalk/90">
                {services[active]?.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

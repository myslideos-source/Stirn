"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BrandStatement() {
  const reduced = useReducedMotion();

  return (
    <section className="relative border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <div className="relative mx-auto max-w-4xl">
          <motion.span
            aria-hidden
            className="absolute -left-5 top-0 hidden h-full w-[2px] bg-ultramarine sm:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0.01 : 1, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "top" }}
          />
          <p className="text-balance font-display text-[1.9rem] font-medium leading-[1.25] tracking-tight text-anthracite sm:text-[2.5rem] md:text-[2.9rem]">
            Aus Fläche wird <span className="font-accent">Atmosphäre.</span>
          </p>
          <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-anthracite/70">
            Gute Oberflächen verändern nicht nur einen Raum. Sie verändern, wie er sich
            anfühlt. Genau deshalb verbinden wir sauberes Handwerk mit einem sicheren Gespür
            für Farben, Materialien und Details.
          </p>
        </div>
      </div>
    </section>
  );
}

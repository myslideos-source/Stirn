"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { processSteps } from "@/content/process";
import { LineReveal } from "@/components/motion/LineReveal";

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section id="ablauf" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge">
        <LineReveal
          as="h2"
          lines={["Einfach und", <span key="accent" className="font-accent">persönlich.</span>]}
          className="max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl md:text-5xl"
        />

        <div ref={ref} className="relative mt-16 sm:mt-20">
          <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-anthracite/10 sm:left-[27px]" />
          <motion.div
            className="scroll-edge-line absolute left-[18px] top-2 w-[2px] origin-top bg-brand sm:left-[27px]"
            style={{ scaleY: scrollYProgress, bottom: "0.5rem" }}
          />

          <ol className="relative flex flex-col gap-14 sm:gap-16">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="relative grid grid-cols-[40px_1fr] items-start gap-6 sm:grid-cols-[56px_1fr] sm:gap-10"
              >
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-anthracite/20 bg-chalk font-display text-xs font-bold text-anthracite sm:h-14 sm:w-14 sm:text-base">
                  {step.number}
                </span>
                <div className="pt-1 sm:pt-3">
                  <h3 className="font-display text-xl font-bold text-anthracite sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-anthracite/65">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

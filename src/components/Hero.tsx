"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { LineReveal } from "@/components/motion/LineReveal";
import { CoatingLink } from "@/components/motion/CoatingButton";
import { SurfacePlaceholder } from "@/components/motion/SurfacePlaceholder";
import { site } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const wipe = useTransform(scrollYProgress, [0, 0.55], [0, 100]);
  const clipPath = useTransform(wipe, (v) => `inset(0 0 0 ${v}%)`);
  const edgeLeft = useTransform(wipe, (v) => `${v}%`);
  const edgeOpacity = useTransform(wipe, [0, 4, 96, 100], [0, 1, 1, 0]);
  const textColor = useTransform(scrollYProgress, [0, 0.18, 0.4], ["#171716", "#171716", "#F2EFE8"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-anthracite"
    >
      {/* Hintere Ebene: fertig gestalteter Raum / Farbkante (Platzhalter) */}
      <div className="absolute inset-0">
        <SurfacePlaceholder
          label="Hero-Hintergrund: fertiger Innenraum"
          tone="anthracite"
          className="h-full w-full"
        />
      </div>

      {/* Vordere Ebene: warmes, mineralisches Off-White — wird beim Scrollen weggezogen.
          Bei prefers-reduced-motion wird die Fläche per CSS (globals.css) sofort
          vollständig ausgeblendet, siehe .hero-wipe-layer. */}
      <motion.div className="hero-wipe-layer absolute inset-0 bg-chalk" style={{ clipPath }}>
        <div
          aria-hidden
          className="h-full w-full opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(184,178,168,0.5), transparent 55%), radial-gradient(circle at 75% 65%, rgba(184,178,168,0.35), transparent 50%)",
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="scroll-edge-line absolute inset-y-0 z-10 w-[3px] bg-ultramarine"
        style={{ left: edgeLeft, opacity: edgeOpacity }}
      />

      <div className="relative z-20 flex flex-1 flex-col justify-end">
        <div className="container-edge pb-16 pt-32 sm:pb-24 sm:pt-40">
          <motion.div style={{ color: textColor }} className="max-w-3xl text-chalk">
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
              <CoatingLink href={site.phone.href} variant="outline">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

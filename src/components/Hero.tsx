"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineReveal } from "@/components/motion/LineReveal";
import { CoatingLink } from "@/components/motion/CoatingButton";
import { site } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Dezente Parallax: Bild und Typografie bewegen sich beim Scrollen
  // leicht gegeneinander. Rein scroll-positionsgetrieben (kein Autoplay),
  // daher unabhängig von prefers-reduced-motion sicher nutzbar — die
  // globale CSS-Regel in globals.css fängt .parallax-layer trotzdem ab.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.25]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-anthracite">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="parallax-layer absolute inset-x-0" style={{ top: "-14%", bottom: "-14%", y: imageY }}>
          <Image
            src="/images/hero.webp"
            alt="Frisch gestalteter, moderner Wohnraum mit warmer Lichtstimmung"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-anthracite/85 via-anthracite/25 to-anthracite/10"
        />
      </div>

      <div className="relative z-20 flex flex-1 flex-col justify-end">
        <div className="container-edge pb-16 pt-32 sm:pb-24 sm:pt-40">
          <motion.div className="parallax-layer max-w-3xl text-chalk" style={{ y: textY, opacity: textOpacity }}>
            <LineReveal
              as="h1"
              lines={[
                "Räume,",
                <>
                  die <span className="font-accent">bleiben.</span>
                </>,
              ]}
              className="font-display text-[3rem] font-extrabold leading-[1.02] tracking-tight sm:text-[4.3rem] md:text-[5.3rem]"
            />

            <p className="mt-7 max-w-lg text-[1.05rem] leading-relaxed opacity-90 sm:text-[1.15rem]">
              Malerarbeiten mit Gespür für Farbe, Material und Raum. Für private und
              gewerbliche Projekte in {site.serviceArea}.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CoatingLink href="#kontakt" variant="solid" className="bg-brand text-chalk">
                Projekt anfragen
              </CoatingLink>
              <CoatingLink href={site.phone.href} variant="outline" className="border-chalk/35 text-chalk">
                {site.phone.display} anrufen
              </CoatingLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

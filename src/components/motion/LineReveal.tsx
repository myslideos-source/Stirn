"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type LineRevealProps = {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  staggerDelay?: number;
};

/**
 * Zeigt Headlines zeilenweise an: jede Zeile fährt hinter einer
 * Farbkante hervor, ähnlich einer frisch gezogenen Anstrichbahn.
 *
 * Wichtig: Die Sichtbarkeitserkennung (useInView) läuft auf dem
 * unbewegten äußeren Wrapper, nicht auf dem transformierten inneren
 * Element — ein per overflow-hidden maskiertes, verschobenes Element
 * gilt für IntersectionObserver-Zwecke als "nicht sichtbar" und würde
 * "whileInView" nie auslösen.
 */
export function LineReveal({
  lines,
  className,
  lineClassName,
  as = "h2",
  staggerDelay = 0.09,
}: LineRevealProps) {
  // Hinweis: useReducedMotion() liefert erst nach dem Mount den echten
  // Wert und darf deshalb nicht verwendet werden, um unterschiedliche
  // Elementbäume zu rendern (SSR kennt die Nutzereinstellung nicht —
  // das würde einen Hydration-Mismatch erzeugen). Stattdessen wird bei
  // reduzierter Bewegung nur die Übergangsdauer auf nahezu 0 gesetzt;
  // Struktur und Anfangszustand bleiben in jedem Fall identisch.
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.35 });
  const Tag = as;

  return (
    // @ts-expect-error -- ref type varies with the dynamic `as` tag, runtime behaviour is safe
    <Tag ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden" style={{ paddingBottom: "0.08em" }}>
          <motion.span
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : undefined}
            transition={{
              duration: reduced ? 0.01 : 0.75,
              delay: reduced ? 0 : i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`block ${lineClassName ?? ""}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

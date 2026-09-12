"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { SurfacePlaceholder } from "@/components/motion/SurfacePlaceholder";

type BeforeAfterSliderProps = {
  beforeLabel?: string;
  afterLabel?: string;
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

/**
 * Vorher-Nachher-Slider. Maus-Drag, Touch-Drag und Tastatur (Pfeiltasten,
 * Pos1/Ende) werden unterstützt. Ohne beforeSrc/afterSrc werden klar
 * gekennzeichnete Platzhalter verwendet.
 */
export function BeforeAfterSlider({
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  beforeSrc,
  afterSrc,
  beforeAlt = "Vorher-Aufnahme",
  afterAlt = "Nachher-Aufnahme",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft") {
      setValue((v) => Math.max(0, v - step));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setValue((v) => Math.min(100, v + step));
      e.preventDefault();
    } else if (e.key === "Home") {
      setValue(0);
      e.preventDefault();
    } else if (e.key === "End") {
      setValue(100);
      e.preventDefault();
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[16/10] w-full touch-none select-none overflow-hidden sm:aspect-[16/9]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Nachher — volle Fläche im Hintergrund */}
      <div className="absolute inset-0">
        {afterSrc ? (
          <Image src={afterSrc} alt={afterAlt} fill sizes="(min-width: 640px) 80vw, 100vw" className="object-cover" />
        ) : (
          <SurfacePlaceholder label="Nachher-Aufnahme" tone="chalk" className="h-full w-full" />
        )}
      </div>

      {/* Vorher — von rechts geclippt entsprechend value */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        {beforeSrc ? (
          <Image src={beforeSrc} alt={beforeAlt} fill sizes="(min-width: 640px) 80vw, 100vw" className="object-cover" />
        ) : (
          <SurfacePlaceholder label="Vorher-Aufnahme" tone="mineral" className="h-full w-full" />
        )}
      </div>

      <span className="pointer-events-none absolute left-4 top-4 bg-anthracite/80 px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-chalk">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 bg-chalk/90 px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-anthracite">
        {afterLabel}
      </span>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-brand"
        style={{ left: `${value}%`, transform: "translateX(-1px)" }}
      />

      <div
        role="slider"
        tabIndex={0}
        aria-label={`Vorher-Nachher-Vergleich, ${Math.round(value)} Prozent Nachher sichtbar`}
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-anthracite/10 bg-chalk shadow-quiet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        style={{ left: `${value}%` }}
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
          <path d="M5 1 1 7l4 6M11 1l4 6-4 6" stroke="#171716" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

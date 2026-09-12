type SurfacePlaceholderProps = {
  label: string;
  className?: string;
  tone?: "chalk" | "anthracite" | "mineral";
};

const tones: Record<NonNullable<SurfacePlaceholderProps["tone"]>, string> = {
  chalk: "from-[#f0ede6] via-[#e9e5dc] to-[#dcd8cd]",
  anthracite: "from-[#232320] via-[#171716] to-[#0e0e0d]",
  mineral: "from-[#e0ddd5] via-[#d7d4ce] to-[#c3bfb6]",
};

/**
 * Hochwertiger, klar gekennzeichneter Bild-Platzhalter (kein echtes Foto
 * vorhanden). Verwendet eine feine mineralische Gradient-/Rauschtextur
 * statt eines grauen Kastens oder Stockfotos. Muss vor Veröffentlichung
 * gegen echtes Bildmaterial ausgetauscht werden — siehe BILDER-BENOETIGT.md.
 */
export function SurfacePlaceholder({ label, className, tone = "mineral" }: SurfacePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Platzhalter: ${label}. Foto folgt.`}
      className={`relative isolate flex items-end overflow-hidden bg-gradient-to-br ${tones[tone]} ${className ?? ""}`}
    >
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.12] mix-blend-overlay"
        preserveAspectRatio="none"
      >
        <filter id={`grain-${label.replace(/\s+/g, "-")}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${label.replace(/\s+/g, "-")})`} />
      </svg>
      <span className="relative z-10 m-3 inline-flex items-center gap-2 bg-anthracite/85 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-chalk sm:m-4">
        Platzhalter · {label}
      </span>
    </div>
  );
}

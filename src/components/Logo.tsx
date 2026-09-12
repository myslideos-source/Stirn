type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  withSuffix?: boolean;
};

/**
 * Reduzierte SVG-Wortmarke "STIRN." — der Punkt ist eine eigenständige
 * ultramarine Farbfläche (Raute statt gewöhnlichem Punkt). Kein
 * Pinsel-, Haus- oder Farbrollensymbol.
 */
export function Logo({ className, tone = "dark", withSuffix = true }: LogoProps) {
  const textColor = tone === "dark" ? "#171716" : "#F2EFE8";

  return (
    <span className={`inline-flex flex-col ${className ?? ""}`}>
      <svg
        viewBox="0 0 168 34"
        role="img"
        aria-label={`${withSuffix ? "STIRN. Malerbetrieb Fichtenau" : "STIRN."}`}
        className="h-auto w-[7.5rem] sm:w-[8.5rem]"
      >
        <text
          x="0"
          y="26"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="800"
          fontSize="28"
          letterSpacing="-0.5"
          fill={textColor}
        >
          STIRN
        </text>
        <rect x="146" y="19" width="9" height="9" fill="#2447E8" transform="rotate(45 150.5 23.5)" />
      </svg>
      {withSuffix && (
        <span
          className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.16em] sm:text-[0.62rem]"
          style={{ color: tone === "dark" ? "#171716" : "#F2EFE8", opacity: 0.6 }}
        >
          Malerbetrieb · Fichtenau
        </span>
      )}
    </span>
  );
}

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  withSuffix?: boolean;
};

/**
 * Reduzierte Wortmarke "BRUNNER." — der Punkt ist eine eigenständige
 * ultramarine Farbfläche. Kein Pinsel-, Haus- oder Farbrollensymbol.
 */
export function Logo({ className, tone = "dark", withSuffix = true }: LogoProps) {
  const textColor = tone === "dark" ? "#171716" : "#F4F1EA";

  return (
    <span className={`inline-flex flex-col ${className ?? ""}`}>
      <svg
        viewBox="0 0 208 34"
        role="img"
        aria-label={`${withSuffix ? "BRUNNER. Malermeister Crailsheim" : "BRUNNER."}`}
        className="h-auto w-[9rem] sm:w-[10.5rem]"
      >
        <text
          x="0"
          y="26"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="800"
          fontSize="27"
          letterSpacing="-0.3"
          fill={textColor}
        >
          BRUNNER
        </text>
        <circle cx="192" cy="23.5" r="4.5" fill="#2457FF" />
      </svg>
      {withSuffix && (
        <span
          className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.16em] sm:text-[0.62rem]"
          style={{ color: tone === "dark" ? "#171716" : "#F4F1EA", opacity: 0.6 }}
        >
          Malermeister · Crailsheim
        </span>
      )}
    </span>
  );
}

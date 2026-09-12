import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  withSuffix?: boolean;
  priority?: boolean;
};

/**
 * STIRN.-Wortmarke. Auf hellem Grund (tone="dark") wird das Logo direkt
 * gezeigt; auf dunklem Grund (tone="light", z. B. Footer) sitzt es auf
 * einer kleinen kreideweißen Fläche, damit die Markenfarben (Anthrazit,
 * Ultramarin) exakt erhalten bleiben statt über einen Farbfilter
 * verfälscht zu werden.
 */
export function Logo({ className, tone = "dark", withSuffix = true, priority = false }: LogoProps) {
  const suffixColor = tone === "dark" ? "#171716" : "#F2EFE8";

  const mark = (
    <Image
      src="/images/logo-stirn.png"
      alt={withSuffix ? "STIRN. Malerbetrieb Fichtenau" : "STIRN."}
      width={1200}
      height={400}
      priority={priority}
      className="h-auto w-[7.5rem] sm:w-[8.5rem]"
    />
  );

  return (
    <span className={`inline-flex flex-col ${className ?? ""}`}>
      {tone === "light" ? (
        <span className="inline-flex w-fit items-center bg-chalk px-2.5 py-1.5">{mark}</span>
      ) : (
        mark
      )}
      {withSuffix && (
        <span
          className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.16em] sm:text-[0.62rem]"
          style={{ color: suffixColor, opacity: 0.6 }}
        >
          Malerbetrieb · Fichtenau
        </span>
      )}
    </span>
  );
}

import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Wortmarke des Betriebs (bereitgestelltes Logo). Auf hellem Grund
 * (tone="dark") wird das Logo direkt gezeigt; auf dunklem Grund
 * (tone="light", z. B. Footer) sitzt es auf einer kleinen kreideweißen
 * Fläche, damit die festen Logofarben (Schwarz/Grün/Grau) erhalten
 * bleiben statt über einen Farbfilter verfälscht zu werden.
 */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const mark = (
    <Image
      src="/images/logo-brunner.png"
      alt="Malerbetrieb Brunner — Gestaltung Innen &amp; Außen"
      width={1400}
      height={467}
      className="h-auto w-[10.5rem] sm:w-[12rem]"
    />
  );

  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      {tone === "light" ? <span className="inline-flex w-fit items-center bg-chalk px-2.5 py-1.5">{mark}</span> : mark}
    </span>
  );
}

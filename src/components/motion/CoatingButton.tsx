"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

const base =
  "coating-btn relative inline-flex items-center justify-center gap-2 overflow-hidden px-7 py-3.5 text-[0.95rem] font-medium tracking-wide transition-colors duration-300 focus-visible:outline-offset-4";

// outline/ghost nutzen text-current, damit sie automatisch die von einem
// Vorfahren gesetzte Textfarbe übernehmen (z. B. der animierte Hero-Text,
// der von dunkel auf hell wechselt). Ohne einen solchen Vorfahren greift
// die globale body-Textfarbe (Anthrazit).
const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  solid: "bg-anthracite text-chalk",
  outline: "border border-current/25 text-current",
  ghost: "text-current",
};

/**
 * Button mit "Beschichtungsbewegung": beim Hover läuft eine Farbkante
 * (Markengrün) einmal von links durch den Button. Rein CSS-getrieben
 * (transform), damit auch Touch-Geräte ohne Hover-Kosten auskommen.
 */
function CoatingSurface({ variant = "solid" }: { variant?: CommonProps["variant"] }) {
  return (
    <span
      aria-hidden
      className="coating-sweep absolute inset-0 -translate-x-full bg-brand transition-transform duration-500 ease-[cubic-bezier(.65,0,.35,1)] group-hover:translate-x-0"
      style={{ opacity: variant === "outline" || variant === "ghost" ? 0.08 : 1 }}
    />
  );
}

export function CoatingLink({
  href,
  children,
  variant = "solid",
  className,
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const content = (
    <>
      <CoatingSurface variant={variant} />
      <span className="relative z-10">{children}</span>
    </>
  );
  const classes = `group ${base} ${variants[variant]} ${className ?? ""}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function CoatingButton({
  children,
  variant = "solid",
  className,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`group ${base} ${variants[variant]} ${className ?? ""}`} {...rest}>
      <CoatingSurface variant={variant} />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

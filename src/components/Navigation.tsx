"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CoatingLink } from "@/components/motion/CoatingButton";
import { site } from "@/content/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = site.nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
          scrolled
            ? "bg-chalk/92 shadow-[0_1px_0_rgba(23,23,22,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Hauptnavigation"
          className={`container-edge flex items-center justify-between transition-[padding] duration-500 ${
            scrolled ? "py-3" : "py-5 sm:py-7"
          }`}
        >
          <a href="#top" className="shrink-0" aria-label="BRUNNER. Malermeister — Startseite">
            <Logo tone="dark" />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  className="relative py-2 text-[0.92rem] font-medium text-anthracite/80 transition-colors hover:text-anthracite"
                >
                  {item.label}
                  {activeHash === item.href && (
                    <motion.span
                      layoutId="nav-active-edge"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-ultramarine"
                      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={site.phone.href}
              className="flex items-center gap-1.5 text-[0.88rem] text-anthracite/70 transition-colors hover:text-anthracite"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              {site.phone.display}
            </a>
            <CoatingLink href="#kontakt" className="text-[0.85rem]">
              Projekt anfragen
            </CoatingLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-anthracite lg:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-anthracite/40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="border-b border-anthracite/10 bg-chalk px-6 pb-8 pt-24 shadow-xl"
            >
              <ul className="flex flex-col divide-y divide-anthracite/10">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-lg font-medium text-anthracite"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <CoatingLink href="#kontakt" className="w-full" >
                  Projekt anfragen
                </CoatingLink>
                <CoatingLink href={site.phone.href} variant="outline" className="w-full">
                  {site.phone.display} anrufen
                </CoatingLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

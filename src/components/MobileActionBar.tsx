"use client";

import Link from "next/link";
import { Phone, FileEdit } from "lucide-react";
import { site } from "@/content/site";

/**
 * Feste, hochwertige Aktionsleiste am unteren Bildschirmrand (nur mobil).
 * Bewusst reduziert auf zwei Handlungen statt eines vollflächigen Menüs.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-anthracite/10 bg-chalk/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={site.phone.href}
          className="flex items-center justify-center gap-2 border-r border-anthracite/10 py-4 text-[0.88rem] font-medium text-anthracite"
        >
          <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          Anrufen
        </a>
        <Link
          href="/#anfrage"
          className="flex items-center justify-center gap-2 bg-anthracite py-4 text-[0.88rem] font-medium text-chalk"
        >
          <FileEdit className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          Projekt anfragen
        </Link>
      </div>
    </div>
  );
}

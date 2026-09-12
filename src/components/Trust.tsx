import { Star } from "lucide-react";
import { site } from "@/content/site";

export function Trust() {
  return (
    <section className="border-t border-anthracite/10 bg-anthracite py-20 sm:py-28">
      <div className="container-edge">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="flex items-center gap-1.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current text-ultramarine" strokeWidth={0} />
            ))}
          </span>
          <p className="mt-6 font-display text-4xl font-extrabold tracking-tight text-chalk sm:text-5xl">
            {site.rating.value.toFixed(1).replace(".", ",")} von 5 Sternen
          </p>
          <p className="mt-3 text-[0.98rem] text-chalk/60">
            auf Grundlage von {site.rating.count} Bewertungen bei {site.rating.source}
          </p>
          <a
            href={site.rating.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 border-b border-chalk/30 pb-0.5 text-[0.88rem] text-chalk/80 transition-colors hover:border-chalk hover:text-chalk"
          >
            Bewertungen auf {site.rating.source} ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

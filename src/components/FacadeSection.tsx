import { SurfacePlaceholder } from "@/components/motion/SurfacePlaceholder";
import { LineReveal } from "@/components/motion/LineReveal";

/**
 * Zeigt einen Platzhalter statt eines Fassadenfotos: In dieser Umgebung
 * bestand kein Netzwerkzugriff auf lizenzfreie Bilddatenbanken, um ein
 * echtes Motiv zu beschaffen. Sobald ein Foto vorliegt, unter
 * /public/images/facade.webp ablegen und hier durch next/image ersetzen.
 */
export function FacadeSection() {
  return (
    <section className="relative border-t border-anthracite/10 bg-anthracite">
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
        <SurfacePlaceholder
          label="Fassadenfoto"
          tone="mineral"
          className="h-full w-full"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-anthracite/20 to-anthracite/30"
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-edge pb-16 sm:pb-20">
            <LineReveal
              as="h2"
              lines={["Außen geschützt.", "Innen angekommen."]}
              className="max-w-xl text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-chalk sm:text-4xl md:text-5xl"
            />
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-chalk/75">
              Fassadenarbeiten mit Blick auf Untergrund, Schutz und eine Gestaltung, die zum
              Gebäude passt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

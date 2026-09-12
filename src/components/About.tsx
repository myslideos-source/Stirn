import { LineReveal } from "@/components/motion/LineReveal";
import { SurfacePlaceholder } from "@/components/motion/SurfacePlaceholder";

export function About() {
  return (
    <section id="ueber-uns" className="border-t border-anthracite/10 bg-chalk py-24 sm:py-32">
      <div className="container-edge grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/5] w-full lg:order-2">
          <SurfacePlaceholder
            label="Porträt Jürgen Stirn"
            tone="anthracite"
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-col justify-center lg:order-1">
          <LineReveal
            as="h2"
            lines={["Persönliches Handwerk", "aus Fichtenau."]}
            className="max-w-md text-balance font-display text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl md:text-[2.75rem]"
          />
          <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-anthracite/70">
            Jürgen Stirn steht für persönliches Malerhandwerk und den direkten Kontakt zum
            Kunden. Statt anonymer Abwicklung geht es um klare Absprachen, eine sorgfältige
            Arbeitsweise und ein Ergebnis, das zum Gebäude und zu den Menschen darin passt.
          </p>
          <p className="mt-6 text-[0.78rem] text-anthracite/40">
            Vorläufiger Text — wird gemeinsam mit dem Betrieb final abgestimmt.
          </p>
        </div>
      </div>
    </section>
  );
}

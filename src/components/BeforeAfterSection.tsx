import { LineReveal } from "@/components/motion/LineReveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <section className="border-t border-anthracite/10 bg-anthracite py-24 sm:py-32">
      <div className="container-edge">
        <LineReveal
          as="h2"
          lines={["Der Unterschied liegt in der Fläche."]}
          className="max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight text-chalk sm:text-4xl md:text-5xl"
        />
        <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-chalk/65">
          Ziehen Sie den Regler, um den Unterschied zu sehen. Bedienbar per Maus, Touch und
          Tastatur.
        </p>

        <div className="mt-12">
          <BeforeAfterSlider
            beforeSrc="/images/vorher-wandflaeche.jpg"
            afterSrc="/images/nachher-wandflaeche.jpg"
            beforeAlt="Wandfläche vor der Renovierung: unbehandelter, geflickter Putzuntergrund"
            afterAlt="Dieselbe Wandfläche nach der Renovierung: sauber gestrichen, mit neuem Bodenbelag"
          />
        </div>
      </div>
    </section>
  );
}

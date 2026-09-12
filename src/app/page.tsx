import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { Services } from "@/components/Services";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { CraftSection } from "@/components/CraftSection";
import { FacadeSection } from "@/components/FacadeSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pb-[64px] lg:pb-0">
        <Hero />
        <BrandStatement />
        <Services />
        <BeforeAfterSection />
        <CraftSection />
        <FacadeSection />
        <ProcessSteps />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { IntroStatement } from "@/components/IntroStatement";
import { Services } from "@/components/Services";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProcessSteps } from "@/components/ProcessSteps";
import { About } from "@/components/About";
import { Trust } from "@/components/Trust";
import { ContactSection } from "@/components/ContactSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pb-[64px] lg:pb-0">
        <Hero />
        <IntroStatement />
        <Services />
        <BeforeAfterSection />
        <ProjectGallery />
        <ProcessSteps />
        <About />
        <Trust />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

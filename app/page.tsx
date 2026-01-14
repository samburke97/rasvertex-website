import Container from "./components/Container";
import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import { mainPanels } from "./data/expandingPanelsData";
import HeroSection from "./components/homepage/HeroSection";
import ServicesAlternating from "./components/homepage/ServicesAlternating";
import Testimonials from "./components/homepage/Testimonials";
import CTA from "./components/homepage/CTA";

export default function Home() {
  return (
    <>
      <ServicesAlternating />
      <section className="py-[200px]">
        <PartnersCarousel />
      </section>

      <Container>
        <section className="pb-[200px]">
          <ExperienceSection />
        </section>
      </Container>
      <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      />
      <Testimonials />
      <CTA />
    </>
  );
}

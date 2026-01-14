import Container from "./components/Container";
import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import { mainPanels } from "./data/expandingPanelsData";
import Hero from "./components/homepage/Hero";
import ServicesAlternating from "./components/homepage/Hero";
import Testimonials from "./components/homepage/Testimonials";
import CTA from "./components/homepage/CTA";

export default function Home() {
  return (
    <>
      <Hero />
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

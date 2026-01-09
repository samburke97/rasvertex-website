import Container from "./components/Container";
import CommunitySection from "./components/homepage/CommunitySection";
import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import { mainPanels } from "./data/expandingPanelsData";
import HeroSection from "./components/homepage/HeroSection";
import ServicesAlternating from "./components/homepage/ServicesAlternating";

export default function Home() {
  return (
    <>
      <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      />
      <Container>
        <section className="py-[120px]">
          <ExperienceSection />
        </section>
      </Container>
      <section className="py-[120px]">
        <PartnersCarousel />
      </section>
      <section className="py-[120px]">
        <ServicesAlternating />
      </section>
      <section className="py-[120px]">
        <ProjectShowcase />
      </section>
    </>
  );
}

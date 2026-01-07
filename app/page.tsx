import Container from "./components/Container";
import CommunitySection from "./components/homepage/CommunitySection";
import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import ServicesGrid from "./components/homepage/ServicesGrid";
import { mainPanels } from "./data/expandingPanelsData";
import HeroSection from "./components/homepage/HeroSection";
import HeroTest from "./components/homepage/HeroTest";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-[120px]">
        <PartnersCarousel />
      </section>
      <HeroTest />
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
        <ServicesGrid />
      </section>
      <section className="py-[120px]">
        <ProjectShowcase />
      </section>
      <section className="py-[120px]">
        <CommunitySection />
      </section>
    </>
  );
}

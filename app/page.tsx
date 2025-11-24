import Container from "./components/Container";
import CommunitySection from "./components/homepage/CommunitySection";
import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import ServicesGrid from "./components/homepage/ServicesGrid";
import { mainPanels } from "./data/expandingPanelsData";

export default function Home() {
  return (
    <>
      <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      />
      <Container>
        <section className="py-[80px]">
          <ExperienceSection />
        </section>
      </Container>
      <section className="py-[80px]">
        <PartnersCarousel />
      </section>
      <section className="py-[80px]">
        <ServicesGrid />
      </section>
      <section className="py-[80px]">
        <ProjectShowcase />
      </section>
      <CommunitySection />
    </>
  );
}

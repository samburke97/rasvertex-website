import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import { mainPanels } from "./data/expandingPanelsData";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      />
      <ExperienceSection />
      <PartnersCarousel />
      <ProjectShowcase />
    </div>
  );
}

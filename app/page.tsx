import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import ProcessSection from "./components/homepage/ProcessSection";
import TestimonialsSection from "./components/homepage/TestimonialSection";
import { mainPanels } from "./data/expandingPanelsData";
import Hero from "./components/homepage/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <PartnersCarousel />

      <ProcessSection />
      <ProjectShowcase />
      <TestimonialsSection />
      {/* <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      /> */}
    </>
  );
}

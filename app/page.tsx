import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
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
      {/* <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      /> */}
      <ProcessSection />

      <ProjectShowcase />
      <TestimonialsSection />
    </>
  );
}

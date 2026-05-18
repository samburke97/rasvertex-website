import ExpandingPanels from "./components/homepage/Expandingpanels";
import ExperienceSection from "./components/homepage/ExperienceSection";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import ProcessSection from "./components/homepage/ProcessSection";
import TestimonialsSection from "./components/homepage/TestimonialSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import CaseStudy from "./components/homepage/CaseStudy";
import { mainPanels } from "./data/expandingPanelsData";
import Hero from "./components/homepage/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <PartnersCarousel />
      {/* <ExpandingPanels
        panels={mainPanels}
        defaultActivePanel="higher-standards"
      /> */}
      <CaseStudy />
      <ProcessSection />

      <ProjectShowcase />
      <TestimonialsSection />
    </>
  );
}

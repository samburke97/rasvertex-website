import Hero from "../components/painting/Hero";
import StatsRibbon from "../components/painting/StatsRibbon";
import Specialisations from "../components/painting/Specialisations";
import PaintSystems from "../components/painting/PaintSystems";
import BeforeAfter from "../components/painting/BeforeAfter";
import FeaturedProject from "../components/painting/FeaturedProject";
import ProjectIndex from "../components/painting/ProjectIndex";
import Process from "../components/painting/Process";
import ServiceAreas from "../components/painting/ServiceAreas";
import FAQ from "../components/painting/FAQ";

export default function PaintingPage() {
  return (
    <>
      <Hero />
      <StatsRibbon />
      <Specialisations />
      {/* <PaintSystems />
      <BeforeAfter />
      <FeaturedProject />
      <ProjectIndex />
      <Process />
      <ServiceAreas />
      <FAQ /> */}
    </>
  );
}

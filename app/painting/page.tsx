// import { paintingServiceMetadata } from "../../components/seo/PageSEO";
import PaintingHero from "../components/painting/PaintingHero";
import ProblemSolution from "../components/painting/ProblemSolution";
import PhotoGrid from "../components/painting/PhotoGrid";
import ServiceBreakdown from "../components/painting/ServiceBreakdown";
import TrustStrip from "../components/painting/TrustStrip";
import PaintingFAQ from "../components/painting/PaintingFAQ";
import PaintingCTA from "../components/painting/PaintingCTA";

// export const metadata = paintingServiceMetadata;

export default function PaintingPage() {
  return (
    <>
      <PaintingHero />
      <ProblemSolution />
      <PhotoGrid />
      <ServiceBreakdown />
      <TrustStrip />
      <PaintingFAQ />
      <PaintingCTA />
    </>
  );
}

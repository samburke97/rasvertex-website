import { generatePageMetadata } from "../components/seo/PageSEO";
import Hero from "../components/painting/Hero";
import ServicePicker from "../components/painting/ServicePicker";
import ServicePickerSEO from "../components/painting/ServicePickerSEO";
import TeamStrip from "../components/painting/TeamStrip";
import ServiceFeatures from "../components/painting/ServiceFeatures";
import BeforeAfter from "../components/painting/BeforeAfter";
import PaintingProjects from "../components/painting/PaintingProjects";
import PaintingIntro from "../components/painting/PaintingIntro";
import FAQ from "../components/painting/FAQ";

export const metadata = generatePageMetadata({
  title: "Painting Services Sunshine Coast",
  description:
    "Residential, commercial and body corporate painting across the Sunshine Coast. QBCC licensed, 5-year written warranty, one project manager from quote to sign-off.",
  path: "/painting",
  keywords: [
    "painting Sunshine Coast",
    "commercial painting Sunshine Coast",
    "body corporate painting",
    "residential painter Noosa",
    "exterior painting Caloundra",
    "strata painting Maroochydore",
    "painter Mooloolaba",
    "exterior painting Sunshine Coast",
  ],
});

export default function PaintingPage() {
  return (
    <>
      <ServicePickerSEO />
      <section className="pt-20">
        <Hero />
      </section>
      <section className="pt-20">
        <PaintingIntro />
      </section>

      <TeamStrip />
      <ServicePicker />

      <div style={{ position: "relative" }}>
        <BeforeAfter />
        <ServiceFeatures />
      </div>

      <PaintingProjects />

      <FAQ />
    </>
  );
}

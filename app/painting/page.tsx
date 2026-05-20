import Hero from "../components/painting/Hero";
import Specialisations from "../components/painting/Specialisations";
import BeforeAfter from "../components/painting/BeforeAfter";
import ServiceFeatures from "../components/painting/ServiceFeatures";
import Process from "../components/painting/Process";
import ServicePicker from "../components/painting/ServicePicker";
import Statement from "../components/painting/Statement";
import ClientTypes from "../components/painting/ClientTypes";
import TeamStrip from "../components/painting/TeamStrip";
import CtaStrip from "../components/painting/CTAStrip";

export default function PaintingPage() {
  return (
    <>
      <Hero />
      <ServicePicker />
      {/* ServiceFeatures sticks, BeforeAfter scrolls over it */}
      <TeamStrip />
      <div style={{ position: "relative" }}>
        <ServiceFeatures />
        <BeforeAfter />
      </div>

      <CtaStrip />
      {/* <Process /> */}
    </>
  );
}

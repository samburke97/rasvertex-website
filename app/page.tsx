import HomeIntro from "./components/homepage/HomeIntro";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import ProcessSection from "./components/homepage/ProcessSection";
import TestimonialsSection from "./components/homepage/TestimonialSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import CaseStudy from "./components/homepage/CaseStudy";
import Hero from "./components/homepage/Hero";
import PageCtaStrip from "./components/shared/PageCtaStrip";
import Carousel from "./components/homepage/Carousel";
import IndustriesSection from "./components/homepage/IndustriesSection";
import RopeAccessSection from "./components/homepage/RopeAccessSection";

export default function Home() {
  return (
    <>
      <section className="px-10 py-10 ">
        <Hero />
      </section>
      <section className="py-20">
        <PartnersCarousel />
      </section>
      <section className="px-10 py-20">
        <IndustriesSection />
      </section>
      <section className="px-10 py-20">
        <Carousel />
      </section>
      <section className="px-10 py-20">
        <RopeAccessSection />
      </section>
      <section className="px-10 py-20 ">
        <ProcessSection />
      </section>
      <div className="px-10 py-20">
        <TestimonialsSection />
      </div>
      <div className=" px-10 pt-30">
        <CaseStudy />
      </div>

      <div className="pt-30">
        <ProjectShowcase />
      </div>
    </>
  );
}

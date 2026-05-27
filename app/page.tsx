import HomeIntro from "./components/homepage/HomeIntro";
import ProjectShowcase from "./components/homepage/ProjectShowcase";
import ProcessSection from "./components/homepage/ProcessSection";
import TestimonialsSection from "./components/homepage/TestimonialSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import CaseStudy from "./components/homepage/CaseStudy";
import Hero from "./components/homepage/Hero";
import ServiceAreas from "./components/ServiceAreas";
import PageCtaStrip from "./components/shared/PageCtaStrip";
import ExperienceSection from "./components/homepage/ExperienceSection";
import Carousel from "./components/homepage/Carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-10 pt-20 pb-20">
        <HomeIntro />

        {/* <ExperienceSection /> */}
      </section>

      <section className="px-10">
        <Carousel />
      </section>
      <section className="pt-20">
        <PartnersCarousel />
      </section>
      <section className="pt-10">
        <ProcessSection />
      </section>

      <div className=" px-10 pt-30">
        <CaseStudy />
      </div>
      <div className="pt-30">
        <TestimonialsSection />
      </div>

      <div className="pt-30">
        <ProjectShowcase />
      </div>

      <div className="pt-30">
        <ServiceAreas />
      </div>
      <PageCtaStrip
        heading="Get a quote that holds up at handover."
        sub="Tell us the building, the scope, and when you need to be done. We'll come and look, then send a scoped quote inside five business days — line-itemed, not lump-sum."
        ctaLabel="Request a quote →"
        ctaHref="/contact"
      />
    </>
  );
}

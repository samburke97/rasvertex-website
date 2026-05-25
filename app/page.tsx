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

export default function Home() {
  return (
    <>
      <Hero />
      <div className="pt-20 px-20">
        <HomeIntro />
      </div>
      <div className="pb-24">
        <ExperienceSection />
      </div>
      <div className="pb-8">
        <PartnersCarousel />
      </div>
      <div className="pb-24">
        <CaseStudy />
      </div>
      <div className="pb-24">
        <ProcessSection />
      </div>
      <div className="pb-24">
        <TestimonialsSection />
      </div>
      <div className="pb-24">
        <ProjectShowcase />
      </div>
      <div className="pb-24">
        <ServiceAreas />
      </div>
      <PageCtaStrip
        heading="Ready to get started?"
        sub="We'll be on site within 48 hours. No obligation, no pushy sales rep — just a trade lead who knows what they're looking at."
        ctaLabel="Let's talk about your project →"
        ctaHref="/contact"
      />
    </>
  );
}

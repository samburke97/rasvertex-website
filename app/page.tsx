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
      <section className="px-10 pt-20">
        <HomeIntro />
        <ExperienceSection />
      </section>

      <div className="pt-30">
        <PartnersCarousel />
      </div>
      <div className="pt-30">
        <CaseStudy />
      </div>
      <div className="pt-30">
        <ProcessSection />
      </div>
      <div className="pt-10">
        <ProjectShowcase />
      </div>
      <div className="pt-10">
        <TestimonialsSection />
      </div>

      <div className="pt-10">
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

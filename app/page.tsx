import HomeIntro from "./components/homepage/HomeIntro";
import ScrollFeatures from "./components/homepage/ScrollFeatures";
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
      <HomeIntro />
      <PartnersCarousel />
      <ExperienceSection />
      <CaseStudy />
      <ProcessSection />
      <TestimonialsSection />
      <ProjectShowcase />

      <ServiceAreas />
      <PageCtaStrip
        heading="Ready to get started?"
        sub="We'll be on site within 48 hours. No obligation, no pushy sales rep — just a trade lead who knows what they're looking at."
        ctaLabel="Let's talk about your project →"
        ctaHref="/contact"
      />
    </>
  );
}

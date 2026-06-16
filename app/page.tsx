// app/page.tsx

import ProjectShowcase from "./components/homepage/ProjectShowcase";
import ServiceAccordion from "./components/shared/ServiceAccordion";
import TestimonialsSection from "./components/homepage/TestimonialSection";
import PartnersCarousel from "./components/homepage/PartnersCarousel";
import CaseStudy from "./components/homepage/CaseStudy";
import Hero from "./components/homepage/Hero";
import Carousel from "./components/homepage/Carousel";
import RopeAccessSection from "./components/homepage/RopeAccessSection";
import TeamIntro from "./components/homepage/TeamIntro";
import ReviewCard from "./components/shared/ReviewCard";
import PhotoGrid from "./components/shared/PhotoGrid";
import { PROCESS_STEPS, PROCESS_STATEMENT } from "./data/homepageProcessData";

export default function Home() {
  return (
    <>
      <section className="px-10 py-10">
        <Hero />
      </section>
      <section className="py-20">
        <PartnersCarousel />
      </section>
      <section className="px-10 py-20">
        <RopeAccessSection />
      </section>
      <section className="px-10 py-20">
        <TeamIntro />
      </section>
      <section className="px-10 pt-20 pb-10">
        <Carousel />
      </section>
      <section className="px-10 py-20">
        <ServiceAccordion
          heading={
            <>
              25+ years on the Sunshine Coast.
              <br />
              Here&rsquo;s how we run every project.
            </>
          }
          ariaLabel="25+ years on the Sunshine Coast. Here's how we run every project."
          statement={PROCESS_STATEMENT}
          ctaLabel="Ready to start your project? →"
          ctaHref="/contact"
          services={PROCESS_STEPS}
          headingId="process-heading"
        />
      </section>
      <div className="px-10 py-20">
        <TestimonialsSection />
      </div>
      <div className="px-10 py-20">
        <CaseStudy />
      </div>
      <div className="px-10 py-20">
        <ReviewCard />
      </div>
      <div className="px-10 py-20">
        <PhotoGrid />
      </div>
      <div className="pt-30 py-20">
        <ProjectShowcase />
      </div>
    </>
  );
}

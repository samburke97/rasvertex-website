// app/page.tsx

import PartnersCarousel from "./components/homepage/PartnersCarousel";
import RopeAccessSection from "./components/homepage/RopeAccessSection";
import PartnersSection from "./components/homepage/PatnersSection";
import ServiceAccordion from "./components/shared/ServiceAccordion";
import ServiceCards from "./components/shared/ServiceCards";
import { WHO_WE_WORK_FOR_CARDS } from "./data/homepageWhoWeWorkForData";
import CaseStudy from "./components/homepage/CaseStudy";
import TestimonialsSection from "./components/homepage/TestimonialSection";
import { PROCESS_STEPS, PROCESS_STATEMENT } from "./data/homepageProcessData";
import HeroVariant from "./components/homepage/HeroVariant";

export default function Home() {
  return (
    <>
      <section className="py-10">
        <HeroVariant />
      </section>

      <section
        className="py-20"
        aria-label="Industry partners and accreditations"
      >
        <PartnersCarousel />
      </section>

      <section className="px-10 py-20" aria-labelledby="rope-access-heading">
        <RopeAccessSection />
      </section>

      <section className="px-10 py-20" aria-label="Who we work for">
        <ServiceCards
          embedded
          cards={WHO_WE_WORK_FOR_CARDS}
          heading="Who we work for."
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
        />
      </section>

      <section className="px-10 py-20" aria-labelledby="partner-heading">
        <PartnersSection />
      </section>

      <section className="px-10 py-20" aria-labelledby="process-heading">
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

      <section className="px-10 py-20" aria-labelledby="case-study-heading">
        <CaseStudy />
      </section>

      <section className="px-10 py-20" aria-label="Client testimonials">
        <TestimonialsSection />
      </section>
    </>
  );
}

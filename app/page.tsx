// app/page.tsx

import PartnersCarousel from "./components/homepage/PartnersCarousel";
import RopeAccessSection from "./components/homepage/RopeAccessSection";
import ServiceCards from "./components/shared/ServiceCards";
import TestimonialsSection from "./components/homepage/TestimonialSection";
import HeroVariant from "./components/homepage/HeroVariant";
import { WHY_CHOOSE_US_SLIDES as WHY_CHOOSE_US_POINTS } from "./data/homepageWhyChooseUsData";
import WarrantyCard from "./components/shared/WarrantyCard";
import PhotoCarousel from "./components/shared/PhotoCarousel";
import { PROJECTS } from "./data/projectsData";
import QuoteBookingForm from "./components/contact/QuoteBookingForm";

export default function Home() {
  return (
    <>
      <section
        className="pt-5 pb-10 md:pb-20 lg:pb-30 flex flex-col gap-6 md:gap-8 lg:gap-10"
        aria-label="Our services and industry partners"
      >
        <HeroVariant />
        <PartnersCarousel headingTag="h1" headingId="hero-heading" />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20 lg:py-32"
        aria-labelledby="rope-access-heading"
      >
        <RopeAccessSection
          personName="Caroline"
          personRole="Client Services Manager"
          personPhoto="/images/people/caro.jpg"
          personCtaHeading="Ready to talk about your project?"
          ctaLabel="Let us know how we can help"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="No subcontractors"
      >
        <WarrantyCard
          stat="100%"
          statLabel={"Fully\nEmployed"}
          heading="Local projects, Local team."
          body="We built our own team instead of relying on subcontractors. Our painters, rope access technicians, waterproofers and cleaners work together under the same systems and safety standards to deliver consistent quality. It’s the kind of accountability that comes from being your neighbour."
        />
      </section>
      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={WHY_CHOOSE_US_POINTS.map((s) => ({
            photo: s.image,
            alt: s.imageAlt,
            title: s.heading,
            body: s.body,
          }))}
          heading={
            <>
              Here&rsquo;s why building managers and{" "}
              <br className="hidden md:block" />
              property owners choose us.
            </>
          }
          ariaLabel="Why building managers choose RAS-VERTEX"
          footerCtaLabel="Meet the team →"
          footerCtaHref="/about-us"
          display="list"
          eyebrow=""
          variant="white"
          footerLogosHeading="Fully Qualified"
          footerLogos={[
            {
              src: "/images/associations/qbcc.png",
              alt: "QBCC",
            },
            {
              src: "/images/associations/smartstrata.png",
              alt: "Smart Strata",
            },
            {
              src: "/images/associations/work-cover.svg",
              alt: "WorkCover Queensland",
              width: 120,
              height: 80,
            },
          ]}
        />
      </section>
      <section
        className="px-5 md:px-10 pt-20 md:pt-10 pb-10 md:pb-20"
        aria-label="Client testimonials"
      >
        <TestimonialsSection />
      </section>
      <section className="pb-10 md:pb-20" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="px-5 md:px-10 pb-5 md:pb-10">
          Our Projects
        </h2>
        <PhotoCarousel
          slides={PROJECTS.map((p) => ({
            src: p.image,
            alt: p.imageAlt,
            title: p.category,
            location: p.location,
          }))}
          ariaLabel="Recent projects across the Sunshine Coast"
          ctaLabel="View all projects →"
          ctaHref="/projects"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20 lg:py-32"
        aria-label="Request a free quote"
      >
        <QuoteBookingForm
          headingLevel="h2"
          heading={
            <>
              Let&rsquo;s talk about
              <br />
              your building.
            </>
          }
          leadParagraph="For 25 years, we've helped Sunshine Coast properties maintain higher standards. How can we help yours?"
          showGoogleRating={false}
          showVideo={false}
        />
      </section>
    </>
  );
}

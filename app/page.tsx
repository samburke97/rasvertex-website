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
import ContactSurface from "./components/contact/ContactSurface";

export default function Home() {
  return (
    <>
      <section
        className="pt-5 pb-30 flex flex-col gap-6 md:gap-8 lg:gap-10"
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
          ctaLabel="Let's talk about your project"
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
          body="We chose to build our own team instead of relying on subcontractors. Our painters, rope access technicians, waterproofers, cleaners and height safety specialists work together every day under the same systems, safety standards and expectations, a simpler way to deliver consistent quality, and how we've always believed property maintenance should be done."
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
              Here&rsquo;s why building managers and
              <br />
              property owners choose us.
            </>
          }
          ariaLabel="Why building managers choose RAS-VERTEX"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>
      <section
        className="px-5 md:px-10 pt-5 md:pt-10 pb-10 md:pb-20"
        aria-label="Client testimonials"
      >
        <TestimonialsSection />
      </section>
      <section className="pb-10" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className=" pb-10">
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
        <ContactSurface
          headingLevel="h2"
          leadParagraph="For 25 years, we've been the trusted maintenance partner for Sunshine Coast body corporates, strata committees, commercial property managers and hotels. Across every building type, we maintain higher standards."
          showPhoto={false}
          showContactGrid={false}
          showGoogleRating={false}
          trustGroups={[
            {
              heading: "5 Year warranty as standard",
              logos: [
                {
                  src: "/images/associations/dulux.svg",
                  alt: "Dulux",
                  width: 108,
                  height: 32,
                  displayHeight: 30,
                },
                {
                  src: "/images/associations/haymes.svg",
                  alt: "Haymes Paint",
                  width: 642,
                  height: 289,
                  displayHeight: 38,
                },
                {
                  src: "/images/associations/sika.webp",
                  alt: "Sika",
                  width: 1024,
                  height: 1024,
                  displayHeight: 46,
                },
              ],
            },
            {
              heading: "Fully Qualified",
              logos: [
                {
                  src: "/images/associations/qbcc.png",
                  alt: "QBCC",
                  width: 1610,
                  height: 1418,
                  displayHeight: 42,
                },
                {
                  src: "/images/associations/work-cover.svg",
                  alt: "WorkCover Queensland",
                  width: 287,
                  height: 85,
                  displayHeight: 30,
                },
                {
                  src: "/images/associations/smartstrata.png",
                  alt: "Smart Strata",
                  width: 2987,
                  height: 492,
                  displayHeight: 26,
                },
              ],
            },
          ]}
        />
      </section>
    </>
  );
}

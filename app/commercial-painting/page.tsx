// app/commercial-painting/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceCrossLink from "../components/shared/ServiceCrossLink";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";

import {
  HERO_SLIDES,
  SERVICES,
  PROCESS_STEPS,
  FAQS,
  FAQ_CONTACT,
} from "../data/commercialPaintingData";

export const metadata = generatePageMetadata({
  title: "Commercial & High-Rise Painting Sunshine Coast",
  description:
    "Commercial and high-rise painting on the Sunshine Coast. IRATA rope access, coastal-spec paint systems, 8-year written warranty. Body corporates, strata, commercial buildings and hotels. QBCC licensed.",
  path: "/commercial-painting",
  keywords: [
    "commercial painting Sunshine Coast",
    "high-rise painting Sunshine Coast",
    "body corporate painting Sunshine Coast",
    "strata painting Sunshine Coast",
    "commercial painter Maroochydore",
    "commercial painter Mooloolaba",
    "commercial painter Noosa",
    "rope access painting Sunshine Coast",
    "exterior painting Sunshine Coast commercial",
    "building repaint Sunshine Coast",
    "QBCC painter Sunshine Coast",
    "high rise painter Sunshine Coast",
    "commercial painters Sunshine Coast",
    "office painting Sunshine Coast",
    "industrial painting Sunshine Coast",
    "commercial repainting Sunshine Coast",
    "high rise painters Sunshine Coast",
    "high rise building painters",
    "high rise repaint Sunshine Coast",
    "high rise facade painting Sunshine Coast",
    "high rise apartment painting Sunshine Coast",
    "high rise strata painting",
  ],
});

export default function CommercialPaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Commercial & High-Rise Painting Sunshine Coast"
        description="Commercial and high-rise painting on the Sunshine Coast. IRATA rope access, coastal-spec paint systems, 8-year written warranty. Body corporates, strata, commercial buildings and hotels. QBCC licensed."
        image="https://www.ras-vertex.com.au/images/projects/1.jpeg"
        url="https://www.ras-vertex.com.au/commercial-painting"
        serviceType="Commercial Painting"
        areaServed={[
          "Sunshine Coast",
          "Noosa",
          "Caloundra",
          "Maroochydore",
          "Mooloolaba",
          "Kawana",
          "Coolum",
        ]}
      />

      <ServiceSEO
        heading="Commercial and high-rise painting on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              Commercial and high-rise painting on the Sunshine Coast, backed by
              25 years of experience.
            </>
          }
          lede="From high rise facade repaints to commercial rooftops, we deliver commercial painting for councils, schools, hotels, shopping centres, and commercial property managers across the Sunshine Coast. Combining IRATA certified rope access, commercial grade Dulux and Haymes coating systems, and meticulous surface preparation, we deliver long lasting results with minimal disruption to your business."
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
          headingId="commercial-painting-hero-heading"
          breadcrumb={{
            parentLabel: "Painting",
            parentHref: "/painting",
            currentLabel: "Commercial",
          }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Commercial rope access painting",
              body: "Specialists in high-rise and complex access commercial painting. Rope access is our preferred method for safe, cost-effective work with minimal disruption. Every project is managed from access planning through to completion, compliance, and warranty handover.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Coastal-grade Dulux & Haymes coating systems",
              body: "We specify commercial coating systems engineered for Sunshine Coast conditions including salt air exposure, high humidity, and UV degradation to ensure long-term performance and asset protection.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "The right paint system for your building",
              body: "Every project is engineered around the building, substrate, and exposure conditions, ensuring coatings are specified correctly for long-term durability and warranty compliance.",
            },
          ]}
          heading={
            <>
              The commercial painters Sunshine Coast property managers and
              facilities teams rely on.
            </>
          }
          ariaLabel="Why property managers choose RAS-VERTEX for commercial painting on the Sunshine Coast"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="list"
          eyebrow=""
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="8-year warranty"
      >
        <WarrantyCard
          stat="8"
          statLabel={"year\nwarranty"}
          heading="Specified right. Warranted in writing."
          body="Every commercial repaint comes with an 8-year written workmanship warranty. Where eligible Dulux and Haymes systems are used, the manufacturer warranty of up to 15 years is also passed on to the building owner, giving you clear protection on both the work and the materials."
          logosHeading="Backed by the best."
          logos={[
            {
              src: "/images/associations/haymes.svg",
              alt: "Haymes Paint",
              width: 100,
              height: 50,
            },
            {
              src: "/images/associations/dulux.svg",
              alt: "Dulux",
              width: 100,
              height: 50,
            },
          ]}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceAccordion
          heading={
            <>
              What kind of painting{" "}
              <br className="hidden md:block" />
              are you looking for?
            </>
          }
          paragraph="From high-rise repaints to commercial interiors, every job is backed by coastal-spec systems and an 8-year written warranty."
          ariaLabel="What kind of commercial painting are you looking for?"
          services={SERVICES}
          headingId="commercial-painting-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      <section className="px-5 md:px-10 pb-10 md:pb-20">
        <ServiceCrossLink
          lead="Are you a body corporate or strata?"
          linkText="Here's how we'll manage your project"
          href="/body-corporate-painting"
          arrow
        />
      </section>

      {/* ── How we run a commercial repaint ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="process-heading"
      >
        <InspectionProcess
          heading="How we run a commercial repaint."
          lede="Every stage is planned, managed, and communicated, so you always know what's happening, what's next, and when your project will be completed."
          steps={PROCESS_STEPS}
          headingId="process-heading"
          ctaLabel="Chat to our commercial painting team"
          ctaHref="/contact"
        />
      </section>

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="RAS-VERTEX carried out a full external repaint, including a thorough building wash and remedial works beforehand. Great communication and planning, with the high standards that Phil, Shane and Jason set, and the flexibility to fix issues as they came up."
          name="Kerry O'Donnell"
          role="12 Storey Commercial High-Rise, Sunshine Coast"
          logoSrc=""
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="commercial-painting-services-carousel-label"
      >
        <h2
          id="commercial-painting-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          Complete commercial property care, not just{" "}
          <br className="hidden xl:block" />a repaint, explore our full range
          of services below.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter((slide) => slide.href !== "/painting")}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="commercial-painting-faq-heading"
        />
      </section>
    </>
  );
}

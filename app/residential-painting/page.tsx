// app/residential-painting/page.tsx

import Link from "next/link";
import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import { cld } from "../lib/cloudinary";

import {
  HERO_SLIDES,
  SERVICES,
  PROCESS_STEPS,
  FAQS,
  FAQ_CONTACT,
} from "../data/residentialPaintingData";

export const metadata = generatePageMetadata({
  title: "Residential Painters Sunshine Coast | House Painting",
  description:
    "Trusted house painters on the Sunshine Coast. Exterior and interior residential painting, pre-sale refreshes and colour consulting. QBCC licensed, 8-year written warranty, commercial-grade paint systems.",
  path: "/residential-painting",
  keywords: [
    "residential painters Sunshine Coast",
    "house painting Sunshine Coast",
    "exterior house painting Sunshine Coast",
    "interior painting Sunshine Coast",
    "painter Noosa",
    "painter Maroochydore",
    "painter Mooloolaba",
    "painter Buderim",
    "painter Caloundra",
    "pre-sale painting Sunshine Coast",
    "QBCC painter residential Sunshine Coast",
    "house painter Sunshine Coast",
    "repaint specialists Sunshine Coast",
  ],
});

export default function ResidentialPaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Residential Painting Sunshine Coast"
        description="Trusted house painters on the Sunshine Coast. Exterior and interior residential painting, pre-sale refreshes and colour consulting. QBCC licensed, 8-year written warranty, commercial-grade paint systems."
        image="https://www.ras-vertex.com.au/images/projects/1.jpeg"
        url="https://www.ras-vertex.com.au/residential-painting"
        serviceType="Residential Painting"
        areaServed={[
          "Sunshine Coast",
          "Noosa",
          "Caloundra",
          "Maroochydore",
          "Mooloolaba",
          "Buderim",
          "Kawana",
          "Coolum",
        ]}
      />

      <ServiceSEO
        heading="Residential painting services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              We deliver residential painting on the Sunshine Coast that looks
              better, lasts longer, and holds up in our coastal conditions.
            </>
          }
          lede="Local and professional house painters delivering commercial-grade preparation and coating systems for long-lasting Sunshine Coast homes. QBCC licensed with an 8-year written workmanship warranty."
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
          headingId="residential-painting-hero-heading"
          breadcrumb={{
            parentLabel: "Painting",
            parentHref: "/painting",
            currentLabel: "Residential",
          }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Better results that last longer",
              body: "We focus on thorough preparation and proven Haymes & Dulux coating systems to deliver a finish that looks better on day one and continues to perform for the long run.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Built around your schedule",
              body: "Whether you're living in the home or preparing it for sale, we plan each stage of the project to minimise disruption while maintaining a high standard of workmanship.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "A local team with real accountability",
              body: "We’re a Sunshine Coast-based team, every project carries our reputation locally, which means a higher standard of care, communication, and follow-through on every job.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why homeowners across the{" "}
              <br className="hidden md:block" />
              Sunshine Coast choose us.
            </>
          }
          ariaLabel="Why homeowners choose RAS-VERTEX for residential painting"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="8-year warranty"
      >
        <WarrantyCard
          body="Every residential repaint is backed by a 8-year written workmanship warranty, issued at handover for complete peace of mind. Manufacturer warranties from Haymes and Dulux, up to 15 years on selected exterior systems, are also registered in your name for added protection and long-term confidence."
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
          paragraph="Whether it's a full exterior repaint or an interior refresh, we bring the same coastal-spec systems and preparation standard to every home."
          ariaLabel="What kind of residential painting are you looking for?"
          services={SERVICES}
          headingId="residential-painting-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      {/* ── How a residential repaint works ── */}
      <section className="px-5 md:px-10 py-10 md:py-20" aria-labelledby="process-heading">
        <InspectionProcess
          heading="Your home, your vision. Professionally managed from start to finish."
          lede="Clear steps, ongoing support, and a structured process that ensures your home is delivered exactly as planned."
          steps={PROCESS_STEPS}
          headingId="process-heading"
          ctaLabel="Get a free quote →"
          ctaHref="/contact"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="residential-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc={cld("residential-before", { width: 1600 })}
          afterSrc={cld("residential-after", { width: 1600 })}
          beforeAlt="Luxury coastal home before exterior repaint by RAS-VERTEX"
          afterAlt="Luxury coastal home after exterior repaint by RAS-VERTEX"
          projectName="Luxury Coastal Home Repaint"
          location="Sunshine Coast, QLD"
          heading="A failed coating system, restored to a flawless finish."
          body="The previous coating system on this luxury coastal property had failed, leaving surfaces weathered and uneven. Our painters undertook extensive surface remediation, addressing peeling, cracking, and substrate damage, before applying a premium 4-coat Haymes paint system. The result? A flawless, weather-resistant finish that complements the architecture and lives up to the stunning ocean views."
          ctaHref="/contact"
          ctaLabel="Chat to us about your home →"
          headingId="residential-before-after-heading"
        />
      </section>

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="From the first call to the final walkthrough, everything was exactly as promised. No surprises, no upsells, just a beautifully finished home and an eight-year warranty in writing."
          name="Emma Whitfield"
          role="Homeowner, Buderim"
          logoSrc=""
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="residential-painting-services-carousel-label"
      >
        <h2
          id="residential-painting-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          Beyond painting, we support every part of your home,{" "}
          <br className="hidden xl:block" />
          explore our full range of services below.
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
          headingId="residential-painting-faq-heading"
          ctaHeading="Your dream home starts here."
        />
      </section>
    </>
  );
}

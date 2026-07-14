// app/body-corporate-painting/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceCrossLink from "../components/shared/ServiceCrossLink";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";
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
} from "../data/bodyCorporatePaintingData";

export const metadata = generatePageMetadata({
  title: "Body Corporate Painting Sunshine Coast | Strata Specialists",
  description:
    "Body corporate and strata painting specialists on the Sunshine Coast. IRATA rope access, coastal paint systems, 8-year written warranty, committee-ready proposals. QBCC licensed.",
  path: "/body-corporate-painting",
  keywords: [
    "body corporate painting Sunshine Coast",
    "strata painting Sunshine Coast",
    "body corporate painter Maroochydore",
    "strata painter Mooloolaba",
    "body corporate painting Noosa",
    "strata painting Caloundra",
    "high-rise strata repaint Sunshine Coast",
    "body corporate exterior painting",
    "strata committee painting proposal",
    "QBCC strata painter Sunshine Coast",
    "rope access strata painting",
    "sinking fund painting Sunshine Coast",
  ],
});

export default function BodyCorporatePaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Body Corporate Painting Sunshine Coast"
        description="Body corporate and strata painting specialists on the Sunshine Coast. IRATA rope access, coastal paint systems, 8-year written warranty, committee-ready proposals. QBCC licensed."
        image="https://www.ras-vertex.com.au/images/projects/1.jpeg"
        url="https://www.ras-vertex.com.au/body-corporate-painting"
        serviceType="Body Corporate Painting"
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
        heading="Body corporate and strata painting on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              Specialist body corporate and strata painters for Sunshine Coast
              buildings.
            </>
          }
          lede="Committee-ready proposals, zone-staged delivery, rope access with no car park disruption, and an 8-year written warranty issued at handover."
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
          headingId="body-corporate-painting-hero-heading"
          breadcrumb={{
            parentLabel: "Painting",
            parentHref: "/painting",
            currentLabel: "Body Corporate",
          }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Zone-staged delivery",
              body: "We work one area at a time, allowing residents to continue using their homes, car parks and shared spaces while the project progresses.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Committee-ready proposals",
              body: "Detailed, itemised quotes formatted for body corporate approval and sinking fund planning, not vague estimates.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "8-year warranty, issued in writing",
              body: "Every repaint is backed by a written workmanship warranty registered with your body corporate at handover.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why committees and strata{" "}
              <br className="hidden md:block" />
              managers choose us.
            </>
          }
          ariaLabel="Why committees choose RAS-VERTEX for body corporate painting"
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
          stat="8"
          statLabel={"year\nwarranty"}
          heading="Complete confidence for your community."
          body="Every body corporate repaint includes our 8-year written workmanship warranty as standard. Where eligible coating systems are specified, manufacturer warranties are also supplied. From paint specifications to maintenance recommendations, your committee receives a complete handover package for future reference."
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
              What does your body corporate <br className="hidden md:block" />
              building need?
            </>
          }
          paragraph="From full exterior repaints to balcony, roof and common area coatings, we deliver coastal-spec painting solutions designed for Sunshine Coast body corporate properties."
          ariaLabel="What's included in a strata painting program?"
          services={SERVICES}
          headingId="body-corporate-services-heading"
          ctaLabel="Get a committee proposal →"
          ctaHref="/contact"
        />
      </section>

      <section className="px-5 md:px-10 pb-10 md:pb-20">
        <ServiceCrossLink
          lead="Are you a commercial building?"
          linkText="Find out more from our commercial team"
          href="/commercial-painting"
          arrow
        />
      </section>

      {/* ── How we run a strata repaint ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="process-heading"
      >
        <InspectionProcess
          heading="How we run a strata repaint."
          lede="Five stages from committee proposal to warranty handover, every stage documented, every resident informed, no scope surprises."
          steps={PROCESS_STEPS}
          headingId="process-heading"
          ctaLabel="Get a committee proposal →"
          ctaHref="/contact"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="body-corporate-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc={cld("springfield-before", { width: 1200 })}
          afterSrc={cld("springfield-after", { width: 1200 })}
          beforeAlt="Springfield Apartments Coolum Beach before exterior repaint, weathered coastal facade"
          afterAlt="Springfield Apartments Coolum Beach after exterior repaint by RAS-VERTEX"
          projectName="Springfield Apartments"
          location="Coolum Beach, QLD"
          heading="3 storeys. 4 buildings. 4 weeks."
          body="This characterful Coolum Beach property had weathered its share of coastal conditions. Working meticulously around every curve, our team carefully restored the building to its former glory, a complete exterior transformation across all four buildings in just four weeks."
          ctaHref="/contact"
          ctaLabel="Chat to us about your building →"
          headingId="body-corporate-before-after-heading"
        />
      </section>

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="Thank you for the work performed and the professionalism shown throughout. With disruption already high from developments next door, having abseilers, tool noise, dust and driveway closures on top tested residents' patience, but your team showed real understanding and empathy."
          name="Elizabeth Nottle"
          role="Landsborough65"
          logoSrc=""
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="body-corporate-painting-services-carousel-label"
      >
        <h2
          id="body-corporate-painting-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          Beyond painting, we support every part of your{" "}
          <br className="hidden xl:block" />
          body corporate community, explore our full range of services below.
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
          headingId="body-corporate-painting-faq-heading"
        />
      </section>
    </>
  );
}

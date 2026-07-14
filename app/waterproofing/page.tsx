// app/waterproofing/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import ProcessCards from "../components/shared/ProcessCards";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import InspectionProcess from "../components/shared/InspectionProcess";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import { cld } from "../lib/cloudinary";

import {
  HERO_SLIDES,
  SERVICES,
  SERVICE_STEPS,
  PREP_STEPS,
  FAQS,
  FAQ_CONTACT,
} from "../data/waterproofingData";

export const metadata = generatePageMetadata({
  title: "Waterproofing Sunshine Coast | Roof, Balcony & Leak Detection",
  description:
    "Professional waterproofing on the Sunshine Coast. Concrete roof restoration, balcony membrane replacement, leak detection and remedial injection. Diamond grinding, QBCC licensed, written warranty.",
  path: "/waterproofing",
  keywords: [
    "waterproofing Sunshine Coast",
    "roof waterproofing Sunshine Coast",
    "balcony waterproofing Sunshine Coast",
    "concrete roof restoration Sunshine Coast",
    "leak detection Sunshine Coast",
    "membrane waterproofing Sunshine Coast",
    "body corporate waterproofing Sunshine Coast",
    "strata waterproofing Sunshine Coast",
    "waterproofing Maroochydore",
    "waterproofing Mooloolaba",
    "waterproofing Noosa",
    "QBCC waterproofing Sunshine Coast",
    "commercial waterproofing Sunshine Coast",
    "waterproofing contractors Sunshine Coast",
    "remedial waterproofing Sunshine Coast",
    "leaking balcony repairs Sunshine Coast",
  ],
});

export default function WaterproofingPage() {
  return (
    <>
      <ServiceSchema
        name="Waterproofing Sunshine Coast"
        description="Professional waterproofing on the Sunshine Coast. Concrete roof restoration, balcony membrane replacement, leak detection and remedial injection. Diamond grinding, QBCC licensed, written warranty."
        image="https://www.ras-vertex.com.au/nav/waterproofing.png"
        url="https://www.ras-vertex.com.au/waterproofing"
        serviceType="Waterproofing"
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
        heading="Waterproofing services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              The Sunshine Coast’s leading commercial and body corporate
              waterproofing team.
            </>
          }
          lede="From crack repair and surface preparation through to diamond grinding and membrane application, we deliver end to end waterproofing across Sunshine Coast schools, body corporate communities and commercial buildings, keeping structures protected, watertight and built to handle our coastal conditions."
          headingId="waterproofing-hero-heading"
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Preparation done properly",
              body: "Waterproofing only performs as well as the surface underneath it. We repair, grind and prime properly before any membrane goes down, ensuring long term adhesion and durability.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Systems built for coastal conditions",
              body: "We use waterproofing systems selected for Sunshine Coast exposure, including heat, salt and moisture, applied using equipment and methods that ensure proper bonding and coverage.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "Backed and documented",
              body: "Every project is handed over with clear documentation and written warranty coverage, giving building managers confidence in performance and long term maintenance planning.",
            },
          ]}
          heading={
            <>
              Here’s why building managers and property owners choose our
              waterproofing team.
            </>
          }
          ariaLabel="Why body corporates trust RAS-VERTEX waterproofing"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Waterproofing warranty"
      >
        <WarrantyCard
          stat="8"
          statLabel={"year\nwarranty"}
          heading="Prepared right. Warranted in writing."
          body="All membrane systems installed by RAS-VERTEX include a written workmanship warranty on completion. Where applicable, manufacturer warranties of up to 8 years are applied and included in the building record."
          logosHeading="Backed by the best."
          logos={[
            {
              src: "/images/associations/adheseal.png",
              alt: "Adheseal",
              width: 150,
              height: 50,
            },
            {
              src: "/images/associations/sika.png",
              alt: "Sika",
              width: 80,
              height: 50,
            },
          ]}
        />
      </section>
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="waterproofing-services-heading"
      >
        <InspectionProcess
          heading="What waterproofing service are you looking for?"
          steps={SERVICE_STEPS}
          image={{
            src: cld("waterproofing-services", { width: 1200 }),
            alt: "What waterproofing service are you looking for, RAS-VERTEX Sunshine Coast",
          }}
          compactHeading
          headingId="waterproofing-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
          ctaHref="/contact"
        />
      </section>
      <section className="px-5 md:px-10 py-10 md:py-20">
        <ProcessCards
          heading="Three steps before a drop of membrane goes down."
          lede="Waterproofing that lasts is determined long before the membrane goes down. The preparation stage is what prevents early failure, not the coating itself."
          steps={PREP_STEPS}
          headingId="waterproofing-prep-heading"
        />
      </section>
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="The team of Maxwell, Rob, Shannon and Nick did an amazing job in extremely difficult circumstances, with real professionalism and attention to detail throughout."
          name="Paul McCarthy"
          role="Medici"
          logoSrc=""
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="waterproofing-services-carousel-label"
      >
        <h2
          id="waterproofing-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          We do more than waterproofing, with specialist services{" "}
          <br className="hidden xl:block" />
          that support every part of your building.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter(
            (slide) => slide.href !== "/waterproofing",
          )}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="waterproofing-faq-heading"
          ctaHeading="Have a question about waterproofing?"
        />
      </section>
    </>
  );
}

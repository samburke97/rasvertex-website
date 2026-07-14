// app/height-safety/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import PartnersSection from "../components/homepage/PatnersSection";
import { cld } from "../lib/cloudinary";

import {
  HERO_SLIDES,
  SERVICES,
  WHY_CHOOSE_US,
  FAQS,
  FAQ_CONTACT,
} from "../data/heightSafetyData";

export const metadata = generatePageMetadata({
  title: "Height Safety & Rope Access Sunshine Coast | RAS-VERTEX",
  description:
    "Height safety installation, inspection and recertification on the Sunshine Coast. Anchor points, static lines and roof access systems to AS/NZS 1891. IRATA certified, QBCC licensed, compliance managed end-to-end.",
  path: "/height-safety",
  keywords: [
    "height safety Sunshine Coast",
    "anchor point installation Sunshine Coast",
    "height safety inspection Sunshine Coast",
    "height safety certification Sunshine Coast",
    "AS/NZS 1891 Sunshine Coast",
    "roof access system Sunshine Coast",
    "fall protection Sunshine Coast",
    "static line installation Sunshine Coast",
    "height safety body corporate Sunshine Coast",
    "rope access height safety",
    "height safety recertification Maroochydore",
    "WHS compliance Sunshine Coast",
    "commercial height safety Sunshine Coast",
    "roof safety compliance Sunshine Coast",
    "anchor point testing Sunshine Coast",
  ],
});

export default function HeightSafetyPage() {
  return (
    <>
      <ServiceSchema
        name="Height Safety Systems Sunshine Coast"
        description="Height safety installation, inspection and recertification on the Sunshine Coast. Anchor points, static lines and roof access systems to AS/NZS 1891. IRATA certified, QBCC licensed, compliance managed end-to-end."
        image={HERO_SLIDES[0].src}
        url="https://www.rasvertex.com.au/height-safety"
        serviceType="Height Safety"
      />

      <ServiceSEO
        heading="Height safety installation, inspection and certification on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              We design, install, and maintain height safety systems across the
              Sunshine Coast and beyond.
            </>
          }
          lede="Height safety is what we do across hundreds of Sunshine Coast buildings. From installation to inspection and certification, we keep systems compliant, tested and ready, year round."
          headingId="height-safety-hero-heading"
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Compliance that stays current",
              body: "Every system we install is tagged, logged and set up for scheduled recertification, so your height safety compliance is actively managed and never overlooked.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Installed and inspected by the same team",
              body: "The technicians who install your systems are the same ones who inspect and maintain them, so performance is understood in the real world, not just on paper.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "Engineering you can hand to your committee",
              body: "Every installation and inspection comes with clear, certified records ready for body corporate reporting, maintenance planning and insurance requirements.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why body corporates and facility{" "}
              <br className="hidden md:block" />
              managers trust our height safety systems.
            </>
          }
          ariaLabel="Why body corporates trust RAS-VERTEX height safety systems"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Annual recertification"
      >
        <WarrantyCard
          stat="12"
          statLabel={"month\ncertification"}
          heading="Compliance tracked. Never lapsed."
          body="AS NZS 1891 requires height safety systems to be inspected and recertified every 12 months. We manage the full cycle for body corporates and commercial buildings across the Sunshine Coast, from anchor point testing and inspections through to certification and renewal."
        />
      </section>
      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceAccordion
          heading={
            <>
              What height safety service{" "}
              <br className="hidden md:block" />
              are you looking for?
            </>
          }
          paragraph="From single anchor points to full facade systems, we install solutions across Sunshine Coast buildings that are compliant, practical and ready for future access, whether that's repainting, cleaning or maintenance work."
          ariaLabel="What height safety service are you looking for?"
          services={SERVICES}
          headingId="height-safety-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="Finding reliable at-height companies for Body Corporates used to be a challenge. RAS-VERTEX's reliable quoting process, care and attention to detail changed that, I'd recommend them to other strata management companies for their professionalism and quality of work."
          name="AAA Body Corporate"
          role=""
          logoSrc=""
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="height-safety-services-carousel-label"
      >
        <h2
          id="height-safety-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          We use our expertise on ropes to deliver complete{" "}
          <br className="hidden xl:block" />
          property maintenance solutions across the Sunshine Coast.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter(
            (slide) => slide.href !== "/height-safety",
          )}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="height-safety-faq-heading"
          ctaHeading="Chat to the Sunshine Coast’s Rope Access specialists."
        />
      </section>
    </>
  );
}

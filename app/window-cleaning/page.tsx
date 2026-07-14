// app/cleaning/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import ServiceCrossLink from "../components/shared/ServiceCrossLink";
import WarrantyCard from "../components/shared/WarrantyCard";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import InspectionProcess from "../components/shared/InspectionProcess";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import { cld } from "../lib/cloudinary";

import {
  HERO_SLIDES,
  SERVICES,
  SERVICE_STEPS,
  FAQS,
  FAQ_CONTACT,
} from "../data/cleaningData";

export const metadata = generatePageMetadata({
  title: "Window Cleaning Sunshine Coast | High-Rise & Commercial",
  description:
    "Professional window cleaning on the Sunshine Coast. IRATA rope access for high-rise and strata buildings, purified water systems, eco-friendly pressure washing. Streak-free results, QBCC licensed.",
  path: "/cleaning",
  keywords: [
    "window cleaning Sunshine Coast",
    "high-rise window cleaning Sunshine Coast",
    "commercial window cleaning Sunshine Coast",
    "strata window cleaning Sunshine Coast",
    "rope access window cleaning",
    "pressure cleaning Sunshine Coast",
    "building exterior cleaning Sunshine Coast",
    "window cleaner Noosa",
    "window cleaning Maroochydore",
    "window cleaning Mooloolaba",
    "facade cleaning Sunshine Coast",
    "solar panel cleaning Sunshine Coast",
    "body corporate window cleaning Sunshine Coast",
    "residential window cleaning Sunshine Coast",
    "purified water window cleaning",
    "glass cleaning Sunshine Coast",
  ],
});

export default function CleaningPage() {
  return (
    <>
      <ServiceSchema
        name="Window Cleaning Sunshine Coast"
        description="Professional window cleaning on the Sunshine Coast. IRATA rope access for high-rise and strata buildings, purified water systems, eco-friendly pressure washing. Streak-free results, QBCC licensed."
        image="https://www.ras-vertex.com.au/nav/cleaning.png"
        url="https://www.ras-vertex.com.au/window-cleaning"
        serviceType="Window Cleaning"
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
        heading="Window cleaning services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              We clean every window on every building across the Sunshine Coast,
              at any height.
            </>
          }
          lede="We take advantage of rope access and purified water systems to deliver a streak-free finish without disruption. Removing salt, grime and coastal build-up properly, keeps your glass cleaner for longer."
          headingId="cleaning-hero-heading"
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Gold standard water systems",
              body: "Our purified, deionised water systems remove 99.9% of solids, preventing mineral deposits as your windows dry. Combined with rope access systems, we deliver an industry-leading streak-free finish.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "High-rise rope access",
              body: "IRATA-certified technicians work up close and personal on every window at any height, without scaffolding or EWP hire, keeping access simple and disruption minimal.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "Ongoing Maintenance Plans",
              body: "Our tailored and ongoing cleaning schedules keep your building consistently maintained and spot free year-round, not just after one-off visits.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why property managers and{" "}
              <br className="hidden md:block" />
              owners choose our window cleaning.
            </>
          }
          ariaLabel="Why property managers choose RAS-VERTEX window cleaning"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Eco-friendly cleaning"
      >
        <WarrantyCard
          stat="100%"
          statLabel={"recycled\nwater system"}
          heading="Eco-friendly cleaning systems."
          body="We use purified water systems and recycled hot-water vacuum technology to eliminate chemical runoff and prevent discharge into stormwater systems."
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="cleaning-services-heading"
      >
        <InspectionProcess
          heading="What kind of window cleaning do you need?"
          steps={SERVICE_STEPS}
          image={{
            src: cld("commercial-high-rise-window-cleaning", { width: 1200 }),
            alt: "What kind of window cleaning do you need, RAS-VERTEX Sunshine Coast",
          }}
          compactHeading
          headingId="cleaning-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
          ctaHref="/contact"
        />
      </section>

      {/* ── External cleaning internal link callout ── */}
      <section className="px-5 md:px-10 pb-10 md:pb-20">
        <ServiceCrossLink
          lead="Looking for full building or facade cleaning?"
          linkText="See our dedicated external cleaning page"
          href="/external-cleaning"
          arrow
        />
      </section>

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="We've worked with RAS-VERTEX for six years now, covering a full exterior and stairwell paint, box gutter re-skinning, window works, abseiling remedial work and a full roof waterproofing membrane. Phil and his team are committed tradespeople who get the best possible results."
          name="John Dillon"
          role="Alexandria Apartments"
          logoSrc=""
        />
      </section>
      <section
        className="py-10 md:py-20"
        aria-labelledby="cleaning-services-carousel-label"
      >
        <h2
          id="cleaning-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          We work across every part of your property,{" "}
          <br className="hidden xl:block" /> from painting and maintenance to
          inspections and safety.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter((slide) => slide.href !== "/cleaning")}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="cleaning-faq-heading"
          ctaHeading="Keep your building looking sharp."
        />
      </section>
    </>
  );
}

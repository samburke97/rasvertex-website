// app/maintenance/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceIntro from "../components/shared/ServiceIntro";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import Carousel from "../components/homepage/Carousel";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";

import {
  HERO_SLIDES,
  SERVICES,
  PLAN_SLIDES,
  FAQS,
  FAQ_CONTACT,
} from "../data/maintenanceData";

export const metadata = generatePageMetadata({
  title: "Building Maintenance Sunshine Coast",
  description:
    "Commercial and body corporate building maintenance across the Sunshine Coast. Concrete repairs, roof restoration, leak detection, sign installation — IRATA rope access, QBCC licensed.",
  path: "/maintenance",
  keywords: [
    "building maintenance Sunshine Coast",
    "body corporate maintenance Sunshine Coast",
    "commercial building maintenance",
    "roof restoration Sunshine Coast",
    "concrete repairs Sunshine Coast",
    "leak detection Sunshine Coast",
    "facade inspection Sunshine Coast",
    "facade maintenance Sunshine Coast",
    "rope access maintenance",
    "strata maintenance Maroochydore",
    "property maintenance Noosa",
    "emergency building repairs Sunshine Coast",
  ],
});

export default function MaintenancePage() {
  return (
    <>
      <ServiceSchema
        name="Building Maintenance Sunshine Coast"
        description="Commercial and body corporate building maintenance across the Sunshine Coast. Concrete repairs, roof restoration, leak detection, sign installation — IRATA rope access, QBCC licensed."
        image="https://www.ras-vertex.com.au/nav/maintenance.png"
        url="https://www.ras-vertex.com.au/maintenance"
        serviceType="Building Maintenance"
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
        heading="Building maintenance services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              A specialist rope access team delivering complete building
              maintenance across the Sunshine Coast.
            </>
          }
          lede="From Sunshine Coast schools and shopping centres to body corporates and commercial facilities, we help property owners and managers protect their buildings with responsive maintenance, specialist access, and one trusted local team."
          headingId="maintenance-hero-heading"
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "The same faces every time",
              body: "All painting, cleaning, waterproofing, repairs and height safety delivered by our in-house team. You deal with people who know your building, show up consistently, and keep everything moving.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Built for full-building access",
              body: "Rope access lets us work across facades, roofs and hard-to-reach areas without scaffolding or disruption. We move across your building efficiently, wherever work is needed.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "Always across your building",
              body: "We’re local, always on call, and just around the corner when you need us most, giving you faster response when issues arise and less downtime across your building.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why building and facility
              <br />
              managers choose our maintenance team.
            </>
          }
          ariaLabel="Why facility managers choose RAS-VERTEX maintenance"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="25 years on the Sunshine Coast"
      >
        <WarrantyCard
          stat="25"
          statLabel={" years on the\nSunshine Coast"}
          heading={
            <>
              The same postcode,
              <br />
              the same buildings.
            </>
          }
          body="We’ve been maintaining properties here long before much of the coastline was developed. We understand how salt air breaks down sealants, how UV wears coatings, and how coastal weather puts pressure on every facade.

That knowledge comes from 25 years of showing up, and it’s what our partners rely on most."
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceAccordion
          heading={
            <>
              What kind of maintenance
              <br />
              are you looking for?
            </>
          }
          paragraph="From small repairs to large-scale building works, we deliver maintenance across all types of projects on the Sunshine Coast."
          ariaLabel="What kind of maintenance are you looking for?"
          services={SERVICES}
          headingId="maintenance-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Maintenance plans built around your building"
      >
        <div className="mb-10 md:mb-16">
          <ServiceIntro
            heading={
              <>
                We offer flexible maintenance plans to
                <br />
                keep your building in top condition year round.
              </>
            }
            paragraphs={[
              "Our maintenance plans give you ongoing support across the year, with scheduled visits, condition checks and responsive maintenance when needed. The goal is simple, keep your building in good condition and stop small issues becoming bigger problems.",
            ]}
            headingId="maintenance-plans-intro-heading"
            stacked
            ctaLabel="Let's talk about your building →"
            ctaHref="/contact"
          />
        </div>
        <Carousel slides={PLAN_SLIDES} />
      </section>
      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="We've used them for three years of scheduled maintenance across seven buildings. Zero callbacks."
          name="Priya Raman"
          role="BC Manager, Peppers Noosa"
          logoSrc="/partners/novotel.svg.png"
          logoAlt="Peppers Noosa"
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="maintenance-services-carousel-label"
      >
        <h2
          id="maintenance-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          Discover what we can cover in maintaining your building
          <br />
          and explore our full range of services below.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter(
            (slide) => slide.href !== "/maintenance",
          )}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="maintenance-faq-heading"
          ctaHeading="Any building, every challenge."
        />
      </section>
    </>
  );
}

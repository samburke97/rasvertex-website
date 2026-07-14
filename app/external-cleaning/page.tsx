// app/external-cleaning/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import ServiceCrossLink from "../components/shared/ServiceCrossLink";
import WarrantyCard from "../components/shared/WarrantyCard";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import { cld, cldVideo } from "../lib/cloudinary";

import {
  HERO_SLIDES,
  SERVICES,
  FAQS,
  FAQ_CONTACT,
} from "../data/externalCleaningData";

export const metadata = generatePageMetadata({
  title: "External Building Cleaning Sunshine Coast | Facade & Pressure Wash",
  description:
    "Professional external building cleaning on the Sunshine Coast. Facade washing, pressure cleaning, roof cleaning, graffiti removal and post-construction clean-down. IRATA rope access, eco-friendly systems, QBCC licensed.",
  path: "/external-cleaning",
  keywords: [
    "external building cleaning Sunshine Coast",
    "facade cleaning Sunshine Coast",
    "pressure cleaning Sunshine Coast",
    "building wash Sunshine Coast",
    "render cleaning Sunshine Coast",
    "roof cleaning Sunshine Coast",
    "graffiti removal Sunshine Coast",
    "post construction cleaning Sunshine Coast",
    "strata external cleaning Sunshine Coast",
    "body corporate cleaning Sunshine Coast",
    "commercial building cleaning Noosa",
    "building exterior cleaning Maroochydore",
    "eco-friendly pressure cleaning Sunshine Coast",
    "high rise building cleaning Sunshine Coast",
    "commercial pressure cleaning Sunshine Coast",
    "concrete cleaning Sunshine Coast",
    "exterior cleaning contractors Sunshine Coast",
  ],
});

export default function ExternalCleaningPage() {
  return (
    <>
      <ServiceSchema
        name="External Building Wash & Cleaning Sunshine Coast"
        description="Professional external building cleaning on the Sunshine Coast. Facade washing, pressure cleaning, roof cleaning, graffiti removal and post-construction clean-down. IRATA rope access, eco-friendly systems, QBCC licensed."
        image="https://www.ras-vertex.com.au/nav/cleaning.png"
        url="https://www.ras-vertex.com.au/external-cleaning"
        serviceType="External Building Cleaning"
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
        heading="External building cleaning services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              We are the Sunshine Coast’s leading external building wash and
              cleaning team.
            </>
          }
          lede="We provide professional exterior building cleaning across the Sunshine Coast, combining IRATA rope access with eco-friendly high pressure cleaning to safely restore facades, roofs and hard surfaces, delivering visible transformation across every
              surface."
          headingId="external-cleaning-hero-heading"
          video={cldVideo("cleaning", { width: 1200 })}
        />
      </section>
      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: cld("minimal-disruption", { width: 1200 }),
              alt: "IRATA rope access technician cleaning a Sunshine Coast high-rise facade with no scaffolding or EWP hire",
              title: "Minimal disruption",
              body: "Rope access is our default, not our fallback. It's the fastest, least disruptive way to reach any facade on the Sunshine Coast, with no scaffolding, no EWP hire and no site disruption.",
            },
            {
              photo: cld("bw4", { width: 1200 }),
              alt: "IRATA rope access technician cleaning a Sunshine Coast high-rise facade",
              title: "Clear communication",
              body: "The same local, fully employed crew works your building every time. No subcontractors, no unfamiliar faces, just consistent care. Every visit is logged and reported through your own portal.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: "100% recycled water pressure cleaning system, RAS-VERTEX Sunshine Coast",
              title: "Proactive care",
              body: "Every clean includes visual checks and reporting so we can flag issues early, highlight potential problems and help prevent costly repairs.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why building managers and{" "}
              <br className="hidden md:block" />
              property owners choose our cleaning team.
            </>
          }
          ariaLabel="Why building managers choose RAS-VERTEX for external cleaning"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="100% Recycled Water System"
      >
        <WarrantyCard
          stat="100%"
          statLabel={"recycled\nwater system"}
          heading="Designed to Leave Nothing Behind."
          body="Our pressure cleaning system runs on 100% recycled, filtered hot water with full vacuum recovery, every drop collected, nothing discharged to stormwater. The only responsible way to clean near the coast."
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceAccordion
          heading={
            <>
              What kind of external clean <br className="hidden md:block" />
              are you looking for?
            </>
          }
          paragraph="If your building is dealing with salt build-up, mould, staining or general coastal wear, we use rope access and low-impact wash systems to bring it back without damaging the surface."
          ariaLabel="What kind of external clean are you looking for?"
          services={SERVICES}
          headingId="external-cleaning-services-heading"
          ctaLabel="Book a site inspection →"
        />
      </section>
      {/* ── Window cleaning internal link callout ── */}
      <section className="px-5 md:px-10 pb-10 md:pb-20">
        <ServiceCrossLink
          lead="Looking for window cleaning specifically?"
          linkText="See our dedicated window cleaning page"
          href="/window-cleaning"
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
          quote="We've used RAS-VERTEX for years to wash down our building, and the last two years to have it painted in two stages. The team has never let us down, always turning up and keeping us updated daily. Caroline in the office has been extremely helpful, and we'd have no hesitation recommending RAS-VERTEX."
          name="Rhonda Dawson"
          role="30 Frank Street"
          logoSrc=""
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="external-cleaning-services-carousel-label"
      >
        <h2
          id="external-cleaning-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          We bring the same expertise to every part{" "}
          <br className="hidden xl:block" /> of your property, across the
          Sunshine Coast.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter(
            (slide) => slide.href !== "/external-cleaning",
          )}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="external-cleaning-faq-heading"
          ctaHeading="We specialise in all aspects of exterior cleaning."
        />
      </section>
    </>
  );
}

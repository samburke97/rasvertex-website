// app/building-inspections/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import { cld, cldVideo } from "../lib/cloudinary";
import InspectionHotspots from "../components/shared/InspectionHotspots";
import InspectionProcess from "../components/shared/InspectionProcess";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";

import {
  HERO_SLIDES,
  SERVICES,
  SERVICE_STEPS,
  FAQS,
  FAQ_CONTACT,
  INSPECTION_HOTSPOTS,
} from "../data/buildingInspectionsData";

export const metadata = generatePageMetadata({
  title: "Building Inspections Sunshine Coast | RAS-VERTEX",
  description:
    "Professional building inspections on the Sunshine Coast. Rope access facade inspections, thermal imaging, condition reports for body corporates and strata. Sinking fund ready, IRATA certified, QBCC licensed.",
  path: "/building-inspections",
  keywords: [
    "building inspection Sunshine Coast",
    "facade inspection Sunshine Coast",
    "building condition report Sunshine Coast",
    "body corporate building inspection Sunshine Coast",
    "strata building inspection Sunshine Coast",
    "sinking fund report Sunshine Coast",
    "thermal imaging building inspection Sunshine Coast",
    "rope access inspection Sunshine Coast",
    "pre-purchase building inspection Sunshine Coast",
    "10 year maintenance plan Sunshine Coast",
    "concrete inspection Sunshine Coast",
    "facade condition report Sunshine Coast",
    "commercial building inspections Sunshine Coast",
    "roof inspections Sunshine Coast",
    "defect report Sunshine Coast",
    "commercial property inspections Sunshine Coast",
  ],
});

export default function BuildingInspectionsPage() {
  return (
    <>
      <ServiceSchema
        name="Building Inspections Sunshine Coast"
        description="Professional building inspections on the Sunshine Coast. Rope access facade inspections, thermal imaging, condition reports for body corporates and strata. Sinking fund ready, IRATA certified, QBCC licensed."
        image={HERO_SLIDES[0].src}
        url="https://www.rasvertex.com.au/building-inspections"
        serviceType="Building Inspection"
      />

      <ServiceSEO
        heading="Building inspection services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              Our Sunshine Coast building inspections identify issues early,
              plan repairs properly, and protect long-term asset value.
            </>
          }
          lede="Sunshine Coast based rope access facade inspections, thermal imaging and detailed condition reporting that give body corporates and property managers clear visibility over building condition and maintenance needs."
          headingId="building-inspections-hero-heading"
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Rope access reaches everywhere",
              body: "IRATA technicians inspect every facade without scaffolding or EWP hire, ensuring full, uninterrupted coverage of the entire building.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Thermal imaging included",
              body: "We trace moisture and defects through the building envelope, uncovering issues you can’t see from the surface, so you stay ahead of costly surprises.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "Reports built for your committee",
              body: "Comprehensive condition and defect reports that give committees clear direction for maintenance planning, budgeting and long-term cost control.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why committees rely{" "}
              <br className="hidden md:block" />
              on our inspection reports.
            </>
          }
          ariaLabel="Why committees rely on RAS-VERTEX building inspections"
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
          statLabel={"years\non the Coast"}
          heading="We know what to look for, because we've seen it before."
          body="Twenty-five years of inspecting Sunshine Coast buildings means we've seen exactly how salt air, UV and storm exposure age a facade, and how fast. That pattern recognition is what turns a walk-around and a drop into a defect register your committee can actually act on."
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-labelledby="building-inspections-services-heading">
        <InspectionProcess
          heading="What kind of inspection are you looking for?"
          steps={SERVICE_STEPS}
          image={{
            src: cld("inspect", { width: 1200 }),
            alt: "What kind of inspection are you looking for, RAS-VERTEX Sunshine Coast",
          }}
          compactHeading
          headingId="building-inspections-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
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
          quote="I have been working with KBW for over 17 years, and RAS-VERTEX has been a preferred contractor for building inspections and maintenance across our portfolio. Their range of services allows one company to attend to multiple issues, which has improved outcomes across the board."
          name="KBW Community Management"
          role="Body Corporate Manager, Sunshine Coast"
          logoSrc={cld("kbw", { width: 300 })}
          logoAlt="KBW Community Management"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="hotspots-heading"
      >
        <InspectionHotspots
          heading="Aerial drones, paired with on-site rope access."
          intro="We combine drone surveys for full-facade coverage with IRATA rope access inspections that physically test the building at every level."
          methodBody="Drones capture the full picture quickly. Rope access confirms what’s actually happening on the surface, touching, testing and verifying defects that cameras alone can’t validate."
          video={cldVideo("cleaning", { width: 1200 })}
          hotspots={INSPECTION_HOTSPOTS}
          headingId="hotspots-heading"
          ctaLabel="Book your drone inspection today →"
          ctaHref="/contact"
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="building-inspections-services-carousel-label"
      >
        <h2
          id="building-inspections-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          One team across painting, cleaning, maintenance,{" "}
          <br className="hidden xl:block" />
          inspections and safety, caring for every part of your property.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter(
            (slide) => slide.href !== "/building-inspections",
          )}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="building-inspections-faq-heading"
          ctaHeading="Let’s get eyes on your building."
        />
      </section>
    </>
  );
}

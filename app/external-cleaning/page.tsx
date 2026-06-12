// app/external-cleaning/page.tsx

import Link from "next/link";
import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHero from "../components/shared/ServiceHero";
import ServiceIntro from "../components/shared/ServiceIntro";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import ServiceFeatures from "../components/shared/ServiceFeatures";
import ServiceProjects from "../components/shared/ServiceProjects";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import PhotoGrid from "../components/shared/PhotoGrid";
import WarrantyCard from "../components/shared/WarrantyCard";

import {
  HERO_SLIDES,
  SERVICES,
  FEATURES,
  PROJECTS,
  CARDS,
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
  ],
});

export default function ExternalCleaningPage() {
  return (
    <>
      <ServiceSchema
        name="External Building Cleaning Sunshine Coast"
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

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              External building cleaning
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="Facade washing, pressure cleaning, roof cleaning and graffiti removal — using eco-friendly systems and IRATA rope access for buildings of any height."
          slides={HERO_SLIDES}
          headingId="external-cleaning-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Beyond aesthetics. Protecting your building."
          paragraphs={[
            "On the Sunshine Coast, external cleaning isn't cosmetic — it's protective. Salt air, UV, biological growth and marine pollution don't just dirty surfaces; they accelerate corrosion, degrade coatings, and eat into render and sealants. By removing contaminants regularly, we slow that damage before it becomes a structural problem. A clean building isn't just better-looking — it's a building that will cost less to maintain over its lifetime.",
            "We use a combination of ropes, industrial hot-water pressure systems and soft-wash chemistry to reach every surface at any height. Our 100% recycled water vacuum system means no contaminated runoff to stormwater — an important consideration for beachside and waterway-adjacent properties across the Sunshine Coast. One team, one visit, every surface covered.",
          ]}
          headingId="external-cleaning-intro-heading"
        />
      </section>

      <section className="pt-20 px-10">
        <PhotoGrid
          showHeader={false}
          cta={{
            body: "Salt doesn't stop at the windows. Biological growth colonises render, tile and cladding year-round. Regular external cleaning is the most cost-effective protective maintenance you can run on any Sunshine Coast building.",
            link: { label: "Book a clean →", href: "/contact" },
          }}
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What kind of external clean
              <br />
              are you looking for?
            </>
          }
          ariaLabel="What kind of external clean are you looking for?"
          services={SERVICES}
          headingId="external-cleaning-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      {/* ── Window cleaning internal link callout ── */}
      <section className="pt-20 pb-4 px-10">
        <p className="p-soft">
          Looking for window cleaning specifically?{" "}
          <Link
            href="/cleaning"
            style={{
              color: "var(--navy)",
              fontWeight: "var(--weight-semibold)",
              borderBottom: "1px solid var(--navy)",
              paddingBottom: "1px",
            }}
          >
            See our dedicated window cleaning page →
          </Link>
        </p>
      </section>

      <section className="pt-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — external cleaning services"
        />
      </section>

      <section className="pt-20">
        <ServiceFeatures
          features={FEATURES}
          displayText={"Spotless\nResults."}
          ariaLabel="Why choose RAS-VERTEX for external building cleaning"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="external-cleaning-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Maroochydore commercial building facade before professional external clean"
          afterAlt="Maroochydore commercial building facade after professional external clean by RAS-VERTEX"
          clientName="Maroochydore Commercial Tower"
          heading="From salt-stained to spotless in a single visit."
          body="This 12-storey Maroochydore tower had accumulated two years of salt deposit, biological staining and pollution buildup across its entire rendered facade. Rope access let us cover the full building in two days — no scaffolding, no crane hire, no disruption to tenants on the ground floor."
          quote="We budgeted for three days and they finished in two. The facade looks like it did on completion day. Outstanding result."
          quoteAuthor="Craig Whitmore"
          quoteRole="Facilities Manager, Maroochydore"
          authorLogo="/partners/accor.svg"
          authorLogoAlt="Maroochydore Commercial Tower"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="external-cleaning-before-after-heading"
        />
      </section>

      <section
        className="px-10 py-20"
        aria-label="Eco-friendly cleaning system"
      >
        <WarrantyCard
          stat="100%"
          statLabel={"recycled\nwater system"}
          heading={
            <>
              Zero discharge.
              <br />
              Zero compromise.
            </>
          }
          body="Our industrial pressure cleaning system runs on 100% recycled and filtered hot water with full vacuum recovery — all wastewater collected and processed on-site, nothing discharged to stormwater drains. Biodegradable cleaning agents throughout. For Sunshine Coast properties near waterways, beaches and marine environments, that's not just good practice — it's the only responsible way to clean."
        />
      </section>

      <section className="pt-20">
        <ServiceProjects
          heading={
            <>
              Work we're proud of,
              <br />
              from Noosa to Caloundra.
            </>
          }
          subheading="Facade washes, pressure cleans, post-construction clean-downs and ongoing strata programs across the Sunshine Coast — every building cleaner, better protected, and documented after every visit."
          projects={PROJECTS}
          footerNote="We also clean across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="external-cleaning-faq-heading"
        />
      </section>
    </>
  );
}

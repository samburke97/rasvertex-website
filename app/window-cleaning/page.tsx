// app/cleaning/page.tsx

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
  ],
});

export default function CleaningPage() {
  return (
    <>
      <ServiceSchema
        name="Window Cleaning Sunshine Coast"
        description="Professional window cleaning on the Sunshine Coast. IRATA rope access for high-rise and strata buildings, purified water systems, eco-friendly pressure washing. Streak-free results, QBCC licensed."
        image="https://www.ras-vertex.com.au/nav/cleaning.png"
        url="https://www.ras-vertex.com.au/cleaning"
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

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              Window cleaning
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="Streak-free results from ground to rooftop. IRATA rope access, purified water systems, and eco-friendly pressure cleaning — for residential, commercial and strata properties."
          slides={HERO_SLIDES}
          headingId="cleaning-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Clean glass. Protected surfaces. No disruption."
          paragraphs={[
            "On the Sunshine Coast, salt air doesn't just dirty your windows — it etches them. UV accelerates biological growth on facades. Wind carries marine particulates into every surface seam. Standard cleaning removes the surface layer. Our approach removes the contaminants that cause lasting damage — using purified water, hot-water vacuum pressure systems and biodegradable agents that are safe for your surfaces and the surrounding environment.",
            "We employ ropes to complete our cleaning projects, which means no corner is left untouched regardless of building height. IRATA-certified technicians from our own team — not subcontractors — access every facade, every balustrade and every pane. Speedy delivery, minimal disruption, and a safe, cost-effective solution for buildings from four to forty storeys.",
          ]}
          headingId="cleaning-intro-heading"
          logos={[
            {
              src: "/images/associations/qbcc.png",
              alt: "QBCC Licensed",
              width: 60,
              height: 40,
            },
          ]}
        />
      </section>

      <section className="pt-20 px-10">
        <PhotoGrid
          showHeader={false}
          cta={{
            body: "Salt air etches glass. UV grows algae on facades. Pollution builds up on every surface. Regular professional cleaning isn't cosmetic — it's the most cost-effective way to protect your building's surfaces long-term.",
            link: { label: "Book a clean →", href: "/contact" },
          }}
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What kind of clean
              <br />
              are you looking for?
            </>
          }
          ariaLabel="What kind of clean are you looking for?"
          services={SERVICES}
          headingId="cleaning-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      <section className="pt-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — window cleaning services"
        />
      </section>

      <section className="pt-20">
        <ServiceFeatures
          features={FEATURES}
          displayText={"Crystal\nClear."}
          ariaLabel="Why choose RAS-VERTEX for window cleaning"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="cleaning-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Mooloolaba strata building before professional window clean"
          afterAlt="Mooloolaba strata building after professional window clean by RAS-VERTEX"
          clientName="Mooloolaba Strata"
          heading="Quarterly program, zero resident disruption."
          body="This 18-storey Mooloolaba building had been managing window cleaning through three separate contractors — no consistent schedule, no documentation, and residents constantly fielding questions about access. We took over the full program: quarterly rope access cleans, facade wash twice a year, committee report after every visit."
          quote="We've had no resident complaints since RAS-VERTEX took over. They show up when they say they will, the building looks sharp, and the report lands in my inbox before I've even asked for it."
          quoteAuthor="Michelle Tran"
          quoteRole="Building Manager, Mooloolaba"
          authorLogo="/partners/accor.svg"
          authorLogoAlt="Mooloolaba Strata"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="cleaning-before-after-heading"
        />
      </section>

      <section className="px-10 py-20" aria-label="Eco-friendly cleaning">
        <WarrantyCard
          stat="100%"
          statLabel={"recycled\nwater system"}
          heading={
            <>
              Clean results,
              <br />
              clean conscience.
            </>
          }
          body="Our industrial-grade pressure cleaning system runs on 100% recycled and filtered hot water with full vacuum recovery — zero wastewater discharged to stormwater. Biodegradable cleaning agents on every job. Purified, deionised water for all window cleaning. The Sunshine Coast's environment is part of what makes it worth protecting."
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
          subheading="High-rise rope access window cleaning in Mooloolaba, quarterly commercial programs in Maroochydore, resort complexes in Noosa — streak-free results on every building, every visit."
          projects={PROJECTS}
          footerNote="We also clean across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="cleaning-faq-heading"
        />
      </section>
    </>
  );
}

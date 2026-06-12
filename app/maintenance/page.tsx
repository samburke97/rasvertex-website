// app/maintenance/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHero from "../components/shared/ServiceHero";
import ServiceIntro from "../components/shared/ServiceIntro";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import ServiceProjects from "../components/shared/ServiceProjects";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import PhotoGrid from "../components/shared/PhotoGrid";
import WarrantyCard from "../components/shared/WarrantyCard";
import MaintenancePlans from "../components/shared/MaintenancePlans";

import {
  HERO_SLIDES,
  SERVICES,
  PROJECTS,
  CARDS,
  FAQS,
  FAQ_CONTACT,
  PLANS,
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

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              Building maintenance
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="Whether you're an industrial facility manager or managing a portfolio of commercial buildings, we're on call to take care of your building so you can take care of business."
          slides={HERO_SLIDES}
          headingId="maintenance-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Working with you, not just for you."
          paragraphs={[
            "We use a combination of ropes, EWPs and scaffolding to complete building maintenance to the highest standard across the Sunshine Coast. With 25 years of coastal experience, we tailor our equipment and access method to the needs of each project — delivering long-lasting results and cost-effective solutions without disrupting your residents or tenants.",
            "Every job is run by a dedicated project manager who knows your building inside and out. One phone number, detailed condition reports after every visit, and a maintenance record that keeps your body corporate committee informed and your building protected.",
          ]}
          headingId="maintenance-intro-heading"
        />
      </section>

      <section className="pt-20 px-10">
        <PhotoGrid
          showHeader={false}
          cta={{
            body: "Every building on the Sunshine Coast faces the same salt air, the same UV, the same storm season. We've been maintaining them for 25 years. We know what fails, when it fails, and how to stop it.",
            link: { label: "Get a free quote →", href: "/contact" },
          }}
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What kind of maintenance
              <br />
              are you looking for?
            </>
          }
          ariaLabel="What kind of maintenance are you looking for?"
          services={SERVICES}
          headingId="maintenance-services-heading"
        />
      </section>

      <section className="pt-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — maintenance services"
        />
      </section>

      <section className="pt-20" aria-labelledby="maintenance-plans-heading">
        <MaintenancePlans
          heading={
            <>
              Maintenance plans
              <br />
              built around your building.
            </>
          }
          lede="We act as an extension of your team — providing ongoing programs that deliver support when you need it most, and documentation your committee can rely on."
          plans={PLANS}
          headingId="maintenance-plans-heading"
          ctaLabel="Tailor your plan →"
          ctaHref="/contact"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="maintenance-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Beachfront Towers Maroochydore before facade maintenance program"
          afterAlt="Beachfront Towers Maroochydore after facade maintenance program"
          clientName="Beachfront Towers"
          heading="A full facade program, zero resident complaints."
          body="Beachfront Towers had been managing maintenance reactively — one contractor for renders, another for sealants, no coordinated program. We took it on as a single scope. One team, one schedule, one project manager from inspection to sign-off."
          quote="We've had three different contractors on this building over the years. RAS-VERTEX is the first one that actually felt like a partner."
          quoteAuthor="David Nguyen"
          quoteRole="Building Manager, Beachfront Towers"
          authorLogo="/partners/accor.svg"
          authorLogoAlt="Beachfront Towers"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="maintenance-before-after-heading"
        />
      </section>

      <section
        className="px-10 py-20"
        aria-label="25 years on the Sunshine Coast"
      >
        <WarrantyCard
          stat="25"
          statLabel={"years\non the Coast"}
          heading={
            <>
              The same postcode,
              <br />
              the same buildings.
            </>
          }
          body="We've been maintaining properties on the Sunshine Coast since before half the foreshore developments were built. We know how salt air attacks sealants, how UV degrades coatings, and how coastal storm seasons stress every facade system. That knowledge doesn't come from a manual — it comes from 25 years of showing up."
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
          subheading="Twenty-five years of building maintenance across the Sunshine Coast. Body corporate facade programs in Maroochydore, roof restorations in Noosa, concrete repairs in Mooloolaba — every job documented, every building better for it."
          projects={PROJECTS}
          footerNote="We also work across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour, Yandina and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="maintenance-faq-heading"
        />
      </section>
    </>
  );
}

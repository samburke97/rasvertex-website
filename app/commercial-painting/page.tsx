// app/commercial-painting/page.tsx

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
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";
import LogoStrip from "../components/shared/LogoStrip";

import {
  HERO_SLIDES,
  SERVICES,
  PROCESS_STEPS,
  FEATURES,
  PROJECTS,
  CARDS,
  TRUST_LOGOS,
  FAQS,
  FAQ_CONTACT,
} from "../data/commercialPaintingData";

export const metadata = generatePageMetadata({
  title: "Commercial & High-Rise Painting Sunshine Coast",
  description:
    "Commercial and high-rise painting on the Sunshine Coast. IRATA rope access, coastal-spec paint systems, 5-year written warranty. Body corporates, strata, commercial buildings and hotels. QBCC licensed.",
  path: "/commercial-painting",
  keywords: [
    "commercial painting Sunshine Coast",
    "high-rise painting Sunshine Coast",
    "body corporate painting Sunshine Coast",
    "strata painting Sunshine Coast",
    "commercial painter Maroochydore",
    "commercial painter Mooloolaba",
    "commercial painter Noosa",
    "rope access painting Sunshine Coast",
    "exterior painting Sunshine Coast commercial",
    "building repaint Sunshine Coast",
    "QBCC painter Sunshine Coast",
    "high rise painter Sunshine Coast",
  ],
});

export default function CommercialPaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Commercial & High-Rise Painting Sunshine Coast"
        description="Commercial and high-rise painting on the Sunshine Coast. IRATA rope access, coastal-spec paint systems, 5-year written warranty. Body corporates, strata, commercial buildings and hotels. QBCC licensed."
        image="https://www.ras-vertex.com.au/images/projects/1.jpeg"
        url="https://www.ras-vertex.com.au/commercial-painting"
        serviceType="Commercial Painting"
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
        heading="Commercial and high-rise painting on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              Commercial painting
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="High-rise repaints, body corporate programs and commercial interiors — IRATA rope access, coastal-spec paint systems, and a 5-year written warranty on every job."
          slides={HERO_SLIDES}
          headingId="commercial-painting-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="One project manager. From quote to warranty."
          paragraphs={[
            "Commercial painting on the Sunshine Coast isn't the same as inland work. Salt air off the ocean degrades standard paint systems within two to three years. UV intensity at this latitude is among the highest in Australia. Thermal cycling on dark-coloured renders causes movement that generic elastomerics can't handle. Every system we specify is chosen for the substrate and the exposure — not pulled from a price list.",
            "We've been painting commercial buildings on the Sunshine Coast for 25 years. The same IRATA-certified rope access team that paints high-rise facades also handles prep, crack repairs and sealant replacement — one crew, one project manager, no subcontractors turning up unannounced. You get the same standard on a 40-storey tower as on a 4-storey strata.",
          ]}
          headingId="commercial-painting-intro-heading"
          logos={[
            {
              src: "/images/associations/haymes.svg",
              alt: "Haymes Paint",
              width: 80,
              height: 40,
            },
            {
              src: "/images/associations/dulux.png",
              alt: "Dulux",
              width: 80,
              height: 40,
            },
            {
              src: "/images/associations/qbcc.png",
              alt: "QBCC Licensed",
              width: 60,
              height: 40,
            },
          ]}
        />
      </section>
      {/* ── Partner logo strip ── */}
      <section aria-label="Trusted by">
        <LogoStrip
          logos={TRUST_LOGOS}
          label="Trusted by Sunshine Coast's best-run buildings"
        />
      </section>

      {/* ── How we run a commercial repaint ── */}
      <section className="pt-20 pb-20" aria-labelledby="process-heading">
        <InspectionProcess
          heading={
            <>
              How we run a<br />
              commercial repaint.
            </>
          }
          lede="Five stages from site assessment to warranty handover. Every stage has a deliverable — so you always know where the job is and what comes next."
          steps={PROCESS_STEPS}
          headingId="process-heading"
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What kind of painting
              <br />
              are you looking for?
            </>
          }
          ariaLabel="What kind of commercial painting are you looking for?"
          services={SERVICES}
          headingId="commercial-painting-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      <section className="pt-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — commercial painting"
        />
      </section>

      <section className="pt-20">
        <ServiceFeatures
          features={FEATURES}
          displayText={"One\nStandard."}
          ariaLabel="Why choose RAS-VERTEX for commercial painting"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="commercial-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Mooloolaba high-rise before exterior repaint by RAS-VERTEX"
          afterAlt="Mooloolaba high-rise after exterior repaint by RAS-VERTEX"
          clientName="Mooloolaba Oceanfront Strata"
          heading="12 storeys. 84 lots. Done in 10 weeks."
          body="This Mooloolaba body corporate had been quoted 18 weeks by three other painters — all requiring full scaffold, all quoting the same generic Weathershield system. We mobilised with rope access, completed surface prep in two weeks, and painted the full facade zone by zone without closing the car park or displacing ground-floor tenants for a single day."
          quote="Other painters told us to expect two scaffolding installations and four months of disruption. RAS-VERTEX were done in ten weeks and the car park was never closed. The result is exactly what we presented to owners."
          quoteAuthor="Sarah Mitchell"
          quoteRole="Strata Manager, Mooloolaba"
          authorLogo="/partners/pica.png"
          authorLogoAlt="Pica Group"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="commercial-before-after-heading"
        />
      </section>

      <section className="px-10 py-20" aria-label="5-year warranty">
        <WarrantyCard
          stat="5"
          statLabel={"year\nwarranty"}
          heading={
            <>
              Specified right.
              <br />
              Warranted in writing.
            </>
          }
          body="Every commercial repaint we complete is backed by a 5-year written workmanship warranty lodged in ROCO at handover. Manufacturer warranties — up to 15 years on qualifying Dulux and Haymes commercial systems — are registered in the building owner's name. We don't cut corners on specification because we're the ones standing behind the result."
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
          subheading="High-rise repaints, body corporate programs and commercial buildings across the Sunshine Coast — every job run by one project manager, every coat documented, every warranty in writing."
          projects={PROJECTS}
          footerNote="We also work across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="commercial-painting-faq-heading"
        />
      </section>
    </>
  );
}

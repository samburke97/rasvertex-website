// app/building-inspections/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHero from "../components/shared/ServiceHero";
import ServiceIntro from "../components/shared/ServiceIntro";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceProjects from "../components/shared/ServiceProjects";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";
import InspectionHotspots from "../components/shared/InspectionHotspots";
import LogoStrip from "../components/shared/LogoStrip";

import {
  HERO_SLIDES,
  SERVICES,
  PROCESS_STEPS,
  PROJECTS,
  CARDS,
  FAQS,
  FAQ_CONTACT,
  INSPECTION_HOTSPOTS,
} from "../data/buildingInspectionsData";

export const metadata = generatePageMetadata({
  title: "Building Inspections Sunshine Coast | Facade & Condition Reports",
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
  ],
});

const TRUST_LOGOS = [
  { src: "/partners/accor.svg", alt: "Accor Hotels" },
  { src: "/partners/novotel.svg.png", alt: "Novotel" },
  { src: "/partners/racv.png", alt: "RACV" },
  { src: "/partners/pica.png", alt: "Pica Group" },
  { src: "/partners/sskb.svg", alt: "SSKB" },
  { src: "/partners/archers.png", alt: "Archers Body Corporate" },
  { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
  { src: "/images/associations/qbcc.png", alt: "QBCC Licensed" },
];

export default function BuildingInspectionsPage() {
  return (
    <>
      <ServiceSchema
        name="Building Inspections Sunshine Coast"
        description="Professional building inspections on the Sunshine Coast. Rope access facade inspections, thermal imaging, condition reports for body corporates and strata. Sinking fund ready, IRATA certified, QBCC licensed."
        image="https://www.ras-vertex.com.au/nav/maintenance.png"
        url="https://www.ras-vertex.com.au/building-inspections"
        serviceType="Building Inspection"
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
        heading="Building inspection services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              Building inspections
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="Rope access facade inspections, thermal imaging, and detailed condition reports — the data your body corporate committee needs to plan maintenance and protect your building's asset value."
          slides={HERO_SLIDES}
          headingId="building-inspections-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Know what your building actually needs."
          paragraphs={[
            "Most building maintenance decisions on the Sunshine Coast are made without accurate condition data. Committees rely on estimates from years ago, contractors quoting on visible defects, or the judgement of a ground-level inspector who can't physically access the facade. The result is a sinking fund forecast that doesn't reflect reality — and eventually, a special levy that surprises every lot owner.",
            "Our inspection reports are built around physical rope access to the full facade, thermal imaging for hidden moisture and delamination, and a priority-rated defect register with cost estimates formatted for your 10-year maintenance plan under the BCCM Act 1997. Not a generic checklist — a complete picture of what your building actually needs, when it needs it, and what it will cost.",
          ]}
          headingId="building-inspections-intro-heading"
        />
      </section>
      <section className="pt-20" aria-label="Trusted by">
        <LogoStrip
          logos={TRUST_LOGOS}
          label="Trusted by Sunshine Coast's best-run buildings"
        />
      </section>
      {/* ── What we find and why it matters ── */}
      <section className="pt-20 px-10" aria-labelledby="hotspots-heading">
        <InspectionHotspots
          heading={
            <>
              What we find,
              <br />
              and why it matters.
            </>
          }
          lede="Every defect in a condition report is classified by priority and explained in plain language — what it is, how it got there, and what happens if it's left unaddressed."
          photo="/images/projects/1.jpeg"
          photoAlt="Sunshine Coast strata building facade with annotated inspection findings"
          hotspots={INSPECTION_HOTSPOTS}
          headingId="hotspots-heading"
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What kind of inspection
              <br />
              are you looking for?
            </>
          }
          ariaLabel="What kind of building inspection are you looking for?"
          services={SERVICES}
          headingId="building-inspections-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      {/* ── How an inspection works ── */}
      <section
        className="pt-20 pb-20"
        aria-labelledby="inspection-process-heading"
      >
        <InspectionProcess
          heading={
            <>
              How a building inspection
              <br />
              works, start to finish.
            </>
          }
          lede="Every inspection follows the same five-step process — from access planning to final condition report. No surprises, no scope creep, and a deliverable at every stage."
          steps={PROCESS_STEPS}
          headingId="inspection-process-heading"
        />
      </section>

      <section className="pt-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — building inspection services"
        />
      </section>

      <section className="px-10 py-20" aria-label="Inspection report standard">
        <WarrantyCard
          stat="5"
          statLabel={"day\nturnaround"}
          heading={
            <>
              Reports that committees
              <br />
              can actually use.
            </>
          }
          body="Every condition report is issued within five business days of inspection completion. It includes a full defect register with photos and location references, Priority 1–3 risk ratings, remediation scope and indicative cost estimates — formatted for direct use in your sinking fund forecast and 10-year maintenance plan under the BCCM Act 1997. Not a generic template. A document your committee can take to the AGM."
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
          subheading="Facade inspections, annual condition programs and pre-remediation assessments across the Sunshine Coast — every report detailed, priority-rated, and ready for the committee table."
          projects={PROJECTS}
          footerNote="We also inspect across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="building-inspections-faq-heading"
        />
      </section>
    </>
  );
}

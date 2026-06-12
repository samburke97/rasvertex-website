// app/body-corporate-painting/page.tsx

import Link from "next/link";
import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHero from "../components/shared/ServiceHero";
import ServiceIntro from "../components/shared/ServiceIntro";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import ServiceProjects from "../components/shared/ServiceProjects";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";
import CredentialRows from "../components/shared/CredentialRows";
import LogoStrip from "../components/shared/LogoStrip";

import {
  HERO_SLIDES,
  SERVICES,
  PROCESS_STEPS,
  CREDENTIALS,
  PROJECTS,
  FAQS,
  FAQ_CONTACT,
  LOGO_STRIP,
} from "../data/bodyCorporatePaintingData";

export const metadata = generatePageMetadata({
  title: "Body Corporate Painting Sunshine Coast | Strata Specialists",
  description:
    "Body corporate and strata painting specialists on the Sunshine Coast. IRATA rope access, coastal paint systems, 5-year written warranty, committee-ready proposals. QBCC licensed.",
  path: "/body-corporate-painting",
  keywords: [
    "body corporate painting Sunshine Coast",
    "strata painting Sunshine Coast",
    "body corporate painter Maroochydore",
    "strata painter Mooloolaba",
    "body corporate painting Noosa",
    "strata painting Caloundra",
    "high-rise strata repaint Sunshine Coast",
    "body corporate exterior painting",
    "strata committee painting proposal",
    "QBCC strata painter Sunshine Coast",
    "rope access strata painting",
    "sinking fund painting Sunshine Coast",
  ],
});

export default function BodyCorporatePaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Body Corporate Painting Sunshine Coast"
        description="Body corporate and strata painting specialists on the Sunshine Coast. IRATA rope access, coastal paint systems, 5-year written warranty, committee-ready proposals. QBCC licensed."
        image="https://www.ras-vertex.com.au/images/projects/1.jpeg"
        url="https://www.ras-vertex.com.au/body-corporate-painting"
        serviceType="Body Corporate Painting"
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
        heading="Body corporate and strata painting on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              Body corporate painting
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="Committee-ready proposals, zone-staged delivery, rope access with no car park disruption — and a 5-year written warranty lodged in ROCO at handover."
          slides={HERO_SLIDES}
          headingId="body-corporate-painting-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="50+ strata projects. We know how committees work."
          paragraphs={[
            "We've been painting body corporate buildings on the Sunshine Coast for 25 years. In that time we've learned that a strata project lives or dies on communication — with the committee, with the building manager, and with residents who didn't ask for the disruption. We manage all three from the first presentation to the final walkthrough.",
            "The Sunshine Coast's coastal environment demands more than a standard paint system. Salt air within 5km of the ocean degrades generic coatings within two to three years. Every system we specify is matched to the substrate, the exposure, and the building's maintenance history. One project manager from quote to warranty. No subcontractors, no surprises, no special levies from scope nobody told the committee about.",
          ]}
          headingId="body-corporate-painting-intro-heading"
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

      {/* ── Logo strip — partner credibility ── */}
      <section aria-label="Trusted by">
        <LogoStrip
          logos={LOGO_STRIP}
          label="Trusted by Sunshine Coast body corporates and strata managers"
        />
      </section>

      {/* ── How we run a strata repaint ── */}
      <section className="pt-20 pb-20" aria-labelledby="process-heading">
        <InspectionProcess
          heading={
            <>
              How we run a<br />
              strata repaint.
            </>
          }
          lede="Five stages from committee proposal to warranty handover — every stage documented, every resident informed, no scope surprises."
          steps={PROCESS_STEPS}
          headingId="process-heading"
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What's included in a<br />
              strata painting program?
            </>
          }
          ariaLabel="What's included in a strata painting program?"
          services={SERVICES}
          headingId="body-corporate-services-heading"
          ctaLabel="Get a committee proposal →"
          ctaHref="/contact"
        />
      </section>

      {/* ── Why choose us — CredentialRows ── */}
      <section
        className="pt-20"
        aria-label="Why choose RAS-VERTEX for body corporate painting"
      >
        <CredentialRows
          credentials={CREDENTIALS}
          ariaLabel="Why choose RAS-VERTEX for body corporate painting"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="body-corporate-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Mooloolaba strata building before exterior repaint — salt-damaged facade"
          afterAlt="Mooloolaba strata building after exterior repaint by RAS-VERTEX"
          clientName="Mooloolaba Oceanfront Strata"
          heading="12 storeys. 84 lots. 10 weeks. Zero resident complaints."
          body="This Mooloolaba body corporate had been quoted 18 weeks and full scaffold by three other painters. We presented to the committee with a rope access staging plan, a full colour schedule with on-site samples, and a resident communication pack. Approved at the first committee meeting. Completed in 10 weeks with the car park open throughout."
          quote="We've had painters before who treated the committee like a formality. RAS-VERTEX presented to us properly, answered every question, and delivered exactly what they said they would. The building looks better than it did on day one of construction."
          quoteAuthor="Patricia Chen"
          quoteRole="Committee Chair, Mooloolaba"
          authorLogo="/partners/sskb.svg"
          authorLogoAlt="SSKB Strata Management"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="body-corporate-before-after-heading"
        />
      </section>

      <section className="px-10 py-20" aria-label="5-year warranty">
        <WarrantyCard
          stat="5"
          statLabel={"year\nwarranty"}
          heading={
            <>
              Lodged in ROCO.
              <br />
              Backed by the manufacturer.
            </>
          }
          body="Every body corporate repaint is backed by a 5-year written workmanship warranty lodged in ROCO at handover — your committee's insurance and maintenance records are covered from completion day. Dulux and Haymes manufacturer warranties (up to 15 years on qualifying systems) are registered in the body corporate's name. The full documentation package is formatted for your sinking fund and maintenance plan under the BCCM Act 1997."
        />
      </section>

      {/* ── Internal links to related pages ── */}
      <section className="pt-4 pb-4 px-10">
        <p className="p-soft">
          We also run{" "}
          <Link
            href="/building-inspections"
            style={{
              color: "var(--navy)",
              fontWeight: "var(--weight-semibold)",
              borderBottom: "1px solid var(--navy)",
              paddingBottom: "1px",
            }}
          >
            building condition inspections
          </Link>{" "}
          and{" "}
          <Link
            href="/maintenance"
            style={{
              color: "var(--navy)",
              fontWeight: "var(--weight-semibold)",
              borderBottom: "1px solid var(--navy)",
              paddingBottom: "1px",
            }}
          >
            ongoing maintenance programs
          </Link>{" "}
          for body corporates across the Sunshine Coast — the same team, managed
          as a single scope.
        </p>
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
          subheading="Body corporate repaints from Caloundra to Noosa — every building zone-staged, every system coastal-spec, every job backed by a 5-year written warranty."
          projects={PROJECTS}
          footerNote="We also work across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="body-corporate-painting-faq-heading"
        />
      </section>
    </>
  );
}

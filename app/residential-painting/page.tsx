// app/residential-painting/page.tsx

import Link from "next/link";
import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHero from "../components/shared/ServiceHero";
import ServiceIntro from "../components/shared/ServiceIntro";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import CredentialRows from "../components/shared/CredentialRows";
import ServiceProjects from "../components/shared/ServiceProjects";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";

import {
  HERO_SLIDES,
  SERVICES,
  PROCESS_STEPS,
  CREDENTIALS,
  PROJECTS,
  FAQS,
  FAQ_CONTACT,
} from "../data/residentialPaintingData";

export const metadata = generatePageMetadata({
  title: "Residential Painters Sunshine Coast | House Painting",
  description:
    "Trusted house painters on the Sunshine Coast. Exterior and interior residential painting, pre-sale refreshes and colour consulting. QBCC licensed, 5-year written warranty, commercial-grade paint systems.",
  path: "/residential-painting",
  keywords: [
    "residential painters Sunshine Coast",
    "house painting Sunshine Coast",
    "exterior house painting Sunshine Coast",
    "interior painting Sunshine Coast",
    "painter Noosa",
    "painter Maroochydore",
    "painter Mooloolaba",
    "painter Buderim",
    "painter Caloundra",
    "pre-sale painting Sunshine Coast",
    "QBCC painter residential Sunshine Coast",
    "house painter Sunshine Coast",
  ],
});

export default function ResidentialPaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Residential Painting Sunshine Coast"
        description="Trusted house painters on the Sunshine Coast. Exterior and interior residential painting, pre-sale refreshes and colour consulting. QBCC licensed, 5-year written warranty, commercial-grade paint systems."
        image="https://www.ras-vertex.com.au/images/projects/1.jpeg"
        url="https://www.ras-vertex.com.au/residential-painting"
        serviceType="Residential Painting"
        areaServed={[
          "Sunshine Coast",
          "Noosa",
          "Caloundra",
          "Maroochydore",
          "Mooloolaba",
          "Buderim",
          "Kawana",
          "Coolum",
        ]}
      />

      <ServiceSEO
        heading="Residential painting services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              House painters on
              <br />
              the Sunshine Coast.
            </>
          }
          lede="The same commercial-grade systems and preparation standard we apply to high-rise body corporates — for your home. QBCC licensed, 5-year written warranty."
          slides={HERO_SLIDES}
          headingId="residential-painting-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Your home. Our commercial standard."
          paragraphs={[
            "We've been painting homes on the Sunshine Coast for 25 years — and we still treat every one like it's our own. You'll meet your project manager before a brush touches anything. They'll walk the job with you, explain exactly what we're using and why, and be on the other end of the phone until you're happy.",
            "Painting a home on the Sunshine Coast isn't the same as painting one inland. Salt air within 5km of the ocean degrades standard paint systems within two to three years. UV at this latitude is among the highest in Australia. Every system we specify for residential work is the same coastal-spec standard we apply to body corporate buildings — chloride rinse, salt-bonded primer, commercial-grade topcoats that are actually built for this environment.",
          ]}
          headingId="residential-painting-intro-heading"
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

      {/* ── How a residential repaint works ── */}
      <section className="pt-20 pb-20" aria-labelledby="process-heading">
        <InspectionProcess
          heading={
            <>
              How a residential repaint
              <br />
              works, start to finish.
            </>
          }
          lede="Five stages from site visit to warranty handover. No surprises, no scope creep — and a deliverable at every stage so you always know where the job is."
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
          ariaLabel="What kind of residential painting are you looking for?"
          services={SERVICES}
          headingId="residential-painting-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      {/* ── Internal link to commercial — framed as a proof point ── */}
      <section className="pt-20 pb-4 px-10">
        <p className="p-soft">
          We also run{" "}
          <Link
            href="/commercial-painting"
            style={{
              color: "var(--navy)",
              fontWeight: "var(--weight-semibold)",
              borderBottom: "1px solid var(--navy)",
              paddingBottom: "1px",
            }}
          >
            commercial and high-rise painting programs
          </Link>{" "}
          across the Sunshine Coast — the same team, the same preparation
          standard, the same warranty.
        </p>
      </section>

      <section
        className="pt-20"
        aria-label="Why choose RAS-VERTEX for residential painting"
      >
        <CredentialRows
          credentials={CREDENTIALS}
          ariaLabel="Why choose RAS-VERTEX for residential painting"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="residential-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Moffat Beach coastal home before exterior repaint — failed coating system"
          afterAlt="Moffat Beach coastal home after 4-coat Haymes repaint by RAS-VERTEX"
          clientName="Moffat Beach Residence"
          heading="Failed coating system. Four coats. Flawless finish."
          body="The previous coating system on this Moffat Beach property had failed completely — peeling render, exposed substrate, significant salt damage. We undertook full surface remediation before a brush touched anything: crack injection, render repair, chloride treatment, salt-bonded primer. Four coats of Haymes Premium Exterior. The result holds up to the ocean views."
          quote="I'd had two painters quote on this before RAS-VERTEX. Both wanted to paint straight over the problem. Sam's team stripped it back properly and the result speaks for itself — two years on and it still looks like day one."
          quoteAuthor="David Hartley"
          quoteRole="Homeowner, Moffat Beach"
          authorLogo="/partners/raywhite.png"
          authorLogoAlt="Ray White Sunshine Coast"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="residential-before-after-heading"
        />
      </section>

      <section className="px-10 py-20" aria-label="5-year warranty">
        <WarrantyCard
          stat="5"
          statLabel={"year\nwarranty"}
          heading={
            <>
              We stand behind
              <br />
              every job.
            </>
          }
          body="Every residential repaint is backed by a 5-year written workmanship warranty issued at handover. Haymes and Dulux manufacturer warranties — up to 15 years on qualifying exterior systems — are registered in your name. If anything fails due to our application, we come back and fix it. That's not a marketing line — it's a legal commitment, in writing, from a QBCC-licensed contractor."
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
          subheading="Coastal homes, pre-sale refreshes and full interior repaints across the Sunshine Coast — every job with the same preparation standard, the same paint systems, and the same 5-year warranty."
          projects={PROJECTS}
          footerNote="We also paint homes in Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour, Yandina and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="residential-painting-faq-heading"
        />
      </section>
    </>
  );
}

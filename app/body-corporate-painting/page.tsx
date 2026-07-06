// app/body-corporate-painting/page.tsx

import Link from "next/link";
import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceIntro from "../components/shared/ServiceIntro";
import ServiceAccordion from "../components/shared/ServiceAccordion";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import ServiceProjects from "../components/shared/ServiceProjects";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import InspectionProcess from "../components/shared/InspectionProcess";
import CredentialRows from "../components/shared/CredentialRows";
import PartnersCarousel from "../components/homepage/PartnersCarousel";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";

import {
  HERO_SLIDES,
  SERVICES,
  PROCESS_STEPS,
  CREDENTIALS,
  PROJECTS,
  FAQS,
  FAQ_CONTACT,
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
        <ServiceHeroSplit
          heading={
            <>
              Body corporate painting
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="Committee-ready proposals, zone-staged delivery, rope access with no car park disruption — and a 5-year written warranty lodged in ROCO at handover."
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
          headingId="body-corporate-painting-hero-heading"
          breadcrumb={{
            parentLabel: "Painting",
            parentHref: "/painting",
            currentLabel: "Body Corporate",
          }}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={[
            {
              photo: HERO_SLIDES[1].src,
              alt: HERO_SLIDES[1].alt,
              title: "Zone-staged delivery",
              body: "We paint in stages so residents, car parks and common areas stay usable throughout the project, no full-site shutdown.",
            },
            {
              photo: HERO_SLIDES[2].src,
              alt: HERO_SLIDES[2].alt,
              title: "Committee-ready proposals",
              body: "Detailed, itemised quotes formatted for body corporate approval and sinking fund planning, not vague estimates.",
            },
            {
              photo: HERO_SLIDES[3].src,
              alt: HERO_SLIDES[3].alt,
              title: "5-year warranty, lodged in ROCO",
              body: "Every repaint is backed by a written workmanship warranty registered with your body corporate at handover.",
            },
          ]}
          heading={
            <>
              Here&rsquo;s why committees and strata
              <br />
              managers choose us.
            </>
          }
          ariaLabel="Why committees choose RAS-VERTEX for body corporate painting"
          footerCtaLabel="Get a free quote →"
          footerCtaHref="/contact"
          display="grid"
          variant="white"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="5-year warranty"
      >
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

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceAccordion
          heading={
            <>
              What's included in a<br />
              strata painting program?
            </>
          }
          paragraph="Every strata program is zone-staged and committee-ready, so residents keep using the building while we work through the schedule."
          ariaLabel="What's included in a strata painting program?"
          services={SERVICES}
          headingId="body-corporate-services-heading"
          ctaLabel="Get a committee proposal →"
          ctaHref="/contact"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
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
              src: "/images/associations/dulux.svg",
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

      <section className="py-10" aria-label="Trusted by">
        <PartnersCarousel showHeader={false} />
      </section>

      {/* ── How we run a strata repaint ── */}
      <section className="py-10 md:py-20" aria-labelledby="process-heading">
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

      {/* ── Why choose us — CredentialRows ── */}
      <section
        className="pt-10 md:pt-20"
        aria-label="Why choose RAS-VERTEX for body corporate painting"
      >
        <CredentialRows
          credentials={CREDENTIALS}
          ariaLabel="Why choose RAS-VERTEX for body corporate painting"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="body-corporate-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Mooloolaba strata building before exterior repaint — salt-damaged facade"
          afterAlt="Mooloolaba strata building after exterior repaint by RAS-VERTEX"
          projectName="Oceanfront Strata Repaint"
          location="Mooloolaba, QLD"
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

      {/* ── Internal links to related pages ── */}
      <section className="px-5 md:px-10 py-5">
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

      <section className="py-10 md:py-20">
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

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="Our committee had been burned before by painters who over-promised. RAS-VERTEX delivered exactly what they proposed, on the timeline they gave us, with weekly updates the whole way through."
          name="Robert Sinclair"
          role="Body Corporate Chair, Trafalgar Property Management"
          logoSrc="/partners/trafalgar.svg"
          logoAlt="Trafalgar Property Management"
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="body-corporate-painting-services-carousel-label"
      >
        <h2
          id="body-corporate-painting-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          Beyond painting, we support every part of your
          <br />
          body corporate — explore our full range of services below.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES.filter((slide) => slide.href !== "/painting")}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="body-corporate-painting-faq-heading"
        />
      </section>
    </>
  );
}

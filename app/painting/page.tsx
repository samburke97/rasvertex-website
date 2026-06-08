// app/painting/page.tsx

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

import {
  HERO_SLIDES,
  SERVICES,
  FEATURES,
  PROJECTS,
  CARDS,
  FAQS,
  FAQ_CONTACT,
} from "../data/paintingData";

export const metadata = generatePageMetadata({
  title: "Painting Services Sunshine Coast",
  description:
    "Residential, commercial and body corporate painting across the Sunshine Coast. QBCC licensed, 5-year written warranty, one project manager from quote to sign-off.",
  path: "/painting",
  keywords: [
    "painting Sunshine Coast",
    "commercial painting Sunshine Coast",
    "body corporate painting",
    "residential painter Noosa",
    "exterior painting Caloundra",
    "strata painting Maroochydore",
    "painter Mooloolaba",
    "exterior painting Sunshine Coast",
    "QBCC licensed painter",
    "rope access painting",
  ],
});

export default function PaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Painting Services Sunshine Coast"
        description="Professional residential, commercial and body corporate painting across the Sunshine Coast. QBCC licensed, IRATA rope access, 5-year written warranty."
        image="https://www.ras-vertex.com.au/images/projects/1.jpeg"
        url="https://www.ras-vertex.com.au/painting"
        serviceType="Painting"
        areaServed={[
          "Sunshine Coast",
          "Noosa",
          "Caloundra",
          "Maroochydore",
          "Mooloolaba",
        ]}
      />

      <ServiceSEO
        heading="Painting services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-20">
        <ServiceHero
          heading="Painting the Sunshine Coast for 25 years. Body corporate, strata, residential, and commercial painters."
          lede="One project manager, from first phone call to warranty sign-off. One number, one invoice, one thread."
          slides={HERO_SLIDES}
          headingId="painting-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Painting done properly, by people who live here."
          paragraphs={[
            "We've been painting buildings on the Sunshine Coast since before half the developments along the foreshore were built. In that time we've learned one thing above everything else: coastal painting is not the same as painting anywhere else. The salt air off Mooloolaba, the UV intensity up through Noosa, the humidity that rolls in off the hinterland — they all eat paint that isn't specced correctly. Every system we use is chosen for the substrate, the exposure, and the specific conditions of your building's location.",
            "Whether it's a residential repaint in Buderim, exterior painting for a body corporate in Caloundra, commercial painting for a retail centre in Maroochydore, or a high-rise strata job in Mooloolaba — we run every project the same way. One project manager, on-site from day one, reachable on a single number until the warranty is signed. No subcontractors turning up unannounced. No quoting one crew and sending another.",
          ]}
          headingId="painting-intro-heading"
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

      <section className="px-10 pt-20 pb-20">
        <PhotoGrid
          showHeader={false}
          cta={{
            body: "Every painter on the Sunshine Coast will quote you a job. Not every painter will show up on time, document every coat, and back the work with a five-year warranty. We will.",
            link: { label: "Get a free quote →", href: "/contact" },
          }}
        />
      </section>

      <section className="py-20 px-10">
        <ServiceAccordion
          heading="What kind of paint job are you thinking about?"
          services={SERVICES}
          headingId="painting-services-heading"
        />
      </section>

      <section className="px-10 py-20" aria-labelledby="before-after-heading">
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Coolum Resort before exterior repaint by RAS-VERTEX"
          afterAlt="Coolum Resort after exterior repaint by RAS-VERTEX"
          clientName="Coolum Resort"
          heading="Dedicated maintenance for the full resort complex."
          body="RACV Resort Noosa had been managing building maintenance through Brisbane-based contractors — and the distance showed. We now run a dedicated program across the full resort complex. One project manager, one team, on their schedule."
          quote="The communication alone sets them apart. One number, one thread, weekly photos — exactly what a body corporate needs."
          quoteAuthor="James Whitfield"
          quoteRole="Facilities Manager, Accor Hotels"
          authorLogo="/partners/accor.svg"
          authorLogoAlt="Accor Hotels"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="before-after-heading"
        />
      </section>

      <section className="py-20">
        <ServiceProjects
          heading="Work we're proud of, from Noosa to Caloundra."
          subheading="Twenty-five years of painting across the Sunshine Coast. High-rise body corporates in Mooloolaba, heritage homes in Buderim, resort complexes in Coolum — every job gets the same crew, the same prep, and the same five-year warranty."
          projects={PROJECTS}
          footerNote="We also work across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour, Yandina and throughout the hinterland."
          headingId="painting-projects-heading"
        />
      </section>

      <section className="pb-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — painting services"
        />
      </section>

      <section className="px-10 pb-24">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="painting-faq-heading"
        />
      </section>
    </>
  );
}

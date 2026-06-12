// app/waterproofing/page.tsx

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
} from "../data/waterproofingData";

export const metadata = generatePageMetadata({
  title: "Waterproofing Sunshine Coast | Roof, Balcony & Leak Detection",
  description:
    "Professional waterproofing on the Sunshine Coast. Concrete roof restoration, balcony membrane replacement, leak detection and remedial injection. Diamond grinding, QBCC licensed, written warranty.",
  path: "/waterproofing",
  keywords: [
    "waterproofing Sunshine Coast",
    "roof waterproofing Sunshine Coast",
    "balcony waterproofing Sunshine Coast",
    "concrete roof restoration Sunshine Coast",
    "leak detection Sunshine Coast",
    "membrane waterproofing Sunshine Coast",
    "body corporate waterproofing Sunshine Coast",
    "strata waterproofing Sunshine Coast",
    "waterproofing Maroochydore",
    "waterproofing Mooloolaba",
    "waterproofing Noosa",
    "QBCC waterproofing Sunshine Coast",
  ],
});

export default function WaterproofingPage() {
  return (
    <>
      <ServiceSchema
        name="Waterproofing Sunshine Coast"
        description="Professional waterproofing on the Sunshine Coast. Concrete roof restoration, balcony membrane replacement, leak detection and remedial injection. Diamond grinding, QBCC licensed, written warranty."
        image="https://www.ras-vertex.com.au/nav/waterproofing.png"
        url="https://www.ras-vertex.com.au/waterproofing"
        serviceType="Waterproofing"
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
        heading="Waterproofing services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              Waterproofing the
              <br />
              Sunshine Coast.
            </>
          }
          lede="From preparation, crack repair, diamond grinding and membrane application — we protect your property from when the Sunshine Coast doesn't live up to its name."
          slides={HERO_SLIDES}
          headingId="waterproofing-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Don't wait for the cracks to appear."
          paragraphs={[
            "Waterproofing is only as good as the surface beneath it. Before we apply any membrane, all existing coatings are removed, the concrete is diamond-ground to a clean profile, and every crack is properly repaired — square-cut, backed, and sealed to allow for future structural movement. No surface-only treatment that bridges the crack and fails within a season.",
            "We specialise in rooftop waterproofing for the Sunshine Coast's specific conditions — UV intensity, thermal cycling and salt air that degrade generic inland membrane systems within a few years. Every system we apply is specified for the substrate and the exposure, applied to manufacturer thickness, and backed by a written workmanship warranty. QBCC licensed for waterproofing works in Queensland.",
          ]}
          headingId="waterproofing-intro-heading"
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
            body: "By the time water staining appears on a ceiling or damp shows on a wall, the membrane has typically been failing for some time. A thermal imaging inspection costs a fraction of the remediation it prevents.",
            link: { label: "Book an inspection →", href: "/contact" },
          }}
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What waterproofing service
              <br />
              are you looking for?
            </>
          }
          ariaLabel="What waterproofing service are you looking for?"
          services={SERVICES}
          headingId="waterproofing-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      <section className="pt-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — waterproofing services"
        />
      </section>

      <section className="pt-20">
        <ServiceFeatures
          features={FEATURES}
          displayText={"Dry.\nWarranted."}
          ariaLabel="Why choose RAS-VERTEX for waterproofing"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="waterproofing-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Mooloolaba strata balconies before waterproofing membrane replacement"
          afterAlt="Mooloolaba strata balconies after waterproofing membrane replacement by RAS-VERTEX"
          clientName="Mooloolaba Oceanfront Strata"
          heading="52 balconies. Staged across two sinking fund cycles."
          body="This Mooloolaba strata had 52 balconies with failing membranes — the full scope was beyond a single sinking fund allocation. We assessed every balcony with thermal imaging, prioritised by severity, and staged the program across two years. Full replacement on the critical balconies first, monitored maintenance on those with time remaining."
          quote="They gave us a condition report we could put straight into our sinking fund forecast. No drama, no surprises — exactly what a body corporate needs."
          quoteAuthor="Karen Holloway"
          quoteRole="Strata Manager, Mooloolaba"
          authorLogo="/partners/accor.svg"
          authorLogoAlt="Mooloolaba Oceanfront Strata"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="waterproofing-before-after-heading"
        />
      </section>

      <section className="px-10 py-20" aria-label="Waterproofing warranty">
        <WarrantyCard
          stat="15"
          statLabel={"year\nwarranty"}
          heading={
            <>
              Prepared right.
              <br />
              Warranted in writing.
            </>
          }
          body="Membrane systems installed by RAS-VERTEX are backed by a written workmanship warranty at completion. Where manufacturer warranties apply — up to 15 years on qualifying membrane systems — these are lodged in the building owner's name and form part of the body corporate or owner's compliance file. We don't cut corners on specification or preparation, because we're the ones standing behind the result."
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
          subheading="Concrete roof restorations, balcony membrane programs and leak detection across the Sunshine Coast — every surface prepared properly, every system warranted in writing."
          projects={PROJECTS}
          footerNote="We also work across Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="waterproofing-faq-heading"
        />
      </section>
    </>
  );
}

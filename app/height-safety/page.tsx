// app/height-safety/page.tsx

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
} from "../data/heightSafetyData";

export const metadata = generatePageMetadata({
  title: "Height Safety Systems Sunshine Coast | Installation & Certification",
  description:
    "Height safety installation, inspection and recertification on the Sunshine Coast. Anchor points, static lines and roof access systems to AS/NZS 1891. IRATA certified, QBCC licensed, compliance managed end-to-end.",
  path: "/height-safety",
  keywords: [
    "height safety Sunshine Coast",
    "anchor point installation Sunshine Coast",
    "height safety inspection Sunshine Coast",
    "height safety certification Sunshine Coast",
    "AS/NZS 1891 Sunshine Coast",
    "roof access system Sunshine Coast",
    "fall protection Sunshine Coast",
    "static line installation Sunshine Coast",
    "height safety body corporate Sunshine Coast",
    "rope access height safety",
    "height safety recertification Maroochydore",
    "WHS compliance Sunshine Coast",
  ],
});

export default function HeightSafetyPage() {
  return (
    <>
      <ServiceSchema
        name="Height Safety Systems Sunshine Coast"
        description="Height safety installation, inspection and recertification on the Sunshine Coast. Anchor points, static lines and roof access systems to AS/NZS 1891. IRATA certified, QBCC licensed, compliance managed end-to-end."
        image="https://www.ras-vertex.com.au/nav/height.png"
        url="https://www.ras-vertex.com.au/height-safety"
        serviceType="Height Safety"
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
        heading="Height safety installation, inspection and certification on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-20">
        <ServiceHero
          heading={
            <>
              Height safety systems
              <br />
              on the Sunshine Coast.
            </>
          }
          lede="Anchor point installation, annual inspections and recertification to AS/NZS 1891 — managed end-to-end so your building's compliance never lapses."
          slides={HERO_SLIDES}
          headingId="height-safety-hero-heading"
        />
      </section>

      <section className="pt-20 pb-20">
        <ServiceIntro
          heading="Installed right. Certified on time. No gaps."
          paragraphs={[
            "Height safety isn't optional — under the Work Health and Safety Act 2011, building owners and body corporate committees carry direct liability for any fall incident where compliant systems weren't in place and current. Every anchor point, static line and roof access system we install is designed, engineered and certified to AS/NZS 1891, with full compliance documentation issued at completion.",
            "What separates us from most height safety contractors is that our technicians use these systems every day. 30+ IRATA-certified rope access workers means we understand exactly what a compliant installation needs to perform under real working load conditions — not just what passes an inspection on paper. We design for how your building is actually maintained, not for a generic checklist.",
          ]}
          headingId="height-safety-intro-heading"
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
            body: "Height safety compliance is a legal obligation — not a box-ticking exercise. Uncertified or lapsed systems create direct liability for building owners and body corporate committees under the WHS Act. We keep your building current.",
            link: { label: "Talk to our team →", href: "/contact" },
          }}
        />
      </section>

      <section className="pt-20 px-10">
        <ServiceAccordion
          heading={
            <>
              What height safety service
              <br />
              are you looking for?
            </>
          }
          ariaLabel="What height safety service are you looking for?"
          services={SERVICES}
          headingId="height-safety-services-heading"
          ctaLabel="Not sure? Let's talk about it →"
        />
      </section>

      <section className="pt-20">
        <ServiceCards
          cards={CARDS}
          heading="Who we work for."
          ariaLabel="Who we work for — height safety services"
        />
      </section>

      <section className="pt-20">
        <ServiceFeatures
          features={FEATURES}
          displayText={"Safety\nFirst."}
          ariaLabel="Why choose RAS-VERTEX for height safety"
        />
      </section>

      <section
        className="px-10 pt-20"
        aria-labelledby="height-safety-before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc="/images/projects/1.jpeg"
          afterSrc="/images/projects/2.jpeg"
          beforeAlt="Maroochydore commercial tower before height safety system installation"
          afterAlt="Maroochydore commercial tower after anchor point and static line installation by RAS-VERTEX"
          clientName="Maroochydore Commercial Tower"
          heading="Full rooftop system. Certified in a single day."
          body="This 14-storey Maroochydore tower had no compliant rooftop access system in place — contractors accessing the roof for HVAC and facade maintenance had been doing so without certified fall protection. We designed, installed and certified a full anchor point and static line system in one day, with zero tenant disruption."
          quote="We didn't realise how exposed we were until RAS-VERTEX audited the building. They had a compliant system installed and certified before the week was out."
          quoteAuthor="Andrew Park"
          quoteRole="Facilities Manager, Maroochydore"
          authorLogo="/partners/accor.svg"
          authorLogoAlt="Maroochydore Commercial Tower"
          ctaHref="/work"
          ctaLabel="Our projects →"
          headingId="height-safety-before-after-heading"
        />
      </section>

      <section className="px-10 py-20" aria-label="Annual recertification">
        <WarrantyCard
          stat="12"
          statLabel={"month\ncertification"}
          heading={
            <>
              Compliance tracked.
              <br />
              Never lapsed.
            </>
          }
          body="AS/NZS 1891 requires every height safety system to be inspected and recertified every 12 months — no exceptions. We manage the full cycle for body corporates and commercial property managers across the Sunshine Coast: scheduling, inspection, load testing, certification issuance and renewal reminders. Your compliance is current. Your liability is covered."
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
          subheading="Anchor point installations, recertification programs and roof access systems across the Sunshine Coast — every system compliant, every building covered, every certificate on file."
          projects={PROJECTS}
          footerNote="We also service Kawana, Sippy Downs, Coolum, Peregian, Noosaville, Tewantin, Nambour and throughout the hinterland."
        />
      </section>

      <section className="px-10 py-20">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="height-safety-faq-heading"
        />
      </section>
    </>
  );
}

// app/painting/page.tsx

import { generatePageMetadata } from "../components/seo/PageSEO";
import { ServiceSchema } from "../components/seo/StructuredData";
import ServiceSEO from "../components/shared/ServiceSEO";
import ServiceHeroSplit from "../components/shared/ServiceHeroSplit";
import ServiceBeforeAfter from "../components/shared/ServiceBeforeAfter";
import ServiceCards from "../components/shared/ServiceCards";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import WarrantyCard from "../components/shared/WarrantyCard";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import Watermark from "../components/shared/Watermark";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";

import { cld } from "../lib/cloudinary";

import {
  HERO_SLIDES,
  SERVICES,
  CARDS,
  FAQS,
  FAQ_CONTACT,
} from "../data/paintingData";

export const metadata = generatePageMetadata({
  title: "Painting Services | Sunshine Coast Painters",
  description:
    "Residential, commercial and body corporate painting across the Sunshine Coast. QBCC licensed, 8-year written warranty, one project manager from quote to sign-off.",
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
    "commercial painters Sunshine Coast",
    "residential painters Sunshine Coast",
    "strata painters Sunshine Coast",
    "body corporate painters Sunshine Coast",
    "painting contractors Sunshine Coast",
    "interior painting Sunshine Coast",
  ],
});

export default function PaintingPage() {
  return (
    <>
      <ServiceSchema
        name="Painting Services Sunshine Coast"
        description="Professional residential, commercial and body corporate painting across the Sunshine Coast. QBCC licensed, IRATA rope access, 8-year written warranty."
        image="https://www.rasvertex.com.au/images/projects/1.jpeg"
        url="https://www.rasvertex.com.au/painting"
        serviceType="Painting"
      />

      <ServiceSEO
        heading="Painting services on the Sunshine Coast"
        services={SERVICES}
      />

      <section className="pt-10">
        <ServiceHeroSplit
          heading={
            <>
              The Sunshine Coast's leading commercial, body corporate and
              residential painting team.
            </>
          }
          lede="For over 25 years, we've completed painting projects with one dedicated team, right here on the Sunshine Coast. No subcontractors, no handovers, just the same experienced faces on site from start to finish."
          image={{ src: HERO_SLIDES[0].src, alt: HERO_SLIDES[0].alt }}
          headingId="painting-hero-heading"
        />
      </section>

      <Watermark className="px-5 md:px-10 pt-10 md:pt-20" />

      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={CARDS}
          display="list"
          eyebrow=""
          heading="Three specialist painting teams covering every type of property."
          ariaLabel="Who we work for, painting services on the Sunshine Coast"
          footerLogosHeading="Fully Qualified"
          footerLogos={[
            {
              src: "/images/associations/qbcc.png",
              alt: "QBCC",
            },
            {
              src: "/images/associations/smartstrata.png",
              alt: "Smart Strata",
            },
            {
              src: "/images/associations/work-cover.svg",
              alt: "WorkCover Queensland",
              width: 120,
              height: 80,
            },
          ]}
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-label="Warranty">
        <WarrantyCard
          body="Every exterior paint job is backed by an 8-year written warranty covering workmanship and the paint system. We only use Haymes and Dulux coatings, proven to perform in Sunshine Coast’s harsh coastal conditions."
          logosHeading="Backed by the best."
          logos={[
            {
              src: "/images/associations/haymes.svg",
              alt: "Haymes Paint",
              width: 100,
              height: 50,
            },
            {
              src: "/images/associations/dulux.svg",
              alt: "Dulux",
              width: 100,
              height: 50,
            },
          ]}
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="before-after-heading"
      >
        <ServiceBeforeAfter
          beforeSrc={cld("bindaree-before", { width: 1600 })}
          afterSrc={cld("bindaree-after", { width: 1600 })}
          beforeAlt="Bindaree Apartments in Mooloolaba before exterior repaint by RAS-VERTEX"
          afterAlt="Bindaree Apartments in Mooloolaba after exterior repaint by RAS-VERTEX"
          projectName="Bindaree Repaint"
          location="Mooloolaba, QLD"
          heading="A tired facade, refreshed for coastal living."
          body="Bindaree Apartments sits just back from the beach in Mooloolaba, where years of salt air, UV exposure and coastal weather had left the exterior faded and chalking. Our team completed a full body corporate repaint, removing failed coatings, preparing the substrate and applying a Haymes three coat exterior paint system designed for coastal conditions. The result is a durable finish that protects the building and keeps it looking its best for years to come."
          ctaHref="/contact"
          ctaLabel="Chat to us about your next project →"
          headingId="before-after-heading"
        />
      </section>

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial
          quote="The RAS-VERTEX team are pros. Top quality workmanship and always in a professional manner. We've used RAS VERTEX on a number of commercial painting projects and they always deliver. Especially if theres something we need when access is difficult, this is the team we always turn to."
          name="Tim Lee"
          role="Commercial Painting"
          logoSrc=""
        />
      </section>

      <section
        className="py-10 md:py-20"
        aria-labelledby="painting-services-carousel-label"
      >
        <h2
          id="painting-services-carousel-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
        >
          We do more than painting, with specialist services{" "}
          <br className="hidden xl:block" />
          that support every part of your building.
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
          headingId="painting-faq-heading"
          ctaHeading="All painting projects, big or small."
        />
      </section>
    </>
  );
}

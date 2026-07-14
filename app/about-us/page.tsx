// app/company/page.tsx

import type { Metadata } from "next";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import RopeAccessSection from "../components/homepage/RopeAccessSection";
import AboutPartnerGrid from "../components/about/AboutPartnerGrid";
import ServiceAreas from "../components/about/ServiceAreas";
import PartnersCarousel from "../components/homepage/PartnersCarousel";
import TestimonialsSection from "../components/homepage/TestimonialSection";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import { FAQS, FAQ_CONTACT } from "../data/companyData";
import { cld } from "../lib/cloudinary";

export const metadata: Metadata = {
  title: "About RAS-VERTEX | Sunshine Coast Maintenance Specialists",
  description:
    "We're the Sunshine Coast's complete property maintenance partner, IRATA-certified and QBCC licensed for painting, cleaning, waterproofing and more.",
  alternates: {
    canonical: "/about-us",
  },
  keywords: [
    "property maintenance Sunshine Coast",
    "body corporate maintenance Sunshine Coast",
    "strata maintenance Sunshine Coast",
    "commercial building maintenance Sunshine Coast",
    "IRATA rope access Sunshine Coast",
    "building cleaning Sunshine Coast",
    "waterproofing Sunshine Coast",
    "height safety Sunshine Coast",
    "painting Sunshine Coast",
    "building inspections Sunshine Coast",
    "RAS-VERTEX",
  ],
  openGraph: {
    title: "About RAS-VERTEX — Sunshine Coast Property Maintenance",
    description:
      "The Sunshine Coast's complete property maintenance partner. Painting, cleaning, waterproofing, height safety and rope access for body corporates, strata, and commercial properties.",
    url: "https://www.rasvertex.com.au/about-us",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main aria-label="About RAS-VERTEX">
      <section
        className="px-5 md:px-10 pt-5 pb-10 md:pb-20"
        aria-labelledby="rope-access-heading"
      >
        <RopeAccessSection
          imageAspectRatio="4 / 3"
          contentAlign="end"
          headingLevel="h1"
          heading="The Sunshine Coast’s complete property maintenance partner."
          paragraphs={[
            "RAS-VERTEX is the Sunshine Coast's commercial, body corporate and strata maintenance specialists with over a decade of proven expertise. Since 2000, we've grown into a team of 30+, trusted by body corporates, asset managers, and commercial partners across SEQ. Locally-owned and community-focused, we deliver technical excellence with the accountability that comes from being your neighbour.",
          ]}
          ctaLabel=""
          ctaHref=""
        />
      </section>

      <section className="py-10 md:py-20" aria-label="Industry partners">
        <PartnersCarousel
          headingTag="h2"
          headingId="about-hero-heading"
          heading={
            <>
              We&rsquo;re trusted by the
              <br />
              coast&rsquo;s best run buildings.
            </>
          }
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-label="What we do">
        <AboutPartnerGrid />
      </section>
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="service-areas-heading"
      >
        <ServiceAreas />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-label="Community">
        <AboutPartnerGrid
          imagePosition="left"
          photoSrc={cld("coolum_fc", { width: 1200 })}
          photoAlt="RAS-VERTEX sponsoring the Coolum Football Club"
          title={
            <>
              We back the community{" "}
              <br className="hidden xl:block" />
              that backs us.
            </>
          }
          paragraphs={[
            "Our crew live here, their kids play here, and we put our name behind the local clubs and causes that make the Sunshine Coast what it is.",
          ]}
          logos={[
            {
              src: "/images/community/coolumbowls.png",
              alt: "Coolum Beach Bowls Club",
              width: 240,
              height: 80,
            },
            {
              src: "/images/community/coolumfc.png",
              alt: "Coolum Football Club",
              width: 110,
              height: 110,
            },
            {
              src: "/images/community/peregianbeachslsc.png",
              alt: "Peregian Beach Surf Life Saving Club",
              width: 110,
              height: 110,
            },
            {
              src: "/images/community/ruok.png",
              alt: "R U OK?",
              width: 210,
              height: 80,
            },
          ]}
        />
      </section>
      {/* ── Service areas ── */}

      {/* ── Services carousel — component owns its own horizontal padding ── */}
      <section className="py-10 md:py-20" aria-labelledby="services-label">
        <h2 id="services-label" className="px-5 md:px-10 pb-10 md:pb-20">
          We partner with Sunshine Coast locals to take care{" "}
          <br className="hidden md:block" />
          of their complete property maintenance needs.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      {/* ── Testimonials ── */}
      <section
        className="px-5 md:px-10 pt-20 md:pt-10 pb-10 md:pb-20"
        aria-label="Client testimonials"
      >
        <TestimonialsSection />
      </section>

      {/* ── FAQ ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Frequently asked questions"
      >
        <ServiceFAQ items={FAQS} contact={FAQ_CONTACT} />
      </section>
    </main>
  );
}

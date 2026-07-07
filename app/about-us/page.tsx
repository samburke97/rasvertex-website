// app/company/page.tsx

import type { Metadata } from "next";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import TrustBanner from "../components/about/TrustBanner";
import ServiceAreas from "../components/about/ServiceAreas";
import PartnersCarousel from "../components/homepage/PartnersCarousel";
import ServiceCards from "../components/shared/ServiceCards";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import { FAQS, FAQ_CONTACT } from "../data/companyData";
import { CARDS } from "../data/paintingData";

export const metadata: Metadata = {
  title: "About RAS-VERTEX | Sunshine Coast Property Maintenance Specialists",
  description:
    "RAS-VERTEX — the Sunshine Coast's complete property maintenance partner. IRATA-certified rope access, QBCC licensed. Painting, cleaning, waterproofing, height safety and maintenance for body corporates and strata.",
  keywords: [
    "property maintenance Sunshine Coast",
    "body corporate maintenance Sunshine Coast",
    "strata maintenance Sunshine Coast",
    "commercial building maintenance Sunshine Coast",
    "IRATA rope access Sunshine Coast",
    "building cleaning Sunshine Coast",
    "waterproofing Sunshine Coast",
    "height safety Sunshine Coast",
    "painting contractor Sunshine Coast",
    "RAS-VERTEX",
  ],
  openGraph: {
    title: "About RAS-VERTEX — Sunshine Coast Property Maintenance",
    description:
      "The Sunshine Coast's complete property maintenance partner. Painting, cleaning, waterproofing, height safety and rope access for body corporates, strata, and commercial properties.",
    url: "https://rasvertex.com.au/company",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main aria-label="About RAS-VERTEX">
      {/* ── Hero — partners carousel ── */}
      <section className="pt-10 pb-10 md:pb-20" aria-label="Industry partners">
        <PartnersCarousel
          headingTag="h1"
          headingId="about-hero-heading"
          heading={
            <>
              The Sunshine Coast&rsquo;s complete
              <br />
              property maintenance partner.
            </>
          }
        />
      </section>

      {/* ── Sticky specialist teams ── */}
      <section className="px-5 md:px-10 py-10 md:py-20">
        <ServiceCards
          cards={CARDS}
          display="list"
          eyebrow=""
          heading="Three specialist teams covering every type of property."
          ariaLabel="Who we work for — property maintenance"
          footerCtaLabel="Let's chat about your project →"
          footerCtaHref="/contact"
        />
      </section>

      {/* ── Trust banner ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Why trust RAS-VERTEX"
      >
        <TrustBanner />
      </section>

      {/* ── Services carousel — component owns its own horizontal padding ── */}
      <section className="py-10 md:py-20" aria-labelledby="services-label">
        <h2
          id="services-label"
          className="px-5 md:px-10 pb-10 md:pb-20"
          style={{ maxWidth: "18ch" }}
        >
          We partner with sunshine coast locals to take care of their complete
          property maintenance needs.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      {/* ── Service areas ── */}
      <section className="px-5 md:px-10 py-10 md:py-20" aria-labelledby="service-areas-heading">
        <ServiceAreas />
      </section>

      {/* ── Partners marquee — component owns its own horizontal padding ── */}
      <section className="py-10 md:py-10" aria-label="Industry partners">
        <PartnersCarousel showHeader={false} />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-label="Client testimonial">
        <ContactTestimonial />
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

// app/company/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import AboutHero from "../components/about/AboutHero";
import CompanyTimeline from "../components/about/CompanyTimeline";
import AboutServices from "../components/about/AboutServices";
import Carousel from "../components/homepage/Carousel";
import TestimonialsSection from "../components/homepage/TestimonialSection";
import PartnersCarousel from "../components/homepage/PartnersCarousel";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import { FAQS, FAQ_CONTACT } from "../data/companyData";

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
      {/* ── Hero: headline + lede + PhotoGrid ── */}
      <section className="px-10 pt-10 pb-20" aria-labelledby="about-heading">
        <AboutHero />
      </section>

      {/* ── Interactive scroll timeline ── */}
      <section className="px-10 pb-20" aria-labelledby="timeline-heading">
        <CompanyTimeline />
      </section>

      {/* ── Why us carousel ── */}
      <section className="px-10 pb-20" aria-label="Why choose RAS-VERTEX">
        <Carousel />
      </section>

      {/* ── Partners marquee — full bleed ── */}
      <section
        className="py-20"
        aria-label="Industry partners and associations"
      >
        <PartnersCarousel />
      </section>

      {/* ── Services: sticky left + stacked cards ── */}
      <section className="px-10 py-20" aria-labelledby="services-heading">
        <AboutServices />
      </section>

      {/* ── Testimonials — homepage component ── */}
      <section className="px-10 py-20" aria-label="Client testimonials">
        <TestimonialsSection />
      </section>

      {/* ── FAQ + contact CTA ── */}
      <section className="px-10 py-20" aria-labelledby="company-faq-heading">
        <ServiceFAQ
          heading="Common questions."
          items={FAQS}
          contact={FAQ_CONTACT}
          headingId="company-faq-heading"
        />
      </section>

      {/* ── Closing CTA ── */}
      <section
        className="px-10 py-20"
        aria-label="Get in touch with RAS-VERTEX"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-col-gap)",
            alignItems: "end",
          }}
        >
          <h2>
            Ready to talk about
            <br />
            your building?
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <p className="p-soft">
              One call to Hylton and you&rsquo;ll know exactly where you stand.
              We&rsquo;ll be on site within 48 hours, no obligation.
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-md)",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "48px",
                  padding: "0 var(--space-xl)",
                  borderRadius: "var(--radius-full)",
                  background: "var(--navy)",
                  color: "#ffffff",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--button-size)",
                  fontWeight: "var(--weight-bold)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                aria-label="Request a free quote from RAS-VERTEX"
              >
                Get a free quote
              </Link>
              <a
                href="tel:0754379355"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "48px",
                  padding: "0 var(--space-xl)",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--navy)",
                  background: "transparent",
                  color: "var(--navy)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--button-size)",
                  fontWeight: "var(--weight-bold)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                aria-label="Call RAS-VERTEX on (07) 5437 9355"
              >
                (07) 5437 9355
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

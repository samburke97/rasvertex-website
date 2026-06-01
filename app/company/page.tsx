// app/company/page.tsx
// Page-level spacing is the only thing managed here.
// Sections flow continuously — no equal py-20 gaps everywhere.

import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import CompanyTimeline from "../components/about/CompanyTimeline";
import AboutServices from "../components/about/AboutServices";
import AboutWhy from "../components/about/AboutWhy";
import TestimonialsSection from "../components/homepage/TestimonialSection";
import PartnersCarousel from "../components/homepage/PartnersCarousel";
import Button from "../components/ui/Button";

export const metadata: Metadata = {
  title: "About RAS-VERTEX | Sunshine Coast Property Maintenance Specialists",
  description:
    "RAS-VERTEX — the Sunshine Coast's complete property maintenance partner. Painting, building cleaning, waterproofing, height safety, and rope access for body corporates, strata, commercial, and residential. IRATA-certified, QBCC licensed.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RAS-VERTEX",
  description:
    "The Sunshine Coast's complete property maintenance partner — painting, building cleaning, waterproofing, height safety, and IRATA-certified rope access.",
  url: "https://rasvertex.com.au",
  telephone: "07 5443 0000",
  email: "hello@rasvertex.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maroochydore",
    addressRegion: "QLD",
    postalCode: "4558",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -26.6511,
      longitude: 153.0906,
    },
    geoRadius: "80000",
  },
  serviceType: [
    "Building Painting",
    "Body Corporate Painting",
    "Strata Maintenance",
    "Commercial Building Maintenance",
    "Rope Access",
    "Building Cleaning",
    "Window Cleaning",
    "Waterproofing",
    "Height Safety",
  ],
  foundingDate: "2009",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main aria-label="About RAS-VERTEX">
        {/* ── Hero: headline + stats + image ── */}
        <section className="px-10 pt-10 pb-20">
          <AboutHero />
        </section>

        {/* ── Story + timeline: flows directly from hero ── */}
        <section className="px-10 pb-24">
          <CompanyTimeline />
        </section>

        {/* ── Why us: border grid, no extra visual break needed ── */}
        <section className="px-10 pb-24">
          <AboutWhy />
        </section>

        {/* ── Partners: full bleed marquee, no px ── */}
        <section className="py-20">
          <PartnersCarousel />
        </section>

        {/* ── Services: sticky left + stacked cards right ── */}
        <section className="px-10 py-20">
          <AboutServices />
        </section>

        {/* ── Testimonials ── */}
        <section className="px-10 py-20">
          <TestimonialsSection />
        </section>

        {/* ── Closing CTA: minimal, inline ── */}
        <section
          className="px-10 py-20"
          style={{ borderTop: "1px solid var(--line)" }}
          aria-label="Get in touch"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-col-gap)",
              alignItems: "end",
            }}
          >
            <h2>Ready to talk about your building?</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <p className="p-soft">
                We&rsquo;ll be on site within 48 hours. No obligation, no pushy
                sales rep — just a trade lead who knows what they&rsquo;re
                looking at.
              </p>
              <Button as="link" href="/contact" variant="primary" size="md">
                Get a free quote →
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

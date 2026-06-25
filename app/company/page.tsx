// app/company/page.tsx

import type { Metadata } from "next";
import ServiceHero from "../components/shared/ServiceHero";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import PhotoGrid from "../components/shared/PhotoGrid";
import TeamSection from "../components/about/TeamSection";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import TrustBanner from "../components/about/TrustBanner";
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
      {/* ── Hero ── */}
      <section className="pt-20" aria-labelledby="about-hero-heading">
        <ServiceHero
          heading={
            <>
              The Sunshine Coast&rsquo;s complete
              <br />
              property maintenance partner.
            </>
          }
          lede="Painting, cleaning, waterproofing, height safety and rope access — for body corporates, strata, commercial properties, and homes from Noosa to Caloundra."
          headingId="about-hero-heading"
        />
      </section>

      {/* ── Photo grid ── */}
      <section className="px-10 pb-30" aria-label="Recent work">
        <PhotoGrid showHeader={false} />
      </section>

      {/* ── Team section ── */}
      <section className="px-10 pb-30" aria-labelledby="team-section-heading">
        <TeamSection />
      </section>

      {/* ── Trust banner ── */}
      <section className="px-10 pb-30" aria-label="Why trust RAS-VERTEX">
        <TrustBanner />
      </section>

      {/* ── Services carousel ── */}
      <section className="py-30" aria-labelledby="services-label">
        <h2 id="services-label" className="px-10 pb-20">
          We partner with sunshine coast locals to take care of <br /> their
          complete property maintenance needs.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      {/* ── Partners marquee — no header ── */}
      <section aria-label="Industry partners">
        <PartnersCarousel />
      </section>

      {/* ── FAQ ── */}
      <section className="px-10 py-30" aria-label="Frequently asked questions">
        <ServiceFAQ items={FAQS} contact={FAQ_CONTACT} />
      </section>
    </main>
  );
}

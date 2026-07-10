// app/company/page.tsx

import type { Metadata } from "next";
import { SERVICE_SLIDES } from "../components/homepage/HeroVariant";
import ServiceCarousel from "../components/homepage/ServiceCarousel";
import RopeAccessSection from "../components/homepage/RopeAccessSection";
import CommunitySponsor from "../components/about/CommunitySponsor";
import ServiceAreas from "../components/about/ServiceAreas";
import PartnersCarousel from "../components/homepage/PartnersCarousel";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import Watermark from "../components/shared/Watermark";
import { FAQS, FAQ_CONTACT } from "../data/companyData";

export const metadata: Metadata = {
  title: "About RAS-VERTEX | Sunshine Coast Property Maintenance Specialists",
  description:
    "The Sunshine Coast's complete property maintenance partner. IRATA-certified rope access, QBCC licensed. Painting, cleaning, waterproofing, height safety and maintenance for body corporates and strata.",
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
    "building inspections Sunshine Coast",
    "RAS-VERTEX",
  ],
  openGraph: {
    title: "About RAS-VERTEX — Sunshine Coast Property Maintenance",
    description:
      "The Sunshine Coast's complete property maintenance partner. Painting, cleaning, waterproofing, height safety and rope access for body corporates, strata, and commercial properties.",
    url: "https://www.ras-vertex.com.au/about-us",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main aria-label="About RAS-VERTEX">
      <Watermark className="px-5 md:px-10  md:py-10" />
      <section
        className="px-5 md:px-10 py-10 md:py-10 lg:pt-20"
        aria-labelledby="rope-access-heading"
      >
        <RopeAccessSection
          headingAbove
          heading={
            <>
              The Sunshine Coast&rsquo;s complete
              <br />
              property maintenance partner.
            </>
          }
          contentGroups={[
            {
              heading:
                "From rope access specialists to complete property care.",
              paragraphs: [
                "What began as specialist rope access expertise back in 2000, has grown into a complete property maintenance company, bringing together dedicated teams across painting, cleaning, maintenance, waterproofing and height safety.",
                "Today, our team of 30+ IRATA certified technicians supports body corporates, asset managers, commercial partners and property owners across the Sunshine Coast and South East Queensland. Locally owned and community focused, we combine technical expertise with the accountability that comes from being a trusted local partner.",
              ],
            },
            {
              heading:
                "One trusted partner for all your property maintenance needs",
              paragraphs: [
                "Rather than managing multiple contractors, our clients have one experienced team that understands their property, coordinates every service and takes responsibility from inspection through to completion.",
                "From high-rise and commercial repaints to window and building washes, waterproofing, height safety and building inspections, our dedicated teams take complete care of your property. Supported by experienced project managers and specialist crews, we deliver higher standards while making property maintenance simpler, more efficient and easier to manage.",
              ],
            },
          ]}
          ctaLabel="Meet the team →"
          ctaHref="/careers"
        />
      </section>

      <section className="pt-10 pb-10 md:pb-20" aria-label="Industry partners">
        <PartnersCarousel
          headingTag="h1"
          headingId="about-hero-heading"
          heading={
            <>
              We're trusted by the
              <br />
              coast&rsquo;s best run buildings.
            </>
          }
        />
      </section>

      {/* ── Service areas ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-labelledby="service-areas-heading"
      >
        <ServiceAreas />
      </section>
      <section className="px-5 md:px-10 py-10 md:py-20" aria-label="Community">
        <CommunitySponsor />
      </section>
      {/* ── Services carousel — component owns its own horizontal padding ── */}
      <section className="py-10 md:py-20" aria-labelledby="services-label">
        <h2 id="services-label" className="px-5 md:px-10 pb-10 md:pb-20">
          We partner with Sunshine Coast locals to take care of their complete
          <br />
          property maintenance needs.
        </h2>
        <ServiceCarousel
          slides={SERVICE_SLIDES}
          ariaLabel="RAS-VERTEX services"
        />
      </section>

      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Client testimonial"
      >
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

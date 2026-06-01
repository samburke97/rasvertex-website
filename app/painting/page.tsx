// app/painting/page.tsx

import type { Metadata } from "next";
import Hero from "../components/painting/Hero";
import PaintingIntro from "../components/painting/PaintingIntro";
import TeamStrip from "../components/painting/TeamStrip";
import ServicePicker from "../components/painting/ServicePicker";
import ServicePickerSEO from "../components/painting/ServicePickerSEO";
import BeforeAfter from "../components/painting/BeforeAfter";
import ServiceFeatures from "../components/painting/ServiceFeatures";
import PaintingProjects from "../components/painting/PaintingProjects";
import FAQ from "../components/painting/FAQ";
import TestimonialsSection from "../components/homepage/TestimonialSection";

export const metadata: Metadata = {
  title: "Painting Services Sunshine Coast | RAS-VERTEX",
  description:
    "Residential, commercial and body corporate painting across the Sunshine Coast. QBCC licensed, 5-year written warranty, one project manager from quote to sign-off.",
  keywords: [
    "painting Sunshine Coast",
    "commercial painting Sunshine Coast",
    "body corporate painting Sunshine Coast",
    "residential painter Noosa",
    "exterior painting Caloundra",
    "strata painting Maroochydore",
    "painter Mooloolaba",
    "exterior painting Sunshine Coast",
  ],
  openGraph: {
    title: "Painting Services Sunshine Coast | RAS-VERTEX",
    description:
      "QBCC licensed painting contractor for body corporates, strata, commercial and residential properties across the Sunshine Coast.",
    url: "https://rasvertex.com.au/painting",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function PaintingPage() {
  return (
    <main aria-label="Painting services — RAS-VERTEX Sunshine Coast">
      {/* SEO-only hidden service content for crawlers */}
      <ServicePickerSEO />

      {/* 1. Hero — h1 + scrolling image carousel */}
      <section className="px-10 pt-10 pb-20">
        <Hero />
      </section>

      {/* 2. Intro — sticky h2 left, copy right */}
      <section className="px-10 pb-20">
        <PaintingIntro />
      </section>

      {/* 3. Team cards — residential / commercial / strata */}
      <section className="px-10 pb-20">
        <TeamStrip />
      </section>

      {/* 4. Service picker accordion — body corp, commercial, residential */}
      <ServicePicker />

      {/* 5. Before / after slider + project specs + quote */}
      <section className="px-10 py-20">
        <BeforeAfter />
      </section>

      {/* 6. Features grid — differentiators */}
      <section className="px-10 pb-20">
        <ServiceFeatures />
      </section>

      {/* 7. Projects — 3-col grid, SEO-rich suburb copy */}
      <section className="px-10 py-20">
        <PaintingProjects />
      </section>

      {/* 8. Testimonials — reused shared component */}
      <section className="px-10 py-20">
        <TestimonialsSection />
      </section>

      {/* 9. FAQ — structured data + sticky left contact */}
      <section className="px-10 py-20">
        <FAQ />
      </section>
    </main>
  );
}

// app/contact/page.tsx

import type { Metadata } from "next";
import ContactSurface from "../components/contact/ContactSurface";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import PhotoCarousel from "../components/shared/PhotoCarousel";

export const metadata: Metadata = {
  title: "Contact Us | RAS-VERTEX — Sunshine Coast Painting & Maintenance",
  description:
    "Get a free quote from RAS-VERTEX. On site within 48 hours across the Sunshine Coast for painting, building cleaning, waterproofing, height safety and maintenance. Call (07) 5371 0201.",
  openGraph: {
    title: "Get a Free Quote | RAS-VERTEX",
    description:
      "Request a free quote from the Sunshine Coast's trusted painting and building maintenance team. On site within 48 hours, no obligation.",
    url: "https://rasvertex.com.au/contact",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

const CONTACT_SLIDES = [
  {
    src: "/images/projects/1.jpeg",
    alt: "Commercial repaint — Sunshine Coast",
  },
  { src: "/images/projects/2.jpeg", alt: "Facade restoration — Maroochydore" },
  { src: "/nav/painting.png", alt: "Painting project — Mooloolaba" },
  { src: "/nav/waterproofing.png", alt: "Waterproofing — Noosa" },
  { src: "/nav/maintenance.png", alt: "Building maintenance — Sunshine Coast" },
];

export default function ContactPage() {
  return (
    <main aria-label="Contact RAS-VERTEX — request a free quote">
      <section className="px-10 pt-20" aria-label="Request a free quote">
        <ContactSurface />
      </section>

      {/* ── Testimonial — its own full, centered section ── */}
      <section
        className="px-10 py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Client testimonial"
      >
        <ContactTestimonial />
      </section>

      <section
        className="pb-20"
        aria-label="Recent projects across the Sunshine Coast"
      >
        <PhotoCarousel
          slides={CONTACT_SLIDES}
          ariaLabel="Recent RAS-VERTEX projects"
        />
      </section>
    </main>
  );
}

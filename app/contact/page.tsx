// app/contact/page.tsx

import type { Metadata } from "next";
import ContactSurface from "../components/contact/ContactSurface";
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
      {/* ── Hero: h1 only. Google badge, image, and contact details
          now live inside ContactSurface's left column. ── */}
      <section className="px-10 pt-20 pb-10" aria-labelledby="contact-heading">
        <h1 id="contact-heading">
          Let&rsquo;s talk about
          <br />
          your building.
        </h1>
      </section>

      {/* ── Step form surface ── */}
      <section className="px-10 py-10" aria-label="Request a free quote">
        <ContactSurface />
      </section>

      {/* ── Photo carousel — bottom of page ── */}
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

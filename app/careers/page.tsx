// app/careers/page.tsx

import type { Metadata } from "next";
import CareersSurface from "./CareersSurface";
import ContactTestimonial from "../components/contact/ContactTestimonial";
import PhotoCarousel from "../components/shared/PhotoCarousel";

export const metadata: Metadata = {
  title: "Careers | RAS-VERTEX",
  description:
    "Join the RAS-VERTEX team on the Sunshine Coast. Rope access, painting, waterproofing and building maintenance careers, with IRATA-funded progression, direct employment, year-round work.",
};

const CAREER_SLIDES = [
  { src: "/images/projects/1.jpeg", alt: "RAS-VERTEX crew on site" },
  { src: "/images/projects/2.jpeg", alt: "Facade restoration in Maroochydore" },
  { src: "/nav/painting.png", alt: "Painting project in Mooloolaba" },
  { src: "/nav/waterproofing.png", alt: "Waterproofing project in Noosa" },
  { src: "/nav/maintenance.png", alt: "Building maintenance on the Sunshine Coast" },
];

export default function CareersPage() {
  return (
    <main aria-label="Careers at RAS-VERTEX">
      {/* ── Hero + form ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        aria-label="Apply to join the team"
      >
        <CareersSurface />
      </section>

      {/* ── Testimonial ── */}
      <section
        className="px-5 md:px-10 py-10 md:py-20"
        style={{ display: "flex", justifyContent: "center" }}
        aria-label="Team testimonial"
      >
        <ContactTestimonial />
      </section>
    </main>
  );
}

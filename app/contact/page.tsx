// app/contact/page.tsx

import type { Metadata } from "next";
import ContactSurface from "../components/contact/ContactSurface";
import ContactTestimonial from "../components/contact/ContactTestimonial";

export const metadata: Metadata = {
  title: "Contact Us | RAS-VERTEX — Sunshine Coast Painting & Maintenance",
  description:
    "Get in touch with RAS-VERTEX. Request a free quote for painting, building cleaning, waterproofing, rope access, or maintenance on the Sunshine Coast. Call 07 5443 0000.",
  openGraph: {
    title: "Contact RAS-VERTEX",
    description:
      "Request a free quote from the Sunshine Coast's trusted painting and property maintenance team.",
    url: "https://rasvertex.com.au/contact",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main aria-label="Contact RAS-VERTEX">
      {/* ── Single surface — fits the viewport ── */}
      <section className="px-10 py-10" aria-labelledby="contact-heading">
        <h1 id="contact-heading" className="sr-only">
          Contact RAS-VERTEX — request a free quote
        </h1>
        <ContactSurface />
      </section>

      {/* ── Testimonial ── */}
      <section
        className="px-10 py-20"
        style={{ borderTop: "1px solid var(--line)" }}
        aria-label="Client testimonial"
      >
        <div style={{ maxWidth: "820px" }}>
          <ContactTestimonial />
        </div>
      </section>
    </main>
  );
}

// app/contact/page.tsx

import type { Metadata } from "next";
import ContactSurface from "../components/contact/ContactSurface";

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

export default function ContactPage() {
  return (
    <main aria-label="Contact RAS-VERTEX — request a free quote">
      {/* ── Intro — h1 left, lede right ── */}
      <section className="px-10 pt-20 pb-10" aria-labelledby="contact-heading">
        <div
          style={{
            display: "flex",
            gap: "var(--space-col-gap)",
            alignItems: "flex-end",
          }}
        >
          <h1 id="contact-heading" style={{ flex: "1 1 55%" }}>
            Let&rsquo;s talk about
            <br />
            your building.
          </h1>
          <p
            className="p-soft"
            style={{ flex: "0 0 28%", paddingBottom: "4px" }}
          >
            On site within 48 hours, no obligation. One call and you&rsquo;ll
            know exactly where you stand — and you&rsquo;ll deal with the same
            person from quote to sign-off.
          </p>
        </div>
      </section>

      {/* ── Step form surface ── */}
      <section className="px-10 py-10" aria-label="Request a free quote">
        <ContactSurface />
      </section>

      {/* ── Project image carousel ── */}
      <section
        className="py-20"
        aria-label="Recent projects across the Sunshine Coast"
      ></section>
    </main>
  );
}

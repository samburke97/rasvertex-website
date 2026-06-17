// app/contact/page.tsx

import type { Metadata } from "next";
import ServiceHero from "../components/shared/ServiceHero";
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
      {/* ── Intro — h1 left, lede right. No carousel. ── */}
      <section className="pt-20 pb-10" aria-labelledby="contact-heading">
        <ServiceHero
          heading={
            <>
              Let&rsquo;s talk about
              <br />
              your building.
            </>
          }
          lede="On site within 48 hours, no obligation. One call and you'll know exactly where you stand — and you'll deal with the same person from quote to sign-off."
          ctaLabel=""
          headingId="contact-heading"
        />
      </section>

      {/* ── Step form + carousel ── */}
      <section className="px-10 pb-20" aria-label="Request a free quote">
        <ContactSurface />
      </section>
    </main>
  );
}

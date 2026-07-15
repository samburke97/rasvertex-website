// app/contact/page.tsx

import type { Metadata } from "next";
import QuoteBookingForm from "../components/contact/QuoteBookingForm";

export const metadata: Metadata = {
  title: "Contact Us | Sunshine Coast Free Quotes",
  description:
    "Get a free quote from RAS-VERTEX, on site within 48 hours across the Sunshine Coast for painting, cleaning, waterproofing and maintenance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Sunshine Coast Free Quotes",
    description:
      "Request a free quote from the Sunshine Coast's trusted painting and building maintenance team. On site within 48 hours, no obligation.",
    url: "https://www.rasvertex.com.au/contact",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main aria-label="Contact RAS-VERTEX, request a free quote">
      <section
        className="px-5 md:px-10 pt-10 pb-10 md:pb-20 lg:pb-32"
        aria-label="Request a free quote"
      >
        <QuoteBookingForm showTrustGroup={false} />
      </section>
    </main>
  );
}

// app/blog/page.tsx

import type { Metadata } from "next";
import BlogGrid from "../components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Sunshine Coast Building Maintenance Insights",
  description:
    "Practical articles on rope access, waterproofing, body corporate maintenance, and building care from the RAS-VERTEX team on the Sunshine Coast.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Sunshine Coast Building Maintenance Insights",
    description:
      "Practical building maintenance insights from the Sunshine Coast's trusted property maintenance team.",
    url: "https://www.rasvertex.com.au/blog",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main aria-label="RAS-VERTEX Blog">
      <section className="px-5 md:px-10 py-10 md:py-20" aria-label="Blog posts">
        <BlogGrid />
      </section>
    </main>
  );
}

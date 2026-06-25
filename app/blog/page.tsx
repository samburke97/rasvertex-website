// app/blog/page.tsx

import type { Metadata } from "next";
import BlogGrid from "../components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | RAS-VERTEX — Building Maintenance Insights",
  description:
    "Practical articles on rope access, waterproofing, body corporate maintenance, and building care from the RAS-VERTEX team on the Sunshine Coast.",
  openGraph: {
    title: "RAS-VERTEX Blog",
    description:
      "Practical building maintenance insights from the Sunshine Coast's trusted property maintenance team.",
    url: "https://rasvertex.com.au/blog",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main aria-label="RAS-VERTEX Blog">
      <section className="px-10 pt-10 pb-30" aria-label="Blog posts">
        <BlogGrid />
      </section>
    </main>
  );
}

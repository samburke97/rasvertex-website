// app/blog/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import BlogGrid from "../components/blog/BlogGrid";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/blogData";

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
      {/* ── Page header ── */}
      <section className="px-10 py-20" aria-labelledby="blog-heading">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-col-gap)",
            alignItems: "end",
            paddingBottom: "var(--space-3xl)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div>
            <h1 id="blog-heading">
              Insights from
              <br />
              the field.
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <p className="p-soft">
              25 years of property maintenance distilled into practical advice
              for building managers, body corporates, and strata committees on
              the Sunshine Coast.
            </p>
            {/* Category filter pills */}
            <nav
              aria-label="Filter by category"
              style={{
                display: "flex",
                gap: "var(--space-sm)",
                flexWrap: "wrap",
              }}
            >
              {BLOG_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="category-pill"
                  style={{
                    padding: "7px 14px",
                    border: "1px solid var(--navy-25)",
                    borderRadius: "var(--radius-xl)",
                    fontSize: "var(--p-sm-size)",
                    fontWeight: 500,
                    color: "var(--navy)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {cat}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ── Post grid ── */}
      <section className="px-10 pb-20" aria-label="Blog posts">
        <BlogGrid />
      </section>
    </main>
  );
}

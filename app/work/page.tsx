// app/work/page.tsx

import type { Metadata } from "next";
import ProjectsBento from "../components/work/ProjectsBento";

export const metadata: Metadata = {
  title: "Our Work | RAS-VERTEX — Sunshine Coast Projects",
  description:
    "Painting, waterproofing, rope access, building cleaning and maintenance projects across the Sunshine Coast. Body corporate, commercial, and strata.",
  openGraph: {
    title: "RAS-VERTEX — Our Work",
    description:
      "Projects across the Sunshine Coast — body corporate, commercial, strata, and industrial.",
    url: "https://rasvertex.com.au/work",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <main aria-label="RAS-VERTEX project showcase">
      {/* ── Page header ── */}
      <section className="px-10 py-20" aria-labelledby="work-heading">
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
          <h1 id="work-heading">
            25 years of work.
            <br />
            Across the Coast.
          </h1>
          <p className="p-soft" style={{ maxWidth: "44ch" }}>
            Painting, waterproofing, rope access, building cleaning and
            maintenance — for body corporates, commercial properties, and strata
            across the Sunshine Coast.
          </p>
        </div>
      </section>

      {/* ── Bento grid ── */}
      <section className="px-10 pb-20" aria-label="Project gallery">
        <ProjectsBento />
      </section>
    </main>
  );
}

// app/projects/page.tsx

import type { Metadata } from "next";
import ServiceHero from "../components/shared/ServiceHero";
import ProjectsBento from "../components/work/ProjectsBento";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import { FAQS, FAQ_CONTACT } from "../data/projectsData";

export const metadata: Metadata = {
  title: "Our Projects | RAS-VERTEX — Sunshine Coast",
  description:
    "Painting, waterproofing, rope access, building cleaning and maintenance projects across the Sunshine Coast. Body corporate, commercial, and strata.",
  openGraph: {
    title: "RAS-VERTEX — Our Projects",
    description:
      "Projects across the Sunshine Coast, spanning body corporate, commercial, strata, and industrial work.",
    url: "https://www.ras-vertex.com.au/projects",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main aria-label="RAS-VERTEX project showcase">

      <section className="pt-10">
        <ServiceHero
          heading="25 years of work. Across the Coast."
          lede="The RAS-VERTEX team is proud to work alongside hundreds of Sunshine Coast-based businesses, and here's a small handful of our painting, cleaning, window cleaning, maintenance, waterproofing, height safety and building inspection projects."
          headingId="projects-heading"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-label="Project gallery">
        <ProjectsBento />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-labelledby="projects-faq-heading">
        <ServiceFAQ items={FAQS} contact={FAQ_CONTACT} />
      </section>

    </main>
  );
}

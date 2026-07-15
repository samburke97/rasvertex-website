// app/projects/page.tsx

import type { Metadata } from "next";
import ProjectsBento from "../components/work/ProjectsBento";
import ServiceFAQ from "../components/shared/ServiceFAQ";
import { FAQS, FAQ_CONTACT } from "../data/projectsData";

export const metadata: Metadata = {
  title: "Our Projects | Sunshine Coast Painting & Maintenance",
  description:
    "Painting, waterproofing, rope access, building cleaning and maintenance projects across the Sunshine Coast. Body corporate, commercial, and strata.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | Sunshine Coast Painting & Maintenance",
    description:
      "Projects across the Sunshine Coast, spanning body corporate, commercial, strata, and industrial work.",
    url: "https://www.rasvertex.com.au/projects",
    siteName: "RAS-VERTEX",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main aria-label="RAS-VERTEX project showcase">

      <section className="pt-10 pb-10 md:pb-20" aria-label="Project gallery">
        <ProjectsBento
          heading="Trusted by the Sunshine Coast's best run buildings for 25+ years."
          headingId="projects-heading"
        />
      </section>

      <section className="px-5 md:px-10 py-10 md:py-20" aria-labelledby="projects-faq-heading">
        <ServiceFAQ
          items={FAQS}
          contact={FAQ_CONTACT}
          ctaHeading="Have a project in mind?"
        />
      </section>

    </main>
  );
}

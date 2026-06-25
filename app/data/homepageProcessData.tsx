// app/data/homepageProcessData.ts

import type { AccordionService } from "../components/shared/ServiceAccordion";

export const PROCESS_STEPS: AccordionService[] = [
  {
    label: "Free Quote",
    body: "A qualified trade lead — not a salesperson — visits your site within 48 hours. We assess the scope, document everything on the spot, and deliver a fully itemised written quote. No lump sums, no guesswork, no obligation.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "One Project Manager",
    body: "You get one named contact who owns your job from first call to final sign-off. One phone number, one thread, one accountable person. No handoffs, no 'I'll pass that on.'",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "The Work",
    body: "Direct-employed crews only — no subcontractors, no strangers on your site. Every person who turns up works for RAS-VERTEX, is trade-qualified, and is fully insured. The standard doesn't change because the job got busy.",
    photo: "/nav/painting.png",
    href: "/contact",
  },
  {
    label: "Weekly Updates",
    body: "Photo and progress reports land every week without you having to ask. You know where the job stands, what's been completed, and what's coming next. Transparency is part of the service, not an add-on.",
    photo: "/nav/height.png",
    href: "/contact",
  },
  {
    label: "Warranty Sign-Off",
    body: "We walk through the completed work with you before we leave. A five-year workmanship warranty is issued in writing on the day, backed by up to 15-year manufacturer cover where applicable. Your investment is protected long after the scaffolding comes down.",
    photo: "/nav/maintenance.png",
    href: "/contact",
  },
];

export const PROCESS_HEADING = (
  <>
    25+ years on the Sunshine Coast.
    <br />
    Here&rsquo;s how we run every project.
  </>
);

export const PROCESS_STATEMENT =
  "The best results come from a process that never cuts corners. Free site visit, one project manager, direct-employed crews, weekly updates, and a written warranty on completion as standard.";

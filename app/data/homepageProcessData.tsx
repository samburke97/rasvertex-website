// app/data/homepageProcessData.ts

import type { AccordionService } from "../components/shared/ServiceAccordion";
import { cld } from "../lib/cloudinary";

export const PROCESS_STEPS: AccordionService[] = [
  {
    label: "Free Quote",
    body: "A qualified trade lead, not a salesperson, visits your site within 48 hours. We assess the full scope in person, photograph the substrate, document access requirements and specify the right products for your building's exposure. What you get back is a fully itemised written quote with line by line costings, no lump sums, no scope creep and no obligation attached.",
    photo: cld("free-quote", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "One Project Manager",
    body: "From the first site visit through to final sign off, one named project manager owns your job. That means one phone number, one email thread and one person who knows every detail and is accountable for every outcome. There are no handoffs, no vague promises to pass things along, and no moment where your building falls through the cracks between departments.",
    photo: cld("project-manager", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "The Work",
    body: "Every painter, rope access technician and specialist on your building is directly employed by us, QBCC licensed, IRATA certified where required and fully insured. There are no subcontractors, no strangers turning up on site and no diluted standards when the schedule gets tight. The people who quoted the job are the same people doing the job.",
    photo: cld("the-work", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Weekly Updates",
    body: "Strata managers and body corporate committees shouldn't have to chase progress reports. Photo updates and written summaries land every week as standard, covering what has been completed, what is coming next and anything that needs your attention. You stay informed without ever having to follow up.",
    photo: cld("weekly-updates", { width: 1800 }),
    href: "/contact",
  },
  {
    label: "Warranty Sign Off",
    body: "Before we leave, we walk the completed work with you and document every surface. A five year workmanship warranty is issued in writing on the day of completion, backed by manufacturer product cover of up to fifteen years where applicable. Certificates of currency are provided automatically, so there is no chasing and no surprises at your next AGM.",
    photo: cld("warranty", { width: 1800 }),
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
  "The best results come from a process that never cuts corners. A free site visit, one project manager, directly employed crews, weekly updates and a written warranty on completion, all as standard.";

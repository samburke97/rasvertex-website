// app/data/homepageProcessData.ts

import type { AccordionService } from "../components/shared/ServiceAccordion";

export const PROCESS_STEPS: AccordionService[] = [
  {
    label: "Site Visit",
    body: "A qualified trade lead walks the site with you inside 48 hours. Substrate assessment and scope documented on the spot. No obligation, no pressure.",
    photo: "/images/projects/1.jpeg",
    href: "/contact",
  },
  {
    label: "Itemised Quote",
    body: "Line-by-line scope, material specs, warranty terms and timeline in writing. You know exactly what you're getting before anything starts — not a lump-sum guess.",
    photo: "/images/projects/2.jpeg",
    href: "/contact",
  },
  {
    label: "Scheduled Works",
    body: "One project manager runs your job from go to sign-off. Weekly photo updates, direct-employed crew on site, one WhatsApp thread. No chasing, no subbies.",
    photo: "/nav/painting.png",
    href: "/contact",
  },
  {
    label: "Sign-off & Warranty",
    body: "Walk-through with you on completion. Five-year workmanship warranty issued in writing, backed by up to 15 years of manufacturer cover, lodged on the day.",
    photo: "/nav/cleaning.png",
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
  "Four steps from first call to a five-year workmanship warranty — line-by-line scope, one project manager, every person on site directly employed by us.";

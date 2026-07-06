import type { ServiceCard } from "../components/shared/ServiceCards";
import { cld } from "../lib/cloudinary";

export const WHO_WE_WORK_FOR_CARDS: ServiceCard[] = [
  {
    photo: cld("coastal-buildings.jpg", { width: 900 }),
    alt: "25 years working on Sunshine Coast buildings",
    title: "We know coastal buildings.",
    body: "Salt air within 5km of the ocean degrades generic coatings in two to three years. UV intensity on the Sunshine Coast is not the same as Brisbane. We've been speccing paint systems, waterproofing membranes and maintenance programs for these buildings since before half of them were built. That knowledge doesn't come from a manual.",
  },
  {
    photo: cld("friendly-team.jpg", { width: 900 }),
    alt: "RAS-VERTEX project manager on a Sunshine Coast job site",
    title: "We're easy to deal with.",
    body: "One project manager runs your job from first call to sign-off. Every person on site is a direct RAS-VERTEX employee. You get weekly photo updates, a single contact number and a team that actually shows up when they say they will. No subcontractors, no handoffs, no chasing.",
  },
  {
    photo: cld("one-parner.webp", { width: 900 }),
    alt: "Dedicated building maintenance team on the Sunshine Coast",
    title: "Less coordination. Better outcomes.",
    body: "Painting, cleaning, waterproofing, remedial repairs and height safety all managed by one experienced team. One quote, one schedule, one point of contact and one contractor who already understands your building. For strata managers and facilities teams, that's not a small thing.",
  },
];

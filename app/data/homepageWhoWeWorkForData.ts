import type { ServiceCard } from "../components/shared/ServiceCards";
import { cld } from "../lib/cloudinary";

export const WHO_WE_WORK_FOR_CARDS: ServiceCard[] = [
  {
    photo: cld("coastal-buildings.jpg", { width: 900 }),
    alt: "25 years working on Sunshine Coast buildings",
    title: "We know coastal buildings.",
    body: "Salt air within five kilometres of the ocean degrades generic coatings in two to three years, and UV intensity on the Sunshine Coast is simply not the same as it is in Brisbane. We have been specifying paint systems, waterproofing membranes and maintenance programs for these buildings since before half of them were even built, and that kind of knowledge doesn't come from a manual.",
  },
  {
    photo: cld("friendly-team.jpg", { width: 900 }),
    alt: "Project manager on a Sunshine Coast job site",
    title: "We're easy to deal with.",
    body: "One project manager runs your job from the first call through to sign off, and every person on site is a direct employee, not a subcontractor. You get weekly photo updates, a single contact number and a team that actually shows up when they say they will. No handoffs and no chasing required.",
  },
  {
    photo: cld("one-parner.webp", { width: 900 }),
    alt: "Dedicated building maintenance team on the Sunshine Coast",
    title: "Less coordination. Better outcomes.",
    body: "Painting, cleaning, waterproofing, remedial repairs and height safety are all managed by one experienced team, which means one quote, one schedule, one point of contact and one contractor who already understands your building. For strata managers and facilities teams, that is not a small thing.",
  },
];

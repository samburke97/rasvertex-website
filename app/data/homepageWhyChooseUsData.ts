// app/data/homepageWhyChooseUsData.ts

import { cld } from "../lib/cloudinary";

export interface CarouselSlide {
  image: string;
  imageAlt: string;
  heading: string;
  body: string;
}

export const WHY_CHOOSE_US_SLIDES: CarouselSlide[] = [
  {
    image: cld("access", { width: 1200 }),
    imageAlt:
      "IRATA certified rope access technicians working on a Sunshine Coast high rise",
    heading: "We go where others can't",
    body: "Our IRATA certified rope access technicians safely access high rise and difficult to reach buildings without needing scaffolding or costly access equipment. That means less disruption, faster completion and safer access every time.",
  },
  {
    image: cld("products", { width: 1200 }),
    imageAlt:
      "High rise facade repaint on the Sunshine Coast using coastal spec paint systems",
    heading: "Built for the Sunshine Coast",
    body: "Every product, coating system and maintenance plan we recommend is chosen for our coastal conditions. Salt air, humidity and harsh UV are part of everyday life here, and after twenty five years we have learned exactly what lasts and what doesn't.",
  },
  {
    image: cld("long-run", { width: 1200 }),
    imageAlt: "Dedicated building maintenance team on the Sunshine Coast",
    heading: "We're in it for the long run",
    body: "Most of our work comes from repeat clients and referrals. Property managers choose us because they know who to call, what to expect, and that every project will be delivered to the same standard, every single time.",
  },
];

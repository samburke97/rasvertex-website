// app/data/companyData.ts

import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";

export const FAQS: FAQItem[] = [
  {
    q: "Are your technicians directly employed, and how does the project manager model work?",
    a: "Yes, every person on your site is a direct employee, not labour hire and not a subcontractor. One project manager is also assigned to your job from the first site visit through to warranty sign off, giving you one number, one thread and weekly photo updates rather than a different person every time you call. That combination is how we keep quality, safety and accountability consistent across every job.",
  },
  {
    q: "What certifications and licences do you hold?",
    a: "We are QBCC licensed across painting, waterproofing and building work, with IRATA Level 1, 2 and 3 certified rope access technicians in house. We carry $20 million in public liability insurance plus full workers compensation cover, and certificates of currency are issued automatically at quote stage.",
  },
  {
    q: "Do you work across all building types, from body corporates to commercial and residential?",
    a: "Yes. Body corporates, strata committees, commercial property managers, facilities directors, hotels and residential owners all rely on us. We have worked on everything from single storey homes to twenty five storey high rise buildings across the Sunshine Coast.",
  },
  {
    q: "What area of the Sunshine Coast do you service?",
    a: "The full Sunshine Coast, from Caloundra in the south to Noosa in the north, including Mooloolaba, Maroochydore, Kawana, Sippy Downs, Buderim, Coolum, Peregian, Noosaville, Tewantin, Nambour and the hinterland. For larger commercial projects we also work in Brisbane and on the Gold Coast.",
  },
  {
    q: "How quickly can you mobilise for a quote or urgent works?",
    a: "For most jobs we can be on site for a look within 48 hours, with written quotes issued within the week. For anything urgent, storm damage, facade failure or a safety hazard, we can mobilise the same day.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Hylton Denton",
  role: "Operations Lead",
  photo: "/images/people/caro.jpg",
  ctaHref: "/contact",
  ctaLabel: "Talk to us about your building →",
};

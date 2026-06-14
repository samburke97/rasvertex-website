// app/data/companyData.ts

import type { FAQItem, FAQContact } from "../components/shared/ServiceFAQ";

export const FAQS: FAQItem[] = [
  {
    q: "Are all your technicians directly employed?",
    a: "Yes — every person on your site is a direct RAS-VERTEX employee. No labour hire, no subbies. We train our own people, maintain our own equipment, and stand behind our own work. This is how we control quality and safety across every job.",
  },
  {
    q: "What certifications do you hold?",
    a: "QBCC licensed across painting, waterproofing and building work. IRATA Level 1, 2 and 3 certified rope access technicians in-house. $20M public liability insurance plus full workers' compensation cover. Certificates of currency are issued automatically at quote stage.",
  },
  {
    q: "Do you work across all building types?",
    a: "Yes. Body corporates, strata committees, commercial property managers, facilities directors, hotels, and residential owners. We've worked on everything from single-storey homes to 25-storey high-rise buildings across the Sunshine Coast.",
  },
  {
    q: "How does the single project manager model work?",
    a: "One project manager is assigned to your job from the first site visit through to warranty sign-off. You have one number, one thread, weekly photo updates, and a single point of accountability — not a different person every time you call.",
  },
  {
    q: "What area do you service?",
    a: "The full Sunshine Coast — from Caloundra in the south to Noosa in the north, including Mooloolaba, Maroochydore, Kawana, Sippy Downs, Buderim, Coolum, Peregian, Noosaville, Tewantin, Nambour and the hinterland. For larger commercial projects we also work in Brisbane and the Gold Coast.",
  },
  {
    q: "How quickly can you mobilise?",
    a: "For most jobs we can be on site for a site visit within 48 hours. Written quotes are issued within the week. For urgent works — storm damage, facade failure, safety hazards — we can mobilise the same day.",
  },
];

export const FAQ_CONTACT: FAQContact = {
  name: "Hylton Denton",
  role: "Operations Lead",
  photo: "/images/people/caro.jpg",
  ctaHref: "/contact",
  ctaLabel: "Talk to us about your building →",
};

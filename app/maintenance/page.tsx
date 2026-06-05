// import { generatePageMetadata } from "../components/seo/PageSEO";
// import PageHero from "../components/shared/PageHero";
// import ServiceAccordion from "../components/shared/ServiceAccordion";
// import PageProjects from "../components/shared/PageProjects";
// import PageIntro from "../components/shared/PageIntro";
// import PageFAQ from "../components/shared/PageFAQ";
// import PageCtaStrip from "../components/shared/PageCtaStrip";
// import PageTestimonials from "../components/shared/PageTestimonials";
// import PageCards from "../components/shared/PageCards";
// import Industries from "../components/maintenance/Industries";
// import MaintenancePlans from "../components/maintenance/MaintenancePlans";
// import ServiceFeatures from "../components/painting/ServiceFeatures";
// import {
//   HERO_SLIDES,
//   SERVICES,
//   PROJECTS,
//   FAQS,
//   FAQ_CONTACT,
//   TESTIMONIALS,
//   CARDS,
// } from "../data/maintenanceData";

// function ServicesSEO() {
//   return (
//     <div
//       aria-hidden="true"
//       style={{
//         position: "absolute",
//         width: "1px",
//         height: "1px",
//         overflow: "hidden",
//         clip: "rect(0,0,0,0)",
//         whiteSpace: "nowrap",
//       }}
//     >
//       <h2>Building maintenance services on the Sunshine Coast</h2>
//       {SERVICES.map((s) => (
//         <div key={s.label}>
//           <h3>{s.label}</h3>
//           <p>{s.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export const metadata = generatePageMetadata({
//   title: "Building Maintenance Services Sunshine Coast",
//   description:
//     "Professional building maintenance across the Sunshine Coast. Roof restoration, concrete repairs, leak detection, facade inspections and sign installations. QBCC licensed, rope access specialists.",
//   path: "/maintenance",
//   keywords: [
//     "building maintenance Sunshine Coast",
//     "roof restoration Sunshine Coast",
//     "concrete repairs Sunshine Coast",
//     "leak detection Sunshine Coast",
//     "facade inspection Maroochydore",
//     "body corporate maintenance Sunshine Coast",
//     "commercial building maintenance Noosa",
//     "rope access maintenance Sunshine Coast",
//   ],
// });

// export default function MaintenancePage() {
//   return (
//     <>
//       <ServicesSEO />

//       {/* 1. Hero */}
//       <PageHero
//         title="MAINTENANCE."
//         lede="Whether you're managing one building or a portfolio — we're on call to take care of your property maintenance so you can take care of business."
//         ctaLabel="Get a free quote →"
//         ctaHref="/contact"
//         slides={HERO_SLIDES}
//       />

//       {/* 2. Services accordion */}
//       <ServiceAccordion
//         heading={"What kind of\nmaintenance\ndo you need?"}
//         statement="Every building on the Sunshine Coast has different needs. We tailor our equipment, access method and scope to the specific conditions of your project — guaranteeing a long-lasting result."
//         services={SERVICES}
//         ctaLabel="Not sure? Let's talk about it →"
//         ctaHref="/contact"
//       />

//       {/* 3. Who we work for — photo cards */}
//       <PageCards cards={CARDS} />

//       {/* 4. Industries */}
//       <Industries />

//       {/* 6. Project gallery */}
//       <PageProjects
//         heading="Work we're proud of, across the Coast."
//         subheading="From high-rise facade inspections in Maroochydore to roof restorations in Noosa — every job gets the same crew, the same documentation and the same warranty."
//         projects={PROJECTS}
//         footerNote="We also service Buderim, Sippy Downs, Peregian, Noosaville, Tewantin, Nambour, Yandina and throughout the Sunshine Coast hinterland."
//         ctaLabel="Start your project →"
//         ctaHref="/contact"
//       />

//       {/* 7. Testimonials */}
//       <PageTestimonials
//         heading={"Trusted by the\nCoast's best\nrun buildings."}
//         testimonials={TESTIMONIALS}
//       />

//       {/* 8. Maintenance plans */}
//       <MaintenancePlans />

//       {/* 9. Our approach — SEO prose */}
//       <PageIntro
//         eyebrow="Our approach"
//         heading="Working with you, not for you."
//         paragraphs={[
//           "Building maintenance on the Sunshine Coast isn't generic work. Salt air from Mooloolaba, UV intensity through Noosa, the humidity that rolls in off the hinterland — they all accelerate deterioration in ways that need to be understood, not just patched. Our team uses a combination of rope access, EWPs and scaffolding to complete maintenance projects to the highest standard. With decades of experience, we tailor our equipment to meet the needs of each project.",
//           "We work with body corporates, commercial property managers, industrial facilities, schools and government clients across the Sunshine Coast. From Caloundra to Noosa, from a single remedial repair to a multi-year maintenance plan — we operate as an extension of your team. One contact, one thread, one invoice.",
//           "Our rope access approach is what sets us apart. Where scaffold would take days to erect and cause disruption to residents or tenants, our IRATA-certified technicians can mobilise in hours. Faster, safer, cheaper — and with zero footprint on your site. Everything is photographed, documented and lodged in ROCO so you can see exactly what was done and when.",
//         ]}
//       />

//       {/* 10. FAQ + schema */}
//       <PageFAQ
//         heading="Things you'll probably want to ask."
//         lede="Couldn't find what you're after? Our maintenance lead will be on the phone within an hour during business days."
//         items={FAQS}
//         contact={FAQ_CONTACT}
//       />

//       {/* 11. Closing CTA */}
//       <PageCtaStrip
//         heading="Ready to take care of your building?"
//         sub="We'll be on site within 48 hours. No obligation, no pushy sales rep — just a trade lead who knows what they're looking at."
//         ctaLabel="Let's talk about your project →"
//         ctaHref="/contact"
//       />
//     </>
//   );
// }

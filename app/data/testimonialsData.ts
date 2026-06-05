// app/data/testimonialsData.ts

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  logo: string;
  logoAlt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We've used them for three years of scheduled maintenance across seven buildings. Zero callbacks.",
    name: "Priya Raman",
    role: "BC Manager, Peppers Noosa",
    logo: "/partners/novotel.svg.png",
    logoAlt: "Peppers Noosa",
  },
  {
    quote:
      "The communication alone sets them apart. One number, one thread, weekly photos — exactly what a body corporate needs.",
    name: "James Whitfield",
    role: "Facilities Manager, Accor Hotels",
    logo: "/partners/accor.svg",
    logoAlt: "Accor Hotels",
  },
  {
    quote:
      "They showed up within 48 hours for the site visit and had a full itemised quote within the week. Refreshing.",
    name: "Sandra Koh",
    role: "Strata Manager, Archers Body Corporate",
    logo: "/partners/archers.png",
    logoAlt: "Archers Body Corporate",
  },
  {
    quote:
      "Other companies quoted higher and couldn't start for months. RAS-VERTEX had a crew on ropes within two weeks.",
    name: "David Lam",
    role: "Property Manager, Ray White Mooloolaba",
    logo: "/partners/raywhite.png",
    logoAlt: "Ray White",
  },
  {
    quote:
      "The rope access team is exceptional. No scaffold, no disruption to residents, and the building looks brand new.",
    name: "Karen O'Brien",
    role: "Committee Chair, Rumba Resort",
    logo: "/partners/mosaic.svg",
    logoAlt: "Rumba Resort",
  },
  {
    quote:
      "We moved from three separate contractors to one maintenance plan with RAS-VERTEX. Should have done it years ago.",
    name: "Mark Ellison",
    role: "Facilities Director, Stockland Kawana",
    logo: "/partners/pica.png",
    logoAlt: "Stockland Kawana",
  },
];

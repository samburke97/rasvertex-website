// app/data/industriesData.ts

export interface IndustryTab {
  id: string;
  label: string;
  heading: string;
  body: string;
}

export const HOMEPAGE_INDUSTRIES: IndustryTab[] = [
  {
    id: "body-corporate",
    label: "Body Corporate",
    heading: "25 years on the Coast.",
    body: "We've been painting buildings on the Sunshine Coast since before half the developments along the foreshore were built. In that time we've learned one thing above everything else: coastal painting is not the same as painting anywhere else. The salt air off Mooloolaba, the UV intensity up through Noosa, the humidity that rolls in off the hinterland — they all eat paint that isn't specced correctly. Every system we use is chosen for the substrate, the exposure, and the specific conditions of your building's location.",
  },
  {
    id: "commercial",
    label: "Commercial",
    heading: "Built for business.",
    body: "We know a closed shopfront or disrupted tenant costs you money. That's why we schedule around you — after hours, weekends, whatever it takes. Our crew are locals too, so when we say we'll be there Tuesday morning, we mean it. QBCC licensed, $20M liability, and one project manager who actually picks up the phone.",
  },
  {
    id: "residential",
    label: "Residential",
    heading: "Your home, our standard.",
    body: "We've been painting homes on the Sunshine Coast for 25 years — and we still treat every one like it's our own. You'll meet your project manager before a brush touches anything. They'll walk the job, explain what we're using and why, and be on the other end of the phone until you're happy. No strangers on your property. No surprises on the invoice.",
  },
];

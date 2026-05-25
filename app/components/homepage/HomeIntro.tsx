import PageIntro from "../shared/PageIntro";

export default function HomeIntro() {
  return (
    <PageIntro
      heading="Painting done properly, by people who live here."
      paragraphs={[
        "We've been on the Sunshine Coast since before half the developments along the foreshore were built. Coastal work isn't the same as anywhere else — the salt air off Mooloolaba, the UV intensity up through Noosa, the humidity rolling in off the hinterland all eat paint that isn't specced correctly. Every system we use is chosen for the substrate, the exposure, and the specific conditions of your building's location.",
        "One project manager, on-site from day one, reachable on a single number until the warranty is signed. No subcontractors turning up unannounced. No quoting one crew and sending another.",
      ]}
      ctaLabel="Talk to our team →"
      ctaHref="/contact"
    />
  );
}

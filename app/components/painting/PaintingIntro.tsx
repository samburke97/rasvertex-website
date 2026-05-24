import PageIntro from "../shared/PageIntro";

export default function PaintingIntro() {
  return (
    <PageIntro
      eyebrow="Our approach"
      heading={"Painting done properly,\nby people who live here."}
      paragraphs={[
        "We've been painting buildings on the Sunshine Coast since before half the developments along the foreshore were built. In that time we've learned one thing above everything else: coastal painting is not the same as painting anywhere else. The salt air off Mooloolaba, the UV intensity up through Noosa, the humidity that rolls in off the hinterland — they all eat paint that isn't specced correctly. Every system we use is chosen for the substrate, the exposure, and the specific conditions of your building's location.",
        "Whether it's a residential repaint in Buderim, exterior painting for a body corporate in Caloundra, commercial painting for a retail centre in Maroochydore, or a high-rise strata job in Mooloolaba — we run every project the same way. One project manager, on-site from day one, reachable on a single number until the warranty is signed. No subcontractors turning up unannounced. No quoting one crew and sending another.",
      ]}
      stats={[
        { value: "25+ Years", label: "Painting the Sunshine Coast" },
        {
          value: "The Coast's Partner",
          label: "Strata, commercial & residential",
        },
      ]}
    />
  );
}

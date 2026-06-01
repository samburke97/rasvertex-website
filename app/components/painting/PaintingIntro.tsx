// app/components/painting/PaintingIntro.tsx

import styles from "./PaintingIntro.module.css";

export default function PaintingIntro() {
  return (
    <section
      className={styles.section}
      aria-labelledby="painting-intro-heading"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 id="painting-intro-heading">
            Painting done properly,
            <br />
            by people who live here.
          </h2>
        </div>
        <div className={styles.right}>
          <p className="p-soft">
            We&rsquo;ve been painting buildings on the Sunshine Coast since
            before half the developments along the foreshore were built. In that
            time we&rsquo;ve learned one thing above everything else: coastal
            painting is not the same as painting anywhere else. The salt air off
            Mooloolaba, the UV intensity up through Noosa, the humidity that
            rolls in off the hinterland — they all eat paint that isn&rsquo;t
            specced correctly. Every system we use is chosen for the substrate,
            the exposure, and the specific conditions of your building&rsquo;s
            location.
          </p>
          <p className="p-soft">
            Whether it&rsquo;s a residential repaint in Buderim, exterior
            painting for a body corporate in Caloundra, commercial painting for
            a retail centre in Maroochydore, or a high-rise strata job in
            Mooloolaba — we run every project the same way. One project manager,
            on-site from day one, reachable on a single number until the
            warranty is signed. No subcontractors turning up unannounced. No
            quoting one crew and sending another.
          </p>
        </div>
      </div>
    </section>
  );
}

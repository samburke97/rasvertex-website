import styles from "./PaintingIntro.module.css";

export default function PaintingIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Our approach</span>
          <h2 className={styles.heading}>Painting done properly,<br />by people who live here.</h2>
        </div>
        <div className={styles.right}>
          <p className={styles.body}>We've been painting buildings on the Sunshine Coast since before half the developments along the foreshore were built. In that time we've learned one thing above everything else: coastal painting is not the same as painting anywhere else. The salt air off Mooloolaba, the UV intensity up through Noosa, the humidity that rolls in off the hinterland — they all eat paint that isn't specced correctly. Every system we use is chosen for the substrate, the exposure, and the specific conditions of your building's location.</p>
          <p className={styles.body}>Whether it's a residential repaint in Buderim, exterior painting for a body corporate in Caloundra, commercial painting for a retail centre in Maroochydore, or a high-rise strata job in Mooloolaba — we run every project the same way. One project manager, on-site from day one, reachable on a single number until the warranty is signed. No subcontractors turning up unannounced. No quoting one crew and sending another.</p>
          <p className={styles.body}>We're proud to be a local business and we take that seriously. Our painters live in the same communities we work in — Noosa, Coolum, Kawana, Sippy Downs, Bli Bli. When we finish a job, we drive past it. That keeps our standards exactly where they need to be.</p>
        </div>
      </div>
    </section>
  );
}

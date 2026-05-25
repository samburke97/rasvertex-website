import styles from "./HomeIntro.module.css";

const POINTS = [
  {
    title: "25 years of local expertise",
    body: "We've been on the Sunshine Coast since before half the developments along the foreshore were built. Every system is chosen for the substrate, the exposure, and the specific conditions of your building.",
    meta: "25 YEARS",
  },
  {
    title: "Fully employed — no contractors",
    body: "Every person on your site is a direct RAS-VERTEX employee. No subbies turning up unannounced. No quoting one crew and sending another.",
    meta: "IN-HOUSE",
  },
];

export default function HomeIntro() {
  return (
    <div className={styles.inner}>
      {/* ── Left — sticky heading ── */}
      <div className={styles.left}>
        <h2 className={styles.heading}>
          The Sunshine Coast's Property Maintenance Partner.
        </h2>
      </div>

      {/* ── Right — body + process-style points ── */}
      <div className={styles.right}>
        <p className={styles.body}>
          Coastal work isn't the same as anywhere else — the salt air off
          Mooloolaba, the UV intensity up through Noosa, the humidity rolling in
          off the hinterland all eat paint that isn't specced correctly. One
          project manager, on-site from day one, reachable on a single number
          until the warranty is signed.
        </p>

        <div className={styles.grid}>
          {POINTS.map((p) => (
            <div key={p.title} className={styles.step}>
              <div className={styles.stepBottom}>
                <h3 className={styles.stepTitle}>{p.title}</h3>
                <p className={styles.stepBody}>{p.body}</p>
                <span className={styles.stepMeta}>↓ {p.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

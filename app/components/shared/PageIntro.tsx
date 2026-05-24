// Shared two-column intro section — eyebrow, heading, body paragraphs, optional stat callouts
import styles from "./PageIntro.module.css";

export interface PageIntroStat {
  value: string;
  label: string;
}

interface PageIntroProps {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  /** Up to 3 stat callouts shown below a divider. Optional. */
  stats?: PageIntroStat[];
}

export default function PageIntro({
  eyebrow = "Our approach",
  heading,
  paragraphs,
  stats,
}: PageIntroProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.right}>
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.body}>
              {p}
            </p>
          ))}

          {stats && stats.length > 0 && (
            <>
              <div className={styles.divider} />
              <div className={styles.stats}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

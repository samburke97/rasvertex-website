// Shared two-column SEO prose section
import styles from "./PageIntro.module.css";

interface PageIntroProps {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
}

export default function PageIntro({
  eyebrow = "Our approach",
  heading,
  paragraphs,
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
        </div>
      </div>
    </section>
  );
}

// app/components/shared/ServiceIntro.tsx

import styles from "./ServiceIntro.module.css";

interface ServiceIntroProps {
  heading: string;
  /** Array of paragraph strings — rendered as .p / .p-soft alternating */
  paragraphs: string[];
  headingId?: string;
}

export default function ServiceIntro({
  heading,
  paragraphs,
  headingId = "service-intro-heading",
}: ServiceIntroProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.inner}>
        {/* Left — sticky heading */}
        <div className={styles.left}>
          <h2 id={headingId}>{heading}</h2>
        </div>

        {/* Right — body copy */}
        <div className={styles.right}>
          {paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? "p" : "p-soft"}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

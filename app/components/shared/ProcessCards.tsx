// app/components/shared/ProcessCards.tsx

import styles from "./ProcessCards.module.css";

export interface ProcessCardStep {
  number: string;
  title: string;
  body: string;
}

interface ProcessCardsProps {
  heading: React.ReactNode;
  lede?: string;
  steps: ProcessCardStep[];
  headingId?: string;
}

export default function ProcessCards({
  heading,
  lede,
  steps,
  headingId = "process-cards-heading",
}: ProcessCardsProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.header}>
        <h2 id={headingId}>{heading}</h2>
        {lede && <p className="p-soft">{lede}</p>}
      </div>

      <ol className={styles.grid}>
        {steps.map((step) => (
          <li key={step.number} className={styles.card}>
            <span className={styles.number} aria-hidden="true">
              {step.number}
            </span>
            <p className={styles.body}>{step.body}</p>
            <div className={styles.titleTag}>
              <h3 className={styles.title}>{step.title}</h3>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

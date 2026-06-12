// app/components/shared/InspectionProcess.tsx

import styles from "./InspectionProcess.module.css";

export interface InspectionStep {
  n: string;
  title: string;
  body: string;
  deliverable?: string;
}

interface InspectionProcessProps {
  heading: React.ReactNode;
  lede: string;
  steps: InspectionStep[];
  headingId?: string;
}

export default function InspectionProcess({
  heading,
  lede,
  steps,
  headingId = "inspection-process-heading",
}: InspectionProcessProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Left — sticky ── */}
      <div className={styles.left}>
        <h2 id={headingId}>{heading}</h2>
        <p className="p-soft">{lede}</p>
      </div>

      {/* ── Right — vertical steps ── */}
      <ol className={styles.steps} aria-label="Inspection process steps">
        {steps.map((step) => (
          <li key={step.n} className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              {step.n}
            </span>
            <div className={styles.content}>
              <p className={styles.title}>{step.title}</p>
              <p className={styles.body}>{step.body}</p>
              {step.deliverable && (
                <p className={styles.deliverable}>
                  <span className={styles.deliverableLabel}>Deliverable</span>
                  {step.deliverable}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

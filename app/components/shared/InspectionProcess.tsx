// app/components/shared/InspectionProcess.tsx

import type { IconType } from "react-icons";
import Button from "../ui/Button";
import styles from "./InspectionProcess.module.css";

export interface InspectionStep {
  n: string;
  title: string;
  body: string;
  icon?: IconType;
  deliverable?: string;
}

export interface InspectionFinding {
  n: string;
  title: string;
  body: string;
}

interface InspectionProcessProps {
  heading: React.ReactNode;
  lede: string;
  steps: InspectionStep[];
  findings?: InspectionFinding[];
  headingId?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function InspectionProcess({
  heading,
  lede,
  steps,
  findings,
  headingId = "inspection-process-heading",
  ctaLabel,
  ctaHref = "/contact",
}: InspectionProcessProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      {/* ── Left + steps row ── */}
      <div className={styles.row}>
        <div className={styles.left}>
          <h2 id={headingId}>{heading}</h2>
          <p className="p-soft">{lede}</p>
          {ctaLabel && (
            <Button as="link" href={ctaHref} variant="primary" className={styles.cta}>
              {ctaLabel.slice(0, ctaLabel.lastIndexOf("→")).trimEnd()}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          )}
        </div>

        <ol className={styles.steps} aria-label="Inspection process steps">
          {steps.map((step) => (
            <li key={step.n} className={styles.step}>
              {step.icon ? (
                <step.icon className={styles.icon} aria-hidden="true" />
              ) : (
                <span className={styles.num} aria-hidden="true">
                  {step.n}
                </span>
              )}
              <div className={styles.content}>
                <h4 className={styles.title}>{step.title}</h4>
                <p className={styles.body}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── What the report finds ── */}
      {findings && findings.length > 0 && (
        <div className={styles.finds}>
          <div className={styles.findsDivider} />
          <span className={styles.findsEyebrow}>What the report finds</span>
          <div className={styles.findsGrid}>
            {findings.map((f) => (
              <div key={f.n} className={styles.findItem}>
                <span className={styles.findNum}>{String(f.n).padStart(2, "0")}</span>
                <strong className={styles.findTitle}>{f.title}</strong>
                <p className={styles.findBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

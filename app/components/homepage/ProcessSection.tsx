import styles from "./ProcessSection.module.css";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Site visit",
    body: "A trade lead walks the site with you inside 48 hours. No pushy sales rep, no guesswork — we see the job before we price it.",
    meta: "48 HR",
  },
  {
    number: "02",
    title: "Itemised quote",
    body: "Line-by-line scope, material specs, warranty and timeline in writing. You know exactly what you're getting before anything starts.",
    meta: "3–5 DAYS",
  },
  {
    number: "03",
    title: "Scheduled works",
    body: "One project manager, one WhatsApp thread, weekly photo updates. No chasing, no surprises — just progress you can see.",
    meta: "BOOKED",
  },
  {
    number: "04",
    title: "Sign-off & warranty",
    body: "Walk-through with you on completion. Five-year workmanship warranty issued in writing and lodged with your records.",
    meta: "ONGOING",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      {/* ── Header — same bar pattern as ExperienceSection ─── */}
      <div className={styles.bar}>
        <div className={styles.barGrid}>
          <div className={styles.barLeft}>
            <p className={styles.eyebrow}>OUR APPROACH</p>
            <h2 className={styles.headline}>
              Four steps,
              <br />
              zero surprises.
            </h2>
          </div>
          <div className={styles.barRight}>
            <p className={styles.intro}>
              From first phone call to warranty sign-off, one project manager
              runs the whole job. You get one number, one invoice, one thread.
            </p>
            <Link href="/contact" className={styles.cta}>
              Get a free quote →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Steps grid ─────────────────────────────────────── */}
      <div className={styles.grid}>
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={`${styles.step} ${i === 0 ? styles.stepActive : ""}`}
          >
            <div className={styles.stepTop}>
              <span className={styles.stepNumber}>{step.number}</span>
            </div>
            <div className={styles.stepBottom}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
              <span className={styles.stepMeta}>↓ {step.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    number: "01",
    title: "Site visit",
    body: "A trade lead walks the site with you inside 48 hours. No pushy sales rep, no guesswork. We see the job before we price it.",
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
    body: "One project manager, one WhatsApp thread, weekly photo updates. No chasing, no surprises. Just progress you can see.",
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
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Your project,
            <br />
            done right.
          </h2>
          <div className={styles.teamCard}>
            <div className={styles.avatar}>
              <Image
                src="/images/people/caro.jpg"
                alt="Hylton"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.teamInfo}>
              <p className={styles.teamName}>Talk to our lead.</p>
              <p className={styles.teamBody}>
                Hylton's been running commercial painting crews on the Sunshine
                Coast for over a decade. He scopes the job himself, writes the
                quote, and stays on it until the warranty's signed.
              </p>
              <a href="/contact" className={styles.teamCta}>
                Talk to Hylton →
              </a>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`${styles.step} ${i === 0 ? styles.stepDefault : ""}`}
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
      </div>
    </section>
  );
}

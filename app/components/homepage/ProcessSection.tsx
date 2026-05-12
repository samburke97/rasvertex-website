"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./ProcessSection.module.css";

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
  const overlayRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bar = barRef.current;
    if (!overlay || !bar) return;

    const barDocTop = window.scrollY + bar.getBoundingClientRect().top;
    const scrollStart = barDocTop - window.innerHeight * 0.8;
    const scrollEnd = barDocTop - window.innerHeight * 0.3;

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= scrollStart) {
        overlay.style.clipPath = "inset(0 100% 0 0)";
        return;
      }
      if (scrollY >= scrollEnd) {
        overlay.style.clipPath = "inset(0 0% 0 0)";
        return;
      }
      const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      overlay.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
    };

    overlay.style.clipPath = "inset(0 100% 0 0)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.bar} ref={barRef}>
        <div className={styles.barGrid}>
          <div className={styles.barHeadline}>
            <div className={styles.headlineWrap}>
              <span className={styles.headlineBase} aria-hidden="true">
                OUR PROCESS.
              </span>
              <span
                ref={overlayRef}
                className={styles.headlineOverlay}
                aria-hidden="true"
                style={{ clipPath: "inset(0 100% 0 0)" }}
              >
                OUR PROCESS.
              </span>
              <span className={styles.headlineSr}>OUR PROCESS.</span>
            </div>
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

      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
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

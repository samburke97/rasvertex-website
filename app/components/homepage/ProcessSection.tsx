// app/components/homepage/ProcessSection.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProcessSection.module.css";

const STEPS = [
  {
    number: "01",
    label: "Site Visit",
    body: "A qualified trade lead walks the site with you inside 48 hours. Substrate assessment and scope documented on the spot. No obligation, no pressure.",
    photo: "/images/projects/1.jpeg",
  },
  {
    number: "02",
    label: "Itemised Quote",
    body: "Line-by-line scope, material specs, warranty terms and timeline in writing. You know exactly what you're getting before anything starts — not a lump-sum guess.",
    photo: "/images/projects/2.jpeg",
  },
  {
    number: "03",
    label: "Scheduled Works",
    body: "One project manager runs your job from go to sign-off. Weekly photo updates, direct-employed crew on site, one WhatsApp thread. No chasing, no subbies.",
    photo: "/nav/painting.png",
  },
  {
    number: "04",
    label: "Sign-off & Warranty",
    body: "Walk-through with you on completion. Five-year workmanship warranty issued in writing, backed by up to 15 years of manufacturer cover, lodged on the day.",
    photo: "/nav/cleaning.png",
  },
];

export default function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="process-heading">
      {/* ── Header ── */}
      <div className={styles.header}>
        <h2 id="process-heading" className={styles.headerTitle}>
          25+ years on the Sunshine Coast. We&rsquo;ve picked up a thing or two
          — we know how to run projects and make sure the quote holds up at
          handover. Here&rsquo;s how we do it.
        </h2>
        <div className={styles.headerSub}>
          <p className="p-soft">
            Four steps from first call to a five-year workmanship warranty —
            line-by-line scope, one project manager, every person on site
            directly employed by us.
          </p>
        </div>
      </div>

      {/* ── Two-column: photo + accordion ── */}
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.photoWrap}>
            {STEPS.map((s, i) => (
              <div
                key={s.number}
                className={`${styles.photo} ${i === activeIdx ? styles.photoActive : ""}`}
              >
                <Image
                  src={s.photo}
                  alt={s.label}
                  fill
                  className={styles.photoImg}
                  sizes="(max-width: 860px) 100vw, 40vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div
            className={styles.list}
            role="tablist"
            aria-label="Process steps"
          >
            {STEPS.map((s, i) => {
              const isOpen = activeIdx === i;
              return (
                <div
                  key={s.number}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                >
                  <button
                    className={styles.row}
                    role="tab"
                    aria-selected={isOpen}
                    onClick={() => setActiveIdx(i)}
                  >
                    <div className={styles.rowLeft}>
                      <span className={styles.stepNumber}>{s.number}</span>
                      <span className={styles.label}>{s.label}</span>
                    </div>
                    <span className={styles.chevron} aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className={styles.panel}>
                    <div className={styles.panelInner}>
                      <p className="p-soft">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.bottomRow}>
            <Link
              href="/contact"
              className={styles.bottomCta}
              aria-label="Start your project with RAS-VERTEX"
            >
              Ready to start your project? →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudy.module.css";

const SERVICES = [
  {
    label: "Building Wash",
    body: "Full building wash across all 96 units and the main precinct. Scheduled around resort operations to minimise disruption to guests.",
    href: "/services/cleaning",
  },
  {
    label: "Exterior Painting",
    body: "Complete exterior repaint program across the resort complex using coastal-spec systems — salt-bonded primer and Dulux Weathershield as standard.",
    href: "/services/painting",
  },
  {
    label: "Garden Maintenance",
    body: "Ongoing garden and grounds maintenance integrated into the resort's maintenance schedule, keeping presentation year-round.",
    href: "/services/maintenance",
  },
];

function CaseAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className={styles.list}>
      {SERVICES.map((s, i) => (
        <div
          key={s.label}
          className={`${styles.item} ${openIdx === i ? styles.open : ""}`}
        >
          <button
            className={styles.row}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className={styles.label}>{s.label}</span>
            <span className={styles.chevron} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
              <p className={styles.panelBody}>{s.body}</p>
            </div>
            <div className={styles.panelFooter}>
              <div className={styles.panelFooterInner}>
                <Link href={s.href} className={styles.panelCta}>
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudy() {
  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <h2 className={styles.cardHeading}>
          From Brisbane contractors to a local partner&nbsp;&mdash; the right
          team, finally on the Coast.
        </h2>

        <div className={styles.cardBody}>
          {/* Left — 3-cell image bento */}
          <div className={styles.photoCol}>
            <div className={styles.bento}>
              {/* A — tall left, spans rows 1–2 */}
              <div className={`${styles.bentoCell} ${styles.cellA}`}>
                <Image
                  src="/images/case/racv_1.jpg"
                  alt="RACV Resort Noosa — building wash"
                  fill
                  className={styles.bentoImg}
                  sizes="(max-width: 900px) 50vw, 35vw"
                  priority
                />
              </div>

              {/* B — top right */}
              <div className={`${styles.bentoCell} ${styles.cellB}`}>
                <Image
                  src="/images/case/racv_2.jpg"
                  alt="RACV Resort Noosa — painting works"
                  fill
                  className={styles.bentoImg}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>

              {/* C — bottom right */}
              <div className={`${styles.bentoCell} ${styles.cellC}`}>
                <Image
                  src="/images/case/racv_1.jpg"
                  alt="RACV Resort Noosa — complex overview"
                  fill
                  className={styles.bentoImg}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Right — sticky text (unchanged) */}
          <div className={styles.textCol}>
            <div className={styles.textBlock}>
              <div className={styles.eyebrowRow}>
                <div className={styles.racvLogo}>
                  <Image
                    src="/images/associations/racv.png"
                    alt="RACV"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                  />
                </div>
                <p className={styles.eyebrow}>RACV Noosa Resort</p>
              </div>
              <p className={styles.paragraph}>
                RACV Resort Noosa had been managing building maintenance through
                Brisbane-based contractors — and the distance showed. Slow
                mobilisation, unfamiliar crews on site, and no local
                accountability. They needed a Sunshine Coast partner who could
                actually be there when it mattered.
              </p>
              <p className={styles.paragraph}>
                We now run a dedicated maintenance program across the full
                resort complex — building washes across all 96 units and the
                main precinct, exterior painting, and garden maintenance. One
                project manager, one team, working through RACV&rsquo;s schedule
                so the resort never misses a beat.
              </p>
              <CaseAccordion />
            </div>
          </div>
        </div>

        {/* ── Support section ───────────────────────────────── */}
        <div className={styles.support}>
          <div className={styles.supportLeft}>
            <h3 className={styles.supportHeading}>
              Local team. Local knowledge. One number to call.
            </h3>
            <p className={styles.supportBody}>
              We work with resorts, body corporates, and commercial properties
              across the Sunshine Coast — on your schedule, with a dedicated
              project manager from day one.
            </p>
          </div>
          <div className={styles.supportRight}>
            <p className={styles.ctaLabel}>Ready to start your project?</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get a free quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

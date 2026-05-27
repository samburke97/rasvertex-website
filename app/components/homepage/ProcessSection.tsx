"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    number: "01",
    label: "Site Visit",
    heading: "We come to you, not the other way around.",
    body: "A trade lead walks the site with you inside 48 hours. No pushy sales rep, no guesswork. We see the job before we price it.",
    points: [
      "Qualified trade lead on site, not a salesperson",
      "Substrate assessment and scope documented",
      "No obligation, no pressure",
    ],
    meta: "48 HR TURNAROUND",
    photo: "/images/projects/1.jpeg",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
      { src: "/images/associations/mpa.png", alt: "MPA" },
    ],
  },
  {
    number: "02",
    label: "Itemised Quote",
    heading: "A quote that holds up at handover.",
    body: "Line-by-line scope, material specs, warranty and timeline in writing. You know exactly what you're getting before anything starts.",
    points: [
      "Line-itemed, not lump-sum",
      "Material specs and system details included",
      "Warranty terms confirmed upfront",
    ],
    meta: "3–5 DAYS",
    photo: "/images/projects/2.jpeg",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
    ],
  },
  {
    number: "03",
    label: "Scheduled Works",
    heading: "One manager. One thread. No chasing.",
    body: "One project manager runs your job from site visit to sign-off. One WhatsApp thread, weekly photo updates, no surprises.",
    points: [
      "Dedicated project manager on every job",
      "Weekly photo updates as standard",
      "Direct-employed crew — no subbies",
    ],
    meta: "BOOKED & MANAGED",
    photo: "/nav/painting.png",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
      {
        src: "/images/associations/communityselect.png",
        alt: "Community Select",
      },
    ],
  },
  {
    number: "04",
    label: "Sign-off & Warranty",
    heading: "Five-year warranty, in writing, at handover.",
    body: "Walk-through with you on completion. Workmanship warranty issued in writing and lodged with your records on the day.",
    points: [
      "On-site walk-through at completion",
      "5-year workmanship warranty in writing",
      "Backed by up to 15-year manufacturer cover",
    ],
    meta: "ONGOING COVER",
    photo: "/nav/cleaning.png",
    logos: [
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
    ],
  },
];

export default function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <h2 className={styles.heading}>
          25+ years on the Sunshine Coast. We've picked up a thing or two — we
          know how to run projects and make sure the quote holds up at handover.
          Here's how we do it.
        </h2>
      </div>

      {/* ── Two-column body ── */}
      <div className={styles.inner}>
        {/* Left — switching photo */}
        <div className={styles.left}>
          <div className={styles.photoWrap}>
            {steps.map((s, i) => (
              <div
                key={s.number}
                className={`${styles.photo} ${i === activeIdx ? styles.photoActive : ""}`}
              >
                <Image
                  src={s.photo}
                  alt={s.label}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 860px) 100vw, 40vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right — accordion + team CTA */}
        <div className={styles.right}>
          <div className={styles.list}>
            {steps.map((s, i) => (
              <div
                key={s.label}
                className={`${styles.item} ${activeIdx === i ? styles.open : ""}`}
              >
                <button
                  className={styles.row}
                  onClick={() => setActiveIdx(i)}
                  aria-expanded={activeIdx === i}
                >
                  <div className={styles.rowLeft}>
                    <span className={styles.stepNumber}>{s.number}</span>
                    <span className={styles.label}>{s.label}</span>
                  </div>
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
                    <h3 className={styles.panelHeading}>{s.heading}</h3>
                    <p className={styles.panelBody}>{s.body}</p>

                    <ul className={styles.points}>
                      {s.points.map((p) => (
                        <li key={p} className={styles.point}>
                          <span className={styles.tick}>✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    {s.logos.length > 0 && (
                      <div className={styles.logos}>
                        {s.logos.map((l) => (
                          <div key={l.alt} className={styles.logoWrap}>
                            <Image
                              src={l.src}
                              alt={l.alt}
                              fill
                              style={{
                                objectFit: "contain",
                                objectPosition: "left center",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <span className={styles.meta}>↓ {s.meta}</span>
                  </div>

                  <div className={styles.panelFooter}>
                    <div className={styles.panelFooterInner}>
                      <Link href="/contact" className={styles.panelCta}>
                        Get a quote →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team CTA strip */}
          <div className={styles.teamStrip}>
            <div className={styles.teamLeft}>
              <div className={styles.avatar}>
                <Image
                  src="/images/people/caro.jpg"
                  alt="Hylton"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.teamMeta}>
                <span className={styles.teamEyebrow}>Your Project Lead</span>
                <span className={styles.teamName}>Hylton, Operations</span>
              </div>
            </div>
            <Link href="/contact" className={styles.teamCta}>
              Talk to Hylton →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

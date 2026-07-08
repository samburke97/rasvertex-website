// app/components/shared/ServiceFAQ.tsx

"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import styles from "./ServiceFAQ.module.css";

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQContact {
  name: string;
  role: string;
  photo: string;
  ctaHref?: string;
  ctaLabel?: string;
}

interface ServiceFAQProps {
  heading?: string;
  lede?: string;
  items: FAQItem[];
  contact: FAQContact;
  headingId?: string;
  /** Heading above the CTA button — defaults to "Ready to talk about your project?" */
  ctaHeading?: ReactNode;
}

export default function ServiceFAQ({
  heading,
  lede,
  items,
  contact,
  headingId = "faq-heading",
  ctaHeading = "Ready to talk about your project?",
}: ServiceFAQProps) {
  const [openIdx, setOpenIdx] = useState(-1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const label = contact.ctaLabel ?? "Let’s talk about your project →";
  const labelText = label.slice(0, label.lastIndexOf("→")).trimEnd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section
        className={styles.section}
        aria-labelledby={heading ? headingId : undefined}
      >
        <div className={styles.inner}>
          {/* ── Left — optional header + CTA pinned at bottom ── */}
          <div className={styles.left}>
            {(heading || lede) && (
              <div className={styles.header}>
                {heading && <h2 id={headingId}>{heading}</h2>}
                {lede && <p className="p">{lede}</p>}
              </div>
            )}

            {/* CTA block */}
            <div
              className={styles.ctaRow}
              aria-label={`Contact ${contact.name}`}
            >
              <h2 className={styles.ctaHeading}>{ctaHeading}</h2>
              <Link
                href={contact.ctaHref ?? "/contact"}
                className={styles.ctaButton}
                aria-label={`Talk to ${contact.name.split(" ")[0]} about your project`}
              >
                {labelText}
                <svg
                  className={styles.ctaArrow}
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
              </Link>
            </div>
          </div>

          {/* ── Right — accordion ── */}
          <div
            className={styles.list}
            role="list"
            aria-label="Frequently asked questions"
          >
            {items.map((f, i) => (
              <div
                key={i}
                className={`${styles.item} ${openIdx === i ? styles.open : ""}`}
                role="listitem"
              >
                <button
                  className={styles.question}
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className={styles.qNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.qText}>{f.q}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
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
                <div
                  className={styles.answer}
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <p className={`${styles.answerInner} p-soft`}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

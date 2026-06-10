// app/components/shared/ServiceFAQ.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
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
}

export default function ServiceFAQ({
  heading,
  lede,
  items,
  contact,
  headingId = "faq-heading",
}: ServiceFAQProps) {
  const [openIdx, setOpenIdx] = useState(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

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

            {/* CTA block — avatar beside name/copy/button */}
            <div
              className={styles.ctaRow}
              aria-label={`Contact ${contact.name}`}
            >
              <div className={styles.avatar} aria-hidden="true">
                <Image
                  src={contact.photo}
                  alt={`${contact.name} — ${contact.role} at RAS-VERTEX`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="160px"
                />
              </div>
              <div className={styles.ctaContent}>
                <h3>Ready to talk about your project?</h3>
                <p className="p-soft">
                  Building projects can feel like a lot. Don&rsquo;t stress —
                  we&rsquo;ve been doing this for 25 years. One call to{" "}
                  {contact.name.split(" ")[0]} and you&rsquo;ll know exactly
                  where you stand.
                </p>
                <Link
                  href={contact.ctaHref ?? "/contact"}
                  className={styles.ctaButton}
                  aria-label={`Talk to ${contact.name.split(" ")[0]} about your project`}
                >
                  {contact.ctaLabel ??
                    "Let\u2019s talk about your project \u2192"}
                </Link>
              </div>
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

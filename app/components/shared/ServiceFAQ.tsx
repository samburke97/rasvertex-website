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
  email: string;
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
  heading = "Things you'll probably want to ask.",
  lede,
  items,
  contact,
  headingId = "faq-heading",
}: ServiceFAQProps) {
  const [openIdx, setOpenIdx] = useState(0);

  const defaultLede = `Our ${contact.role.toLowerCase()} will be on the phone within an hour during business days.`;

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
      <section className={styles.section} aria-labelledby={headingId}>
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <h2 id={headingId}>{heading}</h2>
              <p className="p-soft">{lede ?? defaultLede}</p>
            </div>

            <div className={styles.contact}>
              {contact.photo && (
                <div className={styles.avatarWrap}>
                  <Image
                    src={contact.photo}
                    alt={`${contact.name} — ${contact.role}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="96px"
                  />
                </div>
              )}
              <p className={styles.contactHeading}>
                Talk to our {contact.role.toLowerCase()}.
              </p>
              <p className="p-soft">
                {contact.name} will give you a straight answer.
              </p>
              <Link
                href={`mailto:${contact.email}`}
                className={styles.contactBtn}
              >
                {contact.ctaLabel ?? `Chat to ${contact.name.split(" ")[0]} →`}
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div className={styles.list}>
            {items.map((f, i) => (
              <div
                key={i}
                className={`${styles.item} ${openIdx === i ? styles.open : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className={styles.qNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.qText}>{f.q}</span>
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
                <div
                  className={styles.answer}
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div className={styles.answerInner}>{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

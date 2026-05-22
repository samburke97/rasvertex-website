// Shared FAQ — accepts data, contact person, generates schema
"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import styles from "./PageFAQ.module.css";

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQContact {
  name: string;
  role: string;
  email: string;
  ctaLabel?: string;
  photo: string;
}

interface PageFAQProps {
  heading?: string;
  lede?: string;
  items: FAQItem[];
  contact: FAQContact;
}

export default function PageFAQ({
  heading = "Things you'll probably want to ask.",
  lede = "Couldn't find what you're after? Our lead will be on the phone within an hour during business days.",
  items,
  contact,
}: PageFAQProps) {
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
      <section className={styles.section}>
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <h2 className={styles.h}>{heading}</h2>
              <p className={styles.lede}>{lede}</p>
            </div>
            <div className={styles.contact}>
              <div className={styles.avatar}>
                <Image
                  src={contact.photo}
                  alt={contact.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <p className={styles.contactHeading}>
                Talk to our {contact.role.toLowerCase()}.
              </p>
              <p className={styles.contactBody}>
                {contact.name} will give you a straight answer.
              </p>
              <Button
                as="link"
                href={`mailto:${contact.email}`}
                size="md"
                className={styles.contactBtn}
              >
                {contact.ctaLabel ?? `Chat to ${contact.name.split(" ")[0]} →`}
              </Button>
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
                >
                  <span className={styles.qNum}>0{i + 1}</span>
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
                <div className={styles.answer}>
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

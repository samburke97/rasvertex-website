"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.css";
import Button from "../ui/Button";

const FAQS = [
  { q: "How long does a typical strata repaint take?", a: "For a 4–5 storey strata building, expect 5–8 weeks on-site for prep + 2 coats. We work in zones so residents only see scaffolding or rope-access on their face for a week at most." },
  { q: "Can you paint while the building stays occupied?", a: "Yes — that's the default. We use low-VOC systems, work in zones, and schedule disruptive prep outside trading hours for hotels and offices." },
  { q: "What's covered by the 5-year warranty?", a: "Workmanship across all coated surfaces — adhesion, peeling, blistering and finish failure. The manufacturer warranty covers the paint film for up to 15 years. Both are issued in writing and lodged in ROCO." },
  { q: "Do you do pre-sale painting?", a: "Yes — we run a dedicated pre-sale program for agents and vendors across the Sunshine Coast. Quick-turn interior and exterior refresh, ready in 5–10 business days." },
  { q: "Do you provide colour consulting?", a: "Yes — we do on-site sample blocks at no charge for projects over $25k. Most body corporates use the process to socialise colour with their committee before committing." },
  { q: "Do you use rope access or scaffold?", a: "Both. We're IRATA L1–L3 in-house and partner with scaffolders for jobs where access is staged. Rope access typically saves 40–60% vs scaffolding on high-rise repaints." },
  { q: "Are you QBCC licensed and insured?", a: "QBCC licensed, $20M public liability, full workers' comp. Certificates of currency are auto-issued through ROCO at quote stage." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <h2 className={styles.h}>Things you'll probably want to ask.</h2>
              <p className={styles.lede}>Couldn't find what you're after? Our painting lead will be on the phone within an hour during business days.</p>
            </div>
            <div className={styles.contact}>
              <div className={styles.avatar}>
                <Image src="/images/people/caro.jpg" alt="Hylton Denton — Painting Lead" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <p className={styles.contactHeading}>Talk to our painting lead.</p>
              <p className={styles.contactBody}>Hylton's been on the tools and in the office. He'll give you a straight answer.</p>
              <Button as="link" href="mailto:team@rasvertex.com.au" size="md" className={styles.contactBtn}>Talk to Hylton →</Button>
            </div>
          </div>
          <div className={styles.list}>
            {FAQS.map((f, i) => (
              <div key={i} className={`${styles.item} ${openIdx === i ? styles.open : ""}`}>
                <button className={styles.question} onClick={() => setOpenIdx(openIdx === i ? -1 : i)} aria-expanded={openIdx === i}>
                  <span className={styles.qNum}>0{i + 1}</span>
                  <span className={styles.qText}>{f.q}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </button>
                <div className={styles.answer}><div className={styles.answerInner}>{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

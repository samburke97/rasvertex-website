"use client";

import Image from "next/image";
import styles from "./ServiceFeatures.module.css";

const FEATURES = [
  {
    n: "01",
    title: "Dedicated project manager",
    body: "One person runs your job from site visit to sign-off. One number, one thread, no chasing. You always know who to call.",
    logos: null,
  },
  {
    n: "02",
    title: "IRATA-certified access",
    body: "30+ rope access technicians trained in-house to IRATA L1–L3. We reach what scaffold can't — faster, safer, cheaper.",
    logos: null,
  },
  {
    n: "03",
    title: "5-year written warranty",
    body: "Workmanship warranty issued in writing and lodged in ROCO at handover. Backed by up to 15-year manufacturer coverage.",
    logos: null,
  },
  null, // "HIGHER STANDARDS." hero cell
  {
    n: "04",
    title: "Coastal-spec systems",
    body: "Salt-bonded primers, chloride rinse, elastomeric topcoats. Every system is matched to the substrate and the exposure.",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
    ],
  },
  {
    n: "05",
    title: "QBCC licensed & insured",
    body: "QBCC licensed, $20M public liability, full workers' comp. Certificates of currency issued automatically at quote stage.",
    logos: [
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
    ],
  },
];

export default function ServiceFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {FEATURES.map((f, i) =>
          f === null ? (
            <div key="hero" className={styles.heroCell}>
              <span className={styles.heroText}>
                HIGHER
                <br />
                STANDARDS.
              </span>
            </div>
          ) : (
            <div
              key={f.n}
              className={`${styles.feature} ${i === 0 ? styles.featureDefault : ""}`}
            >
              <span className={styles.num}>{f.n}</span>
              <div className={styles.content}>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.body}>{f.body}</p>
                {f.logos && (
                  <div className={styles.logos}>
                    {f.logos.map((l) => (
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
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

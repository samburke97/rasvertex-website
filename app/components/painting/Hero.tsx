"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const DATA = {
  number: "01",
  title: { main: "Painting", accent: "." },
  lede: "Repaints, refurbishments and protective coatings — delivered by a single in-house crew trained for <em>high-rise, coastal and heritage</em> work. Every project documented end-to-end on ROCO, with a written 5-year warranty on workmanship and 15-year manufacturer-backed coverage.",
  facts: [
    { label: "Discipline", value: "Coating systems · prep · re-finish" },
    { label: "Sectors", value: "Strata · Resort · Commercial · Heritage" },
    { label: "Access", value: "Scaffold · BMU · Rope (IRATA L3)" },
    { label: "Warranty", value: "5-yr workmanship · 15-yr manufacturer" },
  ],
  heroImage: "/assets/project-1.jpeg",
  heroCap: ["Mooloolaba Towers · 14 storeys", "Dulux Weathershield · 2025"],
};

export default function Hero() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(
      () => stripRef.current?.classList.add(styles.stripIn),
      80,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.top}>
        <div className={styles.meta}>
          <span className={styles.pill}>{DATA.number} · Service</span>
          <span>QBCC 15234567 · IRATA L1–L3</span>
        </div>
        <div className={styles.meta}>Sunshine Coast · QLD · est. 2014</div>
      </div>

      <h1 className={styles.title}>
        {DATA.title.main}
        <span className={styles.accent}>{DATA.title.accent}</span>
      </h1>

      <div className={styles.base}>
        <p
          className={styles.lede}
          dangerouslySetInnerHTML={{ __html: DATA.lede }}
        />
        <div className={styles.factstack}>
          {DATA.facts.map(({ label, value }) => (
            <div className={styles.factrow} key={label}>
              <span className={styles.factlabel}>{label}</span>
              <span className={styles.factvalue}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.strip} ref={stripRef}>
        <Image
          src={DATA.heroImage}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.stripCorner} aria-hidden="true">
          №{DATA.number}
        </div>
        <div className={styles.stripCaption}>
          <span>{DATA.heroCap[0]}</span>
          <span className={styles.sep}>·</span>
          <span>{DATA.heroCap[1]}</span>
        </div>
      </div>
    </section>
  );
}

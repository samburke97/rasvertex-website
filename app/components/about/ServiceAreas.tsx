"use client";

import { useState } from "react";
import Button from "../ui/Button";
import styles from "./ServiceAreas.module.css";
import { SERVICE_REGIONS as REGIONS } from "../../data/serviceAreasData";

const TOTAL = REGIONS.reduce((n, r) => n + r.suburbs.length, 0);

export default function ServiceAreas() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="service-areas-heading">

      <div className={styles.header}>
        <h2 id="service-areas-heading">
          Sunshine Coast property maintenance,{" "}
          <br className="hidden md:block" />
          from Caloundra to Noosa.
        </h2>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Service regions">
        {REGIONS.map((region, i) => (
          <button
            key={region.label}
            role="tab"
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
          >
            {region.label}
            <span className={styles.count}>{region.suburbs.length}</span>
          </button>
        ))}
      </div>

      {REGIONS.map((region, i) => (
        <div
          key={region.label}
          id={`panel-${i}`}
          role="tabpanel"
          aria-label={region.label}
          className={`${styles.panel} ${active === i ? styles.panelActive : ""}`}
        >
          <ul className={styles.suburbs}>
            {region.suburbs.map((suburb) => (
              <li key={suburb} className={styles.suburb}>{suburb}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className={styles.footer}>
        <span className={styles.meta}>{TOTAL} Suburbs Serviced · One Local Crew</span>
        <Button as="link" href="/contact" variant="primary">
          See your suburb? Let&rsquo;s get to work
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
        </Button>
      </div>

    </section>
  );
}

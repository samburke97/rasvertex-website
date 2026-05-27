// app/components/homepage/IndustriesSection.tsx

"use client";

import { useState } from "react";
import styles from "./IndustriesSection.module.css";
import { HOMEPAGE_INDUSTRIES } from "../../data/industriesData";
import type { IndustryTab } from "../../data/industriesData";

interface IndustriesSectionProps {
  tabs?: IndustryTab[];
}

export default function IndustriesSection({
  tabs = HOMEPAGE_INDUSTRIES,
}: IndustriesSectionProps) {
  const [activeId, setActiveId] = useState(tabs[0].id);

  return (
    <section className={styles.section} aria-label="Industries we serve">
      <nav
        className={styles.tabs}
        role="tablist"
        aria-label="Industry selector"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeId === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            className={`${styles.tab} ${activeId === tab.id ? styles.tabActive : ""}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label} →
          </button>
        ))}
      </nav>

      <div className={styles.content}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className={`${styles.panel} ${activeId === tab.id ? styles.panelActive : ""}`}
            hidden={activeId !== tab.id}
          >
            <h3 className={styles.heading}>{tab.heading}</h3>
            <p className={styles.body}>{tab.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

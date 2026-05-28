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
    <section className={styles.section} aria-labelledby="industries-heading">
      {/* ── Section title ──────────────────────────────────── */}
      <h2 id="industries-heading" className={styles.heading}>
        Painting the Sunshine Coast for 25 years. Body&nbsp;corporate, strata,
        residential, and commercial painters.
      </h2>

      {/* ── Tabs + content row ─────────────────────────────── */}
      <div className={styles.row}>
        {/* Left column — tab buttons */}
        <nav
          className={styles.tabs}
          role="tablist"
          aria-label="Select an industry to learn more"
        >
          {tabs.map((tab) => {
            const isActive = activeId === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}&nbsp;&rarr;
              </button>
            );
          })}
        </nav>

        {/* Right column — panel content, vertically centred */}
        <div className={styles.content}>
          {tabs.map((tab) => {
            const isActive = activeId === tab.id;
            return (
              <article
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                className={`${styles.panel} ${isActive ? styles.panelActive : ""}`}
                hidden={!isActive}
              >
                <h3>{tab.heading}</h3>
                <p className="p-soft">{tab.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

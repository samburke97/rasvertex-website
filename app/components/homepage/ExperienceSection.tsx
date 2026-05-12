"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ExperienceSection.module.css";

const tabs = [
  {
    id: "certified",
    number: "01",
    label: "Certified",
    heading: "LICENSED & INSURED",
    body: "Every certification a body corporate, asset manager or insurer expects to see — held current, audited annually, and supplied in your tender pack on request.",
    image: "/nav/painting.png",
    imageAlt: "QBCC certified crew on site",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
      {
        src: "/images/associations/communityselect.png",
        alt: "Community Select",
      },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
      { src: "/images/associations/haymes.svg", alt: "Haymes" },
      { src: "/images/associations/mpa.png", alt: "MPA" },
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
    ],
  },
  {
    id: "accountable",
    number: "02",
    label: "Accountable",
    heading: "ONE PROJECT MANAGER",
    body: "A named project manager runs every job from quote to warranty. Weekly photo report, single invoice, five-year workmanship warranty issued in writing.",
    image: "/nav/maintenance.png",
    imageAlt: "Project manager on site",
    logos: [
      { src: "/partners/accor.svg", alt: "Accor" },
      { src: "/partners/archers.png", alt: "Archers" },
      { src: "/partners/coolum.png", alt: "Coolum" },
      { src: "/partners/gov.svg", alt: "Government" },
      { src: "/partners/maroochy.png", alt: "Maroochy" },
      { src: "/partners/mosaic.svg", alt: "Mosaic" },
      { src: "/partners/novotel.svg.png", alt: "Novotel" },
      { src: "/partners/pica.png", alt: "Pica" },
      { src: "/partners/racv.png", alt: "RACV" },
      { src: "/partners/raywhite.png", alt: "Ray White" },
      { src: "/partners/trafalgar.svg", alt: "Trafalgar" },
    ],
  },
  {
    id: "proven",
    number: "03",
    label: "Proven",
    heading: "500+ BUILDINGS MANAGED",
    body: "A quarter-century of facade washes, balcony membranes, repaints and scheduled maintenance from Caloundra to Noosa.",
    image: "/nav/cleaning.png",
    imageAlt: "High-rise facade crew",
  },
  {
    id: "local",
    number: "04",
    label: "Local",
    heading: "BUILT HERE",
    body: "Founded in Maroochydore in 1998. Our trade leads live where they work — response in hours, not weeks, and the relationship lasts beyond the warranty.",
    image: "/images/projects/1.jpeg",
    imageAlt: "Sunshine Coast project",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];
const tabIds = tabs.map((t) => t.id);

export default function ExperienceSection() {
  const [active, setActive] = useState<TabId>("certified");
  const currentIndex = tabIds.indexOf(active);
  const current = tabs[currentIndex];

  const prev = () =>
    setActive(
      tabIds[currentIndex === 0 ? tabIds.length - 1 : currentIndex - 1],
    );
  const next = () =>
    setActive(
      tabIds[currentIndex === tabIds.length - 1 ? 0 : currentIndex + 1],
    );

  return (
    <section className={styles.section}>
      {/* ── Top bar: HIGHER STANDARDS + tabs ─────────────────── */}
      <div className={styles.bar}>
        <div className={styles.barGrid}>
          <div className={styles.barHeadline}>
            <p className={styles.headline}>HIGHER STANDARDS.</p>
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${active === tab.id ? styles.tabActive : ""}`}
              onClick={() => setActive(tab.id)}
            >
              <span className={styles.tabLine} />
              <span className={styles.tabNumber}>{tab.number}</span>
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Content: left text + right image ─────────────────── */}
      <div className={styles.content} key={active}>
        <div className={styles.left}>
          <p className={styles.heading}>{current.heading}</p>
          <p className={styles.body}>{current.body}</p>

          {"logos" in current && current.logos && (
            <div className={styles.logoRow}>
              {current.logos.map((logo) => (
                <div key={logo.alt} className={styles.logoWrap}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
          )}

          <div className={styles.arrows}>
            <button
              className={styles.arrowBtn}
              onClick={prev}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M10.5 13.5L6 9l4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={`${styles.arrowBtn} ${styles.arrowBtnActive}`}
              onClick={next}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7.5 4.5L12 9l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageCard}>
            <Image
              src={current.image}
              alt={current.imageAlt}
              fill
              className={styles.image}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

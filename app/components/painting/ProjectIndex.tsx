"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import styles from "./ProjectIndex.module.css";

const Arrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PROJECTS = [
  {
    i: "01",
    name: "Peppers Noosa",
    loc: "Noosa Heads, QLD",
    scope: "Strata repaint · 9 storeys",
    year: "2025",
    img: "/assets/project-1.jpeg",
  },
  {
    i: "02",
    name: "Coolum Resort",
    loc: "Coolum Beach, QLD",
    scope: "Facade refresh · render",
    year: "2025",
    img: "/assets/project-2.jpeg",
  },
  {
    i: "03",
    name: "Maroochydore Tower",
    loc: "Maroochydore, QLD",
    scope: "Repaint · 22 storeys · rope",
    year: "2025",
    img: "/assets/higher.png",
  },
  {
    i: "04",
    name: "Noosa Civic Annex",
    loc: "Noosaville, QLD",
    scope: "Commercial precinct refresh",
    year: "2024",
    img: "/assets/commercial.png",
  },
  {
    i: "05",
    name: "Buderim Heritage",
    loc: "Buderim, QLD",
    scope: "Lime restoration · timber",
    year: "2024",
    img: "/assets/body.png",
  },
  {
    i: "06",
    name: "Caloundra Bay BC",
    loc: "Caloundra, QLD",
    scope: "42-unit body corporate",
    year: "2024",
    img: "/assets/bodycorporate.png",
  },
  {
    i: "07",
    name: "Sunshine Tower",
    loc: "Mooloolaba, QLD",
    scope: "Tower repaint · IRATA L2",
    year: "2024",
    img: "/assets/residential.png",
  },
  {
    i: "08",
    name: "Novotel Twin Waters",
    loc: "Twin Waters, QLD",
    scope: "Resort exterior · staged",
    year: "2023",
    img: "/assets/painting-hero.png",
  },
];

export default function ProjectIndex() {
  const [preview, setPreview] = useState({ show: false, src: "", x: 0, y: 0 });

  return (
    <section className={styles.section}>
      <SectionHead base="RECENT WORK." overlay="RECENT WORK." sr="Recent work.">
        <span className={styles.eyebrow}>Index</span>
        <p>
          A live cross-section of the work — strata, resort, heritage and
          commercial. Hover for the project image.
        </p>
        <a href="#" className={styles.link}>
          View all 220+ projects <Arrow />
        </a>
      </SectionHead>

      <div className={styles.list}>
        {PROJECTS.map((row) => (
          <a
            key={row.i}
            href="#"
            className={styles.row}
            onMouseEnter={() =>
              setPreview({ show: true, src: row.img, x: 0, y: 0 })
            }
            onMouseLeave={() => setPreview((p) => ({ ...p, show: false }))}
            onMouseMove={(e) =>
              setPreview((p) => ({
                ...p,
                x: e.clientX + 32,
                y: e.clientY - 40,
              }))
            }
          >
            <span className={styles.num}>{row.i}</span>
            <span className={styles.project}>{row.name}</span>
            <span className={styles.location}>{row.loc}</span>
            <span className={styles.scope}>{row.scope}</span>
            <span className={styles.year}>{row.year}</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>

      <div
        className={`${styles.preview} ${preview.show ? styles.previewShow : ""}`}
        style={{ left: preview.x, top: preview.y }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={preview.src} alt="" />
      </div>
    </section>
  );
}

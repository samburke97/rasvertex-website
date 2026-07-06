"use client";

// app/components/work/ProjectsBento.tsx

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "../../data/projectsData";
import styles from "./ProjectsBento.module.css";

const PrevArrow = () => (
  <svg width="52" height="52" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11.5 6.5L8 10L11.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NextArrow = () => (
  <svg width="52" height="52" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.5 6.5L12 10L8.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProjectsBento() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const closeModal = useCallback(() => setOpenIdx(null), []);

  const prev = useCallback(() => {
    setOpenIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const next = useCallback(() => {
    setOpenIdx((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (openIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIdx, prev, next, closeModal]);

  useEffect(() => {
    document.body.style.overflow = openIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openIdx]);

  const current = openIdx !== null ? filtered[openIdx] : null;

  return (
    <>
      {/* Filter */}
      <nav className={styles.filter} aria-label="Filter projects by category">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => { setActiveCategory(cat); setOpenIdx(null); }}
            aria-pressed={activeCategory === cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Grid */}
      <div className={styles.grid} role="list" aria-label="Project gallery">
        {filtered.map((project, i) => (
          <button
            key={project.id}
            type="button"
            role="listitem"
            className={styles.cell}
            onClick={() => setOpenIdx(i)}
            aria-label={`View ${project.name}`}
          >
            <div className={styles.mediaWrap}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 860px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {current && (
        <div
          className={styles.backdrop}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={current.name}
        >
          <div className={styles.modalWrap} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageWrap}>
              <Image
                src={current.image}
                alt={current.imageAlt}
                fill
                className={styles.modalImage}
                sizes="(max-width: 860px) 95vw, 80vw"
                priority
              />
            </div>
            <div className={styles.modalInfo}>
              <p className={styles.modalName}>{current.name} <span className={styles.modalDot}>·</span> {current.location}</p>
              <p className={styles.modalScope}>{current.category} · {current.scope}</p>
            </div>
          </div>

          <button className={`${styles.modalNav} ${styles.modalNavPrev}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous project">
            <PrevArrow />
          </button>
          <button className={`${styles.modalNav} ${styles.modalNavNext}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next project">
            <NextArrow />
          </button>

          <div className={styles.modalCounter} aria-live="polite">
            {openIdx! + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}

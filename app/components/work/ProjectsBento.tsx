// app/components/work/ProjectsBento.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type Project,
} from "../../data/projectsData";
import styles from "./ProjectsBento.module.css";

function ProjectCell({ project }: { project: Project }) {
  return (
    <article
      className={`${styles.cell} ${styles[project.size]}`}
      aria-labelledby={`project-${project.id}`}
    >
      {/* Image */}
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 860px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>

      {/* Hover reveal */}
      <div className={styles.reveal} aria-hidden="true">
        <div className={styles.revealInner}>
          <span className={styles.revealCategory}>{project.category}</span>
          <h3 id={`project-${project.id}`} className={styles.revealName}>
            {project.name}
          </h3>
          <div className={styles.revealMeta}>
            <span className={styles.revealClient}>{project.client}</span>
            <span className={styles.revealDot} />
            <span className={styles.revealLocation}>{project.location}</span>
          </div>
          <p className={styles.revealScope}>{project.scope}</p>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsBento() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className={styles.wrap}>
      {/* Category filter */}
      <nav className={styles.filter} aria-label="Filter projects by category">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Bento grid */}
      <div className={styles.bento} role="list" aria-label="Project showcase">
        {filtered.map((project) => (
          <ProjectCell key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

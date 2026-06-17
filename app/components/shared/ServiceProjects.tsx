// app/components/shared/ServiceProjects.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceProjects.module.css";

export interface ServiceProject {
  suburb: string;
  name: string;
  type: string;
  system: string;
  image: string;
  alt?: string;
}

interface ServiceProjectsProps {
  heading: React.ReactNode;
  subheading: string;
  projects: ServiceProject[];
  footerNote: string;
  ctaLabel?: string;
  ctaHref?: string;
  headingId?: string;
}

export default function ServiceProjects({
  heading,
  subheading,
  projects,
  footerNote,
  ctaLabel = "Start your project →",
  ctaHref = "/contact",
  headingId = "projects-heading",
}: ServiceProjectsProps) {
  return (
    <section aria-labelledby={headingId} className={styles.section}>
      {/* ── Header: h2 left, subheading right ── */}
      <header className={styles.header}>
        <h2 id={headingId}>{heading}</h2>
        <p>{subheading}</p>
      </header>

      <div className={styles.rule} aria-hidden="true" />

      {/* ── Project grid ── */}
      <ul className={styles.grid} role="list" aria-label="Recent projects">
        {projects.map((p) => (
          <li key={p.name} className={styles.project}>
            <div
              className={styles.photo}
              role="img"
              aria-label={p.alt ?? `${p.name} — ${p.suburb}`}
            >
              <Image
                src={p.image}
                alt={p.alt ?? `${p.name} — ${p.suburb}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 860px) 100vw, 33vw"
              />
            </div>
            <div className={styles.meta}>
              <p className={styles.suburb}>{p.suburb}</p>
              <p className={styles.name}>{p.name}</p>
              <p className={styles.type}>
                {p.type} · {p.system}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <p className={styles.footerNote}>{footerNote}</p>
        <Link href={ctaHref} className={styles.cta} aria-label={ctaLabel}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}

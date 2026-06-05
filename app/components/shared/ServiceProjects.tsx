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
  heading: string;
  subheading: string;
  projects: ServiceProject[];
  footerNote: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceProjects({
  heading,
  subheading,
  projects,
  footerNote,
  ctaLabel = "Start your project →",
  ctaHref = "/contact",
}: ServiceProjectsProps) {
  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.heading}>{heading}</h2>
          </div>
          <p className={styles.headerBody}>{subheading}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.name} className={styles.project}>
              <div className={styles.photo}>
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
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerNote}>{footerNote}</p>
          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}

// Shared project gallery — blue card, photo + text below
import Image from "next/image";
import Link from "next/link";
import styles from "./PageProjects.module.css";

export interface Project {
  suburb: string;
  name: string;
  type: string;
  system: string;
  image: string;
}

interface PageProjectsProps {
  heading: string;
  subheading: string;
  projects: Project[];
  footerNote: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageProjects({
  heading,
  subheading,
  projects,
  footerNote,
  ctaLabel = "Start your project →",
  ctaHref = "/contact",
}: PageProjectsProps) {
  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Recent projects</span>
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
                  alt={`${p.name} — ${p.suburb}`}
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

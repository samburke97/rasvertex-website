import Link from "next/link";
import styles from "./PageIntro.module.css";

export interface PageIntroStat {
  value: string;
  label: string;
}

interface PageIntroProps {
  eyebrow?: string;
  statement?: string;
  heading: string;
  paragraphs: string[];
  stats?: PageIntroStat[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageIntro({
  eyebrow,
  statement,
  heading,
  paragraphs,
  stats,
  ctaLabel,
  ctaHref,
}: PageIntroProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — sticky */}
        <div className={styles.left}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          {statement && (
            <p className={styles.statement}>
              {statement.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
          <h2 className={styles.heading}>{heading}</h2>
          {stats && stats.length > 0 && (
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right — content */}
        <div className={styles.right}>
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.body}>
              {p}
            </p>
          ))}
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

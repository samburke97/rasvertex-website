// app/components/homepage/CaseStudy.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <section className={styles.section} aria-labelledby="case-study-heading">
      {/* ── Header ── */}
      <header className={styles.header}>
        <h2 id="case-study-heading" className={styles.heading}>
          From Brisbane contractors to a local partner — the right team, finally
          on the Coast.
        </h2>
      </header>

      {/* ── Video ── */}
      <div className={styles.videoWrap}>
        <video
          className={styles.video}
          src="/videos/racv.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="RACV Resort Noosa — project footage by RAS-VERTEX"
        />
        <div className={styles.videoOverlay}>
          <span className={styles.clientName}>RACV Noosa Resort</span>
        </div>
      </div>

      {/* ── Content grid ── */}
      <div className={styles.content}>
        {/* Left — summary */}
        <div className={styles.left}>
          <h3>Dedicated maintenance for the full resort complex.</h3>
          <p className={styles.body}>
            RACV Resort Noosa had been managing building maintenance through
            Brisbane-based contractors — and the distance showed. We now run a
            dedicated program across the full resort complex. One project
            manager, one team, on their schedule.
          </p>
        </div>

        {/* Right — quote */}
        <div className={styles.right}>
          <figure className={styles.quote}>
            <blockquote className={styles.quoteText}>
              <p>
                They showed up within 48 hours for the site visit and had a full
                itemised quote within the week. Refreshing.
              </p>
            </blockquote>
            <figcaption className={styles.quoteAuthor}>
              <div className={styles.authorLogo}>
                <Image
                  src="/partners/racv.png"
                  alt="RACV"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.authorInfo}>
                <cite className={styles.authorName}>Sandra Koh</cite>
                <span className={styles.authorRole}>
                  Strata Manager, Archers Body Corporate
                </span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Local team. Local knowledge. One number to call.
        </p>
        <Link
          href="/contact"
          className={styles.footerCta}
          aria-label="Get a free quote for your property"
        >
          Get a free quote →
        </Link>
      </footer>
    </section>
  );
}

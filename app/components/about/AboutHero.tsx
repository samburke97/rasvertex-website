// app/components/about/AboutHero.tsx

import Link from "next/link";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      {/* ── Top: headline left, lede + CTA right ── */}
      <div className={styles.top}>
        <h1 id="about-heading">
          The Sunshine Coast&rsquo;s complete property maintenance partner.
        </h1>
        <div className={styles.topRight}>
          <p className="p-soft">
            Painting, building cleaning, window cleaning, waterproofing, height
            safety and maintenance — for body corporates, strata committees,
            commercial property managers and residential owners across the
            Sunshine Coast.
          </p>
          <Link href="/contact" className={styles.cta}>
            Get a free quote
          </Link>
        </div>
      </div>
    </section>
  );
}

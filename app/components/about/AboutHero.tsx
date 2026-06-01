// app/components/about/AboutHero.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutHero.module.css";

const STATS = [
  { value: "2009", label: "Founded on the Sunshine Coast" },
  { value: "25+", label: "Years combined experience" },
  { value: "500+", label: "Buildings maintained" },
  { value: "30+", label: "IRATA-certified technicians" },
];

export default function AboutHero() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
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
            Get a free quote →
          </Link>
        </div>
      </div>

      <dl className={styles.stats}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <dt className={styles.statLabel}>{s.label}</dt>
            <dd className={styles.statValue}>{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.imageWrap}>
        <Image
          src="/images/projects/1.jpeg"
          alt="RAS-VERTEX team working on a Sunshine Coast high-rise building"
          fill
          className={styles.image}
          priority
          sizes="100vw"
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
        <div className={styles.imageBadge} aria-hidden="true">
          <span className={styles.badgeName}>RAS-VERTEX</span>
          <span className={styles.badgeLocation}>
            Sunshine Coast, QLD · Est. 2009
          </span>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./PaintingHero.module.css";

const pills = [
  "Exterior",
  "Interior",
  "Roof",
  "Strata",
  "Heritage",
  "Render",
  "Pre-Sale",
];

export default function PaintingHero() {
  return (
    <section className={styles.section}>
      {/* ── Full-bleed background ─────────────────────────── */}
      <div className={styles.bg}>
        <Image
          src="/nav/painting.png"
          alt="RAS-VERTEX rope access painter mid-paint on high-rise exterior"
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* ── Split content ─────────────────────────────────── */}
      <div className={styles.content}>
        {/* Left: the stat */}
        <div className={styles.left}>
          <div className={styles.statBlock}>
            <span className={styles.statNumber}>0</span>
            <span className={styles.statLabel}>
              Closure days
              <br />
              required.
            </span>
          </div>
        </div>

        {/* Right: headline + CTA */}
        <div className={styles.right}>
          <div className={styles.rightInner}>
            <p className={styles.eyebrow}>
              Commercial Painting · Sunshine Coast
            </p>
            <h1 className={styles.headline}>
              We paint buildings
              <br />
              others can&rsquo;t reach.
            </h1>
            <p className={styles.sub}>
              IRATA-certified rope access. No scaffolding. No blocked entrances.
              Your building stays open — your tenants never know we&rsquo;re
              there.
            </p>
            <Link href="/contact" className={styles.cta}>
              Get a free quote →
            </Link>
          </div>

          {/* Pills anchored to bottom-right */}
          <div className={styles.pillWrap}>
            {pills.map((pill) => (
              <span key={pill} className={styles.pill}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

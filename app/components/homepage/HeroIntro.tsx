// app/components/homepage/HomeHero.tsx

import Link from "next/link";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <header className={styles.hero} aria-labelledby="hero-heading">
      <p className={styles.eyebrow}>Sunshine Coast Property Maintenance</p>

      <div className={styles.intro}>
        <div className={styles.leftStack}>
          <h1 id="hero-heading" className={styles.headline}>
            Higher standards.
            <br />
            Every trade, one local
            <br />
            team.
          </h1>
          <p className={styles.lede}>
            Painting, cleaning, waterproofing, height safety and maintenance —
            for body corporate, strata and commercial buildings across the
            Coast. One project manager, start to finish.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.ratingBadge}>
            <svg
              className={styles.googleIcon}
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="var(--navy)"
              aria-hidden="true"
            >
              <path d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.97h3.86c2.26-2.09 3.56-5.17 3.56-8.79zM12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.71-2.44 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.27v3.06C3.24 21.3 7.26 24 12 24zM5.27 14.3c-.24-.71-.38-1.46-.38-2.3s.14-1.59.38-2.3V6.64H1.27A11.95 11.95 0 0 0 0 12c0 1.93.46 3.76 1.27 5.36l4-3.06zM12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.26 0 3.24 2.7 1.27 6.64l4 3.06C6.22 6.86 8.87 4.75 12 4.75z" />
            </svg>
            <span className={styles.ratingScore}>4.9</span>
            <div className={styles.stars} aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={styles.star}
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="var(--navy)"
                >
                  <path d="M12 2.5l2.97 6.02 6.64.97-4.8 4.68 1.13 6.6L12 17.6l-5.94 3.17 1.13-6.6-4.8-4.68 6.64-.97L12 2.5z" />
                </svg>
              ))}
            </div>
          </div>
          <span className={styles.ratingCaption}>
            Google rating · 50+ reviews
          </span>

          <Link
            href="/contact"
            className={styles.cta}
            aria-label="Let's talk about your project"
          >
            Let&rsquo;s talk about your project
            <svg
              className={styles.ctaArrow}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className={styles.videoWrap}>
        <video
          className={styles.video}
          src="/videos/racv.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="RAS-VERTEX project footage — RACV Noosa Resort"
        />
      </div>
    </header>
  );
}

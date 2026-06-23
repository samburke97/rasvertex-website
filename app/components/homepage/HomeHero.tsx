// app/components/homepage/HomeHero.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <header className={styles.surface} aria-labelledby="hero-heading">
      {/* ── LEFT — fully stacked, gap between header and CTA ── */}
      <div className={styles.left}>
        <h1 id="hero-heading">
          Trusted by the
          <br />
          Sunshine Coast&rsquo;s
          <br />
          best run buildings.
        </h1>

        <div className={styles.ctaStack}>
          <div className={styles.avatar} aria-hidden="true">
            <Image
              src="/images/people/caro.jpg"
              alt="Hylton Denton — Project Manager at RAS-VERTEX"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="100px"
            />
          </div>

          <h3>Ready to talk about your project?</h3>

          <p className="p-soft">
            Building projects can feel like a lot. Don&rsquo;t stress —
            we&rsquo;ve been doing this for 25 years. One call to Hylton and
            you&rsquo;ll know exactly where you stand.
          </p>

          <Link
            href="/contact"
            className={styles.ctaButton}
            aria-label="Talk to Hylton about your project"
          >
            Let&rsquo;s talk about your project →
          </Link>

          <div className={styles.ratingBadge}>
            <svg
              className={styles.googleIcon}
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="var(--navy)"
              aria-hidden="true"
            >
              <path d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.97h3.86c2.26-2.09 3.56-5.17 3.56-8.79zM12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.71-2.44 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.27v3.06C3.24 21.3 7.26 24 12 24zM5.27 14.3c-.24-.71-.38-1.46-.38-2.3s.14-1.59.38-2.3V6.64H1.27A11.95 11.95 0 0 0 0 12c0 1.93.46 3.76 1.27 5.36l4-3.06zM12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.26 0 3.24 2.7 1.27 6.64l4 3.06C6.22 6.86 8.87 4.75 12 4.75z" />
            </svg>
            <div className={styles.ratingText}>
              <span className={styles.ratingTitle}>Google Rating</span>
              <div className={styles.ratingScoreRow}>
                <span className={styles.ratingScore}>4.9</span>
                <div className={styles.stars} aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={styles.star}
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="var(--navy)"
                    >
                      <path d="M12 2.5l2.97 6.02 6.64.97-4.8 4.68 1.13 6.6L12 17.6l-5.94 3.17 1.13-6.6-4.8-4.68 6.64-.97L12 2.5z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className={styles.ratingCount}>Based on 50+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT — sticky video ── */}
      <div className={styles.right}>
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

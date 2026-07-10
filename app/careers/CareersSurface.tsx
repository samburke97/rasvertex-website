// app/careers/CareersSurface.tsx

import CareersForm from "./CareersForm";
import styles from "./CareersSurface.module.css";

const BENEFITS = [
  "IRATA-funded progression",
  "Consistent year-round work",
  "Modern equipment & systems",
  "Safety-first culture",
  "Long-term career pathways",
  "Sunshine Coast based",
];

export default function CareersSurface() {
  return (
    <div className={styles.card}>
      {/* ── Left info column ── */}
      <div className={styles.info}>
        <h1 className={styles.heading}>
          We hire good people for hard work in high places.
        </h1>
        <p className={styles.lede}>
          We&rsquo;re a business built around rope access, and we invest
          heavily in training, safety and long term career development for
          people who take their trade seriously. Every person on our crew is
          a direct employee, with no labour hire and no subbies.
        </p>

        <div className={styles.rating}>
          <svg
            className={styles.googleIcon}
            viewBox="0 0 24 24"
            width="28"
            height="28"
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
                    width="14"
                    height="14"
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

        {/* Benefits checklist */}
        <ul className={styles.benefits} aria-label="Why join RAS-VERTEX">
          {BENEFITS.map((b) => (
            <li key={b} className={styles.benefit}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className={styles.benefitIcon}
              >
                <path
                  d="M3 8.5l3.5 3.5 6.5-7"
                  stroke="var(--navy)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Middle form column ── */}
      <div className={styles.formCol}>
        <CareersForm />
      </div>

      {/* ── Right video column ── */}
      <div className={styles.videoCol}>
        <span className={styles.videoCaption}>RAS-VERTEX PROJECT FOOTAGE</span>
        <video
          className={styles.video}
          src="/videos/racv.mp4"
          controls
          playsInline
          aria-label="RAS-VERTEX project footage — RACV Noosa Resort"
        />
      </div>
    </div>
  );
}

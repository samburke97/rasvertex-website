// app/components/ui/Pagination.tsx

import styles from "./Pagination.module.css";

interface PaginationProps {
  count: number;
  active: number;
  onChange: (index: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  centered?: boolean;
}

const PrevArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11.5 6.5L8 10L11.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NextArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.5 6.5L12 10L8.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pagination({
  count,
  active,
  onChange,
  onPrev,
  onNext,
  centered = false,
}: PaginationProps) {
  const prev =
    onPrev ?? (() => onChange(active === 0 ? count - 1 : active - 1));
  const next =
    onNext ?? (() => onChange(active === count - 1 ? 0 : active + 1));

  if (centered) {
    return (
      <div className={styles.centeredRow}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous">
          <PrevArrow />
        </button>
        <div className={styles.dots}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => onChange(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Next">
          <NextArrow />
        </button>
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <div className={styles.arrows} role="group" aria-label="Navigation">
        <button className={styles.arrow} onClick={prev} aria-label="Previous">
          <PrevArrow />
        </button>
        <button className={styles.arrow} onClick={next} aria-label="Next">
          <NextArrow />
        </button>
      </div>

      <div className={styles.dots}>
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => onChange(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

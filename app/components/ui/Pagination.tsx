import styles from "./Pagination.module.css";

interface PaginationProps {
  count: number;
  active: number;
  onChange: (index: number) => void;
}

export default function Pagination({
  count,
  active,
  onChange,
}: PaginationProps) {
  return (
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
  );
}

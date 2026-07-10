// app/components/shared/Watermark.tsx

import styles from "./Watermark.module.css";

interface WatermarkProps {
  text?: string;
  className?: string;
}

export default function Watermark({
  text = "HIGHER STANDARDS.",
  className = "",
}: WatermarkProps) {
  return (
    <div className={`${styles.watermark} ${className}`} aria-hidden="true">
      <span className={styles.watermarkText}>{text}</span>
    </div>
  );
}

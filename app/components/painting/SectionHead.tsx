"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./SectionHead.module.css";

interface SectionHeadProps {
  base: string;
  overlay: string;
  sr: string;
  children: ReactNode;
  /** Use on cream/navy backgrounds — slightly darker border */
  muted?: boolean;
}

export default function SectionHead({
  base,
  overlay,
  sr,
  children,
  muted = false,
}: SectionHeadProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ov = el.querySelector<HTMLElement>(`.${styles.overlay}`);
    if (!ov) return;

    const update = () => {
      const vh = window.innerHeight;
      const { top } = el.getBoundingClientRect();
      const start = vh * 0.85,
        end = vh * 0.35;
      const p =
        top >= start ? 0 : top <= end ? 1 : (start - top) / (start - end);
      ov.style.clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={`${styles.bar} ${muted ? styles.muted : ""}`}>
      <div className={styles.wrap} ref={wrapRef}>
        <span className={styles.base} aria-hidden="true">
          {base}
        </span>
        <span className={styles.overlay} aria-hidden="true">
          {overlay}
        </span>
        <span className={styles.sr}>{sr}</span>
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
}

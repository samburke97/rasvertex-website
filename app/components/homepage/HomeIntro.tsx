"use client";

import { useRef, useEffect } from "react";
import styles from "./HomeIntro.module.css";
import Link from "next/link";

export default function HomeIntro() {
  const overlayRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const wrap = wrapRef.current;
    if (!overlay || !wrap) return;

    const docTop = window.scrollY + wrap.getBoundingClientRect().top;
    const scrollStart = docTop - window.innerHeight * 0.8;
    const scrollEnd = docTop - window.innerHeight * 0.2;

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= scrollStart) {
        overlay.style.clipPath = "inset(0 100% 0 0)";
        return;
      }
      if (scrollY >= scrollEnd) {
        overlay.style.clipPath = "inset(0 0% 0 0)";
        return;
      }
      const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      overlay.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
    };

    overlay.style.clipPath = "inset(0 100% 0 0)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={styles.left}>
        <div className={styles.headlineWrap}>
          <span className={styles.headlineBase} aria-hidden="true">
            HIGHER STANDARDS.
          </span>
          <span
            ref={overlayRef}
            className={styles.headlineOverlay}
            aria-hidden="true"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            HIGHER STANDARDS.
          </span>
          <span className={styles.headlineSr}>Higher Standards.</span>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.body}>
          For 25 years, we've serviced the Sunshine Coast, dropping in on the
          buildings our neighbours live, learn and work in.
        </p>
        <Link href="/contact" className={styles.cta}>
          Talk to our team →
        </Link>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import SectionHead from "./SectionHead";
import styles from "./BeforeAfter.module.css";

const DATA = {
  beforeSrc: "/assets/project-1.jpeg",
  afterSrc: "/assets/project-2.jpeg",
  fileId: "PT-2024-014",
  site: "COOLUM RESORT",
  daysOnSite: "21",
  beforeLabel: "Before · Day 0",
  afterLabel: "After · Day 21",
};

export default function BeforeAfter() {
  const stageRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const gripRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setPct = useCallback((p: number) => {
    const pct = Math.max(2, Math.min(98, p));
    if (afterRef.current)
      afterRef.current.style.clipPath = `inset(0 0 0 ${pct}%)`;
    if (handleRef.current) handleRef.current.style.left = `${pct}%`;
    if (gripRef.current) gripRef.current.style.left = `${pct}%`;
  }, []);

  useEffect(() => {
    setPct(50);
    const stage = stageRef.current;
    if (!stage) return;
    const getX = (e: MouseEvent | TouchEvent) =>
      "clientX" in e ? e.clientX : e.touches[0].clientX;
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      setPct(
        ((getX(e) - stage.getBoundingClientRect().left) / stage.offsetWidth) *
          100,
      );
    };
    const onStart = (e: MouseEvent | TouchEvent) => {
      dragging.current = true;
      e.preventDefault();
      onMove(e);
    };
    const onEnd = () => {
      dragging.current = false;
    };

    stage.addEventListener("mousedown", onStart as EventListener, {
      passive: false,
    });
    stage.addEventListener("touchstart", onStart as EventListener, {
      passive: false,
    });
    window.addEventListener("mousemove", onMove as EventListener, {
      passive: false,
    });
    window.addEventListener("touchmove", onMove as EventListener, {
      passive: false,
    });
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);
    return () => {
      stage.removeEventListener("mousedown", onStart as EventListener);
      stage.removeEventListener("touchstart", onStart as EventListener);
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchend", onEnd);
    };
  }, [setPct]);

  return (
    <section className={styles.section}>
      <SectionHead
        base="BEFORE, AFTER."
        overlay="BEFORE, AFTER."
        sr="Before, after."
      >
        <span className={styles.eyebrow}>Measured proof</span>
        <div className={styles.meta}>
          <span>
            FILE <span className={styles.metaV}>{DATA.fileId}</span>
          </span>
          <span>{DATA.site}</span>
          <span>{DATA.daysOnSite} DAYS ON SITE</span>
        </div>
      </SectionHead>

      <div className={styles.stage} ref={stageRef}>
        <div className={styles.imgWrap}>
          <Image
            src={DATA.beforeSrc}
            alt="Before"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={styles.imgWrap}
          ref={afterRef}
          style={{ clipPath: "inset(0 0 0 50%)" }}
        >
          <Image
            src={DATA.afterSrc}
            alt="After"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={`${styles.label} ${styles.labelBefore}`}>
          {DATA.beforeLabel}
        </div>
        <div className={`${styles.label} ${styles.labelAfter}`}>
          {DATA.afterLabel}
        </div>
        <div className={styles.handle} ref={handleRef} aria-hidden="true" />
        <div className={styles.grip} ref={gripRef} aria-hidden="true" />
      </div>
    </section>
  );
}

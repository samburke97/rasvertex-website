"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ExperienceSection.module.css";

const tabs = [
  {
    id: "every-challenge",
    number: "01",
    label: "Every Challenge",
    headline: "One Partner. Multiple Trades.",
    body: "From rope access and height safety to painting, waterproofing, cleaning, and remedial maintenance, RAS-VERTEX delivers integrated property services through one experienced in-house team.\n\nBy managing multiple trades under one partner, we simplify communication, reduce contractor overlap, and deliver more efficient project outcomes.",
    image: "/nav/painting.png",
    imageAlt: "Multi-trade team on commercial project",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
    ],
  },
  {
    id: "built-for-height",
    number: "02",
    label: "Built For Height",
    headline: "Specialists in\nDifficult Access.",
    body: "With 30+ trained technicians and IRATA-certified systems, RAS-VERTEX safely delivers work in environments where scaffolding and traditional access methods become costly, disruptive, or impractical.\n\nOur rope access capability allows faster mobilisation, reduced site impact, and safer outcomes across high-rise and difficult-access projects.",
    image: "/nav/cleaning.png",
    imageAlt: "Rope access technicians on high-rise exterior",
    logos: [
      { src: "/images/associations/qbcc.png", alt: "QBCC" },
      {
        src: "/images/associations/communityselect.png",
        alt: "Community Select",
      },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
      { src: "/images/associations/haymes.svg", alt: "Haymes" },
      { src: "/images/associations/mpa.png", alt: "MPA" },
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
    ],
  },
  {
    id: "trusted-to-deliver",
    number: "03",
    label: "Trusted To Deliver",
    headline: "Trusted Across\nthe Sunshine Coast.",
    body: "Trusted by body corporates, resorts, schools, and commercial facilities across the Sunshine Coast to deliver projects with professionalism, clear communication, and minimal disruption.\n\nFrom tendering through to completion, our team works proactively to keep projects running smoothly for residents, guests, and stakeholders.",
    image: "/nav/maintenance.png",
    imageAlt: "Completed commercial building facade",
    logos: [
      { src: "/partners/accor.svg", alt: "Accor" },
      { src: "/partners/archers.png", alt: "Archers" },
      { src: "/partners/coolum.png", alt: "Coolum" },
      { src: "/partners/gov.svg", alt: "Government" },
      { src: "/partners/maroochy.png", alt: "Maroochy" },
      { src: "/partners/mosaic.svg", alt: "Mosaic" },
      { src: "/partners/novotel.svg.png", alt: "Novotel" },
      { src: "/partners/pica.png", alt: "Pica" },
      { src: "/partners/racv.png", alt: "RACV" },
      { src: "/partners/raywhite.png", alt: "Ray White" },
      { src: "/partners/trafalgar.svg", alt: "Trafalgar" },
    ],
  },
  {
    id: "local-partners",
    number: "04",
    label: "Local Partners",
    headline: "Built for\nLocal Conditions.",
    body: "Based on the Sunshine Coast, RAS-VERTEX understands the unique demands of coastal properties — from salt exposure and waterproofing to long-term preventative maintenance.\n\nWe partner with clients to help protect assets, extend building life, and maintain presentation year-round.",
    image: "/images/projects/1.jpeg",
    imageAlt: "Sunshine Coast project",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];
const tabIds = tabs.map((t) => t.id);

export default function ExperienceSection() {
  const [active, setActive] = useState<TabId>("every-challenge");
  const overlayRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const currentIndex = tabIds.indexOf(active);
  const current = tabs[currentIndex];

  // Scroll wipe effect
  useEffect(() => {
    const overlay = overlayRef.current;
    const bar = barRef.current;
    if (!overlay || !bar) return;

    const vh = window.innerHeight;
    const barDocTop = window.scrollY + bar.getBoundingClientRect().top;
    const scrollStart = barDocTop - vh * 0.8;
    const scrollEnd = barDocTop - vh * 0.3;

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
    <section className={styles.section}>
      {/* ── Top bar: HIGHER STANDARDS + tabs ─────────────────── */}
      <div className={styles.bar} ref={barRef}>
        <div className={styles.barGrid}>
          <div className={styles.barHeadline}>
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
              <span className={styles.headlineSr}>HIGHER STANDARDS.</span>
            </div>
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${active === tab.id ? styles.tabActive : ""}`}
              onClick={() => setActive(tab.id)}
            >
              <span className={styles.tabLine} />
              <span className={styles.tabNumber}>{tab.number}</span>
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Content wrapper ───────────────────────────────── */}
      <div className={styles.contentWrapper}>
        {/* Left column — animated content only */}
        <div className={styles.leftColumn}>
          <div className={styles.contentLeft} key={active}>
            <h3 className={styles.contentHeadline}>
              {current.headline.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h3>
            {current.body.split("\n\n").map((para, i) => (
              <p key={i} className={styles.body}>
                {para}
              </p>
            ))}

            {"logos" in current && current.logos && (
              <div className={styles.logoRow}>
                {current.logos.map((logo) => (
                  <div key={logo.alt} className={styles.logoWrap}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className={styles.logo}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right — image card */}
        <div className={styles.contentRight}>
          <div className={styles.imageCard}>
            <Image
              key={active}
              src={current.image}
              alt={current.imageAlt}
              fill
              className={styles.image}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Dots — anchored to contentWrapper bottom, aligned with left padding */}
        <div className={styles.dots}>
          {tabIds.map((id, i) => (
            <button
              key={id}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
              onClick={() => setActive(id)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeIntro.module.css";

const CARDS = [
  {
    image: "/images/projects/1.jpeg",
    imageAlt: "25 years on the Sunshine Coast",
    heading: "25 years on the Coast.",
    body: "We started here before half the foreshore developments were built. Same postcode, same salt air, same substrate conditions — every system we spec is chosen for this environment, not borrowed from a Brisbane job sheet.",
    logos: [
      { src: "/images/associations/haymes.svg", alt: "Haymes Paint" },
      { src: "/images/associations/dulux.png", alt: "Dulux" },
      { src: "/images/associations/smartstrata.png", alt: "Smart Strata" },
    ],
    imageLeft: true,
  },
  {
    image: "/nav/painting.png",
    imageAlt: "One partner, every challenge",
    heading: "One partner. Every challenge.",
    body: "Every person on your site is a direct RAS-VERTEX employee. One dedicated project manager runs your job from site visit to sign-off — one number, one thread, weekly photo updates, no handoffs, no subbies turning up unannounced.",
    logos: [],
    imageLeft: false,
  },
  {
    image: "/nav/cleaning.png",
    imageAlt: "Rope access technicians on high-rise",
    heading: "We go where others can't.",
    body: "30+ IRATA-certified rope access technicians trained in-house to L1–L3. We reach what scaffold can't — faster, with less disruption to tenants and operations, and at a fraction of the cost.",
    logos: [],
    imageLeft: true,
  },
];

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
      {/* ── Header ── */}
      <div className={styles.header}>
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
        <div className={styles.headerRight}>
          <p className={styles.body}>
            For 25 years, we've serviced the Sunshine Coast, dropping in on the
            buildings our neighbours live, learn and work in.
          </p>
          <Link href="/contact" className={styles.cta}>
            Talk to our team →
          </Link>
        </div>
      </div>

      {/* ── Stacked cards ── */}
      <div className={styles.cards}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={`${styles.card} ${card.imageLeft ? styles.cardImageLeft : styles.cardImageRight}`}
          >
            <div className={styles.cardImage}>
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className={styles.cardImg}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.cardHeading}>{card.heading}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              {card.logos.length > 0 && (
                <div className={styles.cardLogos}>
                  {card.logos.map((l) => (
                    <div key={l.alt} className={styles.cardLogoWrap}>
                      <Image
                        src={l.src}
                        alt={l.alt}
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "left center",
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Contact strip ── */}
      <div className={styles.strip}>
        <div className={styles.stripLeft}>
          <span className={styles.stripEyebrow}>Your project lead</span>
          <p className={styles.stripHeading}>
            Want to talk it through before you commit?
          </p>
        </div>
        <div className={styles.stripRight}>
          <div className={styles.stripAvatar}>
            <Image
              src="/images/people/caro.jpg"
              alt="Hylton"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className={styles.stripName}>HYLTON, OPERATIONS</span>
          <Link href="/contact" className={styles.stripCta}>
            Talk to Hylton →
          </Link>
        </div>
      </div>
    </div>
  );
}

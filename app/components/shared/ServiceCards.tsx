// app/components/shared/ServiceCards.tsx

"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import styles from "./ServiceCards.module.css";

export interface ServiceCard {
  photo: string;
  alt: string;
  title: string;
  tabLabel?: string;
  body: string;
  cta?: string;
  href?: string;
  objectPosition?: string;
}

interface ServiceCardsProps {
  cards: ServiceCard[];
  heading?: ReactNode;
  ariaLabel?: string;
  variant?: "burgundy" | "blue" | "white";
  embedded?: boolean;
  footerCtaLabel?: string;
  footerCtaHref?: string;
  /** "grid" (default) renders a static card grid; "tabs" renders a pill-tab selector with a single detail pane; "list" renders a sticky-heading left column with the same photo/tag/cta cards stacked on the right */
  display?: "grid" | "tabs" | "list";
  /** Small tracked label above the heading in "list" mode */
  eyebrow?: string;
}

export default function ServiceCards({
  cards,
  heading = "Who we work for.",
  ariaLabel = "Who we work for",
  variant = "white",
  embedded = false,
  footerCtaLabel,
  footerCtaHref,
  display = "grid",
  eyebrow = "Why us",
}: ServiceCardsProps) {
  const Wrapper = embedded ? "div" : "section";
  const [activeIdx, setActiveIdx] = useState(0);
  const variantClass =
    variant === "burgundy"
      ? styles.burgundy
      : variant === "blue"
        ? styles.blue
        : variant === "white"
          ? styles.white
          : "";

  if (display === "list") {
    return (
      <Wrapper aria-label={embedded ? undefined : ariaLabel}>
        <div className={styles.listRow}>
          <div className={styles.listLeft}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            <h2>{heading}</h2>
            {footerCtaLabel && footerCtaHref && (
              <Button as="link" href={footerCtaHref} variant="primary">
                {footerCtaLabel
                  .slice(0, footerCtaLabel.lastIndexOf("→"))
                  .trimEnd()}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            )}
          </div>

          <ol className={styles.listItems} aria-label={ariaLabel}>
            {cards.map((c) => (
              <li key={c.title} className={`${styles.item} ${styles.listItemCard}`}>
                <div className={styles.photo}>
                  <Image
                    src={c.photo}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 860px) 100vw, 60vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: c.objectPosition ?? "center",
                    }}
                  />
                  <div className={styles.photoTag}>
                    <h3 className={styles.photoTagTitle}>{c.title}</h3>
                  </div>
                </div>
                <div className={styles.content}>
                  <p className="p-soft">{c.body}</p>
                  {c.cta && c.href && (
                    <Link
                      href={c.href}
                      className={styles.cta}
                      aria-label={`${c.cta} — ${c.title}`}
                    >
                      {c.cta}
                      <svg
                        className={styles.ctaArrow}
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Wrapper>
    );
  }

  if (display === "tabs") {
    const active = cards[activeIdx];

    return (
      <Wrapper aria-label={embedded ? undefined : ariaLabel}>
        <div className={`${styles.card} ${variantClass}`}>
          <h2>{heading}</h2>

          <div className={styles.tabRow} role="tablist" aria-label={ariaLabel}>
            {cards.map((c, i) => (
              <button
                key={c.title}
                type="button"
                role="tab"
                aria-selected={i === activeIdx}
                className={`${styles.tab} ${i === activeIdx ? styles.tabActive : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                {c.tabLabel ?? c.title.replace(/\.$/, "")}
              </button>
            ))}
          </div>

          <div className={styles.pane}>
            <div className={styles.panePhoto}>
              <Image
                src={active.photo}
                alt={active.alt}
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
                style={{
                  objectFit: "cover",
                  objectPosition: active.objectPosition ?? "center",
                }}
              />
            </div>
            <div className={styles.paneContent}>
              <h3>{active.title}</h3>
              <p className="p-soft">{active.body}</p>
              {active.cta && active.href && (
                <Link
                  href={active.href}
                  className={styles.cta}
                  aria-label={`${active.cta} — ${active.title}`}
                >
                  {active.cta}
                  <svg
                    className={styles.ctaArrow}
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper aria-label={embedded ? undefined : ariaLabel}>
      <div className={`${styles.card} ${variantClass}`}>
        <h2 className={styles.gridHeading}>{heading}</h2>
        <div className={styles.grid} role="list">
          {cards.map((c) => (
            <div key={c.title} className={styles.item} role="listitem">
              <div className={styles.photo}>
                <Image
                  src={c.photo}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: c.objectPosition ?? "center",
                  }}
                />
                <div className={styles.photoTag}>
                  <h3 className={styles.photoTagTitle}>{c.title}</h3>
                </div>
              </div>
              <div className={styles.content}>
                <p className="p-soft">{c.body}</p>
                {c.cta && c.href && (
                  <Link
                    href={c.href}
                    className={styles.cta}
                    aria-label={`${c.cta} — ${c.title}`}
                  >
                    {c.cta}
                    <svg
                      className={styles.ctaArrow}
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {footerCtaLabel && footerCtaHref && (
          <div className={styles.footer}>
            <Link href={footerCtaHref} className={styles.footerCta}>
              {footerCtaLabel
                .slice(0, footerCtaLabel.lastIndexOf("→"))
                .trimEnd()}
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

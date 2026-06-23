// app/components/shared/ServiceCards.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCards.module.css";

export interface ServiceCard {
  photo: string;
  alt: string;
  title: string;
  body: string;
  cta?: string;
  href?: string;
}

interface ServiceCardsProps {
  cards: ServiceCard[];
  heading?: string;
  ariaLabel?: string;
  variant?: "cream" | "burgundy";
  embedded?: boolean;
  footerCtaLabel?: string;
  footerCtaHref?: string;
}

export default function ServiceCards({
  cards,
  heading = "Who we work for.",
  ariaLabel = "Who we work for",
  variant = "cream",
  embedded = false,
  footerCtaLabel,
  footerCtaHref,
}: ServiceCardsProps) {
  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper
      className={`${styles.wrap} ${embedded ? styles.embedded : ""}`}
      aria-label={embedded ? undefined : ariaLabel}
    >
      <div
        className={`${styles.card} ${variant === "burgundy" ? styles.burgundy : ""}`}
      >
        <h2>{heading}</h2>
        <div className={styles.grid} role="list">
          {cards.map((c) => (
            <article key={c.title} className={styles.item} role="listitem">
              <div className={styles.photo}>
                <Image
                  src={c.photo}
                  alt={c.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 860px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <h3>{c.title}</h3>
                <p className="p-soft">{c.body}</p>
                {c.cta && c.href && (
                  <Link
                    href={c.href}
                    className={styles.cta}
                    aria-label={`${c.cta} — ${c.title}`}
                  >
                    {c.cta} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {footerCtaLabel && footerCtaHref && (
          <div className={styles.footer}>
            <Link href={footerCtaHref} className={styles.footerCta}>
              {footerCtaLabel}
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

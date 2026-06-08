// app/components/shared/ServiceCards.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCards.module.css";

export interface ServiceCard {
  photo: string;
  alt: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

interface ServiceCardsProps {
  cards: ServiceCard[];
  heading?: string;
  ariaLabel?: string;
}

export default function ServiceCards({
  cards,
  heading = "Who we work for.",
  ariaLabel = "Who we work for",
}: ServiceCardsProps) {
  return (
    <section className={styles.wrap} aria-label={ariaLabel}>
      <div className={styles.card}>
        <h2 className={styles.heading}>{heading}</h2>
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
                <Link
                  href={c.href}
                  className={styles.cta}
                  aria-label={`${c.cta} — ${c.title}`}
                >
                  {c.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

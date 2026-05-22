import Image from "next/image";
import Link from "next/link";
import styles from "./PageCards.module.css";

export interface PageCard {
  photo: string;
  alt?: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

interface PageCardsProps {
  cards: PageCard[];
}

export default function PageCards({ cards }: PageCardsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {cards.map((c) => (
          <div key={c.title} className={styles.card}>
            <div className={styles.photo}>
              <Image
                src={c.photo}
                alt={c.alt ?? c.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="33vw"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.body}>{c.body}</p>
              <Link href={c.href} className={styles.cta}>
                {c.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

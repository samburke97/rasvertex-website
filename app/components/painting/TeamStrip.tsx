// app/components/painting/TeamStrip.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./TeamStrip.module.css";

const CARDS = [
  {
    photo: "/images/projects/1.jpeg",
    title: "Your home deserves better than a rushed quote.",
    body: "We've been painting homes on the Sunshine Coast for 25 years — and we still treat every one like it's our own. You'll meet your project manager before a brush touches anything. They'll walk the job, explain what we're using and why, and be on the other end of the phone until you're happy.",
    cta: "Get a quote →",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    title: "We work around your business, not the other way.",
    body: "We know a closed shopfront or disrupted tenant costs you money. That's why we schedule around you — after hours, weekends, whatever it takes. QBCC licensed, $20M liability, and one project manager who actually picks up the phone.",
    cta: "See our process →",
    href: "/process",
  },
  {
    photo: "/images/projects/rope-access.png",
    title: "Body corporate & strata done right — the first time.",
    body: "Clear communication before the work starts, no surprises for residents, and a finished result the whole building is proud of. We handle the scheduling, the access, the documentation — and back every job with a five-year written warranty.",
    cta: "Learn more →",
    href: "/contact",
  },
];

export default function TeamStrip() {
  return (
    <section
      className={styles.section}
      aria-label="Why choose RAS-VERTEX for painting"
    >
      <div className={styles.grid}>
        {CARDS.map((c) => (
          <article key={c.title} className={styles.card}>
            <div className={styles.photo}>
              <Image
                src={c.photo}
                alt={c.title}
                fill
                className={styles.image}
                sizes="(max-width: 860px) 100vw, 33vw"
              />
            </div>
            <div className={styles.content}>
              <h3>{c.title}</h3>
              <p className="p-soft">{c.body}</p>
              <Link href={c.href} className={styles.cta}>
                {c.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

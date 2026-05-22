import Image from "next/image";
import Link from "next/link";
import styles from "./TeamStrip.module.css";

const CARDS = [
  {
    photo: "/images/projects/1.jpeg",
    title: "Your home deserves better than a rushed quote.",
    body: "We've been painting homes on the Sunshine Coast for 25 years — and we still treat every one like it's our own. You'll meet your project manager before a brush touches anything. They'll walk the job, explain what we're using and why, and be on the other end of the phone until you're happy. No strangers on your property. No surprises on the invoice.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    photo: "/images/projects/2.jpeg",
    title: "We work around your business, not the other way.",
    body: "We know a closed shopfront or disrupted tenant costs you money. That's why we schedule around you — after hours, weekends, whatever it takes. Our crew are locals too, so when we say we'll be there Tuesday morning, we mean it. QBCC licensed, $20M liability, and one project manager who actually picks up the phone.",
    cta: "See our process",
    href: "/process",
  },
  {
    photo: "/images/projects/1.jpeg",
    title: "Body corporate & strata done right — the first time.",
    body: "We've worked with enough committees to know what matters: clear communication before the work starts, no surprises for residents, and a finished result the whole building is proud of. We handle the scheduling, the access, the documentation — and we back every job with a five-year written warranty lodged in your ROCO portal.",
    cta: "Learn more",
    href: "/contact",
  },
];

export default function TeamStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {CARDS.map((c) => (
          <div key={c.title} className={styles.card}>
            <div className={styles.photo}>
              <Image src={c.photo} alt={c.title} fill style={{ objectFit: "cover" }} sizes="33vw" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.body}>{c.body}</p>
              <Link href={c.href} className={styles.cta}>{c.cta}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

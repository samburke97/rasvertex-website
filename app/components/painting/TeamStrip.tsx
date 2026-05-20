import Image from "next/image";
import Link from "next/link";
import styles from "./TeamStrip.module.css";

const CARDS = [
  {
    photo: "/images/projects/1.jpeg",
    title: "We show up. Every time.",
    body: "No ghost quotes, no subcontractors you've never met. Our project manager is on your site from day one — and they're reachable on a single number until the job is signed off.",
    cta: "Meet the team",
    href: "/about",
  },
  {
    photo: "/images/projects/2.jpeg",
    title: "Built for coastal conditions.",
    body: "Salt, UV, humidity — we've been painting Sunshine Coast buildings for 25 years. Every system we spec is chosen for your substrate and your exposure. No generic solutions.",
    cta: "See our process",
    href: "/process",
  },
  {
    photo: "/assets/higher.png",
    title: "Warranty you can actually use.",
    body: "Five-year workmanship warranty issued in writing at handover and lodged in your ROCO portal. Backed by up to 15-year manufacturer coverage on the coating systems we use.",
    cta: "Get a quote",
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
              <Image
                src={c.photo}
                alt={c.title}
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

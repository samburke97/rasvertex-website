// app/components/homepage/PartnerSection.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./PartnersSection.module.css";

const CARDS = [
  {
    image: "/images/projects/1.jpeg",
    imageAlt: "25 years painting buildings on the Sunshine Coast",
    heading: "25 years on the Coast.",
    body: "We started here before half the foreshore developments were built. Same postcode, same salt air, same substrate conditions — every system we spec is chosen for this environment, not borrowed from a Brisbane job sheet.",
  },
  {
    image: "/nav/painting.png",
    imageAlt: "RAS-VERTEX project manager on a Sunshine Coast job site",
    heading: "One partner. Every challenge.",
    body: "Every person on your site is a direct RAS-VERTEX employee. One dedicated project manager runs your job from site visit to sign-off — one number, one thread, weekly photo updates, no handoffs, no subbies turning up unannounced.",
  },
  {
    image: "/nav/maintenance.png",
    imageAlt: "Dedicated building maintenance team on the Sunshine Coast",
    heading: "One team for your entire building.",
    body: "Painting, cleaning, waterproofing, height safety, remedial repairs — one dedicated team across every trade, every floor, every quarter. We've been doing this for 25 years because property managers don't want five contractors. They want one partner who actually knows the building.",
  },
];

export default function PartnerSection() {
  return (
    <section className={styles.section} aria-labelledby="partner-heading">
      {/* ── Header: h2 left, body right ── */}
      <header className={styles.header}>
        <h2 id="partner-heading">Your partner on the Coast.</h2>
        <p>
          Every person on your site is a direct RAS-VERTEX employee — no
          subbies, no labour hire. One dedicated project manager runs your job
          from first call to sign-off, with weekly photo updates and a single
          thread to keep everything on track. We service body corporates,
          commercial properties, and homes from Noosa to Caloundra.
        </p>
      </header>

      <div className={styles.rule} aria-hidden="true" />

      {/* ── Cards ── */}
      <ul
        className={styles.grid}
        role="list"
        aria-label="Why choose RAS-VERTEX"
      >
        {CARDS.map((c) => (
          <li key={c.heading} className={styles.card}>
            <div className={styles.photo}>
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 860px) 100vw, 33vw"
              />
            </div>
            <div className={styles.content}>
              <h3>{c.heading}</h3>
              <p>{c.body}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <Link href="/company" className={styles.textLink}>
          More about our team →
        </Link>
        <Link
          href="/contact"
          className={styles.cta}
          aria-label="Get a free quote from RAS-VERTEX"
        >
          Get a free quote →
        </Link>
      </div>
    </section>
  );
}

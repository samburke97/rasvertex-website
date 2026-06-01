// app/components/about/AboutServices.tsx
// Stacked service cards: image → h3 → para → pills → link
// Left col: sticky h2 + lede + CTA. Right col: scrolling card list.

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutServices.module.css";

const SERVICES = [
  {
    title: "Painting",
    body: "Exterior and interior painting for body corporates, strata buildings, commercial properties, and residential homes across the Sunshine Coast. QBCC licensed, 5-year written warranty, one project manager from quote to sign-off.",
    href: "/painting",
    image: "/images/projects/2.jpeg",
    imageAlt: "Commercial building repaint by RAS-VERTEX — Sunshine Coast",
    tags: ["Body Corporate", "Strata", "Commercial", "Residential"],
  },
  {
    title: "Building & Window Cleaning",
    body: "High-access facade washing and window cleaning for multi-storey buildings using rope access. No scaffold, no disruption to tenants. Faster and cheaper for buildings above four storeys.",
    href: "/cleaning",
    image: "/nav/maintenance.png",
    imageAlt: "High-access building and window cleaning — Sunshine Coast",
    tags: ["High-Rise", "Body Corporate", "Commercial", "Hotels"],
  },
  {
    title: "Waterproofing",
    body: "Balcony membrane replacement, roof membrane restoration, and leak detection across the Sunshine Coast. We diagnose and fix the source — not just the symptom.",
    href: "/waterproofing",
    image: "/nav/waterproofing.png",
    imageAlt: "Waterproofing membrane restoration — Sunshine Coast balconies",
    tags: ["Strata", "Body Corporate", "Commercial", "Residential"],
  },
  {
    title: "Height Safety",
    body: "AS/NZS 1891 compliant anchor point installation, certification, and annual inspection. Roof access systems designed, installed, and certified by our in-house team.",
    href: "/height-safety",
    image: "/nav/height.png",
    imageAlt: "Height safety anchor point installation — Sunshine Coast",
    tags: ["Commercial", "Strata", "Industrial", "Government"],
  },
  {
    title: "Building Maintenance",
    body: "Ongoing maintenance programs for body corporates and commercial property managers. Concrete repairs, sealant programs, facade inspections, roof restoration, and remedial works — fully documented.",
    href: "/maintenance",
    image: "/images/projects/rope-access.png",
    imageAlt: "Ongoing building maintenance — Sunshine Coast body corporate",
    tags: ["Body Corporate", "Commercial", "Strata", "Industrial"],
  },
  {
    title: "Rope Access",
    body: "30+ IRATA-certified technicians from Level 1 to Level 3 — all direct employees. The fastest, least disruptive way to access high and difficult-to-reach areas for any trade on any building.",
    href: "/rope-access",
    image: "/images/projects/1.jpeg",
    imageAlt: "IRATA-certified rope access technicians — Sunshine Coast",
    tags: ["All building types", "High-Rise", "Industrial", "Infrastructure"],
  },
];

export default function AboutServices() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.inner}>
        {/* ── Left: sticky title ── */}
        <div className={styles.left}>
          <div className={styles.sticky}>
            <h2 id="services-heading">
              Everything your building needs.
              <br />
              One team.
            </h2>
            <p className="p-soft">
              Six services. One project manager. One invoice. We handle every
              aspect of external building maintenance so you don&rsquo;t have to
              coordinate three separate contractors.
            </p>
            <Link href="/contact" className={styles.cta}>
              Get a free quote →
            </Link>
          </div>
        </div>

        {/* ── Right: stacked service cards ── */}
        <div className={styles.right}>
          {SERVICES.map((s) => (
            <article key={s.title} className={styles.card} aria-label={s.title}>
              {/* Image — full width, tall */}
              <div className={styles.imageWrap}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>

              {/* Text block */}
              <div className={styles.cardBody}>
                <h3>{s.title}</h3>
                <p className="p-soft">{s.body}</p>

                {/* Property type pills */}
                <ul className={styles.tags} aria-label="Property types served">
                  {s.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href={s.href}
                  className={styles.link}
                  aria-label={`Learn more about our ${s.title} services`}
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

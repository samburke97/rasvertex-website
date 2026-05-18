import Image from "next/image";
import styles from "./FeaturedProject.module.css";

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FEATURED = {
  id: "PT-2025-039",
  img: "/assets/higher.png",
  photoTag: "Rope access · 14 storeys · staged",
  h: `Mooloolaba Towers, <span class="it">full</span> repaint.`,
  quote:
    "\u201cThree faces, fourteen storeys, residents in occupancy. RAS-VERTEX ran the whole job on rope access — finished a week early and the committee never had to chase a single update.\u201d",
  specs: [
    { l: "Scope", v: "14 stry · 3 faces" },
    { l: "Duration", v: "8 weeks" },
    { l: "System", v: "Dulux WS" },
    { l: "Crew", v: "6 · IRATA" },
  ],
  ctaHref: "#",
};

export default function FeaturedProject() {
  return (
    <section className={styles.section}>
      <article className={styles.card}>
        <div className={styles.top}>
          <span className={styles.eyebrow}>Recent · Featured Project</span>
          <span className={styles.topId}>FILE № {FEATURED.id}</span>
        </div>
        <div className={styles.grid}>
          <div className={styles.photo}>
            <Image
              src={FEATURED.img}
              alt="Featured project"
              fill
              style={{ objectFit: "cover" }}
            />
            <span className={styles.photoTag}>{FEATURED.photoTag}</span>
          </div>
          <div className={styles.content}>
            <h3
              className={styles.heading}
              dangerouslySetInnerHTML={{ __html: FEATURED.h }}
            />
            <blockquote className={styles.quote}>{FEATURED.quote}</blockquote>
            <div className={styles.specs}>
              {FEATURED.specs.map(({ l, v }) => (
                <div className={styles.spec} key={l}>
                  <span className={styles.specL}>{l}</span>
                  <span className={styles.specV}>{v}</span>
                </div>
              ))}
            </div>
            <a href={FEATURED.ctaHref} className={styles.cta}>
              Read the full case study <Arrow />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

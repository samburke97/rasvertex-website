import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

type CardData = {
  title: string;
  cls: string;
  image?: string;
  video?: string;
  href: string;
};

const cards: CardData[] = [
  {
    title: "PAINTING",
    cls: "painting",
    video: "/videos/painting.mp4",
    href: "/services/painting",
  },
  {
    title: "MAINTENANCE",
    cls: "maintenance",
    image: "/nav/maintenance.png",
    href: "/services/maintenance",
  },
  {
    title: "CLEANING",
    cls: "cleaning",
    video: "/videos/cleaning.mp4",
    href: "/services/cleaning",
  },
  {
    title: "HEIGHT SAFETY",
    cls: "heightSafety",
    image: "/nav/height.png",
    href: "/services/height-safety",
  },
  {
    title: "WATERPROOFING",
    cls: "waterproofing",
    image: "/nav/waterproofing.png",
    href: "/services/waterproofing",
  },
];

const ArrowIcon = () => (
  <div className={styles.arrowIcon}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default function Hero() {
  return (
    <section className={styles.section} data-nav-fixed="true">
      <div className={styles.stage}>
        <div className={styles.bentoGrid}>
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`${styles.card} ${styles[card.cls]}`}
            >
              <div className={styles.imageWrap}>
                {card.video ? (
                  <video
                    src={card.video}
                    className={styles.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={card.image!}
                    alt={card.title}
                    fill
                    className={styles.image}
                  />
                )}
              </div>
              <div className={styles.overlay} />
              <ArrowIcon />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{card.title}</p>
              </div>
            </Link>
          ))}

          {/* Hero heading tile — bottom right, col 4 row 2 */}
          <div className={styles.heroTile}>
            <h2 className={styles.heroTitle}>Higher Standards</h2>
            <p className={styles.heroBody}>
              We are the Sunshine Coast&apos;s property maintenance partner.
              Built by locals, we take care of residential, commercial, and body
              corporate customers from the ground up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

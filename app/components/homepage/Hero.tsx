// app/components/homepage/Hero.tsx

import HeroIntro from "./HeroIntro";
import ServiceBento from "./ServiceBento";
import styles from "./Hero.module.css";

const HEADLINE = "The Sunshine Coast’s Trusted Property Maintenance Partner";

export default function Hero() {
  return (
    <section
      className={styles.section}
      aria-labelledby="hero-heading"
      data-nav-fixed="true"
    >
      <HeroIntro
        headline={HEADLINE}
        primaryCta={{ label: "Book a free quote →", href: "/contact" }}
        secondaryCta={{ label: "Call us →", href: "tel:0731300226" }}
      />
      <div className={styles.bento}>
        <ServiceBento />
      </div>
    </section>
  );
}

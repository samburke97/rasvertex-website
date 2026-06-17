// app/components/homepage/Hero.tsx

import HeroIntro from "./HeroIntro";
import ServiceBento from "./ServiceBento";
import styles from "./Hero.module.css";

const HEADLINE = "The Sunshine Coast's Trusted Property Maintenance Partner.";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" data-nav-fixed="true">
      <HeroIntro headline={HEADLINE} />
      <div className={styles.bento}>
        <ServiceBento />
      </div>
    </section>
  );
}

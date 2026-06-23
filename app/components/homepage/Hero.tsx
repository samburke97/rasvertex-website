// app/components/homepage/Hero.tsx

import HomeHero from "./HomeHero";
import ServiceBento from "./ServiceBento";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section aria-label="Homepage hero" data-nav-fixed="true">
      <HomeHero />
      <div className={styles.bento}>
        <ServiceBento />
      </div>
    </section>
  );
}

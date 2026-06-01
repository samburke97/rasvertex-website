// app/components/contact/ContactHero.tsx

import Image from "next/image";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <header className={styles.hero} aria-label="Contact RAS-VERTEX">
      {/* Full-bleed image */}
      <div className={styles.imageWrap} aria-hidden="true">
        <Image
          src="/images/projects/rope-access.png"
          alt="RAS-VERTEX technicians on a Sunshine Coast building"
          fill
          className={styles.image}
          priority
          sizes="(max-width: 860px) 100vw, 55vw"
        />
        <div className={styles.overlay} />
      </div>

      {/* Headline anchored bottom-left of image */}
      <div className={styles.headlineWrap}>
        <h1 className={styles.headline}>
          Let&rsquo;s talk
          <br />
          about your
          <br />
          project.
        </h1>
      </div>
    </header>
  );
}

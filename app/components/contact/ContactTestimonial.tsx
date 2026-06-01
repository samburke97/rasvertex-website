// app/components/contact/ContactTestimonial.tsx

import Image from "next/image";
import styles from "./ContactTestimonial.module.css";

export default function ContactTestimonial() {
  return (
    <aside className={styles.wrap} aria-label="Client testimonial">
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className={styles.quote}>
        <p>
          They showed up within 48 hours for the site visit and had a full
          itemised quote within the week. One project manager start to finish —
          no passing the buck. Refreshing.
        </p>
      </blockquote>
      <figcaption className={styles.author}>
        <div className={styles.logo} aria-hidden="true">
          <Image
            src="/partners/racv.png"
            alt="RACV"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.info}>
          <cite className={styles.name}>Sandra Koh</cite>
          <span className={styles.role}>
            Strata Manager, Archers Body Corporate
          </span>
        </div>
      </figcaption>
    </aside>
  );
}

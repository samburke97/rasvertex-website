// app/components/contact/ContactTestimonial.tsx

import Image from "next/image";
import styles from "./ContactTestimonial.module.css";

interface ContactTestimonialProps {
  quote?: string;
  name?: string;
  role?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export default function ContactTestimonial({
  quote = "They showed up within 48 hours for the site visit and had a full itemised quote within the week. One project manager start to finish — no passing the buck. Refreshing.",
  name = "Sandra Koh",
  role = "Strata Manager, Archers Body Corporate",
  logoSrc = "/partners/racv.png",
  logoAlt = "RACV",
}: ContactTestimonialProps) {
  return (
    <aside className={styles.wrap} aria-label="Client testimonial">
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>
      <figcaption className={styles.author}>
        {logoSrc && (
          <div className={styles.logo} aria-hidden="true">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              sizes="120px"
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        <div className={styles.info}>
          <cite className={styles.name}>{name}</cite>
          <span className={styles.role}>{role}</span>
        </div>
      </figcaption>
    </aside>
  );
}

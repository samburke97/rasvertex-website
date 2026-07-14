// app/components/contact/ContactTestimonial.tsx

import Image from "next/image";
import styles from "./ContactTestimonial.module.css";

interface ContactTestimonialProps {
  quote: string;
  name: string;
  role?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export default function ContactTestimonial({
  quote,
  name,
  role = "",
  logoSrc = "",
  logoAlt = "",
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

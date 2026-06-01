// app/components/contact/ContactCard.tsx

import Image from "next/image";
import ContactForm from "./ContactForm";
import styles from "./ContactCard.module.css";

export default function ContactCard() {
  return (
    <div className={styles.card}>
      {/* ── Top: step nav lives inside form, image top-right ── */}
      <div className={styles.inner}>
        {/* Project image — top right of the card */}
        <div className={styles.imageWrap} aria-hidden="true">
          <Image
            src="/images/projects/1.jpeg"
            alt="RAS-VERTEX project on the Sunshine Coast"
            fill
            className={styles.image}
            sizes="(max-width: 860px) 100vw, 35vw"
            priority
          />
        </div>

        {/* Form — takes majority of card width */}
        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

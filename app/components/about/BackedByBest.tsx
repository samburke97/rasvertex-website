// app/components/about/BackedByBest.tsx

import Image from "next/image";
import styles from "./BackedByBest.module.css";

const LOGOS = [
  { src: "/images/associations/haymes.svg",     alt: "Haymes Paint",  width:  80, height: 36 },
  { src: "/images/associations/dulux.svg",       alt: "Dulux",         width:  80, height: 36 },
  { src: "/images/associations/smartstrata.png", alt: "Smart Strata",  width: 130, height: 20 },
  { src: "/images/associations/qbcc.png",        alt: "QBCC Licensed", width:  56, height: 36 },
];

export default function BackedByBest() {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Backed by the best.</h3>
      <p className={styles.body}>
        We only specify Haymes and Dulux commercial systems because we know
        they perform in coastal Queensland conditions — and we&rsquo;re
        confident enough in our application to put our name behind both.
      </p>
      <ul className={styles.logos} aria-label="Trusted brands">
        {LOGOS.map((logo) => (
          <li key={logo.alt} className={styles.logoItem}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={styles.logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

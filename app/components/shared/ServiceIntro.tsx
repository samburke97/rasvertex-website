// app/components/shared/ServiceIntro.tsx

import Image from "next/image";
import styles from "./ServiceIntro.module.css";

export interface IntroLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ServiceIntroProps {
  heading: string;
  paragraphs: string[];
  headingId?: string;
  logos?: IntroLogo[];
}

export default function ServiceIntro({
  heading,
  paragraphs,
  headingId = "service-intro-heading",
  logos,
}: ServiceIntroProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.inner}>
        {/* Left — sticky heading + optional logos */}
        <div className={styles.left}>
          <h2 id={headingId}>{heading}</h2>
          {logos && logos.length > 0 && (
            <ul
              className={styles.logos}
              aria-label="Accreditations and partners"
            >
              {logos.map((logo) => (
                <li key={logo.alt}>
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
          )}
        </div>

        {/* Right — body copy */}
        <div className={styles.right}>
          {paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? "p" : "p-soft"}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// app/components/about/CommunitySponsor.tsx

import Image from "next/image";
import styles from "./CommunitySponsor.module.css";

const LOGOS = [
  {
    src: "/images/community/coolumbowls.png",
    alt: "Coolum Beach Bowls Club",
    width: 180,
    height: 60,
  },
  {
    src: "/images/community/coolumfc.png",
    alt: "Coolum Football Club",
    width: 80,
    height: 80,
  },
  {
    src: "/images/community/peregianbeachslsc.png",
    alt: "Peregian Beach Surf Life Saving Club",
    width: 80,
    height: 80,
  },
  {
    src: "/images/community/ruok.png",
    alt: "R U OK?",
    width: 160,
    height: 60,
  },
];

export default function CommunitySponsor() {
  return (
    <section className={styles.section} aria-labelledby="community-heading">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>On the Coast, for the Coast</span>
        <h2 id="community-heading" className={styles.heading}>
          We back the community
          <br />
          that backs us.
        </h2>
        <p className={styles.body}>
          Our crew live here, their kids play here, and we put our name behind
          the local clubs and causes that make the Sunshine Coast what it is.
        </p>

        <ul className={styles.logos} aria-label="Community sponsors">
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
    </section>
  );
}

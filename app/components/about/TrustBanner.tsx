// app/components/about/TrustBanner.tsx

import Image from "next/image";
import styles from "./TrustBanner.module.css";

// All heights fixed; widths calculated from natural aspect ratios
const COMMUNITY_LOGOS = [
  { src: "/images/community/coolumbowls.png", alt: "Coolum Beach Bowls Club", width: 149, height: 52 },
  { src: "/images/community/coolumfc.png", alt: "Coolum Football Club", width: 52, height: 52 },
  { src: "/images/community/peregianbeachslsc.png", alt: "Peregian Beach Surf Life Saving Club", width: 52, height: 52 },
  { src: "/images/community/ruok.png", alt: "R U OK?", width: 130, height: 52 },
];

const BRAND_LOGOS = [
  { src: "/images/partners/haymes.svg", alt: "Haymes Paint", width: 89, height: 40 },
  { src: "/images/associations/dulux.svg", alt: "Dulux", width: 135, height: 40 },
  { src: "/images/associations/qbcc.png", alt: "QBCC Licensed", width: 40, height: 40 },
];

export default function TrustBanner() {
  return (
    <div className={styles.wrap}>

      {/* ── Left — community blue card ── */}
      <div className={styles.left}>
        <div className={styles.content}>
          <h2>
            We back the community
            <br />
            that backs us.
          </h2>
          <p className="p-soft">
            Our crew live here, their kids play here, and we put our name behind
            the local clubs and causes that make the Sunshine Coast what it is.
          </p>
          <ul className={styles.communityLogos} aria-label="Community sponsors">
            {COMMUNITY_LOGOS.map((logo) => (
              <li key={logo.alt} className={styles.communityLogoItem}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={styles.communityLogo}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Right — burgundy brand card ── */}
      <div className={styles.right}>
        <h2 className={styles.rightHeading}>5 year warranty as standard.</h2>
        <p className={styles.rightBody}>
          We only specify Haymes and Dulux commercial systems because we know
          they perform in coastal Queensland conditions — and we&rsquo;re
          confident enough in our application to put our name behind both.
        </p>
        <ul className={styles.logos} aria-label="Trusted brands">
          {BRAND_LOGOS.map((logo) => (
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

    </div>
  );
}

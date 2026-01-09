"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./ExperienceSection.module.css";

const scrollSections = [
  {
    id: "local",
    label: "ADVANTAGE",
    description:
      "Being locally owned means we care about the Sunshine Coast the way you do. Proud to be local, and proud to support our local community. Our reputation is built on knowing the community we serve.",
    image: "/images/projects/1.jpeg",
    communityLogos: true,
  },
  {
    id: "experience",
    label: "PROVEN TRACK RECORD",
    description:
      "Since 1999, we've maintained over 500 properties across SEQ. That's not luck. That's the result of showing up and doing the job right every single time.",
    image: "/images/projects/2.jpeg",
  },
  {
    id: "accountability",
    label: "REAL ACCOUNTABILITY",
    description:
      "No corporate runaround. No excuses. When something needs fixing, we fix it. When we say we'll be there, we show up.",
    image: "/images/projects/3.jpeg",
    partners: true,
  },
  {
    id: "certified",
    label: "CERTIFIED & TRUSTED",
    description:
      "Fully licensed with QBCC, certified professionals, and trusted by Queensland's leading property managers and body corporates.",
    image: "/images/projects/4.jpeg",
    certifications: true,
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        {/* Left Column - Fixed */}
        <div className={styles.leftColumn}>
          <div className={styles.stickyContent}>
            <p className={styles.label}>[ WHO WE ARE ]</p>
            <h2 className={styles.title}>
              25+ Years serving the Sunshine Coast community, where our
              neighbours live, learn and work.
            </h2>

            {/* CTA Block */}
            <div className={styles.ctaBlock}>
              <Image
                src="/images/people/caro.jpg"
                alt="Caro"
                width={70}
                height={70}
                className={styles.avatar}
              />
              <h3 className={styles.ctaTitle}>HOW CAN WE HELP?</h3>
              <p className={styles.ctaDescription}>
                From small repairs to full repaints,we know every property type
                and we'll guide you to the right solution for your project.
              </p>
              <a href="/contact" className={styles.ctaButton}>
                FREE QUOTE
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Scrolling sections */}
        <div className={styles.rightColumn}>
          {scrollSections.map((section, index) => (
            <div key={section.id} className={styles.scrollSection}>
              <div className={styles.scrollContent}>
                {/* Image at top */}
                {section.image && (
                  <div className={styles.sectionImage}>
                    <Image
                      src={section.image}
                      alt={section.label}
                      fill
                      className={styles.image}
                    />
                  </div>
                )}

                {/* Label */}
                <p className={styles.sectionLabel}>{section.label}</p>

                {/* Description */}
                <p className={styles.sectionDescription}>
                  {section.description}
                </p>

                {/* Community logos if applicable */}
                {section.communityLogos && (
                  <div className={styles.communityLogos}>
                    <Image
                      src="/images/community/coolumbowls.png"
                      alt="Coolum Bowls"
                      width={100}
                      height={50}
                      className={styles.communityLogo}
                    />
                    <Image
                      src="/images/community/coolumfc.png"
                      alt="Coolum FC"
                      width={60}
                      height={60}
                      className={styles.communityLogo}
                    />
                    <Image
                      src="/images/community/coolumnetball.webp"
                      alt="Coolum Netball"
                      width={180}
                      height={60}
                      className={styles.communityLogo}
                    />
                    <Image
                      src="/images/community/peregianbeachslsc.png"
                      alt="Peregian Beach SLSC"
                      width={60}
                      height={60}
                      className={styles.communityLogo}
                    />
                    <Image
                      src="/images/community/ruok.png"
                      alt="R U OK?"
                      width={180}
                      height={60}
                      className={styles.communityLogo}
                    />
                    <Image
                      src="/images/community/yahpitmuaythai.png"
                      alt="Yahpit Muay Thai"
                      width={60}
                      height={60}
                      className={styles.communityLogo}
                    />
                  </div>
                )}

                {/* Partner logos at bottom if applicable */}
                {section.partners && (
                  <div className={styles.partnerLogos}>
                    <Image
                      src="/partners/mosaic.svg"
                      alt="Mosaic"
                      width={90}
                      height={36}
                      className={styles.partnerLogo}
                    />
                    <Image
                      src="/partners/pica.png"
                      alt="Pica"
                      width={70}
                      height={36}
                      className={styles.partnerLogo}
                    />
                    <Image
                      src="/partners/novotel.svg.png"
                      alt="Novotel"
                      width={100}
                      height={36}
                      className={styles.partnerLogo}
                    />
                    <Image
                      src="/partners/gov.svg"
                      alt="QLD Gov"
                      width={90}
                      height={36}
                      className={styles.partnerLogo}
                    />
                  </div>
                )}

                {/* Certification badges at bottom if applicable */}
                {section.certifications && (
                  <div className={styles.certifications}>
                    <Image
                      src="/images/associations/qbcc.png"
                      alt="QBCC"
                      width={70}
                      height={70}
                      className={styles.certBadge}
                    />
                    <Image
                      src="/images/associations/mpa.png"
                      alt="MPA"
                      width={70}
                      height={70}
                      className={styles.certBadge}
                    />
                    <Image
                      src="/images/associations/communityselect.png"
                      alt="Community Select"
                      width={70}
                      height={70}
                      className={styles.certBadge}
                    />
                    <Image
                      src="/images/associations/smartstrata.png"
                      alt="Smart Strata"
                      width={50}
                      height={50}
                      className={styles.certBadge}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./ExperienceSection.module.css";

const scrollSections = [
  {
    id: "local",
    label: "Advantage",
    title: "We're your neighbour, not just a vendor",
    description:
      "Being locally owned means we care about the Sunshine Coast the way you do. Our reputation is built on knowing the community we serve.",
    image: "/images/projects/1.jpeg",
  },
  {
    id: "experience",
    label: "Proven track record",
    title: "25+ years of consistent, reliable work",
    description:
      "Since 1999, we've maintained over 500 properties across SEQ. That's not luck. That's the result of showing up and doing the job right every single time.",
    image: "/images/projects/2.jpeg",
  },
  {
    id: "accountability",
    label: "Real accountability",
    title: "You know who to call, and they answer",
    description:
      "No corporate runaround. No excuses. When something needs fixing, we fix it. When we say we'll be there, we show up.",
    partners: true,
  },
  {
    id: "certified",
    label: "Certified & Trusted",
    title: "Backed by the industry's best",
    description:
      "Fully licensed with QBCC, certified professionals, and trusted by Queensland's leading property managers and body corporates.",
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
                Before you start your next project chat to our team and we'll
                guide you.
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
                <p className={styles.sectionLabel}>{section.label}</p>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionDescription}>
                  {section.description}
                </p>

                {/* Show image */}
                {section.image && (
                  <div className={styles.sectionImage}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className={styles.image}
                    />
                  </div>
                )}

                {/* Show partner logos */}
                {section.partners && (
                  <div className={styles.partnerLogos}>
                    <Image
                      src="/partners/mosaic.svg"
                      alt="Mosaic"
                      width={100}
                      height={40}
                      className={styles.partnerLogo}
                    />
                    <Image
                      src="/partners/pica.png"
                      alt="Pica"
                      width={80}
                      height={40}
                      className={styles.partnerLogo}
                    />
                    <Image
                      src="/partners/novotel.svg.png"
                      alt="Novotel"
                      width={110}
                      height={40}
                      className={styles.partnerLogo}
                    />
                    <Image
                      src="/partners/gov.svg"
                      alt="QLD Gov"
                      width={100}
                      height={40}
                      className={styles.partnerLogo}
                    />
                  </div>
                )}

                {/* Show certifications */}
                {section.certifications && (
                  <div className={styles.certifications}>
                    <Image
                      src="/images/associations/qbcc.png"
                      alt="QBCC"
                      width={80}
                      height={80}
                      className={styles.certBadge}
                    />
                    <Image
                      src="/images/associations/mpa.png"
                      alt="MPA"
                      width={80}
                      height={80}
                      className={styles.certBadge}
                    />
                    <Image
                      src="/images/associations/communityselect.png"
                      alt="Community Select"
                      width={80}
                      height={80}
                      className={styles.certBadge}
                    />
                    <Image
                      src="/images/associations/smartstrata.png"
                      alt="Smart Strata"
                      width={80}
                      height={80}
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

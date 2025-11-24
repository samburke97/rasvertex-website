"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./CommunitySection.module.css";

const sponsors = [
  { name: "Coolum FC", logo: "/images/community/coolumfc.png" },
  { name: "Coolum Bowls Club", logo: "/images/community/coolumbowls.png" },
  {
    name: "Coolum District Netball",
    logo: "/images/community/coolumnetball.webp",
  },
  {
    name: "Peregian Beach SLSC",
    logo: "/images/community/peregianbeachslsc.png",
  },
  { name: "Yah Pit Muay Thai", logo: "/images/community/yahpitmuaythai.png" },
];

export default function CommunitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left side - Big text like ExperienceSection */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.subtitle}>Giving Back</p>
          <h2 className={styles.title}>
            25+ Years serving our Sunshine Coast community, where our neighbours
            live, learn and work.
          </h2>
        </motion.div>

        {/* Right side - Image with tag and logos */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Main image card with tag */}
          <div className={styles.imageCard}>
            {/* Tag - top right */}
            <div className={styles.tag}>
              Coolum Beach Football Club, Partner
            </div>

            {/* Main image */}
            <Image
              src="/images/community/sponsor.png"
              alt="Community sponsorship"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Sponsor logos - spread across bottom */}
          <div className={styles.sponsorLogos}>
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                className={styles.logoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4 + index * 0.08,
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

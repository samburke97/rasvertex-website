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
  { name: "RUOK?", logo: "/images/community/ruok.png" },
];

export default function CommunitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          BACKING OUR COMMUNITY
        </motion.h2>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Supporting grassroots organisations strengthens our community and
          reflects our commitment to giving back to the areas where we live,
          work, and learn.
        </motion.p>

        {/* Logos row */}
        <motion.div
          className={styles.logosContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className={styles.logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4 + index * 0.08,
              }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

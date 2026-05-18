"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectShowcase.module.css";

const projects = [
  {
    name: "Mooloolaba Highrise Repaint",
    location: "Mooloolaba, QLD",
    image: "/images/projects/1.jpeg",
    href: "/work",
  },
  {
    name: "Coolum Facade Wash",
    location: "Coolum Beach, QLD",
    image: "/images/projects/2.jpeg",
    href: "/work",
  },
  {
    name: "Height Safety Anchor Install",
    location: "Maroochydore, QLD",
    image: "/nav/height.png",
    href: "/work",
  },
  {
    name: "Novotel Waterproofing Program",
    location: "Noosa, QLD",
    image: "/nav/waterproofing.png",
    href: "/work",
  },
  {
    name: "Remedial Maintenance Program",
    location: "Sunshine Coast, QLD",
    image: "/nav/maintenance.png",
    href: "/work",
  },
];

// Duplicate enough times so Embla always has slides off-screen
const slides = [...projects, ...projects, ...projects, ...projects];

export default function ProjectShowcase() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: false,
    startIndex: projects.length, // start in the middle set
  });

  return (
    <section className={styles.section}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((project, i) => (
            <Link key={i} href={project.href} className={styles.card}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className={styles.image}
                sizes="33vw"
              />
              <div className={styles.overlay}>
                <div className={styles.info}>
                  <div className={styles.infoRow}>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>{project.location}</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.infoLabel}>Project</p>
                    <p className={styles.infoValue}>{project.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    color: "photo" as const,
  },
  {
    name: "Coolum Facade Wash",
    location: "Coolum Beach, QLD",
    image: "/images/projects/2.jpeg",
    href: "/work",
    color: "cream" as const,
  },
  {
    name: "Height Safety Anchor Install",
    location: "Maroochydore, QLD",
    image: "/nav/height.png",
    href: "/work",
    color: "maroon" as const,
  },
  {
    name: "Novotel Waterproofing Program",
    location: "Noosa, QLD",
    image: "/nav/waterproofing.png",
    href: "/work",
    color: "photo" as const,
  },
];

export default function ProjectShowcase() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: "start",
    containScroll: false,
  });

  return (
    <section className={styles.section}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {projects.map((project, i) => (
            <Link key={i} href={project.href} className={styles.card}>
              {/* Photo — always visible */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className={styles.image}
                sizes="33vw"
              />

              {/* Solid colour overlay + info on hover */}
              <div
                className={`${styles.overlay} ${styles[`overlay_${project.color}`]}`}
              >
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

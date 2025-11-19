"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Container from "../Container";
import styles from "./ProjectShowcase.module.css";

const projects = [
  {
    id: 1,
    title: "Taringa Residential Painting",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
    review:
      "We were really impressed with the RAS-VERTEX team from our first interaction. We had a very short time frame, but they managed to complete the job ahead of schedule.",
    color: "rgba(193, 232, 255, 0.92)",
  },
  {
    id: 2,
    title: "Clayfield Girls School Exterior Painting",
    image:
      "https://images.unsplash.com/photo-1562280318-45754a671036?w=800&h=800&fit=crop",
    review:
      "I contracted RAS-VERTEX to paint our school - turning it from a bit drab to looking like new! Very professional.",
    color: "rgba(125, 160, 202, 0.92)",
  },
  {
    id: 3,
    title: "Murarrie Commercial Painting",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop",
    review: "Outstanding service from start to finish. Very professional team.",
    color: "rgba(84, 131, 179, 0.92)",
  },
  {
    id: 4,
    title: "Brisbane Heights Project",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
    review: "Exceptional work on our high-rise building.",
    color: "rgba(5, 38, 89, 0.92)",
  },
  {
    id: 5,
    title: "Coastal Waterproofing",
    image:
      "https://images.unsplash.com/photo-1562280318-45754a671036?w=800&h=800&fit=crop",
    review: "Solved our water ingress issues completely.",
    color: "rgba(2, 16, 36, 0.92)",
  },
];

export default function ProjectShowcase() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <Container size="xl">
        <h2 className={styles.title}>Featured Projects</h2>
      </Container>

      <div className={styles.carousel}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.track}>
            {[...projects, ...projects, ...projects].map((p, i) => (
              <div key={i} className={styles.slide}>
                <div
                  className={styles.card}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span
                    className={`${styles.tag} ${
                      i % 2 ? styles.tagRight : styles.tagLeft
                    }`}
                    style={{ opacity: hovered === p.id ? 0 : 1 }}
                  >
                    {p.title}
                  </span>

                  <Image src={p.image} alt={p.title} fill sizes="450px" />

                  {hovered === p.id && (
                    <div
                      className={styles.hover}
                      style={{ background: p.color }}
                    >
                      <p>"{p.review}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

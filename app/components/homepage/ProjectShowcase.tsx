"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Container from "../Container";
import styles from "./ProjectShowcase.module.css";

const projects = [
  {
    id: 1,
    tag: "Residential Painting, Taringa",
    building: "Private Residence",
    review:
      "We were really impressed with the RAS-VERTEX team from our first interaction. We had a very short time frame, but they managed to complete the job ahead of schedule.",
    clientName: "Sarah Johnson",
    clientTitle: "Homeowner",
    image: "/images/projects/1.jpeg",
    color: "rgba(6, 20, 27, 0.5)",
  },
  {
    id: 2,
    tag: "Exterior Painting, Clayfield",
    building: "Clayfield Girls School",
    review:
      "I contracted RAS-VERTEX to paint our school - turning it from a bit drab to looking like new! Very professional.",
    clientName: "Michael Patterson",
    clientTitle: "Facilities Manager",
    image: "/images/projects/2.jpeg",
    color: "rgba(17, 18, 45, 0.5)",
  },
  {
    id: 3,
    tag: "Commercial Painting, Murarrie",
    building: "Industrial Complex",
    review: "Outstanding service from start to finish. Very professional team.",
    clientName: "David Chen",
    clientTitle: "Property Manager",
    image: "/images/projects/project3.jpg",
    color: "rgba(37, 55, 69, 0.5)",
  },
  {
    id: 4,
    tag: "Height Access, Brisbane CBD",
    building: "Brisbane Heights Tower",
    review: "Exceptional work on our high-rise building.",
    clientName: "Rebecca Martinez",
    clientTitle: "Building Coordinator",
    image: "/images/projects/project4.jpg",
    color: "rgba(74, 92, 106, 0.5)",
  },
  {
    id: 5,
    tag: "Waterproofing, Mooloolaba",
    building: "Coastal Apartments",
    review: "Solved our water ingress issues completely.",
    clientName: "James Thompson",
    clientTitle: "Body Corporate Manager",
    image: "/images/projects/project5.jpg",
    color: "rgba(155, 168, 171, 0.5)",
  },
  {
    id: 6,
    tag: "Heritage Restoration, Nambour",
    building: "Historic Building",
    review: "Meticulous attention to detail and respect for heritage features.",
    clientName: "Emma Williams",
    clientTitle: "Heritage Consultant",
    image: "/images/projects/project6.jpg",
    color: "rgba(204, 208, 207, 0.5)",
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
                  {/* Tag shows service + suburb - always visible */}
                  <span
                    className={`${styles.tag} ${
                      i % 2 ? styles.tagRight : styles.tagLeft
                    }`}
                  >
                    {p.tag}
                  </span>

                  <Image src={p.image} alt={p.building} fill sizes="600px" />

                  {/* Overlay with building name above review */}
                  {hovered === p.id && (
                    <div
                      className={styles.hover}
                      style={{ background: p.color }}
                    >
                      <div className={styles.projectInfo}>
                        <h3 className={styles.building}>{p.building}</h3>
                        <p className={styles.review}>"{p.review}"</p>
                        <p className={styles.client}>
                          {p.clientName}, {p.clientTitle}
                        </p>
                      </div>
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

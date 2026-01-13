"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Our Body Corporate Committee engaged RAS-VERTEX to repair and repaint our complex of 7 town houses. This was a major project which involved crack and render repairs and repaint of the entire complex including the roof, fences and retaining walls. From start to finish RAS-VERTEX was friendly, professional and organised.",
    name: "Andrea Steinecker",
    image: "/images/projects/1.jpeg",
  },
  {
    id: 2,
    quote:
      "Recommend using RAS-VERTEX! I contracted them to paint a produce store shed, turning it from a bit drab to looking like new! Very professional, timely and fantastic at keeping you up to date on the progress. The customer service was amazing and very helpful for all questions.",
    name: "K.J. Reid",
    image: "/images/projects/2.jpeg",
  },
  {
    id: 3,
    quote:
      "We are really happy with our interaction with RAS-VERTEX. We had a very positive experience with the task including communication, thank the team for painting our exterior in a timely manner.",
    name: "Stuart Logan",
    image: "/images/projects/3.jpeg",
  },
  {
    id: 4,
    quote:
      "Absolutely fantastic service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations. Would highly recommend for any commercial painting project on the Sunshine Coast.",
    name: "Michelle Torres",
    image: "/images/projects/4.jpeg",
  },
  {
    id: 5,
    quote:
      "RAS-VERTEX completed our strata repaint project on time and within budget. Communication was excellent throughout the entire process. The building looks brand new and all residents are thrilled with the result.",
    name: "David Chen",
    image: "/images/projects/1.jpeg",
  },
  {
    id: 6,
    quote:
      "Professional team, excellent workmanship. They handled our high-rise cleaning and painting with full safety compliance. The attention to detail was impressive and the crew was respectful throughout.",
    name: "Sarah Mitchell",
    image: "/images/projects/2.jpeg",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: false,
    align: "start",
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const isShowingImage = (index: number) => {
    const originalIndex = index % testimonials.length;
    const defaultShowImage = originalIndex % 2 === 1;

    if (hoveredCard === index) {
      return !defaultShowImage;
    }
    return defaultShowImage;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.label}>[ SEQ'S PROPERTY PARTNER ]</p>
            <h2 className={styles.title}>From The Locals</h2>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.rating}>
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                className={styles.googleIcon}
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="currentColor"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="currentColor"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="currentColor"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="currentColor"
                />
              </svg>
              <div className={styles.ratingContent}>
                <span className={styles.ratingLabel}>Google Rating</span>
                <div className={styles.ratingScore}>
                  <span className={styles.score}>5.0</span>
                  <span className={styles.stars}>★★★★★</span>
                </div>
                <span className={styles.reviewCount}>Based on 30 reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={styles.emblaSlide}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={styles.card}>
                  {/* Content - always in DOM, provides natural height */}
                  <div className={styles.contentLayer}>
                    <p className={styles.quote}>"{testimonial.quote}"</p>
                  </div>

                  {/* Image overlay - absolute, covers content when visible */}
                  <div
                    className={`${styles.imageLayer} ${
                      isShowingImage(index) ? styles.imageVisible : ""
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={`Project by ${testimonial.name}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Author - always visible below card */}
                <div className={styles.author}>
                  <div className={styles.authorLeft}>
                    <div className={styles.avatar}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <span className={styles.authorName}>
                      {testimonial.name}
                    </span>
                  </div>
                  <span className={styles.cardStars}>★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

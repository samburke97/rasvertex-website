"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import styles from "./PartnersCarousel.module.css";

const partners = [
  { name: "KBW", logo: "/partners/eagers.svg" },
  { name: "Archers Body Corporate", logo: "/partners/acu.svg" },
  { name: "GPT Group", logo: "/partners/calile.svg" },
  { name: "RACV", logo: "/partners/ck.svg" },
  { name: "Trafalgar Towers", logo: "/partners/guardian.svg" },
  { name: "Maroochydore RSL", logo: "/partners/motherduck.svg" },
  { name: "Cooroy Football Club", logo: "/partners/nudgee.svg" },
  { name: "Schools", logo: "/partners/sandgate.svg" },
  { name: "Something Notable", logo: "/partners/somerville.svg" },
];

export default function PartnersCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  // Duplicate the partners array multiple times for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Trusted by the Sunshine Coast</h2>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={styles.emblaSlide}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    style={{
                      objectFit: "contain",
                      filter:
                        "brightness(0) saturate(100%) invert(10%) sepia(43%) saturate(3428%) hue-rotate(235deg) brightness(94%) contrast(101%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

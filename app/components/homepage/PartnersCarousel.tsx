"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import styles from "./PartnersCarousel.module.css";
import Container from "../Container";

const partners = [
  { name: "Archers Body Corporate", logo: "/partners/archers.png" },
  { name: "RACV", logo: "/partners/racv.png" },
  { name: "Trafalgar Towers", logo: "/partners/trafalgar.svg" },
  { name: "Maroochydore RSL", logo: "/partners/maroochy.png" },
  { name: "Accor", logo: "/partners/accor.svg" },
  { name: "Mosaic", logo: "/partners/mosaic.svg" },
  { name: "Pica Group", logo: "/partners/pica.png" },
  { name: "Novotel", logo: "/partners/novotel.svg.png" },
  { name: "QLD Government", logo: "/partners/gov.svg" },
];

export default function PartnersCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
      containScroll: false,
      watchDrag: false,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className={styles.section}>
      <Container>
        {/* <h2 className={styles.title}>Trusted by the Sunshine Coast</h2> */}
      </Container>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className={styles.emblaSlide}>
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
    </section>
  );
}

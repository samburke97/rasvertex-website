// app/components/homepage/ServiceBento.tsx

import ServiceCard from "./ServiceCard";
import styles from "./ServiceBento.module.css";

const SERVICES = {
  painting: {
    href: "/painting",
    title: "Painting",
    mediaType: "video" as const,
    mediaSrc: "/videos/painting.mp4",
  },
  maintenance: {
    href: "/maintenance",
    title: "Maintenance",
    mediaType: "image" as const,
    mediaSrc: "/nav/maintenance.png",
  },
  waterproofing: {
    href: "/waterproofing",
    title: "Waterproofing",
    mediaType: "image" as const,
    mediaSrc: "/nav/waterproofing.png",
  },
  cleaning: {
    href: "/cleaning",
    title: "Cleaning",
    mediaType: "video" as const,
    mediaSrc: "/videos/cleaning.mp4",
  },
  height: {
    href: "/height-safety",
    title: "Height Safety",
    mediaType: "image" as const,
    mediaSrc: "/nav/height.png",
  },
};

export default function ServiceBento() {
  return (
    <div className={styles.grid} role="region" aria-label="Our services">
      <div className={styles.slotPainting}>
        <ServiceCard {...SERVICES.painting} />
      </div>
      <div className={styles.slotMaintenance}>
        <ServiceCard {...SERVICES.maintenance} />
      </div>
      <div className={styles.slotWaterproofing}>
        <ServiceCard {...SERVICES.waterproofing} />
      </div>
      <div className={styles.slotCleaning}>
        <ServiceCard {...SERVICES.cleaning} />
      </div>
      <div className={styles.col4}>
        <div className={styles.slotHeight}>
          <ServiceCard {...SERVICES.height} />
        </div>
        <div className={styles.slotBrand}>
          <ServiceCard
            href="/contact"
            title={"ONE\nPARTNER."}
            body="Complete property maintenance for commercial, body corporate, and strata across the Sunshine Coast."
            variant="brand"
          />
        </div>
      </div>
    </div>
  );
}

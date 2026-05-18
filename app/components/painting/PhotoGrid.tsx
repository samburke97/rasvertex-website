import Image from "next/image";
import styles from "./PhotoGrid.module.css";

const photos = [
  {
    src: "/nav/painting.png",
    alt: "Rope access painter on high-rise exterior, Sunshine Coast",
  },
  {
    src: "/images/projects/1.jpeg",
    alt: "Commercial building repaint in progress, Mooloolaba",
  },
  {
    src: "/nav/maintenance.png",
    alt: "Technician painting building facade via rope access",
  },
];

export default function PhotoGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <div key={i} className={styles.card}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={styles.image}
              sizes="33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

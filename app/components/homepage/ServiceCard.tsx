// app/components/homepage/ServiceCard.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

const ArrowIcon = () => (
  <span className={styles.arrow} aria-hidden="true">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

type MediaProps =
  | { mediaType: "image"; mediaSrc: string }
  | { mediaType: "video"; mediaSrc: string }
  | { mediaType?: never; mediaSrc?: never };

type ServiceCardProps = {
  href: string;
  title: string;
  body?: string;
  variant?: "media" | "brand";
  className?: string;
} & MediaProps;

export default function ServiceCard({
  href,
  title,
  body,
  variant = "media",
  mediaType,
  mediaSrc,
  className = "",
}: ServiceCardProps) {
  const classes = [
    styles.card,
    variant === "brand" ? styles.brand : styles.media,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes} aria-label={`${title} — learn more`}>
      {variant === "media" && mediaSrc && (
        <>
          <div className={styles.mediaWrap}>
            {mediaType === "video" ? (
              <video
                src={mediaSrc}
                className={styles.media}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
            ) : (
              <Image
                src={mediaSrc}
                alt=""
                fill
                className={styles.media}
                aria-hidden="true"
              />
            )}
          </div>
          <div className={styles.overlay} aria-hidden="true" />
        </>
      )}

      <ArrowIcon />

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {body && <p className={styles.body}>{body}</p>}
      </div>
    </Link>
  );
}

// app/components/shared/CredentialRows.tsx

import Image from "next/image";
import styles from "./CredentialRows.module.css";

export interface Credential {
  n: string;
  title: string;
  body: string;
  photo: string;
  photoAlt: string;
  logos?: { src: string; alt: string }[];
}

interface CredentialRowsProps {
  credentials: Credential[];
  headingId?: string;
  ariaLabel?: string;
}

export default function CredentialRows({
  credentials,
  ariaLabel = "Why choose us",
}: CredentialRowsProps) {
  return (
    <section className={styles.section} aria-label={ariaLabel}>
      {credentials.map((c, i) => (
        <div
          key={c.n}
          className={`${styles.row} ${i % 2 === 1 ? styles.rowReverse : ""}`}
        >
          {/* ── Text side ── */}
          <div className={styles.text}>
            <span className={styles.num} aria-hidden="true">
              {c.n}
            </span>
            <div className={styles.content}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.body}>{c.body}</p>
              {c.logos && c.logos.length > 0 && (
                <div className={styles.logos}>
                  {c.logos.map((l) => (
                    <div key={l.alt} className={styles.logoWrap}>
                      <Image
                        src={l.src}
                        alt={l.alt}
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "left center",
                        }}
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Photo side ── */}
          <div className={styles.photo}>
            <Image
              src={c.photo}
              alt={c.photoAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

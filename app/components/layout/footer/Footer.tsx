// app/components/layout/footer/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Watermark from "../../shared/Watermark";
import styles from "./Footer.module.css";

const SERVICES = [
  { label: "Painting", href: "/painting" },
  { label: "Building Cleaning", href: "/external-cleaning" },
  { label: "Window Cleaning", href: "/window-cleaning" },
  { label: "Waterproofing", href: "/waterproofing" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Height Safety", href: "/height-safety" },
  { label: "Building Inspections", href: "/building-inspections" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <Watermark className={styles.watermarkSpacing} />

      <Image
        src="/logo.png"
        alt="RAS-VERTEX"
        width={240}
        height={60}
        className={styles.footerLogo}
      />

      <div className={styles.top}>
        <nav className={styles.serviceLinks} aria-label="Footer service links">
          {SERVICES.map((s, i) => (
            <React.Fragment key={s.href}>
              <Link href={s.href} className={`p-soft ${styles.serviceLink}`}>
                {s.label}
              </Link>
              {i < SERVICES.length - 1 && (
                <span className={styles.dot} aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <Link href="/contact" className={styles.contactBtn}>
          Get in touch
          <svg
            className={styles.contactBtnArrow}
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className={styles.bottom}>
        <span className={styles.small}>
          &copy;{new Date().getFullYear()} Rope Access Services Pty Ltd. All rights reserved.
        </span>
        <div className={styles.socials}>
          <a href="https://au.linkedin.com/company/ras-vertex" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span aria-hidden="true">,</span>
          <a href="https://www.instagram.com/rasvertex/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span aria-hidden="true">,</span>
          <a href="https://www.facebook.com/rasvertex/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <span className={styles.small}>Sunshine Coast, QLD</span>
      </div>
    </footer>
  );
}

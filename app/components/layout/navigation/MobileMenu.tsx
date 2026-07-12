// app/components/layout/navigation/MobileMenu.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  servicesData,
  companyLinks,
  type ServiceKey,
} from "../../../data/navigationData";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const serviceKeys = Object.keys(servicesData) as ServiceKey[];
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Header */}
          <div className={styles.header}>
            <Link href="/" onClick={onClose} aria-label="RAS-VERTEX home">
              <Image
                src="/logo.png"
                alt="RAS-VERTEX"
                width={192}
                height={48}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close menu"
            >
              <span />
              <span />
            </button>
          </div>

          {/* Nav */}
          <nav className={styles.nav} aria-label="Mobile navigation links">
            <div className={styles.servicesCard}>
              <h2 className={styles.srOnly}>Services</h2>
              {serviceKeys.map((key) => {
                const active = pathname === servicesData[key].href;
                return (
                  <Link
                    key={key}
                    href={servicesData[key].href}
                    className={`${styles.serviceItem} ${active ? styles.serviceItemActive : ""}`}
                    onClick={onClose}
                  >
                    {servicesData[key].name}
                  </Link>
                );
              })}
            </div>

            <div className={styles.companyCard}>
              <h2 className={styles.sectionHeading}>Company</h2>

              <div className={styles.companyList}>
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.companyItem}
                    onClick={onClose}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={styles.arrow}
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
                ))}
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className={styles.cta}>
            <div className={styles.ctaInner}>
              <div className={styles.avatar} aria-hidden="true">
                <Image
                  src="/images/people/caro.jpg"
                  alt="Hylton Denton — Project Manager at RAS-VERTEX"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="80px"
                />
              </div>
              <div className={styles.ctaText}>
                <p className={styles.ctaHeading}>
                  Ready to talk about your project?
                </p>
                <p className={styles.ctaBody}>
                  One call to Hylton and you'll know exactly where you stand.
                </p>
              </div>
            </div>
            <Link href="/contact" className={styles.ctaBtn} onClick={onClose}>
              Let's talk about your project
              <svg
                className={styles.ctaBtnArrow}
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
            <a href="tel:0731300226" className={styles.callBtn}>
              Call us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

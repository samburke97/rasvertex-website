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
          <div className={`${styles.header} px-5 md:px-10`}>
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
          <nav
            className={`${styles.nav} px-5 md:px-10`}
            aria-label="Mobile navigation links"
          >
            <div className={styles.servicesCard}>
              <h2 className={styles.servicesHeading}>Services</h2>
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
                {companyLinks.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${styles.companyItem} ${active ? styles.companyItemActive : ""}`}
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className={`${styles.cta} px-5 md:px-10`}>
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
            <a
              href="tel:0753710201"
              className={styles.callBtn}
              aria-label="Call RAS-VERTEX on 07 5371 0201"
            >
              <svg
                className={styles.callBtnIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.04 1.5c-.4 0-.79.16-1.07.45L1.7 3.22c-.5.5-.65 1.25-.38 1.9.95 2.27 2.4 4.36 4.26 6.22 1.86 1.86 3.95 3.3 6.22 4.26.65.27 1.4.12 1.9-.38l1.27-1.27c.59-.6.59-1.55 0-2.15l-1.86-1.86c-.5-.5-1.27-.62-1.9-.3l-1.02.51a.85.85 0 0 1-.95-.16L6.3 7.05a.85.85 0 0 1-.16-.95l.51-1.02c.32-.63.2-1.4-.3-1.9L4.49 1.32a1.5 1.5 0 0 0-.45-.21V1.5z" />
              </svg>
              07 5371 0201
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

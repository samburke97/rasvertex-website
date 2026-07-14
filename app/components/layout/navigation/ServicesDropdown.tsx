// app/components/layout/navigation/ServicesDropdown.tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { servicesData, type ServiceKey } from "../../../data/navigationData";
import styles from "./ServicesDropdown.module.css";

type ServicesDropdownProps = {
  isOpen: boolean;
  activeService: ServiceKey | null;
  setActiveService: (service: ServiceKey | null) => void;
  onClose: () => void;
};

export default function ServicesDropdown({
  isOpen,
  activeService,
  setActiveService,
  onClose,
}: ServicesDropdownProps) {
  const keys = Object.keys(servicesData) as ServiceKey[];

  useEffect(() => {
    if (isOpen && activeService === null) {
      setActiveService(keys[0]);
    }
    if (!isOpen) {
      setActiveService(null);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.megaMenuWrapper}>
          <motion.div
            className={styles.megaMenu}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
          >
            <div className={styles.content}>
              {/* Service list */}
              <div className={styles.servicesList}>
                {keys.map((key) => (
                  <Link
                    key={key}
                    href={servicesData[key].href}
                    onMouseEnter={() => setActiveService(key)}
                    onClick={onClose}
                    className={`${styles.serviceButton} ${activeService === key ? styles.active : ""}`}
                  >
                    <h4 className={styles.serviceName}>{servicesData[key].name}</h4>
                  </Link>
                ))}
              </div>

              {/* Expanded panel */}
              <AnimatePresence mode="wait">
                {activeService && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className={styles.expandedSection}
                  >
                    <div className={styles.serviceContent}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeService}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className={styles.contentColumn}
                        >
                          <p className={styles.serviceDescription}>
                            {servicesData[activeService].description}
                          </p>
                          <div className={styles.servicePills}>
                            {servicesData[activeService].subServices.map(
                              (s) => (
                                <Link key={s.label} href={s.href} onClick={onClose} className={styles.pill}>
                                  {s.label}
                                </Link>
                              ),
                            )}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className={styles.serviceImage}
                      >
                        <Image
                          src={servicesData[activeService].image}
                          alt={servicesData[activeService].name}
                          fill
                          sizes="(max-width: 1024px) 340px, (max-width: 1280px) 400px, 360px"
                          style={{ objectFit: "cover" }}
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// app/components/layout/navigation/ServicesDropdown.tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { servicesData, type ServiceKey } from "../../../data/navigationData";
import styles from "./ServicesDropdown.module.css";

type ServicesDropdownProps = {
  isOpen: boolean;
  activeService: ServiceKey | null;
  setActiveService: (service: ServiceKey | null) => void;
};

const serviceImages: Record<ServiceKey, string> = {
  painting: "/nav/painting.png",
  building: "/nav/cleaning.png",
  window: "/nav/window.png",
  waterproofing: "/nav/waterproofing.png",
  maintenance: "/nav/maintenance.png",
  height: "/nav/height.png",
  inspections: "/nav/maintenance.png",
};

export default function ServicesDropdown({
  isOpen,
  activeService,
  setActiveService,
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
            animate={{ opacity: 1, y: 0, width: 1100 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ opacity: { duration: 0.2 }, y: { duration: 0.2 } }}
          >
            <div className={styles.content}>
              {/* Service list */}
              <div className={styles.servicesList}>
                {keys.map((key) => (
                  <button
                    key={key}
                    onMouseEnter={() => setActiveService(key)}
                    className={`${styles.serviceButton} ${activeService === key ? styles.active : ""}`}
                  >
                    {servicesData[key].name.toUpperCase()}
                  </button>
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
                                <span key={s} className={styles.pill}>
                                  {s}
                                </span>
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
                          src={serviceImages[activeService]}
                          alt={servicesData[activeService].name}
                          fill
                          sizes="320px"
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

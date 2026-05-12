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
};

export default function ServicesDropdown({
  isOpen,
  activeService,
  setActiveService,
}: ServicesDropdownProps) {
  const isExpanded = activeService !== null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.megaMenuWrapper}>
          <motion.div
            className={styles.megaMenu}
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: 1,
              y: 0,
              width: isExpanded ? 1200 : 280,
            }}
            exit={{ opacity: 0, y: 6 }}
            transition={{
              opacity: { duration: 0.2 },
              y: { duration: 0.2 },
              width: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <div className={styles.content}>
              <div className={styles.servicesList}>
                {(Object.keys(servicesData) as ServiceKey[]).map((key) => (
                  <button
                    key={key}
                    onMouseEnter={() => setActiveService(key)}
                    className={`${styles.serviceButton} ${activeService === key ? styles.active : ""}`}
                  >
                    {servicesData[key].name.toUpperCase()}
                  </button>
                ))}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={styles.logoContainer}
                  />
                )}
              </div>

              <AnimatePresence>
                {isExpanded && (
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
                            {servicesData[activeService!].description}
                          </p>
                          <div className={styles.servicePills}>
                            {servicesData[activeService!].subServices.map(
                              (service) => (
                                <span key={service} className={styles.pill}>
                                  {service}
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
                          src={serviceImages[activeService!]}
                          alt={servicesData[activeService!].name}
                          fill
                          sizes="400px"
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

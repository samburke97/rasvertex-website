import { motion, AnimatePresence } from "framer-motion";
import { servicesData, type ServiceKey } from "../../data/navigationData";
import styles from "./ServicesDropdown.module.css";

type ServicesDropdownProps = {
  isOpen: boolean;
  activeService: ServiceKey;
  setActiveService: (service: ServiceKey) => void;
};

export default function ServicesDropdown({
  isOpen,
  activeService,
  setActiveService,
}: ServicesDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={styles.megaMenu}
        >
          <div className={styles.megaMenuContent}>
            <div className={styles.servicesList}>
              {(Object.keys(servicesData) as ServiceKey[]).map((key) => (
                <button
                  key={key}
                  onMouseEnter={() => setActiveService(key)}
                  className={`${styles.serviceButton} ${
                    activeService === key ? styles.active : ""
                  }`}
                >
                  {servicesData[key].name.toUpperCase()}
                </button>
              ))}
            </div>

            <div className={styles.serviceContent}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className={styles.serviceDetails}
                >
                  <div className={styles.serviceInfo}>
                    <p className={styles.serviceDescription}>
                      {servicesData[activeService].description}
                    </p>

                    <div className={styles.servicePills}>
                      {servicesData[activeService].subServices.map(
                        (service) => (
                          <span key={service} className={styles.pill}>
                            {service}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className={styles.serviceImage}>
                    <span className={styles.imagePlaceholder}>
                      Image placeholder
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

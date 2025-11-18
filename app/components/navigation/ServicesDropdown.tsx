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
          {/* 3 Column Layout */}
          <div className={styles.threeColumnGrid}>
            {/* Column 1: Service Categories - Top Left */}
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

            {/* Column 2: Description at top, Pills at bottom with space between */}
            <div className={styles.serviceContent}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.contentColumn}
                >
                  {/* Description at the top */}
                  <p className={styles.serviceDescription}>
                    {servicesData[activeService].description}
                  </p>

                  {/* Pills at the very bottom - space between */}
                  <div className={styles.servicePills}>
                    {servicesData[activeService].subServices.map((service) => (
                      <span key={service} className={styles.pill}>
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Column 3: Image - Full height of the blob */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.serviceImage}
              >
                <span className={styles.imagePlaceholder}>
                  Image placeholder ({servicesData[activeService].name})
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

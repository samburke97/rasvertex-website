import { motion, AnimatePresence } from "framer-motion";
import { servicesData, type ServiceKey } from "../../data/navigationData";
import styles from "./ServicesDropdown.module.css";

type ServicesDropdownProps = {
  isOpen: boolean;
  activeService: ServiceKey | null;
  setActiveService: (service: ServiceKey | null) => void;
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
        <motion.div
          className={styles.megaMenu}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            width: isExpanded ? 1200 : 280, // Width expands right
          }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            opacity: { duration: 0.2 },
            y: { duration: 0.2 },
            width: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <div className={styles.content}>
            {/* Service list - ALWAYS visible, stays in same position */}
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

            {/* Expanded content - fades in on the right */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className={styles.expandedSection}
                >
                  {/* Column 2: Description + Pills */}
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
                            (service) => (
                              <span key={service} className={styles.pill}>
                                {service}
                              </span>
                            )
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Column 3: Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className={styles.serviceImage}
                    >
                      <span className={styles.imagePlaceholder}>
                        Image placeholder ({servicesData[activeService].name})
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

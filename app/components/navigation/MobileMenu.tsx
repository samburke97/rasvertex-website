import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown2 } from "iconsax-react";
import {
  servicesData,
  companyMain,
  companySecondary,
  locations,
  type ServiceKey,
} from "../../data/navigationData";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  isOpen: boolean;
  servicesOpen: boolean;
  setServicesOpen: (open: boolean) => void;
  companyOpen: boolean;
  setCompanyOpen: (open: boolean) => void;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  servicesOpen,
  setServicesOpen,
  companyOpen,
  setCompanyOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={styles.mobileMenu}
        >
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileSection}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={styles.mobileSectionButton}
              >
                SERVICES
                <ArrowDown2
                  size={20}
                  className={`${styles.arrowIcon} ${
                    servicesOpen ? styles.open : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className={styles.mobileDropdownContent}>
                  <div className={styles.mobileServicesList}>
                    {(Object.keys(servicesData) as ServiceKey[]).map((key) => (
                      <Link
                        key={key}
                        href={servicesData[key].href}
                        className={styles.mobileServiceLink}
                        onClick={onClose}
                      >
                        {servicesData[key].name.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.mobileSection}>
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className={styles.mobileSectionButton}
              >
                COMPANY
                <ArrowDown2
                  size={20}
                  className={`${styles.arrowIcon} ${
                    companyOpen ? styles.open : ""
                  }`}
                />
              </button>
              {companyOpen && (
                <div
                  className={`${styles.mobileDropdownContent} ${styles.company}`}
                >
                  <div className={styles.mobileCompanyContent}>
                    <div className={styles.mobileCompanySection}>
                      {companyMain.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={styles.mobileCompanyLink}
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div
                      className={`${styles.mobileCompanySection} ${styles.mobileCompanySectionDivider}`}
                    >
                      {companySecondary.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`${styles.mobileCompanyLink} ${styles.secondary}`}
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div
                      className={`${styles.mobileCompanySection} ${styles.mobileCompanySectionDivider}`}
                    >
                      <p className={styles.mobileLocationsLabel}>LOCATIONS</p>
                      {locations.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`${styles.mobileCompanyLink} ${styles.secondary}`}
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.mobileCtaButtons}>
              <a href="tel:0731300226" className={styles.mobileCallButton}>
                Call
              </a>
              <Link
                href="/quote"
                className={styles.mobileQuoteButton}
                onClick={onClose}
              >
                Quote →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

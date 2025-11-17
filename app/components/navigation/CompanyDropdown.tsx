import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  companyMain,
  companySecondary,
  locations,
} from "../../data/navigationData";
import styles from "./CompanyDropdown.module.css";

type CompanyDropdownProps = {
  isOpen: boolean;
};

export default function CompanyDropdown({ isOpen }: CompanyDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={styles.companyDropdown}
        >
          <div className={styles.companyGrid}>
            <div className={styles.companyColumn}>
              {companyMain.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.companyLink} ${styles.main}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={styles.companyColumn}>
              {companySecondary.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.companyLink}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={styles.companyColumn}>
              {locations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.companyLink}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

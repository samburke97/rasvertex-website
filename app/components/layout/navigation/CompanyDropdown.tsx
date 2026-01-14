import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  companyMain,
  companySecondary,
  locations,
} from "../../../data/navigationData";
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
          {/* Row 1: Main headings in Bebas, stacked vertically, left side */}
          <div className={styles.headingsSection}>
            {companyMain.map((item) => (
              <Link key={item.name} href={item.href} className={styles.heading}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Row 2: Two columns with Inter links */}
          <div className={styles.linksSection}>
            <div className={styles.column}>
              {companySecondary.map((item) => (
                <Link key={item.name} href={item.href} className={styles.link}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className={styles.column}>
              {locations.map((item) => (
                <Link key={item.name} href={item.href} className={styles.link}>
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

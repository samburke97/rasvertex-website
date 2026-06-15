// app/components/layout/navigation/CompanyDropdown.tsx
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { companyLinks, companySecondary } from "../../../data/navigationData";
import styles from "./CompanyDropdown.module.css";

type CompanyDropdownProps = {
  isOpen: boolean;
};

export default function CompanyDropdown({ isOpen }: CompanyDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.companyDropdownWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className={styles.companyDropdown}
          >
            <div className={styles.primary}>
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.heading}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={styles.secondary}>
              {companySecondary.map((item) => (
                <Link key={item.name} href={item.href} className={styles.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

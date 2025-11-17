import Link from "next/link";
import { ArrowDown2 } from "iconsax-react";
import { ServiceKey } from "../../data/navigationData";
import styles from "./DesktopNav.module.css";

type DesktopNavProps = {
  servicesOpen: boolean;
  setServicesOpen: (open: boolean) => void;
  companyOpen: boolean;
  setCompanyOpen: (open: boolean) => void;
  activeService: ServiceKey;
  setActiveService: (service: ServiceKey) => void;
};

export default function DesktopNav({
  servicesOpen,
  setServicesOpen,
  companyOpen,
  setCompanyOpen,
  activeService,
  setActiveService,
}: DesktopNavProps) {
  return (
    <div className={styles.desktopMenu}>
      <div
        className={styles.dropdown}
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button className={styles.menuButton}>
          SERVICES
          <ArrowDown2
            size={16}
            className={`${styles.arrowIcon} ${servicesOpen ? styles.open : ""}`}
          />
        </button>
      </div>

      <div
        className={styles.dropdown}
        onMouseEnter={() => setCompanyOpen(true)}
        onMouseLeave={() => setCompanyOpen(false)}
      >
        <button className={styles.menuButton}>
          COMPANY
          <ArrowDown2
            size={16}
            className={`${styles.arrowIcon} ${companyOpen ? styles.open : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

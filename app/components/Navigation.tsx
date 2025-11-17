"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import { type ServiceKey } from "../data/navigationData";
import DesktopNav from "../components/navigation/CompanyDropdown";
import ServicesDropdown from "../components/navigation/ServicesDropdown";
import CompanyDropdown from "../components/navigation/CompanyDropdown";
import MobileMenu from "../components/navigation/MobileMenu";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceKey>("painting");
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="RAS-VERTEX Logo"
                width={200}
                height={60}
                priority
              />
            </Link>

            <DesktopNav
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
              companyOpen={companyOpen}
              setCompanyOpen={setCompanyOpen}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>

          <div className={styles.ctaButtons}>
            <a href="tel:0731300226" className={styles.phoneButton}>
              (07) 3130 0226
            </a>
            <Link href="/quote" className={styles.quoteButton}>
              Free Quote →
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileMenuButton}
          >
            {mobileMenuOpen ? (
              <CloseSquare size={32} />
            ) : (
              <HambergerMenu size={32} />
            )}
          </button>
        </div>
      </div>

      <ServicesDropdown
        isOpen={servicesOpen}
        activeService={activeService}
        setActiveService={setActiveService}
      />

      <CompanyDropdown isOpen={companyOpen} />

      <MobileMenu
        isOpen={mobileMenuOpen}
        servicesOpen={servicesOpen}
        setServicesOpen={setServicesOpen}
        companyOpen={companyOpen}
        setCompanyOpen={setCompanyOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
}

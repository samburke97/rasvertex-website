"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HambergerMenu, CloseSquare, ArrowDown2 } from "iconsax-react";
import { type ServiceKey } from "../data/navigationData";
import ServicesDropdown from "./navigation/ServicesDropdown";
import CompanyDropdown from "./navigation/CompanyDropdown";
import MobileMenu from "./navigation/MobileMenu";
import styles from "./Navigation.module.css";
import Container from "./Container";

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
      <Container size="xl">
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.leftSection}>
              <Link href="/" className={styles.logo}></Link>

              <div className={styles.desktopMenu}>
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={styles.menuButton}>
                    Services
                    <ArrowDown2
                      size={16}
                      className={`${styles.arrowIcon} ${
                        servicesOpen ? styles.open : ""
                      }`}
                    />
                  </button>
                  <ServicesDropdown
                    isOpen={servicesOpen}
                    activeService={activeService}
                    setActiveService={setActiveService}
                  />
                </div>

                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <button className={styles.menuButton}>
                    Company
                    <ArrowDown2
                      size={16}
                      className={`${styles.arrowIcon} ${
                        companyOpen ? styles.open : ""
                      }`}
                    />
                  </button>
                  <CompanyDropdown isOpen={companyOpen} />
                </div>
              </div>
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

        <MobileMenu
          isOpen={mobileMenuOpen}
          servicesOpen={servicesOpen}
          setServicesOpen={setServicesOpen}
          companyOpen={companyOpen}
          setCompanyOpen={setCompanyOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </Container>
    </nav>
  );
}

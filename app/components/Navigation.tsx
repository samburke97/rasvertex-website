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
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const [companyOpen, setCompanyOpen] = useState(false);

  // Reset activeService when dropdown closes for clean two-stage behavior
  useEffect(() => {
    if (!servicesOpen) {
      setActiveService(null);
    }
  }, [servicesOpen]);

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
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <Link href="/" className={styles.logo}>
              {/* <Image
                src="/logo.png"
                alt="RAS-VERTEX"
                width={120}
                height={30}
                priority
              /> */}
            </Link>

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

            {/* Hamburger menu - hidden on desktop */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseSquare size={32} />
              ) : (
                <HambergerMenu size={32} />
              )}
            </button>
          </div>

          {/* CTA buttons - desktop only */}
          <div className={styles.ctaButtons}>
            <a href="tel:(07)31300226" className={styles.phoneButton}>
              (07) 3130 0226
            </a>
            <button className={styles.quoteButton}>Free Quote →</button>
          </div>
        </div>
      </Container>

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

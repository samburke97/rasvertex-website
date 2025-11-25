"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HambergerMenu, CloseSquare } from "iconsax-react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

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

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // Check if at top
      setIsAtTop(currentScrollY < 10);

      // Hide/show based on scroll direction
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 300) {
        // Scrolling down and past 300px (hero section)
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop overlay */}
      {(servicesOpen || companyOpen) && <div className={styles.backdrop} />}

      <nav
        className={`${styles.nav} ${
          isVisible ? styles.visible : styles.hidden
        } ${isAtTop ? styles.atTop : ""}`}
      >
        <Container size="xl">
          <div className={styles.wrapper}>
            <div className={styles.leftSection}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="RAS-VERTEX"
                  width={175}
                  height={50}
                  priority
                />
              </Link>

              <div className={styles.desktopMenu}>
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={styles.menuButton}>
                    Services
                    <Image
                      src="/icons/utility-outline/down.svg"
                      alt="Select"
                      width={16}
                      height={16}
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
                    <Image
                      src="/icons/utility-outline/down.svg"
                      alt="Select"
                      width={16}
                      height={16}
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

            <div className={styles.ctaButtons}>
              {/* Search */}
              <Link href="/search" className={styles.iconButton}>
                <Image
                  src="/icons/utility-outline/search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                />
              </Link>

              {/* Phone */}
              <a href="tel:+61754911588" className={styles.iconButton}>
                <Image
                  src="/icons/utility-outline/phone.svg"
                  alt="Call us"
                  width={20}
                  height={20}
                />
              </a>

              {/* Free Quote */}
              <Link href="/quote" className={styles.quoteButton}>
                Free Quote
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        servicesOpen={servicesOpen}
        setServicesOpen={setServicesOpen}
        activeService={activeService}
        setActiveService={setActiveService}
        companyOpen={companyOpen}
        setCompanyOpen={setCompanyOpen}
      />
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import { type ServiceKey } from "../../../data/navigationData";
import ServicesDropdown from "./ServicesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import MobileMenu from "./MobileMenu";
import styles from "./Navigation.module.css";
import Container from "../../../components/ui/Container";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

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

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 10);

      const headlineBlock = document.querySelector("[data-headline]");
      const pastHeadline = headlineBlock
        ? headlineBlock.getBoundingClientRect().bottom < 72
        : currentScrollY > 300;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && pastHeadline) {
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
      {(servicesOpen || companyOpen) && <div className={styles.backdrop} />}

      <nav
        className={`${styles.nav} ${
          isVisible ? styles.visible : styles.hidden
        } ${isAtTop ? styles.atTop : ""}`}
      >
        <Container size="xl">
          <div className={styles.wrapper}>
            {/* ── Left: logo + nav links ── */}
            <div className={styles.leftSection}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="RAS-VERTEX"
                  width={160}
                  height={40}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Link>

              {/* Desktop nav links — beside logo */}
              <div className={styles.desktopMenu}>
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`${styles.menuButton} ${servicesOpen ? styles.active : ""}`}
                  >
                    Services
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
                  <button
                    className={`${styles.menuButton} ${companyOpen ? styles.active : ""}`}
                  >
                    Company
                  </button>
                  <CompanyDropdown isOpen={companyOpen} />
                </div>

                <Link href="/process" className={styles.menuLink}>
                  Process
                </Link>

                <Link href="/work" className={styles.menuLink}>
                  Work
                </Link>
              </div>

              {/* Hamburger — mobile only */}
              <button
                className={styles.mobileMenuButton}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <CloseSquare size={28} />
                ) : (
                  <HambergerMenu size={28} />
                )}
              </button>
            </div>

            {/* ── Right: Search + Contact ── */}
            <div className={styles.ctaButtons}>
              <Link
                href="/search"
                className={styles.iconButton}
                aria-label="Search"
              >
                <Image
                  src="/icons/utility-outline/search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                />
              </Link>

              <Link href="/contact" className={styles.contactButton}>
                Contact Us
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

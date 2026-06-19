// app/components/layout/navigation/Navigation.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { type ServiceKey, companyLinks } from "../../../data/navigationData";
import ServicesDropdown from "./ServicesDropdown";
import MobileMenu from "./MobileMenu";
import styles from "./Navigation.module.css";
import Container from "../../../components/ui/Container";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const closeServices = () => {
    setServicesOpen(false);
    setActiveService(null);
  };

  useEffect(() => {
    document.body.style.overflow =
      servicesOpen || mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [servicesOpen, mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentScrollY = window.scrollY;
      const headlineBlock = document.querySelector("[data-headline]");
      const pastHeadline = headlineBlock
        ? headlineBlock.getBoundingClientRect().bottom < 72
        : currentScrollY > 300;

      if (currentScrollY < lastScrollY) setIsVisible(true);
      else if (currentScrollY > lastScrollY && pastHeadline)
        setIsVisible(false);

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navVisible = isVisible || servicesOpen || mobileMenuOpen;

  return (
    <>
      {servicesOpen && <div className={styles.backdrop} />}

      <nav
        aria-label="Main navigation"
        className={`${styles.nav} ${navVisible ? styles.visible : styles.hidden}`}
      >
        <Container size="xl">
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <Link
                href="/"
                className={styles.logo}
                aria-label="RAS-VERTEX home"
              >
                <Image
                  src="/logo.png"
                  alt="RAS-VERTEX"
                  width={160}
                  height={40}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Link>

              <div className={styles.desktopMenu}>
                {/* Services dropdown */}
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={closeServices}
                >
                  <button
                    className={`${styles.menuButton} ${servicesOpen ? styles.active : ""}`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    Services
                  </button>
                  <ServicesDropdown
                    isOpen={servicesOpen}
                    activeService={activeService}
                    setActiveService={setActiveService}
                  />
                </div>

                {/* Flat company links */}
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.menuLink}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.right}>
              <a
                href="tel:0753710201"
                className={styles.phoneButton}
                aria-label="Call RAS-VERTEX on 07 5371 0201"
              >
                <svg
                  className={styles.phoneIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.04 1.5c-.4 0-.79.16-1.07.45L1.7 3.22c-.5.5-.65 1.25-.38 1.9.95 2.27 2.4 4.36 4.26 6.22 1.86 1.86 3.95 3.3 6.22 4.26.65.27 1.4.12 1.9-.38l1.27-1.27c.59-.6.59-1.55 0-2.15l-1.86-1.86c-.5-.5-1.27-.62-1.9-.3l-1.02.51a.85.85 0 0 1-.95-.16L6.3 7.05a.85.85 0 0 1-.16-.95l.51-1.02c.32-.63.2-1.4-.3-1.9L4.49 1.32a1.5 1.5 0 0 0-.45-.21V1.5z" />
                </svg>
                07 5371 0201
              </a>
              <Link href="/contact" className={styles.contactButton}>
                Contact Us →
              </Link>
              <button
                className={styles.mobileMenuButton}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

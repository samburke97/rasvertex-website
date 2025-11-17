"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HambergerMenu, CloseSquare, ArrowDown2 } from "iconsax-react";
import {
  servicesData,
  companyMain,
  companySecondary,
  locations,
  type ServiceKey,
} from "../data/navigationData";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceKey>("painting");
  const [companyOpen, setCompanyOpen] = useState(false);

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
                    className={`${styles.arrowIcon} ${
                      servicesOpen ? styles.open : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={styles.megaMenu}
                    >
                      <div className={styles.megaMenuContent}>
                        <div className={styles.servicesList}>
                          {(Object.keys(servicesData) as ServiceKey[]).map(
                            (key) => (
                              <button
                                key={key}
                                onMouseEnter={() => setActiveService(key)}
                                className={`${styles.serviceButton} ${
                                  activeService === key ? styles.active : ""
                                }`}
                              >
                                {servicesData[key].name.toUpperCase()}
                              </button>
                            )
                          )}
                        </div>

                        <div className={styles.serviceContent}>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeService}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className={styles.serviceDetails}
                            >
                              <div className={styles.serviceInfo}>
                                <p className={styles.serviceDescription}>
                                  {servicesData[activeService].description}
                                </p>

                                <div className={styles.servicePills}>
                                  {servicesData[activeService].subServices.map(
                                    (service) => (
                                      <span
                                        key={service}
                                        className={styles.pill}
                                      >
                                        {service}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>

                              <div className={styles.serviceImage}>
                                <span className={styles.imagePlaceholder}>
                                  Image placeholder
                                </span>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                    className={`${styles.arrowIcon} ${
                      companyOpen ? styles.open : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {companyOpen && (
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileSection}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={styles.mobileSectionButton}
                >
                  SERVICES
                  <ArrowDown2
                    size={20}
                    className={`${styles.arrowIcon} ${
                      servicesOpen ? styles.open : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className={styles.mobileDropdownContent}>
                    <div className={styles.mobileServicesList}>
                      {(Object.keys(servicesData) as ServiceKey[]).map(
                        (key) => (
                          <Link
                            key={key}
                            href={servicesData[key].href}
                            className={styles.mobileServiceLink}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {servicesData[key].name.toUpperCase()}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.mobileSection}>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className={styles.mobileSectionButton}
                >
                  COMPANY
                  <ArrowDown2
                    size={20}
                    className={`${styles.arrowIcon} ${
                      companyOpen ? styles.open : ""
                    }`}
                  />
                </button>
                {companyOpen && (
                  <div
                    className={`${styles.mobileDropdownContent} ${styles.company}`}
                  >
                    <div className={styles.mobileCompanyContent}>
                      <div className={styles.mobileCompanySection}>
                        {companyMain.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={styles.mobileCompanyLink}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div
                        className={`${styles.mobileCompanySection} ${styles.mobileCompanySectionDivider}`}
                      >
                        {companySecondary.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`${styles.mobileCompanyLink} ${styles.secondary}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div
                        className={`${styles.mobileCompanySection} ${styles.mobileCompanySectionDivider}`}
                      >
                        <p className={styles.mobileLocationsLabel}>LOCATIONS</p>
                        {locations.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`${styles.mobileCompanyLink} ${styles.secondary}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.mobileCtaButtons}>
                <a href="tel:0731300226" className={styles.mobileCallButton}>
                  Call
                </a>
                <Link
                  href="/quote"
                  className={styles.mobileQuoteButton}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quote →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

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

const bebasFont = { fontFamily: "'Bebas Neue', Arial, sans-serif" };

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceKey>("painting");
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="RAS-VERTEX Logo"
                width={200}
                height={60}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-12">
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-navy hover:text-red transition-colors py-6 text-xl tracking-wide"
                  style={bebasFont}
                >
                  SERVICES
                  <ArrowDown2
                    size={16}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
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
                      className="absolute top-full left-0 mt-2 w-[1000px] rounded-3xl shadow-xl p-8"
                      style={{
                        background:
                          "linear-gradient(to bottom right, var(--sky-from), var(--sky-to))",
                      }}
                    >
                      <div className="flex gap-6">
                        <div className="w-56 space-y-0 flex-shrink-0">
                          {(Object.keys(servicesData) as ServiceKey[]).map(
                            (key) => (
                              <button
                                key={key}
                                onMouseEnter={() => setActiveService(key)}
                                className={`w-full text-left px-4 py-2 transition-colors text-xl tracking-wide ${
                                  activeService === key
                                    ? "text-navy"
                                    : "text-navy/40 hover:text-navy"
                                }`}
                                style={bebasFont}
                              >
                                {servicesData[key].name.toUpperCase()}
                              </button>
                            )
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeService}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className="flex gap-6"
                            >
                              <div className="flex-1">
                                <p className="text-navy text-sm leading-relaxed mb-4">
                                  {servicesData[activeService].description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {servicesData[activeService].subServices.map(
                                    (service) => (
                                      <span
                                        key={service}
                                        className="text-xs px-3 py-1.5 bg-white rounded-full text-navy border border-navy/10 tracking-wide"
                                        style={bebasFont}
                                      >
                                        {service}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>

                              <div className="w-72 h-52 rounded-2xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                                <span className="text-gray-400 text-sm">
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
                className="relative"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-navy hover:text-red transition-colors py-6 text-xl tracking-wide"
                  style={bebasFont}
                >
                  COMPANY
                  <ArrowDown2
                    size={16}
                    className={`transition-transform duration-200 ${
                      companyOpen ? "rotate-180" : ""
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
                      className="absolute top-full right-0 mt-2 w-[700px] bg-cream rounded-3xl shadow-xl p-8"
                    >
                      <div className="grid grid-cols-3 gap-8">
                        <div className="space-y-2">
                          {companyMain.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-navy hover:text-red font-semibold transition-colors text-sm"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {companySecondary.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-navy hover:text-red font-normal transition-colors text-sm"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {locations.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-navy hover:text-red font-normal transition-colors text-sm"
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

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0731300226"
              className="flex items-center justify-center px-6 py-2.5 border-2 border-navy text-navy rounded-full hover:bg-navy hover:text-white transition-all font-medium text-[15px]"
            >
              (07) 3130 0226
            </a>
            <Link
              href="/quote"
              className="px-6 py-2.5 bg-red text-white rounded-full hover:bg-red-dark transition-all font-medium text-[15px]"
            >
              Free Quote →
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-navy"
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
            className="lg:hidden bg-white border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-6 py-6 space-y-6">
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left text-navy py-2 text-2xl tracking-wide"
                  style={bebasFont}
                >
                  SERVICES
                  <ArrowDown2
                    size={20}
                    className={`transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div
                    className="mt-4 rounded-3xl p-6"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--sky-from), var(--sky-to))",
                    }}
                  >
                    <div className="space-y-4">
                      {(Object.keys(servicesData) as ServiceKey[]).map(
                        (key) => (
                          <Link
                            key={key}
                            href={servicesData[key].href}
                            className="block text-navy text-xl tracking-wide hover:text-red transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                            style={bebasFont}
                          >
                            {servicesData[key].name.toUpperCase()}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="flex items-center justify-between w-full text-left text-navy py-2 text-2xl tracking-wide"
                  style={bebasFont}
                >
                  COMPANY
                  <ArrowDown2
                    size={20}
                    className={`transition-transform ${
                      companyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {companyOpen && (
                  <div className="mt-4 bg-cream rounded-3xl p-6">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        {companyMain.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-navy font-bold text-lg hover:text-red transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2 pt-4 border-t border-navy/10">
                        {companySecondary.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-navy font-normal text-base hover:text-red transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2 pt-4 border-t border-navy/10">
                        <p
                          className="text-navy/60 text-sm font-semibold mb-2 tracking-wide"
                          style={bebasFont}
                        >
                          LOCATIONS
                        </p>
                        {locations.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-navy font-normal text-base hover:text-red transition-colors"
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

              <div className="pt-6 space-y-3 border-t border-gray-200">
                <a
                  href="tel:0731300226"
                  className="block text-center w-full px-6 py-3 border-2 border-navy text-navy rounded-full font-medium"
                >
                  Call
                </a>
                <Link
                  href="/quote"
                  className="block text-center w-full px-6 py-3 bg-red text-white rounded-full font-medium"
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

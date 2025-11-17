"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HambergerMenu, CloseSquare, ArrowDown2 } from "iconsax-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState("painting");
  const [companyOpen, setCompanyOpen] = useState(false);

  const servicesData = {
    painting: {
      name: "Painting",
      href: "/services/painting",
      description:
        "Professional interior and exterior painting services for commercial and residential properties. Quality finishes that last.",
      image: "/images/services/painting.jpg",
      subServices: [
        "INTERIOR PAINTING",
        "EXTERIOR PAINTING",
        "HERITAGE PAINTING",
        "COLOUR CONSULTING",
        "PRE-SALE PAINTING",
        "STRATA PAINTING",
        "RENDER PAINTING",
        "ROOF PAINTING",
        "COLORBOND ROOF PAINTING",
        "METAL ROOF PAINTING",
        "TILED ROOF PAINTING",
      ],
    },
    building: {
      name: "Building Cleaning",
      href: "/services/building-cleaning",
      description:
        "Comprehensive building maintenance and cleaning services. Pressure washing, facade cleaning, and complete building care.",
      image: "/images/services/building-cleaning.jpg",
      subServices: [
        "PRESSURE WASHING",
        "FACADE CLEANING",
        "RENDER CLEANING",
        "GRAFFITI REMOVAL",
        "CONCRETE CLEANING",
        "BUILDING WASH",
        "DRIVEWAY CLEANING",
        "PAVER CLEANING",
      ],
    },
    window: {
      name: "Window Cleaning",
      href: "/services/window-cleaning",
      description:
        "High-rise and commercial window cleaning with full IRATA certification. Safe, professional, and compliant services.",
      image: "/images/services/window-cleaning.jpg",
      subServices: [
        "HIGH-RISE WINDOWS",
        "ROPE ACCESS",
        "COMMERCIAL WINDOWS",
        "STRATA WINDOWS",
        "SOLAR PANEL CLEANING",
        "GUTTER CLEANING",
        "SKYLIGHT CLEANING",
      ],
    },
    waterproofing: {
      name: "Waterproofing",
      href: "/services/waterproofing",
      description:
        "Expert waterproofing solutions for balconies, roofs, and wet areas. Long-term warranties and proven protection.",
      image: "/images/services/waterproofing.jpg",
      subServices: [
        "BALCONY WATERPROOFING",
        "ROOF WATERPROOFING",
        "BATHROOM WATERPROOFING",
        "DECK WATERPROOFING",
        "LEAK DETECTION",
        "MEMBRANE SYSTEMS",
        "TANKING",
        "WATER DAMAGE REPAIR",
      ],
    },
    maintenance: {
      name: "Maintenance",
      href: "/services/maintenance",
      description:
        "Ongoing building maintenance and repair services to keep your property in top condition year-round.",
      image: "/images/services/maintenance.jpg",
      subServices: [
        "PREVENTATIVE MAINTENANCE",
        "REACTIVE REPAIRS",
        "BUILDING INSPECTIONS",
        "GUTTER CLEANING",
        "MINOR REPAIRS",
        "SCHEDULED SERVICING",
        "EMERGENCY REPAIRS",
      ],
    },
    height: {
      name: "Height Safety",
      href: "/services/height-safety",
      description:
        "Complete height safety systems, certification, and compliance. IRATA certified technicians and full safety compliance.",
      image: "/images/services/height-safety.jpg",
      subServices: [
        "ANCHOR POINT INSTALLATION",
        "SAFETY LINE SYSTEMS",
        "ANNUAL INSPECTIONS",
        "COMPLIANCE CERTIFICATES",
        "SAFETY TRAINING",
        "IRATA SERVICES",
        "RESCUE PLANS",
      ],
    },
  };

  const companyMain = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Project Portfolio", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
  ];

  const companySecondary = [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Get a Quote", href: "/quote" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
  ];

  const locations = [
    { name: "Sunshine Coast", href: "/locations/sunshine-coast" },
    { name: "Brisbane", href: "/locations/brisbane" },
    { name: "Gold Coast", href: "/locations/gold-coast" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-display tracking-tight text-[#0F172A]">
                  RAS-<span className="text-[#DC2626]">VERTEX</span>
                </span>
              </Link>

              <div className="hidden lg:flex items-center gap-12">
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[#0F172A] hover:text-[#DC2626] font-medium transition-colors py-6 text-[15px]">
                    Services
                    <ArrowDown2
                      size={14}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Services Mega Menu */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-[1000px] bg-gradient-to-br from-[#e8f4f8] to-[#d4e7ed] rounded-3xl shadow-xl p-8"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="flex gap-6">
                          {/* Left side - Category tabs */}
                          <div className="w-56 space-y-0 flex-shrink-0">
                            <button
                              onMouseEnter={() => setActiveService("painting")}
                              className={`w-full text-left px-4 py-2 transition-colors font-display text-xl tracking-wide ${
                                activeService === "painting"
                                  ? "text-[#1a0f5e]"
                                  : "text-[#1a0f5e]/40 hover:text-[#1a0f5e]"
                              }`}
                            >
                              PAINTING
                            </button>
                            <button
                              onMouseEnter={() => setActiveService("building")}
                              className={`w-full text-left px-4 py-2 transition-colors font-display text-xl tracking-wide ${
                                activeService === "building"
                                  ? "text-[#1a0f5e]"
                                  : "text-[#1a0f5e]/40 hover:text-[#1a0f5e]"
                              }`}
                            >
                              BUILDING CLEANING
                            </button>
                            <button
                              onMouseEnter={() => setActiveService("window")}
                              className={`w-full text-left px-4 py-2 transition-colors font-display text-xl tracking-wide ${
                                activeService === "window"
                                  ? "text-[#1a0f5e]"
                                  : "text-[#1a0f5e]/40 hover:text-[#1a0f5e]"
                              }`}
                            >
                              WINDOW CLEANING
                            </button>
                            <button
                              onMouseEnter={() =>
                                setActiveService("waterproofing")
                              }
                              className={`w-full text-left px-4 py-2 transition-colors font-display text-xl tracking-wide ${
                                activeService === "waterproofing"
                                  ? "text-[#1a0f5e]"
                                  : "text-[#1a0f5e]/40 hover:text-[#1a0f5e]"
                              }`}
                            >
                              WATERPROOFING
                            </button>
                            <button
                              onMouseEnter={() =>
                                setActiveService("maintenance")
                              }
                              className={`w-full text-left px-4 py-2 transition-colors font-display text-xl tracking-wide ${
                                activeService === "maintenance"
                                  ? "text-[#1a0f5e]"
                                  : "text-[#1a0f5e]/40 hover:text-[#1a0f5e]"
                              }`}
                            >
                              MAINTENANCE
                            </button>
                            <button
                              onMouseEnter={() => setActiveService("height")}
                              className={`w-full text-left px-4 py-2 transition-colors font-display text-xl tracking-wide ${
                                activeService === "height"
                                  ? "text-[#1a0f5e]"
                                  : "text-[#1a0f5e]/40 hover:text-[#1a0f5e]"
                              }`}
                            >
                              HEIGHT SAFETY
                            </button>
                          </div>

                          {/* Right side - Content area */}
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
                                {/* Description and pills */}
                                <div className="flex-1">
                                  <p className="text-[#1a0f5e] text-sm leading-relaxed mb-4 font-sans">
                                    {servicesData[activeService].description}
                                  </p>

                                  {/* Service pills */}
                                  <div className="flex flex-wrap gap-2">
                                    {servicesData[
                                      activeService
                                    ].subServices.map((service) => (
                                      <span
                                        key={service}
                                        className="text-xs px-3 py-1.5 bg-white rounded-full text-[#1a0f5e] border border-[#1a0f5e]/10 font-display tracking-wide"
                                      >
                                        {service}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Image */}
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
                  <button className="flex items-center gap-1 text-[#0F172A] hover:text-[#DC2626] font-medium transition-colors py-6 text-[15px]">
                    Company
                    <ArrowDown2
                      size={14}
                      className={`transition-transform duration-200 ${
                        companyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Company Dropdown */}
                  <AnimatePresence>
                    {companyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-[700px] bg-[#FBF7F0] rounded-3xl shadow-xl p-8"
                        onMouseEnter={() => setCompanyOpen(true)}
                        onMouseLeave={() => setCompanyOpen(false)}
                      >
                        <div className="grid grid-cols-3 gap-8">
                          <div className="space-y-2">
                            {companyMain.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-[#1a0f5e] hover:text-[#DC2626] font-semibold transition-colors text-sm"
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
                                className="block text-[#1a0f5e] hover:text-[#DC2626] font-normal transition-colors text-sm"
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
                                className="block text-[#1a0f5e] hover:text-[#DC2626] font-normal transition-colors text-sm"
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
                className="flex items-center justify-center px-6 py-2.5 border-2 border-[#0F172A] text-[#0F172A] rounded-full hover:bg-[#0F172A] hover:text-white transition-all font-medium text-[15px]"
              >
                (07) 3130 0226
              </a>
              <Link
                href="/quote"
                className="px-6 py-2.5 bg-[#DC2626] text-white rounded-full hover:bg-[#991B1B] transition-all font-medium text-[15px]"
              >
                Free Quote →
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#0F172A]"
            >
              {mobileMenuOpen ? (
                <CloseSquare size={32} />
              ) : (
                <HambergerMenu size={32} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
                    className="flex items-center justify-between w-full text-left font-semibold text-[#0F172A] py-2 text-lg"
                  >
                    Services
                    <ArrowDown2
                      size={18}
                      className={`transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="mt-4 bg-gradient-to-br from-[#e8f4f8] to-[#d4e7ed] rounded-3xl p-6">
                      <div className="space-y-4">
                        <Link
                          href="/services/painting"
                          className="block font-display text-[#1a0f5e] text-xl tracking-wide"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          PAINTING
                        </Link>
                        <Link
                          href="/services/building-cleaning"
                          className="block font-display text-[#1a0f5e] text-xl tracking-wide"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          BUILDING CLEANING
                        </Link>
                        <Link
                          href="/services/window-cleaning"
                          className="block font-display text-[#1a0f5e] text-xl tracking-wide"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          WINDOW CLEANING
                        </Link>
                        <Link
                          href="/services/waterproofing"
                          className="block font-display text-[#1a0f5e] text-xl tracking-wide"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          WATERPROOFING
                        </Link>
                        <Link
                          href="/services/maintenance"
                          className="block font-display text-[#1a0f5e] text-xl tracking-wide"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          MAINTENANCE
                        </Link>
                        <Link
                          href="/services/height-safety"
                          className="block font-display text-[#1a0f5e] text-xl tracking-wide"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          HEIGHT SAFETY
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="flex items-center justify-between w-full text-left font-semibold text-[#0F172A] py-2 text-lg"
                  >
                    Company
                    <ArrowDown2
                      size={18}
                      className={`transition-transform ${
                        companyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {companyOpen && (
                    <div className="mt-4 bg-[#FBF7F0] rounded-3xl p-6">
                      <div className="space-y-6">
                        <div className="space-y-3">
                          {companyMain.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-[#1a0f5e] font-bold text-lg"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <div className="space-y-2 pt-4 border-t border-[#1a0f5e]/10">
                          {companySecondary.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-[#1a0f5e] font-normal text-base"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <div className="space-y-2 pt-4 border-t border-[#1a0f5e]/10">
                          <p className="text-[#1a0f5e]/60 text-sm font-semibold mb-2">
                            LOCATIONS
                          </p>
                          {locations.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-[#1a0f5e] font-normal text-base"
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
                    className="block text-center w-full px-6 py-3 border-2 border-[#0F172A] text-[#0F172A] rounded-full font-medium"
                  >
                    Call
                  </a>
                  <Link
                    href="/quote"
                    className="block text-center w-full px-6 py-3 bg-[#DC2626] text-white rounded-full font-medium"
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
    </>
  );
}

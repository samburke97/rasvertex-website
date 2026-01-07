"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Expandingpanels.module.css";

export type PanelButton = {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type PanelData = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  tagline?: string;
  image: string;
  href?: string;
  buttons?: PanelButton[];
};

type ExpandingPanelsProps = {
  panels: PanelData[];
  defaultActivePanel?: string;
};

export default function ExpandingPanels({
  panels,
  defaultActivePanel,
}: ExpandingPanelsProps) {
  const [activePanel, setActivePanel] = useState(
    defaultActivePanel || panels[0]?.id
  );
  const [fullyExpandedPanel, setFullyExpandedPanel] = useState<string | null>(
    defaultActivePanel || panels[0]?.id
  );

  useEffect(() => {
    setFullyExpandedPanel(null);
    const timer = setTimeout(() => {
      setFullyExpandedPanel(activePanel);
    }, 650);
    return () => clearTimeout(timer);
  }, [activePanel]);

  return (
    <div className={styles.container}>
      {panels.map((panel) => {
        const isActive = activePanel === panel.id;
        const isFullyExpanded = fullyExpandedPanel === panel.id;

        return (
          <motion.div
            key={panel.id}
            className={`${styles.panel} ${isActive ? styles.active : ""}`}
            onClick={() => setActivePanel(panel.id)}
            animate={{
              flex: isActive ? 1 : 0.12,
            }}
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            {/* Background Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                style={{ objectFit: "cover" }}
                priority={isActive}
              />
              <div className={styles.overlay} />
            </div>

            {/* Collapsed State - Vertical Text */}
            {!isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.collapsedContent}
              >
                <h3 className={styles.verticalTitle}>{panel.title}</h3>
              </motion.div>
            )}

            {/* Active State - Full Content */}
            {isActive && isFullyExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className={styles.expandedContent}
              >
                {panel.subtitle && (
                  <span className={styles.subtitle}>{panel.subtitle}</span>
                )}
                <h2 className={styles.title}>{panel.title}</h2>

                {/* Tagline (for intro panel) */}
                {panel.tagline && (
                  <p className={styles.tagline}>{panel.tagline}</p>
                )}

                {/* Description (for service panels) */}
                {panel.description && (
                  <p className={styles.description}>{panel.description}</p>
                )}

                {/* Buttons */}
                {panel.buttons && panel.buttons.length > 0 && (
                  <div className={styles.buttonGroup}>
                    {panel.buttons.map((button, index) => (
                      <Link
                        key={index}
                        href={button.href}
                        className={`${styles.button} ${
                          button.variant === "secondary"
                            ? styles.buttonSecondary
                            : styles.buttonPrimary
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {button.text}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Single learn more link (for service panels) */}
                {panel.href && !panel.buttons && (
                  <Link href={panel.href} className={styles.learnMore}>
                    Learn More <span className={styles.arrow}>→</span>
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

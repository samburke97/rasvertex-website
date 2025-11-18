"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Expandingpanels.module.css";

export type PanelData = {
  id: string;
  title: string;
  description: string;
  image: string;
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
    // Clear the fully expanded state immediately
    setFullyExpandedPanel(null);

    // Wait 650ms (slightly longer than 600ms animation) before setting as expanded
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
              flex: isActive ? 1 : 0.15,
            }}
            transition={{
              duration: 0.6,
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

            {/* Expanded State - ONLY MOUNTS after panel is fully expanded */}
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
                <h2 className={styles.title}>{panel.title}</h2>
                <p className={styles.description}>{panel.description}</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
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

  return (
    <div className={styles.container}>
      {panels.map((panel) => {
        const isActive = activePanel === panel.id;

        return (
          <motion.div
            key={panel.id}
            className={`${styles.panel} ${isActive ? styles.active : ""}`}
            onClick={() => setActivePanel(panel.id)}
            animate={{
              flex: isActive ? 1 : 0.15,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
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
              {/* Overlay for text readability */}
              <div className={styles.overlay} />
            </div>

            {/* Collapsed State - Vertical Text */}
            <AnimatePresence>
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
            </AnimatePresence>

            {/* Expanded State - Full Content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={styles.expandedContent}
                >
                  <h2 className={styles.title}>{panel.title}</h2>
                  <p className={styles.description}>{panel.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

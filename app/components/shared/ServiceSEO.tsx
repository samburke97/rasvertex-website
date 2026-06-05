// app/components/shared/ServiceSEO.tsx

import type { AccordionService } from "./ServiceAccordion";

interface ServiceSEOProps {
  /** e.g. "Painting services on the Sunshine Coast" */
  heading: string;
  services: AccordionService[];
}

/**
 * Visually hidden block that exposes accordion service names and descriptions
 * to crawlers that may not execute JavaScript.
 */
export default function ServiceSEO({ heading, services }: ServiceSEOProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      <h2>{heading}</h2>
      {services.map((s) => (
        <div key={s.label}>
          <h3>{s.label}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}

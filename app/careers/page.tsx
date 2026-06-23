import type { Metadata } from "next";
import CareersSurface from "./CareersSurface";

export const metadata: Metadata = {
  title: "Careers | RAS-VERTEX",
  description:
    "Join the RAS-VERTEX team. Rope access, painting, waterproofing and maintenance careers across the Sunshine Coast.",
};

export default function CareersPage() {
  return (
    <main>
      <section className="px-10 pt-20 pb-20">
        <CareersSurface />
      </section>
    </main>
  );
}

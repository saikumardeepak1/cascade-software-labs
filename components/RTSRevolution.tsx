"use client";

import { motion } from "framer-motion";
import { WovenCanvas } from "@/components/ui/woven-canvas";

function SlideWords({ text, style }: { text: string; style?: React.CSSProperties }) {
  const words = text.split(" ");
  return (
    <motion.span
      style={{ display: "block", ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          variants={{
            hidden: { opacity: 0, x: -32, filter: "blur(6px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" as const } },
          }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function IntroSection() {
  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ height: "150vh" }}
    >
      {/* Placed at the exact midpoint of the 200vh section.
          translateY(-50%) means its center = 100vh mark.
          Top half is hidden above fold when you first enter,
          bottom half is hidden below fold when you leave. */}
      <div
        className="absolute left-0 w-full"
        style={{ top: "75vh", transform: "translateY(-50%)" }}
      >
        <div className="relative w-full" style={{ height: "100vh" }}>

          {/* Woven animation — full width so its center naturally sits at 50vw */}
          <div className="absolute inset-0 z-0">
            <WovenCanvas />
          </div>

          {/* Text centered in the full block, above animation */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-10 max-md:!px-5">
            <SlideWords
              text="Cascade Software Labs is a Pacific Northwest-based AI consultancy building enterprise-ready, secure, and cost-optimized Agentic AI solutions for modern enterprises. We bridge the gap between proof of concept and production-grade AI systems."
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: "-0.025em",
                color: "#1d1d1f",
                textAlign: "center",
                maxWidth: "64rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

const cards = [
  {
    title: "Free 30-min Consultation",
    body: "Zero commitment. Direct access to Solutions Architects who understand enterprise AI. We come prepared with questions, not pitches.",
  },
  {
    title: "AI Readiness Assessment",
    body: "We audit your workflows, data systems, and infrastructure to identify the highest-impact AI opportunities and surface hidden risks.",
  },
  {
    title: "Custom Enterprise Roadmap",
    body: "Receive a detailed roadmap with implementation phases, cost projections, ROI estimates, and a clear path from pilot to production.",
  },
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="flex flex-col max-md:px-5 max-md:py-16"
      style={{
        background: "#ffffff",
        padding: "120px 80px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Heading */}
        <div className="max-md:text-center max-md:[&_*]:!max-w-full" style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", marginBottom: "20px" }}>
            Get started.
          </p>
          <SlideWords
            text="Start with a Discovery Call"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: "16px", maxWidth: "640px" }}
          />
          <SlideWords
            text="Schedule a call with our Solutions Architects. We assess readiness, define challenges, and deliver a roadmap in 2 weeks."
            style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "520px" }}
          />
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "24px", marginBottom: "48px" }}>
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "12px",
                padding: "40px",
              }}
            >
              <SlideWords
                text={card.title}
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "12px", color: "#1d1d1f", lineHeight: 1.2 }}
              />
              <SlideWords
                text={card.body}
                style={{ fontSize: "17px", lineHeight: 1.42, color: "#86868b" }}
              />
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/contact"
          className="max-md:!w-full max-md:!text-center max-md:block"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            borderRadius: "100px",
            background: "#0a0a0a",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            width: "fit-content",
          }}
        >
          Schedule Discovery Call
        </Link>
      </div>
    </section>
  );
}

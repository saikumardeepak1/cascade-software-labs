"use client"

import { motion } from "framer-motion";

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

const steps = [
  {
    label: "01",
    title: "Discovery & Assessment",
    body: "2-week audit of your workflows, data infrastructure, and AI readiness. We map opportunity and risk.",
  },
  {
    label: "02",
    title: "Architecture Design",
    body: "Secure, scalable system design tailored to your enterprise requirements and existing infrastructure.",
  },
  {
    label: "03",
    title: "Agile Implementation",
    body: "Bi-weekly sprints delivering production-ready AI features. Fast iteration with visible progress throughout.",
  },
  {
    label: "04",
    title: "Handoff or Managed Ops",
    body: "Comprehensive training and documentation handoff, or ongoing 24/7 managed AI operations.",
  },
]

export default function HowWeWork() {
  return (
    <section
      className="flex flex-col max-md:px-5 max-md:py-16"
      style={{
        background: "#ffffff",
        padding: "120px 80px 60px",
      }}
    >
      <div
        data-stack-content
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Heading block — anchored position */}
        <div data-heading className="max-md:text-center max-md:[&_*]:!max-w-full" style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(0,0,0,0.4)",
              marginBottom: "20px",
            }}
          >
            How we work.
          </p>
          <SlideWords
            text="How We Work"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#1d1d1f",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          />
          <SlideWords
            text="Structured engagement from discovery to ongoing operations with predictable outcomes."
            style={{
              fontSize: "19px",
              color: "#86868b",
              lineHeight: 1.42,
              maxWidth: "520px",
            }}
          />
        </div>

        {/* Cards — fill remaining space */}
        <div
          data-content
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            alignContent: "start",
          }}
          className="max-lg:!grid-cols-2 max-md:!grid-cols-1"
        >
          {steps.map((step) => (
            <div
              key={step.label}
              style={{
                background: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.3)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {step.label}
              </p>
              <p
                style={{
                  fontSize: "19px",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  fontSize: "17px",
                  color: "#86868b",
                  lineHeight: 1.42,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

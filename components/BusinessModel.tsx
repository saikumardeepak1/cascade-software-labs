"use client";

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

const services = [
  {
    number: "01",
    title: "Agentic AI",
    body: "Multi-agent systems for complex workflows across enterprise tools, APIs, and data systems.",
  },
  {
    number: "02",
    title: "LLM Infrastructure",
    body: "RAG pipelines, fine-tuned models, LLM Ops with observability, versioning, and rollback.",
  },
  {
    number: "03",
    title: "Automation",
    body: "AI-driven document processing, extraction, knowledge systems, and workflow automation.",
  },
  {
    number: "04",
    title: "Cost Optimization",
    body: "Model routing, semantic caching, batching, and infra optimization for cost reduction.",
  },
  {
    number: "05",
    title: "Security",
    body: "Secure-by-design AI architecture with isolation, audit trails, and compliance.",
  },
  {
    number: "06",
    title: "Managed Services",
    body: "24/7 AI operations, monitoring, updates, and continuous optimization.",
  },
]

const tableRows = [
  {
    others: "Generic, off-the-shelf AI tools",
    cascade: "Custom enterprise-grade AI systems",
  },
  {
    others: "Black box cost spiral",
    cascade: "40–70% inference cost reduction",
  },
  {
    others: "Security as an afterthought",
    cascade: "Secure-by-design architecture",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-animate
      data-stack
      className="flex flex-col max-md:!px-5 max-md:!py-16 max-md:!h-auto max-md:!static"
      style={{
        background: "#0a0a0a",
        color: "white",
        height: "100vh",
        padding: "120px 80px 60px",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        zIndex: 5,
        boxShadow: "0 -20px 60px rgba(0,0,0,0.5)",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
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
          height: "100%",
          transformOrigin: "center bottom",
        }}
      >
        {/* Heading block — anchored position */}
        <div data-heading style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "20px",
            }}
          >
            Capabilities.
          </p>
          <SlideWords
            text="Our Services"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "white",
              maxWidth: "720px",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          />
          <SlideWords
            text="End-to-end Agentic AI solutions for enterprise scale, security, and cost efficiency."
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "520px",
              lineHeight: 1.6,
            }}
          />
        </div>

        {/* Content */}
        <div data-content style={{ flex: 1, display: "flex", flexDirection: "column", gap: "40px", minHeight: 0 }}>
          {/* Services grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "32px",
            }}
            className="max-md:!grid-cols-1 max-lg:!grid-cols-2"
          >
            {services.map((service) => (
              <div key={service.number}>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "8px",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {service.number}
                </p>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  {service.body}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "24px 24px 0", marginBottom: "-1px" }}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "0",
                  padding: "0 0 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                The Cascade Difference
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "rgba(255,255,255,0.05)",
                padding: "16px 24px",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <span>Others</span>
              <span>Cascade Way</span>
            </div>

            {tableRows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  padding: "20px 24px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
                  {row.others}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "white",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "white",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {row.cascade}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

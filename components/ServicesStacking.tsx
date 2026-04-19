"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    id: "01",
    sub: "Agentic AI",
    title: "Agentic AI Systems",
    desc: "We design and deploy multi-agent systems capable of executing complex, multi-step workflows without human intervention. Our agents integrate with your existing tools, APIs, and data sources to automate high-value business processes.",
  },
  {
    id: "02",
    sub: "LLM Infrastructure",
    title: "Enterprise LLM Ops",
    desc: "From RAG pipelines to fine-tuned models, we build the infrastructure that makes LLMs reliable, fast, and cost-effective at enterprise scale. Full observability, version control, and rollback capabilities included.",
  },
  {
    id: "03",
    sub: "Automation",
    title: "Workflow Intelligence",
    desc: "We identify and automate your highest-value business workflows using AI. From document processing and data extraction to customer service automation and internal knowledge management.",
  },
  {
    id: "04",
    sub: "Cost Optimization",
    title: "Cost Optimization",
    desc: "AI costs can spiral quickly without intelligent optimization. We implement model routing, semantic caching, batch processing, and infrastructure right-sizing strategies that dramatically reduce costs while maintaining performance SLAs.",
  },
  {
    id: "05",
    sub: "Security",
    title: "Secure AI Architecture",
    desc: "Security is not an afterthought — it's the foundation. We architect AI systems with data isolation, access controls, audit trails, and compliance frameworks built in from the start. Your sensitive data never leaves your perimeter.",
  },
  {
    id: "06",
    sub: "Managed Services",
    title: "Managed AI Services",
    desc: "Don't just build it — run it. Our 24/7 managed AI operations team handles monitoring, incident response, model updates, and continuous optimization. We act as your extended AI engineering team.",
  },
];

/* ─────────────────────────────────────────────
   Word-by-word slide-in from a side
   ───────────────────────────────────────────── */
function SlideWords({
  text,
  from,
  style,
  stagger = 0.045,
}: {
  text: string;
  from: "left" | "right";
  style?: React.CSSProperties;
  stagger?: number;
}) {
  const words = text.split(" ");
  const xOffset = from === "left" ? -32 : 32;

  return (
    <motion.span
      style={{ display: "block", ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          variants={{
            hidden: { opacity: 0, x: xOffset, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   Title block (eyebrow + heading)
   ───────────────────────────────────────────── */
function TitleBlock({
  service,
  from,
  align,
}: {
  service: (typeof services)[0];
  from: "left" | "right";
  align: "left" | "right";
}) {
  return (
    <>
      {/* Eyebrow — fades in first */}
      <motion.p
        initial={{ opacity: 0, x: from === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          fontSize: "12px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "rgba(0,0,0,0.3)",
          marginBottom: "14px",
          textAlign: align,
        }}
      >
        {service.id} — {service.sub}
      </motion.p>

      {/* Heading — words slide in from side */}
      <SlideWords
        text={service.title}
        from={from}
        stagger={0.07}
        style={{
          fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          color: "#1d1d1f",
          textAlign: align,
        }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   Description block
   ───────────────────────────────────────────── */
function DescBlock({
  desc,
  from,
  align,
  marginAuto,
}: {
  desc: string;
  from: "left" | "right";
  align: "left" | "right";
  marginAuto?: boolean;
}) {
  return (
    <SlideWords
      text={desc}
      from={from}
      stagger={0.018}
      style={{
        fontSize: "17px",
        lineHeight: 1.42,
        color: "#86868b",
        maxWidth: "420px",
        textAlign: align,
        ...(marginAuto ? { marginLeft: "auto" } : {}),
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Main component
   ───────────────────────────────────────────── */
export default function ServicesStacking() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section style={{ background: "#ffffff", position: "relative", zIndex: 4 }}>
      <div
        className="max-w-[1440px] mx-auto max-md:px-5"
        style={{ padding: "120px 80px 120px" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "100px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(0,0,0,0.35)",
              marginBottom: "20px",
            }}
          >
            What we do.
          </p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#1d1d1f",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontSize: "19px",
              color: "#86868b",
              lineHeight: 1.42,
              maxWidth: "480px",
            }}
          >
            End-to-end Agentic AI solutions engineered for enterprise scale,
            security, and cost efficiency.
          </p>
        </div>

        {/* Timeline — desktop */}
        <div ref={timelineRef} className="relative max-md:hidden">
          {/* Background track */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.08)",
            }}
          />

          {/* Scroll-driven fill */}
          <motion.div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: "1px",
              height: "100%",
              transform: "translateX(-50%)",
              transformOrigin: "top",
              scaleY: lineScaleY,
              background: "rgba(0,0,0,0.22)",
            }}
          />

          {services.map((service, index) => {
            const titleOnLeft = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="relative grid grid-cols-2"
                style={{
                  paddingTop: index === 0 ? 0 : "80px",
                  paddingBottom: "80px",
                }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: index === 0 ? "10px" : "calc(80px + 10px)",
                    transform: "translateX(-50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(0,0,0,0.25)",
                    background: "#ffffff",
                    zIndex: 2,
                  }}
                />

                {/* Left column */}
                <div
                  style={{
                    paddingRight: "80px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  {titleOnLeft ? (
                    <TitleBlock service={service} from="left" align="right" />
                  ) : (
                    <DescBlock desc={service.desc} from="left" align="right" marginAuto />
                  )}
                </div>

                {/* Right column */}
                <div
                  style={{
                    paddingLeft: "80px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  {titleOnLeft ? (
                    <DescBlock desc={service.desc} from="right" align="left" />
                  ) : (
                    <TitleBlock service={service} from="right" align="left" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile fallback — single column */}
        <div className="hidden max-md:flex flex-col gap-14">
          {services.map((service) => (
            <div key={service.id}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.3)",
                  marginBottom: "10px",
                }}
              >
                {service.id} — {service.sub}
              </motion.p>
              <SlideWords
                text={service.title}
                from="left"
                stagger={0.07}
                style={{
                  fontSize: "clamp(1.3rem, 5vw, 1.6rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "#1d1d1f",
                  marginBottom: "12px",
                }}
              />
              <SlideWords
                text={service.desc}
                from="left"
                stagger={0.015}
                style={{ fontSize: "17px", lineHeight: 1.42, color: "#86868b" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

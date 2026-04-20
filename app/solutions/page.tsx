"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   Timeline animation helpers (same as home page)
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
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          variants={{
            hidden: { opacity: 0, x: xOffset, filter: "blur(6px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" as const } },
          }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

function TitleBlock({
  service,
  from,
  align,
}: {
  service: { id: string; title: string };
  from: "left" | "right";
  align: "left" | "right";
}) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: from === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.3)", marginBottom: "14px", textAlign: align }}
      >
        {service.id}
      </motion.p>
      <SlideWords
        text={service.title}
        from={from}
        stagger={0.07}
        style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.15, color: "#1d1d1f", textAlign: align }}
      />
    </>
  );
}

function DescBulletsBlock({
  service,
  from,
  align,
  marginAuto,
}: {
  service: { desc: string; bullets: string[] };
  from: "left" | "right";
  align: "left" | "right";
  marginAuto?: boolean;
}) {
  return (
    <div style={{ maxWidth: "460px", ...(marginAuto ? { marginLeft: "auto" } : {}) }}>
      <SlideWords
        text={service.desc}
        from={from}
        stagger={0.018}
        style={{ fontSize: "17px", lineHeight: 1.42, color: "#86868b", textAlign: align, marginBottom: "28px" }}
      />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {service.bullets.map((bullet) => (
          <motion.li
            key={bullet}
            variants={{
              hidden: { opacity: 0, x: from === "left" ? -20 : 20, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: "easeOut" as const } },
            }}
            style={{ display: "flex", alignItems: "flex-start", gap: "12px", justifyContent: align === "right" ? "flex-end" : "flex-start" }}
          >
            {align === "right" && (
              <span style={{ fontSize: "15px", color: "#86868b", lineHeight: 1.5, textAlign: "right" }}>{bullet}</span>
            )}
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(0,0,0,0.25)", flexShrink: 0, marginTop: "8px" }} />
            {align === "left" && (
              <span style={{ fontSize: "15px", color: "#86868b", lineHeight: 1.5 }}>{bullet}</span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const services = [
  {
    id: "01",
    title: "Agentic AI Systems",
    desc: "We design and deploy multi-agent systems capable of executing complex, multi-step workflows without human intervention. Our agents integrate with your existing tools, APIs, and data sources to automate high-value business processes.",
    bullets: [
      "Multi-agent orchestration with LangGraph / AutoGen",
      "Tool-using agents with API and database integration",
      "Custom agent personas and role definitions",
      "Human-in-the-loop escalation workflows",
      "Agent monitoring, tracing, and observability",
    ],
  },
  {
    id: "02",
    title: "Enterprise LLM Ops",
    desc: "From RAG pipelines to fine-tuned models, we build the infrastructure that makes LLMs reliable, fast, and cost-effective at enterprise scale. Full observability, version control, and rollback capabilities included.",
    bullets: [
      "RAG pipeline design with vector databases (Pinecone, Weaviate, pgvector)",
      "Fine-tuning on proprietary datasets with evaluation frameworks",
      "Prompt versioning, A/B testing, and performance monitoring",
      "Model serving with auto-scaling and load balancing",
      "Multi-model routing for cost and latency optimization",
    ],
  },
  {
    id: "03",
    title: "Workflow Intelligence",
    desc: "We identify and automate your highest-value business workflows using AI. From document processing and data extraction to customer service automation and internal knowledge management.",
    bullets: [
      "Intelligent document processing (IDP) pipelines",
      "AI-powered customer service and support agents",
      "Email and communication automation",
      "Internal knowledge base and search systems",
    ],
  },
  {
    id: "04",
    title: "Cost Optimization",
    desc: "AI costs can spiral quickly without intelligent optimization. We implement model routing, semantic caching, batch processing, and infrastructure right-sizing strategies that dramatically reduce costs while maintaining performance SLAs.",
    bullets: [
      "Intelligent model routing (GPT-4 vs GPT-4o-mini vs Claude)",
      "Semantic caching to eliminate redundant API calls",
      "Token optimization and prompt compression",
      "Batch processing for non-real-time workloads",
      "Continuous cost monitoring and alerting",
    ],
  },
  {
    id: "05",
    title: "Secure AI Architecture",
    desc: "Security is not an afterthought — it's the foundation. We architect AI systems with data isolation, access controls, audit trails, and compliance frameworks built in from the start. Your sensitive data never leaves your perimeter.",
    bullets: [
      "Private deployment on your cloud (AWS, Azure, GCP)",
      "End-to-end encryption for sensitive workflows",
      "Role-based access control for AI systems",
      "SOC 2, HIPAA, and FedRAMP readiness assessments",
    ],
  },
  {
    id: "06",
    title: "Managed AI Services",
    desc: "Don't just build it — run it. Our 24/7 managed AI operations team handles monitoring, incident response, model updates, and continuous optimization. We act as your extended AI engineering team.",
    bullets: [
      "24/7 infrastructure monitoring and alerting",
      "Security patching and dependency updates",
      "Monthly performance reviews and optimization reports",
      "On-call engineering support with defined SLAs",
      "Proactive model performance degradation detection",
    ],
  },
];

const engagementPhases = [
  {
    step: "01",
    title: "Discovery Phase",
    desc: "We start with a low-risk 2-week assessment sprint. No commitment required.",
  },
  {
    step: "02",
    title: "Implementation",
    desc: "Agile delivery with bi-weekly demos. Full transparency throughout.",
  },
  {
    step: "03",
    title: "Handoff or Manage",
    desc: "We train your team for full ownership, or retain management as your extended AI ops team.",
  },
];

const techStack = [
  {
    category: "AI / LLM",
    items: ["OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "Meta Llama", "Azure OpenAI", "Google Vertex AI"],
  },
  {
    category: "Advanced Capabilities",
    items: ["LLM orchestration", "RAG Pipelines", "Fine-tuning & Training", "Semantic Kernel", "Model Optimization", "Vector DBs"],
  },
  {
    category: "Enterprise Development",
    items: ["Python & Data Science", "React & Node.js", "Full-Stack Development", "API Design", "Infrastructure as Code", "Kubernetes & Docker"],
  },
];

const expertise = [
  "Deep expertise in Agentic AI and LLM operations",
  "Proven track record bridging PoC to production",
  "40–70% AI cost reduction through optimization",
  "Full compliance support (SOC 2, HIPAA, FedRAMP)",
  "24/7 managed services and support",
];

const ctaFeatures = [
  "No commitment required",
  "2-week assessment sprint",
  "Custom AI roadmap delivered",
];

/* ─────────────────────────────────────────────
   Shared animation helpers
   ───────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   Services Timeline (identical mechanics to home page ServicesStacking)
   ───────────────────────────────────────────── */

function ServicesTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      style={{
        background: "#ffffff",
        paddingTop: "0",
        paddingBottom: "120px",
        paddingLeft: "clamp(20px, 5.5vw, 80px)",
        paddingRight: "clamp(20px, 5.5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{ marginBottom: "100px", paddingTop: "80px", borderTop: "1px solid rgba(0,0,0,0.08)" }}
        >
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}
          >
            Our Services
          </motion.p>
          <SlideWords
            text="Six integrated disciplines that cover every stage of your enterprise AI journey."
            from="left"
            stagger={0.03}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1, maxWidth: "720px" }}
          />
        </motion.div>

        {/* Desktop timeline */}
        <div ref={timelineRef} className="relative max-md:hidden">
          {/* Background track */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", transform: "translateX(-50%)", background: "rgba(0,0,0,0.08)" }} />
          {/* Scroll-driven fill */}
          <motion.div style={{ position: "absolute", left: "50%", top: 0, width: "1px", height: "100%", transform: "translateX(-50%)", transformOrigin: "top", scaleY: lineScaleY, background: "rgba(0,0,0,0.22)" }} />

          {services.map((service, index) => {
            const titleOnLeft = index % 2 === 0;
            return (
              <div
                key={service.id}
                className="relative grid grid-cols-2"
                style={{ paddingTop: index === 0 ? 0 : "88px", paddingBottom: "88px" }}
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: index === 0 ? "10px" : "calc(88px + 10px)",
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
                <div style={{ paddingRight: "80px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  {titleOnLeft
                    ? <TitleBlock service={service} from="left" align="right" />
                    : <DescBulletsBlock service={service} from="left" align="right" marginAuto />
                  }
                </div>

                {/* Right column */}
                <div style={{ paddingLeft: "80px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  {titleOnLeft
                    ? <DescBulletsBlock service={service} from="right" align="left" />
                    : <TitleBlock service={service} from="right" align="left" />
                  }
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile fallback */}
        <div className="hidden max-md:flex flex-col gap-14">
          {services.map((service) => (
            <div key={service.id}>
              <motion.p
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.3)", marginBottom: "10px" }}
              >
                {service.id}
              </motion.p>
              <SlideWords text={service.title} from="left" stagger={0.07} style={{ fontSize: "clamp(1.3rem, 5vw, 1.6rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#1d1d1f", marginBottom: "12px" }} />
              <SlideWords text={service.desc} from="left" stagger={0.015} style={{ fontSize: "17px", lineHeight: 1.42, color: "#86868b", marginBottom: "20px" }} />
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {service.bullets.map((bullet) => (
                  <li key={bullet} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(0,0,0,0.25)", flexShrink: 0, marginTop: "8px" }} />
                    <span style={{ fontSize: "15px", color: "#86868b", lineHeight: 1.5 }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function SolutionsPage() {
  return (
    <>
      <NavBar />

      {/* ── Hero ── */}
      <section
        className="max-md:!bg-none max-md:!bg-white"
        style={{
          background: "#ffffff",
          height: "100vh",
          minHeight: "600px",
          overflow: "hidden",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Left: text anchored to 50vh from top */}
        <div
          className="max-md:!top-[40vh] max-md:!px-5 max-md:text-center max-md:!left-0 max-md:!right-0 max-md:!max-w-full"
          style={{
            position: "absolute",
            top: "50vh",
            left: 0,
            paddingLeft: "clamp(20px, 5.5vw, 80px)",
            paddingRight: "40px",
            maxWidth: "600px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "28px" }}
          >
            Service Offerings
          </motion.p>

          <motion.h1
            className="max-md:!text-[2.2rem]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#1d1d1f", marginBottom: "32px" }}
          >
            {["End-to-End", "Agentic", "AI", "Solutions."].map((word, i, arr) => (
              <motion.span
                key={i}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              >
                {word}{i < arr.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "480px" }}
          >
            From architecture design to production deployment and managed operations, Cascade Software Labs supports the entire Agentic AI lifecycle.
          </motion.p>
        </div>

        {/* Right: brain image — flush right, bottom-aligned */}
        <div
          className="max-md:hidden"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            overflow: "hidden",
          }}
        >
          <motion.img
            src="/solutions-hero.png"
            alt="AI brain — puzzle piece illustration"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{
              height: "88vh",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom right",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ── Our Services — timeline ── */}
      <ServicesTimeline />

      {/* ── Engagement Model ── */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            style={{ marginBottom: "72px" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}>
              Engagement Model
            </motion.p>
            <SlideWords
              text="A structured, low-risk process from first conversation to production operations."
              from="left"
              stagger={0.03}
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1, maxWidth: "640px" }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-md:!grid-cols-1"
          >
            {engagementPhases.map((phase) => (
              <motion.div
                key={phase.step}
                variants={fadeUp}
                style={{
                  background: "#ffffff",
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(3rem, 4vw, 4.5rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "rgba(0,0,0,0.07)",
                    lineHeight: 1,
                  }}
                >
                  {phase.step}
                </span>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    color: "#1d1d1f",
                    lineHeight: 1.25,
                  }}
                >
                  {phase.title}
                </h3>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#86868b",
                    lineHeight: 1.42,
                  }}
                >
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Technology Stack + Our Expertise ── */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          {/* Tech Stack header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            style={{ marginBottom: "72px" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}>
              Technology Stack
            </motion.p>
            <SlideWords
              text="Best-in-class tooling across every layer of the AI delivery pipeline."
              from="left"
              stagger={0.03}
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1 }}
            />
          </motion.div>

          {/* Tech categories */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px", marginBottom: "100px" }}
            className="max-lg:!grid-cols-2 max-md:!grid-cols-1"
          >
            {techStack.map((cat) => (
              <motion.div key={cat.category} variants={fadeUp}>
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
                  {cat.category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        display: "inline-block",
                        padding: "6px 14px",
                        borderRadius: "100px",
                        border: "1px solid rgba(0,0,0,0.12)",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#1d1d1f",
                        background: "rgba(0,0,0,0.02)",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Our Expertise */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            style={{ paddingTop: "80px", borderTop: "1px solid rgba(0,0,0,0.08)" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}>
              Our Expertise
            </motion.p>
            <SlideWords
              text="Deep expertise in Agentic AI and LLM operations"
              from="left"
              stagger={0.04}
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: "40px" }}
            />

            <motion.div
              variants={staggerContainer}
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px 60px" }}
              className="max-md:!grid-cols-1"
            >
              {expertise.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
                >
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "#1d1d1f",
                      flexShrink: 0,
                      marginTop: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "17px", color: "#1d1d1f", lineHeight: 1.42, fontWeight: 500 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Ready to Build CTA ── */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            style={{ maxWidth: "720px" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "28px" }}>
              Ready to Build?
            </motion.p>

            <SlideWords
              text="Schedule a discovery call with our Solutions Architects at Cascade Software Labs."
              from="left"
              stagger={0.03}
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: "24px" }}
            />

            <SlideWords
              text="We'll assess your AI readiness and design a roadmap in two weeks."
              from="left"
              stagger={0.025}
              style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, marginBottom: "60px" }}
            />

            {/* Feature bullets */}
            <motion.div
              variants={staggerContainer}
              style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "48px" }}
            >
              {ctaFeatures.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.3)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.42 }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  borderRadius: "100px",
                  background: "#1d1d1f",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.8)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#1d1d1f")}
              >
                Schedule Discovery Call
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

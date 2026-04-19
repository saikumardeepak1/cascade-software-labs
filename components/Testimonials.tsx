"use client"

import { useState } from "react"
import { motion } from "framer-motion"

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

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How long does a discovery call take?",
    answer:
      "Our discovery calls are 30 minutes. We focus on understanding your current workflows, AI goals, and infrastructure. After the call, we deliver a preliminary assessment within 2–3 business days.",
  },
  {
    question: "What's the typical project timeline?",
    answer:
      "Discovery and assessment takes 2 weeks. Full implementation typically runs 8–16 weeks depending on complexity. We deliver in bi-weekly sprints with visible progress throughout.",
  },
  {
    question: "Do you offer managed services?",
    answer:
      "Yes. After implementation, we offer 24/7 managed AI operations including monitoring, updates, performance optimization, and continuous improvement. Managed services are available on monthly retainer.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer fixed-scope project pricing and ongoing managed service retainers. Discovery calls are free. After assessment, we provide a detailed proposal with transparent pricing and no hidden fees.",
  },
  {
    question: "Can you work with existing infrastructure?",
    answer:
      "Absolutely. We integrate with your existing AWS, Azure, or GCP environment, databases, APIs, and business tools. We design for your infrastructure, not ours.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "Security is built into every layer — private deployment, network isolation, encryption at rest and in transit, RBAC, audit logging, and compliance with SOC 2, HIPAA, FedRAMP, and GDPR as needed.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      className="flex flex-col max-md:px-5 max-md:py-16"
      style={{
        background: "#ffffff",
        padding: "120px 80px 80px",
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
        <div data-heading style={{ marginBottom: "48px" }}>
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
            Frequently Asked Questions
          </p>
          <SlideWords
            text="Everything you need to know."
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#1d1d1f",
              lineHeight: 1.1,
              maxWidth: "640px",
              marginBottom: "16px",
            }}
          />
          <SlideWords
            text="Common questions about working with Cascade Software Labs."
            style={{
              fontSize: "19px",
              color: "#86868b",
              lineHeight: 1.42,
              maxWidth: "520px",
            }}
          />
        </div>

        {/* Accordion — fills remaining space */}
        <div data-content style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 0",
                    cursor: "pointer",
                    width: "100%",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    gap: "24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(1.0625rem, 1.5vw, 1.3125rem)",
                      fontWeight: 600,
                      color: "#1d1d1f",
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: "20px",
                      color: "#0a0a0a",
                      lineHeight: 1,
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                  aria-hidden={!isOpen}
                >
                  <p
                    style={{
                      fontSize: "clamp(1.0625rem, 1.4vw, 1.1875rem)",
                      fontWeight: 400,
                      lineHeight: 1.42,
                      color: "#86868b",
                      maxWidth: "680px",
                      paddingBottom: "24px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

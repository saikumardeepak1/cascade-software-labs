"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"

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

const TABS = ["Security Architecture", "Customization Matrix", "ROI Calculator"]

const securityGroups = [
  {
    title: "Infrastructure Security",
    items: [
      "Private deployment (AWS/Azure/GCP)",
      "Network isolation & segmentation",
      "DDoS protection",
      "Intrusion detection",
    ],
  },
  {
    title: "Encryption & Data Protection",
    items: [
      "Encryption at rest & in transit",
      "TLS 1.3",
      "HSM support",
      "Key rotation policies",
    ],
  },
  {
    title: "Access Control & Identity",
    items: [
      "RBAC for AI systems",
      "MFA support",
      "SSO integration",
      "API key management",
    ],
  },
  {
    title: "Audit & Compliance",
    items: [
      "Audit logging",
      "SOC 2 / HIPAA / FedRAMP readiness",
      "GDPR compliance",
      "Penetration testing",
    ],
  },
]

const complianceBadges = ["SOC 2", "HIPAA", "FedRAMP", "GDPR"]

const agentTypes = [
  "Conversational Chatbot",
  "Research Agent",
  "Data Analyst Agent",
  "Process Execution Agent",
  "Custom API Agent",
]

const integrationOptions = ["Slack", "CRM", "ERP", "Email", "Database", "Custom API"]

const complianceOptions = ["SOC 2", "HIPAA", "FedRAMP", "GDPR", "AI Safety", "Data Privacy"]

function calcROI(spend: number, workflows: number, hours: number) {
  const implementationCost = spend * 2
  const costReduction = spend * 12 * 0.55
  const laborSavings = hours * workflows * 81
  const annualSavings = costReduction + laborSavings
  const netYear1 = annualSavings - implementationCost
  const payback = implementationCost / (annualSavings / 12)
  const roi = (netYear1 / implementationCost) * 100
  return { annualSavings, laborSavings, costReduction, netYear1, payback, roi }
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
}) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
        <span style={{ fontSize: "15px", color: "#86868b" }}>{label}</span>
        <span style={{ fontSize: "17px", fontWeight: 600, color: "#1d1d1f" }}>{display}</span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
      />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
        <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.3)" }}>
          {min === 5000 ? fmt(min) : min === 1 ? "1 workflow" : `${min} hrs`}
        </span>
        <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.3)" }}>
          {min === 5000 ? fmt(max) : min === 1 ? "20 workflows" : `${max} hrs`}
        </span>
      </div>
    </div>
  )
}

function TogglePill({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: "100px",
        border: active ? "1px solid #0a0a0a" : "1px solid rgba(0,0,0,0.2)",
        background: active ? "#0a0a0a" : "transparent",
        color: active ? "#ffffff" : "rgba(0,0,0,0.5)",
        fontSize: "13px",
        fontWeight: active ? 500 : 400,
        cursor: "pointer",
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  )
}

function MetricRow({
  label,
  value,
  highlight,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        background: highlight ? "rgba(0,0,0,0.03)" : "transparent",
      }}
    >
      <span style={{ fontSize: "15px", color: "#86868b" }}>{label}</span>
      <span
        style={{
          fontSize: highlight ? "17px" : "15px",
          fontWeight: highlight ? 700 : 500,
          color: "#1d1d1f",
        }}
      >
        {value}
      </span>
    </div>
  )
}

export default function InteractiveSection() {
  const [activeTab, setActiveTab] = useState(0)

  const [selectedAgents, setSelectedAgents] = useState<Set<string>>(new Set())
  const [selectedIntegrations, setSelectedIntegrations] = useState<Set<string>>(
    new Set(["Slack"])
  )
  const [selectedCompliance, setSelectedCompliance] = useState<Set<string>>(
    new Set(["SOC 2", "HIPAA"])
  )

  const [spend, setSpend] = useState(25000)
  const [workflows, setWorkflows] = useState(10)
  const [hours, setHours] = useState(50)

  const roi = calcROI(spend, workflows, hours)

  function toggle(set: Set<string>, item: string, setter: (s: Set<string>) => void) {
    const next = new Set(set)
    if (next.has(item)) next.delete(item)
    else next.add(item)
    setter(next)
  }

  return (
    <section
      data-animate
      data-stack
      className="flex flex-col max-md:!px-5 max-md:!py-16 max-md:!h-auto max-md:!static"
      style={{
        background: "#ffffff",
        color: "#0a0a0a",
        minHeight: "100vh",
        padding: "120px 80px 80px",
        position: "relative",
        zIndex: 6,
      }}
    >
      <div data-stack-content style={{ maxWidth: "1440px", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", height: "100%", transformOrigin: "center bottom" }}>
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
            Deep dive.
          </p>
          <SlideWords
            text="Security, Customization & ROI"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#1d1d1f",
              maxWidth: "720px",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          />
          <SlideWords
            text="Enterprise-grade security, customization, and measurable ROI."
            style={{
              fontSize: "19px",
              color: "#86868b",
              maxWidth: "520px",
              lineHeight: 1.42,
            }}
          />
        </div>

        {/* Tab buttons */}
        <div
          className="max-md:overflow-x-auto max-md:!flex-nowrap max-md:pb-2"
          style={{ display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap" }}
        >
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "10px 22px",
                borderRadius: "100px",
                border:
                  activeTab === i
                    ? "1px solid #0a0a0a"
                    : "1px solid rgba(0,0,0,0.2)",
                background: activeTab === i ? "#0a0a0a" : "transparent",
                color: activeTab === i ? "#ffffff" : "rgba(0,0,0,0.5)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div data-content>
          {/* TAB 1: Security Architecture */}
          {activeTab === 0 && (
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "20px",
                  marginBottom: "32px",
                }}
                className="max-md:!grid-cols-1"
              >
                {securityGroups.map((group, gi) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: gi * 0.08 }}
                    style={{
                      background: "rgba(0,0,0,0.03)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "12px",
                      padding: "28px",
                    }}
                  >
                    <SlideWords
                      text={group.title}
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#1d1d1f",
                        marginBottom: "16px",
                        letterSpacing: "-0.01em",
                      }}
                    />
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                      {group.items.map((item, ii) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{ duration: 0.35, ease: "easeOut", delay: gi * 0.08 + ii * 0.05 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontSize: "15px",
                            color: "#86868b",
                            lineHeight: 1.42,
                            marginBottom: "8px",
                          }}
                        >
                          <span
                            style={{
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              background: "rgba(0,0,0,0.2)",
                              flexShrink: 0,
                            }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {complianceBadges.map((badge, bi) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: bi * 0.07 }}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "100px",
                      border: "1px solid rgba(0,0,0,0.2)",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      letterSpacing: "0.04em",
                      background: "rgba(0,0,0,0.04)",
                    }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Customization Matrix */}
          {activeTab === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>
                  Choose Agent Type
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {agentTypes.map((a) => (
                    <TogglePill key={a} label={a} active={selectedAgents.has(a)} onClick={() => toggle(selectedAgents, a, setSelectedAgents)} />
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>
                  Integrations
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {integrationOptions.map((opt) => (
                    <TogglePill key={opt} label={opt} active={selectedIntegrations.has(opt)} onClick={() => toggle(selectedIntegrations, opt, setSelectedIntegrations)} />
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>
                  Compliance
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {complianceOptions.map((opt) => (
                    <TogglePill key={opt} label={opt} active={selectedCompliance.has(opt)} onClick={() => toggle(selectedCompliance, opt, setSelectedCompliance)} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ROI Calculator */}
          {activeTab === 2 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "start",
              }}
              className="max-md:!grid-cols-1"
            >
              <div>
                <SliderRow label="Monthly AI Spend" value={spend} min={5000} max={100000} step={1000} display={fmt(spend) + "/mo"} onChange={setSpend} />
                <SliderRow label="Workflows Automated" value={workflows} min={1} max={20} step={1} display={`${workflows} workflow${workflows !== 1 ? "s" : ""}`} onChange={setWorkflows} />
                <SliderRow label="Hours Saved per Workflow/Month" value={hours} min={5} max={100} step={5} display={`${hours} hrs`} onChange={setHours} />
              </div>

              <div>
                <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>
                  Projected Savings
                </p>

                <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", overflow: "hidden", marginBottom: "20px" }}>
                  <MetricRow label="Annual Savings" value={fmt(roi.annualSavings)} />
                  <MetricRow label="Labor Savings" value={fmt(roi.laborSavings)} />
                  <MetricRow label="Cost Reduction" value={fmt(roi.costReduction)} />
                  <MetricRow label="Net Year 1 Savings" value={fmt(roi.netYear1)} highlight />
                  <MetricRow label="Payback Period" value={`${roi.payback.toFixed(1)} months`} />
                  <MetricRow label="ROI" value={`${Math.round(roi.roi)}%`} highlight />
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    style={{ padding: "12px 24px", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.2)", background: "transparent", color: "#0a0a0a", fontSize: "13px", fontWeight: 500, cursor: "pointer", transition: "border-color 0.2s ease" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#0a0a0a")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.2)")}
                  >
                    Download Report
                  </button>
                  <button
                    style={{ padding: "12px 24px", borderRadius: "100px", border: "none", background: "#0a0a0a", color: "#ffffff", fontSize: "13px", fontWeight: 500, cursor: "pointer", transition: "background 0.2s ease" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.8)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#0a0a0a")}
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

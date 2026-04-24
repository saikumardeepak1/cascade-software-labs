"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   Animation helpers
   ───────────────────────────────────────────── */

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function SustainabilityPage() {
  return (
    <>
      <NavBar />

      {/* ── Hero ── */}
      <section
        style={{
          height: "100vh",
          width: "100vw",
          minHeight: "600px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(145deg, #0a0e1a 0%, #0c1a10 55%, #0f1520 100%)",
        }}
      >
        {/* Text anchored to bottom-left */}
        <div
          className="max-md:!top-[40vh] max-md:!px-5 max-md:text-center max-md:!left-0 max-md:!right-0 max-md:!max-w-full"
          style={{
            position: "absolute",
            top: "50vh",
            left: 0,
            paddingLeft: "clamp(20px, 5.5vw, 80px)",
            paddingRight: "40px",
            maxWidth: "700px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "28px",
            }}
          >
            Sustainability
          </motion.p>

          <motion.h1
            className="max-md:!text-[2.2rem]"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#f5f5f7",
              marginBottom: "32px",
            }}
          >
            {["Building", "Software", "Shouldn't", "Cost", "the", "Planet."].map((word, i, arr) => (
              <motion.span
                key={i}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 + i * 0.07 }}
              >
                {word}{i < arr.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.55 }}
            style={{
              fontSize: "19px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.42,
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            We are distributed by design — our team works remotely, which eliminates the single biggest source of corporate carbon: the daily commute. We've committed to net zero carbon emissions across all operations by 2028.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.7 }}
          >
            <button
              onClick={() => document.getElementById("commitment")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "100px",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              See Our Commitment
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Our Commitment ── */}
      <section
        id="commitment"
        style={{
          background: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(0,0,0,0.35)",
              marginBottom: "32px",
            }}
          >
            Our Commitment
          </motion.p>

          <SlideWords
            text="Sustainability has been part of Cascade Software Labs since day one."
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "#1d1d1f",
              maxWidth: "860px",
              marginBottom: "32px",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            style={{
              fontSize: "19px",
              color: "#86868b",
              lineHeight: 1.42,
              maxWidth: "640px",
              marginBottom: "72px",
            }}
          >
            We didn't bolt sustainability onto our business model — it was there from the start. Being distributed by design means our team has never had a commute to offset. Now we're going further: formalising these values into a measurable, auditable commitment that holds us accountable.
          </motion.p>

          {/* Cards grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
            className="max-md:!grid-cols-1"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              style={{
                background: "#ffffff",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="16" r="3.5" stroke="#1d1d1f" strokeWidth="1.5" />
                <circle cx="27" cy="8" r="3.5" stroke="#1d1d1f" strokeWidth="1.5" />
                <circle cx="27" cy="24" r="3.5" stroke="#1d1d1f" strokeWidth="1.5" />
                <line x1="8.3" y1="14.5" x2="23.7" y2="9.5" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="8.3" y1="17.5" x2="23.7" y2="22.5" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", lineHeight: 1.2 }}>
                Distributed by Design
              </h3>
              <p style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.5 }}>
                Our remote-first structure eliminates commute emissions entirely — the single largest carbon cost of traditional office work.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              style={{
                background: "#ffffff",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 28C16 28 5 20 5 12a11 11 0 0 1 11-9 11 11 0 0 1 11 9c0 8-11 16-11 16z"
                  stroke="#1d1d1f"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 19V12M16 12C16 12 12 14 11 17M16 12C16 12 20 14 21 17"
                  stroke="#1d1d1f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", lineHeight: 1.2 }}>
                Net Zero by 2028
              </h3>
              <p style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.5 }}>
                Full carbon neutrality across Scope 1, 2, and 3 emissions — including the footprint of every service we host for our customers.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              style={{
                background: "#ffffff",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="20" height="24" rx="2" stroke="#1d1d1f" strokeWidth="1.5" />
                <line x1="10" y1="11" x2="22" y2="11" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="10" y1="16" x2="22" y2="16" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="10" y1="21" x2="17" y2="21" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", lineHeight: 1.2 }}>
                Full Transparency
              </h3>
              <p style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.5 }}>
                Quarterly carbon accounting, published publicly and available for independent audit. Including the numbers we're not proud of.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        id="timeline"
        style={{
          background: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(0,0,0,0.35)",
              marginBottom: "32px",
            }}
          >
            How We&apos;re Getting There
          </motion.p>

          <SlideWords
            text="A clear path to net zero."
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "#1d1d1f",
              maxWidth: "640px",
              marginBottom: "80px",
            }}
          />

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: "32px" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "4px",
                top: "8px",
                bottom: "8px",
                width: "1px",
                background: "rgba(0,0,0,0.1)",
              }}
            />

            {/* Milestone 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              style={{ position: "relative", marginBottom: "72px" }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-32px",
                  top: "8px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(0,0,0,0.25)",
                  background: "white",
                  zIndex: 2,
                }}
              />
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.35)",
                  marginBottom: "6px",
                }}
              >
                Now
              </motion.p>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", marginBottom: "12px" }}
              >
                July 2026
              </motion.p>
              <motion.h3
                variants={fadeUp}
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#1d1d1f",
                  marginBottom: "12px",
                }}
              >
                Carbon Monitoring Begins
              </motion.h3>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "17px",
                  color: "#86868b",
                  lineHeight: 1.5,
                  maxWidth: "600px",
                  marginBottom: "16px",
                }}
              >
                We begin collecting, reporting, and offsetting the carbon footprint of the Rally platform, including all application services. Business travel is also monitored and offset from this point forward.
              </motion.p>
              <motion.span
                variants={fadeUp}
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#1d1d1f",
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "4px 12px",
                  borderRadius: "100px",
                }}
              >
                In Progress
              </motion.span>
            </motion.div>

            {/* Milestone 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              style={{ position: "relative", marginBottom: "72px" }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-32px",
                  top: "8px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(0,0,0,0.25)",
                  background: "white",
                  zIndex: 2,
                }}
              />
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.35)",
                  marginBottom: "6px",
                }}
              >
                Next
              </motion.p>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", marginBottom: "12px" }}
              >
                End of 2027
              </motion.p>
              <motion.h3
                variants={fadeUp}
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#1d1d1f",
                  marginBottom: "12px",
                }}
              >
                Full Emissions Reporting
              </motion.h3>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "17px",
                  color: "#86868b",
                  lineHeight: 1.5,
                  maxWidth: "600px",
                  marginBottom: "16px",
                }}
              >
                We calculate and offset Scope 1, 2, and 3 emissions across the entire company. Customers receive regular carbon reports for their Rally usage, along with evidence of Cascade Software Labs-sponsored offsets.
              </motion.p>
              <motion.span
                variants={fadeUp}
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#1d1d1f",
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "4px 12px",
                  borderRadius: "100px",
                }}
              >
                Upcoming
              </motion.span>
            </motion.div>

            {/* Milestone 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-32px",
                  top: "8px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(0,0,0,0.25)",
                  background: "white",
                  zIndex: 2,
                }}
              />
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.35)",
                  marginBottom: "6px",
                }}
              >
                Goal
              </motion.p>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", marginBottom: "12px" }}
              >
                End of 2028
              </motion.p>
              <motion.h3
                variants={fadeUp}
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#1d1d1f",
                  marginBottom: "12px",
                }}
              >
                Net Zero Achieved
              </motion.h3>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "17px",
                  color: "#86868b",
                  lineHeight: 1.5,
                  maxWidth: "600px",
                  marginBottom: "16px",
                }}
              >
                Cascade Software Labs reaches full net zero carbon emissions across all business operations and customer-facing services.
              </motion.p>
              <motion.span
                variants={fadeUp}
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#1d1d1f",
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "4px 12px",
                  borderRadius: "100px",
                }}
              >
                Upcoming
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Proof Not Promises ── */}
      <section
        id="proof"
        style={{
          background: "#fafafa",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(0,0,0,0.35)",
              marginBottom: "32px",
            }}
          >
            Accountability
          </motion.p>

          <SlideWords
            text="Proof, Not Promises."
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "#1d1d1f",
              maxWidth: "640px",
              marginBottom: "24px",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            style={{
              fontSize: "19px",
              color: "#86868b",
              lineHeight: 1.42,
              maxWidth: "640px",
              marginBottom: "72px",
            }}
          >
            We believe accountability is the difference between a policy and a commitment. As our emissions data becomes available, every number will be published here — including the ones we're not proud of.
          </motion.p>

          {/* Metric cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
            className="max-md:!grid-cols-1"
          >
            {[
              { label: "CO\u2082 Offset This Quarter", value: "Reporting begins Q3 2026" },
              { label: "Reforestation Contributions", value: "Data coming soon" },
              { label: "Audit Status", value: "Available on request" },
            ].map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(0,0,0,0.35)",
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#1d1d1f",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {card.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            style={{
              fontSize: "14px",
              color: "rgba(0,0,0,0.45)",
              lineHeight: 1.5,
              marginTop: "40px",
            }}
          >
            Our carbon accounting is available for audit. To request access, contact{" "}
            <a
              href="mailto:sustainability@cascadesoftwarelabs.com"
              style={{
                color: "rgba(0,0,0,0.45)",
                textDecoration: "underline",
              }}
            >
              sustainability@cascadesoftwarelabs.com
            </a>
          </motion.p>
        </div>
      </section>

      {/* ── Offset Partner ── */}
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
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(0,0,0,0.35)",
              marginBottom: "32px",
            }}
          >
            Where the Money Goes
          </motion.p>

          <SlideWords
            text="Every tonne offset through a qualified reforestation program."
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "#1d1d1f",
              maxWidth: "760px",
              marginBottom: "24px",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            style={{
              fontSize: "19px",
              color: "#86868b",
              lineHeight: 1.42,
              maxWidth: "640px",
            }}
          >
            We calculate our CO₂ emissions from all business activities on a quarterly basis. We offset our entire footprint by participating in a qualified reforestation program — reducing CO₂ equal to what we generate.
          </motion.p>

          {/* Partner card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
            style={{
              border: "1.5px solid rgba(0,0,0,0.15)",
              borderRadius: "16px",
              padding: "48px",
              display: "flex",
              alignItems: "center",
              gap: "32px",
              maxWidth: "560px",
              marginTop: "48px",
            }}
            className="max-md:!flex-col max-md:!items-start"
          >
            {/* Tree icon */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path
                d="M24 6C24 6 10 16 10 28a14 14 0 0 0 28 0C38 16 24 6 24 6z"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <line x1="24" y1="42" x2="24" y2="34" stroke="rgba(0,0,0,0.2)" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "17px", fontWeight: 600, color: "#1d1d1f", lineHeight: 1.2 }}>
                Reforestation Partner
              </p>
              <p style={{ fontSize: "15px", color: "#86868b", lineHeight: 1.5 }}>
                Direct link and verification details to be added.
              </p>
              <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.35)" }}>
                (Full partner transparency coming Q3 2026)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Join the Conversation ── */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            style={{ maxWidth: "720px" }}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(0,0,0,0.35)",
                marginBottom: "28px",
              }}
            >
              Same Values?
            </motion.p>

            <SlideWords
              text="Let's Talk."
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                color: "#1d1d1f",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            />

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "19px",
                color: "#86868b",
                lineHeight: 1.42,
                maxWidth: "520px",
                marginBottom: "48px",
              }}
            >
              We want to work with customers, partners, and people who take this seriously. If sustainability matters to your business too, we&apos;d love to hear from you.
            </motion.p>

            {/* Email form */}
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.45)",
                  marginBottom: "16px",
                }}
              >
                Get our sustainability updates
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "flex", gap: "12px" }}
                className="max-md:!flex-col"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.15)",
                    borderRadius: "100px",
                    padding: "12px 24px",
                    color: "#1d1d1f",
                    fontSize: "14px",
                    outline: "none",
                    width: "280px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "#1d1d1f",
                    color: "#ffffff",
                    borderRadius: "100px",
                    padding: "12px 28px",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Subscribe
                </button>
              </form>
            </motion.div>

            {/* Text links */}
            <motion.div
              variants={fadeUp}
              style={{
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link
                href="/sustainability/policy"
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.45)",
                  textDecoration: "underline",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.45)")}
              >
                Read our full Sustainability Policy
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.45)",
                  textDecoration: "underline",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.45)")}
              >
                Ask us anything
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer Note ── */}
      <div
        style={{
          background: "#ffffff",
          paddingTop: "24px",
          paddingBottom: "24px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "rgba(0,0,0,0.4)",
            fontWeight: 500,
          }}
        >
          Cascade Software Labs Sustainability Policy — Effective July 1, 2026. Updated quarterly.
        </p>
      </div>

      <Footer />
    </>
  );
}

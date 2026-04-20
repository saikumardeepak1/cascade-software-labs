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
   Data
   ───────────────────────────────────────────── */

const values = [
  {
    id: "Value 01",
    title: "Enterprise-First Mindset",
    desc: "We build for production from day one. Security, scalability, and compliance are not afterthoughts — they are the foundation of every solution we architect.",
  },
  {
    id: "Value 02",
    title: "Partnership Over Delivery",
    desc: "We don't just deliver code and disappear. We embed with your team, transfer knowledge, and remain available as your AI strategy evolves.",
  },
  {
    id: "Value 03",
    title: "Agentic by Design",
    desc: "We believe the future of enterprise software is autonomous. Every engagement is an opportunity to move your organization toward intelligent, self-operating systems.",
  },
];

const whyChoose = [
  "Member of the Anthropic Partner Network",
  "Deep expertise in Agentic AI and LLM operations",
  "Proven track record bridging PoC to production",
  "40–70% AI cost reduction through optimization",
  "Full compliance support (SOC 2, HIPAA, FedRAMP)",
  "24/7 managed services and support",
  "Pacific Northwest-based with global delivery capability",
];

const offices = [
  {
    type: "Headquarters",
    city: "Portland, OR",
    desc: "Our founding home. Where the engineering culture and creative problem-solving come together.",
  },
  {
    type: "Office",
    city: "Seattle, WA",
    desc: "Close to the heart of Pacific Northwest tech, serving enterprise clients across the region.",
  },
  {
    type: "Office",
    city: "Bellevue, WA",
    desc: "Supporting our security and compliance practice and enterprise delivery in the greater Seattle metro.",
  },
];

const ctaFeatures = [
  "No commitment required",
  "2-week assessment sprint",
  "Custom AI roadmap delivered",
];

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function CompanyPage() {
  return (
    <>
      <NavBar />

      {/* ── Hero ── */}
      <section
        className="max-md:!bg-none max-md:!bg-white"
        style={{
          height: "100vh",
          width: "100vw",
          minHeight: "600px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/company-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left: text anchored to bottom-left */}
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
            About Us
          </motion.p>

          <motion.h1
            className="max-md:!text-[2.2rem]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#1d1d1f", marginBottom: "32px" }}
          >
            {["Cascade", "Software", "Labs"].map((word, i, arr) => (
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "480px" }}
          >
            Cascade Software Labs builds enterprise-ready Agentic AI solutions with security-first architecture, full customization, and 40–70% cost optimization.
          </motion.p>
        </div>

      </section>

      {/* ── Our Mission ── */}
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
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "32px" }}
          >
            Our Mission
          </motion.p>
          <SlideWords
            text="We believe the future of enterprise software is autonomous. Every engagement is an opportunity to move your organization toward intelligent, self-operating systems."
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.4, color: "#1d1d1f", maxWidth: "860px", marginBottom: "32px" }}
          />
          <SlideWords
            text="We build for production from day one. Security, scalability, and compliance are not afterthoughts — they are the foundation of every solution we architect."
            style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "640px" }}
          />
        </div>
      </section>

      {/* ── Core Values ── */}
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
            variants={stagger}
            style={{ marginBottom: "80px" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}>
              Core Values
            </motion.p>
            <SlideWords
              text="What we stand for."
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1 }}
            />
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stagger}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "60px",
                  paddingTop: "56px",
                  paddingBottom: "56px",
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                }}
                className="max-md:!grid-cols-1 max-md:!gap-4"
              >
                <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.3)", paddingTop: "4px" }}>
                  {value.id}
                </motion.p>
                <div>
                  <SlideWords
                    text={value.title}
                    style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#1d1d1f", marginBottom: "16px" }}
                  />
                  <SlideWords
                    text={value.desc}
                    style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.42, maxWidth: "560px" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Cascade ── */}
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
            variants={stagger}
            style={{ marginBottom: "72px" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}>
              Why Choose Cascade?
            </motion.p>
            <SlideWords
              text="What sets us apart."
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1 }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px 60px" }}
            className="max-md:!grid-cols-1"
          >
            {whyChoose.map((item) => (
              <motion.div key={item} variants={fadeUp} style={{ display: "flex", alignItems: "flex-start", gap: "14px", paddingTop: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#1d1d1f", flexShrink: 0, marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ fontSize: "17px", color: "#1d1d1f", lineHeight: 1.42, fontWeight: 500 }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Where We Work ── */}
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
            variants={stagger}
            style={{ marginBottom: "72px" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}>
              Where We Work
            </motion.p>
            <SlideWords
              text="Proudly Pacific Northwest"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: "16px" }}
            />
            <SlideWords
              text="Delivery: Seattle / Portland Metro, Pacific Northwest"
              style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42 }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-md:!grid-cols-1"
          >
            {offices.map((office) => (
              <motion.div
                key={office.city}
                variants={fadeUp}
                style={{ background: "#ffffff", padding: "48px 40px", display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)" }}>
                  {office.type}
                </p>
                <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1d1d1f", lineHeight: 1.15 }}>
                  {office.city}
                </h3>
                <p style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.42 }}>
                  {office.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "#1d1d1f",
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
            variants={stagger}
            style={{ maxWidth: "720px" }}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: "28px" }}>
              Let's Build Something Exceptional
            </motion.p>
            <SlideWords
              text="Schedule a discovery call with our team."
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#f5f5f7", lineHeight: 1.1, marginBottom: "24px" }}
            />
            <SlideWords
              text="We'll assess your AI readiness and design a roadmap in two weeks."
              style={{ fontSize: "19px", color: "rgba(255,255,255,0.55)", lineHeight: 1.42, marginBottom: "48px" }}
            />

            <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "48px" }}>
              {ctaFeatures.map((f) => (
                <motion.div key={f} variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                  <span style={{ fontSize: "17px", color: "rgba(255,255,255,0.7)", lineHeight: 1.42 }}>{f}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                style={{ display: "inline-block", padding: "14px 36px", borderRadius: "100px", background: "#ffffff", color: "#1d1d1f", fontSize: "14px", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

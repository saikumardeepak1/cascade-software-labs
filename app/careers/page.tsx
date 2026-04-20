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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const perks = [
  { title: "Cutting-Edge Work", desc: "Work on the most interesting AI problems in enterprise technology. No legacy systems." },
  { title: "Remote-First", desc: "Work from anywhere in the Pacific Northwest or fully remote. We trust you to deliver." },
  { title: "Competitive Compensation", desc: "Top-of-market salaries plus equity participation in a fast-growing firm." },
  { title: "Full Benefits", desc: "Medical, dental, vision, and 401k with company match. Your wellbeing matters." },
  { title: "Flexible Hours", desc: "Async-first communication. We measure output, not hours. Own your schedule." },
  { title: "PNW Culture", desc: "Hiking trips, coffee culture, and a team that values work-life balance as much as technical excellence." },
];

const positions = [
  {
    location: "Portland / Remote",
    type: "Director of AI / ML",
    title: "Solutions Architect",
    desc: "Lead technical discovery engagements with enterprise clients. Design secure, scalable AI architectures and communicate complex solutions to C-suite stakeholders.",
  },
  {
    location: "Seattle / Remote",
    type: "Full-Time",
    title: "Senior AI Engineer",
    desc: "Build and deploy production-grade Agentic AI systems. Deep expertise in LangChain, LangGraph, Python, and cloud infrastructure required.",
  },
  {
    location: "Remote (PNW preferred)",
    type: "Full-Time",
    title: "ML Infrastructure Engineer",
    desc: "Own the infrastructure layer for our AI deployments. Kubernetes, Terraform, model serving, vector databases, and cost optimization.",
  },
  {
    location: "Bellevue, WA",
    type: "Full-Time",
    title: "AI Security Specialist",
    desc: "Ensure our AI deployments meet the highest security and compliance standards. Experience with SOC 2, HIPAA, and enterprise security frameworks required.",
  },
];

const ctaFeatures = [
  "Remote-first culture",
  "Top-of-market compensation",
  "Cutting-edge AI work",
];

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function CareersPage() {
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
          backgroundImage: "url('/careers-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-md:!top-[40vh] max-md:!px-5 max-md:text-center max-md:!left-0 max-md:!right-0 max-md:!max-w-full" style={{ position: "absolute", top: "50vh", left: 0, paddingLeft: "clamp(20px, 5.5vw, 80px)", paddingRight: "clamp(20px, 5.5vw, 80px)", maxWidth: "720px" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", marginBottom: "28px" }}
          >
            We're Hiring
          </motion.p>
          <motion.h1
            className="max-md:!text-[2.2rem]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.02, color: "#1d1d1f", marginBottom: "36px" }}
          >
            {["Join", "the", "AI", "Elite."].map((word, i, arr) => (
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "520px" }}
          >
            Join a team of world-class AI engineers and architects building the systems that will define how enterprises operate in the age of Agentic AI.
          </motion.p>
        </div>
      </section>

      {/* ── Why Join Us ── */}
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
              Why Join Us
            </motion.p>
            <SlideWords
              text="Built for builders."
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1 }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-lg:!grid-cols-2 max-md:!grid-cols-1"
          >
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={fadeUp}
                style={{ background: "#ffffff", padding: "48px 40px", display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <h3 style={{ fontSize: "19px", fontWeight: 600, letterSpacing: "-0.015em", color: "#1d1d1f", lineHeight: 1.2 }}>
                  {perk.title}
                </h3>
                <p style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.42 }}>
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Open Positions ── */}
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
              Open Positions
            </motion.p>
            <SlideWords
              text="We're growing fast."
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: "16px" }}
            />
            <SlideWords
              text="Find a role where you can do the best work of your career."
              style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "520px" }}
            />
          </motion.div>

          {/* Position rows */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {positions.map((pos, index) => (
              <motion.div
                key={pos.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stagger}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "40px",
                  paddingTop: "48px",
                  paddingBottom: "48px",
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                  alignItems: "start",
                }}
                className="max-md:!grid-cols-1 max-md:!gap-4"
              >
                <div>
                  <motion.div variants={fadeUp} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
                    <span style={{ padding: "4px 12px", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.15)", fontSize: "12px", fontWeight: 500, color: "#86868b", letterSpacing: "0.02em" }}>
                      {pos.location}
                    </span>
                    <span style={{ padding: "4px 12px", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.15)", fontSize: "12px", fontWeight: 500, color: "#86868b", letterSpacing: "0.02em" }}>
                      {pos.type}
                    </span>
                  </motion.div>
                  <SlideWords
                    text={pos.title}
                    style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#1d1d1f", marginBottom: "12px" }}
                  />
                  <SlideWords
                    text={pos.desc}
                    style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.42, maxWidth: "600px" }}
                  />
                </div>
                <motion.div variants={fadeUp}>
                  <Link
                    href="/contact"
                    style={{ display: "inline-block", padding: "10px 24px", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.2)", fontSize: "13px", fontWeight: 500, color: "#1d1d1f", textDecoration: "none", whiteSpace: "nowrap", transition: "border-color 0.2s ease" }}
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </motion.div>
            ))}

            {/* Don't see your role */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              style={{
                paddingTop: "48px",
                paddingBottom: "48px",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "40px",
              }}
              className="max-md:!flex-col max-md:!items-start"
            >
              <div>
                  <SlideWords
                    text="Don't See Your Role?"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: 600, letterSpacing: "-0.015em", color: "#1d1d1f", marginBottom: "8px" }}
                  />
                  <SlideWords
                    text="We're always looking for exceptional talent. Send us your info and we'll keep you in mind."
                    style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.42 }}
                  />
              </div>
              <motion.div variants={fadeUp} style={{ flexShrink: 0 }}>
                <Link
                  href="/contact"
                  style={{ display: "inline-block", padding: "10px 24px", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.2)", fontSize: "13px", fontWeight: 500, color: "#1d1d1f", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
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
              Ready to Build the Future of AI?
            </motion.p>
            <SlideWords
              text="Join Cascade Software Labs and work alongside world-class engineers on the AI problems that matter most to enterprise."
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#f5f5f7", lineHeight: 1.1, marginBottom: "24px" }}
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
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

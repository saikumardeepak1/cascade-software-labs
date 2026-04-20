"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";

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

const whyContact = [
  "Free 30-minute discovery consultation",
  "No-pressure assessment of your AI readiness",
  "Customized roadmap for your enterprise",
  "Direct access to our Solutions Architects",
  "We respond within 24 hours",
];

const contactMeta = [
  { label: "Email", value: "hello@cascadesoftwarelabs.com", href: "mailto:hello@cascadesoftwarelabs.com" },
  { label: "Hours", value: "Monday–Friday, 9 AM–6 PM PT" },
  { label: "Location", value: "Seattle / Portland Metro, Pacific Northwest" },
  { label: "Response Time", value: "We respond within 24 hours" },
];

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <NavBar dark />

      {/* ── Hero ── */}
      <Card className="w-full h-screen rounded-none bg-black/[0.96] relative overflow-hidden border-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* ── Mobile hero: clean centered text ── */}
        <div className="md:hidden flex flex-col items-center justify-center h-full px-6 text-center z-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            style={{ fontSize: "clamp(2.8rem, 12vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff", marginBottom: "24px" }}
          >
            Cascade<br />Software Labs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, maxWidth: "320px" }}
          >
            Schedule a discovery call with our Solutions Architects.
          </motion.p>
        </div>

        {/* ── Desktop hero: absolute text + Spline ── */}
        <div className="hidden md:flex h-full">
          {/* Left: text starting at 50vh */}
          <div className="flex-1 relative z-10">
            <div style={{ position: "absolute", top: "50vh", left: 0, paddingLeft: "clamp(20px, 5.5vw, 80px)", paddingRight: "40px", maxWidth: "640px" }}>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}
              >
                Get in Touch
              </motion.p>

              <motion.h1
                style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.0, color: "#ffffff", marginBottom: "32px" }}
              >
                {[["Cascade"], ["Software", "Labs"]].map((line, li) => (
                  <span key={li} style={{ display: "block" }}>
                    {line.map((word, wi) => (
                      <motion.span
                        key={wi}
                        style={{ display: "inline-block" }}
                        initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + (li * 2 + wi) * 0.09 }}
                      >
                        {word}{wi < line.length - 1 ? "\u00A0" : ""}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                style={{ fontSize: "19px", color: "rgba(255,255,255,0.55)", lineHeight: 1.42, maxWidth: "480px" }}
              >
                Schedule a discovery call with our Solutions Architects. We'll assess your AI readiness and design a roadmap in two weeks.
              </motion.p>
            </div>
          </div>

          {/* Right: Spline robot */}
          <div style={{ flex: "0 0 60%", position: "relative", marginTop: "6vh" }}>
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* ── Main content: meta + form ── */}
      <section
        style={{
          background: "#0a0a0a",
          paddingTop: "80px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5.5vw, 80px)",
          paddingRight: "clamp(20px, 5.5vw, 80px)",
        }}
      >
        <div
          style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }}
          className="max-lg:!grid-cols-1 max-lg:!gap-16"
        >
          {/* Left: why contact + meta */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: "28px" }}>
              Why Contact Us?
            </motion.p>

            <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "72px" }}>
              {whyContact.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  style={{ display: "flex", alignItems: "flex-start", gap: "14px", paddingTop: "18px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", flexShrink: 0, marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "17px", color: "#ffffff", lineHeight: 1.42, fontWeight: 500 }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact meta */}
            <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {contactMeta.map((meta) => (
                <motion.div key={meta.label} variants={fadeUp}>
                  <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>
                    {meta.label}
                  </p>
                  {meta.href ? (
                    <a href={meta.href} style={{ fontSize: "17px", color: "#ffffff", fontWeight: 500, textDecoration: "none" }}>
                      {meta.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "17px", color: "#ffffff", fontWeight: 500 }}>{meta.value}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ padding: "60px 48px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", textAlign: "center" }}
              >
                <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: "20px" }}>Message Sent</p>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#ffffff", lineHeight: 1.1, marginBottom: "16px" }}>We'll be in touch soon.</h3>
                <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.42 }}>We typically respond within 24 hours. Look for an email from hello@cascadesoftwarelabs.com.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <motion.div variants={fadeUp}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                    Full Name <span style={{ color: "#ffffff" }}>*</span>
                  </label>
                  <input name="name" required placeholder="Jane Smith" value={form.name} onChange={handleChange} style={inputStyle} />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                    Company <span style={{ color: "#ffffff" }}>*</span>
                  </label>
                  <input name="company" required placeholder="Acme Corp" value={form.company} onChange={handleChange} style={inputStyle} />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                    Email
                  </label>
                  <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} style={inputStyle} />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                    Role
                  </label>
                  <input name="role" placeholder="CTO, VP Engineering, etc." value={form.role} onChange={handleChange} style={inputStyle} />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                    Message <span style={{ color: "#ffffff" }}>*</span>
                  </label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your AI challenges..." value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: "none", lineHeight: 1.5 }} />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    style={{
                      display: "inline-block",
                      padding: "14px 36px",
                      borderRadius: "100px",
                      background: "#ffffff",
                      color: "#0a0a0a",
                      fontSize: "14px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: "-0.01em",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#ffffff")}
                  >
                    Schedule Discovery Call
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────
   Shared input style — dark theme
   ───────────────────────────────────────────── */

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  fontSize: "15px",
  color: "#ffffff",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

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
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const caicaTech = ["React", "Three.js", "Claude (Anthropic)", "Zustand", "Framer Motion", "Node.js"];

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Shell: "#89e051",
  Python: "#3572A5",
  QML: "#44a51c",
  "Multi-language": "#e34c26",
  "Jupyter Notebook": "#DA5B0B",
  Lua: "#000080",
};

const openSource = [
  { lang: "TypeScript", name: "portfolio", desc: "The codebase for my PERSONAL portfolio. Not intended for adaptation, but you are welcome to try", stars: 0, forks: 0, updated: "4/17/2026" },
  { lang: "Shell", name: "HyprValley", desc: "Arch Linux Rice in Space, Nature, Ocean, Sakura, and Code-RED. Comes with Hyprland", stars: 46, forks: 2, updated: "4/16/2026" },
  { lang: "Python", name: "YouTranslate", desc: "Takes a youtube video, clones the voice and re-creates that video in a different language", stars: 110, forks: 13, updated: "4/8/2026" },
  { lang: "QML", name: "Monoland", desc: "A Monochromatic themed Hyprland rice with Quickshell widgets.", stars: 5, forks: 0, updated: "3/30/2026" },
  { lang: "TypeScript", name: "dashboard", desc: "A Dashboard / Portfolio / Blog template", stars: 3, forks: 0, updated: "3/22/2026" },
  { lang: "Multi-language", name: "silent code", desc: "An agentic programming system where you are the boss", stars: 1, forks: 2, updated: "3/9/2026" },
  { lang: "Python", name: "linear cli", desc: "CLI program for Linear Issue Tracker automation available on PyPI and AUR", stars: 8, forks: 0, updated: "2/22/2026" },
  { lang: "Shell", name: "Gruvtopia", desc: "Hyprland rice with Gruvbox theme", stars: 1, forks: 0, updated: "12/28/2025" },
  { lang: "Jupyter Notebook", name: "archive", desc: "Collection of my Kaggle Notebooks", stars: 0, forks: 0, updated: "12/10/2025" },
  { lang: "Multi-language", name: "AdiKsOnDev", desc: "Config files for my GitHub profile.", stars: 0, forks: 0, updated: "10/9/2025" },
  { lang: "TypeScript", name: "climatetime", desc: "Care about your surroundings", stars: 0, forks: 0, updated: "9/3/2025" },
  { lang: "Lua", name: "nvimConfig", desc: "FORKED from nvchad", stars: 0, forks: 0, updated: "6/27/2025" },
];

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function ProjectsPage() {
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
          backgroundImage: "url('/projects-bg.png')",
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
            Projects & Products
          </motion.p>
          <motion.h1
            className="max-md:!text-[2.2rem]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.02, color: "#1d1d1f", marginBottom: "36px" }}
          >
            {["What", "We're", "Building"].map((word, i, arr) => (
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
            style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "520px" }}
          >
            From our flagship AI orchestration platform to open source contributions, we build tools that push the boundaries of what Agentic AI can do for enterprises.
          </motion.p>
        </div>
      </section>

      {/* ── Flagship Product: CAICA ── */}
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
          >
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
              <span style={{ padding: "4px 12px", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.15)", fontSize: "12px", fontWeight: 500, color: "rgba(0,0,0,0.4)", letterSpacing: "0.04em" }}>
                Flagship Product
              </span>
              <span style={{ padding: "4px 12px", borderRadius: "100px", background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.1)", fontSize: "12px", fontWeight: 500, color: "rgba(0,0,0,0.5)", letterSpacing: "0.04em" }}>
                Active Development
              </span>
            </motion.div>

            <SlideWords
              text="CAICA — Cascade Agentic Intelligent Chat App"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: "32px", maxWidth: "800px" }}
            />

            <SlideWords
              text="Our multi-agent orchestration platform built on Claude as part of the Anthropic Partner Network. CAICA provides a 3D interface for managing autonomous AI agents across enterprise workspaces, with real-time agent execution, voice command navigation, intelligent model routing (Claude Sonnet for complex reasoning, Claude Haiku for lightweight tasks), and hierarchical memory aggregation."
              style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "720px", marginBottom: "48px" }}
            />

            <SlideWords
              text="CAICA serves as both our internal agent management system and a client-facing reference architecture. We plan to offer it as a white-label platform for enterprise clients."
              style={{ fontSize: "17px", color: "rgba(0,0,0,0.4)", lineHeight: 1.42, maxWidth: "720px", marginBottom: "48px" }}
            />

            <motion.div variants={stagger} style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {caicaTech.map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  style={{ padding: "6px 14px", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.12)", fontSize: "13px", fontWeight: 500, color: "#1d1d1f", background: "rgba(0,0,0,0.03)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Open Source ── */}
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
              Open Source
            </motion.p>
            <SlideWords
              text="Building in public."
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: "16px" }}
            />
            <SlideWords
              text="We believe in building in public and sharing knowledge with the developer community."
              style={{ fontSize: "19px", color: "#86868b", lineHeight: 1.42, maxWidth: "520px" }}
            />
          </motion.div>

          {/* Repo grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(0,0,0,0.06)" }}
            className="max-lg:!grid-cols-2 max-md:!grid-cols-1"
          >
            {openSource.map((repo) => (
              <motion.div
                key={repo.name}
                variants={fadeUp}
                style={{ background: "#ffffff", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                {/* Language dot + name */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: langColors[repo.lang] ?? "#86868b", flexShrink: 0 }} />
                  <span style={{ fontSize: "11px", color: "#86868b", fontWeight: 500 }}>{repo.lang}</span>
                </div>

                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                  {repo.name}
                </h3>

                <p style={{ fontSize: "14px", color: "#86868b", lineHeight: 1.42, flex: 1 }}>
                  {repo.desc}
                </p>

                {/* Meta row */}
                <div style={{ display: "flex", gap: "16px", paddingTop: "8px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {repo.stars}
                  </span>
                  <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
                      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" /><path d="M12 12v3" />
                    </svg>
                    {repo.forks}
                  </span>
                  <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.3)", marginLeft: "auto" }}>
                    Updated {repo.updated}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}
          >
            <SlideWords
              text="Want to collaborate?"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.1 }}
            />
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                style={{ display: "inline-block", padding: "14px 36px", borderRadius: "100px", background: "#1d1d1f", color: "#ffffff", fontSize: "14px", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   Animation helpers
   ───────────────────────────────────────────── */

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
   Sub-components
   ───────────────────────────────────────────── */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <span
            style={{
              display: "inline-block",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#86868b",
              flexShrink: 0,
              marginTop: "8px",
            }}
          />
          <span style={{ fontSize: "17px", color: "#86868b", lineHeight: 1.65 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────────────────────────
   Back link
   ───────────────────────────────────────────── */

function BackLink({ style }: { style?: React.CSSProperties }) {
  return (
    <Link
      href="/sustainability"
      style={{
        fontSize: "13px",
        color: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        textDecoration: "none",
        transition: "color 0.2s ease",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.7)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.45)")}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to Sustainability
    </Link>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function SustainabilityPolicyPage() {
  return (
    <>
      <NavBar />

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          paddingTop: "140px",
          paddingBottom: "120px",
          paddingLeft: "clamp(20px, 5vw, 40px)",
          paddingRight: "clamp(20px, 5vw, 40px)",
        }}
      >
        {/* Top back link */}
        <BackLink style={{ marginBottom: "56px" }} />

        {/* Policy content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Title */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            Sustainability Policy
          </motion.h1>

          {/* Date line */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "14px",
              color: "rgba(0,0,0,0.4)",
              marginBottom: "56px",
            }}
          >
            Effective July 1, 2026 · Updated Quarterly
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            style={{
              borderTop: "1px solid rgba(0,0,0,0.1)",
              marginBottom: "56px",
            }}
          />

          {/* ── Overall Goal ── */}
          <motion.div variants={fadeUp}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.015em",
                marginBottom: "16px",
                marginTop: "48px",
              }}
            >
              Overall Goal
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#86868b",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              Cascade Software Labs has always had sustainability as a core tenet, including being distributed by design, which eliminates much of the carbon footprint traditionally associated with getting to and being in an office environment, but now we're taking that one step further.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#86868b",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              Cascade Software Labs is fully committed to building a sustainable business that operates with net zero carbon emissions by 2028. Achieving net zero includes offsetting the entire carbon footprint for the operations of the company as well as the footprint generated by hosting our services for our customers.
            </p>
          </motion.div>

          {/* ── Cascade Software Labs Sustainability Policy ── */}
          <motion.div variants={fadeUp}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.015em",
                marginBottom: "16px",
                marginTop: "48px",
              }}
            >
              Cascade Software Labs Sustainability Policy
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#86868b",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              Our goal of achieving net zero emissions by 2028 will be accomplished in two phases:
            </p>

            {/* Sub-heading: Immediate */}
            <p
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginTop: "32px",
                marginBottom: "12px",
              }}
            >
              Immediate (1st July 2026)
            </p>
            <BulletList
              items={[
                "Cascade Software Labs will collect, report, and offset the carbon footprint associated with providing the Rally service to its customers, including the operation of application services (providers) under Rally management.",
                "Cascade Software Labs will monitor and offset the carbon footprint of all business-related travel.",
              ]}
            />

            {/* Sub-heading: By end of 2027 */}
            <p
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginTop: "32px",
                marginBottom: "12px",
              }}
            >
              By end of 2027
            </p>
            <BulletList
              items={[
                "Cascade Software Labs will calculate, report, and offset the carbon footprint associated with the company's Scope 1, 2, and 3 emissions.",
                "Cascade Software Labs will provide regular reporting of the carbon footprint associated with operating Rally to each customer, along with evidence of the Cascade Software Labs-sponsored carbon offsets.",
              ]}
            />
          </motion.div>

          {/* ── Policy Effective Dates ── */}
          <motion.div variants={fadeUp}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.015em",
                marginBottom: "16px",
                marginTop: "48px",
              }}
            >
              Policy Effective Dates
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#86868b",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              The Sustainability Policy will be implemented beginning on July 1st, 2026 and will remain in effect indefinitely. Cascade Software Labs will work to achieve net zero carbon emissions as soon as possible, and no later than December 31st, 2028.
            </p>
          </motion.div>

          {/* ── Offsetting the Carbon Footprint ── */}
          <motion.div variants={fadeUp}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.015em",
                marginBottom: "16px",
                marginTop: "48px",
              }}
            >
              Offsetting the Carbon Footprint
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#86868b",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              Cascade Software Labs will calculate the CO₂ emissions from all business activities on a quarterly basis and will offset its carbon footprint by participating in a qualified reforestation program to reduce CO₂ emissions equal to what Cascade Software Labs is generating.
            </p>
          </motion.div>

          {/* ── Proof of Net Zero ── */}
          <motion.div variants={fadeUp}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#1d1d1f",
                letterSpacing: "-0.015em",
                marginBottom: "16px",
                marginTop: "48px",
              }}
            >
              Proof of Net Zero
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#86868b",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              Cascade Software Labs will make its accounting of all carbon emissions and the corresponding offset contributions available for audit purposes to verify the attainment of net zero emissions.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom back link */}
        <BackLink style={{ marginTop: "72px" }} />
      </div>

      <Footer />
    </>
  );
}

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import GlassCard from "@/components/ui/glass-card"

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

const cards = [
  {
    number: "01",
    title: "Security First",
    body: "Enterprise-grade security built into every deployment — private infrastructure, network isolation, encryption, and full compliance readiness.",
  },
  {
    number: "02",
    title: "40–70% Cost Reduction",
    body: "Dramatic reduction in AI inference costs through model routing, semantic caching, batching, and infrastructure optimization.",
  },
  {
    number: "03",
    title: "Agentic by Design",
    body: "Autonomous agents that reason, plan, and act across your enterprise tools, APIs, and data systems — no human in the loop required.",
  },
]

function ScatterCard({
  card,
  index,
  centerIndex,
  scrollYProgress,
}: {
  card: (typeof cards)[0]
  index: number
  centerIndex: number
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const distanceFromCenter = index - centerIndex

  const x = useTransform(scrollYProgress, [0.15, 0.55], [distanceFromCenter * 120, 0])
  const y = useTransform(scrollYProgress, [0.15, 0.55], [Math.abs(distanceFromCenter) * 80, 0])
  const rotate = useTransform(scrollYProgress, [0.15, 0.55], [distanceFromCenter * 12, 0])
  const scale = useTransform(scrollYProgress, [0.15, 0.55], [0.8, 1])

  return (
    <motion.div
      className="will-change-transform"
      style={{ x, y, rotate, scale, transformOrigin: "center" }}
    >
      <GlassCard
        number={card.number}
        title={card.title}
        body={card.body}
        className="w-full h-[340px]"
      />
    </motion.div>
  )
}

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef })
  const centerIndex = Math.floor(cards.length / 2)

  return (
    <section
      ref={sectionRef}
      data-lift-section
      data-stack
      className="relative max-md:!px-5 max-md:!h-auto"
      style={{
        background: "#ffffff",
        height: "220vh",
        position: "relative",
        zIndex: 3,
      }}
    >
      {/* Sticky viewport container */}
      <div
        data-stack-content
        className="sticky top-0 flex flex-col justify-center max-md:!px-5 max-md:!py-16 max-md:!static max-md:!h-auto"
        style={{
          height: "100vh",
          padding: "120px 80px 60px",
          transformOrigin: "center bottom",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Heading — visible immediately on lift */}
          <div className="max-md:text-center max-md:!max-w-full" style={{ maxWidth: "640px", marginBottom: "60px" }}>
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
              Why Cascade.
            </p>
            <SlideWords
              text="Built for enterprise. Optimized for scale."
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                color: "#1d1d1f",
                marginBottom: "16px",
                lineHeight: 1.1,
              }}
            />
            <SlideWords
              text="We make enterprise AI accessible, secure, and cost-effective — from first deployment to full production scale."
              style={{
                fontSize: "19px",
                color: "#86868b",
                lineHeight: 1.42,
                maxWidth: "520px",
              }}
            />
          </div>

          {/* 3D Glass Cards — scatter-to-grid animation */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:flex max-md:flex-col max-md:gap-4"
            style={{ perspective: "800px" }}
          >
            {cards.map((card, i) => (
              <>
                {/* Desktop: scatter animation card */}
                <div key={`desktop-${card.number}`} className="hidden md:block">
                  <ScatterCard
                    card={card}
                    index={i}
                    centerIndex={centerIndex}
                    scrollYProgress={scrollYProgress}
                  />
                </div>
                {/* Mobile: plain clean card */}
                <motion.div
                  key={`mobile-${card.number}`}
                  className="md:hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "16px",
                    padding: "28px 24px",
                  }}
                >
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "rgba(0,0,0,0.3)", letterSpacing: "0.08em", marginBottom: "12px" }}>{card.number}</p>
                  <p style={{ fontSize: "18px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: "10px" }}>{card.title}</p>
                  <p style={{ fontSize: "15px", color: "#86868b", lineHeight: 1.5 }}>{card.body}</p>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

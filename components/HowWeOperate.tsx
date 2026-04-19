"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

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

export default function HowWeOperate() {
  const leftRef = useRef<HTMLDivElement>(null)
  const img1Ref = useRef<HTMLDivElement>(null)
  const img2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [
      { el: leftRef.current, delay: 0 },
      { el: img1Ref.current, delay: 100 },
      { el: img2Ref.current, delay: 200 },
    ]

    const observers: IntersectionObserver[] = []

    elements.forEach(({ el, delay }) => {
      if (!el) return
      // Set initial state
      el.style.opacity = "0"
      el.style.transform = "translateY(24px)"
      el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute(
                "style",
                `opacity: 1; transform: translateY(0); transition: opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
              )
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "120px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="max-md:grid-cols-1"
      >
        {/* Left column */}
        <div ref={leftRef}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(10,10,10,0.4)",
              marginBottom: "24px",
            }}
          >
            How we operate.
          </p>
          <SlideWords
            text="We build fully integrated factories for composite parts. Using proprietary hardware and software, we design, manufacture, and quality-control every component."
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "#0a0a0a",
            }}
          />
        </div>

        {/* Right column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div ref={img1Ref} style={{ borderRadius: "12px", overflow: "hidden", position: "relative", height: "400px" }}>
            <Image
              src="/images/factory-1.jpg"
              alt="ICOMAT robotic arm in white cleanroom"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div ref={img2Ref} style={{ borderRadius: "12px", overflow: "hidden", position: "relative", height: "280px" }}>
            <Image
              src="/images/factory-2.jpg"
              alt="ICOMAT factory"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

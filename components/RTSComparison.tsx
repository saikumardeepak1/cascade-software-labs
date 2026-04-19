"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

interface PanelProps {
  label: string;
  labelHref: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
}

function Panel({ label, labelHref, title, body, imageSrc, imageAlt }: PanelProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        padding: "48px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "240px",
          position: "relative",
          marginBottom: "32px",
          background: "#e8eef4",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <Link
        href={labelHref}
        style={{
          fontSize: "12px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#0a0a0a",
          opacity: 0.4,
          marginBottom: "16px",
          display: "block",
          textDecoration: "none",
        }}
      >
        {label}
      </Link>

      <SlideWords
        text={title}
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginBottom: "16px",
          color: "#0a0a0a",
          lineHeight: 1.15,
        }}
      />

      <SlideWords
        text={body}
        style={{
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#6b6b67",
          maxWidth: "400px",
        }}
      />
    </div>
  );
}

export default function RTSComparison() {
  return (
    <section
      style={{
        background: "#f5f5f4",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "24px",
        }}
      >
        <Panel
          label="Technology"
          labelHref="/tech"
          title="Before RTS"
          body="Composite materials are only strong in the fiber direction. Traditional manufacturing relies on straight fiber layers — limiting weight savings to the mechanical constraints of those straight paths."
          imageSrc="/images/rts-before.png"
          imageAlt="before rts"
        />
        <Panel
          label="Technology"
          labelHref="/tech"
          title="RTS Design"
          body="With Rapid Tow Shearing (RTS), each fiber is precisely steered to follow the load path — maximizing strength while minimizing material. The result: lighter, stronger, faster parts."
          imageSrc="/images/rts-design.png"
          imageAlt="RTS Design"
        />
      </div>
    </section>
  );
}

"use client"

import { useEffect, useRef } from "react"

export default function CascadeLoader() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const phase1Ref = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const hasPlayed = sessionStorage.getItem("cascade-loader-played")
    if (hasPlayed) {
      if (wrapperRef.current) wrapperRef.current.style.display = "none"
      document.body.style.overflow = ""
      return
    }

    import("gsap").then(({ default: gsap }) => {
      const counter = { value: 0 }

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("cascade-loader-played", "1")
          if (wrapperRef.current) wrapperRef.current.style.display = "none"
          document.body.style.overflow = ""
        },
      })

      // Step 1: Smooth 0–100% count
      tl.to(counter, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.round(counter.value) + "%"
          }
        },
      })

      // Step 2: Slide white layer up to reveal dark layer
      .to(phase1Ref.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut",
      })

      // Step 3: Raise the Cascade text (overlaps with step 2)
      .to(textRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.3")

      // Step 4: Hold to register the brand
      .to({}, { duration: 0.5 })

      // Step 5: Slide entire loader up to reveal the site
      .to(wrapperRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
      })
    })
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      {/* Phase 2: Dark layer with brand text (behind) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            textAlign: "center",
            paddingBottom: "2vh",
          }}
        >
          <h1
            ref={textRef}
            style={{
              color: "#F3F3F3",
              fontSize: "22vw",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 0.8,
              margin: 0,
              transform: "translateY(100%)",
              textTransform: "uppercase",
            }}
          >
            Cascade
          </h1>
        </div>
      </div>

      {/* Phase 1: White counter layer (on top) */}
      <div
        ref={phase1Ref}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <div
          ref={counterRef}
          style={{
            fontFamily: "monospace",
            fontSize: "4vw",
            fontWeight: 500,
            color: "#000000",
          }}
        >
          0%
        </div>
      </div>
    </div>
  )
}

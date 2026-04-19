"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CascadeLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Only run once per session
    const hasPlayed = sessionStorage.getItem("cascade-loader-played");
    if (hasPlayed) {
      if (loaderRef.current) {
        loaderRef.current.style.display = "none";
      }
      return;
    }

    // Lock scroll while loader is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("cascade-loader-played", "1");
        document.body.style.overflow = "";
      },
    });

    // Step 1: Rise text up from below the mask
    tl.to(textRef.current, {
      y: "0%",
      duration: 1.5,
      ease: "power4.out",
    })
      // Step 2: Slide loader up and off-screen
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "expo.inOut",
        delay: 0.4,
      })
      // Step 3: Remove from DOM flow
      .set(loaderRef.current, { display: "none" });
  }, []);

  return (
    <div ref={loaderRef} id="cascade-loader">
      <div className="loader-text-wrapper">
        <h1 ref={textRef} className="loader-text">
          Cascade
        </h1>
      </div>
    </div>
  );
}

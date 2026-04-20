"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden max-md:!bg-none max-md:!bg-white"
      style={{ height: "100svh", position: "sticky", top: 0, zIndex: 1, backgroundImage: "url('/hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      aria-label="Hero"
    >

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full max-md:!justify-center max-md:!pt-[40vh] max-md:items-start">
        {/* Left content */}
        <div
          className="relative z-10 flex flex-col justify-end pb-10 md:pb-20 max-md:!flex-[unset] max-md:!max-w-full max-md:!w-full max-md:items-center max-md:px-5"
          style={{
            paddingLeft: "clamp(20px, 5vw, 80px)",
            flex: "0 0 35%",
            maxWidth: "35%",
          }}
        >
          {/* Trust line / eyebrow */}
          <p
            className={cn(
              "mb-4 transition-all duration-[600ms] ease-out max-md:text-center",
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.5)",
              transitionDelay: "200ms",
            }}
          >
            Anthropic Partner Network
          </p>

          {/* H1 */}
          <h1
            className={cn(
              "mb-4 transition-all duration-[700ms] ease-out max-md:!text-[2.8rem] max-md:text-center",
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
            style={{
              fontSize: "clamp(1.9rem, 5.4vw, 5.4rem)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#1d1d1f",
              transitionDelay: "400ms",
            }}
          >
            Agentic AI Solutions
          </h1>

          {/* Subhead */}
          <p
            className={cn(
              "mb-3 transition-all duration-[600ms] ease-out max-md:text-center",
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
            style={{
              fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)",
              fontWeight: 400,
              color: "#86868b",
              letterSpacing: "-0.01em",
              transitionDelay: "550ms",
            }}
          >
            Enterprise Agentic AI
          </p>

          {/* Value prop */}
          <p
            className={cn(
              "mb-10 transition-all duration-[600ms] ease-out max-md:text-center",
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
            style={{
              fontSize: "clamp(1.0625rem, 1.8vw, 1.1875rem)",
              fontWeight: 400,
              color: "#86868b",
              maxWidth: "520px",
              lineHeight: 1.42,
              transitionDelay: "600ms",
              letterSpacing: "0.01em",
            }}
          >
            Secure. Customized. Optimized.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-wrap gap-3 transition-all duration-[600ms] ease-out max-md:flex-col max-md:w-full",
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
            style={{ transitionDelay: "800ms" }}
          >
            <Link
              href="/contact"
              className={cn(
                "inline-block rounded-full transition-colors duration-200",
                "bg-[#0a0a0a] text-white hover:bg-black/80",
                "max-md:w-full max-md:text-center"
              )}
              style={{
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Book Discovery Call
            </Link>
            <Link
              href="#services"
              className={cn(
                "inline-block rounded-full text-[#0a0a0a] transition-colors duration-200",
                "border border-[rgba(0,0,0,0.3)] hover:border-black",
                "max-md:w-full max-md:text-center"
              )}
              style={{ padding: "12px 28px", fontSize: "14px" }}
            >
              View Our Approach
            </Link>
          </div>
        </div>

        {/* Spline 3D robot — reserved for another section */}
        {/* <div className="relative hidden md:block" style={{ flex: "1 1 65%" }}>
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;

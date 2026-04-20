"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const footerNavCol1 = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Projects", href: "/projects" },
];

const footerNavCol2 = [
  { label: "Connect", href: "/connect" },
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: "https://github.com/cascadesoftwarelabs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cascadesoftwarelabs" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const smoothed = useRef({ x: 0, y: 0, intensity: 0 });
  const gsapRef = useRef<typeof import("gsap").default | null>(null);

  const updateMask = useCallback(() => {
    const el = revealRef.current;
    if (!el) return;
    const { x, y, intensity } = smoothed.current;
    const radius = 350;
    el.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, rgba(0,0,0,${intensity}) 0%, rgba(0,0,0,${intensity * 0.7}) 50%, transparent 100%)`;
    el.style.webkitMaskImage = el.style.maskImage;
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    let onTick: () => void;
    let onMouseMove: (e: MouseEvent) => void;
    let onMouseLeave: () => void;

    import("gsap").then(({ default: gsap }) => {
      gsapRef.current = gsap;

      onTick = () => updateMask();
      gsap.ticker.add(onTick);

      onMouseMove = (e: MouseEvent) => {
        const rect = footer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(smoothed.current, {
          x,
          y,
          intensity: 1,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      onMouseLeave = () => {
        gsap.to(smoothed.current, {
          intensity: 0,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      footer.addEventListener("mousemove", onMouseMove);
      footer.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      const gsap = gsapRef.current;
      if (gsap && onTick) gsap.ticker.remove(onTick);
      if (onMouseMove) footer.removeEventListener("mousemove", onMouseMove);
      if (onMouseLeave) footer.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [updateMask]);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#0a0a0a] text-white px-[80px] pt-[80px] pb-[40px] max-md:px-5 max-md:pt-16 max-md:pb-10"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 -20px 60px rgba(0,0,0,0.5)",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      {/* Flashlight reveal layer */}
      <div className="absolute inset-0 bg-[#0a0a0a]" aria-hidden="true" />
      <div
        ref={revealRef}
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(circle 350px at -9999px -9999px, transparent 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle 350px at -9999px -9999px, transparent 0%, transparent 100%)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
        aria-hidden="true"
      >
        <img
          src="/footer-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Footer content — relative z-10 to sit above the reveal */}
      <div className="relative z-10">
        {/* Heading */}
        <h2
          className="font-semibold tracking-[-0.03em] mb-[80px] max-md:mb-12"
          style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
        >
          Cascade Software Labs
        </h2>

        {/* Nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[80px] mb-[60px] max-md:gap-10">
          {/* Column 1 */}
          <div>
            <ul className="space-y-0">
              {footerNavCol1.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-[14px] text-white/70 leading-loose hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="max-md:border-t max-md:border-white/10 max-md:pt-8">
            <ul className="space-y-0">
              {footerNavCol2.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-[14px] text-white/70 leading-loose hover:text-white transition-colors"
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="max-md:border-t max-md:border-white/10 max-md:pt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/40 mb-4">
              Contact
            </p>
            <ul className="space-y-0">
              <li>
                <a
                  href="mailto:hello@cascadesoftwarelabs.com"
                  className="block text-[14px] text-white/70 leading-loose hover:text-white transition-colors"
                >
                  hello@cascadesoftwarelabs.com
                </a>
              </li>
              <li>
                <span className="block text-[14px] text-white/70 leading-loose">
                  Pacific Northwest, USA
                </span>
              </li>
              <li>
                <span className="block text-[14px] text-white/70 leading-loose">
                  Monday–Friday, 9 AM–6 PM PT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom row */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-[12px] text-white/40 max-md:flex-col max-md:items-start max-md:gap-3">
          {/* Left — partner badges */}
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.4)",
                  display: "inline-block",
                }}
              />
              Anthropic Partner Network
            </span>
            <span className="flex items-center gap-2">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                }}
              />
              Systems Operational
            </span>
          </div>

          {/* Center — copyright */}
          <div className="flex flex-wrap gap-4 justify-center">
            <span>© 2026 Cascade Software Labs, LLC. All rights reserved.</span>
          </div>

          {/* Right — legal */}
          <div className="flex flex-wrap items-center gap-4 max-md:gap-3">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a
              href="https://github.com/cascadesoftwarelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/cascadesoftwarelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

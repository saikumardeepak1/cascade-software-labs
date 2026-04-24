"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TextScramble } from "@/components/ui/text-scramble";

const NAV_ITEMS = [
  { label: "Home",      href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company",   href: "/company" },
  { label: "Careers",   href: "/careers" },
  { label: "Projects",  href: "/projects" },
  { label: "Contact",      href: "/contact" },
  { label: "Sustainability", href: "/sustainability" },
];

function NavItem({ label, href, dark }: { label: string; href: string; dark?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const textColor = dark ? "text-white" : "text-[#1d1d1f]";

  return (
    <Link
      href={href}
      className="relative inline-block px-4 py-2 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[linear-gradient(to_right,currentColor_1.5px,transparent_1.5px),linear-gradient(to_right,currentColor_1.5px,transparent_1.5px),linear-gradient(to_left,currentColor_1.5px,transparent_1.5px),linear-gradient(to_left,currentColor_1.5px,transparent_1.5px),linear-gradient(to_bottom,currentColor_1.5px,transparent_1.5px),linear-gradient(to_bottom,currentColor_1.5px,transparent_1.5px),linear-gradient(to_top,currentColor_1.5px,transparent_1.5px),linear-gradient(to_top,currentColor_1.5px,transparent_1.5px)]",
          "bg-[length:10px_10px] bg-no-repeat",
          "bg-[position:0_0,0_100%,100%_0,100%_100%,0_0,100%_0,0_100%,100%_100%]",
          textColor,
          "transition-opacity duration-200",
          hovered ? "opacity-100" : "opacity-0",
        )}
      />
      <TextScramble
        as="span"
        trigger={hovered}
        duration={0.5}
        speed={0.03}
        className={cn("relative z-10 text-[13px] font-medium", textColor)}
      >
        {label}
      </TextScramble>
    </Link>
  );
}

export default function NavBar({ dark }: { dark?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const barColor = dark ? "bg-white" : "bg-[#1d1d1f]";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 h-16 backdrop-blur-md bg-white/70 border-b border-black/10">
        <Link href="/" className="font-bold text-xl tracking-wider text-[#1d1d1f] hover:opacity-70 transition-opacity">
          CASCADE
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} dark={false} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center text-[13px] font-medium px-4 py-1.5 rounded-full transition-colors bg-[#1d1d1f] text-white hover:bg-black/80"
          >
            Book Discovery Call
          </Link>

          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={cn("block w-6 h-px transition-all duration-300", barColor, mobileOpen && "translate-y-[7px] rotate-45")} />
            <span className={cn("block w-6 h-px transition-all duration-300", barColor, mobileOpen && "opacity-0")} />
            <span className={cn("block w-6 h-px transition-all duration-300", barColor, mobileOpen && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-white flex flex-col pt-24 pb-12 px-10 md:hidden">
          <nav className="flex flex-col gap-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center py-4 text-[#1d1d1f] text-xl font-light border-b border-black/10 hover:opacity-60 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#1d1d1f] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-black/80 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

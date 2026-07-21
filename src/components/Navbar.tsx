"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavbarProps {
  bg?: string;
  textColor?: string;
  ctaBg?: string;
  ctaText?: string;
}

const links = [
  { label: "Tools", href: "/tools" },
  { label: "Gatherings", href: "/gatherings" },
  { label: "MediaClub", href: "/media-club" },
  { label: "We are", href: "/we-are" },
];

export default function Navbar({ bg = "bg-white", textColor = "text-black", ctaBg = "bg-[#f90068]", ctaText = "text-white" }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setScale(vw >= 768 && vw < 1440 ? vw / 1440 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* Desktop — exact Figma layout at 1440px, scales down on viewports < 1440px */}
      <nav
        className={`sticky top-0 z-50 w-full ${bg} shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hidden md:block overflow-hidden`}
        style={{ height: 102 * scale }}
        aria-label="Main navigation"
      >
        <div
          className="relative"
          style={{
            width: 1440,
            height: 102,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`absolute font-[family-name:var(--font-heading)] uppercase text-[29px] ${textColor} text-right leading-[0.76] tracking-[-1.16px]`}
            style={{ left: 141, top: 25, width: 191, height: 49 }}
          >
            <span className="block">cambio</span>
            <span className="block">natural</span>
          </Link>

          {/* Nav links */}
          {[
            { label: "Tools", href: "/tools", left: 405 },
            { label: "Gatherings", href: "/gatherings", left: 574 },
            { label: "MediaClub", href: "/media-club", left: 742 },
            { label: "We are", href: "/we-are", left: 909 },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`absolute flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[14px] ${textColor} text-center leading-[1.455] hover:opacity-70 transition-opacity`}
              style={{ left: l.left, top: 37, width: 126, height: 28 }}
            >
              {l.label}
            </Link>
          ))}

          {/* Book a call CTA */}
          <div className={`absolute ${ctaBg} rounded-[12px]`} style={{ left: 1109, top: 27, width: 171, height: 46 }} />
          <a
            href="https://calendly.com/cjesquinca"
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[14px] ${ctaText} text-center leading-[1.216] hover:opacity-90 transition-opacity`}
            style={{ left: 1109, top: 27, width: 171, height: 46 }}
          >
            book a call
          </a>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        className={`sticky top-0 z-50 w-full ${bg} shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:hidden`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 h-[70px]">
          <Link href="/" className={`font-[family-name:var(--font-heading)] uppercase text-[20px] ${textColor} text-right leading-[0.76] tracking-[-1px]`}>
            <span className="block">cambio</span>
            <span className="block">natural</span>
          </Link>
          <button
            className={`${textColor} focus:outline-none`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
              {menuOpen ? (
                <path d="M4 4l20 20M24 4L4 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              ) : (
                <>
                  <rect y="5" width="28" height="2.5" rx="1.25" />
                  <rect y="12.75" width="28" height="2.5" rx="1.25" />
                  <rect y="20.5" width="28" height="2.5" rx="1.25" />
                </>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className={`${bg} flex flex-col px-6 py-4 gap-5 border-t border-black/10`}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className={`font-[family-name:var(--font-heading)] uppercase text-[18px] ${textColor}`}>
                {l.label}
              </Link>
            ))}
            <a href="https://calendly.com/cjesquinca" target="_blank" rel="noopener noreferrer"
              className={`${ctaBg} ${ctaText} font-[family-name:var(--font-heading)] uppercase text-[14px] px-6 py-3 rounded-xl w-fit`}>
              book a call
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

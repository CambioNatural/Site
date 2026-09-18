"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigationContent } from "@/content/navigation";
import styles from "./navbar.module.css";

export interface NavbarProps {
  navigation?: {links: readonly {label: string; href: string}[]; booking: {label: string; href: string}};
  bg?: string;
  textColor?: string;
  ctaBg?: string;
  ctaText?: string;
}

export default function NavbarClient({ navigation = navigationContent, bg = "bg-white", textColor = "text-black", ctaBg = "bg-[#f90068]", ctaText = "text-white" }: NavbarProps) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuOpen = openPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <nav className={`${styles.nav} ${bg} ${textColor}`} aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setOpenPath(null);
          toggle.current?.focus();
        }
      }}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setOpenPath(null)}>
          <span>cambio</span><span>natural</span>
        </Link>
        <button ref={toggle} type="button" className={styles.toggle} aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen} aria-controls="navigation-links" onClick={() => setOpenPath(menuOpen ? null : pathname)}>
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {menuOpen ? <path d="M4 4l20 20M24 4L4 24" /> : <path d="M2 6h24M2 14h24M2 22h24" />}
          </svg>
        </button>
        <div id="navigation-links" className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navigation.links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}
              className={styles.link} onClick={() => setOpenPath(null)}>{link.label}</Link>
          ))}
          <a href={navigation.booking.href} target="_blank" rel="noopener noreferrer" className={`${styles.booking} ${ctaBg} ${ctaText}`}>
            {navigation.booking.label}
          </a>
        </div>
      </div>
    </nav>
  );
}

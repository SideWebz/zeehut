"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/strandcabines", label: "Strandcabines" },
  { href: "/verhuur", label: "Verhuur" },
  { href: "/standplaats", label: "Standplaats" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    body.classList.toggle("menu-open", isMenuOpen);

    return () => {
      body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navInner} container`}>
        <Link className={styles.brand} href="/" aria-label="Ga naar home" onClick={() => setIsMenuOpen(false)}>
          <Image src="/favicon.ico" alt="Logo" className={styles.logo} width={38} height={38} />
        </Link>

        <button
          type="button"
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Open navigatiemenu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ""}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
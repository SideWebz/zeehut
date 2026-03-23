"use client";

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
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const body = document.body;

    const unlockBody = () => {
      const savedScrollY = Number(body.dataset.menuScrollY || "0");

      body.classList.remove("menu-open");
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      delete body.dataset.menuScrollY;
      window.scrollTo(0, savedScrollY);
    };

    if (isMenuOpen) {
      const scrollY = window.scrollY;

      body.dataset.menuScrollY = String(scrollY);
      body.classList.add("menu-open");
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
    } else {
      unlockBody();
    }

    return () => {
      unlockBody();
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navInner} container`}>
        <Link className={styles.brand} href="/" aria-label="Ga naar home">
          <img src="/favicon.ico" alt="Logo" className={styles.logo} />
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
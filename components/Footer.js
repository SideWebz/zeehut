"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { href: "/strandcabines", label: "Strandcabines" },
  { href: "/verhuur", label: "Verhuur" },
  { href: "/standplaats", label: "Standplaats" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="site-footer">
      <Link href="/" className="site-footer-favicon-link" aria-label="Ga naar home">
        <img src="/favicon.ico" alt="Home" className="site-footer-favicon" />
      </Link>

      <div className="container site-footer-inner">
        <div className="row g-4 align-items-start align-items-md-center">
          <div className="col-12 order-1 site-footer-col-center col-md-4 order-md-2">
            <img src="/logo.svg" alt="De Zeehut logo" className="site-footer-logo" />
          </div>

          <div className="col-6 order-2 col-md-4 order-md-1">
            <h3 className="site-footer-heading">Paginas</h3>
            <div className="site-footer-links">
              {footerLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={isActive ? "site-footer-link-active" : ""}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="col-6 order-3 col-md-4 order-md-3 site-footer-col-right">
            <h3 className="site-footer-heading">Contact</h3>
            <div className="site-footer-contact">
              <a href="tel:+32475888999">+32 475 88 89 99</a>
              <a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a>
              <span>Oostende</span>
            </div>
          </div>
        </div>

        <div className="site-footer-meta">
          <span className="site-footer-meta-left">Content by Blanckmedia.be</span>

          <div className="site-footer-meta-center">
            <Link href="/cookiepolicy">Cookiepolicy</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link>
          </div>

          <span className="site-footer-meta-right">Made by Sidewebz.be</span>
        </div>
      </div>
    </footer>
  );
}
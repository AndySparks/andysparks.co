"use client";

import Link from "next/link";
import { Container } from "./Container";
import "../styles/footer.css";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/essays", label: "Essays" },
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media" },
];

const SOCIAL_LINKS = [
  { href: "https://x.com/SparksZilla", label: "X" },
  { href: "https://www.linkedin.com/in/andyjsparks/", label: "LinkedIn" },
  {
    href: "https://www.goodreads.com/author/show/20464942.Andy_Sparks",
    label: "GoodReads",
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <Container wide>
        <div className="site-footer-inner">
          <div className="site-footer-signup">
            <h3>Stay in touch</h3>
            <p>Essays on startups, coaching, craft, and human flourishing.</p>
            {/* Phase 2: Wire up to Resend API */}
            <form
              className="site-footer-signup-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="site-footer-signup-input"
                aria-label="Email address"
              />
              <button type="submit" className="site-footer-signup-button">
                Subscribe
              </button>
            </form>
          </div>

          <div className="site-footer-links">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <div className="site-footer-social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

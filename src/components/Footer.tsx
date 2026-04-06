"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import "../styles/footer.css";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/essays", label: "Essays" },
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media" },
  { href: "/legal", label: "Legal" },
];

const SOCIAL_LINKS = [
  { href: "https://x.com/andysparks", label: "X" },
  { href: "https://www.linkedin.com/in/andyjsparks/", label: "LinkedIn" },
  {
    href: "https://www.goodreads.com/author/show/20464942.Andy_Sparks",
    label: "GoodReads",
  },
];

export function Footer() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="site-footer">
      <Container wide>
        <div className="site-footer-inner">
          <div className="site-footer-signup">
            <h3>Stay in touch</h3>
            <p>Essays on startups, coaching, craft, and human flourishing.</p>
            {status === "done" ? (
              <p className="site-footer-signup-success">
                You&rsquo;re subscribed!
              </p>
            ) : (
              <form
                className="site-footer-signup-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="site-footer-signup-input"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="site-footer-signup-button"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Subscribing\u2026" : "Subscribe"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="site-footer-signup-error">
                Something went wrong. Please try again.
              </p>
            )}
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

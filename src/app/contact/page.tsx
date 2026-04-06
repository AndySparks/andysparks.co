"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { Container } from "@/components/Container";
import "../../styles/static-page.css";
import "../../styles/contact.css";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: { sitekey: string; appearance: string; callback: (token: string) => void }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [turnstileToken, setTurnstileToken] = useState("");
  const widgetIdRef = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);

  function renderTurnstile() {
    if (
      window.turnstile &&
      turnstileContainerRef.current &&
      !widgetIdRef.current
    ) {
      widgetIdRef.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
          appearance: "interaction-only",
          callback: (token: string) => setTurnstileToken(token),
        }
      );
    }
  }

  useEffect(() => {
    renderTurnstile();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      "cf-turnstile-response": turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
          setTurnstileToken("");
        }
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="static-page">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={renderTurnstile}
      />
      <Container wide>
        <h1>Contact</h1>
        <div className="static-page-content contact-body">
          <p>
            The best way to get in touch is email. You can reach me at:
            <br />
            <a href="mailto:hi@andysparks.co">hi@andysparks.co</a>
          </p>

          <p>
            You can also find me on Twitter:
            <br />
            <a
              href="https://x.com/andysparks"
              target="_blank"
              rel="noopener noreferrer"
            >
              @andysparks
            </a>
          </p>

          <p>
            If you&rsquo;re interested in working with me as a coach, you can
            send me an email or fill out the form below.
          </p>

          {status === "sent" ? (
            <div className="contact-success">
              <p>
                <strong>Message sent!</strong> I&rsquo;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Honeypot — hidden from humans, bots fill it in */}
              <div className="contact-hp" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
              />

              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />

              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={6} required />

              <div ref={turnstileContainerRef} className="contact-turnstile" />

              <button
                type="submit"
                disabled={status === "sending" || !turnstileToken}
              >
                {status === "sending" ? "Sending\u2026" : "Send message"}
              </button>

              {status === "error" && (
                <p className="contact-error">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

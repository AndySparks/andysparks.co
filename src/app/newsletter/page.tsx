"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import "../../styles/static-page.css";
import "../../styles/newsletter.css";

export default function NewsletterPage() {
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
    <section className="static-page">
      <Container wide>
        <h1>Newsletter</h1>
        <div className="static-page-content newsletter-body">
          <p>
            I write about startups, coaching, craft, and human flourishing.
            No spam, no fluff &mdash; just essays when I have something worth saying.
          </p>
          <p>
            You can browse past issues on the{" "}
            <Link href="/essays">essays page</Link>.
          </p>

          {status === "done" ? (
            <div className="newsletter-success">
              <p>
                <strong>You&rsquo;re subscribed!</strong> Check your inbox for a
                welcome note.
              </p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="newsletter-input"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="newsletter-button"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Subscribing\u2026" : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="newsletter-error">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

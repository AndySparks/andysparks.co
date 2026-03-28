import { Container } from "@/components/Container";
import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <Container>
        <h1 className="home-headline">
          Serious aims,
          <br />
          playful methods.
        </h1>
        <p className="home-subtitle">
          Executive coach to startup founders and CEOs.
        </p>

        <p className="home-body">
          I help founders and CEOs navigate the emotional and practical
          challenges of building companies. Right now I&apos;m working on{" "}
          <a
            href="https://managementcraft.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Management Craft
          </a>
          , writing a <Link href="/essays">newsletter</Link>, and trying to read
          100 books a year.
        </p>

        <p className="home-body">
          Before coaching, I co-founded Mattermark (COO, $0 to $5M ARR, 100K+
          newsletter subscribers) and Holloway, where I authored The Holloway
          Guide to Raising Venture Capital. I spent 13 years in San Francisco
          before relocating to Columbus, OH with my wife Kate.
        </p>

        {/* Phase 2: Add actual headshot image */}
        <div
          className="home-photo"
          style={{
            height: 400,
            background: "var(--color-warm-paper)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--type-sm)",
            color: "var(--color-muted)",
          }}
        >
          [Photo placeholder]
        </div>
      </Container>
    </section>
  );
}

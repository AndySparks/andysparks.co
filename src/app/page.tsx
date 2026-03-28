import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <Container>
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

        <Image
          src="/images/headshot.jpg"
          alt="Andy Sparks"
          width={640}
          height={640}
          priority
          className="home-photo"
        />
      </Container>
    </section>
  );
}

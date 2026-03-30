import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";
import "../styles/home.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andy Sparks",
  url: "https://andysparks.co",
  jobTitle: "Executive Coach",
  description:
    "Executive coach to startup founders and CEOs. Previously co-founded Mattermark and Holloway.",
  sameAs: [
    "https://x.com/SparksZilla",
    "https://www.linkedin.com/in/andyjsparks/",
    "https://www.goodreads.com/author/show/20464942.Andy_Sparks",
  ],
  knowsAbout: [
    "Executive Coaching",
    "Startup Leadership",
    "Founder Psychology",
    "Management",
    "Company Building",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Andy Sparks",
  url: "https://andysparks.co",
};

export default function Home() {
  return (
    <section className="home-hero">
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <Container wide>
        <div className="home-intro">
          <div className="home-intro-text">
            <h1 className="home-heading">
              Executive coach for startup founders &amp; CEOs
            </h1>
            <p className="home-body">
              Hey, I&apos;m Andy. I&apos;m an executive coach to startup founders
              and CEOs. I&apos;m also building{" "}
              <a
                href="https://managementcraft.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Management Craft
              </a>
              , writing a <Link href="/essays">newsletter</Link>, and trying to
              finish every book in my office before I buy another one.
            </p>

            <p className="home-body">
              Previously, I co-founded Mattermark and Holloway.
            </p>

            <p className="home-body">
              Here&apos;s <Link href="/about">more about me</Link>, and here&apos;s{" "}
              <Link href="/coaching">how I coach</Link>.
            </p>
          </div>

          <Image
            src="/images/headshot.jpg"
            alt="Andy Sparks, executive coach for startup founders"
            width={280}
            height={280}
            priority
            className="home-photo"
          />
        </div>
      </Container>
    </section>
  );
}

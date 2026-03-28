import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <Container>
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
          Previously, I co-founded Mattermark and Holloway. After 13 years in
          San Francisco, I recently relocated to Columbus, OH with my wife,
          Kate.
        </p>

        <p className="home-body">
          Here&apos;s <Link href="/about">more about me</Link>, and here&apos;s{" "}
          <Link href="/coaching">how I coach</Link>.
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

import { Container } from "@/components/Container";
import { getAllTalks } from "@/lib/talks";
import Link from "next/link";

export const metadata = {
  title: "Talks — Andy Sparks",
  description: "Talks and workshops by Andy Sparks. Each deck is a live Next.js page built with Claude Code.",
};

export default function TalksIndexPage() {
  const talks = getAllTalks();

  return (
    <section className="talks-index">
      <Container prose>
        <header>
          <h1>Talks</h1>
          <p>Lectures, workshops, and talks. Each deck is a live page on this site, built with Claude Code.</p>
        </header>
        <ul>
          {talks.map((talk) => (
            <li key={talk.slug}>
              <Link href={`/talks/${talk.slug}`}>
                <strong>{talk.title}</strong>
                {talk.subtitle && <span> — {talk.subtitle}</span>}
              </Link>
              <div>
                {talk.venue && <span>{talk.venue} · </span>}
                {new Date(talk.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {talk.duration && <span> · {talk.duration}</span>}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

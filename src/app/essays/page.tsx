import { Container } from "@/components/Container";
import { getAllEssays } from "@/lib/essays";
import Link from "next/link";
import "../../styles/essays.css";

export const metadata = {
  title: "Essays",
  description:
    "Writing on startups, coaching, craft, and human flourishing by Andy Sparks.",
};

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <section className="essays-page">
      <Container>
        <h1>Essays</h1>
        <ul className="essay-list">
          {essays.map((essay) => (
            <li key={essay.slug} className="essay-list-item">
              <Link
                href={`/essays/${essay.slug}`}
                className="essay-list-link"
              >
                <div className="essay-list-title">{essay.title}</div>
                <div className="essay-list-date">
                  {new Date(essay.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                {essay.description && (
                  <div className="essay-list-description">
                    {essay.description}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import { Container } from "@/components/Container";
import { getAllEssays } from "@/lib/essays";
import Link from "next/link";
import Image from "next/image";
import "../../styles/essays.css";

export const metadata = {
  title: "Essays",
  description:
    "Writing on startups, coaching, craft, and human flourishing by Andy Sparks.",
};

export default function EssaysPage() {
  const essays = getAllEssays();
  const [featured, ...rest] = essays;

  return (
    <section className="essays-page">
      <Container wide>
        <h1>Essays</h1>

        {/* Featured essay */}
        {featured && (
          <Link
            href={`/essays/${featured.slug}`}
            className="essay-featured"
          >
            {featured.image && (
              <div className="essay-featured-image">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt || featured.title}
                  fill
                  sizes="(max-width: 940px) 100vw, 940px"
                  priority
                />
              </div>
            )}
            <div className="essay-featured-body">
              <div className="essay-featured-date">
                {new Date(featured.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h2 className="essay-featured-title">{featured.title}</h2>
              {featured.description && (
                <p className="essay-featured-description">
                  {featured.description}
                </p>
              )}
            </div>
          </Link>
        )}

        {/* Card grid */}
        <ul className="essay-grid">
          {rest.map((essay) => (
            <li key={essay.slug} className="essay-card">
              <Link
                href={`/essays/${essay.slug}`}
                className="essay-card-link"
              >
                {essay.image && (
                  <div className="essay-card-image">
                    <Image
                      src={essay.image}
                      alt={essay.imageAlt || essay.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 450px"
                    />
                  </div>
                )}
                <div className="essay-card-body">
                  <div className="essay-card-date">
                    {new Date(essay.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h3 className="essay-card-title">{essay.title}</h3>
                  {essay.description && (
                    <p className="essay-card-description">
                      {essay.description}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

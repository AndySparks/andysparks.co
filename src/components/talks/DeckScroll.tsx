import type { Talk } from "@/lib/talks";
import { Slide } from "./Slide";
import Link from "next/link";

type Props = { talk: Talk };

/**
 * Scroll-mode deck. This is the public, shareable view — readers scroll through
 * slides + speaker notes as a long-form document. Indexed for SEO. Present mode
 * lives at /talks/<slug>/present.
 */
export function DeckScroll({ talk }: Props) {
  const total = talk.slides.length;

  return (
    <div className="talk-deck talk-deck--scroll">
      <header className="talk-deck__header">
        <div className="talk-deck__meta">
          {talk.venue && <span>{talk.venue}</span>}
          {talk.date && (
            <span>
              {new Date(talk.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          {talk.duration && <span>{talk.duration}</span>}
        </div>
        <h1 className="talk-deck__title">{talk.title}</h1>
        {talk.subtitle && <p className="talk-deck__subtitle">{talk.subtitle}</p>}
        <div className="talk-deck__controls">
          <Link href={`/talks/${talk.slug}/present`} className="talk-deck__present-link">
            Present mode →
          </Link>
        </div>
      </header>

      <nav className="talk-deck__segments" aria-label="Segments">
        <ol>
          {talk.segments.map((s) => {
            const firstSlideOfSegment = talk.slides.find((sl) => sl.segment === s.number);
            return (
              <li key={s.number}>
                <a href={firstSlideOfSegment ? `#${firstSlideOfSegment.id}` : undefined}>
                  <span className="talk-deck__segment-number">{s.number}</span>
                  <span className="talk-deck__segment-name">{s.name}</span>
                  <span className="talk-deck__segment-time">{s.timeBudget}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="talk-deck__slides">
        {talk.slides.map((slide, i) => (
          <Slide key={slide.id} slide={slide} slideNumber={i + 1} totalSlides={total} mode="scroll" />
        ))}
      </div>
    </div>
  );
}

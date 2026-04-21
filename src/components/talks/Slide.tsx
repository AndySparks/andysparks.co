import type { Slide as SlideType } from "@/lib/talks";

type Props = {
  slide: SlideType;
  slideNumber: number;
  totalSlides: number;
  mode?: "scroll" | "present";
};

/**
 * A single slide. Server component — renders the same tree in both scroll and
 * present modes. Mode only affects wrapper styling (full-viewport in present,
 * card-in-column in scroll).
 */
export function Slide({ slide, slideNumber, totalSlides, mode = "scroll" }: Props) {
  const classes = [
    "talk-slide",
    `talk-slide--${slide.variant}`,
    `talk-slide--seg-${slide.segment}`,
    `talk-slide--${mode}`,
    slide.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      id={slide.id}
      className={classes}
      data-slide-number={slideNumber}
      data-slide-total={totalSlides}
      data-segment={slide.segment}
      data-variant={slide.variant}
    >
      <div className="talk-slide__canvas">
        {slide.label && <div className="talk-slide__label">{slide.label}</div>}
        {slide.title && <h2 className="talk-slide__title">{slide.title}</h2>}
        {slide.subtitle && <p className="talk-slide__subtitle">{slide.subtitle}</p>}
        {slide.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="talk-slide__image"
            src={slide.image}
            alt={slide.imageAlt || ""}
          />
        )}
        {slide.body && <div className="talk-slide__body">{slide.body}</div>}
        <div className="talk-slide__progress" aria-hidden="true">
          <span>{slideNumber} / {totalSlides}</span>
        </div>
      </div>
      {mode === "scroll" && slide.notes && (
        <aside className="talk-slide__notes">
          <div className="talk-slide__notes-label">Speaker notes</div>
          <div className="talk-slide__notes-body">{slide.notes}</div>
        </aside>
      )}
    </article>
  );
}

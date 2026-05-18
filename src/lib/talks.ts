import type { ReactNode } from "react";

/**
 * Slide variants drive visual treatment. Each maps to a CSS class in
 * src/styles/talks.css.
 *
 *  - `title`     first slide only
 *  - `statement` prose slides on parchment (covers quote/section/diagram via modifiers)
 *  - `bullets`   list content (rare, stripped of ornament)
 *  - `terminal`  dark register — demo pauses, machine screenshots, images
 *  - `poll`      audience breaks, full-bleed ember
 */
type SlideVariant =
  | "title"
  | "statement"
  | "bullets"
  | "terminal"
  | "poll";

export type Slide = {
  id: string;                    // stable anchor — /talks/<slug>#<id> and keyboard targets
  segment: number;               // 1-8 for progress indicator and grouping
  variant: SlideVariant;
  /** Optional title. Ignored on title/quote variants where content handles it. */
  title?: string;
  /** Optional subtitle rendered under title or as standalone copy. */
  subtitle?: string;
  /** Main body content. Rendered as ReactNode so authors can use fragments. */
  body?: ReactNode;
  /** Speaker notes — visible in scroll view below slide; shown on present page separately. */
  notes?: ReactNode;
  /** Optional label used on demo/machine slides ("> LIVE DEMO" etc). */
  label?: string;
  /** Optional image for image/diagram slides. Path relative to /public. */
  image?: string;
  imageAlt?: string;
  /** Optional additional CSS classes for one-off customization. */
  className?: string;
};

type TalkSegment = {
  number: number;
  name: string;
  timeBudget: string;     // e.g. "10 min"
};

export type Talk = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;           // YYYY-MM-DD
  venue?: string;
  audience?: string;
  duration?: string;      // "90 min"
  description: string;    // for OG/meta
  segments: TalkSegment[];
  slides: Slide[];
};

export type TalkMeta = Omit<Talk, "slides" | "segments">;

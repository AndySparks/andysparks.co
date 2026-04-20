import type { ReactNode } from "react";

/**
 * Slide variants drive visual treatment. Each variant maps to a CSS class
 * in src/styles/talks.css and, where needed, its own layout component.
 */
export type SlideVariant =
  | "title"          // big display + subtitle + footer signature
  | "statement"      // single large statement, whitespace-dominant
  | "bullets"        // title + bullet list
  | "quote"          // serif quote, Machine Mode
  | "machine"        // dark terminal aesthetic — screenshots, demo pauses
  | "poll"           // full-bleed ember, cream text — audience breaks
  | "demo"           // LIVE DEMO pause slide
  | "diagram"        // text + figure layout
  | "image"          // single hero image (e.g., screenshots)
  | "section";       // divider between acts

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

export type TalkSegment = {
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

/**
 * Talk loader. Talks are TS modules under content/talks/ — unlike essays (markdown),
 * slide content is structured data, so TS gives compile-time validation.
 *
 * Keep filenames equal to slug: content/talks/<slug>.ts exports default Talk.
 */

// Imports are static so slides compile into the bundle. Add a line per talk.
// Note: content file is .tsx because slide body content uses JSX fragments.
import drinkTheRadioactiveGatorade from "../../content/talks/drink-the-radioactive-gatorade";

const TALKS: Record<string, Talk> = {
  "drink-the-radioactive-gatorade": drinkTheRadioactiveGatorade,
};

export function getAllTalks(): TalkMeta[] {
  return Object.values(TALKS)
    .map(({ slides: _slides, segments: _segments, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTalkSlugs(): string[] {
  return Object.keys(TALKS);
}

export function getTalkBySlug(slug: string): Talk | null {
  return TALKS[slug] ?? null;
}

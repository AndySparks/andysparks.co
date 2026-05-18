import type { Talk, TalkMeta } from "@/lib/talks";

// Talks are TS modules under content/talks/ — structured data, not markdown,
// so the compiler validates slide shapes. Filename must equal slug.
// Registry lives separately from the type module to keep `@/lib/talks` a
// pure leaf so content files can import the `Talk` type without creating
// a circular dependency.
import drinkTheRadioactiveGatorade from "../../content/talks/drink-the-radioactive-gatorade";
import goToMarketSprint from "../../content/talks/go-to-market-sprint";

const TALKS: Record<string, Talk> = {
  "drink-the-radioactive-gatorade": drinkTheRadioactiveGatorade,
  "go-to-market-sprint": goToMarketSprint,
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

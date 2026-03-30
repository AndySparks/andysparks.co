@AGENTS.md

# andysparks.co

Personal website for Andy Sparks. Built with Next.js, deployed on Vercel.

## Design Philosophy

"Serious aims, playful methods." Inspired by Tolkien's illustrations, Tufte's clarity, and the freedom to push creative limits. See `docs/superpowers/specs/2026-03-28-andysparks-site-redesign.md` for the full spec.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + custom CSS variables for design tokens
- Fraunces (variable serif, Google Fonts) for body/display
- IBM Plex Mono for meta/code
- Resend for email (newsletter signup, contact form)
- GA4 for analytics

## Design Rules

1. **Spacing tokens: base 8.** Margins, padding, gaps use `--space-*` tokens (8, 16, 32, 48, 64, 96, 128px). These create the macro rhythm of the page.
2. **Type scale: ratio-based, use what reads right.** The scale (13, 14, 20, 22, 26, 32, 42px) follows typographic logic, not the spacing grid. Don't force type sizes onto base 8.
3. **Detail values: use what looks right.** Border-radius (4px), border-width (1px, 2px), input padding (10px, 12px), icon sizing — these serve the element, not the grid.
4. Content width: 640px for prose, 940px for wide elements.
5. Fraunces for all text. IBM Plex Mono for meta, dates, code, labels, form inputs.
6. Color palette: earth tones (greens, golds, oranges) on parchment. Never cold or sterile.
7. Warmth is non-negotiable. The site should feel handmade and alive.
8. Full design system reference: `.interface-design/system.md`.

## Setup

Run `npm install` before any other command. Dependencies are not checked in.

## Commands

- `npm run dev` -- local dev server
- `npm run build` -- production build
- `npm run lint` -- ESLint

## Content

Essays live in `content/essays/` as markdown with YAML frontmatter. Images in `public/images/`.

## Relationship to Management Craft

Same maker, different register. MC is the scholarly journal (Signifier, cobalt + sienna, restrained). This site is the illuminated manuscript (Fraunces, earth tones, playful). They share warm foundations, craft-forward typography, and content-first layout. They diverge on color range, personality, and how much the design itself is allowed to be expressive.

# andysparks.co: Site Redesign Spec

**Date:** 2026-03-28
**Status:** Approved
**Typography sampler:** `2026-03-28-andysparks-typography-sampler.html` (open in browser)

---

## 1. Overview

Migrate andysparks.co from Webflow to a self-owned Next.js site deployed on Vercel. The redesign establishes a distinct visual identity rooted in Andy's philosophy document "Serious aims, playful methods" and inspired by Tolkien's illustrations, Tufte's information design, and the freedom to push creative limits.

This is Andy's personal home on the internet. It should earn affection, not just respect.

## 2. Goals

- Own the full stack (no Webflow, eventual Substack migration)
- Establish a visual identity distinct from Management Craft
- Create a publishing workflow using markdown files + Claude Code
- Preserve SEO equity via 301 redirects for all existing URLs
- Build a foundation that supports future content types and cross-posting

## 3. Site Architecture

### Pages & Routes

**Static pages:**
- `/` -- Home
- `/about` -- About
- `/coaching` -- Coaching
- `/contact` -- Contact + coaching inquiry form
- `/media` -- Interviews & appearances
- `/design-system` -- Typography, colors, spacing, components reference (internal/dev)

**Dynamic (markdown-driven):**
- `/essays` -- Archive listing
- `/essays/[slug]` -- Individual essay

### URL Migration (301 redirects)

All old Webflow URLs must redirect to preserve SEO:

- `/newsletter` -> `/essays`
- `/hoo-boy/[slug]` -> `/essays/[slug]`
- `/p/[slug]` -> `/essays/[slug]`

Redirects for individual essays are generated automatically from the `oldPath` field in essay frontmatter. The `/newsletter` -> `/essays` redirect is a static entry in `next.config.js`.

### Content Structure

```
andysparks.co/
  content/
    essays/
      why-co-founders-struggle.md
      drink-the-radioactive-gatorade.md
      ... (~80 files)
  public/
    images/
      headshot.jpg
      telescope.jpg
      essays/
        why-co-founders-struggle-hero.jpg
        ...
```

### Essay Frontmatter

```yaml
---
title: "Why Co-Founders Struggle"
date: "2023-03-12"
image: "/images/essays/why-co-founders-struggle-hero.jpg"
description: "On the dynamics that..."
oldPath: "/hoo-boy/issue-16-why-co-founders-struggle"
---
```

The `oldPath` field drives automatic 301 redirect generation. All ~80 essays get unified into the `/essays/[slug]` format regardless of their original Webflow collection (`/hoo-boy/` or `/p/`).

## 4. Tech Stack

- **Framework:** Next.js (App Router)
- **Deployment:** Vercel
- **Styling:** TBD (Tailwind or CSS modules, to be decided during implementation)
- **Markdown:** MDX or next-mdx-remote for essay rendering
- **Email:** Resend (newsletter signup, contact form notifications)
- **Analytics:** GA4 with cookie consent banner
- **Fonts:** Fraunces (variable, Google Fonts), IBM Plex Mono (Google Fonts)

## 5. Design Philosophy

### Core Identity: Serious Aims, Playful Methods

The site embodies the tension from Andy's philosophy document: **serious** (clarity, depth, craft) crossed with **playful** (humor, warmth, wonder). It should feel like a well-made thing that doesn't take itself too seriously. Crafted but approachable. Rigorous but warm. Rich with color and alive with possibility.

### The Guiding Metaphor: Tolkien's Illustrations

Hand-drawn, organic, richly colored, full of intricate detail, but never garish. The care is visible. Every line was placed with intention. The palette comes from the earth and feels timeless. It invites you to linger and discover.

**Reference images** (saved locally in Andy's Downloads):
- Tolkien's original Hobbit cover (deep green, black mountains, bold limited palette)
- The Trolls campfire (dark mode reference: near-black with olive-gold stippling, warm firelight, blue-silver smoke)
- Hobbiton-across-the-Water (the optimism painting: many greens, sandy gold paths, terracotta roofs, blue sky)
- Bilbo comes to the Huts of the Raft-elves (saturated teals, emerald greens, cobalt blues, decorative border)
- The Lonely Mountain (pure ink linework, the craft element)
- Smaug on his hoard (warm golds, watercolor texture, scattered jewel-tone accents)
- Rivendell painting (lush saturated greens, warm stone, high contrast)
- Linen pillowcases in evergreen (the deep green anchor)
- Olive bomber jacket on dark brown and khaki (Andy's actual wardrobe palette)

### Additional Influences

- **Tufte:** Information density done with clarity. Sidenotes, small multiples, data-rich without being cluttered. Respect the reader's intelligence.
- **Whimsy and weirdness:** Permission to push limits, experiment, and surprise. Easter eggs welcome. The site can do things that make you pause and say "wait, how did they do that?" as long as it stays grounded in craft.

### Virtues as Design Principles

1. **Beauty & Earnest Craft** -- Typography that rewards attention. Spacing that breathes. Nothing arbitrary.
2. **Clarity** -- No visual noise. Clean hierarchy. Color serves content, never competes.
3. **Humor & Lightness** -- Moments of delight. Microinteractions that feel human. Easter eggs welcome.
4. **Awe & Wonder** -- Moments that make you pause. Generative elements that feel alive. Rich color that evokes possibility.
5. **Depth & Deliberate Attention** -- The reading experience rewards lingering. Long-form essays get a layout that encourages deep reading.
6. **Renewal & Rhythm** -- Visual rhythm. Alternating tempos. Dense content and breathing room.

## 6. Relationship to Management Craft

Same person, different registers. MC is the professional publication; andysparks.co is the personal home. Visitors should feel "the same person clearly made these, but this one is way more fun."

### Shared DNA

- Warm foundations (both reject cold minimalism)
- Craft-forward typography (type as first-class design element)
- Content-first layout (~640px content width, reading is paramount)
- Print sensibility (both evoke physical media)

### Differentiation

| Dimension | Management Craft | andysparks.co |
|---|---|---|
| Metaphor | Scholarly journal | Illuminated manuscript / Tolkien's study |
| Color range | Restrained: cobalt + sienna | Rich earth tones: greens, golds, blues, oranges |
| Typography | Signifier (licensed, formal) | Fraunces (free, playful, wonky details) |
| Personality | Straight-faced design, humor in writing | Design itself is playful and experimental |
| Interactivity | Thematic: human/machine toggle | Organic: generative textures, living ornaments |
| Texture | Flat parchment color | Paper that feels alive, subtle generative texture |
| Emotional register | Authority, expertise, trust | Optimism, wonder, warmth, humor |
| Dark mode | "Machine mode" with amber terminal | "Reading by firelight" / Trolls campfire |

**The visitor test:** MC earns respect. andysparks.co earns affection.

## 7. Color

### Direction

Rich, saturated earth tones. The palette of an illustrated map, Tolkien's watercolors, and the way Andy dresses. Not dusty or muted. Alive. Color is structural and expressive, not decorative.

### Palette (exploratory, to be refined in code)

**Greens (dominant note):**
- Evergreen `#2b3a24` -- the deepest anchor (linen pillowcase)
- Deep Forest `#3d4f2f` -- primary green for links and headings
- Olive `#556b3a` -- the bomber jacket, secondary
- Leaf `#6e8a4a` -- brighter accent
- Spring `#8aaa5e` -- lightest green, highlights

**Golds & Warm Accents:**
- Brass `#c9952c` -- primary warm accent
- Gilt `#deb04a` -- emphasis, dark mode primary
- Firelight `#e8c76a` -- lightest gold
- Ember `#b85c2a` -- burnt orange, warmth

**Foundations:**
- Parchment `#f2ead4` -- light mode background
- Warm Paper `#e5dabf` -- secondary surface
- Khaki `#c4b496` -- muted text, borders
- Chocolate `#3b2f26` -- dark warm brown
- Night `#1e1a16` -- dark mode background

**Cool Note (used sparingly):**
- River `#6b8fa3` -- cool blue accent
- Smoke `#8fb3c4` -- lighter blue, info states

### Color Roles

- **Deep Forest green** = primary (links, headings on light)
- **Brass/Gilt gold** = emphasis (highlights, dark mode primary, hover states)
- **Ember** = warmth (secondary accent, tags, callouts)
- **River/Smoke blue** = cool contrast (sparingly, for variety and info states)
- **Parchment + Dark Ink** = foundation (never cold)

### Dark Mode: "The Trolls Campfire"

Near-black (#1e1a16) with warm undertone. Gold becomes the primary accent. Content radiates warmth like firelight in a dark forest. Cool blue (Smoke) for secondary elements, like the curling smoke in the illustration. Warm dark, never cold.

## 8. Typography

### Primary: Fraunces

Variable font from Undercase Type (Google Fonts, free). Old-style soft serif with "wonky" optical details. Has a variable optical size axis that adapts beautifully from 13px meta text to 42px display headlines.

Why Fraunces:
- The playful details match "serious aims, playful methods"
- Completely different from MC's Signifier (formal, precise)
- Excellent readability at body sizes
- Variable font means one file, many expressions
- Free (no licensing cost)

### Secondary: IBM Plex Mono

For meta text, dates, code, tags, UI labels. Already used on the current site and on MC. The consistent monospace across both properties is a subtle "same maker" signal.

### Type Scale

- Display: ~42px, weight 700
- H1: ~32px, weight 700
- H2: ~26px, weight 600
- H3: ~22px, weight 600
- Body: ~19px, weight 400, line-height 1.7
- Subtitle: ~22px, weight 300, italic
- Small/Meta: ~13px (IBM Plex Mono)

### Content Measure

~640px max width for body text. Wider breakout (up to ~940px) for hero images and special elements.

## 9. Layout

- **Content width:** ~640px for prose, ~940px for wide elements
- **Spacing:** 8px base unit, generous vertical rhythm
- **Navigation:** Sparse. About, Coaching, Essays in header. Contact in footer. Let the content breathe.
- **Responsive:** Mobile-first. Equally excellent on phone. Touch-friendly.

## 10. Interactive & Generative Elements

The site has permission to be weird and push limits, as long as it stays grounded in craft. These are ideas to explore during implementation. Not all need to ship v1, but the architecture should support them.

1. **Organic background texture** -- Subtle, slowly evolving generative pattern behind the parchment. Ink bleeding, watercolor washes. Quiet enough you might not notice at first.
2. **Living typography** -- Headlines that settle into place on scroll, like being typeset by hand.
3. **Scroll-aware essay reading** -- A crafted progress indicator. Maybe a thin line that shifts from deep forest through leaf green to gold as you read, like walking from shade into a sunlit clearing.
4. **Generative ornaments and dividers** -- Procedurally generated botanical line art, knotwork, or flourishes between sections. Each page load slightly different. Like marginalia in an illuminated manuscript.
5. **Cursor warmth / ambient glow** -- Subtle warm glow that follows the mouse. Like candlelight on parchment.
6. **Seasonal or time-aware color shifts** -- The palette subtly shifts with season or time of day. Warmer golds in evening, cooler greens in morning.

### Design Anti-Patterns

- **Not "AI-generated"** -- No gradient orbs, particle systems, or WebGL showcases. Generative elements feel organic and authored.
- **Not a clone** -- Not Steph Ango, not MC-lite, not a template.
- **Not sterile** -- Warmth is non-negotiable. Color is welcome.
- **Not performative** -- The tools are invisible. What the visitor sees is craft, warmth, and thoughtfulness.

## 11. Forms & Integrations

### Newsletter Signup (footer, every page)

- Email input + submit
- Submits to Resend API (same pattern as MC)
- Success/error states
- Replaces the current manual Webflow -> Substack workflow

### Contact / Coaching Inquiry Form

- Fields: name, email, title, company, referral source, message
- Submits to Resend API (sends notification to Andy)
- Better spam prevention than current Webflow form (honeypot + rate limiting at minimum)
- Improved UX (this is a "quick win" improvement over the current site)

## 12. Discoverability & Metadata

### Open Graph & Twitter Cards

Every page gets full OG + Twitter Card meta tags. Essays auto-populate from frontmatter. Static pages define their own.

### SEO

- Canonical URLs on every page
- Semantic HTML (article, nav, header, footer, main)
- Proper heading hierarchy
- XML sitemap (auto-generated at build)
- robots.txt
- RSS feed at /feed.xml

### Structured Data (JSON-LD)

- `Person` on Home + About (name, role, sameAs social links)
- `Article` on each essay (author, datePublished, headline, image, description)
- `WebSite` at site level
- `BreadcrumbList` on essay pages (Home > Essays > Title)

### LLM Discoverability

- `llms.txt` at site root (plain-text site summary)
- `llms-full.txt` (extended version with essay titles, dates, descriptions)
- Clean semantic HTML (good for both SEO and LLM crawlers)
- RSS feed (consumed by AI tools for content indexing)

### Analytics

- GA4 (Google Analytics 4)
- Cookie consent banner required

## 13. Content Migration

### Essays (~80)

- Export from Webflow CMS
- Convert to markdown with frontmatter
- Unify both old formats (`/hoo-boy/` newsletter issues and `/p/` dispatches) into a single clean essay format
- The old curated-links sections from newsletter issues become regular formatted content (headings, lists, links) within the unified template
- Set `oldPath` in frontmatter for each to generate 301 redirects

### Images

- Download all images from Webflow CDN
- Commit to `public/images/` in the repo
- Update image references in markdown files
- Can migrate to external CDN later if repo size becomes an issue

### Static Pages

- Rewrite Home, About, Coaching, Contact, Media as Next.js pages
- Content stays the same (or gets minor updates), design changes per this spec

## 14. Future Phases (Out of Scope for v1)

- **Email sending migration:** Move from Substack to Resend for newsletter delivery
- **Cross-posting from MC:** Architecture supports it, workflow TBD
- **Domain migration:** Move andysparks.co DNS from Webflow to Vercel
- **Book content:** Potential home for Raising Venture Capital and future MC book
- **Content type expansion:** The markdown + frontmatter pattern supports adding new content types easily

## 15. Open Questions (To Resolve During Implementation)

- Exact color values (refine visually in code, the palette above is directional)
- Which 2-3 generative elements to prioritize for v1
- Essay archive layout (chronological list, cards, grouped by year)
- Photography treatment (full-width heroes, corner treatment, filters)
- CSS approach (Tailwind vs. CSS modules vs. something else)
- Cookie consent implementation approach

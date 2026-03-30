# andysparks.co Design System

## Direction

**Warmth & Craft** — Illuminated manuscript feel. Handmade, alive, expressive. Earth tones on parchment. Fraunces variable serif for personality, IBM Plex Mono for structure.

## Foundation

Warm parchment (`#f2ead4`) background. Earth-tone palette: greens (dominant), golds, oranges. Never cold or sterile.

## Depth Strategy

**Borders-only** with one exception (mobile nav dropdown shadow). No card shadows, no layered depth. Dividers use `--color-divider`.

---

## Tokens

### Colors

**Greens (dominant):**
- `--color-evergreen`: #2b3a24 (headings, emphasis)
- `--color-forest`: #3d4f2f (primary, buttons, hover)
- `--color-olive`: #556b3a (accents)
- `--color-leaf`: #6e8a4a (success tints)
- `--color-spring`: #8aaa5e (highlights)

**Golds & Warm Accents:**
- `--color-brass`: #c9952c (accent, focus borders)
- `--color-gilt`: #deb04a
- `--color-firelight`: #e8c76a
- `--color-ember`: #b85c2a (errors)

**Foundations:**
- `--color-parchment`: #f2ead4 (background)
- `--color-warm-paper`: #e5dabf (input backgrounds)
- `--color-khaki`: #c4b496 (muted)
- `--color-chocolate`: #3b2f26 (body text / ink)
- `--color-night`: #1e1a16 (darkest)

**Cool Note:**
- `--color-river`: #6b8fa3
- `--color-smoke`: #8fb3c4

**Semantic:**
- `--color-background`: parchment
- `--color-ink`: chocolate
- `--color-ink-light`: #5a5040
- `--color-primary`: forest
- `--color-accent`: brass
- `--color-muted`: khaki
- `--color-divider`: #d4c9a8

### Typography

**Families:**
- Body/display: Fraunces (variable serif)
- Meta/code/labels: IBM Plex Mono

**Scale:**
- `--type-display`: 42px
- `--type-h1`: 32px
- `--type-h2`: 26px
- `--type-h3`: 22px
- `--type-subtitle`: 22px
- `--type-body`: 20px
- `--type-sm`: 14px
- `--type-xs`: 13px

**Line heights:**
- `--leading-tight`: 1.2 (headings)
- `--leading-snug`: 1.35 (subheadings)
- `--leading-body`: 1.6 (prose)

### Spacing (Base 8)

- `--space-xs`: 8px
- `--space-sm`: 16px
- `--space-md`: 32px
- `--space-lg`: 48px
- `--space-xl`: 64px
- `--space-2xl`: 96px
- `--space-3xl`: 128px

### Layout Widths

- `--width-content`: 640px (prose pages)
- `--width-prose`: 720px
- `--width-wide`: 940px (header/footer aligned pages)
- `--width-max`: 1200px

### Animation

Three tokens, one curve, one scale value. Every animation on the site uses these — no one-offs.

**Durations:**
- `--duration-fast`: 150ms — color changes, underline reveals, hover states
- `--duration-press`: 160ms — button press feedback (scale)
- `--duration-motion`: 200ms — enter/exit, position changes, image scale

**Easing:**
- `--ease-out`: `cubic-bezier(0.23, 1, 0.32, 1)` — physical interactions (press, enter/exit, scale). Starts fast, feels responsive.
- `--ease-default`: `ease-out` — simple property transitions (color, opacity, border-color). Lighter than the cubic-bezier but still front-loaded.

**Scale:**
- `--scale-press`: 0.97 — button/pressable `:active` feedback

**Interaction rules:**
- All hover effects gated behind `@media (hover: hover) and (pointer: fine)` to prevent false positives on touch devices.
- `prefers-reduced-motion: reduce` globally disables all transition and animation durations.
- Essay card images scale to `1.02` on hover (subtle life, not distracting).
- Mobile nav uses `scale(0.95)` entry — never `scale(0)`.

---

## Patterns

### Buttons (Primary)
- Padding: `var(--space-xs) var(--space-sm)` (8px 16px)
- Font: IBM Plex Mono, `--type-sm`, weight 600
- Background: `--color-forest`
- Text: `--color-parchment`
- Border: none
- Radius: 4px
- Hover: `--color-evergreen` (gated behind `hover: hover`)
- Active: `transform: scale(var(--scale-press))` (not on disabled)
- Disabled: opacity 0.6, cursor not-allowed
- Transition: `background var(--duration-fast), transform var(--duration-press)`

### Form Inputs
- Padding: `var(--space-xs)` vertical, `var(--space-sm)` horizontal
- Font: IBM Plex Mono, `--type-sm`
- Background: `--color-warm-paper`
- Border: 1px solid `--color-divider`
- Radius: 4px
- Focus: border-color `--color-brass`

### Links
- Color: `--color-primary`
- Underline: 50% opacity, full on hover (gated behind `hover: hover`)
- Offset: 3px
- Transition: `text-decoration-color var(--duration-fast) var(--ease-default)`

### Dividers
- 1px solid `--color-divider`

### Border Radius
- Standard: 4px (all elements)

### Images
- Radius: 4px
- Object-fit: cover

### Nav Links (Header/Footer)
- Font: IBM Plex Mono
- Size: `--type-sm` (header), `--type-xs` (footer)
- Color: `--color-ink-light`
- No underline, color change on hover

### Page Structure
- Static pages: `--space-xl` top padding, `--space-2xl` bottom
- Content within `Container wide` for wordmark alignment
- Prose constrained to `--width-content` inside wide container

---

## Rules

### Three-tier sizing principle

1. **Spacing tokens: base 8.** Margins, padding, gaps between elements use `--space-*` tokens exclusively (8, 16, 32, 48, 64, 96, 128px). These create the macro rhythm of the page. Consistent intervals here matter because the eye measures them when scanning a layout.

2. **Type scale: ratio-based.** The scale (13 → 14 → 20 → 22 → 26 → 32 → 42) follows typographic logic — roughly a 1.2–1.25x progression. Each step exists because it creates clear visual hierarchy from its neighbors. Don't force type sizes onto base 8; that would give you 16, 24, 32, 40 which is an ugly scale with no small sizes.

3. **Detail values: use what looks right.** Border-radius (4px), border-width (1px, 2px), input padding, icon internals, underline offset — these are fine-grained craft decisions that serve the element, not the grid. Values like 3px, 4px, 5px, 10px, 12px are all acceptable here.

### Other rules

4. Border radius is 4px (standard for all elements).
5. Fraunces for all text. IBM Plex Mono for meta, dates, code, labels, form inputs.
6. All colors must reference CSS variables. No hardcoded hex/rgb in component styles.
7. Warmth is non-negotiable. The site should feel handmade and alive.

# andysparks.co Phase 1: Foundation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold the andysparks.co Next.js project with design system, layout components, and Home page as proof of concept. Ends with a deployable site on Vercel.

**Architecture:** Next.js 16 App Router with TypeScript. Tailwind CSS 4 + custom CSS variables for design tokens (following MC's pattern). Fraunces (variable, Google Fonts) for body/display, IBM Plex Mono for meta/code. Parchment background, earth-tone palette.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Fraunces font, IBM Plex Mono, Vercel

**Spec:** `docs/superpowers/specs/2026-03-28-andysparks-site-redesign.md`
**Typography sampler:** `docs/superpowers/specs/2026-03-28-andysparks-typography-sampler.html`

**Phase scope:** This is Phase 1 of 3. Phase 2 covers content pipeline, all pages, forms, SEO, and migration. Phase 3 covers generative/interactive elements and dark mode.

---

## File Structure

```
andysparks.co/
├── .github/
│   └── (later: CI workflows)
├── content/
│   └── essays/              # Markdown essays (Phase 2)
├── docs/
│   └── superpowers/
│       ├── specs/           # Design spec + typography sampler
│       └── plans/           # This plan
├── public/
│   ├── images/              # Static images (Phase 2)
│   └── fonts/               # (none — using Google Fonts)
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, font imports, base styles
│   │   ├── layout.tsx       # Root layout (metadata, fonts, header/footer)
│   │   ├── page.tsx         # Home page
│   │   ├── design-system/
│   │   │   └── page.tsx     # Design system reference page
│   │   └── not-found.tsx    # 404 page
│   ├── components/
│   │   ├── Header.tsx       # Site header/nav
│   │   ├── Footer.tsx       # Site footer with newsletter signup placeholder
│   │   └── Container.tsx    # Content width wrapper
│   └── lib/
│       └── (empty for now)
├── CLAUDE.md                # Project rules and conventions
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts       # (or CSS-only Tailwind 4 config)
├── tsconfig.json
└── .gitignore
```

---

### Task 1: Create GitHub Repo and Scaffold Next.js Project

**Files:**
- Create: `andysparks.co/package.json` (via create-next-app)
- Create: `andysparks.co/.gitignore`
- Create: `andysparks.co/next.config.ts`
- Create: `andysparks.co/tsconfig.json`

- [ ] **Step 1: Create the project directory and initialize Next.js**

```bash
cd /Users/andysparks/Projects
npx create-next-app@latest andysparks.co \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack
```

Accept defaults. This scaffolds the full Next.js project with App Router, TypeScript, Tailwind, and ESLint.

- [ ] **Step 2: Verify the dev server starts**

```bash
cd /Users/andysparks/Projects/andysparks.co
npm run dev
```

Expected: Dev server starts on localhost:3000. Visit in browser to see the default Next.js page.

- [ ] **Step 3: Clean out the default boilerplate**

Remove all default content from `src/app/page.tsx` and `src/app/globals.css`. Replace `page.tsx` with a minimal placeholder:

```tsx
// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>Andy Sparks</h1>
      <p>Coming soon.</p>
    </main>
  );
}
```

Replace `src/app/globals.css` with an empty file (we'll build it up in Task 2).

```css
/* src/app/globals.css */
@import "tailwindcss";
```

- [ ] **Step 4: Create the GitHub repo and push**

```bash
cd /Users/andysparks/Projects/andysparks.co
gh repo create andysparks.co --public --source=. --remote=origin
git add .
git commit -m "feat: scaffold Next.js project"
git push -u origin main
```

- [ ] **Step 5: Verify the repo exists on GitHub**

```bash
gh repo view andysparks.co --web
```

Expected: Opens the repo page in the browser.

---

### Task 2: Design Tokens and Base Styles

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add font imports and design tokens to globals.css**

```css
/* src/app/globals.css */
@import "tailwindcss";

/* ===== FONTS ===== */
/* Fraunces: variable serif for body + display */
/* IBM Plex Mono: monospace for meta/code */
/* Loaded via Google Fonts link in layout.tsx */

/* ===== DESIGN TOKENS ===== */
:root {
  /* --- Colors: Greens (dominant) --- */
  --color-evergreen: #2b3a24;
  --color-forest: #3d4f2f;
  --color-olive: #556b3a;
  --color-leaf: #6e8a4a;
  --color-spring: #8aaa5e;

  /* --- Colors: Golds & Warm Accents --- */
  --color-brass: #c9952c;
  --color-gilt: #deb04a;
  --color-firelight: #e8c76a;
  --color-ember: #b85c2a;

  /* --- Colors: Foundations --- */
  --color-parchment: #f2ead4;
  --color-warm-paper: #e5dabf;
  --color-khaki: #c4b496;
  --color-chocolate: #3b2f26;
  --color-night: #1e1a16;

  /* --- Colors: Cool Note --- */
  --color-river: #6b8fa3;
  --color-smoke: #8fb3c4;

  /* --- Semantic Colors --- */
  --color-background: var(--color-parchment);
  --color-ink: var(--color-chocolate);
  --color-ink-light: #5a5040;
  --color-primary: var(--color-forest);
  --color-accent: var(--color-brass);
  --color-muted: var(--color-khaki);
  --color-divider: #d4c9a8;

  /* --- Typography --- */
  --font-body: "Fraunces", Georgia, "Times New Roman", serif;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;

  --type-display: 42px;
  --type-h1: 32px;
  --type-h2: 26px;
  --type-h3: 22px;
  --type-body: 19px;
  --type-subtitle: 22px;
  --type-sm: 14px;
  --type-xs: 13px;

  --leading-tight: 1.2;
  --leading-snug: 1.35;
  --leading-body: 1.7;

  /* --- Spacing (base 8) --- */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 32px;
  --space-lg: 48px;
  --space-xl: 64px;
  --space-2xl: 96px;
  --space-3xl: 128px;

  /* --- Layout --- */
  --width-content: 640px;
  --width-wide: 940px;
  --width-max: 1200px;
}

/* ===== BASE STYLES ===== */
html {
  background-color: var(--color-background);
  color: var(--color-ink);
}

body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: var(--leading-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ===== TYPOGRAPHY ===== */
h1 {
  font-size: var(--type-h1);
  font-weight: 700;
  line-height: var(--leading-tight);
  color: var(--color-evergreen);
}

h2 {
  font-size: var(--type-h2);
  font-weight: 600;
  line-height: var(--leading-snug);
  color: var(--color-evergreen);
}

h3 {
  font-size: var(--type-h3);
  font-weight: 600;
  line-height: var(--leading-snug);
  color: var(--color-forest);
}

a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: color-mix(in srgb, var(--color-primary) 50%, transparent);
  transition: text-decoration-color 0.15s ease;
}

a:hover {
  text-decoration-color: var(--color-primary);
}

/* ===== SELECTION ===== */
::selection {
  background-color: color-mix(in srgb, var(--color-forest) 20%, transparent);
}
```

- [ ] **Step 2: Update layout.tsx with fonts and metadata**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Andy Sparks",
    template: "%s | Andy Sparks",
  },
  description:
    "Executive coach to startup founders and CEOs. Writing about craft, psychology, and human flourishing.",
  metadataBase: new URL("https://andysparks.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Andy Sparks",
  },
  twitter: {
    card: "summary_large_image",
    site: "@andysparks",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify fonts render correctly**

```bash
npm run dev
```

Open localhost:3000. The "Andy Sparks" heading should render in Fraunces serif on the parchment background. Inspect in browser devtools to confirm `font-family` is Fraunces. Check the background is `#f2ead4`.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: add design tokens, fonts, and base styles"
```

---

### Task 3: Container Component

**Files:**
- Create: `src/components/Container.tsx`

- [ ] **Step 1: Create the Container component**

This wraps content at the correct max-width with horizontal padding.

```tsx
// src/components/Container.tsx
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  wide?: boolean;
  className?: string;
};

export function Container({
  children,
  wide = false,
  className = "",
}: ContainerProps) {
  const maxWidth = wide ? "var(--width-wide)" : "var(--width-content)";
  return (
    <div
      className={className}
      style={{
        maxWidth,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--space-sm)",
        paddingRight: "var(--space-sm)",
      }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Container.tsx
git commit -m "feat: add Container layout component"
```

---

### Task 4: Header Component

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/styles/header.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create header styles**

```css
/* src/styles/header.css */
.site-header {
  padding-top: var(--space-md);
  padding-bottom: var(--space-md);
}

.site-header-inner {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.site-header-name {
  font-family: var(--font-body);
  font-size: var(--type-h3);
  font-weight: 700;
  color: var(--color-evergreen);
  text-decoration: none;
}

.site-header-name:hover {
  text-decoration: none;
  color: var(--color-forest);
}

.site-header-nav {
  display: flex;
  gap: var(--space-md);
}

.site-header-nav a {
  font-family: var(--font-mono);
  font-size: var(--type-sm);
  color: var(--color-ink-light);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.site-header-nav a:hover {
  color: var(--color-primary);
}
```

- [ ] **Step 2: Create the Header component**

```tsx
// src/components/Header.tsx
import Link from "next/link";
import { Container } from "./Container";
import "../styles/header.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/essays", label: "Essays" },
];

export function Header() {
  return (
    <header className="site-header">
      <Container wide>
        <div className="site-header-inner">
          <Link href="/" className="site-header-name">
            Andy Sparks
          </Link>
          <nav className="site-header-nav">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
```

- [ ] **Step 3: Add Header to root layout**

Update `src/app/layout.tsx` body to include the Header:

```tsx
// In src/app/layout.tsx, replace the <body> contents:
import { Header } from "@/components/Header";

// ... existing code ...

      <body>
        <Header />
        <main>{children}</main>
      </body>
```

- [ ] **Step 4: Verify header renders**

```bash
npm run dev
```

Open localhost:3000. Header should show "Andy Sparks" on the left with About, Coaching, Essays links on the right in IBM Plex Mono. Links should change color on hover.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/styles/header.css src/app/layout.tsx
git commit -m "feat: add site header with navigation"
```

---

### Task 5: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Create: `src/styles/footer.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create footer styles**

```css
/* src/styles/footer.css */
.site-footer {
  margin-top: var(--space-3xl);
  padding-top: var(--space-lg);
  padding-bottom: var(--space-xl);
  border-top: 1px solid var(--color-divider);
}

.site-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-lg);
}

.site-footer-signup {
  flex: 1;
  max-width: 360px;
}

.site-footer-signup h3 {
  font-family: var(--font-body);
  font-size: var(--type-body);
  font-weight: 600;
  color: var(--color-evergreen);
  margin-bottom: var(--space-xs);
}

.site-footer-signup p {
  font-size: var(--type-sm);
  color: var(--color-ink-light);
  margin-bottom: var(--space-sm);
}

.site-footer-signup-form {
  display: flex;
  gap: var(--space-xs);
}

.site-footer-signup-input {
  flex: 1;
  padding: var(--space-xs) 12px;
  font-family: var(--font-mono);
  font-size: var(--type-sm);
  background: var(--color-warm-paper);
  border: 1px solid var(--color-divider);
  border-radius: 4px;
  color: var(--color-ink);
}

.site-footer-signup-input::placeholder {
  color: var(--color-muted);
}

.site-footer-signup-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.site-footer-signup-button {
  padding: var(--space-xs) var(--space-sm);
  font-family: var(--font-mono);
  font-size: var(--type-sm);
  font-weight: 600;
  background: var(--color-forest);
  color: var(--color-parchment);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.site-footer-signup-button:hover {
  background: var(--color-evergreen);
}

.site-footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.site-footer-links a {
  font-family: var(--font-mono);
  font-size: var(--type-xs);
  color: var(--color-ink-light);
  text-decoration: none;
}

.site-footer-links a:hover {
  color: var(--color-primary);
}

.site-footer-social {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
}

@media (max-width: 640px) {
  .site-footer-inner {
    flex-direction: column;
  }

  .site-footer-signup {
    max-width: 100%;
  }
}
```

- [ ] **Step 2: Create the Footer component**

```tsx
// src/components/Footer.tsx
import Link from "next/link";
import { Container } from "./Container";
import "../styles/footer.css";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/essays", label: "Essays" },
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media" },
];

const SOCIAL_LINKS = [
  { href: "https://x.com/andysparks", label: "X" },
  { href: "https://www.linkedin.com/in/andyjsparks/", label: "LinkedIn" },
  { href: "https://www.goodreads.com/author/show/19221938.Andy_Sparks", label: "GoodReads" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <Container wide>
        <div className="site-footer-inner">
          <div className="site-footer-signup">
            <h3>Stay in touch</h3>
            <p>Essays on startups, coaching, craft, and human flourishing.</p>
            {/* Phase 2: Wire up to Resend API */}
            <form
              className="site-footer-signup-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="site-footer-signup-input"
                aria-label="Email address"
              />
              <button type="submit" className="site-footer-signup-button">
                Subscribe
              </button>
            </form>
          </div>

          <div className="site-footer-links">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <div className="site-footer-social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 3: Add Footer to root layout**

Update `src/app/layout.tsx`:

```tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// ... existing code ...

      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
```

- [ ] **Step 4: Verify footer renders**

```bash
npm run dev
```

Open localhost:3000. Footer should appear at the bottom with the newsletter signup on the left and navigation + social links on the right. The subscribe button should be forest green. Resize to mobile width to confirm the layout stacks vertically.

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.tsx src/styles/footer.css src/app/layout.tsx
git commit -m "feat: add site footer with newsletter signup placeholder"
```

---

### Task 6: Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/styles/home.css`

- [ ] **Step 1: Create home page styles**

```css
/* src/styles/home.css */
.home-hero {
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-xl);
}

.home-headline {
  font-size: var(--type-display);
  font-weight: 700;
  line-height: var(--leading-tight);
  color: var(--color-evergreen);
  margin-bottom: var(--space-sm);
}

.home-subtitle {
  font-size: var(--type-subtitle);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-olive);
  margin-bottom: var(--space-lg);
}

.home-body {
  font-size: var(--type-body);
  line-height: var(--leading-body);
  color: var(--color-ink);
  margin-bottom: var(--space-md);
}

.home-body a {
  color: var(--color-primary);
}

.home-photo {
  width: 100%;
  max-width: var(--width-content);
  border-radius: 4px;
  margin-top: var(--space-lg);
  margin-bottom: var(--space-lg);
}

@media (max-width: 640px) {
  .home-headline {
    font-size: 32px;
  }

  .home-subtitle {
    font-size: 18px;
  }
}
```

- [ ] **Step 2: Build the Home page**

```tsx
// src/app/page.tsx
import { Container } from "@/components/Container";
import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <Container>
        <h1 className="home-headline">
          Serious aims,
          <br />
          playful methods.
        </h1>
        <p className="home-subtitle">
          Executive coach to startup founders and CEOs.
        </p>

        <p className="home-body">
          I help founders and CEOs navigate the emotional and practical
          challenges of building companies. Right now I'm working on{" "}
          <a
            href="https://managementcraft.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Management Craft
          </a>
          , writing a{" "}
          <Link href="/essays">newsletter</Link>, and trying
          to read 100 books a year.
        </p>

        <p className="home-body">
          Before coaching, I co-founded Mattermark (COO, $0 to $5M ARR, 100K+
          newsletter subscribers) and Holloway, where I authored The Holloway
          Guide to Raising Venture Capital. I spent 13 years in San Francisco
          before relocating to Columbus, OH with my wife Kate.
        </p>

        {/* Phase 2: Add actual headshot image */}
        <div
          className="home-photo"
          style={{
            height: 400,
            background: "var(--color-warm-paper)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--type-sm)",
            color: "var(--color-muted)",
          }}
        >
          [Photo placeholder — headshot will go here]
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Verify the Home page**

```bash
npm run dev
```

Open localhost:3000. You should see:
- "Serious aims, playful methods." in large Fraunces serif on the parchment background
- Italic subtitle in olive green
- Body text with links in forest green
- Photo placeholder
- Header above, footer below

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/styles/home.css
git commit -m "feat: add Home page with hero content"
```

---

### Task 7: Design System Page

**Files:**
- Create: `src/app/design-system/page.tsx`
- Create: `src/styles/design-system.css`

- [ ] **Step 1: Create design system page styles**

```css
/* src/styles/design-system.css */
.ds-section {
  margin-bottom: var(--space-2xl);
}

.ds-section-title {
  font-family: var(--font-mono);
  font-size: var(--type-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-olive);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-divider);
}

.ds-swatch-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.ds-swatch {
  width: 120px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  border: 1px solid var(--color-divider);
}

.ds-swatch-name {
  font-weight: 600;
  margin-bottom: 2px;
}

.ds-swatch-hex {
  opacity: 0.7;
}

.ds-type-sample {
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--color-divider);
}

.ds-type-label {
  font-family: var(--font-mono);
  font-size: var(--type-xs);
  color: var(--color-muted);
  margin-bottom: var(--space-xs);
}

.ds-spacing-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
}

.ds-spacing-bar {
  height: 24px;
  background: var(--color-forest);
  border-radius: 2px;
  opacity: 0.3;
}

.ds-spacing-label {
  font-family: var(--font-mono);
  font-size: var(--type-xs);
  color: var(--color-ink-light);
  white-space: nowrap;
}
```

- [ ] **Step 2: Create the Design System page**

```tsx
// src/app/design-system/page.tsx
import { Container } from "@/components/Container";
import "../../styles/design-system.css";

const COLORS = {
  Greens: [
    { name: "Evergreen", hex: "#2b3a24", light: true },
    { name: "Forest", hex: "#3d4f2f", light: true },
    { name: "Olive", hex: "#556b3a", light: true },
    { name: "Leaf", hex: "#6e8a4a", light: true },
    { name: "Spring", hex: "#8aaa5e", light: false },
  ],
  "Golds & Warm": [
    { name: "Brass", hex: "#c9952c", light: true },
    { name: "Gilt", hex: "#deb04a", light: false },
    { name: "Firelight", hex: "#e8c76a", light: false },
    { name: "Ember", hex: "#b85c2a", light: true },
  ],
  Foundations: [
    { name: "Parchment", hex: "#f2ead4", light: false },
    { name: "Warm Paper", hex: "#e5dabf", light: false },
    { name: "Khaki", hex: "#c4b496", light: false },
    { name: "Chocolate", hex: "#3b2f26", light: true },
    { name: "Night", hex: "#1e1a16", light: true },
  ],
  "Cool Note": [
    { name: "River", hex: "#6b8fa3", light: true },
    { name: "Smoke", hex: "#8fb3c4", light: false },
  ],
};

const SPACING = [
  { name: "--space-xs", value: "8px" },
  { name: "--space-sm", value: "16px" },
  { name: "--space-md", value: "32px" },
  { name: "--space-lg", value: "48px" },
  { name: "--space-xl", value: "64px" },
  { name: "--space-2xl", value: "96px" },
  { name: "--space-3xl", value: "128px" },
];

export default function DesignSystem() {
  return (
    <Container>
      <div style={{ paddingTop: "var(--space-xl)" }}>
        <h1>Design System</h1>
        <p
          style={{
            fontStyle: "italic",
            color: "var(--color-olive)",
            marginBottom: "var(--space-xl)",
          }}
        >
          Living reference for andysparks.co. Serious aims, playful methods.
        </p>

        {/* Colors */}
        <div className="ds-section">
          <div className="ds-section-title">Colors</div>
          {Object.entries(COLORS).map(([group, swatches]) => (
            <div key={group}>
              <h3
                style={{
                  fontSize: "var(--type-sm)",
                  color: "var(--color-ink-light)",
                  marginBottom: "var(--space-xs)",
                }}
              >
                {group}
              </h3>
              <div className="ds-swatch-grid">
                {swatches.map((swatch) => (
                  <div
                    key={swatch.name}
                    className="ds-swatch"
                    style={{
                      background: swatch.hex,
                      color: swatch.light ? "#f2ead4" : "#2a2520",
                      borderColor: swatch.light ? "transparent" : undefined,
                    }}
                  >
                    <span className="ds-swatch-name">{swatch.name}</span>
                    <span className="ds-swatch-hex">{swatch.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Typography */}
        <div className="ds-section">
          <div className="ds-section-title">Typography</div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Display / 42px / Fraunces 700
            </div>
            <div
              style={{
                fontSize: "var(--type-display)",
                fontWeight: 700,
                lineHeight: "var(--leading-tight)",
                color: "var(--color-evergreen)",
              }}
            >
              Serious aims, playful methods.
            </div>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">H1 / 32px / Fraunces 700</div>
            <h1>Why Co-Founders Struggle</h1>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">H2 / 26px / Fraunces 600</div>
            <h2>The Bear Market for Progress</h2>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">H3 / 22px / Fraunces 600</div>
            <h3>Curiosity as a Civic Virtue</h3>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Subtitle / 22px / Fraunces 300 Italic
            </div>
            <p
              style={{
                fontSize: "var(--type-subtitle)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: "var(--leading-snug)",
                color: "var(--color-olive)",
              }}
            >
              A philosophy of human flourishing.
            </p>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Body / 19px / Fraunces 400 / 1.7 line-height
            </div>
            <p>
              The best partnerships are built on{" "}
              <a href="#">mutual trust</a>, but trust is not a permanent
              state. It erodes slowly, then all at once. The question is
              whether you notice before the fracture, or after. Every
              generation faces two challenges: to create{" "}
              <em>real progress</em> that broadly improves the human
              condition, and to convince people we can continue to do so.
            </p>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Meta / 13px / IBM Plex Mono 400
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--type-xs)",
                color: "var(--color-ink-light)",
              }}
            >
              March 28, 2026 &middot; 12 min read
            </p>
          </div>
        </div>

        {/* Spacing */}
        <div className="ds-section">
          <div className="ds-section-title">Spacing (base 8)</div>
          {SPACING.map((space) => (
            <div key={space.name} className="ds-spacing-row">
              <div
                className="ds-spacing-bar"
                style={{ width: space.value }}
              />
              <span className="ds-spacing-label">
                {space.name} ({space.value})
              </span>
            </div>
          ))}
        </div>

        {/* Layout */}
        <div className="ds-section">
          <div className="ds-section-title">Layout</div>
          <div style={{ marginBottom: "var(--space-sm)" }}>
            <div className="ds-type-label">Content width: 640px</div>
            <div
              style={{
                width: "var(--width-content)",
                maxWidth: "100%",
                height: 24,
                background: "var(--color-forest)",
                opacity: 0.2,
                borderRadius: 2,
              }}
            />
          </div>
          <div>
            <div className="ds-type-label">Wide width: 940px</div>
            <div
              style={{
                width: "var(--width-wide)",
                maxWidth: "100%",
                height: 24,
                background: "var(--color-brass)",
                opacity: 0.2,
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
```

- [ ] **Step 3: Verify the Design System page**

```bash
npm run dev
```

Open localhost:3000/design-system. You should see:
- Color swatches organized by group (Greens, Golds, Foundations, Cool Note)
- Typography samples at each scale level, rendered in Fraunces
- Spacing scale with visual bars
- Layout width indicators

- [ ] **Step 4: Commit**

```bash
git add src/app/design-system/page.tsx src/styles/design-system.css
git commit -m "feat: add design system reference page"
```

---

### Task 8: 404 Page

**Files:**
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create the 404 page**

```tsx
// src/app/not-found.tsx
import { Container } from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div
        style={{
          paddingTop: "var(--space-2xl)",
          paddingBottom: "var(--space-2xl)",
        }}
      >
        <h1
          style={{
            fontSize: "var(--type-display)",
            color: "var(--color-evergreen)",
            marginBottom: "var(--space-sm)",
          }}
        >
          Lost in the forest.
        </h1>
        <p style={{ marginBottom: "var(--space-md)" }}>
          This page doesn't exist, but there's plenty to explore.
        </p>
        <Link href="/">Head back home</Link>
      </div>
    </Container>
  );
}
```

- [ ] **Step 2: Verify by visiting a nonexistent route**

```bash
npm run dev
```

Visit localhost:3000/nonexistent. Should show "Lost in the forest." with a link home.

- [ ] **Step 3: Commit**

```bash
git add src/app/not-found.tsx
git commit -m "feat: add 404 page"
```

---

### Task 9: CLAUDE.md and Project Configuration

**Files:**
- Create: `CLAUDE.md`
- Modify: `next.config.ts`

- [ ] **Step 1: Create CLAUDE.md**

```markdown
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

1. All values reference design tokens (CSS variables in globals.css). No magic numbers.
2. Base 8 spacing exclusively (8, 16, 32, 48, 64, 96, 128px).
3. Content width: 640px for prose, 940px for wide elements.
4. Fraunces for all text. IBM Plex Mono for meta, dates, code, labels.
5. Color palette: earth tones (greens, golds, oranges) on parchment. Never cold or sterile.
6. Warmth is non-negotiable. The site should feel handmade and alive.

## Commands

- `npm run dev` -- local dev server
- `npm run build` -- production build
- `npm run lint` -- ESLint

## Content

Essays live in `content/essays/` as markdown with YAML frontmatter. Images in `public/images/`.

## Relationship to Management Craft

Same maker, different register. MC is the scholarly journal (Signifier, cobalt + sienna, restrained). This site is the illuminated manuscript (Fraunces, earth tones, playful). They share warm foundations, craft-forward typography, and content-first layout. They diverge on color range, personality, and how much the design itself is allowed to be expressive.
```

- [ ] **Step 2: Update next.config.ts with security headers**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md next.config.ts
git commit -m "feat: add CLAUDE.md project rules and security headers"
```

---

### Task 10: Deploy to Vercel

- [ ] **Step 1: Build locally to verify no errors**

```bash
cd /Users/andysparks/Projects/andysparks.co
npm run build
```

Expected: Build completes successfully with no errors.

- [ ] **Step 2: Deploy to Vercel**

```bash
npx vercel --yes
```

This will link the project to your Vercel account and deploy. Follow prompts if needed.

- [ ] **Step 3: Verify the deployment**

Visit the Vercel preview URL from the output. Check:
- Home page renders with Fraunces on parchment
- Header navigation works
- Footer is present
- /design-system shows all tokens
- /nonexistent shows 404 page

- [ ] **Step 4: Commit Vercel configuration**

```bash
git add .vercel
git commit -m "chore: add Vercel project configuration"
git push origin main
```

---

### Task 11: Copy Spec and Plan Files Into Repo

- [ ] **Step 1: Copy docs into the project**

```bash
cp -r /Users/andysparks/docs/superpowers /Users/andysparks/Projects/andysparks.co/docs/superpowers
```

- [ ] **Step 2: Add to .gitignore if desired, or commit**

```bash
cd /Users/andysparks/Projects/andysparks.co
git add docs/
git commit -m "docs: add design spec and implementation plans"
git push origin main
```

---

## Phase 1 Complete Checklist

After all tasks:
- [ ] Next.js project scaffolded and on GitHub
- [ ] Design tokens defined (colors, typography, spacing, layout)
- [ ] Fraunces and IBM Plex Mono loading correctly
- [ ] Header component with navigation
- [ ] Footer component with newsletter signup placeholder
- [ ] Home page with hero content
- [ ] Design system reference page
- [ ] 404 page
- [ ] CLAUDE.md with project rules
- [ ] Deployed to Vercel

**Next:** Phase 2 (content pipeline, all pages, forms, SEO, migration)

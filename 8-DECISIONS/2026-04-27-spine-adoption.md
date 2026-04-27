---
type: decision
date: 2026-04-27
last_updated: 2026-04-27
slug: spine-adoption
status: accepted
scope: andysparks.co
tags: [spine, spine-adoption, methodology]
supersedes: []
invalidates: []
ceremony: y-statement
---

# andysparks.co adopts spine (partial — vocabulary + decision pattern + roadmap scaffold)

In the context of the 2026-04-27 cross-project spine portability decision (`~/operating-system/8-DECISIONS/2026-04-27-spine-portability.md`) framing spine as a portable methodology, with four sibling adoptions earlier the same day (MC's wiki-engine surface, the teaching repo, bookconvert, management-craft-skill), and andysparks.co being an active Next.js 16 site repo (Webflow → Next.js/Vercel migration in progress, Tolkien-inspired Fraunces redesign, plus the talks feature on `talks-feature` branch carrying the Ohio State deck), facing the choice between (a) deferring spine adoption since the redesign is mid-flight, or (b) **adopting partial spine now — vocabulary lock, decision-file pattern, roadmap scaffold — without touching the active design work** — we chose (b), to gain the rules-collapse value (one cross-repo navigation pattern; future design-decisions and feature-decisions land in 8-DECISIONS instead of accumulating as `docs/superpowers/specs/<date>-<topic>.md` ad-hoc, which is itself the same stale-path family that MC just retired today via PR #245) — over (a) which would let the repo accumulate additional ad-hoc decisions before the redesign settles.

## What changed

1. **`1-ROADMAP.md` created** at repo root with `type: roadmap` frontmatter and Now/Next/Blocked/Someday scaffold. Currently mostly placeholder — Andy to fill in current redesign phase + talks feature state. Becomes the load-bearing nav file as the redesign work proceeds.
2. **`8-DECISIONS/` directory created.** This decision file is its first inhabitant. Future design-decisions and feature-decisions live here following spine convention (`YYYY-MM-DD-slug.md` + Y-statement / directive / full ceremony).
3. **`CLAUDE.md` updated.** Notes that the repo is partially spined; points at the spine portability decision for vocabulary; points at `1-ROADMAP.md` for session-start nav.

## Explicit divergences from OS reference

These are intentional, not drift:

- **No `0-STRATEGY.md`.** andysparks.co's strategic direction is downstream of Andy's broader work. When the site grows past the personal-blog footprint and develops independent strategic direction, file then.
- **No `2-PROJECTS/`.** This is a Next.js application repo, not a multi-bet docs repo. Project shape lives in `src/`, `content/`, `public/`. Bets are tracked at the feature level (talks, redesign, etc.).
- **No `3-RULES/`.** CLAUDE.md + AGENTS.md are the existing rules surface; refactoring them doesn't earn its keep yet.
- **No `7-RUNBOOKS/`.** Deploy / publish workflows live in CLAUDE.md and Vercel config. When a recurring publish ritual emerges (e.g., per-talk publish flow), file then.
- **No B+C-lite validator + pre-commit hook.** Repo is too small for the scaffolding to earn its keep; revisit when decision count grows past ~5.
- **`docs/superpowers/` retained as-is.** The active redesign spec at `docs/superpowers/specs/2026-03-28-andysparks-site-redesign.md` is load-bearing and load-bearingly referenced from CLAUDE.md. Per the same stale-path family that MC just retired (PR #245), this directory is a candidate for future migration to `8-DECISIONS/` or a `_archive/` location once the redesign ships and the spec stabilizes — but moving it mid-redesign would risk breaking active references. **Filed as future spine-cleanup follow-up.**

## What's NOT changing

- `src/`, `content/`, `public/` — application code and content.
- `docs/superpowers/` — active design spec + plans (deferred per above).
- `package.json`, `tsconfig.json`, `next.config.ts`, etc. — build config.
- `AGENTS.md` — Claude Code convention sibling to CLAUDE.md, unchanged.
- `talks-feature` branch — carrying the Ohio State workshop deck per `~/teaching/1-ROADMAP.md`. Untouched by this PR.

## Future spine-cleanup follow-ups (not committed today)

- **Migrate `docs/superpowers/specs/2026-03-28-andysparks-site-redesign.md`** into `8-DECISIONS/` (or a `2-PROJECTS/redesign-2026/SPEC.md` equivalent) once the redesign ships.
- **Decide `docs/superpowers/plans/`** disposition. If active, may need promotion to spine genres; if stale, archive.
- **`docs/superpowers/` directory itself** — if/when emptied, retire the dir per the same stale-paths-family pattern MC just resolved.

## Re-eval triggers

- Redesign ships and the spec under `docs/superpowers/` stops being load-bearing → execute the deferred migration to `8-DECISIONS/` + `_archive/`.
- Decision count reaches ~5 → consider B+C-lite enforcement.
- Site sprouts a strategic direction independent of Andy's broader work → file `0-STRATEGY.md`.
- A talks-feature-style independent surface grows past one-off → consider `2-PROJECTS/talks/` or similar.

## Related

- `~/operating-system/8-DECISIONS/2026-04-27-spine-portability.md` — cross-project spine portability decision; this is the fifth sibling instance.
- `~/conductor/repos/management-craft/docs/8-DECISIONS/2026-04-27-wiki-engine-spine-adoption.md` — first per-surface adoption (MC wiki-engine).
- `~/teaching/8-DECISIONS/2026-04-27-spine-adoption.md`, `~/documents/claude/projects/bookconvert/8-DECISIONS/2026-04-27-spine-adoption.md`, `~/conductor/repos/management-craft-skill/8-DECISIONS/2026-04-27-spine-adoption.md` — sibling adoptions.
- `~/conductor/repos/management-craft/docs/4-CONTENT/wiki-engine/PLAN.md:1602` (post PR #245) — example of a stale-path migration that this repo's `docs/superpowers/` will eventually mirror.

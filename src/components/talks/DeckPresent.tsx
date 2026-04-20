"use client";

import type { Talk } from "@/lib/talks";
import { Slide } from "./Slide";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type Props = { talk: Talk };

/**
 * Present mode — full-viewport single-slide display with keyboard navigation.
 * Arrow keys / space / page up/down to advance. `n` toggles speaker notes.
 * `f` requests fullscreen. `Escape` exits fullscreen. URL hash reflects position
 * so deep links work and the browser back/forward navigates slides.
 */
export function DeckPresent({ talk }: Props) {
  const slides = talk.slides;
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);

  // Sync index ↔ URL hash.
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const found = slides.findIndex((s) => s.id === hash);
    if (found >= 0) setIndex(found);
  }, [slides]);

  useEffect(() => {
    const target = slides[index];
    if (target && window.location.hash !== `#${target.id}`) {
      window.history.replaceState(null, "", `#${target.id}`);
    }
  }, [index, slides]);

  const advance = useCallback((delta: number) => {
    setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));
  }, [total]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Ignore when typing in inputs
      const target = e.target as HTMLElement | null;
      if (target && /input|textarea|select/i.test(target.tagName)) return;

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          advance(1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          advance(-1);
          break;
        case "Home":
          e.preventDefault();
          setIndex(0);
          break;
        case "End":
          e.preventDefault();
          setIndex(total - 1);
          break;
        case "n":
        case "N":
          setNotesOpen((v) => !v);
          break;
        case "f":
        case "F":
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, total]);

  // Touch swipe navigation for mobile
  useEffect(() => {
    let startX = 0;
    function onTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
    }
    function onTouchEnd(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      advance(dx < 0 ? 1 : -1);
    }
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [advance]);

  const currentSlide = slides[index];
  const nextSlide = slides[index + 1];

  const segmentMeta = useMemo(
    () => talk.segments.find((s) => s.number === currentSlide?.segment),
    [talk.segments, currentSlide]
  );

  if (!currentSlide) return null;

  return (
    <div className="talk-present">
      <div className="talk-present__stage">
        <Slide
          slide={currentSlide}
          slideNumber={index + 1}
          totalSlides={total}
          mode="present"
        />
      </div>

      <aside className="talk-present__hud" aria-label="Presenter HUD">
        <div className="talk-present__hud-section">
          <span className="talk-present__hud-label">Slide</span>
          <span className="talk-present__hud-value">
            {index + 1} / {total}
          </span>
        </div>
        {segmentMeta && (
          <div className="talk-present__hud-section">
            <span className="talk-present__hud-label">Segment {segmentMeta.number}</span>
            <span className="talk-present__hud-value">{segmentMeta.name}</span>
            <span className="talk-present__hud-sub">{segmentMeta.timeBudget}</span>
          </div>
        )}
        <div className="talk-present__hud-section">
          <button
            type="button"
            className="talk-present__hud-button"
            onClick={() => setNotesOpen((v) => !v)}
          >
            {notesOpen ? "Hide" : "Show"} notes (n)
          </button>
          <Link href={`/talks/${talk.slug}`} className="talk-present__hud-link">
            Exit present
          </Link>
        </div>
      </aside>

      {notesOpen && (
        <div className="talk-present__notes">
          <div className="talk-present__notes-slide">
            <div className="talk-present__notes-label">This slide</div>
            {currentSlide.notes || <em>No speaker notes.</em>}
          </div>
          {nextSlide && (
            <div className="talk-present__notes-next">
              <div className="talk-present__notes-label">Next: {nextSlide.title || nextSlide.label || nextSlide.id}</div>
              <div className="talk-present__notes-next-preview">
                {nextSlide.subtitle}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="talk-present__keymap" aria-hidden>
        <kbd>←</kbd><kbd>→</kbd> navigate &nbsp; <kbd>n</kbd> notes &nbsp; <kbd>f</kbd> fullscreen
      </div>
    </div>
  );
}

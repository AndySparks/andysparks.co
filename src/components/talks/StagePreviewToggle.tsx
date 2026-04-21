"use client";

import { useEffect, useState } from "react";

export function StagePreviewToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (on) root.dataset.stagePreview = "true";
    else delete root.dataset.stagePreview;
    return () => {
      delete document.documentElement.dataset.stagePreview;
    };
  }, [on]);

  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className="talk-deck__present-link"
      aria-pressed={on}
    >
      {on ? "Exit stage preview" : "Stage preview"}
    </button>
  );
}

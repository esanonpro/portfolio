"use client";

import { useState } from "react";

export function Ticker({ words, caption }: { words: string[]; caption: string }) {
  const [paused, setPaused] = useState(false);
  const loop = [...words, ...words];
  return (
    <div className={`ticker-box${paused ? " paused" : ""}`}>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">{loop.map((w, i) => <span key={i}>{w}</span>)}</div>
      </div>
      <p>{caption}</p>
      <button className="tk-btn" type="button" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        <span aria-hidden="true">{paused ? "▶" : "⏸"}</span> {paused ? "Relancer le défilement" : "Mettre en pause le défilement"}
      </button>
    </div>
  );
}

import type { CSSProperties } from "react";
import { brandColors, type IconKey } from "@/content/site";

type Props = { name: IconKey; brand?: boolean; className?: string; style?: CSSProperties };

/** Logo de techno (Simple Icons, CC0) servi depuis /icons.svg. */
export function Icon({ name, brand = false, className = "ico", style }: Props) {
  const s = brand ? ({ "--c": brandColors[name], ...style } as CSSProperties) : style;
  return (
    <svg className={className} style={s} aria-hidden="true">
      <use href={`/icons.svg#i-${name}`} />
    </svg>
  );
}

export function Emoji({ children }: { children: string }) {
  return <span aria-hidden="true">{children}</span>;
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}

export function Chevron() {
  return (
    <svg className="chev" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { fr } from "@/content/site";
import { ArrowRight } from "./Icon";

export function Nav() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btn.current?.focus(); }
    };
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".menu, .menu-btn")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [open]);

  return (
    <header>
      <nav className="nav" aria-label="Navigation principale">
        <a className="brand" href="#top">Elie Sanon<i aria-hidden="true" /></a>
        <ul className="nav-links">
          {fr.nav.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn btn-navline" href="#contact">Contact <ArrowRight /></a>
          <button
            ref={btn}
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M3 6h12M3 12h12" />
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            id="menu"
            className="menu open"
            style={{ transformOrigin: "top right" }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, transition: { duration: 0.14 } }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}
          >
            {fr.nav.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            <li><a href={fr.links.cv}>Télécharger le CV</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

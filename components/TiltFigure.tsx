"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Panneau qui s'incline en 3D vers le pointeur (amorti), avec reflet et parallaxe des couches. */
export function TiltFigure({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0, on = false;
    const step = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `perspective(1100px) rotateX(${cy}deg) rotateY(${cx}deg)`;
      el.style.setProperty("--px", cx.toFixed(2));
      el.style.setProperty("--py", cy.toFixed(2));
      if (on || Math.abs(cx) > 0.05 || Math.abs(cy) > 0.05) raf = requestAnimationFrame(step);
      else { el.style.transform = ""; el.style.setProperty("--px", "0"); el.style.setProperty("--py", "0"); }
    };
    const move = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
      tx = (x - 0.5) * 14;
      ty = (0.5 - y) * 10;
      el.style.setProperty("--gx", `${x * 100}%`);
      el.style.setProperty("--gy", `${y * 100}%`);
      if (!on) { on = true; el.classList.add("tilting"); cancelAnimationFrame(raf); step(); }
    };
    const leave = () => { on = false; tx = ty = 0; el.classList.remove("tilting"); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, []);

  return (
    <figure ref={ref} className="viz">
      <span className="glare" aria-hidden="true" />
      {children}
    </figure>
  );
}

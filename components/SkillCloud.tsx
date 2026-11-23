"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { fr } from "@/content/site";
import { Icon } from "./Icon";

/** Nuage de compétences en profondeur : il pivote en 3D sous le pointeur. */
export function SkillCloud() {
  const box = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const b = box.current, c = inner.current;
    if (!b || !c) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || innerWidth <= 560) return;
    const move = (e: PointerEvent) => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 12}deg)`;
    };
    const leave = () => { c.style.transform = ""; };
    b.addEventListener("pointermove", move);
    b.addEventListener("pointerleave", leave);
    return () => { b.removeEventListener("pointermove", move); b.removeEventListener("pointerleave", leave); };
  }, []);

  return (
    <div className="cloud" aria-label="Compétences" ref={box}>
      <div className="cloud-inner" ref={inner}>
        {fr.contact.cloud.map((p) => {
          const style = {
            left: `${p.x}%`, top: `${p.y}%`, "--z": `${p.z}px`, "--r": `${p.r}deg`,
            ...(p.size ? { width: p.size, height: p.size } : {}),
          } as CSSProperties;
          return (
            <span key={p.label} className={`pill ${p.color}${p.big ? " big" : ""}`} style={style}>
              {p.icon && <Icon name={p.icon} />}
              {p.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

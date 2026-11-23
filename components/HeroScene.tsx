"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Réseau neuronal 3D du haut de page (Three.js, chargé à la demande).
 * Pause hors écran / onglet caché, image fixe si WebGL indisponible ou petit écran.
 */
export function HeroScene() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv || innerWidth <= 560) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const T = await import("three");
      if (disposed) return;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
      let r: import("three").WebGLRenderer;
      try {
        r = new T.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
      } catch {
        return; // WebGL indisponible : l'image reste affichée
      }
      const W = 680;
      r.setPixelRatio(Math.min(devicePixelRatio, 2));
      r.setSize(W, W, false);
      const scene = new T.Scene();
      const cam = new T.PerspectiveCamera(40, 1, 0.1, 100);
      cam.position.set(0, 0, 9.5);
      const g = new T.Group();
      scene.add(g);

      const c2 = document.createElement("canvas");
      c2.width = c2.height = 64;
      const x = c2.getContext("2d")!;
      const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      gr.addColorStop(0, "rgba(255,255,255,1)");
      gr.addColorStop(0.25, "rgba(255,255,255,.85)");
      gr.addColorStop(1, "rgba(255,255,255,0)");
      x.fillStyle = gr;
      x.fillRect(0, 0, 64, 64);
      const sprite = new T.CanvasTexture(c2);

      const N = 150, R = 3;
      const pos: import("three").Vector3[] = [];
      const cols: number[] = [];
      const pal = ["#D2D5FF", "#5A64E3", "#5865FF", "#00CBCA"].map((c) => new T.Color(c));
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(1 - y * y), th = Math.PI * (3 - Math.sqrt(5)) * i;
        pos.push(new T.Vector3(Math.cos(th) * rad, y, Math.sin(th) * rad).multiplyScalar(R * (0.92 + Math.random() * 0.16)));
        const c = pal[Math.random() < 0.14 ? 3 : Math.floor(Math.random() * 3)];
        cols.push(c.r, c.g, c.b);
      }
      const pg = new T.BufferGeometry().setFromPoints(pos);
      pg.setAttribute("color", new T.Float32BufferAttribute(cols, 3));
      const additive = { transparent: true, depthWrite: false, blending: T.AdditiveBlending, map: sprite };
      g.add(new T.Points(pg, new T.PointsMaterial({ size: 0.2, vertexColors: true, ...additive })));

      const edges: [number, number][] = [];
      const lp: import("three").Vector3[] = [];
      pos.forEach((a, i) =>
        pos.map((b, j) => [j, a.distanceTo(b)] as const).filter(([j]) => j > i).sort((u, v) => u[1] - v[1]).slice(0, 2)
          .forEach(([j]) => { edges.push([i, j]); lp.push(a, pos[j]); }),
      );
      g.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(lp), new T.LineBasicMaterial({ color: 0xd2d5ff, transparent: true, opacity: 0.16 })));

      const core = new T.Mesh(new T.IcosahedronGeometry(1.05, 1), new T.MeshBasicMaterial({ color: 0x00cbca, wireframe: true, transparent: true, opacity: 0.55 }));
      g.add(core);
      const glow = new T.Sprite(new T.SpriteMaterial({ color: 0x00cbca, opacity: 0.55, ...additive }));
      glow.scale.set(3.2, 3.2, 1);
      g.add(glow);
      const sp: import("three").Vector3[] = [];
      pos.forEach((v, i) => { if (i % 9 === 0) sp.push(new T.Vector3(), v); });
      g.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(sp), new T.LineBasicMaterial({ color: 0x00cbca, transparent: true, opacity: 0.28 })));
      ([[3.9, 0.9, 0.3], [4.4, -0.5, 0.8]] as const).forEach(([rr, a, b]) => {
        const ring = new T.Mesh(new T.TorusGeometry(rr, 0.008, 8, 160), new T.MeshBasicMaterial({ color: 0x5a64e3, transparent: true, opacity: 0.5 }));
        ring.rotation.set(a, b, 0);
        g.add(ring);
      });

      const P = 14;
      const pk = new T.BufferGeometry();
      const pkPos = new Float32Array(P * 3);
      pk.setAttribute("position", new T.BufferAttribute(pkPos, 3));
      g.add(new T.Points(pk, new T.PointsMaterial({ size: 0.32, color: 0x00cbca, ...additive })));
      const rand = () => edges[Math.floor(Math.random() * edges.length)];
      const packets = Array.from({ length: P }, () => ({ e: rand(), t: Math.random(), s: 0.004 + Math.random() * 0.008 }));

      const tgt = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
      const onMove = (e: PointerEvent) => { tgt.x = e.clientX / innerWidth - 0.5; tgt.y = e.clientY / innerHeight - 0.5; };
      if (fine) addEventListener("pointermove", onMove, { passive: true });

      let raf = 0, visible = true, active = !document.hidden;
      const frame = () => {
        cur.x += (tgt.x - cur.x) * 0.06;
        cur.y += (tgt.y - cur.y) * 0.06;
        if (!reduce) g.rotation.y += 0.0016;
        g.rotation.x = 0.25 + cur.y * 0.5;
        g.rotation.z = cur.x * -0.15;
        cam.position.x = cur.x * 1.2;
        core.rotation.x -= 0.003;
        core.rotation.y += 0.004;
        packets.forEach((p, k) => {
          p.t += p.s;
          if (p.t > 1) { p.t = 0; p.e = rand(); }
          const a = pos[p.e[0]], b = pos[p.e[1]];
          pkPos[k * 3] = a.x + (b.x - a.x) * p.t;
          pkPos[k * 3 + 1] = a.y + (b.y - a.y) * p.t;
          pkPos[k * 3 + 2] = a.z + (b.z - a.z) * p.t;
        });
        pk.attributes.position.needsUpdate = true;
        r.render(scene, cam);
      };
      const loop = () => {
        cancelAnimationFrame(raf);
        if (reduce) { frame(); return; }
        const tick = () => { if (!active || !visible) return; frame(); raf = requestAnimationFrame(tick); };
        tick();
      };
      const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) loop(); });
      io.observe(cv);
      const onVis = () => { active = !document.hidden; if (active) loop(); };
      document.addEventListener("visibilitychange", onVis);

      frame();
      setReady(true);
      loop();

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        removeEventListener("pointermove", onMove);
        r.dispose();
      };
    })();

    return () => { disposed = true; cleanup(); };
  }, []);

  return <canvas ref={canvas} className={`hero3d${ready ? " ready" : ""}`} aria-hidden="true" />;
}

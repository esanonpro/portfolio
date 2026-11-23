"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [msg, setMsg] = useState("");
  const code = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = (m: string) => {
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(""), 2000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      show("Copié");
    } catch {
      const r = document.createRange();
      if (code.current) r.selectNodeContents(code.current);
      const s = getSelection();
      s?.removeAllRanges();
      s?.addRange(r);
      show("Sélectionné");
    }
  };

  return (
    <div className="mail">
      <code ref={code}>{email}</code>
      <button className="btn btn-indigo" type="button" onClick={copy}>Copier l&apos;adresse</button>
      <span className={`copy-state${msg ? " on" : ""}`} role="status" aria-live="polite">{msg}</span>
    </div>
  );
}

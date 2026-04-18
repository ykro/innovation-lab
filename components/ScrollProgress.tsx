"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const next = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setProgress(next);
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-navy origin-left"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}

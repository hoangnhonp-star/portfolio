"use client";

import { useState, useEffect } from "react";

type Ripple = { id: number; x: number; y: number };

/**
 * Decorative background layer cho hero section.
 * Đặt bên trong <section> hero, trước HeroMotion.
 * Tất cả elements đều aria-hidden, pointer-events-none.
 */
export function HeroBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Mouse glow — theo cursor toàn trang
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY, opacity: 1 });
    };
    const onLeave = () => setMousePos((p) => ({ ...p, opacity: 0 }));
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Click ripple — dot nhỏ xuất hiện khi click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const r: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((p) => [...p, r]);
      setTimeout(() => setRipples((p) => p.filter((x) => x.id !== r.id)), 1000);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {/* ── SVG: dashed accent lines tự vẽ vào + intersection dots ── */}
      <svg
        data-id="hero-bg-svg"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal lines */}
        <line x1="0" y1="15%" x2="100%" y2="15%" className="hero-grid-line" style={{ animationDelay: "0.4s" }} />
        <line x1="0" y1="85%" x2="100%" y2="85%" className="hero-grid-line" style={{ animationDelay: "0.9s" }} />
        {/* Vertical lines */}
        <line x1="15%" y1="0" x2="15%" y2="100%" className="hero-grid-line" style={{ animationDelay: "1.3s" }} />
        <line x1="85%" y1="0" x2="85%" y2="100%" className="hero-grid-line" style={{ animationDelay: "1.7s" }} />
        {/* Intersection accent dots */}
        <circle cx="15%" cy="15%" r="2.5" className="hero-detail-dot" style={{ animationDelay: "2.2s" }} />
        <circle cx="85%" cy="15%" r="2.5" className="hero-detail-dot" style={{ animationDelay: "2.4s" }} />
        <circle cx="15%" cy="85%" r="2.5" className="hero-detail-dot" style={{ animationDelay: "2.6s" }} />
        <circle cx="85%" cy="85%" r="2.5" className="hero-detail-dot" style={{ animationDelay: "2.8s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="hero-detail-dot" style={{ animationDelay: "3.2s" }} />
      </svg>

      {/* ── Corner brackets — 4 góc accent ── */}
      <div
        data-id="hero-corner-tl"
        aria-hidden
        className="hero-corner absolute left-5 top-5 border-l border-t sm:left-8 sm:top-8"
        style={{ animationDelay: "3.5s", borderColor: "color-mix(in srgb, var(--c-accent) 28%, transparent)" }}
      />
      <div
        data-id="hero-corner-tr"
        aria-hidden
        className="hero-corner absolute right-5 top-5 border-r border-t sm:right-8 sm:top-8"
        style={{ animationDelay: "3.7s", borderColor: "color-mix(in srgb, var(--c-accent) 28%, transparent)" }}
      />
      <div
        data-id="hero-corner-bl"
        aria-hidden
        className="hero-corner absolute bottom-5 left-5 border-b border-l sm:bottom-8 sm:left-8"
        style={{ animationDelay: "3.9s", borderColor: "color-mix(in srgb, var(--c-accent) 28%, transparent)" }}
      />
      <div
        data-id="hero-corner-br"
        aria-hidden
        className="hero-corner absolute bottom-5 right-5 border-b border-r sm:bottom-8 sm:right-8"
        style={{ animationDelay: "4.1s", borderColor: "color-mix(in srgb, var(--c-accent) 28%, transparent)" }}
      />

      {/* ── Floating micro-dots ── */}
      <div aria-hidden className="hero-float-dot" style={{ top: "25%", left: "12%", animationDelay: "0.5s" }} />
      <div aria-hidden className="hero-float-dot" style={{ top: "60%", left: "88%", animationDelay: "1.2s" }} />
      <div aria-hidden className="hero-float-dot" style={{ top: "38%", left: "7%", animationDelay: "1.8s" }} />
      <div aria-hidden className="hero-float-dot" style={{ top: "72%", left: "93%", animationDelay: "2.5s" }} />

      {/* ── Mouse accent glow — fixed, theo viewport ── */}
      <div
        data-id="hero-mouse-glow"
        aria-hidden
        className="hero-mouse-glow pointer-events-none fixed"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          opacity: mousePos.opacity,
        }}
      />

      {/* ── Click ripples ── */}
      {ripples.map((r) => (
        <div
          key={r.id}
          aria-hidden
          className="hero-click-ripple pointer-events-none fixed"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );
}

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Icon } from "@/components/Icon/Icon";
import { galleryItems } from "@/data/gallery";

/** Parse "3/4" → {width, height} (scale cạnh dài ~1600) cho next/image biết tỉ lệ, chống layout shift. */
function ratioToDims(ratio: string): { width: number; height: number } {
  const [w, h] = ratio.split("/").map(Number);
  if (!w || !h) return { width: 1600, height: 1600 };
  const longest = Math.max(w, h);
  return { width: Math.round((w / longest) * 1600), height: Math.round((h / longest) * 1600) };
}

/**
 * Visual Archive — masonry gallery + CSS lightbox.
 * Adapt từ shared-element-gallery (21st.dev): bỏ framer-motion + lucide,
 * dùng thuần CSS animation + token + Icon. Giữ: masonry, click phóng to,
 * Esc đóng, scroll-lock, backdrop blur. Thêm: prev/next phím ← →.
 */
export function Gallery() {
  const t = useT();
  const [selected, setSelected] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll-reveal — tiles fade + rise khi vào viewport, stagger nhẹ (mức A)
  useEffect(() => {
    const tiles = gridRef.current?.querySelectorAll<HTMLElement>("[data-gallery-tile]");
    if (!tiles?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gallery-tile-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    tiles.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length)),
    [],
  );
  const next = useCallback(
    () => setSelected((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [],
  );

  // Keyboard: Esc đóng, ← → điều hướng
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, prev, next]);

  // Lock body scroll khi lightbox mở
  useEffect(() => {
    if (selected === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  const active = selected === null ? null : galleryItems[selected];

  return (
    <section data-id="home-gallery" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      {/* Heading */}
      <div data-id="home-gallery-heading" className="mb-12 flex flex-col gap-3">
        <span
          data-id="home-gallery-eyebrow"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          {t.home.gallery.eyebrow}
        </span>
        <h2
          data-id="home-gallery-title"
          className="text-balance text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl"
        >
          {t.home.gallery.title}
        </h2>
        <p
          data-id="home-gallery-subtitle"
          className="max-w-2xl text-base leading-relaxed text-text-secondary"
        >
          {t.home.gallery.subtitle}
        </p>
      </div>

      {/* Masonry grid */}
      <div
        data-id="home-gallery-grid"
        ref={gridRef}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        {galleryItems.map((item, i) => (
          <button
            key={item.id}
            type="button"
            data-id={`home-gallery-item-${item.id}`}
            data-gallery-tile
            onClick={() => setSelected(i)}
            style={{ transitionDelay: `${Math.min(i, 7) * 0.06}s` }}
            className="gallery-tile group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-border-light bg-bg-surface"
          >
            {/* Ảnh hoặc placeholder */}
            {item.src ? (
              <Image
                src={item.src}
                alt={item.title}
                width={ratioToDims(item.ratio).width}
                height={ratioToDims(item.ratio).height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            ) : (
              <div
                style={{ aspectRatio: item.ratio }}
                className="flex w-full flex-col items-center justify-center gap-2 bg-bg-inset text-text-muted transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              >
                <Icon name="image" size={26} />
                <span className="px-3 text-center text-[11px] font-medium tracking-wide">
                  {item.title}
                </span>
              </div>
            )}

            {/* Hover overlay — gradient + caption */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                {item.category}
              </span>
              <span className="mt-0.5 text-sm font-medium leading-snug text-white">
                {item.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          data-id="home-gallery-lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          {/* Backdrop */}
          <div
            data-id="home-gallery-lightbox-backdrop"
            className="lightbox-backdrop absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={close}
          />

          {/* Content — ảnh dùng tối đa chiều cao (86vh), giới hạn cả 2 chiều để không tràn */}
          <div
            data-id="home-gallery-lightbox-content"
            className="lightbox-content relative z-10 flex items-center justify-center"
          >
            {active.src ? (
              <Image
                src={active.src}
                alt={active.title}
                width={ratioToDims(active.ratio).width}
                height={ratioToDims(active.ratio).height}
                sizes="90vw"
                className="h-auto max-h-[86vh] w-auto max-w-[92vw] rounded-lg object-contain shadow-2xl"
              />
            ) : (
              <div
                style={{ aspectRatio: active.ratio }}
                className="flex max-h-[86vh] w-[min(86vw,560px)] flex-col items-center justify-center gap-3 rounded-lg border border-border-light bg-bg-surface text-text-muted shadow-2xl"
              >
                <Icon name="image" size={40} />
                <span className="px-6 text-center text-sm font-medium tracking-wide">
                  {active.title}
                </span>
              </div>
            )}
          </div>

          {/* Caption + counter — chip nổi ở đáy, không chiếm chiều cao của ảnh */}
          <div
            data-id="home-gallery-lightbox-caption"
            className="absolute bottom-5 left-1/2 z-20 flex max-w-[88vw] -translate-x-1/2 items-center gap-3 rounded-full bg-black/45 px-4 py-2 backdrop-blur-md"
          >
            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {active.category}
            </span>
            <span className="truncate text-sm text-white/85">{active.title}</span>
            <span className="shrink-0 text-xs text-white/45">
              {(selected ?? 0) + 1}/{galleryItems.length}
            </span>
          </div>

          {/* Prev */}
          <button
            type="button"
            data-id="home-gallery-lightbox-prev"
            onClick={prev}
            aria-label="Ảnh trước"
            className="absolute left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-6"
          >
            <Icon name="chevron-left" size={20} />
          </button>

          {/* Next */}
          <button
            type="button"
            data-id="home-gallery-lightbox-next"
            onClick={next}
            aria-label="Ảnh sau"
            className="absolute right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6"
          >
            <Icon name="chevron-right" size={20} />
          </button>

          {/* Close */}
          <button
            type="button"
            data-id="home-gallery-lightbox-close"
            onClick={close}
            aria-label="Đóng"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <Icon name="close" size={20} />
          </button>
        </div>
      ) : null}
    </section>
  );
}

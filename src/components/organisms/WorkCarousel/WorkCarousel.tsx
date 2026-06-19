"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { projects } from "@/data/projects";

// ─── WorkCard ─────────────────────────────────────────────────────────────────

type WorkCardProps = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  tags: string[];
  href: string;
  hero?: string;
  imagePlaceholder: string;
};

function WorkCard({
  slug,
  index,
  title,
  tagline,
  tags,
  href,
  hero,
  imagePlaceholder,
}: WorkCardProps) {
  return (
    <Link
      data-id={`work-carousel-card-${slug}`}
      href={href}
      className="group relative block h-[380px] w-[280px] shrink-0 overflow-hidden rounded-2xl bg-bg-surface sm:w-[320px]"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* ── Image area — shrinks upward on hover ── */}
      <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bottom-[48%]">
        {hero ? (
          <img
            src={hero}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div
            data-id={`work-carousel-card-${slug}-placeholder`}
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-bg-inset"
          >
            <Icon name="image" size={28} />
            <span className="text-xs text-text-muted">{imagePlaceholder}</span>
          </div>
        )}
        {/* Bottom gradient — visible on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      {/* ── Index badge ── */}
      <span
        data-id={`work-carousel-card-${slug}-index`}
        className="absolute left-4 top-4 text-[11px] font-semibold tracking-widest text-white/50"
      >
        {index}
      </span>

      {/* ── Hover text panel — slides up from bottom ── */}
      <div
        data-id={`work-carousel-card-${slug}-info`}
        className="absolute inset-x-0 bottom-0 flex h-[48%] translate-y-full flex-col justify-center gap-2 bg-bg-surface/95 px-5 opacity-0 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100"
      >
        {/* Tags */}
        <div
          data-id={`work-carousel-card-${slug}-tags`}
          className="flex flex-wrap gap-1"
        >
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-bg-inset px-2 py-0.5 text-[10px] font-medium text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          data-id={`work-carousel-card-${slug}-title`}
          className="text-base font-semibold leading-snug text-text-primary"
        >
          {title}
        </h3>

        <p
          data-id={`work-carousel-card-${slug}-tagline`}
          className="line-clamp-2 text-sm leading-relaxed text-text-secondary"
        >
          {tagline}
        </p>

        {/* Arrow — rotates on card hover */}
        <div
          data-id={`work-carousel-card-${slug}-arrow`}
          aria-hidden
          className="absolute bottom-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-light text-text-secondary transition-all duration-300 group-hover:-rotate-45 group-hover:border-accent group-hover:text-accent"
        >
          <Icon name="arrow-right" size={14} />
        </div>
      </div>
    </Link>
  );
}

// ─── WorkCarousel ─────────────────────────────────────────────────────────────

export function WorkCarousel() {
  const t = useT();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const handleNav = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-id^='work-carousel-card-']");
    const step = (card?.offsetWidth ?? 280) + 24; // card width + gap
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section data-id="home-work" id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">

        {/* ── Header row ── */}
        <div
          data-id="home-work-header"
          className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"
        >
          <div data-id="home-work-heading" className="max-w-2xl">
            <span
              data-id="home-work-heading-eyebrow"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            >
              {t.home.work.eyebrow}
            </span>
            <h2
              data-id="home-work-heading-title"
              className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl"
            >
              {t.home.work.title}
            </h2>
            <p
              data-id="home-work-heading-subtitle"
              className="mt-3 max-w-2xl text-base leading-relaxed text-text-secondary"
            >
              {t.home.work.subtitle}
            </p>
          </div>

          {/* Prev / Next buttons */}
          <div
            data-id="home-work-nav"
            className="flex shrink-0 gap-2 self-end sm:self-start sm:pt-2"
          >
            <button
              data-id="home-work-nav-prev"
              type="button"
              aria-label="Previous project"
              disabled={!canPrev}
              onClick={() => handleNav("prev")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-text-secondary transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
            >
              <Icon name="chevron-left" size={16} />
            </button>
            <button
              data-id="home-work-nav-next"
              type="button"
              aria-label="Next project"
              disabled={!canNext}
              onClick={() => handleNav("next")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-text-secondary transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
            >
              <Icon name="chevron-right" size={16} />
            </button>
          </div>
        </div>

        {/* ── Carousel track ── */}
        <div
          data-id="home-work-track"
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((p) => {
            const pt = t.projects[p.dictKey];
            return (
              <WorkCard
                key={p.slug}
                slug={p.slug}
                index={p.index}
                title={pt.title}
                tagline={pt.tagline}
                tags={p.tags}
                href={`/project/${p.slug}`}
                hero={p.hero}
                imagePlaceholder={t.image.placeholder}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { CTAButton } from "@/components/atoms/CTAButton/CTAButton";
import { Icon } from "@/components/Icon/Icon";
import { HeroMotion, HeroMotionItem } from "@/components/atoms/HeroMotion/HeroMotion";
import { HeroBackground } from "@/components/atoms/HeroBackground/HeroBackground";
import { ShimmerText } from "@/components/atoms/ShimmerText/ShimmerText";
import { WorkCarousel } from "@/components/organisms/WorkCarousel/WorkCarousel";
import { TrustSection } from "@/components/organisms/TrustSection/TrustSection";
import { Gallery } from "@/components/organisms/Gallery/Gallery";
import { ServicesTabs } from "@/components/organisms/ServicesTabs/ServicesTabs";

export default function HomePage() {
  const t = useT();

  return (
    <>
      {/* Hero */}
      <section data-id="home-hero" className="relative overflow-hidden border-b border-border-light">
        {/* Nền lưới grid — theme-aware qua token --color-border-light, fade dần ra mép */}
        {/* Decorative background effects */}
        <HeroBackground />

        <div
          data-id="home-hero-grid"
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-light) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, #000 30%, transparent 80%)",
          }}
        />

        <HeroMotion className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
          <HeroMotionItem>
            <span
              data-id="home-hero-eyebrow"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            >
              {t.home.hero.eyebrow}
            </span>
          </HeroMotionItem>

          <HeroMotionItem className="mt-4">
            <h1
              data-id="home-hero-title"
              className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
            >
              <ShimmerText>{t.home.hero.title}</ShimmerText>
            </h1>
          </HeroMotionItem>

          <HeroMotionItem className="mt-6">
            <p
              data-id="home-hero-subtitle"
              className="max-w-2xl text-lg leading-relaxed text-text-secondary"
            >
              {t.home.hero.subtitle}
            </p>
          </HeroMotionItem>

          <HeroMotionItem className="mt-8">
            <div
              data-id="home-hero-actions"
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <CTAButton href="/#work" variant="glow" icon="sparkles" dataId="home-hero-cta-primary">
                {t.home.hero.ctaPrimary}
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" dataId="home-hero-cta-secondary">
                {t.home.hero.ctaSecondary}
              </CTAButton>
            </div>
          </HeroMotionItem>
        </HeroMotion>
      </section>

      {/* Selected work */}
      <WorkCarousel />

      {/* Trust strip */}
      <TrustSection />

      {/* About teaser */}
      <section data-id="home-about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
          <span
            data-id="home-about-eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            {t.home.about.eyebrow}
          </span>
          <div data-id="home-about-body" className="flex flex-col gap-5">
            <p className="text-balance text-xl font-medium leading-relaxed text-text-primary sm:text-2xl">
              {t.home.about.text}
            </p>
            <Link
              data-id="home-about-cta"
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-ink"
            >
              {t.home.about.cta}
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual archive gallery */}
      <Gallery />

      {/* Services — tabbed */}
      <ServicesTabs />

      {/* Contact CTA — two paths */}
      {/* TODO: tạm ẩn — sau này repurpose thành link dẫn ra bảng giá freelance */}
      {/* <section data-id="home-contact" className="bg-bg-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8">
          <h2
            data-id="home-contact-title"
            className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-on-dark sm:text-3xl"
          >
            {t.home.contact.title}
          </h2>
          <div data-id="home-contact-paths" className="flex flex-wrap gap-3">
            <Link
              data-id="home-contact-teams"
              href="/contact#teams"
              className="btn-neon inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-bg-inset"
            >
              {t.home.contact.ctaTeams}
              <Icon name="arrow-right" size={15} />
            </Link>
            <Link
              data-id="home-contact-projects"
              href="/contact#projects"
              className="btn-neon inline-flex items-center gap-2 rounded-full border border-on-dark-muted/40 px-5 py-3 text-sm font-medium text-on-dark transition-colors hover:border-on-dark"
            >
              {t.home.contact.ctaProjects}
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}

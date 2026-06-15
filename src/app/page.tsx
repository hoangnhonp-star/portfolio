"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { CTAButton } from "@/components/atoms/CTAButton/CTAButton";
import { SectionHeading } from "@/components/atoms/SectionHeading/SectionHeading";
import { ProjectCard } from "@/components/molecules/ProjectCard/ProjectCard";
import { Icon } from "@/components/Icon/Icon";
import { projects } from "@/data/projects";

const brands = ["Thegioididong", "Điện máy XANH", "TopZone", "Điện Quang", "Diamond Beauty"];

export default function HomePage() {
  const t = useT();

  return (
    <>
      {/* Hero */}
      <section data-id="home-hero" className="border-b border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <span
            data-id="home-hero-eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            {t.home.hero.eyebrow}
          </span>
          <h1
            data-id="home-hero-title"
            className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
          >
            {t.home.hero.title}
          </h1>
          <p
            data-id="home-hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            {t.home.hero.subtitle}
          </p>
          <div data-id="home-hero-actions" className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/#work" variant="primary" icon="arrow-right" dataId="home-hero-cta-primary">
              {t.home.hero.ctaPrimary}
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" dataId="home-hero-cta-secondary">
              {t.home.hero.ctaSecondary}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section data-id="home-work" id="work" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeading
            eyebrow={t.home.work.eyebrow}
            title={t.home.work.title}
            subtitle={t.home.work.subtitle}
            dataId="home-work-heading"
          />
          <div data-id="home-work-grid" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              const pt = t.projects[p.dictKey];
              return (
                <ProjectCard
                  key={p.slug}
                  href={`/project/${p.slug}`}
                  index={p.index}
                  title={pt.title}
                  tagline={pt.tagline}
                  tags={p.tags}
                  hero={p.hero}
                  imagePlaceholder={t.image.placeholder}
                  viewLabel={t.home.work.viewCase}
                  dataId={`home-work-card-${p.slug}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section data-id="home-trust" className="border-y border-border-light bg-bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p
            data-id="home-trust-label"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted"
          >
            {t.home.trust.label}
          </p>
          <ul data-id="home-trust-list" className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            {brands.map((brand) => (
              <li
                key={brand}
                data-id={`home-trust-${brand.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-base font-medium text-text-secondary"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

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

      {/* Contact CTA — two paths */}
      <section data-id="home-contact" className="bg-bg-dark">
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
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-bg-inset"
            >
              {t.home.contact.ctaTeams}
              <Icon name="arrow-right" size={15} />
            </Link>
            <Link
              data-id="home-contact-projects"
              href="/contact#projects"
              className="inline-flex items-center gap-2 rounded-full border border-on-dark-muted/40 px-5 py-3 text-sm font-medium text-on-dark transition-colors hover:border-on-dark"
            >
              {t.home.contact.ctaProjects}
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

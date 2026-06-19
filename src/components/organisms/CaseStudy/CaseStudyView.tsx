"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Icon } from "@/components/Icon/Icon";
import { Tag } from "@/components/atoms/Tag/Tag";
import { ImageSlot } from "@/components/molecules/ImageSlot/ImageSlot";
import { ContactCTA } from "@/components/organisms/ContactCTA/ContactCTA";
import { getProject, getAdjacentProject } from "@/data/projects";

/** Block tiêu đề + nội dung dùng chung cho các phần case study */
function Block({
  title,
  children,
  dataId,
}: {
  title: string;
  children: React.ReactNode;
  dataId: string;
}) {
  return (
    <div data-id={dataId} className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-10">
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{title}</h2>
      <div className="max-w-2xl text-lg leading-relaxed text-text-secondary">{children}</div>
    </div>
  );
}

export function CaseStudyView({ slug }: { slug: string }) {
  const t = useT();
  const project = getProject(slug)!;
  const pt = t.projects[project.dictKey];
  const next = getAdjacentProject(slug);
  const nextTitle = t.projects[next.dictKey].title;

  return (
    <article data-id="project-detail">
      {/* Snapshot / hero */}
      <header data-id="project-snapshot" className="border-b border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <Link
            data-id="project-back"
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary"
          >
            <Icon name="arrow-left" size={15} />
            {t.caseStudy.allProjects}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold tracking-[0.18em] text-text-muted">
              {project.index}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag} dataId={`project-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <h1
            data-id="project-title"
            className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl"
          >
            {pt.title}
          </h1>
          <p data-id="project-tagline" className="mt-4 max-w-2xl text-xl text-text-secondary">
            {pt.tagline}
          </p>

          <dl data-id="project-meta" className="mt-8 flex flex-col gap-1.5 text-sm text-text-secondary">
            <dd data-id="project-meta-role">{pt.metaRole}</dd>
            <dd data-id="project-meta-type">{pt.metaType}</dd>
            <dd data-id="project-meta-brands">{pt.metaBrands}</dd>
          </dl>
        </div>
      </header>

      {/* Hero image */}
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8">
        <ImageSlot
          src={project.hero}
          alt={pt.title}
          ratio="21/9"
          placeholderLabel={t.image.placeholder}
          rounded="lg"
          dataId="project-hero-image"
        />
      </div>

      {/* Body */}
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-16 sm:px-8 sm:py-20">
        <p data-id="project-short" className="max-w-3xl text-xl leading-relaxed text-text-primary">
          {pt.short}
        </p>

        <Block title={pt.context.title} dataId="project-context">
          {pt.context.text}
        </Block>

        <Block title={pt.myrole.title} dataId="project-myrole">
          {pt.myrole.text}
        </Block>

        {/* Approach — p1 có 2 chế độ, còn lại text thường */}
        <div data-id="project-approach" className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {pt.approach.title}
          </h2>
          <div className="max-w-2xl">
            {"effortText" in pt.approach ? (
              <div className="grid gap-5 sm:grid-cols-2">
                <div
                  data-id="project-approach-effort"
                  className="flex flex-col gap-2 rounded-lg border border-border-light bg-bg-surface p-5"
                >
                  <h3 className="text-base font-semibold text-text-primary">
                    {pt.approach.effortTitle}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {pt.approach.effortText}
                  </p>
                </div>
                <div
                  data-id="project-approach-control"
                  className="flex flex-col gap-2 rounded-lg border border-border-light bg-bg-surface p-5"
                >
                  <h3 className="text-base font-semibold text-text-primary">
                    {pt.approach.controlTitle}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {pt.approach.controlText}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-lg leading-relaxed text-text-secondary">{pt.approach.text}</p>
            )}
          </div>
        </div>

        <ImageSlot
          src={project.gallery[0]}
          ratio="16/9"
          placeholderLabel={t.image.placeholder}
          rounded="lg"
          dataId="project-image-1"
        />

        <Block title={pt.solution.title} dataId="project-solution">
          {pt.solution.text}
        </Block>

        <ImageSlot
          src={project.gallery[1]}
          ratio="16/9"
          placeholderLabel={t.image.placeholder}
          rounded="lg"
          dataId="project-image-2"
        />

        <Block title={pt.result.title} dataId="project-result">
          {pt.result.text}
        </Block>
      </div>

      {/* Next project */}
      <div className="border-t border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <Link
            data-id="project-next"
            href={`/project/${next.slug}`}
            className="group flex items-center justify-between gap-4"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                {t.caseStudy.next}
              </span>
              <span className="text-xl font-semibold tracking-tight text-text-primary group-hover:text-accent">
                {nextTitle}
              </span>
            </div>
            <Icon
              name="arrow-right"
              size={22}
              className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
            />
          </Link>
        </div>
      </div>

      <ContactCTA />
    </article>
  );
}

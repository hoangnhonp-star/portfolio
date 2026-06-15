"use client";

import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Icon } from "@/components/Icon/Icon";
import { SectionHeading } from "@/components/atoms/SectionHeading/SectionHeading";
import { site } from "@/data/site";

export default function ContactPage() {
  const t = useT();

  return (
    <section data-id="contact" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} dataId="contact-heading" />

      <div data-id="contact-paths" className="mt-10 grid gap-5 md:grid-cols-2">
        {/* For teams */}
        <div
          data-id="contact-path-teams"
          id="teams"
          className="flex scroll-mt-24 flex-col gap-3 rounded-xl border border-border-light p-6"
        >
          <h2 className="text-lg font-semibold text-text-primary">{t.contact.teams.title}</h2>
          <p className="text-base leading-relaxed text-text-secondary">{t.contact.teams.text}</p>
          <a
            data-id="contact-teams-cv"
            href={site.cvFile}
            download
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-ink"
          >
            {t.contact.teams.cta}
            <Icon name="download" size={15} />
          </a>
        </div>

        {/* For projects */}
        <div
          data-id="contact-path-projects"
          id="projects"
          className="flex scroll-mt-24 flex-col gap-3 rounded-xl border border-border-light p-6"
        >
          <h2 className="text-lg font-semibold text-text-primary">{t.contact.projects.title}</h2>
          <p className="text-base leading-relaxed text-text-secondary">{t.contact.projects.text}</p>
          <a
            data-id="contact-projects-email"
            href={`mailto:${site.email}`}
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-ink"
          >
            {t.contact.projects.cta}
            <Icon name="arrow-right" size={15} />
          </a>
        </div>
      </div>

      <div data-id="contact-direct" className="mt-10 border-t border-border-light pt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
          {t.contact.directLabel}
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          <a
            data-id="contact-direct-email"
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-base text-text-primary hover:text-accent"
          >
            <Icon name="mail" size={18} />
            {site.email}
          </a>
          <a
            data-id="contact-direct-phone"
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-base text-text-primary hover:text-accent"
          >
            <Icon name="phone" size={18} />
            {site.phone}
          </a>
          <a
            data-id="contact-direct-behance"
            href={site.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base text-text-primary hover:text-accent"
          >
            <Icon name="behance" size={18} />
            {site.behanceLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

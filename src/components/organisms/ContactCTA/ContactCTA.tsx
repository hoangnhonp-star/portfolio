"use client";

import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { CTAButton } from "@/components/atoms/CTAButton/CTAButton";
import { site } from "@/data/site";

export function ContactCTA() {
  const t = useT();

  return (
    <section data-id="contact-cta" className="bg-bg-dark">
      <div
        data-id="contact-cta-inner"
        className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between"
      >
        <div data-id="contact-cta-text" className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-on-dark sm:text-3xl">
            {t.caseStudy.ctaTitle}
          </h2>
          <p className="max-w-lg text-base text-on-dark-muted">{t.caseStudy.ctaText}</p>
        </div>
        <div data-id="contact-cta-actions" className="flex flex-wrap gap-3">
          <CTAButton href="/contact" variant="primary" icon="arrow-right" dataId="contact-cta-contact">
            {t.caseStudy.ctaButton}
          </CTAButton>
          <a
            data-id="contact-cta-email"
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-on-dark-muted/40 px-5 py-3 text-sm font-medium text-on-dark transition-colors hover:border-on-dark"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}

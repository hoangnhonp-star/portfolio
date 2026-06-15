"use client";

import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { CTAButton } from "@/components/atoms/CTAButton/CTAButton";
import { site } from "@/data/site";

export default function ResumePage() {
  const t = useT();

  const experience = [t.resume.exp.mwg, t.resume.exp.diamond, t.resume.exp.dienquang, t.resume.exp.upmedia];

  return (
    <section data-id="resume" className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <div data-id="resume-header" className="flex flex-col gap-4 border-b border-border-light pb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {t.resume.title}
        </h1>
        <p className="text-base text-text-secondary">{t.resume.subtitle}</p>
        <div>
          <CTAButton href={site.cvFile} variant="primary" icon="download" download dataId="resume-cv-btn">
            {t.resume.cta}
          </CTAButton>
        </div>
      </div>

      <div data-id="resume-experience" className="border-b border-border-light py-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.resume.experienceTitle}
        </h2>
        <ul className="mt-6 flex flex-col gap-8">
          {experience.map((exp) => (
            <li
              data-id={`resume-exp-${exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
              key={exp.company}
              className="grid gap-2 md:grid-cols-[160px_1fr] md:gap-8"
            >
              <span className="text-sm text-text-muted">{exp.period}</span>
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-semibold text-text-primary">{exp.company}</span>
                <span className="text-sm text-text-secondary">{exp.role}</span>
                <p className="mt-1 text-base leading-relaxed text-text-secondary">{exp.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div data-id="resume-meta" className="grid gap-8 py-10 sm:grid-cols-3">
        <div data-id="resume-skills">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.resume.skillsTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">{t.resume.skillsList}</p>
        </div>
        <div data-id="resume-tools">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.resume.toolsTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">{t.resume.toolsList}</p>
        </div>
        <div data-id="resume-education">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.resume.educationTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">{t.resume.educationText}</p>
        </div>
      </div>
    </section>
  );
}

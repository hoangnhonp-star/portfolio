"use client";

import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { SectionHeading } from "@/components/atoms/SectionHeading/SectionHeading";
import { CTAButton } from "@/components/atoms/CTAButton/CTAButton";

export default function ServicesPage() {
  const t = useT();

  const items = [
    { key: "campaign", data: t.services.items.campaign },
    { key: "ecommerce", data: t.services.items.ecommerce },
    { key: "landing", data: t.services.items.landing },
    { key: "system", data: t.services.items.system },
  ] as const;

  const steps = [
    t.services.process.step1,
    t.services.process.step2,
    t.services.process.step3,
    t.services.process.step4,
  ];

  return (
    <>
      <section data-id="services-header" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          title={t.services.title}
          subtitle={t.services.subtitle}
          dataId="services-heading"
        />

        <div data-id="services-list" className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div
              data-id={`services-item-${item.key}`}
              key={item.key}
              className="flex flex-col gap-2 rounded-xl border border-border-light p-6"
            >
              <h2 className="text-lg font-semibold text-text-primary">{item.data.title}</h2>
              <p className="text-base leading-relaxed text-text-secondary">{item.data.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-id="services-process" className="border-t border-border-light bg-bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.services.process.title}
          </h2>
          <ol data-id="services-steps" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                data-id={`services-step-${i + 1}`}
                key={i}
                className="flex flex-col gap-3 rounded-lg bg-bg-page p-5"
              >
                <span className="text-2xl font-semibold text-accent">{i + 1}</span>
                <span className="text-base leading-relaxed text-text-secondary">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <CTAButton href="/contact#projects" variant="primary" icon="arrow-right" dataId="services-cta">
              {t.services.cta}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

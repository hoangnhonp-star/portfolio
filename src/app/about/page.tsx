"use client";

import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { SectionHeading } from "@/components/atoms/SectionHeading/SectionHeading";
import { ImageSlot } from "@/components/molecules/ImageSlot/ImageSlot";
import { ContactCTA } from "@/components/organisms/ContactCTA/ContactCTA";

export default function AboutPage() {
  const t = useT();

  const cards = [
    { key: "howiwork", data: t.about.howiwork },
    { key: "forteams", data: t.about.forteams },
    { key: "forclients", data: t.about.forclients },
  ] as const;

  return (
    <>
      <section data-id="about-intro" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading title={t.about.title} dataId="about-heading" />
        <div className="mt-8 grid gap-10 md:grid-cols-[260px_1fr] md:items-start">
          <ImageSlot
            ratio="3/4"
            placeholderLabel={t.image.placeholder}
            rounded="lg"
            dataId="about-portrait"
          />
          <p data-id="about-intro-text" className="max-w-2xl text-xl leading-relaxed text-text-primary">
            {t.about.intro}
          </p>
        </div>
      </section>

      <section
        data-id="about-detail"
        className="border-t border-border-light bg-bg-surface"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-3 sm:px-8">
          {cards.map((card) => (
            <div data-id={`about-${card.key}`} key={card.key} className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-text-primary">{card.data.title}</h2>
              <p className="text-base leading-relaxed text-text-secondary">{card.data.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-id="about-brands"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.about.brands.title}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">{t.about.brands.text}</p>
      </section>

      <ContactCTA />
    </>
  );
}

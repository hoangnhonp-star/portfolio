"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Icon } from "@/components/Icon/Icon";
import { ImageSlot } from "@/components/molecules/ImageSlot/ImageSlot";
import { CTAButton } from "@/components/atoms/CTAButton/CTAButton";

/**
 * Tabbed services section (adapt từ shadcnblocks feature108).
 * Bỏ radix-tabs/lucide/shadcn → tabs bằng React state, <Icon>, token, CTAButton.
 * Content lấy từ t.services.items (đã song ngữ); heading/labels từ t.home.services.
 * Thêm dịch vụ mới (vd Video) = thêm 1 entry vào mảng `tabs` + content trong dictionary.
 */

type ServiceKey = "campaign" | "ecommerce" | "landing" | "system";

const tabs: { key: ServiceKey; icon: string; img?: string }[] = [
  { key: "campaign", icon: "sparkles" },
  { key: "ecommerce", icon: "shopping-bag" },
  { key: "landing", icon: "layout" },
  { key: "system", icon: "layers" },
];

export function ServicesTabs() {
  const t = useT();
  const [active, setActive] = useState<ServiceKey>("campaign");

  const activeItem = t.services.items[active];

  return (
    <section data-id="home-services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      {/* Heading */}
      <div data-id="home-services-heading" className="flex flex-col items-center gap-3 text-center">
        <span
          data-id="home-services-eyebrow"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          {t.home.services.eyebrow}
        </span>
        <h2
          data-id="home-services-title"
          className="max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl"
        >
          {t.home.services.heading}
        </h2>
        <p
          data-id="home-services-subtitle"
          className="max-w-2xl text-base leading-relaxed text-text-secondary"
        >
          {t.home.services.subtitle}
        </p>
      </div>

      {/* Tab pills */}
      <div
        data-id="home-services-tablist"
        role="tablist"
        aria-label={t.home.services.eyebrow}
        className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              data-id={`home-services-tab-${tab.key}`}
              onClick={() => setActive(tab.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-bg-inset text-accent"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <Icon name={tab.icon} size={16} />
              {t.home.services.tabs[tab.key]}
            </button>
          );
        })}
      </div>

      {/* Content card */}
      <div
        data-id="home-services-panel"
        role="tabpanel"
        className="mt-8 grid items-center gap-10 rounded-2xl border border-border-light bg-bg-surface p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14"
      >
        {/* Left: text */}
        <div data-id="home-services-panel-text" className="flex flex-col gap-5">
          <span className="w-fit rounded-full border border-border-light bg-bg-page px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {t.home.services.tabs[active]}
          </span>
          <h3 className="text-balance text-2xl font-semibold leading-tight text-text-primary lg:text-3xl">
            {activeItem.title}
          </h3>
          <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
            {activeItem.text}
          </p>
          <div className="mt-1">
            <CTAButton
              href="/contact#projects"
              variant="primary"
              icon="arrow-right"
              dataId="home-services-cta"
            >
              {t.home.services.cta}
            </CTAButton>
          </div>
        </div>

        {/* Right: image (placeholder chờ ảnh thật vào public/services/) */}
        <div data-id="home-services-panel-image">
          <ImageSlot
            src={tabs.find((x) => x.key === active)?.img}
            alt={activeItem.title}
            ratio="4/3"
            rounded="lg"
            placeholderLabel={t.image.placeholder}
            dataId={`home-services-image-${active}`}
          />
        </div>
      </div>
    </section>
  );
}

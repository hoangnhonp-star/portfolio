"use client";

import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Icon } from "@/components/Icon/Icon";
import { site } from "@/data/site";

export function SiteFooter() {
  const t = useT();

  return (
    <footer data-id="footer" className="border-t border-border-light bg-bg-surface">
      <div
        data-id="footer-inner"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between"
      >
        <div data-id="footer-brand" className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-text-primary">{t.footer.tagline}</span>
          <span className="text-sm text-text-secondary">{t.footer.status}</span>
        </div>

        <div data-id="footer-contact" className="flex flex-col gap-3">
          <a
            data-id="footer-email"
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
          >
            <Icon name="mail" size={16} />
            {site.email}
          </a>
          <a
            data-id="footer-phone"
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
          >
            <Icon name="phone" size={16} />
            {site.phone}
          </a>
          <a
            data-id="footer-behance"
            href={site.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
          >
            <Icon name="behance" size={16} />
            {site.behanceLabel}
          </a>
        </div>
      </div>
      <div
        data-id="footer-bottom"
        className="mx-auto max-w-6xl px-5 pb-8 text-xs text-text-muted sm:px-8"
      >
        {t.footer.rights}
      </div>
    </footer>
  );
}

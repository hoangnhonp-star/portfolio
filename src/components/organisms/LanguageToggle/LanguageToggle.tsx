"use client";

import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export function LanguageToggle({ dataId }: { dataId: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      data-id={dataId}
      className="inline-flex items-center rounded-full border border-border-light p-0.5 text-xs font-semibold"
    >
      <button
        data-id={`${dataId}-vi`}
        type="button"
        onClick={() => setLang("vi")}
        aria-pressed={lang === "vi"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "vi" ? "bg-ink text-white" : "text-text-muted hover:text-text-primary"
        }`}
      >
        VI
      </button>
      <button
        data-id={`${dataId}-en`}
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-ink text-white" : "text-text-muted hover:text-text-primary"
        }`}
      >
        EN
      </button>
    </div>
  );
}

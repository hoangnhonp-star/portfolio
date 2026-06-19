"use client";

import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import { Icon } from "@/components/Icon/Icon";

export function ThemeToggle({ dataId }: { dataId: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      data-id={dataId}
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-text-secondary transition-colors hover:text-text-primary"
    >
      <Icon name={isDark ? "sun" : "moon"} size={17} />
    </button>
  );
}

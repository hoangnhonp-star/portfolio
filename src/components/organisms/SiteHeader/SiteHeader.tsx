"use client";

import { useState } from "react";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Icon } from "@/components/Icon/Icon";
import { LanguageToggle } from "@/components/organisms/LanguageToggle/LanguageToggle";
import { ThemeToggle } from "@/components/organisms/ThemeToggle/ThemeToggle";

const navItems = [
  { key: "work", href: "/#work" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <header
      data-id="header"
      className="sticky top-0 z-50 border-b border-border-light bg-bg-page/85 backdrop-blur"
    >
      <div
        data-id="header-inner"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          data-id="header-logo"
          href="/"
          className="text-sm font-semibold tracking-tight text-text-primary"
          onClick={() => setOpen(false)}
        >
          Phạm Hoàng Nhơn
        </Link>

        {/* Desktop nav */}
        <nav data-id="header-nav" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              data-id={`header-nav-${item.key}`}
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div data-id="header-actions" className="flex items-center gap-3">
          <ThemeToggle dataId="header-theme" />
          <LanguageToggle dataId="header-lang" />
          <button
            data-id="header-menu-btn"
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-text-primary md:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <nav
          data-id="header-mobile-nav"
          className="border-t border-border-light bg-bg-page px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  data-id={`header-mobile-nav-${item.key}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-base text-text-primary hover:bg-bg-surface"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

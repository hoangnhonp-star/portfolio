"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Icon } from "@/components/Icon/Icon";
import { site } from "@/data/site";

export function SiteFooter() {
  const t = useT();
  const innerRef = useRef<HTMLDivElement>(null);

  /* Blur-fade-in on scroll-into-view — once per column */
  useEffect(() => {
    const items = innerRef.current?.querySelectorAll("[data-footer-col]");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-col-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Extract "Graphic Designer for Growth & Commerce" from full tagline string */
  const taglineParts = t.footer.tagline.split(" — ");
  const designerRole = taglineParts[1] ?? t.footer.tagline;

  const navLinks = [
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const contactLinks = [
    {
      label: "LinkedIn",
      href: site.linkedinUrl,
      icon: "linkedin" as const,
      external: true,
    },
    {
      label: "Behance",
      href: site.behanceUrl,
      icon: "behance" as const,
      external: true,
    },
    {
      label: site.email,
      href: `mailto:${site.email}`,
      icon: "mail" as const,
      external: false,
    },
    {
      label: t.nav.cv,
      href: site.cvFile,
      icon: "download" as const,
      external: false,
    },
  ];

  return (
    <footer data-id="footer" className="relative w-full border-t border-border-light">
      {/* Accent glow line on top border */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-px rounded-full blur-sm"
        style={{
          background: "color-mix(in srgb, var(--c-accent) 45%, transparent)",
        }}
      />

      {/* Radial gradient — subtle red tint from top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(35% 140px at 50% 0%, color-mix(in srgb, var(--c-accent) 7%, transparent), transparent)",
        }}
      />

      {/* Main grid */}
      <div
        data-id="footer-inner"
        ref={innerRef}
        className="relative mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 xl:grid-cols-3 xl:gap-16"
      >
        {/* ── Col 1: Brand ── */}
        <div
          data-id="footer-brand"
          data-footer-col
          className="footer-col flex flex-col gap-2"
          style={{ transitionDelay: "0.08s" }}
        >
          <p
            data-id="footer-brand-name"
            className="text-sm font-semibold text-text-primary"
          >
            {site.name}
          </p>
          <p
            data-id="footer-brand-role"
            className="text-sm leading-relaxed text-text-secondary"
          >
            {designerRole}
          </p>
          <p
            data-id="footer-brand-status"
            className="mt-1 text-xs text-accent"
          >
            {t.footer.status}
          </p>
          <p
            data-id="footer-brand-rights"
            className="mt-auto pt-10 text-xs text-text-muted"
          >
            {t.footer.rights}
          </p>
        </div>

        {/* ── Col 2 + 3: Links ── */}
        <div
          data-id="footer-links"
          className="grid grid-cols-2 gap-10 xl:col-span-2"
        >
          {/* Navigate */}
          <div
            data-id="footer-nav"
            data-footer-col
            className="footer-col"
            style={{ transitionDelay: "0.2s" }}
          >
            <h3
              data-id="footer-nav-heading"
              className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted"
            >
              Navigate
            </h3>
            <ul data-id="footer-nav-list" className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    data-id={`footer-nav-${link.href.replace(/[/#]/g, "") || "home"}`}
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div
            data-id="footer-contact"
            data-footer-col
            className="footer-col"
            style={{ transitionDelay: "0.34s" }}
          >
            <h3
              data-id="footer-contact-heading"
              className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted"
            >
              Contact
            </h3>
            <ul data-id="footer-contact-list" className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    data-id={`footer-contact-${link.icon}`}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    <Icon name={link.icon} size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import { useT } from "@/components/LanguageProvider/LanguageProvider";
import { Sparkles } from "@/components/atoms/Sparkles/Sparkles";

/* Brand list — sẽ thay bằng SVG logo khi Nhơn cung cấp */
const brands = [
  "Thegioididong",
  "Điện máy XANH",
  "TopZone",
  "Điện Quang",
  "Diamond Beauty",
];

export function TrustSection() {
  const t = useT();
  const { theme } = useTheme();

  /* Dark: white particles; Light: accent red particles */
  const sparklesColor = theme === "dark" ? "#ffffff" : "#ff0033";

  return (
    <section data-id="home-trust" className="overflow-hidden">
      {/* ── Content ── */}
      <div className="mx-auto max-w-6xl px-5 pb-0 pt-20 sm:px-8">
        {/* Heading */}
        <div data-id="home-trust-heading" className="text-center">
          <h2
            data-id="home-trust-heading-line1"
            className="text-2xl font-semibold text-accent sm:text-3xl"
          >
            {t.home.trust.heading1}
          </h2>
          <p
            data-id="home-trust-heading-line2"
            className="mt-1 text-2xl font-semibold text-text-muted sm:text-3xl"
          >
            {t.home.trust.heading2}
          </p>
        </div>

        {/* Brand grid — placeholder boxes, chờ logo SVG */}
        <div
          data-id="home-trust-grid"
          className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-5"
        >
          {brands.map((brand) => (
            <div
              key={brand}
              data-id={`home-trust-brand-${brand.toLowerCase().replace(/[\s]+/g, "-")}`}
              className="flex items-center justify-center rounded-xl border border-border-light bg-bg-surface/60 px-3 py-5 opacity-60 transition-opacity duration-300 hover:opacity-100"
            >
              <span className="text-center text-[11px] font-semibold leading-tight tracking-wide text-text-secondary">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sparkle zone ── */}
      <div
        data-id="home-trust-sparkle-zone"
        className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        {/* Red radial glow — brand tone */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at bottom center, var(--cta-from), transparent 70%)",
          }}
        />

        {/* Curved horizon divider */}
        <div
          aria-hidden
          className="absolute -left-1/2 top-1/2 z-10 aspect-[1/0.7] w-[200%] rounded-[100%] border-t border-border-light bg-bg-page"
        />

        {/* Sparkle particles */}
        <Sparkles
          color={sparklesColor}
          density={1000}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  );
}

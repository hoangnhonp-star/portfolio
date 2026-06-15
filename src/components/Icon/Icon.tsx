"use client";

import { useEffect, useState } from "react";

// Cache SVG đã fetch để không tải lại
const cache = new Map<string, string>();

type IconProps = {
  name: string;
  /** px — set cả width & height */
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps) {
  const [svg, setSvg] = useState<string>(() => cache.get(name) ?? "");

  useEffect(() => {
    if (cache.has(name)) {
      setSvg(cache.get(name)!);
      return;
    }
    let active = true;
    fetch(`/icons/${name}.svg`)
      .then((r) => (r.ok ? r.text() : ""))
      .then((text) => {
        cache.set(name, text);
        if (active) setSvg(text);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [name]);

  return (
    <span
      data-id={`icon-${name}`}
      aria-hidden="true"
      className={className}
      style={{ display: "inline-flex", width: size, height: size, flex: "none" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

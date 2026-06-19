"use client";

import type { ReactNode } from "react";

type ShimmerTextProps = {
  children: ReactNode;
  className?: string;
  /** Thời gian mỗi lần sweep (giây). Mặc định: 1.5 */
  duration?: number;
  /** Delay trước lần sweep đầu tiên (giây). Mặc định: 1.5 */
  delay?: number;
};

/**
 * Wrap text để tạo hiệu ứng shimmer sweep thuần CSS.
 * Sử dụng background-clip: text + animated background-position.
 * Màu sắc dùng token --c-text-primary + --shimmer-highlight (theme-aware).
 *
 * Đặt bên trong block element (h1, p, ...) — không tự thêm block wrapper.
 * prefers-reduced-motion: tắt animation, hiển thị text bình thường.
 */
export function ShimmerText({
  children,
  className,
  duration = 1.5,
  delay = 1.5,
}: ShimmerTextProps) {
  // Total cycle = sweep (duration) + built-in pause (duration) — 50/50 split trong keyframes
  const cycle = duration * 2;

  return (
    <span
      data-id="shimmer-text"
      className={`shimmer-text${className ? ` ${className}` : ""}`}
      style={{
        animationDuration: `${cycle}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </span>
  );
}

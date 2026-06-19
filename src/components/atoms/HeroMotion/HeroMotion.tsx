import type { ReactNode } from "react";

/**
 * Staggered fade-up cho hero — thuần CSS (xem @keyframes hero-fade-up trong globals.css).
 * Dùng CSS thay vì JS animation library để: (1) chạy ngay khi paint, không bao giờ kẹt
 * ở trạng thái ẩn (tránh hero trống), (2) tự fallback khi prefers-reduced-motion.
 * Stagger điều khiển bằng :nth-child delay trên container .hero-fade-up.
 */

type HeroMotionProps = {
  children: ReactNode;
  className?: string;
};

/** Bọc ngoài cùng của hero content — kích hoạt stagger cho các child trực tiếp */
export function HeroMotion({ children, className }: HeroMotionProps) {
  return (
    <div data-id="hero-motion" className={`hero-fade-up ${className ?? ""}`}>
      {children}
    </div>
  );
}

type HeroMotionItemProps = {
  children: ReactNode;
  className?: string;
};

/** Mỗi element hero bọc bằng cái này để nhận 1 nhịp stagger (là direct child của container) */
export function HeroMotionItem({ children, className }: HeroMotionItemProps) {
  return <div className={className}>{children}</div>;
}

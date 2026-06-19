import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";

type Variant = "primary" | "secondary" | "ghost" | "glow";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: string;
  external?: boolean;
  download?: boolean;
  dataId: string;
};

const base =
  "inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 px-5 py-3 leading-none";

const variants: Record<Variant, string> = {
  primary: "btn-neon bg-accent text-white hover:bg-ink",
  secondary: "btn-neon border border-border-light text-text-primary hover:bg-bg-surface",
  ghost: "text-text-primary hover:text-accent px-0 py-1",
  glow: "btn-neon btn-glow",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon,
  external,
  download,
  dataId,
}: CTAButtonProps) {
  const className = `${base} ${variants[variant]}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <Icon name={icon} size={16} /> : null}
    </>
  );

  if (external || download) {
    return (
      <a
        data-id={dataId}
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link data-id={dataId} href={href} className={className}>
      {content}
    </Link>
  );
}
